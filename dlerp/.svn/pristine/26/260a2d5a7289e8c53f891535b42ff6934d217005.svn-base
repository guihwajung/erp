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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHZPR_VENDOR_ACCOUNT_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTYPE_SELECT", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">AC</Col><Col id=\"VALUE\">거래처 코드</Col></Row><Row><Col id=\"CODE\">AN</Col><Col id=\"VALUE\">사업자 명칭</Col></Row><Row><Col id=\"VALUE\">사업자번호</Col><Col id=\"CODE\">AS</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE_SELECT\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_VENDOR\"/><Col id=\"TYPE_SELECT\">AC</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoTYPE_SELECT","10","10","279","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTYPE_SELECT");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_text("코드");
            obj.set_value("01");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCD_VENDOR","rdoTYPE_SELECT:10","10","140","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divDataTop","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataTop.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataTop.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.rdoTYPE_SELECT","value","dsSearch","TYPE_SELECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtCD_VENDOR","value","dsSearch","VALUE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DQD_VENDOR_BANKS.xfdl", function() {
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

        	//this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnADDVENDOR = this.gfnFormButtonAdd("btnADDVENDOR", "fnADDVENDOR");
        	this.btnCREATE_AP = this.gfnFormButtonAdd("btnCREATE_AP", "fnCREATE_AP");
        	this.btnUPDATE_AP = this.gfnFormButtonAdd("btnUPDATE_AP", "fnUPDATE_AP");
        	this.btnCREATE_AR = this.gfnFormButtonAdd("btnCREATE_AR", "fnCREATE_AR");
        	this.btnUPDATE_AR = this.gfnFormButtonAdd("btnUPDATE_AR", "fnUPDATE_AR");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfTY_CHAIYONG =  this.divSearch.form.ccfTY_CHAIYONG;
        	this.dxGrid = this.divData.form.divDataTop.form.objGrid;
        	//this.dxGridSub = this.divData.form.divDataBottom.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHZ_VENDOR_BANKS");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	//this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	//this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	//this.gfnGridInit(this.dxGridSub, this.dsListSub, "DH", "DHZ_VENDORCHG");
        	//this.dxGridSub.BeforeUserDataSetParam = "fnGridSub_BeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_VENDOR", "string");		// 조회조건(거래처 combo)
        	this.dsSelect.addColumn("TY_SEARCH", "string");
        	this.dsSelect.addColumn("VALUE", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");		// 검색명(editbox)
        	this.dsSelect.addColumn("TYPE_SELECT", "string");	// 구분(코드 or 명칭 radio)
        	//this.dsSelect.addColumn("NO_SJC", "string");
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_VENDOR", "");
        	this.dsSelect.setColumn(0, "TY_SEARCH", "");
        	this.dsSelect.setColumn(0, "VALUE", this.dsSearch.getColumn(0, "VALUE"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", "");
        	this.dsSelect.setColumn(0, "TYPE_SELECT", this.dsSearch.getColumn(0, "TYPE_SELECT"));
        	//this.dsSelect.setColumn(0, "NO_SJC", this.dsSearch.getColumn(0, "NO_SJC"));

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
        				this.dsSave.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsSave.setColumn(nrow, "CD_LICOST_DC", this.dsList.getColumn(i, "CD_LICOST_DC"));
        				this.dsSave.setColumn(nrow, "CD_LICOST_DM", this.dsList.getColumn(i, "CD_LICOST_DM"));
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
         * 서브 버튼 이벤트
         ************************************************************************/

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
        		this.fnBtnCheckAll();
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

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		this.fnBtnCheckAll();
        		//this.FormBtns.SubSelect.click();
        		obj.oldrow = -1;
        	}
        };

        this.dsList_canrowposchange = function(obj,e) {
        	var can_rowchange = true;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        			break;
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

        /*
         *	서브 그리드 코드파인드
         */
        this.fnGridSub_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	if (id == "DZX_CFUSERGROUP") {
        		var cd_system = this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_SYSTEM");
        		if(this.gfnIsNull(cd_system)) {
        			this.gfnAlert("시스템코드를 먼저 입력하세요.");
        			return false;
        		}
         		dsUserParam.setColumn(nrow, "CD_MODULE", this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_SYSTEM"));
         	}
        	return true;
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        }

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };


        // SAP 업체코드추가 버튼 클릭시 팝업화면 호출
         this.fnADDVENDOR = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	//param.CD_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR");

        	this.gfnFormOpenNonAuth("DQD", "DQD_SAP_VENDOR", "fnADDVENDORCallback", param, 450, 300);
        }

        this.fnADDVENDORCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		this.FormBtns.Select.click();
        	}
        };

        this.fnCREATE_AP = function(obj,e) {
        	var param = {};

        	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DQD_VENDOR_AP_CREATE", "fnCREATE_AP_Callback", param,940, 550);
        }

        this.fnCREATE_AP_Callback = function(svcID, value) {
         	if(value){
        		this.FormBtns.Select.click();
        	}
        }

        this.fnUPDATE_AP = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) {
        		this.gfnAlert("데이터를 선택해주세요.");
        		return false;
        	}

        	var param = {};

        	param.PLIFNR = this.dsList.getColumn(this.dsList.rowposition, "NO_VENDOR_SAP");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DQD_VENDOR_AP_UPDATE", "fnUPDATE_AP_Callback", param, 940, 550);
        }

        this.fnUPDATE_AP_Callback = function(svcID, value) {
         	if(value){
        		this.FormBtns.Select.click();
        	}
        }


        this.fnCREATE_AR = function(obj,e) {
        	var param = {};

        	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DQD_VENDOR_AR_CREATE", "fnCREATE_AR_Callback", param, 880, 380);
        }

        this.fnCREATE_AR_Callback = function(svcID, value) {
         	if(value){
        		this.FormBtns.Select.click();
        	}
        }

        this.fnUPDATE_AR = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) {
        		this.gfnAlert("데이터를 선택해주세요.");
        		return false;
        	}

        	var param = {};

        	param.KUNNR = this.dsList.getColumn(this.dsList.rowposition, "NO_VENDOR_SAP");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DQD_VENDOR_AR_UPDATE", "fnUPDATE_AR_Callback", param, 880, 380);
        }

        this.fnUPDATE_AR_Callback = function(svcID, value) {
         	if(value){
        		this.FormBtns.Select.click();
        	}
        }


        this.fnBtnCheckAll = function()
        {
           this.gfnBtnCheck(this.btnCREATE_AP, this.dsList);
           this.gfnBtnCheck(this.btnUPDATE_AP , this.dsList);
           this.gfnBtnCheck(this.btnCREATE_AR, this.dsList);
           this.gfnBtnCheck(this.btnUPDATE_AR, this.dsList);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.edtCD_VENDOR.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DQD_VENDOR_BANKS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
