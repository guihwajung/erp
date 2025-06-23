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
            this.set_titletext("완성주택(아파트외)관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_COMPLETION_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHAPR_COMPLETION_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHAPR_COMPLETION_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHAPR_COMPLETION_DELETE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHAPR_COMPLETION_WRITE</Col></Row><Row><Col id=\"TARGET\">issueSlip</Col><Col id=\"SP\">DHAPR_COMPLETION_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">cancelSlip</Col><Col id=\"SP\">DHAPR_COMPLETION_CANCELSLIP</Col></Row><Row><Col id=\"TARGET\">selectSale</Col><Col id=\"SP\">DHAPR_DL_AMSALE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc1", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_COMPLETION_BEFOR_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHAPR_COMPLETION_BEFOR_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHAPR_COMPLETION_BEFOR_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHAPR_COMPLETION_BEFOR_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsREASE_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">S</Col><Col id=\"DS_CODE\">매출</Col></Row><Row><Col id=\"CD_CODE\">R</Col><Col id=\"DS_CODE\">임대</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_FR\" type=\"STRING\" size=\"256\"/><Column id=\"YM_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_DEPT\"/><Col id=\"YM_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSale", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCorp","sta00:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCorp:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("사업지");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDept","sta01:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","ccfDept:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ctclYM_WORK:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("작업년월");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_ASSET","staYM_WORK:0.0","10.0","104","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("보유자산여부");
            obj.set_truevalue("S");
            obj.set_falsevalue("A");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoDATE_TYPE","chkYN_ASSET:0.0","10.0","221","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divSearch_form_rdoDATE_TYPE_innerdataset = new nexacro.NormalDataset("divSearch_form_rdoDATE_TYPE_innerdataset", obj);
            divSearch_form_rdoDATE_TYPE_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">기준년월</Col><Col id=\"codecolumn\">D</Col></Row><Row><Col id=\"datacolumn\">매출일자(임대개시일)</Col><Col id=\"codecolumn\">S</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rdoDATE_TYPE_innerdataset);
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_FR","rdoDATE_TYPE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_TO","ctclYM_FR:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTXT","ctclYM_TO:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Tab("tabData","0","36",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.tabData);
            obj.set_text("완성주택");
            this.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid","5","5",null,null,"5","5",null,null,null,null,this.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_autofittype("none");
            obj._setContents("");
            this.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.tabData);
            obj.set_text("완성주택(분할전)");
            this.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","5","5",null,null,"5","5",null,null,null,null,this.tabData.tab2.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.tabData.tab2.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.tabData);
            obj.set_text("완성상가");
            this.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid3","5","5",null,null,"5","5",null,null,null,null,this.tabData.tab3.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.tabData.tab3.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.tabData);
            obj.set_text("완성상가(분할전)");
            this.tabData.addChild(obj.name, obj);

            obj = new Grid("objGrid4","5","5",null,null,"5","5",null,null,null,null,this.tabData.tab4.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.tabData.tab4.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.ccfDept.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCorp.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclYM_FR.form.TextBox","value","dsSearch","YM_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclYM_TO.form.TextBox","value","dsSearch","YM_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.rdoDATE_TYPE","value","dsSearch","DATE_TYPE");
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
        this.registerScript("DHA_COMPLETION.xfdl", function() {
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

        	// 법인코드에 포커스추가
        	this.ccfCorp.form.CDTextBox.setFocus();

        	// 분할전탭 임시숨김처리
        	this.tabData.tab2.set_tabbuttonheight(1);
        	this.tabData.tab2.set_tabbuttonwidth(1);
        	this.tabData.tab4.set_tabbuttonheight(1);
        	this.tabData.tab4.set_tabbuttonwidth(1);

        	var toDay = this.gfnGetDate().substring(0,6);

        	this.ctclYM_FR.form.TextBox.set_value(toDay);
        	this.ctclYM_TO.form.TextBox.set_value(toDay);
        	this.ctclYM_WORK.form.TextBox.set_value(toDay);

        	this.rdoDATE_TYPE.set_value("D");

        	this.staTXT.set_visible(false);
        	this.ctclYM_TO.set_visible(false);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {

        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnDataCreate = this.gfnFormButtonAdd("DataCreate", "fnDataCreate");   //자료생성
        	this.btnSearchSlip = this.gfnFormButtonAdd("SearchSlip", "fnSearchSlip"); 	//전표조회
        	this.btnIssueSlip  = this.gfnFormButtonAdd("IssueSlip", "fnIssueSlip"); 	//잔금할부전표발행
        	//this.btnIssueSlipN = this.gfnFormButtonAdd("IssueSlipN", "fnIssueSlip"); 	//신규분양전표발행
        	this.btnIssueSlipR  = this.gfnFormButtonAdd("IssueSlipR", "fnIssueSlip"); 	//임대개시전표발행
        	this.btnCancelSlip = this.gfnFormButtonAdd("CancelSlip", "fnCancelSlip"); 	//전표취소
        	this.btnSearchSale = this.gfnFormButtonAdd("SearchSale", "fnSearchSale"); 	//매출조회
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCorp = this.divSearch.form.ccfCorp;
        	this.ccfDept = this.divSearch.form.ccfDept;
        	this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;
        	this.chkYN_ASSET = this.divSearch.form.chkYN_ASSET;
        	this.grSearch = this.FormInfo.GR_SEARCH;
        	this.dxGrid  = this.tabData.tab1.form.objGrid;
        	this.dxGrid2 = this.tabData.tab2.form.objGrid2;
        	this.dxGrid3 = this.tabData.tab3.form.objGrid3;
        	this.dxGrid4 = this.tabData.tab4.form.objGrid4;

        	this.rdoDATE_TYPE = this.divSearch.form.rdoDATE_TYPE;
        	this.ctclYM_FR = this.divSearch.form.ctclYM_FR;
        	this.ctclYM_TO = this.divSearch.form.ctclYM_TO;
        	this.staTXT = this.divSearch.form.staTXT;

        	this.vSlipType = "Y";

        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCorp.CodeFindName = "DHX_CFCORP";
        	this.ccfCorp.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCorp.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfDept.CodeFindName = "DHX_CFACNTUNIT";
        	this.ccfDept.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ctclYM_FR.AfterCDTextChanged = "fnAfterCDTextChanged";

        	if (this.gfnIsNull(this.ccfCorp.form.CDTextBox.value)) {
        		this.ccfCorp.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCorp.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	if (this.gfnIsNull(this.ctclYM_WORK.form.TextBox.value)) {
        		//this.ctclYM_WORK.form.TextBox.set_value(this.gfnGetDate().substr(0,6));
        	}

        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_COMPLETION");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.gfnGridInit(this.dxGrid2, this.dsList1, "DH", "DHA_COMPLETION_BEFOR");
        	this.dxGrid2.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.gfnGridInit(this.dxGrid3, this.dsList2, "DH", "DHA_COMPLETION_SHOP");
        	this.dxGrid3.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.gfnGridInit(this.dxGrid4, this.dsList3, "DH", "DHA_COMPLETION_SHOP_BEFOR");
        	this.dxGrid4.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";

        	var colDS_DEPT = this.dxGrid.getBindCellIndex("body", "DS_DEPT");
        	this.dxGrid.setCellProperty("body", colDS_DEPT, "subsumtext", "소계");
        	this.dxGrid.setCellProperty("summ", colDS_DEPT, "textAlign", "center");
        	this.dxGrid.setCellProperty("summ", colDS_DEPT, "text", "총계");

        	var colDS_DEPT2 = this.dxGrid2.getBindCellIndex("body", "DS_DEPT");
        	this.dxGrid2.setCellProperty("body", colDS_DEPT2, "subsumtext", "소계");
        	this.dxGrid2.setCellProperty("summ", colDS_DEPT2, "textAlign", "center");
        	this.dxGrid2.setCellProperty("summ", colDS_DEPT2, "text", "총계");

        	var colDS_DEPT3 = this.dxGrid3.getBindCellIndex("body", "DS_DEPT");
        	this.dxGrid3.setCellProperty("body", colDS_DEPT3, "subsumtext", "소계");
        	this.dxGrid3.setCellProperty("summ", colDS_DEPT3, "textAlign", "center");
        	this.dxGrid3.setCellProperty("summ", colDS_DEPT3, "text", "총계");

        	var colDS_DEPT4 = this.dxGrid4.getBindCellIndex("body", "DS_DEPT");
        	this.dxGrid4.setCellProperty("body", colDS_DEPT4, "subsumtext", "소계");
        	this.dxGrid4.setCellProperty("summ", colDS_DEPT4, "textAlign", "center");
        	this.dxGrid4.setCellProperty("summ", colDS_DEPT4, "text", "총계");

        	// ToDo
        	// 권한체크 - 해당부서내역만 조회가능
        	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 2) {
        		this.ccfCorp.set_enable(false);
        	}

        	this.divSearch.form.chkYN_ASSET.set_value("A");		//보유자산 체크

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        	this.dxGrid.addEventHandler("oncellclick", this.fnGrid_Cellclick, this);
        	this.dxGrid3.addEventHandler("oncellclick", this.fnGrid_Cellclick, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	//this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("TY_TYPE", "string");
        	this.dsSelect.addColumn("YN_ASSET", "string");
        	this.dsSelect.addColumn("DATE_TYPE", "string");
        	this.dsSelect.addColumn("YM_FR", "string");
        	this.dsSelect.addColumn("YM_TO", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("YM_WORK", "string");
        	this.dsInsert.addColumn("CD_DEPT", "string");
        	this.dsInsert.addColumn("TY_TYPE", "string");
        	this.dsInsert.addColumn("YM_COMPLETION", "string");
        	this.dsInsert.addColumn("NO_SIZE", "string");
        	this.dsInsert.addColumn("NO_DONG", "string");
        	this.dsInsert.addColumn("NO_HO", "string");
        	this.dsInsert.addColumn("AM_BUILDING", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_LAND", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_BUILDING_UP", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_BUILDING_DOWN", "BIGDECIMAL");
        	this.dsInsert.addColumn("YM_SALES", "string");
        	this.dsInsert.addColumn("YN_INST", "string");
        	this.dsInsert.addColumn("YM_REASE", "string");
        	this.dsInsert.addColumn("AM_LOSS", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_LOSS_UP", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_LOSS_DOWN", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_LOSS_END", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_SALE", "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_OPTION", "BIGDECIMAL");
        	this.dsInsert.addColumn("ID_USER", "string");
        	this.dsInsert.addColumn("CD_CORP", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("YM_WORK", "string");
        	this.dsUpdate.addColumn("CD_DEPT", "string");
        	this.dsUpdate.addColumn("TY_TYPE", "string");
        	this.dsUpdate.addColumn("YM_COMPLETION", "string");
        	this.dsUpdate.addColumn("NO_SIZE", "string");
        	this.dsUpdate.addColumn("NO_DONG", "string");
        	this.dsUpdate.addColumn("NO_HO", "string");
        	this.dsUpdate.addColumn("AM_BUILDING", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_LAND", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_BUILDING_UP", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_BUILDING_DOWN", "BIGDECIMAL");
        	this.dsUpdate.addColumn("YM_SALES", "string");
        	this.dsUpdate.addColumn("YN_INST", "string");
        	this.dsUpdate.addColumn("YM_REASE", "string");
        	this.dsUpdate.addColumn("AM_LOSS", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_LOSS_UP", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_LOSS_DOWN", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_LOSS_END", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_SALE", "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_OPTION", "BIGDECIMAL");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");


        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("YM_WORK", "string");
        	this.dsDelete.addColumn("CD_DEPT", "string");
        	this.dsDelete.addColumn("TY_TYPE", "string");
        	this.dsDelete.addColumn("NO_DONG", "string");
        	this.dsDelete.addColumn("NO_HO", "string");
        	this.dsDelete.addColumn("CD_CORP", "string");

        	//자료생성용 데이터셋
        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("YM_WORK", "string");
        	this.dsCreate.addColumn("ID_USER", "string");

        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("CD_CORP", "string");			//법인코드
        	this.dsIssueSlip.addColumn("CD_DEPT", "string");			//현장코드
        	this.dsIssueSlip.addColumn("YM_WORK", "string");			//작업년월
        	this.dsIssueSlip.addColumn("TY_TYPE", "string");			//아파트:A, 상가:S
        	this.dsIssueSlip.addColumn("CD_SITE_BH", "string");			//발행부서
        	this.dsIssueSlip.addColumn("YN_INST", "string");			//매출구분(잔금할부:Y / 신규분양매출:N)
        	this.dsIssueSlip.addColumn("ID_TRANS", "string");			//사용자 아이디

        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_TRADE", "string");		//전표번호
        	this.dsCancelSlip.addColumn("YM_WORK", "string");		//작업년월

        	this.dsSelectSale = new Dataset();
        	this.dsSelectSale.addColumn("CD_CORP" , "string");		//법인코드
        	this.dsSelectSale.addColumn("DT_WORK" , "string");		//작업년월
        	this.dsSelectSale.addColumn("TY_GUBUN", "string");		//조회구분(1:완성주택, 2:건물, 3:리스, 4:임대)
        	this.dsSelectSale.addColumn("APT_ST_GU", "string");		//조회구분(1:아파트, 2:상가)
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	var ty_type;
        	switch(this.tabData.tabindex) {
        		case 0:
        			this.gfnGridBeforeSelect(this.dxGrid);
        			this.ty_type = "A";
        			var inProc		= "_dsProc";
        			var outData     = "dsList=select0";
        			break;
        		case 1:
        			this.gfnGridBeforeSelect(this.dxGrid2);
        			this.ty_type = "A";
        			var inProc		= "_dsProc1";
        			var outData     = "dsList1=select0";
        			break;
        		case 2:
        			this.gfnGridBeforeSelect(this.dxGrid3);
        			this.ty_type = "S";
        			var inProc		= "_dsProc";
        			var outData     = "dsList2=select0";
        			break;
        		case 3:
        			this.gfnGridBeforeSelect(this.dxGrid4);
        			this.ty_type = "S";
        			var inProc		= "_dsProc1";
        			var outData     = "dsList3=select0";
        			break;
        	}

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "TY_TYPE"	, this.ty_type);
        	this.dsSelect.setColumn(0, "CD_CORP"	, this.ccfCorp.form.CDTextBox.text);
        	//this.dsSelect.setColumn(0, "YM_WORK"	, this.ctclYM_WORK.form.TextBox.value);
        	this.dsSelect.setColumn(0, "CD_DEPT"	, this.ccfDept.form.CDTextBox.text);
        	this.dsSelect.setColumn(0, "YN_ASSET"   , this.chkYN_ASSET.value);

        	this.dsSelect.setColumn(0, "DATE_TYPE"   , this.rdoDATE_TYPE.value);
        	this.dsSelect.setColumn(0, "YM_FR"       , this.ctclYM_FR.form.TextBox.value);
        	this.dsSelect.setColumn(0, "YM_TO"       , (this.rdoDATE_TYPE.value == "S" ? this.ctclYM_TO.form.TextBox.value : ""));
        	//this.dsSelect.setColumn(0, "YN_ASSET"   , "A");

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inData      = "select=dsSelect";
        	//var outData     = "dsList=select0";
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
        	var objDs, objGrid;
        	switch(this.tabData.tabindex) {
        		case 0:
        			objDs = this.dsList;
        			objGrid = this.dxGrid;
        			break;
        		case 1:
        			objDs = this.dsList1;
        			objGrid = this.dxGrid2;
        			break;
        		case 2:
        			objDs = this.dsList2;
        			objGrid = this.dxGrid3;
        			break;
        		case 3:
        			objDs = this.dsList3;
        			objGrid = this.dxGrid4;
        			break;
        	}

        	var nrow = this.gfnGridAdd(objGrid);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {


        	var objDs, objGrid;
        	switch(this.tabData.tabindex) {
        		case 0:
        			objDs = this.dsList;
        			objGrid = this.dxGrid;
        			break;
        		case 1:
        			objDs = this.dsList1;
        			objGrid = this.dxGrid2;
        			break;
        		case 2:
        			objDs = this.dsList2;
        			objGrid = this.dxGrid3;
        			break;
        		case 3:
        			objDs = this.dsList3;
        			objGrid = this.dxGrid4;
        			break;
        	}

        	if(!this.gfnGridIsRow(objGrid)) return;

        	//전표발행된 데이터면 행삭제 불가
        	if(!this.gfnIsNull(this.gfnTrim(objDs.getColumn(objDs.rowposition, "CD_TRADE")))){
        		this.gfnAlert("전표발행된 데이터는 삭제할수 없습니다.");
        		return;
        	}

        	//전표발행된 데이터면 행삭제 불가
        	if(!this.gfnIsNull(objDs.getColumn(objDs.rowposition, "YM_SALES")) || !this.gfnIsNull(objDs.getColumn(objDs.rowposition, "YM_REASE"))){
        		this.gfnAlert("매출/임대개시된 데이터는 삭제할수 없습니다.");
        		return;
        	}

        	this.gfnGridDel(objGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	var dsall;
        	var _ty_type;
        	var objGrid;
        	switch(this.tabData.tabindex) {
        		case 0:
        			this.dxGrid.updateToDataset();
        			this.dsall = "dsList";
        			this._ty_type = "A";
        			var inProc	  = "_dsProc";
        			objGrid = this.dxGrid;
        			break;
        		case 1:
        			this.dxGrid2.updateToDataset();
        			this.dsall = "dsList1";
        			this._ty_type = "A";
        			var inProc	  = "_dsProc1";
        			objGrid = this.dxGrid2;
        			break;
        		case 2:
        			this.dxGrid3.updateToDataset();
        			this.dsall = "dsList2";
        			this._ty_type = "S";
        			var inProc	  = "_dsProc";
        			objGrid = this.dxGrid3;
        			break;
        		case 3:
        			this.dxGrid4.updateToDataset();
        			this.dsall = "dsList3";
        			this._ty_type = "S";
        			var inProc	  = "_dsProc1";
        			objGrid = this.dxGrid4;
        			break;
        	}

        	if (!this.gfnGridValidate(objGrid)) return;
        	if (!this.fnDataValidate()) return;

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.objects[this.dsall].rowcount; i++) {
        		var flag = this.gfnGetFlag(this.objects[this.dsall], i);

        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "YM_WORK", this.ctclYM_WORK.form.TextBox.value);
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.ccfCorp.form.CDTextBox.value);
        				this.dsInsert.setColumn(nrow, "CD_DEPT", this.objects[this.dsall].getColumn(i, "CD_DEPT"));
        				this.dsInsert.setColumn(nrow, "TY_TYPE", this._ty_type);
        				this.dsInsert.setColumn(nrow, "YM_COMPLETION", this.objects[this.dsall].getColumn(i, "YM_COMPLETION"));
        				this.dsInsert.setColumn(nrow, "NO_SIZE", this.objects[this.dsall].getColumn(i, "NO_SIZE"));
        				this.dsInsert.setColumn(nrow, "NO_DONG", this.objects[this.dsall].getColumn(i, "NO_DONG"));
        				this.dsInsert.setColumn(nrow, "NO_HO", this.objects[this.dsall].getColumn(i, "NO_HO"));
        				this.dsInsert.setColumn(nrow, "AM_BUILDING", this.objects[this.dsall].getColumn(i, "AM_BUILDING"));
        				this.dsInsert.setColumn(nrow, "AM_LAND", this.objects[this.dsall].getColumn(i, "AM_LAND"));
        				this.dsInsert.setColumn(nrow, "AM_BUILDING_UP", this.objects[this.dsall].getColumn(i, "AM_BUILDING_UP"));
        				this.dsInsert.setColumn(nrow, "AM_BUILDING_DOWN", this.objects[this.dsall].getColumn(i, "AM_BUILDING_DOWN"));
        				this.dsInsert.setColumn(nrow, "YM_SALES", this.objects[this.dsall].getColumn(i, "YM_SALES"));
        				this.dsInsert.setColumn(nrow, "YN_INST", this.gfnTrim(this.objects[this.dsall].getColumn(i, "YN_INST")));
        				this.dsInsert.setColumn(nrow, "YM_REASE", this.objects[this.dsall].getColumn(i, "YM_REASE"));
        				this.dsInsert.setColumn(nrow, "AM_LOSS"	    , this.objects[this.dsall].getColumn(i, "AM_LOSS"));
        				this.dsInsert.setColumn(nrow, "AM_LOSS_UP"  , this.objects[this.dsall].getColumn(i, "AM_LOSS_UP"));
        				this.dsInsert.setColumn(nrow, "AM_LOSS_DOWN", this.objects[this.dsall].getColumn(i, "AM_LOSS_DOWN"));
        				this.dsInsert.setColumn(nrow, "AM_LOSS_END" , this.objects[this.dsall].getColumn(i, "AM_LOSS_END"));
        				this.dsInsert.setColumn(nrow, "AM_SALE" , this.objects[this.dsall].getColumn(i, "AM_SALE"));
        				this.dsInsert.setColumn(nrow, "AM_OPTION" , this.objects[this.dsall].getColumn(i, "AM_OPTION"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "YM_WORK", this.objects[this.dsall].getColumn(i, "YM_WORK"));
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.objects[this.dsall].getColumn(i, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPT", this.objects[this.dsall].getColumn(i, "CD_DEPT"));
        				this.dsUpdate.setColumn(nrow, "TY_TYPE", this._ty_type);
        				this.dsUpdate.setColumn(nrow, "YM_COMPLETION", this.objects[this.dsall].getColumn(i, "YM_COMPLETION"));
        				this.dsUpdate.setColumn(nrow, "NO_SIZE", this.objects[this.dsall].getColumn(i, "NO_SIZE"));
        				this.dsUpdate.setColumn(nrow, "NO_DONG", this.objects[this.dsall].getColumn(i, "NO_DONG"));
        				this.dsUpdate.setColumn(nrow, "NO_HO", this.objects[this.dsall].getColumn(i, "NO_HO"));
        				this.dsUpdate.setColumn(nrow, "AM_BUILDING", this.objects[this.dsall].getColumn(i, "AM_BUILDING"));
        				this.dsUpdate.setColumn(nrow, "AM_LAND", this.objects[this.dsall].getColumn(i, "AM_LAND"));
        				this.dsUpdate.setColumn(nrow, "AM_BUILDING_UP", this.objects[this.dsall].getColumn(i, "AM_BUILDING_UP"));
        				this.dsUpdate.setColumn(nrow, "AM_BUILDING_DOWN", this.objects[this.dsall].getColumn(i, "AM_BUILDING_DOWN"));
        				this.dsUpdate.setColumn(nrow, "YM_SALES", this.objects[this.dsall].getColumn(i, "YM_SALES"));
        				this.dsUpdate.setColumn(nrow, "YN_INST", this.gfnTrim(this.objects[this.dsall].getColumn(i, "YN_INST")));
        				this.dsUpdate.setColumn(nrow, "YM_REASE", this.objects[this.dsall].getColumn(i, "YM_REASE"));
        				this.dsUpdate.setColumn(nrow, "AM_LOSS"	    , this.objects[this.dsall].getColumn(i, "AM_LOSS"));
        				this.dsUpdate.setColumn(nrow, "AM_LOSS_UP"  , this.objects[this.dsall].getColumn(i, "AM_LOSS_UP"));
        				this.dsUpdate.setColumn(nrow, "AM_LOSS_DOWN", this.objects[this.dsall].getColumn(i, "AM_LOSS_DOWN"));
        				this.dsUpdate.setColumn(nrow, "AM_LOSS_END" , this.objects[this.dsall].getColumn(i, "AM_LOSS_END"));
        				this.dsUpdate.setColumn(nrow, "AM_SALE" , this.objects[this.dsall].getColumn(i, "AM_SALE"));
        				this.dsUpdate.setColumn(nrow, "AM_OPTION" , this.objects[this.dsall].getColumn(i, "AM_OPTION"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "YM_WORK", this.objects[this.dsall].getColumn(i, "YM_WORK"));
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.objects[this.dsall].getColumn(i, "CD_CORP"));
        				this.dsDelete.setColumn(nrow, "CD_DEPT", this.objects[this.dsall].getColumn(i, "CD_DEPT"));
        				this.dsDelete.setColumn(nrow, "TY_TYPE", this._ty_type);
        				this.dsDelete.setColumn(nrow, "NO_DONG", this.objects[this.dsall].getColumn(i, "NO_DONG"));
        				this.dsDelete.setColumn(nrow, "NO_HO", this.objects[this.dsall].getColumn(i, "NO_HO"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	//var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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

        	switch(this.tabData.tabindex) {
        		case 0:
        			this.gfnExcelExport(this.dxGrid);
        			break;
        		case 1:
        			this.gfnExcelExport(this.dxGrid2);
        			break;
        		case 2:
        			this.gfnExcelExport(this.dxGrid3);
        			break;
        		case 3:
        			this.gfnExcelExport(this.dxGrid4);
        			break;
        	}
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
        	if (this.gfnIsNull(this.ccfCorp.form.CDTextBox.text)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCorp.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드가 입력되지 않았습니다.");
        	}

        	if(this.rdoDATE_TYPE.value == "S"){
        		if(this.gfnIsNull(this.ctclYM_FR.form.TextBox.value)){
        			this.gfnAlert("매출일자(시작일)은 필수입니다.");
        			this.ctclYM_FR.form.TextBox.setFocus();
        			validate = false;
        		}

        		if(this.gfnIsNull(this.ctclYM_TO.form.TextBox.value)){
        			this.gfnAlert("매출일자(종료일)은 필수입니다.");
        			this.ctclYM_TO.form.TextBox.setFocus();
        			validate = false;
        		}

        		if(this.gfnGetDiffDate(this.ctclYM_FR.form.TextBox.value + "01", this.ctclYM_TO.form.TextBox.value + "01") <= -1){
        			this.gfnAlert("매출일자의 시작일은 종료일보다 작아야 합니다.");
        			this.ctclYM_FR.form.TextBox.setFocus();
        			validate = false;
        		}
        	}else{
        		if(this.gfnIsNull(this.ctclYM_FR.form.TextBox.value)){
        			this.gfnAlert("기준년월은 필수입니다.");
        			this.ctclYM_FR.form.TextBox.setFocus();
        			validate = false;
        		}
        	}

        // 	if (this.gfnIsNull(this.ctclYM_WORK.form.TextBox.value)) {
        // 		validate = false;
        // 		this.gfnAlert("작업년월이 입력되지 않았습니다.");
        // 	}

        	return validate;
        };

        this.fnDataValidate = function(){
        	var objDs, objGrid;
        	switch(this.tabData.tabindex) {
        		case 0:
        			objDs = this.dsList;
        			objGrid = this.dxGrid;
        			break;
        		case 1:
        			objDs = this.dsList1;
        			objGrid = this.dxGrid2;
        			break;
        		case 2:
        			objDs = this.dsList2;
        			objGrid = this.dxGrid3;
        			break;
        		case 3:
        			objDs = this.dsList3;
        			objGrid = this.dxGrid4;
        			break;
        	}

        	for(var i=0;i<objDs.rowcount;i++){
        		if(this.gfnGetFlag(objDs, i) == "I" || this.gfnGetFlag(objDs, i) == "U"){
        			var amBuildingDown = nexacro.toNumber(objDs.getColumn(i, "AM_BUILDING_DOWN"),0);	//당기감소
        			var amEndBal       = nexacro.toNumber(objDs.getColumn(i, "AM_END_BAL"),0);	//기말잔액
        			if(amBuildingDown > 0 && amEndBal == 0 && !this.gfnIsNull(objDs.getColumn(i, "YM_SALES"))){
        				if(this.gfnIsNull(objDs.getColumn(i, "YN_INST"))){
        					this.gfnAlert("사업지["+objDs.getColumn(i, "DS_DEPT")+"] 매출구분은 필수입력입니다.");
        					return false;
        				}

        				if(this.gfnIsNull(objDs.getColumn(i, "YM_SALES")) && this.gfnIsNull(objDs.getColumn(i, "YM_REASE"))){
        					this.gfnAlert("사업지["+objDs.getColumn(i, "DS_DEPT")+"] 매출일자 또는 임대개시일은 필수입력입니다.");
        					return false;
        				}
        			}
        		}
        	}

        	return true;
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
        		var tabIdx = this.tabData.tabindex;
        		var objDs, objGrid;
        		switch(tabIdx) {
        			case 0:
        				objDs = this.dsList;
        				objGrid = this.dxGrid;
        				break;
        			case 1:
        				objDs = this.dsList1;
        				objGrid = this.dxGrid2;
        				break;
        			case 2:
        				objDs = this.dsList2;
        				objGrid = this.dxGrid3;
        				break;
        			case 3:
        				objDs = this.dsList3;
        				objGrid = this.dxGrid4;
        				break;
        		}

        		//전표발행 데이터 체크
        		//var chkFlag = this.fnSlipCheck();

        		//var chkCnt = objDs.getCaseCount("YN_TRADE == 'Y' && nx_flag != '#'");	//당월로 발행된 전표가 있을경우
        // 		var chkCnt = this.gfnTrim(objDs.getColumn(objDs.rowposition, "CD_TRADE"))
        // 		if(chkCnt != null){
        			//그리드 비활성
        // 			this.dxGrid.info = "Y";
        // 			this.dxGrid2.info = "Y";
        // 			this.dxGrid3.info = "Y";
        // 			this.dxGrid4.info = "Y";

        //			this.gfnSetEnable(this.btnDataCreate, false);
        // 			this.gfnSetEnable(this.btnIssueSlip, false);
        // 			this.gfnSetEnable(this.btnCancelSlip, true);
        // 			this.gfnSetEnable(this.btnSearchSlip, true);
        // 			this.gfnSetEnable(this.btnSearchSale, false);
        // 		}else{
        			//그리드 활성
        // 			this.dxGrid.info = "N";
        // 			this.dxGrid2.info = "N";
        // 			this.dxGrid3.info = "N";
        // 			this.dxGrid4.info = "N";

        			this.gfnSetEnable(this.btnDataCreate, true);
        			this.gfnSetEnable(this.btnIssueSlip, true);
        			this.gfnSetEnable(this.btnIssueSlipR, true);
        			//this.gfnSetEnable(this.btnIssueSlipN, true);
        			this.gfnSetEnable(this.btnCancelSlip, false);
        			this.gfnSetEnable(this.btnSearchSlip, false);

        			if(objDs.rowcount == 0) {
        				this.gfnSetEnable(this.btnSearchSale, false);
        				this.gfnSetEnable(this.btnIssueSlip, false);
        				this.gfnSetEnable(this.btnIssueSlipR, false);
        				//this.gfnSetEnable(this.btnIssueSlipN, false);
        			}else{
        				this.gfnSetEnable(this.btnSearchSale, true);
        				this.gfnSetEnable(this.btnIssueSlip, true);
        				this.gfnSetEnable(this.btnIssueSlipR, true);
        				//this.gfnSetEnable(this.btnIssueSlipN, true);
        			}

        			if(tabIdx == 1 || tabIdx == 3){
        				this.gfnSetEnable(this.btnIssueSlip, false);
        				this.gfnSetEnable(this.btnIssueSlipR, false);
        				//this.gfnSetEnable(this.btnIssueSlipN, false);
        				this.gfnSetEnable(this.btnSearchSale, false);
        			}
        //		}

        		this.gfnGridAfterSelect(objGrid);


        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "create") {
        		if (errorCode == 0) {
        			this.gfnAlert("생성되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "issueSlip"){
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 발행 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "cancelSlip"){
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 취소 되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "selectSale"){
        		if (errorCode == 0) {
        			this.fnSetGridData();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCorp") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if (id == "ccfDept") {
        		var cdCorp = this.ccfCorp.form.CDTextBox.text;
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			return false;
        		}
        		//dsUserParam.setColumn(nrow, "VALUE", this.ccfDept.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", "0000000");
        		dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT", "02");
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	switch(id) {
        		case "ccfCorp":	//법인코드
        			this.ccfDept.form.fnCodeFindClear();
        		break;
        	}
        }

        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {

        	switch(id) {
        	case "DHX_CFACNTUNIT": // 귀속부서코드
        		//dsUserParam.setColumn(nrow, "VALUE", "");
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCorp.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT", "02");
        		break;
        	default:
        	}

        	return true;
        }


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        // this.ccfDept_AfterCDTextChanged = function(id) {
        // 	if(e.oldvalue != e.newvalue) {
        // 		this.gfnSetFormStatus(this);	// 폼상태 초기화
        // 		this.gfnGridClear(this.dxGrid);
        // 		this.gfnGridClear(this.dxGrid2);
        // 		this.gfnGridClear(this.dxGrid3);
        // 		this.gfnGridClear(this.dxGrid4);
        // 	}
        // };


        this.ccfCorp_AfterCDTextChanged = function(id) {
        // 	var arr = this.ccfCorp.form.SelectedData;
        //
        // 	if (arr.length > 0) {
        // 		var cd_system = arr[0]["CD_SYSTEM"];
        // 		var ds_system = arr[0]["DS_SYSTEM"];
        // 		var cd_module = arr[0]["CD_MODULE"];
        // 		var ds_module = arr[0]["DS_MODULE"];
        // 	}
        };

        this.fnGrid_Cellclick = function(obj,e) {
        	var ds = obj.getBindDataset();
        	var yn_trade = ds.getColumn(ds.rowposition,"YN_TRADE");

        	if(yn_trade == 'Y') {
        		//this.gfnSetEnable(this.btnIssueSlipN, false);
        		//this.gfnSetEnable(this.btnIssueSlip, false);
        		this.gfnSetEnable(this.btnCancelSlip, true);
        		this.gfnSetEnable(this.btnSearchSlip, true);
        	} else {
        		//this.gfnSetEnable(this.btnIssueSlip, true);
        		//this.gfnSetEnable(this.btnIssueSlipN, true);
        		this.gfnSetEnable(this.btnCancelSlip, false);
        		this.gfnSetEnable(this.btnSearchSlip, false);
        	}
        }

        this.fnDetailCallback = function(strId, val) {
        };

        this.divData_tabData_onchanged = function(obj,e)
        {
        	//this.fnSelect();
        	this.FormBtns.Select.click();
        };

        this.dsList_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "YM_SALES" || e.columnid == "YM_REASE"){	//매출일자/임대개시일
        		if(!this.gfnIsNull(this.ctclYM_WORK.value) && !this.gfnIsNull(e.newvalue)){
        			if(e.newvalue.substr(0,6) != this.ctclYM_WORK.value){
        				this.gfnAlert("작업년월과 같은 년월만 입력가능합니다.");
        				return false;
        			}
        		}
        	}
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	// 건축비 AM_BUILDING  대지비 AM_LAND
        	if(e.columnid == "AM_BUILDING" || e.columnid == "AM_LAND" || e.columnid == "AM_BUILDING_UP" || e.columnid == "AM_BUILDING_DOWN") {
        		var am_building = nexacro.toNumber((e.columnid == "AM_BUILDING" ? e.newvalue : obj.getColumn(e.row, "AM_BUILDING")),0);	//건축비
        		var am_land     = nexacro.toNumber((e.columnid == "AM_LAND" ? e.newvalue : obj.getColumn(e.row, "AM_LAND")),0);			//대지비

        		var am_building_up   = nexacro.toNumber((e.columnid == "AM_BUILDING_UP" ? e.newvalue : obj.getColumn(e.row, "AM_BUILDING_UP")),0);		//당기증가
        		var am_building_down = nexacro.toNumber((e.columnid == "AM_BUILDING_DOWN" ? e.newvalue : obj.getColumn(e.row, "AM_BUILDING_DOWN")),0);	//당기감소

        		var am_basic_bal = am_building + am_land;

        // 		//기초잔액
        // 		var am_basic_bal = nexacro.toNumber(this.gfnNvl(obj.getColumn(e.row, "AM_BUILDING"),0),0) +
        // 		                   nexacro.toNumber(this.gfnNvl(obj.getColumn(e.row, "AM_LAND"),0),0);
        //
        // 		//당기증가
        // 		var am_building_up   = nexacro.toNumber(this.gfnNvl(obj.getColumn(e.row, "AM_BUILDING_UP"),0),0);
        // 		//당기감소
        // 		var am_building_down = nexacro.toNumber(this.gfnNvl(obj.getColumn(e.row, "AM_BUILDING_DOWN"),0),0);
        		//기말잔액
        		var am_building_sum = (am_basic_bal + am_building_up) - am_building_down;

        		obj.setColumn(e.row, "AM_BASIC_BAL", am_basic_bal);		//기초잔액
        		obj.setColumn(e.row, "AM_END_BAL"  , am_building_sum);	//기말잔액
        	}

        	//재고자산충당금 당기증가/당기감소
        	if(e.columnid == "AM_LOSS" || e.columnid == "AM_LOSS_UP" || e.columnid == "AM_LOSS_DOWN"){
        		var am_loss_up   = nexacro.toNumber((e.columnid == "AM_LOSS_UP" ? e.newvalue : obj.getColumn(e.row, "AM_LOSS_UP")),0);		//당기증가
        		var am_loss_down = nexacro.toNumber((e.columnid == "AM_LOSS_DOWN" ? e.newvalue : obj.getColumn(e.row, "AM_LOSS_DOWN")),0);	//당기감소
        		var am_loss = nexacro.toNumber((e.columnid == "AM_LOSS" ? e.newvalue : obj.getColumn(e.row, "AM_LOSS")),0);	//재고자산충담금

        		//기말잔액
        		var am_loss_end = am_loss - am_loss_down + am_loss_up;

        		obj.setColumn(e.row, "AM_LOSS_END" , am_loss_end);	//기말잔액
        	}

        	if(e.columnid == "YM_SALES" || e.columnid == "YN_INST"){	//매출일자/매출구분
        		var am_building_down = nexacro.toNumber(obj.getColumn(e.row, "AM_BUILDING_DOWN"),0);

        		if(this.gfnIsNull(this.gfnTrim(e.newvalue))){
        			if(e.columnid == "YM_SALES"){
        				obj.setColumn(e.row, "YN_INST" , "");
        			}else{
        				obj.setColumn(e.row, "YM_SALES" , "");
        			}

        			if(am_building_down > 0){
        				obj.setColumn(e.row, "AM_BUILDING_DOWN" , "");
        				obj.setColumn(e.row, "AM_END_BAL" , am_building_down);
        			}
        		}
        	}
        };


        //자료생성 처리
        this.fnDataCreate = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.ccfCorp.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCorp.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.rdoDATE_TYPE.value != "D"){
        		this.gfnAlert("기준년월을 선택하세요.");
        		return;
        	}

        	if(this.gfnIsNull(this.ctclYM_FR.form.TextBox.value)){
        		this.gfnAlert("기준년월은 필수입니다.");
        		this.ctclYM_WORK.form.TextBox.setFocus();
        		return;
        	}

        	this.gfnConfirm("자료생성 하시겠습니까?", "dataCreate_callback");

        };

        this.dataCreate_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsCreate.clearData();
        		var nRow = this.dsCreate.addRow();

        		//처리할 데이터 담기
        		this.dsCreate.setColumn(nRow, "CD_CORP"  , this.ccfCorp.form.CDTextBox.value);
        		this.dsCreate.setColumn(nRow, "YM_WORK"	 , this.ctclYM_FR.form.TextBox.value);
        		this.dsCreate.setColumn(nRow, "ID_USER"  , this.AuthClient.ID_USER);

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

        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid2);
        		this.gfnGridClear(this.dxGrid3);
        		this.gfnGridClear(this.dxGrid4);

        		if(e.columnid == "YM_FR"){
        			this.ctclYM_WORK.form.TextBox.set_value(e.newvalue);
        		}
        	}
        };

        //전표발행 처리
        this.fnIssueSlip = function (obj,e)
        {
        	if(this.tabData.tabindex == 1 || this.tabData.tabindex == 3) {
        		return;
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.ccfCorp.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCorp.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.gfnTrim(this.ctclYM_WORK.form.TextBox.value))){
        		this.gfnAlert("작업년월은 필수입니다.");
        		this.ctclYM_WORK.form.TextBox.setFocus();
        		return;
        	}

        	this.vSlipType = "Y";
        	if(obj.name == "btnExt_IssueSlipN"){
        		this.vSlipType = "N";
        	}
        	else if(obj.name == "btnExt_IssueSlipR"){
        		this.vSlipType = "R";
        	}

        	this.gfnConfirm("전표발행 하시겠습니까?", "fnIssueSlip_callback");

        };

        this.fnIssueSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		var ty_type;
        		switch(this.tabData.tabindex) {
        			case 0:
        				this.gfnGridBeforeSelect(this.dxGrid);
        				this.ty_type = "A";
        				break;
        			case 1:
        				this.gfnGridBeforeSelect(this.dxGrid2);
        				this.ty_type = "A";
        				break;
        			case 2:
        				this.gfnGridBeforeSelect(this.dxGrid3);
        				this.ty_type = "S";
        				break;
        			case 3:
        				this.gfnGridBeforeSelect(this.dxGrid4);
        				this.ty_type = "S";
        				break;
        		}


        		this.dsIssueSlip.clearData();
        		var nRow = this.dsIssueSlip.addRow();

        		//처리할 데이터 담기
        		this.dsIssueSlip.setColumn(nRow, "CD_CORP"		, this.ccfCorp.form.CDTextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "CD_DEPT"		, this.gfnNvl(this.ccfDept.form.CDTextBox.value,""));
        		this.dsIssueSlip.setColumn(nRow, "YM_WORK"		, this.ctclYM_WORK.form.TextBox.value);
        		this.dsIssueSlip.setColumn(nRow, "TY_TYPE"		, this.ty_type);
        		this.dsIssueSlip.setColumn(nRow, "CD_SITE_BH" 	, this.AuthClient.CD_DEPT);
        		this.dsIssueSlip.setColumn(nRow, "ID_TRANS" 	, this.AuthClient.ID_USER);
        		this.dsIssueSlip.setColumn(nRow, "YN_INST" 		, this.vSlipType);

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
        	var objDs;
        	switch(this.tabData.tabindex) {
        		case 0:
        			objDs = this.dsList;
        			break;
        		case 1:
        			return;
        			break;
        		case 2:
        			objDs = this.dsList2;
        			break;
        		case 3:
        			return;
        			break;
        	}

        	if (this.gfnIsNull(this.gfnTrim(objDs.getColumn(objDs.rowposition, "CD_TRADE")))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	this.gfnConfirm("전표를 취소하시겠습니까?", "fnCancelSlip_callback");

        };

        this.fnCancelSlip_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsCancelSlip.clearData();
        		var nRow = this.dsCancelSlip.addRow();

        		var objDs;
        		switch(this.tabData.tabindex) {
        			case 0:
        				objDs = this.dsList;
        				break;
        			case 1:
        				return;
        				break;
        			case 2:
        				objDs = this.dsList2;
        				break;
        			case 3:
        				return;
        				break;
        		}

        		var cdTrade = this.gfnTrim(objDs.getColumn(objDs.rowposition, "CD_TRADE"));
        		var YmWork  = nexacro.replaceAll(this.gfnNvl(objDs.getColumn(objDs.rowposition, "YM_WORK"),""),"-","");

        		//처리할 데이터 담기
        		this.dsCancelSlip.setColumn(nRow, "CD_TRADE" , cdTrade);
        		this.dsCancelSlip.setColumn(nRow, "YM_WORK"  , YmWork);

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
        	var objDs;
        	switch(this.tabData.tabindex) {
        		case 0:
        			objDs = this.dsList;
        			break;
        		case 1:
        			return;
        			break;
        		case 2:
        			objDs = this.dsList2;
        			break;
        		case 3:
        			return;
        			break;
        	}

        	if (this.gfnIsNull(this.gfnTrim(objDs.getColumn(objDs.rowposition, "CD_TRADE")))) {
        		this.gfnAlert("전표번호는 필수입니다.");
        		return;
        	}

        	var param = {};
        	param.IUD_FLAG = "S";
        	param.CD_TRADE = this.gfnTrim(objDs.getColumn(objDs.rowposition, "CD_TRADE"));
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());

        };

        //전표 발행이 된 데이터가 있는지 체크
        this.fnSlipCheck = function ()
        {
        	var grdCnt1 = this.dsList.getCaseCount("!dataset.parent.gfnIsNull(CD_TRADE) && nx_flag != '#'");
        	var grdCnt2 = this.dsList1.getCaseCount("!dataset.parent.gfnIsNull(CD_TRADE) && nx_flag != '#'");
        	var grdCnt3 = this.dsList2.getCaseCount("!dataset.parent.gfnIsNull(CD_TRADE) && nx_flag != '#'");
        	var grdCnt4 = this.dsList3.getCaseCount("!dataset.parent.gfnIsNull(CD_TRADE) && nx_flag != '#'");

        	var slipTotCnt = grdCnt1 + grdCnt2 + grdCnt3 + grdCnt4;

        	if(slipTotCnt == 0){
        		return false;
        	}else{
        		return true;
        	}
        };

        //매출 조회
        this.fnSearchSale = function (obj,e)
        {
        	var apt_st_gu;
        	switch(this.tabData.tabindex) {
        		case 0:
        			this.gfnGridBeforeSelect(this.dxGrid);
        			this.apt_st_gu = "1";
        			break;
        		case 1:
        			this.gfnGridBeforeSelect(this.dxGrid2);
        			this.apt_st_gu = "1";
        			break;
        		case 2:
        			this.gfnGridBeforeSelect(this.dxGrid3);
        			this.apt_st_gu = "2";
        			break;
        		case 3:
        			this.gfnGridBeforeSelect(this.dxGrid4);
        			this.apt_st_gu = "2";
        			break;
        	}

        	if(this.tabData.tabindex == 1 || this.tabData.tabindex == 3) {
        		return;
        	}

        	if (this.gfnIsNull(this.gfnTrim(this.ccfCorp.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCorp.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.gfnTrim(this.ctclYM_WORK.form.TextBox.value))){
        		this.gfnAlert("작업년월은 필수입니다.");
        		this.ctclYM_WORK.form.TextBox.setFocus();
        		return;
        	}

        	this.dsSelectSale.clearData();
        	var nRow = this.dsSelectSale.addRow();
        	this.dsSelectSale.setColumn(nRow, "CD_CORP"  , this.ccfCorp.form.CDTextBox.value);
        	this.dsSelectSale.setColumn(nRow, "DT_WORK"  , this.ctclYM_WORK.form.TextBox.value);
        	this.dsSelectSale.setColumn(nRow, "TY_GUBUN" , "1");	//1:완성주택
        	this.dsSelectSale.setColumn(nRow, "APT_ST_GU" , this.apt_st_gu);	//1:완성주택

        	var strSvcId    = "selectSale";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectSale=dsSelectSale";
        	var outData     = "dsSale=selectSale0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        //매출데이터 그리드에 셋팅
        this.fnSetGridData = function ()
        {
        	var objDs;
        	switch(this.tabData.tabindex) {
        		case 0:
        			objDs = this.dsList;
        			break;
        		case 2:
        			objDs = this.dsList2;
        			break;
        	}

        	trace("매출 데이터 :: "+this.dsSale.saveXML());

        	objDs.set_enableevent(false);

        	var dataCnt = 0;
        	for(var i=0;i<this.dsSale.rowcount;i++){
        		var cdAcntunit = this.gfnTrim(this.dsSale.getColumn(i, "CD_ACNTUNIT"));						//사업지코드
        		var noDong = this.gfnTrim(this.dsSale.getColumn(i, "NO_DONG"));								//동
        		var noHo   = this.gfnTrim(this.dsSale.getColumn(i, "NO_HO"));								//호
        		var dtReceipt = this.gfnTrim(this.dsSale.getColumn(i, "DT_RECEIPT"));						//매출일자
        		var dtLeaseFR = this.gfnTrim(this.dsSale.getColumn(i, "DT_LEASE_FR"));						//임대게시일자
        		var amBunYangGet = nexacro.toNumber(this.dsSale.getColumn(i, "AM_BUNYANGGET"),0);			//분양금
        		var amBunYangGetOpt = nexacro.toNumber(this.dsSale.getColumn(i, "AM_BUNYANGGET_OPT"),0);	//옵션금액
        		var cdYN_INST = this.gfnTrim(this.dsSale.getColumn(i, "YN_HALBU"));							//매출구분

        		//매출데이터와 같은 사업지,동,호 데이터를 찾아서 데이터를 셋팅
        		for(var d=0;d<objDs.rowcount;d++){
        			if(this.gfnTrim(objDs.getColumn(d, "CD_DEPT")) == cdAcntunit &&
        			   this.gfnTrim(objDs.getColumn(d, "NO_DONG")) == noDong &&
        			   this.gfnTrim(objDs.getColumn(d, "NO_HO"))   == noHo){

        			   var amBuidingDown = nexacro.toNumber(objDs.getColumn(d, "AM_END_BAL"),0);
        			    var amLossDown = nexacro.toNumber(objDs.getColumn(d, "AM_LOSS_END"),0);
        				//기말잔액이 있을경우
        				if(amBuidingDown > 0){
        					var amEndBal = (nexacro.toNumber(this.gfnNvl(objDs.getColumn(d, "AM_BASIC_BAL"),0),0) +
        					  nexacro.toNumber(this.gfnNvl(objDs.getColumn(d, "AM_BUILDING_UP"),0),0)) - amBuidingDown;


        					objDs.setColumn(d, this.nx_flag	     , "U");				//상태값(수정)
        					objDs.setColumn(d, "YM_SALES"		 , dtReceipt);			//매출일자
        					objDs.setColumn(d, "YN_INST"		 , cdYN_INST);			//매출구분
        					objDs.setColumn(d, "YM_REASE"		 , dtLeaseFR);			//임대게시일자
        					objDs.setColumn(d, "AM_SALE"		 , amBunYangGet);		//본계약 매출액
        					objDs.setColumn(d, "AM_OPTION"		 , amBunYangGetOpt);	//옵션 매출액
        					objDs.setColumn(d, "AM_BUILDING_DOWN", amBuidingDown);		//당기감소
        					objDs.setColumn(d, "AM_END_BAL"		 , amEndBal);			//기말잔액

        					var amLossEnd = (nexacro.toNumber(this.gfnNvl(objDs.getColumn(d, "AM_LOSS"),0),0) +
        					  nexacro.toNumber(this.gfnNvl(objDs.getColumn(d, "AM_LOSS_UP"),0),0)) - amLossDown  ;

        					objDs.setColumn(d, "AM_LOSS_DOWN"		 , amLossDown);			//재고자산충당금감소
        					objDs.setColumn(d, "AM_LOSS_END"		 , amLossEnd);			//기말잔액

        					dataCnt++;
        					this.gfnSetFormStatus(this, "U");
        				}
        			}
        		}
        	}

        	objDs.set_enableevent(true);

        	if(dataCnt == 0){
        		this.gfnAlert("조회된 데이터가 없습니다.");
        	}else{
        		this.gfnAlert(dataCnt + "건 처리 되었습니다.");
        	}

        };

        this.divSearch_rdoDATE_TYPE_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == "S"){
        		this.staTXT.set_visible(true);
        		this.ctclYM_TO.set_visible(true);
        	}else{
        		this.staTXT.set_visible(false);
        		this.ctclYM_TO.set_visible(false);
        	}
        };

        this.fnGrid_oncelldblclick = function(obj,e)
        {
        	var objDs = obj.getBindDataset();
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if(colnm == "CD_TRADE"){
        		if(!this.gfnGridIsRow(obj)) {return false;}			//필터로우 제외
        		if(objDs.getRowLevel(e.row) > 0) {return false;}	//소계제외

        		var cdTrade = this.gfnTrim(objDs.getColumn(objDs.rowposition, "CD_TRADE")).replace(/-/gi, "");

        		if (this.gfnIsNull(cdTrade)) {
        			this.gfnAlert("전표번호는 필수입니다.");
        			return;
        		}

        		var param = {};
        		param.CD_TRADE = cdTrade;

        		this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.rdoDATE_TYPE.addEventHandler("onitemchanged",this.divSearch_rdoDATE_TYPE_onitemchanged,this);
            this.divSearch.form.staTXT.addEventHandler("onclick",this.Common_onclick,this);
            this.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.tabData.tab1.form.objGrid.addEventHandler("oncelldblclick",this.fnGrid_oncelldblclick,this);
            this.tabData.tab2.form.objGrid2.addEventHandler("oncelldblclick",this.fnGrid_oncelldblclick,this);
            this.tabData.tab3.form.objGrid3.addEventHandler("oncelldblclick",this.fnGrid_oncelldblclick,this);
            this.tabData.tab4.form.objGrid4.addEventHandler("oncelldblclick",this.fnGrid_oncelldblclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsList1.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList1.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsList2.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList2.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsList3.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList3.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("DHA_COMPLETION.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
