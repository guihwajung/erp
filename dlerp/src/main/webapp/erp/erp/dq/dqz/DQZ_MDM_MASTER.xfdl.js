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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_MDM_MASTERCODE_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DZZPR_MDM_MASTER_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DZZPR_MDM_MASTER_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DZZPR_MDM_MASTER_DELETE</Col></Row><Row><Col id=\"TARGET\">select_combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">deploy</Col><Col id=\"SP\">DZZPR_MDM_MASTER_DEPLOY</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"NM_DB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SYSTEM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNmDatabase", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","0.0","10.0","79.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("시스템");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SYSTEM","staCD_SYSTEM:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
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

            obj = new Static("staNM_DB",null,"10.0","92","24.0","150",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("배포DB");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SYSTEM.form.CDTextBox","value","dsSearch","CD_SYSTEM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboNM_DB","value","dsSearch","NM_DB");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DQZ_MDM_MASTER.xfdl", function() {
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
        	this.fnCombo();

        	this.FormBtns.Select.click();
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
        	this.btn1 = this.gfnFormButtonAdd("ColumnInfo", "fnColumnInfo");
        	this.btnSystemDetail = this.gfnFormButtonAdd("btnSystemDetail", "fnSystemDetail");
        	this.btnCatDetail = this.gfnFormButtonAdd("btnCatDetail", "fnCatDetail");
        	this.btnDeploy = this.gfnFormButtonAdd("Deploy", "fnDeploy");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SYSTEM = this.divSearch.form.ccfCD_SYSTEM;
        	this.cboNM_DB = this.divSearch.form.cboNM_DB;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SYSTEM.CodeFindName = "DZX_CFSYSTEM";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DQ", "DQZ_MDM_MASTER");

        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_onselectchanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SYSTEM", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SYSTEM", "string");
        	this.dsInsert.addColumn("CD_MASTER", "string");
        	this.dsInsert.addColumn("DS_MASTER", "string");
        	this.dsInsert.addColumn("TY_COMMON", "string");
        	this.dsInsert.addColumn("CD_TABLE", "string");
        	this.dsInsert.addColumn("TY_INPUT", "string");
        	this.dsInsert.addColumn("RT_READ", "string");
        	this.dsInsert.addColumn("RT_WRITE", "string");
        	this.dsInsert.addColumn("CD_INPUT", "string");
        	this.dsInsert.addColumn("ID_CODEFIND", "string");
        	this.dsInsert.addColumn("DS_PROCEDURE", "string");
        	this.dsInsert.addColumn("DS_COMBOEXEC", "string");
        	this.dsInsert.addColumn("CAT_01", "string");
        	this.dsInsert.addColumn("CAT_02", "string");
        	this.dsInsert.addColumn("CAT_03", "string");
        	this.dsInsert.addColumn("DS_WHERE", "string");


        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SYSTEM", "string");
        	this.dsUpdate.addColumn("CD_MASTER", "string");
        	this.dsUpdate.addColumn("DS_MASTER", "string");
        	this.dsUpdate.addColumn("TY_COMMON", "string");
        	this.dsUpdate.addColumn("CD_TABLE", "string");
        	this.dsUpdate.addColumn("TY_INPUT", "string");
        	this.dsUpdate.addColumn("RT_READ", "string");
        	this.dsUpdate.addColumn("RT_WRITE", "string");
        	this.dsUpdate.addColumn("CD_INPUT", "string");
        	this.dsUpdate.addColumn("ID_CODEFIND", "string");
        	this.dsUpdate.addColumn("DS_PROCEDURE", "string");
        	this.dsUpdate.addColumn("DS_COMBOEXEC", "string");
        	this.dsUpdate.addColumn("CAT_01", "string");
        	this.dsUpdate.addColumn("CAT_02", "string");
        	this.dsUpdate.addColumn("CAT_03", "string");
        	this.dsUpdate.addColumn("DS_WHERE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SYSTEM", "string");
        	this.dsDelete.addColumn("CD_MASTER", "string");
        	this.dsDelete.addColumn("CD_INPUT", "string");

        	// 콤보 조회
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	// 배포
        	this.dsDeploy = new Dataset();
        	this.dsDeploy.addColumn("NM_DB", "string");
        	this.dsDeploy.addColumn("CD_SYSTEM", "string");
        	this.dsDeploy.addColumn("CD_MASTER", "string");
        	this.dsDeploy.addColumn("ID_USER", "string");
        }

        this.fnCombo = function() {
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
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SYSTEM", this.dsSearch.getColumn(0, "CD_SYSTEM"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
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
        				this.dsInsert.setColumn(nrow, "CD_SYSTEM", this.dsList.getColumn(i, "CD_SYSTEM"));
        				this.dsInsert.setColumn(nrow, "CD_MASTER", this.dsList.getColumn(i, "CD_MASTER"));
        				this.dsInsert.setColumn(nrow, "DS_MASTER", this.dsList.getColumn(i, "DS_MASTER"));
        				this.dsInsert.setColumn(nrow, "TY_COMMON", this.dsList.getColumn(i, "TY_COMMON"));
        				this.dsInsert.setColumn(nrow, "CD_TABLE", this.dsList.getColumn(i, "CD_TABLE"));
        				this.dsInsert.setColumn(nrow, "TY_INPUT", this.dsList.getColumn(i, "TY_INPUT"));
        				this.dsInsert.setColumn(nrow, "RT_READ", this.dsList.getColumn(i, "RT_READ"));
        				this.dsInsert.setColumn(nrow, "RT_WRITE", this.dsList.getColumn(i, "RT_WRITE"));
        				this.dsInsert.setColumn(nrow, "CD_INPUT", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "ID_CODEFIND", this.dsList.getColumn(i, "ID_CODEFIND"));
        				this.dsInsert.setColumn(nrow, "DS_PROCEDURE", this.dsList.getColumn(i, "DS_PROCEDURE"));
        				this.dsInsert.setColumn(nrow, "DS_COMBOEXEC", this.dsList.getColumn(i, "DS_COMBOEXEC"));
        				this.dsInsert.setColumn(nrow, "CAT_01", this.dsList.getColumn(i, "CAT_01"));
        				this.dsInsert.setColumn(nrow, "CAT_02", this.dsList.getColumn(i, "CAT_02"));
        				this.dsInsert.setColumn(nrow, "CAT_03", this.dsList.getColumn(i, "CAT_03"));
        				this.dsInsert.setColumn(nrow, "DS_WHERE", this.dsList.getColumn(i, "DS_WHERE"));
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_SYSTEM", this.dsList.getColumn(i, "CD_SYSTEM"));
        				this.dsUpdate.setColumn(nrow, "CD_MASTER", this.dsList.getColumn(i, "CD_MASTER"));
        				this.dsUpdate.setColumn(nrow, "DS_MASTER", this.dsList.getColumn(i, "DS_MASTER"));
        				this.dsUpdate.setColumn(nrow, "TY_COMMON", this.dsList.getColumn(i, "TY_COMMON"));
        				this.dsUpdate.setColumn(nrow, "CD_TABLE", this.dsList.getColumn(i, "CD_TABLE"));
        				this.dsUpdate.setColumn(nrow, "TY_INPUT", this.dsList.getColumn(i, "TY_INPUT"));
        				this.dsUpdate.setColumn(nrow, "RT_READ", this.dsList.getColumn(i, "RT_READ"));
        				this.dsUpdate.setColumn(nrow, "RT_WRITE", this.dsList.getColumn(i, "RT_WRITE"));
        				this.dsUpdate.setColumn(nrow, "CD_INPUT", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "ID_CODEFIND", this.dsList.getColumn(i, "ID_CODEFIND"));
        				this.dsUpdate.setColumn(nrow, "DS_PROCEDURE", this.dsList.getColumn(i, "DS_PROCEDURE"));
        				this.dsUpdate.setColumn(nrow, "DS_COMBOEXEC", this.dsList.getColumn(i, "DS_COMBOEXEC"));
        				this.dsUpdate.setColumn(nrow, "CAT_01", this.dsList.getColumn(i, "CAT_01"));
        				this.dsUpdate.setColumn(nrow, "CAT_02", this.dsList.getColumn(i, "CAT_02"));
        				this.dsUpdate.setColumn(nrow, "CAT_03", this.dsList.getColumn(i, "CAT_03"));
        				this.dsUpdate.setColumn(nrow, "DS_WHERE", this.dsList.getColumn(i, "DS_WHERE"));
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_SYSTEM", this.dsList.getColumn(i, "CD_SYSTEM"));
        				this.dsDelete.setColumn(nrow, "CD_MASTER", this.dsList.getColumn(i, "CD_MASTER"));
        				this.dsDelete.setColumn(nrow, "CD_INPUT", this.AuthClient.ID_USER);
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
        	return validate;
        };

        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {
        	var validate = true;

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        				if(this.dsList.getColumn(i, "TY_COMMON") == "N") {
        					if(this.gfnIsNull(this.dsList.getColumn(i, "CD_TABLE"))) {
        						this.gfnAlert("표준코드여부 'N' 입력시 테이블명은 필수입력입니다.");
        						validate = false;
        					}
        				}
        				break;
        		}
        	}

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
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if (svcID == "deploy") {
        		if (errorCode == 0) {
        		var msg = "공통코드 '" + this.dsList.getColumn(this.dsList.rowposition, "DS_MASTER") +
        		          "' [" +this.dsList.getColumn(this.dsList.rowposition, "CD_SYSTEM") + " / " + this.dsList.getColumn(this.dsList.rowposition, "CD_MASTER") +
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
        this.fnGrid_onselectchanged = function(obj,e)
        {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	var flag = this.gfnGetFlag(this.dsList, this.dsList.rowposition);
        	if(flag == "I") {
        		this.btn1.set_enable(false);
        	}
        	else {
        		this.btn1.set_enable(true);
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
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnColumnInfo = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {};
        	param.CD_SYSTEM = this.dsList.getColumn(this.dsList.rowposition, "CD_SYSTEM");
        	param.CD_MASTER = this.dsList.getColumn(this.dsList.rowposition, "CD_MASTER");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DQZ_MDM_MASTERCOL", "", param);

        }

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        this.fnSystemDetail = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {};
        	var nRow = this.dsList.rowposition;
        	param.CD_SYSTEM = this.dsList.getColumn(nRow, "CD_SYSTEM");
        	//param.DS_SYSTEM = this.dsList.getColumn(nRow, "DS_SYSTEM");
        	param.CD_MASTER = this.dsList.getColumn(nRow, "CD_MASTER");
        	//param.DS_MASTER = this.dsList.getColumn(nRow, "DS_MASTER");

        	trace(" param=>" + param);

        	this.gfnFormOpen("DZO", "DQZ_MDM_MASTERINFO_D", "", param);

        }


        this.fnCatDetail = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {};
        	var nRow = this.dsList.rowposition;
        	param.CD_SYSTEM = this.dsList.getColumn(nRow, "CD_SYSTEM");
        	param.CD_MASTER = this.dsList.getColumn(nRow, "CD_MASTER");
        	param.CAT_01 = this.dsList.getColumn(nRow, "CAT_01");

        	this.gfnFormOpen("DZO", "DQZ_MDM_MASTERINFO_CAT_D", "", param);

        }

        //배포처리
        this.fnDeploy = function(obj, e) {
        	var msg = "공통코드 '" + this.dsList.getColumn(this.dsList.rowposition, "DS_MASTER") +
        			  "' [" +this.dsList.getColumn(this.dsList.rowposition, "CD_SYSTEM") + " / " + this.dsList.getColumn(this.dsList.rowposition, "CD_MASTER") +
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
        			this.dsDeploy.setColumn(nrow, "CD_MASTER", this.dsList.getColumn(this.dsList.rowposition, "CD_MASTER"));
        			this.dsDeploy.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);

        			if (this.dsDeploy.rowcount == 0) return;

        			var strSvcId    = "deploy";
        			var strSvcType  = "save";
        			var inProc		= "_dsProc";
        			var inData      = "deploy=dsDeploy";
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DQZ_MDM_MASTER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
