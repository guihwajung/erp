(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DQB_CBS_INFRA");
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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DQBPR_CBS_SELECT</Col></Row><Row><Col id=\"SP\">DQBPR_CBS_INSERT</Col><Col id=\"TARGET\">insert</Col></Row><Row><Col id=\"SP\">DQBPR_CBS_UPDATE</Col><Col id=\"TARGET\">update</Col></Row><Row><Col id=\"SP\">DQBPR_CBS_DELETE</Col><Col id=\"TARGET\">delete</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CBS\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CBS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CBS_1","0.0","10.0","79.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("대분류");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CBS_1","staCD_CBS_1:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DQX_CBS_LEVEL0");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CBS_2","ccfCD_CBS_1:0.0","10.0","79.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("중분류");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CBS_2","staCD_CBS_2:0.0","10.0","240","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DQX_CBS_LEVEL0");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
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
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CBS_1.form.DSTextBox","value","dsSearch","DS_CBS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CBS_2.form.CDTextBox","value","dsSearch","CD_CBS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DQB_CBS_INFRA.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DQB_CBS_INFRA_onload = function(obj,e)
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

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
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
        	//this.btn1 = this.gfnFormButtonAdd("Detail", "fnDetail1");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.cffCD_CBS_1 = this.divSearch.form.ccfCD_CBS_1;
        	this.cffCD_CBS_2 = this.divSearch.form.ccfCD_CBS_2;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cffCD_CBS_1.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cffCD_CBS_1.AfterCDTextChanged = "ccfCD_CBS_1_AfterCDTextChanged";
        	this.cffCD_CBS_2.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DQ", "DQB_CBS_INFRA", "DS_CBS", "NO_LEVEL");
        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_oncelldblclick, this);
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_onselectchanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CBS", "string");
        	this.dsSelect.addColumn("DS_CBS", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CBS", "string");
        	this.dsInsert.addColumn("DS_CBS", "string");
        	this.dsInsert.addColumn("SZ_CBS", "string");
        	this.dsInsert.addColumn("UT_CBS", "string");
        	this.dsInsert.addColumn("UP_CBS", "int");
        	this.dsInsert.addColumn("CD_MTMASTER", "string");
        	this.dsInsert.addColumn("CD_ITEM", "string");
        	this.dsInsert.addColumn("CD_PARENT", "string");
        	this.dsInsert.addColumn("NO_LEVEL", "int");
        	this.dsInsert.addColumn("YN_USE", "string");
        	this.dsInsert.addColumn("CD_INPUT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CBS", "string");
        	this.dsUpdate.addColumn("DS_CBS", "string");
        	this.dsUpdate.addColumn("SZ_CBS", "string");
        	this.dsUpdate.addColumn("UT_CBS", "string");
        	this.dsUpdate.addColumn("UP_CBS", "int");
        	this.dsUpdate.addColumn("CD_MTMASTER", "string");
        	this.dsUpdate.addColumn("CD_ITEM", "string");
        	this.dsUpdate.addColumn("CD_PARENT", "string");
        	this.dsUpdate.addColumn("NO_LEVEL", "int");
        	this.dsUpdate.addColumn("YN_USE", "string");
        	this.dsUpdate.addColumn("CD_INPUT", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CBS", "string");

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

        	//alert("CD_CBS : " +this.dsSearch.getColumn(0, "CD_CBS") + "\nDS_CBS : " + this.dsSearch.getColumn(0, "DS_CBS"));

        	this.dsSelect.setColumn(0, "CD_CBS", this.dsSearch.getColumn(0, "CD_CBS"));
        	this.dsSelect.setColumn(0, "DS_CBS", this.dsSearch.getColumn(0, "DS_CBS"));

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
        				this.dsInsert.setColumn(nrow, "CD_CBS", this.dsList.getColumn(i, "CD_CBS"));
        				this.dsInsert.setColumn(nrow, "DS_CBS", this.dsList.getColumn(i, "DS_CBS"));
        				this.dsInsert.setColumn(nrow, "SZ_CBS", this.dsList.getColumn(i, "SZ_CBS"));
        				this.dsInsert.setColumn(nrow, "UT_CBS", this.dsList.getColumn(i, "UT_CBS"));
        				this.dsInsert.setColumn(nrow, "UP_CBS", this.dsList.getColumn(i, "UP_CBS"));
        				this.dsInsert.setColumn(nrow, "CD_MTMASTER", this.dsList.getColumn(i, "CD_MTMASTER"));
        				this.dsInsert.setColumn(nrow, "CD_ITEM", this.dsList.getColumn(i, "CD_ITEM"));
        				this.dsInsert.setColumn(nrow, "CD_PARENT", this.dsList.getColumn(i, "CD_PARENT"));
        				this.dsInsert.setColumn(nrow, "NO_LEVEL", this.dsList.getColumn(i, "NO_LEVEL"));
        				this.dsInsert.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsInsert.setColumn(nrow, "CD_INPUT", this.dsList.getColumn(i, "CD_INPUT"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CBS", this.dsList.getColumn(i, "CD_CBS"));
        				this.dsUpdate.setColumn(nrow, "DS_CBS", this.dsList.getColumn(i, "DS_CBS"));
        				this.dsUpdate.setColumn(nrow, "SZ_CBS", this.dsList.getColumn(i, "SZ_CBS"));
        				this.dsUpdate.setColumn(nrow, "UT_CBS", this.dsList.getColumn(i, "UT_CBS"));
        				this.dsUpdate.setColumn(nrow, "UP_CBS", this.dsList.getColumn(i, "UP_CBS"));
        				this.dsUpdate.setColumn(nrow, "CD_MTMASTER", this.dsList.getColumn(i, "CD_MTMASTER"));
        				this.dsUpdate.setColumn(nrow, "CD_ITEM", this.dsList.getColumn(i, "CD_ITEM"));
        				this.dsUpdate.setColumn(nrow, "CD_PARENT", this.dsList.getColumn(i, "CD_PARENT"));
        				this.dsUpdate.setColumn(nrow, "NO_LEVEL", this.dsList.getColumn(i, "NO_LEVEL"));
        				this.dsUpdate.setColumn(nrow, "YN_USE", this.dsList.getColumn(i, "YN_USE"));
        				this.dsUpdate.setColumn(nrow, "CD_INPUT", this.dsList.getColumn(i, "CD_INPUT"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_CBS", this.dsList.getColumn(i, "CD_CBS"));
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
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_CBS_1") {
        		dsUserParam.setColumn(nrow, "TY_GUBUN", 1);
        	}
        	else if (id == "ccfCD_CBS_2") {
        		dsUserParam.setColumn(nrow, "TY_GUBUN", 2);
        		dsUserParam.setColumn(nrow, "VALUE", this.divSearch.form.ccfCD_CBS_1.form.DSTextBox.text);
        	}

        	return true;
        }

        this.ccfCD_CBS_1_AfterCDTextChanged = function(id, codeFindData) {
        	// 코드,명칭 외 추가 컬럼 처리
        	//var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능

        	this.dsSearch.setColumn(0, "CD_CBS","");
        	this.divSearch.form.ccfCD_CBS_2.form.DSTextBox.set_value("");
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_oncelldblclick = function(obj,e)
        {
        	//if tree cell column
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, e.cell);
        	if(colnm == "DS_CBS")
        	{
        		var nCellIdx = obj.currentcell;
        		obj.setCellProperty("body", nCellIdx, "edittype", "normal");
        		obj.setCellPos(e.cell);
        	}
        }

        this.fnGrid_onselectchanged = function(obj,e)
        {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, e.cell);
        	if(colnm == "DS_CBS")
        	{
        		var nCellIdx = obj.currentcell;
        		if (this.gfnGetFlag(this.dsList, this.dsList.rowposition) == "I") {
        			obj.setCellProperty("body", nCellIdx, "edittype", "normal");
        		} else {
        			obj.setCellProperty("body", nCellIdx, "edittype", "tree");
        		}
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DQB_CBS_INFRA_onload,this);
        };
        this.loadIncludeScript("DQB_CBS_INFRA.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
