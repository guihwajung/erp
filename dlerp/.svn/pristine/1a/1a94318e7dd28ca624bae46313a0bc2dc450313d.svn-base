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
            this.set_titletext("이자소득배당지급관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_INCOMETAX_DEFRAYMENT_SELECT</Col></Row><Row><Col id=\"TARGET\">g_select</Col><Col id=\"SP\">DHVPR_INCOMETAX_DEFRAYMENT_G_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHVPR_INCOMETAX_DEFRAYMENT_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHVPR_INCOMETAX_DEFRAYMENT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHVPR_INCOMETAX_DEFRAYMENT_DELETE</Col></Row><Row><Col id=\"TARGET\">issueSlip</Col><Col id=\"SP\">DHVPR_INCOMETAX_DEFRAYMENT_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">cancelSlip</Col><Col id=\"SP\">DHVPR_INCOMETAX_DEFRAYMENT_CANCELSLIP</Col></Row><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DHVPR_INCOMETAX_DEFRAYMENT_PRINT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_INCOMETYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">80</Col><Col id=\"VALUE\">이자배당(법인원천)</Col></Row><Row><Col id=\"CODE\">50</Col><Col id=\"VALUE\">이자소득</Col></Row><Row><Col id=\"CODE\">60</Col><Col id=\"VALUE\">배당소득</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_REALNAME", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">선택</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">실명</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">비실명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EARNERTYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">선택</Col></Row><Row><Col id=\"CODE\">111</Col><Col id=\"VALUE\">주민등록번호</Col></Row><Row><Col id=\"CODE\">112</Col><Col id=\"VALUE\">의료보호증관리번호</Col></Row><Row><Col id=\"CODE\">122</Col><Col id=\"VALUE\">재외국민등록번호</Col></Row><Row><Col id=\"CODE\">131</Col><Col id=\"VALUE\">외국인등록번호</Col></Row><Row><Col id=\"CODE\">141</Col><Col id=\"VALUE\">국내거소신고번호</Col></Row><Row><Col id=\"CODE\">121</Col><Col id=\"VALUE\">여권번호,거주지국의 납세번호</Col></Row><Row><Col id=\"CODE\">211</Col><Col id=\"VALUE\">사업자등록번호</Col></Row><Row><Col id=\"CODE\">222</Col><Col id=\"VALUE\">거주지국의 납세번호</Col></Row><Row><Col id=\"CODE\">311</Col><Col id=\"VALUE\">고유번호</Col></Row><Row><Col id=\"CODE\">321</Col><Col id=\"VALUE\">외국단체등록번호,거주지국의 납세번호</Col></Row><Row><Col id=\"CODE\">331</Col><Col id=\"VALUE\">대표자 주민등록번호</Col></Row><Row><Col id=\"CODE\">411</Col><Col id=\"VALUE\">투자등록증 고유번호</Col></Row><Row><Col id=\"CODE\">413</Col><Col id=\"VALUE\">관련문서번호</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_BH\" type=\"STRING\" size=\"256\"/><Column id=\"TY_INCOMETYPE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_IMPUTE_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_IMPUTE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_DEPT_ACNT\"/><Col id=\"TY_INCOMETYPE\"/><Col id=\"YM_IMPUTE_FROM\"/><Col id=\"YM_IMPUTE_TO\"/><Col id=\"CD_VENDOR\"/><Col id=\"TY_GUBUN\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"78","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_BH","ccfCD_CORP:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("발행부서");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_BH","staCD_DEPT_BH:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","ccfCD_DEPT_BH:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("귀속부서");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","staCD_DEPT_ACNT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_GUBUN","20","staCD_CORP:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_ccboTY_GUBUN_innerdataset = new nexacro.NormalDataset("divSearch_form_ccboTY_GUBUN_innerdataset", obj);
            divSearch_form_ccboTY_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">지급년월</Col><Col id=\"codecolumn\">2</Col></Row><Row><Col id=\"datacolumn\">귀속년월</Col><Col id=\"codecolumn\">1</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_ccboTY_GUBUN_innerdataset);
            obj.set_text("귀속년월");
            obj.set_value("1");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_IMPUTE_FROM","ccboTY_GUBUN:5","staCD_CORP:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staWAVE","ctclYM_IMPUTE_FROM:0.0","staCD_CORP:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_IMPUTE_TO","staWAVE:0.0","staCD_CORP:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","ccfCD_CORP:0","staCD_CORP:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("거래처코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","staCD_CORP:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_INCOMETYPE","ccfCD_VENDOR:0.0","staCD_CORP:10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("지급구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_INCOMETYPE","staTY_INCOMETYPE:0.0","staCD_CORP:10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsTY_INCOMETYPE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,"200","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","205","1260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("소득자정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00","0","328","1260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("지급내역");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_VENDOR","staTITLE:-1260","staTITLE:5","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("개인/법인구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgTY_VENDOR","staTY_VENDOR:-1","staTY_VENDOR:-27","200","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_JUMIN","staBgTY_VENDOR:-1","staBgTY_VENDOR:-27","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("주민/사업자등록번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgNO_JUMIN","staNO_JUMIN:-1","staNO_JUMIN:-27","528","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_RESIDENT","staTY_VENDOR:-120","staTY_VENDOR:-1","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_text("거주구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgYN_RESIDENT","staYN_RESIDENT:-1","staYN_RESIDENT:-27","200","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_NATION","staBgYN_RESIDENT:-1","staBgYN_RESIDENT:-27","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_text("내외국인구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgYN_NATION","staYN_NATION:-1","staYN_NATION:-27","200","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBIRTHDAY","staBgYN_NATION:-1","266","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgBIRTHDAY","staBIRTHDAY:-1","staBIRTHDAY:-27","210","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_ZIP_CODE","staYN_RESIDENT:-120","staYN_RESIDENT:-1","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgNO_ZIP_CODE","staNO_ZIP_CODE:-1","staNO_ZIP_CODE:-27","856","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtTY_VENDOR","staTY_VENDOR:5","staTY_VENDOR:-23","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_JUMIN","staNO_JUMIN:5","staNO_JUMIN:-23","517","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtYN_RESIDENT","staYN_RESIDENT:5","staYN_RESIDENT:-23","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtYN_NATION","staYN_NATION:5","staYN_NATION:-23","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtBIRTHDAY","staBIRTHDAY:5","staBIRTHDAY:-23","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_ZIP_CODE","staNO_ZIP_CODE:5","staNO_ZIP_CODE:-24","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_ADDR","edtNO_ZIP_CODE:5","edtNO_ZIP_CODE:-20","651","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_SELFACNT","staTITLE00:-1260","staTITLE00:5","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_text("발행부서");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_DEPT_SELFACNT","staCD_DEPT_SELFACNT:-1","staCD_DEPT_SELFACNT:-27","210","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","637","363","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_text("회계일자");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_DEPT_ACNT","staCD_DEPT_ACNT:-1","staCD_DEPT_ACNT:-27","504","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","staCD_DEPT_SELFACNT:-120","staCD_DEPT_SELFACNT:-1","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_text("거래처코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_VENDOR","staCD_VENDOR:-1","staCD_VENDOR:-27","519","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_INCOMETYPE","staBgCD_VENDOR:-1","staBgCD_VENDOR:-27","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_text("지급구분");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgTY_INCOMETYPE","staTY_INCOMETYPE:-1","staTY_INCOMETYPE:-27","211","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PAYMENTDATE","staBgTY_INCOMETYPE:-1","staBgTY_INCOMETYPE:-27","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_text("지급일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_PAYMENTDATE","staDT_PAYMENTDATE:-1","staBgTY_INCOMETYPE:-27","175","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_EARNERTYPE","staCD_VENDOR:-120","staCD_VENDOR:-1","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("62");
            obj.set_text("소득자구분코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgTY_EARNERTYPE","staTY_EARNERTYPE:-1","staTY_EARNERTYPE:-27","519","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_REALNAME","staBgTY_EARNERTYPE:-1","staBgTY_EARNERTYPE:-27","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("64");
            obj.set_text("실명구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgYN_REALNAME","staYN_REALNAME:-1","staYN_REALNAME:-27","504","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_FINANCIALPRIZES","staTY_EARNERTYPE:-120","staTY_EARNERTYPE:-1","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("66");
            obj.set_text("금융상품코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_FINANCIALPRIZES","staCD_FINANCIALPRIZES:-1","staCD_FINANCIALPRIZES:-27","210","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_FINANCIALPRIZES","staBgCD_FINANCIALPRIZES:-1","staBgCD_FINANCIALPRIZES:-27","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("68");
            obj.set_text("금융상품종류");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgTY_FINANCIALPRIZES","staTY_FINANCIALPRIZES:-1","staTY_FINANCIALPRIZES:-27","201","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_FUND","staBgTY_FINANCIALPRIZES:-1","staBgTY_FINANCIALPRIZES:-27","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("70");
            obj.set_text("유가증권표준코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_FUND","staCD_FUND:-1","staCD_FUND:-27","504","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_LOAN","staCD_FINANCIALPRIZES:-120","staCD_FINANCIALPRIZES:-1","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("72");
            obj.set_text("채권/이자구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_LOAN","staCD_LOAN:-1","staCD_LOAN:-27","210","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_TAX","staBgCD_LOAN:-1","staBgCD_LOAN:-27","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("74");
            obj.set_text("과세구분");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_TAX","staCD_TAX:-1","staCD_TAX:-27","201","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_INTEREST","staBgCD_TAX:-1","staBgCD_TAX:-27","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("76");
            obj.set_text("이자지급대상기간");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDT_INTEREST","staDT_INTEREST:-1","staDT_INTEREST:-27","504","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CAPITALAMT","staCD_LOAN:-120","staCD_LOAN:-1","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("78");
            obj.set_text("원급/액면가액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_CAPITALAMT","staAM_CAPITALAMT:-1","staAM_CAPITALAMT:-27","210","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_PAYMENTAMT","staBgAM_CAPITALAMT:-1","staBgAM_CAPITALAMT:-27","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("80");
            obj.set_text("지급총액");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_PAYMENTAMT","staAM_PAYMENTAMT:-1","staAM_PAYMENTAMT:-27","201","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRT_TAXRATE","staBgAM_PAYMENTAMT:-1","staBgAM_PAYMENTAMT:-27","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("81");
            obj.set_text("세율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgRT_TAXRATE","staRT_TAXRATE:-1","staRT_TAXRATE:-27","211","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("82");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staRT_INTEREST","staBgRT_TAXRATE:-1","staBgRT_TAXRATE:-27","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("84");
            obj.set_text("이자율");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgRT_INTEREST","staRT_INTEREST:-1","staRT_INTEREST:-27","175","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("83");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_BANKACNT","staAM_CAPITALAMT:-120","staAM_CAPITALAMT:-1","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("85");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgNO_BANKACNT","staNO_BANKACNT:-1","staNO_BANKACNT:-27","210","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_SO","637","staBgNO_BANKACNT:-27","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("87");
            obj.set_text("소득의종류(코드)");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_SO","staCD_SO:-1","staCD_SO:-27","211","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_JOSE","staBgCD_SO:-1","staBgCD_SO:-27","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("89");
            obj.set_text("조세특례등");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_JOSE","staCD_JOSE:-1","staCD_JOSE:-27","175","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTAX","staNO_BANKACNT:-120","staNO_BANKACNT:-1","120","53",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("91");
            obj.set_text("원천징수액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_INCOMETAX","staTAX:-1","staTAX:-53","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("92");
            obj.set_text("소득세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_INCOMETAX","staAM_INCOMETAX:-1","staAM_INCOMETAX:-27","193","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_CORPTAX","staBgAM_INCOMETAX:-1","staBgAM_INCOMETAX:-27","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("94");
            obj.set_text("법인세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_CORPTAX","staAM_CORPTAX:-1","staAM_CORPTAX:-27","193","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_INHERBANTTAX","staTAX:-1","staTAX:-27","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("97");
            obj.set_text("주민세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_INHERBANTTAX","staAM_INHERBANTTAX:-1","staAM_INHERBANTTAX:-27","193","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_FARMTAX","staBgAM_INHERBANTTAX:-1","staBgAM_INHERBANTTAX:-27","120","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("99");
            obj.set_text("농특세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_FARMTAX","staAM_FARMTAX:-1","staAM_FARMTAX:-27","193","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_ORDERTAXBASE","staTAX:-120","staTAX:-1","239","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("100");
            obj.set_text("세액감면 및 제한세율 근거");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDS_ORDERTAXBASE","staDS_ORDERTAXBASE:-1","staDS_ORDERTAXBASE:-27","1022","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT_BH","staCD_DEPT_SELFACNT:5","staCD_DEPT_SELFACNT:-23","200","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYM_IMPUTE","1091","337","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("2019");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_VENDOR","staCD_VENDOR:5","staCD_VENDOR:-23","508","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_INCOMETYPE","staTY_INCOMETYPE:5","staTY_INCOMETYPE:-23","200","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsTY_INCOMETYPE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_PAYMENTDATE","staDT_PAYMENTDATE:5","staDT_PAYMENTDATE:-23","95","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_EARNERTYPE","staTY_EARNERTYPE:5","staTY_EARNERTYPE:-24","508","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsTY_EARNERTYPE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("선택");
            obj.set_value("999");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboYN_REALNAME","staYN_REALNAME:5","staYN_REALNAME:-24","200","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsYN_REALNAME");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_enable("true");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_FINANCIALPRIZES","staCD_FINANCIALPRIZES:5","staCD_FINANCIALPRIZES:-23","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_maxlength("30");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtTY_FINANCIALPRIZES","staTY_FINANCIALPRIZES:5","staTY_FINANCIALPRIZES:-23","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_FUND","staCD_FUND:5","staCD_FUND:-23","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_enable("true");
            obj.set_maxlength("20");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_LOAN","staCD_LOAN:5","staCD_LOAN:-23","200","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_TAX","staCD_TAX:5","staCD_TAX:-23","190","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclFR_INTEREST","staDT_INTEREST:5","staDT_INTEREST:-23","95","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staWave","ctclFR_INTEREST:3","ctclFR_INTEREST:-20","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("102");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_INTEREST","ctclFR_INTEREST:16","staDT_INTEREST:-23","95","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfNO_BANKACNT","staNO_BANKACNT:5","staNO_BANKACNT:-23","200","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("21");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_SO","staCD_SO:5","staCD_SO:-23","200","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("20");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_JOSE","staCD_JOSE:5","staCD_JOSE:-23","163","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("22");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_ORDERTAXBASE","staDS_ORDERTAXBASE:5","staDS_ORDERTAXBASE:-23","1010","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_PAYMENTAMT","staAM_PAYMENTAMT:5","497","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskRT_TAXRATE","staRT_TAXRATE:5","497","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_limitbymask("both");
            obj.set_format("###,###.####");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskRT_INTEREST","staRT_INTEREST:5","497","163","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_limitbymask("both");
            obj.set_format("###,###.##");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CAPITALAMT","staAM_CAPITALAMT:5","497","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_INCOMETAX","staAM_INCOMETAX:5","549","180","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_INHERBANTTAX","staAM_INHERBANTTAX:5","575","180","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CORPTAX","staAM_CORPTAX:5","549","180","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_FARMTAX","staAM_FARMTAX:5","575","180","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACCOUNT","762","367","95","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staAM_AMOUNTAMT","328","519","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("103");
            obj.set_text("지급액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgAM_PAYMENTAMT00","437","519","201","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_AMOUNTAMT","443","523","190","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###");
            obj.set_enable("false");
            obj.set_tabstop("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_TAX00","staBgCD_DEPT_SELFACNT:-1","363","110","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("105");
            obj.set_text("귀속부서");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCD_TAX00","437","363",null,"27","staCD_DEPT_ACNT:-1",null,null,null,null,null,this.divData.form);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_DEPT_ACNT","staCD_TAX00:5","367","190","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtTY_VENDOR2","573","393","60","21",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("107");
            obj.set_visible("false");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT_BH.form.CDTextBox","value","dsSearch","CD_DEPT_BH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboTY_INCOMETYPE","value","dsSearch","TY_INCOMETYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclYM_IMPUTE_FROM.form.TextBox","value","dsSearch","YM_IMPUTE_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclYM_IMPUTE_TO.form.TextBox","value","dsSearch","YM_IMPUTE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
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
        this.registerScript("DHV_INCOMETAX_DEFRAYMENT.xfdl", function() {
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

        	this.ccfCD_CORP.form.CDTextBox.setFocus();

        	//법인코드 세션에 코드로 셋팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        // 	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
        // 		this.ccfCD_DEPT_BH.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        // 		this.ccfCD_DEPT_BH.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        // 		this.staCD_DEPT_BH.set_textDecoration("underline");
        // 	}

        	this.dsSearch.setColumn(0, "CD_DEPT_BH", this.AuthClient.LEVCD_DEPT_UPPER);
        	this.ccfCD_DEPT_BH.form.fnCodeFindLoad();

        	this.ccboTY_GUBUN.set_value("1");
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
        	//this.btnSelectSlip = this.gfnFormButtonAdd("SelectSlip", "fnSelectSlip", "전표자료가져오기");
        	//this.btnSelectSlip.set_enable(false);

        	this.btnSearchSlip  = this.gfnFormButtonAdd("SearchSlip", "fnSearchSlip"); 	//전표조회 버튼
        	this.btnIssueSlip   = this.gfnFormButtonAdd("IssueSlip" , "fnIssueSlip"); 	//전표발행 버튼
        	this.btnCancelSlip  = this.gfnFormButtonAdd("CancelSlip", "fnCancelSlip"); 	//전표취소 버튼
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.JUMP_YN = "N";

        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT_BH = this.divSearch.form.ccfCD_DEPT_BH;
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;
        	this.ccboTY_INCOMETYPE = this.divSearch.form.ccboTY_INCOMETYPE;
        	this.ctclYM_IMPUTE_FROM = this.divSearch.form.ctclYM_IMPUTE_FROM;
        	this.ctclYM_IMPUTE_TO = this.divSearch.form.ctclYM_IMPUTE_TO;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
        	this.ccboTY_GUBUN = this.divSearch.form.ccboTY_GUBUN;
        	this.staCD_DEPT_BH = this.divSearch.form.staCD_DEPT_BH;
        	this.dxGrid = this.divData.form.objGrid;

        	//소득자정보
        	this.edtTY_VENDOR = this.divData.form.edtTY_VENDOR;
        	this.edtNO_JUMIN = this.divData.form.edtNO_JUMIN;
        	this.edtYN_RESIDENT = this.divData.form.edtYN_RESIDENT;
        	this.edtYN_NATION = this.divData.form.edtYN_NATION;
        	this.edtBIRTHDAY = this.divData.form.edtBIRTHDAY;
        	this.edtNO_ZIP_CODE = this.divData.form.edtNO_ZIP_CODE;
        	this.edtDS_ADDR = this.divData.form.edtDS_ADDR;

        	//지급내역
        	this.cfCD_DEPT_ACNT = this.divData.form.cfCD_DEPT_ACNT;
        	this.ccfCD_DEPT_ACNT_BH = this.divData.form.ccfCD_DEPT_ACNT_BH;
        	this.ctclYM_IMPUTE = this.divData.form.ctclYM_IMPUTE;
        	this.ctclDT_ACCOUNT = this.divData.form.ctclDT_ACCOUNT;
        	this.cfCD_VENDOR = this.divData.form.cfCD_VENDOR;
        	this.cboTY_INCOMETYPE = this.divData.form.cboTY_INCOMETYPE;
        	this.ctclDT_PAYMENTDATE = this.divData.form.ctclDT_PAYMENTDATE;
        	this.cboTY_EARNERTYPE = this.divData.form.cboTY_EARNERTYPE;
        	this.cboYN_REALNAME = this.divData.form.cboYN_REALNAME;
        	this.edtCD_FINANCIALPRIZES = this.divData.form.edtCD_FINANCIALPRIZES;
        	this.edtTY_FINANCIALPRIZES = this.divData.form.edtTY_FINANCIALPRIZES;
        	this.edtCD_FUND = this.divData.form.edtCD_FUND;
        	this.cfCD_LOAN = this.divData.form.cfCD_LOAN;
        	this.cfCD_TAX = this.divData.form.cfCD_TAX;
        	this.ctclFR_INTEREST = this.divData.form.ctclFR_INTEREST;
        	this.ctclTO_INTEREST = this.divData.form.ctclTO_INTEREST;
        	this.mskAM_CAPITALAMT = this.divData.form.mskAM_CAPITALAMT;
        	this.mskAM_PAYMENTAMT = this.divData.form.mskAM_PAYMENTAMT;
        	this.mskRT_TAXRATE = this.divData.form.mskRT_TAXRATE;
        	this.mskRT_INTEREST = this.divData.form.mskRT_INTEREST;
        	this.cfNO_BANKACNT = this.divData.form.cfNO_BANKACNT;
        	this.edtTY_VENDOR2 = this.divData.form.edtTY_VENDOR2;

        	this.cfCD_SO = this.divData.form.cfCD_SO;
        	this.cfCD_JOSE = this.divData.form.cfCD_JOSE;
        	this.mskAM_INCOMETAX = this.divData.form.mskAM_INCOMETAX;
        	this.mskAM_CORPTAX = this.divData.form.mskAM_CORPTAX;
        	this.mskAM_INHERBANTTAX = this.divData.form.mskAM_INHERBANTTAX;
        	this.mskAM_FARMTAX = this.divData.form.mskAM_FARMTAX;
        	this.edtDS_ORDERTAXBASE = this.divData.form.edtDS_ORDERTAXBASE;
        	this.mskAM_AMOUNTAMT = this.divData.form.mskAM_AMOUNTAMT;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//법인코드
        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//귀속부서
        	this.ccfCD_DEPT_ACNT.CodeFindName = "DHX_CFACNTUNIT";
        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_ACNT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//거래처
        	this.ccfCD_VENDOR.CodeFindName ="DHX_CFALLVENDOR_CODEFIND"; //"DHX_CFVENDOR";
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//발행부서
        	this.ccfCD_DEPT_BH.CodeFindName = "DHX_CFACNTUNIT"; //"DHX_CFACNTUNIT2";
        	this.ccfCD_DEPT_BH.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_BH.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//귀속부서
        	this.cfCD_DEPT_ACNT.CodeFindName = "DHX_CFACNTUNIT";
        	this.cfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_DEPT_ACNT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//발행부서
        	this.ccfCD_DEPT_ACNT_BH.CodeFindName = "DHX_CFACNTUNIT"; //"DHX_CFACNTUNIT2";
        	this.ccfCD_DEPT_ACNT_BH.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_ACNT_BH.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//거래처코드
        	this.cfCD_VENDOR.CodeFindName ="DHX_CFALLVENDOR_CODEFIND"; //"DHX_CFVENDOR";
        	this.cfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_VENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//채권/이자구분
        	this.cfCD_LOAN.CodeFindName ="CF_CODE_DH_31";
        	this.cfCD_LOAN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//과세구분
        	this.cfCD_TAX.CodeFindName ="CF_CODE_DH_32";
        	this.cfCD_TAX.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//소득의종류
        	this.cfCD_SO.CodeFindName ="CF_CODE_DH_34";
        	this.cfCD_SO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//조세특례
        	this.cfCD_JOSE.CodeFindName ="CF_CODE_DH_33";
        	this.cfCD_JOSE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//계좌번호
        	this.cfNO_BANKACNT.CodeFindName ="DFX_CFACCOUNTMATCH";
        	this.cfNO_BANKACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_INCOMETAX_DEFRAYMENT");

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.ctclYM_IMPUTE_FROM.form.TextBox.set_value(this.gfnGetDate().substring(0, 6));
        	this.ctclYM_IMPUTE_TO.form.TextBox.set_value(this.gfnGetDate().substring(0, 6));

        	this.buttonEvent();
        	this.enableEvent();

        	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CHK"), "displaytype", "expr:CHK_FLAG =='Y' ? 'checkboxcontrol' : 'none'");
        	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CHK"), "edittype", "expr:CHK_FLAG =='Y' ? 'checkbox' : 'none'");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT_BH", "string");
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("TY_INCOMETYPE", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("YM_IMPUTE_FROM", "string");
        	this.dsSelect.addColumn("YM_IMPUTE_TO", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("CNO_IDX", "int");

        	this.dsGSelect = new Dataset();
        	this.dsGSelect.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsGSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsGSelect.addColumn("TY_INCOMETYPE", "string");
        	this.dsGSelect.addColumn("YM_IMPUTE", "string");
        	this.dsGSelect.addColumn("CD_VENDOR", "string");
        	this.dsGSelect.addColumn("NO_IDX", "int");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_DEPT_ACNT", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("TY_INCOMETYPE", "string");
        	this.dsInsert.addColumn("TY_INCOMECLASS", "string");
        	this.dsInsert.addColumn("TY_EARNERTYPE", "string");
        	this.dsInsert.addColumn("YM_IMPUTE", "string");
        	this.dsInsert.addColumn("DT_ACCOUNT", "string");
        	this.dsInsert.addColumn("NO_BANKACNT", "string");
        	this.dsInsert.addColumn("CD_FUND", "string");
        	this.dsInsert.addColumn("CD_FINANCIALPRIZES", "string");
        	this.dsInsert.addColumn("TY_FINANCIALPRIZES", "string");
        	this.dsInsert.addColumn("YN_REALNAME", "string");
        	this.dsInsert.addColumn("TY_LOAN", "string");
        	this.dsInsert.addColumn("CD_TAX", "string");
        	this.dsInsert.addColumn("DT_PAYMENTDATE", "string");
        	this.dsInsert.addColumn("AM_PAYMENTAMT", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_CAPITALAMT", "BIGDECIMAL");
        	this.dsInsert.addColumn("RT_TAXRATE", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_INCOMETAX", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_CORPTAX", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_INHERBANTTAX", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_FARMTAX", "BIGDECIMAL");
        	this.dsInsert.addColumn("DS_ORDERTAXBASE", "string");
        	this.dsInsert.addColumn("RT_INTEREST", "BIGDECIMAL");
        	this.dsInsert.addColumn("FR_INTEREST", "string");
        	this.dsInsert.addColumn("TO_INTEREST", "string");
        	this.dsInsert.addColumn("CD_SLIP", "string");
        	this.dsInsert.addColumn("CD_ETC3", "string");
        	this.dsInsert.addColumn("CD_JOSE", "string");
        	this.dsInsert.addColumn("CD_DEPT_BH", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_DEPT_ACNT", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("TY_INCOMETYPE", "string");
        	this.dsUpdate.addColumn("TY_INCOMECLASS", "string");
        	this.dsUpdate.addColumn("TY_EARNERTYPE", "string");
        	this.dsUpdate.addColumn("YM_IMPUTE", "string");
        	this.dsUpdate.addColumn("DT_ACCOUNT", "string");
        	this.dsUpdate.addColumn("NO_BANKACNT", "string");
        	this.dsUpdate.addColumn("CD_FUND", "string");
        	this.dsUpdate.addColumn("CD_FINANCIALPRIZES", "string");
        	this.dsUpdate.addColumn("TY_FINANCIALPRIZES", "string");
        	this.dsUpdate.addColumn("YN_REALNAME", "string");
        	this.dsUpdate.addColumn("TY_LOAN", "string");
        	this.dsUpdate.addColumn("CD_TAX", "string");
        	this.dsUpdate.addColumn("DT_PAYMENTDATE", "string");
        	this.dsUpdate.addColumn("AM_PAYMENTAMT", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_CAPITALAMT", "BIGDECIMAL");
        	this.dsUpdate.addColumn("RT_TAXRATE", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_INCOMETAX", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_CORPTAX", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_INHERBANTTAX", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_FARMTAX", "BIGDECIMAL");
        	this.dsUpdate.addColumn("DS_ORDERTAXBASE", "string");
        	this.dsUpdate.addColumn("RT_INTEREST", "BIGDECIMAL");
        	this.dsUpdate.addColumn("FR_INTEREST", "string");
        	this.dsUpdate.addColumn("TO_INTEREST", "string");
        	this.dsUpdate.addColumn("NO_IDX", "int");
        	this.dsUpdate.addColumn("CD_ETC3", "string");
        	this.dsUpdate.addColumn("CD_JOSE", "string");
        	this.dsUpdate.addColumn("SEQ", "int");
        	this.dsUpdate.addColumn("CD_DEPT_BH", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_DEPT_ACNT", "string");
        	this.dsDelete.addColumn("TY_INCOMETYPE", "string");
        	this.dsDelete.addColumn("YM_IMPUTE", "string");
        	this.dsDelete.addColumn("CD_VENDOR", "string");
        	this.dsDelete.addColumn("NO_IDX", "int");
        	this.dsDelete.addColumn("SEQ", "int");

        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_CORP", "string");			//법인코드
        	this.dsIssueSlip.addColumn("SEQ", "string");				//순번(배열)
        	this.dsIssueSlip.addColumn("ID_TRANS", "string");			//사용자 아이디

        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_SLIP", "string");		//전표번호
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "CD_DEPT_BH", this.ccfCD_DEPT_BH.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.ccfCD_DEPT_ACNT.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "TY_INCOMETYPE", this.ccboTY_INCOMETYPE.value);
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.ccboTY_GUBUN.value);
        	this.dsSelect.setColumn(0, "YM_IMPUTE_FROM", this.ctclYM_IMPUTE_FROM.form.TextBox.value);
        	this.dsSelect.setColumn(0, "YM_IMPUTE_TO", this.ctclYM_IMPUTE_TO.form.TextBox.value);
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.ccfCD_VENDOR.form.CDTextBox.value);

        	this.dsSelect.setColumn(0, "CNO_IDX", 0);

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


        this.fnGSelect = function() {

        	this.dsGSelect.clearData();
        	this.dsGSelect.addRow();

        	this.dsGSelect.setColumn(0, "CD_DEPT_SELFACNT", this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_SELFACNT"));
        	this.dsGSelect.setColumn(0, "CD_DEPT_ACNT", this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_ACNT"));
        	this.dsGSelect.setColumn(0, "TY_INCOMETYPE", this.dsList.getColumn(this.dsList.rowposition, "TY_INCOMETYPE"));
        	this.dsGSelect.setColumn(0, "YM_IMPUTE", this.dsList.getColumn(this.dsList.rowposition, "YM_IMPUTE"));
        	this.dsGSelect.setColumn(0, "CD_VENDOR", this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR"));
        	this.dsGSelect.setColumn(0, "NO_IDX", this.dsList.getColumn(this.dsList.rowposition, "NO_IDX"));



        	var strSvcId    = "g_select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "g_select=dsGSelect";
        	var outData     = "dsList2=g_select0";
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

        	this.dsList2.clearData();
        	this.setDivData();

        // 	this.ccfCD_DEPT_ACNT_BH.form.CDTextBox.set_value(this.ccfCD_DEPT_BH.form.CDTextBox.value);
        // 	this.ccfCD_DEPT_ACNT_BH.form.DSTextBox.set_value(this.ccfCD_DEPT_BH.form.DSTextBox.value);
        // 	this.dsList.setColumn(nrow, "CD_DEPT_BH", this.AuthClient.CD_DEPT);
        // 	this.dsList.setColumn(nrow, "DS_DEPT_BH", this.AuthClient.DS_DEPT);

        	this.ccfCD_DEPT_ACNT_BH.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        	this.ccfCD_DEPT_ACNT_BH.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);

        	//this.cfCD_DEPT_ACNT.form.CDTextBox.set_value(this.ccfCD_DEPT_ACNT.form.CDTextBox.value);
        	//this.cfCD_DEPT_ACNT.form.DSTextBox.set_value(this.ccfCD_DEPT_ACNT.form.DSTextBox.value);

        	this.gfnSetFormStatus(this, "I");
        	this.buttonEvent();
        	this.enableEvent();

        // 	this.cboTY_EARNERTYPE.set_index(0);
        // 	this.cboTY_INCOMETYPE.set_index(0);
        // 	this.cboYN_REALNAME.set_index(0);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if(!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"))){
        		this.gfnAlert("전표발행된 데이터는 삭제할수없습니다.");
        		return;
        	}
        	this.gfnConfirm("삭제 하시겠습니까?", "fnDelCallback");
        }

        this.fnDelCallback = function(strId, val) {

        	if(val == false) return;

        	this.dsDelete.clearData();
        	this.dsDelete.addRow();

        // 	this.dsDelete.setColumn(0, "CD_DEPT_ACNT", this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_ACNT"));
        // 	this.dsDelete.setColumn(0, "TY_INCOMETYPE", this.dsList.getColumn(this.dsList.rowposition, "TY_INCOMETYPE"));
        // 	this.dsDelete.setColumn(0, "YM_IMPUTE", this.dsList.getColumn(this.dsList.rowposition, "YM_IMPUTE"));
        // 	this.dsDelete.setColumn(0, "CD_VENDOR", this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR"));
        // 	this.dsDelete.setColumn(0, "NO_IDX", this.dsList.getColumn(this.dsList.rowposition, "NO_IDX"));
        	this.dsDelete.setColumn(0, "SEQ", this.dsList.getColumn(this.dsList.rowposition, "SEQ"));

        	var strSvcId    = "delete";
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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	if(!this.fnSaveValidate()) return;

        	this.fnSaveTransaction();

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
        	if(this.dsList.findRow("CHK2", "1") == -1){
        		this.gfnAlert("데이터를 선택하세요.(첫번째 체크박스)");
        		return;
        	}

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("SEQ", "string");

        	var seq = "";

        	//소득자 지급정보
        	for(var i=0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, this.ucFlag) != "#"){
        			if(this.dsList.getColumn(i, "CHK2") == 1){
        				seq +=this.dsList.getColumn(i, "SEQ")+",";
        			}
        		}
        	}

        	seq = seq.substr(0,seq.length-1);

        	this.dsReport.clearData();
        	var nRow = this.dsReport.addRow();
        	this.dsReport.setColumn(nRow, "SEQ" , seq);

        	var inProc		= "_dsProc";
        	var inParam 	= "";						// 필요없는 경우 생략
        	//var inParam 	= "params=dsReportParam";
        	var inData      = "report=dsReport";
        	var reportpath  = "/dh/dhv/DHV_INCOMETAX_DEFRAYMENT_RPT.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        	return false;
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {

        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("법인코드를 입력 하세요.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	//if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
        		if (this.gfnIsNull(this.ccfCD_DEPT_BH.form.CDTextBox.value)) {
        			this.gfnAlert("발행부서를 입력 하세요.");
        			this.ccfCD_DEPT_BH.form.CDTextBox.setFocus();
        			return false;
        		}
        	//}

        	if(this.gfnIsNull(this.ctclYM_IMPUTE_FROM.form.TextBox.value)) {
        		this.gfnAlert(this.ccboTY_GUBUN.text + "(FROM)을 입력 하세요.");
        		this.ctclYM_IMPUTE_FROM.form.TextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.ctclYM_IMPUTE_TO.form.TextBox.value)) {
        		this.gfnAlert(this.ccboTY_GUBUN.text + "(TO)을 입력 하세요.");
        		this.ctclYM_IMPUTE_TO.form.TextBox.setFocus();
        		return false;
        	}

        	if(this.gfnGetDiffDate(this.ctclYM_IMPUTE_FROM.form.TextBox.value + "01", this.ctclYM_IMPUTE_TO.form.TextBox.value +"01") <= -1){
        		this.gfnAlert(this.ccboTY_GUBUN.text +"의 시작일은 종료일보다 작아야 합니다.");
        		this.ctclYM_IMPUTE_FROM.form.TextBox.setFocus();
        		return false;
        	}

        	if(this.ctclYM_IMPUTE_FROM.form.TextBox.value.substring(0, 4) != this.ctclYM_IMPUTE_TO.form.TextBox.value.substring(0, 4)) {
        		this.gfnAlert(this.ccboTY_GUBUN.text +"의 범위는 같은 회기중으로 입력하셔야 합니다.");
        		this.ctclYM_IMPUTE_FROM.form.TextBox.setFocus();
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
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		if(this.dsList.rowcount > 0) {
        			//this.fnGSelect();
        			this.gfnSetFormStatus(this, "Q");
        			this.buttonEvent();
        			this.enableEvent();
        		} else {
        			this.dsList2.clearData();
        			//this.setDivData();

        			this.gfnSetFormStatus(this);
        			this.buttonEvent();
        			this.enableEvent();
        			this.clearDivData();
        		}
        	}

        	if (svcID == "g_select") {
        		if(this.dsList2.rowcount > 0) {
        			this.gfnSetFormStatus(this, "Q");
        			this.buttonEvent();
        			this.enableEvent();

        			//전표번호가 있을경우 비활성 처리
        			if(!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"))){
        				this.ccfCD_DEPT_ACNT_BH.set_enable(false);
        				this.cfCD_DEPT_ACNT.set_enable(false);
        				this.ctclDT_ACCOUNT.set_enable(false);
        				this.cfCD_VENDOR.set_enable(false);
        				this.cboTY_INCOMETYPE.set_enable(false);
        				this.ctclDT_PAYMENTDATE.set_enable(false);
        				this.cboTY_EARNERTYPE.set_enable(false);
        				this.cboYN_REALNAME.set_enable(false);
        				this.edtCD_FINANCIALPRIZES.set_enable(false);
        				this.edtTY_FINANCIALPRIZES.set_enable(false);
        				this.edtCD_FUND.set_enable(false);
        				this.cfCD_LOAN.set_enable(false);
        				this.cfCD_TAX.set_enable(false);
        				this.ctclFR_INTEREST.set_enable(false);
        				this.ctclTO_INTEREST.set_enable(false);
        				this.mskAM_CAPITALAMT.set_enable(false);
        				this.mskAM_PAYMENTAMT.set_enable(false);
        				this.mskRT_TAXRATE.set_enable(false);
        				this.mskRT_INTEREST.set_enable(false);
        				this.cfNO_BANKACNT.set_enable(false);
        				this.cfCD_SO.set_enable(false);
        				this.cfCD_JOSE.set_enable(false);
        				this.mskAM_INCOMETAX.set_enable(false);
        				this.mskAM_CORPTAX.set_enable(false);
        				this.mskAM_INHERBANTTAX.set_enable(false);
        				this.mskAM_FARMTAX.set_enable(false);
        				this.edtDS_ORDERTAXBASE.set_enable(false);
        			}

        			this.setDivData();
        		}
        	}

        	if(svcID == "insert") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}

        	if(svcID == "update") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}

        	if(svcID == "delete") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}

        	if(svcID == "issueSlip"){
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 발행 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	if(svcID == "cancelSlip"){
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 취소 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	var cdCorp = this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value);
        	var cdVendor = this.gfnTrim(this.cfCD_VENDOR.form.CDTextBox.value);
        	var TyVendor = this.edtTY_VENDOR2.value;

        	if(id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if(id == "ccfCD_DEPT_BH" || id == "ccfCD_DEPT_ACNT" || id == "cfCD_DEPT_ACNT" || id == "ccfCD_DEPT_ACNT_BH") {
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			return false;
        		}
        		var ynSlipAccept = (id == "ccfCD_DEPT_BH" || id == "ccfCD_DEPT_ACNT_BH") ? "" : "Y";
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, ynSlipAccept);						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);
        		dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        //
        // 		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", "0000000");
        // 		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT", "");
        // 		dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        // 		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        // 		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT", "");
        // 		dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        // 		dsUserParam.setColumn(nrow, "GR_SEARCH"	    , this.FormInfo.GR_SEARCH);
        // 		dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        	}

        	if(id == "ccfCD_VENDOR" || id == "cfCD_VENDOR") {
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드는 필수입력 값입니다.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        // 		dsUserParam.setColumn(nrow, "TY_VENDOR", "");
        // 		dsUserParam.setColumn(nrow, "YN_RELATED", "");
        	}

        	if(id == "cfCD_LOAN") {
        		dsUserParam.setColumn(nrow, "CD_SYSTEM", "DH");
        		dsUserParam.setColumn(nrow, "CD_TYPE", "V02");
        	}

        	if(id == "cfCD_TAX") {
        		dsUserParam.setColumn(nrow, "CD_SYSTEM", "DH");
        		dsUserParam.setColumn(nrow, "CD_TYPE", "V03");
        	}

        	if(id == "cfCD_SO") {
        		dsUserParam.setColumn(nrow, "CD_SYSTEM", "DH");
        		dsUserParam.setColumn(nrow, "CD_TYPE", "V05");
        	}

        	if(id == "cfCD_JOSE") {
        		dsUserParam.setColumn(nrow, "CD_SYSTEM", "DH");
        		dsUserParam.setColumn(nrow, "CD_TYPE", "V04");
        	}

        	if(id == "cfNO_BANKACNT") {
        		if(this.gfnIsNull(cdVendor)){
        			this.gfnAlert("거래처 코드는 필수입력 값입니다.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "TY_VENDOR" , TyVendor);
        		dsUserParam.setColumn(nrow, "CD_PAY" , cdVendor);
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;

        	if(id == "ccfCD_CORP") {
        		//this.gfnSetFormStatus(this, "I");
        		this.ccfCD_DEPT_ACNT.form.fnCodeFindClear();
        		this.ccfCD_DEPT_BH.form.fnCodeFindClear();
        		this.ccfCD_VENDOR.form.fnCodeFindClear();
        	}
        	if(id == "cfCD_VENDOR") {
        		var tyVendor = "";
        		if (arrData.length > 0) {
        			tyVendor = arrData[0]["TY_VENDOR"];

        		}
        		this.edtTY_VENDOR2.set_value(tyVendor);

        		this.cfNO_BANKACNT.form.fnCodeFindClear();
        	}

        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         this.fnGrid_RowCellChanged = function(obj,e) {
           if ((obj.oldrow > -1 && obj.oldrow == e.row) || (obj.oldrow == -1 && e.oldrow != e.row)) {
        		if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        		this.fnGSelect();

        		obj.oldrow = -1;
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.clearDivData();
        	}
        }

        this.clearDivData = function() {

        	this.edtTY_VENDOR.set_value("");
        	this.edtNO_JUMIN.set_value("");
        	this.edtYN_RESIDENT.set_value("");
        	this.edtYN_NATION.set_value("");
        	this.edtBIRTHDAY.set_value("");
        	this.edtNO_ZIP_CODE.set_value("");
        	this.edtDS_ADDR.set_value("");

        	this.ccfCD_DEPT_ACNT_BH.form.CDTextBox.set_value("");
        	this.ccfCD_DEPT_ACNT_BH.form.DSTextBox.set_value("");
        	this.cfCD_DEPT_ACNT.form.CDTextBox.set_value("");
        	this.cfCD_DEPT_ACNT.form.DSTextBox.set_value("");
        	this.ctclDT_ACCOUNT.set_value("");
        	this.cfCD_VENDOR.form.CDTextBox.set_value("");
        	this.cfCD_VENDOR.form.DSTextBox.set_value("");
        	this.cboTY_INCOMETYPE.set_value("");
        	this.ctclDT_PAYMENTDATE.set_value("");
        	this.cboTY_EARNERTYPE.set_value("");
        	this.cboYN_REALNAME.set_value("");
        	this.edtCD_FINANCIALPRIZES.set_value("");
        	this.edtTY_FINANCIALPRIZES.set_value("");
        	this.edtCD_FUND.set_value("");
        	this.cfCD_LOAN.form.CDTextBox.set_value("");
        	this.cfCD_LOAN.form.DSTextBox.set_value("");
        	this.cfCD_TAX.form.CDTextBox.set_value("");
        	this.cfCD_TAX.form.DSTextBox.set_value("");
        	this.ctclFR_INTEREST.set_value("");
        	this.ctclTO_INTEREST.set_value("");
        	this.mskAM_CAPITALAMT.set_value("");
        	this.mskAM_PAYMENTAMT.set_value("");
        	this.mskRT_TAXRATE.set_value("");
        	this.mskRT_INTEREST.set_value("");
        	this.cfNO_BANKACNT.form.CDTextBox.set_value("");
        	this.cfNO_BANKACNT.form.DSTextBox.set_value("");
        	this.edtTY_VENDOR2.set_value("");

        	this.cfCD_SO.form.CDTextBox.set_value("");
        	this.cfCD_SO.form.DSTextBox.set_value("");
        	this.cfCD_JOSE.form.CDTextBox.set_value("");
        	this.cfCD_JOSE.form.DSTextBox.set_value("");
        	this.mskAM_INCOMETAX.set_value("");
        	this.mskAM_CORPTAX.set_value("");
        	this.mskAM_INHERBANTTAX.set_value("");
        	this.mskAM_FARMTAX.set_value("");
        	this.edtDS_ORDERTAXBASE.set_value("");
        	this.mskAM_AMOUNTAMT.set_value("");
        }

        this.setDivData = function() {
        	this.edtTY_VENDOR.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "TY_VENDOR"));
        	this.edtNO_JUMIN.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "NO_JUMIN"));
        	this.edtYN_RESIDENT.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "YN_RESIDENT"));
        	this.edtYN_NATION.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "YN_NATION"));
        	this.edtBIRTHDAY.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "BIRTHDAY"));
        	this.edtNO_ZIP_CODE.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "NO_ZIP_CODE"));
        	this.edtDS_ADDR.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "DS_ADDR"));

        	this.ccfCD_DEPT_ACNT_BH.form.CDTextBox.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "CD_DEPT_BH"));
        	this.ccfCD_DEPT_ACNT_BH.form.DSTextBox.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "DS_DEPT_BH"));
        	this.cfCD_DEPT_ACNT.form.CDTextBox.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "CD_DEPT_ACNT"));
        	this.cfCD_DEPT_ACNT.form.DSTextBox.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "DS_DEPT_ACNT"));
        	this.ctclDT_ACCOUNT.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "DT_ACCOUNT"));
        	this.cfCD_VENDOR.form.CDTextBox.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "CD_VENDOR"));
        	this.cfCD_VENDOR.form.DSTextBox.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "DS_VENDOR"));
        	this.edtTY_VENDOR2.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "TY_VENDOR2"));
        	this.cboTY_INCOMETYPE.set_value(this.gfnNvl(this.dsList2.getColumn(this.dsList2.rowposition, "TY_INCOMETYPE"),""));
        	this.ctclDT_PAYMENTDATE.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "DT_PAYMENTDATE"));
        	this.cboTY_EARNERTYPE.set_value(this.gfnNvl(this.dsList2.getColumn(this.dsList2.rowposition, "TY_EARNERTYPE"),""));
        	this.cboYN_REALNAME.set_value(this.gfnNvl(this.dsList2.getColumn(this.dsList2.rowposition, "YN_REALNAME"),""));
        	this.edtCD_FINANCIALPRIZES.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "CD_FINANCIALPRIZES"));
        	this.edtTY_FINANCIALPRIZES.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "TY_FINANCIALPRIZES"));
        	this.edtCD_FUND.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "CD_FUND"));
        	this.cfCD_LOAN.form.CDTextBox.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "TY_LOAN"));
        	this.cfCD_LOAN.form.DSTextBox.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "DS_LOAN"));
        	this.cfCD_TAX.form.CDTextBox.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "CD_TAX"));
        	this.cfCD_TAX.form.DSTextBox.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "DS_TAX"));
        	this.ctclFR_INTEREST.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "FR_INTEREST"));
        	this.ctclTO_INTEREST.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "TO_INTEREST"));
        	this.mskAM_CAPITALAMT.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "AM_CAPITALAMT"));
        	this.mskAM_PAYMENTAMT.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "AM_PAYMENTAMT"));
        	this.mskRT_TAXRATE.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "RT_TAXRATE"));
        	this.mskRT_INTEREST.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "RT_INTEREST"));
        	this.cfNO_BANKACNT.form.CDTextBox.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "NO_BANKACNT"));
        	this.cfNO_BANKACNT.form.DSTextBox.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "DS_BANKACNT"));
        	this.cfCD_SO.form.CDTextBox.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "CD_SO"));
        	this.cfCD_SO.form.DSTextBox.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "DS_SO"));
        	this.cfCD_JOSE.form.CDTextBox.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "CD_JOSE"));
        	this.cfCD_JOSE.form.DSTextBox.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "DS_JOSE"));
        	this.mskAM_INCOMETAX.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "AM_INCOMETAX"));
        	this.mskAM_CORPTAX.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "AM_CORPTAX"));
        	this.mskAM_INHERBANTTAX.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "AM_INHERBANTTAX"));
        	this.mskAM_FARMTAX.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "AM_FARMTAX"));
        	this.edtDS_ORDERTAXBASE.set_value(this.dsList2.getColumn(this.dsList2.rowposition, "DS_ORDERTAXBASE"));

        	//소득세/주민세 계산
        	if(!this.gfnIsNull(this.mskAM_PAYMENTAMT.value) && !this.gfnIsNull(this.mskRT_TAXRATE.value)){
        		this.fnCalc(this.mskRT_TAXRATE.value, this.mskAM_PAYMENTAMT.value);
        	}

        	//지급액 계산
        	this.fnSetAmAmount();
        }

        //지급액 계산
        this.fnSetAmAmount = function ()
        {
        	var amPaymentAmt 	= nexacro.toNumber(this.mskAM_PAYMENTAMT.value, 0);		//지급총액
        	var amIncontax  	= nexacro.toNumber(this.mskAM_INCOMETAX.value, 0);		//소득세
        	var amInherbanttax  = nexacro.toNumber(this.mskAM_INHERBANTTAX.value, 0);	//주민세
        	var amCorptax  		= nexacro.toNumber(this.mskAM_CORPTAX.value, 0);		//법인세
        	var amFarmtax       = nexacro.toNumber(this.mskAM_FARMTAX.value, 0);		//농특세

        	this.mskAM_AMOUNTAMT.set_value((amPaymentAmt-(amIncontax+amInherbanttax+amCorptax+amFarmtax)));
        };

        this.buttonEvent = function() {
        	var flag = this.gfnGetFormStatus(this);

        	switch(flag) {
        		case "" :
        			this.FormBtns.Add.set_enable(true);
        			this.FormBtns.Del.set_enable(false);
        			this.FormBtns.Save.set_enable(false);
        			break;
        		case "Q" :
        			this.FormBtns.Add.set_enable(true);
        			this.FormBtns.Del.set_enable(true);
        			this.FormBtns.Save.set_enable(true);
        			break;
        		case "I" :
        			this.FormBtns.Add.set_enable(false);
        			this.FormBtns.Del.set_enable(false);
        			this.FormBtns.Save.set_enable(true);
        			break;
        	}
        }

        this.enableEvent = function() {
        	var flag = this.gfnGetFormStatus(this);

        	switch(flag) {
        		case "" :
        			this.ccfCD_DEPT_ACNT_BH.set_enable(false);
        			this.cfCD_DEPT_ACNT.set_enable(false);
        			this.ctclDT_ACCOUNT.set_enable(false);
        			this.cfCD_VENDOR.set_enable(false);
        			this.edtTY_VENDOR2.set_enable(false);

        			this.cboTY_INCOMETYPE.set_enable(false);
        			this.ctclDT_PAYMENTDATE.set_enable(false);
        			this.cboTY_EARNERTYPE.set_enable(false);
        			this.cboYN_REALNAME.set_enable(false);
        			this.edtCD_FINANCIALPRIZES.set_enable(false);
        			this.edtTY_FINANCIALPRIZES.set_enable(false);
        			this.edtCD_FUND.set_enable(false);
        			this.cfCD_LOAN.set_enable(false);
        			this.cfCD_TAX.set_enable(false);
        			this.ctclFR_INTEREST.set_enable(false);
        			this.ctclTO_INTEREST.set_enable(false);
        			this.mskAM_CAPITALAMT.set_enable(false);
        			this.mskAM_PAYMENTAMT.set_enable(false);
        			this.mskRT_TAXRATE.set_enable(false);
        			this.mskRT_INTEREST.set_enable(false);
        			this.cfNO_BANKACNT.set_enable(false);
        			this.cfCD_SO.set_enable(false);
        			this.cfCD_JOSE.set_enable(false);
        			this.mskAM_INCOMETAX.set_enable(false);
        			this.mskAM_CORPTAX.set_enable(false);
        			this.mskAM_INHERBANTTAX.set_enable(false);
        			this.mskAM_FARMTAX.set_enable(false);
        			this.edtDS_ORDERTAXBASE.set_enable(false);
        			break;
        		case "Q" :
        			this.ccfCD_DEPT_ACNT_BH.set_enable(true);
        			this.cfCD_DEPT_ACNT.set_enable(true);
        			this.ctclDT_ACCOUNT.set_enable(true);
        			this.cfCD_VENDOR.set_enable(true);
        			this.edtTY_VENDOR2.set_enable(true);
        			this.cboTY_INCOMETYPE.set_enable(true);
        			//this.ctclDT_PAYMENTDATE.set_enable(false);
        			this.ctclDT_PAYMENTDATE.set_enable(true);
        			this.cboTY_EARNERTYPE.set_enable(true);
        			this.cboYN_REALNAME.set_enable(true);
        			this.edtCD_FINANCIALPRIZES.set_enable(true);
        			this.edtTY_FINANCIALPRIZES.set_enable(true);
        			this.edtCD_FUND.set_enable(true);
        			this.cfCD_LOAN.set_enable(true);
        			this.cfCD_TAX.set_enable(true);
        			this.ctclFR_INTEREST.set_enable(true);
        			this.ctclTO_INTEREST.set_enable(true);
        			this.mskAM_CAPITALAMT.set_enable(true);
        			this.mskAM_PAYMENTAMT.set_enable(true);
        			this.mskRT_TAXRATE.set_enable(true);
        			this.mskRT_INTEREST.set_enable(true);
        			this.cfNO_BANKACNT.set_enable(true);
        			this.cfCD_SO.set_enable(true);
        			this.cfCD_JOSE.set_enable(true);
        			this.mskAM_INCOMETAX.set_enable(true);
        			this.mskAM_CORPTAX.set_enable(true);
        			this.mskAM_INHERBANTTAX.set_enable(true);
        			this.mskAM_FARMTAX.set_enable(true);
        			this.edtDS_ORDERTAXBASE.set_enable(true);
        			break;
        		case "I" :
        			this.ccfCD_DEPT_ACNT_BH.set_enable(true);
        			this.cfCD_DEPT_ACNT.set_enable(true);
        			this.ctclDT_ACCOUNT.set_enable(true);
        			this.cfCD_VENDOR.set_enable(true);
        			this.edtTY_VENDOR2.set_enable(true);
        			this.cboTY_INCOMETYPE.set_enable(true);
        			//this.ctclDT_PAYMENTDATE.set_enable(false);
        			this.ctclDT_PAYMENTDATE.set_enable(true);
        			this.cboTY_EARNERTYPE.set_enable(true);
        			this.cboYN_REALNAME.set_enable(true);
        			this.edtCD_FINANCIALPRIZES.set_enable(true);
        			this.edtTY_FINANCIALPRIZES.set_enable(true);
        			this.edtCD_FUND.set_enable(true);
        			this.cfCD_LOAN.set_enable(true);
        			this.cfCD_TAX.set_enable(true);
        			this.ctclFR_INTEREST.set_enable(true);
        			this.ctclTO_INTEREST.set_enable(true);
        			this.mskAM_CAPITALAMT.set_enable(true);
        			this.mskAM_PAYMENTAMT.set_enable(true);
        			this.mskRT_TAXRATE.set_enable(true);
        			this.mskRT_INTEREST.set_enable(true);
        			this.cfNO_BANKACNT.set_enable(true);
        			this.cfCD_SO.set_enable(true);
        			this.cfCD_JOSE.set_enable(true);
        			this.mskAM_INCOMETAX.set_enable(true);
        			this.mskAM_CORPTAX.set_enable(true);
        			this.mskAM_INHERBANTTAX.set_enable(true);
        			this.mskAM_FARMTAX.set_enable(true);
        			this.edtDS_ORDERTAXBASE.set_enable(true);
        			break;
        	}
        }

        this.fnSaveValidate = function() {
        	if(this.gfnIsNull(this.ccfCD_DEPT_ACNT_BH.form.CDTextBox.value)) {
        		this.gfnAlert("발행부서를 확인하십시요.");
        		this.ccfCD_DEPT_ACNT_BH.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.cfCD_DEPT_ACNT.form.CDTextBox.value)) {
        		this.gfnAlert("귀속부서를 확인하십시요.");
        		this.cfCD_DEPT_ACNT.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.ctclDT_ACCOUNT.value)) {
        		this.gfnAlert("회계일자를 확인하십시요.");
        		this.ctclDT_ACCOUNT.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.cfCD_VENDOR.form.CDTextBox.value)) {
        		this.gfnAlert("거래처를 확인하십시요");
        		this.cfCD_VENDOR.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.cboTY_INCOMETYPE.value)) {
        		this.gfnAlert("지급구분을 확인하십시요.");
        		this.cboTY_INCOMETYPE.setFocus();
        		return false;
        	}

         	if(this.gfnIsNull(this.ctclDT_PAYMENTDATE.value)) {
         		this.gfnAlert("지급일자를 확인하십시요.");
         		return false;
         	}

        	if(this.gfnIsNull(this.cboTY_EARNERTYPE.value)) {
        		this.gfnAlert("소득자구분코드를 확인하십시요.");
        		this.cboTY_EARNERTYPE.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.cfCD_TAX.form.CDTextBox.value)) {
        		this.gfnAlert("과세구분을 확인하십시요.");
        		this.cfCD_TAX.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.mskAM_PAYMENTAMT.value)) {
        		this.gfnAlert("지급총액을 입력하십시요.");
        		this.mskAM_PAYMENTAMT.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.cfCD_SO.form.CDTextBox.value)) {
        		this.gfnAlert("소득의종류를 확인하십시요.");
        		this.cfCD_SO.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(nexacro.toNumber(this.mskAM_INCOMETAX.value,0) != 0 && nexacro.toNumber(this.mskAM_CORPTAX.value,0) != 0){
        		this.gfnAlert("소득세 또는 법인세 중 하나만 입력하세요.");
        		this.mskAM_INCOMETAX.setFocus();
        		return false;
        	}

        	return true;
        }

        this.fnSaveTransaction = function() {

        	var flag = this.gfnGetFormStatus(this);

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();

        	var strSvcId    = "";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	switch(flag) {
        		case "I" :
        			var nRow = this.dsInsert.addRow();

        			this.dsInsert.setColumn(nRow , "CD_DEPT_ACNT", this.cfCD_DEPT_ACNT.form.CDTextBox.value);
        			this.dsInsert.setColumn(nRow , "CD_VENDOR", this.cfCD_VENDOR.form.CDTextBox.value);

        			//var tyIncometype = this.cboTY_INCOMETYPE.value;
        			//if(tyIncometype == "50"){
        			//	if(nexacro.toNumber(this.mskAM_CORPTAX.value,0) != 0){
        			//		tyIncometype = "80";
        			//	}
        			//}
        			this.dsInsert.setColumn(nRow , "TY_INCOMETYPE", this.divData.form.cboTY_INCOMETYPE.value);
        			this.dsInsert.setColumn(nRow , "TY_INCOMECLASS", ""); //소득구분
        			this.dsInsert.setColumn(nRow , "TY_EARNERTYPE", this.cboTY_EARNERTYPE.value);
        			this.dsInsert.setColumn(nRow , "DT_ACCOUNT", this.ctclDT_ACCOUNT.value);
        			this.dsInsert.setColumn(nRow , "YM_IMPUTE", (this.ctclDT_ACCOUNT.value).substr(0, 6));
        			this.dsInsert.setColumn(nRow , "NO_BANKACNT", this.cfNO_BANKACNT.form.CDTextBox.value);
        			this.dsInsert.setColumn(nRow , "CD_FUND", this.edtCD_FUND.value);
        			this.dsInsert.setColumn(nRow , "CD_FINANCIALPRIZES", this.edtCD_FINANCIALPRIZES.value);
        			this.dsInsert.setColumn(nRow , "TY_FINANCIALPRIZES", this.edtTY_FINANCIALPRIZES.value);
        			this.dsInsert.setColumn(nRow , "YN_REALNAME", this.cboYN_REALNAME.value);
        			this.dsInsert.setColumn(nRow , "TY_LOAN", this.cfCD_LOAN.form.CDTextBox.value);
        			this.dsInsert.setColumn(nRow , "CD_TAX", this.cfCD_TAX.form.CDTextBox.value);
        			this.dsInsert.setColumn(nRow , "DT_PAYMENTDATE", this.ctclDT_PAYMENTDATE.value);
        			this.dsInsert.setColumn(nRow , "AM_PAYMENTAMT", this.mskAM_PAYMENTAMT.value);
        			this.dsInsert.setColumn(nRow , "AM_CAPITALAMT", this.mskAM_CAPITALAMT.value);
        			this.dsInsert.setColumn(nRow , "RT_TAXRATE", this.mskRT_TAXRATE.value);
        			this.dsInsert.setColumn(nRow , "AM_INCOMETAX", this.mskAM_INCOMETAX.value);
        			this.dsInsert.setColumn(nRow , "AM_CORPTAX", this.mskAM_CORPTAX.value);
        			this.dsInsert.setColumn(nRow , "AM_INHERBANTTAX", this.mskAM_INHERBANTTAX.value);
        			this.dsInsert.setColumn(nRow , "AM_FARMTAX", this.mskAM_FARMTAX.value);
        			this.dsInsert.setColumn(nRow , "DS_ORDERTAXBASE", this.edtDS_ORDERTAXBASE.value);
        			this.dsInsert.setColumn(nRow , "RT_INTEREST", this.mskRT_INTEREST.value);
        			this.dsInsert.setColumn(nRow , "FR_INTEREST", this.ctclFR_INTEREST.value);
        			this.dsInsert.setColumn(nRow , "TO_INTEREST", this.ctclTO_INTEREST.value);
        			this.dsInsert.setColumn(nRow , "CD_SLIP", "");
        			this.dsInsert.setColumn(nRow , "CD_ETC3", this.cfCD_SO.form.CDTextBox.value);
        			this.dsInsert.setColumn(nRow , "CD_JOSE", this.cfCD_JOSE.form.CDTextBox.value);
        			this.dsInsert.setColumn(nRow , "ID_USER", this.AuthClient.ID_USER);
        			this.dsInsert.setColumn(nRow, "CD_DEPT_BH", this.ccfCD_DEPT_ACNT_BH.form.CDTextBox.value);


        			strSvcId = "insert";
        			inData = "insert=dsInsert";

        			break;

        		case "Q" :
        		case "U" :

        			var nRow = this.dsUpdate.addRow();

        			this.dsUpdate.setColumn(nRow , "CD_DEPT_ACNT", this.cfCD_DEPT_ACNT.form.CDTextBox.value);
        			this.dsUpdate.setColumn(nRow , "CD_VENDOR", this.cfCD_VENDOR.form.CDTextBox.value);

        // 			var tyIncometype = this.cboTY_INCOMETYPE.value;
        // 			if(tyIncometype == "50"){
        // 				if(nexacro.toNumber(this.mskAM_CORPTAX.value,0) != 0){
        // 					tyIncometype = "80";
        // 				}
        // 			}
        			trace("this.divData.form.cboTY_INCOMETYPE.value==>", this.divData.form.cboTY_INCOMETYPE.value);
        			this.dsUpdate.setColumn(nRow , "TY_INCOMETYPE", this.divData.form.cboTY_INCOMETYPE.value);
        			this.dsUpdate.setColumn(nRow , "TY_INCOMECLASS", ""); //소득구분
        			this.dsUpdate.setColumn(nRow , "TY_EARNERTYPE", this.cboTY_EARNERTYPE.value);
        			this.dsUpdate.setColumn(nRow , "DT_ACCOUNT", this.ctclDT_ACCOUNT.value);
        			this.dsUpdate.setColumn(nRow , "YM_IMPUTE", (this.ctclDT_ACCOUNT.value).substr(0, 6));
        			this.dsUpdate.setColumn(nRow , "NO_BANKACNT", this.cfNO_BANKACNT.form.CDTextBox.value);
        			this.dsUpdate.setColumn(nRow , "CD_FUND", this.edtCD_FUND.value);
        			this.dsUpdate.setColumn(nRow , "CD_FINANCIALPRIZES", this.edtCD_FINANCIALPRIZES.value);
        			this.dsUpdate.setColumn(nRow , "TY_FINANCIALPRIZES", this.edtTY_FINANCIALPRIZES.value);
        			this.dsUpdate.setColumn(nRow , "YN_REALNAME", this.cboYN_REALNAME.value);
        			this.dsUpdate.setColumn(nRow , "TY_LOAN", this.cfCD_LOAN.form.CDTextBox.value);
        			this.dsUpdate.setColumn(nRow , "CD_TAX", this.cfCD_TAX.form.CDTextBox.value);
        			this.dsUpdate.setColumn(nRow , "DT_PAYMENTDATE", this.ctclDT_PAYMENTDATE.value);
        			this.dsUpdate.setColumn(nRow , "AM_PAYMENTAMT", this.mskAM_PAYMENTAMT.value);
        			this.dsUpdate.setColumn(nRow , "AM_CAPITALAMT", this.mskAM_CAPITALAMT.value);
        			this.dsUpdate.setColumn(nRow , "RT_TAXRATE", this.mskRT_TAXRATE.value);
        			this.dsUpdate.setColumn(nRow , "AM_INCOMETAX", this.mskAM_INCOMETAX.value);
        			this.dsUpdate.setColumn(nRow , "AM_CORPTAX", this.mskAM_CORPTAX.value);
        			this.dsUpdate.setColumn(nRow , "AM_INHERBANTTAX", this.mskAM_INHERBANTTAX.value);
        			this.dsUpdate.setColumn(nRow , "AM_FARMTAX", this.mskAM_FARMTAX.value);
        			this.dsUpdate.setColumn(nRow , "DS_ORDERTAXBASE", this.edtDS_ORDERTAXBASE.value);
        			this.dsUpdate.setColumn(nRow , "RT_INTEREST", this.mskRT_INTEREST.value);
        			this.dsUpdate.setColumn(nRow , "FR_INTEREST", this.ctclFR_INTEREST.value);
        			this.dsUpdate.setColumn(nRow , "TO_INTEREST", this.ctclTO_INTEREST.value);
        			this.dsUpdate.setColumn(nRow , "NO_IDX", this.dsList2.getColumn(this.dsList2.rowposition, "NO_IDX"));
        			this.dsUpdate.setColumn(nRow , "CD_ETC3", this.cfCD_SO.form.CDTextBox.value);
        			this.dsUpdate.setColumn(nRow , "CD_JOSE", this.cfCD_JOSE.form.CDTextBox.value);
        			this.dsUpdate.setColumn(nRow , "SEQ", this.dsList.getColumn(this.dsList.rowposition, "SEQ"));
        			this.dsUpdate.setColumn(nRow , "ID_USER", this.AuthClient.ID_USER);
        			this.dsUpdate.setColumn(nRow, "CD_DEPT_BH", this.ccfCD_DEPT_ACNT_BH.form.CDTextBox.value);

        			strSvcId = "update";
        			inData = "update=dsUpdate";

        			break;
        	}

        	if(this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0) return;

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        };

        //전표발행 처리
        this.fnIssueSlip = function (obj,e)
        {
        	if(this.dsList.findRow("CHK2", "1") == -1){
        		this.gfnAlert("데이터를 선택하세요.(첫번째 체크박스)");
        		return;
        	}

        	var chkSave = false;
        	for(var i=0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, "CHK2") == "1"){
        			if(this.gfnGetFlag(this.dsList, i) == "U"){
        				chkSave = true;
        			}
        		}
        	}

        	if(this.dsList.findRowExpr("CHK2 == 1 && !dataset.parent.gfnIsNull(CD_SLIP) && nx_flag != '#'") > -1){
        		this.gfnAlert("전표발행된 항목이 체크되어 있습니다.");
        		return;
        	}

        	if(chkSave){	//데이터 수정 체크
        		this.gfnAlert("저장하지 않은 데이터가 존재합니다.저장 후 발행해 주세요.");
        		return;
        	}

        	this.gfnConfirm("전표발행 하시겠습니까?", "fnIssueSlip_callback");

        };

        this.fnIssueSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsIssueSlip.clearData();
        		var nRow = this.dsIssueSlip.addRow();

        		var arrSeqNo = "";
        		for(var r = 0; r < this.dsList.rowcount; r++) {
        			if(this.dsList.getColumn(r, "CHK2") == 1){
        				arrSeqNo += this.dsList.getColumn(r, "SEQ")+",";
        			}
        		}

        		//처리할 데이터 담기
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP"	, this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsIssueSlip.setColumn(nRow, "SEQ" 	  	, arrSeqNo.substr(0,arrSeqNo.length-1));
        		this.dsIssueSlip.setColumn(nRow, "ID_TRANS" , this.AuthClient.ID_USER);

        		var strSvcId    = "issueSlip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "issueSlip=dsIssueSlip";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        };

        //전표취소 처리
        this.fnCancelSlip = function (obj,e)
        {

        	if(this.dsList.findRow("CHK2", "1") == -1){
        		this.gfnAlert("데이터를 선택하세요.(첫번째 체크박스)");
        		return;
        	}

        	var chkSave = false;
        	for(var i=0;i<this.dsList.rowcount;i++){
        		if(this.dsList.getColumn(i, "CHK2") == "1"){
        			if(this.gfnGetFlag(this.dsList, i) == "U"){
        				chkSave = true;
        			}
        		}
        	}

        	if(chkSave){	//데이터 수정 체크
        		this.gfnAlert("저장하지 않은 데이터가 존재합니다.저장 후 실행해주세요.");
        		return;
        	}

        	for(var i = 0; i < this.dsList.rowcount; i++) {
        		if(this.dsList.getColumn(i, this.ucFlag) != '#' && this.dsList.getColumn(i, "CHK2") == 1){
        			if(this.gfnIsNull(nexacro.replaceAll(this.gfnTrim(this.gfnNvl(this.dsList.getColumn(i, "CD_SLIP"),"")),"-",""))){
        				this.gfnAlert("전표번호가 없는 데이터가 선택되어있습니다.");
        				return;
        			}
        		}
        	}

        // 	if (this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP")))) {
        // 		this.gfnAlert("전표번호는 필수입니다.");
        // 		return;
        // 	}
        //

        	this.gfnConfirm("전표를 취소하시겠습니까?", "fnCancelSlip_callback");

        };

        this.fnCancelSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsCancelSlip.clearData();
        		var nRow = this.dsCancelSlip.addRow();


        		var cdSlip = this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP");
        		var arrCdSlip = "";
        		for(var r = 0; r < this.dsList.rowcount; r++) {
        			if(this.dsList.getColumn(r, "CHK2") == 1){
        				arrCdSlip += this.dsList.getColumn(r, "CD_SLIP")+",";
        			}
        		}

        		//처리할 데이터 담기
        		//this.dsCancelSlip.setColumn(nRow, "CD_SLIP"  , cdSlip);
        		this.dsCancelSlip.setColumn(nRow, "CD_SLIP"  , arrCdSlip);

        		var strSvcId    = "cancelSlip";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "cancelSlip=dsCancelSlip";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        };

        //전표 조회
        this.fnSearchSlip = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP")))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP"));
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());

        };

        //지급총액 변경
        this.divData_mskAM_PAYMENTAMT_onchanged = function(obj,e)
        {
        	if(!this.gfnIsNull(this.mskRT_TAXRATE.value)){
        		this.fnCalc(this.mskRT_TAXRATE.value, e.postvalue);
        	}

        	//지급액 계산
        	this.fnSetAmAmount();
        };

        //세율 변경
        this.divData_mskRT_TAXRATE_onchanged = function(obj,e)
        {
        	if(!this.gfnIsNull(this.mskAM_PAYMENTAMT.value)){
        		this.fnCalc(e.postvalue, this.mskAM_PAYMENTAMT.value);
        	}
        	//지급액 계산
        	this.fnSetAmAmount();
        };

        //소득세/주민세 계산
        this.fnCalc = function (rtTaxRate, amPaymentamt) {
        	var amIncomeTax = (nexacro.toNumber(amPaymentamt,0) * nexacro.toNumber(rtTaxRate,0)/1.0)*0.01;
        	var amInherbantTax = (nexacro.toNumber(amPaymentamt,0) * nexacro.toNumber(rtTaxRate,0)/1.0)*0.001;

        	var TY_EARNERTYPE = this.cboTY_EARNERTYPE.value		// 소득자구분코드
        	var TY_INCOMETYPE = this.cboTY_INCOMETYPE.value;	// 지급구분
        	var amCorpTax = 0;									// 법인세

        	this.mskAM_INCOMETAX.set_enable(true);
        	this.mskAM_CORPTAX.set_enable(false);

        	if(TY_INCOMETYPE == "80"){
        	// 80	이자소득(법인)
        		amCorpTax = amIncomeTax;
        		amIncomeTax = 0;
        		this.mskAM_INCOMETAX.set_enable(false);
        		this.mskAM_CORPTAX.set_enable(true);
        	}else if(TY_INCOMETYPE == "60"){
        	// 60	배당소득
        		if(TY_EARNERTYPE == "211"){	// 211 사업자등록번호
        			amCorpTax = amIncomeTax;
        			amIncomeTax = 0;
        			this.mskAM_INCOMETAX.set_enable(false);
        			this.mskAM_CORPTAX.set_enable(true);
        		}
        	}

        	this.mskAM_CORPTAX.set_value(amCorpTax); 			// 법인세
        	this.mskAM_INCOMETAX.set_value(amIncomeTax); 		// 소득세
        	this.mskAM_INHERBANTTAX.set_value(amInherbantTax);	// 주민세
        };

        //원천징수액 금액 변경
        this.divData_mskAM_onchanged = function(obj,e)
        {
        	//지급액 계산
        	this.fnSetAmAmount();
        };

        // 지급구분 변경
        this.divData_cboTY_INCOMETYPE_onitemchanged = function(obj,e)
        {
        	if(!this.gfnIsNull(this.mskAM_PAYMENTAMT.value) && !this.gfnIsNull(this.mskRT_TAXRATE.value)){
        		this.fnCalc(this.mskRT_TAXRATE.value, this.mskAM_PAYMENTAMT.value);
        	}
        };

        this.divData_cboTY_EARNERTYPE_onitemchanged = function(obj,e)
        {
        	if(!this.gfnIsNull(this.mskAM_PAYMENTAMT.value) && !this.gfnIsNull(this.mskRT_TAXRATE.value)){
        		this.fnCalc(this.mskRT_TAXRATE.value, this.mskAM_PAYMENTAMT.value);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccboTY_GUBUN.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.form.staDT_INTEREST.addEventHandler("onclick",this.divData_staFR_INTEREST_onclick,this);
            this.divData.form.cboTY_INCOMETYPE.addEventHandler("onitemchanged",this.divData_cboTY_INCOMETYPE_onitemchanged,this);
            this.divData.form.cboTY_EARNERTYPE.addEventHandler("onitemchanged",this.divData_cboTY_EARNERTYPE_onitemchanged,this);
            this.divData.form.mskAM_PAYMENTAMT.addEventHandler("onchanged",this.divData_mskAM_PAYMENTAMT_onchanged,this);
            this.divData.form.mskRT_TAXRATE.addEventHandler("onchanged",this.divData_mskRT_TAXRATE_onchanged,this);
            this.divData.form.mskAM_INCOMETAX.addEventHandler("onchanged",this.divData_mskAM_onchanged,this);
            this.divData.form.mskAM_INHERBANTTAX.addEventHandler("onchanged",this.divData_mskAM_onchanged,this);
            this.divData.form.mskAM_CORPTAX.addEventHandler("onchanged",this.divData_mskAM_onchanged,this);
            this.divData.form.mskAM_FARMTAX.addEventHandler("onchanged",this.divData_mskAM_onchanged,this);
            this.divData.form.mskAM_AMOUNTAMT.addEventHandler("onchanged",this.divData_mskAM_PAYMENTAMT_onchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_INCOMETAX_DEFRAYMENT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
