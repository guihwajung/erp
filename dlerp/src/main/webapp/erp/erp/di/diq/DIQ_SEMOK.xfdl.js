(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DLB_APPROPRIATE");
            this.set_titletext("세목코드관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DIQPR_SEMOK_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DIQPR_SEMOK_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DIQPR_SEMOK_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DIQPR_SEMOK_DELETE</Col></Row><Row><Col id=\"TARGET\">copy</Col><Col id=\"SP\">DIQPR_SEMOK_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_BIMOK\" type=\"STRING\" size=\"256\"/><Column id=\"DS_BIMOK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_USE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YR_ACCOUNT\"/><Col id=\"YN_USE\"/><Col id=\"CD_BIMOK\"/><Col id=\"DS_BIMOK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_USE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">전체</Col><Col id=\"CD_CODE\"/></Row><Row><Col id=\"DS_CODE\">사용</Col><Col id=\"CD_CODE\">Y</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("회계년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_ACCOUNT","sta00:0","10","60","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ctclYR_ACCOUNT:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("비목코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_BIMOK","sta01:0","10","300","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DIX_CFBIMOK_BUDGET");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","ccfCD_BIMOK:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_USE","sta02:0","10","100","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsYN_USE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
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
            obj = new BindItem("item0","divSearch.form.ctclYR_ACCOUNT.form.TextBox","value","dsSearch","YR_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccboYN_USE","value","dsSearch","YN_USE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_BIMOK.form.CDTextBox","value","dsSearch","CD_BIMOK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_BIMOK.form.DSTextBox","value","dsSearch","DS_BIMOK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DIQ_SEMOK.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "YR_ACCOUNT", this.gfnGetDate().substr(0, 4));
        	this.dsSearch.setColumn(0, "YN_USE", "Y");
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCopy = this.gfnFormButtonAdd("btnCopy", "fnCopyData");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYR_ACCOUNT = this.divSearch.form.ctclYR_ACCOUNT;
        	this.ccfCD_BIMOK = this.divSearch.form.ccfCD_BIMOK;
        	this.ccboYN_USE = this.divSearch.form.ccboYN_USE;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DI", "DIQ_SEMOK");

        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	//this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	this.ccfCD_BIMOK.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YR_ACCOUNT", "string");
        	this.dsSelect.addColumn("YN_USE", "string");
        	this.dsSelect.addColumn("CD_BIMOK", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_BIMOK", "string");
        	this.dsInsert.addColumn("CD_SEMOK", "string");
        	this.dsInsert.addColumn("DS_SEMOK", "string");
        	this.dsInsert.addColumn("YR_ACCOUNT", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");
        	this.dsInsert.addColumn("MM_PERIOD", "int");
        	this.dsInsert.addColumn("CD_TYPE", "string");
        	this.dsInsert.addColumn("CD_TYPE2", "string");
        	this.dsInsert.addColumn("YN_SUJIUSE", "string");
        	this.dsInsert.addColumn("CD_SUJI", "string");
        	this.dsInsert.addColumn("YN_CONTROL", "string");
        	this.dsInsert.addColumn("YN_USE", "string");
        	this.dsInsert.addColumn("DS_REM", "string");
        	this.dsInsert.addColumn("YN_SEND", "string");
        	this.dsInsert.addColumn("GR_SEARCH", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_BIMOK", "string");
        	this.dsUpdate.addColumn("CD_SEMOK", "string");
        	this.dsUpdate.addColumn("DS_SEMOK", "string");
        	this.dsUpdate.addColumn("YR_ACCOUNT", "string");
        	this.dsUpdate.addColumn("ID_INSERT", "string");
        	this.dsUpdate.addColumn("MM_PERIOD", "int");
        	this.dsUpdate.addColumn("CD_TYPE", "string");
        	this.dsUpdate.addColumn("CD_TYPE2", "string");
        	this.dsUpdate.addColumn("YN_SUJIUSE", "string");
        	this.dsUpdate.addColumn("CD_SUJI", "string");
        	this.dsUpdate.addColumn("YN_CONTROL", "string");
        	this.dsUpdate.addColumn("YN_USE", "string");
        	this.dsUpdate.addColumn("DS_REM", "string");
        	this.dsUpdate.addColumn("YN_SEND", "string");
        	this.dsUpdate.addColumn("GR_SEARCH", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_BIMOK", "string");
        	this.dsDelete.addColumn("CD_SEMOK", "string");
        	this.dsDelete.addColumn("YR_ACCOUNT", "string");

        	// COPY
        	this.dsCopy = new Dataset();
        	this.dsCopy.addColumn("YR_ACCOUNT", "string");	// 예산년도
        	this.dsCopy.addColumn("ID_INSERT", "string");	// 작업자
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
        	this.dsSelect.setColumn(0, "YR_ACCOUNT", this.dsSearch.getColumn(0, "YR_ACCOUNT"));
        	this.dsSelect.setColumn(0, "YN_USE", this.dsSearch.getColumn(0, "YN_USE"));
        	this.dsSelect.setColumn(0, "CD_BIMOK", this.dsSearch.getColumn(0, "CD_BIMOK"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nRow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nRow, "YR_ACCOUNT", this.dsSearch.getColumn(0, "YR_ACCOUNT"));
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return false;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_BIMOK", this.dsList.getColumn(i, "CD_BIMOK"));
        				this.dsInsert.setColumn(nrow, "CD_SEMOK", this.dsList.getColumn(i, "CD_SEMOK"));
        				this.dsInsert.setColumn(nrow, "DS_SEMOK", this.dsList.getColumn(i, "DS_SEMOK"));
        				this.dsInsert.setColumn(nrow, "YR_ACCOUNT", this.dsSearch.getColumn(0, "YR_ACCOUNT"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "MM_PERIOD", this.dsList.getColumn(i, "MM_PERIOD"));
        				this.dsInsert.setColumn(nrow, "CD_TYPE", this.dsList.getColumn(i, "CD_TYPE"));
        				this.dsInsert.setColumn(nrow, "CD_TYPE2", this.dsList.getColumn(i, "CD_TYPE2"));
        				this.dsInsert.setColumn(nrow, "YN_SUJIUSE", this.dsList.getColumn(i, "YN_SUJIUSE"));
        				this.dsInsert.setColumn(nrow, "CD_SUJI", this.dsList.getColumn(i, "CD_SUJI"));
        				this.dsInsert.setColumn(nrow, "YN_CONTROL", this.dsList.getColumn(i, "YN_CONTROL"));
        				this.dsInsert.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsInsert.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        				this.dsInsert.setColumn(nrow, "YN_SEND", this.dsList.getColumn(i, "YN_SEND"));
        				this.dsInsert.setColumn(nrow, "GR_SEARCH", this.dsList.getColumn(i, "GR_SEARCH"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_BIMOK", this.dsList.getColumn(i, "CD_BIMOK"));
        				this.dsUpdate.setColumn(nrow, "CD_SEMOK", this.dsList.getColumn(i, "CD_SEMOK"));
        				this.dsUpdate.setColumn(nrow, "DS_SEMOK", this.dsList.getColumn(i, "DS_SEMOK"));
        				this.dsUpdate.setColumn(nrow, "YR_ACCOUNT", this.dsSearch.getColumn(0, "YR_ACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "MM_PERIOD", this.dsList.getColumn(i, "MM_PERIOD"));
        				this.dsUpdate.setColumn(nrow, "CD_TYPE", this.dsList.getColumn(i, "CD_TYPE"));
        				this.dsUpdate.setColumn(nrow, "CD_TYPE2", this.dsList.getColumn(i, "CD_TYPE2"));
        				this.dsUpdate.setColumn(nrow, "YN_SUJIUSE", this.dsList.getColumn(i, "YN_SUJIUSE"));
        				this.dsUpdate.setColumn(nrow, "CD_SUJI", this.dsList.getColumn(i, "CD_SUJI"));
        				this.dsUpdate.setColumn(nrow, "YN_CONTROL", this.dsList.getColumn(i, "YN_CONTROL"));
        				this.dsUpdate.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsUpdate.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        				this.dsUpdate.setColumn(nrow, "YN_SEND", this.dsList.getColumn(i, "YN_SEND"));
        				this.dsUpdate.setColumn(nrow, "GR_SEARCH", this.dsList.getColumn(i, "GR_SEARCH"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_BIMOK", this.dsList.getColumn(i, "CD_BIMOK"));
        				this.dsDelete.setColumn(nrow, "CD_SEMOK", this.dsList.getColumn(i, "CD_SEMOK"));
        				this.dsDelete.setColumn(nrow, "YR_ACCOUNT", this.dsList.getColumn(i, "YR_SEMOK"));
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

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YR_ACCOUNT"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYR_ACCOUNT.form.TextBox.setFocus();
        		}
        		this.gfnAlert("회계년도는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		validate = false;
        	}

        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		//this.btnDetail.set_enable(this.FormInfo.TY_AUTH != "R");
        	}
        	else if (svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "copy") {
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
        	if (id == "ccfCD_BIMOK") {
        		dsUserParam.setColumn(nrow, "YR_ACCOUNT", this.dsSearch.getColumn(0, "YR_ACCOUNT"));
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_AfterEdit = function(obj,e) {
        	var row= this.dsList.rowposition
        	if (e.columnid == "YN_SUJI_DF") {
        		if (e.oldvalue != e.newvalue) {
        			if (e.newvalue == "Y") {
        				this.dsList.setColumn(this.dsList.rowposition, "CD_SUJI" ,"");
        				this.dsList.setColumn(this.dsList.rowposition, "DS_SUJI" ,"");
        			}
        		}
        	}
        	if (e.columnid == "CD_BIMOK") {
        		if (e.oldvalue != e.newvalue) {
        			this.dsList.setColumn(row, "CD_SEMOK", "");
        			this.dsList.setColumn(row, "DS_SEMOK", "");
        		}
        	}
        }

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
         	if (id == "DIX_CFBIMOK_BUDGET") {
        		if (this.gfnIsNull(this.dsSearch.getColumn(0, "YR_ACCOUNT"))) {
        			this.gfnAlert("회계년도를 먼저 입력하세요.");
        			return false;
        		}
         		dsUserParam.setColumn(nrow, "YR_ACCOUNT", this.dsSearch.getColumn(0, "YR_ACCOUNT"));
         	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	var row = this.dsList.rowposition;
        	if (id == "DHX_CFBUDGET_BIMOK") {
        			this.dsList.setColumn(row, "CD_SEMOK", "");
        			this.dsList.setColumn(row, "DS_SEMOK", "");
        		if (arr.length > 0) {
        		}
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.fnDetail = function(obj,e) {
        	var param = {};
        	param.KIND = "SEMOK";
        	param.YM_FROM = nexacro.toNumber(this.dsSearch.getColumn(0, "YR_ACCOUNT")) - 1;
        	param.YM_TO = this.dsSearch.getColumn(0, "YR_ACCOUNT");;
        	param.TITLE = "세목코드 복사 및 삭제";

        	this.gfnFormOpen("DIQ", "DIQ_DATACREATEDLG", "fnPopupCallback", param);
        }

        this.fnPopupCallback = function(svcID, val) {
        	if (svcID.indexOf("DIQ_DATACREATEDLG") > -1) {
        		if (val) {
        			this.FormBtns.Select.click();
        		}
        	}
        }


        this.fnCopyData = function(obj,e) {
        //if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.gfnConfirm("전년도 세목자료를 복사 하시겠습니까?", "fnConfirm_Confirm", "Y");

        }

        this.fnConfirm_Confirm = function(strId, val) {
        	if(val == true) {
        		this.fnCopy();
        	}
        }

        /*
         *	세목복사처리
         */
        this.fnCopy = function() {
        	// alert(tyWrk);
        	this.dsCopy.clearData();

        	this.dsCopy.addRow();

        	var nRow = this.dsList.rowposition;

        	this.dsCopy.setColumn(0, "YR_ACCOUNT", this.dsSearch.getColumn(0, "YR_ACCOUNT"));
        	this.dsCopy.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DIQ_SEMOK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
