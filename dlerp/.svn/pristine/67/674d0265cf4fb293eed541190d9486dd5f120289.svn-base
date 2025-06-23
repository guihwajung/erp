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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DXXPR_NXGRIDINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DXXPR_NXGRIDINFO_SAVE</Col></Row><Row><Col id=\"TARGET\">copy</Col><Col id=\"SP\">DXXPR_GRIDINFO_COPY</Col></Row><Row><Col id=\"TARGET\">select_combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">deploy_grid</Col><Col id=\"SP\">DXXPR_NXGRID_DEPLOY</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNmDatabase", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"ID_GRID\" type=\"STRING\" size=\"256\"/><Column id=\"NM_DB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","0","10","79","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("시스템");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SYSTEM","staCD_SYSTEM:0","10","180","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_GRID","ccfCD_SYSTEM:0","10","89","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("ID_GRID");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtID_GRID","staID_GRID:0","10","200","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNM_DB",null,"10.0","92","24.0","150",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("배포DB");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboNM_DB",null,"10","150","24","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsNmDatabase");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("에코원에너지 개발");
            obj.set_value("DLECO_DEV");
            obj.set_index("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SYSTEM.form.CDTextBox","value","dsSearch","CD_SYSTEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctxtID_GRID","value","dsSearch","ID_GRID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboNM_DB","value","dsSearch","NM_DB");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DXX_NXGRIDINFO.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.S_TY_RANGE = "Y";

        this.form_onload = function(obj,e) {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	this.fnInit();

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if (!this.gfnIsNull(this.getOwnerFrame().CD_SYSTEM) && !this.gfnIsNull(this.getOwnerFrame().ID_GRID)) {
        		this.ccfCD_SYSTEM.form.CDTextBox.set_value(this.getOwnerFrame().CD_SYSTEM);
        		this.ctxtID_GRID.set_value(this.getOwnerFrame().ID_GRID);
        		this.S_TY_RANGE = "N";
        		this.FormBtns.Select.click();
        	}
        }

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnColumnInfo = this.gfnFormButtonAdd("ColumnInfo", "fnDetail");
        	this.btnCopyGrid   = this.gfnFormButtonAdd("CopyGrid"  , "fnCopy");
        	this.btnDeploy     = this.gfnFormButtonAdd("btnDeploy" , "fnDeploy");
        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;

        	this.ccfCD_SYSTEM = this.divSearch.form.ccfCD_SYSTEM;
        	this.ctxtID_GRID  = this.divSearch.form.ctxtID_GRID;
        	this.cboNM_DB     = this.divSearch.form.cboNM_DB;
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SYSTEM.CodeFindName = "DZX_CFSYSTEM";

        	this.dxGrid.layout = false;
        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DXX_NXGRIDINFO");
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SYSTEM", "string");
        	this.dsSelect.addColumn("ID_GRID", "string");
        	this.dsSelect.addColumn("TY_RANGE", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_FLAG", "string");
        	this.dsSave.addColumn("CD_SYSTEM", "string");
        	this.dsSave.addColumn("ID_GRID", "string");
        	this.dsSave.addColumn("NM_GRID", "string");
        	this.dsSave.addColumn("YN_READONLY", "string");
        	this.dsSave.addColumn("NO_FIXEDROWS", "int");
        	this.dsSave.addColumn("NO_FROZENCOL", "int");
        	this.dsSave.addColumn("YN_MULTILINE", "string");
        	this.dsSave.addColumn("RM_BIGO1", "string");
        	this.dsSave.addColumn("RM_BIGO2", "string");
        	this.dsSave.addColumn("YN_AUTOFILTER", "string");
        	this.dsSave.addColumn("YN_SEARCHBAR", "string");
        	this.dsSave.addColumn("YN_GROUPPANNEL", "string");
        	this.dsSave.addColumn("TY_GROUP", "string");
        	this.dsSave.addColumn("ID_FORM", "string");
        	this.dsSave.addColumn("NM_FORM", "string");
        	this.dsSave.addColumn("DS_REQUEST", "string");
        	this.dsSave.addColumn("DT_WORK", "string");
        	this.dsSave.addColumn("DS_WORK", "string");
        	this.dsSave.addColumn("DS_CONFIRM", "string");
        	this.dsSave.addColumn("RM_TEST", "string");
        	this.dsSave.addColumn("YN_COMPLETED", "string");
        	this.dsSave.addColumn("YN_NODATA", "string");
        	this.dsSave.addColumn("YN_REVERSESUM", "string");
        	this.dsSave.addColumn("YN_NUM", "string");
        	this.dsSave.addColumn("YN_NOSORT", "string");
        	this.dsSave.addColumn("YN_NOGROUP", "string");
        	this.dsSave.addColumn("TY_ADD", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("YN_AUTOFIT", "string");

        	this.dsCopy = new Dataset();
        	this.dsCopy.addColumn("OLD_CD_SYSTEM", "string");
        	this.dsCopy.addColumn("OLD_ID_GRID", "string");
        	this.dsCopy.addColumn("NEW_CD_SYSTEM", "string");
        	this.dsCopy.addColumn("NEW_ID_GRID", "string");
        	this.dsCopy.addColumn("ID_INSERT", "string");

        	// 콤보 조회
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	// 배포
        	this.dsDeploy = new Dataset();
        	this.dsDeploy.addColumn("NM_DB", "string");
        	this.dsDeploy.addColumn("CD_SYSTEM", "string");
        	this.dsDeploy.addColumn("ID_GRID", "string");
        }

        this.fnInit = function() {
        	this.dsCombo.clearData();
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DZ");
        	this.dsCombo.setColumn(0, "CD_TYPE"  , "E1");

        	var strSvcId    = "select_combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select_combo=dsCombo";
        	var outData     = "dsNmDatabase=select_combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,	// 통신방법 정의 [생략가능]
        						false);

        	this.dsSearch.setColumn(0, "NM_DB", "DLECO_DEV");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         *	조회 버튼
         */
        this.fnSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SYSTEM", this.ccfCD_SYSTEM.form.CDTextBox.text);
        	this.dsSelect.setColumn(0, "ID_GRID", this.ctxtID_GRID.text);
        	this.dsSelect.setColumn(0, "TY_RANGE", this.S_TY_RANGE);

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
        	var nrow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nrow, "CD_SYSTEM", this.ccfCD_SYSTEM.form.CDTextBox.text);
        	this.dsList.setColumn(nrow, "DS_SYSTEM", this.ccfCD_SYSTEM.form.DSTextBox.text);
        	this.dsList.set_enableevent(true);
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

        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_FLAG"       , flag);
        				this.dsSave.setColumn(nrow, "CD_SYSTEM"     , this.dsList.getColumn(i, "CD_SYSTEM"));
        				this.dsSave.setColumn(nrow, "ID_GRID"       , this.dsList.getColumn(i, "ID_GRID"));
        				this.dsSave.setColumn(nrow, "NM_GRID"       , this.dsList.getColumn(i, "NM_GRID"));
        				this.dsSave.setColumn(nrow, "YN_READONLY"   , this.dsList.getColumn(i, "YN_READONLY"));
        				this.dsSave.setColumn(nrow, "NO_FIXEDROWS"  , this.dsList.getColumn(i, "NO_FIXEDROWS"));
        				this.dsSave.setColumn(nrow, "NO_FROZENCOL"  , this.dsList.getColumn(i, "NO_FROZENCOL"));
        				this.dsSave.setColumn(nrow, "YN_MULTILINE"  , this.dsList.getColumn(i, "YN_MULTILINE"));
        				this.dsSave.setColumn(nrow, "RM_BIGO1"      , this.dsList.getColumn(i, "RM_BIGO1"));
        				this.dsSave.setColumn(nrow, "RM_BIGO2"      , this.dsList.getColumn(i, "RM_BIGO2"));
        				this.dsSave.setColumn(nrow, "YN_AUTOFILTER" , this.dsList.getColumn(i, "YN_AUTOFILTER"));
        				this.dsSave.setColumn(nrow, "YN_SEARCHBAR"  , this.dsList.getColumn(i, "YN_SEARCHBAR"));
        				this.dsSave.setColumn(nrow, "YN_GROUPPANNEL", this.dsList.getColumn(i, "YN_GROUPPANNEL"));
        				this.dsSave.setColumn(nrow, "TY_GROUP"      , this.dsList.getColumn(i, "TY_GROUP"));
        				this.dsSave.setColumn(nrow, "ID_FORM"       , this.dsList.getColumn(i, "ID_FORM"));
        				this.dsSave.setColumn(nrow, "NM_FORM"       , this.dsList.getColumn(i, "NM_FORM"));
        				this.dsSave.setColumn(nrow, "DS_REQUEST"    , this.dsList.getColumn(i, "DS_REQUEST"));
        				this.dsSave.setColumn(nrow, "DT_WORK"       , this.dsList.getColumn(i, "DT_WORK"));
        				this.dsSave.setColumn(nrow, "DS_WORK"       , this.dsList.getColumn(i, "DS_WORK"));
        				this.dsSave.setColumn(nrow, "DS_CONFIRM"    , this.dsList.getColumn(i, "DS_CONFIRM"));
        				this.dsSave.setColumn(nrow, "RM_TEST"       , this.dsList.getColumn(i, "RM_TEST"));
        				this.dsSave.setColumn(nrow, "YN_COMPLETED"  , this.dsList.getColumn(i, "YN_COMPLETED"));
        				this.dsSave.setColumn(nrow, "YN_NODATA"     , this.dsList.getColumn(i, "YN_NODATA"));
        				this.dsSave.setColumn(nrow, "YN_REVERSESUM" , this.dsList.getColumn(i, "YN_REVERSESUM"));
        				this.dsSave.setColumn(nrow, "YN_NUM"        , this.dsList.getColumn(i, "YN_NUM"));
        				this.dsSave.setColumn(nrow, "YN_NOSORT"     , this.dsList.getColumn(i, "YN_NOSORT"));
        				this.dsSave.setColumn(nrow, "YN_NOGROUP"    , this.dsList.getColumn(i, "YN_NOGROUP"));
        				this.dsSave.setColumn(nrow, "TY_ADD"        , this.dsList.getColumn(i, "TY_ADD"));
        				this.dsSave.setColumn(nrow, "YN_AUTOFIT"    , this.dsList.getColumn(i, "YN_AUTOFIT"));
        				this.dsSave.setColumn(nrow, "ID_USER"       , this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

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

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save" || svcID == "copy") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "deploy_grid") {
        		if (errorCode == 0) {
        		var msg = "그리드 '" + this.dsList.getColumn(this.dsList.rowposition, "NM_GRID") +
        		          "' [" +this.dsList.getColumn(this.dsList.rowposition, "DS_SYSTEM") + " / " + this.dsList.getColumn(this.dsList.rowposition, "ID_GRID") +
        				  "] 정보가 '" + this.cboNM_DB.text + "'에 배포되었습니다.";
        		this.gfnAlert(msg);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnDetail = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) {
        		return false;
        	}

        	var param = {};
        	param.CD_SYSTEM = this.dsList.getColumn(this.dsList.rowposition, "CD_SYSTEM");
        	param.DS_SYSTEM = this.dsList.getColumn(this.dsList.rowposition, "DS_SYSTEM");
        	param.ID_GRID = this.dsList.getColumn(this.dsList.rowposition, "ID_GRID");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DXX_NXGRIDSPEC", "", param);
        }

        this.fnCopy = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) {
        		return false;
        	}
        	var param = {};
        	param.CD_SYSTEM = this.dsList.getColumn(this.dsList.rowposition, "CD_SYSTEM");
        	param.DS_SYSTEM = this.dsList.getColumn(this.dsList.rowposition, "DS_SYSTEM");
        	param.ID_GRID = this.dsList.getColumn(this.dsList.rowposition, "ID_GRID");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpenNonAuth("DXX", "DXX_NXGRIDINFO_COPY", "fnCopy_callback", param, 400, 250);
        }

        this.fnCopy_callback = function(strId, val) {
        	if (val != null) {
        		var json = JSON.parse(val);

        		this.dsCopy.clearData();
        		var nrow = this.dsCopy.addRow();
        		this.dsCopy.setColumn(nrow, "OLD_CD_SYSTEM", json.CD_SYSTEM_FR);
        		this.dsCopy.setColumn(nrow, "OLD_ID_GRID"  , json.ID_GRID_FR);
        		this.dsCopy.setColumn(nrow, "NEW_CD_SYSTEM", json.CD_SYSTEM_TO);
        		this.dsCopy.setColumn(nrow, "NEW_ID_GRID"  , json.ID_GRID_TO);
        		this.dsCopy.setColumn(nrow, "ID_INSERT"    , this.AuthClient.ID_USER);

        		if (this.dsCopy.rowcount == 0) return;

        		var strSvcId    = "copy";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "copy=dsCopy";
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
        }

        this.fnDeploy = function(obj, e) {
        	var msg = "그리드 '" + this.dsList.getColumn(this.dsList.rowposition, "NM_GRID") +
        			  "' [" +this.dsList.getColumn(this.dsList.rowposition, "DS_SYSTEM") + " / " + this.dsList.getColumn(this.dsList.rowposition, "ID_GRID") +
        			  "] 정보를 '" + this.cboNM_DB.text + "'에 배포하시겠습니까?";
        	this.gfnConfirm(msg, function(strId, val) {
        		if (val) {
        			if (!this.gfnGridIsRow(this.dxGrid)) {
        				return false;
        			}

        			this.dsDeploy.clearData();
        			var nrow = this.dsDeploy.addRow();
        			this.dsDeploy.setColumn(nrow, "NM_DB"    , this.dsSearch.getColumn(0, "NM_DB"));
        			this.dsDeploy.setColumn(nrow, "CD_SYSTEM", this.dsList.getColumn(this.dsList.rowposition, "CD_SYSTEM"));
        			this.dsDeploy.setColumn(nrow, "ID_GRID"  , this.dsList.getColumn(this.dsList.rowposition, "ID_GRID"));

        			if (this.dsDeploy.rowcount == 0) return;

        			var strSvcId    = "deploy_grid";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "deploy_grid=dsDeploy";
        			var outData     = "";
        			var strArg      = "";
        			var callBackFnc = "fnCallback";

        			this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        								strSvcType,		// transaction을 요청할 구분
        								inProc,			// Procedure 정보 Dataset 이름
        								inData,			// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData,		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg,			// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc);	// 통신방법 정의 [생략가능]
        		}
        	});
        }

        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DXX_NXGRIDINFO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
