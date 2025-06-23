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
            this.set_titletext("현장공통매입세액관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_LOCALCREDIT_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHVPR_LOCALCREDIT_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHVPR_LOCALCREDIT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHVPR_LOCALCREDIT_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YY_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNO_TAX", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">1</Col><Col id=\"DS_CODE\">1기예정</Col></Row><Row><Col id=\"CD_CODE\">2</Col><Col id=\"DS_CODE\">1기확정</Col></Row><Row><Col id=\"CD_CODE\">3</Col><Col id=\"DS_CODE\">2기예정</Col></Row><Row><Col id=\"CD_CODE\">4</Col><Col id=\"DS_CODE\">2기확정</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","240","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("세무단위");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","sta00:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_WORK","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("작성년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_WORK","staYY_WORK:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_WORK00","ctclYY_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("작성기수");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboNO_TAX","staYY_WORK00:0.0","10.0","98","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsNO_TAX");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_FROM","ccboNO_TAX:5","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_inputtype("digit");
            obj.set_readonly("true");
            obj.set_text("2020-04-04");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_WORK","ctxtDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDT_TO","staDT_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_inputtype("digit");
            obj.set_readonly("true");
            obj.set_text("2020-04-04");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","189",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_DEP","405","-34","200","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYN_DEP");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_fittocontents("width");
            obj.set_direction("vertical");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","3","30","150","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00","152","56","693","37",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta00:472","30","220","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","10","-1",null,"30","-10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("내국신용장 . 구매확인서 공급실적 합계");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE00","10","155",null,"30","-10",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("내국신용장 . 구매확인서 공급실적 명세서");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_00","sta00:-1","30","190","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("건수");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","sta00_00:-1","30","285","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("금액");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","3","sta00:-1","150","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("⑨ 합계(=⑩+⑪)");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_00_02","3","82","150","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("⑩ 내국신용장");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00_00_03","3","108","150","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("⑪ 구매확인서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00_00","sta00_00_02:-1","82","693","37",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00_01","sta00_00_03:-1","108","693","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00_01_00","341","sta00_00_00:-1","285","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00_01_00_00","341","sta00_00_00:25","285","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00_01_00_01","341","sta00_00_00:51","285","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtCT_SUM","sta00_00_01:27","60","130","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_format("#,###");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtCT_SUM10","sta00_00_02:27","85","130","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_format("#,###");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtCT_SUM11","sta00_00_03:27","112","130","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_format("#,###");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SUM","txtCT_SUM:50","60","231","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_format("#,###");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SUM10","txtCT_SUM10:50","85","231","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_format("#,###");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_SUM11","txtCT_SUM11:50","112","231","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_format("#,###");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYY_WORK.form.TextBox","value","dsSearch","YY_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboNO_TAX","value","dsSearch","NO_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctxtDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctxtDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_LOCALCREDIT.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetParameter();
        	this.fnSetEvent();

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        	this.dsSearch.setColumn(0, "YY_WORK", this.gfnGetDate().substring(0, 4));
        	this.dsSearch.setColumn(0, "CD_DEPT", this.UserInfo.CD_DEPT_SELFACNT);
        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT")))
        		this.ccfCD_DEPT.form.fnCodeFindLoad();
        };

        this.fnSetButton = function() {
        }

        this.fnSetExtendButton = function() {
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;	// 법인코드
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ctclYY_WORK = this.divSearch.form.ctclYY_WORK;
        	this.ccboNO_TAX = this.divSearch.form.ccboNO_TAX;
        	this.ctxtDT_FROM = this.divSearch.form.ctxtDT_FROM;
        	this.ctxtDT_TO = this.divSearch.form.ctxtDT_TO;

        	this.dxGrid = this.divData.form.objGrid;

        	this.txtCT_SUM = this.divData.form.txtCT_SUM;
        	this.txtCT_SUM10 = this.divData.form.txtCT_SUM10;
        	this.txtCT_SUM11 = this.divData.form.txtCT_SUM11;
        	this.txtAM_SUM = this.divData.form.txtAM_SUM;
        	this.txtAM_SUM10 = this.divData.form.txtAM_SUM10;
        	this.txtAM_SUM11 = this.divData.form.txtAM_SUM11;
        };

        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_LOCALCREDIT");

        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";
            this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dsList.addEventHandler("onvaluechanged", this.dsList_onvaluechanged, this);

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        }

        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsSelect.addColumn("YR_TAX", "string");
        	this.dsSelect.addColumn("NO_TAX", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsInsert.addColumn("YR_TAX", "string");
        	this.dsInsert.addColumn("NO_TAX", "string");
        	this.dsInsert.addColumn("TY_CREDIT", "string");
        	this.dsInsert.addColumn("NO_CREDIT", "string");
        	this.dsInsert.addColumn("DT_CREDIT", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("NO_SJC", "string");
        	this.dsInsert.addColumn("AM_WON", "bigdecimal");
        	this.dsInsert.addColumn("DS_REM", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsUpdate.addColumn("YR_TAX", "string");
        	this.dsUpdate.addColumn("NO_TAX", "string");
        	this.dsUpdate.addColumn("NO_SEQ", "bigdecimal");
        	this.dsUpdate.addColumn("TY_CREDIT", "string");
        	this.dsUpdate.addColumn("NO_CREDIT", "string");
        	this.dsUpdate.addColumn("DT_CREDIT", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("NO_SJC", "string");
        	this.dsUpdate.addColumn("AM_WON", "bigdecimal");
        	this.dsUpdate.addColumn("DS_REM", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsDelete.addColumn("YR_TAX", "string");
        	this.dsDelete.addColumn("NO_TAX", "string");
        	this.dsDelete.addColumn("NO_SEQ", "bigdecimal");

        	this.dsSelectUser = new Dataset();
        	this.dsSelectUser.addColumn("ID_USER", "string");
        	this.dsSelectUser.addColumn("CD_DEPT", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_DEPT_SELFACNT", this.gfnTrim(this.dsSearch.getColumn(0, "CD_DEPT")));
        	this.dsSelect.setColumn(0, "YR_TAX", this.dsSearch.getColumn(0, "YY_WORK"));
        	this.dsSelect.setColumn(0, "NO_TAX", this.dsSearch.getColumn(0, "NO_TAX"));

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
        };

        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);
        }

        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (!this.fnSaveValidate()) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        				this.dsInsert.setColumn(nrow, "YR_TAX", this.dsSearch.getColumn(0, "YY_WORK"));
        				this.dsInsert.setColumn(nrow, "NO_TAX", this.dsSearch.getColumn(0, "NO_TAX"));
        				this.dsInsert.setColumn(nrow, "TY_CREDIT", this.dsList.getColumn(i, "TY_CREDIT"));
        				this.dsInsert.setColumn(nrow, "NO_CREDIT", this.dsList.getColumn(i, "NO_CREDIT"));
        				this.dsInsert.setColumn(nrow, "DT_CREDIT", this.dsList.getColumn(i, "DT_CREDIT"));
        				this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsInsert.setColumn(nrow, "NO_SJC", this.dsList.getColumn(i, "NO_SJC"));
        				this.dsInsert.setColumn(nrow, "AM_WON", this.dsList.getColumn(i, "AM_WON"));
        				this.dsInsert.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        				this.dsUpdate.setColumn(nrow, "YR_TAX", this.dsSearch.getColumn(0, "YY_WORK"));
        				this.dsUpdate.setColumn(nrow, "NO_TAX", this.dsSearch.getColumn(0, "NO_TAX"));
        				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsUpdate.setColumn(nrow, "TY_CREDIT", this.dsList.getColumn(i, "TY_CREDIT"));
        				this.dsUpdate.setColumn(nrow, "NO_CREDIT", this.dsList.getColumn(i, "NO_CREDIT"));
        				this.dsUpdate.setColumn(nrow, "DT_CREDIT", this.dsList.getColumn(i, "DT_CREDIT"));
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "NO_SJC", this.dsList.getColumn(i, "NO_SJC"));
        				this.dsUpdate.setColumn(nrow, "AM_WON", this.dsList.getColumn(i, "AM_WON"));
        				this.dsUpdate.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT"));
        				this.dsDelete.setColumn(nrow, "YR_TAX", this.dsSearch.getColumn(0, "YY_WORK"));
        				this.dsDelete.setColumn(nrow, "NO_TAX", this.dsSearch.getColumn(0, "NO_TAX"));
        				this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidation = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("세무단위를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YY_WORK"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYY_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("작성년도를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "NO_TAX"))) {
        		this.fnVaidateCallback = function() {
        			this.ccboNO_TAX.setFocus();
        		}
        		this.gfnAlert("작성기수를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	return true;
        }

        this.fnSaveValidate = function() {
        	var validate = true;
        	var msg = "";

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		if (flag == "" || flag == "D") continue;


        	}

        	if (!validate) {
        		var arrError = [msg];
        		this.gfnAlert("msg.err.validator", arrError);
        		return false;
        	}
        	return validate;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		if (this.dsList.rowcount > 0) {
        		  // 합계 계산 처리
        		  this.fnSetSum();
                } else
        		{
        		  this.fnSetSumInit();
        		}
        	}
        	else if(svcID == "save") {
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
        	var cdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        			break;

        		case "ccfCD_DEPT": // 세무단위
        			if (this.gfnIsNull(cdCorp)) {
        				this.gfnAlert("법인코드를 먼저 선택하세요.");
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        			//dsUserParam.setColumn(nrow, "LV_DEPT", this.UserInfo.LEVLV_DEPT_ACNT);
        			break;
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			this.ccfCD_DEPT.form.fnCodeFindClear();
        			break;
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_AfterEdit = function(obj,e) {
        	if (e.columnid == "RT_EXCHANGE" || e.columnid == "AM_FOREIGN") {
        		if (e.oldvalue != e.newvalue) {
        			this.dsList.setColumn(e.row, "AM_WON", nexacro.toNumber(this.dsList.getColumn(e.row,"RT_EXCHANGE"), 0) * nexacro.toNumber(this.dsList.getColumn(e.row,"AM_FOREIGN"), 0));
        		}
        	}
        }

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
            var cdCorp = this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value);
        	if (id =="DHX_CFVENDOR")  //거래처코드(DHX_CFALLVENDOR_CODEFIND)
        	{
        		dsUserParam.setColumn(nrow, "CD_CORP" , cdCorp);
        		dsUserParam.setColumn(nrow, "TY_VENDOR" , "F");
        	}
        	return true;
        }

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if (e.oldvalue != e.newvalue) {
        		if (e.columnid ==  "AM_WON") {
        			//this.fnSetSum();
        		}
        	}
        }

        this.fnSetSum = function(){
            this.txtCT_SUM.set_value(this.dsList.getCount("AM_WON"));
        	this.txtCT_SUM10.set_value(this.dsList.getCaseCount("TY_CREDIT=='L'", "AM_WON"));
        	this.txtCT_SUM11.set_value(this.dsList.getCaseCount("TY_CREDIT=='A'", "AM_WON"));
        	this.txtAM_SUM.set_value(this.dsList.getSum("AM_WON"));
        	this.txtAM_SUM10.set_value(this.dsList.getCaseSum("TY_CREDIT=='L'", "AM_WON"));
        	this.txtAM_SUM11.set_value(this.dsList.getCaseSum("TY_CREDIT=='A'", "AM_WON"));
        }

        this.fnSetSumInit = function(){
        	this.txtCT_SUM.set_value();
        	this.txtCT_SUM10.set_value();
        	this.txtCT_SUM11.set_value();
        	this.txtAM_SUM.set_value();
        	this.txtAM_SUM10.set_value();
        	this.txtAM_SUM11.set_value();
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
            if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);

        		switch(e.columnid) {
        			case "YY_WORK" :
        			case "NO_TAX" :
        				this.fnMagamSetting();
        				break;
        		}
            }
        }

        this.fnMagamSetting = function() {
        	var dtFrom;
        	var dtTo;

        	var ymMagam = this.dsSearch.getColumn(0, "YY_WORK");
        	var noTax = this.dsSearch.getColumn(0, "NO_TAX");

        	if (this.gfnIsNull(ymMagam) || this.gfnIsNull(noTax)) {
        		dtFrom = "";
        		dtTo = "";
        	}
        	else {
        		switch(noTax) {
        			case "1" :
        				dtFrom = ymMagam + "-01-01";
        				dtTo = ymMagam + "-03-31";
        				break;
        			case "2" :
        				dtFrom = ymMagam + "-04-01";
        				dtTo = ymMagam + "-06-30";
        				break;
        			case "3" :
        				dtFrom = ymMagam + "-07-01";
        				dtTo = ymMagam + "-09-20";
        				break;
        			case "4" :
        				dtFrom = ymMagam + "-10-01";
        				dtTo = ymMagam + "-12-31";
        				break;
        			default :
        				dtFrom = "";
        				dtTo = "";
        				break;
        		}
        	}

        	this.dsSearch.setColumn(0, "DT_FROM", dtFrom);
        	this.dsSearch.setColumn(0, "DT_TO", dtTo);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.rdoYN_DEP.addEventHandler("onitemchanged",this.rdo00_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_LOCALCREDIT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
