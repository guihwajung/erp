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
            this.set_titletext("제한해제");
            if (Form == this.constructor)
            {
                this._setFormPosition(810,790);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCHPR_WORKORDER_REQUEST_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DCHPR_WORKORDER_REQUEST_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TY_SAVE\" type=\"INT\" size=\"4\"/><Column id=\"NO_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_BONSA\" type=\"STRING\" size=\"1\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REQ\" type=\"STRING\" size=\"256\"/><Column id=\"ID_DAM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DAM\" type=\"STRING\" size=\"256\"/><Column id=\"NM_DAM_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONDITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_INSPECT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_JOJUNG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECEIVE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_STATUS\" type=\"INT\" size=\"4\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SIGNVAL\" type=\"STRING\" size=\"5000\"/><Column id=\"DN_CERTORGNAME\" type=\"STRING\" size=\"1024\"/><Column id=\"DN_SIGNNAME\" type=\"STRING\" size=\"1024\"/><Column id=\"DS_HASHVAL\" type=\"STRING\" size=\"1024\"/><Column id=\"DS_RETURN_ASK\" type=\"STRING\" size=\"300\"/><Column id=\"DS_RETURN_APP\" type=\"STRING\" size=\"300\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCOLUMN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"INT\" size=\"4\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">-1</Col><Col id=\"VALUE\">작성</Col></Row><Row><Col id=\"VALUE\">작업요청</Col><Col id=\"CODE\">0</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">요청반려</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">요청확인</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"VALUE\">검수요청</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"VALUE\">검수반려</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"VALUE\">검수완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">CD_SITE</Col><Col id=\"DS_FIELD\">현장코드</Col></Row><Row><Col id=\"CD_FIELD\">CD_VENDOR</Col><Col id=\"DS_FIELD\">업체코드</Col></Row><Row><Col id=\"CD_FIELD\">ID_DAM</Col><Col id=\"DS_FIELD\">본사담당자</Col></Row><Row><Col id=\"CD_FIELD\">DT_WORK</Col><Col id=\"DS_FIELD\">위탁일자</Col></Row><Row><Col id=\"CD_FIELD\">DS_REQ</Col><Col id=\"DS_FIELD\">작업요청명</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0","800","710",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100.00%","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("작업지시요청");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","1","108","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("현장코드");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_WORK","1","79","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("위탁일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_DAM","1","166","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_textAlign("right");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","109","108","290","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","109","137","290","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","109","79","290","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","109","166","290","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_WORK","113","85","281","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_WORK","1","230","109","63",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("위탁작업내용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg02","109","230","687","63",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("ctxtDS_WORK","113","236","678","50",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_WORK","398","79","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("작업지시번호");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg03","506","79","290","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_WORK","510","84","281","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_autoselect("true");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNM_DAM_VENDOR","398","108","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_text("업체담당자/직위");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg04","506","108","290","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnWork_0","76.50%","27","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_initvalueid("0");
            obj.set_taborder("17");
            obj.set_text("요청");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","92.00%","676","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_SITE","113","112","281","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_VENDOR","113","143","281","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DCX_CFVENDOR_DC");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_DEPT_VENDOR","398","137","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_text("업체담당자 소속");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00","506","137","290","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfID_DAM","113","171","281","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFUSER");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNM_DAM_VENDOR","510","113","130","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DEPT_VENDOR","510","143","281","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_POS_VENDOR","641","113","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_PAYMENT","1","292","109","63",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_text("위탁대금정보");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg05","109","292","687","63",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("ctxtDS_PAYMENT","113","298","678","50",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONDITION","1","354","109","63",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_text("위탁인도정보");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg06","109","354","687","63",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("ctxtDS_CONDITION","113","360","678","50",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_INSPECT","1","416","109","63",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_text("검사방법시기");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg07","109","416","687","63",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("ctxtDS_INSPECT","113","422","678","50",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_JOJUNG","1","478","109","63",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_text("대금조정");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg08","109","478","687","63",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("ctxtDS_JOJUNG","113","484","678","50",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ETC","1","540","109","63",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_text("기타사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg09","109","540","687","63",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("ctxtDS_ETC","113","546","678","50",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_STATUS","1","50","109","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_text("진행상태");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg10","109","50","687","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("crdoTY_STATUS","116","59","650","15",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_innerdataset("dsCOLUMN");
            obj.set_readonly("true");
            obj.set_text("전체");
            obj.set_value("A");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_RECEIVE","1","610","109","63",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_text("위탁작업회신");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg11","109","610","687","63",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("ctxtDS_RECEIVE","113","616","678","50",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REQ","1","201","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_text("작업요청명");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg01","109","201","687","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_REQ","113","206","678","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnFile","68.63%","27","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("파일첨부");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnInit","0.25%","27","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("초기화");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","1","137","109","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("업체코드");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnWork_1","84.25%","27","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_initvalueid("5");
            obj.set_taborder("54");
            obj.set_text("승인반려");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnWork_2","92.00%","27","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_initvalueid("6");
            obj.set_taborder("55");
            obj.set_text("승인");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staFILE_CNT","398","166","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            obj.set_text("첨부파일수");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg12","506","166","290","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtFILE_CNT","510","171","281","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.edtNO_WORK","value","dsList","NO_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.crdoTY_STATUS","value","dsList","TY_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.cfCD_SITE.form.CDTextBox","value","dsList","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.cfCD_SITE.form.DSTextBox","value","dsList","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.cfCD_VENDOR.form.CDTextBox","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.cfCD_VENDOR.form.DSTextBox","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.cfID_DAM.form.CDTextBox","value","dsList","ID_DAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.cfID_DAM.form.DSTextBox","value","dsList","DS_DAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.txtNM_DAM_VENDOR","value","dsList","NM_DAM_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.txtDS_POS_VENDOR","value","dsList","DS_POS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.txtDS_DEPT_VENDOR","value","dsList","DS_DEPT_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ctxtDS_WORK","value","dsList","DS_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.ctxtDS_PAYMENT","value","dsList","DS_PAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.ctxtDS_CONDITION","value","dsList","DS_CONDITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.ctxtDS_INSPECT","value","dsList","DS_INSPECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.ctxtDS_JOJUNG","value","dsList","DS_JOJUNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.ctxtDS_ETC","value","dsList","DS_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.ctxtDS_RECEIVE","value","dsList","DS_RECEIVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.ctclDT_WORK","value","dsList","DT_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.txtDS_REQ","value","dsList","DS_REQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.txtFILE_CNT","value","dsList","FILE_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCH_WORKORDER_REQUEST.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.isChange = false;
        this.nmRtnCol = ["DS_RETURN_ASK","DS_RETURN_APP"];//요청반려,승인반려

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

        	// 이전 화면에서 데이터 받기.

         	if(this.gfnIsNull(this.getOwnerFrame().NO_WORK))
        	{
        		this.fnAdd();
        	} else {
        		this.dsSearch.setColumn(0,"NO_WORK",this.getOwnerFrame().NO_WORK);
        		this.fnSelect();
        	};
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.tyStatus = {};

        	for(var i = 0; i < this.dsCOLUMN.rowcount; i++)
        	{
        		this.tyStatus[this.dsCOLUMN.getColumn(i,"CODE")] = this.dsCOLUMN.getColumn(i,"VALUE");
        	};
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
        	// 본사서명시 넘긴 dataset에 그대로 담아서 리턴.
        	// DS_HASHVAL, DS_SIGNVAL, DN_CERTORGNAME, DN_SIGNNAME 컬럼은 필수.
        	this.dsSign = new Dataset();
        	this.dsSign.addColumn("DS_HASHVAL", "string");
        	this.dsSign.addColumn("DS_SIGNVAL", "string");
        	this.dsSign.addColumn("DN_CERTORGNAME", "string");
        	this.dsSign.addColumn("DN_SIGNNAME", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSearch";
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

         /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	this.dsList.clearData();
        	this.dsList.addRow();
        	this.dsList.setColumn(0,"TY_STATUS",-1);
        	this.dsList.setColumn(0,"YN_BONSA",	this.getOwnerFrame().YN_BONSA);
        	this.fnBtnInit();
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	this.dsList.setColumn(0,"TY_SAVE",this.dsList.getRowType(0));
        	this.dsList.setColumn(0,"ID_USER",this.AuthClient.ID_USER);

        	this.dsList.setColumn(0,"DS_SIGNVAL",this.dsSign.getColumn(0,"DS_SIGNVAL"));
        	this.dsList.setColumn(0,"DN_CERTORGNAME",this.dsSign.getColumn(0,"DN_CERTORGNAME"));
        	this.dsList.setColumn(0,"DN_SIGNNAME",this.dsSign.getColumn(0,"DN_SIGNNAME"));
        	this.dsList.setColumn(0,"DS_HASHVAL",this.dsSign.getColumn(0,"DS_HASHVAL"));

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsList";
        	var outData     = "dsList=insert";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        };


        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        };

        this.fnClose = function() {
        	this.getParentContext().close(this.isChange);
        };
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
        		if (errorCode == 0) {
        			this.fnBtnInit();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		};
        	};

        	if (svcID == "sign") {
        		if(errorCode == 0)
        		{
        			this.fnSave();
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		};
        	};

        	if (svcID == "save") {
        		if(errorCode == 0)
        		{
        			this.gfnAlert(this.tyStatus[this.dsList.getColumn(0,"TY_STATUS")] + " 처리되었습니다.");
        			this.dsSearch.setColumn(0,"NO_WORK",this.dsList.getColumn(this.dsList.rowposition,"NO_WORK"));
        			this.fnSelect();
        			this.isChange = true;

        			// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        			//this.getParentContext().close(true);
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		};
        	};
        };
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // 초기화 버튼 클릭
        this.divData_btnInit_onclick = function(obj,e)
        {
        	this.fnAdd();
        };

        // 파일첨부 버튼 클릭
        this.divData_btnFile_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsList.getColumn(0, "NO_WORK"))) return;
        	var fileManager = {};
        	fileManager.CD_GUBUN = "DC55";
        	fileManager.CD_DIR = [this.dsList.getColumn(0, "NO_WORK")];
        	fileManager.IS_READONLY = this.dsList.getColumn(0, "TY_STATUS") == 6 ? true : false;
        	this.gfnFileManager(fileManager, "fnFileCallback");
        };

        // 요청/반려/승인 버튼 클릭
        this.fnWorkBtnClick = function(obj,e)
        {
        	if(obj.initvalueid % 2 == 1) {
        		var param = {};
        		param.TY_STATUS = obj.initvalueid;
        		this.gfnFormOpen("DCH", "DCH_WORKORDER_RTN_DLG", "fnWorkOrderRtn_callback", param, 660, 200);
        		return;
        	};

        	this.dsList.setColumn(0,"TY_STATUS",obj.initvalueid);
        	this.fnSign(obj.initvalueid);
        };

        this.fnWorkOrderRtn_callback = function(id, val) {
        	if(val != null) {
        		var json = JSON.parse(val);
        		this.dsList.setColumn(0,this.nmRtnCol[nexacro.round(json.TY_STATUS / 5)],json.DS_RETURN);
        		this.dsList.setColumn(0,"TY_STATUS",json.TY_STATUS);
        		this.fnSign(json.TY_STATUS);
        	};
        };

        this.fnSign = function(inx) {
        	if(!this.fnSaveValidate()) return;

        	this.gfnConfirm(this.tyStatus[inx] + " 처리 하시겠습니까?", "fnSign_callback");
        }

        this.fnSign_callback = function(strId, val)
        {
        	if(val == true) {
        		this.fnBonsaSign();
        	};
        };

        this.fnBonsaSign = function() {
        	var arrVal	= [];
        	var arrSign = [];
        	var arrEtc 	= [];

        	arrVal.push(this.dsList.getColumn(0,"NO_WORK"));
        	arrVal.push(this.dsList.getColumn(0,"CD_SITE"));
        	arrVal.push(this.dsList.getColumn(0,"CD_VENDOR"));
        	arrVal.push(this.dsList.getColumn(0,"DT_WORK"));
        	arrVal.push(this.dsList.getColumn(0,"NO_SEQ"));
        	arrVal.push(this.dsList.getColumn(0,"DS_REQ"));
        	arrVal.push(this.dsList.getColumn(0,"ID_DAM"));
        	arrVal.push(this.dsList.getColumn(0,"DS_WORK"));
        	arrVal.push(this.dsList.getColumn(0,"DS_PAYMENT"));
        	arrVal.push(this.dsList.getColumn(0,"DS_CONDITION"));
        	arrVal.push(this.dsList.getColumn(0,"DS_INSPECT"));
        	arrVal.push(this.dsList.getColumn(0,"DS_JOJUNG"));
        	arrVal.push(this.dsList.getColumn(0,"DS_ETC"));
        	if(this.dsList.getColumn(0,"TY_STATUS") == 6)
        		arrVal.push(this.dsList.getColumn(0,"DS_RECEIVE"));

        	this.dsSign.clearData();
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var nrow = this.dsSign.addRow();
        		this.dsSign.setColumn(nrow, "DS_HASHVAL", arrVal.join("/"));
        	};

        	var strSvcId    = "sign";
        	var strSvcType  = "pki/sign";
        	var inProc		= "";
        	var inData      = "input=dsSign";
        	var outData     = "dsSign=output0";
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

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	this.fnClose();
        };

        this.fnSaveValidate = function()
        {
        	var validate = true;
        	var msg = "";

        	var err = this.gfnDataValidate(this.dsList, this.dsRequired, false);
        	if (!this.gfnIsNull(err))
        	{
        		validate = false;
        		msg += err;
        	};

        	if(!this.gfnIsNull(msg)) {
        		var arrError = [msg];
        		this.gfnAlert("msg.err.validator", arrError);
        	};

        	return validate;
        };

        this.fnBtnInit = function()
        {
        	if(this.dsList.rowcount == 0) return;

        	var workBtn  = [this.divData.form.btnWork_0,this.divData.form.btnWork_1,this.divData.form.btnWork_2];
        	var tyStatus = this.dsList.getColumn(0,"TY_STATUS");
        	var modInt   = 3;
        	var bRtnPop  = true;

        	if(tyStatus < 0)
        		this.divData.form.btnFile.set_enable(false);
        	else
        		this.divData.form.btnFile.set_enable(true);


        	for(var i = 0; i < workBtn.length; ++i)
        	{
        		workBtn[i].set_enable(false);
        		if(workBtn[i].initvalueid == tyStatus) bRtnPop = false;
        	};

        	if(tyStatus == 2 || tyStatus == 6) return;

        	if(nexacro.round(tyStatus / modInt) == 0) {
        		workBtn[0].set_enable(true);
        	}
        	else{
        		workBtn[1].set_enable(true);
        		workBtn[2].set_enable(true);
        	};

        	if(bRtnPop && (tyStatus % 2 == 1)) {
        		var param = {};
        		param.DS_RETURN = this.dsList.getColumn(0,this.nmRtnCol[nexacro.round(tyStatus / 5)]);
        		this.gfnFormOpen("DCH", "DCH_WORKORDER_RTN_DLG", "", param, 660, 200);
        	};
        };

        this.divData_crdoTY_STATUS_onitemchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staBg2.addEventHandler("onclick",this.divData_staBg2_onclick,this);
            this.divData.form.btnWork_0.addEventHandler("onclick",this.fnWorkBtnClick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divData.form.crdoTY_STATUS.addEventHandler("onitemchanged",this.divData_crdoTY_STATUS_onitemchanged,this);
            this.divData.form.btnFile.addEventHandler("onclick",this.divData_btnFile_onclick,this);
            this.divData.form.btnInit.addEventHandler("onclick",this.divData_btnInit_onclick,this);
            this.divData.form.btnWork_1.addEventHandler("onclick",this.fnWorkBtnClick,this);
            this.divData.form.btnWork_2.addEventHandler("onclick",this.fnWorkBtnClick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
        };
        this.loadIncludeScript("DCH_WORKORDER_REQUEST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
