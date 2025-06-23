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
            this.set_titletext("AS 사무소 일보 작성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"nx_flag\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BUNSO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"CT_TOTAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"CT_FULL_ANNUAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_FULL_DAYOFF\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_FULL_OTHER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_FULL_SUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_PART_ANNUAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_PART_DAYOFF\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_PART_OTRHER\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_PART_SUM\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBSPR_DAYWORK_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DBSPR_DAYWORK_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBSPR_DAYWORK_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DBSPR_DAYWORK_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_BUNSO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_APPLY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListAddData", this);
            obj._setContents("<ColumnInfo><Column id=\"PN_SC\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SCTELHOME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SCTEL\" type=\"STRING\" size=\"256\"/><Column id=\"SZ_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SPECBIGO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_KBCIL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_IPJU\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"10000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_BUNSO","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("AS사무소");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_BUNSO","staCD_BUNSO:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_WORK","ccfCD_BUNSO:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("작업일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_WORK","staDT_WORK:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataMain","0","0",null,"118","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("8");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem01","0","30","80","88",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("9");
            obj.set_text("특기사항");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar01","staItem01:-1","30",null,"88","879",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem03",null,"30","80","30","396",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("11");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem02","staBar01:-1","30","84","59",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("12");
            obj.set_text("총인원 비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textDecoration("none");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem04",null,"59","80","30","396",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("13");
            obj.set_text("정규직");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem05",null,"88","80","30","396",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("14");
            obj.set_text("촉탁직");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem06",null,"30","100","30","297",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("15");
            obj.set_text("연차");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem07",null,"30","100","30","198",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("16");
            obj.set_text("휴무");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem09",null,"30","100","30","99",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("17");
            obj.set_text("기타");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem10",null,"30","100","30","0",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("18");
            obj.set_text("계");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar10",null,"59","100","30","0",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar11",null,"88","100","30","0",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar09",null,"88","100","30","99",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar08",null,"59","100","30","99",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar07",null,"88","100","30","198",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar06",null,"59","100","30","198",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar04",null,"59","100","30","297",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar05",null,"88","100","30","297",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staItem00","staBar01:-1","88","84","30",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("27");
            obj.set_text("총인원 명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar03","staItem00:-1","88",null,"30","475",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Static("staBar02","staItem02:-1","30",null,"59","475",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new TextArea("taxDS_BIGO","staItem01:5","35",null,"78","885",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("0");
            obj.set_autoselect("false");
            obj.set_enableevent("true");
            obj.set_accessibilitydesclevel("all");
            obj.set_maxlength("500");
            obj.set_wordWrap("char");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new TextArea("taxDS_TOTAL","staItem02:5","35",null,"49","481",null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("1");
            obj.set_autoselect("false");
            obj.set_enableevent("true");
            obj.set_accessibilitydesclevel("all");
            obj.set_maxlength("500");
            obj.set_wordWrap("char");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new MaskEdit("metCT_TOTAL","staItem00:5","93","122","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("30");
            obj.set_value("");
            obj.set_format("+999,999,990");
            obj.set_limitbymask("integer");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new MaskEdit("metCT_PART_ANNUAL","staItem05:5","93","88","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_format("+999,999,990");
            obj.set_limitbymask("integer");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new MaskEdit("metCT_FULL_ANNUAL","staItem04:5","64","88","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_format("+999,999,990");
            obj.set_limitbymask("integer");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new MaskEdit("metCT_FULL_DAYOFF","staBar04:5","64","88","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("3");
            obj.set_value("");
            obj.set_format("+999,999,990");
            obj.set_limitbymask("integer");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new MaskEdit("metCT_PART_DAYOFF","staBar05:5","93","88","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("6");
            obj.set_value("");
            obj.set_format("+999,999,990");
            obj.set_limitbymask("integer");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new MaskEdit("metCT_FULL_OTHER","staBar06:5","64","88","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_format("+999,999,990");
            obj.set_limitbymask("integer");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new MaskEdit("metCT_PART_OTRHER","staBar07:5","93","88","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("7");
            obj.set_value("");
            obj.set_format("+999,999,990");
            obj.set_limitbymask("integer");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new MaskEdit("metCT_PART_SUM","staBar09:5","93","88","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("31");
            obj.set_value("");
            obj.set_format("+999,999,990");
            obj.set_limitbymask("integer");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new MaskEdit("metCT_FULL_SUM","staBar08:5","64","88","20",null,null,null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("32");
            obj.set_value("");
            obj.set_format("+999,999,990");
            obj.set_limitbymask("integer");
            obj.set_readonly("true");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Div("divDataSub","0","divDataMain:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","1",null,null,null,null,this.divData.form.divDataSub.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataSub.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_BUNSO.form.CDTextBox","value","dsSearch","CD_BUNSO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divDataMain.form.taxDS_BIGO","value","dsList","DS_BIGO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataMain.form.taxDS_TOTAL","value","dsList","DS_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataMain.form.metCT_TOTAL","value","dsList","CT_TOTAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.divDataMain.form.metCT_PART_ANNUAL","value","dsList","CT_PART_ANNUAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.divDataMain.form.metCT_FULL_ANNUAL","value","dsList","CT_FULL_ANNUAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.divDataMain.form.metCT_FULL_DAYOFF","value","dsList","CT_FULL_DAYOFF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.divDataMain.form.metCT_PART_DAYOFF","value","dsList","CT_PART_DAYOFF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.divDataMain.form.metCT_FULL_OTHER","value","dsList","CT_FULL_OTHER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.divDataMain.form.metCT_PART_OTRHER","value","dsList","CT_PART_OTRHER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataMain.form.metCT_PART_SUM","value","dsList","CT_PART_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.divDataMain.form.metCT_FULL_SUM","value","dsList","CT_FULL_SUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.calDT_WORK","value","dsSearch","DT_WORK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBS_DAYWORK_NEW.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {

        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	//this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	if(this.FormInfo.ID_GROUP != "0" && this.FormInfo.ID_GROUP != "A" && this.FormInfo.ID_GROUP != "3"  ){
        		if( this.FormInfo.ID_GROUP == "2" ){
        			this.ccfCD_BUNSO.form.CDTextBox.set_value(this.AuthClient.CD_DEPT.substr(1));
        			this.ccfCD_BUNSO.form.fnCodeFindLoad();
        		}
        		this.ccfCD_BUNSO.form.set_readonly(true);
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnFormButton = this.gfnFormButtonAdd("WorkBtn", "fnWorkBtn");  // 전일복사
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_BUNSO = this.divSearch.form.ccfCD_BUNSO;  // AS사무소코드
        	this.calDT_WORK = this.divSearch.form.calDT_WORK;    // 작업일자

        	//작업일자 셋팅
        	var today = this.gfnGetDate();
        	this.calDT_WORK.set_value(today);

        	this.dxGrid = this.divData.form.divDataSub.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_BUNSO.CodeFindName = "DBX_CFBUNSO";

        	this.gfnGridInit(this.dxGrid, this.dsListSub, "DB", "DBS_DAYWORK");
        	this.dxGrid.set_selecttype("cell");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","CT_FULL_SUM_SITE"), "editinputtype", "digit" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","CT_PART_SUM_SITE"), "editinputtype", "digit" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","CT_ETC_SITE"), "editinputtype", "digit" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","CT_TODAY_PART"), "editinputtype", "digit" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","CT_TODAY_OUT"), "editinputtype", "digit" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","CT_TODAY_VENDOR"), "editinputtype", "digit" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","AM_RAINFALL"), "editinputtype", "digit" );
        	this.dxGrid.set_autosizingtype( "row" );

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        	this.dsList.addEventHandler("onvaluechanged", this.dsList_onvaluechanged, this);
        	this.dsListSub.addEventHandler("onvaluechanged", this.dsListSub_onvaluechanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_BUNSO", "string");
        	this.dsSelect.addColumn("DT_WORK", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_BUNSO", "string");               // AS사무소
        	this.dsInsert.addColumn("DT_WORK", "string");                // 작업일자
        	this.dsInsert.addColumn("CD_SITE", "string");                // 단지코드
        	this.dsInsert.addColumn("DS_BIGO", "string");                // 특기사항       - MASTER
        	this.dsInsert.addColumn("DS_TOTAL", "string");               // 총인원(비고)  - MASTER
        	this.dsInsert.addColumn("CT_FULL_ANNUAL", "BIGDECIMAL");     // 정직원(연차)  - MASTER
        	this.dsInsert.addColumn("CT_FULL_DAYOFF", "BIGDECIMAL");     // 정직원(휴무)  - MASTER
        	this.dsInsert.addColumn("CT_FULL_OTHER", "BIGDECIMAL");      // 정직원(기타)  - MASTER
        	this.dsInsert.addColumn("CT_PART_ANNUAL", "BIGDECIMAL");     // 촉탁직(연차)  - MASTER
        	this.dsInsert.addColumn("CT_PART_DAYOFF", "BIGDECIMAL");     // 촉탁직(휴무)  - MASTER
        	this.dsInsert.addColumn("CT_PART_OTRHER", "BIGDECIMAL");     // 촉탁직(기타)  - MASTER
        	this.dsInsert.addColumn("CT_FULL_SUM_SITE", "BIGDECIMAL");   // 총인원 정규직 - DETAIL
        	this.dsInsert.addColumn("CT_ASSIST_SUM_SITE", "BIGDECIMAL"); // 총인원 여직원 - DETAIL
        	this.dsInsert.addColumn("CT_PART_SUM_SITE", "BIGDECIMAL");   // 총인원 촉탁직 - DETAIL
        	this.dsInsert.addColumn("CT_ETC_SITE", "BIGDECIMAL");        // 총인원 기타   - DETAIL
        	this.dsInsert.addColumn("CT_AS_SUM_SITE", "BIGDECIMAL");     // 총인원 AS용역 - DETAIL
        	this.dsInsert.addColumn("ID_ASCHARGE", "string");            // AS 담당자사번 - DETAIL
        	this.dsInsert.addColumn("DS_ASCHARGE", "string");            // AS 담당자      - DETAIL
        	this.dsInsert.addColumn("DS_CONTENT", "string");             // 보고내용       - DETAIL
        	this.dsInsert.addColumn("CT_TODAY_PART", "BIGDECIMAL");      // 금일 촉탁      - DETAIL
        	this.dsInsert.addColumn("CT_TODAY_AS", "BIGDECIMAL");        // 금일 AS용역    - DETAIL
        	this.dsInsert.addColumn("CT_TODAY_OUT", "BIGDECIMAL");       // 금일 외주      - DETAIL
        	this.dsInsert.addColumn("CT_TODAY_VENDOR", "BIGDECIMAL");    // 금일 협력업체 - DETAIL
        	this.dsInsert.addColumn("CT_TODAY_3YEARS", "BIGDECIMAL");    // 금일 3년미만 - DETAIL
        	this.dsInsert.addColumn("ID_ANNUAL", "string");              // 근태현황 연차사번 - DETAIL
        	this.dsInsert.addColumn("DS_ANNUAL", "string");              // 근태현황 연차 - DETAIL
        	this.dsInsert.addColumn("ID_DAYOFF", "string");              // 근태현황 휴무사번 - DETAIL
        	this.dsInsert.addColumn("DS_DAYOFF", "string");              // 근태현황 휴무 - DETAIL
        	this.dsInsert.addColumn("ID_OTHER", "string");               // 근태현황 기타사번 - DETAIL
        	this.dsInsert.addColumn("DS_OTHER", "string");               // 근태현황 기타 - DETAIL
        	this.dsInsert.addColumn("AM_TEMP_MAX", "BIGDECIMAL");        // 기온 최고     - DETAIL
        	this.dsInsert.addColumn("AM_TEMP_MIN", "BIGDECIMAL");        // 기온 최저     - DETAIL
        	this.dsInsert.addColumn("TY_WEATHER", "string");             // 날씨           - DETAIL
        	this.dsInsert.addColumn("AM_RAINFALL", "BIGDECIMAL");        // 강우량         - DETAIL
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_BUNSO", "string");                // AS사무소
        	this.dsUpdate.addColumn("DT_WORK", "string");                 // 작업일자
        	this.dsUpdate.addColumn("CD_SITE", "string");                 // 단지코드
        	this.dsUpdate.addColumn("DS_BIGO", "string");                 // 특기사항       - MASTER
        	this.dsUpdate.addColumn("DS_TOTAL", "string");                // 총인원(비고)  - MASTER
        	this.dsUpdate.addColumn("CT_FULL_ANNUAL", "BIGDECIMAL");      // 정직원(연차)  - MASTER
        	this.dsUpdate.addColumn("CT_FULL_DAYOFF", "BIGDECIMAL");      // 정직원(휴무)  - MASTER
        	this.dsUpdate.addColumn("CT_FULL_OTHER", "BIGDECIMAL");       // 정직원(기타)  - MASTER
        	this.dsUpdate.addColumn("CT_PART_ANNUAL", "BIGDECIMAL");      // 촉탁직(연차)  - MASTER
        	this.dsUpdate.addColumn("CT_PART_DAYOFF", "BIGDECIMAL");      // 촉탁직(휴무)  - MASTER
        	this.dsUpdate.addColumn("CT_PART_OTRHER", "BIGDECIMAL");      // 촉탁직(기타)  - MASTER
        	this.dsUpdate.addColumn("CT_FULL_SUM_SITE", "BIGDECIMAL");    // 총인원 정규직 - DETAIL
        	this.dsUpdate.addColumn("CT_ASSIST_SUM_SITE", "BIGDECIMAL");  // 총인원 여직원 - DETAIL
        	this.dsUpdate.addColumn("CT_PART_SUM_SITE", "BIGDECIMAL");    // 총인원 촉탁직 - DETAIL
        	this.dsUpdate.addColumn("CT_ETC_SITE", "BIGDECIMAL");         // 총인원 기타   - DETAIL
        	this.dsUpdate.addColumn("CT_AS_SUM_SITE", "BIGDECIMAL");      // 총인원 AS용역 - DETAIL
        	this.dsUpdate.addColumn("ID_ASCHARGE", "string");             // AS 담당자사번 - DETAIL
        	this.dsUpdate.addColumn("DS_ASCHARGE", "string");             // AS 담당자      - DETAIL
        	this.dsUpdate.addColumn("DS_CONTENT", "string");              // 보고내용       - DETAIL
        	this.dsUpdate.addColumn("CT_TODAY_PART", "BIGDECIMAL");       // 금일 촉탁      - DETAIL
        	this.dsUpdate.addColumn("CT_TODAY_AS", "BIGDECIMAL");         // 금일 AS용역    - DETAIL
        	this.dsUpdate.addColumn("CT_TODAY_OUT", "BIGDECIMAL");        // 금일 외주      - DETAIL
        	this.dsUpdate.addColumn("CT_TODAY_VENDOR", "BIGDECIMAL");     // 금일 협력업체 - DETAIL
        	this.dsUpdate.addColumn("CT_TODAY_3YEARS", "BIGDECIMAL");     // 금일 3년미만 - DETAIL
        	this.dsUpdate.addColumn("ID_ANNUAL", "string");               // 근태현황 연차사번 - DETAIL
        	this.dsUpdate.addColumn("DS_ANNUAL", "string");               // 근태현황 연차 - DETAIL
        	this.dsUpdate.addColumn("ID_DAYOFF", "string");               // 근태현황 휴무사번 - DETAIL
        	this.dsUpdate.addColumn("DS_DAYOFF", "string");               // 근태현황 휴무 - DETAIL
        	this.dsUpdate.addColumn("ID_OTHER", "string");                // 근태현황 기타사번 - DETAIL
        	this.dsUpdate.addColumn("DS_OTHER", "string");                // 근태현황 기타 - DETAIL
        	this.dsUpdate.addColumn("AM_TEMP_MAX", "BIGDECIMAL");         // 기온 최고     - DETAIL
        	this.dsUpdate.addColumn("AM_TEMP_MIN", "BIGDECIMAL");         // 기온 최저     - DETAIL
        	this.dsUpdate.addColumn("TY_WEATHER", "string");              // 날씨           - DETAIL
        	this.dsUpdate.addColumn("AM_RAINFALL", "BIGDECIMAL");         // 강우량         - DETAIL
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_BUNSO", "string");           // AS사무소
        	this.dsDelete.addColumn("DT_WORK", "string");            // 작업일자
        	this.dsDelete.addColumn("CD_SITE", "string");           // 단지코드
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


        	this.dsList.clearData();
        	this.dsListSub.clearData();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_BUNSO", this.ccfCD_BUNSO.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "DT_WORK", this.calDT_WORK.value);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0 dsListSub=select1";
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

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (!this.fnSaveValidate()) return false;

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	if( this.dsList.rowcount > 0 ){
        		var flag = this.gfnGetFlag(this.dsList, 0);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow,"CD_BUNSO",this.dsSearch.getColumn(0,"CD_BUNSO"));
        				this.dsInsert.setColumn(nrow,"DT_WORK",this.dsSearch.getColumn(0,"DT_WORK"));
        				this.dsInsert.setColumn(nrow,"DS_BIGO",this.dsList.getColumn(0,"DS_BIGO"));
        				this.dsInsert.setColumn(nrow,"DS_TOTAL",this.dsList.getColumn(0,"DS_TOTAL"));
        				this.dsInsert.setColumn(nrow,"CT_FULL_ANNUAL",this.dsList.getColumn(0,"CT_FULL_ANNUAL")); // 정직원(연차)
        				this.dsInsert.setColumn(nrow,"CT_FULL_DAYOFF",this.dsList.getColumn(0,"CT_FULL_DAYOFF")); // 정직원(휴무)
        				this.dsInsert.setColumn(nrow,"CT_FULL_OTHER",this.dsList.getColumn(0,"CT_FULL_OTHER"));   // 정직원(기타)
        				this.dsInsert.setColumn(nrow,"CT_PART_ANNUAL",this.dsList.getColumn(0,"CT_PART_ANNUAL")); // 촉탁직(연차)
        				this.dsInsert.setColumn(nrow,"CT_PART_DAYOFF",this.dsList.getColumn(0,"CT_PART_DAYOFF")); // 촉탁직(휴무)
        				this.dsInsert.setColumn(nrow,"CT_PART_OTRHER",this.dsList.getColumn(0,"CT_PART_OTRHER")); // 촉탁직(기타)
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow,"CD_BUNSO",this.dsList.getColumn(0,"CD_BUNSO"));
        				this.dsUpdate.setColumn(nrow,"DT_WORK",this.dsList.getColumn(0,"DT_WORK"));
        				this.dsUpdate.setColumn(nrow,"DS_BIGO",this.dsList.getColumn(0,"DS_BIGO"));
        				this.dsUpdate.setColumn(nrow,"DS_TOTAL",this.dsList.getColumn(0,"DS_TOTAL"));
        				this.dsUpdate.setColumn(nrow,"CT_FULL_ANNUAL",this.dsList.getColumn(0,"CT_FULL_ANNUAL")); // 정직원(연차)
        				this.dsUpdate.setColumn(nrow,"CT_FULL_DAYOFF",this.dsList.getColumn(0,"CT_FULL_DAYOFF")); // 정직원(휴무)
        				this.dsUpdate.setColumn(nrow,"CT_FULL_OTHER",this.dsList.getColumn(0,"CT_FULL_OTHER"));   // 정직원(기타)
        				this.dsUpdate.setColumn(nrow,"CT_PART_ANNUAL",this.dsList.getColumn(0,"CT_PART_ANNUAL")); // 촉탁직(연차)
        				this.dsUpdate.setColumn(nrow,"CT_PART_DAYOFF",this.dsList.getColumn(0,"CT_PART_DAYOFF")); // 촉탁직(휴무)
        				this.dsUpdate.setColumn(nrow,"CT_PART_OTRHER",this.dsList.getColumn(0,"CT_PART_OTRHER")); // 촉탁직(기타)
        				break;
        		}
        	}

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		var strVar = "";
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow,"CD_BUNSO",this.dsSearch.getColumn(0,"CD_BUNSO"));
        				this.dsInsert.setColumn(nrow,"DT_WORK",this.dsSearch.getColumn(0,"DT_WORK"));
        				this.dsInsert.setColumn(nrow,"DS_BIGO",this.dsList.getColumn(0,"DS_BIGO"));
        				this.dsInsert.setColumn(nrow,"DS_TOTAL",this.dsList.getColumn(0,"DS_TOTAL"));
        				this.dsInsert.setColumn(nrow,"CT_FULL_ANNUAL",this.dsList.getColumn(0,"CT_FULL_ANNUAL")); // 정직원(연차)
        				this.dsInsert.setColumn(nrow,"CT_FULL_DAYOFF",this.dsList.getColumn(0,"CT_FULL_DAYOFF")); // 정직원(휴무)
        				this.dsInsert.setColumn(nrow,"CT_FULL_OTHER",this.dsList.getColumn(0,"CT_FULL_OTHER"));   // 정직원(기타)
        				this.dsInsert.setColumn(nrow,"CT_PART_ANNUAL",this.dsList.getColumn(0,"CT_PART_ANNUAL")); // 촉탁직(연차)
        				this.dsInsert.setColumn(nrow,"CT_PART_DAYOFF",this.dsList.getColumn(0,"CT_PART_DAYOFF")); // 촉탁직(휴무)
        				this.dsInsert.setColumn(nrow,"CT_PART_OTRHER",this.dsList.getColumn(0,"CT_PART_OTRHER")); // 촉탁직(기타)

        				this.dsInsert.setColumn(nrow,"CD_SITE", this.dsListSub.getColumn(i,"CD_SITE"));                       // 단지코드
        				this.dsInsert.setColumn(nrow,"CT_FULL_SUM_SITE", this.dsListSub.getColumn(i,"CT_FULL_SUM_SITE"));     // 총인원 정규직
        				this.dsInsert.setColumn(nrow,"CT_ASSIST_SUM_SITE", this.dsListSub.getColumn(i,"CT_ASSIST_SUM_SITE")); // 총인원 여직원
        				this.dsInsert.setColumn(nrow,"CT_PART_SUM_SITE", this.dsListSub.getColumn(i,"CT_PART_SUM_SITE"));     // 총인원 촉탁직
        				this.dsInsert.setColumn(nrow,"CT_ETC_SITE", this.dsListSub.getColumn(i,"CT_ETC_SITE"));               // 총인원 기타
        				this.dsInsert.setColumn(nrow,"CT_AS_SUM_SITE", this.dsListSub.getColumn(i,"CT_AS_SUM_SITE"));         // 총인원 AS용역
        				this.dsInsert.setColumn(nrow,"ID_ASCHARGE", this.dsListSub.getColumn(i,"ID_ASCHARGE"));               // AS 담당자 사번
        				this.dsInsert.setColumn(nrow,"DS_ASCHARGE", this.dsListSub.getColumn(i,"DS_ASCHARGE"));               // AS 담당자
        				this.dsInsert.setColumn(nrow,"DS_CONTENT", this.dsListSub.getColumn(i,"DS_CONTENT"));                 // 보고내용
        				this.dsInsert.setColumn(nrow,"CT_TODAY_PART", this.dsListSub.getColumn(i,"CT_TODAY_PART"));           // 금일 촉탁
        				this.dsInsert.setColumn(nrow,"CT_TODAY_AS", this.dsListSub.getColumn(i,"CT_TODAY_AS"));               // 금일 AS용역
        				this.dsInsert.setColumn(nrow,"CT_TODAY_OUT", this.dsListSub.getColumn(i,"CT_TODAY_OUT"));             // 금일 외주
        				this.dsInsert.setColumn(nrow,"CT_TODAY_VENDOR", this.dsListSub.getColumn(i,"CT_TODAY_VENDOR"));       // 금일 협력업체
        				this.dsInsert.setColumn(nrow,"CT_TODAY_3YEARS", this.dsListSub.getColumn(i,"CT_TODAY_3YEARS"));       // 금일 3년미만
        				this.dsInsert.setColumn(nrow,"ID_ANNUAL", this.dsListSub.getColumn(i,"ID_ANNUAL"));                   // 근태현황 연차사번
        				this.dsInsert.setColumn(nrow,"DS_ANNUAL", this.dsListSub.getColumn(i,"DS_ANNUAL"));                   // 근태현황 연차
        				this.dsInsert.setColumn(nrow,"ID_DAYOFF", this.dsListSub.getColumn(i,"ID_DAYOFF"));                   // 근태현황 휴무사번
        				this.dsInsert.setColumn(nrow,"DS_DAYOFF", this.dsListSub.getColumn(i,"DS_DAYOFF"));                   // 근태현황 휴무
        				this.dsInsert.setColumn(nrow,"ID_OTHER", this.dsListSub.getColumn(i,"ID_OTHER"));                     // 근태현황 기타사번
        				this.dsInsert.setColumn(nrow,"DS_OTHER", this.dsListSub.getColumn(i,"DS_OTHER"));                     // 근태현황 기타
        				this.dsInsert.setColumn(nrow,"AM_TEMP_MAX", this.dsListSub.getColumn(i,"AM_TEMP_MAX"));               // 기온 최고
        				this.dsInsert.setColumn(nrow,"AM_TEMP_MIN", this.dsListSub.getColumn(i,"AM_TEMP_MIN"));               // 기온 최저
        				this.dsInsert.setColumn(nrow,"AM_TEMP_MIN", this.dsListSub.getColumn(i,"AM_TEMP_MIN"));               // 기온 최저
        				this.dsInsert.setColumn(nrow,"TY_WEATHER", this.dsListSub.getColumn(i,"TY_WEATHER"));                 // 날씨
        				this.dsInsert.setColumn(nrow,"AM_RAINFALL", this.dsListSub.getColumn(i,"AM_RAINFALL"));               // 강우량
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow,"CD_BUNSO",this.dsList.getColumn(0,"CD_BUNSO"));
        				this.dsUpdate.setColumn(nrow,"DT_WORK",this.dsList.getColumn(0,"DT_WORK"));
        				this.dsUpdate.setColumn(nrow,"DS_BIGO",this.dsList.getColumn(0,"DS_BIGO"));
        				this.dsUpdate.setColumn(nrow,"DS_TOTAL",this.dsList.getColumn(0,"DS_TOTAL"));
        				this.dsUpdate.setColumn(nrow,"CT_FULL_ANNUAL",this.dsList.getColumn(0,"CT_FULL_ANNUAL")); // 정직원(연차)
        				this.dsUpdate.setColumn(nrow,"CT_FULL_DAYOFF",this.dsList.getColumn(0,"CT_FULL_DAYOFF")); // 정직원(휴무)
        				this.dsUpdate.setColumn(nrow,"CT_FULL_OTHER",this.dsList.getColumn(0,"CT_FULL_OTHER"));   // 정직원(기타)
        				this.dsUpdate.setColumn(nrow,"CT_PART_ANNUAL",this.dsList.getColumn(0,"CT_PART_ANNUAL")); // 촉탁직(연차)
        				this.dsUpdate.setColumn(nrow,"CT_PART_DAYOFF",this.dsList.getColumn(0,"CT_PART_DAYOFF")); // 촉탁직(휴무)
        				this.dsUpdate.setColumn(nrow,"CT_PART_OTRHER",this.dsList.getColumn(0,"CT_PART_OTRHER")); // 촉탁직(기타)

        				this.dsUpdate.setColumn(nrow,"CD_SITE", this.dsListSub.getColumn(i,"CD_SITE"));                       // 단지코드
        				this.dsUpdate.setColumn(nrow,"CT_FULL_SUM_SITE", this.dsListSub.getColumn(i,"CT_FULL_SUM_SITE"));     // 총인원 정규직
        				this.dsUpdate.setColumn(nrow,"CT_ASSIST_SUM_SITE", this.dsListSub.getColumn(i,"CT_ASSIST_SUM_SITE")); // 총인원 여직원
        				this.dsUpdate.setColumn(nrow,"CT_PART_SUM_SITE", this.dsListSub.getColumn(i,"CT_PART_SUM_SITE"));     // 총인원 촉탁직
        				this.dsUpdate.setColumn(nrow,"CT_ETC_SITE", this.dsListSub.getColumn(i,"CT_ETC_SITE"));               // 총인원 기타
        				this.dsUpdate.setColumn(nrow,"CT_AS_SUM_SITE", this.dsListSub.getColumn(i,"CT_AS_SUM_SITE"));         // 총인원 AS용역
        				this.dsUpdate.setColumn(nrow,"ID_ASCHARGE", this.dsListSub.getColumn(i,"ID_ASCHARGE"));               // AS 담당자 사번
        				this.dsUpdate.setColumn(nrow,"DS_ASCHARGE", this.dsListSub.getColumn(i,"DS_ASCHARGE"));               // AS 담당자
        				this.dsUpdate.setColumn(nrow,"DS_CONTENT", this.dsListSub.getColumn(i,"DS_CONTENT"));                 // 보고내용
        				this.dsUpdate.setColumn(nrow,"CT_TODAY_PART", this.dsListSub.getColumn(i,"CT_TODAY_PART"));           // 금일 촉탁
        				this.dsUpdate.setColumn(nrow,"CT_TODAY_AS", this.dsListSub.getColumn(i,"CT_TODAY_AS"));               // 금일 AS용역
        				this.dsUpdate.setColumn(nrow,"CT_TODAY_OUT", this.dsListSub.getColumn(i,"CT_TODAY_OUT"));             // 금일 외주
        				this.dsUpdate.setColumn(nrow,"CT_TODAY_VENDOR", this.dsListSub.getColumn(i,"CT_TODAY_VENDOR"));       // 금일 협력업체
        				this.dsUpdate.setColumn(nrow,"CT_TODAY_3YEARS", this.dsListSub.getColumn(i,"CT_TODAY_3YEARS"));       // 금일 3년미만
        				this.dsUpdate.setColumn(nrow,"ID_ANNUAL", this.dsListSub.getColumn(i,"ID_ANNUAL"));                   // 근태현황 연차사번
        				this.dsUpdate.setColumn(nrow,"DS_ANNUAL", this.dsListSub.getColumn(i,"DS_ANNUAL"));                   // 근태현황 연차
        				this.dsUpdate.setColumn(nrow,"ID_DAYOFF", this.dsListSub.getColumn(i,"ID_DAYOFF"));                   // 근태현황 휴무사번
        				this.dsUpdate.setColumn(nrow,"DS_DAYOFF", this.dsListSub.getColumn(i,"DS_DAYOFF"));                   // 근태현황 휴무
        				this.dsUpdate.setColumn(nrow,"ID_OTHER", this.dsListSub.getColumn(i,"ID_OTHER"));                     // 근태현황 기타사번
        				this.dsUpdate.setColumn(nrow,"DS_OTHER", this.dsListSub.getColumn(i,"DS_OTHER"));                     // 근태현황 기타
        				this.dsUpdate.setColumn(nrow,"AM_TEMP_MAX", this.dsListSub.getColumn(i,"AM_TEMP_MAX"));               // 기온 최고
        				this.dsUpdate.setColumn(nrow,"AM_TEMP_MIN", this.dsListSub.getColumn(i,"AM_TEMP_MIN"));               // 기온 최저
        				this.dsUpdate.setColumn(nrow,"AM_TEMP_MIN", this.dsListSub.getColumn(i,"AM_TEMP_MIN"));               // 기온 최저
        				this.dsUpdate.setColumn(nrow,"TY_WEATHER", this.dsListSub.getColumn(i,"TY_WEATHER"));                 // 날씨
        				this.dsUpdate.setColumn(nrow,"AM_RAINFALL", this.dsListSub.getColumn(i,"AM_RAINFALL"));               // 강우량
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_BUNSO", this.dsListSub.getColumn(i,"CD_BUNSO"));
        				this.dsDelete.setColumn(nrow, "DT_WORK", this.dsListSub.getColumn(i,"DT_WORK"));
        				this.dsDelete.setColumn(nrow, "CD_SITE", this.dsListSub.getColumn(i,"CD_SITE"));

        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete insert=dsInsert update=dsUpdate";
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
         *	입력 버튼
         */
        this.fnAdd = function() {
        	if (!this.fnSelectValidate()) return false;

        	var nrow = 0;
        	if( this.dsList.rowcount == 0 ){
        		nrow = this.dsList.addRow();
        		this.dsList.setColumn(nrow, this.ucFlag, "I");
        	}

        	// DETAIL
        	nrow = this.gfnGridAdd(this.dxGrid,"");
        	this.dsListSub.setColumn(nrow,"CD_BUNSO",this.dsSearch.getColumn(0,"CD_BUNSO"));
        	this.dsListSub.setColumn(nrow,"DT_WORK",this.dsSearch.getColumn(0,"DT_WORK"));

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	this.gfnGridDel(this.dxGrid);
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
        	var validate = true;
        	if (this.gfnIsNull(this.ccfCD_BUNSO.form.CDTextBox.text)) {
        		validate = false;
        		this.fnCdBunsoVaidateCallback = function() {
        			this.ccfCD_BUNSO.form.CDTextBox.setFocus();
        			return false;
        		}
        		this.gfnAlert("AS사무소를 입력하셔야 합니다.", "fnCdBunsoVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        	}

        	if (validate && this.gfnIsNull(this.calDT_WORK.value)) {
        		validate = false;
        		this.fnDtWtworkVaidateCallback = function() {
        			this.calDT_WORK.setFocus();
        			return false;
        		}
        		this.gfnAlert("작업일자를 입력하셔야 합니다.", "fnDtWtworkVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        	}
        	return validate;
        };

        /*
         *	조회 Validate
         */
        this.fnSaveValidate = function() {
        	var validate = true;
        	for (var i = 1; i < this.dsListSub.rowcount; i++) {
        		var flag = this.dsListSub.getColumn(i,this.ucFlag);
        		if( flag != "D" ) {
        			var nRow = this.dsListSub.findRowExpr( this.ucFlag+" != 'D' && currow != "+i+" && CD_SITE == '" + this.dsListSub.getColumn(i,"CD_SITE") +"' && DT_WORK == '" + this.dsListSub.getColumn(i,"DT_WORK") +"'");
        			if( nRow > -1 ){
        				validate = false;
        				this.dsListSub.set_rowposition(i);
        				this.gfnAlert(""+i+"행과 "+nRow+"행은  같은 단지코드, 작업일자로 중복될수 없습니다."); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        				return false;
        			}
        		}
        	}
        	return validate;
        }
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
        		trace(this.dsList.saveXML());
        	} else if(svcID == "save" ){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /*
         *	하자내용변경 팝업 콜백 처리
         */
        this.fnPopupCallback = function(strId, val) {
        	if(val.isUpdate) {
        		this.FormBtns.Select.click();
        	}
        }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "DBX_CFMAINSITE") {
        		dsUserParam.setColumn(nrow, "CD_AUTHDEPT", "");
        		dsUserParam.setColumn(nrow, "CD_BUNSO", this.dsSearch.getColumn(0,"CD_BUNSO"));
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        	}

        	if (id.search("DBX_CFBASEINFO_MULTI") > -1) {
        		dsUserParam.setColumn(nrow, "GR_SEARCH", "1");
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "CD_BUNSO", this.dsSearch.getColumn(0,"CD_BUNSO"));
        	}
        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	var strIdAsCharge = "";
        	var strDsAsCharge = "";


        	if (arr.length > 0) {
        		var strCdEmptype = "";
        		var strDsPosition = "";
        		for( var key in arr ){
        			strIdAsCharge += arr[key]["ID_SABUN"]+",";
        			strCdEmptype = (arr[key]["CD_EMPTYPE"] == "03") ? "*":"";
        			strDsPosition = (this.gfnIsNull(arr[key]["DS_POSITION"])) ? "":arr[key]["DS_POSITION"]+" ";
        			strDsAsCharge += strCdEmptype + strDsPosition +arr[key]["DS_HNAME"]+",\n";
        		}
        	}

        	switch(id) {
        		case "DBX_CFBASEINFO_MULTI1":
        			if (arr.length > 0) {
        				this.dsListSub.setColumn(this.dsListSub.rowposition, "ID_ASCHARGE", strIdAsCharge.substr(0,strIdAsCharge.length-1));
        				this.dsListSub.setColumn(this.dsListSub.rowposition, "DS_ASCHARGE", strDsAsCharge.substr(0,strDsAsCharge.length-2));
        			}
        		break;
        		case "DBX_CFBASEINFO_MULTI2":
        			if (arr.length > 0) {
        				this.dsListSub.setColumn(this.dsListSub.rowposition, "ID_ANNUAL", strIdAsCharge.substr(0,strIdAsCharge.length-1));
        				this.dsListSub.setColumn(this.dsListSub.rowposition, "DS_ANNUAL", strDsAsCharge.substr(0,strDsAsCharge.length-2));
        			}
        		break;
        		case "DBX_CFBASEINFO_MULTI3":
        			if (arr.length > 0) {
        				this.dsListSub.setColumn(this.dsListSub.rowposition, "ID_DAYOFF", strIdAsCharge.substr(0,strIdAsCharge.length-1));
        				this.dsListSub.setColumn(this.dsListSub.rowposition, "DS_DAYOFF", strDsAsCharge.substr(0,strDsAsCharge.length-2));
        			}
        		break;
        		case "DBX_CFBASEINFO_MULTI4":
        			if (arr.length > 0) {
        				this.dsListSub.setColumn(this.dsListSub.rowposition, "ID_OTHER", strIdAsCharge.substr(0,strIdAsCharge.length-1));
        				this.dsListSub.setColumn(this.dsListSub.rowposition, "DS_OTHER", strDsAsCharge.substr(0,strDsAsCharge.length-2));
        			}
        		break;
        		default:
        	}
        	return true;
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.fnDialogCallback = function(svcID, value){
        	if(value) {
        		var param = {};
        			param.CF_CD_BUNSO = this.ccfCD_BUNSO.form.CDTextBox.value;
        			param.CF_DT_WORK = this.calDT_WORK.value
        			param.CF_DT_WORK_TARGET = this.gfnAddDate(this.calDT_WORK.value,-1);
        			param.ID_USER = this.AuthClient.ID_USER;
        			var options = {
        				title: "전일복사",
        				resizable: true
        			}
        			this.gfnOpenPopup("DBS_DAYWORK_CONFIRM","dbs::DBS_DLG_DAYWORK_CONFIRM.xfdl",param,"fnPopupCallback",options);
        	}
        }
        /*
         * 커스텀 버튼 이벤트
         */
        this.fnWorkBtn = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	var validate = true;
        	if (this.gfnIsNull(this.calDT_WORK.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.calDT_WORK.setFocus();
        		}
        		this.gfnAlert("작업일자를 입력하세요.", "fnVaidateCallback");
        	}

        	if( !validate ) return 0;
        	if( this.dsList.rowcount > 0 ){
        		this.gfnConfirm("작업일자에 조회된 데이터가 있습니다.\n전일복사 하시겠습니까?\n\n※ 전일복사 진행시 현재 조회된 데이터가 삭제됩니다.", "fnDialogCallback");
        	} else {
        		this.fnDialogCallback("",true);
        	}


        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         /*
         *	조회 조건 변경시 초기화
         */
         this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.dsList.clearData();
        	}
        };

         /*
         *	조회 조건 변경시 초기화
         */
         this.dsList_onvaluechanged = function(obj,e)
        {
        	if( e.oldvalue != e.newvalue ) {
        		this.FormBtns.Save.set_enable(true);

        		if( obj.getColumn(e.row,this.ucFlag) != "I"){
        			obj.setColumn(e.row, this.ucFlag, "U");
        		}
        	}
        };

        this.dsListSub_onvaluechanged = function(obj,e)
        {
        	if( obj.getColumn(e.row,this.ucFlag) != "#"  && e.oldvalue != e.newvalue ) {
        		if(e.columnid.search("CT") > -1) {
        			var nCtSum = nexacro.toNumber(obj.getColumn(e.row,"CT_FULL_SUM_SITE"),0) +nexacro.toNumber(obj.getColumn(e.row,"CT_ASSIST_SUM_SITE"),0) + nexacro.toNumber(obj.getColumn(e.row,"CT_PART_SUM_SITE"),0)  + nexacro.toNumber(obj.getColumn(e.row,"CT_ETC_SITE"),0)
        			obj.setColumn(e.row,"CT_TOTAL_SITE",nCtSum);
        			var nSum = obj.getSumNF("CT_FULL_SUM_SITE") + obj.getSumNF("CT_ASSIST_SUM_SITE") + obj.getSumNF("CT_PART_SUM_SITE") + obj.getSumNF("CT_ETC_SITE");
        			this.dsList.setColumn(0,"CT_TOTAL",nSum);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DBS_DAYWORK_NEW.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
