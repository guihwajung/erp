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
            this.set_titletext("총괄현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_enableevent("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBSPR_WORKEND_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DBSPR_WORKEND_UPDATE</Col></Row><Row><Col id=\"SP\">DBSPR_AS_PRINT</Col><Col id=\"TARGET\">report</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SEARCH\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DONG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CUNG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CTM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JOB\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GBN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_UMGB\" type=\"STRING\" size=\"256\"/><Column id=\"TY_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"TY_SEARCH\"/><Col id=\"DS_DONG\"/><Col id=\"DS_CUNG\"/><Col id=\"DS_HO\"/><Col id=\"CD_CTM\"/><Col id=\"CD_JOB\"/><Col id=\"CD_ACT\"/><Col id=\"TY_GBN\"/><Col id=\"TY_UMGB\"/><Col id=\"TY_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGR", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">0</Col><Col id=\"DS_CODE\">미완료</Col></Row><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">완료</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">000</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">005</Col><Col id=\"DS_CODE\">입주</Col></Row><Row><Col id=\"CD_CODE\">006</Col><Col id=\"DS_CODE\">사후</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_WORK", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">전체</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">직영</Col><Col id=\"DS_CODE\">직영</Col></Row><Row><Col id=\"DS_CODE\">협력업체</Col><Col id=\"CD_CODE\">협력업체</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSEARCH", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">0</Col><Col id=\"DS_CODE\">동호정보</Col></Row><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">협력업체</Col></Row><Row><Col id=\"DS_CODE\">작업코드</Col><Col id=\"CD_CODE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFMAINSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ccfCD_SITE:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_JAJIK","staCD_CORP:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("공종");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACT","staTY_JAJIK:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFACT_ALL");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_JAJIK01","0.0","ccfCD_SITE:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("검색조건");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_UMGB00","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("관리");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboGR","staTY_UMGB00:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsGR");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divSearchDong","0.0","ccfCD_SITE:10.0","349","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_JAJIK02","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("0");
            obj.set_text("동");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Div("ccfCD_DONG","staTY_JAJIK02:0.0","10.0","99","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.getSetter("CodeFindName").set("DBX_CFASDONGHO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Static("staTY_JAJIK03","ccfCD_DONG:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.set_taborder("2");
            obj.set_text("호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Div("ccfCD_HO","staTY_JAJIK03:0.0","10.0","99","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchDong.form);
            obj.getSetter("CodeFindName").set("DBX_CFASDONGHO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.form.divSearchDong.addChild(obj.name, obj);

            obj = new Button("btnfileDocu","divSearchDong:0.0","ccfCD_SITE:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("점검후사진");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnfileSign","btnfileDocu:0.0","ccfCD_SITE:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("완료사인");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCN_ROW","btnfileSign:0.0","ccfCD_SITE:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("조회건수:");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_UMGB01","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("처리업체");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_WORK","staTY_UMGB01:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsTY_WORK");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_UMGB02","ccboTY_WORK:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboGUBUN","staTY_UMGB02:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsGUBUN");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboSEARCH","0.0","ccfCD_SITE:10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsSEARCH");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divSearchCtm","ccboSEARCH:0.0","ccfCD_SITE:10.0","279","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_JAJIK02","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchCtm.form);
            obj.set_taborder("0");
            obj.set_text("협력업체");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.form.divSearchCtm.addChild(obj.name, obj);

            obj = new Div("ccfCD_CTM","staTY_JAJIK02:0.0","10.0","99","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchCtm.form);
            obj.getSetter("CodeFindName").set("DBX_CFHADO");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.form.divSearchCtm.addChild(obj.name, obj);

            obj = new Div("divSearchJob","divSearchCtm:0.0","ccfCD_SITE:10.0","229","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_JAJIK02","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchJob.form);
            obj.set_taborder("0");
            obj.set_text("작업코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.form.divSearchJob.addChild(obj.name, obj);

            obj = new Div("ccfCD_JOB","staTY_JAJIK02:0.0","10.0","99","24.0",null,null,null,null,null,null,this.divSearch.form.divSearchJob.form);
            obj.getSetter("CodeFindName").set("DBX_CFJOB");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.form.divSearchJob.addChild(obj.name, obj);

            obj = new Div("divData","0","90",null,null,"0","0",null,null,null,null,this);
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_ACT.form.CDTextBox","value","dsSearch","CD_ACT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccboGR","value","dsSearch","TY_GBN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccboTY_WORK","value","dsSearch","TY_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboGUBUN","value","dsSearch","TY_UMGB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccboSEARCH","value","dsSearch","TY_SEARCH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.divSearchDong.form.ccfCD_DONG.form.CDTextBox","value","dsSearch","DS_DONG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.divSearchDong.form.ccfCD_HO.form.CDTextBox","value","dsSearch","DS_HO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.divSearchCtm.form.ccfCD_CTM.form.CDTextBox","value","dsSearch","CD_CTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.divSearchJob.form.ccfCD_JOB.form.CDTextBox","value","dsSearch","CD_JOB");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBS_WORKEND.xfdl", function() {
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

        	this.ccboGR.set_index(0);
        	this.ccboGUBUN.set_index(0);
        	this.ccboTY_WORK.set_index(0);
        	this.ccboSEARCH.set_index(0);

        	if(this.FormInfo.GR_SEARCH >= 7){
        		this.dsSearch.setColumn(0, "CD_SITE", this.AuthClient.CD_DEPT);
        		this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        		this.ccfCD_SITE.set_enable(false);
        	}else{
        		// 타화면에서 오픈시 넘어오는 파라미터 처리
        		if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE)) {
        			this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        			this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        			this.dsSearch.setColumn(0, "CD_CTM", this.getOwnerFrame().CD_CTM);
        			this.ccfCD_CTM.form.DSTextBox.set_value(this.getOwnerFrame().DS_CTM);
        			this.dsSearch.setColumn(0, "CD_JOB", this.getOwnerFrame().CD_JOB);
        			this.dsSearch.setColumn(0, "DS_DONG", this.getOwnerFrame().CD_DONG);
        			this.dsSearch.setColumn(0, "DS_HO", this.getOwnerFrame().CD_HO);
        			//this.dsSearch.setColumn(0, "TY_UMGB", this.getOwnerFrame().cmbGr);
        			this.dsSearch.setColumn(0, "TY_SEARCH", this.getOwnerFrame().cmbSearch);

        			if(this.getOwnerFrame().cmbGubun == "완료"){
        				this.ccboGR.set_index(1);
        			}else{
        				this.ccboGR.set_index(0);
        			}

        			if(this.getOwnerFrame().cmbGr == "전체"){
        				this.ccboGUBUN.set_index(0);
        			}

        			this.FormBtns.Select.click();
        		}
        	}

        	this.fnSearchGb();
        };





        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnFile = this.gfnFormButtonAdd("btnFile", "fnFile");
        	this.btnAsPrint = this.gfnFormButtonAdd("btnAsPrint", "fnAsPrint");
        	this.btnRmNy = this.gfnFormButtonAdd("btnRmNy", "fnRmNy");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfCD_ACT = this.divSearch.form.ccfCD_ACT;
        	this.ccboGR = this.divSearch.form.ccboGR;
        	this.ccboGUBUN = this.divSearch.form.ccboGUBUN;
        	this.ccboTY_WORK = this.divSearch.form.ccboTY_WORK;
        	this.ccboSEARCH = this.divSearch.form.ccboSEARCH;
        	this.ccfCD_JOB = this.divSearch.form.divSearchJob.form.ccfCD_JOB;
        	this.ccfCD_CTM = this.divSearch.form.divSearchCtm.form.ccfCD_CTM;
        	this.ccfCD_DONG = this.divSearch.form.divSearchDong.form.ccfCD_DONG;
        	this.ccfCD_HO = this.divSearch.form.divSearchDong.form.ccfCD_HO;

        	this.staCN_ROW = this.divSearch.form.staCN_ROW;

        	this.btnfileDocu = this.divSearch.form.btnfileDocu;
        	this.btnfileSign = this.divSearch.form.btnfileSign;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//this.ccfCD_ACT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_ACT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CTM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_JOB.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DONG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_HO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBS_WORKEND");
        	this.dxGrid.set_selecttype("cell");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("TY_SEARCH", "int");
        	this.dsSelect.addColumn("DS_DONG", "string");
        	this.dsSelect.addColumn("DS_CUNG", "string");
        	this.dsSelect.addColumn("DS_HO", "string");
        	this.dsSelect.addColumn("CD_CTM", "string");
        	this.dsSelect.addColumn("CD_JOB", "string");
        	this.dsSelect.addColumn("CD_ACT", "string");
        	this.dsSelect.addColumn("TY_GBN", "int");
        	this.dsSelect.addColumn("TY_UMGB", "string");
        	this.dsSelect.addColumn("TY_WORK", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("CD_JOB", "string");
        	this.dsUpdate.addColumn("TY_UMGB", "string");
        	this.dsUpdate.addColumn("DT_JOBEND", "string");
        	this.dsUpdate.addColumn("PN_JOBNAME", "string");
        	this.dsUpdate.addColumn("RM_JOBEND", "string");
        	this.dsUpdate.addColumn("RM_NY", "string");
        	this.dsUpdate.addColumn("CD_UH", "string");
        	this.dsUpdate.addColumn("CD_WI", "string");
        	this.dsUpdate.addColumn("CD_ACT", "string");
        	this.dsUpdate.addColumn("CD_SIL", "string");
        	this.dsUpdate.addColumn("CD_PART", "string");
        	this.dsUpdate.addColumn("CD_DETAIL_TYPE", "string");
        	this.dsUpdate.addColumn("DS_DONG", "string");
        	this.dsUpdate.addColumn("DS_CUNG", "string");
        	this.dsUpdate.addColumn("DS_HO", "string");
        	this.dsUpdate.addColumn("TY_WORK", "string");
        	this.dsUpdate.addColumn("CD_JOBNAME", "string");
        	this.dsUpdate.addColumn("CD_CTM", "string");
        	this.dsUpdate.addColumn("NO_HADOCONT", "string");
        	this.dsUpdate.addColumn("NO_SCORE", "bigdecimal");
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

        	var cdHo = "";
        	var cdCung = "";
        	var cdDong = this.dsSearch.getColumn(0, "DS_DONG");

        	if(!this.gfnIsNull(this.dsSearch.getColumn(0, "DS_HO")) && this.dsSearch.getColumn(0, "DS_HO") != "공용"){
        		cdCung = this.dsSearch.getColumn(0, "DS_HO").substr(0, 2); //층을 넣어둔다.
                cdHo = "0" + this.dsSearch.getColumn(0, "DS_HO").substr(2, 2); //호를 넣어 둔다.
        	}else if(this.dsSearch.getColumn(0, "DS_HO") == "공용"){
        		cdCung = "00";
                cdHo = "000";
        	}

        	if(this.dsSearch.getColumn(0, "TY_SEARCH") != "0"){
        		cdHo = "";
        		cdCung = "";
        		cdDong = "";
        	}

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "TY_SEARCH", this.dsSearch.getColumn(0, "TY_SEARCH"));
        	this.dsSelect.setColumn(0, "DS_DONG", cdDong);
        	this.dsSelect.setColumn(0, "DS_CUNG", cdCung);
        	this.dsSelect.setColumn(0, "DS_HO", cdHo);
        	this.dsSelect.setColumn(0, "CD_CTM", this.dsSearch.getColumn(0, "CD_CTM"));
        	this.dsSelect.setColumn(0, "CD_JOB", this.dsSearch.getColumn(0, "CD_JOB"));
        	this.dsSelect.setColumn(0, "CD_ACT", this.dsSearch.getColumn(0, "CD_ACT"));
        	this.dsSelect.setColumn(0, "TY_GBN", this.dsSearch.getColumn(0, "TY_GBN"));
        	this.dsSelect.setColumn(0, "TY_UMGB", this.dsSearch.getColumn(0, "TY_UMGB"));
        	this.dsSelect.setColumn(0, "TY_WORK", this.dsSearch.getColumn(0, "TY_WORK"));

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


        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();
        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		var cdHo = "";
        		var cdCung = "";

        		if(!this.gfnIsNull(this.dsList.getColumn(i, "DS_HO")) && this.dsList.getColumn(i, "DS_HO") != "공용"){
        			cdCung = this.dsList.getColumn(i, "DS_HO").substr(0, 2); //층을 넣어둔다.
        			cdHo = "0" + this.dsList.getColumn(i, "DS_HO").substr(2, 2); //호를 넣어 둔다.
        		}else if(this.dsList.getColumn(i, "DS_HO") == "공용"){
        			cdCung = "00";
        			cdHo = "000";
        		}

        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsUpdate.setColumn(nrow, "CD_JOB", this.dsList.getColumn(i, "CD_JOB"));
        				this.dsUpdate.setColumn(nrow, "TY_UMGB", this.dsList.getColumn(i, "TY_UMGB"));
        				this.dsUpdate.setColumn(nrow, "DT_JOBEND", nexacro.replaceAll(this.dsList.getColumn(i, "DT_JOBEND"), "-", ""));
        				this.dsUpdate.setColumn(nrow, "PN_JOBNAME", this.dsList.getColumn(i, "PN_JOBNAME"));
        				this.dsUpdate.setColumn(nrow, "RM_JOBEND", this.dsList.getColumn(i, "RM_JOBEND"));
        				this.dsUpdate.setColumn(nrow, "RM_NY", this.dsList.getColumn(i, "RM_NY"));
        				this.dsUpdate.setColumn(nrow, "CD_UH", this.dsList.getColumn(i, "CD_UH"));
        				this.dsUpdate.setColumn(nrow, "CD_WI", this.dsList.getColumn(i, "CD_WI"));
        				this.dsUpdate.setColumn(nrow, "CD_ACT", this.dsList.getColumn(i, "CD_ACT"));
        				this.dsUpdate.setColumn(nrow, "CD_SIL", this.dsList.getColumn(i, "CD_SIL"));
        				this.dsUpdate.setColumn(nrow, "CD_PART", this.dsList.getColumn(i, "CD_PART"));
        				this.dsUpdate.setColumn(nrow, "CD_DETAIL_TYPE", this.dsList.getColumn(i, "CD_DETAIL_TYPE"));
        				this.dsUpdate.setColumn(nrow, "DS_DONG", this.dsList.getColumn(i, "DS_DONG"));
        				this.dsUpdate.setColumn(nrow, "DS_CUNG", cdCung);
        				this.dsUpdate.setColumn(nrow, "DS_HO", cdHo);
        				this.dsUpdate.setColumn(nrow, "TY_WORK", this.dsList.getColumn(i, "TY_WORK"));
        				this.dsUpdate.setColumn(nrow, "CD_JOBNAME", "");
        				this.dsUpdate.setColumn(nrow, "CD_CTM", this.dsList.getColumn(i, "CD_CTM"));
        				this.dsUpdate.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(i, "NO_HADOCONT"));
        				this.dsUpdate.setColumn(nrow, "NO_SCORE", this.dsList.getColumn(i, "NO_SCORE"));
        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsUpdate";
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
        	}

        	if(this.dsSearch.getColumn(0, "TY_SEARCH") == "1"){
        		if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_CTM"))) {
        			validate = false;
        			// Alert후 실행할 처리
        			this.fnVaidateCallback = function() {
        				this.ccfCD_CTM.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("협력업체는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		}
        	}else if(this.dsSearch.getColumn(0, "TY_SEARCH") == "2"){
        		if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_JOB"))) {
        			validate = false;
        			// Alert후 실행할 처리
        			this.fnVaidateCallback = function() {
        				this.ccfCD_JOB.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("작업코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
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

        		//if(this.dsList.rowcount > 0){
        		if(this.gfnGetFormStatus(this) == "X") {
        			this.staCN_ROW.set_text("조회건수: 0");

        			this.btnfileDocu.set_enable(false);
        			this.btnfileSign.set_enable(false);
        		}else{
        			this.staCN_ROW.set_text("조회건수: " + (this.dsList.rowcount-1).toString());	// 필터로우를 row카운트에 포함시키기때문에 -1 해준다

        			this.btnfileDocu.set_enable(true);
        			this.btnfileSign.set_enable(true);
        		}
        		this.divSearch.form.resetScroll();

        	} else if(svcID == "save") {
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

        	if(id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_AUTHDEPT", this.AuthClient.CD_DEPT);
        	}

        	if(id == "ccfCD_CTM") {
        		var CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        		if(this.gfnIsNull(CD_SITE)){
        			this.gfnAlert("현장코드를 먼저 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	}

        	if(id == "ccfCD_ACT") {
        		dsUserParam.setColumn(nrow, "CD_GUBUN", "S5");
        	}
        	if(id == "ccfCD_JOB") {
        		var CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        		if(this.gfnIsNull(CD_SITE)){
        			this.gfnAlert("현장코드를 먼저 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "TY_UMGB", "");
        	}
        	if(id == "ccfCD_DONG") {
        		var CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        		if(this.gfnIsNull(CD_SITE)){
        			this.gfnAlert("현장코드를 먼저 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "TY_TYPE", "DONG");
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "VALUE1", "");
        		dsUserParam.setColumn(nrow, "VALUE2", "");
        	}
        	if(id == "ccfCD_HO") {
        		var CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        		if(this.gfnIsNull(CD_SITE)){
        			this.gfnAlert("현장코드를 먼저 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "TY_TYPE", "HO");
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		dsUserParam.setColumn(nrow, "VALUE1", this.dsSearch.getColumn(0, "DS_DONG"));
        		dsUserParam.setColumn(nrow, "VALUE2", "");
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	if(id == "ccfCD_SITE") {
        		this.ccfCD_ACT.form.fnCodeFindClear();
        		this.ccfCD_CTM.form.fnCodeFindClear();
        		this.ccfCD_JOB.form.fnCodeFindClear();
        		this.ccfCD_DONG.form.fnCodeFindClear();
        		this.ccfCD_HO.form.fnCodeFindClear();
        	}
        }
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

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		this.staCN_ROW.set_text("조회건수:");
        		this.divSearch.form.resetScroll();

        		if(e.columnid == "TY_SEARCH"){
        			this.fnSearchGb();
        		}
        	}
        };

        // 검색조건콤보 변경시 이벤트
        this.fnSearchGb = function() {
        	if(this.dsSearch.getColumn(0, "TY_SEARCH") == "0"){
        		this.divSearch.form.divSearchDong.set_visible(true);
        		this.divSearch.form.divSearchJob.set_visible(false);
        		this.divSearch.form.divSearchCtm.set_visible(false);

        		this.dsSearch.setColumn(0, "CD_JOB", "");
        		this.dsSearch.setColumn(0, "CD_CTM", "");
        	}else if(this.dsSearch.getColumn(0, "TY_SEARCH") == "1"){
        		this.divSearch.form.divSearchDong.set_visible(false);
        		this.divSearch.form.divSearchJob.set_visible(false);
        		this.divSearch.form.divSearchCtm.set_visible(true);

        		this.dsSearch.setColumn(0, "DS_DONG", "");
        		this.dsSearch.setColumn(0, "DS_HO", "");
        		this.dsSearch.setColumn(0, "CD_JOB", "");
        	}else if(this.dsSearch.getColumn(0, "TY_SEARCH") == "2"){
        		this.divSearch.form.divSearchDong.set_visible(false);
        		this.divSearch.form.divSearchJob.set_visible(true);
        		this.divSearch.form.divSearchCtm.set_visible(false);

        		this.dsSearch.setColumn(0, "DS_DONG", "");
        		this.dsSearch.setColumn(0, "DS_HO", "");
        		this.dsSearch.setColumn(0, "CD_CTM", "");
        	}
        };


        // 첨부파일 버튼 클릭시 팝업화면 호출
        this.fnFile = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var nRow = this.dsList.rowposition;
        	var fileManager = {};
        	fileManager.CD_GUBUN = "DB01";
        	fileManager.CD_DIR = [this.dsSearch.getColumn(0,"CD_SITE"), this.dsList.getColumn(nRow, "CD_JOB"), this.dsList.getColumn(nRow, "TY_UMGB")];

        	if(this.FormInfo.TY_AUTH == "R") {
        		fileManager.IS_READONLY = true;
        	} else {
        		fileManager.IS_READONLY = false;
        	}

        	this.gfnFileManager(fileManager, "fnFileCallback");
        }

        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수
        	/*
        	// 파일개수를 다시 셋팅
        	this.dsList.set_enableevent(false);
        	if(val.Cnt == 0) {
        		this.dsList.setColumn(this.dsList.rowposition, "FILE_ATTACH", "첨부");
        	} else {
        		this.dsList.setColumn(this.dsList.rowposition, "FILE_ATTACH", "첨부(" + val.Cnt + ")");
        	}
        	this.dsList.set_enableevent(true);
        	*/
        };

        // // 작업완료확인서 버튼 클릭시 팝업화면 호출
        // this.fnAsPrint = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        // 	// 선택된 row가 있을 경우에만 팝업을 띄움
        // 	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        //
        // 	var param = {};
        //
        // 	//param.CD_ACNTUNIT = this.dsSearch.getColumn(0, "CD_ACNTUNIT");
        //     //param.NO_DONG = this.dsSearch.getColumn(0, "NO_DONG");
        //
        // 	// 화면 오픈.
        // 	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        // 	// 타 모듈 화면 호출시 지정할것.
        //
        // 	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBS_WORKDOCUPRINT", "fnAsPrintCallback", param);
        // }

        // 완료확인서출력 버튼 클릭시 팝업화면 호출
        this.fnAsPrint = function(obj,e) {

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("CD_SITE", "string");
        	this.dsReport.addColumn("NO_JOB", "string");
        	this.dsReport.addColumn("GUBUN", "string");

        	this.dsReport.clearData();
        	this.dsReport.addRow();

        	this.dsReport.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsReport.setColumn(0, "NO_JOB", this.dsList.getColumn(this.dsList.rowposition, "CD_JOB"));
        	this.dsReport.setColumn(0, "GUBUN", "Y");

        	var strSvcId    = "report";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "report=dsReport";
        	var outData     = "dsList2=report0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        	var inProc		= "_dsProc";
        	//var inParam 	= "params=dsReport1";	// 조회SP이외 사용할 정보
        	var inParam 	= "";						// 필요없는 경우 생략
        	var inData      = "report=dsReport";
        	var reportpath  = "/db/dbs/DBS_WORKDONE.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);

        }

        this.fnAsPrintCallback =  function(svcID, val) {
        	if(val == true) {
        		//this.FormBtns.Select.click();
        	}
        };


        // 하자내용변경 버튼 클릭시 팝업화면 호출
        this.fnRmNy = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	//if (this.dsListSub.rowcount < 1) { return false; }

        	var param = {};
        	var nRow = this.dsList.rowposition;

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
            param.CD_JOB = this.dsList.getColumn(nRow, "CD_JOB");
        	param.RM_NY = this.dsList.getColumn(nRow, "RM_NY");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DBS_RMNY_DLG", "fnRmNyCallback", param);
        }

        this.fnRmNyCallback =  function(svcID, val) {
        	if(val == true) {
        		this.FormBtns.Select.click();
        	}
        };



        // 점검후사진 클릭 이벤트
        this.divSearch_btnfileDocu_onclick = function(obj,e)
        {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var nRow = this.dsList.rowposition;

        	var cdHo = "";
        	var cdCung = "";

        	if(!this.gfnIsNull(this.dsList.getColumn(nRow, "DS_HO")) && this.dsList.getColumn(nRow, "DS_HO") != "공용"){
        		cdCung = this.dsList.getColumn(nRow, "DS_HO").substr(0, 2); //층을 넣어둔다.
        		cdHo = "0" + this.dsList.getColumn(nRow, "DS_HO").substr(2, 2); //호를 넣어 둔다.
        	}else if(this.dsList.getColumn(nRow, "DS_HO") == "공용"){
        		cdCung = "00";
        		cdHo = "000";
        	}

        	var param = {};

        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
            param.CD_JOB = this.dsList.getColumn(nRow, "CD_JOB");
        	param.TY_SEARCH = this.dsSearch.getColumn(0, "TY_SEARCH");
        	param.TY_GBN = this.dsSearch.getColumn(0, "TY_GBN");
        	param.TY_UMGB = this.dsList.getColumn(nRow, "TY_UMGB");
        	param.DT_JOBEND = this.dsList.getColumn(nRow, "DT_JOBEND");
        	param.CD_SIL = this.dsList.getColumn(nRow, "CD_SIL");
        	param.CD_PART = this.dsList.getColumn(nRow, "CD_PART");
        	param.CD_DETAIL_TYPE = this.dsList.getColumn(nRow, "CD_DETAIL_TYPE");
        	param.DS_DONG = this.dsList.getColumn(nRow, "DS_DONG");
        	param.DS_CUNG = cdCung;
        	param.DS_HO = cdHo;

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen("DBZ", "DBS_WORKENDPIC", "", param);
        };

        // 완료사인 클릭 이벤트
        this.divSearch_btnfileSign_onclick = function(obj,e)
        {
        	var cdHo = "";
        	var cdCung = "";

        	var nRow = this.dsList.rowposition;

        	if(!this.gfnIsNull(this.dsList.getColumn(nRow, "DS_HO")) && this.dsList.getColumn(nRow, "DS_HO") != "공용"){
        		cdCung = this.dsList.getColumn(nRow, "DS_HO").substr(0, 2); //층을 넣어둔다.
        		cdHo = "0" + this.dsList.getColumn(nRow, "DS_HO").substr(2, 2); //호를 넣어 둔다.
        	}else if(this.dsList.getColumn(nRow, "DS_HO") == "공용"){
        		cdCung = "00";
        		cdHo = "000";
        	}

        	var param = {};
        	param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	param.CD_JOB = this.dsList.getColumn(nRow, "CD_JOB");
        	param.TY_SEARCH = this.dsSearch.getColumn(0, "TY_SEARCH");
        	param.TY_GBN = this.dsSearch.getColumn(0, "TY_GBN");
        	param.TY_UMGB = this.dsList.getColumn(nRow, "TY_UMGB");
        	param.DT_JOBEND = this.dsList.getColumn(nRow, "DT_JOBEND");
        	param.CD_SIL = this.dsList.getColumn(nRow, "CD_SIL");
        	param.CD_PART = this.dsList.getColumn(nRow, "CD_PART");
        	param.CD_DETAIL_TYPE = this.dsList.getColumn(nRow, "CD_DETAIL_TYPE");
        	param.DS_DONG = this.dsList.getColumn(nRow, "DS_DONG");
        	param.DS_CUNG = cdCung;
        	param.DS_HO = cdHo;

        	this.gfnFormOpen("DBZ", "DBS_WORKENDSIGN", "fnfileSignCallback", param);
        };

        this.fnfileSignCallback =  function(svcID, val) {
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		this.dsList.set_enableevent(false);
        		this.dsList.setColumn(i, "YN_CHK", "0");
        		this.dsList.set_enableevent(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_SITE.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_ACT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.divSearchDong.form.ccfCD_DONG.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.divSearchDong.form.ccfCD_HO.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.btnfileDocu.addEventHandler("onclick",this.divSearch_btnfileDocu_onclick,this);
            this.divSearch.form.btnfileSign.addEventHandler("onclick",this.divSearch_btnfileSign_onclick,this);
            this.divSearch.form.divSearchCtm.form.ccfCD_CTM.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.divSearchJob.form.ccfCD_JOB.addEventHandler("onclick",this.Common_onclick,this);
        };
        this.loadIncludeScript("DBS_WORKEND.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
