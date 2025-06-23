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
            this.set_titletext("하자 접수내역 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBSPR_HAJALIST_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo2</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_JEOBSU\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BUNSO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"TY_COMPLETE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_COMPLETE_ETC\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_UH\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CTM\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_COMPLETE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_COMPLETE_ETC", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">0</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">7</Col><Col id=\"DS_CODE\">처리+완료</Col></Row><Row><Col id=\"CD_CODE\">8</Col><Col id=\"DS_CODE\">미완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_JEOBSU", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">ALL</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">AS</Col><Col id=\"DS_CODE\">AS</Col></Row><Row><Col id=\"CD_CODE\">BS</Col><Col id=\"DS_CODE\">BS</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SITE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_FIX","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("22");
            obj.set_text("하자형태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_TYPE","staCD_FIX:0.0","staCD_FIX:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_JEOBSU","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("접수구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_JEOBSU","staTY_JEOBSU:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsTY_JEOBSU");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("전체");
            obj.set_value("ALL");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_BUNSO","cboTY_JEOBSU:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("AS사무소");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_BUNSO","staCD_BUNSO:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","ccfCD_BUNSO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("단지코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT","0.0","staCD_FIX:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("접수일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calFR_DATE","staDT:0.0","staCD_FIX:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","calFR_DATE:0.0","staCD_FIX:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calTO_DATE","sta00:0.0","staCD_FIX:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GBN","calTO_DATE:0.0","staCD_FIX:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_text("진행현황");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_COMPLETE","staTY_GBN:0.0","staCD_FIX:10.0","101","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsTY_COMPLETE");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_COMPLETE_ETC","cboTY_COMPLETE:0.0","staCD_FIX:10.0","101","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsTY_COMPLETE_ETC");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("전체");
            obj.set_value("0");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACT","cboTY_COMPLETE_ETC:0.0","staCD_FIX:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_text("공종");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACT","staCD_ACT:0.0","staCD_FIX:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_UH","ccfCD_TYPE:0.0","staCD_FIX:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("23");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_UH","staCD_UH:0.0","staCD_FIX:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_DONG","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("동");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDS_DONG","staDS_DONG:0.0","10.0","94","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_HO","ccfDS_DONG:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDS_HO","staDS_HO:0.0","10.0","94","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CTM","ccfCD_UH:0.0","staCD_FIX:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("24");
            obj.set_text("협력업체");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CTM","staCD_CTM:0.0","staCD_FIX:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SITE","ccfCD_ACT:0.0","staCD_FIX:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("25");
            obj.set_text("단지유형");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_SITE","staTY_SITE:0.0","staCD_FIX:10.0","161","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("26");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_SITE");
            obj.set_text("재직자");
            obj.set_value("0");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divSearch.form.ccfCD_TYPE.form.CDTextBox","value","dsSearch","CD_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSearch.form.ccfCD_BUNSO.form.CDTextBox","value","dsSearch","CD_BUNSO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.calFR_DATE","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.calTO_DATE","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboTY_COMPLETE","value","dsSearch","TY_COMPLETE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.cboTY_JEOBSU","value","dsSearch","TY_JEOBSU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.cboTY_COMPLETE_ETC","value","dsSearch","TY_COMPLETE_ETC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACT.form.CDTextBox","value","dsSearch","CD_ACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_UH.form.CDTextBox","value","dsSearch","CD_UH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfDS_DONG.form.CDTextBox","value","dsSearch","DS_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfDS_HO.form.CDTextBox","value","dsSearch","DS_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_CTM.form.CDTextBox","value","dsSearch","CD_CTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.cboTY_SITE","value","dsSearch","TY_SITE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBS_HAJALIST.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	//this.fnSetButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	this.fnSetCombo();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
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
        	this.cboTY_JEOBSU = this.divSearch.form.cboTY_JEOBSU;                    // 접수구분
        	this.ccfCD_BUNSO = this.divSearch.form.ccfCD_BUNSO;                      // AS사무소
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;                        // 단지코드
        	this.calFR_DATE = this.divSearch.form.calFR_DATE;                        // 접수일자 FROM
        	this.calTO_DATE = this.divSearch.form.calTO_DATE;                        // 접수일자 TO
        	this.cboTY_COMPLETE= this.divSearch.form.cboTY_COMPLETE;                 // 진행현황  -> 전체(0),승인(3),완료(2),미완료(1)
        	this.cboTY_COMPLETE_ETC = this.divSearch.form.cboTY_COMPLETE_ETC         // 진행현황  -> 전체(0),
        	this.ccfCD_ACT = this.divSearch.form.ccfCD_ACT;                          // 공종코드
        	this.ccfCD_UH = this.divSearch.form.ccfCD_UH;                            // 유형코드
        	this.ccfCD_TYPE = this.divSearch.form.ccfCD_TYPE;                        // 보수형태코드
        	this.ccfCD_CTM = this.divSearch.form.ccfCD_CTM;                          // 협력업체코드
        	this.ccfDS_DONG = this.divSearch.form.ccfDS_DONG;                        // 동코드
        	this.ccfDS_HO = this.divSearch.form.ccfDS_HO;                            // 호코드
        	this.cboTY_SITE = this.divSearch.form.cboTY_SITE;
        	//작업일자 셋팅

        	var today = this.gfnGetDate();
        	this.calFR_DATE.set_value(today.substr(0,6)+"01");
        	this.calTO_DATE.set_value(today);

        	this.cboTY_JEOBSU.set_index(0);
        	this.cboTY_COMPLETE_ETC.set_index(0);
        	this.cboTY_SITE.set_index(0);
        	this.dxGrid = this.divData.form.objGrid;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_BUNSO.CodeFindName = "DBX_CFBUNSO";
        	this.ccfCD_SITE.CodeFindName = "DBX_CFMAINSITE";
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_ACT.CodeFindName = "DBX_CFACT";                                 // 공종코드
        	if(!this.gfnIsNull(this.getOwnerFrame().CF_SMALL_ACT) ) {
        		this.ccfCD_ACT.CodeFindName = "DBX_CFSMALLACT";
        	}
        	this.ccfCD_UH.CodeFindName = "CF_CODE_DB_S1";                             // 유형코드
        	this.ccfCD_TYPE.CodeFindName = "CF_CODE_DB_B1";                            // 하자형태
        	this.ccfCD_CTM.CodeFindName = "DBX_CFHADO";                                // 협력업체코드
        	this.ccfCD_CTM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";        // 협력업체코드 파라미터
        	this.ccfCD_CTM.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfDS_DONG.CodeFindName = "DBX_CFASDONGHO";                           // 동코드
        	this.ccfDS_DONG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";       // 동코드 파라미터
        	this.ccfDS_DONG.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfDS_HO.CodeFindName = "DBX_CFASDONGHO";                             // 호코드
        	this.ccfDS_HO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";         // 호코드 파라미터
        	this.ccfDS_HO.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBS_HAJALIST");  // pForm.gfnGridInit = function(objGrid, objDs, cd_system, id_grid, tree_column, level_column, is_manual)
        	//this.dxGrid.set_autosizingtype("row");
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","RM_NY"), "tooltiptext", "bind:RM_NY" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","RM_JOBEND"), "tooltiptext", "bind:RM_JOBEND" );

        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","RM_NY"), "wordWrap", "char" );
        	this.dxGrid.setCellProperty( "body", this.dxGrid.getBindCellIndex("body","RM_JOBEND"), "wordWrap", "char" );
        	this.dxGrid.setFormatRowProperty( 1,"size",this.dxGrid.getFormatRowProperty(0,"size")*2 );

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_JEOBSU", "string");          // 접수구분
        	this.dsSelect.addColumn("CD_BUNSO", "string");           // AS사무소
        	this.dsSelect.addColumn("CD_SITE", "string");            // 단지코드
        	this.dsSelect.addColumn("CD_SITE", "string");            // 단지코드
        	this.dsSelect.addColumn("DT_FROM", "string");            // 접수일자 FROM
        	this.dsSelect.addColumn("DT_TO", "string");              // 접수일자 TO
        	this.dsSelect.addColumn("TY_COMPLETE", "string");        // 진행현황  -> 전체(0),승인(3),완료(2),미완료(1)
        	this.dsSelect.addColumn("TY_COMPLETE_ECT", "string");    // 진행현황  -> 전체(0),승인(3),완료(2),미완료(1)
        	this.dsSelect.addColumn("CD_UH", "string");              // 위치코드
        	this.dsSelect.addColumn("CD_ACT", "string");             // 공종코드
        	this.dsSelect.addColumn("CD_TYPE", "string");            // 하자형태
        	this.dsSelect.addColumn("CD_CTM", "string");             // 협력업체
        	this.dsSelect.addColumn("DS_DONG", "string");            // 동
        	this.dsSelect.addColumn("DS_HO", "string");              // 호
        	this.dsSelect.addColumn("TY_SITE", "string");
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
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TY_JEOBSU", this.dsSearch.getColumn(0, "TY_JEOBSU"));               // 접수구분
        	this.dsSelect.setColumn(0, "CD_BUNSO", this.dsSearch.getColumn(0, "CD_BUNSO"));                 // AS사무소
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));                   // 단지코드
        	this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));                   // 접수일자 FROM
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));                     // 접수일자 TO
        	this.dsSelect.setColumn(0, "TY_COMPLETE", this.dsSearch.getColumn(0, "TY_COMPLETE"));           // 진행현황
        	this.dsSelect.setColumn(0, "TY_COMPLETE_ECT", this.dsSearch.getColumn(0, "TY_COMPLETE_ETC"));   // 진행현황
        	this.dsSelect.setColumn(0, "CD_UH", this.dsSearch.getColumn(0, "CD_UH"));                       // 유형
        	this.dsSelect.setColumn(0, "CD_ACT", this.dsSearch.getColumn(0, "CD_ACT"));                     // 공종
        	this.dsSelect.setColumn(0, "CD_TYPE", this.dsSearch.getColumn(0, "CD_TYPE"));                   // 하자형태
        	this.dsSelect.setColumn(0, "CD_CTM", this.dsSearch.getColumn(0, "CD_CTM"));                     // 협력업체
        	this.dsSelect.setColumn(0, "DS_DONG", this.dsSearch.getColumn(0, "DS_DONG"));                   // 동(*)
        	var strHo = this.dsSearch.getColumn(0, "DS_HO");
        	if( strHo == "공용" ){
        		 strHo = "0000";
        	}
        	this.dsSelect.setColumn(0, "DS_HO", strHo);                                                     // 호
        	this.dsSelect.setColumn(0, "TY_SITE", this.dsSearch.getColumn(0, "TY_SITE"));


        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
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
        this.fnSelectValidate = function(strType) {
        	var validate = true;
        	if ( strType == "ccfCD_SITE" && this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.text)) {
        		validate = false;
        		this.fnCdSiteVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        			return false;
        		}
        		this.gfnAlert("단지코드를 입력하셔야 합니다.", "fnCdSiteVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        	}
        	if ( validate && !this.gfnIsNull(this.calFR_DATE.value) && !this.gfnIsNull(this.calTO_DATE.value) )  {
        		if (this.calFR_DATE.value > this.calTO_DATE.value )  {
        			validate = false;
        			this.fnDtVaidateCallback = function() {
        				this.calFR_DATE.setFocus();
        			}
        			this.gfnAlert("접수일자 시작일이 접수 종료일보다 클 수 없습니다.", "fnDtVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
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
        		trace("총 건수 : "+(this.dsList.rowcount-1) +" 건");
        	} else if (svcID == "combo") {
        		this.dsTY_SITE.insertRow(0);
        		this.dsTY_SITE.setColumn(0,"DS_CODE","전체");
        		this.cboTY_SITE.set_index(0);

        		this.cboTY_COMPLETE.set_index(0);

        		if(this.FormInfo.ID_GROUP != "0" && this.FormInfo.ID_GROUP != "A" && this.FormInfo.ID_GROUP != "3"  ){
        			if( this.FormInfo.ID_GROUP == "2" ){
        				this.ccfCD_BUNSO.form.CDTextBox.set_value(this.AuthClient.CD_DEPT.substr(1));
        				this.ccfCD_BUNSO.form.fnCodeFindLoad();
        			}
        			if( this.FormInfo.ID_GROUP == "6" || this.FormInfo.ID_GROUP == "C" ){
        				this.ccfCD_SITE.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        				this.ccfCD_SITE.form.fnCodeFindLoad();
        				this.ccfCD_SITE.form.set_readonly(true);
        			}
        			this.ccfCD_BUNSO.form.set_readonly(true);
        		}

        		if(!this.gfnIsNull(this.getOwnerFrame().CF_TY_COMPLETE) ) {
        			this.dsSearch.set_enableevent(false);
        			this.cboTY_JEOBSU.set_value(this.gfnNvl(this.getOwnerFrame().CF_TY_JEOBSU,"ALL"));
        			this.ccfCD_BUNSO.form.CDTextBox.set_value(this.gfnNvl(this.getOwnerFrame().CF_CD_BUNSO,""));
        			this.ccfCD_BUNSO.form.DSTextBox.set_value(this.gfnNvl(this.getOwnerFrame().CF_DS_BUNSO,""));
        			this.ccfCD_SITE.form.CDTextBox.set_value(this.getOwnerFrame().CF_CD_SITE);
        			this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().CF_DS_SITE);
        			this.ccfCD_CTM.form.CDTextBox.set_value(this.getOwnerFrame().CF_CD_CTM);
        			this.ccfCD_CTM.form.DSTextBox.set_value(this.getOwnerFrame().CF_DS_CTM);
        			this.ccfCD_ACT.form.CDTextBox.set_value(this.getOwnerFrame().CF_CD_ACT);
        			this.ccfCD_ACT.form.DSTextBox.set_value(this.getOwnerFrame().CF_DS_ACT);
        			this.ccfCD_TYPE.form.CDTextBox.set_value(this.getOwnerFrame().CF_CD_TYPE);
        			this.ccfCD_TYPE.form.DSTextBox.set_value(this.getOwnerFrame().CF_DS_TYPE);
        			this.ccfCD_UH.form.CDTextBox.set_value(this.getOwnerFrame().CF_CD_UH);
        			this.ccfCD_UH.form.DSTextBox.set_value(this.getOwnerFrame().CF_DS_UH);
        			this.cboTY_COMPLETE.set_value(this.getOwnerFrame().CF_TY_COMPLETE);
        			this.cboTY_COMPLETE_ETC.set_value(this.getOwnerFrame().CF_TY_COMPLETE_ETC);
        			this.calFR_DATE.set_value(this.getOwnerFrame().CF_FR_DATE);
        			this.calTO_DATE.set_value(this.getOwnerFrame().CF_TO_DATE);
        			if(!this.gfnIsNull(this.getOwnerFrame().CF_TY_SITE)){
        				this.cboTY_SITE.set_value(this.getOwnerFrame().CF_TY_SITE);
        			} else {
        				this.cboTY_SITE.set_index(0);
        			}
        			this.ccfDS_DONG.form.CDTextBox.set_value(this.gfnNvl(this.getOwnerFrame().CF_DS_DONG,""));
        			this.divSearch_cboTY_COMPLETE_onitemchanged(this.cboTY_COMPLETE);
        			this.FormBtns.Select.click();
        			this.dsSearch.set_enableevent(true);
        		}
        	}
        };


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_AUTHDEPT", "");
        		dsUserParam.setColumn(nrow, "CD_BUNSO", "");
        	} else if (id == "ccfDS_DONG") {
        		if (!this.fnSelectValidate("ccfCD_SITE")) return false;

        		dsUserParam.setColumn(nrow, "TY_TYPE", "DONG");
        		dsUserParam.setColumn(nrow, "CD_SITE", this.ccfCD_SITE.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "VALUE1", "");
        		dsUserParam.setColumn(nrow, "VALUE2", "");
        	} else if (id == "ccfDS_HO") {
        		if (!this.fnSelectValidate("ccfCD_SITE")) return false;

        		dsUserParam.setColumn(nrow, "TY_TYPE", "HO");
        		dsUserParam.setColumn(nrow, "CD_SITE", this.ccfCD_SITE.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "VALUE1", this.gfnNvl(this.ccfDS_DONG.form.CDTextBox.value,""));
        		dsUserParam.setColumn(nrow, "VALUE2", this.gfnNvl(this.ccfDS_HO.form.CDTextBox.value,""));
        	} else if(id == "ccfCD_CTM" ){
        		if (!this.fnSelectValidate("ccfCD_SITE")) return false;
        		dsUserParam.setColumn(nrow, "CD_SITE", this.ccfCD_SITE.form.CDTextBox.value);
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능
        	if(id == "ccfDS_DONG") {

        		var strCdDong = "";
        		var strDsDong = "";
        		if (arr.length > 0) {
        			for(var r = 0; r < arr.length; r++) {

        				strCdDong += arr[r]["DS_DONG"]+",";
        				strDsDong += arr[r]["DS_BIGO"]+",";
        			}
        			this.ccfDS_DONG.form.CDTextBox.set_value(strCdDong.substr(0,strCdDong.length-1));
        			this.ccfDS_DONG.form.DSTextBox.set_value(strDsDong.substr(0,strDsDong.length-1));
        		}
        	}

        	if(id == "ccfDS_HO") {
        		var strCdDong = "";
        		var strDsDong = "";
        		if (arr.length > 0) {
        			for(var r = 0; r < arr.length; r++) {

        				strCdDong += arr[r]["DS_DONG"]+",";
        				strDsDong += arr[r]["DS_BIGO"]+",";
        			}
        			this.ccfDS_HO.form.CDTextBox.set_value(strCdDong.substr(0,strCdDong.length-1));
        			this.ccfDS_HO.form.DSTextBox.set_value(strDsDong.substr(0,strDsDong.length-1));
        		}
        	}

        	if( id =="ccfCD_CTM" ) {
        		var strCdCtm = "";
        		var strDsCtm = "";
        		if (arr.length > 0) {
        			for(var r = 0; r < arr.length; r++) {

        				strCdCtm += arr[r]["CD_CTM"]+",";
        				strDsCtm += arr[r]["DS_CTM"]+",";
        			}
        			this.ccfCD_CTM.form.CDTextBox.set_value(strCdCtm.substr(0,strCdCtm.length-1));
        			this.ccfCD_CTM.form.DSTextBox.set_value(strDsCtm.substr(0,strDsCtm.length-1));
        		}
        	}
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if(e.row > -1 && e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if ( e.columnid == "CD_SITE" ){
        			this.calFR_DATE.set_value("");
        			this.calTO_DATE.set_value("");
        			this.cboTY_JEOBSU.set_index(0);
        			this.cboTY_COMPLETE.set_index(0);
        			this.cboTY_COMPLETE_ETC.set_index(0);
        			this.ccfCD_ACT.form.CDTextBox.set_value("");
        			this.ccfCD_ACT.form.DSTextBox.set_value("");
        			this.ccfCD_TYPE.form.CDTextBox.set_value("");
        			this.ccfCD_TYPE.form.DSTextBox.set_value("");
        			this.ccfCD_CTM.form.CDTextBox.set_value("");
        			this.ccfCD_CTM.form.DSTextBox.set_value("");
        			this.ccfDS_DONG.form.CDTextBox.set_value("");
        			this.ccfDS_DONG.form.DSTextBox.set_value("");
        			this.ccfDS_HO.form.CDTextBox.set_value("");
        			this.ccfDS_HO.form.DSTextBox.set_value("");
        			this.cboTY_SITE.set_index(0);
        		}

        		if ( e.columnid == "DS_DONG" ){
        			this.ccfDS_HO.form.CDTextBox.set_value("");
        			this.ccfDS_HO.form.DSTextBox.set_value("");
        		}
        	}
        };

        this.divSearch_cboTY_COMPLETE_onitemchanged = function(obj,e)
        {
        	if( obj.value == "0"){
        		this.cboTY_COMPLETE_ETC.set_enable(true);
        	} else {
        		this.cboTY_COMPLETE_ETC.set_value("0");
        		this.cboTY_COMPLETE_ETC.set_enable(false);
        	}
        };

        /*
         *	콤보박스 값 설정
         */
        this.fnSetCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DB");
        	this.dsCombo.setColumn(0, "CD_TYPE", "D1");

        	this.dsCombo2 = new Dataset();
        	this.dsCombo2.addColumn("CD_SYSTEM", "string");
        	this.dsCombo2.addColumn("CD_TYPE", "string");

        	this.dsCombo2.addRow();
        	this.dsCombo2.setColumn(0, "CD_SYSTEM", "DB");
        	this.dsCombo2.setColumn(0, "CD_TYPE", "S4");    // 진행현황

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo combo2=dsCombo2";
        	var outData     = "dsTY_SITE=combo0 dsTY_COMPLETE=combo20";
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboTY_COMPLETE.addEventHandler("onitemchanged",this.divSearch_cboTY_COMPLETE_onitemchanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsTY_COMPLETE.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsTY_COMPLETE_ETC.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsTY_JEOBSU.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DBS_HAJALIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
