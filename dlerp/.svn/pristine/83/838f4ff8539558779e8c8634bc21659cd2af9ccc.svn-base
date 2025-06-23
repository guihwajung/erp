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
            this.set_titletext("예상수납안내");
            this.getSetter("maxwidth").set("950");
            this.getSetter("maxheight").set("800");
            if (Form == this.constructor)
            {
                this._setFormPosition(950,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DLCPR_QUITAPPLYINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">selectLease</Col><Col id=\"SP\">DLCPR_QUIT_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DLCPR_QUIT_LEASE_HANDLE</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DLCPR_QUIT_HANDLE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_FLOOR\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_PAYMENT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">정산/전표발행</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">정산/전표미발행</Col></Row><Row><Col id=\"DS_CODE\">대체퇴거(분양전환세대 및 후입주자 승계)</Col><Col id=\"CD_CODE\">X</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSingle", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_DONGHO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_LEASE_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_LEASE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_APPQUIT\" type=\"STRING\" size=\"256\"/><Column id=\"RM_APPQUIT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_BUNYANGPLAN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_BUNYANGGET\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_KASU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MLEASE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ASSU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SHASI\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DT_KIJUN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_QUIT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_FORFEIT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MISULEASE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MISUASSU\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MISUMG\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_REPAIR\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_ETC\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"ID_QUIT\" type=\"STRING\" size=\"256\"/><Column id=\"AM_INTEREST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_FEE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_JANGISON\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_PAYMENT2\" type=\"STRING\" size=\"256\"/><Column id=\"AM_PAYMENT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_PAYMENT2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_REPAYBANK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_REPAYGUJA\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REPAYOWNER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnExit",null,"700","70","25","410",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("닫기");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnConf",null,"700","70","25","btnExit:10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_text("퇴거처리");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","32",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("퇴거자 정보");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","60","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("동층호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","60","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","60","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("퇴거자 성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","sta04:-1","60","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","sta05:-1","60","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("임대계약기간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","60",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","0","sta02:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("신청 퇴거일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta03:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","sta09:-1","sta04:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("신청한 퇴거사유");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","sta10:-1","sta05:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","0","sta08:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("약정보증금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta13","sta12:-1","sta09:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta14","sta13:-1","sta10:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("수납보증금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta15","sta14:-1","sta11:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta16","sta15:-1","sta11:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("예수금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta17","sta16:-1","sta11:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta18","0","sta12:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("월임대료");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta19","sta18:-1","sta13:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta20","sta19:-1","sta14:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("보증수수료");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta21","sta20:-1","sta15:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22","sta21:-1","sta16:-1","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("샤시비");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta23","sta22:-1","sta17:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta24","0","sta18:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("임대료부과기준일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta25","sta24:-1","sta19:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta26","0","sta24:5",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("임대료 부과 및 수납 현황");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta26:5",null,"100","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta27","0","objGrid:10",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_text("퇴거");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta28","0","375","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("퇴거일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta29","sta28:-1","375","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta30","0","sta28:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("위약금");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta31","sta30:-1","sta29:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta32","sta29:-1","375","110","59",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_text("퇴거사유");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta33","sta32:-1","375",null,"59","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta34","0","sta30:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_text("미수(임대료)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta35","sta34:-1","sta31:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta36","0","sta34:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_text("미수(보증수수료)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta37","sta36:-1","sta35:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta38","0","sta36:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("41");
            obj.set_text("미수금(관리비)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta39","sta38:-1","sta37:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta40","0","sta38:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("43");
            obj.set_text("시설보수비");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta41","sta40:-1","sta39:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta42","0","sta40:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("45");
            obj.set_text("미수(연체료)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta43","sta42:-1","sta41:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta44","0","sta42:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("47");
            obj.set_text("퇴거처리자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta45","sta44:-1","sta43:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta46","0","sta44:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("49");
            obj.set_text("대납이자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta47","sta46:-1","sta45:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta48","0","sta46:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("51");
            obj.set_text("중도상환수수료");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta49","sta48:-1","sta47:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta50","0","sta48:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("53");
            obj.set_text("장기손충당금");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta51","sta50:-1","sta49:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta52","0","sta50:-1","115","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("55");
            obj.set_text("분양전환승계금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta53","sta52:-1","sta51:-1","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta54","299","464",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("57");
            obj.set_text("정산/지급");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta55","sta39:-1","sta54:5","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("58");
            obj.set_text("정산/발행 여부");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta56","sta55:-1","sta54:5",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta57","sta41:-1","520","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("60");
            obj.set_text("결제일자(개인)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta58","sta57:-1","520","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta59","sta58:-1","520","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("62");
            obj.set_text("지급금액(개인)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta60","sta59:-1","520",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta61","sta43:-1","549","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("64");
            obj.set_text("결제일자(관리비)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta62","sta61:-1","549","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta63","sta62:-1","549","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("66");
            obj.set_text("지급금액(관리비)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta64","sta63:-1","549",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta65","sta45:-1","578","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("68");
            obj.set_text("환불은행");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta66","sta65:-1","578","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta67","sta66:-1","578","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("70");
            obj.set_text("환불계좌");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta68","sta67:-1","578",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta69","sta47:-1","607","110","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("72");
            obj.set_text("예금주");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta70","sta69:-1","607","185","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_DONGHO","sta02:5","sta03:-25","170","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("74");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_CONTRACTOR","sta04:5","sta05:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("75");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDT_LEASE_FR","sta06:5","sta07:-25","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("76");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta71","txtDT_LEASE_FR:5","sta07:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("77");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDT_LEASE_TO","sta71:5","sta07:-25","70","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("78");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDT_APPQUIT","sta08:5","sta09:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("79");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtRM_APPQUIT","sta10:5","sta11:-25",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("80");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BUNYANGPLAN","sta12:5","sta13:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("81");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta72","txtAM_BUNYANGPLAN:5","sta13:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("82");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BUNYANGGET","sta14:5","sta15:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("83");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta73","txtAM_BUNYANGGET:5","sta15:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("84");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_KASU","sta16:5","sta17:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("85");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta74","txtAM_KASU:5","sta17:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("86");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_MLEASE","sta18:5","sta19:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("87");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta75","txtAM_MLEASE:5","sta19:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("88");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ASSU","sta20:5","sta21:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("89");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta76","txtAM_ASSU:5","sta21:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("90");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SHASI","sta22:5","sta23:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("91");
            obj.set_format("#,###");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta77","txtAM_SHASI:5","sta23:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("92");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_KIJUN","sta24:5","sta25:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("93");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSightLease","298","180","140","25",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("94");
            obj.set_text("임대료부과내역보기");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_QUIT","sta28:5","sta29:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("95");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_FORFEIT","sta30:5","sta31:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("96");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta78","txtAM_FORFEIT:5","sta31:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("97");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_REMARK","sta32:5","sta33:-54",null,"50","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("98");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_MISULEASE","sta34:5","sta35:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("99");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta79","txtAM_MISULEASE:5","sta35:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("100");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_MISUASSU","sta36:5","sta37:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("101");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta80","txtAM_MISUASSU:5","sta37:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("102");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_MISUMG","sta38:5","sta39:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("103");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta81","txtAM_MISUMG:5","sta39:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("104");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_REPAIR","sta40:5","sta41:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("105");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta82","txtAM_REPAIR:5","sta41:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("106");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_ETC","sta42:5","sta43:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("107");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta83","txtAM_ETC:5","sta43:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("108");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtID_QUIT","sta44:5","sta45:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("109");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_INTEREST","sta46:5","sta47:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("110");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta84","txtAM_INTEREST:5","sta47:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("111");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_FEE","sta48:5","sta49:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("112");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta85","txtAM_FEE:5","sta49:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("113");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_JANGISON","sta50:5","sta51:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("114");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta86","txtAM_JANGISON:5","sta51:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("115");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_BUNYANGTRANS","sta52:5","sta53:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("116");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta87","txtAM_BUNYANGTRANS:5","sta53:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("117");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_PAYMENT","sta55:5","496",null,"20","5",null,null,null,null,null,this.divData.form);
            obj.set_taborder("118");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_PAYMENT");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_PAYMENT","sta57:5","sta58:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("119");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PAYMENT","sta59:5","sta60:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("120");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta88","txtAM_PAYMENT:5","sta60:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("121");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_PAYMENT2","sta61:5","sta62:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("122");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_PAYMENT2","sta63:5","sta64:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("123");
            obj.set_format("#,###");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta89","txtAM_PAYMENT2:5","sta64:-25","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("124");
            obj.set_text("원");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_REPAYBANK","sta65:5","sta66:-25","170","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("125");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtNO_REPAYGUJA","sta67:5","sta68:-25","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("126");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_REPAYOWNER","sta69:5","sta70:-25","170","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("127");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.staDS_DONGHO","text","dsSingle","DS_DONGHO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.txtDS_CONTRACTOR","value","dsSingle","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.txtDT_LEASE_FR","value","dsSingle","DT_LEASE_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.txtDT_LEASE_TO","value","dsSingle","DT_LEASE_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.txtDT_APPQUIT","value","dsSingle","DT_APPQUIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.txtRM_APPQUIT","value","dsSingle","RM_APPQUIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtAM_BUNYANGPLAN","value","dsSingle","AM_BUNYANGPLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.txtAM_BUNYANGGET","value","dsSingle","AM_BUNYANGGET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.txtAM_KASU","value","dsSingle","AM_KASU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.txtAM_MLEASE","value","dsSingle","AM_MLEASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.txtAM_ASSU","value","dsSingle","AM_ASSU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.txtAM_SHASI","value","dsSingle","AM_SHASI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.tclDT_KIJUN","value","dsSingle","DT_KIJUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.tclDT_QUIT","value","dsSingle","DT_QUIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.txtAM_FORFEIT","value","dsSingle","AM_FORFEIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.txtAM_MISULEASE","value","dsSingle","AM_MISULEASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.txtAM_MISUASSU","value","dsSingle","AM_MISUASSU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.txtAM_MISUMG","value","dsSingle","AM_MISUMG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.txtAM_REPAIR","value","dsSingle","AM_REPAIR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.txtAM_ETC","value","dsSingle","AM_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.txtID_QUIT","value","dsSingle","ID_QUIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.txtAM_INTEREST","value","dsSingle","AM_INTEREST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.txtAM_FEE","value","dsSingle","AM_FEE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.txtAM_JANGISON","value","dsSingle","AM_JANGISON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.txtDS_REMARK","value","dsSingle","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.rdoYN_PAYMENT","value","dsSingle","YN_PAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.tclDT_PAYMENT","value","dsSingle","DT_PAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.tclDT_PAYMENT2","value","dsSingle","DT_PAYMENT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.txtAM_PAYMENT","value","dsSingle","AM_PAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.txtAM_PAYMENT2","value","dsSingle","AM_PAYMENT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.txtDS_REPAYBANK","value","dsSingle","DS_REPAYBANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.txtNO_REPAYGUJA","value","dsSingle","NO_REPAYGUJA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.txtDS_REPAYOWNER","value","dsSingle","DS_REPAYOWNER");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DLC_DLGQUIT.xfdl", function() {
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


        	this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsSearch.setColumn(0, "NO_DONG", this.getOwnerFrame().NO_DONG);
        	this.dsSearch.setColumn(0, "NO_FLOOR", this.getOwnerFrame().NO_FLOOR);
        	this.dsSearch.setColumn(0, "NO_HO", this.getOwnerFrame().NO_HO);

        	this.dsSingle.setColumn(0, "DS_CONTRACTOR", this.getOwnerFrame().DS_CONTRACTOR);
        	this.dsSingle.setColumn(0, "DS_DONGHO", this.getOwnerFrame().DS_DONGHO);
        	this.dsSingle.setColumn(0, "DT_KIJUN", this.gfnGetDate());
        	this.dsSingle.setColumn(0, "YN_PAYMENT", "Y");

        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.fnSelect();
        	}
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
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;

        	this.tclDT_RECEIPT = this.divData.form.tclDT_RECEIPT;
        	this.txtAM_RECEIPT = this.divData.form.txtAM_RECEIPT;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DL", "DLC_DLGQUIT");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("NO_DONG", "string");
        	this.dsSelect.addColumn("NO_FLOOR", "string");
        	this.dsSelect.addColumn("NO_HO", "string");

        	this.dsSelectLease = new Dataset();
        	this.dsSelectLease.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelectLease.addColumn("TY_GUBUN", "string");
        	this.dsSelectLease.addColumn("NO_CHASU", "string");
        	this.dsSelectLease.addColumn("NO_DONG", "string");
        	this.dsSelectLease.addColumn("NO_FLOOR", "string");
        	this.dsSelectLease.addColumn("NO_HO", "string");
        	this.dsSelectLease.addColumn("DT_QUIT", "string");
        	this.dsSelectLease.addColumn("ID_INSERT", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("NO_CHASU", "string");
        	this.dsInsert.addColumn("NO_DONG", "string");
        	this.dsInsert.addColumn("NO_FLOOR", "string");
        	this.dsInsert.addColumn("NO_HO", "string");
        	this.dsInsert.addColumn("HNAME_QUIT", "string");
        	this.dsInsert.addColumn("DT_OUT", "string");
        	this.dsInsert.addColumn("DS_REMARK", "string");
        	this.dsInsert.addColumn("AM_FORFEIT", "bigdecimal");
        	this.dsInsert.addColumn("AM_REPAIR", "bigdecimal");
        	this.dsInsert.addColumn("AM_MISUMG", "bigdecimal");
        	this.dsInsert.addColumn("AM_MISULEASE", "bigdecimal");
        	this.dsInsert.addColumn("AM_MISUASSU", "bigdecimal");
        	this.dsInsert.addColumn("AM_ETC", "bigdecimal");
        	this.dsInsert.addColumn("YN_PAYMENT", "string");
        	this.dsInsert.addColumn("DT_PAYMENT", "string");
        	this.dsInsert.addColumn("AM_PAYMENT", "bigdecimal");
        	this.dsInsert.addColumn("DS_REPAYBANK", "string");
        	this.dsInsert.addColumn("NO_REPAYGUJA", "string");
        	this.dsInsert.addColumn("DS_REPAYOWNER", "string");
        	this.dsInsert.addColumn("ID_QUIT", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("AM_SHASI", "bigdecimal");
        	this.dsInsert.addColumn("AM_INTEREST", "bigdecimal");
        	this.dsInsert.addColumn("AM_FEE", "bigdecimal");
        	this.dsInsert.addColumn("AM_JANGISON", "bigdecimal");
        	this.dsInsert.addColumn("AM_BUNYANGTRANS", "bigdecimal");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("NO_CHASU", "string");
        	this.dsUpdate.addColumn("NO_DONG", "string");
        	this.dsUpdate.addColumn("NO_FLOOR", "string");
        	this.dsUpdate.addColumn("NO_HO", "string");
        	this.dsUpdate.addColumn("YM_IMPOSE", "string");
        	this.dsUpdate.addColumn("AM_RECEIVABLE", "bigdecimal");
        	this.dsUpdate.addColumn("AM_DELAYRECEIVABLE", "bigdecimal");
        	this.dsUpdate.addColumn("AM_LEASE", "bigdecimal");
        	this.dsUpdate.addColumn("AM_DELAY", "bigdecimal");
        	this.dsUpdate.addColumn("AM_RECEIVABLE_ASSU", "bigdecimal");
        	this.dsUpdate.addColumn("AM_DELAYRECEIVABLE_ASSU", "bigdecimal");
        	this.dsUpdate.addColumn("AM_ASSU", "bigdecimal");
        	this.dsUpdate.addColumn("AM_DELAY_ASSU", "bigdecimal");
        	this.dsUpdate.addColumn("DT_RECEIVED", "string");
        	this.dsUpdate.addColumn("AM_RECEIVED", "bigdecimal");
        	this.dsUpdate.addColumn("TY_POSITION", "string");
        	this.dsUpdate.addColumn("CD_GUJA", "string");
        	this.dsUpdate.addColumn("HNAME_QUIT", "string");
        	this.dsUpdate.addColumn("DT_OUT", "string");
        	this.dsUpdate.addColumn("DS_REMARK", "string");
        	this.dsUpdate.addColumn("AM_FORFEIT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_REPAIR", "bigdecimal");
        	this.dsUpdate.addColumn("AM_MISUMG", "bigdecimal");
        	this.dsUpdate.addColumn("AM_MISULEASE", "bigdecimal");
        	this.dsUpdate.addColumn("AM_MISUASSU", "bigdecimal");
        	this.dsUpdate.addColumn("AM_ETC", "bigdecimal");
        	this.dsUpdate.addColumn("YN_PAYMENT", "string");
        	this.dsUpdate.addColumn("DT_PAYMENT", "string");
        	this.dsUpdate.addColumn("AM_PAYMENT", "bigdecimal");
        	this.dsUpdate.addColumn("DS_REPAYBANK", "string");
        	this.dsUpdate.addColumn("NO_REPAYGUJA", "string");
        	this.dsUpdate.addColumn("DS_REPAYOWNER", "string");
        	this.dsUpdate.addColumn("ID_QUIT", "string");
        	this.dsUpdate.addColumn("ID_INSERT", "string");
        	this.dsUpdate.addColumn("AM_SHASI", "bigdecimal");
        	this.dsUpdate.addColumn("AM_INTEREST", "bigdecimal");
        	this.dsUpdate.addColumn("AM_FEE", "bigdecimal");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelect.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsResult=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnSave = function() {
        	if (!this.fnSaveValidate()) return;

        	var inData = "";

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();

        	if (this.dsList.rowcount > 0) {
        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			var flag = this.gfnGetFlag(this.dsList, i);
        			switch(flag) {
        				case "U":
        					var nrow = this.dsUpdate.addRow();
        					this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        					this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        					this.dsUpdate.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        					this.dsUpdate.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        					this.dsUpdate.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        					this.dsUpdate.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        					this.dsUpdate.setColumn(nrow, "YM_IMPOSE", nexacro.replaceAll(this.dsList.getColumn(i, "YM_IMPOSE"), "-", ""));
        					this.dsUpdate.setColumn(nrow, "AM_RECEIVABLE", this.dsList.getColumn(i, "AM_RECEIVABLE"));
        					this.dsUpdate.setColumn(nrow, "AM_DELAYRECEIVABLE", this.dsList.getColumn(i, "AM_DELAYRECEIVABLE"));
        					this.dsUpdate.setColumn(nrow, "AM_LEASE", this.dsList.getColumn(i, "AM_LEASE"));
        					this.dsUpdate.setColumn(nrow, "AM_DELAY", this.dsList.getColumn(i, "AM_DELAY"));
        					this.dsUpdate.setColumn(nrow, "AM_RECEIVABLE_ASSU", this.dsList.getColumn(i, "AM_RECEIVABLE_ASSU"));
        					this.dsUpdate.setColumn(nrow, "AM_DELAYRECEIVABLE_ASSU", this.dsList.getColumn(i, "AM_DELAYRECEIVABLE_ASSU"));
        					this.dsUpdate.setColumn(nrow, "AM_ASSU", this.dsList.getColumn(i, "AM_ASSU"));
        					this.dsUpdate.setColumn(nrow, "AM_DELAY_ASSU", this.dsList.getColumn(i, "AM_DELAY_ASSU"));
        					this.dsUpdate.setColumn(nrow, "DT_RECEIVED", nexacro.replaceAll(this.dsList.getColumn(i, "DT_RECEIVED"), "-", ""));
        					this.dsUpdate.setColumn(nrow, "AM_RECEIVED", this.dsList.getColumn(i, "AM_RECEIVED"));
        					var tyPosition = "";
        					switch (this.dsList.getColumn(i, "TY_POSITION")) {
        						case "M/H": tyPosition = "1"; break;
        						case "은행": tyPosition = "2"; break;
        						case "본사": tyPosition = "3"; break;
        						case "기타": tyPosition = "4"; break;
        					}
        					this.dsUpdate.setColumn(nrow, "TY_POSITION", tyPosition);
        					this.dsUpdate.setColumn(nrow, "CD_GUJA", this.dsList.getColumn(i, "CD_GUJA"));
        					this.dsUpdate.setColumn(nrow, "HNAME_QUIT", this.dsSingle.getColumn(0, "DS_CONTRACTOR"));
        					this.dsUpdate.setColumn(nrow, "DT_OUT", this.dsSingle.getColumn(0, "DT_QUIT"));
        					this.dsUpdate.setColumn(nrow, "DS_REMARK", this.dsSingle.getColumn(0, "DS_REMARK"));
        					this.dsUpdate.setColumn(nrow, "AM_FORFEIT", this.dsSingle.getColumn(0, "AM_FORFEIT"));
        					this.dsUpdate.setColumn(nrow, "AM_REPAIR", this.dsSingle.getColumn(0, "AM_REPAIR"));
        					this.dsUpdate.setColumn(nrow, "AM_MISUMG", this.dsSingle.getColumn(0, "AM_MISUMG"));
        					this.dsUpdate.setColumn(nrow, "AM_MISULEASE", this.dsSingle.getColumn(0, "AM_MISULEASE"));
        					this.dsUpdate.setColumn(nrow, "AM_MISUASSU", this.dsSingle.getColumn(0, "AM_MISUASSU"));
        					this.dsUpdate.setColumn(nrow, "AM_ETC", this.dsSingle.getColumn(0, "AM_ETC"));
        					this.dsUpdate.setColumn(nrow, "YN_PAYMENT", this.dsSingle.getColumn(0, "YN_PAYMENT"));
        					this.dsUpdate.setColumn(nrow, "DT_PAYMENT", this.dsSingle.getColumn(0, "DT_PAYMENT"));
        					this.dsUpdate.setColumn(nrow, "AM_PAYMENT", this.dsSingle.getColumn(0, "AM_PAYMENT"));
        					this.dsUpdate.setColumn(nrow, "DS_REPAYBANK", this.dsSingle.getColumn(0, "DS_REPAYBANK"));
        					this.dsUpdate.setColumn(nrow, "NO_REPAYGUJA", this.dsSingle.getColumn(0, "NO_REPAYGUJA"));
        					this.dsUpdate.setColumn(nrow, "DS_REPAYOWNER", this.dsSingle.getColumn(0, "DS_REPAYOWNER"));
        					this.dsUpdate.setColumn(nrow, "ID_QUIT", this.dsSingle.getColumn(0, "ID_QUIT"));
        					this.dsUpdate.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        					this.dsUpdate.setColumn(nrow, "AM_SHASI", this.dsSingle.getColumn(0, "AM_SHASI"));
        					this.dsUpdate.setColumn(nrow, "AM_INTEREST", this.dsSingle.getColumn(0, "AM_INTEREST"));
        					this.dsUpdate.setColumn(nrow, "AM_FEE", this.dsSingle.getColumn(0, "AM_FEE"));
        					break;
        			}
        		}

        		inData      = "update=dsUpdate";
        	}
        	else {
        		var nrow = this.dsInsert.addRow();
        		this.dsInsert.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        		this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        		this.dsInsert.setColumn(nrow, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        		this.dsInsert.setColumn(nrow, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        		this.dsInsert.setColumn(nrow, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        		this.dsInsert.setColumn(nrow, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        		this.dsInsert.setColumn(nrow, "HNAME_QUIT", this.dsSingle.getColumn(0, "DS_CONTRACTOR"));
        		this.dsInsert.setColumn(nrow, "DT_OUT", this.dsSingle.getColumn(0, "DT_QUIT"));
        		this.dsInsert.setColumn(nrow, "DS_REMARK", this.dsSingle.getColumn(0, "DS_REMARK"));
        		this.dsInsert.setColumn(nrow, "AM_FORFEIT", this.dsSingle.getColumn(0, "AM_FORFEIT"));
        		this.dsInsert.setColumn(nrow, "AM_REPAIR", this.dsSingle.getColumn(0, "AM_REPAIR"));
        		this.dsInsert.setColumn(nrow, "AM_MISUMG", this.dsSingle.getColumn(0, "AM_MISUMG"));
        		this.dsInsert.setColumn(nrow, "AM_MISULEASE", this.dsSingle.getColumn(0, "AM_MISULEASE"));
        		this.dsInsert.setColumn(nrow, "AM_MISUASSU", this.dsSingle.getColumn(0, "AM_MISUASSU"));
        		this.dsInsert.setColumn(nrow, "AM_ETC", this.dsSingle.getColumn(0, "AM_ETC"));
        		this.dsInsert.setColumn(nrow, "YN_PAYMENT", this.dsSingle.getColumn(0, "YN_PAYMENT"));
        		this.dsInsert.setColumn(nrow, "DT_PAYMENT", this.dsSingle.getColumn(0, "DT_PAYMENT"));
        		this.dsInsert.setColumn(nrow, "AM_PAYMENT", this.dsSingle.getColumn(0, "AM_PAYMENT"));
        		this.dsInsert.setColumn(nrow, "DS_REPAYBANK", this.dsSingle.getColumn(0, "DS_REPAYBANK"));
        		this.dsInsert.setColumn(nrow, "NO_REPAYGUJA", this.dsSingle.getColumn(0, "NO_REPAYGUJA"));
        		this.dsInsert.setColumn(nrow, "DS_REPAYOWNER", this.dsSingle.getColumn(0, "DS_REPAYOWNER"));
        		this.dsInsert.setColumn(nrow, "ID_QUIT", this.dsSingle.getColumn(0, "ID_QUIT"));
        		this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        		this.dsInsert.setColumn(nrow, "AM_SHASI", this.dsSingle.getColumn(0, "AM_SHASI"));
        		this.dsInsert.setColumn(nrow, "AM_INTEREST", this.dsSingle.getColumn(0, "AM_INTEREST"));
        		this.dsInsert.setColumn(nrow, "AM_FEE", this.dsSingle.getColumn(0, "AM_FEE"));
        		this.dsInsert.setColumn(nrow, "AM_JANGISON", this.dsSingle.getColumn(0, "AM_JANGISON"));
        		this.dsInsert.setColumn(nrow, "AM_BUNYANGTRANS", this.dsSingle.getColumn(0, "AM_BUNYANGTRANS"));

        		inData      = "insert=dsInsert";
        	}

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	//var inData      = "insert=dsInsert update=dsUpdate";
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

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		this.gfnAlert("사업지정보가 정확하지 않습니다!!");
        		validate = false;
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_DONG")) || this.gfnIsNull(this.dsSearch.getColumn(0, "NO_FLOOR")) || this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HO"))) {
        		this.gfnAlert("동층호정보가 정확하지 않습니다!!");
        		validate = false;
        	}
        	return validate;
        };

        this.fnSaveValidate = function() {
        	var validate = true;
        	var strMsg = "";
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))) {
        		strMsg += "사업지코드가 존재하지 않습니다.\n";
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_DONG"))) {
        		strMsg += "동정보가 존재하지 않습니다.\n";
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_FLOOR"))) {
        		strMsg += "층정보가 존재하지 않습니다.\n";
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_HO"))) {
        		strMsg += "호정보가 존재하지 않습니다.\n";
        		validate = false;
        	}

        	if (this.gfnIsNull(this.dsSingle.getColumn(0, "DT_QUIT"))) {
        		strMsg += "해지일자를 입력하지 않았습니다.\n";
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsSingle.getColumn(0, "DS_REMARK"))) {
        		strMsg += "해지사유를 입력하지 않았습니다.\n";
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsSingle.getColumn(0, "AM_FORFEIT"))) {
        		strMsg += "위약금을 입력하지 않았습니다.\n";
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsSingle.getColumn(0, "AM_REPAIR"))) {
        		strMsg += "시설보수비를 입력하지 않았습니다.\n";
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsSingle.getColumn(0, "AM_MISUMG"))) {
        		strMsg += "미수금관리비를 입력하지 않았습니다.\n";
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsSingle.getColumn(0, "AM_MISULEASE"))) {
        		strMsg += "미수금임대료를 입력하지 않았습니다.\n";
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsSingle.getColumn(0, "AM_ETC"))) {
        		strMsg += "기타금액을 입력하지 않았습니다.\n";
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsSingle.getColumn(0, "DT_PAYMENT"))) {
        		strMsg += "지급일자를 입력하지 않았습니다.\n";
        		validate = false;
        	}
        	if (this.gfnIsNull(this.dsSingle.getColumn(0, "AM_PAYMENT"))) {
        		strMsg += "지급금액을 입력하지 않았습니다.\n";
        		validate = false;
        	}

        	if (!validate) {
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
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		if (this.dsResult.rowcount > 0) {
        			this.dsSingle.setColumn(0, "DT_QUIT", this.dsResult.getColumn(0, "DT_APPQUIT"));
        			this.dsSingle.setColumn(0, "DS_REMARK", this.dsResult.getColumn(0, "RM_APPQUIT"));
        			this.dsSingle.setColumn(0, "DT_LEASE_FR", this.dsResult.getColumn(0, "DT_LEASE_FR"));
        			this.dsSingle.setColumn(0, "DT_LEASE_TO", this.dsResult.getColumn(0, "DT_LEASE_TO"));
        			this.dsSingle.setColumn(0, "AM_BUNYANGPLAN", this.dsResult.getColumn(0, "AM_BUNYANGPLAN"));
        			this.dsSingle.setColumn(0, "AM_BUNYANGGET", this.dsResult.getColumn(0, "AM_BUNYANGGET"));
        			this.dsSingle.setColumn(0, "AM_KASU", this.dsResult.getColumn(0, "AM_KASU"));
        			this.dsSingle.setColumn(0, "AM_SHASI", this.dsResult.getColumn(0, "AM_SHASI"));
        			this.dsSingle.setColumn(0, "AM_MLEASE", this.dsResult.getColumn(0, "AM_MLEASE"));
        			this.dsSingle.setColumn(0, "AM_ASSU", this.dsResult.getColumn(0, "AM_ASSU"));
        			this.dsSingle.setColumn(0, "DT_APPQUIT", this.dsResult.getColumn(0, "DT_APPQUIT"));
        			this.dsSingle.setColumn(0, "RM_APPQUIT", this.dsResult.getColumn(0, "RM_APPQUIT"));
        			this.dsSingle.setColumn(0, "DS_REMARK", this.dsResult.getColumn(0, "RM_APPQUIT"));
        			this.dsSingle.setColumn(0, "ID_QUIT", this.AuthClient.DS_HNAME);
        			this.dsSingle.setColumn(0, "AM_BUNYANGTRANS", this.dsResult.getColumn(0, "AM_BUNYANGTRANS"));
        		}
        		else {
        			this.fnSelectCallback = function() {
        				this.getParentContext().close(false);
        			}
        			this.gfnAlert("자료가 존재하지 않습니다.", "fnSelectCallback");
        			return;
        		}

        		this.fnAmount();
        	}
        	else if (svcID == "selectLease") {
        		if (this.dsList.rowcount > 0) {
        			var row = this.dsList.rowcount - 1;
        			this.dsList.setColumn(row, "DT_TO", this.dsSingle.getColumn(0, "DT_KIJUN"));
        			this.dsList.setColumn(row, "DT_IN", this.dsSingle.getColumn(0, "DT_KIJUN"));
        			this.dsList.setColumn(row, "DT_RECEIPT", this.dsSingle.getColumn(0, "DT_KIJUN"));
        			this.dsList.setColumn(row, "AM_RECEIPT", this.dsList.getColumn(row, "AM_INLEASE"));
        			this.dsList.setColumn(row, "TY_POSITION", "본사");
        			this.dsList.setColumn(row, this.ucFlag, "U");
        		}

        		this.dsSingle.setColumn(0, "DT_QUIT", this.dsSingle.getColumn(0, "DT_KIJUN"));
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.getParentContext().close(true);
        		} else {
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
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
         	if (id == "DLB_CFBANK_ACCOUNT_LEASE_CODEFIND") {
         		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
         		dsUserParam.setColumn(nrow, "YN_OPTION", "N");
         		dsUserParam.setColumn(nrow, "FLG_GUBUN", "B");
         	}
        	return true;
        }

        this.fnGrid_EnterCell = function(obj, row, cell) {
        	if (this.FormInfo.TY_AUTH == "R") {
        		return false;
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSingle_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		switch (e.columnid) {
        			case "AM_FORFEIT":
        			case "AM_MISULEASE":
        			case "AM_MISUASSU":
        			case "AM_MISUMG":
        			case "AM_REPAIR":
        			case "AM_ETC":
        			case "AM_INTEREST":
        			case "AM_FEE":
        			case "AM_JANGISON":
        			case "AM_BUNYANGTRANS":
        			case "AM_LOAN":
        			case "AM_LOAN2":
        			case "AM_LOANINTEREST":
        			case "AM_LOANINTEREST2":
        				var dx = nexacro.toNumber(this.dsSingle.getColumn(0, "AM_BUNYANGGET"))
        						+ nexacro.toNumber(this.dsSingle.getColumn(0, "AM_SHASI"))
        						- nexacro.toNumber(this.dsSingle.getColumn(0, "AM_FORFEIT"))
        						- nexacro.toNumber(this.dsSingle.getColumn(0, "AM_MISULEASE"))
        						- nexacro.toNumber(this.dsSingle.getColumn(0, "AM_MISUASSU"))
        						+ nexacro.toNumber(this.dsSingle.getColumn(0, "AM_JANGISON"))
        						- nexacro.toNumber(this.dsSingle.getColumn(0, "AM_MISUMG"))
        						- nexacro.toNumber(this.dsSingle.getColumn(0, "AM_REPAIR"))
        						- nexacro.toNumber(this.dsSingle.getColumn(0, "AM_LOAN"))
        						- nexacro.toNumber(this.dsSingle.getColumn(0, "AM_LOAN2"))
        						- nexacro.toNumber(this.dsSingle.getColumn(0, "AM_LOANINTEREST"))
        						- nexacro.toNumber(this.dsSingle.getColumn(0, "AM_LOANINTEREST2"))
        						- nexacro.toNumber(this.dsSingle.getColumn(0, "AM_ETC"))
        						- nexacro.toNumber(this.dsSingle.getColumn(0, "AM_INTEREST"))
        						- nexacro.toNumber(this.dsSingle.getColumn(0, "AM_FEE"))
        						- nexacro.toNumber(this.dsSingle.getColumn(0, "AM_BUNYANGTRANS"));
        				this.dsSingle(0, "AM_PAYMENT", dx);
        				break;
        		}
        	}
        };

        this.fnAmount = function() {
        	var amPayment = nexacro.toNumber(this.dsSingle.getColumn(0, "AM_BUNYANGGET"))
        					- nexacro.toNumber(this.dsSingle.getColumn(0, "AM_FORFEIT"))
        					- nexacro.toNumber(this.dsSingle.getColumn(0, "AM_MISULEASE"))
        					- nexacro.toNumber(this.dsSingle.getColumn(0, "AM_MISUASSU"))
        					- nexacro.toNumber(this.dsSingle.getColumn(0, "AM_MISUMG"))
        					- nexacro.toNumber(this.dsSingle.getColumn(0, "AM_REPAIR"))
        					- nexacro.toNumber(this.dsSingle.getColumn(0, "AM_ETC"))
        					- nexacro.toNumber(this.dsSingle.getColumn(0, "AM_LOAN"))
        					- nexacro.toNumber(this.dsSingle.getColumn(0, "AM_LOAN2"))
        					- nexacro.toNumber(this.dsSingle.getColumn(0, "AM_LOANINTEREST"))
        					- nexacro.toNumber(this.dsSingle.getColumn(0, "AM_LOANINTEREST2"))
        					- nexacro.toNumber(this.dsSingle.getColumn(0, "AM_BUNYANGTRANS"));
        	this.dsSingle.getColumn(0, "AM_PAYMENT", amPayment);
        }


        this.divData_btnConf_onclick = function(obj,e) {
        	var msg = "";

        	if (this.dsSingle.getColumn(0, "YN_PAYMENT") == "Y") {
        		msg = "퇴거 및 자동으로 해약전표를 발행합니다.\n계속 진행하시겠습니까?";
        	}
        	else {
        		msg = "퇴거처리 하시겠습니까?";
        	}

        	this.gfnConfirm(msg, "btnConf_callback");
        };

        this.btnConf_callback = function(strID, val) {
        	if (!val) return;

        	this.fnSave();
        }

        this.divData_btnExit_onclick = function(obj,e) {
        	this.getParentContext().close(false);
        };

        this.divData_btnSightLease_onclick = function(obj,e) {
        	this.fnSelectSightLease();
        };

        this.fnSelectSightLease = function() {
        	this.dsSelectLease.clearData();
        	this.dsSelectLease.addRow();
        	this.dsSelectLease.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelectLease.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelectLease.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelectLease.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelectLease.setColumn(0, "NO_FLOOR", this.dsSearch.getColumn(0, "NO_FLOOR"));
        	this.dsSelectLease.setColumn(0, "NO_HO", this.dsSearch.getColumn(0, "NO_HO"));
        	this.dsSelectLease.setColumn(0, "DT_QUIT", this.dsSingle.getColumn(0, "DT_KIJUN"));
        	this.dsSelectLease.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);

        	var strSvcId    = "selectLease";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectLease=dsSelectLease";
        	var outData     = "dsList=selectLease0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnExit.addEventHandler("onclick",this.divData_btnExit_onclick,this);
            this.divData.form.btnConf.addEventHandler("onclick",this.divData_btnConf_onclick,this);
            this.divData.form.btnSightLease.addEventHandler("onclick",this.divData_btnSightLease_onclick,this);
            this.divData.form.tclDT_QUIT.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsSingle.addEventHandler("onvaluechanged",this.dsSingle_onvaluechanged,this);
        };
        this.loadIncludeScript("DLC_DLGQUIT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
