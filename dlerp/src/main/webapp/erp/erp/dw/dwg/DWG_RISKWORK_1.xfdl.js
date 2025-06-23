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
            this.set_titletext("작업허가서상세");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,1020);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWGPR_RISKWORK_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DWGPR_RISKWORK_SAVE</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DWGPR_RISKWORK_CHECK_SELECT</Col></Row><Row><Col id=\"TARGET\">save1</Col><Col id=\"SP\">DWGPR_RISKWORK_CHECK_SAVE</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DWGPR_RISKWORK_FILE_SELECT</Col></Row><Row><Col id=\"TARGET\">save2</Col><Col id=\"SP\">DWGPR_RISKWORK_FILE_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_WRK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WRITER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GONGJONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WORKAREA\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORKTIME_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORKTIME_TO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_WORKER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MANAGER_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WORKDEVICE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WORKCONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WORKSAFE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_APPROVALGONGSA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_APPROVALSAFER\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORKTIMEHHMM_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORKTIMEHHMM_TO\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("1");
            obj.getSetter("FitToContents").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("readonly").set("true");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_SEQ","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("문서번호");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_SEQ","staNO_SEQ:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBgRISK_LABEL2","0","99","897","65",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_font("24px/normal \"Arial\"");
            obj.set_textAlign("center");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR","0","staBgRISK_LABEL2:-1","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("협력업체");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_VENDOR","staDS_VENDOR:-1","staBgRISK_LABEL2:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_VENDOR","staDS_VENDOR:4","staBgRISK_LABEL2:4","210","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_GONGJONG","0","staDS_VENDOR:-1","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("작업공종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_GONGJONG","staDS_GONGJONG:-1","staBgDS_VENDOR:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_GONGJONG","staDS_GONGJONG:4","staBgDS_VENDOR:4","210","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_autoselect("true");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_WORK_FR","0","staDS_GONGJONG:-1","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("시작일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_WORK_FR","staDT_WORK_FR:-1","staBgDS_GONGJONG:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_WORK_TO","0","staDT_WORK_FR:-1","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("종료일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_WORK_TO","staDT_WORK_TO:-1","staBgDT_WORK_FR:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_WRITER","staBgDS_VENDOR:-1","staBgRISK_LABEL2:-1","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_WRITER","staDS_WRITER:-1","staBgRISK_LABEL2:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_MANAGER","0","staDT_WORK_TO:-1","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("작업담당자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_MANAGER","staDS_MANAGER:-1","staBgDT_WORK_TO:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_MANAGER_TEL","0","staDS_MANAGER:-1","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_MANAGER_TEL","staDS_MANAGER_TEL:-1","staBgDS_MANAGER:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_WORKCONTENT","0","staDS_MANAGER_TEL:-1","150","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("주요 작업내용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_WORKCONTENT","staDS_WORKCONTENT:-1","staBgDS_MANAGER_TEL:-1","748","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_WORKSAFE","0","staDS_WORKCONTENT:-1","150","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("안전 조치사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_WORKSAFE","staDS_WORKSAFE:-1","staBgDS_WORKCONTENT:-1","748","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_APPROVAL","0","staDS_WORKSAFE:-1","120","80",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("검토의견");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_WORKAREA","staBgDS_GONGJONG:-1","staBgDS_WRITER:-1","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("작업장소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_WORKAREA","staDS_WORKAREA:-1","staBgDS_WRITER:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_WORKER","staBgDT_WORK_FR:-1","staDS_WORKAREA:-1","150","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("작업인원");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgNO_WORKER","staNO_WORKER:-1","staBgDS_WORKAREA:-1","300","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_WORKER","staNO_WORKER:4","staBgDS_WORKAREA:4","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_WORKDEVICE","staBgDT_WORK_TO:-1","staNO_WORKER:-1","150","88",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("사용장비");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_WORKDEVICE","staDS_WORKDEVICE:-1","staBgNO_WORKER:-1","300","88",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_WORKDEVICE","staDS_WORKDEVICE:4","staBgNO_WORKER:4","290","78",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_autoselect("true");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_WRITER","staDS_WRITER:4","staBgRISK_LABEL2:4","210","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_autoselect("false");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_WORKAREA","staDS_WORKAREA:4","staBgDS_WRITER:4","210","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_autoselect("false");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_MANAGER","staDS_MANAGER:4","staBgDT_WORK_TO:4","210","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_autoselect("false");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_WORKCONTENT","staDS_WORKCONTENT:4","staBgDS_MANAGER_TEL:4","738","50",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_autoselect("false");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_WORKSAFE","staDS_WORKSAFE:4","staBgDS_WORKCONTENT:4","738","50",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_autoselect("false");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_APPROVALGONGSA","staDS_APPROVAL:-1","staDS_WORKSAFE:-1","90","40",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_text("공사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_APPROVALSAFER","staDS_APPROVAL:-1","staDS_APPROVALGONGSA:-1","90","40",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_text("안전");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_APPROVALGONGSA","staDS_APPROVALGONGSA:-1","staBgDS_WORKSAFE:-1","689","40",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_APPROVALSAFER","staDS_APPROVALSAFER:-1","staBgDS_APPROVALGONGSA:-1","689","40",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgRISK_LABEL1","0","0","897","100",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text(" ■ 작업 허가서 작성 절차\r\n     1. 작업 실시 전 협력업체 담당자 작성(음영부분)\r\n     2. 작성 후 공사팀(관리감독자) 제출\r\n     3. 공사팀 점검확인 및 검토의견 작성 후 안전팀 제출\r\n     4. 안전팀 첨부자료 및 검토의견 작성 후 본사 제출\r\n       ( ※ P.T.W 중 10개 항목 중 본사보고 7개 항목해당)");
            obj.set_font("11px/normal \"Arial\"");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_APPROVALGONGSA","staDS_APPROVALGONGSA:4","staBgDS_WORKSAFE:4","679","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_autoselect("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_APPROVALSAFER","staDS_APPROVALSAFER:4","staBgDS_APPROVALGONGSA:4","679","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_autoselect("false");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_WORK_FR","staDT_WORK_FR:4","staBgDS_GONGJONG:4","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("false");
            obj.set_value("20210101");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtHM_WORK_FR","ctclDT_WORK_FR:4","staBgDS_GONGJONG:4","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_autoselect("false");
            obj.set_maskchar("-");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("ctxtHM_WORK_TO","268","260","50","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_format("##:##");
            obj.set_type("string");
            obj.set_autoselect("false");
            obj.set_maskchar("-");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_WORK_TO","staDT_WORK_TO:4","260","110","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("false");
            obj.set_value("20210101");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","ctxtNO_WORKER:5","staBgDS_WORKAREA:4","25","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_text("명");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_MANAGER_TEL","staDS_MANAGER_TEL:4","staBgDS_MANAGER:4","210","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_autoselect("false");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staBgDS_APPROVALSAFER:10","898","250",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","objGrid:10","898","150",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_enableevent("true");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctxtDS_VENDOR","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ctxtDS_WRITER","value","dsList","DS_WRITER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ctxtDS_GONGJONG","value","dsList","DS_GONGJONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctxtNO_SEQ","value","dsSearch","NO_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ctxtDS_WORKAREA","value","dsList","DS_WORKAREA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ctclDT_WORK_FR","value","dsList","DT_WORKTIME_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ctclDT_WORK_TO","value","dsList","DT_WORKTIME_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ctxtHM_WORK_FR","value","dsList","DT_WORKTIMEHHMM_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.ctxtHM_WORK_TO","value","dsList","DT_WORKTIMEHHMM_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ctxtNO_WORKER","value","dsList","NO_WORKER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.ctxtDS_MANAGER_TEL","value","dsList","DS_MANAGER_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.ctxtDS_APPROVALGONGSA","value","dsList","DS_APPROVALGONGSA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.ctxtDS_APPROVALSAFER","value","dsList","DS_APPROVALSAFER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.staBgRISK_LABEL2","value","dsList","TY_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.staBgRISK_LABEL2","text","dsList","DS_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.ctxtDS_WORKCONTENT","value","dsList","DS_WORKCONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.ctxtDS_WORKSAFE","value","dsList","DS_WORKSAFE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWG_RISKWORK_1.xfdl", function() {
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


        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().NO_SEQ)) {

        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.dsSearch.setColumn(0, "DS_SITE", this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "NO_SEQ", this.getOwnerFrame().NO_SEQ);
        		this.dsList.setColumn(0, "TY_WORK", this.getOwnerFrame().TY_WORK);
        		this.dsList.setColumn(0, "DS_WORK", this.getOwnerFrame().DS_WORK);
        		//this.divData.form.staBgRISK_LABEL2.set_text(this.getOwnerFrame().TY_WORK);


        		this.fnSelect();

        	}

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
        	this.btnAPP = this.gfnFormButtonAdd("btnAPP", "fnAPP"); 	// 전자결재
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE    = this.divSearch.form.ccfCD_SITE;
        	this.ctxtNO_SEQ    = this.divSearch.form.ctxtNO_SEQ;

        	this.ctxtDS_VENDOR         = this.divData.form.ctxtDS_VENDOR;
        	this.ctxtDS_WRITER         = this.divData.form.ctxtDS_WRITER;
        	this.ctxtDS_GONGJONG       = this.divData.form.ctxtDS_GONGJONG;
        	this.ctxtDS_WORKAREA       = this.divData.form.ctxtDS_WORKAREA;
        	this.ctclDT_WORK_FR        = this.divData.form.ctclDT_WORK_FR;
        	this.ctclDT_WORK_TO        = this.divData.form.ctclDT_WORK_TO;
        	this.ctxtHM_WORK_FR        = this.divData.form.ctxtHM_WORK_FR;
        	this.ctxtHM_WORK_TO        = this.divData.form.ctxtHM_WORK_TO;
        	this.ctxtNO_WORKER         = this.divData.form.ctxtNO_WORKER;
        	this.ctxtDS_MANAGER_TEL    = this.divData.form.ctxtDS_MANAGER_TEL;
        	this.ctxtDS_APPROVALGONGSA = this.divData.form.ctxtDS_APPROVALGONGSA;
        	this.ctxtDS_APPROVALSAFER  = this.divData.form.ctxtDS_APPROVALSAFER;

        	this.dxGrid = this.divData.form.objGrid;
        	this.dxGrid1 = this.divData.form.objGrid1;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.gfnGridInit(this.dxGrid, this.dsList1, "DW", "DWG_RISKWORK_CHECK");
        	this.gfnGridInit(this.dxGrid1, this.dsList2, "DW", "DWG_RISKWORK_FILE");

        	// BUTTON, BUTTON-IN 처리
        	this.dxGrid1.ExpandUp = "fnGrid_ExpandUp";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {


        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_WRK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_SEQ", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("TY_WORK", "string");
        	this.dsSave.addColumn("DS_WRITER", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("DS_VENDOR", "string");
        	this.dsSave.addColumn("DS_GONGJONG", "string");
        	this.dsSave.addColumn("DS_WORKAREA", "string");
        	this.dsSave.addColumn("DT_WORKTIME_FR", "string");
        	this.dsSave.addColumn("DT_WORKTIME_TO", "string");
        	this.dsSave.addColumn("DT_WORKTIMEHHMM_FR", "string");
        	this.dsSave.addColumn("DT_WORKTIMEHHMM_TO", "string");
        	this.dsSave.addColumn("NO_WORKER", "int");
        	this.dsSave.addColumn("DS_MANAGER", "string");
        	this.dsSave.addColumn("DS_MANAGER_TEL", "string");
        	this.dsSave.addColumn("DS_WORKDEVICE", "string");
        	this.dsSave.addColumn("DS_WORKCONTENT", "string");
        	this.dsSave.addColumn("DS_WORKSAFE", "string");
        	this.dsSave.addColumn("DS_APPROVALGONGSA", "string");
        	this.dsSave.addColumn("DS_APPROVALSAFER", "string");
        	this.dsSave.addColumn("TY_APPROVAL", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsSave1 = new Dataset();
        	this.dsSave1.addColumn("TY_WRK", "string");
        	this.dsSave1.addColumn("CD_SITE", "string");
        	this.dsSave1.addColumn("TY_WORK", "string");
        	this.dsSave1.addColumn("NO_SEQ", "int");
        	this.dsSave1.addColumn("NO_CHKLIST", "string");
        	this.dsSave1.addColumn("TY_CHK", "string");
        	//this.dsSave1.addColumn("AUTH_CD_CORP", "string");
        	//this.dsSave1.addColumn("AUTH_ID_USER", "string");

        	this.dsSave2 = new Dataset();
        	this.dsSave2.addColumn("TY_WRK", "string");
        	this.dsSave2.addColumn("CD_SITE", "string");
        	this.dsSave2.addColumn("TY_WORK", "string");
        	this.dsSave2.addColumn("NO_SEQ", "int");
        	this.dsSave2.addColumn("NO_FILELIST", "string");
        	this.dsSave2.addColumn("DS_FILE", "string");
        	//this.dsSave2.addColumn("AUTH_CD_CORP", "string");
        	//this.dsSave2.addColumn("AUTH_ID_USER", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_WRK", "Q");
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select1=dsSelect select2=dsSelect";
        	var outData     = "dsList=select0 dsList1=select10 dsList2=select20";
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
         *	입력 버튼
         */
        this.fnAdd = function() {
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnsetformstatus(this, "D");
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크``
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (!this.gfnGridValidate(this.dxGrid1)) return;

        	this.dxGrid.updateToDataset();
        	this.dxGrid1.updateToDataset();

        	var arr_in = [];

        	this.dsSave.clearData();

        	var flag = this.gfnGetFormStatus(this);
        	switch(flag) {
        		case "I":
        		case "U":
        			var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "TY_WRK", flag);
        			this.dsSave.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        			this.dsSave.setColumn(nrow, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        			this.dsSave.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        			this.dsSave.setColumn(nrow, "TY_WORK", this.dsList.getColumn(0, "TY_WORK"));
        			this.dsSave.setColumn(nrow, "DS_WRITER", this.dsList.getColumn(0, "DS_WRITER"));
        			this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(0, "CD_VENDOR"));
        			this.dsSave.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(0, "DS_VENDOR"));
        			this.dsSave.setColumn(nrow, "DS_GONGJONG", this.dsList.getColumn(0, "DS_GONGJONG"));
        			this.dsSave.setColumn(nrow, "DS_WORKAREA", this.dsList.getColumn(0, "DS_WORKAREA"));
        			this.dsSave.setColumn(nrow, "DT_WORKTIME_FR", this.dsList.getColumn(0, "DT_WORKTIME_FR"));
        			this.dsSave.setColumn(nrow, "DT_WORKTIME_TO", this.dsList.getColumn(0, "DT_WORKTIME_TO"));
        			this.dsSave.setColumn(nrow, "DT_WORKTIMEHHMM_FR", this.dsList.getColumn(0, "DT_WORKTIMEHHMM_FR"));
        			this.dsSave.setColumn(nrow, "DT_WORKTIMEHHMM_TO", this.dsList.getColumn(0, "DT_WORKTIMEHHMM_TO"));
        			this.dsSave.setColumn(nrow, "NO_WORKER", this.dsList.getColumn(0, "NO_WORKER"));
        			this.dsSave.setColumn(nrow, "DS_MANAGER", this.dsList.getColumn(0, "DS_MANAGER"));
        			this.dsSave.setColumn(nrow, "DS_MANAGER_TEL", this.dsList.getColumn(0, "DS_MANAGER_TEL"));
        			this.dsSave.setColumn(nrow, "DS_WORKDEVICE", this.dsList.getColumn(0, "DS_WORKDEVICE"));
        			this.dsSave.setColumn(nrow, "DS_WORKCONTENT", this.dsList.getColumn(0, "DS_WORKCONTENT"));
        			this.dsSave.setColumn(nrow, "DS_WORKSAFE", this.dsList.getColumn(0, "DS_WORKSAFE"));
        			this.dsSave.setColumn(nrow, "DS_APPROVALGONGSA", this.dsList.getColumn(0, "DS_APPROVALGONGSA"));
        			this.dsSave.setColumn(nrow, "DS_APPROVALSAFER", this.dsList.getColumn(0, "DS_APPROVALSAFER"));
        			this.dsSave.setColumn(nrow, "TY_APPROVAL", this.dsList.getColumn(0, "TY_APPROVAL"));
        			this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;


        	}

        	if(this.dsSave.rowcount > 0) {
        		arr_in.push("save=dsSave");
        	}

        	// save SP 한개로 사용하는 경우
        	this.dsSave1.clearData();

        	for (var i = 0; i < this.dsList1.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList1, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave1.addRow();
        				this.dsSave1.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave1.setColumn(nrow, "CD_SITE", this.dsList1.getColumn(i, "CD_SITE"));
        				this.dsSave1.setColumn(nrow, "TY_WORK", this.dsList1.getColumn(i, "TY_WORK"));
        				this.dsSave1.setColumn(nrow, "NO_SEQ", this.dsList1.getColumn(i, "NO_SEQ"));
        				this.dsSave1.setColumn(nrow, "NO_CHKLIST", this.dsList1.getColumn(i, "NO_CHKLIST"));
        				this.dsSave1.setColumn(nrow, "TY_CHK", this.dsList1.getColumn(i, "TY_CHK"));
        				//this.dsSave1.setColumn(nrow, "AUTH_CD_CORP", this.dsList1.getColumn(i, "AUTH_CD_CORP"));
        				//this.dsSave1.setColumn(nrow, "AUTH_ID_USER", this.dsList1.getColumn(i, "AUTH_ID_USER"));
        				break;
        		}
        	}

        	if(this.dsSave1.rowcount > 0) {
        		arr_in.push("save1=dsSave1");
        	}

        	// save SP 한개로 사용하는 경우
        	this.dsSave2.clearData();

        	for (var i = 0; i < this.dsList2.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList2, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave2.addRow();
        				this.dsSave2.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave2.setColumn(nrow, "CD_SITE", this.dsList2.getColumn(i, "CD_SITE"));
        				this.dsSave2.setColumn(nrow, "TY_WORK", this.dsList2.getColumn(i, "TY_WORK"));
        				this.dsSave2.setColumn(nrow, "NO_SEQ", this.dsList2.getColumn(i, "NO_SEQ"));
        				this.dsSave2.setColumn(nrow, "NO_FILELIST", this.dsList2.getColumn(i, "NO_FILELIST"));
        				this.dsSave2.setColumn(nrow, "DS_FILE", this.dsList2.getColumn(i, "DS_FILE"));
        				//this.dsSave2.setColumn(nrow, "AUTH_CD_CORP", this.dsList2.getColumn(i, "AUTH_CD_CORP"));
        				//this.dsSave2.setColumn(nrow, "AUTH_ID_USER", this.dsList2.getColumn(i, "AUTH_ID_USER"));
        				break;
        		}
        	}

        	if(this.dsSave2.rowcount > 0) {
        		arr_in.push("save2=dsSave2");
        	}

        	if (this.dsSave.rowcount == 0 && this.dsSave1.rowcount == 0 && this.dsSave2.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	//var inData      = "save=dsSave";
        	var inData      = arr_in.join(' ');
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
         /*
        this.fnSelectValidate = function() {
        	var validate = true;
        	return validate;
        };

        this.fnSaveValidate = function() {
        	var validate = true;
        	return validate;
        }
        */
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		//this.gfnGridAfterSelect(this.dxGrid);

        	}
        	else if(svcID == "save") {
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

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_ExpandUp = function(obj, e) {

        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if(colnm == "DS_FILE") {
        		// 최초 작성시엔 NO_SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        		// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!
        		if(this.gfnGetFlag(this.dsList2, e.row) == "I"){
        			this.gfnAlert("저장 후 파일첨부 진행.");
        			return false;
        		}

        		var fileManager = {};
        		fileManager.CD_GUBUN = "DWS1";
        		fileManager.CD_DIR = [this.dsList2.getColumn(e.row, "CD_SITE"), this.dsList2.getColumn(e.row, "NO_SEQ"), this.dsList2.getColumn(e.row, "NO_FILELIST")];
        		fileManager.IS_READONLY = false;
        		this.gfnFileManager(fileManager, "fnFileCallback");
        	}
        }

        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수

        	// 변경시 조회를 다시 하거나
        // 	if(val.IsChange == true) {
        // 		this.FormBtns.Select.click();
        // 	}

        	// 파일개수를 다시 셋팅
        	this.dsList2.set_enableevent(false);
        	if(val.Cnt == 0) {
        		this.dsList2.setColumn(this.dsList2.rowposition, "DS_FILE", "첨부");
        	} else {
        		this.dsList2.setColumn(this.dsList2.rowposition, "DS_FILE", "첨부(" + val.Cnt + ")");
        	}
        	this.dsList2.set_enableevent(true);
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화

        	}
        };


        this.fnAPP = function(obj,e) {

        	var param = {};
        	param.V1 = this.dsSearch.getColumn(0, "CD_SITE");
        	param.V2 = this.dsSearch.getColumn(0, "NO_SEQ");
        	param.V3 = "";
        	param.V4 = "";
        	param.ID_AP = this.dsList.getColumn(0, "NO_ELAPDOC");	// 전자결재문서번호
        	param.DS_ETITLE = "개인별실적등록";

        	this.gfnFormOpen("DWG", "DWG_RISKWORK_1_APP", "fnAprvDialogCallback", param, 1200, 700);

        };


         this.fnAprvDialogCallback = function(svcID, value) {
        	// 리턴값
        	//if(value){
        		// 결재완료, 결재취소, 결재상신 후에는 재조회를 한다
        		this.FormBtns.Select.click();
        	//}
        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staBgRISK_LABEL1.addEventHandler("onclick",this.divData_staBgDS_SCRIVENER00_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsList1.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsList2.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DWG_RISKWORK_1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
