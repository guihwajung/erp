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
            this.set_titletext("경조금지급기준표");
            this.getSetter("maxwidth").set("790");
            this.getSetter("maxheight").set("800");
            if (Form == this.constructor)
            {
                this._setFormPosition(756,960);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_WORK_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK_END\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DT_WORK_START\"/><Col id=\"DT_WORK_END\"/><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAGPR_AUTH_BASEINFO</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAGPR_AUTH_DATE_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","10","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("경조금 지급 기준표");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","357","96","125","64",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("금  액");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","357","67","379","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("정규직/PJT계약직");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","0","67","358","93",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사 유");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","12","40","188","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("- 1년 이상 재직자");
            obj.set_textDecoration("none");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta07","0","159","120","59",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("본인 ");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta08","119","159","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("경사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta09","238","159","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("결혼");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","481","96","125","64",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("화환/조화\r\n(10만원 상당)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta10","605","96","131","64",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("휴가\r\n(휴일포함,\r\n단 본인결혼은 \r\n일요일 제외)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta11","357","159","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("1,000,000");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta12","481","159","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("○");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta13","605","159","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("6일(일요일제외)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","119","188","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("애사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","238","188","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("사망");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta14","357","188","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("별도협의");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta15","481","188","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("○");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta16","605","188","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta17","0","217","120","117",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("직계\r\n존속");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta18","119","217","120","59",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("경사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta19","238","217","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("부모 회갑");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta20","357","217","125","59",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("200,000(택1)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta21","481","217","125","59",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta22","605","217","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("1일(휴일포함)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta23","238","246","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("부모 고희");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta24","605","246","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("1일(휴일포함)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta25","119","275","120","59",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("애사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta26","238","275","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("부모 사망");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta27","357","275","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("1,000,000");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta28","481","275","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("○");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta29","605","275","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("6일(휴일포함)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta30","238","304","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("조/외조부모 사망");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta31","357","304","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta32","481","304","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("○");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta33","605","304","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("3일(휴일포함)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta34","0","333","120","59",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_text("직계\r\n비속");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta35","119","333","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_text("경사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta36","119","362","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_text("애사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta37","238","362","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_text("자녀 사망");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta38","238","333","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_text("자녀 결혼");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta39","357","333","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("1,000,000");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta40","357","362","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("별도협의");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta41","481","362","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("○");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta42","481","333","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("○");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta43","605","333","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("1일(휴일포함)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta44","605","362","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta45","0","391","120","59",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_text("형제\r\n자매");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta46","119","391","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_text("경사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta47","119","420","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("애사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta48","238","391","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_text("결혼");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta49","238","420","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("사망");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta50","357","420","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta51","357","391","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta52","481","391","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("○");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta53","481","420","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("○");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta54","605","391","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("1일(휴일포함)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta55","605","420","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("3일(휴일포함)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta56","0","449","120","175",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("배우자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta57","119","507","120","117",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("애사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta58","119","449","120","59",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("경사");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta59","238","536","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("조/외조부모 사망");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta60","238","507","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("부모 사망");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta61","238","478","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("부모 고희");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta62","238","449","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("부모 회갑");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta63","357","449","125","59",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("200,000(택1)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta64","357","507","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("1,000,000");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta65","357","536","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta66","481","536","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("○");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta67","481","507","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("○");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta68","481","449","125","59",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta69","605","449","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("1일(휴일포함)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta70","605","478","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("1일(휴일포함)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta71","605","507","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("4일(휴일포함)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta72","605","536","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("3일(휴일포함)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta73","238","565","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            obj.set_text("배우자사망");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta74","238","594","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            obj.set_text("형제자매 사망");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta75","357","565","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("1,000,000");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta76","357","594","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta77","481","565","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("○");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta78","481","594","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("○");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta79","605","565","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("6일(휴일포함)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta80","605","594","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("81");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("3일(휴일포함)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE00","0","633","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("82");
            obj.set_text("축하금 지급 기준표");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta81","0","669","239","35",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_text("항목");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta82","238","669","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_text("기준");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta83","357","669","125","35",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("금액");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta84","481","669","125","35",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("꽃다발\r\n(5만원 상당)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta85","605","669","131","35",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("휴가");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta86","0","703","239","30",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("본인생일");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta87","238","703","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("1년이상");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta88","357","703","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text(" 100,000(상품권)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta89","481","703","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta90","605","703","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta91","0","732","239","30",null,null,null,null,null,null,this);
            obj.set_taborder("93");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("자녀 돌");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta92","238","732","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("94");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("1년이상");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta93","357","732","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("95");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text(" 100,000(상품권)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta94","481","732","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("96");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta95","605","732","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("97");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("-");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta96","0","761","120","117",null,null,null,null,null,null,this);
            obj.set_taborder("98");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("자녀출생축하금");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta97","238","761","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("99");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("첫째, 둘째");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta98","357","761","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("100");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("300,000");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta99","481","761","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("101");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("○");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta100","605","761","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("102");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("10일(유급)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta101","119","761","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("103");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("배우자 출산");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta102","119","790","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("104");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("배우자 출산");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta103","238","790","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("105");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("셋째이상");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta104","357","790","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("106");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("1,000,000");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta105","481","790","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("107");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("○");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta106","605","790","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("108");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("10일(유급)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta107","119","819","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("109");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("본인출산");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta108","238","819","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("110");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("첫째, 둘째");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta109","357","819","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("111");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("300,000");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta110","481","819","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("112");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("○");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta111","605","819","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("113");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("90일(무급)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta112","119","848","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("114");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("본인출산");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta113","238","848","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("115");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("셋째이상");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta114","357","848","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("116");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("1,000,000");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta115","481","848","125","30",null,null,null,null,null,null,this);
            obj.set_taborder("117");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("○");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta116","605","848","131","30",null,null,null,null,null,null,this);
            obj.set_taborder("118");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("90일(무급)");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("sta117","2","890","448","20",null,null,null,null,null,null,this);
            obj.set_taborder("119");
            obj.set_text("█ 경조금 및 축하금 지급기준");
            obj.set_textDecoration("none");
            obj.set_font("bold 12px/normal \"Dotum\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta118","14","910","516","20",null,null,null,null,null,null,this);
            obj.set_taborder("120");
            obj.set_text("※ 1년이상 근속한 임직원에 한해 지급함. 단, 1년 미만자라도 자녀출생축하금은 지급");
            obj.set_textDecoration("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta119","30","930","548","20",null,null,null,null,null,null,this);
            obj.set_taborder("121");
            obj.set_text("- 사내부부의 경우 자녀출생축하금, 자녀돌축하금은 중복 수혜 가능");
            obj.set_textDecoration("none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAB_FAMILYEVENT_TABLE.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.gbDel = "";	// 시간과 분 구분자(:) 추가하기위함 변수

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	// 메인창 파라미터 받기
        	this.dsList.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        	this.dsList.setColumn(0, "DS_CORP", this.getOwnerFrame().DS_CORP);
        	this.dsList.setColumn(0, "DT_WORK_START", this.getOwnerFrame().DT_WORK_START);
        	this.dsList.setColumn(0, "DT_WORK_END", this.getOwnerFrame().DT_WORK_END);

        	//this.fnSelect();
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//this.ccfCD_CORP = this.ccfCD_CORP;

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	/*
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_BASE", "string");
        	this.dsSelect.addColumn("TY_PLAN", "string");
        	*/

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("DT_WORK_START", "string");
        	this.dsSave.addColumn("DT_WORK_END", "string");
        	this.dsSave.addColumn("TY_PLAN", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP_CODEFIND";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };

         /*
          *	조회
          */
        /*
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	var dtBase = this.dsList.getColumn(0, "DT_BASE");
        	var tyPlan = this.dsList.getColumn(0, "TY_PLAN");
        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_CORP"))){
        		dtBase = "";
        		tyPlan = "";
        	}else if(this.dsList.getColumn(0, "CD_CORP") != this.getOwnerFrame().CD_CORP){
        		dtBase = "";
        		tyPlan = "";
        	}

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "DT_BASE", dtBase);
        	this.dsSelect.setColumn(0, "TY_PLAN", tyPlan);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsData=select0";
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
        */

        this.btnOK_onclick = function(obj,e)
        {
        	//this.gfnConfirm("기존에 생성된 계획에 대해서는 삭제 후 재 생성됩니다.\n계속진행하시겠습니까?", "fnCorpCrtCallback");

        	this.dlgfnSave();
        };
        /*
        this.fnCorpCrtCallback = function(strId, val)  {
        	if(val == false) return;

        	// 확인
        	this.dlgfnSave();
        };
        */

        this.dlgfnSave = function() {
        	//if (!this.fnDataValidate()) return;

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsSave.setColumn(nrow, "DT_WORK_START", this.dsList.getColumn(0, "DT_WORK_START"));
        	this.dsSave.setColumn(nrow, "DT_WORK_END", this.dsList.getColumn(0, "DT_WORK_END"));
        	this.dsSave.setColumn(nrow, "TY_PLAN", "13");
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
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

        }

        this.btnCANCLE_onclick = function(obj,e)
        {
        	// 취소
        	this.getParentContext().close(false);
        };

        this.fnDataValidate = function(){
        	/*
        	if(this.gfnIsNull(this.ctclDT_BASE.value)) {
        		this.ctclDT_BASE.setFocus();
        		this.gfnAlert("기준일자를 입력해주세요");
        		return false;
        	}
        	else if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		this.gfnAlert("법인을 입력해주세요");
        		return false;
        	}
        	*/
        	return true;
        }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if  (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnClose = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("작업이 완료 되었습니다.", "fnClose");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /*
        this.dsList_onvaluechanged = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo)
        {
        	if(e.oldvalue != e.newvalue)
        	{
        		// 법인 변경시 조회한다
        		if(e.columnid == "CD_CORP") {
        			this.fnSelect();
        		}
        	}
        };
        */

        /*
        // onkeyup 이벤트(시간 관련 컬럼에서 사용)
        this.divData_divDataRight_onkeyup = function(obj:nexacro.Edit,e:nexacro.KeyEventInfo)
        {
        	if(obj.value.length == 1){
        		this.gbDel = "N";
        	}else if(obj.value.length == 3){
        		this.gbDel = "Y";
        	}

        	if(obj.value.length == 2){
        		if(this.gbDel == "N"){	// N일때 (:) 추가한다
        			obj.set_value(obj.value + ":");
        		}
        	}

        };

        // 시간을 네자리만 입력했을경우  : 입력
        this.divData_divDataRight_onkillfocus = function(obj:nexacro.Edit,e:nexacro.KillFocusEventInfo)
        {
        	if(obj.value.length == 4){
        		if(obj.value.indexOf(":") < 0){
        			obj.set_value(obj.value.substr(0,2) + ":" + obj.value.substr(2,2));
        		}
        	}


        	//if(obj.value.length == 5){
        	//	if(obj.value.indexOf(":") < 0){
        	//		this.gfnAlert("시간 입력이 잘못되었습니다.");
        	//	}
        	//}

        };
        */


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.sta02.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta04.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta05.addEventHandler("onclick",this.sta05_onclick,this);
            this.sta03.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta10.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta12.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta13.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta15.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta16.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta21.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta22.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta24.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta28.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta29.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta32.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta33.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta41.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta42.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta43.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta44.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta52.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta53.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta54.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta55.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta66.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta67.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta68.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta69.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta70.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta71.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta72.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta77.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta78.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta79.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta80.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta84.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta85.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta89.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta90.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta94.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta95.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta99.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta100.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta105.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta106.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta110.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta111.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta115.addEventHandler("onclick",this.sta23_onclick,this);
            this.sta116.addEventHandler("onclick",this.sta23_onclick,this);
        };
        this.loadIncludeScript("DAB_FAMILYEVENT_TABLE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
