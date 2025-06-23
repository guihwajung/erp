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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZZPR_FORMBUTTON_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DZZPR_FORMBUTTON_SAVE</Col></Row><Row><Col id=\"TARGET\">deploy</Col><Col id=\"SP\">DZZPR_FORMBUTTON_REAL_COPY</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeploy", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_FORM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SYSTEM","10","10","50","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("화면");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtCD_MODULE","staCD_SYSTEM:10","10","50","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtID_FORM","ctxtCD_MODULE:5","10","180","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_FORM","ctxtID_FORM:5","10","200","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divMakeBtns","0","divSearch:10",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","0","0","80","22",null,null,null,null,null,null,this.divMakeBtns.form);
            obj.set_taborder("0");
            obj.set_text("입력(공통)");
            this.divMakeBtns.addChild(obj.name, obj);

            obj = new Button("btnSave","btnAdd:5","0","80","22",null,null,null,null,null,null,this.divMakeBtns.form);
            obj.set_taborder("0");
            obj.set_text("저장(공통)");
            this.divMakeBtns.addChild(obj.name, obj);

            obj = new Button("btnDel","btnSave:5","0","80","22",null,null,null,null,null,null,this.divMakeBtns.form);
            obj.set_taborder("0");
            obj.set_text("삭제(공통)");
            this.divMakeBtns.addChild(obj.name, obj);

            obj = new Button("btnPrt","btnDel:5","0","80","22",null,null,null,null,null,null,this.divMakeBtns.form);
            obj.set_taborder("6");
            obj.set_text("출력(공통)");
            this.divMakeBtns.addChild(obj.name, obj);

            obj = new Button("btnAddSub","btnPrt:20","0","80","22",null,null,null,null,null,null,this.divMakeBtns.form);
            obj.set_taborder("3");
            obj.set_text("입력(서브)");
            this.divMakeBtns.addChild(obj.name, obj);

            obj = new Button("btnSaveSub","btnAddSub:5","0","80","22",null,null,null,null,null,null,this.divMakeBtns.form);
            obj.set_taborder("4");
            obj.set_text("저장(서브)");
            this.divMakeBtns.addChild(obj.name, obj);

            obj = new Button("btnDelSub","btnSaveSub:5","0","80","22",null,null,null,null,null,null,this.divMakeBtns.form);
            obj.set_taborder("5");
            obj.set_text("삭제(서브)");
            this.divMakeBtns.addChild(obj.name, obj);

            obj = new Button("btnApproval","625","0","80","22",null,null,null,null,null,null,this.divMakeBtns.form);
            obj.set_taborder("7");
            obj.set_text("전자결재");
            this.divMakeBtns.addChild(obj.name, obj);

            obj = new Div("divData","0","divMakeBtns:10",null,null,"0","0",null,null,null,null,this);
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DZU_FORMBUTTON.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_MODULE) && !this.gfnIsNull(this.getOwnerFrame().ID_FORM) && !this.gfnIsNull(this.getOwnerFrame().NM_FORM)) {
        		this.ctxtCD_MODULE.set_value(this.getOwnerFrame().CD_MODULE);
        		this.ctxtID_FORM.set_value(this.getOwnerFrame().ID_FORM);
        		this.ctxtNM_FORM.set_value(this.getOwnerFrame().NM_FORM);
        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 버튼 설정
         ************************************************************************/
        this.fnSetButton = function() {
        // 	var id_group = this.FormInfo.ID_GROUP;
        // 	var gr_search = this.FormInfo.GR_SEARCH;
        // 	var cd_role = this.FormInfo.CD_ROLE;
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnDeploy = this.gfnFormButtonAdd("Deploy", "fnDeploy");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctxtCD_MODULE = this.divSearch.form.ctxtCD_MODULE;
        	this.ctxtID_FORM = this.divSearch.form.ctxtID_FORM;
        	this.ctxtNM_FORM = this.divSearch.form.ctxtNM_FORM;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZU_FORMBUTTON");
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ID_FORM", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("ID_FORM", "string");
        	this.dsSave.addColumn("ID_BUTTON", "string");
        	this.dsSave.addColumn("DS_BUTTON", "string");
        	this.dsSave.addColumn("TY_BUTTON", "string");
        	this.dsSave.addColumn("RM_BUTTON", "string");
        	this.dsSave.addColumn("GR_1", "string");
        	this.dsSave.addColumn("GR_2", "string");
        	this.dsSave.addColumn("GR_3", "string");
        	this.dsSave.addColumn("GR_5", "string");
        	this.dsSave.addColumn("GR_7", "string");
        	this.dsSave.addColumn("GR_9", "string");
        	this.dsSave.addColumn("TY_AUTH_F", "string");
        	this.dsSave.addColumn("TY_AUTH_U", "string");
        	this.dsSave.addColumn("TY_AUTH_R", "string");
        	this.dsSave.addColumn("YN_QUERYX", "string");
        	this.dsSave.addColumn("YN_UPDATEBLOCK", "string");
        	this.dsSave.addColumn("CD_MODULE", "string");
        	this.dsSave.addColumn("SN_ORDER", "int");
        	this.dsSave.addColumn("NM_COLUMN", "string");
        	this.dsSave.addColumn("LR_BUTTON", "string");
        	this.dsSave.addColumn("NM_GROUP", "string");
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
        	this.dsSelect.setColumn(0, "ID_FORM", this.ctxtID_FORM.text);

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
        	var nrow = this.gfnGridAdd(this.dxGrid, "bottom");
        	this.dsList.setColumn(nrow, "GR_1", "Y");
        	this.dsList.setColumn(nrow, "GR_2", "Y");
        	this.dsList.setColumn(nrow, "GR_3", "Y");
        	this.dsList.setColumn(nrow, "GR_5", "Y");
        	this.dsList.setColumn(nrow, "GR_7", "Y");
        	this.dsList.setColumn(nrow, "GR_9", "Y");
        	this.dsList.setColumn(nrow, "TY_AUTH_F", "Y");
        	this.dsList.setColumn(nrow, "TY_AUTH_U", "Y");
        	this.dsList.setColumn(nrow, "TY_AUTH_R", "Y");
        	this.dsList.setColumn(nrow, "YN_QUERYX", "Y");
        	this.dsList.setColumn(nrow, "YN_UPDATEBLOCK", "Y");
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

        	//this.objGrid.hideEditor();
        	this.dxGrid.updateToDataset();
        	this.dsList.set_enableevent(false);

        	this.dsSave.clearData();

        	var id_form = this.ctxtID_FORM.text;
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "ID_FORM", id_form);
        				this.dsSave.setColumn(nrow, "ID_BUTTON", this.dsList.getColumn(i, "ID_BUTTON"));
        				this.dsSave.setColumn(nrow, "DS_BUTTON", this.dsList.getColumn(i, "DS_BUTTON"));
        				this.dsSave.setColumn(nrow, "TY_BUTTON", this.dsList.getColumn(i, "TY_BUTTON"));
        				this.dsSave.setColumn(nrow, "RM_BUTTON", this.dsList.getColumn(i, "RM_BUTTON"));
        				this.dsSave.setColumn(nrow, "GR_1", this.dsList.getColumn(i, "GR_1"));
        				this.dsSave.setColumn(nrow, "GR_2", this.dsList.getColumn(i, "GR_2"));
        				this.dsSave.setColumn(nrow, "GR_3", this.dsList.getColumn(i, "GR_3"));
        				this.dsSave.setColumn(nrow, "GR_5", this.dsList.getColumn(i, "GR_5"));
        				this.dsSave.setColumn(nrow, "GR_7", this.dsList.getColumn(i, "GR_7"));
        				this.dsSave.setColumn(nrow, "GR_9", this.dsList.getColumn(i, "GR_9"));
        				this.dsSave.setColumn(nrow, "TY_AUTH_F", this.dsList.getColumn(i, "TY_AUTH_F"));
        				this.dsSave.setColumn(nrow, "TY_AUTH_U", this.dsList.getColumn(i, "TY_AUTH_U"));
        				this.dsSave.setColumn(nrow, "TY_AUTH_R", this.dsList.getColumn(i, "TY_AUTH_R"));
        				this.dsSave.setColumn(nrow, "YN_QUERYX", this.dsList.getColumn(i, "YN_QUERYX"));
        				this.dsSave.setColumn(nrow, "YN_UPDATEBLOCK", this.dsList.getColumn(i, "YN_UPDATEBLOCK"));
        				this.dsSave.setColumn(nrow, "CD_MODULE", this.dsList.getColumn(i, "CD_MODULE"));
        				this.dsSave.setColumn(nrow, "SN_ORDER", this.dsList.getColumn(i, "SN_ORDER"));
        				this.dsSave.setColumn(nrow, "NM_COLUMN", this.dsList.getColumn(i, "NM_COLUMN"));
        				this.dsSave.setColumn(nrow, "LR_BUTTON", this.dsList.getColumn(i, "LR_BUTTON"));
        				this.dsSave.setColumn(nrow, "NM_GROUP", this.dsList.getColumn(i, "NM_GROUP"));
        				break;
        		}
        	}
        	this.dsList.set_enableevent(true);

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
        this.fnDeploy = function() {
        	var ID_FORM = this.ctxtID_FORM.value;
        	if (this.gfnIsNull(ID_FORM))
        	{
        		this.gfnAlert('FORM ID를 입력하세요.', function(){
        			this.ctxtID_FORM.setFocus();
        		});
        		return false;
        	}

        	this.gfnConfirm('[' + ID_FORM + ']를 운영서버에 배포 하시겠습니까?', function(svcId, isOk) {
        		if (!isOk)	return false;
        		this.dsDeploy.clearData();

        		var nRow = this.dsDeploy.addRow();
        		this.dsDeploy.setColumn(nRow, 'ID_FORM', ID_FORM);

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
        	}, 'fnDeploy_confirm');
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

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.divMakeBtns_btnAdd_onclick = function(obj,e)
        {
        	var id_button = "INSERT";
        	var sub = "";
        	if(obj.name.indexOf('Sub') > -1) {
        		sub = "_SUB";
        	}
        	var frow = this.dsList.findRow("ID_BUTTON", id_button+sub);
        	if (frow == -1) {
        		var nrow = this.gfnGridAdd(this.dxGrid, "bottom");
        		this.dsList.setColumn(nrow, "ID_BUTTON", id_button+sub);
        		this.dsList.setColumn(nrow, "DS_BUTTON", "입력"+sub);
        		this.dsList.setColumn(nrow, "TY_BUTTON", "COMMON");
        		this.dsList.setColumn(nrow, "GR_1", "Y");
        		this.dsList.setColumn(nrow, "GR_2", "Y");
        		this.dsList.setColumn(nrow, "GR_3", "Y");
        		this.dsList.setColumn(nrow, "GR_5", "Y");
        		this.dsList.setColumn(nrow, "GR_7", "Y");
        		this.dsList.setColumn(nrow, "GR_9", "Y");
        		this.dsList.setColumn(nrow, "TY_AUTH_F", "Y");
        		this.dsList.setColumn(nrow, "TY_AUTH_U", "H");
        		this.dsList.setColumn(nrow, "TY_AUTH_R", "H");
        		this.dsList.setColumn(nrow, "YN_QUERYX", "Y");
        		this.dsList.setColumn(nrow, "YN_UPDATEBLOCK", "Y");
        	}
        };

        this.divMakeBtns_btnSave_onclick = function(obj,e)
        {
        	var id_button = "SAVE";
        	var sub = "";
        	if(obj.name.indexOf('Sub') > -1) {
        		sub = "_SUB";
        	}
        	var frow = this.dsList.findRow("ID_BUTTON", id_button+sub);
        	if (frow == -1) {
        		var nrow = this.gfnGridAdd(this.dxGrid, "bottom");
        		this.dsList.setColumn(nrow, "ID_BUTTON", id_button+sub);
        		this.dsList.setColumn(nrow, "DS_BUTTON", "저장"+sub);
        		this.dsList.setColumn(nrow, "TY_BUTTON", "COMMON");
        		this.dsList.setColumn(nrow, "GR_1", "Y");
        		this.dsList.setColumn(nrow, "GR_2", "Y");
        		this.dsList.setColumn(nrow, "GR_3", "Y");
        		this.dsList.setColumn(nrow, "GR_5", "Y");
        		this.dsList.setColumn(nrow, "GR_7", "Y");
        		this.dsList.setColumn(nrow, "GR_9", "Y");
        		this.dsList.setColumn(nrow, "TY_AUTH_F", "Y");
        		this.dsList.setColumn(nrow, "TY_AUTH_U", "Y");
        		this.dsList.setColumn(nrow, "TY_AUTH_R", "H");
        		this.dsList.setColumn(nrow, "YN_QUERYX", "Y");
        		this.dsList.setColumn(nrow, "YN_UPDATEBLOCK", "Y");
        	}
        };

        this.divMakeBtns_btnDel_onclick = function(obj,e)
        {
        	var id_button = "DELETE";
        	var sub = "";
        	if(obj.name.indexOf('Sub') > -1) {
        		sub = "_SUB";
        	}
        	var frow = this.dsList.findRow("ID_BUTTON", id_button+sub);
        	if (frow == -1) {
        		var nrow = this.gfnGridAdd(this.dxGrid, "bottom");
        		this.dsList.setColumn(nrow, "ID_BUTTON", id_button+sub);
        		this.dsList.setColumn(nrow, "DS_BUTTON", "삭제"+sub);
        		this.dsList.setColumn(nrow, "TY_BUTTON", "COMMON");
        		this.dsList.setColumn(nrow, "GR_1", "Y");
        		this.dsList.setColumn(nrow, "GR_2", "Y");
        		this.dsList.setColumn(nrow, "GR_3", "Y");
        		this.dsList.setColumn(nrow, "GR_5", "Y");
        		this.dsList.setColumn(nrow, "GR_7", "Y");
        		this.dsList.setColumn(nrow, "GR_9", "Y");
        		this.dsList.setColumn(nrow, "TY_AUTH_F", "Y");
        		this.dsList.setColumn(nrow, "TY_AUTH_U", "H");
        		this.dsList.setColumn(nrow, "TY_AUTH_R", "H");
        		this.dsList.setColumn(nrow, "YN_QUERYX", "Y");
        		this.dsList.setColumn(nrow, "YN_UPDATEBLOCK", "Y");
        	}
        };

        this.divMakeBtns_btnPrt_onclick = function(obj,e)
        {
        	var id_button = "PRINT";
        	var sub = "";
        	if(obj.name.indexOf('Sub') > -1) {
        		sub = "_SUB";
        	}
        	var frow = this.dsList.findRow("ID_BUTTON", id_button+sub);
        	if (frow == -1) {
        		var nrow = this.gfnGridAdd(this.dxGrid, "bottom");
        		this.dsList.setColumn(nrow, "ID_BUTTON", id_button+sub);
        		this.dsList.setColumn(nrow, "DS_BUTTON", "출력"+sub);
        		this.dsList.setColumn(nrow, "TY_BUTTON", "COMMON");
        		this.dsList.setColumn(nrow, "GR_1", "Y");
        		this.dsList.setColumn(nrow, "GR_2", "Y");
        		this.dsList.setColumn(nrow, "GR_3", "Y");
        		this.dsList.setColumn(nrow, "GR_5", "Y");
        		this.dsList.setColumn(nrow, "GR_7", "Y");
        		this.dsList.setColumn(nrow, "GR_9", "Y");
        		this.dsList.setColumn(nrow, "TY_AUTH_F", "Y");
        		this.dsList.setColumn(nrow, "TY_AUTH_U", "Y");
        		this.dsList.setColumn(nrow, "TY_AUTH_R", "Y");
        		this.dsList.setColumn(nrow, "YN_QUERYX", "Y");
        		this.dsList.setColumn(nrow, "YN_UPDATEBLOCK", "Y");
        	}
        };

        this.divMakeBtns_btnApproval_onclick = function(obj,e)
        {
        	var btns = [
        		{ID_BUTTON: "btnAprv", DS_BUTTON: "결재상신", TY_BUTTON: "FORM", NM_GROUP: "결재상신", SN_ORDER: "101", NM_COLUMN: ""},
        		{ID_BUTTON: "btnSlipQ", DS_BUTTON: "전표조회", TY_BUTTON: "FORM", NM_GROUP: "결재상신", SN_ORDER: "102", NM_COLUMN: "BTN_SLIP_Q"},
        		{ID_BUTTON: "btnDocQ", DS_BUTTON: "결재문서조회", TY_BUTTON: "FORM", NM_GROUP: "결재상신", SN_ORDER: "103", NM_COLUMN: "BTN_DOC_Q"},
        		{ID_BUTTON: "btnAprvCnc", DS_BUTTON: "취소결재상신", TY_BUTTON: "FORM", NM_GROUP: "취소결재상신", SN_ORDER: "104", NM_COLUMN: ""},
        		{ID_BUTTON: "btnSlipCncQ", DS_BUTTON: "취소전표조회", TY_BUTTON: "FORM", NM_GROUP: "취소결재상신", SN_ORDER: "105", NM_COLUMN: "BTN_SLIPCNC_Q"},
        		{ID_BUTTON: "btnDocCncQ", DS_BUTTON: "취소결재문서조회", TY_BUTTON: "FORM", NM_GROUP: "취소결재상신", SN_ORDER: "106", NM_COLUMN: "BTN_DOCCNC_Q"},
        		{ID_BUTTON: "btnInit", DS_BUTTON: "결재상태초기화", TY_BUTTON: "EXEC", NM_GROUP: "", SN_ORDER: "107", NM_COLUMN: ""},
        	];

        	var nrow = 0;

        	this.dsList.set_enableevent(false);
        	for(var i = 0; i < btns.length; ++i) {
        		nrow = this.gfnGridAdd(this.dxGrid, "bottom", null, false);
        		this.dsList.setColumn(nrow, "ID_BUTTON"		, btns[i].ID_BUTTON);
        		this.dsList.setColumn(nrow, "DS_BUTTON"		, btns[i].DS_BUTTON);
        		this.dsList.setColumn(nrow, "TY_BUTTON"		, btns[i].TY_BUTTON);
        		this.dsList.setColumn(nrow, "GR_1"	   		, "Y");
        		this.dsList.setColumn(nrow, "GR_2"	   		, "Y");
        		this.dsList.setColumn(nrow, "GR_3"	   		, "Y");
        		this.dsList.setColumn(nrow, "GR_5"	   		, "Y");
        		this.dsList.setColumn(nrow, "GR_7"	   		, "Y");
        		this.dsList.setColumn(nrow, "GR_9"	   		, "Y");
        		this.dsList.setColumn(nrow, "TY_AUTH_F"		, "Y");
        		this.dsList.setColumn(nrow, "TY_AUTH_U"		, "Y");
        		this.dsList.setColumn(nrow, "TY_AUTH_R"		, "Y");
        		this.dsList.setColumn(nrow, "YN_QUERYX"		, "Y");
        		this.dsList.setColumn(nrow, "YN_UPDATEBLOCK", "Y");
        		this.dsList.setColumn(nrow, "NM_GROUP"		, btns[i].NM_GROUP);
        		this.dsList.setColumn(nrow, "SN_ORDER"		, btns[i].SN_ORDER);
        		this.dsList.setColumn(nrow, "NM_COLUMN"		, btns[i].NM_COLUMN);
        	}
        	this.dsList.set_enableevent(true);

        	this.dxGrid.set_enableredraw(false);
        	this.dxGrid.setFocus();
        	this.dxGrid.clearSelect();
        	this.dxGrid.setCellPos(0, nrow);
        	this.dxGrid.set_enableredraw(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divMakeBtns.form.btnAdd.addEventHandler("onclick",this.divMakeBtns_btnAdd_onclick,this);
            this.divMakeBtns.form.btnSave.addEventHandler("onclick",this.divMakeBtns_btnSave_onclick,this);
            this.divMakeBtns.form.btnDel.addEventHandler("onclick",this.divMakeBtns_btnDel_onclick,this);
            this.divMakeBtns.form.btnPrt.addEventHandler("onclick",this.divMakeBtns_btnPrt_onclick,this);
            this.divMakeBtns.form.btnAddSub.addEventHandler("onclick",this.divMakeBtns_btnAdd_onclick,this);
            this.divMakeBtns.form.btnSaveSub.addEventHandler("onclick",this.divMakeBtns_btnSave_onclick,this);
            this.divMakeBtns.form.btnDelSub.addEventHandler("onclick",this.divMakeBtns_btnDel_onclick,this);
            this.divMakeBtns.form.btnApproval.addEventHandler("onclick",this.divMakeBtns_btnApproval_onclick,this);
        };
        this.loadIncludeScript("DZU_FORMBUTTON.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
