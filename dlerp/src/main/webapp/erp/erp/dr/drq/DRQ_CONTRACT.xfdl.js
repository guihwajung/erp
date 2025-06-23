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
            this.set_titletext("AS 하자 접수입력");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,900);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"HOSU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CONTRACT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"DS_JOING_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIRTH_JOINT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_MOBILE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_EXCLUSIVE\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_LIVING\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_SUPPLY\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_CONTRACT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SP\">DRBPR_WEB_CONTRACT_SELECT</Col><Col id=\"TARGET\">select</Col></Row><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DRBPR_WEB_CONTRACT_ITEM_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_CONTRACTOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"NO_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HOSU\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CHASU\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ITEM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleMENU01","0.0","10.0",null,"24.0","1180",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("계약정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitleMENU02","staTitleMENU01:0.0","10.0",null,"24.0","1033",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("납입내역조회");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitleMENU03","staTitleMENU02:0.0","10.0",null,"24.0","841",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("납입금일정조회");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitleMENU04","staTitleMENU03:0.0","10.0",null,"24.0","709",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("미납내역조회");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitleMENU05","staTitleMENU04:0.0","10.0",null,"24.0","550",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("예상수납안내");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataMain","0","-5",null,"865","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","90",null,"22","0",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("0");
            obj.set_text("개인 신상내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar01","9","29","891","56",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem02_01","0","118","150","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("2");
            obj.set_text("계약일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar02_01","149","118","751","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC02_01","158","122","736","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("4");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem02_02","0","147","150","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("5");
            obj.set_text("계약자명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar02_02","149","147","286","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC02_02","158","151","273","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("7");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem02_03","435","147","90","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("8");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar02_03","524","147","376","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC02_03","530","151","365","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("10");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem02_04","0","176","150","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("11");
            obj.set_text("공동명의자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar02_04","149","176","286","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC02_04","158","180","272","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("13");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem02_05","435","176","90","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("14");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar02_05","524","176","376","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC02_05","530","180","365","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("16");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem02_06","0","205","150","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("17");
            obj.set_text("휴대폰");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar02_06","149","205","286","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC02_06","158","209","273","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("19");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem02_07","435","205","90","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("20");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar02_07","524","205","376","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC02_07","530","209","365","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("22");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem02_08","0","234","150","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("23");
            obj.set_text("이메일주소");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar02_08","149","234","750","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem02_09","0","263","150","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("25");
            obj.set_text("주소(실제 거주지)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar02_09","149","263","750","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC02_08","158","239","737","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("27");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC02_09","158","268","737","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("28");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem03_01","0","329","150","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("29");
            obj.set_text("주택형");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar03_01","149","329","750","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","302",null,"22","0",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("32");
            obj.set_text("세대정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC03_01","158","334","735","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("30");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem03_02","0","358","150","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("33");
            obj.set_text("동호수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar03_02","149","358","750","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC03_02","158","363","735","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("35");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem03_03","0","387","150","173",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("36");
            obj.set_text("세대별 계약면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar03_03_01_01","448","387","451","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC03_03_01_01","457","392","436","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("38");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem03_03_01","149","387","150","88",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("39");
            obj.set_text("세대별 공급면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem03_03_01_01","298","387","150","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("40");
            obj.set_text("전용면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem03_03_01_02","298","416","150","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("41");
            obj.set_text("주거공용면적");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem03_03_01_03","298","445","150","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("42");
            obj.set_text("소계(공급면적)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem03_03_02","149","474","299","57",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("43");
            obj.set_text("기타공용면적(지하 주차장 포함)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem03_03_03","149","530","299","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("44");
            obj.set_text("계(계약면적)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem03_04","0","559","150","186",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("45");
            obj.set_text("옵션품목");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar03_03_01_02","448","416","451","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC03_03_01_02","457","421","436","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("47");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar03_03_01_03","448","445","451","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC03_03_01_03","457","450","436","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("49");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar03_03_02","448","475","451","56",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC03_03_02","457","480","436","45",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("51");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar03_03_03","448","531","451","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC03_03_03","457","536","436","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("53");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar03_04","149","559","750","186",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC03_04","158","564","735","171",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("55");
            obj.set_maxlength("50");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem05_01","1","759","250","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("56");
            obj.set_text("주택형 표기방식 환산방법");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem05_07","790","759","111","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("57");
            obj.set_text("149.8160m2");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem05_06","682","759","109","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("58");
            obj.set_text("148.9580m2");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem05_05","574","759","109","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("59");
            obj.set_text("109.7000m2");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem05_04","466","759","109","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("60");
            obj.set_text("109.2530m2");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem05_03","358","759","109","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("61");
            obj.set_text("109.1090m2");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem05_02","250","759","109","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("62");
            obj.set_text("80.4640m2");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar05_01","0","788","251","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("63");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("m2 x 0.3025 또는 m2 ÷ 3.3058");
            obj.set_textAlign("center");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar05_02","250","788","109","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("(구) 24평형");
            obj.set_textAlign("center");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar05_03","358","788","325","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("(구) 33평형");
            obj.set_textAlign("center");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC01","12","35","883","22",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("66");
            obj.set_maxlength("50");
            obj.set_border("1px none");
            obj.set_enable("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Edit("edtPN_SC01_02","12","59","883","22",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("67");
            obj.set_maxlength("50");
            obj.set_border("1px none");
            obj.set_enable("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar05_02_00","682","788","219","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("(구) 45평형");
            obj.set_textAlign("center");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","-1",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("계약정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.divDataMain.form.edtPN_SC02_01","value","dsList","DT_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divDataMain.form.edtPN_SC02_02","value","dsList","DS_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataMain.form.edtPN_SC02_03","value","dsList","DT_BIRTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataMain.form.edtPN_SC02_04","value","dsList","DS_JOING_CONTRACTOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataMain.form.edtPN_SC02_05","value","dsList","DT_BIRTH_JOINT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataMain.form.edtPN_SC02_06","value","dsList","NO_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataMain.form.edtPN_SC02_07","value","dsList","NO_MOBILE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataMain.form.edtPN_SC02_08","value","dsList","DS_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataMain.form.edtPN_SC02_09","value","dsList","DS_ADDRESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataMain.form.edtPN_SC03_01","value","dsList","NO_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataMain.form.edtPN_SC03_03_01_01","value","dsList","SZ_EXCLUSIVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataMain.form.edtPN_SC03_03_01_02","value","dsList","SZ_LIVING");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataMain.form.edtPN_SC03_03_01_03","value","dsList","SZ_SUPPLY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataMain.form.edtPN_SC03_03_02","value","dsList","SZ_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataMain.form.edtPN_SC03_03_03","value","dsList","SZ_CONTRACT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DRQ_CONTRACT.xfdl", function() {
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

        	//this.fnBtnSendSmsEnble();

        	//this.fnSetCombo();

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	this.dsSearch.setColumn(0, "DS_CONTRACTOR", this.getOwnerFrame().DS_CONTRACTOR);
        	this.dsSearch.setColumn(0, "DT_BIRTH", this.getOwnerFrame().DT_BIRTH);
        	this.dsSearch.setColumn(0, "NO_DONG", this.getOwnerFrame().NO_DONG);
        	this.dsSearch.setColumn(0, "NO_HOSU", this.getOwnerFrame().NO_HOSU);
        	this.dsSearch.setColumn(0, "CD_ACNTUNIT", this.getOwnerFrame().CD_ACNTUNIT);
        	this.dsSearch.setColumn(0, "DS_ACNTUNIT", this.getOwnerFrame().DS_ACNTUNIT);
        	this.dsSearch.setColumn(0, "TY_GUBUN", this.getOwnerFrame().TY_GUBUN);
        	this.dsSearch.setColumn(0, "NO_CHASU", this.getOwnerFrame().NO_CHASU);

        	this.FormBtns.Select.click();
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

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DS_CONTRACTOR", "string");
        	this.dsSelect.addColumn("DT_BIRTH", "string");
        	this.dsSelect.addColumn("NO_DONG", "string");
        	this.dsSelect.addColumn("NO_HOSU", "string");
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");

        	this.dsSelect1 = new Dataset();
        	this.dsSelect1.addColumn("DS_CONTRACTOR", "string");
        	this.dsSelect1.addColumn("DT_BIRTH", "string");
        	this.dsSelect1.addColumn("NO_DONG", "string");
        	this.dsSelect1.addColumn("NO_HOSU", "string");
        	this.dsSelect1.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect1.addColumn("TY_GUBUN", "string");
        	this.dsSelect1.addColumn("NO_CHASU", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        // 	if (!this.fnSelectValidate()) return false;
        //
        // 	this.gfnGridBeforeSelect(this.dxGrid);


        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "DS_CONTRACTOR", this.dsSearch.getColumn(0, "DS_CONTRACTOR"));
        	this.dsSelect.setColumn(0, "DT_BIRTH", this.dsSearch.getColumn(0, "DT_BIRTH"));
        	this.dsSelect.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect.setColumn(0, "NO_HOSU", this.dsSearch.getColumn(0, "NO_HOSU"));
        	this.dsSelect.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "NO_CHASU"));

        	this.dsSelect1.clearData();
        	this.dsSelect1.addRow();

        	this.dsSelect1.setColumn(0, "DS_CONTRACTOR", this.dsSearch.getColumn(0, "DS_CONTRACTOR"));
        	this.dsSelect1.setColumn(0, "DT_BIRTH", this.dsSearch.getColumn(0, "DT_BIRTH"));
        	this.dsSelect1.setColumn(0, "NO_DONG", this.dsSearch.getColumn(0, "NO_DONG"));
        	this.dsSelect1.setColumn(0, "NO_HOSU", this.dsSearch.getColumn(0, "NO_HOSU"));
        	this.dsSelect1.setColumn(0, "CD_ACNTUNIT", this.dsSearch.getColumn(0, "CD_ACNTUNIT"));
        	this.dsSelect1.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect1.setColumn(0, "NO_CHASU", this.dsSearch.getColumn(0, "NO_CHASU"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select1=dsSelect1";
        	var outData     = "dsList=select0 dsList1=select10";
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
          *	조회 버튼
          */
        this.fnSelectAdd = function() {
        	//if (!this.fnSelectValidate()) return false;

        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

         }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
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
        		//this.gfnGridAfterSelect(this.dxGrid);

        		this.divData.form.divDataMain.form.edtPN_SC01.set_value("["+this.dsSearch.getColumn(0, "DS_ACNTUNIT")+"]");
        		this.divData.form.divDataMain.form.edtPN_SC01_02.set_value(this.dsList.getColumn(0, "DS_CONTRACTOR")+"("+this.dsList.getColumn(0, "NO_DONG")+"동 "+this.dsList.getColumn(0, "HOSU")+"호)님 환영합니다");
        		this.divData.form.divDataMain.form.edtPN_SC03_02.set_value(this.dsList.getColumn(0, "NO_DONG")+"동 "+this.dsList.getColumn(0, "HOSU")+"호");

        		var option = "";
        		for(var i = 0; i < this.dsList1.rowcount; i++) {

        			option += this.dsList1.getColumn(i, "DS_ITEM");
        			if(i < this.dsList1.rowcount-1){
        				option +="/";
        			}
        			this.divData.form.divDataMain.form.edtPN_SC03_04.set_value(option);
        		}
        	}
        };

        // this.fnPopupCallback = function(strId, val) {
        // 	if( val.bSave ){
        // 		this.FormBtns.Select.click();
        // 	}
        // }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //납입내역조회
        this.divData_staTitleMENU02_onclick = function(obj,e)
        {
        	var param = {};
        	param.DS_CONTRACTOR = this.dsSearch.getColumn(0, "DS_CONTRACTOR");
        	param.DT_BIRTH = this.dsSearch.getColumn(0, "DT_BIRTH");
        	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_HOSU = this.dsSearch.getColumn(0, "NO_HOSU");
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.TY_GUBUN = this.dsSearch.getColumn(0, "TY_GUBUN");
        	param.NO_CHASU = this.dsSearch.getColumn(0, "NO_CHASU");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRQ_RECEIPT", "fnConfirmcallback", param);
        };

        this.fnConfirmcallback = function(svcID, val)
        {
        	//if(val == true) {

        		this.FormBtns.Select.click();
        	//}
        }

        //납입금일정조회
        this.divData_staTitleMENU03_onclick = function(obj,e)
        {
        	var param = {};
        	param.DS_CONTRACTOR = this.dsSearch.getColumn(0, "DS_CONTRACTOR");
        	param.DT_BIRTH = this.dsSearch.getColumn(0, "DT_BIRTH");
        	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_HOSU = this.dsSearch.getColumn(0, "NO_HOSU");
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.TY_GUBUN = this.dsSearch.getColumn(0, "TY_GUBUN");
        	param.NO_CHASU = this.dsSearch.getColumn(0, "NO_CHASU");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRQ_ARGEEMENT", "fnConfirmcallback", param);
        };

        //미납내역조회
        this.divData_staTitleMENU04_onclick = function(obj,e)
        {
        	var param = {};
        	param.DS_CONTRACTOR = this.dsSearch.getColumn(0, "DS_CONTRACTOR");
        	param.DT_BIRTH = this.dsSearch.getColumn(0, "DT_BIRTH");
        	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_HOSU = this.dsSearch.getColumn(0, "NO_HOSU");
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.TY_GUBUN = this.dsSearch.getColumn(0, "TY_GUBUN");
        	param.NO_CHASU = this.dsSearch.getColumn(0, "NO_CHASU");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRQ_MINAP", "fnConfirmcallback", param);
        };

        //예상수납안내
        this.divData_staTitleMENU05_onclick = function(obj,e)
        {
        	var param = {};
        	param.DS_CONTRACTOR = this.dsSearch.getColumn(0, "DS_CONTRACTOR");
        	param.DT_BIRTH = this.dsSearch.getColumn(0, "DT_BIRTH");
        	param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        	param.NO_HOSU = this.dsSearch.getColumn(0, "NO_HOSU");
        	param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        	param.DS_ACNTUNIT = this.dsSearch.getColumn(0, "DS_ACNTUNIT");
        	param.TY_GUBUN = this.dsSearch.getColumn(0, "TY_GUBUN");
        	param.NO_CHASU = this.dsSearch.getColumn(0, "NO_CHASU");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRQ_DLGESTRECEIPT", "fnConfirmcallback", param);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.divSearch.form.staTitleMENU01.addEventHandler("onclick",this.divData_staTitle01_onclick,this);
            this.divSearch.form.staTitleMENU02.addEventHandler("onclick",this.divData_staTitleMENU02_onclick,this);
            this.divSearch.form.staTitleMENU03.addEventHandler("onclick",this.divData_staTitleMENU03_onclick,this);
            this.divSearch.form.staTitleMENU04.addEventHandler("onclick",this.divData_staTitleMENU04_onclick,this);
            this.divSearch.form.staTitleMENU05.addEventHandler("onclick",this.divData_staTitleMENU05_onclick,this);
            this.divData.form.staTitle01.addEventHandler("onclick",this.divData_staTitle01_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsList1.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DRQ_CONTRACT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
