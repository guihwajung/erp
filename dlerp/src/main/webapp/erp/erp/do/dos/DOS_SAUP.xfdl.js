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
            this.set_titletext("사업수지항목");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOSPR_SAUP_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DOSPR_SAUP_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DOSPR_SAUP_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DOSPR_SAUP_DELETE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo2</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo3</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DOSPR_SAUP_CREATE</Col></Row><Row><Col id=\"SP\">DOSPR_SAUP_CREATEX</Col><Col id=\"TARGET\">saveX</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ITEM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_ADD\" type=\"STRING\" size=\"256\"/><Column id=\"TY_INOUT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_INVEST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_PROJ\"/><Col id=\"DS_PROJ\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_ADD", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_INOUT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_INVEST", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_PROJ","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_PROJ","staCD_PROJ:0.0","10.0","319","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DOS_CFPROJ");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ITEM","0.0","staCD_PROJ:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사업수지");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ITEM","staCD_ITEM:0.0","staCD_PROJ:10.0","319","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DOS_CFITEM");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","84","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_ADD","0.0","staCD_PROJ:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("누계구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_ADD","staYN_ADD:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsYN_ADD");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("N");
            obj.set_value("N");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_INOUT","0.0","staCD_PROJ:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("수지구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_INOUT","staTY_INOUT:0.0","staCD_PROJ:10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsTY_INOUT");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_INVEST","ccboTY_INOUT:0.0","staCD_PROJ:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("투입구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_INVEST","staTY_INVEST:0.0","staCD_PROJ:10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsTY_INVEST");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("투입");
            obj.set_value("Y");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","-5","80",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","5","-1",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_scrolltype("both");
            obj.set_visible("true");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_PROJ.form.CDTextBox","value","dsSearch","CD_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_PROJ.form.DSTextBox","value","dsSearch","DS_PROJ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_ITEM.form.CDTextBox","value","dsSearch","CD_ITEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_ITEM.form.DSTextBox","value","dsSearch","DS_ITEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccboYN_ADD","value","dsSearch","YN_ADD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccboTY_INOUT","value","dsSearch","TY_INOUT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccboTY_INVEST","value","dsSearch","TY_INVEST");
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
        this.registerScript("DOS_SAUP.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "CD_ITEM", this.getOwnerFrame().CD_ITEM);
        	this.dsSearch.setColumn(0, "DS_ITEM", this.getOwnerFrame().DS_ITEM);

        	if (!this.gfnIsNull(this.getOwnerFrame().CD_PROJ)) {
        		this.dsSearch.setColumn(0, "CD_PROJ", this.getOwnerFrame().CD_PROJ);
        		this.dsSearch.setColumn(0, "DS_PROJ", this.getOwnerFrame().DS_PROJ);
        	}

        	//사업수지총괄표에서 팝업으로 열었을 때
        	if (this.gfnIsNull(this.getOwnerFrame().YM_WORK)) {
        		this.dsSearch.setColumn(0, "YM_WORK", this.gfnGetDate().substr(0,6));
        	}
        	else {
        		this.dsSearch.setColumn(0, "YM_WORK", this.getOwnerFrame().YM_WORK);
        	}

        	//사업수지총괄표에서 팝업으로 열었을 때
        	if (!this.gfnIsNull(this.getOwnerFrame().YN_ADD)) {
        		this.dsSearch.setColumn(0, "YN_ADD", this.getOwnerFrame().YN_ADD);
        	}

        	if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_PROJ"))){
        		this.FormBtns.Select.click();
        	}
        };

        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCreate = this.gfnFormButtonAdd("btnCreate", "fnCreate"); //실적집계
        	this.btnCreateX = this.gfnFormButtonAdd("btnCreateX", "fnCreateX"); //집계취소
        	this.btnDivide = this.gfnFormButtonAdd("btnDivide", "fnDivide"); //실적분할
        	this.btnMagam = this.gfnFormButtonAdd("btnMagam", "fnMagam"); //실적마감
        	this.btnMagamX = this.gfnFormButtonAdd("btnMagamX", "fnMagamX"); //마감취소
        	this.btnSlipS = this.gfnFormButtonAdd("btnSlipS", "fnSlipS"); //전표조회

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
         	this.ccfCD_PROJ = this.divSearch.form.ccfCD_PROJ;
        	this.ccfCD_ITEM = this.divSearch.form.ccfCD_ITEM;
        	this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;

        	this.ccboYN_ADD = this.divSearch.form.ccboYN_ADD; // 누계구분 콤보
        	this.ccboTY_INOUT = this.divSearch.form.ccboTY_INOUT; // 수지구분 콤보
        	this.ccboTY_INVEST = this.divSearch.form.ccboTY_INVEST; // 투입구분 콤보

         	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
         	this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOS_SAUP");

         	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

         	this.ccfCD_PROJ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ITEM.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_PROJ.AfterCDTextChanged = "fnAfterCDTextChanged";

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_PROJ", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("YN_ADD", "string");
        	this.dsSelect.addColumn("TY_INOUT", "string");
        	this.dsSelect.addColumn("TY_INVEST", "string");
        	this.dsSelect.addColumn("CD_ITEM", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_PROJ", "string");
        	this.dsInsert.addColumn("YM_WORK", "string");
        	this.dsInsert.addColumn("DT_TRADE", "string");
        	this.dsInsert.addColumn("DT_CASH", "string");
        	this.dsInsert.addColumn("CD_ITEM", "string");
        	this.dsInsert.addColumn("AM_SUJI", "bigdecimal");
        	this.dsInsert.addColumn("CD_SUJI", "string");
        	this.dsInsert.addColumn("TY_INVEST", "string");
        	this.dsInsert.addColumn("CD_DEPT", "string");
        	this.dsInsert.addColumn("TY_VENDOR", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("CD_BANK", "string");
        	this.dsInsert.addColumn("NO_ACCOUNT", "string");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_PROJ", "string");
        	this.dsUpdate.addColumn("YM_WORK", "string");
        	this.dsUpdate.addColumn("DT_TRADE", "string");
        	this.dsUpdate.addColumn("DT_CASH", "string");
        	this.dsUpdate.addColumn("CD_ITEM", "string");
        	this.dsUpdate.addColumn("AM_SUJI", "bigdecimal");
        	this.dsUpdate.addColumn("CD_SUJI", "string");
        	this.dsUpdate.addColumn("TY_INVEST", "string");
        	this.dsUpdate.addColumn("CD_DEPT", "string");
        	this.dsUpdate.addColumn("TY_VENDOR", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("CD_BANK", "string");
        	this.dsUpdate.addColumn("NO_ACCOUNT", "string");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("NO_SUJI", "bigdecimal");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_PROJ", "string");
        	this.dsDelete.addColumn("YM_WORK", "string");
        	this.dsDelete.addColumn("NO_SUJI", "bigdecimal");
        	this.dsDelete.addColumn("ID_USER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_PROJ", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("ID_USER", "string");

        	this.dsSaveX = new Dataset();
        	this.dsSaveX.addColumn("CD_PROJ", "string");
        	this.dsSaveX.addColumn("YM_WORK", "string");
        	this.dsSaveX.addColumn("ID_USER", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelect.setColumn(0, "YN_ADD", this.dsSearch.getColumn(0, "YN_ADD"));
        	this.dsSelect.setColumn(0, "TY_INOUT", this.dsSearch.getColumn(0, "TY_INOUT"));
        	this.dsSelect.setColumn(0, "TY_INVEST", this.dsSearch.getColumn(0, "TY_INVEST"));
        	this.dsSelect.setColumn(0, "CD_ITEM", this.dsSearch.getColumn(0, "CD_ITEM"));

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

        this.fnAdd = function() {
        	this.gfnGridAdd(this.dxGrid);
        }

        this.fnDel = function() {

        	this.gfnGridDel(this.dxGrid);
        }

        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        				this.dsInsert.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        				this.dsInsert.setColumn(nrow, "DT_TRADE", this.dsList.getColumn(i, "DT_TRADE"));
        				this.dsInsert.setColumn(nrow, "DT_CASH", this.dsList.getColumn(i, "DT_CASH"));
        				this.dsInsert.setColumn(nrow, "CD_ITEM", this.dsList.getColumn(i, "CD_ITEM"));
        				this.dsInsert.setColumn(nrow, "AM_SUJI", this.dsList.getColumn(i, "AM_SUJI"));
        				this.dsInsert.setColumn(nrow, "CD_SUJI", this.dsList.getColumn(i, "CD_SUJI"));
        				this.dsInsert.setColumn(nrow, "TY_INVEST", this.dsList.getColumn(i, "TY_INVEST"));
        				this.dsInsert.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsInsert.setColumn(nrow, "TY_VENDOR", this.dsList.getColumn(i, "TY_VENDOR"));
        				this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsInsert.setColumn(nrow, "CD_BANK", this.dsList.getColumn(i, "CD_BANK"));
        				this.dsInsert.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        				this.dsUpdate.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        				this.dsUpdate.setColumn(nrow, "DT_TRADE", this.dsList.getColumn(i, "DT_TRADE"));
        				this.dsUpdate.setColumn(nrow, "DT_CASH", this.dsList.getColumn(i, "DT_CASH"));
        				this.dsUpdate.setColumn(nrow, "CD_ITEM", this.dsList.getColumn(i, "CD_ITEM"));
        				this.dsUpdate.setColumn(nrow, "AM_SUJI", this.dsList.getColumn(i, "AM_SUJI"));
        				this.dsUpdate.setColumn(nrow, "CD_SUJI", this.dsList.getColumn(i, "CD_SUJI"));
        				this.dsUpdate.setColumn(nrow, "TY_INVEST", this.dsList.getColumn(i, "TY_INVEST"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsUpdate.setColumn(nrow, "TY_VENDOR", this.dsList.getColumn(i, "TY_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "CD_BANK", this.dsList.getColumn(i, "CD_BANK"));
        				this.dsUpdate.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "NO_SUJI", this.dsList.getColumn(i, "NO_SUJI"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        				this.dsDelete.setColumn(nrow, "YM_WORK", this.divSearch.form.ctclYM_WORK.value);
        				this.dsDelete.setColumn(nrow, "NO_SUJI", this.dsList.getColumn(i, "NO_SUJI"));
        				this.dsDelete.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
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
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_PROJ"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_PROJ.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("프로젝트 코드를 입력하지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_WORK"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_PROJ.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("회계년월을 입력하지 않았습니다.", "fnVaidateCallback");
        		return false;
        	}

          	return validate;
         }


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if(svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "combo") {

        		var iRow = this.dsTY_INOUT.insertRow(0);
        		this.dsTY_INOUT.setColumn(iRow, "CD_CODE", "");
        		this.dsTY_INOUT.setColumn(iRow, "DS_CODE", "전체");
        		this.divSearch.form.ccboTY_INOUT.set_index(0);
        		this.divSearch.form.ccboTY_INVEST.set_index(1);

        		if (this.gfnIsNull(this.getOwnerFrame().YN_ADD)) {
        			this.divSearch.form.ccboYN_ADD.set_index(0);
        		}
        	}
        }

        this.fnPopCallBack = function(svcID, val) {
        	if(val != false) {
        		this.FormBtns.Select.click();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_PROJ") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	} else if (id == "ccfCD_ITEM") {
        		dsUserParam.setColumn(nrow, "CD_PROJ", this.ccfCD_PROJ.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "TY_INOUT", "");
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        	}


        	return true;
        };

         this.fnAfterCDTextChanged = function(id, codeFindData) {
         	var arr = codeFindData;

        	if(id == "ccfCD_PROJ") {
        		this.ccfCD_ITEM.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	switch(id) {
        		case "DOS_CFITEM": //사업수지항목
        			dsUserParam.setColumn(nrow, "CD_PROJ", this.ccfCD_PROJ.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "TY_INOUT", "");
        			dsUserParam.setColumn(nrow, "YN_USE", "Y");
        			break;
        		case "DOS_CFACNTUNIT": //귀속부서
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_PROJ", this.ccfCD_PROJ.form.CDTextBox.value);
        			break;
        		case "DOS_CFVENDOR": //거래처
        			dsUserParam.setColumn(nrow, "TY_VENDOR1", "");
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "CD_PROJ", this.ccfCD_PROJ.form.CDTextBox.value);
        			break;
        		case "DFX_CFACCOUNTNO_SUJI": //발생정보
        			dsUserParam.setColumn(nrow, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        			break;
        		case "DOS_CFSUJI": //자금수지
        			dsUserParam.setColumn(nrow, "CD_PROJ", this.ccfCD_PROJ.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "TY_INOUT", "");
        			dsUserParam.setColumn(nrow, "TY_SIGN", "");
        			dsUserParam.setColumn(nrow, "CD_ITEM", "");
        			dsUserParam.setColumn(nrow, "YN_USE", "Y");
        			break;
        		default:
        			break;
        	}
        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	// 관리번호
        	if (id == "DOS_CFITEM") {
        		if(arr.length > 0) {
        			this.dsList.setColumn(this.dsList.rowposition, "CD_DEPTINVEST", arr[0]["CD_DEPTINVEST"]);			// 귀속부서
        			this.dsList.setColumn(this.dsList.rowposition, "DS_DEPTINVEST", arr[0]["DS_DEPTINVEST"]);			// 귀속부서명
        			this.dsList.setColumn(this.dsList.rowposition, "TY_VENDOR", arr[0]["TY_VENDOR"]);			// 거래처구분
        			this.dsList.setColumn(this.dsList.rowposition, "CD_VENDOR", arr[0]["CD_VENDOR"]);		// 거래처
        			this.dsList.setColumn(this.dsList.rowposition, "DS_VENDOR", arr[0]["DS_VENDOR"]);		// 거래처명
        			this.dsList.setColumn(this.dsList.rowposition, "CD_SUJI", arr[0]["CD_SUJI"]);		// 자금수지
        			this.dsList.setColumn(this.dsList.rowposition, "DS_SUJI", arr[0]["DS_SUJI"]);		// 자금수지명
        		}
        	}
        };


        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        // 공통코드콤보
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DO");
        	this.dsCombo.setColumn(0, "CD_TYPE", "S9");

        	this.dsCombo2 = new Dataset();
        	this.dsCombo2.addColumn("CD_SYSTEM", "string");
        	this.dsCombo2.addColumn("CD_TYPE", "string");
        	this.dsCombo2.addRow();
        	this.dsCombo2.setColumn(0, "CD_SYSTEM", "DO");
        	this.dsCombo2.setColumn(0, "CD_TYPE", "S5");

        	this.dsCombo3 = new Dataset();
        	this.dsCombo3.addColumn("CD_SYSTEM", "string");
        	this.dsCombo3.addColumn("CD_TYPE", "string");
        	this.dsCombo3.addRow();
        	this.dsCombo3.setColumn(0, "CD_SYSTEM", "DO");
        	this.dsCombo3.setColumn(0, "CD_TYPE", "S6");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo combo2=dsCombo2 combo3=dsCombo3";
        	var outData     = "dsYN_ADD=combo0 dsTY_INOUT=combo20 dsTY_INVEST=combo30";
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

        // 실적집계
        this.fnCreate = function(obj,e) {

        	this.dsSave.clearData();
        	var nrow = this.dsSave.addRow();

        	this.dsSave.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsSave.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        }

        // 집계취소
        this.fnCreateX = function(obj,e) {

        	this.dsSaveX.clearData();
        	var nrow = this.dsSaveX.addRow();

        	this.dsSaveX.setColumn(nrow, "CD_PROJ", this.dsSearch.getColumn(0, "CD_PROJ"));
        	this.dsSaveX.setColumn(nrow, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSaveX.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "saveX=dsSaveX";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        }

        // 실적분할
        this.fnDivide = function(obj,e) {
        	var popId = "DOS_DIVIDE";

        	var param = {};
        	param.CD_PROJ = this.dsSearch.getColumn(0, "CD_PROJ");	// 프로젝트
        	param.DS_PROJ = this.dsSearch.getColumn(0, "DS_PROJ");	// 프로젝트
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");	// 회계년월
        	param.NO_SUJI = this.dsList.getColumn(this.dsList.rowposition, "NO_SUJI");	// 거래처

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, popId, "fnPopCallBack", param);
        }

        // 실적마감
        this.fnMagam = function(obj,e) {
        	var popId = "DOS_MAGAM_DLG";

        	var param = {};
        	param.CD_PROJ = this.dsSearch.getColumn(0, "CD_PROJ");	// 프로젝트
        	param.DS_PROJ = this.dsSearch.getColumn(0, "DS_PROJ");	// 프로젝트
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");	// 회계년월
        	param.RT_MNG = this.dsList.getColumn(1, "RT_MNG");	// 본사관리비이율
        	param.RT_MEZA = this.dsList.getColumn(1, "RT_MEZA");	// (-)내부조달이자이율
        	param.RT_PEZA = this.dsList.getColumn(1, "RT_PEZA");	// (+)내부조달이자이율

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, popId, "fnPopCallBack", param);
        }

        // 마감취소
        this.fnMagamX = function(obj,e) {
        	var popId = "DOS_MAGAMX_DLG";

        	var param = {};
        	param.CD_PROJ = this.dsSearch.getColumn(0, "CD_PROJ");	// 프로젝트
        	param.DS_PROJ = this.dsSearch.getColumn(0, "DS_PROJ");	// 프로젝트
        	param.YM_WORK = this.dsSearch.getColumn(0, "YM_WORK");	// 회계년월

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, popId, "fnPopCallBack", param);
        }

        // 전표조회
        this.fnSlipS = function(obj,e) {

        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	//trace("this.FormInfo.CD_MODULE :: " + this.FormInfo.CD_MODULE);
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopCallBack", param);

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccboYN_ADD.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.ccboTY_INOUT.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.ccboTY_INVEST.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DOS_SAUP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
