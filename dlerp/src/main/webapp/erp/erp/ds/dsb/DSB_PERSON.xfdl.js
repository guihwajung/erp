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
            this.set_titletext("개인별출역관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSBPR_PERSONLIST_SELECT</Col></Row><Row><Col id=\"SP\">DSBPR_PERSON_SELECT</Col><Col id=\"TARGET\">d_select</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DSBPR_PERSON_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DSBPR_PERSON_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DSBPR_PERSON_DELETE</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DSBPR_ETCPAY_CHANGE</Col></Row><Row><Col id=\"TARGET\">f_insert</Col><Col id=\"SP\">DSBPR_PERSON_TRANSFER</Col></Row><Row><Col id=\"TARGET\">updateWeekmoon</Col><Col id=\"SP\">DSBPR_TIMECARD_UPDATE_WEEKMOON</Col></Row><Row><Col id=\"TARGET\">exec1</Col><Col id=\"SP\">DSBPR_MONMAGAM</Col></Row><Row><Col id=\"TARGET\">exec2</Col><Col id=\"SP\">DSBPR_MONMAGAM_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID_REAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_HADO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HADO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"DT_WORK\"/><Col id=\"NO_ID\"/><Col id=\"NO_ID_REAL\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_HIDDEN", this);
            obj._setContents("<ColumnInfo><Column id=\"YN_HIDDEN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YN_HIDDEN\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSubAm", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_SODUK\" type=\"STRING\" size=\"256\"/><Column id=\"AM_JUMIN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GOYONG\" type=\"STRING\" size=\"256\"/><Column id=\"AM_KOOKMIN\" type=\"STRING\" size=\"256\"/><Column id=\"AM_HEALTH\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SILVER\" type=\"STRING\" size=\"256\"/><Column id=\"AM_GONGJE\" type=\"STRING\" size=\"256\"/><Column id=\"AM_JIGUB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSigub", this);
            obj._setContents("<ColumnInfo><Column id=\"AM_ETCPAY\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTransfer", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장/부서 코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta02:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFDEPTCORP");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_HADO","ccfCD_SITE:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("작업반");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfSEARCH_CD_HADO","staCD_HADO:0.0","10.0","183","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","cfSEARCH_CD_HADO:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("tclDT_WORK","staYM_WORK:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","tclDT_WORK:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.set_textDecoration("none");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_ID","sta01:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_HIDDEN","tclDT_WORK:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("간략");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK00","chkYN_HIDDEN:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("성과수당");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SIGUB","staYM_WORK00:0.0","10.0","104","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_format("9,999");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnChg","txtAM_SIGUB:0.0","10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("배분");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_COST","sta01:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFCOST_BATSEL");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","16.09%","10","7","92.65%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","50",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","11",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","50",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","11",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divDataLeftBo","0","divDataRight:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIN_TELF1","0","0","65","30",null,null,null,null,null,null,this.divData.form.divDataLeftBo.form);
            obj.set_taborder("0");
            obj.set_text("소득세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataLeftBo.addChild(obj.name, obj);

            obj = new Static("staBgIN_TELF1","64","0","75","30",null,null,null,null,null,null,this.divData.form.divDataLeftBo.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeftBo.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SODUK","69","5","65","20",null,null,null,null,null,null,this.divData.form.divDataLeftBo.form);
            obj.set_taborder("2");
            obj.set_format("9,999");
            obj.set_enable("false");
            this.divData.form.divDataLeftBo.addChild(obj.name, obj);

            obj = new Static("staBgIN_TELF00","202","0","75","30",null,null,null,null,null,null,this.divData.form.divDataLeftBo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeftBo.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_JUMIN","207","5","65","20",null,null,null,null,null,null,this.divData.form.divDataLeftBo.form);
            obj.set_taborder("4");
            obj.set_format("9,999");
            obj.set_enable("false");
            this.divData.form.divDataLeftBo.addChild(obj.name, obj);

            obj = new Static("staIN_TELF00","138","0","65","30",null,null,null,null,null,null,this.divData.form.divDataLeftBo.form);
            obj.set_taborder("5");
            obj.set_text("주민세");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataLeftBo.addChild(obj.name, obj);

            obj = new Static("staBgIN_TELF01","355","0","75","30",null,null,null,null,null,null,this.divData.form.divDataLeftBo.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeftBo.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_GOYONG","360","5","65","20",null,null,null,null,null,null,this.divData.form.divDataLeftBo.form);
            obj.set_taborder("7");
            obj.set_format("9,999");
            obj.set_enable("false");
            this.divData.form.divDataLeftBo.addChild(obj.name, obj);

            obj = new Static("staIN_TELF01","276","0","80","30",null,null,null,null,null,null,this.divData.form.divDataLeftBo.form);
            obj.set_taborder("8");
            obj.set_text("고용보험료");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataLeftBo.addChild(obj.name, obj);

            obj = new Static("staBgIN_TELF02","493","0","75","30",null,null,null,null,null,null,this.divData.form.divDataLeftBo.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeftBo.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_KOOKMIN","498","5","65","20",null,null,null,null,null,null,this.divData.form.divDataLeftBo.form);
            obj.set_taborder("10");
            obj.set_format("9,999");
            obj.set_enable("false");
            this.divData.form.divDataLeftBo.addChild(obj.name, obj);

            obj = new Static("staIN_TELF02","429","0","65","30",null,null,null,null,null,null,this.divData.form.divDataLeftBo.form);
            obj.set_taborder("11");
            obj.set_text("국민연금");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataLeftBo.addChild(obj.name, obj);

            obj = new Static("staBgIN_TELF03","631","0","75","30",null,null,null,null,null,null,this.divData.form.divDataLeftBo.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeftBo.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_HEALTH","636","5","65","20",null,null,null,null,null,null,this.divData.form.divDataLeftBo.form);
            obj.set_taborder("13");
            obj.set_format("9,999");
            obj.set_enable("false");
            this.divData.form.divDataLeftBo.addChild(obj.name, obj);

            obj = new Static("staIN_TELF03","567","0","65","30",null,null,null,null,null,null,this.divData.form.divDataLeftBo.form);
            obj.set_taborder("14");
            obj.set_text("건강보험");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataLeftBo.addChild(obj.name, obj);

            obj = new Static("staBgIN_TELF04","769","0","75","30",null,null,null,null,null,null,this.divData.form.divDataLeftBo.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeftBo.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SILVER","774","5","65","20",null,null,null,null,null,null,this.divData.form.divDataLeftBo.form);
            obj.set_taborder("16");
            obj.set_format("9,999");
            obj.set_enable("false");
            this.divData.form.divDataLeftBo.addChild(obj.name, obj);

            obj = new Static("staIN_TELF04","705","0","65","30",null,null,null,null,null,null,this.divData.form.divDataLeftBo.form);
            obj.set_taborder("17");
            obj.set_text("요양보험");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataLeftBo.addChild(obj.name, obj);

            obj = new Static("staBgIN_TELF05","922","0","75","30",null,null,null,null,null,null,this.divData.form.divDataLeftBo.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeftBo.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_GONGJE","927","5","65","20",null,null,null,null,null,null,this.divData.form.divDataLeftBo.form);
            obj.set_taborder("19");
            obj.set_format("9,999");
            obj.set_enable("false");
            this.divData.form.divDataLeftBo.addChild(obj.name, obj);

            obj = new Static("staIN_TELF05","843","0","80","30",null,null,null,null,null,null,this.divData.form.divDataLeftBo.form);
            obj.set_taborder("20");
            obj.set_text("공제계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataLeftBo.addChild(obj.name, obj);

            obj = new Static("staIN_TELF06","staBgIN_TELF05:-1","0","80","30",null,null,null,null,null,null,this.divData.form.divDataLeftBo.form);
            obj.set_taborder("21");
            obj.set_text("차인지급액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataLeftBo.addChild(obj.name, obj);

            obj = new Static("staBgIN_TELF06","staIN_TELF06:-1","0","75","30",null,null,null,null,null,null,this.divData.form.divDataLeftBo.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeftBo.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_JIGUB","staIN_TELF06:5","5","65","20",null,null,null,null,null,null,this.divData.form.divDataLeftBo.form);
            obj.set_taborder("23");
            obj.set_format("9,999");
            obj.set_enable("false");
            this.divData.form.divDataLeftBo.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.tclDT_WORK.form.TextBox","value","dsSearch","DT_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfNO_ID.form.DSTextBox","value","dsSearch","NO_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.chkYN_HIDDEN","value","dsYN_HIDDEN","YN_HIDDEN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataLeftBo.form.txtAM_SODUK","value","dsListSubAm","AM_SODUK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataLeftBo.form.txtAM_JUMIN","value","dsListSubAm","AM_JUMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataLeftBo.form.txtAM_GOYONG","value","dsListSubAm","AM_GOYONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataLeftBo.form.txtAM_KOOKMIN","value","dsListSubAm","AM_KOOKMIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataLeftBo.form.txtAM_HEALTH","value","dsListSubAm","AM_HEALTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataLeftBo.form.txtAM_SILVER","value","dsListSubAm","AM_SILVER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataLeftBo.form.txtAM_GONGJE","value","dsListSubAm","AM_GONGJE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.txtAM_SIGUB","value","dsListSigub","AM_ETCPAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.divDataLeftBo.form.txtAM_JIGUB","value","dsListSubAm","AM_JIGUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.cfSEARCH_CD_HADO.form.CDTextBox","value","dsSearch","CD_HADO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.cfSEARCH_CD_HADO.form.DSTextBox","value","dsSearch","DS_HADO");
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
        this.registerScript("DSB_PERSON.xfdl", function() {
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

        //    this.btn1.set_enable(false); //월마감
        //    this.btn2.set_enable(false); //월마감 취소

        	this.dsSearch.setColumn(0, "DT_WORK",  this.gfnGetDate().substr(0,6));	// 년월 현재월로 셋팅
        	this.fnColHid();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

            //this.btn1 = this.gfnFormButtonAdd("BTN_MONMAGAM", "fnMonmagamYnCheck"); //월마감
            //this.btn2 = this.gfnFormButtonAdd("BTN_MONMAGAM_CANCEL", "fnMonmagamCancel"); //월마감 취소
        	this.btn3 = this.gfnFormButtonAdd("btnPersonTransfer", "fnPersonTransfer");
        	//this.btn2 = this.gfnFormButtonAdd("btnAprvCmpl", "fnAprvCmpl");
        	//this.btn3 = this.gfnFormButtonAdd("btnAprvCnc", "fnAprvCnc");
        	this.btnCostAll = this.gfnFormButtonAdd("btnCostAll", "fnCostAll");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.cfSEARCH_CD_HADO = this.divSearch.form.cfSEARCH_CD_HADO;
        	this.tclDT_WORK = this.divSearch.form.tclDT_WORK;
        	this.ccfNO_ID = this.divSearch.form.ccfNO_ID;
        	this.chkYN_HIDDEN = this.divSearch.form.chkYN_HIDDEN;
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//this.ccfCD_SITE.CodeFindName = "DZX_CFDEPT";		// 현장코드(검색조건_공통 현장코드 아님)
        	this.cfSEARCH_CD_HADO.CodeFindName = "DWX_CFHADO_JIK";	// 계약번호
        	this.ccfNO_ID.CodeFindName = "DSX_CFEMPLOYEE_04";	// 성명-주민번호(검색조건)

        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfSEARCH_CD_HADO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfNO_ID.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_SITE.AfterCDTextChanged = "ccfCD_SITE_AfterCDTextChanged";
        	this.ccfNO_ID.AfterCDTextChanged = "ccfNO_ID_AfterCDTextChanged";

        	this.divSearch.form.ccfCD_COST.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.divSearch.form.ccfCD_COST.AfterCDTextChanged = "ccfCD_COST_AfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DS", "DSB_PERSONPAY");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DS", "DSB_PERSON");

        	// 그리드 코드파인드 설정
        	this.dxGridSub.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 그리드 onkeyup 이벤트
        	//this.dxGrid.addEventHandler("onkeyup", this.fnGrid_OnKeyUp, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_JIGUB", "string");
        	this.dsSelect.addColumn("NO_ID", "string");
        	this.dsSelect.addColumn("CD_HADO", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_SITE", "string");
        	this.dsSelectSub.addColumn("DT_WORK", "string");
        	this.dsSelectSub.addColumn("NO_ID", "string");
        	this.dsSelectSub.addColumn("TY_TOIJIK", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("DT_WORK", "string");
        	this.dsUpdate.addColumn("TY_CHAIYONG", "string");
        	this.dsUpdate.addColumn("NO_ID", "string");
        	this.dsUpdate.addColumn("TY_PAY", "string");
        	this.dsUpdate.addColumn("AM_SIGUB", "int");
        	this.dsUpdate.addColumn("TM_START", "string");
        	this.dsUpdate.addColumn("MN_START", "string");
        	this.dsUpdate.addColumn("TM_END", "string");
        	this.dsUpdate.addColumn("MN_END", "string");
        	this.dsUpdate.addColumn("CD_COST", "string");
        	this.dsUpdate.addColumn("TM_RW", "bigdecimal");
        	this.dsUpdate.addColumn("TM_OT", "bigdecimal");
        	this.dsUpdate.addColumn("TM_HW", "bigdecimal");
        	this.dsUpdate.addColumn("TM_NW", "bigdecimal");
        	this.dsUpdate.addColumn("TM_WW", "bigdecimal");
        	this.dsUpdate.addColumn("TM_MW", "bigdecimal");
        	this.dsUpdate.addColumn("RT_INSENTIVE", "bigdecimal");
        	this.dsUpdate.addColumn("AM_ETCPAY", "int");
        	this.dsUpdate.addColumn("TY_HOLIDAY", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("AM_WGSIGUB", "int");
        	this.dsUpdate.addColumn("SEQ", "int");
        	this.dsUpdate.addColumn("AM_ILDANG", "int");
        	this.dsUpdate.addColumn("ID_INSERT", "string");
        	this.dsUpdate.addColumn("AM_COST1", "int");
        	this.dsUpdate.addColumn("AM_COST2", "int");
        	this.dsUpdate.addColumn("AM_COST3", "int");
        	this.dsUpdate.addColumn("AM_COST4", "int");
        	this.dsUpdate.addColumn("AM_COST5", "int");
        	this.dsUpdate.addColumn("AM_COST6", "int");
        	this.dsUpdate.addColumn("YN_PREPAY", "string");
        	this.dsUpdate.addColumn("YN_BREAKFAST", "string");
        	this.dsUpdate.addColumn("YN_LUNCH", "string");
        	this.dsUpdate.addColumn("YN_DINNER", "string");
        	this.dsUpdate.addColumn("YN_CONFIRM", "string");
        	this.dsUpdate.addColumn("RT_GS", "bigdecimal");
        	this.dsUpdate.addColumn("CDSEQ_COST", "string");
        	this.dsUpdate.addColumn("RT_OT_RATE", "bigdecimal");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("DT_WORK", "string");
        	this.dsExec.addColumn("NO_ID", "string");
        	this.dsExec.addColumn("AM_ETCPAY", "int");
        	this.dsExec.addColumn("ID_UPDATE", "string");
        	this.dsExec.addColumn("TY_GUBUN", "string");

        	this.dsUpdateWeekmoon = new Dataset();
        	this.dsUpdateWeekmoon.addColumn("CD_SITE", "string");
        	this.dsUpdateWeekmoon.addColumn("DT_WORK", "string");
        	this.dsUpdateWeekmoon.addColumn("NO_ID", "string");

        	/*
        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SITE", "string");
        	this.dsInsert.addColumn("DT_WORK", "string");
        	this.dsInsert.addColumn("TY_CHAIYONG", "string");
        	this.dsInsert.addColumn("NO_ID", "string");
        	this.dsInsert.addColumn("TY_PAY", "string");
        	this.dsInsert.addColumn("AM_SIGUB", "int");
        	this.dsInsert.addColumn("TM_START", "string");
        	this.dsInsert.addColumn("MN_START", "string");
        	this.dsInsert.addColumn("TM_END", "string");
        	this.dsInsert.addColumn("MN_END", "string");
        	this.dsInsert.addColumn("CD_COST", "string");
        	this.dsInsert.addColumn("TM_RW", "bigdecimal");
        	this.dsInsert.addColumn("TM_OT", "bigdecimal");
        	this.dsInsert.addColumn("TM_HW", "bigdecimal");
        	this.dsInsert.addColumn("TM_NW", "bigdecimal");
        	this.dsInsert.addColumn("TM_WW", "bigdecimal");
        	this.dsInsert.addColumn("TM_MW", "bigdecimal");
        	this.dsInsert.addColumn("AM_ETCPAY", "int");
        	this.dsInsert.addColumn("RT_INSENTIVE", "bigdecimal");
        	this.dsInsert.addColumn("TY_HOLIDAY", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("AM_WGSIGUB", "int");
        	this.dsInsert.addColumn("SEQ", "int");
        	this.dsInsert.addColumn("AM_ILDANG", "int");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("AM_COST1", "int");
        	this.dsInsert.addColumn("AM_COST2", "int");
        	this.dsInsert.addColumn("AM_COST3", "int");
        	this.dsInsert.addColumn("AM_COST4", "int");
        	this.dsInsert.addColumn("AM_COST5", "int");
        	this.dsInsert.addColumn("AM_COST6", "int");
        	this.dsInsert.addColumn("YN_PREPAY", "string");
        	this.dsInsert.addColumn("YN_BREAKFAST", "string");
        	this.dsInsert.addColumn("YN_LUNCH", "string");
        	this.dsInsert.addColumn("YN_DINNER", "string");
        	this.dsInsert.addColumn("RT_GS", "bigdecimal");
        	this.dsInsert.addColumn("CDSEQ_COST", "string");
        	this.dsInsert.addColumn("RT_OT_RATE", "bigdecimal");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SITE", "string");
        	this.dsDelete.addColumn("NO_ID", "string");
        	this.dsDelete.addColumn("DT_WORK", "string");
        	this.dsDelete.addColumn("SEQ", "int");
        	*/

            this.dsExec1 = new Dataset(); //월마감
            this.dsExec1.addColumn("CD_SITE", "string");
            this.dsExec1.addColumn("YM_WORK", "string");
            this.dsExec1.addColumn("ID_INSERT", "string");
            this.dsExec1.addColumn("GUBUN", "string");

            this.dsExec2 = new Dataset(); //월마감 취소
            this.dsExec2.addColumn("CD_SITE", "string");
            this.dsExec2.addColumn("YM_WORK", "string");
            this.dsExec2.addColumn("ID_INSERT", "string");
            this.dsExec2.addColumn("GUBUN", "string");
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

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_JIGUB", this.dsSearch.getColumn(0, "DT_WORK"));
        	this.dsSelect.setColumn(0, "NO_ID", "");
        	this.dsSelect.setColumn(0, "CD_HADO", this.dsSearch.getColumn(0, "CD_HADO"));

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
          *	조회 버튼
          */
        this.fnSelectSub = function() {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return;

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	// 디테일 데이터셋 데이터 삭제
        	this.dsListSub.clearData();

        	// 디테일 파마리터 데이터셋 셋팅
        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectSub.setColumn(0, "DT_WORK", this.dsSearch.getColumn(0, "DT_WORK").substr(0,6));
        	this.dsSelectSub.setColumn(0, "NO_ID", this.dsList.getColumn(this.dsList.rowposition, "NO_ID_REAL"));
        	this.dsSelectSub.setColumn(0, "TY_TOIJIK", "");

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelectSub";
        	var outData     = "dsListSub=d_select0 dsListSubAm=d_select1";
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
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current

        	/*
        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nrow, "YN_EDIT", "Y");
        	this.dsList.setColumn(nrow, "YN_DTLS", "N");
        	this.dsList.set_enableevent(true);
        	*/
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크``
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();

        	this.dsUpdate.clearData();
        	//this.dsInsert.clearData();
        	//this.dsDelete.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        				/*
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsInsert.setColumn(nrow, "DT_WORK", this.dsListSub.getColumn(i, "DT_WORK"));
        				this.dsInsert.setColumn(nrow, "TY_CHAIYONG", this.dsListSub.getColumn(i, "TY_CHAIYONG"));
        				this.dsInsert.setColumn(nrow, "NO_ID", this.dsList.getColumn(this.dsList.rowposition, "NO_ID_REAL"));
        				this.dsInsert.setColumn(nrow, "TY_PAY", this.dsListSub.getColumn(i, "TY_PAY"));
        				this.dsInsert.setColumn(nrow, "AM_SIGUB", this.dsListSub.getColumn(i, "AM_SIGUB"));
        				this.dsInsert.setColumn(nrow, "TM_START", this.dsListSub.getColumn(i, "TM_START"));
        				this.dsInsert.setColumn(nrow, "MN_START", this.dsListSub.getColumn(i, "MN_START"));
        				this.dsInsert.setColumn(nrow, "TM_END", this.dsListSub.getColumn(i, "TM_END"));
        				this.dsInsert.setColumn(nrow, "MN_END", this.dsListSub.getColumn(i, "MN_END"));
        				this.dsInsert.setColumn(nrow, "CD_COST", this.dsListSub.getColumn(i, "CD_COST"));
        				this.dsInsert.setColumn(nrow, "TM_RW", this.dsListSub.getColumn(i, "TM_RW"));
        				this.dsInsert.setColumn(nrow, "TM_OT", this.dsListSub.getColumn(i, "TM_OT"));
        				this.dsInsert.setColumn(nrow, "TM_HW", this.dsListSub.getColumn(i, "TM_HW"));
        				this.dsInsert.setColumn(nrow, "TM_NW", this.dsListSub.getColumn(i, "TM_NW"));
        				this.dsInsert.setColumn(nrow, "TM_WW", this.dsListSub.getColumn(i, "TM_WW"));
        				this.dsInsert.setColumn(nrow, "TM_MW", this.dsListSub.getColumn(i, "TM_MW"));
        				this.dsInsert.setColumn(nrow, "AM_ETCPAY", this.dsListSub.getColumn(i, "AM_ETCPAY"));
        				this.dsInsert.setColumn(nrow, "RT_INSENTIVE", this.dsList.getColumn(i, "RT_INSENTIVE"));
        				this.dsInsert.setColumn(nrow, "TY_HOLIDAY", this.dsList.getColumn(i, "TY_HOLIDAY"));
        				this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsInsert.setColumn(nrow, "AM_WGSIGUB", this.dsList.getColumn(i, "AM_WGSIGUB"));
        				this.dsInsert.setColumn(nrow, "SEQ", this.dsList.getColumn(i, "SEQ"));
        				this.dsInsert.setColumn(nrow, "AM_ILDANG", this.dsList.getColumn(i, "AM_ILDANG"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "AM_COST1", this.dsList.getColumn(i, "AM_COST1"));
        				this.dsInsert.setColumn(nrow, "AM_COST2", this.dsList.getColumn(i, "AM_COST2"));
        				this.dsInsert.setColumn(nrow, "AM_COST3", this.dsList.getColumn(i, "AM_COST3"));
        				this.dsInsert.setColumn(nrow, "AM_COST4", this.dsList.getColumn(i, "AM_COST4"));
        				this.dsInsert.setColumn(nrow, "AM_COST5", this.dsList.getColumn(i, "AM_COST5"));
        				this.dsInsert.setColumn(nrow, "AM_COST6", this.dsList.getColumn(i, "AM_COST6"));
        				this.dsInsert.setColumn(nrow, "YN_PREPAY", this.dsList.getColumn(i, "YN_PREPAY"));
        				this.dsInsert.setColumn(nrow, "YN_BREAKFAST", this.dsList.getColumn(i, "YN_BREAKFAST"));
        				this.dsInsert.setColumn(nrow, "YN_LUNCH", this.dsList.getColumn(i, "YN_LUNCH"));
        				this.dsInsert.setColumn(nrow, "YN_DINNER", this.dsList.getColumn(i, "YN_DINNER"));
        				this.dsInsert.setColumn(nrow, "RT_GS", this.dsList.getColumn(i, "RT_GS"));
        				this.dsInsert.setColumn(nrow, "CDSEQ_COST", this.dsList.getColumn(i, "CDSEQ_COST"));
        				this.dsInsert.setColumn(nrow, "RT_OT_RATE", this.dsList.getColumn(i, "RT_OT_RATE"));
        				break;
        				*/
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsUpdate.setColumn(nrow, "DT_WORK", this.dsListSub.getColumn(i, "DT_WORK"));
        				this.dsUpdate.setColumn(nrow, "TY_CHAIYONG", this.dsListSub.getColumn(i, "TY_CHAIYONG"));
        				this.dsUpdate.setColumn(nrow, "NO_ID", this.dsList.getColumn(this.dsList.rowposition, "NO_ID_REAL"));
        				this.dsUpdate.setColumn(nrow, "TY_PAY", this.dsListSub.getColumn(i, "TY_PAY"));
        				this.dsUpdate.setColumn(nrow, "AM_SIGUB", this.dsListSub.getColumn(i, "AM_SIGUB"));
        				this.dsUpdate.setColumn(nrow, "TM_START", this.dsListSub.getColumn(i, "TM_START"));
        				this.dsUpdate.setColumn(nrow, "MN_START", this.dsListSub.getColumn(i, "MN_START"));
        				this.dsUpdate.setColumn(nrow, "TM_END", this.dsListSub.getColumn(i, "TM_END"));
        				this.dsUpdate.setColumn(nrow, "MN_END", this.dsListSub.getColumn(i, "MN_END"));
        				this.dsUpdate.setColumn(nrow, "CD_COST", this.dsListSub.getColumn(i, "CD_COST"));
        				this.dsUpdate.setColumn(nrow, "TM_RW", this.dsListSub.getColumn(i, "TM_RW"));
        				this.dsUpdate.setColumn(nrow, "TM_OT", this.dsListSub.getColumn(i, "TM_OT"));
        				this.dsUpdate.setColumn(nrow, "TM_HW", this.dsListSub.getColumn(i, "TM_HW"));
        				this.dsUpdate.setColumn(nrow, "TM_NW", this.dsListSub.getColumn(i, "TM_NW"));
        				this.dsUpdate.setColumn(nrow, "TM_WW", this.dsListSub.getColumn(i, "TM_WW"));
        				this.dsUpdate.setColumn(nrow, "TM_MW", this.dsListSub.getColumn(i, "TM_MW"));
        				this.dsUpdate.setColumn(nrow, "RT_INSENTIVE", this.dsListSub.getColumn(i, "RT_INSENTIVE"));
        				this.dsUpdate.setColumn(nrow, "AM_ETCPAY", this.dsListSub.getColumn(i, "AM_ETCPAY"));
        				this.dsUpdate.setColumn(nrow, "TY_HOLIDAY", this.dsListSub.getColumn(i, "TY_HOLIDAY"));
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsListSub.getColumn(i, "CD_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "AM_WGSIGUB", this.dsListSub.getColumn(i, "AM_WGSIGUB"));
        				this.dsUpdate.setColumn(nrow, "SEQ", this.dsListSub.getColumn(i, "SEQ"));
        				this.dsUpdate.setColumn(nrow, "AM_ILDANG", this.dsListSub.getColumn(i, "AM_ILDANG"));
        				this.dsUpdate.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "AM_COST1", this.dsListSub.getColumn(i, "AM_COST1"));
        				this.dsUpdate.setColumn(nrow, "AM_COST2", this.dsListSub.getColumn(i, "AM_COST2"));
        				this.dsUpdate.setColumn(nrow, "AM_COST3", this.dsListSub.getColumn(i, "AM_COST3"));
        				this.dsUpdate.setColumn(nrow, "AM_COST4", this.dsListSub.getColumn(i, "AM_COST4"));
        				this.dsUpdate.setColumn(nrow, "AM_COST5", this.dsListSub.getColumn(i, "AM_COST5"));
        				this.dsUpdate.setColumn(nrow, "AM_COST6", this.dsListSub.getColumn(i, "AM_COST6"));
        				this.dsUpdate.setColumn(nrow, "YN_PREPAY", this.dsListSub.getColumn(i, "YN_PREPAY"));
        				this.dsUpdate.setColumn(nrow, "YN_BREAKFAST", this.dsListSub.getColumn(i, "YN_BREAKFAST"));
        				this.dsUpdate.setColumn(nrow, "YN_LUNCH", this.dsListSub.getColumn(i, "YN_LUNCH"));
        				this.dsUpdate.setColumn(nrow, "YN_DINNER", this.dsListSub.getColumn(i, "YN_DINNER"));
        				this.dsUpdate.setColumn(nrow, "YN_CONFIRM", this.dsListSub.getColumn(i, "YN_CONFIRM"));
        				this.dsUpdate.setColumn(nrow, "RT_GS", this.dsListSub.getColumn(i, "RT_GS"));
        				this.dsUpdate.setColumn(nrow, "CDSEQ_COST", this.dsListSub.getColumn(i, "CDSEQ_COST"));
        				this.dsUpdate.setColumn(nrow, "RT_OT_RATE", this.dsListSub.getColumn(i, "RT_OT_RATE"));

        				break;
        			case "D":
        				/*
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsDelete.setColumn(nrow, "NO_ID", this.dsList.getColumn(this.dsList.rowposition, "NO_ID_REAL"));
        				this.dsDelete.setColumn(nrow, "DT_WORK", this.dsList.getColumn(i, "DT_WORK"));
        				this.dsDelete.setColumn(nrow, "SEQ", this.dsList.getColumn(i, "SEQ"));
        				break;
        				*/
        		}
        	}
        //
        	this.dsUpdateWeekmoon.clearData();
        	this.dsUpdateWeekmoon.addRow();

        	this.dsUpdateWeekmoon.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsUpdateWeekmoon.setColumn(0, "DT_WORK", this.dsSearch.getColumn(0, "DT_WORK"));
        	this.dsUpdateWeekmoon.setColumn(0, "NO_ID", this.dsList.getColumn(this.dsList.rowposition, "NO_ID_REAL"));

        	if (this.dsUpdate.rowcount == 0) return;
        	//if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate updateWeekmoon=dsUpdateWeekmoon";
        	//var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
        	var outData     = "";
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
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        };

        //FERP출역등록
        this.fnPersonTransfer = function()
        {
        	this.gfnConfirm("FERP출역등록을 하시겠습니까?", function(sSvcId, oRtn) {
        		if (!oRtn) return false;

        		this.dsTransfer.clearData();

        		var sCdSite =this.dsSearch.getColumn(this.dsSearch.rowposition, "CD_SITE");
        		var sYmWork =this.dsSearch.getColumn(this.dsSearch.rowposition, "DT_WORK");
        		if (!this.gfnIsNull(sCdSite) && !this.gfnIsNull(sYmWork))
        		{
        			var nRow = this.dsTransfer.addRow();
        			this.dsTransfer.setColumn(nRow, "CD_SITE", sCdSite);
        			this.dsTransfer.setColumn(nRow, "YM_WORK", sYmWork);
        			this.dsTransfer.setColumn(nRow, "ID_INSERT", this.objApp.gdsUserInfo.getColumn(this.objApp.gdsUserInfo.rowposition, "ID_USER"));

        			var strSvcId    = "f_insert";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "f_insert=dsTransfer";
        			var outData     = "";
        			var strArg      = "";
        			var callBackFnc = "fnCallback";
        			this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        		}
        	},"fnPersonTransfer_alert")
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"DT_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.tclDT_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("년월은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}
        	/*
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_ID"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfNO_ID.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("성명은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}
        	*/
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
        		if(0 < this.dsList.rowcount){
        			var YN_MAGAN = this.dsList.getColumn(0, "YN_MAGAM");
        			if(YN_MAGAN == "Y"){
        				//this.btn1.set_enable(false); 	//출역확정
        				//this.btn2.set_enable(true); 	//확정취소
        			}else{
        				//this.btn1.set_enable(true);	//출역확정
        				//this.btn2.set_enable(false); 	//확정취소
        			}
        		}else{
        			//this.btn1.set_enable(false); 	//출역확정
        			//this.btn2.set_enable(false); 	//확정취소
        		}

        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGridSub);

        		// 토요일, 일요일은 글자색을 변경한다
        		this.gfnGridColumnColor(this.dxGridSub, "DT_WORK", "BACK_ReadOnly,Blue", "WEEKDAY == '토'");
        		this.gfnGridColumnColor(this.dxGridSub, "DT_WORK", "BACK_ReadOnly,Red", "WEEKDAY == '일'");
        		this.gfnGridColumnColor(this.dxGridSub, "WEEKDAY", "BACK_ReadOnly,Blue", "WEEKDAY == '토'");
        		this.gfnGridColumnColor(this.dxGridSub, "WEEKDAY", "BACK_ReadOnly,Red", "WEEKDAY == '일'");
        		this.gfnGridColumnColor(this.dxGridSub, "HOILYDAY", "BACK_ReadOnly,Blue", "WEEKDAY == '토'");
        		this.gfnGridColumnColor(this.dxGridSub, "HOILYDAY", "BACK_ReadOnly,Red", "WEEKDAY == '일'");
        		this.gfnGridColumnColor(this.dxGridSub, "AM_SIGUB", "BACK_ReadOnly,Blue", "WEEKDAY == '토'");
        		this.gfnGridColumnColor(this.dxGridSub, "AM_SIGUB", "BACK_ReadOnly,Red", "WEEKDAY == '일'");
        		this.gfnGridColumnColor(this.dxGridSub, "CDSEQ_COST", "Blue", "WEEKDAY == '토'");
        		this.gfnGridColumnColor(this.dxGridSub, "CDSEQ_COST", "Red", "WEEKDAY == '일'");
        		this.gfnGridColumnColor(this.dxGridSub, "DS_COST", "Blue", "WEEKDAY == '토'");
        		this.gfnGridColumnColor(this.dxGridSub, "DS_COST", "Red", "WEEKDAY == '일'");
        		this.gfnGridColumnColor(this.dxGridSub, "TM_RW", "Blue", "WEEKDAY == '토'");
        		this.gfnGridColumnColor(this.dxGridSub, "TM_RW", "Red", "WEEKDAY == '일'");
        		this.gfnGridColumnColor(this.dxGridSub, "TM_OT", "Blue", "WEEKDAY == '토'");
        		this.gfnGridColumnColor(this.dxGridSub, "TM_OT", "Red", "WEEKDAY == '일'");
        		this.gfnGridColumnColor(this.dxGridSub, "TM_NW", "Blue", "WEEKDAY == '토'");
        		this.gfnGridColumnColor(this.dxGridSub, "TM_NW", "Red", "WEEKDAY == '일'");
        		this.gfnGridColumnColor(this.dxGridSub, "TM_CONVERT", "BACK_ReadOnly,Blue", "WEEKDAY == '토'");
        		this.gfnGridColumnColor(this.dxGridSub, "TM_CONVERT", "BACK_ReadOnly,Red", "WEEKDAY == '일'");
        		this.gfnGridColumnColor(this.dxGridSub, "AM_RW", "BACK_ReadOnly,Blue", "WEEKDAY == '토'");
        		this.gfnGridColumnColor(this.dxGridSub, "AM_RW", "BACK_ReadOnly,Red", "WEEKDAY == '일'");
        		this.gfnGridColumnColor(this.dxGridSub, "AM_OT", "BACK_ReadOnly,Blue", "WEEKDAY == '토'");
        		this.gfnGridColumnColor(this.dxGridSub, "AM_OT", "BACK_ReadOnly,Red", "WEEKDAY == '일'");
        		this.gfnGridColumnColor(this.dxGridSub, "AM_NW", "BACK_ReadOnly,Blue", "WEEKDAY == '토'");
        		this.gfnGridColumnColor(this.dxGridSub, "AM_NW", "BACK_ReadOnly,Red", "WEEKDAY == '일'");
        		this.gfnGridColumnColor(this.dxGridSub, "AM_HW", "BACK_ReadOnly,Blue", "WEEKDAY == '토'");
        		this.gfnGridColumnColor(this.dxGridSub, "AM_HW", "BACK_ReadOnly,Red", "WEEKDAY == '일'");
        		this.gfnGridColumnColor(this.dxGridSub, "AM_JUCHA", "BACK_ReadOnly,Blue", "WEEKDAY == '토'");
        		this.gfnGridColumnColor(this.dxGridSub, "AM_JUCHA", "BACK_ReadOnly,Red", "WEEKDAY == '일'");
        		this.gfnGridColumnColor(this.dxGridSub, "AM_YEAR", "BACK_ReadOnly,Blue", "WEEKDAY == '토'");
        		this.gfnGridColumnColor(this.dxGridSub, "AM_YEAR", "BACK_ReadOnly,Red", "WEEKDAY == '일'");
        		this.gfnGridColumnColor(this.dxGridSub, "AM_ETCPAY", "Blue", "WEEKDAY == '토'");
        		this.gfnGridColumnColor(this.dxGridSub, "AM_ETCPAY", "Red", "WEEKDAY == '일'");
        		this.gfnGridColumnColor(this.dxGridSub, "TT_IMGUM", "BACK_ReadOnly,Blue", "WEEKDAY == '토'");
        		this.gfnGridColumnColor(this.dxGridSub, "TT_IMGUM", "BACK_ReadOnly,Red", "WEEKDAY == '일'");

        		// STATE 컬럼값이 'U'이면 그리드 row 상태값을 update 상태로 변환한다
        		for (var i = 0; i < this.dsListSub.rowcount; i++) {
        			if(this.dsListSub.getColumn(i,"STATE") == "U"){
        				this.dsListSub.setColumn(i, this.ucFlag, "U");
        				this.gfnSetFormStatus(this, "U");
        			}
        		}

        		// 검색조건에 시급변경 컬럼에 셋팅
        		this.dsListSigub.clearData();
        		this.dsListSigub.addRow();
        		if(this.dsListSub.rowcount < 1){
        			this.dsListSigub.setColumn(0, "AM_ETCPAY", 0);
        		}else{
        			this.dsListSigub.setColumn(0, "AM_ETCPAY", this.dsListSub.getSum("AM_ETCPAY", 0, this.dsListSub.rowcount));
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.gfnSetFormStatus(this, "Q");	// 이부분 처리하지 않으면 저장후에 바로 화면 닫을때 변경된 데이터있다고 메시지 나옴
        			this.FormBtns.SubSelect.click();
        			//this.fnUpdateWeekmoon();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "updateWeekmoon"){
        		this.gfnSetFormStatus(this, "Q");	// 이부분 처리하지 않으면 저장후에 바로 화면 닫을때 변경된 데이터있다고 메시지 나옴
        		this.FormBtns.Select.click();
        	}
        	else if(svcID == "exec") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "f_insert")
        	{
        		if (errorCode == 0) {
        			this.gfnAlert("정상 처리되었습니다.", [], "f_insert_alert", this.fnSelect);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "exec1") //월마감
        	{
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
            }
        	else if (svcID == "exec2") //월마감 취소
        	{
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

        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.objApp.gdsUserInfo.getColumn(0, "CD_CORP"));
        	}
        	else if (id == "cfSEARCH_CD_HADO") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
         	}
        	else if (id == "ccfNO_ID"){
         		if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
         			this.gfnAlert("현장코드를 먼저 입력하세요.");
         			return false;
         		}
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_WORK"))) {
         			this.gfnAlert("년월을 먼저 입력하세요.");
         			return false;
         		}
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "DT_WORK", this.dsSearch.getColumn(0, "DT_WORK"));
        		dsUserParam.setColumn(nrow, "TY_TOIJIK", "N");
        		dsUserParam.setColumn(nrow, "TY_CHAIYONG", "2");
        	}
        	else if(id == "ccfCD_COST") {
        		var cd_site = this.dsSearch.getColumn(0, "CD_SITE");
        		if(this.gfnIsNull(cd_site)) {
        			this.gfnAlert("현장코드를 먼저 입력하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSelect.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "NO_HADOCONT", this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_HADO"));
        	}
        	return true;
        }

        // 현장코드 입력시 성명-주민번호 재선택 하기위해 null값으로 초기화 시킴
        this.ccfCD_SITE_AfterCDTextChanged = function(id, codeFindData) {
        	this.dsSearch.setColumn(0, "NO_ID", "");		// 주민번호
        	this.dsSearch.setColumn(0, "NO_ID_REAL", "");	// 암호화 안된 주민번호
        	this.ccfNO_ID.form.fnCodeFindClear();		// 이름

        }

        // 성명-주민번호 암호화 안된 리얼주민번호 셋팅
        this.ccfNO_ID_AfterCDTextChanged = function(id, codeFindData) {
        	// 코드,명칭 외 추가 컬럼 처리
        	var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능
        	var ds_noIdReal = "";

        	if (arr.length > 0) {
        		ds_noIdReal = arr[0]["NO_ID_REAL"];
        	}

        	this.dsSearch.setColumn(0, "NO_ID_REAL", ds_noIdReal);
        }

        this.ccfCD_COST_AfterCDTextChanged = function(id, codeFindData) {
        	// 코드,명칭 외 추가 컬럼 처리
        	var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능
        	var cd_cost = "";
        	var ds_cost = "";
        	if (arr.length > 0) {

        		cd_cost = arr[0]["CD_DKCOST"];
        		ds_cost = arr[0]["DS_COST"];

        		var rows = this.dxGridSub.getSelectedDatasetRows();
        		for(var i = 0; i < rows.length; i++)
        		{
        			this.dsListSub.setColumn(rows[i], "CDSEQ_COST", cd_cost);
        			this.dsListSub.setColumn(rows[i], "DS_COST", ds_cost);
        		}
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	//그리드 발주처 코드파인드
        	if (id == "DWX_CFCOST_ADJUST" || id == "DWX_CFCOST_BATSEL") {

        		var cd_site = this.dsSearch.getColumn(0, "CD_SITE");
        		if(this.gfnIsNull(cd_site)) {
        			this.gfnAlert("현장코드를 먼저 입력하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSelect.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "NO_HADOCONT", this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_HADO"));
         	}
        	return true;
        }


        // 그리드 OnKeyUp 이벤트
        this.fnGrid_OnKeyUp = function(obj,e)
        {
        	var nIndex = this.dxGridSub.getCellPos();	// 클릭한 cell의 인덱스
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGridSub, nIndex);	// 클릭한 cell의 컬럼명
        	//alert(colnm);

           // updateToDataset 실행시 편집상태가 풀리는 경우가 발생.
           // 실시간 계산 적용을 하려면 현재 편집중인 객체(e.fromreferenceobject)를 접근해서 처리해야 하는데 우선 주석처리.
           // 실시간 계산 적용이 아니면 AfterEdit 처리로 하면 되지만 일단 이대로 두고 추후 고려.
        	//this.dxGridSub.updateToDataset();

        	var nRow = this.dsListSub.rowposition;

        	if(colnm == "TM_RW" || colnm == "TM_OT" || colnm == "TM_NW" || colnm == "AM_ETCPAY") {	// 기본 or 연장 or 야간 or 능률급
        		//this.dsListSub.set_enableevent(false);


        		/*

        		// 임금총액
        		var ttImgum =
        			nexacro.round(
        			( nexacro.toNumber(this.dsList.getColumn(nRow, "AM_SIGUB").replace(",",""),0)
        			* nexacro.toNumber(this.dsList.getColumn(nRow, "TM_RW"),0)
        			* nexacro.toNumber(this.dsList.getColumn(nRow, "RT_RW"),0) )
        			+
        			( nexacro.toNumber(this.dsList.getColumn(nRow, "AM_SIGUB").replace(",",""),0)
        			* nexacro.toNumber(this.dsList.getColumn(nRow, "TM_OT"),0)
        			* nexacro.toNumber(this.dsList.getColumn(nRow, "RT_OT"),0) )
        			+
        			( nexacro.toNumber(this.dsList.getColumn(nRow, "AM_SIGUB").replace(",",""),0)
        			* nexacro.toNumber(this.dsList.getColumn(nRow, "TM_NW"),0)
        			* nexacro.toNumber(this.dsList.getColumn(nRow, "RT_NW"),0) )
        			+
        			nexacro.toNumber(this.dsList.getColumn(nRow, "AM_ETCPAY"),0)
        			);

        		this.dsList.setColumn(nRow, "TT_IMGUM", ttImgum);

        		// 과세표준
        		var amTaxStandard = nexacro.toNumber(this.dsList.getColumn(nRow, "TT_IMGUM"),0) - nexacro.toNumber(this.dsList.getColumn(nRow, "AM_ILYONG"),0);

        		// 과세표준 금액은 0보다 작을 수 없으므로 0보다 작을경우 0으로 초기화
        		if(amTaxStandard < 0){
        			amTaxStandard = 0;
        		}

        		this.dsList.setColumn(nRow, "AM_TAX_STANDARD", amTaxStandard);

        		// 산출세액
        		var amSanchulse = nexacro.round(nexacro.toNumber(this.dsList.getColumn(nRow, "AM_TAX_STANDARD"),0) * (1 - (nexacro.toNumber(this.dsList.getColumn(nRow, "RT_ILYONG_SODUKGONGJE"),0) / 100)));
        		this.dsList.setColumn(nRow, "AM_SANCHULSE", amSanchulse);

        		// 소득세
        		var amSoduk = nexacro.round(nexacro.toNumber(this.dsList.getColumn(nRow, "AM_SANCHULSE"),0) * nexacro.toNumber(this.dsList.getColumn(nRow, "RT_ILYONG_SODUK"),0) / 100);
        		this.dsList.setColumn(nRow, "AM_SODUK", amSoduk);

        		// 주민세
        		var amJumin = nexacro.round(nexacro.toNumber(this.dsList.getColumn(nRow, "AM_SANCHULSE"),0) * nexacro.toNumber(this.dsList.getColumn(nRow, "RT_ILYONG_JUMIN"),0) / 100);
        		this.dsList.setColumn(nRow, "AM_JUMIN", amJumin);

        		// 고용보험
        		var amGoyong = nexacro.round(nexacro.toNumber(this.dsList.getColumn(nRow, "AM_SANCHULSE"),0) * nexacro.toNumber(this.dsList.getColumn(nRow, "RT_GOYONG_EMPLOYEE"),0) / 100);
        		this.dsList.setColumn(nRow, "AM_GOYONG", amGoyong);

        		// 국민연금
        		var amKukmin = nexacro.round(nexacro.toNumber(this.dsList.getColumn(nRow, "AM_SANCHULSE"),0) * nexacro.toNumber(this.dsList.getColumn(nRow, "RT_KOOKMIN_EMPLOYEE"),0) / 100)
        		this.dsList.setColumn(nRow, "AM_KUKMIN", amKukmin);

        		// 공제액
        		var amGongje = nexacro.toNumber(this.dsList.getColumn(nRow, "AM_SODUK"),0) + nexacro.toNumber(this.dsList.getColumn(nRow, "AM_JUMIN"),0) + nexacro.toNumber(this.dsList.getColumn(nRow, "AM_GOYONG"),0) + nexacro.toNumber(this.dsList.getColumn(nRow, "AM_KUKMIN"),0);
        		this.dsList.setColumn(nRow, "AM_GONGJE", amGongje);

        		// 지급액
        		var amJigub = nexacro.toNumber(this.dsList.getColumn(nRow, "TT_IMGUM"),0) - nexacro.toNumber(this.dsList.getColumn(nRow, "AM_GONGJE"),0);
        		this.dsList.setColumn(nRow, "AM_JIGUB", amJigub);

        		//this.dsList.set_enableevent(true);
        		*/
        	}

        };

        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		// 마스터 그리드 클릭 이벤트(디테일 그리드 조회)
        		this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;
        	}
        };

        this.dsList_canrowposchange = function(obj,e) {
        	var can_rowchange = true;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        			break;
        		}
        	}
        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        	}
        	return can_rowchange;
        }

        this.dsList_canrowposchange_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsList.set_enableevent(false);
        		this.dsList.set_rowposition(this._row);
        		this.dsList.set_enableevent(true);
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        }

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        };

        // 간략 체크박스 전용 체크
        this.dsYN_HIDDEN_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.fnColHid();
        	}
        };

        // 컬럼 숨기고 보이기(간략 체크박스 체크유무에 따라 처리)
        this.fnColHid = function() {

        	var colTM_CONVERT = this.dxGridSub.getBindCellIndex("body", "TM_CONVERT");
        	var colAM_RW = this.dxGridSub.getBindCellIndex("body", "AM_RW");
        	var colAM_OT = this.dxGridSub.getBindCellIndex("body", "AM_OT");
        	var colAM_NW = this.dxGridSub.getBindCellIndex("body", "AM_NW");
        	var colAM_HW = this.dxGridSub.getBindCellIndex("body", "AM_HW");
        	var colAM_JUCHA = this.dxGridSub.getBindCellIndex("body", "AM_JUCHA");
        	var colAM_YEAR = this.dxGridSub.getBindCellIndex("body", "AM_YEAR");

        	if(this.dsYN_HIDDEN.getColumn(0, "YN_HIDDEN") == "Y"){
        		this.dxGridSub.setFormatColProperty(colTM_CONVERT,"size",0);
        		this.dxGridSub.setFormatColProperty(colAM_RW,"size",0);
        		this.dxGridSub.setFormatColProperty(colAM_OT,"size",0);
        		this.dxGridSub.setFormatColProperty(colAM_NW,"size",0);
        		this.dxGridSub.setFormatColProperty(colAM_HW,"size",0);
        		this.dxGridSub.setFormatColProperty(colAM_JUCHA,"size",0);
        		this.dxGridSub.setFormatColProperty(colAM_YEAR,"size",0);
        	}else{
        		this.dxGridSub.setFormatColProperty(colTM_CONVERT,"size",60);
        		this.dxGridSub.setFormatColProperty(colAM_RW,"size",80);
        		this.dxGridSub.setFormatColProperty(colAM_OT,"size",80);
        		this.dxGridSub.setFormatColProperty(colAM_NW,"size",80);
        		this.dxGridSub.setFormatColProperty(colAM_HW,"size",80);
        		this.dxGridSub.setFormatColProperty(colAM_JUCHA,"size",80);
        		this.dxGridSub.setFormatColProperty(colAM_YEAR,"size",80);
        	}


        };

        this.divData_ondragmove = function(obj,e)
        {
           if(e.userdata == "splitter") {
              this.divData.form.divSplitter.set_left(e.clientx);
              this.divData.form.resetScroll();
           }
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
           e.set_userdata("splitter");
           return true;
        };

        // 검색조건에 변경버튼 클릭 이벤트
        this.divSearch_btnChg_onclick = function(obj,e)
        {
        	// 데이터 수정중에 시급변경을 할수없게 처리
        	if(this.gfnGetFormStatus(this) != "Q") {
        		this.gfnAlert("저장 후에 성과수당을 변경 하시기 바랍니다.");
        		return;
        	}

        	this.dsExec.clearData();

        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExec.setColumn(0, "DT_WORK", this.dsSearch.getColumn(0, "DT_WORK"));
        	this.dsExec.setColumn(0, "NO_ID", this.dsList.getColumn(this.dsList.rowposition, "NO_ID_REAL"));
        	this.dsExec.setColumn(0, "AM_ETCPAY", this.dsListSigub.getColumn(0, "AM_ETCPAY"));
        	this.dsExec.setColumn(0, "ID_UPDATE", this.AuthClient.ID_USER);
        	//this.dsExec.setColumn(0, "TY_GUBUN", "1");

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
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
        };

        // 주휴 년차 저장
        this.fnUpdateWeekmoon = function(){
        	this.dsUpdateWeekmoon.clearData();
        	this.dsUpdateWeekmoon.addRow();

        	this.dsUpdateWeekmoon.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsUpdateWeekmoon.setColumn(0, "DT_WORK", this.dsSearch.getColumn(0, "DT_WORK").substr(0,6));
        	this.dsUpdateWeekmoon.setColumn(0, "NO_ID", this.dsList.getColumn(this.dsList.rowposition, "NO_ID_REAL"));

        	var strSvcId    = "updateWeekmoon";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "updateWeekmoon=dsUpdateWeekmoon";
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


        //월마감 진행여부 확인
        this.fnMonmagamYnCheck = function(obj, e) {
            this.gfnConfirm("월마감 & 원가투자 작업을 수행하시겠습니까?", "fnMonmagam");
        }

        //월마감 진행
        this.fnMonmagam = function(strId, val) {
            if (val == true) {
                this.dsExec1.clearData();
                this.dsExec1.addRow();

                //alert("월마감 CD_SITE"+this.ccfCD_DEPT.form.CDTextBox.value+"\nYM_WORK"+this.divSearch.form.ctclYM_WORK.form.TextBox.value+"\nID_INSERT"+this.AuthClient.ID_USER);

                this.dsExec1.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
                this.dsExec1.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "DT_WORK"));
                this.dsExec1.setColumn(0, "ID_INSERT", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));
                this.dsExec1.setColumn(0, "GUBUN", "OK");

                var strSvcId = "exec1";
                var strSvcType = "save";
                var inProc = "_dsProc";
                var inData = "exec1=dsExec1";
                var outData = "";
                var strArg = "";
                var callBackFnc = "fnCallback";

                this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
                    strSvcType, // transaction을 요청할 구분
                    inProc, // Procedure 정보 Dataset 이름
                    inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                    outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                    strArg, // 입력갑스로 보낼 arguments, strFormData="20120607"
                    callBackFnc); // 통신방법 정의 [생략가능]
            }
        }



        //월마감 취소여부 확인
        this.fnMonmagamYnCheckCancel = function(obj, e) {
            this.gfnConfirm("월마감 & 원가투자 작업을 취소하시겠습니까?", "fnMonmagamCancel");
        }

        //월마감 취소
        this.fnMonmagamCancel = function(strId, val) {


            this.dsExec2.clearData();
            this.dsExec2.addRow();

            this.dsExec2.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
            this.dsExec2.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "DT_WORK"));
            this.dsExec2.setColumn(0, "ID_INSERT", this.objApp.gdsUserInfo.getColumn(0, "ID_USER"));
            this.dsExec2.setColumn(0, "GUBUN", "CANCEL");

            if (this.dsExec2.rowcount == 0) return;

            var strSvcId = "exec2";
            var strSvcType = "save";
            var inProc = "_dsProc";
            var inData = "exec2=dsExec2";
            var outData = "";
            var strArg = "";
            var callBackFnc = "fnCallback";

            this.gfnTransaction(strSvcId, // transaction을 구분하기 위한 svc id값
                strSvcType, // transaction을 요청할 구분
                inProc, // Procedure 정보 Dataset 이름
                inData, // 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
                outData, // 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
                strArg, // 입력갑스로 보낼 arguments, strFormData="20120607"
                callBackFnc); // 통신방법 정의 [생략가능]

        }

        this.fnCostAll = function(obj, e) {
        	if(this.dsListSub.rowcount == 0) return;

        	this.divSearch.form.ccfCD_COST.form.fnPopup();
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staYM_WORK.addEventHandler("onclick",this.divSearch_staYM_WORK_onclick,this);
            this.divSearch.form.staYM_WORK00.addEventHandler("onclick",this.divSearch_staYM_WORK_onclick,this);
            this.divSearch.form.btnChg.addEventHandler("onclick",this.divSearch_btnChg_onclick,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsYN_HIDDEN.addEventHandler("onvaluechanged",this.dsYN_HIDDEN_onvaluechanged,this);
        };
        this.loadIncludeScript("DSB_PERSON.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
