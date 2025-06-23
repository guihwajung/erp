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
            this.set_titletext("예적금 약정 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1500,820);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFFPR_YEJUKUMREG_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DFFPR_YEJUKUMREG_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DFFPR_YEJUKUMREG_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DFFPR_YEJUKUMREG_DELETE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">e_create</Col><Col id=\"SP\">DFFPR_YEJUKUMPLAN_CREATE_NEW</Col></Row><Row><Col id=\"SP\">DHXPR_CURRENCY_EXCHAGE</Col><Col id=\"TARGET\">selectExc</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_PLAN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">Y</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_CANCEL", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">Y</Col><Col id=\"NAME\">Y</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"NAME\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_DANBOK", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EZA", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EZACAL", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EXPIRY", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EXPIRY2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BANKITEM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_YEJUKUM\" type=\"STRING\" size=\"256\"/><Column id=\"TY_EXPIRY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SUNHOO", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_YANGDAN", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CMS", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_CURR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtEx", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">Y</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_INCOME", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"78","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","44","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("관리번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","sta00:300","44","92.0","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("완료여부");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_EXPIRY","482","44","91","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_EXPIRY");
            obj.set_text("진행중");
            obj.set_value("N");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04","0","10","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","sta04:0.0","10.0","270","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_BANKITEM","cfCD_CORP:120","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","cfCD_CORP:30","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("금융상품");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfNO_YEJUKUM","92","44","270","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","21.88%","0","5",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cursor("ew-resize");
            obj.set_cssclass("div_Splitter");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","3",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta22","74","436",null,"30","22",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("87");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta06_00","74","115",null,"30","22",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("89");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta00","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("42");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta11","74","28",null,"30","22",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta03","74","57",null,"30","22",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta05","343","28","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("46");
            obj.set_text("예적금명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","404","3","240","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("35");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            obj.set_visible("false");
            obj.set_tabstop("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta06","74","86",null,"30","22",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta28","0","155",null,"22","-1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("50");
            obj.set_text("납입조건");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta29","701","28","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("51");
            obj.set_text("금융상품종류");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta33","74","182",null,"36","22",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("52");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta34","0","182","100","36",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("53");
            obj.set_text("불입액\r\n(가입통화)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta36","481","182","100","36",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("54");
            obj.set_text("불입주기");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staChitPubPnt","923","182","90","36",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("55");
            obj.set_text("회전주기(월)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta45","0","320",null,"22","-1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("56");
            obj.set_text("진행정보 및 질권");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta01","0","28","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("43");
            obj.set_text("관리번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtNO_YEJUKUM","104","33","232","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("33");
            obj.set_maxlength("20");
            obj.set_enable("false");
            obj.set_tabstop("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta21","701","57","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("48");
            obj.set_text("금융기관");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta26","701","86","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("49");
            obj.set_text("가입금액(원화)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta10","0","57","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("57");
            obj.set_text("예적금계좌");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta12","343","86","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("58");
            obj.set_text("가입통화/금액");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskTR_INCOME","634","190","70","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("16");
            obj.set_format("#0");
            obj.set_limitbymask("integer");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta07","94","349",null,"30","22",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CONT","523","91","164","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("8");
            obj.set_format("#,###,###,###,###,###,##0.##");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskCT_TINCOM","348","324","165","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("36");
            obj.set_format("#,###,###,##0");
            obj.set_enable("false");
            obj.set_visible("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta38","0","349","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("60");
            obj.set_text("불입액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_INTOT","121","354","175","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("37");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_autoselect("false");
            obj.set_enable("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta41","94","378",null,"30","22",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta42","334","349","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("62");
            obj.set_text("현불입횟수");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta43","660","349","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("63");
            obj.set_text("잔액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta49","334","378","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("64");
            obj.set_text("완료여부");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta51","0","378","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("65");
            obj.set_text("해지여부/일자");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboYN_CANCEL","120","383","65","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("26");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("dsYN_CANCEL");
            obj.set_text("LOAN");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta53","74","407",null,"30","22",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("66");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta55","334","407","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("67");
            obj.set_text("질권금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta56","74","465",null,"127","22",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("68");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta59","0","407","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("69");
            obj.set_text("질권설정여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta64","0","465","115","127",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("71");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_text("비고");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new TextArea("TeaRM_BIGO","121","472","837","110",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("32");
            obj.set_maxlength("200");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDS_LIMIT","782","413","207","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("31");
            obj.set_maxlength("100");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta04","343","57","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("72");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("cfCD_BANKITEM2","805","33","251","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtNM_YEJUKUM","447","33","240","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_maxlength("50");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("cfNO_ACCOUNT","104","62","232","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("110");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("cfCD_VENDOR","805","62","251","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("cfCD_DEPT_ACNT","447","63","240","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("calDT_CONT","104","91","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staCD_TILDE01","215","91","10","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("73");
            obj.set_text("~");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("calDT_FINISH","231","91","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_INCOME","104","190","125","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("13");
            obj.set_format("#,###,###,###,###,###,##0.##");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta02","0","226",null,"22","-1",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("74");
            obj.set_text("이자수취조건");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta13","74","253",null,"30","22",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("75");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta14","0","253","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("76");
            obj.set_text("이율(%)");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta27","233","253","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("77");
            obj.set_text("방식");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staChitPubPnt00","731","253","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("78");
            obj.set_text("계산방식");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta32","481","253","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("79");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskRT_EZA","104","258","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("18");
            obj.set_format("###,##0.####");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_DANBOK","337","258","125","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("19");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_DANBOK");
            obj.set_text("LOAN");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_EZA","585","258","125","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("20");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_EZA");
            obj.set_text("");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_EZACAL","835","258","125","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("21");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_EZACAL");
            obj.set_text("");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboYN_PLAN","782","383","165","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("40");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_PLAN");
            obj.set_enable("false");
            obj.set_text("");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_EXPIRY2","453","383","165","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("28");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_EXPIRY2");
            obj.set_text("");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Calendar("calDT_CANCEL","188","383","110","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("27");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_LIMIT","453","412","165","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("30");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_enableevent("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskQN_IN","453","354","165","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("38");
            obj.set_format("#,###,###,##0");
            obj.set_enable("false");
            obj.set_visible("true");
            obj.set_tabstop("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_JAN","781","353","165","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("39");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_enable("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta15","74","282",null,"30","22",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("80");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta16","0","282","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("81");
            obj.set_text("수취일");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta17","233","282","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("82");
            obj.set_text("주기(개월)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staChitPubPnt01","731","282","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("83");
            obj.set_text("일수계산");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta18","481","282","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("84");
            obj.set_text("수취기준");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskTR_EZASTD","104","287","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("22");
            obj.set_format("#,###,###,##0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_SUNHOO","585","287","125","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("24");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_SUNHOO");
            obj.set_text("");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_YANGDAN","835","287","125","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("25");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_YANGDAN");
            obj.set_text("");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskTR_INTTERM","337","287","125","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("23");
            obj.set_format("#,###,###,##0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta19","0","86","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("85");
            obj.set_text("가입기간");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("cfNO_ACCOUNT_DCHE","104","120","232","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("CDTextWidth").set("110");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta20","731","182","100","36",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("86");
            obj.set_text("불입일");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskTR_TURN","1017","190","70","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("34");
            obj.set_format("#0");
            obj.set_limitbymask("integer");
            obj.set_visible("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta61","0","436","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("70");
            obj.set_text("실가용금액");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_SIL","121","441","175","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("41");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_enable("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_CMS","447","120","165","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("11");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_CMS");
            obj.set_text("LOAN");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta19_00","0","115","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("88");
            obj.set_text("출금계좌");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboCD_CURR","447","91","73","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("7");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_CURR");
            obj.set_text("LOAN");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_CONT_KRW","806","91","164","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("9");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta23_00","343","115","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("90");
            obj.set_text("CMS전송");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_INCOME","586","190","45","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("15");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_INCOME");
            obj.set_text("월");
            obj.set_value("월");
            obj.set_index("1");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta34_00","233","182","100","36",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("91");
            obj.set_text("불입액(원화)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_INCOME_KRW","338","190","125","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("14");
            obj.set_format("#,###,###,###,###,###,##0");
            obj.set_limitbymask("integer");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta44_00","660","378","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("92");
            obj.set_text("계획생성");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta23_00_00","701","115","100","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("93");
            obj.set_text("장단기대체");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboYN_RETURN","805","121","165","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("12");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("dsYN_CANCEL");
            obj.set_text("N");
            obj.set_value("N");
            obj.set_index("1");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new MaskEdit("mskRT_EXCH","973","91","83","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("94");
            obj.set_format("#,##0.###");
            obj.set_enable("false");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboDT_INCOME","837","190","69","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("95");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_visible("false");
            var divData_form_divDataRight_form_cboDT_INCOME_innerdataset = new nexacro.NormalDataset("divData_form_divDataRight_form_cboDT_INCOME_innerdataset", obj);
            divData_form_divDataRight_form_cboDT_INCOME_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">월</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">화</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">수</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">목</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">금</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">토</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">일</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_divDataRight_form_cboDT_INCOME_innerdataset);
            obj.set_text("LOAN");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Edit("txtDT_INCOME","837","190","69","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("17");
            obj.set_maxlength("100");
            obj.set_enable("true");
            obj.set_value("0");
            obj.set_visible("true");
            obj.set_textAlign("right");
            obj.set_text("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta55_00","660","407","115","30",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("96");
            obj.set_text("질권내용");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboYN_LIMIT","120","413","175","20",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("29");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_innerdataset("dsYN_CANCEL");
            obj.set_text("LOAN");
            obj.set_value("LOAN");
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
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cfCD_BANKITEM.form.CDTextBox","value","dsSearch","CD_BANKITEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cfNO_YEJUKUM.form.CDTextBox","value","dsSearch","NO_YEJUKUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboTY_EXPIRY","value","dsSearch","TY_EXPIRY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataRight.form.txtNO_YEJUKUM","value","dsList","NO_YEJUKUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataRight.form.ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataRight.form.ccfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataRight.form.cfCD_BANKITEM2.form.CDTextBox","value","dsList","CD_BANKITEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataRight.form.cfCD_BANKITEM2.form.DSTextBox","value","dsList","DS_BANKITEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataRight.form.txtNM_YEJUKUM","value","dsList","NM_YEJUKUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataRight.form.cfNO_ACCOUNT.form.CDTextBox","value","dsList","NO_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataRight.form.cfNO_ACCOUNT.form.DSTextBox","value","dsList","DS_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataRight.form.cfCD_VENDOR.form.CDTextBox","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataRight.form.cfCD_VENDOR.form.DSTextBox","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataRight.form.cfCD_DEPT_ACNT.form.CDTextBox","value","dsList","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divData.form.divDataRight.form.cfCD_DEPT_ACNT.form.DSTextBox","value","dsList","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divData.form.divDataRight.form.calDT_CONT","value","dsList","DT_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divData.form.divDataRight.form.calDT_FINISH","value","dsList","DT_FINISH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataRight.form.mskTR_INCOME","value","dsList","TR_INCOME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataRight.form.mskRT_EZA","value","dsList","RT_EZA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataRight.form.cboTY_DANBOK","value","dsList","TY_DANBOK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDataRight.form.cboTY_EZA","value","dsList","TY_EZA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divDataRight.form.cboTY_EZACAL","value","dsList","TY_EZACAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divDataRight.form.mskCT_TINCOM","value","dsList","CT_TINCOM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divDataRight.form.mskQN_IN","value","dsList","QN_IN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divDataRight.form.cboYN_PLAN","value","dsList","YN_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.divDataRight.form.cboYN_CANCEL","value","dsList","YN_CANCEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.divDataRight.form.calDT_CANCEL","value","dsList","DT_CANCEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.divDataRight.form.cboTY_EXPIRY2","value","dsList","TY_EXPIRY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divData.form.divDataRight.form.txtDS_LIMIT","value","dsList","DS_LIMIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.divDataRight.form.TeaRM_BIGO","value","dsList","RM_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataRight.form.mskTR_EZASTD","value","dsList","TR_EZASTD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.divDataRight.form.cboTY_SUNHOO","value","dsList","TY_SUNHOO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.divDataRight.form.cboTY_YANGDAN","value","dsList","TY_YANGDAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataRight.form.mskTR_INTTERM","value","dsList","TR_INTTERM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.divDataRight.form.cfNO_ACCOUNT_DCHE.form.CDTextBox","value","dsList","NO_ACCOUNT_DCHE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","divData.form.divDataRight.form.cfNO_ACCOUNT_DCHE.form.DSTextBox","value","dsList","DS_BANK_DCHE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divData.form.divDataRight.form.mskTR_TURN","value","dsList","TR_TURN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","divData.form.divDataRight.form.cboTY_CMS","value","dsList","TY_CMS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divDataRight.form.mskAM_CONT","value","dsList","AM_CONT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divDataRight.form.mskAM_CONT_KRW","value","dsList","AM_CONT_KRW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.divDataRight.form.mskAM_INCOME_KRW","value","dsList","AM_INCOME_KRW");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divData.form.divDataRight.form.mskAM_INCOME","value","dsList","AM_INCOME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataRight.form.mskAM_JAN","value","dsList","AM_JAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","divData.form.divDataRight.form.cboYN_RETURN","value","dsList","YN_RETURN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","divData.form.divDataRight.form.cboTY_INCOME","value","dsList","TY_INCOME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divData.form.divDataRight.form.mskAM_LIMIT","value","dsList","AM_LIMIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divData.form.divDataRight.form.cboCD_CURR","value","dsList","CD_CURR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divDataRight.form.mskRT_EXCH","value","dsList","RT_EXCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData.form.divDataRight.form.cboDT_INCOME","value","dsList","DT_INCOME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataRight.form.txtDT_INCOME","value","dsList","DT_INCOME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divData.form.divDataRight.form.mskAM_INTOT","value","dsList","AM_INTOT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData.form.divDataRight.form.cboYN_LIMIT","value","dsList","YN_LIMIT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFF_DEPOSIT_REG.xfdl", function() {
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


        	// 타화면에서 호출 및 파라미터 존재시 자동 조회
        // 	if(!this.gfnIsNull(this.getOwnerFrame().NO_YEJUKUM)) {
        // 		this.dsSearch.setColumn(0, "NO_YEJUKUM", this.getOwnerFrame().NO_YEJUKUM);
        // 		this.dsSearch.setColumn(0, "NM_YEJUKUM", this.getOwnerFrame().NM_YEJUKUM);
        // 		this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        // 		this.dsSearch.setColumn(0, "DS_CORP", this.getOwnerFrame().DS_CORP);
        // 		this.dsSearch.setColumn(0, "TY_EXPIRY", "");
        // 	}
        	//this.cboDT_INCOME.set_visible(false);
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
        	 this.btnPlanCreat = this.gfnFormButtonAdd("btnPlanCreat", "fnPlanCreat")//, "계획생성");
        	 this.btnPlanPerform = this.gfnFormButtonAdd("btnPlanPerform", "fnPlanPerform")//, "계획/실적");
        	 this.btnChngInfoInsert = this.gfnFormButtonAdd("btnChngInfoInsert", "fnChngInfoInsert")//, "변동정보등록");
        	 this.btnFileUpload = this.gfnFormButtonAdd("btnFileUpload", "fnFileUpload")//, " 첨부파일 ");
        	 this.btnAccount = this.gfnFormButtonAdd("btnAccount", "fnAccount")//, " 계좌관리 ");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	// 조회조건
        	this.cfCD_CORP  = this.divSearch.form.cfCD_CORP;				// 법인코드
        	this.cfCD_BANKITEM = this.divSearch.form.cfCD_BANKITEM;			// 금융상품
        	this.cfNO_YEJUKUM = this.divSearch.form.cfNO_YEJUKUM;			// 관리번호
        	this.cboTY_EXPIRY = this.divSearch.form.cboTY_EXPIRY;			// 완료여부

        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;		// 그리드
        	this.grSearch = this.FormInfo.GR_SEARCH;						// 권한?
        	this.cdGroup = this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP;						// 그룹코드

        	// 기본정보
        	this.txtNO_YEJUKUM = this.divData.form.divDataRight.form.txtNO_YEJUKUM;			// 관리번호
        	this.ccfCD_CORP = this.divData.form.divDataRight.form.ccfCD_CORP;				// 법인코드
        	this.cfCD_BANKITEM2 = this.divData.form.divDataRight.form.cfCD_BANKITEM2;		// 금융상품
        	this.txtNM_YEJUKUM = this.divData.form.divDataRight.form.txtNM_YEJUKUM;			// 예적금명
        	this.cfNO_ACCOUNT = this.divData.form.divDataRight.form.cfNO_ACCOUNT;			// 계좌
        	this.cfCD_VENDOR = this.divData.form.divDataRight.form.cfCD_VENDOR;				// 금융기관
        	this.cfCD_DEPT_ACNT = this.divData.form.divDataRight.form.cfCD_DEPT_ACNT;		// 귀속부서
        	this.cfNO_ACCOUNT_DCHE = this.divData.form.divDataRight.form.cfNO_ACCOUNT_DCHE;	// 대체계좌

        	this.calDT_CONT = this.divData.form.divDataRight.form.calDT_CONT; 				// 가입기간(from)
        	this.calDT_FINISH = this.divData.form.divDataRight.form.calDT_FINISH; 			// 가입기간(to)
        	this.cboCD_CURR = this.divData.form.divDataRight.form.cboCD_CURR; 				// 통화
        	this.mskAM_CONT_KRW = this.divData.form.divDataRight.form.mskAM_CONT_KRW;		// 가입금액(원화)
        	this.cboYN_RETURN = this.divData.form.divDataRight.form.cboYN_RETURN;			// 장단기대체

        	// 납입조건
        	this.txtDT_INCOME = this.divData.form.divDataRight.form.txtDT_INCOME;		// 불입일
        	this.mskTR_INCOME = this.divData.form.divDataRight.form.mskTR_INCOME;		// 불입주기
        	this.mskTR_TURN = this.divData.form.divDataRight.form.mskTR_TURN;			// 회전주기
        	this.mskAM_INCOME = this.divData.form.divDataRight.form.mskAM_INCOME;		// 불입액
        	this.mskAM_INCOME_KRW = this.divData.form.divDataRight.form.mskAM_INCOME_KRW;	// 불입금액(원화)
        	this.cboTY_INCOME = this.divData.form.divDataRight.form.cboTY_INCOME;			// 불입주기(주, 월)
        	this.cboDT_INCOME = this.divData.form.divDataRight.form.cboDT_INCOME;       //불입일(주일때)

        	// 이자지급조건
        	this.mskRT_EZA = this.divData.form.divDataRight.form.mskRT_EZA;				// 이율(%)
        	this.cboTY_DANBOK = this.divData.form.divDataRight.form.cboTY_DANBOK;				// 방식
        	this.cboTY_EZA = this.divData.form.divDataRight.form.cboTY_EZA;				// 지급방식
        	this.cboTY_EZACAL = this.divData.form.divDataRight.form.cboTY_EZACAL;			// 계산방식

        	// 진행정보
        	this.mskAM_CONT = this.divData.form.divDataRight.form.mskAM_CONT;			// 계약금액
        	this.mskCT_TINCOM = this.divData.form.divDataRight.form.mskCT_TINCOM;		// 총불입횟수
        	this.mskAM_INTOT = this.divData.form.divDataRight.form.mskAM_INTOT;			// 불입액
        	this.mskQN_IN = this.divData.form.divDataRight.form.mskQN_IN;				// 현불입횟수
        	this.mskAM_JAN = this.divData.form.divDataRight.form.mskAM_JAN;				// 잔액
        	this.cboYN_PLAN = this.divData.form.divDataRight.form.cboYN_PLAN;			// 계획생성
        	this.cboYN_CANCEL = this.divData.form.divDataRight.form.cboYN_CANCEL;		// 해지여부
        	this.calDT_CANCEL = this.divData.form.divDataRight.form.calDT_CANCEL;		// 해지일자
        	this.cboTY_EXPIRY2 = this.divData.form.divDataRight.form.cboTY_EXPIRY2;		// 완료여부

        	// 담보/제한 및 비고
        	this.mskAM_LIMIT = this.divData.form.divDataRight.form.mskAM_LIMIT;			// 금액
        	this.txtDS_LIMIT = this.divData.form.divDataRight.form.txtDS_LIMIT;			// 종류
        	this.mskAM_SIL = this.divData.form.divDataRight.form.mskAM_SIL;				// 실가용금액
        	this.cboTY_CMS = this.divData.form.divDataRight.form.cboTY_CMS;				// 브랜치전송

        	this.TeaRM_BIGO = this.divData.form.divDataRight.form.TeaRM_BIGO;			// 비고

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cfCD_CORP.CodeFindName = "DZX_CFCORP";						// 법인코드(조회조건)
        	this.cfCD_BANKITEM.CodeFindName = "DFX_CFBANKITEM";				// 금융상품(조회조건)
        	this.cfNO_YEJUKUM.CodeFindName = "DFX_CFNO_YEJUKUM";			// 관리번호(조회조건)

        	this.ccfCD_CORP.CodeFindName = "DZX_CFCORP"; 					// 법인코드
        	this.cfCD_BANKITEM2.CodeFindName = "DFX_CFBANKITEM";			// 금융상품
        	this.cfNO_ACCOUNT.CodeFindName = "DFX_CFNO_ACCOUNT";			// 계좌
        	this.cfCD_VENDOR.CodeFindName = "DFX_CFVENDOR";					// 금융기관
        	this.cfCD_DEPT_ACNT.CodeFindName = "DFX_CFACNTUNIT";			// 귀속부서
        	this.cfNO_ACCOUNT_DCHE.CodeFindName = "DFX_CFACCOUNTNO_SUJI";	// 대체계좌

        	this.cfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_BANKITEM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_YEJUKUM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_BANKITEM2.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_ACCOUNT_DCHE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.cfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_BANKITEM.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfNO_YEJUKUM.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_BANKITEM2.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfNO_ACCOUNT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_VENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_DEPT_ACNT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfNO_ACCOUNT_DCHE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFF_DEPOSIT_REG");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("oncolumnchanged", this.dsList_ColumnChanged, this);
        // 	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        // 	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	if (this.gfnIsNull(this.cfCD_CORP.form.CDTextBox.value)) {
        		this.cfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.cfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	// 법인코드 포커스추가
        	//this.cfCD_CORP.form.CDTextBox.setFocus();

        	// 권한체크 - 해당부서내역만 조회가능
        	if (nexacro.toNumber(this.grSearch) >= 2) {
        		this.cfCD_CORP.set_enable(false);
        	}

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	//검색조건 데이터셋
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_BANKITEM", "string");
        	this.dsSelect.addColumn("NO_YEJUKUM", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("TY_EXPIRY", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("CD_BANKITEM", "string");
        	this.dsInsert.addColumn("NM_YEJUKUM", "string");
        	this.dsInsert.addColumn("NO_ACCOUNT", "string");
        	this.dsInsert.addColumn("TY_GUBUN", "string");
        	this.dsInsert.addColumn("CD_BANK", "string");
        	this.dsInsert.addColumn("NO_ACCOUNT_DCHE", "string");
        	this.dsInsert.addColumn("TY_GUBUN_DCHE", "string");
        	this.dsInsert.addColumn("CD_BANK_DCHE", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("CD_DEPT", "string");
        	this.dsInsert.addColumn("DT_CONT", "string");
        	this.dsInsert.addColumn("DT_FINISH", "string");
        	this.dsInsert.addColumn("DT_INCOME", "string");
        	this.dsInsert.addColumn("TR_INCOME", "bigdecimal");
        	this.dsInsert.addColumn("TR_TURN", "bigdecimal");
        	this.dsInsert.addColumn("AM_INCOME", "bigdecimal");
        	this.dsInsert.addColumn("RT_EZA", "bigdecimal");
        	this.dsInsert.addColumn("TY_EZA", "string");
        	this.dsInsert.addColumn("TY_DANBOK", "string");
        	this.dsInsert.addColumn("TR_EZASTD", "bigdecimal");
        	this.dsInsert.addColumn("TR_INTTERM", "bigdecimal");
        	this.dsInsert.addColumn("TY_SUNHOO", "string");
        	this.dsInsert.addColumn("TY_EZACAL", "string");
        	this.dsInsert.addColumn("TY_YANGDAN", "string");
        	this.dsInsert.addColumn("AM_CONT", "bigdecimal");
        	this.dsInsert.addColumn("CT_TINCOM", "bigdecimal");
        	this.dsInsert.addColumn("YN_CANCEL", "string");
        	this.dsInsert.addColumn("DT_CANCEL", "string");
        	this.dsInsert.addColumn("TY_EXPIRY", "string");
        	this.dsInsert.addColumn("AM_LIMIT", "bigdecimal");
        	this.dsInsert.addColumn("DS_LIMIT", "string");
        	this.dsInsert.addColumn("TY_CMS", "string");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("ID_USER", "string");
        	this.dsInsert.addColumn("CD_CURR", "string");
        	this.dsInsert.addColumn("AM_CONT_KRW", "bigdecimal");
        	this.dsInsert.addColumn("AM_INCOME_KRW", "bigdecimal");
        	this.dsInsert.addColumn("YN_RETURN", "string");
        	this.dsInsert.addColumn("TY_INCOME", "string");
        	this.dsInsert.addColumn("YN_LIMIT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("CD_BANKITEM", "string");
        	this.dsUpdate.addColumn("NM_YEJUKUM", "string");
        	this.dsUpdate.addColumn("NO_ACCOUNT", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");
        	this.dsUpdate.addColumn("CD_BANK", "string");
        	this.dsUpdate.addColumn("NO_ACCOUNT_DCHE", "string");
        	this.dsUpdate.addColumn("TY_GUBUN_DCHE", "string");
        	this.dsUpdate.addColumn("CD_BANK_DCHE", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("CD_DEPT", "string");
        	this.dsUpdate.addColumn("DT_CONT", "string");
        	this.dsUpdate.addColumn("DT_FINISH", "string");
        	this.dsUpdate.addColumn("DT_INCOME", "string");
        	this.dsUpdate.addColumn("TR_INCOME", "bigdecimal");
        	this.dsUpdate.addColumn("TR_TURN", "bigdecimal");
        	this.dsUpdate.addColumn("AM_INCOME", "bigdecimal");
        	this.dsUpdate.addColumn("RT_EZA", "bigdecimal");
        	this.dsUpdate.addColumn("TY_EZA", "string");
        	this.dsUpdate.addColumn("TY_DANBOK", "string");
        	this.dsUpdate.addColumn("TR_EZASTD", "bigdecimal");
        	this.dsUpdate.addColumn("TR_INTTERM", "bigdecimal");
        	this.dsUpdate.addColumn("TY_SUNHOO", "string");
        	this.dsUpdate.addColumn("TY_EZACAL", "string");
        	this.dsUpdate.addColumn("TY_YANGDAN", "string");
        	this.dsUpdate.addColumn("AM_CONT", "bigdecimal");
        	this.dsUpdate.addColumn("CT_TINCOM", "bigdecimal");
        	this.dsUpdate.addColumn("YN_CANCEL", "string");
        	this.dsUpdate.addColumn("DT_CANCEL", "string");
        	this.dsUpdate.addColumn("TY_EXPIRY", "string");
        	this.dsUpdate.addColumn("AM_LIMIT", "bigdecimal");
        	this.dsUpdate.addColumn("DS_LIMIT", "string");
        	this.dsUpdate.addColumn("TY_CMS", "string");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("NO_YEJUKUM", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("CD_CURR", "string");
        	this.dsUpdate.addColumn("AM_CONT_KRW", "bigdecimal");
        	this.dsUpdate.addColumn("AM_INCOME_KRW", "bigdecimal");
        	this.dsUpdate.addColumn("YN_RETURN", "string");
        	this.dsUpdate.addColumn("TY_INCOME", "string");
        	this.dsUpdate.addColumn("YN_LIMIT", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_YEJUKUM", "string");

        	this.dsExcute = new Dataset();
        	this.dsExcute.addColumn("NO_YEJUKUM", "string");
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

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_BANKITEM", this.dsSearch.getColumn(0, "CD_BANKITEM"));
        	this.dsSelect.setColumn(0, "NO_YEJUKUM", this.dsSearch.getColumn(0, "NO_YEJUKUM"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "TY_EXPIRY", this.dsSearch.getColumn(0, "TY_EXPIRY"));

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

        	// 컴포넌트 enable/disable처리
        	this.fnSetComponent(true);

        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.set_enableevent(false);

        	this.dsList.setColumn(nrow, "CD_CORP", this.cfCD_CORP.form.CDTextBox.value);			// 법인코드
        	this.dsList.setColumn(nrow, "DS_CORP", this.cfCD_CORP.form.DSTextBox.value);			// 법인명

        	this.dsList.setColumn(nrow, "DT_INCOME", 0);       					// 불입일
        	this.dsList.setColumn(nrow, "TR_INCOME", 0);       					// 불입주기
        	this.dsList.setColumn(nrow, "TR_TURN", 0);       					// 회전주기
        	this.dsList.setColumn(nrow, "AM_INCOME", 0);       					// 불입액
        	this.dsList.setColumn(nrow, "RT_EZA", 0);          					// 이율(%)
        	this.dsList.setColumn(nrow, "TY_DANBOK", "단리");    				// 이자방식
        	this.dsList.setColumn(nrow, "TY_EZA", "고정금리");    				// 이자유형
        	this.dsList.setColumn(nrow, "TY_EZACAL", "일수(365)");   				// 이자계산방식

        	this.dsList.setColumn(nrow, "TR_EZASTD", 0);       					// 수취일
        	this.dsList.setColumn(nrow, "TR_INTTERM", 0);       				// 주기(개월)
        	this.dsList.setColumn(nrow, "TY_SUNHOO", "후취");    				// 수취기준
        	this.dsList.setColumn(nrow, "TY_YANGDAN", "초일산입");   			// 일수계산

        	this.dsList.setColumn(nrow, "AM_CONT", 0);         					// 계약금액
        	this.dsList.setColumn(nrow, "CT_TINCOM", 0);       					// 총불입횟수
        	this.dsList.setColumn(nrow, "YN_PLAN", "N");       					// 계획생성
        	this.dsList.setColumn(nrow, "YN_CANCEL", "N");     					// 해지여부
        	this.dsList.setColumn(nrow, "TY_EXPIRY", "N");     					// 완료여부
        	this.dsList.setColumn(nrow, "YN_LIMIT", "N");						// 질권설정여부
        	this.dsList.setColumn(nrow, "AM_LIMIT", 0);        					// 담보/제한금액
        	this.dsList.setColumn(nrow, "TY_CMS", "오프라인");					// 브랜치전송
        	this.dsList.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);    // 사용자
        	this.dsList.setColumn(nrow, "CD_CURR", "KRW");					    // 가입통화
        	this.dsList.setColumn(nrow, "TY_INCOME", "월");					    // 불입주기(월)
        	this.dsList.setColumn(nrow, "YN_RETURN", "N");						// 장단기대체(월)

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
        				this.dsInsert.setColumn(nrow, "CD_BANKITEM", this.dsList.getColumn(i, "CD_BANKITEM"));
        				this.dsInsert.setColumn(nrow, "NM_YEJUKUM", this.dsList.getColumn(i, "NM_YEJUKUM"));
        				this.dsInsert.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        				this.dsInsert.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsInsert.setColumn(nrow, "CD_BANK", this.dsList.getColumn(i, "CD_BANK"));
        				this.dsInsert.setColumn(nrow, "NO_ACCOUNT_DCHE", this.dsList.getColumn(i, "NO_ACCOUNT_DCHE"));
        				this.dsInsert.setColumn(nrow, "TY_GUBUN_DCHE", this.dsList.getColumn(i, "TY_GUBUN_DCHE"));
        				this.dsInsert.setColumn(nrow, "CD_BANK_DCHE", this.dsList.getColumn(i, "CD_BANK_DCHE"));
        				this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsInsert.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));
        				this.dsInsert.setColumn(nrow, "DT_CONT", this.dsList.getColumn(i, "DT_CONT"));
        				this.dsInsert.setColumn(nrow, "DT_FINISH", this.dsList.getColumn(i, "DT_FINISH"));
        				this.dsInsert.setColumn(nrow, "DT_INCOME", this.dsList.getColumn(i, "DT_INCOME"));
        				this.dsInsert.setColumn(nrow, "TR_INCOME", this.dsList.getColumn(i, "TR_INCOME"));
        				this.dsInsert.setColumn(nrow, "TR_TURN", this.dsList.getColumn(i, "TR_TURN"));
        				this.dsInsert.setColumn(nrow, "AM_INCOME", this.dsList.getColumn(i, "AM_INCOME"));
        				this.dsInsert.setColumn(nrow, "RT_EZA", this.dsList.getColumn(i, "RT_EZA"));
        				this.dsInsert.setColumn(nrow, "TY_EZA", this.dsList.getColumn(i, "TY_EZA"));
        				this.dsInsert.setColumn(nrow, "TY_DANBOK", this.dsList.getColumn(i, "TY_DANBOK"));
        				this.dsInsert.setColumn(nrow, "TR_EZASTD", this.dsList.getColumn(i, "TR_EZASTD"));
        				this.dsInsert.setColumn(nrow, "TR_INTTERM", this.dsList.getColumn(i, "TR_INTTERM"));
        				this.dsInsert.setColumn(nrow, "TY_SUNHOO", this.dsList.getColumn(i, "TY_SUNHOO"));
        				this.dsInsert.setColumn(nrow, "TY_EZACAL", this.dsList.getColumn(i, "TY_EZACAL"));
        				this.dsInsert.setColumn(nrow, "TY_YANGDAN", this.dsList.getColumn(i, "TY_YANGDAN"));
        				this.dsInsert.setColumn(nrow, "AM_CONT", this.dsList.getColumn(i, "AM_CONT"));
        				this.dsInsert.setColumn(nrow, "CT_TINCOM", this.dsList.getColumn(i, "CT_TINCOM"));
        				this.dsInsert.setColumn(nrow, "YN_CANCEL", this.dsList.getColumn(i, "YN_CANCEL"));
        				this.dsInsert.setColumn(nrow, "DT_CANCEL", this.dsList.getColumn(i, "DT_CANCEL"));
        				this.dsInsert.setColumn(nrow, "TY_EXPIRY", this.dsList.getColumn(i, "TY_EXPIRY"));
        				this.dsInsert.setColumn(nrow, "AM_LIMIT", this.dsList.getColumn(i, "AM_LIMIT"));
        				this.dsInsert.setColumn(nrow, "DS_LIMIT", this.dsList.getColumn(i, "DS_LIMIT"));
        				this.dsInsert.setColumn(nrow, "TY_CMS", this.dsList.getColumn(i, "TY_CMS"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.dsList.getColumn(i, "ID_USER"));
        				this.dsInsert.setColumn(nrow, "CD_CURR", this.dsList.getColumn(i, "CD_CURR"));
        				this.dsInsert.setColumn(nrow, "AM_CONT_KRW", this.dsList.getColumn(i, "AM_CONT_KRW"));
        				this.dsInsert.setColumn(nrow, "YN_RETURN", this.dsList.getColumn(i, "YN_RETURN"));
        				this.dsInsert.setColumn(nrow, "TY_INCOME", this.dsList.getColumn(i, "TY_INCOME"));
        				this.dsInsert.setColumn(nrow, "AM_INCOME_KRW", this.dsList.getColumn(i, "AM_INCOME_KRW"));
        				this.dsInsert.setColumn(nrow, "YN_LIMIT", this.dsList.getColumn(i, "YN_LIMIT"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "CD_BANKITEM", this.dsList.getColumn(i, "CD_BANKITEM"));
        				this.dsUpdate.setColumn(nrow, "NM_YEJUKUM", this.dsList.getColumn(i, "NM_YEJUKUM"));
        				this.dsUpdate.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsUpdate.setColumn(nrow, "CD_BANK", this.dsList.getColumn(i, "CD_BANK"));
        				this.dsUpdate.setColumn(nrow, "NO_ACCOUNT_DCHE", this.dsList.getColumn(i, "NO_ACCOUNT_DCHE"));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN_DCHE", this.dsList.getColumn(i, "TY_GUBUN_DCHE"));
        				this.dsUpdate.setColumn(nrow, "CD_BANK_DCHE", this.dsList.getColumn(i, "CD_BANK_DCHE"));
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));
        				this.dsUpdate.setColumn(nrow, "DT_CONT", this.dsList.getColumn(i, "DT_CONT"));
        				this.dsUpdate.setColumn(nrow, "DT_FINISH", this.dsList.getColumn(i, "DT_FINISH"));
        				this.dsUpdate.setColumn(nrow, "DT_INCOME", this.dsList.getColumn(i, "DT_INCOME"));
        				this.dsUpdate.setColumn(nrow, "TR_INCOME", this.dsList.getColumn(i, "TR_INCOME"));
        				this.dsUpdate.setColumn(nrow, "TR_TURN", this.dsList.getColumn(i, "TR_TURN"));
        				this.dsUpdate.setColumn(nrow, "AM_INCOME", this.dsList.getColumn(i, "AM_INCOME"));
        				this.dsUpdate.setColumn(nrow, "RT_EZA", this.dsList.getColumn(i, "RT_EZA"));
        				this.dsUpdate.setColumn(nrow, "TY_EZA", this.dsList.getColumn(i, "TY_EZA"));
        				this.dsUpdate.setColumn(nrow, "TY_DANBOK", this.dsList.getColumn(i, "TY_DANBOK"));
        				this.dsUpdate.setColumn(nrow, "TR_EZASTD", this.dsList.getColumn(i, "TR_EZASTD"));
        				this.dsUpdate.setColumn(nrow, "TR_INTTERM", this.dsList.getColumn(i, "TR_INTTERM"));
        				this.dsUpdate.setColumn(nrow, "TY_SUNHOO", this.dsList.getColumn(i, "TY_SUNHOO"));
        				this.dsUpdate.setColumn(nrow, "TY_EZACAL", this.dsList.getColumn(i, "TY_EZACAL"));
        				this.dsUpdate.setColumn(nrow, "TY_YANGDAN", this.dsList.getColumn(i, "TY_YANGDAN"));
        				this.dsUpdate.setColumn(nrow, "AM_CONT", this.dsList.getColumn(i, "AM_CONT"));
        				this.dsUpdate.setColumn(nrow, "CT_TINCOM", this.dsList.getColumn(i, "CT_TINCOM"));
        				this.dsUpdate.setColumn(nrow, "YN_CANCEL", this.dsList.getColumn(i, "YN_CANCEL"));
        				this.dsUpdate.setColumn(nrow, "DT_CANCEL", this.dsList.getColumn(i, "DT_CANCEL"));
        				this.dsUpdate.setColumn(nrow, "TY_EXPIRY", this.dsList.getColumn(i, "TY_EXPIRY"));
        				this.dsUpdate.setColumn(nrow, "AM_LIMIT", this.dsList.getColumn(i, "AM_LIMIT"));
        				this.dsUpdate.setColumn(nrow, "DS_LIMIT", this.dsList.getColumn(i, "DS_LIMIT"));
        				this.dsUpdate.setColumn(nrow, "TY_CMS", this.dsList.getColumn(i, "TY_CMS"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "NO_YEJUKUM", this.dsList.getColumn(i, "NO_YEJUKUM"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "CD_CURR", this.dsList.getColumn(i, "CD_CURR"));
        				this.dsUpdate.setColumn(nrow, "AM_CONT_KRW", this.dsList.getColumn(i, "AM_CONT_KRW"));
        				this.dsUpdate.setColumn(nrow, "YN_RETURN", this.dsList.getColumn(i, "YN_RETURN"));
        				this.dsUpdate.setColumn(nrow, "TY_INCOME", this.dsList.getColumn(i, "TY_INCOME"));
        				this.dsUpdate.setColumn(nrow, "AM_INCOME_KRW", this.dsList.getColumn(i, "AM_INCOME_KRW"));
        				this.dsUpdate.setColumn(nrow, "YN_LIMIT", this.dsList.getColumn(i, "YN_LIMIT"));
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "NO_YEJUKUM", this.dsList.getColumn(i, "NO_YEJUKUM"));
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

        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "combo"){

        		//  조회조건(완료여부)
        		var iRow = this.dsTY_EXPIRY.insertRow(0);
        		this.dsTY_EXPIRY.setColumn(iRow, "CD_CODE", "");
        		this.dsTY_EXPIRY.setColumn(iRow, "DS_CODE", "전체");
        		this.cboTY_EXPIRY.set_index(2);

        		if ( !this.gfnIsNull(this.getOwnerFrame().NO_YEJUKUM) ) {

        			// from 예적금약정현황조회 or 예적금거래현황조회
        			this.cfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        			this.cfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);
        			this.cfNO_YEJUKUM.form.CDTextBox.set_value(this.getOwnerFrame().NO_YEJUKUM);
        			this.cfNO_YEJUKUM.form.DSTextBox.set_value(this.getOwnerFrame().NM_YEJUKUM);
        // 			this.cfCD_BANKITEM.form.CDTextBox.set_value(this.getOwnerFrame().CD_BANKITEM);
        // 			this.cfCD_BANKITEM.form.DSTextBox.set_value(this.getOwnerFrame().DS_BANKITEM);
        			this.cboTY_EXPIRY.set_index(0);
        			this.FormBtns.Select.click();
        		}

        	}else if(svcID == "e_create") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "selectExc") {
        		if (errorCode == 0) {
        			if (this.dsRtEx.rowcount > 0)
        			{
        				this.dsList.setColumn(this.dsList.rowposition , "RT_EXCH", this.dsRtEx.getColumn(0, "RT_KRW_EXCH"));
        			}
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

        	// 금융상품(조회조건)
        	case "cfCD_BANKITEM":
        		dsUserParam.setColumn(nrow, "YN_USE", "");
        		break;

        	// 관리번호(조회조건)
        	case "cfNO_YEJUKUM":
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(cdCorp) ? "" : cdCorp);
        		break;

        	// 법인코드
        	case "ccfCD_CORP":
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.gfnIsNull(this.cdGroup) ? "" : this.cdGroup);
        		break;

        	// 금융상품
        	case "cfCD_BANKITEM2":
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		break;

        	// 계좌
        	case "cfNO_ACCOUNT":
        		dsUserParam.setColumn(nrow, "GUBUN", "DFF");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(cdCorp2) ? "" : cdCorp2);
        		break;

        	// 금융기관
        	case "cfCD_VENDOR":
        		dsUserParam.setColumn(nrow, "TY_VENDOR1", "전체");
        		dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		break;

        	// 귀속부서
        	case "cfCD_DEPT_ACNT":
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.gfnIsNull(this.cdGroup) ? "" : this.cdGroup);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(cdCorp2) ? "" : cdCorp2);
        		break;

        	// 대체계좌
        	case "cfNO_ACCOUNT_DCHE":
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(cdCorp2) ? "" : cdCorp2);
        		break;

        	default:
        	}
        	//trace("dsUserParam :: " + dsUserParam.saveXML());
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	trace("fnAfterCDTextChanged :: " + id);

        	// 법인코드(조회조건)
        	if (id == "cfCD_CORP") {
        	}

        	// 금융상품(조회조건)
        	if (id == "cfCD_BANKITEM") {

        	}

        	// 관리번호(조회조건)
        	if (id == "cfNO_YEJUKUM") {
        	}

        	// 법인코드
        	if (id == "ccfCD_CORP") {
        	}

        	// 금융상품
        	if (id == "cfCD_BANKITEM2") {
        	    if(arr.length > 0) {
        		   if ( arr[0]["CD_BANKITEM"] < "15000" || (arr[0]["CD_BANKITEM"] > "20000" && arr[0]["CD_BANKITEM"] < "25000")) {
        			 this.cboCD_CURR.set_value("KRW");
        			 this.fnSetComponent(false);
        		   } else {
        			 this.fnSetComponent(true);
        		   }
        		}
        	}

        	// 계좌
        	if (id == "cfNO_ACCOUNT") {
        		if(arr.length > 0) {
        			this.dsList.setColumn(this.dsList.rowposition, "TY_GUBUN", arr[0]["TY_GUBUN"]);
        			this.dsList.setColumn(this.dsList.rowposition, "CD_BANK", arr[0]["CD_BANK"]);
        			this.dsList.setColumn(this.dsList.rowposition, "DS_BANK", arr[0]["DS_BANK"]);
        			this.dsList.setColumn(this.dsList.rowposition, "CD_VENDOR", arr[0]["CD_MANAGEBANK"]);
        			this.dsList.setColumn(this.dsList.rowposition, "DS_VENDOR", arr[0]["DS_MANAGEBANK"]);
        			this.dsList.setColumn(this.dsList.rowposition, "CD_DEPT_ACNT", arr[0]["CD_DEPT_ACNT"]);
        			this.dsList.setColumn(this.dsList.rowposition, "DS_DEPT_ACNT", arr[0]["DS_DEPT_ACNT"]);

        			this.dsList.setColumn(this.dsList.rowposition, "RT_EZA", arr[0]["RT_EZA"]);
        			this.dsList.setColumn(this.dsList.rowposition, "DT_CONT", arr[0]["DT_START"]);
        			this.dsList.setColumn(this.dsList.rowposition, "DT_FINISH", arr[0]["DT_EXPIRY"]);
        			this.dsList.setColumn(this.dsList.rowposition, "NM_YEJUKUM", arr[0]["NM_ACCOUNT"]);
        		}
        	}

        	// 금융기관
        	if (id == "cfCD_VENDOR") {
        	}

        	// 귀속부서
        	if (id == "cfCD_DEPT_ACNT") {
        	}

        	// 대체계좌
        	if (id == "cfNO_ACCOUNT_DCHE") {
        		if(arr.length > 0) {
        			this.dsList.setColumn(this.dsList.rowposition, "TY_GUBUN_DCHE", arr[0]["TY_GUBUN"]);
        			this.dsList.setColumn(this.dsList.rowposition, "CD_BANK_DCHE", arr[0]["CD_BANK"]);
        		}
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

        	trace(" fnGrid_RowCellChanged=>" + e.row);
        	//
        	//this.fnSetDtIncomeVisible(e.row, "");
        };


        //그리드 값변경 이벤트
        this.dsList_ColumnChanged = function(obj, e)
        {
        	trace("그리드 값변경 이벤트 " + e.columnid + "/" + e.newvalue)

        	if(e.columnid == "CD_CURR" || e.columnid == "DT_CONT"){
        		if(e.newvalue != e.oldvalue){
        			if ( !this.gfnIsNull(this.dsList.getColumn(e.row , "CD_CURR")) && !this.gfnIsNull(this.dsList.getColumn(e.row , "DT_CONT")) )
        			{
        				this.fnSetRtExchange();
        			}
        		}
        	}else if(e.columnid == "RT_EXCH")
        	{
        		if (this.dsList.getColumn(e.row , "AM_CONT") > 0)
        		{
        			this.fnSetRtExchangeCallback(e.row, "AM_CONT");
        		}
        		if (this.dsList.getColumn(e.row , "AM_INCOME") > 0)
        		{
        			this.fnSetRtExchangeCallback(e.row, "AM_INCOME");
        		}
        	}else if(e.columnid == "AM_CONT" || e.columnid == "AM_INCOME")
        	{
        		if(e.newvalue != e.oldvalue){
        			this.fnSetRtExchangeCallback(e.row, e.columnid);
        		}
        	}else if(e.columnid == "TY_INCOME")
        	{
        		//this.fnSetDtIncomeVisible(e.row , e.newvalue);
        	}

        }

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

        /*
         * 컴포넌트 enable/disable처리
         */
        this.fnSetComponent = function(flag) {
        this.cboCD_CURR.set_enable(flag);		    //  화폐
        //	this.txtNO_CHAIP.set_enable(flag);		//  차입번호(관리번호)
        // 	this.StxtAccntNo.set_enable(flag);		//  계좌번호
        // 	this.ccfAccntOwner.set_enable(flag);	//  계좌소유주
        }


        this.fnDataValidate = function(){

        	var msg = "은(는) 필수입력 입니다.";

        	for (var i=0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "nx_flag") == "I" || this.dsList.getColumn(i, "nx_flag") == "U") {

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "CD_CORP")))){
        				this.gfnAlert("법인코드" + msg);
        				this.dsList.set_rowposition(i);
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "CD_BANKITEM")))){
        				this.gfnAlert("금융상품" + msg);
        				this.dsList.set_rowposition(i);
        				this.cfCD_BANKITEM2.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "NM_YEJUKUM")))){
        				this.gfnAlert("예적금명" + msg);
        				this.dsList.set_rowposition(i);
        				this.txtNM_YEJUKUM.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "NO_ACCOUNT")))){
        				this.gfnAlert("예적금계좌" + msg);
        				this.dsList.set_rowposition(i);
        				this.cfNO_ACCOUNT.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "CD_VENDOR")))){
        				this.gfnAlert("금융기관" + msg);
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

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "NO_ACCOUNT_DCHE")))){
        				this.gfnAlert("대체계좌" + msg);
        				this.dsList.set_rowposition(i);
        				this.cfNO_ACCOUNT_DCHE.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "DT_CONT")))){
        				this.gfnAlert("가입기간(from)" + msg);
        				this.dsList.set_rowposition(i);
        				this.calDT_CONT.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "DT_FINISH"))){
        				this.gfnAlert("가입기간(to)" + msg);
        				this.dsList.set_rowposition(i);
        				this.calDT_FINISH.setFocus();
        				return false;
        			}

        			if ( !this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "DT_CONT"))) && !this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "DT_FINISH"))) ) {
        				if ( this.gfnTrim(this.dsList.getColumn(i, "DT_CONT")) > this.gfnTrim(this.dsList.getColumn(i, "DT_FINISH")) ) {
        					this.gfnAlert("가입기간이 잘못 입력 되었습니다.");
        					this.dsList.set_rowposition(i);
        					this.calDT_CONT.setFocus();
        					return false;
        				}
        			}

        // 			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "DT_INCOME")))){
        // 				this.gfnAlert("불입일" + msg);
        // 				this.dsList.set_rowposition(i);
        // 				this.txtDT_INCOME.setFocus();
        // 				return false;
        // 			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "TY_DANBOK")))){
        				this.gfnAlert("방식" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboTY_DANBOK.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "TY_EZA"))){
        				this.gfnAlert("유형" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboTY_EZA.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "TY_EZACAL"))){
        				this.gfnAlert("계산방식" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboTY_EZACAL.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "TY_SUNHOO"))){
        				this.gfnAlert("수취기준" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboTY_SUNHOO.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.dsList.getColumn(i, "TY_YANGDAN"))){
        				this.gfnAlert("일수계산" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboTY_YANGDAN.setFocus();
        				return false;
        			}


        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "YN_PLAN")))){
        				this.gfnAlert("계획생성" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboYN_PLAN.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "YN_CANCEL")))){
        				this.gfnAlert("해지여부" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboYN_CANCEL.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "TY_EXPIRY")))){
        				this.gfnAlert("완료여부" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboTY_EXPIRY2.setFocus();
        				return false;
        			}

        			if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(i, "TY_CMS")))){
        				this.gfnAlert("ECMS전송" + msg);
        				this.dsList.set_rowposition(i);
        				this.cboTY_CMS.setFocus();
        				return false;
        			}
        		}
        	}
        	return true;
        }

        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "F0");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(1, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(1, "CD_TYPE", "F3");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(2, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(2, "CD_TYPE", "F6");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(3, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(3, "CD_TYPE", "F9");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(4, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(4, "CD_TYPE", "F5");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(5, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(5, "CD_TYPE", "F7");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(6, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(6, "CD_TYPE", "ZZ");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(7, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(7, "CD_TYPE", "40");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(8, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(8, "CD_TYPE", "FD");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_DANBOK=combo0 dsTY_EZA=combo1 dsTY_EZACAL=combo2 dsTY_EXPIRY=combo3 dsTY_EXPIRY2=combo3 dsTY_SUNHOO=combo4 dsTY_YANGDAN=combo5 dsTY_CMS=combo6 dsCD_CURR=combo7 dsTY_INCOME=combo8";
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

        // 환율 가져오기
        this.fnSetRtExchange = function ()
        {
        	this.dsExchange = new Dataset();
        	this.dsExchange.addColumn("TY_GUBUN", "string");
        	this.dsExchange.addColumn("CN_ROW", "int");
        	this.dsExchange.addColumn("VALUE", "string");
        	this.dsExchange.addColumn("MIN_VALUE", "string");
        	this.dsExchange.addColumn("DT_BASE", "string");
        	this.dsExchange.addColumn("CD_LOCAL_CURR", "string");
        	this.dsExchange.addColumn("CD_EXEC_CURR", "string");

        	this.dsExchange.addRow();
        	this.dsExchange.setColumn(0, "TY_GUBUN", "");
        	this.dsExchange.setColumn(0, "CN_ROW", 0);
        	this.dsExchange.setColumn(0, "VALUE", "");
        	this.dsExchange.setColumn(0, "MIN_VALUE", "");
        	this.dsExchange.setColumn(0, "DT_BASE", this.dsList.getColumn(this.dsList.rowposition, "DT_CONT"));
        	this.dsExchange.setColumn(0, "CD_LOCAL_CURR", "KRW");
        	this.dsExchange.setColumn(0, "CD_EXEC_CURR", this.dsList.getColumn(this.dsList.rowposition, "CD_CURR"));

        	var strSvcId    = "selectExc";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectExc=dsExchange";
        	var outData     = "dsRtEx=selectExc0";
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

        //환율 계산 처리
        this.fnSetRtExchangeCallback = function(row , column)
        {
        	var rtExchange = this.dsList.getColumn(row, "RT_EXCH");

        	trace("fnSetRtExchangeCallback rtExchage=>" + rtExchange);

        	var amContKrw = nexacro.toNumber(this.dsList.getColumn(row, column )) * rtExchange;

        	this.dsList.setColumn(row, column+"_KRW", this.fnGetTrunc(amContKrw, 1));

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

        this.divData_onitemchanged = function(obj,e)
        {
            trace(" divData_onitemchanged =>" + obj.text);
        	if (obj.text == "월") {
        		this.cboDT_INCOME.set_visible(false);
        		this.txtDT_INCOME.set_visible(true);
        	}else{
        		this.cboDT_INCOME.set_visible(true);
        		this.txtDT_INCOME.set_visible(false);
        	}
        };

        this.fnSetDtIncomeVisible = function(nRow, vIncome)
        {

            if (vIncome == "" ) { vIncome = this.dsList.getColumn(nRow, "TY_INCOME")}
        	 trace(" fnSetDtIncomeVisible =>" + vIncome);
        	if (vIncome == "주") {
        		this.cboDT_INCOME.set_visible(true);
        		this.txtDT_INCOME.set_visible(false);
        	}else{
        		this.cboDT_INCOME.set_visible(false);
        		this.txtDT_INCOME.set_visible(true);
        	}
        };

        // 계획생성
        this.fnPlanCreat = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	this.gfnConfirm("예적금 계획자료를 생성 하시겠습니까?.", "fnPlanCreatCallback");
        }

        // 계획생성 Callback
        this.fnPlanCreatCallback = function(strId, val) {

        	if(val == false) return;

        	this.dsExcute.clearData();
        	this.dsExcute.addRow();

        	this.dsExcute.setColumn(0, "NO_YEJUKUM", this.dsList.getColumn(this.dsList.rowposition,"NO_YEJUKUM"));
        	this.dsExcute.setColumn(0, "DT_DATE", this.dsList.getColumn(this.dsList.rowposition,"DT_CONT"));
        	this.dsExcute.setColumn(0, "YN_FIRST", "Y");
        	this.dsExcute.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "e_create";
        	var strSvcType  = "savesel";
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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]

        }

        // 계획/실적
        this.fnPlanPerform = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.OWNER_ID = "DFF_DEPOSIT_REG";

        	param.CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	param.DS_CORP = this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");
        	param.DT_FROM = this.dsList.getColumn(this.dsList.rowposition, "DT_CONT");
        	param.DT_TO =  this.gfnGetLastDate(this.dsList.getColumn(this.dsList.rowposition, "DT_FINISH"));
        	param.NO_YEJUKUM = this.dsList.getColumn(this.dsList.rowposition, "NO_YEJUKUM");
        	param.NM_YEJUKUM = this.dsList.getColumn(this.dsList.rowposition, "NM_YEJUKUM");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DFF_PLANSILJUK", "", param);
        }

        // 예적금변동정보등록
        this.fnChngInfoInsert = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	var param = {};

        	param.CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	param.DS_CORP = this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");
        	param.DT_FROM = this.dsList.getColumn(this.dsList.rowposition, "DT_CONT");
        	param.NO_YEJUKUM = this.dsList.getColumn(this.dsList.rowposition,"NO_YEJUKUM");
        	param.NM_YEJUKUM = this.dsList.getColumn(this.dsList.rowposition,"NM_YEJUKUM");
        	this.gfnFormOpen("DFF", "DFF_DEPOSIT_CHG", "fnPopCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());
        }


        this.fnAccount = function ()
        {
        	var param = {};
        	param.OWNER_ID = "DFF_DEPOSIT_REG";

        	this.gfnFormOpen("DFB", "DFL_FBSACCOUNT", "", param);

        };

        this.fnPopCallBack = function(svcID, val) {

        	if (svcID.indexOf("DFF_DEPOSIT_CHG") > -1) {
        		this.FormBtns.Select.click();
        	}
        }


        this.dsList_onrowposchanged = function(obj,e)
        {
        	var vRowStatus = obj.getColumn(e.newrow, "nx_flag");

        	// 입력시에는 키컴포넌트는 enable(true) else enable(false)
        	if (vRowStatus == "I") {
        		// 컴포넌트 enable/disable처리
        		if (this.dsList.getColumn(this.dsList.rowposition, "CD_BANKITEM") < "15000" ||(this.dsList.getColumn(this.dsList.rowposition, "CD_BANKITEM") > "20000" && this.dsList.getColumn(this.dsList.rowposition, "CD_BANKITEM") < "25000")) {
        			this.fnSetComponent(false);
        		}else {
        			this.fnSetComponent(true);
        		}
        	} else {
        		// 컴포넌트 enable/disable처리
        		if (this.dsList.getColumn(this.dsList.rowposition, "CD_BANKITEM") < "15000" ||(this.dsList.getColumn(this.dsList.rowposition, "CD_BANKITEM") > "20000" && this.dsList.getColumn(this.dsList.rowposition, "CD_BANKITEM") < "25000")) {
        			this.fnSetComponent(false);
        		}else {
        			this.fnSetComponent(true);
        		}
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if ( e.oldvalue != e.newvalue ) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
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
        		//var cdDir = "NO_YUGA";
        		var cdDir = "NO_YEJUKUM";

        		var fileManager = {};
        		fileManager.CD_GUBUN = cdGubun;
        		fileManager.CD_DIR = [this.dsList.getColumn(this.dsList.rowposition, cdDir)];
        		fileManager.IS_READONLY = false;

        // 		trace("VcboAccntGb :: " + VcboAccntGb);
        // 		trace("fileManager.CD_GUBUN :: " + fileManager.CD_GUBUN);
         		trace("fileManager.CD_DIR :: " + fileManager.CD_DIR);
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

        // 원단위 절사
        this.fnGetTrunc = function(amVal, vCnt){
        	var returnVal = this.gfnNvl(amVal, 0);
        	if(returnVal > 0){
        		returnVal = Math.floor(amVal/vCnt) * vCnt;
        	}
        	return returnVal;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboTY_EXPIRY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataRight.form.sta03.addEventHandler("onclick",this.divData_divDataRight_sta03_onclick,this);
            this.divData.form.divDataRight.form.mskCT_TINCOM.addEventHandler("onchanged",this.divData_divDataRight_mskCT_TINCOM_onchanged,this);
            this.divData.form.divDataRight.form.cboTY_INCOME.addEventHandler("onitemchanged",this.divData_onitemchanged,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DFF_DEPOSIT_REG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
