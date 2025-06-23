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
            this.set_titletext("선급비용관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1500,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"URL_PROOF\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"URL_PROOF\">첨부</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_EXPENSE_REGISTRATION_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHAPR_EXPENSE_REGISTRATION_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHAPR_EXPENSE_REGISTRATION_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHAPR_EXPENSE_REGISTRATION_DELETE</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DHAPR_EXPENSEPLAN_SELECT</Col></Row><Row><Col id=\"TARGET\">d_insert</Col><Col id=\"SP\">DHAPR_EXPENSEPLAN_INSERT</Col></Row><Row><Col id=\"TARGET\">d_update</Col><Col id=\"SP\">DHAPR_EXPENSEPLAN_UPDATE</Col></Row><Row><Col id=\"TARGET\">d_delete</Col><Col id=\"SP\">DHAPR_EXPENSEPLAN_DELETE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHAPR_EXPENSEPLAN_CREATE</Col></Row><Row><Col id=\"TARGET\">issueSlip</Col><Col id=\"SP\">DHAPR_EXPENSE_AUTOSLIP_INSERT</Col></Row><Row><Col id=\"TARGET\">cancelSlip</Col><Col id=\"SP\">DHAPR_EXPENSE_AUTOSLIP_DELETE</Col></Row><Row><Col id=\"SP\">DHAPR_EXPENSE_REGISTRATION_INSERT_TEST</Col><Col id=\"TARGET\">inserttest</Col></Row><Row><Col id=\"TARGET\">selectList</Col><Col id=\"SP\">DHAPR_EXPENSE_REGISTRATIONLIST_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">selectExc</Col><Col id=\"SP\">DHXPR_CURRENCY_EXCHAGE</Col></Row><Row><Col id=\"TARGET\">linkcancel</Col><Col id=\"SP\">DHAPR_EXPENSE_SLIP_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">DT_ACCOUNT</Col><Col id=\"DS_FIELD\">회계일자</Col></Row><Row><Col id=\"CD_FIELD\">DT_FROM</Col><Col id=\"DS_FIELD\">기간 시작일</Col></Row><Row><Col id=\"CD_FIELD\">DT_TO</Col><Col id=\"DS_FIELD\">기간 종료일</Col></Row><Row><Col id=\"CD_FIELD\">CD_ACCOUNT</Col><Col id=\"DS_FIELD\">선급비용계정</Col></Row><Row><Col id=\"CD_FIELD\">CD_VENDOR</Col><Col id=\"DS_FIELD\">거래처</Col></Row><Row><Col id=\"CD_FIELD\">NO_ACCOUNT</Col><Col id=\"DS_FIELD\">거래처계좌번호</Col></Row><Row><Col id=\"CD_FIELD\">DT_REQ</Col><Col id=\"DS_FIELD\">집행요청일자</Col></Row><Row><Col id=\"CD_FIELD\">CD_PROOF</Col><Col id=\"DS_FIELD\">증빙코드</Col></Row><Row><Col id=\"CD_FIELD\">CD_CURR</Col><Col id=\"DS_FIELD\">발생통화코드</Col></Row><Row><Col id=\"CD_FIELD\">AM_EXPENSE</Col><Col id=\"DS_FIELD\">비용금액</Col></Row><Row><Col id=\"CD_FIELD\">RM_BIGO</Col><Col id=\"DS_FIELD\">적요</Col></Row><Row><Col id=\"CD_FIELD\">CD_DEPT</Col><Col id=\"DS_FIELD\">귀속부서</Col></Row><Row><Col id=\"CD_FIELD\">CD_DEPT_BH</Col><Col id=\"DS_FIELD\">발행부서</Col></Row><Row><Col id=\"CD_FIELD\">CD_BANJE_ACCOUNT</Col><Col id=\"DS_FIELD\">반제계정코드</Col></Row><Row><Col id=\"CD_FIELD\">CD_DEPT_BANJE</Col><Col id=\"DS_FIELD\">반제귀속부서</Col></Row><Row><Col id=\"CD_FIELD\">AM_EXEC</Col><Col id=\"DS_FIELD\">비용금액(발생통화)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_EXPENSE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_EXPENSE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_CURR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtEx", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta01:0.0","10.0","219","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("발행부서");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","staCD_DEPT_ACNT:0.0","10.0","274","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfCD_DEPT_ACNT:-370","10.0","118","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("선급비용번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_EXPENSE","sta00:0","10.0","128","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("DSTextWidth").set("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_END","808","10.0","144","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("완성된 자료제외");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter00","18.13%","0","5",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cursor("ew-resize");
            obj.set_cssclass("div_Splitter");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter00:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_scrollbartype("auto");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter00:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_tooltiptype("default");
            obj.set_text("ssss");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","37%",null,"5","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_Splitter");
            obj.set_cursor("ns-resize");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta02","0","8",null,"22","0",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.set_taborder("1");
            obj.set_text("계획정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.getSetter("sub").set("true");
            obj._setContents("");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnGridSave","sta02:-45","0","45","23",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnGridDelete","sta02:-95","0",null,"23","btnGridSave:5",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnGridAdd",null,"0","45","23","100",null,null,null,null,null,this.divData.form.divDataRight.form.divDataBottom.form);
            obj.set_taborder("4");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CRUD");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataBottom.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta19","124","222","299","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("59");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta10","0","136","130","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("39");
            obj.set_text("비용금액(발생통화)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta14","sta10:-1","136","294","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("44");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta12","514","107",null,"30","10",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("40");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta01","0","-4","100.00%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("0");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta00","0","199","98.61%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("57");
            obj.set_text("반제전표 기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta02","0","49","130","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("24");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta11","sta02:-1","49","294","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta21","sta11:-1","49","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("26");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta31","sta21:-1","49",null,"30","10",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","sta21:5","54","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta07","ctclDT_FROM:7","54","10","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("28");
            obj.set_text("~");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","sta07:8","54","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta03","0","78","130","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("31");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta04","sta03:-1","78","294","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","sta03:5","83","280","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta06","sta04:-1","78","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("33");
            obj.set_text("거래처계좌번호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta38","795","49","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("29");
            obj.set_text("선급비용계정");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_visible("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACCOUNT","sta38:5","54","280","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta05","sta06:-1","78",null,"30","10",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ccfNO_ACCOUNT","sta06:5","83","258","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta08","0","107","130","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("36");
            obj.set_text("증빙코드");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","107","294","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ccfCD_PROOF","sta08:5","112","280","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta13","422","107","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("43");
            obj.set_text("적요");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Combo("cboCD_CURR","135","141","70","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("14");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsCD_CURR");
            obj.set_value("LOAN");
            obj.set_index("0");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_EXEC","cboCD_CURR:2","141","130","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("15");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###,###.##");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtRM_BIGO","sta13:5","112","652","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("13");
            obj.set_maxlength("1000");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta15","0","165","130","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("45");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta16","sta15:-1","165","294","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("46");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","sta15:5","170","280","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("19");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta26","80","-5","130","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("49");
            obj.set_text("차량번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta28","209","-5","294","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("50");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ccfCD_CAR","sta26:5","0","280","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("51");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta18","0","222","130","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("58");
            obj.set_text("반제계정코드");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta20","876","-5","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("64");
            obj.set_text("공종코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta22","sta26:754","-5",null,"30","-70",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("55");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ccfCD_BANJE_ACCOUNT","sta18:5","227","280","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("21");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ccfCD_GONGJONG","sta20:-5","0",null,"20","38",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("56");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta27","481","136",null,"30","10",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("42");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta25","795","136","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("41");
            obj.set_text("부가세");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_VAT","sta25:5","142","130","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("18");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###,###");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta17","mskAM_VAT:3","142","20","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("65");
            obj.set_text("원");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta23","0","20","130","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("1");
            obj.set_text("전자세금계산서번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta24","sta23:-1","20",null,"30","10",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Button("btnCD_SLIP","1160","24","40","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("66");
            obj.set_text("조회");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ccfISSUE_ID","sta23:5","25","280","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.getSetter("CDTextWidth").set("180");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta30","422","20","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("4");
            obj.set_text("비용번호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACCOUNT","sta23:5","55","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta37","795","20","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("17");
            obj.set_text("전표번호(계상)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtNO_EXPENSE","sta30:5","25","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("23");
            obj.set_maxlength("7");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_END","txtNO_EXPENSE:10","25","134","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("30");
            obj.set_text("완료여부");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta32","sta16:-1","165","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("47");
            obj.set_text("발행부서");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta33","sta32:-1","165",null,"30","10",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("48");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_BH","sta32:5","170","280","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("20");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta34","sta19:-2","222","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("60");
            obj.set_text("반제귀속부서");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta35","sta34:-1","222",null,"30","10",null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("61");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_BANJE","sta34:5","227","280","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("22");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta36","ccfCD_DEPT_BANJE:15","222","95","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("62");
            obj.set_text("세목");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Div("ccfCD_SEMOK","sta36:5","228","258","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("63");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta39","795","78","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("35");
            obj.set_text("집행요청일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REQ","sta39:5","83","105","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtTY_VENDOR","60","82","60","21",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("32");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("staNO_SEQ","502","-5","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("52");
            obj.set_text("법인카드번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta29","605","-5","270","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("53");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtNO_SEQ","610","1","127","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("54");
            obj.set_visible("false");
            obj.set_enable("false");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("edtCD_SLIP","sta37:5","25","150","21",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("67");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Edit("txtCD_TRADE","905","25","163","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("68");
            obj.set_enable("false");
            obj.set_text("");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta50","422","136","105","30",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("69");
            obj.set_text("비용금액(원화)");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new MaskEdit("mskAM_EXPENSE","sta50:5","141","130","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("16");
            obj.set_limitbymask("both");
            obj.set_format("###,###,###,###,###,###");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);

            obj = new Static("sta17_00","mskAM_EXPENSE:3","141","20","20",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataTop.form);
            obj.set_taborder("70");
            obj.set_text("원");
            this.divData.form.divDataRight.form.divDataTop.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item17","divSearch.form.ccfNO_EXPENSE.form.CDTextBox","value","dsSearch","NO_EXPENSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearch.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divSearch.form.ccfCD_DEPT_ACNT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.divDataRight.form.divDataTop.form.txtNO_EXPENSE","value","dsList","NO_EXPENSE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divDataRight.form.divDataTop.form.ccfCD_ACCOUNT.form.CDTextBox","value","dsList","CD_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataRight.form.divDataTop.form.ccfCD_ACCOUNT.form.DSTextBox","value","dsList","DS_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataRight.form.divDataTop.form.ctclDT_TO","value","dsList","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataRight.form.divDataTop.form.ctclDT_FROM","value","dsList","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataRight.form.divDataTop.form.ccfCD_VENDOR.form.CDTextBox","value","dsList","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataRight.form.divDataTop.form.ccfCD_VENDOR.form.DSTextBox","value","dsList","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataRight.form.divDataTop.form.ccfCD_DEPT.form.CDTextBox","value","dsList","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataRight.form.divDataTop.form.ccfCD_DEPT.form.DSTextBox","value","dsList","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataRight.form.divDataTop.form.txtRM_BIGO","value","dsList","RM_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataRight.form.divDataTop.form.ccfCD_BANJE_ACCOUNT.form.CDTextBox","value","dsList","CD_BANJE_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataRight.form.divDataTop.form.ccfCD_BANJE_ACCOUNT.form.DSTextBox","value","dsList","DS_BANJE_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.divDataRight.form.divDataTop.form.ccfCD_GONGJONG.form.CDTextBox","value","dsList","CD_TRIAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divData.form.divDataRight.form.divDataTop.form.ccfCD_GONGJONG.form.DSTextBox","value","dsList","DS_TRIAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divData.form.divDataRight.form.divDataTop.form.chkYN_END","value","dsList","YN_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divData.form.divDataRight.form.divDataTop.form.mskAM_VAT","value","dsList","AM_VAT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divData.form.divDataRight.form.divDataTop.form.mskAM_EXEC","value","dsList","AM_EXEC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divData.form.divDataRight.form.divDataTop.form.ccfCD_PROOF.form.CDTextBox","value","dsList","CD_PROOF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divData.form.divDataRight.form.divDataTop.form.ccfCD_PROOF.form.DSTextBox","value","dsList","DS_PROOF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divData.form.divDataRight.form.divDataTop.form.ccfISSUE_ID.form.CDTextBox","value","dsList","ISSUE_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divData.form.divDataRight.form.divDataTop.form.ctclDT_ACCOUNT","value","dsList","DT_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divData.form.divDataRight.form.divDataTop.form.ccfCD_DEPT_BH.form.CDTextBox","value","dsList","CD_DEPT_BH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divData.form.divDataRight.form.divDataTop.form.ccfCD_DEPT_BH.form.DSTextBox","value","dsList","DS_DEPT_BH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divData.form.divDataRight.form.divDataTop.form.ccfCD_DEPT_BANJE.form.CDTextBox","value","dsList","CD_DEPT_BANJE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divData.form.divDataRight.form.divDataTop.form.ccfCD_DEPT_BANJE.form.DSTextBox","value","dsList","DS_DEPT_BANJE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divData.form.divDataRight.form.divDataTop.form.ccfCD_SEMOK.form.CDTextBox","value","dsList","CD_SEMOK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divData.form.divDataRight.form.divDataTop.form.ccfCD_SEMOK.form.DSTextBox","value","dsList","DS_SEMOK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divData.form.divDataRight.form.divDataTop.form.ctclDT_REQ","value","dsList","DT_REQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divData.form.divDataRight.form.divDataTop.form.ccfNO_ACCOUNT.form.CDTextBox","value","dsList","NO_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divData.form.divDataRight.form.divDataTop.form.ccfNO_ACCOUNT.form.DSTextBox","value","dsList","DS_BANK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divData.form.divDataRight.form.divDataTop.form.edtTY_VENDOR","value","dsList","TY_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divData.form.divDataRight.form.divDataTop.form.ccfCD_CAR.form.CDTextBox","value","dsList","CD_CAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divData.form.divDataRight.form.divDataTop.form.ccfCD_CAR.form.DSTextBox","value","dsList","NO_CAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divData.form.divDataRight.form.divDataTop.form.edtNO_SEQ","value","dsList","NO_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divData.form.divDataRight.form.divDataTop.form.edtCD_SLIP","value","dsList","CD_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataRight.form.divDataTop.form.txtCD_TRADE","value","dsList","CD_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divData.form.divDataRight.form.divDataTop.form.cboCD_CURR","value","dsList","CD_CURR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divData.form.divDataRight.form.divDataTop.form.mskAM_EXPENSE","value","dsList","AM_EXPENSE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_EXPENSE_REGISTRATION.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.gReadOnlyFlag = true;

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
        	this.ccfCD_CORP.setFocus();

        	//다른화면에서 들어왔을 경우
        	if(!this.gfnIsNull(this.getOwnerFrame().NO_EXPENSE)) {

        		var NO_EXPENSE = this.getOwnerFrame().NO_EXPENSE;
        		var CD_CORP = this.getOwnerFrame().CD_CORP;
        		var DS_CORP = this.getOwnerFrame().DS_CORP;
        		var CD_DEPT = this.getOwnerFrame().CD_DEPT;
        		var DS_DEPT = this.getOwnerFrame().DS_DEPT;

        		this.dsSearch.set_enableevent(false);
        		this.dsSearch.setColumn(0, "CD_CORP", CD_CORP);
        		this.dsSearch.setColumn(0, "DS_CORP", DS_CORP);
        		//this.ccfCD_CORP.form.fnCodeFindLoad();

        		this.dsSearch.setColumn(0, "CD_DEPT", CD_CORP);
        		this.dsSearch.setColumn(0, "DS_DEPT", DS_CORP);
        		//this.ccfCD_DEPT_ACNT.form.fnCodeFindLoad();
        		//this.ccfCD_DEPT_ACNT.form.fnCodeFindLoad();

        		this.dsSearch.setColumn(0, "NO_EXPENSE", NO_EXPENSE);
        		this.dsSearch.set_enableevent(true);

        		this.FormBtns.Select.click();

        	}else{
        		//법인코드 세션에 코드로 셋팅
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);

        		this.dsSearch.setColumn(0, "CD_DEPT", this.AuthClient.LEVCD_DEPT_UPPER);
        		this.ccfCD_DEPT_ACNT.form.fnCodeFindLoad();

        // 		this.ccfCD_DEPT_ACNT.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        // 		this.ccfCD_DEPT_ACNT.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        // 		if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
        // 			this.staCD_DEPT_ACNT.set_textDecoration("underline");
        // 		}
        	}

        	this.fnEnableComp("N");
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel

        	this.FormBtns.Add.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnFile = this.gfnFormButtonAdd("btnFile", "fnFileUpload" ); 		//파일첨부
        	this.btnBubinCard = this.gfnFormButtonAdd("BubinCard", "fnBubinCard"); 		//법인카드 사용내역
        	this.btnDataCreate = this.gfnFormButtonAdd("DataCreate", "fnDataCreate"); 	//계획생성 버튼
        	this.btnSearchSlip = this.gfnFormButtonAdd("SearchSlip", "fnSearchSlip"); 	//전표조회 버튼
        	this.btnIssueSlip  = this.gfnFormButtonAdd("IssueSlip" , "fnIssueSlip"); 	//전표발행 버튼
        	this.btnCancelSlip = this.gfnFormButtonAdd("CancelSlip", "fnCancelSlip"); 	//전표취소 버튼
        	this.btnLinkSlip = this.gfnFormButtonAdd("btnLinkSlip", "fnLinkSlip"); 	//전표연결 버튼
        	this.btnLinkCancel = this.gfnFormButtonAdd("btnLinkCancel", "fnLinkCancel"); 	//전표취소 버튼 = this.gfnFormButtonAdd("CancelSlip", "fnSlipLinkCancel"); 	//연결취소 버튼
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP 	 = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;

        	this.ccfNO_EXPENSE = this.divSearch.form.ccfNO_EXPENSE;					//검색조건 선급비용번호
        	this.chkYN_END = this.divSearch.form.chkYN_END;							//검색조건 완성된자료제외

        	this.staCD_DEPT_ACNT = this.divSearch.form.staCD_DEPT_ACNT;

        	this.ctclDT_FROM = this.divData.form.divDataRight.form.divDataTop.form.ctclDT_FROM;		//기간 시작일
        	this.ctclDT_TO = this.divData.form.divDataRight.form.divDataTop.form.ctclDT_TO;			//기간 종료일
        	this.ctclDT_REQ = this.divData.form.divDataRight.form.divDataTop.form.ctclDT_REQ;			//집행요청일자


        	this.txtNO_EXPENSE = this.divData.form.divDataRight.form.divDataTop.form.txtNO_EXPENSE;	//비용번호

        	this.ccfISSUE_ID = this.divData.form.divDataRight.form.divDataTop.form.ccfISSUE_ID;		//전자세금계산서번호
        	this.ctclDT_ACCOUNT = this.divData.form.divDataRight.form.divDataTop.form.ctclDT_ACCOUNT;	//회계일자

        	this.ccfCD_ACCOUNT = this.divData.form.divDataRight.form.divDataTop.form.ccfCD_ACCOUNT;	//선급비용계정
        	this.ccfCD_VENDOR = this.divData.form.divDataRight.form.divDataTop.form.ccfCD_VENDOR;		//거래처
        	this.ccfNO_ACCOUNT = this.divData.form.divDataRight.form.divDataTop.form.ccfNO_ACCOUNT;	//거래처계좌번호
        	this.edtTY_VENDOR = this.divData.form.divDataRight.form.divDataTop.form.edtTY_VENDOR;		//거래처구분(거래처의 코드파인더)

        	this.ccfCD_DEPT = this.divData.form.divDataRight.form.divDataTop.form.ccfCD_DEPT;			//귀속부서
        	this.ccfCD_DEPT_BH = this.divData.form.divDataRight.form.divDataTop.form.ccfCD_DEPT_BH;	//발행부서
        	this.ccfCD_BANJE_ACCOUNT = this.divData.form.divDataRight.form.divDataTop.form.ccfCD_BANJE_ACCOUNT;	//반제계정코드
        	this.ccfCD_DEPT_BANJE = this.divData.form.divDataRight.form.divDataTop.form.ccfCD_DEPT_BANJE;			//반제귀속부서코드
        	this.ccfCD_PROOF = this.divData.form.divDataRight.form.divDataTop.form.ccfCD_PROOF;					//증빙코드
        	this.ccfCD_CAR = this.divData.form.divDataRight.form.divDataTop.form.ccfCD_CAR;						// 차량번호
        	this.ccfCD_SEMOK = this.divData.form.divDataRight.form.divDataTop.form.ccfCD_SEMOK;					// 세목

        	this.edtNO_SEQ = this.divData.form.divDataRight.form.divDataTop.form.edtNO_SEQ;			// 법인카드번호

        	//this.btnFile = this.divData.form.divDataRight.form.divDataTop.form.btnFile;
        	this.btnCD_SLIP = this.divData.form.divDataRight.form.divDataTop.form.btnCD_SLIP;

        	//this.txtCD_TRADE = this.divData.form.divDataTop.form.txtCD_TRADE;			//전표번호
        	this.txtCD_TRADE = this.divData.form.divDataRight.form.divDataTop.form.txtCD_TRADE;	//전표번호

        	this.edtCD_SLIP = this.divData.form.divDataRight.form.divDataTop.form.edtCD_SLIP;	// 전표번호 계상

        	this.mskAM_EXPENSE = this.divData.form.divDataRight.form.divDataTop.form.mskAM_EXPENSE;		//비용금액
        	this.mskAM_EXEC = this.divData.form.divDataRight.form.divDataTop.form.mskAM_EXEC;		//비용금액
        	this.cboCD_CURR = this.divData.form.divDataRight.form.divDataTop.form.cboCD_CURR;		//통화
        	this.mskAM_VAT   = this.divData.form.divDataRight.form.divDataTop.form.mskAM_VAT;				//부가세

        	this.btnGridAdd = this.divData.form.divDataRight.form.divDataBottom.form.btnGridAdd;
        	this.btnGridDelete = this.divData.form.divDataRight.form.divDataBottom.form.btnGridDelete;
        	this.btnGridSave = this.divData.form.divDataRight.form.divDataBottom.form.btnGridSave;

        	this.dxGridSub = this.divData.form.divDataRight.form.divDataBottom.form.objGridSub;
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;

        	this.NoExpense = "";

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 발행부서(검색조건)
        	//this.ccfCD_DEPT_ACNT.CodeFindName = "DHX_CFACNTUNIT2";
        	this.ccfCD_DEPT_ACNT.CodeFindName = "DHX_CFACNTUNIT";
        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_ACNT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//선급비용번호(검색조건)
        	this.ccfNO_EXPENSE.CodeFindName = "DHX_CFNO_EXPENSE_CODEFIND";
        	this.ccfNO_EXPENSE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_EXPENSE.AfterCDTextChanged = "ccfNO_EXPENSE_AfterCDTextChanged";

        	//전자세금계산서번호
        	this.ccfISSUE_ID.CodeFindName = "DHX_CFEBILLBUY_ESERO";
        	this.ccfISSUE_ID.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfISSUE_ID.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//선급비용계정 DHX_COMMON_CODEFIND_SELECT
        	this.ccfCD_ACCOUNT.CodeFindName = "DHX_COMMON_CODEFIND_SELECT";
        	this.ccfCD_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//거래처

        	//this.ccfCD_VENDOR.CodeFindName = "DHX_CFNVENDOR_CODEFIND";
        	this.ccfCD_VENDOR.CodeFindName = "DHX_CFALLVENDOR_CODEFIND";
        	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_VENDOR.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 거래처계좌번호
        	this.ccfNO_ACCOUNT.CodeFindName = "DFX_CFACCOUNTMATCH";
        	this.ccfNO_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_ACCOUNT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//귀속부서
        	this.ccfCD_DEPT.CodeFindName = "DHX_CFACNTUNIT";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//발행부서
         	this.ccfCD_DEPT_BH.CodeFindName = "DHX_CFACNTUNIT";
         	this.ccfCD_DEPT_BH.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 차량번호
         	this.ccfCD_CAR.CodeFindName = "DHX_CAR";
         	this.ccfCD_CAR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//반제계정코드
        	this.ccfCD_BANJE_ACCOUNT.CodeFindName = "DHX_COMMON_CODEFIND_SELECT";
        	//this.ccfCD_BANJE_ACCOUNT.CodeFindName = "DHX_CFACCOUNT2";
        	this.ccfCD_BANJE_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//반제귀속부서
        	this.ccfCD_DEPT_BANJE.CodeFindName = "DHX_CFACNTUNIT";
        	this.ccfCD_DEPT_BANJE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 세목
        	this.ccfCD_SEMOK.CodeFindName = "DHX_CFACSEMOK";
        	this.ccfCD_SEMOK.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//증빙선택
         	this.ccfCD_PROOF.CodeFindName = "CF_CODE_DH_V10";
         	this.ccfCD_PROOF.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_PROOF.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DH", "DHA_EXPENSEPLAN");
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_EXPENSELIST");
        	//this.dxGridSub.set_selecttype("cell");

        	this.dsList.addEventHandler("onvaluechanged", this.dsList_ColumnChanged, this);
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.dsListSub.addEventHandler("cancolumnchange", this.dsListSub_CanColumnChange, this);

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        	this.dxGridSub.setCellProperty( "body", this.dxGridSub.getBindCellIndex("body", "DT_TO"), "edittype", "expr:!dataset.parent.gfnIsNull(CD_TRADE) ? 'none' : 'date'");
        	this.dxGridSub.setCellProperty( "body", this.dxGridSub.getBindCellIndex("body", "DAYS"), "edittype", "expr:!dataset.parent.gfnIsNull(CD_TRADE) ? 'none' : 'text'");
        	this.dxGridSub.setCellProperty( "body", this.dxGridSub.getBindCellIndex("body", "AM_DIVEXPENSE"), "edittype", "expr:!dataset.parent.gfnIsNull(CD_TRADE) ? 'none' : 'text'");

        	//사용여부 체크
        	this.divSearch.form.chkYN_END.set_value("N");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");			    //선급비용번호
        	this.dsSelect.addColumn("NO_EXPENSE", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("NO_EXPENSE", "string");			//선급비용번호

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");				//법인코드
        	this.dsInsert.addColumn("NO_EXPENSE", "string");			//선급비용코드
        	this.dsInsert.addColumn("CD_ACCOUNT", "string");			//계정코드
        	this.dsInsert.addColumn("DT_FROM", "string");				//시작일
        	this.dsInsert.addColumn("DT_TO", "string");					//종료일
        	this.dsInsert.addColumn("CD_CURR", "string");				//통화
        	this.dsInsert.addColumn("AM_EXPENSE", "BIGDECIMAL");		//선급비용(원화)
        	this.dsInsert.addColumn("AM_EXEC", "BIGDECIMAL");		//선급비용(통화)
        	this.dsInsert.addColumn("AM_VAT", "BIGDECIMAL");			//부가세
        	this.dsInsert.addColumn("CD_VENDOR", "string");				//거래처코드
        	this.dsInsert.addColumn("CD_DEPT", "string");				//귀속부서
        	this.dsInsert.addColumn("CD_DEPT_BH", "string");			//발행부서
        	this.dsInsert.addColumn("RM_BIGO", "string");				//비고
        	this.dsInsert.addColumn("CD_BANJE_ACCOUNT", "string");		//반제계정코드
        	this.dsInsert.addColumn("CD_DEPT_BANJE", "string");			//반제귀속부서코드
        	this.dsInsert.addColumn("CD_SEMOK", "string");				//세목코드
        	this.dsInsert.addColumn("CD_GONGJONG", "string");			//공정코드
        	this.dsInsert.addColumn("YN_END", "string");				//종료여부
        	this.dsInsert.addColumn("CD_PROOF", "string");				//증빙코드
        	this.dsInsert.addColumn("ISSUE_ID", "string");				//전자세금계산서번호
        	this.dsInsert.addColumn("DT_ACCOUNT", "string");			//회계일자
        	this.dsInsert.addColumn("NO_ACCOUNT", "string");			// 거래처계좌번호
        	this.dsInsert.addColumn("DT_REQ", "string");				// 집행요청일자
        	this.dsInsert.addColumn("CD_CAR", "string");				// 차량번호
        	//this.dsInsert.addColumn("NO_SEQ", "int");					// 법인카드사용내역
        	this.dsInsert.addColumn("NO_SEQ", "string");				// 법인카드사용내역
        	this.dsInsert.addColumn("CD_SLIP", "string");				// 전표번호(계상)


        	this.dsInsert.addColumn("ID_USER", "string");				//등록자

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");				//법인코드
        	this.dsUpdate.addColumn("NO_EXPENSE", "string");			//선급비용코드
        	this.dsUpdate.addColumn("CD_ACCOUNT", "string");			//계정코드
        	this.dsUpdate.addColumn("DT_FROM", "string");				//시작일
        	this.dsUpdate.addColumn("DT_TO", "string");					//종료일
        	this.dsUpdate.addColumn("CD_CURR", "string");				//통화
        	this.dsUpdate.addColumn("AM_EXPENSE", "BIGDECIMAL");		//선급비용(원화)
        	this.dsUpdate.addColumn("AM_EXEC", "BIGDECIMAL");		//선급비용(통화)
        	this.dsUpdate.addColumn("AM_VAT", "BIGDECIMAL");			//부가세
        	this.dsUpdate.addColumn("CD_VENDOR", "string");				//거래처코드
        	this.dsUpdate.addColumn("CD_DEPT", "string");				//귀속부서
        	this.dsUpdate.addColumn("CD_DEPT_BH", "string");			//발행부서
        	this.dsUpdate.addColumn("RM_BIGO", "string");				//비고
        	this.dsUpdate.addColumn("CD_BANJE_ACCOUNT", "string");		//반계정코드
        	this.dsUpdate.addColumn("CD_DEPT_BANJE", "string");			//반제귀속부서코드
        	this.dsUpdate.addColumn("CD_SEMOK", "string");				//세목코드
        	this.dsUpdate.addColumn("CD_GONGJONG", "string");			//공정코드
        	this.dsUpdate.addColumn("YN_END", "string");				//종료여부
        	this.dsUpdate.addColumn("CD_PROOF", "string");				//증빙코드
        	this.dsUpdate.addColumn("ISSUE_ID", "string");				//전자세금계산서번호
        	this.dsUpdate.addColumn("DT_ACCOUNT", "string");			//회계일자
        	this.dsUpdate.addColumn("NO_ACCOUNT", "string");			// 거래처계좌번호
        	this.dsUpdate.addColumn("DT_REQ", "string");				// 집행요청일자
        	this.dsUpdate.addColumn("CD_CAR", "string");				// 차량번호
        	//this.dsUpdate.addColumn("NO_SEQ", "int");					// 법인카드사용내역
        	this.dsUpdate.addColumn("NO_SEQ", "string");				// 법인카드사용내역
        	this.dsUpdate.addColumn("CD_SLIP", "string");				// 전표번호(계상)


        	this.dsUpdate.addColumn("ID_USER", "string");				//등록자

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_EXPENSE", "string");

        	this.dsList.addColumn(this.ucFlag, "string");
        	this.dsList.addColumn("CD_CORP", "string");
        	this.dsList.addColumn("NO_EXPENSE", "string");
        	this.dsList.addColumn("CD_ACCOUNT", "string");
        	this.dsList.addColumn("DS_ACCOUNT", "string");
        	this.dsList.addColumn("CD_DEPT", "string");
        	this.dsList.addColumn("DS_DEPT_ACNT", "string");
        	this.dsList.addColumn("CD_DEPT_BH", "string");
        	this.dsList.addColumn("DS_DEPT_BH", "string");
        	this.dsList.addColumn("CD_VENDOR", "string");
        	this.dsList.addColumn("DS_VENDOR", "string");
        	this.dsList.addColumn("TY_VENDOR", "string");
        	this.dsList.addColumn("AM_EXPENSE", "BIGDECIMAL"); // 금액 (원화)
        	this.dsList.addColumn("AM_VAT", "BIGDECIMAL");
        	this.dsList.addColumn("DT_FROM", "string");
        	this.dsList.addColumn("DT_TO", "string");
        	this.dsList.addColumn("RM_BIGO", "string");
        	this.dsList.addColumn("CD_TRADE", "string");
        	this.dsList.addColumn("CD_BANJE_ACCOUNT", "string");
        	this.dsList.addColumn("DS_BANJE_ACCOUNT", "string");
        	this.dsList.addColumn("CD_DEPT_BANJE", "string");
        	this.dsList.addColumn("DS_DEPT_BANJE", "string");
        	this.dsList.addColumn("CD_GONGJONG", "string");
        	this.dsList.addColumn("DS_COST", "string");
        	this.dsList.addColumn("YN_PLAN", "string");
        	this.dsList.addColumn("YN_END", "string");
        	this.dsList.addColumn("CD_PROOF", "string");
        	this.dsList.addColumn("DS_PROOF", "string");
        	this.dsList.addColumn("RT_VAT", "BIGDECIMAL");
        	this.dsList.addColumn("ISSUE_ID", "string");
        	this.dsList.addColumn("DT_ACCOUNT", "string");
        	this.dsList.addColumn("CD_SEMOK", "string");
        	this.dsList.addColumn("DS_SEMOK", "string");
        	this.dsList.addColumn("NO_ACCOUNT", "string");
        	this.dsList.addColumn("DS_BANK", "string");
        	this.dsList.addColumn("DT_REQ", "string");
        	this.dsList.addColumn("TY_VENDOR", "string");

        	this.dsList.addColumn("CD_CAR", "string");
        	this.dsList.addColumn("NO_CAR", "string");

        	this.dsList.addColumn("URL_PROOF", "string");
        	this.dsList.addColumn("FILE_CNT", "string");

        	//this.dsList.addColumn("NO_SEQ", "int");			// 법인카드사용내역
        	this.dsList.addColumn("NO_SEQ", "string");			// 법인카드사용내역
        	this.dsList.addColumn("CD_SLIP", "string");			// 전표번호(계상)
        	this.dsList.addColumn("CD_CURR", "string");			//  통화
        	this.dsList.addColumn("AM_EXEC", "BIGDECIMAL");			// 금액(통화)


        	this.dsInsertSub = new Dataset();
        	this.dsInsertSub.addColumn("NO_EXPENSE", "string");			//선급비용코드
        	this.dsInsertSub.addColumn("DT_FROM", "string");			//기간 FROM
        	this.dsInsertSub.addColumn("DT_TO", "string");				//기간 TO
        	this.dsInsertSub.addColumn("DAYS", "int");					//일
        	this.dsInsertSub.addColumn("AM_DIVEXPENSE", "int");			//비용금액
        	//this.dsInsertSub.addColumn("CD_TRADE", "string");			//전표번호
        	this.dsInsertSub.addColumn("ID_USER", "string");			//사용자아이디

        	this.dsUpdateSub = new Dataset();
        	this.dsUpdateSub.addColumn("NO_EXPENSE", "string");			//선급비용코드
        	this.dsUpdateSub.addColumn("DT_FROM", "string");			//기간 FROM
        	this.dsUpdateSub.addColumn("DT_TO", "string");				//기간 TO
        	this.dsUpdateSub.addColumn("DAYS", "int");					//일
        	this.dsUpdateSub.addColumn("AM_DIVEXPENSE", "BIGDECIMAL");	//비용금액
        	//this.dsUpdateSub.addColumn("CD_TRADE", "string");			//전표번호
        	this.dsUpdateSub.addColumn("ID_USER", "string");			//사용자아이디

        	this.dsDeleteSub = new Dataset();
        	this.dsDeleteSub.addColumn("NO_EXPENSE", "string");			//선급비용코드
        	this.dsDeleteSub.addColumn("DT_FROM", "string");			//기간 FROM
        	this.dsDeleteSub.addColumn("ID_USER", "string");			//사용자아이디

        	//계획생성용 데이터셋
        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("NO_EXPENSE", "string");
        	this.dsCreate.addColumn("ID_USER", "string");

        	//전표발행용 데이터셋
        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_CORP", "string");
        	this.dsIssueSlip.addColumn("NO_EXPENSE", "string");
        	this.dsIssueSlip.addColumn("CD_DEPT_BH", "string");
        	this.dsIssueSlip.addColumn("ID_TRANS", "string");

        	//전표취소용 데이터셋
        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_TRADE", "string");
        	this.dsCancelSlip.addColumn("NO_EXPENSE", "string");

        	//전표연결취소
        	this.dsLinkCancel = new Dataset();
        	this.dsLinkCancel.addColumn("NO_EXPENSE", "string");
        	this.dsLinkCancel.addColumn("CD_TRADE", "string");
        	this.dsLinkCancel.addColumn("ID_USER", "string");
        	this.dsLinkCancel.addColumn("YN_CONNECT", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "NO_EXPENSE", this.dsSearch.getColumn(0, "NO_EXPENSE"));

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

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        // 	if(this.dsList.findRow(this.ucFlag, "I") > -1){
        // 		this.gfnAlert("신규 추가된 데이터가 이미 있습니다.");
        // 		return;
        // 	}
        // 	this.dsList.clearData();

        	//var nRow = this.dsList.insertRow(0);
        	var nRow = this.gfnGridAdd(this.dxGrid);
        	var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        	this.dsList.setColumn(nRow, this.ucFlag		, "I");		//플래그값
        	this.dsList.setColumn(nRow, "YN_END"		, "N");		//완료여부
        	this.dsList.setColumn(nRow, "CD_CORP"		, cdCorp);	//법인코드
        	//this.dsList.setColumn(nRow, "CD_DEPT_BH"	, this.ccfCD_DEPT_ACNT.form.CDTextBox.value);	//발행부서코드
        	//this.dsList.setColumn(nRow, "DS_DEPT_BH"	, this.ccfCD_DEPT_ACNT.form.DSTextBox.value);	//발행부서명

        	this.dsList.set_rowposition(nRow);

        	//활성화 처리
        	this.fnEnableComp("Y");

        	//기간 시작일자 포커스
        	this.ctclDT_FROM.setFocus();

        	this.dsListSub.clearData();

        	this.dsSearch.set_enableevent(false);
        	this.ccfNO_EXPENSE.form.CDTextBox.set_value("");
        	this.dsSearch.set_enableevent(true);

        	this.ccfISSUE_ID.form.CDTextBox.setFocus();
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {

        // 	if(this.dsList.findRow(this.ucFlag, "I") > -1){
        // 		return;
        // 	}
        	this.gfnGridDel(this.dxGrid);
        // 	var CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE");
        //
        //  	if (!this.gfnIsNull(this.gfnTrim(this.txtCD_TRADE.value))) {
        //  		this.gfnAlert("전표발행된 데이터는 삭제할수없습니다.");
        //  		return;
        //  	}
        //
        // 	this.gfnConfirm("삭제하시겠습니까?", "dataDelete_callback");
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	// 필수항목 체크
        	if (!this.fnDataValidate(this.dsList, this.dsRequired)) return;

        	if(this.gfnGetDiffDate(this.ctclDT_FROM.value, this.ctclDT_TO.value) <= -1){
        		this.gfnAlert("기간 시작일은 종료일보다 작아야 합니다.");
        		return;
        	}

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();
        	this.dsResult.clearData();
        	//this.dsResult.copyData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_CORP"  			, this.dsList.getColumn(i, "CD_CORP"));				//법인코드
        				this.dsInsert.setColumn(nrow, "CD_ACCOUNT"  		, this.dsList.getColumn(i, "CD_ACCOUNT"));			//선급비용계정코드
        				this.dsInsert.setColumn(nrow, "DT_FROM"  			, this.dsList.getColumn(i, "DT_FROM"));				//기간 FROM
        				this.dsInsert.setColumn(nrow, "DT_TO"  				, this.dsList.getColumn(i, "DT_TO"));				//기간 TO
        				this.dsInsert.setColumn(nrow, "CD_CURR"   			, this.dsList.getColumn(i, "CD_CURR"));					//비용금액
        				this.dsInsert.setColumn(nrow, "AM_EXPENSE"   		, this.dsList.getColumn(i, "AM_EXPENSE"));			//비용금액
        				this.dsInsert.setColumn(nrow, "AM_EXEC"   			, this.dsList.getColumn(i, "AM_EXEC"));			//비용금액
        				this.dsInsert.setColumn(nrow, "AM_VAT"   			, this.dsList.getColumn(i, "AM_VAT"));				//부가세
        				this.dsInsert.setColumn(nrow, "CD_VENDOR"  			, this.dsList.getColumn(i, "CD_VENDOR"));			//거래처코드
        				this.dsInsert.setColumn(nrow, "CD_DEPT"   			, this.dsList.getColumn(i, "CD_DEPT"));				//귀속부서
        				this.dsInsert.setColumn(nrow, "CD_DEPT_BH"   		, this.dsList.getColumn(i, "CD_DEPT_BH"));			//발행부서
        				this.dsInsert.setColumn(nrow, "RM_BIGO"   			, this.dsList.getColumn(i, "RM_BIGO"));				//적요
        				this.dsInsert.setColumn(nrow, "CD_BANJE_ACCOUNT"    , this.dsList.getColumn(i, "CD_BANJE_ACCOUNT"));	//반제계정코드
        				this.dsInsert.setColumn(nrow, "CD_DEPT_BANJE"       , this.dsList.getColumn(i, "CD_DEPT_BANJE"));		//반제귀속부서코드
        				//this.dsInsert.setColumn(nrow, "CD_GONGJONG"     	, this.dsList.getColumn(i, "CD_GONGJONG"));			//공정코드
        				this.dsInsert.setColumn(nrow, "YN_END"   			, this.dsList.getColumn(i, "YN_END"));				//종료여부
        				//this.dsInsert.setColumn(nrow, "NO_EXPENSE"			, this.dsList.getColumn(i, "NO_EXPENSE"));			//선급비용코드
        				this.dsInsert.setColumn(nrow, "CD_PROOF"			, this.dsList.getColumn(i, "CD_PROOF"));			//증빙코드
        				this.dsInsert.setColumn(nrow, "ISSUE_ID"			, this.dsList.getColumn(i, "ISSUE_ID"));			//전자세금계산서번호
        				this.dsInsert.setColumn(nrow, "DT_ACCOUNT"			, this.dsList.getColumn(i, "DT_ACCOUNT"));			//회계일자
        				this.dsInsert.setColumn(nrow, "CD_SEMOK"			, this.dsList.getColumn(i, "CD_SEMOK"));			//세목
        				this.dsInsert.setColumn(nrow, "NO_ACCOUNT"			, this.dsList.getColumn(i, "NO_ACCOUNT"));			// 거래처계좌번호
        				this.dsInsert.setColumn(nrow, "DT_REQ"				, this.dsList.getColumn(i, "DT_REQ"));				// 집행요청일자
        				this.dsInsert.setColumn(nrow, "CD_CAR"				, this.dsList.getColumn(i, "CD_CAR"));				// 차량번호
        				this.dsInsert.setColumn(nrow, "NO_SEQ"				, this.dsList.getColumn(i, "NO_SEQ"));				// DHLT_CARDSAAPP 법인카드 NO_SEQ
        				this.dsInsert.setColumn(nrow, "CD_SLIP"				, this.dsList.getColumn(i, "CD_SLIP"));				// 전표번호(계상)

        				this.dsInsert.setColumn(nrow, "ID_USER"   			, this.AuthClient.ID_USER);
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP"  			, this.dsList.getColumn(i, "CD_CORP"));				//법인코드
        				this.dsUpdate.setColumn(nrow, "CD_ACCOUNT"  		, this.dsList.getColumn(i, "CD_ACCOUNT"));			//선급비용계정코드
        				this.dsUpdate.setColumn(nrow, "DT_FROM"  			, this.dsList.getColumn(i, "DT_FROM"));				//기간 FROM
        				this.dsUpdate.setColumn(nrow, "DT_TO"  				, this.dsList.getColumn(i, "DT_TO"));				//기간 TO
        				this.dsUpdate.setColumn(nrow, "CD_CURR"   			, this.dsList.getColumn(i, "CD_CURR"));					//비용금액
        				this.dsUpdate.setColumn(nrow, "AM_EXPENSE"   		, this.dsList.getColumn(i, "AM_EXPENSE"));			//비용금액
        				this.dsUpdate.setColumn(nrow, "AM_EXEC"   			, this.dsList.getColumn(i, "AM_EXEC"));			//비용금액
        				this.dsUpdate.setColumn(nrow, "AM_VAT"   			, this.dsList.getColumn(i, "AM_VAT"));				//부가세
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR"  			, this.dsList.getColumn(i, "CD_VENDOR"));			//거래처코드
        				this.dsUpdate.setColumn(nrow, "CD_DEPT"   			, this.dsList.getColumn(i, "CD_DEPT"));				//귀속부서
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_BH"   		, this.dsList.getColumn(i, "CD_DEPT_BH"));			//발행부서
        				this.dsUpdate.setColumn(nrow, "RM_BIGO"   			, this.dsList.getColumn(i, "RM_BIGO"));				//적요
        				this.dsUpdate.setColumn(nrow, "CD_BANJE_ACCOUNT"    , this.dsList.getColumn(i, "CD_BANJE_ACCOUNT"));	//반제계정코드
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_BANJE"       , this.dsList.getColumn(i, "CD_DEPT_BANJE"));		//반제귀속부서코드
        				//this.dsUpdate.setColumn(nrow, "CD_GONGJONG"     	, this.dsList.getColumn(i, "CD_GONGJONG"));			//공정코드
        				this.dsUpdate.setColumn(nrow, "YN_END"   			, this.dsList.getColumn(i, "YN_END"));				//종료여부
        				this.dsUpdate.setColumn(nrow, "NO_EXPENSE"			, this.dsList.getColumn(i, "NO_EXPENSE"));			//선급비용코드
        				this.dsUpdate.setColumn(nrow, "CD_PROOF"			, this.dsList.getColumn(i, "CD_PROOF"));			//증빙코드
        				this.dsUpdate.setColumn(nrow, "ISSUE_ID"			, this.dsList.getColumn(i, "ISSUE_ID"));			//전자세금계산서번호
        				this.dsUpdate.setColumn(nrow, "DT_ACCOUNT"			, this.dsList.getColumn(i, "DT_ACCOUNT"));			//회계일자
        				this.dsUpdate.setColumn(nrow, "CD_SEMOK"			, this.dsList.getColumn(i, "CD_SEMOK"));			//세목
        				this.dsUpdate.setColumn(nrow, "NO_ACCOUNT"			, this.dsList.getColumn(i, "NO_ACCOUNT"));			// 거래처계좌번호
        				this.dsUpdate.setColumn(nrow, "DT_REQ"				, this.dsList.getColumn(i, "DT_REQ"));				// 집행요청일자
        				this.dsUpdate.setColumn(nrow, "CD_CAR"				, this.dsList.getColumn(i, "CD_CAR"));				// 차량번호
        				this.dsUpdate.setColumn(nrow, "NO_SEQ"				, this.dsList.getColumn(i, "NO_SEQ"));				// DHLT_CARDSAAPP 법인카드 NO_SEQ
        				this.dsUpdate.setColumn(nrow, "CD_SLIP"				, this.dsList.getColumn(i, "CD_SLIP"));				// 전표번호(계상)

        				this.dsUpdate.setColumn(nrow, "ID_USER"   			, this.AuthClient.ID_USER);
        				break;
        			case "D" :
        				this.dsDelete.clearData();
        				var nRow = this.dsDelete.addRow();

        				//처리할 데이터 담기
        				this.dsDelete.setColumn(nRow, "NO_EXPENSE"  , this.dsList.getColumn(this.dsList.rowposition, "NO_EXPENSE"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcType  = "save";
        	var strSvcId    = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
        	var outData     = "dsResult=insert0";
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
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGridSub);
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
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	return true;
        };

        this.fnDataValidate = function(objDs, objRequired, isMsg) {
        	if(isMsg==null) isMsg = true;
        	var msg = "";
        	var arr_required = [];
        	var arr_required_ds = [];
        	for (var i = 0; i < objRequired.rowcount; i++) {
        		arr_required.push(objRequired.getColumn(i, "CD_FIELD"));
        		arr_required_ds.push(objRequired.getColumn(i, "DS_FIELD"));
        	}

        	for (var i = 0; i < objDs.rowcount; i++) {
        		for(var c = 0; c < objDs.colinfos.length; c++) {
        			var cd_field = objDs.colinfos[c].name;
        			var idx = this.gfnIndexInArray(arr_required, cd_field);
        			var flag = this.gfnGetFlag(objDs, i);
        			if(idx > -1 && ( flag == "U" || flag == "I")) {
        				if(this.gfnIsNull(objDs.getColumn(i, cd_field))) {
        					msg += "[" + arr_required_ds[idx] + "] 필수입력값입니다.\n";
        				}
        			}
        		}
        	}

        	if(this.gfnIsNull(msg)) {
        		if(isMsg) {
        			return true;
        		} else {
        			return "";
        		}
        	}
        	else {
        		if(isMsg) {
        			var arrError = [msg];
        			this.gfnAlert("msg.err.validator", arrError);
        			return false;
        		} else {
        			return msg;
        		}
        	}
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	switch(svcID) {
        	case "select" :
        		this.gfnGridAfterSelect(this.dxGrid);

        		break;
        	case "selectSub" :
        		//this.gfnGridAfterSelect(this.dxGrid);
        		this.gfnGridAfterSelect(this.dxGridSub);

        		if (errorCode == 0) {
        			//this.FormBtns.Select.click();
        // 			if(this.dsListSub.rowcount == 0){
        // 				this.btnIssueSlip.set_enable(false);
        // 				//this.btnBubinCard.set_enable(true);
        // 			}else{
        // 				//this.btnBubinCard.set_enable(false);
        //
        // 				if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"))){
        // 					this.btnIssueSlip.set_enable(true);
        // 				}else{
        // 					this.btnIssueSlip.set_enable(false);
        //
        // 				}
        // 			}

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "save" :
        		if (errorCode == 0) {

        			this.FormBtns.Select.click();

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "saveSub" :
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "delete" :
        		if (errorCode == 0) {
        			this.gfnAlert("삭제되었습니다.");


        			this.FormBtns.Add.set_enable(true);

        			//this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "create" :
        		if (errorCode == 0) {
        			this.gfnAlert("생성되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "issueSlip" :
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 발행 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "cancelSlip" :
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 취소 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "selectExc" :
        		if (errorCode == 0) {
        			if (this.dsRtEx.rowcount > 0)
        			{
        				this.dsList.setColumn(this.dsList.rowposition , "RT_EXCH", this.dsRtEx.getColumn(0, "RT_KRW_EXCH"));
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;

        	}
        }

        this.fnSetData = function(vrow) {
        	trace(this.dsList.getColumn(vrow, "URL_PROOF"));

        	if(this.gfnIsNull(this.dsList.getColumn(vrow, "URL_PROOF"))){
        		this.btnFile.set_text("파일첨부");
        	}else{
        	    trace(" URL_PROOF=>" + this.dsList.getColumn(vrow, "URL_PROOF"));
        		this.btnFile.set_text(this.dsList.getColumn(vrow, "URL_PROOF"));
        	}

        	//전표번호가 없을경우 버튼처리
        	if(this.gfnIsNull(this.dsList.getColumn(vrow, "CD_TRADE"))){
        		this.btnSearchSlip.set_enable(false);
        		this.btnIssueSlip.set_enable(true);
        		this.btnCancelSlip.set_enable(false);
        		this.btnBubinCard.set_enable(true);
        		this.btnLinkSlip.set_enable(true);
        		this.btnLinkCancel.set_enable(false);

        		this.fnEnableComp("Y");
        	}else{
        		this.btnSearchSlip.set_enable(true);
        		this.btnIssueSlip.set_enable(false);
        		//this.btnCancelSlip.set_enable(true);
        		this.btnBubinCard.set_enable(false);
        		this.btnLinkSlip.set_enable(false);
        		if(this.dsList.getColumn(vrow, "YN_CONNECT")=="Y"){
        			this.btnLinkCancel.set_enable(true);
        			this.btnCancelSlip.set_enable(false);
        		} else {
        			this.btnLinkCancel.set_enable(false);
        			this.btnCancelSlip.set_enable(true);
        		}

        		this.fnEnableComp("N");

        		//반제계정코드 활성화 처리
        		this.ccfCD_BANJE_ACCOUNT.form.set_enable(true);
        		this.ccfCD_BANJE_ACCOUNT.form.CDTextBox.set_enable(true);
        		this.ccfCD_BANJE_ACCOUNT.form.DSTextBox.set_enable(true);
        		this.ccfCD_BANJE_ACCOUNT.form.set_readonly(false);

        		//반제귀속부서코드 활성화 처리
        		this.ccfCD_DEPT_BANJE.form.set_enable(true);
        		this.ccfCD_DEPT_BANJE.form.CDTextBox.set_enable(true);
        		this.ccfCD_DEPT_BANJE.form.DSTextBox.set_enable(true);
        		this.ccfCD_DEPT_BANJE.form.set_readonly(false);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfCD_DEPT_ACNT.form.fnCodeFindClear();
        			this.ccfNO_EXPENSE.form.fnCodeFindClear();
        		break;
        		case "ccfCD_DEPT_ACNT":	//귀속부서
        			this.ccfNO_EXPENSE.form.fnCodeFindClear();
        		break;
        		case "ccfCD_PROOF":	//증빙코드
        			if(arrData.length > 0) {
        				var amExpense = nexacro.toNumber(this.dsList.getColumn(this.dsList.rowposition,"AM_EXPENSE"), 0);	//비용금액
        				var rtVat = nexacro.toNumber(arrData[0]["DS_ETC2"],0);	//부가세율
        				trace("rtVat->"+rtVat);
        				var amVat = (rtVat == 0 ? 0 : nexacro.floor(amExpense / rtVat));

        				this.dsList.setColumn(this.dsList.rowposition, "RT_VAT", rtVat);

        				//전자세금계산서가 아닐경우만 부가세 계산
        				if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "ISSUE_ID"))){

        					//부가세 계산
        					trace("fnAfterCDTextChanged 부가세 계산");
        					this.dsList.setColumn(this.dsList.rowposition, "AM_VAT", amVat);
        				}
        			}
        		break;

        		case "ccfCD_VENDOR":	// 거래처
        			var sTyVendor = (arrData.length > 0) ? arrData[0]["TY_VENDOR"] : "";
        			this.dsList.setColumn(this.dsList.rowposition, "TY_VENDOR"	, sTyVendor);

        		break;

        		case "ccfISSUE_ID":	//전자세금계산서번호
        			if (arrData.length > 0) {
        				this.dsList.set_enableevent(false);
        				this.dsList.setColumn(this.dsList.rowposition, "CD_VENDOR" 	, arrData[0]["CD_VENDOR"]);		//거래처코드
        				this.dsList.setColumn(this.dsList.rowposition, "DS_VENDOR" 	, arrData[0]["DS_VENDOR"]);		//거래처명
        				this.dsList.setColumn(this.dsList.rowposition, "DT_ACCOUNT"	, nexacro.replaceAll(this.gfnNvl(arrData[0]["ISSUE_DATE"],""),"-",""));	//회계일자
        				this.dsList.setColumn(this.dsList.rowposition, "CD_CURR"	, "KRW");
        				this.dsList.setColumn(this.dsList.rowposition, "AM_EXEC"	, arrData[0]["CHARGETOTAL"]);
        				this.dsList.setColumn(this.dsList.rowposition, "AM_EXPENSE"	, arrData[0]["CHARGETOTAL"]);	//비용금액
        				this.dsList.setColumn(this.dsList.rowposition, "AM_VAT"		, arrData[0]["TAXTOTAL"]);		//부가세
        				this.ctclDT_ACCOUNT.set_enable(false);
        				this.mskAM_EXPENSE_EXEC.set_enable(false);
        				this.cboCD_CURR.set_enable(false);
        				this.mskAM_EXPENSE.set_enable(false);
        				this.mskAM_VAT.set_enable(false);

        				this.dsList.set_enableevent(true);
        			}else{
        				this.ctclDT_ACCOUNT.set_enable(true);
        				this.mskAM_EXPENSE_EXEC.set_enable(true);
        				this.cboCD_CURR.set_enable(true);
        				this.mskAM_EXPENSE.set_enable(true);
        				this.mskAM_VAT.set_enable(true);
        			}
        		break;
        	}
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        	var cdVendor = this.ccfCD_VENDOR.form.CDTextBox.value;
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        		break;

        		case "ccfCD_DEPT_ACNT":	//발행부서 (검색조건)
        			if(this.gfnIsNull(cdCorp)){
        				this.gfnAlert("법인코드를 선택하세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");						//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        			dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        			dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);
        		break;

        		case "ccfCD_DEPT_BH":	//발행부서
        		case "ccfCD_DEPT":			//귀속부서
        		case "ccfCD_DEPT_BANJE":	//반제귀속부서
        			if(this.gfnIsNull(cdCorp)){
        				this.gfnAlert("법인코드를 선택하세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        			dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        			dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);

        		break;

        		case "ccfCD_CAR":	// 차량번호
        			if(this.gfnIsNull(cdCorp)){
        				this.gfnAlert("법인코드를 선택하세요.");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		break;

        		case "ccfNO_EXPENSE":	//선급비용번호
        			if(this.gfnIsNull(cdCorp)){
        				this.gfnAlert("법인코드를 선택하세요.");
        				return false;
        			}
        			var cdDept = this.gfnNvl(this.ccfCD_DEPT_ACNT.form.CDTextBox.value,"");
        			if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
        				if(this.gfnIsNull(cdDept)){
        					this.gfnAlert("발행부서를 선택하세요.");
        					return false;
        				}
        			}
        			dsUserParam.setColumn(nrow, "CD_CORP" , cdCorp);
        			dsUserParam.setColumn(nrow, "CD_DEPT" , cdDept);
        			dsUserParam.setColumn(nrow, "YN_END"  , this.chkYN_END.value);
        			//dsUserParam.setColumn(nrow, "TY_DEPT" , "BH");
        		break;
        		case "ccfCD_VENDOR":	//거래처
        			if(this.gfnIsNull(cdCorp)){
        				this.gfnAlert("법인코드를 선택하세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "CD_CORP" , cdCorp);
        		break;
        		case "ccfNO_ACCOUNT":	//거래처 계좌번호
        			if(this.gfnIsNull(cdCorp)){
        				this.gfnAlert("법인코드를 선택하세요.");
        				return false;
        			}
        			if(this.gfnIsNull(cdVendor)){
        				this.gfnAlert("거래처를 선택하세요.");
        				return false;
        			}
        			/*
        			@TY_VENDOR = 거래처 코드파인: TY_VENDOR
        			@CD_PAY = 거래처코드
        			@CD_CORP = 법인코드
        			@TY_CASH = C
        			*/
        			var tyVendor = this.dsList.getColumn(this.dsList.rowposition, "TY_VENDOR");
        			trace("거래처->" + tyVendor);
         			dsUserParam.setColumn(nrow, "TY_VENDOR", tyVendor);
        			dsUserParam.setColumn(nrow, "CD_PAY", cdVendor);
        			dsUserParam.setColumn(nrow, "CD_CORP" , cdCorp);
        			dsUserParam.setColumn(nrow, "TY_CASH" , "C");

        		break;

        		case "ccfCD_ACCOUNT":		//선급비용계정
        			dsUserParam.setColumn(nrow, "CD_SYSTEM"	, "DH");						//시스템코드
        			dsUserParam.setColumn(nrow, "CD_TYPE"	, "A07");						//공통분류코드
        			dsUserParam.setColumn(nrow, "DS_ETC1"	, "자산");						//공통분류코드
        		break;
        		case "ccfCD_BANJE_ACCOUNT":		//반제계정코드
        			dsUserParam.setColumn(nrow, "CD_SYSTEM"	, "DH");						//시스템코드
        			dsUserParam.setColumn(nrow, "CD_TYPE"	, "A07");						//공통분류코드
        			dsUserParam.setColumn(nrow, "DS_ETC1"	, "비용");						//공통분류코드


        		break;
        		case "ccfCD_PROOF":		//증빙코드
        			dsUserParam.setColumn(nrow, "CD_SYSTEM"	, "DH");						//시스템코드
        			dsUserParam.setColumn(nrow, "CD_TYPE"	, "V10");						//공통분류코드
        		break;
        		case "ccfISSUE_ID":	//전자세금계산서번호
        			dsUserParam.setColumn(nrow, "CD_CORP"   , cdCorp);
        			dsUserParam.setColumn(nrow, "TY_SALEBUY", "I");						//매입매출구분
        		break;
        		case "ccfCD_SEMOK":	//세목
        			var CD_BANJE_ACCOUNT = this.dsList.getColumn(this.dsList.rowposition, "CD_BANJE_ACCOUNT");
        			if(this.gfnIsNull(CD_BANJE_ACCOUNT)){
        				this.gfnAlert("반제계정코드를 선택하세요.");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_BIMOK" ,this.gfnRight(CD_BANJE_ACCOUNT,2));
        		break;
        	}
        	return true;
        };

        this.ccfNO_EXPENSE_AfterCDTextChanged = function(id, codeFindData) {
        	// 코드,명칭 외 추가 컬럼 처리
        	var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능

        	if (arr.length > 0) {
        		this.FormBtns.Select.click();
        	}

        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {

        	if (e.row != -1 && e.oldrow != e.row) {
        		trace(" e.oldrow=>" + e.oldrow);
        		if (!this.gfnGridIsRow(this.dxGrid)) return;

                this.fnSetData(e.row);
        		this.fnPlanSelect();

        		this.btnFile.set_text(this.dsList.getColumn(e.row, "URL_PROOF"));

        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divDataRight.form.divSplitter.set_top(e.clienty);
        		this.divData.form.divDataRight.form.resetScroll();
        	}
        	if(e.userdata == "splitterLeft") {
        		this.divData.form.divSplitter00.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.divData_divSplitter00_ondrag = function(obj,e)
        {
        	e.set_userdata("splitterLeft");
        	return true;
        };


        //추가 클릭 이벤트
        this.divData_divDataBottom_btnGridAdd_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_EXPENSE"))){
        		this.gfnAlert("선급비용코드는 필수입니다.");
        		return;
        	}

        	var nRow = this.gfnGridAdd(this.dxGridSub);


        	this.dsListSub.set_enableevent(false);

        	this.dsListSub.setColumn(nRow, "NO_EXPENSE",this.dsList.getColumn(this.dsList.rowposition, "NO_EXPENSE") );			//선급비용코드

        	this.dsListSub.set_enableevent(true);


        	this.dsListSub.set_rowposition(nRow);
        	this.dxGridSub.setCellPos(this.dxGridSub.getBindCellIndex("body", "DT_FROM"));
        };

        //삭제 클릭 이벤트
        this.divData_divDataBottom_btnGridDelete_onclick = function(obj,e)
        {
        	var sRows = this.dxGridSub.getSelectedDatasetRows();
        	var chkFlag = false;
        	for(var i =0;i<sRows.length;i++){
        		if(!this.gfnIsNull(this.dsListSub.getColumn(sRows[i], "CD_TRADE"))){
        			chkFlag = true;
        		}
        	}
        	if(chkFlag){
        		this.gfnAlert("전표발행된 데이터는 삭제할수없습니다.");
        		return;
        	}

        	this.gfnGridDel(this.dxGridSub);
        };

        //저장 이벤트
        this.divData_divDataBottom_btnGridSave_onclick = function(obj,e)
        {

        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.gfnGridBeforeSelect(this.dxGridSub);
        	this.NoExpense = this.txtNO_EXPENSE.value;

        	var amExpense = nexacro.toNumber(this.mskAM_EXPENSE.value,0);
        	if(this.dsListSub.getCaseSumNF(this.ucFlag + " != 'D'", "AM_DIVEXPENSE") != amExpense){
        		this.gfnAlert("계획금액의 합계는 비용금액과 같아야합니다.");
        		return;
        	}
        	this.dxGrid.updateToDataset();
        	this.dxGridSub.updateToDataset();

        	this.dsInsertSub.clearData();
        	this.dsUpdateSub.clearData();
        	this.dsDeleteSub.clearData();

        	var chkFlag = false;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsertSub.addRow();
        				this.dsInsertSub.setColumn(nrow, "NO_EXPENSE"  			, this.dsListSub.getColumn(i, "NO_EXPENSE"));						//선급비용코드
        				this.dsInsertSub.setColumn(nrow, "DT_FROM"  			, this.dsListSub.getColumn(i, "DT_FROM"));							//기간 FROM
        				this.dsInsertSub.setColumn(nrow, "DT_TO"  				, this.dsListSub.getColumn(i, "DT_TO"));							//기간 TO
        				this.dsInsertSub.setColumn(nrow, "DAYS"   				, this.dsListSub.getColumn(i, "DAYS"));								//일
        				this.dsInsertSub.setColumn(nrow, "AM_DIVEXPENSE"  		, this.dsListSub.getColumn(i, "AM_DIVEXPENSE"));					//비용금액
        				//this.dsInsertSub.setColumn(nrow, "CD_TRADE"   			, this.dsListSub.getColumn(i, "CD_TRADE"));							//전표번호
        				this.dsInsertSub.setColumn(nrow, "ID_USER"   			, this.AuthClient.ID_USER);

        				break;
        			case "U":
        				var nrow = this.dsUpdateSub.addRow();
        				this.dsUpdateSub.setColumn(nrow, "NO_EXPENSE"  			, this.dsListSub.getColumn(i, "NO_EXPENSE"));								//선급비용코드
        				this.dsUpdateSub.setColumn(nrow, "DT_FROM"  			, this.dsListSub.getColumn(i, "DT_FROM"));									//기간 FROM
        				this.dsUpdateSub.setColumn(nrow, "DT_TO"  				, this.dsListSub.getColumn(i, "DT_TO"));									//기간 TO
        				this.dsUpdateSub.setColumn(nrow, "DAYS"   				, this.dsListSub.getColumn(i, "DAYS"));									//일
        				this.dsUpdateSub.setColumn(nrow, "AM_DIVEXPENSE"  		, this.dsListSub.getColumn(i, "AM_DIVEXPENSE"));							//비용금액
        				//this.dsUpdateSub.setColumn(nrow, "CD_TRADE"   			, this.dsListSub.getColumn(i, "CD_TRADE"));								//전표번호
        				this.dsUpdateSub.setColumn(nrow, "ID_USER"   			, this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDeleteSub.addRow();
        				this.dsDeleteSub.setColumn(nrow, "NO_EXPENSE"   , this.dsListSub.getColumn(i, "NO_EXPENSE"));	//선급비용코드
        				this.dsDeleteSub.setColumn(nrow, "DT_FROM"  	, this.dsListSub.getColumn(i, "DT_FROM"));		//기간 FROM
        				this.dsDeleteSub.setColumn(nrow, "ID_USER"   			, this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsInsertSub.rowcount == 0 && this.dsUpdateSub.rowcount == 0 && this.dsDeleteSub.rowcount == 0) return;

        	var strSvcId    = "saveSub";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "d_delete=dsDeleteSub d_insert=dsInsertSub d_update=dsUpdateSub";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);  // 통신방법 정의 [생략가능]
        };

        //계획데이터 조회
        this.fnPlanSelect = function ()
        {
        	trace(" fnPlanSelect=>" + this.dsList.getColumn(this.dsList.rowposition, "NO_EXPENSE"));
        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "NO_EXPENSE", this.dsList.getColumn(this.dsList.rowposition, "NO_EXPENSE"));

        	var strSvcId    = "selectSub";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelectSub";
        	var outData     = "dsListSub=d_select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        //삭제 콜백
        this.dataDelete_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsDelete.clearData();
        		var nRow = this.dsDelete.addRow();

        		//처리할 데이터 담기
        		this.dsDelete.setColumn(nRow, "NO_EXPENSE"  , this.dsList.getColumn(this.dsList.rowposition, "NO_EXPENSE"));

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
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}

        };

        this.dsList_ColumnChanged = function(obj,e){

        	if (e.oldvalue != e.newvalue)
        	{
        		var rowType = obj.getRowType(e.row);

        		obj.setColumn(e.row, this.ucFlag, (rowType == 2 ? "I" : "U"));	//플래그값
        		this.FormBtns.Save.set_enable(true);

        		if(e.columnid == "CD_CURR" || e.columnid == "DT_ACCOUNT"){
        			if(e.newvalue != e.oldvalue){
        				if ( !this.gfnIsNull(this.dsList.getColumn(e.row , "CD_CURR")) && !this.gfnIsNull(this.dsList.getColumn(e.row , "DT_ACCOUNT")) )
        				{
        					this.fnSetRtExchange();
        				}
        			}
        		}else if(e.columnid == "RT_EXCH")
        		{
        			if (this.dsList.getColumn(e.row , "AM_EXEC") > 0)
        			{
        				this.fnSetRtExchangeCallback(e.row, "AM_EXEC");
        			}
        		}else if(e.columnid == "AM_EXEC")
        		{
        			if(e.newvalue != e.oldvalue){
        				this.fnSetRtExchangeCallback(e.row, "AM_EXEC");
        			}
        		}else if(e.columnid == "AM_EXPENSE"){	//비용금액
        			if(!this.gfnIsNull(obj.getColumn(e.row, "CD_PROOF"))){	//증빙코드가 있을경우
        				var amExpense = nexacro.toNumber(e.newvalue, 0);	//비용금액
        				var rtVat = nexacro.toNumber(obj.getColumn(e.row, "RT_VAT"),0);	//부가세율
        				var amVat = (rtVat == 0 ? 0 : nexacro.floor(amExpense / rtVat));

        				//부가세 계산
        				obj.setColumn(e.row, "AM_VAT", amVat);

        			}
        		}
        	}

        }

        // 법인카드 사용내역
        this.fnBubinCard = function (obj,e)
        {
        	var param = {};
        	param.YN_POPUP = "Y";
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_BUBINCARDSAAPP_SITE", "fnBubinCard_PopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());
        };

        this.fnBubinCard_PopupCallBack = function(svcID, value){
        	if(value != false) {
        		var json = JSON.parse(value);
        		var flag = this.dsList.getColumn(0, this.ucFlag);

        		if(this.dsListSub.rowcount > 0) return;

        		if(this.dsList.rowcount == 0){
        			var nRow = this.dsList.insertRow(0);
        		}

        		if(this.dsList.findRow(this.ucFlag, "I") > -1){
        			//this.gfnAlert("신규 추가된 데이터가 이미 있습니다.");
        			var nRow = this.dsList.rowposition;
        		}

        		var sCdCorp = this.gfnNvl(this.dsSearch.getColumn(0, "CD_CORP"), json.CD_CORP);
        		var sDsCorp = this.gfnNvl(this.dsSearch.getColumn(0, "DS_CORP"), json.DS_CORP);

        		this.dsList.setColumn(nRow, this.ucFlag		, "I");		//플래그값
        		this.dsList.setColumn(nRow, "YN_END"		, "N");		//완료여부
        		this.dsList.setColumn(nRow, "CD_CORP"		, sCdCorp);	//법인코드
        		this.dsList.setColumn(nRow, "NO_SEQ"	, json.NO_SEQ);
        		this.dsList.setColumn(nRow, "DT_ACCOUNT"	, json.DT_ACCOUNT);
        		this.dsList.setColumn(nRow, "CD_DEPT"	, json.CD_DEPT);		//귀속부서코드
        		this.dsList.setColumn(nRow, "DS_DEPT_ACNT"	, json.DS_DEPT);	//귀속부서명

        		this.dsList.setColumn(nRow, "CD_DEPT_BH"	, json.CD_DEPT);	//발행부서코드
        		this.dsList.setColumn(nRow, "DS_DEPT_BH"	, json.DS_DEPT);	//발행부서명

        		this.dsList.setColumn(nRow, "CD_DEPT_BANJE"	, json.CD_DEPT);	//반제귀속부서코드
        		this.dsList.setColumn(nRow, "DS_DEPT_BANJE"	, json.DS_DEPT);	//반제귀속부서명

        		this.dsList.setColumn(nRow, "CD_VENDOR"	, json.CD_VENDOR);		//거래처코드
        		this.dsList.setColumn(nRow, "DS_VENDOR"	, json.DS_VENDOR);		//거래처명

        		this.dsList.setColumn(nRow, "AM_EXPENSE", json.AM_SURTAX);		//공급가
        		this.dsList.setColumn(nRow, "AM_VAT"	, json.AM_VATSUPPLY);		//부가세

        		this.dsList.setColumn(nRow, "CD_PROOF", json.CD_PROOF);		// 증빙
        		this.dsList.setColumn(nRow, "DS_PROOF", json.DS_PROOF);		// 증빙


        		this.dsList.set_rowposition(nRow);

        		//활성화 처리
        		this.fnEnableComp("Y");

        		this.dsListSub.clearData();

        		this.dsSearch.set_enableevent(false);

        		//this.ccfNO_EXPENSE.form.CDTextBox.set_value("");
        		this.dsSearch.setColumn(0, "CD_CORP", sCdCorp);
        		this.dsSearch.setColumn(0, "DS_CORP", sDsCorp);

        		this.dsSearch.set_enableevent(true);

        		this.ccfISSUE_ID.form.CDTextBox.setFocus();

        		//this.ccfCD_PROOF.form.fnCodeFindLoad();
        		this.ccfCD_VENDOR.form.fnCodeFindLoad();

        	}
        	//this.FormBtns.Select.click();
        }

        //자료생성 처리
        this.fnDataCreate = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.txtNO_EXPENSE.value))) {
        		this.gfnAlert("선급비용번호는 필수입니다.");
        		this.txtNO_EXPENSE.setFocus();
        		return;
        	}

        	this.gfnConfirm("계획을 생성 하시겠습니까?", "dataCreate_callback");

        };

        this.dataCreate_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsCreate.clearData();
        		var nRow = this.dsCreate.addRow();

        		//처리할 데이터 담기
        		this.dsCreate.setColumn(nRow, "NO_EXPENSE" , this.txtNO_EXPENSE.value);
        		this.dsCreate.setColumn(nRow, "ID_USER"    , this.AuthClient.ID_USER);

        		var strSvcId    = "create";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "create=dsCreate";
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

        //전표발행 처리
        this.fnIssueSlip = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.txtNO_EXPENSE.value))) {
        		this.gfnAlert("선급비용번호는 필수입니다.");
        		this.txtNO_EXPENSE.setFocus();
        		return;
        	}

        	if(this.dsListSub.getCaseCount("dataset.parent.gfnIsNull("+this.ucFlag+")") == 0){
        		this.gfnAlert("계획정보를 입력하세요.");
        		return;
        	}

        	this.gfnConfirm("전표발행 하시겠습니까?", "fnIssueSlip_callback");

        };

        this.fnIssueSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsIssueSlip.clearData();
        		var nRow = this.dsIssueSlip.addRow();

        		//처리할 데이터 담기
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP"    , this.ccfCD_CORP.form.CDTextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "NO_EXPENSE" , this.txtNO_EXPENSE.value);
        		this.dsIssueSlip.setColumn(nRow, "CD_DEPT_BH" , this.ccfCD_DEPT_BH.form.CDTextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "ID_TRANS"   , this.AuthClient.ID_USER);

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
        	if (this.gfnIsNull(this.gfnTrim(this.txtNO_EXPENSE.value))) {
        		this.gfnAlert("선급비용번호는 필수입니다.");
        		this.txtNO_EXPENSE.setFocus();
        		return;
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.txtCD_TRADE.value))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		//this.txtCD_TRADE.setFocus();
        		return;
        	}

        	this.gfnConfirm("전표를 취소하시겠습니까?", "fnCancelSlip_callback");

        };

        this.fnCancelSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsCancelSlip.clearData();
        		var nRow = this.dsCancelSlip.addRow();

        		//처리할 데이터 담기
        		this.dsCancelSlip.setColumn(nRow, "NO_EXPENSE" , this.txtNO_EXPENSE.value);
        		this.dsCancelSlip.setColumn(nRow, "CD_TRADE"   , this.txtCD_TRADE.value);

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
        	if (this.gfnIsNull(this.gfnTrim(this.txtCD_TRADE.value))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		//this.txtCD_TRADE.setFocus();
        		return;
        	}

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = this.gfnTrim(this.txtCD_TRADE.value.substr(0,14));
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());

        };

        this.fnPopupCallBack = function(strId, val) {
        	this.FormBtns.Select.click();
        }

        // 전표연결
        this.fnLinkSlip = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.txtNO_EXPENSE.value))) {
        		this.gfnAlert("선급비용번호는 필수입니다.");
        		//this.txtCD_TRADE.setFocus();
        		return;
        	}

        	var param = {};
        	param.CD_CORP = this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value);
        	param.DS_CORP = this.gfnTrim(this.ccfCD_CORP.form.DSTextBox.value);
        	param.CD_DEPT = this.gfnTrim(this.ccfCD_DEPT.form.CDTextBox.value);
        	param.DS_DEPT = this.gfnTrim(this.ccfCD_DEPT.form.DSTextBox.value);
        	param.NO_EXPENSE = this.gfnTrim(this.txtNO_EXPENSE.value);
        	param.DT_ACCOUNT = this.gfnTrim(this.ctclDT_ACCOUNT.value);
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_EXPENSE_REGSLIP_DLG", "fnPopupCallBack", param);
        };

        //연결취소
        this.fnLinkCancel = function  (obj,e)
        {
        	this.gfnConfirm("전표를 연결을 취소하시겠습니까?", "fnLinkCancel_callback");
        };

        this.fnLinkCancel_callback = function(strId, val) {
        	if (!val) return;

        	this.dsLinkCancel.clearData();

        	var nrow = this.dsLinkCancel.addRow();
        	this.dsLinkCancel.setColumn(nrow, "NO_EXPENSE", this.dsList.getColumn(this.dsList.rowposition , "NO_EXPENSE" ));
        	this.dsLinkCancel.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"));	// 전표번호
        	this.dsLinkCancel.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsLinkCancel.setColumn(nrow, "YN_CONNECT", "N");

        	if (this.dsLinkCancel.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "linkcancel=dsLinkCancel";
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

         this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.dsList.clearData();
        		this.gfnGridClear(this.dxGridSub);
        		//그리드 버튼 처리
        		this.btnGridAdd.set_enable(false);
        		this.btnGridDelete.set_enable(false);
        		this.btnGridSave.set_enable(false);
        		this.btnFile.set_text("파일첨부");
        		this.fnEnableComp("N");
        	}
        };


        //비활성 처리
        this.fnEnableComp = function (type)
        {
        	if(type == "Y"){	// 활성화
        		this.gfnSetAllEnable(this.divData.form.divDataRight.form.divDataTop.form, true);
        		this.gfnSetAllEnable(this.divData.form.divDataRight.form.divDataBottom.form, true);

        		if(!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "ISSUE_ID"))){
        			this.gfnSetEnable(this.ctclDT_ACCOUNT, false);
        			this.gfnSetEnable(this.mskAM_EXPENSE, false);
        			this.gfnSetEnable(this.mskAM_VAT, false);
        		}else{
        			this.gfnSetEnable(this.ctclDT_ACCOUNT, true);
        			this.gfnSetEnable(this.mskAM_EXPENSE, true);
        			this.gfnSetEnable(this.mskAM_VAT, true);
        		}

        		this.gReadOnlyFlag = false;
        		this.dxGridSub.info = "N";
        	}else{	// 비활성 처리
        		this.gfnSetAllEnable(this.divData.form.divDataRight.form.divDataTop.form, false);
        		this.gfnSetAllEnable(this.divData.form.divDataRight.form.divDataBottom.form, true);

        		this.gReadOnlyFlag = true;
        		this.dxGridSub.info = "N";
        	}

        	if(!this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_EXPENSE"))){
        		this.gfnSetEnable(this.btnFile, true);			// 첨부버튼
        	}


        	this.gfnSetEnable(this.edtNO_SEQ, false);	//비용번호
        	this.gfnSetEnable(this.txtNO_EXPENSE, false);	//비용번호
        	this.gfnSetEnable(this.txtCD_TRADE, false);		//전표번호
        };

        this.dsListSub_CanColumnChange = function(obj,e)
        {
        	if(e.columnid == "DT_FROM" || e.columnid == "DT_TO"){
        		var dtFrom = (e.columnid == "DT_FROM" ? e.newvalue : obj.getColumn(e.row, "DT_FROM"));
        		var dtTo   = (e.columnid == "DT_TO"   ? e.newvalue : obj.getColumn(e.row, "DT_TO"));
        		if (this.gfnIsNull(dtFrom) || this.gfnIsNull(dtTo)) return;

        		if(this.gfnGetDiffDate(dtFrom, dtTo) <= -1){
        			this.gfnAlert("시작일자는 종료일자 보다 작아야 합니다.");
        			return false;
        		}
        	}
        };

        // 첨부파일
        this.fnExeFileManager = function(){

        }

        this.fnFileUpload = function()
        {

        	var sCdDir = "";

        	// 최초 작성시엔 NO_SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        	// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!
        	if(this.gfnGetFlag(this.dsList, this.dsList.rowposition) == "I"){
        		this.gfnAlert("저장 후 파일첨부 진행.");
        		return false;
        	}

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DH09";
        	fileManager.CD_DIR = [this.dsList.getColumn(this.dsList.rowposition, "NO_EXPENSE")];
        	//fileManager.IS_READONLY = false;
        	trace(this.gReadOnlyFlag);
        	trace(" NO_EXPENSE =>" + this.dsList.getColumn(this.dsList.rowposition, "NO_EXPENSE"));
        	fileManager.IS_READONLY = this.gReadOnlyFlag;

        	this.gfnFileManager(fileManager, "fnFileCallback");

        };

        this.fnFileCallback = function(strID, val) {
        	this.dsList.set_enableevent(false);
        	if(val.Cnt > 0) {
        		this.btnFile.set_text("첨부(" + val.Cnt + ")");
        		this.dsList.setColumn(this.dsList.rowposition, "URL_PROOF", "첨부(" + val.Cnt + ")");
        		this.dsList.setColumn(this.dsList.rowposition, "FILE_CNT", val.Cnt );

        	}
        	else {
        		this.btnFile.set_text("첨부");
        		this.dsList.setColumn(this.dsList.rowposition, "URL_PROOF", "첨부");
        		this.dsList.setColumn(this.dsList.rowposition, "FILE_CNT", 0 );
        	}
        	this.dsList.set_enableevent(true);

        };

        this.divData_divDataTop_btnCD_SLIP_onclick = function(obj,e)
        {
        	//trace("CD_DEPT->" + this.dsSearch.getColumn(0, "CD_DEPT"));
        	var param = {};
        	param.CD_DEPT_BH = this.dsSearch.getColumn(0, "CD_DEPT");
        	param.DS_DEPT_BH = this.dsSearch.getColumn(0, "DS_DEPT");
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_EXPENSE_SLIP_SEARCH", "fnExpenseSlipSearch_PopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());
        };

        this.fnExpenseSlipSearch_PopupCallBack = function(svcID, value){
        	//trace("value->"+value);
        	//if(value != false) {
        	if (!this.gfnIsNull(value)){

        		var json = JSON.parse(value);
        		var flag = this.dsList.getColumn(0, this.ucFlag);

        		if(this.dsListSub.rowcount > 0) return;

        		if(this.dsList.rowcount == 0){
        			var nRow = this.dsList.insertRow(0);
        		}

        		if(this.dsList.findRow(this.ucFlag, "I") > -1){
        			var nRow = this.dsList.rowposition;
        		}

        		var sCdCorp = this.gfnNvl(this.dsSearch.getColumn(0, "CD_CORP"), json.CD_CORP);
        		var sDsCorp = this.gfnNvl(this.dsSearch.getColumn(0, "DS_CORP"), json.DS_CORP);

        		this.dsList.setColumn(nRow, this.ucFlag		, "I");		//플래그값
        		this.dsList.setColumn(nRow, "YN_END"		, "N");		//완료여부
        		this.dsList.setColumn(nRow, "CD_CORP"		, sCdCorp);	//법인코드

        		this.dsList.setColumn(nRow, "CD_SLIP"	, json.CD_SLIP);

        		this.dsList.setColumn(nRow, "DT_ACCOUNT"	, json.DT_ACCOUNT);
        		this.dsList.setColumn(nRow, "CD_DEPT"		, json.CD_DEPT);	//귀속부서코드
        		this.dsList.setColumn(nRow, "DS_DEPT_ACNT"	, json.DS_DEPT);	//귀속부서명

        		this.dsList.setColumn(nRow, "CD_DEPT_BH"	, json.CD_DEPT);	//발행부서코드
        		this.dsList.setColumn(nRow, "DS_DEPT_BH"	, json.DS_DEPT);	//발행부서명

        		this.dsList.setColumn(nRow, "CD_DEPT_BANJE"	, json.CD_DEPT);	//반제귀속부서코드
        		this.dsList.setColumn(nRow, "DS_DEPT_BANJE"	, json.DS_DEPT);	//반제귀속부서명

        		this.dsList.setColumn(nRow, "CD_VENDOR"	, json.CD_VENDOR);		//거래처코드
        		this.dsList.setColumn(nRow, "DS_VENDOR"	, json.DS_VENDOR);		//거래처명
        		this.dsList.setColumn(nRow, "TY_VENDOR"	, json.TY_VENDOR);		//거래처명

        		this.dsList.setColumn(nRow, "RM_BIGO"	, json.DS_REM);		// 적요

        		this.dsList.setColumn(nRow, "AM_EXPENSE", json.AM_ACCOUNT);		//공급가

        		this.dsList.set_rowposition(nRow);

        		//활성화 처리
        		this.fnEnableComp("Y");

        		this.dsListSub.clearData();

        		this.dsSearch.set_enableevent(false);

        		//this.ccfNO_EXPENSE.form.CDTextBox.set_value("");
        		this.dsSearch.setColumn(0, "CD_CORP", sCdCorp);
        		this.dsSearch.setColumn(0, "DS_CORP", sDsCorp);

        		this.dsSearch.set_enableevent(true);

        		this.ccfISSUE_ID.form.CDTextBox.setFocus();

        	}
        	//this.FormBtns.Select.click();
        }
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        };


        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "40");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsCD_CURR=combo0";
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
        	this.dsExchange.setColumn(0, "DT_BASE", this.dsList.getColumn(this.dsList.rowposition, "DT_ACCOUNT"));
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

        	this.dsList.setColumn(row, "AM_EXPENSE", this.fnGetTrunc(amContKrw, 1));
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
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter00.addEventHandler("ondrag",this.divData_divSplitter00_ondrag,this);
            this.divData.form.divDataRight.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataRight.form.divDataBottom.form.btnGridSave.addEventHandler("onclick",this.divData_divDataBottom_btnGridSave_onclick,this);
            this.divData.form.divDataRight.form.divDataBottom.form.btnGridDelete.addEventHandler("onclick",this.divData_divDataBottom_btnGridDelete_onclick,this);
            this.divData.form.divDataRight.form.divDataBottom.form.btnGridAdd.addEventHandler("onclick",this.divData_divDataBottom_btnGridAdd_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.sta10.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.txtRM_BIGO.addEventHandler("onchanged",this.divData_divDataTop_txtRM_BIGO_onchanged,this);
            this.divData.form.divDataRight.form.divDataTop.form.sta23.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.btnCD_SLIP.addEventHandler("onclick",this.divData_divDataTop_btnCD_SLIP_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.sta36.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.divData.form.divDataRight.form.divDataTop.form.sta50.addEventHandler("onclick",this.divData_divDataRight_sta01_onclick,this);
            this.dsListSub.addEventHandler("cancolumnchange",this.dsListSub_cancolumnchange,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsRtEx.addEventHandler("cancolumnchange",this.dsListSub_cancolumnchange,this);
        };
        this.loadIncludeScript("DHA_EXPENSE_REGISTRATION.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
