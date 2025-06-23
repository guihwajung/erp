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
            this.set_titletext("승진발령 기준정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_PROMOTION_TARGET_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAAPR_PROMOTION_TARGET_SAVE</Col></Row><Row><Col id=\"TARGET\">copy</Col><Col id=\"SP\">DAAPR_PROMOTION_TARGET_COPY</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAYSTEP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_BASE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("기준년월");
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_POSITION","staYM_BASE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("직위");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_POSITION","staCD_POSITION:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PAYSTEP","ccfCD_POSITION:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("직급");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_PAYSTEP","staCD_PAYSTEP:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("onitemchanged").set("fnSearchInit");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_BASE","ccfCD_PAYSTEP:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYM_BASE.form.TextBox","value","dsSearch","YM_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_POSITION.form.CDTextBox","value","dsSearch","CD_POSITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_PAYSTEP.form.CDTextBox","value","dsSearch","CD_PAYSTEP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DAA_PROMOTION_TARGET.xfdl", function() {
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

            // 직위코드 및 직위명 기본세팅
        	this.ccfCD_POSITION.form.CDTextBox.set_value(this.AuthClient.CD_POSITION);
            this.ccfCD_POSITION.form.DSTextBox.set_value(this.AuthClient.DS_POSITION);

        	// 직급코드 및 직급명 기본세팅
        	this.ccfCD_PAYSTEP.form.CDTextBox.set_value(this.AuthClient.CD_PAYSTEP);
            this.ccfCD_PAYSTEP.form.DSTextBox.set_value(this.AuthClient.DS_PAYSTEP);

        	//적용년도 셋팅
        	var today = this.gfnGetDate().substring(0,4);
        	this.divSearch.form.ctclYM_BASE.form.TextBox.set_value(today+'01');

        	//화면 로드시 자동조회
        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, PrintVV
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	// 	this.FormBtns.Add.set_enable(false);
        	// 	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("FormButton1", "fnFormButton1","이전정보 복사");
        };

        // 팝업1-이전정보 복사
        this.fnFormButton1 = function(obj,e) {
        //	this.gfnAlert("팝업1-이전정보 복사");
        	this.fnCopy();
        /*
        	var param = {};

        	param.DT_BASE = this.dsSearch.getColumn(0, "DT_BASE");
        	param.YN_PROMOTION = this.dsSearch.getColumn(0, "YN_PROMOTION");
        	param.TY_GUBUN = this.dsLeft.getColumn(this.dsLeft.rowposition, "TY_GUBUN");
        	param.CD_POSITION = this.dsLeft.getColumn(this.dsLeft.rowposition, "CD_POSITION");
        	param.CD_CORP = this.dsLeft.getColumn(this.dsLeft.rowposition, "CD_CORP");

        	this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DLB_DLGCONTRACT", "fnDialogCallback", param, 290, 290);*/

        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ctclYM_BASE = this.divSearch.form.ctclYM_BASE; //승진 기준일자
        	this.ccfCD_POSITION = this.divSearch.form.ccfCD_POSITION; //직위코드
        	this.ccfCD_PAYSTEP = this.divSearch.form.ccfCD_PAYSTEP; //직급코드
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//직위
        	this.ccfCD_POSITION.CodeFindName = "DAX_CFCOMMONCODE";
        	this.ccfCD_POSITION.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	this.ccfCD_POSITION.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//직급
        	this.ccfCD_PAYSTEP.CodeFindName = "DAX_CFPAYSTEP";
        	this.ccfCD_PAYSTEP.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	this.ccfCD_PAYSTEP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";


        	//그리드
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAA_PROMOTION_TARGET");

        	//그리드 이벤트
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_PAYSTEP") {
        		dsUserParam.setColumn(nrow, "YM_SALARY", this.ctclYM_BASE.value);
        	}
        	else if  (id == "ccfCD_POSITION") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", 'ED');	//직위
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
        	trace('grid_코드파인드_식별id: ' + id);

        	switch(id) {
        	case "CD_POSITION_BASE":
                 dsUserParam.setColumn(nrow, "CD_PREFIX", 'ED'); // 기준직위
        	break;

        	case "CD_POSITION":
                 dsUserParam.setColumn(nrow, "CD_PREFIX", 'ED'); // 발령직위
        	break;

        	case "CD_PAYSTEP_BASE":
        	//alert("11111111111"+this.ctclYM_BASE.value);
        		//var today = this.gfnGetDate().substring(0,4); //현재 년도1월
        		//this.divSearch.form.ctclYM_BASE.form.TextBox.set_value(today+'01')
                 dsUserParam.setColumn(nrow, "YM_SALARY", this.ctclYM_BASE.value); //  기준직급
        	break;

        	case "CD_PAYSTEP":
                 dsUserParam.setColumn(nrow, "YM_SALARY", this.ctclYM_BASE.value); //  발령직급
        	break;

        	default:
        	}
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

        	switch(id) {
        	case "DAX_CFCOMMONCODE":
        		break;

        	case "DAX_CFPAYSTEP":
        		break;

        	default:
        	}
        	return true;
        };

         /************************************************************************
         * 파라미터
         ************************************************************************/
        this.fnSetParameter = function() {
        	// sp의 input 파라미터
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_BASE", "string");  //승진 기준일자
        	this.dsSelect.addColumn("CD_POSITION", "string");  //직위
        	this.dsSelect.addColumn("CD_PAYSTEP", "string");  //직급

            // 저장
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("YM_BASE", "string"); //기준년월
        	this.dsSave.addColumn("CD_POSITION_BASE", "string"); //기준직위
        	this.dsSave.addColumn("CD_POSITION", "string"); //발령직위
        	this.dsSave.addColumn("CD_PAYSTEP_BASE", "string"); //기준직급
        	this.dsSave.addColumn("CD_PAYSTEP", "string"); //발령직급
        	this.dsSave.addColumn("DS_REMARK", "string");	 //비고
        	this.dsSave.addColumn("ID_INSERT", "string");  //입력자

        	this.dsCopy = new Dataset();
        	this.dsCopy.addColumn("YM_BASE", "string");
        	this.dsCopy.addColumn("ID_INSERT", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "YM_BASE", this.divSearch.form.ctclYM_BASE.form.TextBox.value); // 승진 기준일자
        	this.dsSelect.setColumn(0, "CD_POSITION", this.ccfCD_POSITION.form.CDTextBox.value); // 직위
        	this.dsSelect.setColumn(0, "CD_PAYSTEP", this.ccfCD_PAYSTEP.form.CDTextBox.value); // 직급

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(nrow, "YM_BASE", this.divSearch.form.ctclYM_BASE.form.TextBox.value); //기준년월 바인딩 셋팅

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
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		if(flag == "I" || flag == "U" || flag == "D") {

        				var nrow = this.dsSave.addRow();

        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "YM_BASE", this.dsList.getColumn(i, "YM_BASE"));
        				this.dsSave.setColumn(nrow, "CD_POSITION_BASE", this.dsList.getColumn(i, "CD_POSITION_BASE"));
        				this.dsSave.setColumn(nrow, "CD_POSITION", this.dsList.getColumn(i, "CD_POSITION"));
        				this.dsSave.setColumn(nrow, "CD_PAYSTEP_BASE", this.dsList.getColumn(i, "CD_PAYSTEP_BASE"));
        				this.dsSave.setColumn(nrow, "CD_PAYSTEP", this.dsList.getColumn(i, "CD_PAYSTEP"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);	//user디폴트

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
         *	이전자료복사 버튼
         */
        this.fnCopy = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsCopy.clearData();
        	var nrow = this.dsCopy.addRow();
        	this.dsCopy.setColumn(nrow, "YM_BASE", this.dsSearch.getColumn(0, "YM_BASE"));
        	this.dsCopy.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);	//user디폴트

        	var strSvcId    = "copy";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "copy=dsCopy";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
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
        /*
         *	리셋 버튼
         */
        this.fnReset = function() {
        	this.divSearch.form.ctclYM_BASE.form.TextBox.set_value("");

        	this.ccfCD_POSITION.form.CDTextBox.set_value("");
        	this.ccfCD_POSITION.form.DSTextBox.set_value("");

        	this.ccfCD_PAYSTEP.form.CDTextBox.set_value("");
        	this.ccfCD_PAYSTEP.form.DSTextBox.set_value("");

        	this.fnSearchInit();
        };

        /************************************************************************
         * Validate
         ************************************************************************/
         this.fnValidate = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_BASE"))) {
        		this.gfnAlert("기준년월를 입력해 주세요!");
        		this.ctclYM_BASE.setFocus();
        		return false;
        	}
        //
        // 	if (this.gfnIsNull(this.ccfCD_POSITION.value)) {
        // 		this.gfnAlert("직위를 입력해 주세요!");
        // 		this.ccfCD_POSITION.setFocus();
        // 		return false;
        // 	}
        //
        // 	if (this.gfnIsNull(this.ccfCD_PAYSTEP.value)) {
        // 		this.gfnAlert("직급을 입력해 주세요!");
        // 		this.ccfCD_PAYSTEP.setFocus();
        // 		return false;
        // 	}
        	return true;
        }

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
        		this.fnSetButton();
        	}else if(svcID == "save"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "copy"){
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };
        this.dsList_onvaluechanged = function(obj,e)
        {
        	this.fnSetButton();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staYM_BASE.addEventHandler("onclick",this.divSearch_staYM_BASE_onclick,this);
            this.divSearch.form.staCD_POSITION.addEventHandler("onclick",this.divSearch_staCD_POSITION_onclick,this);
            this.divSearch.form.staCD_PAYSTEP.addEventHandler("onclick",this.divSearch_staCD_CORP_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAA_PROMOTION_TARGET.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
