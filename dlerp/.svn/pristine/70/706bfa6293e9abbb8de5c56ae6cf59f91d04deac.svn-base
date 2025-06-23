(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DWA_SILHENG");
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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_USERREGISTRATION_SELECT_SSO</Col></Row><Row><Col id=\"SP\">DZZPR_USERREGISTRATION_INSERT</Col><Col id=\"TARGET\">insert</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DZZPR_USERREGISTRATION_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DZZPR_USERREGISTRATION_DELETE</Col></Row><Row><Col id=\"TARGET\">change</Col><Col id=\"SP\">DZZPR_USERREGISTRATION_UPDATEPWDINIT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ROLE\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_DEPT\"/><Col id=\"CD_ROLE\"/><Col id=\"YN_DEL\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeleteImg", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdg00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrollbartype("auto auto");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("2");
            obj.set_text("법인코드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCorp","sta00:0","10","230","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stabu","ccfCorp:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("부서코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDeptCorp","stabu:0","10","300","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stabu00","ccfDeptCorp:0","10","102","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("ROLE 코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfRollCode","stabu00:0","10","200","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chk00","ccfRollCode:20","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("삭제계정");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
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
            obj = new BindItem("item0","divSearch.form.ccfCorp.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfDeptCorp.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfRollCode.form.CDTextBox","value","dsSearch","CD_ROLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.chk00","value","dsSearch","YN_DEL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DZU_USERREGISTRATION.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DWA_SILHENG_onload = function(obj,e)
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

        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        // 	this.FormBtns.Add.set_enable(false);
        // 	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("btnUserModule", "fnUserModule");
        	this.btn2 = this.gfnFormButtonAdd("btnGYUMJIK", "fnGYUMJIK");
        	this.btnDooraySync = this.gfnFormButtonAdd("DooraySync", "fnDooraySync");
        	this.btnInitPwd = this.gfnFormButtonAdd("InitPwd", "fnInitPwd");
        	this.btnRegImage = this.gfnFormButtonAdd("RegImage", "fnRegImage");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCorp = this.divSearch.form.ccfCorp;
        	this.ccfDeptCorp = this.divSearch.form.ccfDeptCorp;
        	this.ccfRollCode = this.divSearch.form.ccfRollCode;
        	this.dxGrid = this.divData.form.objGrid;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCorp.CodeFindName = "DZX_CFCORP";
        	this.ccfDeptCorp.CodeFindName = "DZX_CFDEPTCORP";
        	this.ccfRollCode.CodeFindName = "DZX_CFROLECODE";

        	this.ccfCorp.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfDeptCorp.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZU_USERREGISTRATION");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";



        	this.ccfCorp.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCorp.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsParam = new Dataset();
        	this.dsParam.addColumn("CD_CORP", "string");
        	this.dsParam.addColumn("ID_USER", "string");

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("CD_ROLE", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("YN_DEL", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("ID_USER", "string");
        	this.dsInsert.addColumn("DS_HNAME", "string");
        	this.dsInsert.addColumn("ID_PASSWORD", "string");
        	this.dsInsert.addColumn("ID_JUMIN", "string");
        	this.dsInsert.addColumn("ID_EMAIL", "string");
        	this.dsInsert.addColumn("NO_IP", "string");
        	this.dsInsert.addColumn("CD_DEPT", "string");
        	this.dsInsert.addColumn("YN_LOGINDENY", "string");
        	this.dsInsert.addColumn("TY_ECONT", "string");
        	this.dsInsert.addColumn("CD_ROLE", "string");
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("ID_ACCOUNT", "string");
        	this.dsInsert.addColumn("YN_GROUPWARE", "string");
        	this.dsInsert.addColumn("OFFICEPHONE", "string");
        	this.dsInsert.addColumn("MOBILE", "string");
        	this.dsInsert.addColumn("CD_OCCUPATION", "string");
        	this.dsInsert.addColumn("CD_POSITION", "string");
        	this.dsInsert.addColumn("DS_BIGO", "string");
        	this.dsInsert.addColumn("DT_EXPIRATION", "datetime");
        	this.dsInsert.addColumn("CD_DOORAY_ROLE", "string");
        	this.dsInsert.addColumn("CD_TITLE", "string");
        	this.dsInsert.addColumn("DS_EXPLANATION", "string");


        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("DS_HNAME", "string");
        	this.dsUpdate.addColumn("ID_PASSWORD", "string");
        	this.dsUpdate.addColumn("ID_JUMIN", "string");
        	this.dsUpdate.addColumn("ID_EMAIL", "string");
        	this.dsUpdate.addColumn("NO_IP", "string");
        	this.dsUpdate.addColumn("CD_DEPT", "string");
        	this.dsUpdate.addColumn("YN_LOGINDENY", "string");
        	this.dsUpdate.addColumn("TY_ECONT", "string");
        	this.dsUpdate.addColumn("CD_ROLE", "string");
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("ID_INSERT", "string");
        	this.dsUpdate.addColumn("ID_ACCOUNT", "string");
        	this.dsUpdate.addColumn("YN_GROUPWARE", "string");
        	this.dsUpdate.addColumn("OFFICEPHONE", "string");
        	this.dsUpdate.addColumn("MOBILE", "string");
        	this.dsUpdate.addColumn("CD_OCCUPATION", "string");
        	this.dsUpdate.addColumn("CD_POSITION", "string");
        	this.dsUpdate.addColumn("DS_BIGO", "string");
        	this.dsUpdate.addColumn("DT_EXPIRATION", "datetime");
        	this.dsUpdate.addColumn("CD_DOORAY_ROLE", "string");
        	this.dsUpdate.addColumn("CD_TITLE", "string");
        	this.dsUpdate.addColumn("DS_EXPLANATION", "string");
        	this.dsUpdate.addColumn("ID_USER_OLD", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("ID_USER", "string");
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("ID_INSERT", "string");

        	this.dsInitPwd = new Dataset();
        	this.dsInitPwd.addColumn("CD_CORP", "string");
        	this.dsInitPwd.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "CD_ROLE", this.dsSearch.getColumn(0, "CD_ROLE"));
        	this.dsSelect.setColumn(0, "YN_DEL", this.dsSearch.getColumn(0, "YN_DEL"));

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
         *	입력 버튼
         */
        this.fnAdd = function() {
        	this.gfnGridAdd(this.dxGrid);
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
        		// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		switch(flag) {
        			case "I":
        				var nRow = this.dsInsert.addRow();
        				this.dsInsert.copyRow(nRow, this.dsList, i);
        				this.dsInsert.setColumn(nRow, 'CD_CORP', this.ccfCorp.form.CDTextBox.value);
        				this.dsInsert.setColumn(nRow, "ID_INSERT", this.AuthClient.ID_USER);
        			break;
        			case "U":
        				var nRow = this.dsUpdate.addRow();
        				this.dsUpdate.copyRow(nRow, this.dsList, i);
        				this.dsUpdate.setColumn(nRow, "ID_INSERT", this.AuthClient.ID_USER);
        			break;
        			case "D":
        				var nRow = this.dsDelete.addRow();
        				this.dsDelete.copyRow(nRow, this.dsList, i);
        				this.dsDelete.setColumn(nRow, "ID_INSERT", this.AuthClient.ID_USER);

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
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
        this.fnValidate = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCorp.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드는 필수입력 값입니다.");
        		return false;
        	}

        	return true;
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
        		this.gfnGridAfterSelect(this.dxGrid);

        	}else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == 'membersync')
        	{
        		if (this.dsList.getColumn(this.dsList.rowposition, "YN_CHG_DEPT") == 'Y')
        		{
        			this.fnDoorayDeptSync();
        		}
        		else
        		{
        			this.FormBtns.Select.click();
        		}
        	}
        	else if (svcID == 'deptsync')
        	{
        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfDeptCorp") {
        		if(!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))){
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCorp.form.CDTextBox.value);
        		}else{
        			this.gfnAlert("법인코드는 필수입력 값입니다.");
        			return false;
        		}
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCorp") {
        		// 현장코드 변경시 초기화
        		this.ccfDeptCorp.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DZX_CFDEPTCORP") {
        		var cd_corp = this.dsSearch.getColumn(0, "CD_CORP");
        		if(this.gfnIsNull(cd_corp)) {
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}
         		dsUserParam.setColumn(nrow, "CD_CORP", cd_corp);
         	}

        	if (id == "DZX_CFDEPTCORP") {
        		var cd_corp = this.dsSearch.getColumn(0, "CD_CORP");
        		if(this.gfnIsNull(cd_corp)) {
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}
         		dsUserParam.setColumn(nrow, "CD_CORP", cd_corp);
         	}

        	return true;
        }

        this.fnGrid_EnterCell = function(obj, row, cell)
        {
        	var ds = obj.getBindDataset();
        	var nRow = obj.getDatasetRow(row);

        	var enabledSync = ds.getColumn(nRow, 'YN_GROUPWARE') == 'Y' && (ds.getColumn(nRow, 'YN_DOORAY_SYNC') == 'N' || ds.getColumn(nRow, 'YN_CHG_DEPT') == 'Y');

        	this.btnDooraySync.set_enable(enabledSync);

        	var sColumn = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	if (ds.getColumn(nRow, 'YN_GROUPWARE') != 'Y')
        	{
        		if (sColumn == 'DT_EXPIRATION' || sColumn == 'CD_DOORAY_ROLE')
        		{
        			return false;
        		}
        	}

        	if (sColumn == 'DT_EXPIRATION')
        	{
        		if (ds.getColumn(nRow, 'CD_DOORAY_ROLE') != 'guest')
        		{
        			return false;
        		}
        	}

        	if (sColumn == 'YN_LOGINDENY')
        	{
        		return true;
        	}
        };

        this.fnGrid_AfterEdit = function(obj,e)
        {
        	if (e.columnid == 'YN_GROUPWARE')
        	{
        		obj.setColumn(e.row, 'CD_DOORAY_ROLE', null);
        		obj.setColumn(e.row, 'DT_EXPIRATION', null);
        	}
        	else if (e.columnid == 'CD_DOORAY_ROLE')
        	{
        		obj.setColumn(e.row, 'DT_EXPIRATION', null);
        	}
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnUserModule = function(obj, e){
        	if(!this.gfnGridIsRow(this.dxGrid)){return false;}
        	var param = {};
        	param.ID_CORP = this.ccfCorp.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCorp.form.DSTextBox.value;
        	param.ID_USER = this.dsList.getColumn(this.dsList.rowposition, "ID_USER");
        	param.DS_HNAME = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DZU_USERMODULE_USER", "fnUserModuleCallback", param);
        };

        this.fnGYUMJIK = function(obj, e){
        	if(!this.gfnGridIsRow(this.dxGrid)){return false;}
        	var param = {};
        	param.ID_CORP = this.ccfCorp.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCorp.form.DSTextBox.value;
        	param.ID_USER = this.dsList.getColumn(this.dsList.rowposition, "ID_USER");
        	param.DS_HNAME = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");
        	param.YN_GROUPWARE = this.dsList.getColumn(this.dsList.rowposition, "YN_GROUPWARE");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DZU_GYUMJIK", "fnGYUMJIKCallback", param);
        };

        this.fnDooraySync = function(obj, e)
        {
        	var YN_GROUPWARE = this.dsList.getColumn(this.dsList.rowposition, "YN_GROUPWARE");
        	var YN_DOORAY_SYNC = this.dsList.getColumn(this.dsList.rowposition, "YN_DOORAY_SYNC");
        	var YN_CHG_DEPT = this.dsList.getColumn(this.dsList.rowposition, "YN_CHG_DEPT");
        	var CD_DOORAY_ROLE = this.dsList.getColumn(this.dsList.rowposition, "CD_DOORAY_ROLE");
        	var DT_EXPIRATION  =this.dsList.getColumn(this.dsList.rowposition, "DT_EXPIRATION");

        	if (YN_GROUPWARE != 'Y')
        	{
        		this.gfnAlert('그룹웨어사용 사용자가 아닙니다');
        		return false;
        	}

        	if (YN_DOORAY_SYNC == 'N')
        	{
        		if (this.gfnIsNull(CD_DOORAY_ROLE))
        		{
        			this.gfnAlert('그룹웨어사용 권한을 입력하세요');
        			return false;
        		}

        		if (CD_DOORAY_ROLE == 'guest' && this.gfnIsNull(DT_EXPIRATION))
        		{
        			this.gfnAlert('그룹웨어사용 만료일을 입력하세요');
        			return false;
        		}
        	}

        	this.gfnConfirm('그룹웨어에 전송 하시겠습니까?', function(svcId, isOk) {

        		if (!isOk) return false;

        		if (YN_DOORAY_SYNC == 'N')
        		{
        			this.fnDoorayMemberSync();
        		}
        		else
        		{
        			this.fnCallback('membersync', 0, '');
        		}
        	}, 'fnDooraySync_confirm');
        };

        this.fnDoorayMemberSync = function()
        {
        	if (this.dsList.getColumn(this.dsList.rowposition, "YN_DOORAY_SYNC") == 'N')
        	{
        		this.dsParam.clearData();

        		var nRow = this.dsParam.addRow();
        		this.dsParam.setColumn(nRow, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        		this.dsParam.setColumn(nRow, "ID_USER", this.dsList.getColumn(this.dsList.rowposition, "ID_USER"));

        		var strSvcId    = "membersync";
        		var strSvcType  = "dooray/members";
        		var inProc		= "";
        		var inData      = "dsParam=dsParam";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";
        		this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        	}
        };

        this.fnDoorayDeptSync = function()
        {
        	if (this.dsList.getColumn(this.dsList.rowposition, "YN_CHG_DEPT") == 'Y')
        	{
        		this.dsParam.clearData();

        		var nRow = this.dsParam.addRow();
        		this.dsParam.setColumn(nRow, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        		this.dsParam.setColumn(nRow, "ID_USER", this.dsList.getColumn(this.dsList.rowposition, "ID_USER"));

        		var strSvcId    = "deptsync";
        		var strSvcType  = "dooray/department-members";
        		var inProc		= "";
        		var inData      = "dsParam=dsParam";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";
        		this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        	}
        };

        this.fnInitPwd = function()
        {
        	this.gfnConfirm('비밀번호를 초기화 하시겠습니까?', function(svcId, isOk) {
        		this.dsInitPwd.clearData();

        		var nRow = this.dsInitPwd.addRow();
        		this.dsInitPwd.setColumn(nRow, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        		this.dsInitPwd.setColumn(nRow, "ID_USER", this.dsList.getColumn(this.dsList.rowposition, "ID_USER"));

        		var strSvcId    = "change";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "change=dsInitPwd";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";
        		this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        	}, 'fnInitPwd_confirm');
        };



        // 파일설정
        var context = "/";
        if (nexacro.getEnvironmentVariable("evContextPath") != undefined) {
        	context = nexacro.getEnvironmentVariable("evContextPath");
        }

        this.fileConfig = this.gfnGetFileConfig();
        this.fileConfig.uploadUrl = context + "file/saveEmpImg.do?path=";		//사원 이미지 따로 저장 (파일 이름을 ID_PERSON. 으로 변경하기위해)
        this.fileConfig.allowTypes = ["jpg","jpeg","gif","png"]; // 넥사브라우저 전용, 웹은 적용불가
        this.filepath = "/DA/BASEINFO/";

        //사진 업로드
        this.fnRegImage = function()
        {
        	if (this.dsList.rowposition > -1 && this.dsList.getColumn(this.dsList.rowposition, this.ucFlag) != '#')
        	{
        		this.fdg00.open('FileOpen', FileDialog.LOAD);
        	}
        	else
        	{
        		this.gfnAlert('업로드 대상을 선택해주세요.');
        	}
        };

        /*
         * 파일Dialog
         */
        this.fdg00_onclose = function(obj, e)
        {
        	var filelist = e.virtualfiles;
        	this.FileList = filelist;
            if (filelist.length > 0)
        	{
                var vFile;
                for (var i = 0; i < filelist.length; i++)
        		{
                    vFile = filelist[i];
                    var extFile = vFile.filename.substring(vFile.filename.lastIndexOf('.') + 1);
                    if (!this.gfnIsExistInArray(this.fileConfig.allowTypes, extFile.toLowerCase()))
        			{
                        this.gfnAlert("이미지 파일(" + this.fileConfig.allowTypes.join(',') + ")을 선택하세요.");
                        return;
                    }

                    vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
                    vFile.addEventHandler("onerror", this.FileList_onerror, this);
                    vFile.open(null, 1);
                }
            }
        };
        this.FileList_onsuccess = function(obj, e)
        {
            switch (e.reason)
        	{
                case 1:
                    obj.getFileSize();
                    break;
                case 9:
                    // 하나씩 올리는 화면이므로 바로 업로드 처리
                    this.FileUpTransfer00.clearFileList();
                    this.FileUpTransfer00.addFile(obj.filename, obj);

        			if (this.FileUpTransfer00.filelist.length > 0)
        			{
                        this._waitCursor(true);
                        var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl;

                        var filename = this.FileUpTransfer00.filelist[0].filename;
                        var fileext = filename.substring(filename.lastIndexOf('.'));

        				var CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        				var ID_USER = this.dsList.getColumn(this.dsList.rowposition, "ID_USER");

        				this.FileUpTransfer00.setPostData("CD_CORP",  CD_CORP);
        				this.FileUpTransfer00.setPostData("ID_SABUN", ID_USER);
                        this.FileUpTransfer00.setPostData("path",  CD_CORP + this.filepath + "|" + ID_USER);
                        this.FileUpTransfer00.upload(sUploadUrl);
                    }
                    break;
            }
        }
        this.FileList_onerror = function(obj, e)
        {
            trace("errortype: " + e.errortype);
            trace("errormsg: " + e.errormsg);
            trace("statuscode: " + e.statuscode);
        };

        this.FileUpTransfer00_onprogress = function(obj, e)
        {
            trace("FileUpTransfer00_onprogress: " + e.loaded + "/" + e.total);
        };
        this.FileUpTransfer00_onsuccess = function(obj, e)
        {
            this._waitCursor(false);
            trace("FileUpTransfer00_onsuccess: " + e.code + "/" + e.message);
        };
        this.FileUpTransfer00_onerror = function(obj, e)
        {
            this._waitCursor(false);
            if (e.errormsg.indexOf("maxsize") > -1)
        	{
                this.gfnAlert("첨부파일 허용용량(" + this.gfnCutFileSize(nexacro.toNumber(e.errormsg.split(':')[1])) + ")을 초과할 수 없습니다.");
            }
        	else
        	{
                this.gfnAlert(e.errormsg);
            }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWA_SILHENG_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.fdg00.addEventHandler("onclose",this.fdg00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
        };
        this.loadIncludeScript("DZU_USERREGISTRATION.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
