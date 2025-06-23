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
            obj = new Dataset("dsListMaster", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">master</Col><Col id=\"SP\">DZZPR_DOTNET_FORM_AUTHORITY_SELECT</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_USERAUTHORITY_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DZZPR_USERAUTHORITY_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DZZPR_USERAUTHORITY_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DZZPR_USERAUTHORITY_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGR_SEARCH", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">1:전체</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">2:법인</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">3:본부</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"VALUE\">5:부문</Col></Row><Row><Col id=\"CODE\">7</Col><Col id=\"VALUE\">7:부서</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"VALUE\">9:개인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_AUTH", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">R</Col><Col id=\"VALUE\">R:Read Only</Col></Row><Row><Col id=\"CODE\">F</Col><Col id=\"VALUE\">F:Full</Col></Row><Row><Col id=\"CODE\">U</Col><Col id=\"VALUE\">U:Read/Update</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staMODULE","0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("1");
            obj.set_text("서브모듈");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_MODULE","staMODULE:0","10","220","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staUserGroup","ccfCD_MODULE:0","10","105","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("1");
            obj.set_text("사용자그룹");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_GROUP","staUserGroup:0","10","220","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:-3",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0","500",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","35",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("화면리스트");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGridMaster","0","sta01:0",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divSplitter","divDataLeft:0","0","45",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnMove","0","40%",null,"25","0",null,null,null,null,null,this.divData.form.divSplitter.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_next");
            this.divData.form.divSplitter.addChild(obj.name, obj);

            obj = new Button("btnMoveAll","0","btnMove:5",null,"35","0",null,null,null,null,null,this.divData.form.divSplitter.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_last");
            this.divData.form.divSplitter.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100%","35",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("사용화면");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboGR_SEARCH","97","sta02:-30","80","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsGR_SEARCH");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("1:전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnGR_SEARCH","cboGR_SEARCH:5","sta02:-30","50","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("적용");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Combo("cboTY_AUTH","btnGR_SEARCH:20","sta02:-30","120","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_innerdataset("dsTY_AUTH");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("F:Full");
            obj.set_value("F");
            obj.set_index("1");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnTY_AUTH","cboTY_AUTH:5","sta02:-30","50","24",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("적용");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","cboGR_SEARCH:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DZU_USERAUTHORITY.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_MODULE)) {
        		this.ccfCD_MODULE.form.CDTextBox.set_value(this.getOwnerFrame().CD_MODULE);
        		this.ccfCD_MODULE.form.DSTextBox.set_value(this.getOwnerFrame().DS_MODULE);
        	}


        };

        /************************************************************************
         * 버튼 설정
         ************************************************************************/
        this.fnSetButton = function() {
        	// 입력버튼 사용안함
        	this.FormBtns.Add.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("Detail", "fnDetail1");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_MODULE = this.divSearch.form.ccfCD_MODULE;
        	this.ccfID_GROUP = this.divSearch.form.ccfID_GROUP;
        	this.dxGridMaster = this.divData.form.divDataLeft.form.objGridMaster;
        	this.dxGrid = this.divData.form.divDataRight.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_MODULE.CodeFindName = "DZX_CFMODULE";
        	this.ccfCD_MODULE.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	this.ccfID_GROUP.CodeFindName = "DZX_CFUSERGROUP";
        	this.ccfID_GROUP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_GROUP.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	this.gfnGridInit(this.dxGridMaster, this.dsListMaster, "DZ", "DZZ_DOTNET_FORM_AUTHORITY");

        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZZ_USERAUTHORITY");

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsMaster = new Dataset();
        	this.dsMaster.addColumn("CD_MODULE", "string");
        	this.dsMaster.addColumn("ID_GROUP", "string");

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_MODULE", "string");
        	this.dsSelect.addColumn("ID_GROUP", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_MODULE", "string");
        	this.dsInsert.addColumn("ID_GROUP", "string");
        	this.dsInsert.addColumn("NO_ID", "int");
        	this.dsInsert.addColumn("GR_SEARCH", "string");
        	this.dsInsert.addColumn("TY_AUTH", "string");
        	this.dsInsert.addColumn("ID_FORM", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_MODULE", "string");
        	this.dsUpdate.addColumn("ID_GROUP", "string");
        	this.dsUpdate.addColumn("NO_ID", "int");
        	this.dsUpdate.addColumn("GR_SEARCH", "string");
        	this.dsUpdate.addColumn("TY_AUTH", "string");
        	this.dsUpdate.addColumn("ID_FORM", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_MODULE", "string");
        	this.dsDelete.addColumn("ID_GROUP", "string");
        	this.dsDelete.addColumn("NO_ID", "int");

        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGridMaster);

        	this.dsMaster.clearData();
        	this.dsMaster.addRow();
        	this.dsMaster.setColumn(0, "CD_MODULE", this.ccfCD_MODULE.form.CDTextBox.text);
        	this.dsMaster.setColumn(0, "ID_GROUP", this.ccfID_GROUP.form.CDTextBox.text);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_MODULE", this.ccfCD_MODULE.form.CDTextBox.text);
        	this.dsSelect.setColumn(0, "ID_GROUP", this.ccfID_GROUP.form.CDTextBox.text);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "master=dsMaster select=dsSelect";
        	var outData     = "dsListMaster=master0 dsList=select0";
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
        				this.dsInsert.setColumn(nrow, "CD_MODULE", this.ccfCD_MODULE.form.CDTextBox.text);
        				this.dsInsert.setColumn(nrow, "ID_GROUP", this.ccfID_GROUP.form.CDTextBox.text);
        				this.dsInsert.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));
        				this.dsInsert.setColumn(nrow, "GR_SEARCH", this.dsList.getColumn(i, "GR_SEARCH"));
        				this.dsInsert.setColumn(nrow, "TY_AUTH", this.dsList.getColumn(i, "TY_AUTH"));
        				this.dsInsert.setColumn(nrow, "ID_FORM", this.dsList.getColumn(i, "ID_FORM"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_MODULE", this.ccfCD_MODULE.form.CDTextBox.text);
        				this.dsUpdate.setColumn(nrow, "ID_GROUP", this.ccfID_GROUP.form.CDTextBox.text);
        				this.dsUpdate.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));
        				this.dsUpdate.setColumn(nrow, "GR_SEARCH", this.dsList.getColumn(i, "GR_SEARCH"));
        				this.dsUpdate.setColumn(nrow, "TY_AUTH", this.dsList.getColumn(i, "TY_AUTH"));
        				this.dsUpdate.setColumn(nrow, "ID_FORM", this.dsList.getColumn(i, "ID_FORM"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_MODULE", this.ccfCD_MODULE.form.CDTextBox.text);
        				this.dsDelete.setColumn(nrow, "ID_GROUP", this.ccfID_GROUP.form.CDTextBox.text);
        				this.dsDelete.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));

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
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.ccfCD_MODULE.form.CDTextBox.text)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_MODULE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("서브모듈을 입력하세요.");
        	}
        	else if (this.gfnIsNull(this.ccfID_GROUP.form.CDTextBox.text)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfID_GROUP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사용자그룹을 입력하세요.");
        	}
        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGridMaster);
        		this.gfnGridAfterSelect(this.dxGrid);
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
        this.codefind_AfterCDTextChanged = function(id) {
        	this.fnSearchInit();
        	if(id == "ccfCD_MODULE") {
        		this.ccfID_GROUP.form.fnCodeFindClear();
        	}
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfID_GROUP") {
        		if (this.gfnIsNull(this.ccfCD_MODULE.form.CDTextBox.text)) {
        			this.gfnAlert("서브모듈을 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_MODULE", this.ccfCD_MODULE.form.CDTextBox.text);
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGridMaster);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.divData_divSplitter_btnMove_onclick = function(obj,e)
        {
        	if (this.dxGridMaster.rowcount == 0 || this.dxGridMaster.currentrow < 0) return false;
        	if(this.dsListMaster.getColumn(this.dsListMaster.rowposition, this.ucFlag) == "#") return false;
        	var nrow = this.gfnGridAdd(this.dxGrid);

        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nrow, "ID_FORM", this.dsListMaster.getColumn(this.dsListMaster.rowposition, "ID_FORM"));
        	this.dsList.setColumn(nrow, "NM_FORM", this.dsListMaster.getColumn(this.dsListMaster.rowposition, "NM_FORM"));
        	this.dsList.setColumn(nrow, "NO_ID", this.dsListMaster.getColumn(this.dsListMaster.rowposition, "NO_ID"));
        	this.dsList.set_enableevent(true);

        	this.dsListMaster.set_enableevent(false);
        	this.dsListMaster.deleteRow(this.dsListMaster.rowposition);
        	this.dsListMaster.set_enableevent(true);
        	this.dxGrid.setFocus();

        };

        this.divData_divSplitter_btnMoveAll_onclick = function(obj,e)
        {
        	if (this.dxGridMaster.rowcount == 0) return false;
        	var remove_rows = [];
        	for (var i = 0; i < this.dsListMaster.rowcount; i++) {
        		if(this.dsListMaster.getColumn(i, this.ucFlag) == "#") continue;
        		var nrow = this.gfnGridAdd(this.dxGrid);

        		this.dsList.set_enableevent(false);
        		this.dsList.setColumn(nrow, "ID_FORM", this.dsListMaster.getColumn(i, "ID_FORM"));
        		this.dsList.setColumn(nrow, "NM_FORM", this.dsListMaster.getColumn(i, "NM_FORM"));
        		this.dsList.setColumn(nrow, "NO_ID", this.dsListMaster.getColumn(i, "NO_ID"));
        		this.dsList.set_enableevent(true);
        		remove_rows.push(i);
        	}

        	this.dsListMaster.set_enableevent(false);
        	this.dsListMaster.deleteMultiRows(remove_rows);
        	this.dsListMaster.set_enableevent(true);
        	this.dxGrid.setFocus();
        };

        this.divData_divDataRight_btnGR_SEARCH_onclick = function(obj,e)
        {
        	var rows = this.dxGrid.getSelectedDatasetRows();
        	var gr_search = this.divData.form.divDataRight.form.cboGR_SEARCH.value;
        	for(var r = 0; r < rows.length; r++) {
        		this.dsList.setColumn(rows[r], "GR_SEARCH", gr_search);
        	}
        };

        this.divData_divDataRight_btnTY_AUTH_onclick = function(obj,e)
        {
        	var rows = this.dxGrid.getSelectedDatasetRows();
        	var ty_auth = this.divData.form.divDataRight.form.cboTY_AUTH.value;
        	for(var r = 0; r < rows.length; r++) {
        		this.dsList.setColumn(rows[r], "TY_AUTH", ty_auth);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.form.btnMove.addEventHandler("onclick",this.divData_divSplitter_btnMove_onclick,this);
            this.divData.form.divSplitter.form.btnMoveAll.addEventHandler("onclick",this.divData_divSplitter_btnMoveAll_onclick,this);
            this.divData.form.divDataRight.form.btnGR_SEARCH.addEventHandler("onclick",this.divData_divDataRight_btnGR_SEARCH_onclick,this);
            this.divData.form.divDataRight.form.btnTY_AUTH.addEventHandler("onclick",this.divData_divDataRight_btnTY_AUTH_onclick,this);
        };
        this.loadIncludeScript("DZU_USERAUTHORITY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
