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
            this.set_titletext("ERP부서/현장정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_DEPT_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DZZPR_DEPT_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DZZPR_DEPT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DZZPR_DEPT_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">부서코드</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"VALUE\">부서명</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_USE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">%</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">사용</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("5");
            obj.set_text("법인코드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCorp","sta00_00:0","10","230","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","ccfCorp:30","10","150","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_text("사업자등록번호");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_SEARCH","rdoTY_GUBUN:0","10","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","txtDS_SEARCH:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사용유무");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_USE","sta00:0","10","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsYN_USE");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_autofittype("none");
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
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DZU_DEPT.xfdl", function() {
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

        	this.FormBtns.Select.click();

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
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnDooraySync = this.gfnFormButtonAdd("DooraySync", "fnDooraySync");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCorp = this.divSearch.form.ccfCorp;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCorp.CodeFindName = "DZX_CFCORP";
        	this.ccfCorp.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCorp.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCorp.form.CDTextBox.set_value(this.AuthClient.CD_CORP);

        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZU_DEPT");
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("YN_USE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("CD_DEPT", "string");
        	this.dsInsert.addColumn("DS_DEPT", "string");
        	this.dsInsert.addColumn("TY_DEPT", "string");
        	this.dsInsert.addColumn("YN_USE", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("SN_PRINT", "string");
        	this.dsInsert.addColumn("NO_LEVEL", "string");
        	this.dsInsert.addColumn("CD_UPDEPT", "string");
        	this.dsInsert.addColumn("ID_EMAIL", "string");
        	this.dsInsert.addColumn("YN_EMAIL", "string");
        	this.dsInsert.addColumn("YN_USE_DOORAY", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("CD_DEPT", "string");
        	this.dsUpdate.addColumn("DS_DEPT", "string");
        	this.dsUpdate.addColumn("TY_DEPT", "string");
        	this.dsUpdate.addColumn("YN_USE", "string");
        	this.dsUpdate.addColumn("ID_INSERT", "string");
        	this.dsUpdate.addColumn("CD_COSTCENTER", "string");
        	this.dsUpdate.addColumn("SN_PRINT", "string");
        	this.dsUpdate.addColumn("NO_LEVEL", "string");
        	this.dsUpdate.addColumn("CD_UPDEPT", "string");
        	this.dsUpdate.addColumn("ID_EMAIL", "string");
        	this.dsUpdate.addColumn("YN_EMAIL", "string");
        	this.dsUpdate.addColumn("YN_USE_DOORAY", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("CD_DEPT", "string");
        	this.dsDelete.addColumn("ID_INSERT", "string");

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

        	var nRow = this.dsSelect.addRow();
        	this.dsSelect.setColumn(nRow, "CD_CORP", this.ccfCorp.form.CDTextBox.value);
        	this.dsSelect.setColumn(nRow, "CD_DEPT", this.divSearch.form.txtDS_SEARCH.text);
        	this.dsSelect.setColumn(nRow, "TY_GUBUN", this.divSearch.form.rdoTY_GUBUN.value);
        	this.dsSelect.setColumn(nRow, "YN_USE", this.divSearch.form.cboYN_USE.value);

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
        	var nRow = this.gfnGridAdd(this.dxGrid);
        	var ds = this.dxGrid.getBindDataset();
        	ds.setColumn(nRow, 'CD_CORP', this.ccfCorp.form.CDTextBox.value);
        	ds.setColumn(nRow, 'DS_CORP', this.ccfCorp.form.DSTextBox.value);
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
        				var nRow = this.dsInsert.addRow();
        				this.dsInsert.copyRow(nRow, this.dsList, i);
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


        this.fnDooraySync = function(obj, e)
        {
        	var YN_USE_DOORAY = this.dsList.getColumn(this.dsList.rowposition, "YN_USE_DOORAY");

        	if (YN_USE_DOORAY != 'Y')
        	{
        		this.gfnAlert('그룹웨어사용 부서가 아닙니다');
        		return false;
        	}

        	this.gfnConfirm('그룹웨어에 전송 하시겠습니까?', function(svcId, isOk) {
        		if (!isOk)	return false;

        		var YN_USE = this.dsList.getColumn(this.dsList.rowposition, "YN_USE");

        		this.dsParam.clearData();

        		var nRow = this.dsParam.addRow();
        		this.dsParam.setColumn(nRow, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        		this.dsParam.setColumn(nRow, "CD_DEPT", this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT"));
        		this.dsParam.setColumn(nRow, "YN_DEL", this.gfnDecode(YN_USE, 'N', 'Y', 'N'));

        		var strSvcId    = "sync";
        		var strSvcType  = "dooray/departments";
        		var inProc		= "";
        		var inData      = "dsParam=dsParam";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";
        		this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        	}, 'fnDooraySync_confirm');
        };
        /************************************************************************
         * Validate
         ************************************************************************/

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
        	else if(svcID == "sync") {
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

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCorp") {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_EnterCell = function(obj, row, cell)
        {
        	var ds = obj.getBindDataset();
        	var nRow = obj.getDatasetRow(row);

        	this.btnDooraySync.set_enable((ds.getColumn(nRow, 'YN_USE_DOORAY') == 'Y' && ds.getColumn(nRow, 'YN_DOORAY_SYNC') == 'N'));

        };

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "CD_UPDEPT") {
        		var cd_corp = this.ccfCorp.form.CDTextBox.value;
        		if(this.gfnIsNull(cd_corp)) {
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}
         		dsUserParam.setColumn(nrow, "CD_CORP", cd_corp);
         	}

        	return true;
        }


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj, e) {
        	if(e.pretext != e.posttext) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.txtDS_SEARCH.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.cboYN_USE.addEventHandler("onitemchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DZU_DEPT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
