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
            this.set_titletext("부서그룹등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("false");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAZPR_DEPT_MASTER_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAZPR_DEPT_MASTER_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_USE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">사용</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_USE","staCD_SYSTEM:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_innerdataset("dsYN_USE");
            obj.set_value("N");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.getSetter("BeforeUserDataSetParam").set("fnGrid_BeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnGrid_AfterCDTextChanged");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAZ_DEPT_GROUP.xfdl", function() {
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

        	//화면 로드시 자동조회
        	this.FormBtns.Select.click();
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
        	this.btn1 = this.gfnFormButtonAdd("DlgButton", "fnDlgButton", "본사부서추가");
        	this.btn2 = this.gfnFormButtonAdd("FormButton", "fnFormButton","이력정보");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.cboYN_USE = this.divSearch.form.cboYN_USE;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function()
        {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAZ_DEPT_GROUP", "CD_DEPT_MST", "NO_LEVEL");
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        };

        /************************************************************************
         * INPUT DATASET 및 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YN_USE", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("CD_DEPT_MST", "string");
        	this.dsSave.addColumn("DS_DEPT_MST", "string");
        	this.dsSave.addColumn("CD_UPDEPT_MST", "string");
        	this.dsSave.addColumn("TY_DEPT", "string");
        	this.dsSave.addColumn("SN_PRINT", "bigdecimal");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("YN_DELETE", "string");
        	this.dsSave.addColumn("NO_LEVEL", "string");
        	this.dsSave.addColumn("DT_CREATE", "string");
        	this.dsSave.addColumn("CD_BUMUN", "string");
        	this.dsSave.addColumn("CD_GROUP", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("DS_AREA", "string");
        	this.dsSave.addColumn("YN_REPORT", "string");
        	this.dsSave.addColumn("CD_ROLE", "string");
            this.dsSave.addColumn("ID_INSERT", "string");
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

        	this.dsSelect.setColumn(0, "YN_USE", this.cboYN_USE.value);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";             //  grid로 받음.
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";  // dsSelect->위에서 동적생성하여 입력파라미터 세팅한 부분
        	var outData     = "dsList=select0";   // 리턴데이터 첫번째 데이터셋. 0부터 적재.
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름(_dsProc 고정)
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
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
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "CD_DEPT_MST", this.dsList.getColumn(i, "CD_DEPT_MST"));
        				this.dsSave.setColumn(nrow, "DS_DEPT_MST", this.dsList.getColumn(i, "DS_DEPT_MST"));
        				this.dsSave.setColumn(nrow, "CD_UPDEPT_MST", this.dsList.getColumn(i, "CD_UPDEPT_MST"));
        				this.dsSave.setColumn(nrow, "TY_DEPT", this.dsList.getColumn(i, "TY_DEPT"));
        				this.dsSave.setColumn(nrow, "SN_PRINT", this.dsList.getColumn(i, "SN_PRINT"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "YN_DELETE", this.dsList.getColumn(i, "YN_DELETE"));
        				this.dsSave.setColumn(nrow, "NO_LEVEL", this.dsList.getColumn(i, "NO_LEVEL"));
        				this.dsSave.setColumn(nrow, "DT_CREATE", this.dsList.getColumn(i, "DT_CREATE"));
        				this.dsSave.setColumn(nrow, "CD_BUMUN", this.dsList.getColumn(i, "CD_BUMUN"));
        				this.dsSave.setColumn(nrow, "CD_GROUP", this.dsList.getColumn(i, "CD_GROUP"));
        				this.dsSave.setColumn(nrow, "CD_SITE", this.dsList.getColumn(i, "CD_SITE"));
        				this.dsSave.setColumn(nrow, "DS_AREA", this.dsList.getColumn(i, "DS_AREA"));
        				this.dsSave.setColumn(nrow, "YN_REPORT", this.dsList.getColumn(i, "YN_REPORT"));
        				this.dsSave.setColumn(nrow, "CD_ROLE", this.dsList.getColumn(i, "CD_ROLE"));
        				this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "dsOutput=save";
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
         * 확장버튼 이벤트
         ************************************************************************/
        // 본사부서추가
        this.fnDlgButton = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var objDs = this.dsList;
        	for(var i = 0 ; i < objDs.getRowCount() ; i++){
        		var flag = objDs.getColumn(i, this.ucFlag);
        		if( flag != "#" && (objDs.getRowType(i) == 2 || objDs.getRowType(i) == 4 || objDs.getRowType(i) == 8)){
        			this.gfnAlert("변경된 정보가 있습니다. 저장후에 【 본사부서추가 】 을 하시기 바랍니다.");
        			return false;
        		}
        	}

        	var param = {};
        	param.CD_DEPT_MST = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_MST");
        	param.DS_DEPT_MST = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT_MST");
        	param.TY_DEPT = this.dsList.getColumn(this.dsList.rowposition, "TY_DEPT");
        	param.TY_DEPT_NM = this.dsList.getColumn(this.dsList.rowposition, "TY_DEPT_NM");
        	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DAZ_NEWDEPTDLG", "fnDlgButton_callback", param, 400, 330);
        };

        // 이력정보
        this.fnFormButton = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {};
        	param.CD_DEPT_MST = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_MST");
        	param.DS_DEPT_MST = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT_MST");
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAZ_DEPT_GROUP_HISTORY", "", param);

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


         this.fnDlgButton_callback = function(svcID, val) {
        	if(val != false) {
        		var json = JSON.parse(val);

        		//this.dsList.clearData();
        		this.dsList.set_enableevent(false);
        		//var nrow = this.dsList.addRow();
        		var nrow = this.gfnGridAdd(this.dxGrid,"top");
        		this.dsList.setColumn(nrow, this.ucFlag, "I");
        		this.dsList.setColumn(nrow, "CD_UPDEPT_MST", json.CD_UPDEPT);
        		this.dsList.setColumn(nrow, "DS_UPDEPT_MST", json.DS_UPDEPT);
        		this.dsList.setColumn(nrow, "DT_CREATE", json.DT_WORK);
        		this.dsList.setColumn(nrow, "TY_DEPT", json.TYC_DEPT);
        		this.dsList.setColumn(nrow, "TY_DEPT_NM", json.TYD_DEPT);
        		this.dsList.setColumn(nrow, "CD_DEPT_MST", json.CD_DEPT);
        		this.dsList.setColumn(nrow, "DS_DEPT_MST", json.DS_DEPT);

        		this.gfnSetFormStatus(this, "I");
        	    this.dsList.set_enableevent(true);
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam=function(id, dsUserParam, nrow){

        	switch(id) {
        		//상위부서코드
        		case "DAX_CFDEPT_MST":
        			var cd_dept_mst = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_MST");
        			if(this.gfnIsNull(cd_dept_mst)) {
        				this.gfnAlert("부서그룹코드를 먼저 입력하세요.");
        				return false;
        			}
        			 dsUserParam.setColumn(nrow, "CD_DEPT_MST", this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_MST"));
        			break;
        		//구분
        		case "ccfTY_DEPT":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "DA");
        			break;
        		//부문
        		case "ccfCD_BUMUN":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "DM");
        			break;
        		//그룹
        		case "ccfCD_GROUP":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "DG");
        			break;

        		//관리부서
        		case "ccfCD_SITE":
        			break;

        		default:
        	  }
        	return true;
        };

        this.fnGrid_AfterCDTextChanged  = function(id, codeFindData) {
        	var arr = codeFindData;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_EnterCell = function(obj, row, cell) { // 0레벨은 레벨만 수정안되게 처리
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	var NO_LEVEL = this.dsList.getColumn(this.dsList.rowposition, "NO_LEVEL");
        	if (NO_LEVEL == "0") {
        		if(colnm == "NO_LEVEL"){
        		return false;
        		}

        	}
        	//return true;
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
            this.divSearch.form.cboYN_USE.addEventHandler("onitemchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DAZ_DEPT_GROUP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
