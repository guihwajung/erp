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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DOGPR_BUDGET_DEFINITE_SELECT</Col></Row><Row><Col id=\"TARGET\">d_select</Col><Col id=\"SP\">DOGPR_BUDGET_REQUESTDEPTAPPLY_SELECT</Col></Row><Row><Col id=\"TARGET\">d_select2</Col><Col id=\"SP\">DOGPR_BUDGETMONTH_SELECT</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DOGPR_BUDGET_DEFINITE_UPDATE</Col></Row></Rows>");
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
            obj.getSetter("CDTextWidth").set("70");
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_SITE:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("신청부서코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
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

            obj = new Div("divSplitter","25%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("사업비 전체예산");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","570","0",null,"22","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("3");
            obj.set_text("신청부서 예산");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta02","0","0",null,"22","sta00:15",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("부서별 신청예산");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub2","570","27",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","sta02:5",null,null,"objGridSub2:15","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
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
        this.registerScript("DOG_BUDGET_CONFIRM.xfdl", function() {
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
        	this.btn1 = this.gfnFormButtonAdd("btnDefinite", "fnDefinite");			// 예산확정
        	this.btn2 = this.gfnFormButtonAdd("btnDefinitecncl", "fnDefinitecncl");	// 확정취소
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfCD_DEPTAPPLY = this.divSearch.form.ccfCD_DEPTAPPLY;
        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        	this.dxGridSub2 = this.divData.form.divDataRight.form.objGridSub2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_DEPTAPPLY.CodeFindName = "DOX_CFPRGBIZFORSAUPBI";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DO", "DOG_BUDGET_DEFINITE", "CD_SAUPCODE", "NO_LEVEL");
        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	//this.dsList.addEventHandler("canrowposchange", this.dsList_canrowposchange, this);

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DO", "DOG_BUDGET_REQUESTDEPTAPPLY");
        	this.dxGridSub.set_selecttype("cell");
        	this.dxGridSub.addEventHandler("onselectchanged", this.fnGridSub_RowCellChanged, this);

        	this.gfnGridInit(this.dxGridSub2, this.dsListSub2, "DO", "DOG_BUDGETAPPLY");

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_SITE", "string");
        	this.dsSelectSub.addColumn("CD_SAUPCODE", "string");
        	this.dsSelectSub.addColumn("CD_DEPTAPPLY", "string");

        	this.dsSelectSub2 = new Dataset();
        	this.dsSelectSub2.addColumn("CD_SAUPCODE", "string");
        	this.dsSelectSub2.addColumn("CD_SITE", "string");
        	this.dsSelectSub2.addColumn("CD_DEPTAPPLY", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("CD_SITE", "string");
        	this.dsExec.addColumn("YN_CONFIRM", "string");
        	this.dsExec.addColumn("ID_USER", "string");
        }

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
        	//var nrow = this.gfnGridAdd(this.dxGridSub);

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGridSub);
        }

        /*
         *	편성확정 or 취소 처리
         */
        this.fnExec = function(gubun) {

        	this.dsExec.clearData();

        	this.dsExec.addRow();

        	this.dsExec.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExec.setColumn(0, "YN_CONFIRM", gubun);
        	this.dsExec.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsExec.rowcount == 0) return;

        	var strSvcId    = "exec";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
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
        // 디테일 그리드 조회
        this.fnSelectSub = function() {

        	if (this.dxGrid.rowcount == 0 || this.dxGrid.currentrow < 0) return;

        	this.gfnGridBeforeSelect(this.dxGridSub);

        	// 디테일 데이터셋 데이터 삭제
        	this.dsListSub.clearData();

        	// 디테일 파마리터 데이터셋 셋팅
        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectSub.setColumn(0, "CD_SAUPCODE", this.dsList.getColumn(this.dsList.rowposition, "CD_SAUPCODE"));
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

        // 디테일2 그리드 조회
        this.fnSelectSub2 = function() {

        	if (this.dxGridSub.rowcount == 0 || this.dxGridSub.currentrow < 0) return;

        	//this.gfnGridBeforeSelect(this.dxGridSub2);

        	// 디테일 데이터셋 데이터 삭제
        	//this.dsListSub2.clearData();

        	// 디테일 파마리터 데이터셋 셋팅
        	this.dsSelectSub2.clearData();
        	this.dsSelectSub2.addRow();

        	this.dsSelectSub2.setColumn(0, "CD_SAUPCODE", this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_SAUPCODE"));
        	this.dsSelectSub2.setColumn(0, "CD_SITE", this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_SITE"));
        	this.dsSelectSub2.setColumn(0, "CD_DEPTAPPLY", this.dsListSub.getColumn(this.dsListSub.rowposition, "CD_DEPTAPPLY"));

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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
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
        	else if (svcID == "detail") {
        		this.gfnGridAfterSelect(this.dxGridSub);

        		this.gfnGridBeforeSelect(this.dxGridSub2);

        		// 3번째 그리드의 데이터셋 데이터 삭제
        		this.dsListSub2.clearData();

        		// 예산확정, 확정취소 버튼 활성 or 비활성화 처리
        		this.fnBtnEn();
        	}
        	else if (svcID == "detail2") {
        		this.gfnGridAfterSelect(this.dxGridSub2);
        	}
        	else if(svcID == "exec") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        // 저장, 삭제, 편성확정, 편성취소 버튼 활성 or 비활성화 처리
        this.fnBtnEn = function() {
        	// 저장, 삭제, 편성확정, 편성취소 버튼 활성 or 비활성화 처리
        	var ynConfirm = this.dsList.getColumn(this.dsList.rowposition, "YN_CONFIRM");

        	if(ynConfirm == "Y"){
        		this.btn1.set_enable(false);		// 예산확정 버튼
        		this.btn2.set_enable(true);			// 확정취소 버튼
        	}else if(ynConfirm == "N"){
        		this.btn1.set_enable(true);
        		this.btn2.set_enable(false);
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
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
           e.set_userdata("splitter");
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

         // 예산확정 버튼 클릭 이벤트
        this.fnDefinite = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var gubun = "Y";
        	this.fnExec(gubun);
        }

        // 확정취소 버튼 클릭 이벤트
        this.fnDefinitecncl = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var gubun = "N";
        	this.fnExec(gubun);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DOG_BUDGET_CONFIRM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
