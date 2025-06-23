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
                this._setFormPosition(800,460);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TT_ILPAY\" type=\"STRING\" size=\"256\"/><Column id=\"TT_ILSODUK\" type=\"STRING\" size=\"256\"/><Column id=\"TT_ILJUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"TT_ILGOYONG\" type=\"STRING\" size=\"256\"/><Column id=\"TT_ILKOOKMINPER\" type=\"STRING\" size=\"256\"/><Column id=\"TT_ILMEDICARE\" type=\"STRING\" size=\"256\"/><Column id=\"TT_ILSILVER\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ILSLIP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ILSLIP1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ILSLIP2\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BONSASLIP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BONSASLIP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"GJAHR\" type=\"STRING\" size=\"256\"/><Column id=\"BELNR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_KOOKMIN_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MEDICARE_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_KOOKMIN_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_KOOKMIN_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MEDICARE_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MEDICARE_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APPROVAL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APPROVAL_CANCEL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JIGUB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSBPR_COSTTOJA_SELECT</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DSBPR_COSTTOJA_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DSBPR_COSTTOJA_SELECT</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DSBPR_COSTTOJA_INSERT</Col></Row><Row><Col id=\"TARGET\">exec1</Col><Col id=\"SP\">DSBPR_COSTTOJA_DELETE</Col></Row><Row><Col id=\"SP\">DSBPR_AUTOSLIP_ISSUE_MAGAM</Col><Col id=\"TARGET\">exec2</Col></Row><Row><Col id=\"SP\">DSBPR_AUTOSLIP_MAGAM_SLIPNO_CANCEL</Col><Col id=\"TARGET\">exec3</Col></Row><Row><Col id=\"TARGET\">exec4</Col><Col id=\"SP\">DSBPR_MAGAM_SLIP_UPDATE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_CODE_LIST_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ERPKEY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SLIP_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListTY_SLIP_GUBUN_1", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TT_ILPAY\" type=\"STRING\" size=\"256\"/><Column id=\"TT_ILSODUK\" type=\"STRING\" size=\"256\"/><Column id=\"TT_ILJUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"TT_ILGOYONG\" type=\"STRING\" size=\"256\"/><Column id=\"TT_ILKOOKMINPER\" type=\"STRING\" size=\"256\"/><Column id=\"TT_ILMEDICARE\" type=\"STRING\" size=\"256\"/><Column id=\"TT_ILSILVER\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ILSLIP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ILSLIP1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ILSLIP2\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BONSASLIP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BONSASLIP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"GJAHR\" type=\"STRING\" size=\"256\"/><Column id=\"BELNR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_KOOKMIN_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MEDICARE_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_KOOKMIN_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_KOOKMIN_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MEDICARE_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MEDICARE_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APPROVAL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APPROVAL_CANCEL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JIGUB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListTY_SLIP_GUBUN_2", this);
            obj.set_useclientlayout("true");
            obj._setContents("<ColumnInfo><Column id=\"TT_ILPAY\" type=\"STRING\" size=\"256\"/><Column id=\"TT_ILSODUK\" type=\"STRING\" size=\"256\"/><Column id=\"TT_ILJUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"TT_ILGOYONG\" type=\"STRING\" size=\"256\"/><Column id=\"TT_ILKOOKMINPER\" type=\"STRING\" size=\"256\"/><Column id=\"TT_ILMEDICARE\" type=\"STRING\" size=\"256\"/><Column id=\"TT_ILSILVER\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ILSLIP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ILSLIP1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ILSLIP2\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BONSASLIP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BONSASLIP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"GJAHR\" type=\"STRING\" size=\"256\"/><Column id=\"BELNR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_KOOKMIN_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MEDICARE_SLIP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_KOOKMIN_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_KOOKMIN_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MEDICARE_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MEDICARE_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APPROVAL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APPROVAL_CANCEL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JIGUB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_JIGUB", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","-5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","10",null,"160","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg02","86","70","145","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBg04","546","70","250","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBg01","316","70","145","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBg08","316","99","145","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBg06","86","99","145","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBg10","86","128","145","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBg11","316","128","145","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBg08_00","546","99","250","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBg11_00","546","128","250","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCS_SITE","0","0","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.getSetter("readonly").set("true");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBg1","86","0","711","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBg00","86","29","313","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("taborderf").set("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staDT_ACCOUNT","staBg00:-1","29","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_text("전기일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staBg03","staDT_ACCOUNT:-1","29","313","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACCOUNT","489","34","110","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staCS_SITE00","0","70","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("8");
            obj.set_text("총금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTT_ILJUMIN","460","70","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_text("총주민세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTT_ILSODUK","230","70","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("14");
            obj.set_text("총소득세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTT_ILGOYONG","0","99","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("16");
            obj.set_text("총고용보험");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTT_ILKOOKMINPER","230","99","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("18");
            obj.set_text("총국민연금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTT_ILMEDICARE","0","128","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("20");
            obj.set_text("총건강보험");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","0","29","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("33");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","92","34","80","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("22");
            obj.getSetter("readonly").set("true");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_ILPAY","92","75","133","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_format("9,999");
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_ILSODUK","322","75","133","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_format("9,999");
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_ILGOYONG","92","104","133","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_format("9,999");
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_ILJUMIN","552","75","133","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_format("9,999");
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_ILMEDICARE","92","133","133","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_format("9,999");
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_ILKOOKMINPER","322","104","133","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_format("9,999");
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","92","5","507","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("36");
            obj.getSetter("readonly").set("true");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTT_ILMEDICARE01","230","128","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("37");
            obj.set_text("총요양보험");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_ILSILVER","322","133","133","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_format("9,999");
            obj.set_taborder("38");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTT_ILKOOKMINPER00","460","99","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("39");
            obj.set_text("국민연금\r\n거래처");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staTT_ILMEDICARE01_00","460","128","87","30",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("41");
            obj.set_text("요양보험\r\n거래처");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ccfVENDOR1","552","104","238","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DOX_CFVENDOR_DH");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("43");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ccfVENDOR2","552","133","238","20",null,null,null,null,null,null,this.divData.form.divDataTop.form);
            obj.getSetter("CodeFindName").set("DOX_CFVENDOR_DH");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("44");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("divDataTop1","0","divDataTop:20",null,"90","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCS_SITE00_01","230","0","87","30",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_taborder("23");
            obj.set_text("결재구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("staBg02_00","316","0","145","30",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("staBg02","546","0","250","30",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("staBg04","316","29","145","30",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("staBg01","86","29","145","30",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("staBg08","86","58","145","30",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("staBg06","546","29","250","30",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("staBg10","316","58","145","30",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("staBg11","546","58","250","30",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("staCS_SITE00","460","0","87","30",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_taborder("13");
            obj.set_text("금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("staTT_ILJUMIN","230","29","87","30",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_taborder("14");
            obj.set_text("주민세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("staTT_ILGOYONG","460","29","87","30",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_taborder("16");
            obj.set_text("고용보험");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("staTT_ILKOOKMINPER","0","58","87","30",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_taborder("17");
            obj.set_text("국민연금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("staTT_ILMEDICARE","230","58","87","30",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_taborder("18");
            obj.set_text("건강보험");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("staTT_ILSODUK","0","29","87","30",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_taborder("15");
            obj.set_text("소득세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("staTT_ILMEDICARE01","460","58","87","30",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_taborder("19");
            obj.set_text("요양보험");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_ILPAY","552","5","133","20",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_format("9,999");
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_ILSODUK","92","34","133","20",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_format("9,999");
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_ILGOYONG","552","34","133","20",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_format("9,999");
            obj.set_taborder("4");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_ILJUMIN","322","34","133","20",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_format("9,999");
            obj.set_taborder("6");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_ILMEDICARE","322","63","133","20",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_format("9,999");
            obj.set_taborder("8");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_ILKOOKMINPER","92","63","133","20",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_format("9,999");
            obj.set_taborder("11");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_ILSILVER","552","63","133","20",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_format("9,999");
            obj.set_taborder("20");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new Static("staCS_SITE00_00","0","0","231","30",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_taborder("21");
            obj.set_text("익월지급");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new Combo("cboCD_JIGUB","322","5","133","20",null,null,null,null,null,null,this.divData.form.divDataTop1.form);
            obj.set_taborder("22");
            obj.set_innerdataset("dsCD_JIGUB");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.divData.form.divDataTop1.addChild(obj.name, obj);

            obj = new Div("divDataTop2","0","divDataTop1:20",null,"160","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCS_SITE00_01","230","0","87","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("35");
            obj.set_text("결재구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("staBg02_00","316","0","145","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("staBg00_00","86","129","313","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.getSetter("taborderf").set("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_taborder("15");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("staBg03_00","484","129","313","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("staBg02","546","0","250","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("staBg04","316","29","145","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("staBg01","86","29","145","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("staBg05","86","100","313","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("staBg08","86","58","145","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("staBg06","546","29","250","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("staBg10","316","58","145","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("staBg11","546","58","250","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("staCS_SITE00","460","0","87","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("14");
            obj.set_text("금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("staTT_ILJUMIN","230","29","87","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("16");
            obj.set_text("주민세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("staCD_ILSLIP1","0","100","87","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            obj.set_text("노무비전표1");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("staTT_ILGOYONG","460","29","87","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("20");
            obj.set_text("고용보험");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("staTT_ILKOOKMINPER","0","58","87","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("21");
            obj.set_text("국민연금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("staTT_ILMEDICARE","230","58","87","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("22");
            obj.set_text("건강보험");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("staCD_KOOKMIN_SLIP","0","129","87","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("24");
            obj.set_text("국민연금전표");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("staTT_ILSODUK","0","29","87","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("19");
            obj.set_text("소득세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("staCD_MEDICARE_SLIP","398","129","87","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("25");
            obj.set_text("건강보험전표");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("staTT_ILMEDICARE01","460","58","87","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("28");
            obj.set_text("요양보험");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("staCD_ILSLIP2","398","100","87","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("30");
            obj.set_text("노무비전표2");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("staBg03_00_00","484","100","313","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Edit("edtCD_ILSLIP1","staCD_ILSLIP1:5","105","200","20",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            obj.set_value("");
            obj.set_text("");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_ILPAY","552","5","133","20",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_format("9,999");
            obj.set_taborder("2");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_ILSODUK","92","34","133","20",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_format("9,999");
            obj.set_taborder("3");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_ILGOYONG","552","34","133","20",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_format("9,999");
            obj.set_taborder("5");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_ILJUMIN","322","34","133","20",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_format("9,999");
            obj.set_taborder("7");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_ILMEDICARE","322","63","133","20",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_format("9,999");
            obj.set_taborder("9");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_ILKOOKMINPER","92","63","133","20",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_format("9,999");
            obj.set_taborder("12");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Edit("edtCD_KOOKMIN_SLIP","92","134","200","20",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("27");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            obj.set_value("");
            obj.set_text("");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Edit("edtCD_MEDICARE_SLIP","489","134","200","20",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            obj.set_value("");
            obj.set_text("");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new MaskEdit("txtTT_ILSILVER","552","63","133","20",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_format("9,999");
            obj.set_taborder("29");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Edit("edtCD_ILSLIP2","489","105","200","20",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("32");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            obj.set_value("");
            obj.set_text("");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Static("staCS_SITE00_00","0","0","231","30",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("33");
            obj.set_text("당월지급");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            obj.set_textDecoration("none");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Combo("cboCD_JIGUB","322","5","133","20",null,null,null,null,null,null,this.divData.form.divDataTop2.form);
            obj.set_taborder("34");
            obj.set_innerdataset("dsCD_JIGUB");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.divData.form.divDataTop2.addChild(obj.name, obj);

            obj = new Div("divDataMedium","0","divDataTop2:10","796",null,null,"-320",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","5","796",null,null,"10",null,null,null,null,this.divData.form.divDataMedium.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsListSub");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divDataMedium.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.divDataTop.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataTop.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataTop.form.txtTT_ILPAY","value","dsList","TT_ILPAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataTop.form.txtTT_ILSODUK","value","dsList","TT_ILSODUK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataTop.form.txtTT_ILJUMIN","value","dsList","TT_ILJUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataTop.form.txtTT_ILGOYONG","value","dsList","TT_ILGOYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataTop.form.txtTT_ILKOOKMINPER","value","dsList","TT_ILKOOKMINPER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataTop.form.txtTT_ILMEDICARE","value","dsList","TT_ILMEDICARE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataTop.form.txtTT_ILSILVER","value","dsList","TT_ILSILVER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataTop.form.ctclDT_ACCOUNT","value","dsList","DT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataTop.form.ccfVENDOR1.form.CDTextBox","value","dsList","NO_KOOKMIN_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataTop.form.ccfVENDOR1.form.DSTextBox","value","dsList","DS_KOOKMIN_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataTop.form.ccfVENDOR2.form.CDTextBox","value","dsList","NO_MEDICARE_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataTop.form.ccfVENDOR2.form.DSTextBox","value","dsList","DS_MEDICARE_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataTop1.form.txtTT_ILPAY","value","dsListTY_SLIP_GUBUN_1","TT_ILPAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataTop1.form.txtTT_ILSODUK","value","dsListTY_SLIP_GUBUN_1","TT_ILSODUK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDataTop1.form.txtTT_ILJUMIN","value","dsListTY_SLIP_GUBUN_1","TT_ILJUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divDataTop1.form.txtTT_ILGOYONG","value","dsListTY_SLIP_GUBUN_1","TT_ILGOYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divDataTop1.form.txtTT_ILKOOKMINPER","value","dsListTY_SLIP_GUBUN_1","TT_ILKOOKMINPER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divDataTop1.form.txtTT_ILMEDICARE","value","dsListTY_SLIP_GUBUN_1","TT_ILMEDICARE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divDataTop1.form.txtTT_ILSILVER","value","dsListTY_SLIP_GUBUN_1","TT_ILSILVER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataTop2.form.edtCD_ILSLIP1","value","dsListTY_SLIP_GUBUN_2","CD_ILSLIP1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataTop2.form.edtCD_MEDICARE_SLIP","value","dsListTY_SLIP_GUBUN_2","CD_MEDICARE_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divDataTop2.form.txtTT_ILPAY","value","dsListTY_SLIP_GUBUN_2","TT_ILPAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divDataTop2.form.txtTT_ILSODUK","value","dsListTY_SLIP_GUBUN_2","TT_ILSODUK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.divDataTop2.form.txtTT_ILJUMIN","value","dsListTY_SLIP_GUBUN_2","TT_ILJUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.divDataTop2.form.txtTT_ILGOYONG","value","dsListTY_SLIP_GUBUN_2","TT_ILGOYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.divDataTop2.form.txtTT_ILKOOKMINPER","value","dsListTY_SLIP_GUBUN_2","TT_ILKOOKMINPER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.divDataTop2.form.txtTT_ILMEDICARE","value","dsListTY_SLIP_GUBUN_2","TT_ILMEDICARE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.divDataTop2.form.edtCD_KOOKMIN_SLIP","value","dsListTY_SLIP_GUBUN_2","CD_KOOKMIN_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.divDataTop2.form.txtTT_ILSILVER","value","dsListTY_SLIP_GUBUN_2","TT_ILSILVER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.divDataTop2.form.edtCD_ILSLIP2","value","dsListTY_SLIP_GUBUN_2","CD_ILSLIP2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.divDataTop1.form.cboCD_JIGUB","value","dsListTY_SLIP_GUBUN_1","CD_JIGUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.divDataTop2.form.cboCD_JIGUB","value","dsListTY_SLIP_GUBUN_2","CD_JIGUB");
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
        this.registerScript("DSB_COSTTOJA.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "TY_SLIP_GUBUN", "0");

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().DS_SITE) && !this.gfnIsNull(this.getOwnerFrame().YM_WORK)) {

        			this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        			this.divData.form.divDataTop.form.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        			this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);
        			this.dsSearch.setColumn(0, "NO_ERPKEY", this.getOwnerFrame().NO_ERPKEY);
        			this.FormBtns.Select.click();

        		}else{

        		var today = this.gfnGetDate();
        		this.dsSearch.setColumn(0,"YM_WORK",today.substr(0,6));
        	}
        	//this.btn1.set_enable(true);
            //this.btn2.set_enable(true);
            //this.btn3.set_enable(true);
        	//this.btn4.set_enable(true);
        	//this.btnSapslip.set_enable(true);
        	//this.btnSapslipCncl.set_enable(true);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Save.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1= this.gfnFormButtonAdd("btnConfirm", "fnConfirm"); //원가투자
        	//this.btn2= this.gfnFormButtonAdd("btnCancel", "fnCancel"); //원가투자 취소
        	this.btn3= this.gfnFormButtonAdd("btnCreate", "fnMagamSlipUpdate"); //전표발행
        	this.btn4= this.gfnFormButtonAdd("btnSlipDelete", "fnMagamSlipDelete"); //전표발행취소
        	//this.btnSapslip= this.gfnFormButtonAdd("btnSapslip", "fnSapslip"); //전표발행(SAP)
        	//this.btnSapslipCncl= this.gfnFormButtonAdd("btnSapslipCncl", "fnSapslipCncl"); //전표취소(SAP)
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ctclDT_ACCOUNT = this.divData.form.divDataTop.form.ctclDT_ACCOUNT;
        	this.ccfVENDOR1 = this.divData.form.divDataTop.form.ccfVENDOR1;
        	this.ccfVENDOR2 = this.divData.form.divDataTop.form.ccfVENDOR2;

        	this.dxGrid = this.divData.form.divDataMedium.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfVENDOR1.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfVENDOR2.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsListSub, "DS", "DSB_COSTTOJA");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("NO_ERPKEY", "string");
        	this.dsSelect.addColumn("TY_SLIP_GUBUN", "string");


        	this.dsSelect1 = new Dataset();
        	this.dsSelect1.addColumn("CD_SITE", "string");
        	this.dsSelect1.addColumn("YM_WORK", "string");
        	this.dsSelect1.addColumn("NO_ERPKEY", "string");
        	this.dsSelect1.addColumn("TY_SLIP_GUBUN", "string");

        	this.dsSelect2 = new Dataset();
        	this.dsSelect2.addColumn("CD_SITE", "string");
        	this.dsSelect2.addColumn("YM_WORK", "string");
        	this.dsSelect2.addColumn("NO_ERPKEY", "string");
        	this.dsSelect2.addColumn("TY_SLIP_GUBUN", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("DS_SITE", "string");
        	this.dsExec.addColumn("YM_WORK", "string");
        	this.dsExec.addColumn("DT_DATE", "string");
        	this.dsExec.addColumn("NO_ERPKEY", "string");
        	this.dsExec.addColumn("CD_COST", "string");
        	this.dsExec.addColumn("DS_COMMENT", "string");
        	this.dsExec.addColumn("TT_IMGM", "int");

        	this.dsExec1 = new Dataset();
        	this.dsExec1.addColumn("CD_SITE", "string");
        	this.dsExec1.addColumn("YM_WORK", "string");
        	this.dsExec1.addColumn("DT_DATE", "string");
        	this.dsExec1.addColumn("NO_ERPKEY", "string");

        	this.dsExec2 = new Dataset(); //전표발행
            this.dsExec2.addColumn("CD_CORP", "string");
            this.dsExec2.addColumn("CD_SITE", "string");
            this.dsExec2.addColumn("YM_WORK", "string");
            this.dsExec2.addColumn("CD_DEPT_BH", "string");
            this.dsExec2.addColumn("DT_ACCOUNT", "string");
            this.dsExec2.addColumn("DT_REQUEST", "string");
            this.dsExec2.addColumn("NO_ERPKEY", "string");
            this.dsExec2.addColumn("ID_USER", "string");
            this.dsExec2.addColumn("NO_KOOKMIN_VENDOR", "string");
            this.dsExec2.addColumn("NO_MEDICARE_VENDOR", "string");

        	this.dsExec3 = new Dataset();
        	this.dsExec3.addColumn("NO_ERPKEY", "string");

        	this.dsExec4 = new Dataset(); //전표발행 및 전자결재
            this.dsExec4.addColumn("CD_SITE", "string");
            this.dsExec4.addColumn("YM_WORK", "string");
            this.dsExec4.addColumn("DT_SLIP", "string");
        	this.dsExec4.addColumn("NO_KOOKMIN_VENDOR", "string");
            this.dsExec4.addColumn("NO_MEDICARE_VENDOR", "string");
        	this.dsExec4.addColumn("CD_JIGUB", "string");
        	this.dsExec4.addColumn("CD_JIGUB2", "string");

        }
        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//if (!this.fnValidate()) return false;
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelect.setColumn(0, "NO_ERPKEY", this.dsSearch.getColumn(0, "NO_ERPKEY"));
        	//this.dsSelect.setColumn(0, "TY_SLIP_GUBUN", this.dsSearch.getColumn(0, "TY_SLIP_GUBUN"));
        	this.dsSelect.setColumn(0, "TY_SLIP_GUBUN", "0");

        	this.dsSelect1.copyData(this.dsSelect);
        	this.dsSelect1.setColumn(0, "TY_SLIP_GUBUN", "1");
        	this.dsSelect2.copyData(this.dsSelect);
        	this.dsSelect2.setColumn(0, "TY_SLIP_GUBUN", "2");

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select1=dsSelect1 select2=dsSelect2";
        	var outData     = "dsList=select0 dsListTY_SLIP_GUBUN_1=select10 dsListTY_SLIP_GUBUN_2=select20";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc, false); // 통신방법 정의 [생략가능]

        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid, "bottom");
        	this.btn1.set_enable(true);
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
         ***********************************************************************

        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {

        	var validate = true;
        	if(nexacro.toNumber(this.divData.form.divDataTop.form.txtTT_ILPAY.value) != this.dsListSub.getSum("TT_IMGUM")){
        		validate = false;
        		this.gfnAlert("총금액과 금액 합계는 반드시 같아야 합니다.");
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
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		if(this.dsList.rowcount > 0) {
        			if(this.gfnIsNull(this.dsList.getColumn(0, "DT_DATE").trim())) {
        				this.ctclDT_ACCOUNT.set_readonly(false);
        				this.dsList.setColumn(0, "DT_DATE", this.gfnGetLastDate(this.getOwnerFrame().YM_WORK));
        			} else {
        				this.ctclDT_ACCOUNT.set_readonly(true);
        			}
        		}

        		if(this.dsListTY_SLIP_GUBUN_1.rowcount < 1){
        			this.divData.form.divDataTop1.set_height(0);
        			this.divData.form.divDataTop1.set_top("divDataTop:0");
        		}else{
        			this.divData.form.divDataTop1.set_height(90);
        			this.divData.form.divDataTop1.set_top("divDataTop:20");
        		}

        		if(this.dsListTY_SLIP_GUBUN_2.rowcount < 1){
        			this.divData.form.divDataTop2.set_height(0);
        		}else{
        			this.divData.form.divDataTop2.set_height(160);
        		}

        		this.setBtnUsable();
        	}
        	else if(svcID == "exec") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec1") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec2") {
        		if (errorCode == 0) {
        			//this.getParentContext().close(true);
        			this.FormBtns.Select.click();
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec3") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec4") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        			this.fnMagamSlip("UPDATE");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec5") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        			this.fnMagamSlip("DELETE");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}


        }


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)  {
        	if (id == "ccfVENDOR1") {
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
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DWX_CFCOST_TREE_01") {

         		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "CD_GBIMOK", "");
         		dsUserParam.setColumn(nrow, "CD_STDAGG", "");

        	}
        	return true;
        }

        this.setBtnUsable = function() {

        	//this.btn1.set_enable(false); //원가투자
        	//this.btn2.set_enable(false); //원가투자취소
        	this.btn3.set_enable(false); //전표발행
        	this.btn4.set_enable(false); //전표발행취소
        	//this.btnSapslip.set_enable(false); //전표발행(SAP)
        	//this.btnSapslipCncl.set_enable(false); //전표발행취소(SAP)
        	if(this.dsList.rowcount == 0) return;

        	var dtAccount = this.dsList.getColumn(0, "DT_DATE").trim(); //this.divData.form.divDataTop.form.ctclDT_ACCOUNT.value; //전기일자
        	//var cdIlSlip = this.divData.form.divDataTop.form.edtCD_ILSLIP.value.trim(); //현장발생전표
        	var cdIlSlip = this.gfnTrim(this.dsListTY_SLIP_GUBUN_2.getColumn(0, "CD_ILSLIP1")); //현장발생전표
        	//var cdBonsSlip = this.divData.form.divDataTop.form.edtCD_BONSASLIP.value; //본사일괄전표

        // 	if(!this.gfnIsNull(cdBonsSlip)) {
        // 		cdBonsSlip = cdBonsSlip.trim();
        // 	}

        	//if (!this.gfnIsNull(dtAccount)) {
        		//전기일자 o
        		if (this.gfnIsNull(cdIlSlip)) {

        			//현장발생전표 x
        			//this.btn1.set_enable(false);
        			this.btn4.set_enable(false);
        			//this.btn2.set_enable(true); //원가투자취소
        			this.btn3.set_enable(true); //전표발행
        		}else{
        			this.btn3.set_enable(false); //전표발행
        			this.btn4.set_enable(true); //전표발행취소
        		}

        	//} else {
        		//전기일자 x
        		//this.btn1.set_enable(true);
        		//this.btn2.set_enable(false);
        		//this.btn3.set_enable(false);
        		//this.btn4.set_enable(false);
        	//}

        }



        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();	// 결재구분
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DS");
        	this.dsCombo.setColumn(0, "CD_TYPE", "15");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_JIGUB=combo0";
        	//var outData     = "dsTY_CHAIYONG=combo0 dsTY_JAJIK=combo1 dsTY_PAY=combo2 dsTY_WOIGUG=combo3 dsYN_PYEONSEONG=combo4 dsTY_PYEONSEONG=combo5 dsGOYONG_MIGAIP=combo6 dsRETIRE_MIGAIP=combo7 dsTY_CHAIYONGDA=combo8";
        	var strArg      = "";
        	var callBackFnc = "fnCallbackCombo";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };


        // 원가투자
         this.fnConfirm = function(obj, e){

        	this.gfnConfirm("원가투자 작업을 저장하시겠습니까?", "fnSlipIssue_callback");
        };

        //save
        this.fnSlipIssue_callback = function(strId, val){
        	if(val == false){
        			return false;
        	}
        	if(!this.fnSaveValidate()) return;
        	this.dsExec.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var nrow = this.dsExec.addRow();
        		this.dsExec.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		this.dsExec.setColumn(nrow, "DS_SITE", this.divData.form.divDataTop.form.ccfCD_SITE.form.DSTextBox.value);
        		this.dsExec.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        		this.dsExec.setColumn(nrow, "DT_DATE", this.divData.form.divDataTop.form.ctclDT_ACCOUNT.value);
        		this.dsExec.setColumn(nrow, "NO_ERPKEY", this.dsSearch.getColumn(0, "NO_ERPKEY"));
        		this.dsExec.setColumn(nrow, "CD_COST", this.dsListSub.getColumn(i, "CD_COST"));
        		this.dsExec.setColumn(nrow, "DS_COMMENT", this.dsListSub.getColumn(i, "DS_COMMENT"));
        		this.dsExec.setColumn(nrow, "TT_IMGM", this.dsListSub.getColumn(i, "TT_IMGUM"));

        	}

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };


        // 원가투자 취소
         this.fnCancel = function(obj, e){

        	this.gfnConfirm("원가투자 작업을 취소하시겠습니까?", "fnCancel_callback");
        };

        this.fnCancel_callback = function(strId, val){
        	if(val == false){
        			return false;
        	}
        	this.dsExec1.clearData();
        	this.dsExec1.addRow();

        	this.dsExec1.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExec1.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsExec1.setColumn(0, "DT_DATE", this.dsList.getColumn(0, "DT_DATE"));
        	this.dsExec1.setColumn(0, "NO_ERPKEY", this.dsSearch.getColumn(0, "NO_ERPKEY"));

        	var strSvcId    = "exec1";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec1=dsExec1";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };


        // 전표발행
         this.fnCreate = function(obj, e){

        	this.gfnConfirm("전표를 발행하시겠습니까?", "fnCreate_callback");
        };

        this.fnCreate_callback = function(strId, val){
        	if(val == false){
        			return false;
        	}
        	this.dsExec2.clearData();
        	this.dsExec2.addRow();

        	this.dsExec2.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
            this.dsExec2.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
            this.dsExec2.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
            this.dsExec2.setColumn(0, "CD_DEPT_BH", this.AuthClient.CD_DEPT);
        	this.dsExec2.setColumn(0, "DT_ACCOUNT", this.divData.form.divDataTop.form.ctclDT_ACCOUNT.value);
            this.dsExec2.setColumn(0, "DT_REQUEST", ""); //지급일자
            this.dsExec2.setColumn(0, "NO_ERPKEY", this.dsSearch.getColumn(0, "NO_ERPKEY")); //건설참조번호
            this.dsExec2.setColumn(0, "ID_USER", this.AuthClient.ID_USER); //발행자사번
            this.dsExec2.setColumn(0, "NO_KOOKMIN_VENDOR", this.dsList.getColumn(0, "NO_KOOKMIN_VENDOR")); //국민연금 거래처 코드
            this.dsExec2.setColumn(0, "NO_MEDICARE_VENDOR", this.dsList.getColumn(0, "NO_MEDICARE_VENDOR")); //건강보험 거래처 코드

        	var strSvcId    = "exec2";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec2=dsExec2";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };


        // 전표취소
         this.fnSlipDelete = function(obj, e){

        	this.gfnConfirm("전표를 취소하시겠습니까?", "fnSlipDelete_callback");
        };

        this.fnSlipDelete_callback = function(strId, val){
        	if(val == false){
        			return false;
        	}
        	this.dsExec3.clearData();
        	this.dsExec3.addRow();

        	this.dsExec3.setColumn(0, "NO_ERPKEY", this.dsSearch.getColumn(0, "NO_ERPKEY"));

        	var strSvcId    = "exec3";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec3=dsExec3";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };


        // 전표발행(sap)
         this.fnSapslip = function(obj, e){

        	this.gfnConfirm("전표(SAP)를 발행하시겠습니까?", "fnSapslip_callback");
        };

        this.fnSapslip_callback = function(strId, val){
        	if(val == true){
        		var no_erpkey = this.dsSearch.getColumn(0, "NO_ERPKEY");
        		var cd_trade = this.dsList.getColumn(0, "CD_ILSLIP");
        		var id_user = this.AuthClient.ID_USER;
        		this.gfnSlipIssue(no_erpkey, cd_trade, id_user, "fnSapslipOk_callback");
        	}
        };

        // gfnSlipIssue 전표발행 성공시 실행할 callback
        this.fnSapslipOk_callback = function() {
        	this.FormBtns.Select.click();
        }


        // 전표취소(sap)
         this.fnSapslipCncl = function(obj, e){

        	this.gfnConfirm("전표(SAP)를 취소하시겠습니까?", "fnSapslipCncl_callback");
        };

        this.fnSapslipCncl_callback = function(strId, val){
        	if(val == true){
        		var no_erpkey = this.dsSearch.getColumn(0, "NO_ERPKEY");
        		var cd_trade = this.dsList.getColumn(0, "CD_ILSLIP");
        		var id_user = this.AuthClient.ID_USER;
        		var sap_slip = this.dsList.getColumn(0, "BELNR");		// SAP 전표번호
        		var sap_slip_year = this.dsList.getColumn(0, "GJAHR");	// SAP 전표의 회계연도
        		var sap_comp = "HD00";

        		this.gfnSlipCancel(no_erpkey, cd_trade, id_user, sap_comp, sap_slip, sap_slip_year, "fnSlipCancelOk_callback");
        	}
        };

        // gfnSlipCancel 전표취소 성공시 실행할 callback
        this.fnSlipCancelOk_callback = function() {
        	this.FormBtns.Select.click();
        }


        this.divData_divDataTop_ctclDT_ACCOUNT_onchanged = function(obj,e)
        {
        	this.setBtnUsable();
        };

        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        }

        // 전표발행 전자결재
         this.fnMagamSlipUpdate = function(obj, e){

        	this.gfnConfirm("전표발행 및 전자결재를 진행하시겠습니까?", "fnMagamSlipUpdate_callback");
        };

        this.fnMagamSlipUpdate_callback = function(strId, val){

        	if(val == false){
        		return false;
        	}
        	this.dsExec4.clearData();
        	this.dsExec4.addRow();

            this.dsExec4.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
            this.dsExec4.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsExec4.setColumn(0, "DT_SLIP", this.divData.form.divDataTop.form.ctclDT_ACCOUNT.value); //전기일자
            this.dsExec4.setColumn(0, "NO_KOOKMIN_VENDOR", this.dsList.getColumn(0, "NO_KOOKMIN_VENDOR")); //국민연금 거래처 코드
            this.dsExec4.setColumn(0, "NO_MEDICARE_VENDOR", this.dsList.getColumn(0, "NO_MEDICARE_VENDOR")); //건강보험 거래처 코드
        	this.dsExec4.setColumn(0, "CD_JIGUB", this.dsListTY_SLIP_GUBUN_1.getColumn(0, "CD_JIGUB")); // 익월 결재구분
        	this.dsExec4.setColumn(0, "CD_JIGUB2", this.dsListTY_SLIP_GUBUN_2.getColumn(0, "CD_JIGUB")); // 당월 결재구분

        	var strSvcId    = "exec4";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec4=dsExec4";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };



        // 전표발행 전자결재
         this.fnMagamSlipDelete = function(obj, e){

        	this.gfnConfirm("전표발행취소 및 전자결재취소를 진행하시겠습니까?", "fnMagamSlipDelete_callback");
        };

        this.fnMagamSlipDelete_callback = function(strId, val){

        	if(val == false){
        		return false;
        	}
        	this.dsExec4.clearData();
        	this.dsExec4.addRow();

            this.dsExec4.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
            this.dsExec4.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsExec4.setColumn(0, "DT_SLIP", this.divData.form.divDataTop.form.ctclDT_ACCOUNT.value); //전기일자
            this.dsExec4.setColumn(0, "NO_KOOKMIN_VENDOR", this.dsList.getColumn(0, "NO_KOOKMIN_VENDOR")); //국민연금 거래처 코드
            this.dsExec4.setColumn(0, "NO_MEDICARE_VENDOR", this.dsList.getColumn(0, "NO_MEDICARE_VENDOR")); //건강보험 거래처 코드
        	this.dsExec4.setColumn(0, "CD_JIGUB", this.dsListTY_SLIP_GUBUN_1.getColumn(0, "CD_JIGUB")); // 익월 결재구분
        	this.dsExec4.setColumn(0, "CD_JIGUB2", this.dsListTY_SLIP_GUBUN_2.getColumn(0, "CD_JIGUB")); // 당월 결재구분

        	var strSvcId    = "exec5";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec4=dsExec4";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };


        // 품의서 요청.
        this.fnMagamSlip = function(flag){

        	this.dsListTemp = new Dataset();
        	this.dsListTemp.copyData(this.dsListTY_SLIP_GUBUN_1);

        	var TY_SLIP_GUBUN = this.dsSearch.getColumn(0, "TY_SLIP_GUBUN");

        	var sApType = "";
        	var sRef03  = "";

        	if(flag == "UPDATE"){
        		sApType = "DS05";
        		sRef03 = this.dsListTY_SLIP_GUBUN_1.getColumn(0, "NO_APPROVAL_SEQ");
        	}else{
        		sApType = "DS06";
        		sRef03 = this.dsListTY_SLIP_GUBUN_1.getColumn(0, "NO_APPROVAL_CANCEL_SEQ");
        	}

        	this.dsListTemp.addColumn("DS_SITE", "STRING");
        	this.dsListTemp.addColumn("DS_SITE1", "STRING");
        	this.dsListTemp.addColumn("DS_SITE2", "STRING");
        	this.dsListTemp.addColumn("DS_SITE3", "STRING");
        	this.dsListTemp.addColumn("DS_SITE4", "STRING");
        	this.dsListTemp.addColumn("DS_SITE5", "STRING");
        	this.dsListTemp.addColumn("YN_NEXTMONTH", "STRING");
        	this.dsListTemp.addColumn("YN_THISMONTH", "STRING");
        	this.dsListTemp.addColumn("TT_ILPAY2", "STRING");
        	this.dsListTemp.addColumn("TT_ILSODUK2", "STRING");
        	this.dsListTemp.addColumn("TT_ILJUMIN2", "STRING");
        	this.dsListTemp.addColumn("TT_ILGOYONG2", "STRING");
        	this.dsListTemp.addColumn("TT_ILKOOKMINPER2", "STRING");
        	this.dsListTemp.addColumn("DS_KOOKMIN_VENDOR2", "STRING");
        	this.dsListTemp.addColumn("TT_ILMEDICARE2", "STRING");
        	this.dsListTemp.addColumn("TT_ILSILVER2", "STRING");
        	this.dsListTemp.addColumn("DS_MEDICARE_VENDOR2", "STRING");

        	this.dsListTemp.setColumn(0, "DS_SITE", this.divData.form.divDataTop.form.ccfCD_SITE.form.DSTextBox.value);
        	this.dsListTemp.setColumn(0, "DS_SITE1", this.divData.form.divDataTop.form.ccfCD_SITE.form.DSTextBox.value);
        	this.dsListTemp.setColumn(0, "DS_SITE2", this.divData.form.divDataTop.form.ccfCD_SITE.form.DSTextBox.value);
        	this.dsListTemp.setColumn(0, "DS_SITE3", this.divData.form.divDataTop.form.ccfCD_SITE.form.DSTextBox.value);
        	this.dsListTemp.setColumn(0, "DS_SITE4", this.divData.form.divDataTop.form.ccfCD_SITE.form.DSTextBox.value);
        	this.dsListTemp.setColumn(0, "DS_SITE5", this.divData.form.divDataTop.form.ccfCD_SITE.form.DSTextBox.value);

        	if(this.gfnIsNull(this.dsListTY_SLIP_GUBUN_1.getColumn(0, "TT_ILPAY"))){
        		this.dsListTemp.setColumn(0, "YN_NEXTMONTH", "none");
        	}else{
        		this.dsListTemp.setColumn(0, "YN_NEXTMONTH", "inline");
        	}

        	if(this.gfnIsNull(this.dsListTY_SLIP_GUBUN_2.getColumn(0, "TT_ILPAY"))){
        		this.dsListTemp.setColumn(0, "YN_THISMONTH", "none");
        	}else{
        		this.dsListTemp.setColumn(0, "YN_THISMONTH", "inline");
        	}

        	if(sApType == "DS05"){
        		this.dsListTemp.setColumn(0, "TT_ILPAY", this.gfnAppendComma(this.dsListTY_SLIP_GUBUN_1.getColumn(0, "TT_ILPAY")));
        		this.dsListTemp.setColumn(0, "TT_ILSODUK", this.gfnAppendComma(this.dsListTY_SLIP_GUBUN_1.getColumn(0, "TT_ILSODUK")));
        		this.dsListTemp.setColumn(0, "TT_ILJUMIN", this.gfnAppendComma(this.dsListTY_SLIP_GUBUN_1.getColumn(0, "TT_ILJUMIN")));
        		this.dsListTemp.setColumn(0, "TT_ILGOYONG", this.gfnAppendComma(this.dsListTY_SLIP_GUBUN_1.getColumn(0, "TT_ILGOYONG")));
        		this.dsListTemp.setColumn(0, "TT_ILKOOKMINPER", this.gfnAppendComma(this.dsListTY_SLIP_GUBUN_1.getColumn(0, "TT_ILKOOKMINPER")));
        		this.dsListTemp.setColumn(0, "TT_ILMEDICARE", this.gfnAppendComma(this.dsListTY_SLIP_GUBUN_1.getColumn(0, "TT_ILMEDICARE")));
        		this.dsListTemp.setColumn(0, "TT_ILSILVER", this.gfnAppendComma(this.dsListTY_SLIP_GUBUN_1.getColumn(0, "TT_ILSILVER")));

        		this.dsListTemp.setColumn(0, "TT_ILPAY2", this.gfnAppendComma(this.dsListTY_SLIP_GUBUN_2.getColumn(0, "TT_ILPAY")));
        		this.dsListTemp.setColumn(0, "TT_ILSODUK2", this.gfnAppendComma(this.dsListTY_SLIP_GUBUN_2.getColumn(0, "TT_ILSODUK")));
        		this.dsListTemp.setColumn(0, "TT_ILJUMIN2", this.gfnAppendComma(this.dsListTY_SLIP_GUBUN_2.getColumn(0, "TT_ILJUMIN")));
        		this.dsListTemp.setColumn(0, "TT_ILGOYONG2", this.gfnAppendComma(this.dsListTY_SLIP_GUBUN_2.getColumn(0, "TT_ILGOYONG")));
        		this.dsListTemp.setColumn(0, "TT_ILKOOKMINPER2", this.gfnAppendComma(this.dsListTY_SLIP_GUBUN_2.getColumn(0, "TT_ILKOOKMINPER")));
        		this.dsListTemp.setColumn(0, "TT_ILMEDICARE2", this.gfnAppendComma(this.dsListTY_SLIP_GUBUN_2.getColumn(0, "TT_ILMEDICARE")));
        		this.dsListTemp.setColumn(0, "TT_ILSILVER2", this.gfnAppendComma(this.dsListTY_SLIP_GUBUN_2.getColumn(0, "TT_ILSILVER")));
        	}else{
        		var TT_ILPAY = this.dsListTY_SLIP_GUBUN_1.getColumn(0, "TT_ILPAY");
        		var TT_ILSODUK = this.dsListTY_SLIP_GUBUN_1.getColumn(0, "TT_ILSODUK");
        		var TT_ILJUMIN = this.dsListTY_SLIP_GUBUN_1.getColumn(0, "TT_ILJUMIN");
        		var TT_ILGOYONG = this.dsListTY_SLIP_GUBUN_1.getColumn(0, "TT_ILGOYONG");
        		var TT_ILKOOKMINPER = this.dsListTY_SLIP_GUBUN_1.getColumn(0, "TT_ILKOOKMINPER");
        		var TT_ILMEDICARE = this.dsListTY_SLIP_GUBUN_1.getColumn(0, "TT_ILMEDICARE");
        		var TT_ILSILVER = this.dsListTY_SLIP_GUBUN_1.getColumn(0, "TT_ILSILVER");

        		var TT_ILPAY2 = this.dsListTY_SLIP_GUBUN_2.getColumn(0, "TT_ILPAY");
        		var TT_ILSODUK2 = this.dsListTY_SLIP_GUBUN_2.getColumn(0, "TT_ILSODUK");
        		var TT_ILJUMIN2 = this.dsListTY_SLIP_GUBUN_2.getColumn(0, "TT_ILJUMIN");
        		var TT_ILGOYONG2 = this.dsListTY_SLIP_GUBUN_2.getColumn(0, "TT_ILGOYONG");
        		var TT_ILKOOKMINPER2 = this.dsListTY_SLIP_GUBUN_2.getColumn(0, "TT_ILKOOKMINPER");
        		var TT_ILMEDICARE2 = this.dsListTY_SLIP_GUBUN_2.getColumn(0, "TT_ILMEDICARE");
        		var TT_ILSILVER2 = this.dsListTY_SLIP_GUBUN_2.getColumn(0, "TT_ILSILVER");


        		this.dsListTemp.setColumn(0, "TT_ILPAY", TT_ILPAY == "0" ? "" : "-" + this.gfnAppendComma(TT_ILPAY));
        		this.dsListTemp.setColumn(0, "TT_ILSODUK", TT_ILSODUK == "0" ? "" : "-" + this.gfnAppendComma(TT_ILSODUK));
        		this.dsListTemp.setColumn(0, "TT_ILJUMIN", TT_ILJUMIN == "0" ? "" : "-" + this.gfnAppendComma(TT_ILJUMIN));
        		this.dsListTemp.setColumn(0, "TT_ILGOYONG", TT_ILGOYONG == "0" ? "" : "-" + this.gfnAppendComma(TT_ILGOYONG));
        		this.dsListTemp.setColumn(0, "TT_ILKOOKMINPER", TT_ILKOOKMINPER == "0" ? "" : "-" + this.gfnAppendComma(TT_ILKOOKMINPER));
        		this.dsListTemp.setColumn(0, "TT_ILMEDICARE", TT_ILMEDICARE == "0" ? "" : "-" + this.gfnAppendComma(TT_ILMEDICARE));
        		this.dsListTemp.setColumn(0, "TT_ILSILVER", TT_ILSILVER == "0" ? "" : "-" + this.gfnAppendComma(TT_ILSILVER));

        		this.dsListTemp.setColumn(0, "TT_ILPAY2", TT_ILPAY2 == "0" ? "" : "-" + this.gfnAppendComma(TT_ILPAY2));
        		this.dsListTemp.setColumn(0, "TT_ILSODUK2", TT_ILSODUK2 == "0" ? "" : "-" + this.gfnAppendComma(TT_ILSODUK2));
        		this.dsListTemp.setColumn(0, "TT_ILJUMIN2", TT_ILJUMIN2 == "0" ? "" : "-" + this.gfnAppendComma(TT_ILJUMIN2));
        		this.dsListTemp.setColumn(0, "TT_ILGOYONG2", TT_ILGOYONG2 == "0" ? "" : "-" + this.gfnAppendComma(TT_ILGOYONG2));
        		this.dsListTemp.setColumn(0, "TT_ILKOOKMINPER2", TT_ILKOOKMINPER2 == "0" ? "" : "-" + this.gfnAppendComma(TT_ILKOOKMINPER2));
        		this.dsListTemp.setColumn(0, "TT_ILMEDICARE2", TT_ILMEDICARE2 == "0" ? "" : "-" + this.gfnAppendComma(TT_ILMEDICARE2));
        		this.dsListTemp.setColumn(0, "TT_ILSILVER2", TT_ILSILVER2 == "0" ? "" : "-" + this.gfnAppendComma(TT_ILSILVER2));

        	}

        	this.dsListTemp.setColumn(0, "DS_KOOKMIN_VENDOR2", this.dsListTY_SLIP_GUBUN_2.getColumn(0, "DS_KOOKMIN_VENDOR"));
        	this.dsListTemp.setColumn(0, "DS_MEDICARE_VENDOR2", this.dsListTY_SLIP_GUBUN_2.getColumn(0, "DS_MEDICARE_VENDOR"));

        	var sTitle  = "노무비지급 전표발행";
        	var sRef01  = this.dsSearch.getColumn(0, "CD_SITE");
        	var sRef02  = this.dsSearch.getColumn(0, "YM_WORK");
        	var sRef04  = "";
        	var oParam  = this.gfnDataSetToJson(this.dsListTemp, 0);

        	this.gfnApprove(sApType, sTitle, sRef01, sRef02, sRef03, "", oParam, "fnAprvDialogCallback");
        }

        this.fnAprvDialogCallback = function()
        {
        	this.FormBtns.Select.click();
        };

        this.divData_divDataTop_cboTY_SLIP_GUBUN_onitemchanged = function(obj,e)
        {
        	this.FormBtns.Select.click();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divDataTop.form.ctclDT_ACCOUNT.addEventHandler("onchanged",this.divData_divDataTop_ctclDT_ACCOUNT_onchanged,this);
        };
        this.loadIncludeScript("DSB_COSTTOJA.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
