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
            this.set_titletext("유가증권 약정 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1430,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFEPR_YUGAREG_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DFEPR_YUGAREG_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DFEPR_YUGAREG_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DFEPR_YUGAREG_DELETE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo2</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo3</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo4</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo5</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo6</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo7</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo8</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo9</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo10</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"SP\">DFEPR_YUGAPLAN_CREATE</Col><Col id=\"TARGET\">e_create</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_YUGA\" type=\"STRING\" size=\"256\"/><Column id=\"NO_YUGA\" type=\"STRING\" size=\"256\"/><Column id=\"YN_CLOSE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_PLAN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">Y</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_DAMBO", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">Y</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_CLOSE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_CLOSE2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EZA", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SUNHOO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EZACAL", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_YANGDAN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_DANBOK", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_CURRENCY", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SANG", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CMS", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_JANGDAN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">Y</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_TERM", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("완료여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_CLOSE","sta03:0.0","sta03:10.0","91","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_CLOSE");
            obj.set_text("진행중");
            obj.set_value("N");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","sta04:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_YUGA","cfCD_CORP:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","cfCD_YUGA:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("유가증권");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfNO_YUGA","0.0","sta03:10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","cfNO_YUGA:0.0","sta03:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("관리번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","70",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","21.88%","0","5",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("23");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta11","74","28",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta03","74","57",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta05","318","28","83","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("27");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP2","406","33","240","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta06","74","86",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta28","0","167",null,"22","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("31");
            obj.set_text("이자수취조건");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta29","651","28","108","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("32");
            obj.set_text("종류");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta33","74","194",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta34","248","194","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("34");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta36","498","194","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("35");
            obj.set_text("이율(%)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta45","0","310",null,"22","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("37");
            obj.set_text("진행정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta01","0","28","85","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("24");
            obj.set_text("관리번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtNO_YUGA","91","33","222","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_maxlength("20");
            obj.set_enable("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta21","651","57","108","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("29");
            obj.set_text("매입기관");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta26","651","86","108","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("30");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta10","0","57","85","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("38");
            obj.set_text("매입일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta12","0","86","85","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("39");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskRT_EZA","599","199","125","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("13");
            obj.set_format("###,##0.####");
            obj.set_limitbymask("integer");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta07","94","339",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta08","0","339","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("41");
            obj.set_text("액면가액");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta09","302","339","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("42");
            obj.set_text("취득수량");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta38","594","339","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("43");
            obj.set_text("매입금액");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta04","318","57","83","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("44");
            obj.set_text("장단기/대체");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("cfCD_YUGA2","765","33","251","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("cfCD_VENDOR","765","62","251","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("cfCD_DEPT_ACNT","91","91","222","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("calDT_START","765","91","115","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staCD_TILDE01","886","91","10","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("45");
            obj.set_text("~");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("calDT_END","902","91","115","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta15","318","86","83","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("46");
            obj.set_text("보관처");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("cfCD_REPOSIT","406","91","240","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_EZA","349","199","125","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("12");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_EZA");
            obj.set_text("LOAN");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta16","74","223",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta17","248","223","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("49");
            obj.set_text("주기(개월)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskTR_INTTERM","349","228","125","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("15");
            obj.set_format("#0");
            obj.set_limitbymask("integer");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("calDT_BUY","91","62","115","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta13","74","115",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("54");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta02","0","115","85","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("53");
            obj.set_text("대체계좌");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("cfNO_ACCOUNT","91","120","222","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("div00","0","396",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("55");
            obj.set_text("div00");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta41","94","30",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta42","0","30","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("1");
            obj.set_text("평가금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta44","302","30","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("계획생성");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta49","594","30","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("3");
            obj.set_text("완료여부");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta52","0","82",null,"22","490",null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("4");
            obj.set_text("담보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta53","74","111",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta55","538","111","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("6");
            obj.set_text("금액");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta56","74","140",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta59","0","111","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("8");
            obj.set_text("여부");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta61","800","111","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("9");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta64","0","140","115",null,null,"0",null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("비고");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new TextArea("TeaRM_BIGO","121","147",null,null,"6","7",null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("19");
            obj.set_maxlength("200");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Edit("txtDS_DAMBO","921","116","135","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("17");
            obj.set_maxlength("100");
            obj.set_enable("true");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Combo("cboYN_PLAN","423","35","165","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("11");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_enable("false");
            obj.set_innerdataset("");
            obj.set_text("");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Combo("cboYN_CLOSE2","715","35","165","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("12");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_CLOSE2");
            obj.set_text("");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_DAMBO","659","116","135","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("15");
            obj.set_format("#,###,###,###,###,###,##0");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_EST","121","35","175","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("16");
            obj.set_format("#,###,###,##0");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Combo("cboYN_DAMBO","121","116","145","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("13");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_DAMBO");
            obj.set_text("");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta00","274","111","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("18");
            obj.set_text("수량");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new MaskEdit("mskQN_DAMBO","395","116","135","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.div00.form);
            obj.set_taborder("14");
            obj.set_format("#,###,###,###,###,###,##0");
            this.divData.form.divDataRight.form.div00.addChild(obj.name, obj);

            obj = new Static("sta907","94","368",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("56");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta901","594","368","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("57");
            obj.set_text("원화금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta908","94","397",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("58");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta904","0","397","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("59");
            obj.set_text("수리신고번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta902","0","368","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("60");
            obj.set_text("화폐단위");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta903","302","368","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("61");
            obj.set_text("환율");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta905","302","397","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("62");
            obj.set_text("사후신고마감일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta906","594","397","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("63");
            obj.set_text("사후신고일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_KOR","715","373","165","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("64");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboCD_CURRENCY","121","373","175","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("65");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_CURRENCY");
            obj.set_text("LOAN");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskRT_CURRENCY","423","373","165","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("66");
            obj.set_format("##,###,###,###,###,##0.##");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtNO_AFTER","121","402","175","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("67");
            obj.set_maxlength("100");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("calDT_AFTER1","423","402","165","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("68");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("calDT_AFTER2","715","402","165","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("69");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta14","74","252",null,"30","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("70");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta18","0","252","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("50");
            obj.set_text("기준");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staChitPubPnt02","248","252","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("51");
            obj.set_text("계산방식");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staChitPubPnt03","498","252","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("52");
            obj.set_text("일수계산");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_SUNHOO","101","257","125","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("17");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_SUNHOO");
            obj.set_text("LOAN");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_EZACAL","349","257","125","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("18");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_EZACAL");
            obj.set_text("LOAN");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_YANGDAN","599","257","125","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("19");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_YANGDAN");
            obj.set_text("LOAN");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staChitPubPnt","0","223","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("36");
            obj.set_text("방식");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_DANBOK","101","228","125","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("14");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_DANBOK");
            obj.set_text("LOAN");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staChitPubPnt01","498","223","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("47");
            obj.set_text("수취일");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskTR_EZASTD","599","228","125","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("16");
            obj.set_format("#0");
            obj.set_limitbymask("integer");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta19","0","194","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("71");
            obj.set_text("방법");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_SANG","101","199","125","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("11");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_SANG");
            obj.set_text("LOAN");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_FACE","121","344","175","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_format("#,###,###,###,###,###,##0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskQN_BUY","423","344","165","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("21");
            obj.set_format("#,###,###,##0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_BUY","715","344","165","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("22");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_autoselect("false");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta20","318","115","83","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("72");
            obj.set_text("유가증권명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_CMS","765","120","85","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("73");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_CMS");
            obj.set_text("LOAN");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta22","651","115","108","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("74");
            obj.set_text("브렌치전송/계좌");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("cfNO_ACCOUNT_TRAN","853","120","230","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("75");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtNM_YUGA","406","120","240","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("4");
            obj.set_maxlength("50");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_TERM","406","62","110","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("76");
            obj.set_innerdataset("dsTY_TERM");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("");
            obj.set_value("A");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboYN_JANGDAN","523","62","123","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("77");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("dsYN_JANGDAN");
            obj.set_text("Y");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divDataLeft.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cfCD_YUGA.form.CDTextBox","value","dsSearch","CD_YUGA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cfNO_YUGA.form.CDTextBox","value","dsSearch","NO_YUGA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboYN_CLOSE","value","dsSearch","YN_CLOSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataRight.form.txtNO_YUGA","value","dsList","NO_YUGA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataRight.form.ccfCD_CORP2.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataRight.form.ccfCD_CORP2.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataRight.form.cfCD_YUGA2.form.CDTextBox","value","dsList","CD_YUGA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataRight.form.cfCD_YUGA2.form.DSTextBox","value","dsList","DS_YUGA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataRight.form.txtNM_YUGA","value","dsList","NM_YUGA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataRight.form.calDT_BUY","value","dsList","DT_BUY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataRight.form.cfCD_VENDOR.form.CDTextBox","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataRight.form.cfCD_VENDOR.form.DSTextBox","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataRight.form.cfCD_DEPT_ACNT.form.CDTextBox","value","dsList","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataRight.form.cfCD_DEPT_ACNT.form.DSTextBox","value","dsList","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataRight.form.cfCD_REPOSIT.form.CDTextBox","value","dsList","CD_REPOSIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataRight.form.cfCD_REPOSIT.form.DSTextBox","value","dsList","DS_REPOSIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataRight.form.calDT_START","value","dsList","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataRight.form.calDT_END","value","dsList","DT_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataRight.form.cboTY_EZA","value","dsList","TY_EZA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataRight.form.mskRT_EZA","value","dsList","RT_EZA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataRight.form.cboTY_DANBOK","value","dsList","TY_DANBOK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataRight.form.mskTR_EZASTD","value","dsList","TR_EZASTD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataRight.form.mskTR_INTTERM","value","dsList","TR_INTTERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataRight.form.cboTY_SUNHOO","value","dsList","TY_SUNHOO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDataRight.form.cboTY_EZACAL","value","dsList","TY_EZACAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divDataRight.form.cboTY_YANGDAN","value","dsList","TY_YANGDAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divDataRight.form.mskAM_FACE","value","dsList","AM_FACE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divDataRight.form.mskQN_BUY","value","dsList","QN_BUY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divDataRight.form.mskAM_BUY","value","dsList","AM_BUY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.divDataRight.form.cfNO_ACCOUNT.form.CDTextBox","value","dsList","NO_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.divDataRight.form.cfNO_ACCOUNT.form.DSTextBox","value","dsList","DS_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divDataRight.form.div00.form.mskAM_LOANMAX","value","dsList","AM_LOANMAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divDataRight.form.div00.form.TeaRM_BIGO","value","dsList","RM_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divDataRight.form.div00.form.txtDS_DAMBO","value","dsList","DS_DAMBO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.divDataRight.form.div00.form.cboYN_PLAN","value","dsList","YN_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.divDataRight.form.div00.form.cboYN_CLOSE2","value","dsList","YN_CLOSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.divDataRight.form.div00.form.mskAM_DAMBO","value","dsList","AM_DAMBO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.divDataRight.form.div00.form.mskAM_EST","value","dsList","AM_ASSESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.divDataRight.form.div00.form.cboYN_DAMBO","value","dsList","YN_DAMBO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.divDataRight.form.mskAM_KOR","value","dsList","AM_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.divDataRight.form.cboCD_CURRENCY","value","dsList","CD_CURRENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.divDataRight.form.mskRT_CURRENCY","value","dsList","RT_CURRENCY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.divDataRight.form.txtNO_AFTER","value","dsList","NO_AFTER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.divDataRight.form.calDT_AFTER1","value","dsList","DT_AFTER1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.divDataRight.form.calDT_AFTER2","value","dsList","DT_AFTER2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.divDataRight.form.div00.form.mskQN_DAMBO","value","dsList","QN_DAMBO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.divDataRight.form.cboTY_SANG","value","dsList","TY_SANG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.divDataRight.form.cboTY_CMS","value","dsList","TY_CMS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData.form.divDataRight.form.cfNO_ACCOUNT_TRAN.form.CDTextBox","value","dsList","NO_ACCOUNT_TRAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData.form.divDataRight.form.cfNO_ACCOUNT_TRAN.form.DSTextBox","value","dsList","DS_BANK_TRAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divData.form.divDataRight.form.cboTY_TERM","value","dsList","TY_TERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.divDataRight.form.cboYN_JANGDAN","value","dsList","YN_JANGDAN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFE_YUGA_REGISTRATION.xfdl", function() {
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

        	if ( !this.gfnIsNull(this.getOwnerFrame().CD_CORP) ) {
        		this.dsSearch.set_enableevent(false);

        		this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);	// 법인코드
        		this.cfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);	// 법인명
        		this.dsSearch.setColumn(0, "NO_YUGA", this.getOwnerFrame().NO_YUGA);	// 관리번호
        		this.cfNO_YUGA.form.DSTextBox.set_value(this.getOwnerFrame().NM_YUGA);	// 관리명칭

        		this.dsSearch.set_enableevent(true);

        		this.FormBtns.Select.click();
        	}

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
        this.fnSetExtendButton = function() {
        	 this.btnPlanCreat = this.gfnFormButtonAdd("btnPlanCreat", "fnPlanCreat", "계획생성");
        	 this.btnPlanPerform = this.gfnFormButtonAdd("btnPlanPerform", "fnPlanPerform", "계획/실적");
        	 this.btnFileUpload = this.gfnFormButtonAdd("btnFileUpload", "fnFileUpload", " 첨부파일 ");
        	 //this.btnYugaEval = this.gfnFormButtonAdd("btnYugaEval", "fnYugaEval", "유가증권평가");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	// 조회조건
        	this.cfCD_CORP  = this.divSearch.form.cfCD_CORP;				// 법인코드
        	this.cfCD_YUGA = this.divSearch.form.cfCD_YUGA;					// 유가종류
        	this.cfNO_YUGA = this.divSearch.form.cfNO_YUGA;					// 관리번호
        	this.cboYN_CLOSE = this.divSearch.form.cboYN_CLOSE;				// 완료여부

        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;		// 그리드
        	this.grSearch = this.FormInfo.GR_SEARCH;						// 권한?
        	this.cdGroup = this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP;						// 그룹코드

        	// 기본정보
        	this.txtNO_YUGA = this.divData.form.divDataRight.form.txtNO_YUGA;				// 관리번호
        	this.ccfCD_CORP2 = this.divData.form.divDataRight.form.ccfCD_CORP2;				// 법인코드
        	this.cfCD_YUGA2 = this.divData.form.divDataRight.form.cfCD_YUGA2;				// 종류
        	this.txtNM_YUGA = this.divData.form.divDataRight.form.txtNM_YUGA;				// 유가증권명
        	this.calDT_BUY = this.divData.form.divDataRight.form.calDT_BUY;					// 매입일자
        	this.cfCD_VENDOR = this.divData.form.divDataRight.form.cfCD_VENDOR;				// 금융기관
        	this.cfCD_DEPT_ACNT = this.divData.form.divDataRight.form.cfCD_DEPT_ACNT;		// 귀속부서
        	this.cfCD_REPOSIT = this.divData.form.divDataRight.form.cfCD_REPOSIT; 			// 보관처
        	this.calDT_START = this.divData.form.divDataRight.form.calDT_START; 			// 가입기간(FROM)
        	this.calDT_END = this.divData.form.divDataRight.form.calDT_END; 				// 가입기간(TO)
        	this.cfNO_ACCOUNT = this.divData.form.divDataRight.form.cfNO_ACCOUNT; 			// 계좌
        	this.cboTY_CMS = this.divData.form.divDataRight.form.cboTY_CMS; 				// 브랜치전송
        	this.cfNO_ACCOUNT_TRAN = this.divData.form.divDataRight.form.cfNO_ACCOUNT_TRAN;	// 전송계좌

        	// 이자수취조건
        	this.cboTY_SANG = this.divData.form.divDataRight.form.cboTY_SANG;				// 방법
        	this.cboTY_EZA = this.divData.form.divDataRight.form.cboTY_EZA;					// 유형
        	this.mskRT_EZA = this.divData.form.divDataRight.form.mskRT_EZA;					// 이율(%)
        	this.cboTY_DANBOK = this.divData.form.divDataRight.form.cboTY_DANBOK;			// 방식
        	this.mskTR_EZASTD = this.divData.form.divDataRight.form.mskTR_EZASTD;			// 수취일
        	this.mskTR_INTTERM = this.divData.form.divDataRight.form.mskTR_INTTERM;			// 주기(개월)
        	this.cboTY_SUNHOO = this.divData.form.divDataRight.form.cboTY_SUNHOO;			// 기준
        	this.cboTY_EZACAL = this.divData.form.divDataRight.form.cboTY_EZACAL;			// 계산방식
        	this.cboTY_YANGDAN = this.divData.form.divDataRight.form.cboTY_YANGDAN;			// 일수계산

        	// 진행정보
        	this.mskAM_FACE = this.divData.form.divDataRight.form.mskAM_FACE;				// 액면가액
        	this.mskQN_BUY = this.divData.form.divDataRight.form.mskQN_BUY;					// 취득수량
        	this.mskAM_BUY = this.divData.form.divDataRight.form.mskAM_BUY;					// 매입금액
        	this.mskAM_EST = this.divData.form.divDataRight.form.div00.form.mskAM_EST;				// 평가금액
        	this.cboYN_PLAN = this.divData.form.divDataRight.form.div00.form.cboYN_PLAN;			// 계획생성
        	this.cboYN_CLOSE2 = this.divData.form.divDataRight.form.div00.form.cboYN_CLOSE2;		// 완료여부

        	// 담보
        	this.cboYN_DAMBO = this.divData.form.divDataRight.form.div00.form.cboYN_DAMBO;			// 여부
        	this.mskAM_DAMBO = this.divData.form.divDataRight.form.div00.form.mskAM_DAMBO;			// 금액
        	this.txtDS_DAMBO = this.divData.form.divDataRight.form.div00.form.txtDS_DAMBO;			// 내용
        	this.TeaRM_BIGO = this.divData.form.divDataRight.form.div00.form.TeaRM_BIGO;			// 비고

        	this.cboCD_CURRENCY = this.divData.form.divDataRight.form.cboCD_CURRENCY;	// 화폐단위
        	this.mskRT_CURRENCY = this.divData.form.divDataRight.form.mskRT_CURRENCY;	// 환율
        	this.mskAM_KOR = this.divData.form.divDataRight.form.mskAM_KOR;				// 원화금액
        	this.txtNO_AFTER = this.divData.form.divDataRight.form.txtNO_AFTER;			// 신고수리번호
        	this.calDT_AFTER1 = this.divData.form.divDataRight.form.calDT_AFTER1;		// 사후신고마감일
        	this.calDT_AFTER2 = this.divData.form.divDataRight.form.calDT_AFTER2;		// 사후신고일
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cfCD_CORP.CodeFindName = "DZX_CFCORP";					// 법인코드(조회조건)
        	this.cfCD_YUGA.CodeFindName = "DFX_CFYUGAKIND";				// 유가증권(조회조건)
        	this.cfNO_YUGA.CodeFindName = "DFX_CFNO_YUGA";				// 관리번호(조회조건)

        	this.ccfCD_CORP2.CodeFindName = "DZX_CFCORP"; 				// 법인코드
        	this.cfCD_YUGA2.CodeFindName = "DFX_CFYUGAKIND";			// 종류
        	this.cfCD_VENDOR.CodeFindName = "DFX_CFVENDOR";				// 매입기관
        	this.cfCD_DEPT_ACNT.CodeFindName = "DFX_CFACNTUNIT";		// 귀속부서
        	this.cfCD_REPOSIT.CodeFindName = "DFX_CFVENDOR";			// 보관처
        	this.cfNO_ACCOUNT.CodeFindName = "DFX_CFACCOUNTNO_SUJI";	// 계좌
        	this.cfNO_ACCOUNT_TRAN.CodeFindName = "DFX_CFACCOUNTMATCH";	// 전송계좌

        	this.cfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_YUGA.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_YUGA.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_CORP2.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_YUGA2.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_REPOSIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_ACCOUNT_TRAN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.cfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_YUGA.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfNO_YUGA.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_CORP2.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_YUGA2.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_VENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_DEPT_ACNT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_REPOSIT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfNO_ACCOUNT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfNO_ACCOUNT_TRAN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFE_YUGAREG");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        // 	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        // 	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	if (this.gfnIsNull(this.cfCD_CORP.form.CDTextBox.value)) {
        		this.cfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.cfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}


        	// 법인코드 포커스추가
        	this.cfCD_CORP.form.CDTextBox.setFocus();

        	// 권한체크 - 해당부서내역만 조회가능
        	if (nexacro.toNumber(this.grSearch) >= 2) {
        		this.cfCD_CORP.set_enable(false);
        	}

        	this.fnVisibleComp(false);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_YUGA", "string");
        	this.dsSelect.addColumn("NO_YUGA", "string");
        	this.dsSelect.addColumn("YN_CLOSE", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("CD_YUGA", "string");
        	this.dsInsert.addColumn("NM_YUGA", "string");
        	this.dsInsert.addColumn("DT_BUY", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("CD_DEPT_ACNT", "string");
        	this.dsInsert.addColumn("CD_REPOSIT", "string");
        	this.dsInsert.addColumn("DT_START", "string");
        	this.dsInsert.addColumn("DT_END", "string");
        	this.dsInsert.addColumn("TY_SANG", "string");
        	this.dsInsert.addColumn("TY_EZA", "string");
        	this.dsInsert.addColumn("RT_EZA", "bigdecimal");
        	this.dsInsert.addColumn("TY_DANBOK", "string");
        	this.dsInsert.addColumn("TR_EZASTD", "bigdecimal");
        	this.dsInsert.addColumn("TR_INTTERM", "bigdecimal");
        	this.dsInsert.addColumn("TY_SUNHOO", "string");
        	this.dsInsert.addColumn("TY_EZACAL", "string");
        	this.dsInsert.addColumn("TY_YANGDAN", "string");
        	this.dsInsert.addColumn("AM_FACE", "bigdecimal");
        	this.dsInsert.addColumn("QN_BUY", "bigdecimal");
        	this.dsInsert.addColumn("AM_BUY", "bigdecimal");
        	this.dsInsert.addColumn("YN_CLOSE", "string");
        	this.dsInsert.addColumn("YN_DAMBO", "string");
        	this.dsInsert.addColumn("AM_DAMBO", "bigdecimal");
        	this.dsInsert.addColumn("DS_DAMBO", "string");
        	this.dsInsert.addColumn("NO_ACCOUNT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("CD_BANK", "string");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("CD_CURRENCY", "string");
        	this.dsInsert.addColumn("RT_CURRENCY", "bigdecimal");
        	this.dsInsert.addColumn("NO_AFTER", "string");
        	this.dsInsert.addColumn("DT_AFTER1", "string");
        	this.dsInsert.addColumn("DT_AFTER2", "string");
        	this.dsInsert.addColumn("QN_DAMBO", "bigdecimal");
        	this.dsInsert.addColumn("TY_CMS", "string");
        	this.dsInsert.addColumn("NO_ACCOUNT_TRAN", "string");
        	this.dsInsert.addColumn("ID_USER", "string");
        	this.dsInsert.addColumn("TY_TERM", "string");
        	this.dsInsert.addColumn("YN_JANGDAN", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("CD_YUGA", "string");
        	this.dsUpdate.addColumn("NM_YUGA", "string");
        	this.dsUpdate.addColumn("DT_BUY", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("CD_DEPT_ACNT", "string");
        	this.dsUpdate.addColumn("CD_REPOSIT", "string");
        	this.dsUpdate.addColumn("DT_START", "string");
        	this.dsUpdate.addColumn("DT_END", "string");
        	this.dsUpdate.addColumn("TY_SANG", "string");
        	this.dsUpdate.addColumn("TY_EZA", "string");
        	this.dsUpdate.addColumn("RT_EZA", "bigdecimal");
        	this.dsUpdate.addColumn("TY_DANBOK", "string");
        	this.dsUpdate.addColumn("TR_EZASTD", "bigdecimal");
        	this.dsUpdate.addColumn("TR_INTTERM", "bigdecimal");
        	this.dsUpdate.addColumn("TY_SUNHOO", "string");
        	this.dsUpdate.addColumn("TY_EZACAL", "string");
        	this.dsUpdate.addColumn("TY_YANGDAN", "string");
        	this.dsUpdate.addColumn("AM_FACE", "bigdecimal");
        	this.dsUpdate.addColumn("QN_BUY", "bigdecimal");
        	this.dsUpdate.addColumn("AM_BUY", "bigdecimal");
        	this.dsUpdate.addColumn("YN_CLOSE", "string");
        	this.dsUpdate.addColumn("YN_DAMBO", "string");
        	this.dsUpdate.addColumn("AM_DAMBO", "bigdecimal");
        	this.dsUpdate.addColumn("DS_DAMBO", "string");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("NO_ACCOUNT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("CD_BANK", "string");
        	this.dsUpdate.addColumn("CD_CURRENCY", "string");
        	this.dsUpdate.addColumn("RT_CURRENCY", "bigdecimal");
        	this.dsUpdate.addColumn("NO_AFTER", "string");
        	this.dsUpdate.addColumn("DT_AFTER1", "string");
        	this.dsUpdate.addColumn("DT_AFTER2", "string");
        	this.dsUpdate.addColumn("NO_YUGA", "string");
        	this.dsUpdate.addColumn("QN_DAMBO", "bigdecimal");
        	this.dsUpdate.addColumn("TY_CMS", "string");
        	this.dsUpdate.addColumn("NO_ACCOUNT_TRAN", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("TY_TERM", "string");
        	this.dsUpdate.addColumn("YN_JANGDAN", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_YUGA", "string");

        	this.dsExcute = new Dataset();
        	this.dsExcute.addColumn("NO_YUGA", "string");
        	this.dsExcute.addColumn("DT_DATE", "string");
        	this.dsExcute.addColumn("YN_FIRST", "string");
        	this.dsExcute.addColumn("ID_USER", "string");
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
        	//this.fnSelectEnable();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_YUGA", this.dsSearch.getColumn(0, "CD_YUGA"));
        	this.dsSelect.setColumn(0, "NO_YUGA", this.dsSearch.getColumn(0, "NO_YUGA"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YN_CLOSE", this.dsSearch.getColumn(0, "YN_CLOSE"));
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	//trace(this.dsSelect.saveXML());

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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        // 	if(this.dsList.findRow(this.ucFlag, "I") > -1){
        // 		this.gfnAlert("신규 추가된 데이터가 이미 있습니다.");
        // 		return;
        // 	}

        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.set_enableevent(false);

        	this.dsList.setColumn(nrow, "CD_CORP", this.cfCD_CORP.form.CDTextBox.value);
        	this.dsList.setColumn(nrow, "DS_CORP", this.cfCD_CORP.form.DSTextBox.value);
        	this.dsList.setColumn(nrow, "TY_CMS", "오프라인");


        	//this.dsList.setColumn(nrow, "CD_YUGA", this.dsList.getColumn(i, "CD_YUGA"));
        	//this.dsList.setColumn(nrow, "NM_YUGA", this.dsList.getColumn(i, "NM_YUGA"));
        	//this.dsList.setColumn(nrow, "DT_BUY", this.dsList.getColumn(i, "DT_BUY"));
        	//this.dsList.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        	//this.dsList.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));
        	//this.dsList.setColumn(nrow, "CD_REPOSIT", this.dsList.getColumn(i, "CD_REPOSIT"));
        	//this.dsList.setColumn(nrow, "DT_START", this.dsList.getColumn(i, "DT_START"));
        	//this.dsList.setColumn(nrow, "DT_END", this.dsList.getColumn(i, "DT_END"));
        	this.dsList.setColumn(nrow, "TY_SANG", "만기");			// 방법
        	this.dsList.setColumn(nrow, "TY_EZA", "고정");			// 유형
        	this.dsList.setColumn(nrow, "RT_EZA", 0);				// 이율
        	this.dsList.setColumn(nrow, "TY_DANBOK", "단리");		// 방식
        	this.dsList.setColumn(nrow, "TR_EZASTD", 0);			// 수취일
        	this.dsList.setColumn(nrow, "TR_INTTERM", 0);			// 주기
        	this.dsList.setColumn(nrow, "TY_SUNHOO", "후취");		// 기준
        	this.dsList.setColumn(nrow, "TY_EZACAL", "월수");		// 계산방식
        	this.dsList.setColumn(nrow, "TY_YANGDAN", "말일산입");	// 일수계산
        	this.dsList.setColumn(nrow, "AM_FACE", 0);				// 액면가액
        	this.dsList.setColumn(nrow, "QN_BUY", 0);				// 취득수량
        	this.dsList.setColumn(nrow, "AM_BUY", 0);				// 매입금액
        	this.dsList.setColumn(nrow, "AM_EST", 0);				// 평가금액
        	this.dsList.setColumn(nrow, "YN_PLAN", "N");			// 계획생성
        	this.dsList.setColumn(nrow, "YN_CLOSE", "N");			// 완료여부
        	this.dsList.setColumn(nrow, "YN_DAMBO", "N");			// 여부
        	this.dsList.setColumn(nrow, "AM_DAMBO", 0);				// 금액
        	this.dsList.setColumn(nrow, "QN_DAMBO", 0);				// 수량
        	this.dsList.setColumn(nrow, "TY_TERM", 0);				// 장단기
        	this.dsList.setColumn(nrow, "YN_JANGDAN", "N");				// 대체
        	this.dsList.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	this.dsList.set_enableevent(true);

        	this.dsList.set_rowposition(nrow);
        	this.dxGrid.setCellPos(1);

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
        	//if (!this.gfnGridValidate(this.dxGrid)) return;

        	// 해당펑션은 입력, 수정대상으로 체크하는게 아니라서 사용 어려움...
        	//if (!this.gfnDataValidate(this.dsList, this.dsRequired)) return;
        	if (!this.fnDataValidate()) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsInsert.setColumn(nrow, "CD_YUGA", this.dsList.getColumn(i, "CD_YUGA"));
        				this.dsInsert.setColumn(nrow, "NM_YUGA", this.dsList.getColumn(i, "NM_YUGA"));
        				this.dsInsert.setColumn(nrow, "DT_BUY", this.dsList.getColumn(i, "DT_BUY"));
        				this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsInsert.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));
        				this.dsInsert.setColumn(nrow, "CD_REPOSIT", this.dsList.getColumn(i, "CD_REPOSIT"));
        				this.dsInsert.setColumn(nrow, "DT_START", this.dsList.getColumn(i, "DT_START"));
        				this.dsInsert.setColumn(nrow, "DT_END", this.dsList.getColumn(i, "DT_END"));
        				this.dsInsert.setColumn(nrow, "TY_SANG", this.dsList.getColumn(i, "TY_SANG"));
        				this.dsInsert.setColumn(nrow, "TY_EZA", this.dsList.getColumn(i, "TY_EZA"));
        				this.dsInsert.setColumn(nrow, "RT_EZA", this.dsList.getColumn(i, "RT_EZA"));
        				this.dsInsert.setColumn(nrow, "TY_DANBOK", this.dsList.getColumn(i, "TY_DANBOK"));
        				this.dsInsert.setColumn(nrow, "TR_EZASTD", this.dsList.getColumn(i, "TR_EZASTD"));
        				this.dsInsert.setColumn(nrow, "TR_INTTERM", this.dsList.getColumn(i, "TR_INTTERM"));
        				this.dsInsert.setColumn(nrow, "TY_SUNHOO", this.dsList.getColumn(i, "TY_SUNHOO"));
        				this.dsInsert.setColumn(nrow, "TY_EZACAL", this.dsList.getColumn(i, "TY_EZACAL"));
        				this.dsInsert.setColumn(nrow, "TY_YANGDAN", this.dsList.getColumn(i, "TY_YANGDAN"));
        				this.dsInsert.setColumn(nrow, "AM_FACE", this.dsList.getColumn(i, "AM_FACE"));
        				this.dsInsert.setColumn(nrow, "QN_BUY", this.dsList.getColumn(i, "QN_BUY"));
        				this.dsInsert.setColumn(nrow, "AM_BUY", this.dsList.getColumn(i, "AM_BUY"));
        				this.dsInsert.setColumn(nrow, "YN_CLOSE", this.dsList.getColumn(i, "YN_CLOSE"));
        				this.dsInsert.setColumn(nrow, "YN_DAMBO", this.dsList.getColumn(i, "YN_DAMBO"));
        				this.dsInsert.setColumn(nrow, "AM_DAMBO", this.dsList.getColumn(i, "AM_DAMBO"));
        				this.dsInsert.setColumn(nrow, "DS_DAMBO", this.dsList.getColumn(i, "DS_DAMBO"));
        				this.dsInsert.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        				this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsInsert.setColumn(nrow, "CD_BANK", this.dsList.getColumn(i, "CD_BANK"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "CD_CURRENCY", this.dsList.getColumn(i, "CD_CURRENCY"));
        				this.dsInsert.setColumn(nrow, "RT_CURRENCY", this.dsList.getColumn(i, "RT_CURRENCY"));
        				this.dsInsert.setColumn(nrow, "NO_AFTER", this.dsList.getColumn(i, "NO_AFTER"));
        				this.dsInsert.setColumn(nrow, "DT_AFTER1", this.dsList.getColumn(i, "DT_AFTER1"));
        				this.dsInsert.setColumn(nrow, "DT_AFTER2", this.dsList.getColumn(i, "DT_AFTER2"));
        				this.dsInsert.setColumn(nrow, "QN_DAMBO", this.dsList.getColumn(i, "QN_DAMBO"));
        				this.dsInsert.setColumn(nrow, "TY_CMS", this.dsList.getColumn(i, "TY_CMS"));
        				this.dsInsert.setColumn(nrow, "NO_ACCOUNT_TRAN", this.dsList.getColumn(i, "NO_ACCOUNT_TRAN"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.dsList.getColumn(i, "ID_USER"));
        				this.dsInsert.setColumn(nrow, "TY_TERM", this.dsList.getColumn(i, "TY_TERM"));
        				this.dsInsert.setColumn(nrow, "YN_JANGDAN", this.dsList.getColumn(i, "YN_JANGDAN"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "CD_YUGA", this.dsList.getColumn(i, "CD_YUGA"));
        				this.dsUpdate.setColumn(nrow, "NM_YUGA", this.dsList.getColumn(i, "NM_YUGA"));
        				this.dsUpdate.setColumn(nrow, "DT_BUY", this.dsList.getColumn(i, "DT_BUY"));
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));
        				this.dsUpdate.setColumn(nrow, "CD_REPOSIT", this.dsList.getColumn(i, "CD_REPOSIT"));
        				this.dsUpdate.setColumn(nrow, "DT_START", this.dsList.getColumn(i, "DT_START"));
        				this.dsUpdate.setColumn(nrow, "DT_END", this.dsList.getColumn(i, "DT_END"));
        				this.dsUpdate.setColumn(nrow, "TY_SANG", this.dsList.getColumn(i, "TY_SANG"));
        				this.dsUpdate.setColumn(nrow, "TY_EZA", this.dsList.getColumn(i, "TY_EZA"));
        				this.dsUpdate.setColumn(nrow, "RT_EZA", this.dsList.getColumn(i, "RT_EZA"));
        				this.dsUpdate.setColumn(nrow, "TY_DANBOK", this.dsList.getColumn(i, "TY_DANBOK"));
        				this.dsUpdate.setColumn(nrow, "TR_EZASTD", this.dsList.getColumn(i, "TR_EZASTD"));
        				this.dsUpdate.setColumn(nrow, "TR_INTTERM", this.dsList.getColumn(i, "TR_INTTERM"));
        				this.dsUpdate.setColumn(nrow, "TY_SUNHOO", this.dsList.getColumn(i, "TY_SUNHOO"));
        				this.dsUpdate.setColumn(nrow, "TY_EZACAL", this.dsList.getColumn(i, "TY_EZACAL"));
        				this.dsUpdate.setColumn(nrow, "TY_YANGDAN", this.dsList.getColumn(i, "TY_YANGDAN"));
        				this.dsUpdate.setColumn(nrow, "AM_FACE", this.dsList.getColumn(i, "AM_FACE"));
        				this.dsUpdate.setColumn(nrow, "QN_BUY", this.dsList.getColumn(i, "QN_BUY"));
        				this.dsUpdate.setColumn(nrow, "AM_BUY", this.dsList.getColumn(i, "AM_BUY"));
        				this.dsUpdate.setColumn(nrow, "YN_CLOSE", this.dsList.getColumn(i, "YN_CLOSE"));
        				this.dsUpdate.setColumn(nrow, "YN_DAMBO", this.dsList.getColumn(i, "YN_DAMBO"));
        				this.dsUpdate.setColumn(nrow, "AM_DAMBO", this.dsList.getColumn(i, "AM_DAMBO"));
        				this.dsUpdate.setColumn(nrow, "DS_DAMBO", this.dsList.getColumn(i, "DS_DAMBO"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsUpdate.setColumn(nrow, "CD_BANK", this.dsList.getColumn(i, "CD_BANK"));
        				this.dsUpdate.setColumn(nrow, "CD_CURRENCY", this.dsList.getColumn(i, "CD_CURRENCY"));
        				this.dsUpdate.setColumn(nrow, "RT_CURRENCY", this.dsList.getColumn(i, "RT_CURRENCY"));
        				this.dsUpdate.setColumn(nrow, "NO_AFTER", this.dsList.getColumn(i, "NO_AFTER"));
        				this.dsUpdate.setColumn(nrow, "DT_AFTER1", this.dsList.getColumn(i, "DT_AFTER1"));
        				this.dsUpdate.setColumn(nrow, "DT_AFTER2", this.dsList.getColumn(i, "DT_AFTER2"));
        				this.dsUpdate.setColumn(nrow, "NO_YUGA", this.dsList.getColumn(i, "NO_YUGA"));
        				this.dsUpdate.setColumn(nrow, "QN_DAMBO", this.dsList.getColumn(i, "QN_DAMBO"));
        				this.dsUpdate.setColumn(nrow, "TY_CMS", this.dsList.getColumn(i, "TY_CMS"));
        				this.dsUpdate.setColumn(nrow, "NO_ACCOUNT_TRAN", this.dsList.getColumn(i, "NO_ACCOUNT_TRAN"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "TY_TERM", this.dsList.getColumn(i, "TY_TERM"));
        				this.dsUpdate.setColumn(nrow, "YN_JANGDAN", this.dsList.getColumn(i, "YN_JANGDAN"));
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "NO_YUGA", this.dsList.getColumn(i, "NO_YUGA"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
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

        		// YN_VIEW then Y 보이기
        		if (this.dsList.rowcount > 0 && this.dsList.getColumn(this.dsList.rowposition, "YN_VIEW") == "Y") {
        			this.fnVisibleComp(true);
        		}

        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "combo"){

        		//  조회조건(완료여부)
        		var iRow = this.dsYN_CLOSE.insertRow(0);
        		this.dsYN_CLOSE.setColumn(iRow, "CD_CODE", "");
        		this.dsYN_CLOSE.setColumn(iRow, "DS_CODE", "전체");
        		this.cboYN_CLOSE.set_index(2);

        		// 타화면에서 호출 및 파라미터 존재시 자동 조회
        		if(!this.gfnIsNull(this.getOwnerFrame().NO_YUGA)) {
        			this.divSearch.form.cfNO_YUGA.form.CDTextBox.set_value(this.getOwnerFrame().NO_YUGA);
        			this.divSearch.form.cfNO_YUGA.form.DSTextBox.set_value(this.getOwnerFrame().NM_YUGA);
        			this.divSearch.form.cfCD_YUGA.form.CDTextBox.set_value(this.getOwnerFrame().CD_YUGA);
        			this.divSearch.form.cfCD_YUGA.form.DSTextBox.set_value(this.getOwnerFrame().DS_YUGA);
        			this.cfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        			this.cfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);
        			this.FormBtns.Select.click();
        		}
        	} else if(svcID == "e_create") {
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
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	var cdCorp = this.cfCD_CORP.form.CDTextBox.value;
        	var cdCorp2 = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");

        	switch(id) {

        	// 법인코드(조회조건)
        	case "cfCD_CORP":
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.gfnIsNull(this.cdGroup) ? "" : this.cdGroup);
        		break;

        	// 유가증권(조회조건)
        	case "cfCD_YUGA":
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		break;

        	// 관리번호(조회조건)
        	case "cfNO_YUGA":
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(cdCorp) ? "" : cdCorp);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		break;

        	// 법인코드
        	case "ccfCD_CORP2":
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.gfnIsNull(this.cdGroup) ? "" : this.cdGroup);
        		break;

        	// 유가증권종류
        	case "cfCD_YUGA2":
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		break;

        	// 매입기관
        	case "cfCD_VENDOR":
        		dsUserParam.setColumn(nrow, "TY_VENDOR1", "전체");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(cdCorp2) ? "" : cdCorp2);
        		break;

        	// 귀속부서
        	case "cfCD_DEPT_ACNT":
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.gfnIsNull(this.cdGroup) ? "" : this.cdGroup);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(cdCorp2) ? "" : cdCorp2);
        		break;

        	// 보관처
        	case "cfCD_REPOSIT":
        		dsUserParam.setColumn(nrow, "TY_VENDOR1", "전체");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(cdCorp2) ? "" : cdCorp2);
        		break;

        	// 계좌
        	case "cfNO_ACCOUNT":
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(cdCorp2) ? "" : cdCorp2);
        		break;

        	// 전송계좌
        	case "cfNO_ACCOUNT_TRAN":
        		dsUserParam.setColumn(nrow, "TY_VENDOR", "");
        		dsUserParam.setColumn(nrow, "CD_PAY", this.gfnNvl(this.dsList.getColumn(this.dsList.rowposition,"CD_VENDOR"),""));	// 매입기관
        		dsUserParam.setColumn(nrow, "TY_CASH", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", "");
        		break;

        	default:
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id) {

        	// 법인코드(조회조건)
        	case "cfCD_CORP":
        		break;

        	// 유가증권(조회조건)
        	case "cfCD_YUGA":
        		break;

        	// 관리번호(조회조건)
        	case "cfNO_YUGA":
        		break;

        	// 법인코드
        	case "ccfCD_CORP2":
        		break;

        	// 유가증권종류
        	case "cfCD_YUGA2":
        		// 핸재로우가 입력 상태이고 해외여부(YN_FOREIGN) Y이면 visible 처리
        		if (arr.length > 0 && this.gfnGetFlag(this.dsList, this.dsList.rowposition) == "I") {
        			//trace("YN_FOREIGN :: " + arr[0]["YN_FOREIGN"]);
        			if ( arr[0]["YN_FOREIGN"] == "Y" ) {
        				this.fnVisibleComp(true);
        			} else {
        				this.fnVisibleComp(false);
        			}
        		}
        		break;

        	// 매입기관
        	case "cfCD_VENDOR":
        		break;

        	// 귀속부서
        	case "cfCD_DEPT_ACNT":
        		break;

        	// 보관처
        	case "cfCD_REPOSIT":
        		break;

        	// 계좌
        	case "cfNO_ACCOUNT":
        		if(arr.length > 0) {
        			this.dsList.setColumn(this.dsList.rowposition, "TY_GUBUN", arr[0]["TY_GUBUN"]);
        			this.dsList.setColumn(this.dsList.rowposition, "CD_BANK", arr[0]["CD_BANK"]);
        		}
        		break;

        	// 전송계좌
        	case "cfNO_ACCOUNT_TRAN":
        		if(arr.length > 0) {
        			this.dsList.setColumn(this.dsList.rowposition, "NO_ACCOUNT_TRAN", arr[0]["NO_ACCOUNT"]);
        			this.dsList.setColumn(this.dsList.rowposition, "DS_BANK_TRAN", arr[0]["DS_BANK"]);
        		}
        		break;

        	default:
        	}
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e){
            if (e.row != -1) {
        		var URL_PROOF = this.gfnNvl(this.dsList.getColumn(e.row, "URL_PROOF"), "첨부파일");
        		this.btnFileUpload.set_text(URL_PROOF);
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {

        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        this.fnDataValidate = function(){

        	var msg = "은(는) 필수입력 입니다.";

        	for (var i=0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "nx_flag") == "I" || this.dsList.getColumn(i, "nx_flag") == "U") {

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "CD_CORP")))){
        				this.gfnAlert("법인코드" + msg);
        				this.dsList.set_rowposition(i);
        				this.ccfCD_CORP2.form.CDTextBox.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "CD_YUGA")))){
        				this.gfnAlert("종류" + msg);
        				this.dsList.set_rowposition(i);
        				this.cfCD_YUGA2.form.CDTextBox.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "NM_YUGA")))){
        				this.gfnAlert("유가증권명" + msg);
        				this.dsList.set_rowposition(i);
        				this.txtNM_YUGA.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "DT_BUY")))){
        				this.gfnAlert("매입일자" + msg);
        				this.dsList.set_rowposition(i);
        				this.calDT_BUY.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "CD_VENDOR")))){
        				this.gfnAlert("매입기관" + msg);
        				this.dsList.set_rowposition(i);
        				this.cfCD_VENDOR.form.CDTextBox.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "CD_DEPT_ACNT")))){
        				this.gfnAlert("귀속부서" + msg);
        				this.dsList.set_rowposition(i);
        				this.cfCD_DEPT_ACNT.form.CDTextBox.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "CD_REPOSIT")))){
        				this.gfnAlert("보관처" + msg);
        				this.dsList.set_rowposition(i);
        				this.cfCD_REPOSIT.form.CDTextBox.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "DT_START")))){
        				this.gfnAlert("기간(from)" + msg);
        				this.dsList.set_rowposition(i);
        				this.calDT_START.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "DT_END"))){
        				this.gfnAlert("기간(to)" + msg);
        				this.dsList.set_rowposition(i);
        				this.calDT_END.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "NO_ACCOUNT")))){
        				this.gfnAlert("대체계좌" + msg);
        				this.dsList.set_rowposition(i);
        				this.cfNO_ACCOUNT.form.CDTextBox.setFocus();
        				return false;
        			}

        			if ( !this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "DT_START"))) && !this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "DT_END"))) ) {
        				if ( this.gfnTrim(this.dsList.getColumn(i, "DT_START")) > this.gfnTrim(this.dsList.getColumn(i, "DT_END")) ) {
        					this.gfnAlert("기간이 잘못 입력 되었습니다.");
        					this.dsList.set_rowposition(i);
        					this.calDT_START.setFocus();
        					return false;
        				}
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "TY_SANG")))){
        				this.gfnAlert("방법" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboTY_SANG.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "TY_EZA")))){
        				this.gfnAlert("유형" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboTY_EZA.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "RT_EZA"))){
        				this.gfnAlert("이율" + msg);
        				this.dsList.set_rowposition(i);
        				this.mskRT_EZA.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "TY_DANBOK")))){
        				this.gfnAlert("방식" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboTY_DANBOK.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "TR_EZASTD"))){
        				this.gfnAlert("수취일" + msg);
        				this.dsList.set_rowposition(i);
        				this.mskTR_EZASTD.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "TR_INTTERM"))){
        				this.gfnAlert("주기(개월)" + msg);
        				this.dsList.set_rowposition(i);
        				this.mskTR_INTTERM.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "TY_SUNHOO"))){
        				this.gfnAlert("기준" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboTY_SUNHOO.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "TY_EZACAL"))){
        				this.gfnAlert("계산방식" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboTY_EZACAL.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "TY_YANGDAN"))){
        				this.gfnAlert("일수계산" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboTY_YANGDAN.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "AM_FACE"))){
        				this.gfnAlert("액면가액" + msg);
        				this.dsList.set_rowposition(i);
        				this.mskAM_FACE.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "QN_BUY"))){
        				this.gfnAlert("취득수량" + msg);
        				this.dsList.set_rowposition(i);
        				this.mskQN_BUY.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "AM_BUY"))){
        				this.gfnAlert("매입금액" + msg);
        				this.dsList.set_rowposition(i);
        				this.mskAM_BUY.setFocus();
        				return false;
        			}



        // 			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "YN_PLAN")))){
        // 				this.gfnAlert("계획생성" + msg);
        // 				this.dsList.set_rowposition(i);
        // 				this.cboYN_PLAN.setFocus();
        // 				return false;
        // 			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "YN_CLOSE")))){
        				this.gfnAlert("완료여부" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboYN_CLOSE2.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "YN_DAMBO")))){
        				this.gfnAlert("담보여부" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboYN_DAMBO.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "QN_DAMBO"))){
        				this.gfnAlert("수량" + msg);
        				this.dsList.set_rowposition(i);
        				this.mskQN_DAMBO.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "AM_DAMBO"))){
        				this.gfnAlert("금액" + msg);
        				this.dsList.set_rowposition(i);
        				this.mskAM_DAMBO.setFocus();
        				return false;
        			}
        		}
        	}
        	return true;
        }

        this.fnSetCombo = function() {

        	// 완료여부
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "E9");

        	// 방법
        	this.dsCombo2 = new Dataset();
        	this.dsCombo2.addColumn("CD_SYSTEM", "string");
        	this.dsCombo2.addColumn("CD_TYPE", "string");
        	this.dsCombo2.addRow();
        	this.dsCombo2.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo2.setColumn(0, "CD_TYPE", "E3");

        	// 방식
        	this.dsCombo3 = new Dataset();
        	this.dsCombo3.addColumn("CD_SYSTEM", "string");
        	this.dsCombo3.addColumn("CD_TYPE", "string");
        	this.dsCombo3.addRow();
        	this.dsCombo3.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo3.setColumn(0, "CD_TYPE", "E0");

        	// 기준
        	this.dsCombo4 = new Dataset();
        	this.dsCombo4.addColumn("CD_SYSTEM", "string");
        	this.dsCombo4.addColumn("CD_TYPE", "string");
        	this.dsCombo4.addRow();
        	this.dsCombo4.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo4.setColumn(0, "CD_TYPE", "E5");

        	// 계산방식
        	this.dsCombo5 = new Dataset();
        	this.dsCombo5.addColumn("CD_SYSTEM", "string");
        	this.dsCombo5.addColumn("CD_TYPE", "string");
        	this.dsCombo5.addRow();
        	this.dsCombo5.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo5.setColumn(0, "CD_TYPE", "E6");

        	// 일수계산
        	this.dsCombo6 = new Dataset();
        	this.dsCombo6.addColumn("CD_SYSTEM", "string");
        	this.dsCombo6.addColumn("CD_TYPE", "string");
        	this.dsCombo6.addRow();
        	this.dsCombo6.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo6.setColumn(0, "CD_TYPE", "E7");

        	// 화폐단위
        	this.dsCombo7 = new Dataset();
        	this.dsCombo7.addColumn("CD_SYSTEM", "string");
        	this.dsCombo7.addColumn("CD_TYPE", "string");
        	this.dsCombo7.addRow();
        	this.dsCombo7.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo7.setColumn(0, "CD_TYPE", "40");

        	// 수취방법
        	this.dsCombo8 = new Dataset();
        	this.dsCombo8.addColumn("CD_SYSTEM", "string");
        	this.dsCombo8.addColumn("CD_TYPE", "string");
        	this.dsCombo8.addRow();
        	this.dsCombo8.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo8.setColumn(0, "CD_TYPE", "E2");

        	// 브랜치전송
        	this.dsCombo9 = new Dataset();
        	this.dsCombo9.addColumn("CD_SYSTEM", "string");
        	this.dsCombo9.addColumn("CD_TYPE", "string");
        	this.dsCombo9.addRow();
        	this.dsCombo9.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo9.setColumn(0, "CD_TYPE", "ZZ");

        	this.dsCombo10 = new Dataset();
        	this.dsCombo10.addColumn("CD_SYSTEM", "string");
        	this.dsCombo10.addColumn("CD_TYPE", "string");
        	this.dsCombo10.addRow();
        	this.dsCombo10.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo10.setColumn(0, "CD_TYPE", "E8");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo combo2=dsCombo2 combo3=dsCombo3 combo4=dsCombo4 combo5=dsCombo5 combo6=dsCombo6 combo7=dsCombo combo8=dsCombo7 combo9=dsCombo8 combo10=dsCombo10";
        	var outData     = "dsYN_CLOSE=combo0 dsTY_EZA=combo20 dsTY_DANBOK=combo30 dsTY_SUNHOO=combo40 dsTY_EZACAL=combo50 dsTY_YANGDAN=combo60 dsYN_CLOSE2=combo70 dsCD_CURRENCY=combo80 dsTY_SANG=combo90 dsTY_TERM=combo100";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        //검색어 키다운 이벤트
        this.divSearch_txtSEARCH_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.fnSelect();
        	}
        };

        // 계획생성
        this.fnPlanCreat = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	this.gfnConfirm("유가증권 계획생성 합니다.", "fnPlanCreatCallback");
        }

        // 계획생성 Callback
        this.fnPlanCreatCallback = function(strId, val) {

        	if(val == false) return;

        	this.dsExcute.clearData();
        	this.dsExcute.addRow();

        	this.dsExcute.setColumn(0, "NO_YUGA", this.dsList.getColumn(this.dsList.rowposition,"NO_YUGA"));
        	this.dsExcute.setColumn(0, "DT_DATE", this.dsList.getColumn(this.dsList.rowposition,"DT_BUY"));
        	this.dsExcute.setColumn(0, "YN_FIRST", "Y");
        	this.dsExcute.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "e_create";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "e_create=dsExcute";
        	var outData     = "dsResult=e_create0";
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

        // 계획/실적
        this.fnPlanPerform = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.OWNER_ID = "DFE_YUGA_REGISTRATION";

        	param.CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	param.DS_CORP = this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");
        	param.DT_FROM = this.dsList.getColumn(this.dsList.rowposition, "DT_BUY");
        	param.DT_TO =  this.gfnAddMonth(this.dsList.getColumn(this.dsList.rowposition, "DT_END"), 1);
        	param.NO_YUGA = this.dsList.getColumn(this.dsList.rowposition, "NO_YUGA");
        	param.NM_YUGA = this.dsList.getColumn(this.dsList.rowposition, "NM_YUGA");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DFE_YUGA_PLAN", "", param);
        }

        // 유가증권평가
        this.fnYugaEval = function(obj,e) {
        	// TODO 유가증권평가 기능 추가
        	this.gfnAlert("todo 유가증권평가");
        }


        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if ( e.oldvalue != e.newvalue ) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        // 조회결과에 따른 외화금액/화폐단위/환율/수리신고번호/사후신고마감일/사후신고일 visible 처리
        this.fnVisibleComp = function(visible) {

        	this.divData.form.divDataRight.form.sta901.set_visible(visible);
        	this.divData.form.divDataRight.form.sta902.set_visible(visible);
        	this.divData.form.divDataRight.form.sta903.set_visible(visible);
        	this.divData.form.divDataRight.form.sta904.set_visible(visible);
        	this.divData.form.divDataRight.form.sta905.set_visible(visible);
        	this.divData.form.divDataRight.form.sta906.set_visible(visible);
        	this.divData.form.divDataRight.form.sta907.set_visible(visible);
        	this.divData.form.divDataRight.form.sta908.set_visible(visible);

        	this.divData.form.divDataRight.form.mskAM_KOR.set_visible(visible);
        	this.divData.form.divDataRight.form.cboCD_CURRENCY.set_visible(visible);
        	this.divData.form.divDataRight.form.mskRT_CURRENCY.set_visible(visible);
        	this.divData.form.divDataRight.form.txtNO_AFTER.set_visible(visible);
        	this.divData.form.divDataRight.form.calDT_AFTER1.set_visible(visible);
        	this.divData.form.divDataRight.form.calDT_AFTER2.set_visible(visible);

        	if (visible) {
        		this.divData.form.divDataRight.form.div00.set_top(396);
        	} else {
        		this.divData.form.divDataRight.form.div00.set_top(338);
        	}
        }

        this.dsList_onrowposchanged = function(obj,e)
        {

        	var ynView = obj.getColumn(e.newrow, "YN_VIEW");
        	//trace("ynView :: " + ynView);

        	if (ynView == "Y") {
        		this.fnVisibleComp(true);
        	} else {
        		this.fnVisibleComp(false);
        	}
        };
        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if (this.gfnGetFlag(this.dsList, e.row) == "#")
        		return;

        	// 매입입자 및 유가증권종류명 수정시 유가증권명칭 자동 변경
        	if (e.columnid == "DT_BUY" || e.columnid == "DS_YUGA") {

        		if (e.oldvalue != e.newvalue) {
        			var dsYuga = this.gfnIsNull(obj.getColumn(e.row, "DS_YUGA")) ? "" : obj.getColumn(e.row, "DS_YUGA");
        			var dtBuy = this.gfnIsNull(obj.getColumn(e.row, "DT_BUY")) ? "" : obj.getColumn(e.row, "DT_BUY");
        			var nmYuga = "";
        			if (this.gfnIsNull(dsYuga)) {
        				nmYuga = dtBuy.substr(0,6);
        			}  else {
        				nmYuga = dsYuga + "_" + dtBuy.substr(0,6);
        			}

        			obj.setColumn(e.row, "NM_YUGA", nmYuga);
        		}
        	}
        };

        // 첨부파일
        this.fnFileUpload = function(obj,e) {
        	//trace("this.btnFileUpload.text :: " + this.btnFileUpload.text);
        	if (this.dsList.rowcount <= 0) {
        		return false;
        	}
        	//var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	//if(colnm == "URL_PROOF") {
        		// 최초 작성시엔 NO_SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        		// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!
        		if(this.gfnGetFlag(this.dsList, this.dsList.rowposition) == "I"){
        			this.gfnAlert("저장 후 파일첨부 진행.");
        			return false;
        		}

        		var cdGubun = "DF04";
        		var cdDir = "NO_YUGA";

        		var fileManager = {};
        		fileManager.CD_GUBUN = cdGubun;
        		fileManager.CD_DIR = [this.dsList.getColumn(this.dsList.rowposition, cdDir)];
        		fileManager.IS_READONLY = false;

        // 		trace("VcboAccntGb :: " + VcboAccntGb);
        // 		trace("fileManager.CD_GUBUN :: " + fileManager.CD_GUBUN);
        // 		trace("fileManager.CD_DIR :: " + fileManager.CD_DIR);
        // 		trace("fileManager.IS_READONLY :: " + fileManager.IS_READONLY);

        		this.gfnFileManager(fileManager, "fnFileCallback");
        	//}
        }

        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수

        	// 파일개수를 다시 셋팅
        	this.dsList.set_enableevent(false);
        	if(val.Cnt == 0) {
        		this.btnFileUpload.set_text("첨부(0)");
        	} else {
        		this.btnFileUpload.set_text("첨부(" + val.Cnt + ")");
        	}
        	this.dsList.setColumn(this.dsList.rowposition, "URL_PROOF", "첨부(" + val.Cnt + ")");
        	this.dsList.set_enableevent(true);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboYN_CLOSE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataRight.form.sta03.addEventHandler("onclick",this.divData_divDataRight_sta03_onclick,this);
            this.divData.form.divDataRight.form.mskAM_KOR.addEventHandler("onchanged",this.fnCalAmLoan,this);
            this.divData.form.divDataRight.form.mskRT_CURRENCY.addEventHandler("onchanged",this.fnCalAmLoan,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DFE_YUGA_REGISTRATION.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
