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
            this.set_titletext("분담금액 산출");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAUPR_CORPANTE_BASE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YY_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YY_BASE\"/><Col id=\"TY_GUBUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYY_BASE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("대상년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_BASE","staYY_BASE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.getSetter("onchanged").set("fnSearchInit");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","ctclYY_BASE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","staTY_GUBUN:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divSearch_form_rdoTY_GUBUN_innerdataset = new nexacro.NormalDataset("divSearch_form_rdoTY_GUBUN_innerdataset", obj);
            divSearch_form_rdoTY_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">예상분담금</Col></Row><Row><Col id=\"codecolumn\">D</Col><Col id=\"datacolumn\">확정분담금</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_rdoTY_GUBUN_innerdataset);
            obj.set_text("상반기");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","rdoTY_GUBUN:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
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
            obj = new BindItem("item0","divSearch.form.ctclYY_BASE","text","dsSearch","YY_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.rdoTY_GUBUN","value","dsSearch","TY_GUBUN");
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
        this.registerScript("DAU_CORPANTE_BASE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	/*this.fnSetExtendButton();*/
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	//기준년도
        	this.ctclYY_BASE.form.TextBox.set_value(this.gfnGetDate().substr(0,4));

        	this.rdoTY_GUBUN.set_index(0);

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	var frame = this.getOwnerFrame();
        	if(!this.gfnIsNull(frame.YY_BASE)){
        		this.ctclYY_BASE.form.TextBox.set_value(frame.YY_BASE);
        		this.rdoTY_GUBUN.set_value(frame.TY_GUBUN);
        		if(!this.gfnIsNull(frame.CD_CORP) && !this.gfnIsNull(frame.DS_CORP)) {
        			this.ccfCD_CORP.form.CDTextBox.set_value(frame.CD_CORP);
        			this.ccfCD_CORP.form.DSTextBox.set_value(frame.DS_CORP);
        		}
        		this.FormBtns.Select.click();
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        // 	this.btnBaseCreate			 		= this.gfnFormButtonAdd("BaseCreate", "fnBaseCreate", "기초생성");
        // 	this.btnDetailDlg			 		= this.gfnFormButtonAdd("DetailDlg", "fnDetailDlg", "상세내역");
        // 	this.btnCorpanteDlg		 		= this.gfnFormButtonAdd("CorpanteDlg", "fnCorpanteDlg", "분담내역");
        // 	this.btnGanTaxSingoClose 		= this.gfnFormButtonAdd("GanTaxSingoClose", "fnExtBtnEvent", "마감");
        // 	this.btnGanTaxSingoCloseCancel 	= this.gfnFormButtonAdd("GanTaxSingoCloseCancel", "fnExtBtnEvent", "마감해제");

        // 	this.btnGanTaxSingoDiskDlg.set_enable(false);
        // 	this.btnGanTaxSingoPrint.set_enable(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//기준년도
        	this.ctclYY_BASE = this.divSearch.form.ctclYY_BASE;

            //구분
        	this.rdoTY_GUBUN = this.divSearch.form.rdoTY_GUBUN;

        	//법인코드
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;

        	this.dxGrid = this.divData.form.objGrid;

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "ccfCD_CORP_AfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAU_CORPANTE_BASE");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	//조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YY_BASE", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");

        };

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

        	this.dsSelect.setColumn(0, "YY_BASE", this.ctclYY_BASE.form.TextBox.value);
        	this.dsSelect.setColumn(0, "TY_GUBUN", 	this.rdoTY_GUBUN.value);
        	this.dsSelect.setColumn(0, "CD_CORP", 	this.ccfCD_CORP.form.CDTextBox.value);

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
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	this.gfnGridAdd(this.dxGrid);
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
        //  그리드 필수항목 체크
        // 	if (!this.gfnGridValidate(this.dxGrid)) return;
        //
        // 	this.dxGrid.updateToDataset();
        //
        // 	this.dsSave.clearData();
        //
        // 	for (var i = 0; i < this.dsList.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsList, i);
        // 		switch(flag) {
        // 			case "I":
        // 			case "U":
        // 			case "D":
        // 				var nrow = this.dsSave.addRow();
        //
        // 				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        // 				this.dsSave.setColumn(nrow, "YY_BASE", this.ctclYY_BASE.form.TextBox.value);
        // 				this.dsSave.setColumn(nrow, "TY_GUBUN", this.rdoTY_GUBUN.value);
        //
        // 				this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        // 				this.dsSave.setColumn(nrow, "AM_SALARY_TOT", this.dsList.getColumn(i, "AM_SALARY_TOT"));
        // 				this.dsSave.setColumn(nrow, "AM_RETIRE_TOT", this.dsList.getColumn(i, "AM_RETIRE_TOT"));
        // 				this.dsSave.setColumn(nrow, "AM_INSURANCE_TOT", this.dsList.getColumn(i, "AM_INSURANCE_TOT"));
        // 				this.dsSave.setColumn(nrow, "NO_INWON_TOT", this.dsList.getColumn(i, "NO_INWON_TOT"));
        // 				this.dsSave.setColumn(nrow, "AM_SALARY", this.dsList.getColumn(i, "AM_SALARY"));
        //
        // 				this.dsSave.setColumn(nrow, "AM_RETIRE", this.dsList.getColumn(i, "AM_RETIRE"));
        // 				this.dsSave.setColumn(nrow, "AM_INSURANCE", this.dsList.getColumn(i, "AM_INSURANCE"));
        // 				this.dsSave.setColumn(nrow, "NO_INWON", this.dsList.getColumn(i, "NO_INWON"));
        // 				this.dsSave.setColumn(nrow, "RT_SALARY", this.dsList.getColumn(i, "RT_SALARY"));
        // 				this.dsSave.setColumn(nrow, "AM_SALES", this.dsList.getColumn(i, "AM_SALES"));
        // 				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        //
        // 				this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        // 				break;
        //
        // 		}
        // 	}
        //
        // 	if (this.dsSave.rowcount == 0) return;
        //
        // 	var strSvcId    = "save";
        // 	var strSvcType  = "save";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "save=dsSave";
        // 	var outData     = "";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
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
        this.fnSelectValidate = function() {

        	var validate = true;

        	if (this.gfnIsNull(this.ctclYY_BASE.form.TextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclYY_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기준년도를 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, args)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        		this.FormBtns.Save.set_enable(false);
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
         	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	this.fnSearchInit();
        };

        //그리드 코드파인드
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/


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
        	if(!this.gfnIsNull(e.columnid)){
        		this.fnSearchInit();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAU_CORPANTE_BASE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
