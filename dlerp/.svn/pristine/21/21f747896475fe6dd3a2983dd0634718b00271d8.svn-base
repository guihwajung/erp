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
            this.set_titletext("학자금신청등록");
            this.getSetter("maxwidth").set("1390");
            this.getSetter("maxheight").set("885");
            if (Form == this.constructor)
            {
                this._setFormPosition(1390,1920);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divSearch","0","0","680","1830",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_L","0","5","90","18",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("연차/반차");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBackground","0","33","680","630",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","15","45","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("● 기본 연차 15개 + 근속 연차 0 ~ 10개");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","15","sta01:-5","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("● 단, 1년 미만 근속자는 1개월 만근 시 마다 연차 1개씩 발생이 원칙");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","15","sta02:-7","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("   → 입사 당해년도 만근 시 예상 발생 연차를 입사 시 일괄 지급 / 차년도에도 동일 기준 적용");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04","15","sta03:-7","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("      (근속 만 1년 미만 퇴사 시 정산하여 마이너스 연차 잔여급여에서 차감)");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta05","15","sta04:-7","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("   → 입사 만 1년이 지나고 다음해부터는 정상적으로 연차 15개 발생");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta06","15","sta05:-5","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("● 결재 라인 : 소속 부서장");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta07","15","sta06:-5","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("● 연차 산정 기준");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta08","15","sta07:-7","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("   - 1년 미만 근무자 : 1개월 만근 후 그 다음 날 1개의 유급휴가 부여");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta09","15","sta08:-7","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("   - 1년 초과 근무자 : 1년간 소정 근로일 80% 초과 출근 시 15개 부여");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta10","15","sta09:-7","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("   - 연속 근무자 : 1년간 소정근로일 80% 초과 출근 시 기본 15개 부여 + 연속근무 2년 단위로 1개씩 추가 부여");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta11","15","sta10:-7","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("   ※ MAX 연차 25개");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData1","38","sta11:-7","360","450",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_1","0","10","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("1");
            obj.set_text("근무기간");
            obj.set_font("bold 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            obj.set_border("2px solid #4D9CDD,1px solid #e4e4e4,1px solid #e4e4e4");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_2","0","sta01_1:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("2");
            obj.set_text("1년 미만");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_3","0","sta01_2:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("3");
            obj.set_text("1년 초과");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_4","0","sta01_3:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("4");
            obj.set_text("2년 초과");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_5","0","sta01_4:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("5");
            obj.set_text("3년 초과");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_6","0","sta01_5:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("6");
            obj.set_text("4년 초과");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_7","0","sta01_6:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("7");
            obj.set_text("5년 초과");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_8","0","sta01_7:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("8");
            obj.set_text("6년 초과");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_9","0","sta01_8:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("9");
            obj.set_text("7년 초과");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_10","0","sta01_9:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("10");
            obj.set_text("8년 초과");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_11","0","sta01_10:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("11");
            obj.set_text("9년 초과");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_12","0","sta01_11:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("12");
            obj.set_text("10년 초과");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_13","sta01_1:-1","10","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("13");
            obj.set_text("연차개수");
            obj.set_font("bold 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            obj.set_border("2px solid #4D9CDD,1px solid #e4e4e4,1px solid #e4e4e4");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_14","sta01_2:-1","sta01_13:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("14");
            obj.set_text("최대 11");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_15","sta01_3:-1","sta01_14:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("15");
            obj.set_text("15");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_16","sta01_4:-1","sta01_15:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("16");
            obj.set_text("15");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_17","sta01_5:-1","sta01_16:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("17");
            obj.set_text("15+1=16");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_18","sta01_6:-1","sta01_17:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("18");
            obj.set_text("15+1=16");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_19","sta01_7:-1","sta01_18:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("19");
            obj.set_text("15+2=17");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_20","sta01_8:-1","sta01_19:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("20");
            obj.set_text("15+2=17");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_21","sta01_9:-1","sta01_20:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("21");
            obj.set_text("15+3=18");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_22","sta01_10:-1","sta01_21:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("22");
            obj.set_text("15+3=18");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_23","sta01_11:-1","sta01_22:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("23");
            obj.set_text("15+4=19");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_24","sta01_12:-1","sta01_23:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("24");
            obj.set_text("15+4=19");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_25","sta01_13:-1","10","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("25");
            obj.set_text("근무기간");
            obj.set_font("bold 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            obj.set_border("2px solid #4D9CDD,1px solid #e4e4e4,1px solid #e4e4e4");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_26","sta01_14:-1","sta01_25:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("26");
            obj.set_text("11년 초과");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_27","sta01_15:-1","sta01_26:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("27");
            obj.set_text("12년 초과");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_28","sta01_16:-1","sta01_27:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("28");
            obj.set_text("13년 초과");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_29","sta01_17:-1","sta01_28:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("29");
            obj.set_text("14년 초과");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_30","sta01_18:-1","sta01_29:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("30");
            obj.set_text("15년 초과");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_31","sta01_19:-1","sta01_30:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("31");
            obj.set_text("16년 초과");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_32","sta01_20:-1","sta01_31:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("32");
            obj.set_text("17년 초과");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_33","sta01_21:-1","sta01_32:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("33");
            obj.set_text("18년 초과");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_34","sta01_22:-1","sta01_33:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("34");
            obj.set_text("19년 초과");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_35","sta01_23:-1","sta01_34:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("35");
            obj.set_text("20년 초과");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_36","sta01_24:-1","sta01_35:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("36");
            obj.set_text("21년 초과");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_37","sta01_25:-1","10","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("37");
            obj.set_text("연차개수");
            obj.set_font("bold 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            obj.set_border("2px solid #4D9CDD,1px solid #e4e4e4,1px solid #e4e4e4");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_38","sta01_26:-1","sta01_37:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("38");
            obj.set_text("15+5=20");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_39","sta01_27:-1","sta01_38:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("39");
            obj.set_text("15+5=20");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_40","sta01_28:-1","sta01_39:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("40");
            obj.set_text("15+6=21");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_41","sta01_29:-1","sta01_40:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("41");
            obj.set_text("15+6=21");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_42","sta01_30:-1","sta01_41:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("42");
            obj.set_text("15+7=22");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_43","sta01_31:-1","sta01_42:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("43");
            obj.set_text("15+7=22");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_44","sta01_32:-1","sta01_43:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("44");
            obj.set_text("15+8=23");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_45","sta01_33:-1","sta01_44:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("45");
            obj.set_text("15+8=23");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_46","sta01_34:-1","sta01_45:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("46");
            obj.set_text("15+9=24");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_47","sta01_35:-1","sta01_46:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("47");
            obj.set_text("15+9=24");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta01_48","sta01_36:-1","sta01_47:-1","90","30",null,null,null,null,null,null,this.divSearch.form.divData1.form);
            obj.set_taborder("48");
            obj.set_text("15+10=25");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch.form.divData1.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_L2","0","staBackground:15","150","18",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("On-Boarding 휴가");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBackground2","0","sta_TITLE_L2:10","680","95",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_49","15","sta_TITLE_L2:20","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("● 연차가 부족한 1년차 직원에게 3일의 유급 휴가 부여");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_50","15","sta01_49:-7","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("   (전문/현채직의 경우, 근로계약기간 6개월 이상 직원)");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_51","15","sta01_50:-5","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("● 입사일로부터 1년 내 사용 (미사용 시 소멸, 별도 보상 불가, 공동연차로 사용 불가)");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_L3","0","staBackground2:15","150","18",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("현장 부임 휴가");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBackground3","0","sta_TITLE_L3:10","680","75",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_52","15","sta_TITLE_L3:20","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("● 국내외 현장 부임 시 3일의 유급휴가 부여");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_53","15","sta01_52:-5","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("● 원소속에서 신규부임지로 실제 부임 전까지 사용 (미사용 시 소멸, 별도 보상 불가)");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_L4","0","staBackground3:15","150","18",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("병가");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBackground4","0","sta_TITLE_L4:10","680","95",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_54","15","sta_TITLE_L4:20","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("● 본인의 상병으로 업무가 어려운 경우에 신청 가능");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_55","15","sta01_54:-7","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_text("   (연차 소진 후에도 치료가 필요한 경우에 한함)");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_56","15","sta01_55:-5","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("27");
            obj.set_text("● 상급병원의 진단서(병명 및 치료예상기간 등 필수 기재)를 첨부하여 최대 30일 이내에서 진단서의 치료기간만큼 사용");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_L5","0","staBackground4:15","150","18",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("28");
            obj.set_text("출산 전후 휴가");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBackground5","0","sta_TITLE_L5:10","680","95",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_57","15","sta_TITLE_L5:20","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("30");
            obj.set_text("● 90일 사용 가능 (다태아의 경우 120일)");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_58","15","sta01_57:-7","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("31");
            obj.set_text("   ※ 출산일 이후 45일 이상 보장되도록 휴가 사용 (다태아의 경우 60일)");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_59","15","sta01_58:-5","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("32");
            obj.set_text("● 유/사산의 경험이 있거나 위험이 인정되는 경우, 만 40세 이상의 산모일 경우 산전후휴가의 분할 1회 사용 가능");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_L6","0","staBackground5:15","150","18",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("33");
            obj.set_text("난임 휴가");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBackground6","0","sta_TITLE_L6:10","680","95",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_60","15","sta_TITLE_L6:20","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("35");
            obj.set_text("● 연간 3일 한도 (1일 유급, 2일 무급)");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_61","15","sta01_60:-5","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("36");
            obj.set_text("● 휴가 3일 전 보직자 보고 후 치료 익일 바로 신청/결재");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_62","15","sta01_61:-5","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("37");
            obj.set_text("● 치료 사실을 증명할 수 있는 서류 첨부 (의학적 시술)");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_L7","0","staBackground6:15","150","18",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("38");
            obj.set_text("보호 휴가");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBackground7","0","sta_TITLE_L7:10","680","75",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_63","15","sta_TITLE_L7:20","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("40");
            obj.set_text("● 여직원의 생리휴가");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_64","15","sta01_63:-5","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("41");
            obj.set_text("● 월 1회 사용 가능하며, 무급 처리");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_L8","0","staBackground7:15","150","18",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("42");
            obj.set_text("해외 정기 휴가");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBackground8","0","sta_TITLE_L8:10","680","120",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("43");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_65","15","sta_TITLE_L8:20","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("44");
            obj.set_text("● 4개월 주기 12일 또는 6개월 주기 20일 中 택 1");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_66","15","sta01_65:-5","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("45");
            obj.set_text("● 4개월 근무 시 : 12일 (연차 공제 6일)");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_67","15","sta01_66:-5","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("46");
            obj.set_text("● 6개월 근무 시 : 20일 (연차 공제 10일)");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_68","15","sta01_67:-5","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("47");
            obj.set_text("● 중동 지역의 경우 각 휴가에 2일 추가");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_L9","0","staBackground8:15","150","18",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("48");
            obj.set_text("귀국 휴가");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBackground9","0","sta_TITLE_L9:10","680","167",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_69","15","sta_TITLE_L9:20","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("50");
            obj.set_text("● 해외 근무 기간이 2년 이상인 직원의 경우 완전 귀국(국내발령이나 퇴직) 시 귀국 휴가 사용 가능");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_70","15","sta01_69:-5","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("51");
            obj.set_text("● 휴가일수");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_71","15","sta01_70:-7","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("52");
            obj.set_text("   - 정기휴가 사용 시 : 10일 (연차 공제 4일)");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_72","15","sta01_71:-7","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("53");
            obj.set_text("   - 정기휴가 미사용 시(4~6개월) : 12일 (연차 공제 6일)");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_73","15","sta01_72:-7","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("54");
            obj.set_text("   - 정기휴가 미사용 시(6개월 이상) : 12일 (연차 공제4일)");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01_74","15","sta01_73:-5","660","29",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("55");
            obj.set_text("● 해외근무 기간이 2년이 경과하지 않은 직원의 경우 귀국 휴가는 본인 연차 신청하여 사용");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divSearch2","divSearch:10","0","640","1830",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_R","0","5","120","18",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("0");
            obj.set_text("시간제 휴가");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("staBackground","0","33","625","95",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta01","15","45","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("2");
            obj.set_text("● 일 최대 3시간까지 시간제 휴가 사용 가능");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta02","15","sta01:-7","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("3");
            obj.set_text("   - 1시간 : 0.125일 / 2시간 : 0.25일 / 3시간 : 0.375일");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta03","15","sta02:-5","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("4");
            obj.set_text("● 4시간을 초과하는 휴가는 오전 반차 또는 오후 반차로 신청");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_R2","0","staBackground:15","120","18",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("5");
            obj.set_text("마이너스 휴가");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("staBackground2","0","sta_TITLE_R2:10","625","95",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta04","15","sta_TITLE_R2:20","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("7");
            obj.set_text("● 해당 연차의 지급연차보다 초과 사용할 경우 신청");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta05","15","sta04:-5","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("8");
            obj.set_text("● 마이너스 5개까지 사용 가능하며, 5개를 초과하는 경우 무급 휴가로 신청");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta06","15","sta05:-5","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("9");
            obj.set_text("● 마이너스 휴가는 익년도 연차 부여 시 또는 퇴직 시 조정(차감)");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_R3","0","staBackground2:15","120","18",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("10");
            obj.set_text("무급 휴가");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("staBackground3","0","sta_TITLE_R3:10","625","70",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta07","15","sta_TITLE_R3:20","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("12");
            obj.set_text("● 해당 연도의 지급연차보다 초과 사용한 경우 신청 (마이너스 5개를 초과하는 경우)");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta08","15","sta07:-5","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("13");
            obj.set_text("● 결재라인 : 소속 부서장 → 경영관리팀장");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_R4","0","staBackground3:15","120","18",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("14");
            obj.set_text("공동 연차");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("staBackground4","0","sta_TITLE_R4:10","625","115",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta09","15","sta_TITLE_R4:20","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("16");
            obj.set_text("● 연간 공동휴무일 지정/운영");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta10","15","sta09:-5","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("17");
            obj.set_text("● 별도의 신청 없이 자동으로 연차 사용됨");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta11","15","sta10:-5","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("18");
            obj.set_text("● 공동휴무일에 출근을 해야하는 경우, 사전 신청 시 휴무일 미적용 가능");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta12","15","sta11:-7","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("19");
            obj.set_text("   - 2023년 공동 휴무일 : 1/20(금), 1/25(수), 10/2(월), 12/29(금)");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_R5","0","staBackground4:15","120","18",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("20");
            obj.set_text("대체 휴가");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("staBackground5","0","sta_TITLE_R5:10","625","135",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta13","15","sta_TITLE_R5:20","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("22");
            obj.set_text("● 국가 공휴일 근무 시 대체 휴가 사용 가능");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta14","15","sta13:-5","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("23");
            obj.set_text("● 근무일 이전 대체 휴가 예상일을 지정하여 보직자 결재 必");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta15","15","sta14:-7","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("24");
            obj.set_text("   → 근무일로부터 3개월 내에 사용");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta16","15","sta15:-5","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("25");
            obj.set_text("● 주말 근무는 대체 휴가 지급 의무는 없으나, 보직자 권한으로 지급 가능");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta17","15","sta16:-7","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("26");
            obj.set_text("   (단, 주 52시간 초과하여 근무 불가)");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_R6","0","staBackground5:15","120","18",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("27");
            obj.set_text("경조 휴가");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("staBackground6","0","sta_TITLE_R6:10","625","690",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta18","15","sta_TITLE_R6:20","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("29");
            obj.set_text("● 경조 휴가 상세 내용");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Div("divData2","30","sta18:-8","600","485",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("30");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta01_1","0","10","150","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("1");
            obj.set_text("구분");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            obj.set_border("2px solid #4D9CDD,1px solid #e4e4e4,1px solid #e4e4e4");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_2","0","sta01_1:-1","150","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("2");
            obj.set_text("본인 결혼");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_3","0","sta01_2:-1","150","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("3");
            obj.set_text("자녀 결혼");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_4","0","sta01_3:-1","150","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("4");
            obj.set_text("형제, 자매 결혼\r\n(본인/배우자)");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_5","0","sta01_4:-1","150","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("5");
            obj.set_text("부모수연(배우자)");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_6","0","sta01_5:-1","150","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("6");
            obj.set_text("배우자 출산");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_7","0","sta01_6:-1","150","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("7");
            obj.set_text("배우자 조위");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_8","0","sta01_7:-1","150","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("8");
            obj.set_text("형제/자매/자녀 조위");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_9","0","sta01_8:-1","150","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("9");
            obj.set_text("부모 조위");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_10","0","sta01_9:-1","150","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("10");
            obj.set_text("(외)조부모 조위");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_11","0","sta01_10:-1","150","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("11");
            obj.set_text("조부모 승중상");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_12","0","sta01_11:-1","150","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("12");
            obj.set_text("배우자 부모 조위");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_13","0","sta01_12:-1","150","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("13");
            obj.set_text("배우자 탈상");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_14","0","sta01_13:-1","150","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("14");
            obj.set_text("부모 탈상(배우자)");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_15","0","sta01_14:-1","150","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("15");
            obj.set_text("조부모 승중 탈상");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_16","0","sta01_15:-1","150","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("16");
            obj.set_text("원격지 휴가");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_17","sta01_1:-1","10","90","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("17");
            obj.set_text("일수");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            obj.set_border("2px solid #4D9CDD,1px solid #e4e4e4,1px solid #e4e4e4");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_18","sta01_2:-1","sta01_17:-1","90","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("18");
            obj.set_text("10");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_19","sta01_3:-1","sta01_18:-1","90","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("19");
            obj.set_text("1");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_20","sta01_4:-1","sta01_19:-1","90","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("20");
            obj.set_text("1");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_21","sta01_5:-1","sta01_20:-1","90","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("21");
            obj.set_text("1");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_22","sta01_6:-1","sta01_21:-1","90","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("22");
            obj.set_text("20");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_23","sta01_7:-1","sta01_22:-1","90","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("23");
            obj.set_text("5");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_24","sta01_8:-1","sta01_23:-1","90","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("24");
            obj.set_text("3");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_25","sta01_9:-1","sta01_24:-1","90","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("25");
            obj.set_text("5");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_26","sta01_10:-1","sta01_25:-1","90","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("26");
            obj.set_text("3");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_27","sta01_11:-1","sta01_26:-1","90","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("27");
            obj.set_text("3");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_28","sta01_12:-1","sta01_27:-1","90","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("28");
            obj.set_text("5");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_29","sta01_13:-1","sta01_28:-1","90","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("29");
            obj.set_text("1");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_30","sta01_14:-1","sta01_29:-1","90","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("30");
            obj.set_text("1");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_31","sta01_15:-1","sta01_30:-1","90","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("31");
            obj.set_text("1");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_32","sta01_16:-1","sta01_31:-1","90","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("32");
            obj.set_text("2");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebgC");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_33","sta01_17:-1","10","250","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("33");
            obj.set_text("증빙서류");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablelabelC");
            obj.set_border("2px solid #4D9CDD,1px solid #e4e4e4,1px solid #e4e4e4");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_34","sta01_18:-1","sta01_33:-1","250","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("34");
            obj.set_text("청첩장 또는 혼인관계증명서");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_35","sta01_19:-1","sta01_34:-1","250","59",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("35");
            obj.set_text("청첩장, 가족관계증명서(등본)");
            obj.getSetter("rowspan").set("2");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_36","sta01_21:-1","sta01_35:-1","250","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("36");
            obj.set_text("가족관계증명서");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_37","sta01_22:-1","sta01_36:-1","250","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("37");
            obj.set_text("출생증명서 또는 가족관계증명서(등본)");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_38","sta01_23:-1","sta01_37:-1","250","59",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("38");
            obj.set_text("사망진단서, 가족관계증명서(등본)");
            obj.getSetter("rowspan").set("2");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_39","sta01_25:-1","sta01_38:-1","250","117",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("39");
            obj.set_text("사망진단서 또는 경조게시판\r\n또는 가족관계증명서(등본)");
            obj.getSetter("rowspan").set("4");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_40","sta01_29:-1","sta01_39:-1","250","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("40");
            obj.set_text("-");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_41","sta01_30:-1","sta01_40:-1","250","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("41");
            obj.set_text("-");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_42","sta01_31:-1","sta01_41:-1","250","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("42");
            obj.set_text("-");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta01_43","sta01_32:-1","sta01_42:-1","250","30",null,null,null,null,null,null,this.divSearch2.form.divData2.form);
            obj.set_taborder("43");
            obj.set_text("등록기준지 확인 가능한 등본 추가");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_cssclass("sta_WF_tablebg");
            this.divSearch2.form.divData2.addChild(obj.name, obj);

            obj = new Static("sta19","15","divData2:-5","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("31");
            obj.set_text("     1) 경조휴가는 발생일 사용 기준 원칙(추후 사용 불가/ 미사용 시 소멸)");
            obj.set_font("normal 8pt/normal \"Malgun Gothic\"");
            obj.set_verticalAlign("middle");
            obj.set_color("red");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta20","15","sta19:-10","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("32");
            obj.set_text("     2) 배우자 출산휴가 일수는 법적 기준에 따라 working day 기준임");
            obj.set_font("normal 8pt/normal \"Malgun Gothic\"");
            obj.getSetter("erticalAlign").set("middle");
            obj.set_color("red");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta21","15","sta20:-10","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("33");
            obj.set_text("     3) 경조휴가 상신 시‘비고’란에 세부 내용 기재");
            obj.set_font("normal 8pt/normal \"Malgun Gothic\"");
            obj.set_verticalAlign("middle");
            obj.set_color("red");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta22","15","sta21:-5","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("34");
            obj.set_text("● 추가 안내");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta23","15","sta22:-8","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("35");
            obj.set_text("   - 본인결혼 : 경조 발생일로부터 10일 사용 가능 (단, 원격지 적용 불가)");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta24","15","sta23:-8","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("36");
            obj.set_text("   - 수연 : 사유 발생 연도 내 사용 가능, 경과한 경우 청구권 소멸");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta25","15","sta24:-8","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("37");
            obj.set_text("     ※ 주민등록상 생년 기준(1963년생 → 2023년 내 사용 가능)");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta26","15","sta25:-8","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("38");
            obj.set_text("     ※ 원격지의 경우 부모님 등록기준지가 포함된 등본 첨부");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_R7","0","staBackground6:15","120","18",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("39");
            obj.set_text("장기 근속 휴가");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("staBackground7","0","sta_TITLE_R7:10","625","175",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta27","15","sta_TITLE_R7:20","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("41");
            obj.set_text("● 장기근속 25주년 : 8일");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta28","15","sta27:-5","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("42");
            obj.set_text("● 장기근속 20주년 : 6일");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta29","15","sta28:-3","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("43");
            obj.set_text("<유의사항>");
            obj.set_cssclass("");
            obj.set_verticalAlign("middle");
            obj.set_font("bold 12px/normal \"Malgun Gothic\"");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta30","15","sta29:-5","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("44");
            obj.set_text("  - 여행포인트로 예약한 여행기간에 한하여 포상휴가 신청 가능(증빙 필수)");
            obj.set_cssclass("");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta31","15","sta30:-10","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("45");
            obj.set_text("  - 최대 3회 분할 사용 가능(부여한 포상휴가 일수 내 최대 3회까지 분할하여 휴가 신청 가능)");
            obj.set_cssclass("");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta32","15","sta31:-10","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("46");
            obj.set_text("  - 해외 휴가자는 정기휴가 기간 내 사용 원칙");
            obj.set_cssclass("");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta33","15","sta32:-10","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("47");
            obj.set_text("  - 본사 근무일 기준 (휴가 일수는 본사 근무일 기준으로 기산)");
            obj.set_cssclass("");
            obj.set_verticalAlign("middle");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta_TITLE_R8","0","staBackground7:15","120","18",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("48");
            obj.set_text("가족 돌봄 휴가");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("staBackground8","0","sta_TITLE_R8:10","625","115",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("49");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta34","15","sta_TITLE_R8:20","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("50");
            obj.set_text("● 연간 10일 한도(무급 휴가)");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta35","15","sta34:-7","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("51");
            obj.set_text("   → 일 단위로 나눠 사용 가능");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta36","15","sta35:-5","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("51");
            obj.set_text("● 가족의 질병, 사고, 노령 또는 자녀의 양육으로 인하여 긴급하게 그 가족을 돌보기 위한 경우 사용 가능");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Static("sta37","15","sta36:-5","600","29",null,null,null,null,null,null,this.divSearch2.form);
            obj.set_taborder("51");
            obj.set_text("● 가족돌봄휴가 기간은 가족돌봄휴직 기간에 포함됨");
            obj.set_cssclass("");
            obj.set_font("normal 8.5pt/normal \"Malgun Gothic\"");
            obj.set_color("black");
            obj.set_verticalAlign("middle");
            this.divSearch2.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10","1300","27",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","0","0","1300","27",null,null,null,null,null,null,this.divData.form);
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","620","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.divData.form.divBtns.addChild(obj.name, obj);
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
        this.registerScript("DAC_VACATION_RULE_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e) {
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
        	this.fnInit();
        }

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

        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        }

        /************************************************************************
         * 콤보 데이터 조회 및 설정
         ************************************************************************/
        this.fnSetCombo = function() {

        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         * 조회 버튼
         */
        this.fnSelect = function() {

        }

        /*
         * 추가 버튼
         */
        this.fnAdd = function() {

        }

        /*
         * 삭제 버튼
         */
        this.fnDel = function() {

        }

        /*
         * 저장 버튼
         */
        this.fnSave = function() {

        }

        /*
         * 엑셀 버튼
         */
        this.fnExcel = function() {

        }

        /*
         * 출력 버튼
         */
        this.fnPrint = function() {

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValid = function() {
        	return true;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 확인버튼
        this.btnOK_onclick = function(obj, e) {
        	this.getParentContext().close(false);
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	if (svcID == "select") {

        	} else if (svcID == "save") {

        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {

        }

        this.fnGridAfterEdit = function(obj,e) {

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 함수
         ************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
        };
        this.loadIncludeScript("DAC_VACATION_RULE_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
