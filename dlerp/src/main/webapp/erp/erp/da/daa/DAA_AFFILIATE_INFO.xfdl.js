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
            this.set_titletext("계열사 인원현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_AFFILIATE_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAAPR_AFFILIATE_SAVE</Col></Row><Row><Col id=\"TARGET\">check</Col><Col id=\"SP\">DAAPR_POSITION_CHECK</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPosiChkResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_COMPANY","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("계열사명");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_COMPANY","staCD_COMPANY:0.0","10.0","179","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_AFFILIATE","ccfCD_COMPANY:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("기준일자");
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_AFFILIATE","staDT_AFFILIATE:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_POSITION","ctclDT_AFFILIATE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("직위");
            obj.set_rtl("false");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_POSITION","staCD_POSITION:0.0","10.0","179","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
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
            obj = new BindItem("item0","divSearch.form.ctclDT_AFFILIATE","value","dsSearch","DT_WORK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAA_AFFILIATE_INFO.xfdl", function() {
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

        	this.ctclDT_AFFILIATE.set_value(this.gfnGetDate());

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	// 	this.FormBtns.Add.set_enable(false);
        	// 	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Excel.set_enable(true);
        	this.FormBtns.Reset.set_enable(true);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnFormButton = this.gfnFormButtonAdd("ExcelUpload", "fnExcelUpload", "엑셀 업로드");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_COMPANY = this.divSearch.form.ccfCD_COMPANY; 			// 계열사코드
        	this.ctclDT_AFFILIATE = this.divSearch.form.ctclDT_AFFILIATE; 		// 기준일자
        	this.ccfCD_POSITION = this.divSearch.form.ccfCD_POSITION; 			// 직위

        	this.dxGrid = this.divData.form.objGrid;

        	this.grSearch = this.FormInfo.GR_SEARCH;							// 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;							// 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAA_AFFILIATE_INFO");

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	//조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_AFFILIATE", "string");
        	this.dsSelect.addColumn("CD_COMPANT", "string");
        	this.dsSelect.addColumn("CD_POSITION", "string");

        	//저장
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("NO_SEQ", "string");
        	this.dsSave.addColumn("DT_AFFILIATE", "string");
        	this.dsSave.addColumn("CD_COMPANY", "string");
        	this.dsSave.addColumn("DS_HNAME", "string");
        	this.dsSave.addColumn("CD_POSITION", "string");
        	this.dsSave.addColumn("DS_DEPT", "string");
        	this.dsSave.addColumn("DT_BIRTH", "string");
        	this.dsSave.addColumn("CD_EMPTYPE", "string");
        	this.dsSave.addColumn("DS_HEAD_OFFICE", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
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

        	this.dsSelect.setColumn(0, "DT_AFFILIATE", this.ctclDT_AFFILIATE.value);
        	this.dsSelect.setColumn(0, "CD_COMPANT", this.ccfCD_COMPANY.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "CD_POSITION", this.ccfCD_POSITION.form.CDTextBox.value);

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
        						callBackFnc); 	// 통신방법 정의 [생략가능]
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

        				this.dsSave.setColumn(nrow, "TY_GUBUN", flag);
        				this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsSave.setColumn(nrow, "DT_AFFILIATE", this.dsList.getColumn(i, "DT_AFFILIATE"));
        				this.dsSave.setColumn(nrow, "CD_COMPANY", this.dsList.getColumn(i, "CD_COMPANY"));
        				this.dsSave.setColumn(nrow, "DS_HNAME", this.dsList.getColumn(i, "DS_HNAME"));
        				this.dsSave.setColumn(nrow, "CD_POSITION", this.dsList.getColumn(i, "CD_POSITION"));
        				this.dsSave.setColumn(nrow, "DS_DEPT", this.dsList.getColumn(i, "DS_DEPT"));
        				this.dsSave.setColumn(nrow, "DT_BIRTH", this.dsList.getColumn(i, "DT_BIRTH"));
        				this.dsSave.setColumn(nrow, "CD_EMPTYPE", this.dsList.getColumn(i, "CD_EMPTYPE"));
        				this.dsSave.setColumn(nrow, "DS_HEAD_OFFICE", this.dsList.getColumn(i, "DS_HEAD_OFFICE"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));

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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        };
        /*
         *	리셋 버튼
         */
        this.fnReset = function() {
        	this.ccfCD_COMPANY.form.CDTextBox.set_value("");
        	this.ccfCD_COMPANY.form.DSTextBox.set_value("");
        	this.ctclDT_AFFILIATE.set_value("");
        	this.ccfCD_POSITION.form.CDTextBox.set_value("");
        	this.ccfCD_POSITION.form.DSTextBox.set_value("");

        	this.fnSearchInit();
        };
        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

        	return true;
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
        	var objDs = new Dataset();
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnSetButton();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.gfnAlert("저장이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "check"){

        		this.dsList.set_enableevent(false);

        		this.dsList.filter("nx_flag=='I'");

        		for(var i=0;i< this.dsList.rowcount; i++){

        			this.dsList.setColumn(i,"CD_COMPANY", this.dsPosiChkResult.getColumn(i, "CD_COMPANY"));
        			this.dsList.setColumn(i,"DS_COMPANY", this.dsPosiChkResult.getColumn(i, "DS_COMPANY"));
        			this.dsList.setColumn(i,"CD_POSITION", this.dsPosiChkResult.getColumn(i, "CD_POSITION"));
        			this.dsList.setColumn(i,"DS_POSITION", this.dsPosiChkResult.getColumn(i, "DS_POSITION"));

        			//오류가 있으면 입력 제외
        			if(this.dsPosiChkResult.getColumn(i, "DS_MESSAGE") == "A" ){
        				this.dsList.setColumn(i,"DS_MESSAGE", "회사코드 오류");
        			} else if (this.dsPosiChkResult.getColumn(i, "DS_MESSAGE") == "B" ) {
        			    this.dsList.setColumn(i,"DS_MESSAGE", "직위코드 오류");
        			} else if (this.dsPosiChkResult.getColumn(i, "DS_MESSAGE") == "Z" ) {
        			    this.dsList.setColumn(i,"DS_MESSAGE", "회사코드, 직위코드 오류");
        			}
        		}

        		this.dsList.filter("");

        		this.dsList.set_enableevent(true);
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	switch(id) {
        	case "ccfCD_COMPANY": // 계열사코드
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "CO");
         		break;
        	case "ccfCD_POSITION": // 직위
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "ED");
         		break;

         	default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	this.fnSearchInit();
        };
        //그리드 코드 파인드
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	switch(id) {
        		case "ccfCD_COMPANY": // 계열사코드
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "CO");
        			break;
        		case "ccfCD_POSITION": // 직위
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "ED");
        			break;
        		case "ccfCD_EMPTYPE": // 구분
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "EA");
        			break;

        		default:
        	}

        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;

        	switch(id) {
        		case "ccfCD_COMPANY": // 계열사코드
        			break;
        		case "ccfCD_POSITION": // 직위
        			break;
        		case "ccfCD_EMPTYPE": // 구분
        			break;

        		default:
        	}

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

        /*
         *	엑셀업로드
         */
        this.fnExcelUpload = function() {
        	// this.gfnExcelImport("적용할Dataset명","sheet명","데이터시작좌표","콜백함수명","구분ID",현재폼);
        	// sheet명 없으면 첫번째 sheet
        	this.gfnExcelImport("dsList","sheet1","A2","fnExcelImportCallback","import",this);
        };

        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
           // 다중 시트 처리시 양식의 해당 시트여부를 체크하고자 할땐 dsSheet 시트명 체크
        //    if (dsSheet.rowcount > 1) {
        //       trace(dsSheet.getColumn(1, "sheetname"));
        //    }

           // 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
           // 아닌경우는 이부분 주석처리
        //    for (var i=0; i< this.dsList.getColCount(); i++)
        //    {
        //       sColumnId = "Column"+i;
        //       var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        //       if (sColumnNm != "" && sColumnId != sColumnNm)
        //       {
        //          dsOut.updateColID(sColumnId, sColumnNm);
        //       }
        //    }

        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	//this.dsList.copyData(dsOut);

        this.dsList.set_enableevent(false);			//업로드시 코드파인드 사용하려면 주석처리 할것

        	for (var i=0; i<dsOut.rowcount; i++) {
        		var nrow = this.dsList.addRow();
        		this.dsList.setColumn(nrow, this.ucFlag, "I");

        		for (var j=0; j< dsOut.colcount; j++) {
        			if (!this.gfnIsNull(dsOut.getColumn(i,j)) ){
        				dsOut.setColumn(i,j,nexacro.trim(dsOut.getColumn(i,j)));
        				var strColID = dsOut.getColID( j );
        				//날짜 형식 수정
         				if ( strColID == "Column9"){
         					dsOut.setColumn(i,j,dsOut.getColumn(i,j).replace(/[^0-9]/g,''));
         				}
        			}
        		}
        		// 양식이 일치하는 경우 copyRow
        		//this.dsList.copyRow(nrow, dsOut, i);

            // 양식과 일치하지 않는 경우 아래와 같이 컬럼별로 처리.
         	this.dsList.setColumn(nrow, "DT_AFFILIATE", this.gfnGetDate());					//기준일
            this.dsList.setColumn(nrow, "CD_COMPANY", dsOut.getColumn(i, "Column3"));
        	//this.dsList.setColumn(nrow, "DS_COMPANY", dsOut.getColumn(i, "Column4"));
         	this.dsList.setColumn(nrow, "DS_HNAME", dsOut.getColumn(i, "Column5"));
        	this.dsList.setColumn(nrow, "CD_POSITION", dsOut.getColumn(i, "Column6"));
         	//this.dsList.setColumn(nrow, "DS_POSITION", dsOut.getColumn(i, "Column7"));
         	this.dsList.setColumn(nrow, "DS_DEPT", dsOut.getColumn(i, "Column8"));
         	this.dsList.setColumn(nrow, "DT_BIRTH", dsOut.getColumn(i, "Column9"));
        	this.dsList.setColumn(nrow, "CD_EMPTYPE", dsOut.getColumn(i, "Column10"));
         	this.dsList.setColumn(nrow, "DS_EMPTYPE", dsOut.getColumn(i, "Column11"));
         	this.dsList.setColumn(nrow, "DS_HEAD_OFFICE", dsOut.getColumn(i, "Column12"));
         	this.dsList.setColumn(nrow, "DS_REMARK", dsOut.getColumn(i, "Column13"));
           }

        	this.dsList.set_enableevent(true);	//업로드시 코드파인드 사용하려면 주석처리 할것

        	this.gfnSetFormStatus(this, "I");

        	this.fnPositionCheck();//오류 체크
        };

        this.fnPositionCheck = function(){

        	this.dsPositionCheck = new Dataset();
        	this.dsPositionCheck.addColumn("CD_COMPANY","string");
        	this.dsPositionCheck.addColumn("CD_POSITION","string");

        	this.dsPositionCheck.addRow();

        	this.dsList.filter("nx_flag=='I'");		// flag I 가 아닌것은 check 할 필요 없음.(기등록 값과 오류처리된 값)


        	var cd_company = "";
        	var cd_position = "";
        	for(var i=0 ;i < this.dsList.rowcount;i++){

        		cd_company += this.dsList.getColumn(i, "CD_COMPANY");
        		cd_position += this.dsList.getColumn(i, "CD_POSITION");
        		if(i < this.dsList.rowcount-1){
        		    cd_company +=",";
        			cd_position +=",";
        		}
         	}
        	this.dsPositionCheck.setColumn(0, "CD_COMPANY",cd_company);
        	this.dsPositionCheck.setColumn(0, "CD_POSITION",cd_position);

        	var strSvcId    = "check";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "check=dsPositionCheck";
        	var outData     = "dsPosiChkResult=check0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 		// 통신방법 정의 [생략가능]

        	this.dsList.filter("");
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
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsPosiChkResult.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("DAA_AFFILIATE_INFO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
