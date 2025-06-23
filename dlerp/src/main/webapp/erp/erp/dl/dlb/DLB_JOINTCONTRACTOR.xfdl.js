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
            this.set_titletext("공동명의계약자");
            this.getSetter("maxwidth").set("1200");
            this.getSetter("maxheight").set("900");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTY_CONTRACTOR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">P</Col><Col id=\"DS_CODE\">개인</Col></Row><Row><Col id=\"CD_CODE\">C</Col><Col id=\"DS_CODE\">법인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EBILL", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">전자</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">종이</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_JOINT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">있음</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">없음</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DLBPR_CONTRACT_DETAIL_SELECT</Col></Row><Row><Col id=\"TARGET\">selectJoint</Col><Col id=\"SP\">DRBPR_JOINTCONTRACTOR_SELECT</Col></Row><Row><Col id=\"TARGET\">insertJoint</Col><Col id=\"SP\">DRBPR_JOINTCONTRACTOR_INSERT</Col></Row><Row><Col id=\"TARGET\">updateJoint</Col><Col id=\"SP\">DRBPR_JOINTCONTRACTOR_UPDATE</Col></Row><Row><Col id=\"TARGET\">deleteJoint</Col><Col id=\"SP\">DRBPR_JOINTCONTRACTOR_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/><Column id=\"NO_UNIONMEMBER\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DISTRICT\" type=\"STRING\" size=\"256\"/><Column id=\"RT_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"DS_ACNTUNIT\"/><Col id=\"NO_DONG\"/><Col id=\"NO_FLOOR\"/><Col id=\"NO_HO\"/><Col id=\"NO_UNIONMEMBER\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DISTRICT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_OPTION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_BUNYANG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_OFFICETEL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR3\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPTAE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_UPJONG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"TY_EBILL\" type=\"STRING\" size=\"256\"/><Column id=\"NO_GUJA\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR1\" type=\"STRING\" size=\"256\"/><Column id=\"YN_JOINT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_RECPOST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_POST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR2\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONTRACTOR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListJoint", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사업지코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","400","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staContent","ccfCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("동층호");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_DONG","staContent:0.0","10.0","50","24.0","15",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_FLOOR","ctxtNO_DONG:0.0","10.0","30","24.0","15",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNO_HO","ctxtNO_FLOOR:0.0","10.0","50","24.0","15",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCancelInfo","0","10",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","staCancelInfo:10","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("평형");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_SIZE","sta01:-1","staCancelInfo:10","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtNO_SIZE","sta01:4","staCancelInfo:14","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxt_SIZE1","edttxtNO_SIZE:2","staCancelInfo:10","30","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("면적");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtTY_TYPE","statxt_SIZE1:4","staCancelInfo:14","30","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxt_SIZE2","edttxtTY_TYPE:2","staCancelInfo:10","30","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("형");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","statxtNO_SIZE:-1","staCancelInfo:10","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("군/OPTION");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtTY_DISTRICT","sta02:-1","staCancelInfo:10","468","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtTY_DISTRICT","sta02:4","staCancelInfo:14","40","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfTY_DISTRICT","edttxtTY_DISTRICT:5","staCancelInfo:14","413","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CFDISTRICT_CODEFIND");
            obj.getSetter("CDTextWidth").set("120");
            obj.set_taborder("20");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","0","sta01:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("분양상태");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtYN_OPTION","sta03:-1","sta01:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtYN_OPTION","sta03:4","sta01:4","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","statxtYN_OPTION:-1","sta01:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("분양구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtTY_BUNYANG","sta04:-1","sta01:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtTY_BUNYANG","sta04:4","sta01:4","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","statxtTY_BUNYANG:-1","sta01:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtTY_CONTRACTOR","sta05:-1","sta01:-1","190","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_CONTRACTOR","sta05:4","sta01:5","228","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_direction("vertical");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_CONTRACTOR");
            obj.set_fittocontents("width");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta03:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("계약일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtDT_CONTRACT","sta06:-1","sta03:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtDT_CONTRACT","sta06:4","sta03:4","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","statxtDT_CONTRACT:-1","sta03:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("계약자명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtDS_CONTRACTOR","sta07:-1","sta03:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtDS_CONTRACTOR","sta07:4","sta03:4","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","statxtDS_CONTRACTOR:-1","sta03:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_JUMIN","sta08:-1","sta03:-1","190","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtNO_JUMIN","sta08:4","sta03:4","179","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","0","sta06:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_text("☎(자택)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_TEL","sta09:-1","sta06:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtNO_TEL","sta09:4","sta06:4","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","statxtNO_TEL:-1","sta06:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_text("☎(직장)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_OFFICETEL","sta10:-1","sta06:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtNO_OFFICETEL","sta10:4","sta06:4","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","statxtNO_OFFICETEL:-1","sta06:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("statxtNO_MOBILE","sta11:-1","sta06:-1","190","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edttxtNO_MOBILE","sta11:4","sta06:4","179","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_enable("false");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta23","0","sta09:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_text("주민등록주소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta24","sta23:-1","sta09:-1","766","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfNO_RECPOST","sta23:5","sta09:4","400","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("50");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("주소");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_RECADDR2","cfNO_RECPOST:5","sta09:4","349","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta25","0","sta23:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_text("현주소");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta26","sta25:-1","sta24:-1","766","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfNO_POST","sta25:5","sta24:4","400","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFZIP_STREET");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("54");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("주소");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_ADDR2","cfNO_POST:5","sta24:4","349","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta27","0","sta25:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_text("e-Mail");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta28","sta27:-1","sta26:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_EMAIL","sta27:5","sta26:4","149","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta29","sta28:-1","sta25:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("59");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta30","sta29:-1","sta26:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_UPTAE","sta29:5","sta26:4","149","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("61");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta31","sta30:-1","sta25:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("62");
            obj.set_text("업종");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta32","sta31:-1","sta26:-1","190","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_UPJONG","sta31:5","sta26:4","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("64");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta33","0","sta27:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("65");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta34","sta33:-1","sta27:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtCD_VENDOR","sta33:5","sta27:4","149","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("67");
            obj.getSetter("onclick").set("divData_txtCD_VENDOR_onclick");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta35","sta34:-1","sta29:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("68");
            obj.set_text("세금계산서발급구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta36","sta35:-1","sta30:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_EBILL","sta35:5","sta30:4","137","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("70");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_EBILL");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("계약구분");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta37","sta36:-1","sta29:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("71");
            obj.set_text("가상계좌");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta38","sta37:-1","sta29:-1","190","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_GUJA","sta37:5","sta29:4","178","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("73");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta39","0","sta33:-1","120","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("74");
            obj.set_text("상호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta40","sta33:-1","sta33:-1","160","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_VENDOR","sta39:5","sta33:4","149","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("76");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta41","sta40:-1","sta33:-1","140","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("77");
            obj.set_text("공동명의계약자여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta42","sta41:-1","sta33:-1","468","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_JOINT","sta41:5","sta33:4","133","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("79");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_JOINT");
            obj.getSetter("requiredYN").set("Y");
            obj.getSetter("requiredMsg").set("계약구분");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta43","0","sta39:-1","120","50",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("80");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta44","sta43:-1","sta40:-1","766","50",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","sta43:5","sta40:4","754","40",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("82");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta43:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("83");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctxtNO_DONG","value","dsSearch","NO_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctxtNO_FLOOR","value","dsSearch","NO_FLOOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctxtNO_HO","value","dsSearch","NO_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.edttxtNO_SIZE","value","dsList","NO_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.edttxtTY_TYPE","value","dsList","TY_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.edttxtTY_DISTRICT","value","dsList","TY_DISTRICT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.edttxtYN_OPTION","value","dsList","YN_OPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.edttxtTY_BUNYANG","value","dsList","TY_BUNYANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.edttxtDT_CONTRACT","value","dsList","DT_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.edttxtDS_CONTRACTOR","value","dsList","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.edttxtNO_JUMIN","value","dsList","NO_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.edttxtNO_TEL","value","dsList","NO_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.edttxtNO_OFFICETEL","value","dsList","NO_OFFICETEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.edttxtNO_MOBILE","value","dsList","NO_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.txtDS_RECADDR2","value","dsList","DS_RECADDR3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.txtDS_ADDR2","value","dsList","DS_ADDR3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.txtDS_EMAIL","value","dsList","DS_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.txtDS_UPTAE","value","dsList","DS_UPTAE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.txtDS_UPJONG","value","dsList","DS_UPJONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.txtCD_VENDOR","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.rdoTY_EBILL","value","dsList","TY_EBILL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.txtNO_GUJA","value","dsList","NO_GUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.txtDS_VENDOR","value","dsList","CD_VENDOR1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.rdoYN_JOINT","value","dsList","YN_JOINT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.txtDS_REMARK","value","dsList","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.cfNO_RECPOST.form.CDTextBox","value","dsList","NO_RECPOST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.cfNO_RECPOST.form.DSTextBox","value","dsList","DS_RECADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.cfNO_POST.form.CDTextBox","value","dsList","NO_POST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.cfNO_POST.form.DSTextBox","value","dsList","DS_ADDR2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.rdoTY_CONTRACTOR","value","dsList","TY_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DLB_JOINTCONTRACTOR.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "CD_ACNTUNIT"   , this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsSearch.setColumn(0, "DS_ACNTUNIT"   , this.getOwnerFrame().DS_ACNTUNIT);
        	this.dsSearch.setColumn(0, "NO_DONG"       , this.getOwnerFrame().DONG);
        	this.dsSearch.setColumn(0, "NO_FLOOR"      , this.getOwnerFrame().FLOOR);
        	this.dsSearch.setColumn(0, "NO_HO"         , this.getOwnerFrame().HO);
        	this.dsSearch.setColumn(0, "NO_UNIONMEMBER", this.getOwnerFrame().UNIONMEMBER);
        	this.dsSearch.setColumn(0, "NO_SIZE"       , this.getOwnerFrame().NO_SIZE);
        	this.dsSearch.setColumn(0, "TY_TYPE"       , this.getOwnerFrame().TY_TYPE);
        	this.dsSearch.setColumn(0, "TY_DISTRICT"   , this.getOwnerFrame().TY_DISTRICT);
        	this.dsSearch.setColumn(0, "RT_OPTION"     , this.getOwnerFrame().RT_OPTION);
        	this.dsSearch.setColumn(0, "DS_OPTION"     , this.getOwnerFrame().DS_OPTION);

        	this.ccfCD_ACNTUNIT.set_enable(false);
        	this.ctxtNO_DONG.set_readonly(true);
        	this.ctxtNO_FLOOR.set_readonly(true);
        	this.ctxtNO_HO.set_readonly(true);
        	this.ctxtNO_DONG.set_readonly(true);
        	this.ccfTY_DISTRICT.set_enable(false);
        	this.rdoTY_CONTRACTOR.set_enable(false);
        	this.rdoTY_EBILL.set_enable(false);
        	this.rdoYN_JOINT.set_enable(false);

        	this.fnSelect();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {};

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_ACNTUNIT 	 = this.divSearch.form.ccfCD_ACNTUNIT;	// 사업지코드
        	this.ctxtNO_DONG         = this.divSearch.form.ctxtNO_DONG;
        	this.ctxtNO_FLOOR        = this.divSearch.form.ctxtNO_FLOOR;
        	this.ctxtNO_HO           = this.divSearch.form.ctxtNO_HO;
        	this.ctxtNO_DONG         = this.divSearch.form.ctxtNO_DONG;

        	this.ccfTY_DISTRICT      = this.divData.form.ccfTY_DISTRICT;
        	this.rdoTY_CONTRACTOR    = this.divData.form.rdoTY_CONTRACTOR;
        	this.rdoTY_EBILL         = this.divData.form.rdoTY_EBILL;
        	this.rdoYN_JOINT         = this.divData.form.rdoYN_JOINT;

        	this.dxGrid              = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsListJoint, "DL", "DLB_JOINTCONTRACTOR");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT"     		, "string");
        	this.dsSelect.addColumn("TY_GUBUN"        		, "string");
        	this.dsSelect.addColumn("NO_CHASU"        		, "string");
        	this.dsSelect.addColumn("NO_DONG"         		, "string");
        	this.dsSelect.addColumn("NO_FLOOR"        		, "string");
        	this.dsSelect.addColumn("NO_HO"           		, "string");

        	this.dsSelectJoint = new Dataset();
        	this.dsSelectJoint.addColumn("CD_ACNTUNIT"      , "string");
        	this.dsSelectJoint.addColumn("TY_GUBUN"         , "string");
        	this.dsSelectJoint.addColumn("NO_CHASU"         , "string");
        	this.dsSelectJoint.addColumn("NO_DONG"          , "string");
        	this.dsSelectJoint.addColumn("NO_FLOOR"         , "string");
        	this.dsSelectJoint.addColumn("NO_HO"            , "string");
        	this.dsSelectJoint.addColumn("NO_UNIONMEMBER"   , "string");
        	this.dsSelectJoint.addColumn("NO_MNJUMIN"       , "string");

        	this.dsInsertJoint = new Dataset();
        	this.dsInsertJoint.addColumn("CD_ACNTUNIT"      , "string");
        	this.dsInsertJoint.addColumn("TY_GUBUN"         , "string");
        	this.dsInsertJoint.addColumn("NO_CHASU"         , "string");
        	this.dsInsertJoint.addColumn("NO_DONG"          , "string");
        	this.dsInsertJoint.addColumn("NO_FLOOR"         , "string");
        	this.dsInsertJoint.addColumn("NO_HO"            , "string");
        	this.dsInsertJoint.addColumn("NO_UNIONMEMBER"   , "string");
        	this.dsInsertJoint.addColumn("NO_MNJUMIN"       , "string");
        	this.dsInsertJoint.addColumn("TY_CONTRACTOR"    , "string");
        	this.dsInsertJoint.addColumn("NO_JUMIN"         , "string");
        	this.dsInsertJoint.addColumn("CD_VENDOR"        , "string");
        	this.dsInsertJoint.addColumn("DS_VENDOR"        , "string");
        	this.dsInsertJoint.addColumn("DS_UPJONG"        , "string");
        	this.dsInsertJoint.addColumn("DS_UPTAE"         , "string");
        	this.dsInsertJoint.addColumn("DT_CONTRACTOR"    , "string");
        	this.dsInsertJoint.addColumn("DS_CONTRACTOR"    , "string");
        	this.dsInsertJoint.addColumn("RT_PORTION"       , "string");
        	this.dsInsertJoint.addColumn("NO_TEL"           , "string");
        	this.dsInsertJoint.addColumn("NO_MOBILE"        , "string");
        	this.dsInsertJoint.addColumn("NO_OFFICETEL"     , "string");
        	this.dsInsertJoint.addColumn("DS_EMAIL"         , "string");
        	this.dsInsertJoint.addColumn("NO_POST"          , "string");
        	this.dsInsertJoint.addColumn("DS_ADDR1"         , "string");
        	this.dsInsertJoint.addColumn("DS_ADDR2"         , "string");
        	this.dsInsertJoint.addColumn("DS_ETC"           , "string");
        	this.dsInsertJoint.addColumn("ID_INSERT"        , "string");

        	this.dsUpdateJoint = new Dataset();
        	this.dsUpdateJoint.addColumn("CD_ACNTUNIT"      , "string");
        	this.dsUpdateJoint.addColumn("TY_GUBUN"         , "string");
        	this.dsUpdateJoint.addColumn("NO_CHASU"         , "string");
        	this.dsUpdateJoint.addColumn("NO_DONG"          , "string");
        	this.dsUpdateJoint.addColumn("NO_FLOOR"         , "string");
        	this.dsUpdateJoint.addColumn("NO_HO"            , "string");
        	this.dsUpdateJoint.addColumn("NO_UNIONMEMBER"   , "string");
        	this.dsUpdateJoint.addColumn("NO_MNJUMIN"       , "string");
        	this.dsUpdateJoint.addColumn("TY_CONTRACTOR"    , "string");
        	this.dsUpdateJoint.addColumn("NO_JUMIN"         , "string");
        	this.dsUpdateJoint.addColumn("CD_VENDOR"        , "string");
        	this.dsUpdateJoint.addColumn("DS_VENDOR"        , "string");
        	this.dsUpdateJoint.addColumn("DS_UPJONG"        , "string");
        	this.dsUpdateJoint.addColumn("DS_UPTAE"         , "string");
        	this.dsUpdateJoint.addColumn("DT_CONTRACTOR"    , "string");
        	this.dsUpdateJoint.addColumn("DS_CONTRACTOR"    , "string");
        	this.dsUpdateJoint.addColumn("RT_PORTION"       , "string");
        	this.dsUpdateJoint.addColumn("NO_TEL"           , "string");
        	this.dsUpdateJoint.addColumn("NO_MOBILE"        , "string");
        	this.dsUpdateJoint.addColumn("NO_OFFICETEL"     , "string");
        	this.dsUpdateJoint.addColumn("DS_EMAIL"         , "string");
        	this.dsUpdateJoint.addColumn("NO_POST"          , "string");
        	this.dsUpdateJoint.addColumn("DS_ADDR1"         , "string");
        	this.dsUpdateJoint.addColumn("DS_ADDR2"         , "string");
        	this.dsUpdateJoint.addColumn("DS_ETC"           , "string");
        	this.dsUpdateJoint.addColumn("ID_INSERT"        , "string");

        	this.dsDeleteJoint = new Dataset();
        	this.dsDeleteJoint.addColumn("CD_ACNTUNIT"      , "string");
        	this.dsDeleteJoint.addColumn("TY_GUBUN"         , "string");
        	this.dsDeleteJoint.addColumn("NO_CHASU"         , "string");
        	this.dsDeleteJoint.addColumn("NO_DONG"          , "string");
        	this.dsDeleteJoint.addColumn("NO_FLOOR"         , "string");
        	this.dsDeleteJoint.addColumn("NO_HO"            , "string");
        	this.dsDeleteJoint.addColumn("NO_UNIONMEMBER"   , "string");
        	this.dsDeleteJoint.addColumn("NO_MNJUMIN"       , "string");
        	this.dsDeleteJoint.addColumn("NO_JOINT"         , "string");
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

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG"       , this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR"      , this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO"         , this.dsSearch.getColumn(0, "NO_HO"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        this.fnSelectJoint = function() {

        	this.dsSelectJoint.clearData();
        	this.dsSelectJoint.addRow();

        	this.dsSelectJoint.setColumn(0, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelectJoint.setColumn(0, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelectJoint.setColumn(0, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelectJoint.setColumn(0, "NO_DONG"       , this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelectJoint.setColumn(0, "NO_FLOOR"      , this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelectJoint.setColumn(0, "NO_HO"         , this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelectJoint.setColumn(0, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        	this.dsSelectJoint.setColumn(0, "NO_MNJUMIN"    , this.dsList.getColumn(0, "NO_JUMIN"));

        	var strSvcId    = "selectJoint";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectJoint=dsSelectJoint";
        	var outData     = "dsListJoint=selectJoint0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

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
        	this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if(!this.gfnGridValidate(this.dxGrid)) return false;

        	this.dxGrid.updateToDataset();

        	this.dsInsertJoint.clearData();
        	this.dsUpdateJoint.clearData();
        	this.dsDeleteJoint.clearData();

        	for (var i = 0; i < this.dsListJoint.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListJoint, i);

        		switch(flag) {
        			case "I" :

        					var nRow = this.dsInsertJoint.addRow();

        					this.dsInsertJoint.setColumn(nRow, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        					this.dsInsertJoint.setColumn(nRow, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        					this.dsInsertJoint.setColumn(nRow, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        					this.dsInsertJoint.setColumn(nRow, "NO_DONG"       , this.dsSearch.getColumn(0, "NO_DONG"));
        					this.dsInsertJoint.setColumn(nRow, "NO_FLOOR"      , this.dsSearch.getColumn(0, "NO_FLOOR"));
        					this.dsInsertJoint.setColumn(nRow, "NO_HO"         , this.dsSearch.getColumn(0, "NO_HO"));
        					this.dsInsertJoint.setColumn(nRow, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        					this.dsInsertJoint.setColumn(nRow, "NO_MNJUMIN"    , this.dsList.getColumn(0, "NO_JUMIN").replace("-", ""));
        					this.dsInsertJoint.setColumn(nRow, "TY_CONTRACTOR" , this.dsListJoint.getColumn(0, "TY_CONTRACTOR") == "개인" ? "P" : "C");
        					this.dsInsertJoint.setColumn(nRow, "NO_JUMIN"      , this.dsListJoint.getColumn(i, "NO_JUMIN").replace("-", ""));
        					this.dsInsertJoint.setColumn(nRow, "CD_VENDOR"     , this.dsListJoint.getColumn(i, "CD_VENDOR").replace("-", ""));
        					this.dsInsertJoint.setColumn(nRow, "DS_VENDOR"     , this.dsListJoint.getColumn(i, "DS_VENDOR"));
        					this.dsInsertJoint.setColumn(nRow, "DS_UPJONG"     , this.dsListJoint.getColumn(i, "DS_UPJONG"));
        					this.dsInsertJoint.setColumn(nRow, "DS_UPTAE"      , this.dsListJoint.getColumn(i, "DS_UPTAE"));
        					this.dsInsertJoint.setColumn(nRow, "DT_CONTRACTOR" , this.dsListJoint.getColumn(i, "DT_CONTRACTOR").replace("-", ""));
        					this.dsInsertJoint.setColumn(nRow, "DS_CONTRACTOR" , this.dsListJoint.getColumn(i, "DS_CONTRACTOR"));
        					this.dsInsertJoint.setColumn(nRow, "RT_PORTION"    , this.gfnIsNull(this.dsListJoint.getColumn(i, "RT_PORTION")) ? "0" : this.dsListJoint.getColumn(i, "RT_PORTION"));
        					this.dsInsertJoint.setColumn(nRow, "NO_TEL"        , this.dsListJoint.getColumn(i, "NO_TEL"));
        					this.dsInsertJoint.setColumn(nRow, "NO_MOBILE"     , this.dsListJoint.getColumn(i, "NO_MOBILE"));
        					this.dsInsertJoint.setColumn(nRow, "NO_OFFICETEL"  , this.dsListJoint.getColumn(i, "NO_OFFICETEL"));
        					this.dsInsertJoint.setColumn(nRow, "DS_EMAIL"      , this.dsListJoint.getColumn(i, "DS_EMAIL"));
        					this.dsInsertJoint.setColumn(nRow, "NO_POST"       , this.dsListJoint.getColumn(i, "NO_POST").replace("-", ""));
        					this.dsInsertJoint.setColumn(nRow, "DS_ADDR1"      , this.dsListJoint.getColumn(i, "DS_ADDR1"));
        					this.dsInsertJoint.setColumn(nRow, "DS_ADDR2"      , this.dsListJoint.getColumn(i, "DS_ADDR2"));
        					this.dsInsertJoint.setColumn(nRow, "DS_ETC"        , this.dsListJoint.getColumn(i, "DS_ETC"));
        					this.dsInsertJoint.setColumn(nRow, "ID_INSERT"     , this.AuthClient.ID_USER);

        				break;
        			case "U" :
        					var nRow = this.dsUpdateJoint.addRow();

        					this.dsUpdateJoint.setColumn(nRow, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        					this.dsUpdateJoint.setColumn(nRow, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        					this.dsUpdateJoint.setColumn(nRow, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        					this.dsUpdateJoint.setColumn(nRow, "NO_DONG"       , this.dsSearch.getColumn(0, "NO_DONG"));
        					this.dsUpdateJoint.setColumn(nRow, "NO_FLOOR"      , this.dsSearch.getColumn(0, "NO_FLOOR"));
        					this.dsUpdateJoint.setColumn(nRow, "NO_HO"         , this.dsSearch.getColumn(0, "NO_HO"));
        					this.dsUpdateJoint.setColumn(nRow, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        					this.dsUpdateJoint.setColumn(nRow, "NO_MNJUMIN"    , this.dsList.getColumn(0, "NO_JUMIN").replace("-", ""));
        					this.dsUpdateJoint.setColumn(nRow, "TY_CONTRACTOR" , this.dsListJoint.getColumn(0, "TY_CONTRACTOR") == "개인" ? "P" : "C");
        					this.dsUpdateJoint.setColumn(nRow, "NO_JUMIN"      , this.dsListJoint.getColumn(i, "NO_JUMIN").replace("-", ""));
        					this.dsUpdateJoint.setColumn(nRow, "CD_VENDOR"     , this.dsListJoint.getColumn(i, "CD_VENDOR").replace("-", ""));
        					this.dsUpdateJoint.setColumn(nRow, "DS_VENDOR"     , this.dsListJoint.getColumn(i, "DS_VENDOR"));
        					this.dsUpdateJoint.setColumn(nRow, "DS_UPJONG"     , this.dsListJoint.getColumn(i, "DS_UPJONG"));
        					this.dsUpdateJoint.setColumn(nRow, "DS_UPTAE"      , this.dsListJoint.getColumn(i, "DS_UPTAE"));
        					this.dsUpdateJoint.setColumn(nRow, "DT_CONTRACTOR" , this.dsListJoint.getColumn(i, "DT_CONTRACTOR").replace("-", ""));
        					this.dsUpdateJoint.setColumn(nRow, "DS_CONTRACTOR" , this.dsListJoint.getColumn(i, "DS_CONTRACTOR"));
        					this.dsUpdateJoint.setColumn(nRow, "RT_PORTION"    , this.gfnIsNull(this.dsListJoint.getColumn(i, "RT_PORTION")) ? "0" : this.dsListJoint.getColumn(i, "RT_PORTION"));
        					this.dsUpdateJoint.setColumn(nRow, "NO_TEL"        , this.dsListJoint.getColumn(i, "NO_TEL"));
        					this.dsUpdateJoint.setColumn(nRow, "NO_MOBILE"     , this.dsListJoint.getColumn(i, "NO_MOBILE"));
        					this.dsUpdateJoint.setColumn(nRow, "NO_OFFICETEL"  , this.dsListJoint.getColumn(i, "NO_OFFICETEL"));
        					this.dsUpdateJoint.setColumn(nRow, "DS_EMAIL"      , this.dsListJoint.getColumn(i, "DS_EMAIL"));
        					this.dsUpdateJoint.setColumn(nRow, "NO_POST"       , this.dsListJoint.getColumn(i, "NO_POST").replace("-", ""));
        					this.dsUpdateJoint.setColumn(nRow, "DS_ADDR1"      , this.dsListJoint.getColumn(i, "DS_ADDR1"));
        					this.dsUpdateJoint.setColumn(nRow, "DS_ADDR2"      , this.dsListJoint.getColumn(i, "DS_ADDR2"));
        					this.dsUpdateJoint.setColumn(nRow, "DS_ETC"        , this.dsListJoint.getColumn(i, "DS_ETC"));
        					this.dsUpdateJoint.setColumn(nRow, "ID_UPDATE"     , this.AuthClient.ID_USER);
        				break;
        			case "D" :
        					var nRow = this.dsDeleteJoint.addRow();

        					this.dsDeleteJoint.setColumn(nRow, "CD_ACNTUNIT"   , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        					this.dsDeleteJoint.setColumn(nRow, "TY_GUBUN"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        					this.dsDeleteJoint.setColumn(nRow, "NO_CHASU"      , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        					this.dsDeleteJoint.setColumn(nRow, "NO_DONG"       , this.dsSearch.getColumn(0, "NO_DONG"));
        					this.dsDeleteJoint.setColumn(nRow, "NO_FLOOR"      , this.dsSearch.getColumn(0, "NO_FLOOR"));
        					this.dsDeleteJoint.setColumn(nRow, "NO_HO"         , this.dsSearch.getColumn(0, "NO_HO"));
        					this.dsDeleteJoint.setColumn(nRow, "NO_UNIONMEMBER", this.dsSearch.getColumn(0, "NO_UNIONMEMBER"));
        					this.dsDeleteJoint.setColumn(nRow, "NO_MNJUMIN"    , this.dsList.getColumn(0, "NO_JUMIN").replace("-", ""));
        					this.dsDeleteJoint.setColumn(nRow, "NO_JOINT"      , this.dsListJoint.getColumn(i, "NO_JOINT"));
        				break;
        		}
        	}

        	if (this.dsInsertJoint.rowcount == 0 && this.dsUpdateJoint.rowcount == 0 && this.dsDeleteJoint.rowcount == 0) return;

        	var strSvcId    = "saveJoint";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insertJoint=dsInsertJoint updateJoint=dsUpdateJoint deleteJoint=dsDeleteJoint";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };


        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {};

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {};

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/


        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.gfnAlert("사업지코드를 입력하지 않았습니다.");
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
        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if(svcID == "select") {
        		if(this.dsList.rowcount > 0) {
        			this.fnSelectJoint();
        		}
        	}

        	if (svcID == "saveJoint") {
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

        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	// 사업지코드
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP" , this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
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
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.txtDS_RECADDR2.addEventHandler("onkillfocus",this.divData_divDataRight_divDataTop_txtDS_RECADDR2_onkillfocus,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DLB_JOINTCONTRACTOR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
