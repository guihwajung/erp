(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DRB_DLGTRANSFER");
            this.set_titletext("명의변경");
            this.getSetter("maxwidth").set("650");
            this.getSetter("maxheight").set("590");
            if (Form == this.constructor)
            {
                this._setFormPosition(620,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DRBPR_NOMINALTRANSFER_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHASU\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNIONMEMBER\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TRANSFER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_OFFICETEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RECPOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPTAE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPJONG\" type=\"STRING\" size=\"256\"/><Column id=\"YN_EBILL\" type=\"STRING\" size=\"256\"/><Column id=\"YN_JOINT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CUSTOMER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CUSTOMER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CUSTOMER", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">P</Col><Col id=\"VALUE\">개인</Col></Row><Row><Col id=\"CODE\">C</Col><Col id=\"VALUE\">법인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CONTRACTOR", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">개인</Col><Col id=\"CODE\">P</Col></Row><Row><Col id=\"VALUE\">법인</Col><Col id=\"CODE\">C</Col></Row><Row><Col id=\"VALUE\">개인사업자</Col><Col id=\"CODE\">A</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EBILL", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">전자</Col><Col id=\"CODE\">Y</Col></Row><Row><Col id=\"VALUE\">종이</Col><Col id=\"CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_JOINT", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">있음</Col><Col id=\"CODE\">Y</Col></Row><Row><Col id=\"VALUE\">없음</Col><Col id=\"CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,"490","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","13","97.42%","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            obj.set_text("전매");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_CUSTOMER","0","40","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("기존고객검색");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_TRANSFER","0","69","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("변경일자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_JUMIN","0","98","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("주민등록번호");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_TEL","0","127","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("☎(자택)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_REMARK","0","388","127","70",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staTY_CUSTOMER:-1","40","175","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staDT_TRANSFER:-1","69","175","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3_00","staNO_JUMIN:-1","98","175","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5","staNO_TEL:-1","127","175","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg6","staDS_REMARK:-1","388",null,"70","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","staDS_REMARK:5","393","472","60",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_value("");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.set_maxlength("250");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_CUSTOMER","staTY_CUSTOMER:5","46","138","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_CUSTOMER");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_enable("true");
            obj.set_direction("vertical");
            obj.set_text("승인");
            obj.set_value("APRV");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_JUMIN","staNO_JUMIN:5","102","163","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_maxlength("20");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_CONTRACTOR","staBg2:-1","69","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00","staTY_CONTRACTOR:-1","69",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CUSTOMER","staBg1:-1","40","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_text("주민(사업자)번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_00","426","40",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_TRANSFER","staDT_TRANSFER:5","73","108","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_CONTRACTOR","staTY_CONTRACTOR:5","74","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsTY_CONTRACTOR");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_enable("true");
            obj.set_direction("vertical");
            obj.set_text("승인");
            obj.set_value("APRV");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CONTRACTOR","staBg3_00:-1","98","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_text("계약자명");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_01","staDS_CONTRACTOR:-1","98",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_CONTRACTOR","staDS_CONTRACTOR:4","102",null,"22","16",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_maxlength("40");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_OFFICETEL","staBg5:-1","127","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_text("☎(직장)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_01_00","staNO_OFFICETEL:-1","127",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_TEL","staNO_TEL:5","131","163","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_value("");
            obj.set_maxlength("15");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_OFFICETEL","staNO_OFFICETEL:4","131",null,"22","16",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.set_maxlength("15");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_MOBILE","0","156","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5_00","staNO_MOBILE:-1","156","175","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_MOBILE","staNO_MOBILE:5","160","163","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_value("");
            obj.set_maxlength("15");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EMAIL","staBg5_00:-1","156","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_text("e-Mail");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_01_00_00","staDS_EMAIL:-1","156",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_EMAIL","staDS_EMAIL:4","160",null,"22","16",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_POST","0","185","127","59",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_text("현주소");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5_00_00","staNO_POST:-1","185",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5_00_00_00","staNO_POST:-1","214",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_RECPOST","0","243","127","59",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_text("주민등록주소");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5_00_00_01","staNO_RECPOST:-1","243",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5_00_00_00_00","staNO_RECPOST:-1","272",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0","301","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5_00_01","staCD_VENDOR:-1","301","175","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_VENDOR","staBg5_00_01:-1","301","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_text("상호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_01_00_00_00","staDS_VENDOR:-1","301",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_UPTAE","0","330","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5_00_01_00","staDS_UPTAE:-1","330","175","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_UPJONG","staBg5_00_01_00:-1","330","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_text("업종");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_01_00_00_00_00","staDS_UPJONG:-1","330",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_EBILL","0","359","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_text("세금계산서발급구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg5_00_01_00_00","staTY_EBILL:-1","359","175","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_JOINT","staBg5_00_01_00_00:-1","359","127","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_text("공동명의계약자여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00_01_00_00_00_00_00","staYN_JOINT:-1","359",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CUSTOMER","staCD_CUSTOMER:3","44","150","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.getSetter("CDTextWidth").set("125");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DRX_CFCUSTOMER");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfNO_POST","staNO_POST:5","189","472","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfNO_RECPOST","staNO_RECPOST:5","247","472","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_ADDR","staNO_POST:5","218","472","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_value("");
            obj.set_maxlength("150");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_RECADDR","staNO_RECPOST:5","276","472","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_value("");
            obj.set_maxlength("150");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtCD_VENDOR","staCD_VENDOR:5","305","163","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_value("");
            obj.set_maxlength("13");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR","staDS_VENDOR:5","305","172","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_value("");
            obj.set_maxlength("15");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_UPTAE","staDS_UPTAE:5","334","163","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_value("");
            obj.set_maxlength("15");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_UPJONG","staDS_UPJONG:5","334","172","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_value("");
            obj.set_maxlength("15");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_EBILL","staTY_EBILL:5","365","138","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_innerdataset("dsTY_EBILL");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_enable("true");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            obj.set_text("승인");
            obj.set_value("APRV");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_JOINT","staYN_JOINT:5","365","138","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_innerdataset("dsYN_JOINT");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_enable("true");
            obj.set_direction("vertical");
            obj.set_text("승인");
            obj.set_value("APRV");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnConf","39.52%","480","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btnExt");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","50.00%","480","60","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_cssclass("btnExt");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item6","divData.form.rdoTY_CUSTOMER","value","dsData","TY_CUSTOMER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.txtDS_REMARK","value","dsData","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.txtNO_JUMIN","value","dsData","NO_JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.rdoTY_CONTRACTOR","value","dsData","TY_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.txtDS_CONTRACTOR","value","dsData","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.txtNO_TEL","value","dsData","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.txtNO_OFFICETEL","value","dsData","NO_OFFICETEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.txtNO_MOBILE","value","dsData","NO_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.txtDS_EMAIL","value","dsData","DS_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ccfCD_CUSTOMER.form.CDTextBox","value","dsData","CD_CUSTOMER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.ccfNO_POST.form.CDTextBox","value","dsData","NO_POST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.ccfNO_POST.form.DSTextBox","value","dsData","DS_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.ccfNO_RECPOST.form.CDTextBox","value","dsData","NO_RECPOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.ccfNO_RECPOST.form.DSTextBox","value","dsData","DS_RECADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.txtDS_ADDR","value","dsData","DS_ADDR3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.txtDS_RECADDR","value","dsData","DS_RECADDR3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.txtCD_VENDOR","value","dsData","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.txtDS_VENDOR","value","dsData","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.txtDS_UPTAE","value","dsData","DS_UPTAE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.txtDS_UPJONG","value","dsData","DS_UPJONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.rdoTY_EBILL","value","dsData","YN_EBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.rdoYN_JOINT","value","dsData","YN_JOINT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.calDT_TRANSFER","value","dsData","DT_TRANSFER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRB_DLGTRANSFER.xfdl", function() {
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

        	// 이전 화면에서 데이터 받기.
        	this.dsData.setColumn(0, "CD_ACNTUNIT"	 , this.getOwnerFrame().CD_ACNTUNIT.substr(0, 6));
        	this.dsData.setColumn(0, "TY_GUBUN"		 , this.getOwnerFrame().CD_ACNTUNIT.substr(6, 1));
        	this.dsData.setColumn(0, "NO_CHASU"		 , this.getOwnerFrame().CD_ACNTUNIT.substr(7, 2));
        	this.dsData.setColumn(0, "NO_DONG"		 , this.getOwnerFrame().DONG);
        	this.dsData.setColumn(0, "NO_FLOOR"		 , this.getOwnerFrame().FLOOR)
        	this.dsData.setColumn(0, "NO_HO"		 , this.getOwnerFrame().HO);
        	this.dsData.setColumn(0, "NO_UNIONMEMBER", this.getOwnerFrame().NO_UNIONMEMBER);

        	this.dsData.setColumn(0, "TY_CUSTOMER"  , "P");					//기존고객검색(개인)
        	this.dsData.setColumn(0, "TY_CONTRACTOR", "P");					//계약구분(개인)
        	this.dsData.setColumn(0, "YN_EBILL"	  	, "N");					//세금계산서(종이)
        	this.dsData.setColumn(0, "YN_JOINT"		, "N");					//공동명의계약자여부(없음)
        	this.dsData.setColumn(0, "DT_TRANSFER"	, this.gfnGetDate()); 	//변경일자

        	var titletxt = "";
        	if(this.gfnIsNull(this.dsData.getColumn(0, "NO_UNIONMEMBER"))){
        		titletxt  = this.FormInfo.NM_FORM  +"(";
        		titletxt += this.dsData.getColumn(0, "NO_DONG")  +" 동 ";
        		titletxt += this.dsData.getColumn(0, "NO_FLOOR") +" 층 ";
        		titletxt += this.dsData.getColumn(0, "NO_HO")    +" 호)";
        	}else{
        		titletxt  = this.dsData.getColumn(0, "NO_UNIONMEMBER");
        	}

        	this.staTITLE.set_text(titletxt);

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	//this.FormBtns.Select.set_enable(false);
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
        	this.staTITLE = this.divData.form.staTITLE;
        	this.rdoTY_CUSTOMER 	= this.divData.form.rdoTY_CUSTOMER;
        	this.ccfCD_CUSTOMER 	= this.divData.form.ccfCD_CUSTOMER;
        	this.calDT_TRANSFER 	= this.divData.form.calDT_TRANSFER;
        	this.rdoTY_CONTRACTOR 	= this.divData.form.rdoTY_CONTRACTOR;
        	this.txtNO_JUMIN 		= this.divData.form.txtNO_JUMIN;
        	this.txtDS_CONTRACTOR 	= this.divData.form.txtDS_CONTRACTOR;
        	this.txtNO_TEL 			= this.divData.form.txtNO_TEL;
        	this.txtNO_OFFICETEL 	= this.divData.form.txtNO_OFFICETEL;
        	this.txtNO_MOBILE 		= this.divData.form.txtNO_MOBILE;
        	this.txtDS_EMAIL 		= this.divData.form.txtDS_EMAIL;
        	this.ccfNO_POST 		= this.divData.form.ccfNO_POST;
        	this.txtDS_ADDR 		= this.divData.form.txtDS_ADDR;
        	this.ccfNO_RECPOST 		= this.divData.form.ccfNO_RECPOST;
        	this.txtDS_RECADDR 		= this.divData.form.txtDS_RECADDR;
        	this.txtCD_VENDOR 		= this.divData.form.txtCD_VENDOR;
        	this.txtDS_VENDOR 		= this.divData.form.txtDS_VENDOR;
        	this.txtDS_UPTAE 		= this.divData.form.txtDS_UPTAE;
        	this.txtDS_UPJONG 		= this.divData.form.txtDS_UPJONG;
        	this.rdoTY_EBILL 		= this.divData.form.rdoTY_EBILL;
        	this.rdoYN_JOINT 		= this.divData.form.rdoYN_JOINT;
        	this.txtDS_REMARK 		= this.divData.form.txtDS_REMARK;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_CUSTOMER.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CUSTOMER.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("NO_CHASU", "string");
        	this.dsInsert.addColumn("NO_DONG", "string");
        	this.dsInsert.addColumn("NO_FLOOR", "string");
        	this.dsInsert.addColumn("NO_HO", "string");
        	this.dsInsert.addColumn("NO_UNIONMEMBER", "string");
        	this.dsInsert.addColumn("DT_TRANSFER", "string");
        	this.dsInsert.addColumn("TY_CONTRACTOR", "string");
        	this.dsInsert.addColumn("DS_CONTRACTOR", "string");
        	this.dsInsert.addColumn("NO_JUMIN", "string");
        	this.dsInsert.addColumn("NO_RECPOST", "string");
        	this.dsInsert.addColumn("DS_RECADDR2", "string");
        	this.dsInsert.addColumn("DS_RECADDR3", "string");
        	this.dsInsert.addColumn("NO_POST", "string");
        	this.dsInsert.addColumn("DS_ADDR2", "string");
        	this.dsInsert.addColumn("DS_ADDR3", "string");
        	this.dsInsert.addColumn("NO_TEL", "string");
        	this.dsInsert.addColumn("NO_OFFICETEL", "string");
        	this.dsInsert.addColumn("NO_MOBILE", "string");
        	this.dsInsert.addColumn("DS_EMAIL", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("DS_VENDOR", "string");
        	this.dsInsert.addColumn("DS_UPJONG", "string");
        	this.dsInsert.addColumn("DS_UPTAE", "string");
        	this.dsInsert.addColumn("DS_REMARK", "string");
        	this.dsInsert.addColumn("YN_EBILL", "string");
        	this.dsInsert.addColumn("YN_JOINT", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

         /************************************************************************
         * 콤보 이벤트
         ************************************************************************/


        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsData.getColumn(0, "DT_TRANSFER"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.calDT_TRANSFER.setFocus();
        		}
        		this.gfnAlert("변경일자를 입력하지 않았습니다.", "fnVaidateCallback");
        		return;
        	}

        	if (this.gfnIsNull(this.dsData.getColumn(0, "NO_JUMIN"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.txtNO_JUMIN.setFocus();
        		}
        		this.gfnAlert("주민등록번호를 입력하지 않았습니다.", "fnVaidateCallback");
        		return;
        	}

        	if (this.gfnIsNull(this.dsData.getColumn(0, "DS_CONTRACTOR"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.txtDS_CONTRACTOR.setFocus();
        		}
        		this.gfnAlert("계약자성명을 입력하지 않았습니다.", "fnVaidateCallback");
        		return;
        	}

        	if(this.dsData.getColumn(0, "TY_CONTRACTOR") == "P"){	//개인일경우
        		if (nexacro.replaceAll(this.dsData.getColumn(0, "NO_JUMIN"),"-","").length != 13) {
        			validate = false;
        			this.fnVaidateCallback = function() {
        				this.txtNO_JUMIN.setFocus();
        			}
        			this.gfnAlert("주민등록번호는 13자리입니다.", "fnVaidateCallback");
        			return;
        //		} else {
        // 			공통체크 gfnIsSSN 가 2000년대생 체크로직이 안들어가 있어서 무조건 fasle 가 들어옴
        // 			if(!this.gfnIsSSN(nexacro.replaceAll(this.dsData.getColumn(0, "NO_JUMIN"),"-",""))){
        // 				validate = false;
        // 				this.fnVaidateCallback = function() {
        // 					this.txtNO_JUMIN.setFocus();
        // 				}
        // 				this.gfnAlert("잘못된 주민등록번호입니다.", "fnVaidateCallback");
        // 				return;
        // 			}
        		}
        	} else if(this.dsData.getColumn(0, "TY_CONTRACTOR") == "C"){	//법인일경우
        		if (this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "CD_VENDOR")))) {
        			validate = false;
        			this.fnVaidateCallback = function() {
        				this.txtCD_VENDOR.setFocus();
        			}
        			this.gfnAlert("사업자등록번호를 입력하지 않았습니다.", "fnVaidateCallback");
        			return;
        		}
        		if(!this.gfnIsBzIdNo(nexacro.replaceAll(this.dsData.getColumn(0, "CD_VENDOR"),"-",""))){
        			validate = false;
        			this.fnVaidateCallback = function() {
        				this.txtCD_VENDOR.setFocus();
        			}
        			this.gfnAlert("잘못된 사업자등록번호입니다.", "fnVaidateCallback");
        			return;
        		}

        		if (this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "DS_VENDOR")))) {
        			validate = false;
        			this.fnVaidateCallback = function() {
        				this.txtDS_VENDOR.setFocus();
        			}
        			this.gfnAlert("상호를 입력하지 않았습니다.", "fnVaidateCallback");
        			return;
        		}
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "NO_TEL"))) &&
        	    this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "NO_OFFICETEL"))) &&
        		this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "NO_MOBILE")))) {
        		validate = false;
        		this.gfnAlert("전화번호를 입력하지 않았습니다.");
        		return;
        	}

        	if (!this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "NO_TEL")))) {
        		if(!nexacro.isNumeric(nexacro.replaceAll(nexacro.replaceAll(this.dsData.getColumn(0, "NO_TEL"),"-",""),")",""))){
        			validate = false;
        			this.fnVaidateCallback = function() {
        				this.txtNO_TEL.setFocus();
        			}
        			this.gfnAlert("자택 전화번호가 정확하지 않습니다.", "fnVaidateCallback");
        			return;
        		}
        	}

        	if (!this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "NO_OFFICETEL")))) {
        		if(!nexacro.isNumeric(nexacro.replaceAll(nexacro.replaceAll(this.dsData.getColumn(0, "NO_OFFICETEL"),"-",""),")",""))){
        			validate = false;
        			this.fnVaidateCallback = function() {
        				this.txtNO_OFFICETEL.setFocus();
        			}
        			this.gfnAlert("직장 전화번호가 정확하지 않습니다.", "fnVaidateCallback");
        			return;
        		}
        	}
        	if (!this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "NO_MOBILE")))) {
        		if(!nexacro.isNumeric(nexacro.replaceAll(nexacro.replaceAll(this.dsData.getColumn(0, "NO_MOBILE"),"-",""),")",""))){
        			validate = false;
        			this.fnVaidateCallback = function() {
        				this.txtNO_MOBILE.setFocus();
        			}
        			this.gfnAlert("휴대폰 번호가 정확하지 않습니다.", "fnVaidateCallback");
        			return;
        		}
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "NO_POST")))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfNO_POST.form.setFocus();
        		}
        		this.gfnAlert("현주소를 입력하지 않았습니다.", "fnVaidateCallback");
        		return;
        	}
        	if (this.gfnIsNull(this.gfnTrim(this.dsData.getColumn(0, "NO_RECPOST")))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfNO_RECPOST.form.setFocus();
        		}
        		this.gfnAlert("주민등록주소를 입력하지 않았습니다.", "fnVaidateCallback");
        		return;
        	}
        	return validate;
        }
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "save") {
        		if(errorCode == 0){
        			this.getParentContext().close(true);
        		}else{
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CUSTOMER") {
        		dsUserParam.setColumn(nrow, "TY_CONT", this.dsData.getColumn(0, "TY_CUSTOMER"));
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id){
        		case "ccfCD_CUSTOMER" :
        			this.dsData.setColumn(0, "NO_JUMIN"	   	, arr[0].NO_JUMIN);
        			this.dsData.setColumn(0, "NO_TEL"	   	, arr[0].NO_TEL);
        			this.dsData.setColumn(0, "NO_OFFICETEL"	, arr[0].NO_OFFICETEL);
        			this.dsData.setColumn(0, "DS_CONTRACTOR", arr[0].DS_CUSTOMER);
        			this.dsData.setColumn(0, "NO_MOBILE"   	, arr[0].NO_MOBILE);
        			this.dsData.setColumn(0, "NO_POST"	  	, arr[0].NO_POST);
        			this.dsData.setColumn(0, "DS_ADDR2"	   	, arr[0].DS_ADDR2);
        			this.dsData.setColumn(0, "DS_ADDR3"	   	, arr[0].DS_ADDR3);
        			this.dsData.setColumn(0, "NO_RECPOST"  	, arr[0].NO_RECPOST);
        			this.dsData.setColumn(0, "DS_RECADDR2" 	, arr[0].DS_RECADDR2);
        			this.dsData.setColumn(0, "DS_RECADDR3" 	, arr[0].DS_RECADDR3);
        			this.dsData.setColumn(0, "DS_EMAIL"    	, arr[0].DS_EMAIL);
        			this.dsData.setColumn(0, "DS_REMARK"   	, arr[0].DS_REMARK);

        			if(this.dsData.getColumn(0, "TY_CUSTOMER") == "P"){	//개인
        				this.dsData.setColumn(0, "TY_CONTRACTOR", "P");
        				this.dsData.setColumn(0, "CD_VENDOR"	, "");
        				this.dsData.setColumn(0, "DS_VENDOR"	, "");
        				this.dsData.setColumn(0, "DS_UPTAE"		, "");
        				this.dsData.setColumn(0, "DS_UPJONG"	, "");
        			}else{	//법인
        				this.dsData.setColumn(0, "TY_CONTRACTOR", "C");
        				this.dsData.setColumn(0, "CD_VENDOR"	, arr[0].CD_VENDOR);
        				this.dsData.setColumn(0, "DS_VENDOR"	, arr[0].DS_VENDOR1);
        				this.dsData.setColumn(0, "DS_UPTAE"		, arr[0].DS_UPTAE);
        				this.dsData.setColumn(0, "DS_UPJONG"	, arr[0].DS_UPJONG);
        			}
        			break;
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.dsData_oncolumnchanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		if(e.columnid == "TY_CONTRACTOR"){
        			obj.setColumn(e.row, "NO_JUMIN" 	 , "");
        			obj.setColumn(e.row, "DS_CONTRACTOR" , "");
        			obj.setColumn(e.row, "NO_TEL" 		 , "");
        			obj.setColumn(e.row, "NO_OFFICETEL"  , "");
        			obj.setColumn(e.row, "NO_MOBILE" 	 , "");
        			obj.setColumn(e.row, "DS_EMAIL" 	 , "");
        			obj.setColumn(e.row, "NO_POST" 	  	 , "");
        			obj.setColumn(e.row, "DS_ADDR2" 	 , "");
        			obj.setColumn(e.row, "DS_ADDR3" 	 , "");
        			obj.setColumn(e.row, "NO_RECPOST" 	 , "");
        			obj.setColumn(e.row, "DS_RECADDR2"   , "");
        			obj.setColumn(e.row, "DS_RECADDR3"   , "");
        			obj.setColumn(e.row, "DS_REMARK"     , "");

        			if(e.newvalue == "P"){	//개인
        				this.txtCD_VENDOR.set_readonly(true);
        				this.txtDS_VENDOR.set_readonly(true);
        				this.txtDS_UPJONG.set_readonly(true);
        				this.txtDS_UPTAE.set_readonly(true);

        				obj.setColumn(e.row, "CD_VENDOR"	 , "");
        				obj.setColumn(e.row, "DS_VENDOR"	 , "");
        				obj.setColumn(e.row, "DS_UPJONG"	 , "");
        				obj.setColumn(e.row, "DS_UPTAE"      , "");
        			} else if (e.newvalue == "C"){	//법인
        				this.txtCD_VENDOR.set_readonly(false);
        				this.txtDS_VENDOR.set_readonly(false);
        				this.txtDS_UPJONG.set_readonly(false);
        				this.txtDS_UPTAE.set_readonly(false);
        			} else {	//개인사업자
        				this.txtCD_VENDOR.set_readonly(false);
        				this.txtDS_VENDOR.set_readonly(false);
        				this.txtDS_UPJONG.set_readonly(false);
        				this.txtDS_UPTAE.set_readonly(false);

        				obj.setColumn(e.row, "NO_JUMIN" 	 , this.getOwnerFrame().NO_JUMIN);
        				obj.setColumn(e.row, "DS_CONTRACTOR" , this.getOwnerFrame().DS_CONTRACTOR);
        				obj.setColumn(e.row, "NO_TEL" 		 , this.getOwnerFrame().NO_TEL);
        				obj.setColumn(e.row, "NO_OFFICETEL"  , this.getOwnerFrame().NO_OFFICETEL);
        				obj.setColumn(e.row, "NO_MOBILE" 	 , this.getOwnerFrame().NO_MOBILE);
        				obj.setColumn(e.row, "DS_EMAIL" 	 , this.getOwnerFrame().DS_EMAIL);
        				obj.setColumn(e.row, "NO_POST" 	  	 , this.getOwnerFrame().NO_POST);
        				obj.setColumn(e.row, "DS_ADDR2" 	 , this.getOwnerFrame().DS_ADDR1);
        				obj.setColumn(e.row, "DS_ADDR3" 	 , this.getOwnerFrame().DS_ADDR2);
        				obj.setColumn(e.row, "NO_RECPOST" 	 , this.getOwnerFrame().NO_RECPOST);
        				obj.setColumn(e.row, "DS_RECADDR2"   , this.getOwnerFrame().DS_RECADDR1);
        				obj.setColumn(e.row, "DS_RECADDR3"   , this.getOwnerFrame().DS_RECADDR2);
        			}
        		}
        	}
        };

        //확인버튼
        this.btnConf_onclick = function(obj,e)
        {
        	if(!this.fnSaveValidate()) return;

        	this.dsInsert.clearData();
        	var nrow = this.dsInsert.addRow();

        	this.dsInsert.setColumn(nrow, "CD_ACNTUNIT"		, this.dsData.getColumn(0, "CD_ACNTUNIT"));
        	this.dsInsert.setColumn(nrow, "TY_GUBUN"		, this.dsData.getColumn(0, "TY_GUBUN"));
        	this.dsInsert.setColumn(nrow, "NO_CHASU"		, this.dsData.getColumn(0, "NO_CHASU"));
        	this.dsInsert.setColumn(nrow, "NO_DONG"			, this.dsData.getColumn(0, "NO_DONG"));
        	this.dsInsert.setColumn(nrow, "NO_FLOOR"		, this.dsData.getColumn(0, "NO_FLOOR"));
        	this.dsInsert.setColumn(nrow, "NO_HO"			, this.dsData.getColumn(0, "NO_HO"));
        	this.dsInsert.setColumn(nrow, "NO_UNIONMEMBER"  , this.dsData.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsInsert.setColumn(nrow, "DT_TRANSFER"  	, this.dsData.getColumn(0, "DT_TRANSFER"));
        	this.dsInsert.setColumn(nrow, "TY_CONTRACTOR"   , this.dsData.getColumn(0, "TY_CONTRACTOR"));
        	this.dsInsert.setColumn(nrow, "DS_CONTRACTOR"   , this.dsData.getColumn(0, "DS_CONTRACTOR"));
        	this.dsInsert.setColumn(nrow, "NO_JUMIN"  		, nexacro.replaceAll(this.dsData.getColumn(0, "NO_JUMIN"),"-",""));
        	this.dsInsert.setColumn(nrow, "NO_RECPOST"  	, nexacro.replaceAll(this.dsData.getColumn(0, "NO_RECPOST"),"-",""));
        	this.dsInsert.setColumn(nrow, "DS_RECADDR2"  	, this.dsData.getColumn(0, "DS_RECADDR2"));
        	this.dsInsert.setColumn(nrow, "DS_RECADDR3"  	, this.dsData.getColumn(0, "DS_RECADDR3"));
        	this.dsInsert.setColumn(nrow, "NO_POST"  		, nexacro.replaceAll(this.dsData.getColumn(0, "NO_POST"),"-",""));
        	this.dsInsert.setColumn(nrow, "DS_ADDR2"  		, this.dsData.getColumn(0, "DS_ADDR2"));
        	this.dsInsert.setColumn(nrow, "DS_ADDR3"  		, this.dsData.getColumn(0, "DS_ADDR3"));
        	this.dsInsert.setColumn(nrow, "NO_TEL"  		, this.dsData.getColumn(0, "NO_TEL"));
        	this.dsInsert.setColumn(nrow, "NO_OFFICETEL"  	, this.dsData.getColumn(0, "NO_OFFICETEL"));
        	this.dsInsert.setColumn(nrow, "NO_MOBILE"  		, this.dsData.getColumn(0, "NO_MOBILE"));
        	this.dsInsert.setColumn(nrow, "DS_EMAIL"  		, this.dsData.getColumn(0, "DS_EMAIL"));
        	this.dsInsert.setColumn(nrow, "CD_VENDOR"  		, nexacro.replaceAll(this.dsData.getColumn(0, "CD_VENDOR"),"-",""));
        	this.dsInsert.setColumn(nrow, "DS_VENDOR"  		, this.dsData.getColumn(0, "DS_VENDOR"));
        	this.dsInsert.setColumn(nrow, "DS_UPJONG"		, this.dsData.getColumn(0, "DS_UPJONG"));
        	this.dsInsert.setColumn(nrow, "DS_UPTAE"  		, this.dsData.getColumn(0, "DS_UPTAE"));
        	this.dsInsert.setColumn(nrow, "DS_REMARK"  		, this.dsData.getColumn(0, "DS_REMARK"));
        	this.dsInsert.setColumn(nrow, "YN_EBILL"  		, this.dsData.getColumn(0, "YN_EBILL"));
        	this.dsInsert.setColumn(nrow, "YN_JOINT"  		, this.dsData.getColumn(0, "YN_JOINT"));
        	this.dsInsert.setColumn(nrow, "ID_INSERT"		, this.AuthClient.ID_USER);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert";
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
        };

        //취소버튼
        this.btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        this.divData_txtDS_ADDR_onkillfocus = function(obj,e)
        {
        	this.dsData.setColumn(0, "NO_RECPOST" 	 , this.dsData.getColumn(0, "NO_POST"));
        	this.dsData.setColumn(0, "DS_RECADDR2"   , this.dsData.getColumn(0, "DS_ADDR2"));
        	this.dsData.setColumn(0, "DS_RECADDR3"   , this.dsData.getColumn(0, "DS_ADDR3"));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staTITLE.addEventHandler("onclick",this.divData_staTITLE_onclick,this);
            this.divData.form.txtDS_ADDR.addEventHandler("onkillfocus",this.divData_txtDS_ADDR_onkillfocus,this);
            this.btnConf.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.dsData.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
            this.dsData.addEventHandler("oncolumnchanged",this.dsData_oncolumnchanged,this);
        };
        this.loadIncludeScript("DRB_DLGTRANSFER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
