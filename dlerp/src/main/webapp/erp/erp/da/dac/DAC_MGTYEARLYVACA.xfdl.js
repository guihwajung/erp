(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAC_MGTYEARLYVACA");
            this.set_titletext("근태관리(개인)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,790);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"TY_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_JOBTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OCCUPATION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAYSTEP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DUTY\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JOIN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PAYSTEP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DUTY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail1", this);
            obj._setContents("<ColumnInfo><Column id=\"QN_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"QN_YEARLYVACATION\" type=\"STRING\" size=\"256\"/><Column id=\"QN_REMAIN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DACPR_USEDVACATION_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSingle</Col><Col id=\"SP\">DAAPR_BASEINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSingle1</Col><Col id=\"SP\">DACPR_YEARLYVACATION_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DACPR_USEDVACATION_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DACPR_USEDVACATION_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DACPR_USEDVACATION_DELETE</Col></Row><Row><Col id=\"TARGET\">fileDirInfo</Col><Col id=\"SP\">DZUPR_FILEMANAGER_SELECT</Col></Row><Row><Col id=\"TARGET\">updateDayOff</Col><Col id=\"SP\">DACPR_DAYOFF_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RECORD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YR_BASE\"/><Col id=\"CD_CORP\"/><Col id=\"ID_SABUN\"/><Col id=\"ID_PERSON\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"10000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileDirInfoParam", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileDirInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_BASE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("년도");
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_BASE","staYR_BASE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REQUEST","ctclYR_BASE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회기간");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_START","staDT_REQUEST:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_ORD_TO","ctclDT_START:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_END","staDT_ORD_TO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclDT_END:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_RECORD","ccfID_SABUN:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("근태구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_RECORD","staCD_RECORD:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta100","3","divSearch:10","66%","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","sta100:0","66%","160",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgPIC","3","9","127","146",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("39");
            obj.set_stretch("fixaspectratio");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","143","9","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","staID_SABUN:-1","9","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_EMPTYPE","143","staID_SABUN:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("직원구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","staDS_EMPTYPE:-1","sta04:-1","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_DEPT","143","staDS_EMPTYPE:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("소속");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","staDS_DEPT:-1","sta05:-1","438","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_POSITION","143","staDS_DEPT:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","222","sta07:-1","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_JOIN","143","staDS_POSITION:-1","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("입사일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta11","222","sta09:-1","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtID_SABUN","staID_SABUN:5","14","170","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_EMPTYPE","staDS_EMPTYPE:5","sta04:5","170","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_DEPT","staDS_DEPT:5","sta05:5","428","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_POSITION","staDS_POSITION:5","sta07:5","170","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDT_JOIN","staDT_JOIN:5","sta09:5","170","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_HNAME","401","9","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","480","9","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_JOBTYPE","401","38","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("직종");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","480","38","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_OCCUPATION","659","67","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("직책");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","738","67","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_PAYSTEP","401","96","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("급호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","480","96","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_HNAME","486","14","170","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_JOBTYPE","486","sta00:5","170","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_OCCUPATION","744","sta01:5","170","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_PAYSTEP","486","sta02:5","170","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_RETIRE","659","9","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_text("근무구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","738","9","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_CORP","659","38","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("29");
            obj.set_text("소속법인");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta13","738","38","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DUTY","659","96","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("31");
            obj.set_text("직무");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta14","738","96","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_RETIRE","401","125","80","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("33");
            obj.set_text("퇴사일");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta16","480","125","180","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtTY_RETIRE","staTY_RETIRE:5","14","170","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("35");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDS_CORP","staDS_CORP:5","staDS_CORP:-24","170","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("36");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtCD_DUTY","staCD_DUTY:5","staCD_DUTY:-24","170","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("37");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtDT_RETIRE","staDT_RETIRE:5","131","170","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("38");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","670","132","170","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("40");
            obj.set_readonly("false");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta300","sta100:5","divSearch:10","200","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("연차종합정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divData4","divData:5","sta100:0","162","110",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staQN_TOTAL","0","9","80","30",null,null,null,null,null,null,this.divData4.form);
            obj.set_taborder("0");
            obj.set_text("총연차");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData4.addChild(obj.name, obj);

            obj = new Static("sta06","78","9","72","30",null,null,null,null,null,null,this.divData4.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData4.addChild(obj.name, obj);

            obj = new Static("staQN_YEARLYVACATION","0","38","80","30",null,null,null,null,null,null,this.divData4.form);
            obj.set_taborder("2");
            obj.set_text("사용연차");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData4.addChild(obj.name, obj);

            obj = new Static("sta08","78","38","72","30",null,null,null,null,null,null,this.divData4.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData4.addChild(obj.name, obj);

            obj = new Edit("edtQN_YEARLYVACATION","84","44","60","20",null,null,null,null,null,null,this.divData4.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.divData4.addChild(obj.name, obj);

            obj = new Static("staQN_REMAIN","0","67","80","30",null,null,null,null,null,null,this.divData4.form);
            obj.set_taborder("5");
            obj.set_text("잔여연차");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData4.addChild(obj.name, obj);

            obj = new Static("sta12","78","67","72","30",null,null,null,null,null,null,this.divData4.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData4.addChild(obj.name, obj);

            obj = new Edit("edtQN_TOTAL","84","14","60","20",null,null,null,null,null,null,this.divData4.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.divData4.addChild(obj.name, obj);

            obj = new Edit("edtQN_REMAIN","84","73","60","20",null,null,null,null,null,null,this.divData4.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.divData4.addChild(obj.name, obj);

            obj = new Static("sta200","3","divData:10","1200","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("휴가사용내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divData3","0","divData:20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","20",null,null,"0","0",null,null,null,null,this.divData3.form);
            obj.set_taborder("2");
            obj._setContents("");
            this.divData3.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.edtID_SABUN","value","dsDetail","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtDS_HNAME","value","dsDetail","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.edtTY_RETIRE","value","dsDetail","DS_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.edtDS_EMPTYPE","value","dsDetail","DS_EMPTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.edtDS_JOBTYPE","value","dsDetail","DS_JOBTYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.edtDS_CORP","value","dsDetail","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.edtDS_DEPT","value","dsDetail","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.edtDS_OCCUPATION","value","dsDetail","DS_OCCUPATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.edtDS_POSITION","value","dsDetail","DS_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.edtCD_PAYSTEP","value","dsDetail","DS_PAYSTEP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.edtCD_DUTY","value","dsDetail","DS_DUTY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.edtDT_JOIN","value","dsDetail","DT_JOIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divData.form.edtDT_RETIRE","value","dsDetail","DT_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divData4.form.edtQN_TOTAL","value","dsDetail1","QN_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","divData4.form.edtQN_YEARLYVACATION","value","dsDetail1","QN_YEARLYVACATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","divData4.form.edtQN_REMAIN","value","dsDetail1","QN_REMAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item100","divSearch.form.ctclYR_BASE.form.TextBox","value","dsSearch","YR_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item101","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item102","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divData.form.edtID_PERSON","value","dsSearch","ID_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSearch.form.ctclDT_START","value","dsSearch","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearch.form.ctclDT_END","value","dsSearch","DT_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearch.form.ccfCD_RECORD.form.CDTextBox","value","dsSearch","CD_RECORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearch.form.ccfCD_RECORD.form.DSTextBox","value","dsSearch","DS_RECORD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAC_MGTYEARLYVACA.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        //this.filepath = "/DA/BASEINFO/";
        this.filepath = "";
        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();


        	var nowYear = this.gfnGetDate().substring(0,4);
        	this.divSearch.form.ctclYR_BASE.form.TextBox.set_value(nowYear);

        	//법인 셋팅
        	if(this.FormInfo.GR_SEARCH == 9){
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfID_SABUN.form.CDTextBox.set_value(this.AuthClient.ID_USER);
        		this.ccfID_SABUN.form.DSTextBox.set_value(this.AuthClient.DS_HNAME);
        		this.edtID_PERSON.set_value(this.AuthClient.ID_PERSON);
        		this.ccfCD_CORP.set_enable(false);
        		this.ccfID_SABUN.set_enable(false);
        		this.FormBtns.Select.click();
        	}else{
        		//법인 코드파인드 초기값 셋팅
        		this.ccfCD_CORP.form.CDTextBox.set_value("");
        		this.ccfCD_CORP.form.DSTextBox.set_value("");
        		this.ccfCD_CORP.set_enable(true);
        	}

        	//연차관리 팝업으로 진입
        	if (!this.gfnIsNull(this.getOwnerFrame().cdcorp) && !this.gfnIsNull(this.getOwnerFrame().dscorp)
        		&& !this.gfnIsNull(this.getOwnerFrame().idPerson) && !this.gfnIsNull(this.getOwnerFrame().sabun)
        		&& !this.gfnIsNull(this.getOwnerFrame().hname) && !this.gfnIsNull(this.getOwnerFrame().textCal)) {

        		this.ctclYR_BASE.form.TextBox.set_value(this.getOwnerFrame().textCal);

        		this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().cdcorp);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().dscorp);
        		this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().cdcorp);

        		this.ccfID_SABUN.form.CDTextBox.set_value(this.getOwnerFrame().sabun);
        		this.ccfID_SABUN.form.DSTextBox.set_value(this.getOwnerFrame().hname);

        		this.edtID_PERSON.set_value(this.getOwnerFrame().idPerson);

        		this.FormBtns.Select.click();
        	}

        	this.filepath = this.fnGetfilepath("DA00");

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************fnImageView************************************/
        this.fnSetButton = function() {

        	if(this.gfnGetFormStatus(this) == ""){
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        		this.FormBtns.Save.set_enable(false);
        	}else{
        		switch(this.FormInfo.TY_AUTH){

        			case "F":
        				this.FormBtns.Add.set_enable(true);
        				this.FormBtns.Del.set_enable(true);
        				this.FormBtns.Save.set_enable(true);
        				break;

        			case "U":
        				this.FormBtns.Add.set_enable(false);
        				this.FormBtns.Del.set_enable(false);
        				this.FormBtns.Save.set_enable(true);
        				break;

        			case "R":
        				this.FormBtns.Add.set_enable(false);
        				this.FormBtns.Del.set_enable(false);
        				this.FormBtns.Save.set_enable(false);
        				break;

        			default:
        				this.FormBtns.Reset.set_enable(true);

        		}
        	}
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYR_BASE = this.divSearch.form.ctclYR_BASE;
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.ctclDT_START = this.divSearch.form.ctclDT_START;
        	this.ctclDT_END = this.divSearch.form.ctclDT_END;
        	this.ccfCD_RECORD = this.divSearch.form.ccfCD_RECORD;

        	this.edtID_PERSON = this.divData.form.edtID_PERSON;
        	this.edtID_SABUN = this.divData.form.edtID_SABUN;

        	this.dxGrid = this.divData3.form.objGrid;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAC_MGTYEARLYVACA");

        	//this.dxGrid.set_selecttype("cell");
        	//this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO_ALL";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	this.ccfCD_RECORD.CodeFindName = "DAX_WORK_TYPE";
        	this.ccfCD_RECORD.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";


        	var grSearch = this.FormInfo.GR_SEARCH;	// 권한
        	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "DT_END"), "edittype", "expr:" + grSearch + " == '1' ?'date':'none'");
        	//this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "DT_END"), "expandshow", "expr:" + grSearch + " == '1' ?'show':'hide'");

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ID_PERSON", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("YR_BASE", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_START", "string");
        	this.dsSelect.addColumn("DT_END", "string");
        	this.dsSelect.addColumn("CD_RECORD", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");

        	this.dsSelect1 = new Dataset();
        	this.dsSelect1.addColumn("ID_PERSON", "string");
        	this.dsSelect1.addColumn("CD_CORP", "string");
        	this.dsSelect1.addColumn("ID_SABUN", "string");
        	this.dsSelect1.addColumn("ID_USER", "string");
        	this.dsSelect1.addColumn("IP_ADDR", "string");
        	//this.dsSelect1.addColumn("GR_SEARCH", "string");

        	this.dsSelect2 = new Dataset();
        	this.dsSelect2.addColumn("ID_PERSON", "string");
        	this.dsSelect2.addColumn("ID_SABUN", "string");
        	this.dsSelect2.addColumn("YR_BASE", "string");
        	this.dsSelect2.addColumn("CD_CORP", "string");
        	//this.dsSelect2.addColumn("GR_SEARCH", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("DT_START", "string");
        	this.dsInsert.addColumn("DT_END", "string");
        	this.dsInsert.addColumn("CD_RECORD", "string");
        	this.dsInsert.addColumn("QN_RECORD", "bigdecimal");
        	this.dsInsert.addColumn("TY_AMPM", "string");
        	this.dsInsert.addColumn("DS_DAEJIK", "string");
        	this.dsInsert.addColumn("NO_TEL", "string");
        	this.dsInsert.addColumn("DS_VACA", "string");
        	this.dsInsert.addColumn("DS_REMARK", "string");
        	this.dsInsert.addColumn("DT_WORKDAY", "string");
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("ID_PERSON", "string");
        	this.dsInsert.addColumn("ID_SABUN", "string");
        	this.dsInsert.addColumn("GR_SEARCH", "string");
        	this.dsInsert.addColumn("ID_USER", "string");


        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("DT_START", "string");
        	this.dsUpdate.addColumn("DT_END", "string");
        	this.dsUpdate.addColumn("CD_RECORD", "string");
        	this.dsUpdate.addColumn("NO_SEQ", "string");
        	this.dsUpdate.addColumn("QN_RECORD", "bigdecimal");
        	this.dsUpdate.addColumn("TY_AMPM", "string");
        	this.dsUpdate.addColumn("DS_DAEJIK", "string");
        	this.dsUpdate.addColumn("NO_TEL", "string");
        	this.dsUpdate.addColumn("DS_VACA", "string");
        	this.dsUpdate.addColumn("DS_REMARK", "string");
        	this.dsUpdate.addColumn("DT_WORKDAY", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("ID_PERSON", "string");
        	this.dsUpdate.addColumn("ID_SABUN", "string");
        	this.dsUpdate.addColumn("GR_SEARCH", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("ID_PERSON", "string");
        	this.dsDelete.addColumn("NO_SEQ", "bigdecimal");
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("ID_SABUN", "string");
        	this.dsDelete.addColumn("YR_VACATION", "string");
        	this.dsDelete.addColumn("CD_RECORD", "string");
        	this.dsDelete.addColumn("GR_SEARCH", "string");

        	this.dsUpdateDayOff = new Dataset();
        	this.dsUpdateDayOff.addColumn("ID_PERSON", "string");
        	this.dsUpdateDayOff.addColumn("ID_SABUN", "string");
        	this.dsUpdateDayOff.addColumn("NO_SEQ", "string");
        	this.dsUpdateDayOff.addColumn("CD_RECORD", "string");
        	this.dsUpdateDayOff.addColumn("DT_START", "string");
        	this.dsUpdateDayOff.addColumn("DT_END", "string");
        	this.dsUpdateDayOff.addColumn("DS_REMARK", "string");
        	this.dsUpdateDayOff.addColumn("ID_LOGIN", "string");
        	this.dsUpdateDayOff.addColumn("GR_SEARCH", "string");

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function(val) {
        	if(val === undefined) {
        		if(!this.fnValidate()) return;
        	}

        	this.gfnGridBeforeSelect(this.dxGrid);
        	//this.gfnSetFormStatus(this);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "ID_PERSON", this.edtID_PERSON.value);
        	this.dsSelect.setColumn(0, "ID_SABUN", this.gfnTrim(this.ccfID_SABUN.form.CDTextBox.value));
        	this.dsSelect.setColumn(0, "YR_BASE", this.ctclYR_BASE.form.TextBox.value);
        	this.dsSelect.setColumn(0, "CD_CORP", this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value));
        	this.dsSelect.setColumn(0,"DT_START", this.dsSearch.getColumn(0, "DT_START"));
        	this.dsSelect.setColumn(0,"DT_END", this.dsSearch.getColumn(0, "DT_END"));
        	this.dsSelect.setColumn(0,"CD_RECORD", this.dsSearch.getColumn(0, "CD_RECORD"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);

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

        this.fnSelectDetail = function() {
        	this.dsSelect1.clearData();
        	this.dsSelect1.addRow();

        	this.dsSelect1.setColumn(0, "ID_PERSON", this.edtID_PERSON.value);
        	this.dsSelect1.setColumn(0, "CD_CORP", this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value));
        	this.dsSelect1.setColumn(0, "ID_SABUN", this.gfnTrim(this.ccfID_SABUN.form.CDTextBox.value));
        	//this.dsSelect1.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect1.setColumn(0, "ID_USER", this.AuthClient.ID_USER); // 20200413 추가
        	this.dsSelect1.setColumn(0, "IP_ADDR", this.AuthClient.NO_IP); // 20200413 추가

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
         	var inData      = "selectSingle=dsSelect1";
         	var outData     = "dsDetail=selectSingle0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능
        }

        this.fnSelectDetail1 = function() {
        	this.dsSelect2.clearData();
        	this.dsSelect2.addRow();

        	this.dsSelect2.setColumn(0, "ID_PERSON", this.edtID_PERSON.value);
        	this.dsSelect2.setColumn(0, "ID_SABUN", this.gfnTrim(this.ccfID_SABUN.form.CDTextBox.value));
        	this.dsSelect2.setColumn(0, "YR_BASE", this.ctclYR_BASE.form.TextBox.value);
        	this.dsSelect2.setColumn(0, "CD_CORP", this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value));
        	//this.dsSelect2.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);

        	var strSvcId    = "detail1";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
         	var inData      = "selectSingle1=dsSelect2";
         	var outData     = "dsDetail1=selectSingle10";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid, "top");
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

        	if (!this.fnSaveValidation()) return;
        	//if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	this.dsUpdateDayOff.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsertMake(nrow, i);
        				break;

        			case "U":
        				// 근태코드 08:휴무계획 09:휴무변경
        				if(this.dsList.getColumn(i, "CD_RECORD") == "08" || this.dsList.getColumn(i, "CD_RECORD") == "09"){
        					var nrow = this.dsUpdateDayOff.addRow();
        					this.dsUpdateDayOffMake(nrow, i);

        				}else{
        					var nrow = this.dsUpdate.addRow();
        					this.dsUpdateMake(nrow, i);
        				}

        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDeleteMake(nrow, i);
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 &&
        		this.dsDelete.rowcount == 0 && this.dsUpdateDayOff.rowcount == 0){
        		return;
        	}

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete updateDayOff=dsUpdateDayOff";
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

        /*
         *	초기화 버튼
         */
        this.fnReset = function() {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	var nowYear = this.gfnGetDate().substring(0,4);
        	this.divSearch.form.ctclYR_BASE.form.TextBox.set_value(nowYear);

         	this.ccfID_SABUN.form.CDTextBox.set_value("");
        	this.ccfID_SABUN.form.DSTextBox.set_value("");
         	this.ccfCD_CORP.form.CDTextBox.set_value("");
        	this.ccfCD_CORP.form.DSTextBox.set_value("");
         	this.edtID_PERSON.set_value("");

        	if(this.FormInfo.GR_SEARCH == 9){
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfID_SABUN.form.CDTextBox.set_value(this.AuthClient.ID_USER);
        		this.ccfID_SABUN.form.DSTextBox.set_value(this.AuthClient.DS_HNAME);
        		this.edtID_PERSON.set_value(this.AuthClient.ID_PERSON);
        		this.ccfCD_CORP.set_enable(false);
        		this.ccfID_SABUN.set_enable(false);
        	}
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {
        	if(this.gfnIsNull(this.ctclYR_BASE.form.TextBox.value)) {
        		this.ctclYR_BASE.form.TextBox.setFocus();
        		this.gfnAlert("년도를 입력해주세요");
        		return false;
        	}

        // 	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 		this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 		this.gfnAlert("법인을 선택해주세요.");
        // 		return false;
        // 	}

        	if (this.gfnIsNull(this.ccfID_SABUN.form.CDTextBox.value)) {
        		this.ccfID_SABUN.form.CDTextBox.setFocus();
        		this.gfnAlert("성명을 입력하세요.");
        		return false;
        	}

        	var DT_START = this.dsSearch.getColumn(0, "DT_START");
        	var DT_END = this.dsSearch.getColumn(0, "DT_END");
        	if(!this.gfnIsNull(DT_START) && !this.gfnIsNull(DT_END)){
        		if (DT_START > DT_END) {
        			this.fnVaidateCallback = function() {
        				this.ctclDT_START.setFocus();
        			}
        			this.gfnAlert("조회기간 시작일이 종료일보다 클 수 없습니다.", "fnVaidateCallback");
        			return false;
        		}
        	}

        	return true;
        };

        /*
         *	저장 Validate
         */
        this.fnSaveValidation = function() {
        	var objDs = this.dsList;
        	var objGrid = this.dxGrid;

        	var msg = "";
        	for (var i = 0; i < objDs.rowcount; i++) {
        		var flag = this.gfnGetFlag(objDs, i);
        		switch(flag) {
        			case "I":
        			case "U":
        				var arrRequired = objGrid.usRequired;
        				for(var j = 0; j < arrRequired.length; j++) {
        					var spl_req = arrRequired[j].split(';');
        					var colnm = spl_req[0];
        					var header = spl_req[1];
        					if (this.gfnIsNull(objDs.getColumn(i, colnm))) {
        						msg += (i + 1) + "열: [" + header + "] 필수입력값입니다.\n";
        					}
        				}

        				var CD_RECORD = this.dsList.getColumn(i, "CD_RECORD");		// 근태코드
        				var DT_WORKDAY = this.dsList.getColumn(i, "DT_WORKDAY");	// 휴일근무일
        				var DT_START = this.dsList.getColumn(i, "DT_START");		// 시작일
        				var DT_END = this.dsList.getColumn(i, "DT_END");			// 종료일

        				var toDay = this.gfnGetDate();
        				// 과거 날짜로 수정불가 (관리자 가능 )
        				if(this.FormInfo.GR_SEARCH != 1){
        					if(toDay >= DT_START){
        						this.gfnAlert("시작일은 오늘이전 일자로 입력할 수 없습니다.");
        						return false;
        					}
        				}

        				if(CD_RECORD == "13" || CD_RECORD == "17" ){	// 13:대체근무, 17:대체휴무변경
        					if (this.gfnIsNull(DT_WORKDAY)) {
        						msg += (i + 1) + "열 [근태코드] 대체휴무일 경우에는 [휴일근무일] 필수입력값입니다. \n";
        					}

        					if(!this.gfnIsNull(DT_START) && !this.gfnIsNull(CD_RECORD) && !this.gfnIsNull(DT_WORKDAY)){
        						// 휴일근무일 기준 한달 이내로만 변경가능
        						var DT_RECEIPT_MONTH = this.gfnAddMonth(DT_WORKDAY,1);

        						// 시작일 > 휴일근무일
        						if (DT_START < DT_WORKDAY){
        							msg += (i + 1) + "열 [시작일]은 [휴일근무일] 이후로 입력하셔야합니다. \n";
        						}

        						// /  시작일 < 휴일근무일+1달
        						if(DT_START > DT_RECEIPT_MONTH ){
        							msg += (i + 1) + "열 [시작일]은 [휴일근무일] 기준 한달 이내로만 변경가능합니다. \n";
        						}
        					}
        				}

        				if(CD_RECORD == "08" || CD_RECORD == "09" ){	// 근태코드 08:휴무계획 09:휴무변경
        // 					if (toDay.substring(5,7) < 20){
        // 						if( DT_END.substring(0,6) != toDay.substring(0,6)){
        // 							this.gfnAlert("당월만 수정 가능합니다.");
        // 							return false;
        // 						}
        // 					}

        					if (toDay.substring(5,7) >= 20){
        // 						if( DT_END.substring(5,7) >= (this.gfnAddMonth(toDay,1).substring(5,7))){
        // 							this.gfnAlert("다음달 까지만 수정 가능합니다.");
        // 							return false;
        // 						}
        						if(DT_END.substring(0,6) > (this.gfnAddMonth(toDay,1).substring(0,6))){
         							this.gfnAlert("다음달 까지만 수정 가능합니다.");
         							return false;
        						}
        					}
        				}


        			break;
        		}


        	}// for


        	if(this.gfnIsNull(msg)) {
        		return true;
        	}
        	else {
        		var arrError = [msg];
        		this.gfnAlert("msg.err.validator", arrError);
        		return false;
        	}


        	return true;
        }

        this.fnImageView = function() {
        	if (this.gfnIsNull(this.dsDetail.getColumn(0, "PIC"))) { return false; }

        	this.dsImageFile.clearData();
        	this.dsImageFile.addRow();

        	var key = this.dsDetail.getColumn(0, "ID_PERSON");

        	//this.dsImageFile.setColumn(0, "filepath", this.filepath + key);
        	this.dsImageFile.setColumn(0, "filepath", this.filepath);
        	this.dsImageFile.setColumn(0, "filename", this.dsDetail.getColumn(0, "PIC"));

        	/*alert(this.filepath + key);*/
        	// 서버 이미지파일 base64 로 받아오기
        	var strSvcId    = "PIC";
        	var strSvcType  = "file/imageFile";
        	var inProc		= "";
        	var inData      = "input=dsImageFile";
        	var outData     = "dsImageFile=input";
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

        // 사진 DIR 정보
        this.fnGetfilepath = function(dirCd) {

        	this.dsFileDirInfoParam.clearData();
        	this.dsFileDirInfoParam.addRow();

        	this.dsFileDirInfoParam.setColumn(0, "CD_GUBUN", dirCd);

        	var strSvcId    = "fileDirInfo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "fileDirInfo=dsFileDirInfoParam";
        	var outData     = "dsFileDirInfo=fileDirInfo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,
        						false); 		// 통신방법 정의 [생략가능]

        	return this.dsFileDirInfo.getColumn(0, "DS_PATH");
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	this.FormBtns.Reset.set_enable(true);

        	if (svcID == "select") {

        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnSelectDetail();

        		this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","DT_HOLIDAY_REPLACE"),"edittype","none");

        	} else if (svcID == "save") {
        		if (errorCode == 0) {
        			this.gfnAlert("작업이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        	} else if (svcID == "detail") {

        		this.fnSelectDetail1();

        	} else if (svcID == "detail1") {
        		this.fnImageView();

        	} else if (svcID == "PIC") {
        		//trace(this.dsImageFile.getColumn(0, "filereturn"));
        		this.divData.form.imgPIC.set_image(this.dsImageFile.getColumn(0, "filereturn"));
        	}
        	this.fnSetButton();
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.codefind_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if (id == "ccfCD_CORP") {
        		this.ccfID_SABUN.form.CDTextBox.set_value("");
        		this.ccfID_SABUN.form.DSTextBox.set_value("");
        		this.edtID_PERSON.set_value("");
        	} else if(id == "ccfID_SABUN") {
        		this.ccfCD_CORP.form.CDTextBox.set_value(codeFindData[0]["CD_CORP"]);
        		this.ccfCD_CORP.form.DSTextBox.set_value(codeFindData[0]["DS_CORP"]);
        		this.edtID_PERSON.set_value(codeFindData[0]["ID_PERSON"]);
        		//this.FormBtns.Select.click();
        	}
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	if(id == "ccfID_SABUN"){
        		dsUserParam.setColumn(nrow, "CD_CORP", "%");
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        		dsUserParam.setColumn(nrow, "YN_CORP", "");		// 조회조건의 법인을 조건으로 사용하기위해서 ( 법인에 속한 사번 조회 )
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        	}
        	trace("fnBeforeUserDataSetParam->" + id);
        	if(id == "ccfCD_RECORD"){
        		//dsUserParam.setColumn(nrow, "CD_PREFIX", 'GT');
        		dsUserParam.setColumn(nrow, "TY_GUBUN", 'UPCODE');
        		dsUserParam.setColumn(nrow, "CD_PREFIX", 'GT');
        		dsUserParam.setColumn(nrow, "CD_UPPREFIX", '01');
        	}

        	return true;
        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e) {

           if ((obj.oldrow > -1 && obj.oldrow == e.row) || (obj.oldrow == -1 && e.oldrow != e.row)) {

        		if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        		var objGrid = this.dxGrid;
        		var objDs = objGrid.getBindDataset();
        		var rowFlag = objDs.getColumn(this.dsList.rowposition, this.ucFlag);
        		var flag = this.gfnGetFormStatus(this);
        		var UCST_APPROVAL = this.dsList.getColumn(this.dsList.rowposition, "UCST_APPROVAL");
        		var YN_LINKED = this.dsList.getColumn(this.dsList.rowposition, "YN_LINKED");

        		if (YN_LINKED == "Y")
        		{
        			this.FormBtns.Add.set_enable(false);
        			this.FormBtns.Del.set_enable(false);
        			this.FormBtns.Save.set_enable(false);
        		} else {
        			this.FormBtns.Add.set_enable(true);
        			this.FormBtns.Del.set_enable(true);
        			this.FormBtns.Save.set_enable(true);
        		}
        		obj.oldrow = -1;
        	}
        };

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	if(id == "DAX_WORK_TYPE") {
        		dsUserParam.setColumn(nrow, "TY_GUBUN ", "UPCODE");
         		dsUserParam.setColumn(nrow, "CD_PREFIX", "GT");
        		dsUserParam.setColumn(nrow, "CD_UPCODE", "01");
         	}
        	return true;
        };

        this.fnGrid_EnterCell = function(obj, row, cell) {

        	//trace("fnGrid_EnterCell colnm->" + colnm);

        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	var flag = this.gfnGetFlag(this.dsList, row);

        	/*
        	var UCST_APPROVAL = this.dsList.getColumn(this.dsList.rowposition, "UCST_APPROVAL"); //결재상태 (TY_STATUS)
        	var YN_LINKED = this.dsList.getColumn(this.dsList.rowposition, "YN_LINKED"); //YN_LINK(Y:그룹웨어 연동,N:ERP입력) -- TY_GROUPWARE 컬럼변경됨
        	if (YN_LINKED == "Y"){
        		return false;
        	}
        	*/

        	var TY_GROUPWARE = this.dsList.getColumn(this.dsList.rowposition, "TY_GROUPWARE"); // 그룹웨어여부 G:GROUPWARE /E: ERP
        	var YN_EDIT = this.dsList.getColumn(this.dsList.rowposition, "YN_EDIT"); // 수정가능여부

        	if(YN_EDIT == "N") return false;	// 수정불가

        	// 공통 > Setting > 그리드정보 에서 셋팅한 내용대로
        	var nGrdSpcRow = this.dsGridSpec.findRow( "DS_FIELD", colnm);
        	var YN_READONLY = this.dsGridSpec.getColumn(nGrdSpcRow, "YN_READONLY");
        	if(YN_READONLY == "Y") return false;
        	if(YN_READONLY =="U" && (this.gfnIsNull(flag) || flag == "U")){	// flag 가 U 이거나 빈값
        		return false;
        	}

        	return true;

        	/*
        	else if(colnm == "DS_VACATION" || colnm == "DS_APPROVAL"){ //휴가명, 결재상태 수정불가능
        		return false;
        	} else {
        		return true;
        	}
        	*/
        };


        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

        	var arrData = codeFindData;
        	var nRow = this.dsList.rowposition;
        	if(id == "DAX_WORK_TYPE"){
        		if (arrData.length > 0) {
        			//var CD_RECORD = this.dsList.getColumn(nRow, "CD_RECORD");		// 근태코드

        			var CD_RECORD =  arrData[0]["CD_CODE"];
        			var DT_WORKDAY = this.dsList.getColumn(nRow, "DT_WORKDAY");	// 휴일근무일
        			var DT_START = this.dsList.getColumn(nRow, "DT_START");		// 시작일
        			var DT_END = this.dsList.getColumn(nRow, "DT_END");			// 종료일
        			if(!this.gfnIsNull(DT_START) && !this.gfnIsNull(DT_WORKDAY)){
        				if(CD_RECORD == "13" || CD_RECORD == "17" ){	// 13:대체근무, 17:대체휴무변경
        					// 휴일근무일 기준 한달 이내로만 변경가능
        					// 시작일 > 휴일근무일 /  시작일 < 휴일근무일+1달
        					var DT_RECEIPT_MONTH = this.gfnAddMonth(DT_WORKDAY,1);
        					if(DT_START < DT_WORKDAY || DT_START > DT_RECEIPT_MONTH ){
        						this.gfnAlert("시작일은 휴일근무일 기준 한달 이내로만 변경가능합니다.");
        						//return false;
        					}
        				}
        			}

        			if(!this.gfnIsNull(DT_END)){
        				if(CD_RECORD == "08" || CD_RECORD == "09" ){	// 근태코드 08:휴무계획 09:휴무변경
        					var toDay = this.gfnGetDate();
        					//과거일자 수정 불가, 당월 이내로만 변경가능
        					if(DT_END < toDay){
        						this.gfnAlert("과거일자는 수정 불가합니다.");
        						return false;
        					}

        // 					if (toDay.substring(5,7) < 20){
        // 						if( DT_END.substring(0,6) != toDay.substring(0,6)){
        // 							this.gfnAlert("당월만 수정 가능합니다.");
        // 							return false;
        // 						}
        // 					}

        					if (toDay.substring(5,7) >= 20){
        // 						if( DT_END.substring(5,7) >= (this.gfnAddMonth(toDay,1).substring(5,7))){
        // 							this.gfnAlert("다음달 까지만 수정 가능합니다.");
        // 							return false;
        // 						}
        						if(DT_END.substring(0,6) > (this.gfnAddMonth(toDay,1).substring(0,6))){
         							this.gfnAlert("다음달 까지만 수정 가능합니다.");
         							return false;
        						}
        					}
        				}
        			}// DT_END
        		}
        	}

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e.pretext != e.posttext) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.fnSetButton();
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.fnSetButton();
        		this.dsDetail.clearData();
        		this.dsDetail1.clearData();
        		//this.dsDetail.addRow();

        		this.divData.form.imgPIC.set_image(null);

        		if (e.columnid == "ID_SABUN") {
        			if(e.newvalue == ""){
        				this.dsList.clearData();
        				this.dsDetail.clearData();
        				this.dsDetail1.clearData()
        				this.dsImageFile.clearData();
        				this.edtID_PERSON.set_value("");
        			}
        		}
        	}
        };

        this.dsInsertMake = function(nrow, i) {

        	this.dsInsert.setColumn(nrow, "DT_START", this.dsList.getColumn(i, "DT_START"));
        	this.dsInsert.setColumn(nrow, "DT_END", this.dsList.getColumn(i, "DT_END"));
        	this.dsInsert.setColumn(nrow, "CD_RECORD", this.dsList.getColumn(i, "CD_RECORD"));
        	this.dsInsert.setColumn(nrow, "QN_RECORD", this.dsList.getColumn(i, "QN_RECORD"));
        	this.dsInsert.setColumn(nrow, "TY_AMPM", this.dsList.getColumn(i, "TY_AMPM"));
        	this.dsInsert.setColumn(nrow, "DS_DAEJIK", this.dsList.getColumn(i, "DS_DAEJIK"));
        	this.dsInsert.setColumn(nrow, "NO_TEL", this.dsList.getColumn(i, "NO_TEL"));
        	this.dsInsert.setColumn(nrow, "DS_VACA", this.dsList.getColumn(i, "DS_VACA"));
        	this.dsInsert.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        	this.dsInsert.setColumn(nrow, "DT_WORKDAY", this.dsList.getColumn(i, "DT_WORKDAY"));
        	this.dsInsert.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsInsert.setColumn(nrow, "ID_PERSON", this.edtID_PERSON.value);
        	this.dsInsert.setColumn(nrow, "ID_SABUN", this.ccfID_SABUN.form.CDTextBox.value);
        	this.dsInsert.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        };

        this.dsUpdateMake = function(nrow, i) {

        	this.dsUpdate.setColumn(nrow, "DT_START", this.dsList.getColumn(i, "DT_START"));
        	this.dsUpdate.setColumn(nrow, "DT_END", this.dsList.getColumn(i, "DT_END"));
        	this.dsUpdate.setColumn(nrow, "CD_RECORD", this.dsList.getColumn(i, "CD_RECORD"));
        	this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        	this.dsUpdate.setColumn(nrow, "QN_RECORD", this.dsList.getColumn(i, "QN_RECORD"));
        	this.dsUpdate.setColumn(nrow, "TY_AMPM", this.dsList.getColumn(i, "TY_AMPM"));
        	this.dsUpdate.setColumn(nrow, "DS_DAEJIK", this.dsList.getColumn(i, "DS_DAEJIK"));
        	this.dsUpdate.setColumn(nrow, "NO_TEL", this.dsList.getColumn(i, "NO_TEL"));
        	this.dsUpdate.setColumn(nrow, "DS_VACA", this.dsList.getColumn(i, "DS_VACA"));
        	this.dsUpdate.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        	this.dsUpdate.setColumn(nrow, "DT_WORKDAY", this.dsList.getColumn(i, "DT_WORKDAY"));
        	this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        	this.dsUpdate.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        	this.dsUpdate.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        	this.dsUpdate.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        };

        this.dsDeleteMake = function(nrow, i) {

        	this.dsDelete.setColumn(nrow, "ID_PERSON", this.edtID_PERSON.value);
        	this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        	this.dsDelete.setColumn(nrow, "CD_CORP", this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value));
        	this.dsDelete.setColumn(nrow, "ID_SABUN", this.edtID_SABUN.value);
        	this.dsDelete.setColumn(nrow, "YR_VACATION", this.ctclYR_BASE.form.TextBox.value);
        	this.dsDelete.setColumn(nrow, "CD_RECORD", this.dsList.getColumn(i, "CD_RECORD"));
        	this.dsDelete.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        }

        this.dsUpdateDayOffMake = function(nrow, i) {
        	this.dsUpdateDayOff.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        	this.dsUpdateDayOff.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        	this.dsUpdateDayOff.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        	this.dsUpdateDayOff.setColumn(nrow, "CD_RECORD", "09");
        	this.dsUpdateDayOff.setColumn(nrow, "DT_START", this.dsList.getColumn(i, "DT_START"));
        	this.dsUpdateDayOff.setColumn(nrow, "DT_END", this.dsList.getColumn(i, "DT_END"));
        	this.dsUpdateDayOff.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        	this.dsUpdateDayOff.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsUpdateDayOff.setColumn(nrow, "ID_LOGIN", this.AuthClient.ID_USER);
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	var nowDay = this.gfnGetDate().substring(0,8);
        	var CD_RECORD = this.dsList.getColumn(e.row, "CD_RECORD");		// 근태코드
        	var DT_WORKDAY = this.dsList.getColumn(e.row, "DT_WORKDAY");	// 휴일근무일
        	var DT_START = this.dsList.getColumn(e.row, "DT_START");		// 시작일
        	var DT_END = this.dsList.getColumn(e.row, "DT_END");			// 종료일

        	switch(e.columnid) {
        		case "DT_START":
        		case "CD_RECORD":
        		case "DT_WORKDAY":
        			if(!this.gfnIsNull(DT_START) && !this.gfnIsNull(CD_RECORD) && !this.gfnIsNull(DT_WORKDAY)){
        				if(CD_RECORD == "13" || CD_RECORD == "17" ){	// 13:대체근무, 17:대체휴무변경
        					// 휴일근무일 기준 한달 이내로만 변경가능
        					// 시작일 > 휴일근무일 /  시작일 < 휴일근무일+1달
        					var DT_RECEIPT_MONTH = this.gfnAddMonth(DT_WORKDAY,1);
        					if(DT_START < DT_WORKDAY || DT_START > DT_RECEIPT_MONTH ){
        						this.gfnAlert("시작일은 휴일근무일 기준 한달 이내로만 변경가능합니다.");
        						return false;
        					}
        				}
        			}
        		break;
        	}

        	switch(e.columnid) {
        		case "DT_START":
        			/*
        			var dtVacaTo = this.dsList.getColumn(e.row, "DT_END")==null?"99991231":this.dsList.getColumn(e.row, "DT_END");
        			if(dtVacaTo < e.newvalue){
        				this.gfnAlert("시작일이 종료일보다 클 수 없습니다.");
        				this.dsList.setColumn(e.row, "DT_START", e.oldvalue);
        				return false;
        			}
        			*/
        			this.dsList.setColumn(this.dsList.rowposition, "DT_END", e.newvalue);

        		break;
        		case "DT_END":

        			if(CD_RECORD == "08" || CD_RECORD == "09" ){	// 근태코드 08:휴무계획 09:휴무변경

        				//과거일자 수정 불가, 당월 이내로만 변경가능
        				var toDay = this.gfnGetDate();
        				if(e.newvalue < toDay){
        					this.gfnAlert("과거일자는 수정 불가합니다.");
        					//this.dsList.setColumn(this.dsList.rowposition, "DT_END", e.oldvalue);
        					return false;
        				}

        // 				if (toDay.substring(5,7) < 20){
        // 					if( e.newvalue.substring(0,6) != toDay.substring(0,6)){
        // 						this.gfnAlert("당월만 수정 가능합니다.");
        // 						return false;
        // 					}
        // 				}

        				if (toDay.substring(5,7) >= 20){
        // 					if( e.newvalue.substring(5,7) >= (this.gfnAddMonth(toDay,1).substring(5,7))){
        // 						this.gfnAlert("다음달 까지만 수정 가능합니다.");
        // 						return false;
        // 					}
        					if(DT_END.substring(0,6) > (this.gfnAddMonth(toDay,1).substring(0,6))){
        						this.gfnAlert("다음달 까지만 수정 가능합니다.");
        						//this.dsList.setColumn(this.dsList.rowposition, "DT_END", e.oldvalue);
        						return false;
        					}
        				}
        			}

        		break;
        	}
        	this.fnSetButton();
        };

        this.dsList_cancolumnchange = function(obj,e)
        {
        	// 이벤트에서 리턴값으로 "false" 를 반환하면 Column 값이 변경되지 않고, oncolumnchanged 이벤트가 발생하지 않습니다.
        	var nowDay = this.gfnGetDate().substring(0,8);
        	var CD_RECORD = this.dsList.getColumn(e.row, "CD_RECORD");		// 근태코드
        	var DT_WORKDAY = this.dsList.getColumn(e.row, "DT_WORKDAY");	// 휴일근무일
        	var DT_START = this.dsList.getColumn(e.row, "DT_START");		// 시작일
        	var DT_END = this.dsList.getColumn(e.row, "DT_END");			// 종료일


        	switch(e.columnid) {
        		case "DT_START":
        		case "CD_RECORD":
        		case "DT_WORKDAY":
        			if(!this.gfnIsNull(DT_START) && !this.gfnIsNull(CD_RECORD) && !this.gfnIsNull(DT_WORKDAY)){
        				if(CD_RECORD == "13" || CD_RECORD == "17" ){	// 13:대체근무, 17:대체휴무변경
        					// 휴일근무일 기준 한달 이내로만 변경가능
        					// 시작일 > 휴일근무일 /  시작일 < 휴일근무일+1달
        					var DT_RECEIPT_MONTH = this.gfnAddMonth(DT_WORKDAY,1);
        					if(DT_START < DT_WORKDAY || DT_START > DT_RECEIPT_MONTH ){
        						this.gfnAlert("시작일은 휴일근무일 기준 한달 이내로만 변경가능합니다.");
        						return false;
        					}
        				}
        			}
        		break;
        	}

        	switch(e.columnid) {
        		case "DT_START":

        			// 과거 날짜로 수정불가 (관리자 가능 )
        			if(this.FormInfo.GR_SEARCH != 1){
        				if(nowDay >= e.newvalue){
        					this.gfnAlert("시작일은 오늘이전 일자로 입력할 수 없습니다.");
        					return false;
        				}
        			}

        			//과거일자 수정 불가, 당월 이내로만 변경가능
        			var toDay = this.gfnGetDate();
        			if(e.newvalue < toDay){
        				this.gfnAlert("과거일자는 수정 불가합니다.");
        				return false;
        			}

        		break;

        		case "DT_END":
        			var dtVacaFrom = this.dsList.getColumn(e.row, "DT_START")==null?"00000101":this.dsList.getColumn(e.row, "DT_START");
        			if(dtVacaFrom > e.newvalue){
        				this.gfnAlert("종료일이 시작일보다 작을 수 없습니다.");
        				return false;
        			}

        		break;

        	}

        	return true;
        };
        //김지은 이우진 / BH150417
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.sta100.addEventHandler("onclick",this.sta100_onclick,this);
            this.divData.form.edtID_PERSON.addEventHandler("onchanged",this.divData_edtID_PERSON_onchanged,this);
            this.sta300.addEventHandler("onclick",this.sta200_onclick,this);
            this.sta200.addEventHandler("onclick",this.sta200_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAC_MGTYEARLYVACA.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
