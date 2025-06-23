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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DXXPR_CODEFINDMST_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DXXPR_CODEFINDMST_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DXXPR_CODEFINDMST_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DXXPR_CODEFINDMST_DELETE</Col></Row><Row><Col id=\"TARGET\">select_combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">deploy</Col><Col id=\"SP\">DXXPR_CODEFIND_DEPLOY</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNmDatabase", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"NM_DB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","10","79","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("1");
            obj.set_text("시스템");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfSystem","sta00:0","10","200","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNM_DB",null,"10.0","92","24.0","150",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("배포DB");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboNM_DB",null,"10","150","24","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
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
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfSystem.form.CDTextBox","value","dsSearch","CD_SYSTEM");
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
        this.registerScript("DZU_CDFINDMST.xfdl", function() {
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

        };

        /************************************************************************
         * 버튼 설정
         ************************************************************************/
        this.fnSetButton = function() {
        // 	var id_group = this.FormInfo.ID_GROUP;
        // 	var gr_search = this.FormInfo.GR_SEARCH;
        // 	var cd_role = this.FormInfo.CD_ROLE;
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("Detail", "fnDetail");
        	this.btnDeploy = this.gfnFormButtonAdd("Deploy", "fnDeploy");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfSystem = this.divSearch.form.ccfSystem;
        	this.cboNM_DB = this.divSearch.form.cboNM_DB;
        	this.dxGrid = this.divData.form.objGrid;
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfSystem.CodeFindName = "DZX_CFSYSTEM";
        	this.ccfSystem.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZU_CDFINDMST");
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SYSTEM", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CFMST", "string");
        	this.dsInsert.addColumn("NM_CFMST", "string");
        	this.dsInsert.addColumn("NM_SP", "string");
        	this.dsInsert.addColumn("CD_SYSTEM", "string");
        	this.dsInsert.addColumn("CN_ROW", "int");
        	this.dsInsert.addColumn("YN_TREE", "string");
        	this.dsInsert.addColumn("NO_EXPANDLEVEL", "int");
        	this.dsInsert.addColumn("YN_MULTISELECT", "string");
        	this.dsInsert.addColumn("NO_SEARCH_IDX", "int");
        	this.dsInsert.addColumn("DLG_HEIGHT", "int");
        	this.dsInsert.addColumn("DLG_WIDTH", "int");
        	this.dsInsert.addColumn("DS_CONNECT", "string");
        	this.dsInsert.addColumn("RM_REMARK", "string");
        	this.dsInsert.addColumn("DS_KEYFIELD", "string");
        	this.dsInsert.addColumn("DS_PARENTFIELD", "string");
        	this.dsInsert.addColumn("DS_LEVEL_FIELD", "string");
        	this.dsInsert.addColumn("YN_TREESELECT", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CFMST", "string");
        	this.dsUpdate.addColumn("NM_CFMST", "string");
        	this.dsUpdate.addColumn("NM_SP", "string");
        	this.dsUpdate.addColumn("CD_SYSTEM", "string");
        	this.dsUpdate.addColumn("CN_ROW", "int");
        	this.dsUpdate.addColumn("YN_TREE", "string");
        	this.dsUpdate.addColumn("NO_EXPANDLEVEL", "int");
        	this.dsUpdate.addColumn("YN_MULTISELECT", "string");
        	this.dsUpdate.addColumn("NO_SEARCH_IDX", "int");
        	this.dsUpdate.addColumn("DLG_HEIGHT", "int");
        	this.dsUpdate.addColumn("DLG_WIDTH", "int");
        	this.dsUpdate.addColumn("DS_CONNECT", "string");
        	this.dsUpdate.addColumn("DS_KEYFIELD", "string");
        	this.dsUpdate.addColumn("DS_PARENTFIELD", "string");
        	this.dsUpdate.addColumn("DS_LEVEL_FIELD", "string");
        	this.dsUpdate.addColumn("YN_TREESELECT", "string");
        	this.dsUpdate.addColumn("RM_REMARK", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CFMST", "string");

        	// 콤보 조회
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	// 배포
        	this.dsDeploy = new Dataset();
        	this.dsDeploy.addColumn("NM_DB", "string");
        	this.dsDeploy.addColumn("CD_CFMST", "string");
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
        	this.dsSelect.setColumn(0, "CD_SYSTEM", this.ccfSystem.form.CDTextBox.text);

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
        	this.gfnGridAdd(this.dxGrid);

        	trace(this.btn1.forceEnabled);
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

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_CFMST", this.dsList.getColumn(i, "CD_CFMST"));
        				this.dsInsert.setColumn(nrow, "NM_CFMST", this.dsList.getColumn(i, "NM_CFMST"));
        				this.dsInsert.setColumn(nrow, "NM_SP", this.dsList.getColumn(i, "NM_SP"));
        				this.dsInsert.setColumn(nrow, "CD_SYSTEM", this.dsList.getColumn(i, "CD_SYSTEM"));
        				this.dsInsert.setColumn(nrow, "CN_ROW", this.dsList.getColumn(i, "CN_ROW"));
        				this.dsInsert.setColumn(nrow, "YN_TREE", this.dsList.getColumn(i, "YN_TREE"));
        				this.dsInsert.setColumn(nrow, "NO_EXPANDLEVEL", this.dsList.getColumn(i, "NO_EXPANDLEVEL"));
        				this.dsInsert.setColumn(nrow, "YN_MULTISELECT", this.dsList.getColumn(i, "YN_MULTISELECT"));
        				this.dsInsert.setColumn(nrow, "NO_SEARCH_IDX", this.dsList.getColumn(i, "NO_SEARCH_IDX"));
        				this.dsInsert.setColumn(nrow, "DLG_HEIGHT", this.dsList.getColumn(i, "DLG_HEIGHT"));
        				this.dsInsert.setColumn(nrow, "DLG_WIDTH", this.dsList.getColumn(i, "DLG_WIDTH"));
        				this.dsInsert.setColumn(nrow, "DS_CONNECT", this.dsList.getColumn(i, "DS_CONNECT"));
        				this.dsInsert.setColumn(nrow, "RM_REMARK", this.dsList.getColumn(i, "RM_REMARK"));
        				this.dsInsert.setColumn(nrow, "DS_KEYFIELD", this.dsList.getColumn(i, "DS_KEYFIELD"));
        				this.dsInsert.setColumn(nrow, "DS_PARENTFIELD", this.dsList.getColumn(i, "DS_PARENTFIELD"));
        				this.dsInsert.setColumn(nrow, "DS_LEVEL_FIELD", this.dsList.getColumn(i, "DS_LEVEL_FIELD"));
        				this.dsInsert.setColumn(nrow, "YN_TREESELECT", this.dsList.getColumn(i, "YN_TREESELECT"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CFMST", this.dsList.getColumn(i, "CD_CFMST"));
        				this.dsUpdate.setColumn(nrow, "NM_CFMST", this.dsList.getColumn(i, "NM_CFMST"));
        				this.dsUpdate.setColumn(nrow, "NM_SP", this.dsList.getColumn(i, "NM_SP"));
        				this.dsUpdate.setColumn(nrow, "CD_SYSTEM", this.dsList.getColumn(i, "CD_SYSTEM"));
        				this.dsUpdate.setColumn(nrow, "CN_ROW", this.dsList.getColumn(i, "CN_ROW"));
        				this.dsUpdate.setColumn(nrow, "YN_TREE", this.dsList.getColumn(i, "YN_TREE"));
        				this.dsUpdate.setColumn(nrow, "NO_EXPANDLEVEL", this.dsList.getColumn(i, "NO_EXPANDLEVEL"));
        				this.dsUpdate.setColumn(nrow, "YN_MULTISELECT", this.dsList.getColumn(i, "YN_MULTISELECT"));
        				this.dsUpdate.setColumn(nrow, "NO_SEARCH_IDX", this.dsList.getColumn(i, "NO_SEARCH_IDX"));
        				this.dsUpdate.setColumn(nrow, "DLG_HEIGHT", this.dsList.getColumn(i, "DLG_HEIGHT"));
        				this.dsUpdate.setColumn(nrow, "DLG_WIDTH", this.dsList.getColumn(i, "DLG_WIDTH"));
        				this.dsUpdate.setColumn(nrow, "DS_CONNECT", this.dsList.getColumn(i, "DS_CONNECT"));
        				this.dsUpdate.setColumn(nrow, "DS_KEYFIELD", this.dsList.getColumn(i, "DS_KEYFIELD"));
        				this.dsUpdate.setColumn(nrow, "DS_PARENTFIELD", this.dsList.getColumn(i, "DS_PARENTFIELD"));
        				this.dsUpdate.setColumn(nrow, "DS_LEVEL_FIELD", this.dsList.getColumn(i, "DS_LEVEL_FIELD"));
        				this.dsUpdate.setColumn(nrow, "YN_TREESELECT", this.dsList.getColumn(i, "YN_TREESELECT"));
        				this.dsUpdate.setColumn(nrow, "RM_REMARK", this.dsList.getColumn(i, "RM_REMARK"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_CFMST", this.dsList.getColumn(i, "CD_CFMST"));
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
         * 확장버튼
         ************************************************************************/

         //배포처리
        this.fnDeploy = function()
        {
        	var CD_SYSTEM = this.dsList.getColumn(this.dsList.rowposition, 'CD_SYSTEM');
        	var CD_CFMST = this.dsList.getColumn(this.dsList.rowposition, 'CD_CFMST');
        	var NM_CFMST = this.dsList.getColumn(this.dsList.rowposition, 'NM_CFMST');

        	if (this.gfnIsNull(CD_SYSTEM) || this.gfnIsNull(CD_CFMST))
        	{
        		this.gfnAlert('코드파인드를 선택하세요.');
        		return false;
        	}

        	var msg = "코드파인드 '" + NM_CFMST +
        			  "' [" + CD_CFMST + "] 정보를 " + this.cboNM_DB.text + "에 배포하시겠습니까?";
        	this.gfnConfirm(msg, function(svcId, val) {
        		if (val) {
        		this.dsDeploy.clearData();

        		var nRow = this.dsDeploy.addRow();
        		this.dsDeploy.setColumn(nRow, 'NM_DB',  this.dsSearch.getColumn(0, "NM_DB"));
        		this.dsDeploy.setColumn(nRow, 'CD_CFMST', CD_CFMST);
        		this.dsDeploy.setColumn(nRow, 'ID_USER', this.AuthClient.ID_USER);

        		var strSvcId    = "deploy";
        		var strSvcType  = "select";
        		var inProc		= "_dsProc";
        		var inData      = "deploy=dsDeploy";
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
        	});
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.ccfSystem.form.CDTextBox.text)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfSystem.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("시스템을 입력하세요.");
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
        	}
        	else if(svcID =="deploy") {
        		if (errorCode == 0) {
        		var msg = "코드파인드 '" + this.dsList.getColumn(this.dsList.rowposition, 'NM_CFMST') +
        		          "' [" +this.dsList.getColumn(this.dsList.rowposition, 'CD_CFMST') +
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
        this.codefind_AfterCDTextChanged = function(id) {
        	this.fnSearchInit();
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
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        this.fnDetail = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {};
        	param.CD_CFMST = this.dsList.getColumn(this.dsList.rowposition, "CD_CFMST");
        	param.NM_CFMST = this.dsList.getColumn(this.dsList.rowposition, "NM_CFMST");
        	param.NM_SP = this.dsList.getColumn(this.dsList.rowposition, "NM_SP");
        	this.gfnFormOpen("DZO", "DZU_CDFINDDTL", "fnDetailCallback", param);

        }

        this.fnDetailCallback = function(strId, val) {
        	//this.FormBtns.Select.click();
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        		if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZU_CDFINDMST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
