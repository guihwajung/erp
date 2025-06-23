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
            this.set_titletext("어학시험 응시료");
            this.getSetter("maxwidth").set("690");
            this.getSetter("maxheight").set("440");
            if (Form == this.constructor)
            {
                this._setFormPosition(640,380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_EDU\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EDU\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EDUSUB\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EDUSUB\" type=\"STRING\" size=\"256\"/><Column id=\"FR_EDUCATION\" type=\"STRING\" size=\"256\"/><Column id=\"TO_EDUCATION\" type=\"STRING\" size=\"256\"/><Column id=\"TT_EDUCATION\" type=\"FLOAT\" size=\"256\"/><Column id=\"CD_EDU_INOUT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EDU_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EDU_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EDU_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EDU_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EDUCATION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EDU_ORGAN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EDU_PLACE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DOCUMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EFFECT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LANGUAGE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EXAM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EXAM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LICENSE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LICENSE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_LICENSE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ORGAN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_LICENSE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_EDUCATION\" type=\"bigdecimal\" size=\"256\"/><Column id=\"YN_RETURN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_RETURN\" type=\"bigdecimal\" size=\"256\"/><Column id=\"AM_SUPPORT\" type=\"bigdecimal\" size=\"256\"/><Column id=\"TY_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BANK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APRV\" type=\"int\" size=\"256\"/><Column id=\"ST_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DOC\" type=\"STRING\" size=\"256\"/><Column id=\"ID_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"DT_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EDUCATION\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_BE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ISSUE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_ACCOUNT\" type=\"bigdecimal\" size=\"256\"/><Column id=\"AM_VAT\" type=\"bigdecimal\" size=\"256\"/><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DUTY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DUTY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EMPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_DOC_Q\" type=\"STRING\" size=\"256\"/><Column id=\"BTN_INIT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_EDU_REQ_SAVE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DABPR_EDU_REQ_DELETE</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_EDU_REQ_SELECT</Col></Row><Row><Col id=\"TARGET\">insertTarget</Col><Col id=\"SP\">DABPR_EDU_REQTARGET_INSERT</Col></Row><Row><Col id=\"TARGET\">deleteTarget</Col><Col id=\"SP\">DABPR_EDU_REQTARGET_DELETE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">aprv_execute</Col><Col id=\"SP\">DABPR_EDU_REQ_APRV_EXCUTE</Col></Row><Row><Col id=\"TARGET\">select_Limit</Col><Col id=\"SP\">DABPR_EDU_REQ_APRV_VALIDATE</Col></Row><Row><Col id=\"TARGET\">updateTarget</Col><Col id=\"SP\">DABPR_EDU_REQTARGET_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">ID_SABUN</Col><Col id=\"DS_FIELD\">사번</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTarget", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NO_EDU\" type=\"STRING\" size=\"256\"/><Column id=\"FR_EDUCATION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLANGUAGE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SUBCODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SUBCODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLimit", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle1","0","0","359","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("어학시험 응시료");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","staTitle1:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","79","0",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_00_00","89","staBg:57",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staFR_EDUCATION","0","87","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("시험일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg17_00","79","230",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0","0","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablelabelTE");
            obj.set_text("교육신청자 ");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_00","89","staBg:28",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","79","116",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00","89","29",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divGrid","60","staBg:165",null,"60","70",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("div00");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfID_SABUN_TARGET","120","14","247","20",null,null,null,null,null,null,this.divData.form.divGrid.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_MUITY");
            obj.getSetter("CDTextWidth").set("90");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("AutoSet").set("false");
            obj.set_visible("false");
            obj.set_tabstop("false");
            this.divData.form.divGrid.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","-52",null,"30","3",null,null,null,null,null,this.divData.form.divGrid.form);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj._setContents("");
            this.divData.form.divGrid.addChild(obj.name, obj);

            obj = new Button("btnRemove",null,"5","60","20","5",null,null,null,null,null,this.divData.form.divGrid.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.divData.form.divGrid.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"5","60","20","btnRemove:5",null,null,null,null,null,this.divData.form.divGrid.form);
            obj.set_taborder("2");
            obj.set_text("추가");
            obj.set_visible("false");
            this.divData.form.divGrid.addChild(obj.name, obj);

            obj = new Static("staDesc01","480","6",null,"20","btnAdd:10",null,null,null,null,null,this.divData.form.divGrid.form);
            obj.set_taborder("4");
            obj.set_text("명");
            obj.set_visible("false");
            this.divData.form.divGrid.addChild(obj.name, obj);

            obj = new MaskEdit("mskCNT","425","6",null,"20","staDesc01:8",null,null,null,null,null,this.divData.form.divGrid.form);
            obj.set_taborder("3");
            obj.set_format("#,##0");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            obj.set_visible("false");
            this.divData.form.divGrid.addChild(obj.name, obj);

            obj = new Static("staDesc02","396","6",null,"20","mskCNT:9",null,null,null,null,null,this.divData.form.divGrid.form);
            obj.set_taborder("5");
            obj.set_text("총");
            obj.set_visible("false");
            this.divData.form.divGrid.addChild(obj.name, obj);

            obj = new Static("staBg13","79","159",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg17","79","201",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_EDUCATION","0","159","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablelabelTE");
            obj.set_text("응시료");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EDUCATION","0","staID_SABUN:86","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("점수(총점)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfID_SABUN","staID_SABUN:4","5","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("90");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("AutoSet").set("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_TOTAL","staDS_EDUCATION:4","cfID_SABUN:96",null,"20","420",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_EDUCATION","staAM_EDUCATION:3","164","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDesc13_01","mskAM_EDUCATION:2","163","140","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("원  (VAT 포함)");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staFile","0","201","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablelabelTE");
            obj.set_text("교육관련문서첨부");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staFileUpload","staFile:8","205","146","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("파일수 :  0 개");
            obj.set_cssclass("sta_WF_notice");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnATTACH","staFileUpload:18","206","73","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("파일첨부");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","btnATTACH:8","207",null,"18","30",null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("※ 결제 영수증  첨부");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_SUPPORT","mskAM_EDUCATION:230","164","122","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_enable("false");
            obj.set_readonly("false");
            obj.set_tabstop("false");
            obj.set_visible("true");
            obj.set_format("#,##0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta","0","staID_SABUN:-1","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("어학종류");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_LICENSE","0","staID_SABUN:28","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("시험종류");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclFR_EDUCATION","staFR_EDUCATION:4","92","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_EXAM","staCD_LICENSE:4","63","300","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODEUP");
            obj.getSetter("CDTextWidth").set("90");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("AutoSet").set("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staFile2","0","230","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_text("성적표 첨부");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staFileUpload2","138","235","146","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("파일수 :  0 개");
            obj.set_cssclass("sta_WF_notice");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnATTACH2","302","236","73","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("파일첨부");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01_00","staFile2:253","237",null,"18","30",null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("※ 성적표 사본 첨부");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EDUCATION00","310","116","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("등급");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_LEVEL","444","121",null,"20","9",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboCD_LANGUAGE","134","34","246","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_innerdataset("dsLANGUAGE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_enable("false");
            obj.set_tabstop("true");
            obj.set_readonly("false");
            obj.set_tooltiptype("default");
            obj.set_text("영어");
            obj.set_value("01");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_EDUCATION00","380","159","130","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablelabelT");
            obj.set_text("교육비지원금액");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","98",null,"310","26",null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCEL",null,"0","73","26","11",null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("2");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnSAVE","140","0","79","26",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("임시저장");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnAPRV00",null,"7","90","24","5",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("결재문서조회");
            this.addChild(obj.name, obj);

            obj = new Button("btnAPRV",null,"7","90","24","btnAPRV00:5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("결재상신");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_00","20","294",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("※ 어학시험응시료는 1회/年 만 신청 가능합니다. (사내특별어학시험 포함)");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","divData.form.cfID_SABUN.form.CDTextBox","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.cfID_SABUN.form.DSTextBox","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.txtNO_TOTAL","value","dsList","NO_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.mskAM_EDUCATION","value","dsList","AM_EDUCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.mskAM_SUPPORT","value","dsList","AM_SUPPORT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.tclFR_EDUCATION","value","dsList","FR_EDUCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.cfCD_EXAM.form.CDTextBox","value","dsList","CD_EXAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.cfCD_EXAM.form.DSTextBox","value","dsList","DS_EXAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtDS_LEVEL","value","dsList","DS_LEVEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.cboCD_LANGUAGE","value","dsList","CD_LANGUAGE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_EDU_REQD.xfdl", function() {
        this.objApp = this.gfnGetApplication();


        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	this.fnSetCombo();
        	this.fnSetInit();

        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        };

        //컨트롤 활성화 처리
        this.fnSetEnable = function ()
        {
        	this.cfID_SABUN.set_enable(false);
        	var stAprv = this.dsList.getColumn(0, "ST_APRV");

        	if (stAprv == "1" || stAprv == "2" || stAprv == "3" || stAprv == "4")
        	{
        		this.btnSAVE.set_enable(false);
        		this.btnAPRV.set_enable(false);
        		this.btnCANCEL.set_text("취소");
        		this.gfnSetAllEnable(this.divData , false);

        	} else if(this.dsList.getColumn(0, "TY_WRK") == "I" || this.gfnIsNull(this.dsList.getColumn(0, "NO_EDU"))) {
        		this.btnSAVE.set_enable(true);
        		this.btnAPRV.set_enable(true);
        		this.btnCANCEL.set_text("취소");
        		this.gfnSetAllEnable(this.divData , true);
        	} else {
        		this.btnSAVE.set_enable(true);
        		this.btnAPRV.set_enable(true);
        		this.btnCANCEL.set_text("삭제");

        		this.gfnSetAllEnable(this.divData , true);
        	}

        	this.btnATTACH.set_enable(true);
        	this.btnATTACH2.set_enable(true);
        	this.cboCD_LANGUAGE.set_enable(false);
        	this.mskAM_SUPPORT.set_enable(false);

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.cfID_SABUN    = this.divData.form.cfID_SABUN;
        	this.txtDS_EDUCATION = this.divData.form.txtDS_EDUCATION;
        	this.tclFR_EDUCATION = this.divData.form.tclFR_EDUCATION;
        	this.tclTO_EDUCATION = this.divData.form.tclTO_EDUCATION;
        	this.txtTT_EDUCATION  = this.divData.form.txtTT_EDUCATION;
        	this.txtDS_EDU_PLACE = this.divData.form.txtDS_EDU_PLACE;
        	this.cfCD_EXAM = this.divData.form.cfCD_EXAM;

        	this.mskAM_EDUCATION     = this.divData.form.mskAM_EDUCATION;
        	this.mskAM_SUPPORT = this.divData.form.mskAM_SUPPORT;

        	this.cfID_SABUN_TARGET = this.divData.form.divGrid.form.cfID_SABUN_TARGET;
        	this.mskCNT = this.divData.form.divGrid.form.mskCNT;
        	this.cboCD_LANGUAGE = this.divData.form.cboCD_LANGUAGE;

        	this.staFile2 = this.divData.form.staFile2;
        	this.staFileUpload = this.divData.form.staFileUpload;
        	this.staFileUpload2 = this.divData.form.staFileUpload2;

        	this.btnAdd     = this.divData.form.divGrid.form.btnAdd;
        	this.btnRemove     = this.divData.form.divGrid.form.btnRemove;

        	this.btnATTACH     = this.divData.form.btnATTACH;
        	this.btnATTACH2     = this.divData.form.btnATTACH2;
        	this.btnSAVE       = this.divBtns.form.btnSAVE;
        	this.btnCANCEL     = this.divBtns.form.btnCANCEL;

        	this.FileManager = {};

        	this.dxGrid = this.divData.form.divGrid.form.objGrid;

        	this.FileManager.CD_GUBUN = "DAB4";
        	this.FileManager.IS_READONLY = false;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//코드파인드

        	this.gfnGridInit(this.dxGrid, this.dsTarget, "DA", "DAB_EDUTARGET");
        	this.dxGrid.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGrid_AfterCDTextChanged";
        	this.dxGrid.setFormatRowProperty(0, "size", 25);
        	this.dxGrid.setFormatRowProperty(1, "size", 23);

        	this.cfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";

        	this.cfID_SABUN_TARGET.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfID_SABUN_TARGET.AfterCDTextChanged     = "fnAfterCDTextChanged";

        	this.cfCD_EXAM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_EXAM.AfterCDTextChanged     = "fnAfterCDTextChanged";
        };

        // 부모창에서 받아온것 셋팅
        this.fnSetInit = function() {

        	this.cfID_SABUN.form.set_readonly(true);
        	var frame = this.getOwnerFrame();
        	if(frame.GR_SEARCH =="1"){
        		this.cfID_SABUN.form.set_readonly(false);
        	}

        	this.dsSearch.setColumn(0, "CD_CORP", frame.CD_CORP);
        	this.dsSearch.setColumn(0, "NO_ID", frame.NO_ID);
        	this.dsSearch.setColumn(0, "NO_EDU", frame.NO_EDU);
        	this.dsSearch.setColumn(0, "FR_EDUCATION", frame.FR_EDUCATION);
        	this.dsSearch.setColumn(0, "CD_REPORT", frame.CD_REPORT);
        	this.fnSelect();

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_EDU", "string");
        	this.dsSelect.addColumn("NO_ID", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("FR_EDUCATION", "string");
        	this.dsSelect.addColumn("CD_REPORT", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("TY_AUTH", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("NO_EDU", "string");
        	this.dsSave.addColumn("NO_ID", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("CD_REPORT", "string");
        	this.dsSave.addColumn("CD_EDU", "string");
        	this.dsSave.addColumn("CD_EDUSUB", "string");
        	this.dsSave.addColumn("FR_EDUCATION", "string");
        	this.dsSave.addColumn("TO_EDUCATION", "string");
        	this.dsSave.addColumn("TT_EDUCATION", "bigint");
        	this.dsSave.addColumn("CD_EDU_INOUT", "string");
        	this.dsSave.addColumn("CD_EDU_TYPE", "string");
        	this.dsSave.addColumn("CD_EDU_GUBUN", "string");
        	this.dsSave.addColumn("DS_EDUCATION", "string");
        	this.dsSave.addColumn("DS_EDU_ORGAN", "string");
        	this.dsSave.addColumn("DS_EDU_PLACE", "string");
        	this.dsSave.addColumn("DS_DOCUMENT", "string");
        	this.dsSave.addColumn("DS_EFFECT", "string");
        	this.dsSave.addColumn("DS_RESULT", "string");
        	this.dsSave.addColumn("CD_LANGUAGE", "string");
        	this.dsSave.addColumn("CD_EXAM", "string");
        	this.dsSave.addColumn("NO_TOTAL", "string");
        	this.dsSave.addColumn("DS_LEVEL", "string");
        	this.dsSave.addColumn("CD_LICENSE", "string");
        	this.dsSave.addColumn("NO_LICENSE", "string");
        	this.dsSave.addColumn("DS_LICENSE_ORGAN", "string");
        	this.dsSave.addColumn("DT_LICENSE", "string");
        	this.dsSave.addColumn("AM_EDUCATION", "bigint");
        	this.dsSave.addColumn("YN_RETURN", "string");
        	this.dsSave.addColumn("AM_RETURN", "bigint");
        	this.dsSave.addColumn("AM_SUPPORT", "bigint");
        	this.dsSave.addColumn("TY_PAY", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("CD_BANK", "string");
        	this.dsSave.addColumn("NO_ACCOUNT", "string");
        	this.dsSave.addColumn("DS_ACCOUNT", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("YN_EDUCATION", "string");
        	this.dsSave.addColumn("DT_ACCOUNT", "string");
        	this.dsSave.addColumn("CD_CURR", "string");
        	this.dsSave.addColumn("AM_EXEC", "bigint");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_EDU", "string");
        	this.dsDelete.addColumn("NO_ID", "string");
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("ID_USER", "string");

        	this.dsInsertTarget = new Dataset();
        	this.dsInsertTarget.addColumn("NO_EDU", "string");
        	this.dsInsertTarget.addColumn("NO_ID", "string");
        	this.dsInsertTarget.addColumn("CD_CORP", "string");
        	this.dsInsertTarget.addColumn("CD_REPORT", "string");
        	this.dsInsertTarget.addColumn("CD_EDU", "string");
        	this.dsInsertTarget.addColumn("CD_EDUSUB", "string");
        	this.dsInsertTarget.addColumn("FR_EDUCATION", "string");
        	this.dsInsertTarget.addColumn("TO_EDUCATION", "string");
        	this.dsInsertTarget.addColumn("CD_LICENSE", "string");
        	this.dsInsertTarget.addColumn("DT_LICENSE", "string");
        	this.dsInsertTarget.addColumn("AM_EDUCATION", "bigint");
        	this.dsInsertTarget.addColumn("YN_EDUCATION", "string");
        	this.dsInsertTarget.addColumn("ID_PERSON", "bigint");
        	this.dsInsertTarget.addColumn("ID_SABUN", "string");
        	this.dsInsertTarget.addColumn("CD_DEPT", "string");
        	this.dsInsertTarget.addColumn("CD_POSITION", "string");
        	this.dsInsertTarget.addColumn("CD_DUTY", "string");
        	this.dsInsertTarget.addColumn("ID_USER", "string");

        	this.dsUpdateTarget = new Dataset();
        	this.dsUpdateTarget.addColumn("NO_EDU", "string");
        	this.dsUpdateTarget.addColumn("NO_ID", "string");
        	this.dsUpdateTarget.addColumn("CD_CORP", "string");
        	this.dsUpdateTarget.addColumn("CD_REPORT", "string");
        	this.dsUpdateTarget.addColumn("CD_EDU", "string");
        	this.dsUpdateTarget.addColumn("CD_EDUSUB", "string");
        	this.dsUpdateTarget.addColumn("FR_EDUCATION", "string");
        	this.dsUpdateTarget.addColumn("TO_EDUCATION", "string");
        	this.dsUpdateTarget.addColumn("CD_LICENSE", "string");
        	this.dsUpdateTarget.addColumn("DT_LICENSE", "string");
        	this.dsUpdateTarget.addColumn("AM_EDUCATION", "bigint");
        	this.dsUpdateTarget.addColumn("YN_EDUCATION", "string");
        	this.dsUpdateTarget.addColumn("ID_PERSON", "bigint");
        	this.dsUpdateTarget.addColumn("ID_SABUN", "string");
        	this.dsUpdateTarget.addColumn("CD_DEPT", "string");
        	this.dsUpdateTarget.addColumn("CD_POSITION", "string");
        	this.dsUpdateTarget.addColumn("CD_DUTY", "string");
        	this.dsUpdateTarget.addColumn("ID_USER", "string");

        	this.dsDeleteTarget = new Dataset();
        	this.dsDeleteTarget.addColumn("NO_EDU", "string");
        	this.dsDeleteTarget.addColumn("NO_ID", "string");
        	this.dsDeleteTarget.addColumn("CD_CORP", "string");
        	this.dsDeleteTarget.addColumn("ID_PERSON", "bigint");
        	this.dsDeleteTarget.addColumn("ID_SABUN", "string");
        	this.dsDeleteTarget.addColumn("ID_USER", "string");

        	// 결재
        	this.dsApproval = new Dataset();
        	this.dsApproval.addColumn("TY_WRK", "string");
        	this.dsApproval.addColumn("CD_CORP", "string");
        	this.dsApproval.addColumn("NO_EDU", "string");

        	this.dsApproval.addColumn("ID_APRV", "string");
        	this.dsApproval.addColumn("NO_APRV", "int");

        	// 지원한도 체크

        	this.dsSelectAprvLimit = new Dataset();
        	this.dsSelectAprvLimit.addColumn("NO_EDU", "string");
        	this.dsSelectAprvLimit.addColumn("CD_CORP", "string");
        	this.dsSelectAprvLimit.addColumn("NO_ID", "string");

        };

        /************************************************************************
         *  이벤트
         ************************************************************************/

        this.fnSelect = function()
        {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "NO_EDU", this.dsSearch.getColumn(0, "NO_EDU"));
        	this.dsSelect.setColumn(0, "NO_ID", this.dsSearch.getColumn(0, "NO_ID"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "FR_EDUCATION", this.dsSearch.getColumn(0, "FR_EDUCATION"));
        	this.dsSelect.setColumn(0, "CD_REPORT", this.dsSearch.getColumn(0, "CD_REPORT"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	//trace(" dsSelect=>" + this.dsSelect.saveXML());
        	var strSvcId    = "select";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsTarget=select1";
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

        this.fnSave = function ()
        {
        	//if(!this.gfnDataValidate(this.dsList,this.dsRequired)) return;
        	if(!this.fnSaveValidate()) return;
        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();
        	this.dsDelete.clearData();
        	this.dsInsertTarget.clearData();
        	this.dsUpdateTarget.clearData();
        	this.dsDeleteTarget.clearData();

        	this.fnSetSupport();

        	var flag = this.gfnGetFormStatus(this);
        	//trace("fnSave  flag=>" + flag);
        	switch(flag) {
        	case "I":
        	case "U":
        		var nrow = this.dsSave.addRow();
        		this.dsSave.setColumn(nrow, "NO_EDU", this.dsList.getColumn(0, "NO_EDU"));
        		this.dsSave.setColumn(nrow, "NO_ID", this.dsList.getColumn(0, "NO_ID"));
        		this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        		this.dsSave.setColumn(nrow, "CD_REPORT", this.dsList.getColumn(0, "CD_REPORT"));
        		this.dsSave.setColumn(nrow, "CD_EDU", this.dsList.getColumn(0, "CD_EDU"));
        		this.dsSave.setColumn(nrow, "CD_EDUSUB", this.dsList.getColumn(0, "CD_EDUSUB"));
        		this.dsSave.setColumn(nrow, "FR_EDUCATION", this.dsList.getColumn(0, "FR_EDUCATION"));
        		this.dsSave.setColumn(nrow, "TO_EDUCATION", this.dsList.getColumn(0, "TO_EDUCATION"));
        		this.dsSave.setColumn(nrow, "TT_EDUCATION", this.dsList.getColumn(0, "TT_EDUCATION"));
        		this.dsSave.setColumn(nrow, "CD_EDU_INOUT", this.dsList.getColumn(0, "CD_EDU_INOUT"));
        		this.dsSave.setColumn(nrow, "CD_EDU_TYPE", this.dsList.getColumn(0, "CD_EDU_TYPE"));
        		this.dsSave.setColumn(nrow, "CD_EDU_GUBUN", this.dsList.getColumn(0, "CD_EDU_GUBUN"));
        		this.dsSave.setColumn(nrow, "DS_EDUCATION", this.dsList.getColumn(0, "DS_EDUCATION"));
        		this.dsSave.setColumn(nrow, "DS_EDU_ORGAN", this.dsList.getColumn(0, "DS_EDU_ORGAN"));
        		this.dsSave.setColumn(nrow, "DS_EDU_PLACE", this.dsList.getColumn(0, "DS_EDU_PLACE"));
        		this.dsSave.setColumn(nrow, "DS_DOCUMENT", this.dsList.getColumn(0, "DS_DOCUMENT"));
        		this.dsSave.setColumn(nrow, "DS_EFFECT", this.dsList.getColumn(0, "DS_EFFECT"));
        		this.dsSave.setColumn(nrow, "DS_RESULT", this.dsList.getColumn(0, "DS_RESULT"));
        		this.dsSave.setColumn(nrow, "CD_LANGUAGE", this.dsList.getColumn(0, "CD_LANGUAGE"));
        		this.dsSave.setColumn(nrow, "CD_EXAM", this.dsList.getColumn(0, "CD_EXAM"));
        		this.dsSave.setColumn(nrow, "NO_TOTAL", this.dsList.getColumn(0, "NO_TOTAL"));
        		this.dsSave.setColumn(nrow, "DS_LEVEL", this.dsList.getColumn(0, "DS_LEVEL"));
        		this.dsSave.setColumn(nrow, "CD_LICENSE", this.dsList.getColumn(0, "CD_LICENSE"));
        		this.dsSave.setColumn(nrow, "NO_LICENSE", this.dsList.getColumn(0, "NO_LICENSE"));
        		this.dsSave.setColumn(nrow, "DS_LICENSE_ORGAN", this.dsList.getColumn(0, "DS_LICENSE_ORGAN"));
        		this.dsSave.setColumn(nrow, "DT_LICENSE", this.dsList.getColumn(0, "DT_LICENSE"));
        		this.dsSave.setColumn(nrow, "AM_EDUCATION", this.dsList.getColumn(0, "AM_EDUCATION"));
        		this.dsSave.setColumn(nrow, "YN_RETURN", this.dsList.getColumn(0, "YN_RETURN"));
        		this.dsSave.setColumn(nrow, "AM_RETURN", this.dsList.getColumn(0, "AM_RETURN"));
        		this.dsSave.setColumn(nrow, "AM_SUPPORT", this.dsList.getColumn(0, "AM_SUPPORT"));
        		this.dsSave.setColumn(nrow, "TY_PAY", "4");
        		this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(0, "ID_SABUN"));   // 사번거래처로 송금위해
        		this.dsSave.setColumn(nrow, "CD_BANK", this.dsList.getColumn(0, "CD_BANK"));
        		this.dsSave.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(0, "NO_ACCOUNT"));
        		this.dsSave.setColumn(nrow, "DS_ACCOUNT", this.dsList.getColumn(0, "DS_ACCOUNT"));
        		this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(0, "DS_REMARK"));
        		this.dsSave.setColumn(nrow, "YN_EDUCATION", this.dsList.getColumn(0, "YN_EDUCATION"));
        		this.dsSave.setColumn(nrow, "DT_ACCOUNT", this.dsList.getColumn(0, "DT_ACCOUNT"));
        		this.dsSave.setColumn(nrow, "AM_EXEC", this.dsList.getColumn(0, "AM_EXEC"));
        		this.dsSave.setColumn(nrow, "CD_CURR", "KRW");
        		this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        		var nrow = this.dsUpdateTarget.addRow();
        		this.dsUpdateTarget.setColumn(nrow, "NO_EDU", this.dsList.getColumn(0, "NO_EDU"));
        		this.dsUpdateTarget.setColumn(nrow, "NO_ID", this.dsList.getColumn(0, "NO_ID"));
        		this.dsUpdateTarget.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        		this.dsUpdateTarget.setColumn(nrow, "CD_REPORT", this.dsList.getColumn(0, "CD_REPORT"));
        		this.dsUpdateTarget.setColumn(nrow, "CD_EDU", this.dsList.getColumn(0, "CD_EDU"));
        		this.dsUpdateTarget.setColumn(nrow, "CD_EDUSUB", this.dsList.getColumn(0, "CD_EDUSUB"));
        		this.dsUpdateTarget.setColumn(nrow, "FR_EDUCATION", this.dsList.getColumn(0, "FR_EDUCATION"));
        		this.dsUpdateTarget.setColumn(nrow, "TO_EDUCATION", this.dsList.getColumn(0, "TO_EDUCATION"));
        		this.dsUpdateTarget.setColumn(nrow, "CD_LICENSE", this.dsList.getColumn(0, "CD_LICENSE"));
        		this.dsUpdateTarget.setColumn(nrow, "DT_LICENSE", this.dsList.getColumn(0, "DT_LICENSE"));
        		this.dsUpdateTarget.setColumn(nrow, "AM_EDUCATION", this.dsList.getColumn(0, "AM_EDUCATION"));
        		this.dsUpdateTarget.setColumn(nrow, "YN_EDUCATION", this.dsList.getColumn(0, "YN_EDUCATION"));
        		this.dsUpdateTarget.setColumn(nrow, "ID_PERSON", this.dsTarget.getColumn(0, "ID_PERSON"));
        		this.dsUpdateTarget.setColumn(nrow, "ID_SABUN", this.dsTarget.getColumn(0, "ID_SABUN"));
        		this.dsUpdateTarget.setColumn(nrow, "CD_DEPT", this.dsTarget.getColumn(0, "CD_DEPT"));
        		this.dsUpdateTarget.setColumn(nrow, "CD_POSITION", this.dsTarget.getColumn(0, "CD_POSITION"));
        		this.dsUpdateTarget.setColumn(nrow, "CD_DUTY", this.dsTarget.getColumn(0, "CD_DUTY"));
        		this.dsUpdateTarget.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		break;

        	case "D":
        		var nrow = this.dsDelete.addRow();
        		this.dsDelete.setColumn(nrow, "NO_EDU", this.dsList.getColumn(0, "NO_EDU"));
        		this.dsDelete.setColumn(nrow, "NO_ID", this.dsList.getColumn(0, "NO_ID"));
        		this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        		this.dsDelete.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		break;
        	default:
        	}

        	for (var i = 0; i < this.dsTarget.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsTarget, i);
        		switch(flag) {
        		case "I":
        			var nrow = this.dsInsertTarget.addRow();
        			this.dsInsertTarget.setColumn(nrow, "NO_EDU", this.dsList.getColumn(0, "NO_EDU"));
        			this.dsInsertTarget.setColumn(nrow, "NO_ID", this.dsList.getColumn(0, "NO_ID"));
        			this.dsInsertTarget.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        			this.dsInsertTarget.setColumn(nrow, "CD_REPORT", this.dsList.getColumn(0, "CD_REPORT"));
        			this.dsInsertTarget.setColumn(nrow, "CD_EDU", this.dsList.getColumn(0, "CD_EDU"));
        			this.dsInsertTarget.setColumn(nrow, "CD_EDUSUB", this.dsList.getColumn(0, "CD_EDUSUB"));
        			this.dsInsertTarget.setColumn(nrow, "FR_EDUCATION", this.dsList.getColumn(0, "FR_EDUCATION"));
        			this.dsInsertTarget.setColumn(nrow, "TO_EDUCATION", this.dsList.getColumn(0, "TO_EDUCATION"));
        			this.dsInsertTarget.setColumn(nrow, "CD_LICENSE", this.dsList.getColumn(0, "CD_LICENSE"));
        			this.dsInsertTarget.setColumn(nrow, "DT_LICENSE", this.dsList.getColumn(0, "DT_LICENSE"));
        			this.dsInsertTarget.setColumn(nrow, "AM_EDUCATION", this.dsList.getColumn(0, "AM_EDUCATION"));
        			this.dsInsertTarget.setColumn(nrow, "YN_EDUCATION", this.dsList.getColumn(0, "YN_EDUCATION"));
        			this.dsInsertTarget.setColumn(nrow, "ID_PERSON", this.dsTarget.getColumn(i, "ID_PERSON"));
        			this.dsInsertTarget.setColumn(nrow, "ID_SABUN", this.dsTarget.getColumn(i, "ID_SABUN"));
        			this.dsInsertTarget.setColumn(nrow, "CD_DEPT", this.dsTarget.getColumn(i, "CD_DEPT"));
        			this.dsInsertTarget.setColumn(nrow, "CD_POSITION", this.dsTarget.getColumn(i, "CD_POSITION"));
        			this.dsInsertTarget.setColumn(nrow, "CD_DUTY", this.dsTarget.getColumn(i, "CD_DUTY"));
        			this.dsInsertTarget.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;
        		case "D":
        			var nrow = this.dsDeleteTarget.addRow();
        			this.dsDeleteTarget.setColumn(nrow, "NO_EDU", this.dsList.getColumn(0, "NO_EDU"));
        			this.dsDeleteTarget.setColumn(nrow, "NO_ID", this.dsList.getColumn(0, "NO_ID"));
        			this.dsDeleteTarget.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        			this.dsDeleteTarget.setColumn(nrow, "ID_PERSON", this.dsTarget.getColumn(i, "ID_PERSON"));
        			this.dsDeleteTarget.setColumn(nrow, "ID_SABUN", this.dsTarget.getColumn(i, "ID_SABUN"));
        			this.dsDeleteTarget.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;
        		}
        	}

        	if (this.dsSave.rowcount == 0  && this.dsDelete.rowcount == 0 && this.dsDeleteTarget.rowcount == 0 && this.dsInsertTarget.rowcount==0 && this.dsUpdateTarget.rowcount == 0) return;

        	var strSvcId    = "save" ;
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave delete=dsDelete insertTarget=dsInsertTarget deleteTarget=dsDeleteTarget updateTarget=dsUpdateTarget";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg,         // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        };

        this.fnDelete = function ()
        {
        	//if(!this.fnDelValidate()) return;

        	var flag = this.gfnGetFormStatus(this);

        	this.dsDelete.clearData();

        	if (flag =="D")
        	{
        		var nrow = this.dsDelete.addRow();
        		this.dsDelete.setColumn(nrow, "NO_EDU", this.dsList.getColumn(0, "NO_EDU"));
        		this.dsDelete.setColumn(nrow, "NO_ID", this.dsList.getColumn(0, "NO_ID"));
        		this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        		this.dsDelete.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	if (this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "delete" ;
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg,         // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]

        };
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {

        	var strMsg = "";

        	if(this.gfnIsNull(this.dsList.getColumn(0, "ID_SABUN"))) {
        		strMsg += "※사번이 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_EDU"))) {
        		strMsg += "※교육번호가 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_ID"))) {
        		strMsg += "※교육순번이 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_EDUSUB"))) {
        		strMsg += "※ 신청구분이 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_LANGUAGE"))) {
        		strMsg += "※ 어학 종류가 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_EXAM"))) {
        		strMsg += "※ 시험 종류가 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "FR_EDUCATION")) ) {
        		strMsg += "※ 교육일자가 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_TOTAL"))) {
        		strMsg += "※ 점수(총점)이 입력되지 않았습니다.\n";
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "DS_LEVEL"))) {
        		strMsg += "※ 등급이 입력되지 않았습니다.\n";
        	}

        	if (this.dsList.getColumn(0, "AM_EDUCATION") ==0)
        	{
        		strMsg += "※ 응시료가 입력되지 않았습니다.\n";
        	}

        	if(strMsg.length > 0) {
        		this.gfnAlert(strMsg);
        		return false;
        	}

        	return true;
        }

        this.fnDelValidate = function ()
        {
        	var strMsg = "";

        	if(!this.gfnIsNull(this.dsList.getColumn(0, "ST_APRV")) && this.dsList.getColumn(0, "ST_APRV") == "01") {
        		strMsg += "※신청완료된 자료입니다. 삭제할 수 없습니다.\n";
        	}

        	if(strMsg.length > 0) {
        		this.gfnAlert(strMsg);
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
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return false;
        	}

        	//trace(" svcID=>" + svcID);
        	switch(svcID) {
        		case "select" :
        			this.gfnGridAfterSelect(this.dxGrid);

        			if(this.dsList.rowcount > 0) {
        				this.dsList.set_enableevent(false);

        				//trace(" CD_LANGUAGE=>" +  this.dsList.getColumn(0, "CD_LANGUAGE"));

        				this.staFileUpload.set_text("파일수 : " + this.dsList.getColumn(0, "URL_PROOF") + " 개");
        				this.staFileUpload2.set_text("파일수 : " + this.dsList.getColumn(0, "URL_PROOF2") + " 개");
        				//trace("URL_PROOF =>" + this.dsList.getColumn(0, "URL_PROOF"));
        				this.dsList.setColumn(0, this.ucFlag, this.dsList.getColumn(0, "TY_WRK"));
        				this.gfnSetFormStatus(this, this.dsList.getColumn(0, "TY_WRK")=="I" ? "I" : "Q" );

        				if (this.dsList.getColumn(0, "TY_WRK")=="I")
        				{
        					this.dsTarget.setColumn(0, this.ucFlag, "I");
        					this.dsList.setColumn(0, "CD_LANGUAGE" , "01");
        				}
        				this.dsSearch.setColumn(0, "NO_EDU" , this.dsList.getColumn(0, "NO_EDU"));


        				this.fnSetEnable(); //  활성화 처리

        				this.mskCNT.set_value(this.dsTarget.rowcount);
        				this.dsList.set_enableevent(true);
        				//trace(" dsList=>" + this.dsList.saveXML());
        			}
        			break;
        		case "combo" :
        			//trace(" combo=>" + this.dsEDUSUB.saveXML());
        			break;
        		case "save":		// 저장

        				this.gfnSetFormStatus(this, "Q");
        				this.dsList.setColumn(0, this.ucFlag , "Q");
        				this.fnSelect();
        			break;
        		case "APRV":		// 결재신청
        			this.getParentContext().close(true);
        			this.gfnOpenAppr(function() {
        				this.getParentContext().close(true);
        			});

        			break;
        		case "APRV_INIT":	// 결재초기화

        			break;
        		case "delete" :
        			//trace(" delete=>");
        			this.getParentContext().close(true);
        			break;
        		default:
        	}
        };

        this.fnVaidateCallback =  function (svcId, sRtn)
        {
        	this.getParentContext().close(false);
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "cfID_SABUN") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "01");
        	}
        	if (id == "cfID_SABUN_TARGET") {
        		//trace("cfID_SABUN_TARGET =>" +  this.dsList.getColumn(0, "CD_EMP"));
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "01");
        		dsUserParam.setColumn(nrow, "CD_EMPTYPE", this.dsList.getColumn(0, "CD_EMP"));
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}
        	if (id == "cfCD_EXAM") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "H3");
        		dsUserParam.setColumn(nrow, "CD_UPPREFIX", this.dsList.getColumn(0, "CD_LANGUAGE"));
        		dsUserParam.setColumn(nrow, "DS_ETC1", "Y");
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id,codeFindData) {
           	var arrData = codeFindData;
        	if(id == "cfNO_ACCOUNT") {
        		if(arrData.length > 0) {
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(this.dsList.rowposition, "CD_BANK", arrData[0]["CD_BANK"]);
        			this.dsList.setColumn(this.dsList.rowposition, "DS_BANK", arrData[0]["DS_BANK"]);
        			this.dsList.setColumn(this.dsList.rowposition, "DS_ACCOUNT", arrData[0]["NM_OPENER"]);
        			this.dsList.set_enableevent(true);
        		}else{
        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(this.dsList.rowposition, "CD_BANK", "");
        			this.dsList.setColumn(this.dsList.rowposition, "DS_BANK", "");
        			this.dsList.setColumn(this.dsList.rowposition, "DS_ACCOUNT", "");
        			this.dsList.set_enableevent(true);
        		}
        	}
        	else if(id == "cfID_SABUN_TARGET") {
        		if(arrData.length > 0) {
        			for(var r = 0; r < arrData.length; r++) {
        				if (this.dsTarget.getCaseCount("ID_PERSON =='"+ arrData[r]["ID_PERSON"] + "'") == 0)	{
        					var nrow = this.dsTarget.addRow();
        					this.dsTarget.setColumn(nrow, this.ucFlag, "I") ;
        					this.dsTarget.setColumn(nrow, "ID_PERSON" , arrData[r]["ID_PERSON"]);
        					this.dsTarget.setColumn(nrow, "ID_SABUN" , arrData[r]["ID_SABUN"]);
        					this.dsTarget.setColumn(nrow, "DS_HNAME" , arrData[r]["DS_HNAME"]);
        					this.dsTarget.setColumn(nrow, "CD_CORP" , arrData[r]["CD_CORP"]);
        					this.dsTarget.setColumn(nrow, "DS_CORP" , arrData[r]["DS_CORP"]);
        					this.dsTarget.setColumn(nrow, "CD_DUTY" , arrData[r]["CD_DUTY"]);
        					this.dsTarget.setColumn(nrow, "DS_DUTY" , arrData[r]["DS_DUTY"]);
        					this.dsTarget.setColumn(nrow, "CD_DEPT" , arrData[r]["CD_DEPT"]);
        					this.dsTarget.setColumn(nrow, "DS_DEPT" , arrData[r]["DS_DEPT"]);
        					this.dsTarget.setColumn(nrow, "CD_POSITION" , arrData[r]["CD_POSITION"]);
        					this.dsTarget.setColumn(nrow, "DS_POSITION" , arrData[r]["DS_POSITION"]);
        					//this.gfnSetFormSubStatus(this, "I");
        				}
        			}
        			this.mskCNT.set_value(this.dsTarget.rowcount);
        			this.fnSetSupport();
        		}
        	}


        };
         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
          // 저장 버튼
         this.divBtns_btnSAVE_onclick = function(obj,e)
        {
        	this.fnSave();
        };

        // 취소버튼
        this.btnCancel_onclick = function(obj,e)
        {

        	if (this.btnCANCEL.text == "삭제")
        	{
        		this.gfnConfirm("신청서 저장내역이 삭제 됩니다. 삭제하시겠습니까?", "fnDelCallback");
        	}else{
        		this.getParentContext().close(false);
        	}
        };

        this.fnDelCallback = function (svcId, sRtn)
        {
        	if (sRtn)
        	{
        		this.gfnSetFormStatus(this, "D");
        		this.dsList.setColumn(0, this.ucFlag , "D");
        		this.fnDelete();
        		//this.getParentContext().close(true);
        	}

        };

        // 추가 버튼
        this.divData_divGrid_btnAdd_onclick = function(obj,e)
        {
        	if (this.gfnIsNull(this.dsList.getColumn(0, "CD_CORP"))) {
        		this.gfnAlert("법인을 선택하세요!");
        		return;
        	}

        	this.cfID_SABUN_TARGET.form.fnCodeFindClear();
        	this.cfID_SABUN_TARGET.form.fnCodeFindLoad();

        };

        //교육대상자 삭제버튼
        this.divData_divGrid_btnRemove_onclick = function(obj,e)
        {
        	//trace(" btnRemove=>" + this.dsList.getColumn(0, "ID_SABUN"));
        	if (this.dsList.getColumn(0, "ID_SABUN") == this.dsTarget.getColumn(this.dsTarget.rowposition, "ID_SABUN"))
        	{
        		this.gfnAlert("삭제대상 교육대상자는 교육신청자 입니다. 삭제할 수 없습니다.");
        		return;
        	}

        	this.gfnGridDel(this.dxGrid);
        	this.gfnSetFormStatus(this, "U");

        };

        // 결재상신 버튼 클릭시
        this.btnAPRV_onclick = function(obj,e)
        {
        	if (this.dsList.rowcount == 0) return;
        	var flag = this.gfnGetFormStatus(this);

        	if (flag == "U" || flag == "I") {
        		this.gfnAlert("수정자료가 존재합니다. 저장후 결재상신 하세요.");
        		return false;
        	}

        	var noEdu = this.gfnTrim(this.gfnNvl(this.dsList.getColumn(0, "NO_EDU"),""));
        	if(this.gfnIsNull(noEdu)){
        		this.gfnAlert("교육신청번호가 없습니다.");
        		return false;
        	}

        	var fileCnt = this.gfnNvl(this.dsList.getColumn(0, "FILE_CNT"),0);
        	if(fileCnt == 0 ){
        		this.gfnAlert("교육관련 파일이 첨부되지 않았습니다. \n파일 첨부 후 결재상신 하세요.");
        		return false;
        	}

        	var fileCnt2 = this.gfnNvl(this.dsList.getColumn(0, "FILE_CNT2"),0);
        	if(fileCnt2 == 0 && this.staFile2.cssclass == "sta_WF_tablelabelE"){
        		this.gfnAlert("성적표 파일이 첨부되지 않았습니다. \n파일 첨부 후 결재상신 하세요.");
        		return false;
        	}

        	if(this.dsList.findRowExpr("(ST_APRV == '1' || ST_APRV == '2' || ST_APRV == '3' || ST_APRV == '4' ) && nx_flag != '#'") > -1){
        		this.gfnAlert("결재상신된 신청서 입니다. " );
        		return false;
        	}

        	// 지원한도 지원 횟수 체크
        	if (!this.fnAprvValid(0 , noEdu)) {
        		return;
        	}

        	var DS_REPORT = this.dsList.getColumn(0, "DS_REPORT");
        	var DS_TITLE = this.dsList.getColumn(0, "DS_EDUCATION");
        	var aprvType = this.fnGetAprvType(this.dsList.getColumn(0, "CD_REPORT"));

        	this.gfnConfirm(this.fnAprvMsg(obj), function(strId, isOk) {
        		if(isOk == true) {
        			var initParam = {
        				CD_CORP: this.dsSearch.getColumn(0, "CD_CORP"),
        				ID_AP_TYPE: aprvType,
        				TY_WRK: "APRV",
        				ID_APRV: this.AuthClient.ID_SABUN,
        				TT_DOC: "[" + DS_REPORT + "] " + DS_TITLE,
        				CD_CORP_SUFFIX : this.gfnGetConfig("DZ" , "CD_CORP_SUFFIX"),
        			}
        			this.gfnAprv(initParam, "fnAprvCallback", "APRV");
        		}
        	});
        };

        //전자결재 문서 번호 가져오기
        this.fnGetAprvType = function(vReport ) {
        	var returnVal = ""
        	switch(vReport) {
        	case "A" : // 교육신청서
        		returnVal  = "DAB07";
        		break;
        	case "B": // 교육비 지원신청서
        		returnVal  = "DAB09";
        		break;
        	case "C": // 교육비 지원신청서
        		returnVal  = "DAB09";
        		break;
        	case "D": // 어학시험응시료
        		returnVal  = "DAB10";
        		break;
        	case "E": // 교육보고서
        		returnVal  = "DAB08";
        		break;
        	default:
        	}
        	return returnVal;
        }


        this.fnAprvValid = function(nrow , strEdu) {
        	//trace(" fnAprvValid=>" + strEdu);
        	this.dsSelectAprvLimit.clearData();
        	this.dsSelectAprvLimit.addRow();
        	this.dsSelectAprvLimit.setColumn(0, "NO_EDU" , strEdu);
        	this.dsSelectAprvLimit.setColumn(0, "NO_ID"  , this.dsList.getColumn(nrow , "NO_ID"));
        	this.dsSelectAprvLimit.setColumn(0, "CD_CORP", this.dsList.getColumn(nrow , "CD_CORP"));

        	var strSvcId    = "select_Limit";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select_Limit=dsSelectAprvLimit";
        	var outData     = "dsLimit=select_Limit0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,	// 통신방법 정의 [생략가능]
        						false);
        	var msg = "";
        	var cnt = 0 ;
        	for (var i = 0; i < this.dsLimit.rowcount; i++) {
        		cnt++;
        		msg =  msg + cnt + ". " +  this.dsLimit.getColumn(i, "ERRMSG") + "\n"
        	}

        	if (!this.gfnIsNull(msg))
        	{
        		this.gfnAlert(msg);
        	    return false;
        	}
        	return true;
        }


        // 결재문서조회 버튼
        this.fnAprvDocQ = function(obj, e) {
        	var cd_corp = this.dsList.getColumn(0, "CD_CORP");
        	var no_aprv = this.dsList.getColumn(0, "NO_APRV");
        	var no_doc = this.dsList.getColumn(0, "NO_DOC");
        	if(this.gfnIsNull(no_aprv) || this.gfnIsNull(no_doc)){
        		return;
        	}

        	var oParams = {
        		CD_CORP: cd_corp,
        		NO_APRV: no_aprv,
        	}
        	this.gfnAprvDoc(oParams, this.fnAprvDocQCallback);
        }

        this.fnAprvDocQCallback = function() {
        	console.log('fnAprvDocQCallback');
        	//alert('fnAprvDocQCallback');
        }

        // 결재상태초기화 버튼
        this.fnAprvInit = function(obj, e) {
        	if (this.dsList.rowcount == 0) return;

        	//this.gfnConfirm(this.fnAprvMsg(obj), "fnAprvCallback", "APRVINIT");
        	this.gfnConfirm(this.fnAprvMsg(obj), function(strId, isOk) {
        		if (isOk == false) {
        			return;
        		}
        		this.fnAprvCallback("APRVINIT", isOk);
        	});
        }

        this.fnAprvMsg = function(obj) {

        	var DS_REPORT = this.dsList.getColumn(0, "DS_REPORT");
        	var DS_TITLE = this.dsList.getColumn(0, "DS_TITLE");
        	var CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	var DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");
        	var msg =  '['+ DS_REPORT +"] " + DS_TITLE + " 을(를) \n";
        	msg += "" + obj.text + " 하시겠습니까?";

        	return msg;
        }


        // 결재상신 버튼 콜백
        // 결재상태초기화 버튼 콜백
        this.fnAprvCallback = function(strId, val) {

        	this.dsApproval.clearData();
        	this.dsApproval.addRow();

         	var noEdu  = this.gfnTrim(this.dsList.getColumn(0, "NO_EDU"));
        	this.dsApproval.setColumn(0, "TY_WRK",  strId);
        	this.dsApproval.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsApproval.setColumn(0, "NO_EDU", noEdu);
        	this.dsApproval.setColumn(0, "ID_APRV", this.AuthClient.ID_SABUN);
        	if (strId == "APRV") {
        		this.dsApproval.setColumn(0, "NO_APRV", this.dsAprvOut.getColumn(0, "NO_APRV"));
        	} else {
        		this.dsApproval.setColumn(0, "NO_APRV", this.dsList.getColumn(0, "NO_APRV"));
        	}

        	var strSvcId    = strId;
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "aprv_execute=dsApproval";
        	var outData     = "";
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
         * 그리드 이벤트
         ************************************************************************/

        this.dsList_onvaluechanged = function(obj,e)
        {

        	//trace(" dsList_onvaluechanged=>" + e.columnid);

        	if(this.gfnDsIsUpdated(obj)){
        		var rowType = obj.getRowType(e.row);
        		this.gfnSetFormStatus(this, (rowType == 2 ? "I" : "U"));
        	}
        	if(e.oldvalue == e.newvalue) return;

        	if (e.columnid == "CD_LANGUAGE")
        	{
        		this.dsList.setColumn(0, "CD_EXAM" , "");
        		this.dsList.setColumn(0, "DS_EXAM" , "");
        	}
        	if (e.columnid == "AM_EDUCATION")
        	{   this.dsList.setColumn(0, "AM_EXEC" , e.newvalue);}
        	this.fnSetSupport();
        	this.fnSetEnable();

        };

        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var gridIdx = this.dxGrid.currentrow;

        	var sCD_CORP = this.dsList.getColumn(0, "CD_CORP");
        	if (id == "DAX_CFBASEINFO_ALL") {	// 사번

        		if(this.gfnIsNull(sCD_CORP)){
        			this.gfnAlert("법인을 먼저 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , "");
        		dsUserParam.setColumn(nrow, "CD_CORP"  , sCD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "01");
        	}

        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

        }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        // 첨부파일
        this.fnFileUpload = function(obj,e) {
        	//trace("this.btnFileUpload.text :: " + this.btnFileUpload.text);
        	if (this.dsList.rowcount <= 0) return;

        		var cdGubun = "";
        		var cdDir = "";

        		cdGubun = "DAB4";
        		var fileManager = {};
        		fileManager.CD_GUBUN = cdGubun;
        		fileManager.CD_DIR = [this.dsList.getColumn(this.dsList.rowposition, "NO_EDU")];
        		if(this.dsList.getColumn(0, "ST_APRV")=="01" || this.gfnIsNull(this.dsList.getColumn(0, "ST_APRV"))) {
        			fileManager.IS_READONLY = false;
        		} else {
        			fileManager.IS_READONLY = true;
        		}
        		switch(this.dsList.getColumn(0, "CD_REPORT")) {
        		case "A":
        			fileManager.TXT_MESSAGE = "※ 상세강의계획, 강사이력, 교육브로셔, 커리큘렁 등 첨부"
        			break;
        		case "B":
        			fileManager.TXT_MESSAGE = "※ 결제영수증, 출석확인증등 첨부"
        			break;
        		case "C":
        			fileManager.TXT_MESSAGE = "※ 교육수강증 OR 결제영수증 첨부 "
        			break;
        		case "D":
        			fileManager.TXT_MESSAGE = "※ 결제영수증 첨부 "
        			break;
        		case "E":
        			fileManager.TXT_MESSAGE = "※ 수료증, 출석확인증 첨부 "
        			break;
        		default:
        		}

        // 		trace("fileManager.CD_GUBUN :: " + fileManager.CD_GUBUN);
        // 		trace("fileManager.CD_DIR :: " + fileManager.CD_DIR);
        // 		trace("fileManager.IS_READONLY :: " + fileManager.IS_READONLY);

        		this.gfnFileManager(fileManager, "fnFileCallback");

        }

        this.fnFileUpload2 = function(obj,e) {
        	//trace("this.btnFileUpload.text :: " + this.btnFileUpload.text);
        	if (this.dsList.rowcount <= 0) {
        		return false;
        	}

        		var cdGubun = "";
        		var cdDir = "";

        		cdGubun = "DAB5";
        		var fileManager = {};
        		fileManager.CD_GUBUN = cdGubun;
        		fileManager.CD_DIR = [this.dsList.getColumn(this.dsList.rowposition, "NO_EDU")];
        		if(this.dsList.getColumn(0, "ST_APRV")=="01" || this.gfnIsNull(this.dsList.getColumn(0, "ST_APRV"))) {
        			fileManager.IS_READONLY = false;
        		} else {
        			fileManager.IS_READONLY = true;
        		}
        		switch(this.dsList.getColumn(0, "CD_REPORT")) {
        		case "C":
        			fileManager.TXT_MESSAGE = "※ 자격증사본 첨부 "
        			break;
        		case "D":
        			fileManager.TXT_MESSAGE = "※ 성적표 첨부 "
        			break;
        		default:
        		}

        // 		trace("fileManager.CD_GUBUN :: " + fileManager.CD_GUBUN);
        // 		trace("fileManager.CD_DIR :: " + fileManager.CD_DIR);
        // 		trace("fileManager.IS_READONLY :: " + fileManager.IS_READONLY);

        		this.gfnFileManager(fileManager, "fnFileCallback2");

        }

        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수

        	// 파일개수를 다시 셋팅
        	var falg = this.gfnGetFormStatus(this);

        	//trace(" fnFileCallback Cnt=>" + val.Cnt  );
        	this.dsList.set_enableevent(false);
        	if(val.Cnt == 0 ) {
        		this.staFileUpload.set_text("파일수 : 0 개");
        	} else {
        		this.staFileUpload.set_text("파일수 : " + val.Cnt + " 개");
        	}

        	this.dsList.setColumn(0, "FILE_CNT", val.Cnt);
        	this.dsList.set_enableevent(true);
        	this.gfnSetFormStatus(this , falg);
        };

        this.fnFileCallback2 = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수

        	// 파일개수를 다시 셋팅
        	var falg = this.gfnGetFormStatus(this);

        	//trace(" fnFileCallback Cnt=>" + val.Cnt  );
        	this.dsList.set_enableevent(false);
        	if(val.Cnt == 0 ) {
        		this.staFileUpload2.set_text("파일수 : 0 개");
        	} else {
        		this.staFileUpload2.set_text("파일수 : " + val.Cnt + " 개");
        	}

        	this.dsList.setColumn(0, "FILE_CNT2", val.Cnt);
        	this.dsList.set_enableevent(true);
        	this.gfnSetFormStatus(this , falg);
        };

        // 절사 처리
        this.fnGetTrunc = function(amVal, vCnt){
        	var returnVal = this.gfnNvl(amVal, 0);
        	if(returnVal > 0){
        		returnVal = Math.floor(amVal/vCnt) * vCnt;
        	}
        	return returnVal;
        }

        // 객체 초기화
        this.fnResetObjectValue = function(obj, dataset, columns) {
        	obj.set_value("");
        	for (var i = 0; i < columns.length; i++) {
        		dataset.setColumn(0, columns[i], "");
        	}
        }

        this.fnSetCombo = function ()
        {
           this.dsCombo = new Dataset();
           this.dsCombo.addColumn("TY_GUBUN", "string");
           this.dsCombo.addColumn("CD_PREFIX", "string");

           this.dsCombo.addRow();
           this.dsCombo.setColumn(0, "TY_GUBUN", "C");
           this.dsCombo.setColumn(0, "CD_PREFIX", "H2");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsLANGUAGE=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        // 교육지원금액 계산 처리
        this.fnSetSupport = function() {

        	var vCnt = this.dsTarget.getCaseCountNF( " nx_flag != 'D'" ); // 교육대상자 수
        	var vAmEducation = this.dsList.getColumn(0, "AM_EDUCATION");  //교육금액

        	var vRtLimit = this.dsList.getColumn(0, "RT_LIMIT");   // 지원율
        	var vAmLimit = this.dsList.getColumn(0, "AM_LIMIT") * vCnt ;   //지원한도 한도금액 * 교육대상자수

        	var vResult =  Math.ceil(vAmEducation * vRtLimit/100); // 지원금액

        	if (vAmLimit > 0)
        	{
        		//trace(" fnSetSupport=>" + vResult);
        		vResult = vAmLimit <= vResult ? vAmLimit : vResult ;
        	}

        	this.dsList.setColumn(0, "AM_SUPPORT", vResult);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.divData.form.divGrid.form.btnRemove.addEventHandler("onclick",this.divData_divGrid_btnRemove_onclick,this);
            this.divData.form.divGrid.form.btnAdd.addEventHandler("onclick",this.divData_divGrid_btnAdd_onclick,this);
            this.divData.form.btnATTACH.addEventHandler("onclick",this.fnFileUpload,this);
            this.divData.form.btnATTACH2.addEventHandler("onclick",this.fnFileUpload2,this);
            this.divData.form.cboCD_LANGUAGE.addEventHandler("canitemchange",this.divData_cboCD_LANGUAGE_canitemchange,this);
            this.divBtns.form.btnCANCEL.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.divBtns.form.btnSAVE.addEventHandler("onclick",this.divBtns_btnSAVE_onclick,this);
            this.btnAPRV00.addEventHandler("onclick",this.fnAprvDocQ,this);
            this.btnAPRV.addEventHandler("onclick",this.btnAPRV_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsTarget.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsLANGUAGE.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsLimit.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_EDU_REQD.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
