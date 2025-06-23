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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZUPR_UTILIZATION_SYSTEM_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DZUPR_UTILIZATION_RATE_SELECT</Col></Row><Row><Col id=\"TARGET\">d_insert</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">d_update</Col><Col id=\"SP\">DZZPR_MODULELIST_UPDATE</Col></Row><Row><Col id=\"TARGET\">d_delete</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZUPR_UTILIZATION_SYSTEM_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SYSTEM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DT_FR\"/><Col id=\"DT_TO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SYSTEM", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SYSTEM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDT_FR","71","9","105","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00_00","calDT_FR:5","9","22","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("~");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_TO","sta00_00:5","9","105","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_SITE00","6","9","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("기간");
            obj.set_textDecoration("underline");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ORG","calDT_TO:20","9","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("법인");
            obj.set_textDecoration("underline");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_DEPT_ORG:5","9","269","25",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SYSTEM","ccfCD_CORP:20","9","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("시스템");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_SYSTEM","staTY_SYSTEM:5","9","70","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsTY_SYSTEM");
            obj.set_datacolumn("DS_SYSTEM");
            obj.set_codecolumn("CD_SYSTEM");
            obj.set_visible("true");
            obj.set_usecontextmenu("true");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","20%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("e-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("시스템");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.calDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.calDT_FR","value","dsSearch","DT_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccboTY_SYSTEM","value","dsSearch","CD_SYSTEM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DZU_UTILIZATION_RATE.xfdl", function() {
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

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용
        	this.gfnUseSubBtn(false, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("btnDetail", "fnDetail");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;

        	// 법인코드파인드
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZU_UTILIZATION_RATE_MAIN");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DZ", "DZU_UTILIZATION_RATE_SUB");

        	this.dxGrid.set_selecttype("cell");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	// 그리드 더블 클릭 이벤트
        	this.dxGridSub.addEventHandler("oncelldblclick", this.fnGrid_oncelldblclick, this);

        	// 코드파인드 설정
         	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 초기값 셋팅
        	// 기간
        	this.dsSearch.setColumn(0, "DT_FR", this.gfnAddMonth(this.gfnGetDate(),-1));
        	this.dsSearch.setColumn(0, "DT_TO", this.gfnGetDate());

        	// 법인코드
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.dsSearch.setColumn(0,"CD_CORP", this.AuthClient.CD_CORP);
        		this.dsSearch.setColumn(0,"DS_CORP", this.AuthClient.DS_CORP);
        	}
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SYSTEM", "string");

        /*
        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SYSTEM", "string");
        	this.dsInsert.addColumn("DS_SYSTEM", "string");
        	this.dsInsert.addColumn("SN_SYSTEMORDER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SYSTEM", "string");
        	this.dsUpdate.addColumn("DS_SYSTEM", "string");
        	this.dsUpdate.addColumn("SN_SYSTEMORDER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SYSTEM", "string");
        */

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_SYSTEM", "string");
        	this.dsSelectSub.addColumn("DT_FROM", "string");
        	this.dsSelectSub.addColumn("DT_TO", "string");
        	this.dsSelectSub.addColumn("AUTH_CD_CORP", "string");

        /*
        	this.dsInsertSub = new Dataset();
        	this.dsInsertSub.addColumn("CD_MODULE", "string");
        	this.dsInsertSub.addColumn("DS_MODULE", "string");
        	this.dsInsertSub.addColumn("CD_SYSTEM", "string");
        	this.dsInsertSub.addColumn("TY_MODULE", "string");
        	this.dsInsertSub.addColumn("YN_SET", "string");
        	this.dsInsertSub.addColumn("DS_PATH", "string");
        	this.dsInsertSub.addColumn("SN_MODULEORDER", "string");

        	this.dsUpdateSub = new Dataset();
        	this.dsUpdateSub.addColumn("CD_MODULE", "string");
        	this.dsUpdateSub.addColumn("DS_MODULE", "string");
        	this.dsUpdateSub.addColumn("CD_SYSTEM", "string");
        	this.dsUpdateSub.addColumn("TY_MODULE", "string");
        	this.dsUpdateSub.addColumn("YN_SET", "string");
        	this.dsUpdateSub.addColumn("DS_PATH", "string");
        	this.dsUpdateSub.addColumn("SN_MODULEORDER", "string");

        	this.dsDeleteSub = new Dataset();
        	this.dsDeleteSub.addColumn("CD_MODULE", "string");
        	*/

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnSetFormSubStatus(this);
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SYSTEM", this.dsSearch.getColumn(0,"CD_SYSTEM"));

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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
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
        				this.dsInsert.setColumn(nrow, "CD_SYSTEM", this.dsList.getColumn(i, "CD_SYSTEM"));
        				this.dsInsert.setColumn(nrow, "DS_SYSTEM", this.dsList.getColumn(i, "DS_SYSTEM"));
        				this.dsInsert.setColumn(nrow, "SN_SYSTEMORDER", this.dsList.getColumn(i, "SN_SYSTEMORDER"));
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_SYSTEM", this.dsList.getColumn(i, "CD_SYSTEM"));
        				this.dsUpdate.setColumn(nrow, "DS_SYSTEM", this.dsList.getColumn(i, "DS_SYSTEM"));
        				this.dsUpdate.setColumn(nrow, "SN_SYSTEMORDER", this.dsList.getColumn(i, "SN_SYSTEMORDER"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_SYSTEM", this.dsList.getColumn(i, "CD_SYSTEM"));
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
         * 서브 버튼 이벤트
         ************************************************************************/
        /*
         *	서브 조회 버튼
         */
        this.fnSelectSub = function() {
        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return false;

        	this.dsListSub.clearData();
        	var CD_SYSTEM = this.dsList.getColumn(this.dsList.rowposition, "CD_SYSTEM");
        	if (this.gfnIsNull(CD_SYSTEM)) {
        		return false;
        	}

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "CD_SYSTEM", CD_SYSTEM);
        	this.dsSelectSub.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0,"DT_FR"));
        	this.dsSelectSub.setColumn(0, "DT_TO", this.dsSearch.getColumn(0,"DT_TO"));
        	this.dsSelectSub.setColumn(0, "AUTH_CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));

        	var strSvcId    = "detail";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelectSub";
        	var outData     = "dsListSub=d_select0";
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
         *	서브 입력 버튼
         */
        this.fnAddSub = function() {
        	this.gfnGridAdd(this.dxGridSub);
        }
        /*
         *	서브 삭제 버튼
         */
        this.fnDelSub = function() {
        	this.gfnGridDel(this.dxGridSub);
        }

        /*
         *	서브 저장 버튼
         */
        this.fnSaveSub = function() {
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();

        	this.dsInsertSub.clearData();
        	this.dsUpdateSub.clearData();
        	this.dsDeleteSub.clearData();

        	var cd_system = this.dsList.getColumn(this.dsList.rowposition, "CD_SYSTEM");
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsertSub.addRow();
        				this.dsInsertSub.setColumn(nrow, "CD_MODULE", this.dsListSub.getColumn(i, "CD_MODULE"));
        				this.dsInsertSub.setColumn(nrow, "DS_MODULE", this.dsListSub.getColumn(i, "DS_MODULE"));
        				this.dsInsertSub.setColumn(nrow, "CD_SYSTEM", cd_system);
        				this.dsInsertSub.setColumn(nrow, "TY_MODULE", this.dsListSub.getColumn(i, "TY_MODULE"));
        				this.dsInsertSub.setColumn(nrow, "YN_SET", this.dsListSub.getColumn(i, "YN_SET"));
        				this.dsInsertSub.setColumn(nrow, "DS_PATH", this.dsListSub.getColumn(i, "DS_PATH"));
        				this.dsInsertSub.setColumn(nrow, "SN_MODULEORDER", this.dsListSub.getColumn(i, "SN_MODULEORDER"));
        				break;

        			case "U":
        				var nrow = this.dsUpdateSub.addRow();
        				this.dsUpdateSub.setColumn(nrow, "CD_MODULE", this.dsListSub.getColumn(i, "CD_MODULE"));
        				this.dsUpdateSub.setColumn(nrow, "DS_MODULE", this.dsListSub.getColumn(i, "DS_MODULE"));
        				this.dsUpdateSub.setColumn(nrow, "CD_SYSTEM", cd_system);
        				this.dsUpdateSub.setColumn(nrow, "TY_MODULE", this.dsListSub.getColumn(i, "TY_MODULE"));
        				this.dsUpdateSub.setColumn(nrow, "YN_SET", this.dsListSub.getColumn(i, "YN_SET"));
        				this.dsUpdateSub.setColumn(nrow, "DS_PATH", this.dsListSub.getColumn(i, "DS_PATH"));
        				this.dsUpdateSub.setColumn(nrow, "SN_MODULEORDER", this.dsListSub.getColumn(i, "SN_MODULEORDER"));
        				break;

        			case "D":
        				var nrow = this.dsDeleteSub.addRow();
        				this.dsDeleteSub.setColumn(nrow, "CD_MODULE", this.dsListSub.getColumn(i, "CD_MODULE"));
        				break;
        		}
        	}

        	if (this.dsInsertSub.rowcount == 0 && this.dsUpdateSub.rowcount == 0 && this.dsDeleteSub.rowcount == 0) return;

        	var strSvcId    = "savesub";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "d_insert=dsInsertSub d_update=dsUpdateSub d_delete=dsDeleteSub";
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
         *	서브 엑셀 버튼
         */
        this.fnExcelSub = function() {
        	this.gfnExcelExport(this.dxGridSub);
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
        *	조회 Validate
        */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"DT_FR"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.calDT_FR.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("기간시작일자를 입력하세요.", "fnVaidateCallback");
        	}
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"DT_TO"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.calDT_TO.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("기간종료일자를 입력하세요.", "fnVaidateCallback");
        	}

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.text)) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
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
        	else if(svcID == "combo") {
        		if (errorCode == 0) {
        			var nrow = this.dsTY_SYSTEM.addRow();
        			this.dsTY_SYSTEM.setColumn(nrow, "CD_SYSTEM", "");
        			this.dsTY_SYSTEM.setColumn(nrow, "DS_SYSTEM", "전체");
        		}
        		else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGridSub);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "savesub") {
        		if (errorCode == 0) {
        			this.FormBtns.SubSelect.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        		break;
        	}
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	return true;
        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

         this.dsList_canrowposchange = function(obj,e) {
        	var can_rowchange = true;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        		}
        	}

        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        	}
        	return can_rowchange;
        }

        this.dsList_canrowposchange_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsList.set_enableevent(false);
        		this.dsList.set_rowposition(this._row);
        		this.dsList.set_enableevent(true);
        	}
        }

        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        }

        // 확장버튼 클릭
        this.fnDetail = function(obj,e) {
        	var param = {};
        	param.CD_SYSTEM = this.dsList.getColumn(this.dsList.rowposition, "CD_SYSTEM");
        	param.DS_SYSTEM = this.dsList.getColumn(this.dsList.rowposition, "DS_SYSTEM");

        	this.gfnFormOpen( this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_MODULE")
        					, this.dsListSub.getColumn(this.dsListSub.rowposition, "ID_FORM")
        					, "", param);
        }

        // 그리드 더블클릭
        this.fnGrid_oncelldblclick = function(obj,e)
        {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.fnDetail();
        };

        // 콤보박스
        this.fnSetCombo = function()
         {
         	this.dsCombo.clearData();

        	//진행상태
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_SYSTEM=combo0";
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

        this.divSearch_ccboTY_SYSTEM_onitemchanged = function(obj,e)
        {
        	this.fnSelect();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.calDT_FR.addEventHandler("onchanged",this.divSearch_calDT_START_onchanged,this);
            this.divSearch.form.calDT_TO.addEventHandler("onchanged",this.divSearch_calDT_END_onchanged,this);
            this.divSearch.form.ccboTY_SYSTEM.addEventHandler("onitemchanged",this.divSearch_ccboTY_SYSTEM_onitemchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZU_UTILIZATION_RATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
