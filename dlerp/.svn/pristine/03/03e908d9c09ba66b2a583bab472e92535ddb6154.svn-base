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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOGPR_BUDGETINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DOGPR_BUDGETCHNG_SELECT</Col></Row><Row><Col id=\"TARGET\">d_update</Col><Col id=\"SP\">DOGPR_BUDGETCHNG_UPDATE</Col></Row><Row><Col id=\"TARGET\">d_delete</Col><Col id=\"SP\">DOGPR_BUDGETCHNG_DELETE</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DOGPR_ADD_BUDGET_DEFINITE_UPDATE</Col></Row><Row><Col id=\"TARGET\">d_select2</Col><Col id=\"SP\">DOGPR_BUDGETCHNGHSTRY_SELECT</Col></Row><Row><Col id=\"TARGET\">confirm_btn</Col><Col id=\"SP\">DOGPR_YN_CONFIRMBUTTON</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPTAPPLY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"CD_DEPTAPPLY\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsConfirm", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","sta00:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_SITE:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("신청부서코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPTAPPLY","sta01:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","33%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divSplitter2","66%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("부서 확정예산");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataMedium","divSplitter:5","0",null,null,"divSplitter2:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataMedium.form);
            obj.set_taborder("0");
            obj.set_text("월별 확정예산");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataMedium.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataMedium.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataMedium.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter2:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_text("예산 변경신청 이력");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub2","0","sta03:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPTAPPLY.form.CDTextBox","value","dsSearch","CD_DEPTAPPLY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DOG_BUDGET_CHNGCNF.xfdl", function() {
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

        	this.btnBudgetchg.set_enable(false);
        	this.btnBudgetchgCncl.set_enable(false);

        	if(!this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().CD_DEPT)) {
        		this.dsSearch.setColumn(0, "CD_SITE", this.getOwnerFrame().CD_SITE);
        		this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().DS_SITE);
        		this.dsSearch.setColumn(0, "CD_DEPTAPPLY", this.getOwnerFrame().CD_DEPT);
        		this.ccfCD_DEPTAPPLY.form.DSTextBox.set_value(this.getOwnerFrame().DS_DEPT);

        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용(2개 그리드 중간에 있는 파란선) 상단에 공통 셋트가 하나더 생긴다
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter); // divSplitter sync
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnBudgetchg = this.gfnFormButtonAdd("btnBudgetchg", "fnBudgetchg");		// 변경예산확정
        	this.btnBudgetchgCncl = this.gfnFormButtonAdd("btnBudgetchgCncl", "fnBudgetchgCncl");	// 변경예산취소
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfCD_DEPTAPPLY = this.divSearch.form.ccfCD_DEPTAPPLY;
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataMedium.form.objGridSub;
        	this.dxGridSub2 = this.divData.form.divDataRight.form.objGridSub2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_DEPTAPPLY.CodeFindName = "DOX_CFPRGBIZFORSAUPBI";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOG_BUDGETINFO", "DS_SAUPCODE", "NO_LEVEL");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DO", "DOG_BUDGETCHNG");
        	this.dxGridSub.addEventHandler("onselectchanged", this.fnGridSub_RowCellChanged, this);

        	this.gfnGridInit(this.dxGridSub2, this.dsListSub2, "DO", "DOG_BUDGETCHNGHSTRY");
        	//this.dxGridSub.BeforeUserDataSetParam = "fnGridSub_BeforeUserDataSetParam";
        }


        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("CD_DEPTAPPLY", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_SAUPCODE", "string");
        	this.dsSelectSub.addColumn("CD_SITE", "string");
        	this.dsSelectSub.addColumn("CD_DEPTAPPLY", "string");

        	this.dsUpdateSub = new Dataset();
        	this.dsUpdateSub.addColumn("CD_SAUPCODE", "string");
        	this.dsUpdateSub.addColumn("CD_SITE", "string");
        	this.dsUpdateSub.addColumn("CD_DEPTAPPLY", "string");
        	this.dsUpdateSub.addColumn("YM_MONTH", "string");
        	this.dsUpdateSub.addColumn("AM_BUDGET_ORG", "bigdecimal");
        	this.dsUpdateSub.addColumn("AM_CHANGE", "bigdecimal");
        	this.dsUpdateSub.addColumn("DS_CHANGE", "string");
        	this.dsUpdateSub.addColumn("ID_USER", "string");

        	this.dsDeleteSub = new Dataset();
        	this.dsDeleteSub.addColumn("CD_SAUPCODE", "string");
        	this.dsDeleteSub.addColumn("CD_SITE", "string");
        	this.dsDeleteSub.addColumn("CD_DEPTAPPLY", "string");
        	this.dsDeleteSub.addColumn("YM_MONTH", "string");
        	this.dsDeleteSub.addColumn("ID_USER", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("CD_DEPTAPPLY", "string");
        	this.dsExec.addColumn("YN_CONFIRM", "string");
        	this.dsExec.addColumn("ID_USER", "string");

        	this.dsSelectSub2 = new Dataset();
        	this.dsSelectSub2.addColumn("CD_SAUPCODE", "string");
        	this.dsSelectSub2.addColumn("CD_SITE", "string");
        	this.dsSelectSub2.addColumn("CD_DEPTAPPLY", "string");
        	this.dsSelectSub2.addColumn("YM_MONTH", "string");

        	this.dsConfirmBtn = new Dataset();
        	this.dsConfirmBtn.addColumn("CD_SITE", "string");
        	this.dsConfirmBtn.addColumn("CD_DEPTAPPLY", "string");
        };

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "CD_DEPTAPPLY", this.dsSearch.getColumn(0, "CD_DEPTAPPLY"));

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGridSub);
        	/*
        	this.dsListSub.set_enableevent(false);
        	this.dsListSub.setColumn(nrow, "CD_ITEMREG", this.dsList.getColumn(this.dsList.rowposition, "ITEMREG"));
        	this.dsListSub.set_enableevent(true);
        	*/
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGridSub);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();

        	//this.dsInsertSub.clearData();
        	this.dsUpdateSub.clearData();
        	this.dsDeleteSub.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdateSub.addRow();
        				this.dsUpdateSub.setColumn(nrow, "CD_SAUPCODE", this.dsList.getColumn(this.dsList.rowposition, "CD_SAUPCODE"));
        				this.dsUpdateSub.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsUpdateSub.setColumn(nrow, "CD_DEPTAPPLY", this.dsSearch.getColumn(0, "CD_DEPTAPPLY"));
        				this.dsUpdateSub.setColumn(nrow, "YM_MONTH", this.dsListSub.getColumn(i, "YM_MONTH"));
        				this.dsUpdateSub.setColumn(nrow, "AM_BUDGET_ORG", this.dsListSub.getColumn(i, "AM_BUDGET_ORG"));
        				this.dsUpdateSub.setColumn(nrow, "AM_CHANGE", this.dsListSub.getColumn(i, "AM_CHANGE"));
        				this.dsUpdateSub.setColumn(nrow, "DS_CHANGE", this.dsListSub.getColumn(i, "DS_CHANGE"));
        				this.dsUpdateSub.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDeleteSub.addRow();
        				this.dsDeleteSub.setColumn(nrow, "CD_SAUPCODE", this.dsList.getColumn(this.dsList.rowposition, "CD_SAUPCODE"));
        				this.dsDeleteSub.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        				this.dsDeleteSub.setColumn(nrow, "CD_DEPTAPPLY", this.dsSearch.getColumn(0, "CD_DEPTAPPLY"));
        				this.dsDeleteSub.setColumn(nrow, "YM_MONTH", this.dsListSub.getColumn(i, "YM_MONTH"));
        				this.dsDeleteSub.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        		}
        	}

        	if (this.dsUpdateSub.rowcount == 0 && this.dsDeleteSub.rowcount == 0) return;

        	var amChange = 0;
        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		if(!this.gfnIsNull(this.dsListSub.getColumn(i, "AM_BUDGET_ORG")) && this.dsListSub.getColumn(i, "AM_BUDGET_ORG") != 0){
        			amChange = amChange + nexacro.toNumber(this.dsListSub.getColumn(i, "AM_CHANGE"), 0);
        		}
        	}
        	this.dsList.setColumn(this.dsList.rowposition, "AM_CHANGE_N", amChange);	// 왼쪽 그리드 미확정변경예산 금액을 셋팅해주고 flag값 업데이트가 되니깐 null처리해준다
        	this.dsList.setColumn(this.dsList.rowposition, this.ucFlag, "");

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "d_update=dsUpdateSub d_delete=dsDeleteSub";
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

        this.fnConfirmBtn = function()
        {
        	this.dsConfirmBtn.clearData();

        	var nrow = this.dsConfirmBtn.addRow();

        	this.dsConfirmBtn.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsConfirmBtn.setColumn(nrow, "CD_DEPTAPPLY", this.dsSearch.getColumn(0, "CD_DEPTAPPLY"));

        	var strSvcId    = "confirm_btn";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "confirm_btn=dsConfirmBtn";
        	var outData     = "dsConfirm=confirm_btn0";
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
         *	변경예산확정 처리
         */
        this.fnExec = function(yn_confirm) {

        	this.dsExec.clearData();

        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExec.setColumn(0, "CD_DEPTAPPLY", this.dsSearch.getColumn(0, "CD_DEPTAPPLY"));
        	this.dsExec.setColumn(0, "YN_CONFIRM", yn_confirm);
        	this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
        	var outData     = "";
        	var strArg      = "gubun="+yn_confirm;
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
        // 디테일 그리드 조회
        this.fnSelectSub = function() {

        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return;

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	// 디테일 데이터셋 데이터 삭제
        	this.dsListSub.clearData();

        	// 디테일 파마리터 데이터셋 셋팅
        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "CD_SAUPCODE", this.dsList.getColumn(this.dsList.rowposition, "CD_SAUPCODE"));
        	this.dsSelectSub.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectSub.setColumn(0, "CD_DEPTAPPLY", this.dsSearch.getColumn(0, "CD_DEPTAPPLY"));

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



        this.fnExcelSub = function() {
        	this.gfnExcelExport(this.dxGridSub);
        }


        // 디테일2 그리드 조회
        this.fnSelectSub2 = function() {

        	if (this.dxGridSub.rowcount == 0 || this.dxGridSub.currentrow < 0) return;

        	// 디테일 파마리터 데이터셋 셋팅
        	this.dsSelectSub2.clearData();
        	this.dsSelectSub2.addRow();

        	this.dsSelectSub2.setColumn(0, "CD_SAUPCODE", this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_SAUPCODE"));
        	this.dsSelectSub2.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectSub2.setColumn(0, "CD_DEPTAPPLY", this.dsSearch.getColumn(0, "CD_DEPTAPPLY"));
        	this.dsSelectSub2.setColumn(0, "YM_MONTH", this.dsListSub.getColumn(this.dsListSub.rowposition, "YM_MONTH"));

        	var strSvcId    = "detail2";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select2=dsSelectSub2";
        	var outData     = "dsListSub2=d_select20";
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


        this.fnExcelSub = function() {
        	this.gfnExcelExport(this.dxGridSub2);
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_DEPTAPPLY"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPTAPPLY.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("신청부서코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}

        	return validate;

        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnConfirmBtn();
        	}
        	else if (svcID == "detail") {
        		  this.gfnGridAfterSelect(this.dxGridSub);
        		  this.gfnGridBeforeSelect(this.dxGridSub2);

        		  if(this.dxGridSub.currentrow == -1) {
        			 this.dxGridSub.setCellPos(0, 0);
              }
           }
        	else if (svcID == "detail2") {
        		this.gfnGridAfterSelect(this.dxGridSub2);
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.fnSelectSub();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec") {
        		if (errorCode == 0) {

        			this.fnExecMsg_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}

        			var json = this.gfnArgsToJson(strArg);
        			strArg = json.gubun;

        			var msg = "";

        			if(strArg == "Y") msg += "변경예산확정이 정상처리되었습니다.";
        			else if(strArg == "N") msg += "변경예산확정취소가 정상처리되었습니다.";

        			this.gfnAlert(msg, "fnExecMsg_callback");

        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "confirm_btn") {
        		if(this.dsConfirm.rowcount > 0)
        		{
        			if(this.dsConfirm.getColumn(0, "YN_CONFIRMBUTTON") == "Y")
        			{
        				this.btnBudgetchg.set_enable(true);
        				this.btnBudgetchgCncl.set_enable(false);
        			}
        			else
        			{
        				this.btnBudgetchg.set_enable(false);
        				this.btnBudgetchgCncl.set_enable(true);
        			}
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
        		// 마스터 그리드 클릭 이벤트(디테일 그리드 조회)
        		this.FormBtns.SubSelect.click();
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


        this.fnGridSub_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		// 마스터 그리드 클릭 이벤트(디테일 그리드 조회)
        		//this.FormBtns.SubSelect.click();
        		this.fnSelectSub2();
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
        		this.gfnGridClear(this.dxGridSub2);
        	}
        }

        this.divData_ondragmove = function(obj,e)
        {
           if(e.userdata == "splitter") {
              this.divData.form.divSplitter.set_left(e.clientx);
              this.divData.form.resetScroll();
           }
           else if(e.userdata == "splitter2") {
              this.divData.form.divSplitter2.set_left(e.clientx);
              this.divData.form.resetScroll();
           }
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
           e.set_userdata("splitter");
           return true;
        };

        this.divData_divSplitter2_ondrag = function(obj,e)
        {
           e.set_userdata("splitter2");
           return true;
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        		this.gfnGridClear(this.dxGridSub2);
        	}
        };


        // 변경예산확정 버튼 클릭 이벤트
        this.fnBudgetchg = function(obj,e) {
        // 	// 선택된 row가 있을 경우에만 팝업을 띄움
        // 	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.gfnConfirm("변경예산확정을 진행하시겠습니까?" , "fnBudgetchg_callback", "Y");
        }

        // 변경예산확정 버튼 클릭 이벤트
        this.fnBudgetchgCncl = function(obj,e) {
        // 	// 선택된 row가 있을 경우에만 팝업을 띄움
        // 	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	this.gfnConfirm("변경예산취소를 진행하시겠습니까?" , "fnBudgetchg_callback", "N");
        }

        this.fnBudgetchg_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnExec(strID);
        	}
        }




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divSplitter2.addEventHandler("ondrag",this.divData_divSplitter2_ondrag,this);
            this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DOG_BUDGET_CHNGCNF.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
