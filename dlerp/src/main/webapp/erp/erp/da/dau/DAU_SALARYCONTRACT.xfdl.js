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
            this.set_titletext("연봉계약서_LIST");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("false");
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"INT\" size=\"256\"/><Column id=\"YY_BASE\" type=\"INT\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_EMPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_OCCUPATION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OCCUPATION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_UPDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_UPDATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAUPR_SALARYCONTRACT_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAUPR_SALARYCONTRACT_SAVE</Col></Row><Row><Col id=\"TARGET\">reportAnnualsalary</Col><Col id=\"SP\">DAUPR_ANNUALINCOME_CBC_PRINT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAnnualsalaryList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"100000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","10","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("1");
            obj.set_text("법인코드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0","10","200","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("FitToContents").set("true");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DZX_CFCORP_STD");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_WORK","ccfCD_CORP:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회기간");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_START","staDT_WORK:0","10","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCdCorp01","ctclDT_START:0","10","20","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_END","staCdCorp01:0","10","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ctclDT_END:0","10","66","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0","10","200","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("FitToContents").set("true");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_autofittype("none");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_START","value","dsSearch","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_END","value","dsSearch","DT_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAU_SALARYCONTRACT.xfdl", function() {

        this.objApp = this.gfnGetApplication();
        this.fileConfig = {};

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetButton();			//버튼 공통 설정
        	this.fnSetExtendButton();	//화면별 버튼 id 설정
        	this.fnSetVariable();		//변수선언
        	this.fnSetEvent();			//이벤트 설정
        	this.fnSetParameter();		//파라미터 설정

        	this.fileConfig = this.gfnGetFileConfig();


        	// 법인직인
        	this.dsReportParam.clearData();
        	this.dsReportParam.addRow();

        	this.dsImageFile.clearData();
        	this.dsImageFile.addRow();

        	this.dsImageFile.setColumn(0, "filepath", "/DA/CORP/" + this.dsSearch.getColumn(0, "CD_CORP") );
        	this.dsImageFile.setColumn(0, "filename", "STAMP_IMG.png");

        	// 서버 이미지파일 base64 로 받아오기
        	var strSvcId    = "selectIMG";
        	var strSvcType  = "file/imageFile";
        	var inProc      = "";
        	var inData      = "input=dsImageFile";
        	var outData     = "dsImageFile=input";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,   	// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,  		// Procedure 정보 Dataset 이름
        						inData,  		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg,  		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,
        						false); 		// 통신방법 정의 [생략가능]


        	if (this.FormInfo.TY_AUTH != "F") {
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "DS_SPECIAL"), "size", 0);
        		this.dxGrid.setFormatColProperty(this.dxGrid.getBindCellIndex("body", "DS_REMARK"), "size", 0);
        	}
        	//this.fnSelect();
        	//this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        	this.btnCreate = this.gfnFormButtonAdd("BTN_CREATE", "fnCreate"); 			// 연봉계약서 대상자 생성
        	this.btnPrint  = this.gfnFormButtonAdd("BTN_PRINT" , "fnPintAnnualsalary");	// 연봉계약서출력
        };
        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	/**********  검색조건  **********/
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;			//소속법인
        	this.ctclDT_START =  this.divSearch.form.ctclDT_START;		//조회기간_시작일자
        	this.ctclDT_END = this.divSearch.form.ctclDT_END;			//조회기간_종료일자
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;			//사번

        	/**********  그리드  **********/
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	/******** 초기셋팅 ****************/
        	this.dsSearch.setColumn(0,"CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0,"DS_CORP", this.AuthClient.DS_CORP);
        	this.dsSearch.setColumn(0,"DT_START", this.gfnGetDate().substr(0,4) + "0101");
        	this.dsSearch.setColumn(0,"DT_END", this.gfnGetLastDate(this.gfnAddMonth(this.gfnGetDate("date"), 1)));
        // 	this.dsSearch.setColumn(0,"ID_SABUN", this.AuthClient.ID_SABUN);
        // 	this.dsSearch.setColumn(0,"DS_HNAME", this.AuthClient.DS_HNAME);

        	if(this.FormInfo.GR_SEARCH == "9"){
        		// 성명
        		this.dsSearch.setColumn(0,"ID_SABUN", this.AuthClient.ID_SABUN);
        		this.dsSearch.setColumn(0,"DS_HNAME", this.AuthClient.DS_HNAME);
        		var preyear = this.gfnGetDate().substring(0,4) - 1; //전년도
        		this.dsSearch.setColumn(0,"DT_START", this.UserInfo.DT_JOIN);	// preyear + "0101");
        		this.dsSearch.setColumn(0,"DT_END", this.gfnGetDate());	//this.gfnGetDate().substr(0,4) + "1231");
        	}

        	/******* Before 이벤트 **********/
        	//사번_조회조건
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAU_SALARYCONTRACT_LIST");
        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";

        	// 셀 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	// 셀 변경 후 이벤트
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	//그리드 초기화 위한 구분자
        	this.searchReset = true;
        };

        // 셀 값 변경 후 이벤트
        this.fnGrid_AfterEdit = function(obj,e) {
        	//trace("fnGrid_AfterEdit >>>>>>"+e.columnid);
        }

        this.fnGridCellPosChanged = function(obj, e) {

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	//조회조건 Dataset
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_START", "string");
        	this.dsSelect.addColumn("DT_END", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("YY_BASE", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("DT_BASE", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("DS_SPECIAL", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");

        	// 연봉계약서 출력
        	this.dsSelectRpt = new Dataset();
        	this.dsSelectRpt.addColumn("ID_FORM", "string");
        	this.dsSelectRpt.addColumn("CD_CORP", "string");
        	this.dsSelectRpt.addColumn("DS_VALUES", "string");
        	this.dsSelectRpt.addColumn("ID_USER", "string");
        	this.dsSelectRpt.addColumn("GR_SEARCH", "string");
        	this.dsSelectRpt.addColumn("GR_CORP", "string");

        	this.dsReportParam = new Dataset();
        	this.dsReportParam.addColumn("IMG", "STRING");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;
        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsList.clearData();
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "DT_START", this.dsSearch.getColumn(0, "DT_START"));
        	this.dsSelect.setColumn(0, "DT_END", this.dsSearch.getColumn(0, "DT_END"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "select";
        	var strSvcType  = "select";
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
        				this.dsSave.setColumn(nrow, "YY_BASE", this.dsList.getColumn(i, "YY_BASE"));
        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsSave.setColumn(nrow, "DT_BASE", this.dsList.getColumn(i, "DT_BASE"));
        				this.dsSave.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "DS_SPECIAL", this.dsList.getColumn(i, "DS_SPECIAL"));
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
         *	입력 버튼
         */
        this.fnAdd = function() {
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
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
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		this.gfnAlert("법인코드를 입력하세요.");
        		return false;
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_START"))) {
        		this.ctclDT_START.setFocus();
        		this.gfnAlert("시작일자를 입력하세요.");
        		return false;
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_END"))) {
        		this.ctclDT_END.setFocus();
        		this.gfnAlert("종료일자를 입력하세요.");
        		return false;
        	}
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
        	if( svcID == "select" ){
        	}else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.fnSaveAfter = function(){
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert(errorMsg, "fnSaveAfter");
        		}
        	} else if( svcID == "reportAnnualsalary"){
        		console.log('dsAnnualsalaryList', this.dsAnnualsalaryList.rowcount);
        		if(this.dsAnnualsalaryList.rowcount < 1) return;
        		var inProc		= "_dsProc";
        		var inParam 	= "params=dsAnnualsalaryList param1=dsReportParam";
        		var inData      = "reportAnnualsalary=dsSelectRpt";
        		//var reportpath  = "/da/dau/DAU_ANNUALSALARY_CBC.ozr";
        		var reportpath  = "/da/dau/DAU_SALARYCONTRACT.ozr";

        		gfnOpenReport(this, reportpath, inProc, inParam, inData);


        		/*
        		var inProc		= "_dsProc"; 								//이건 없으면 에러나서 그냥둠
        		var inParam 	= "params=dsAgreementList";						// 조회SP이외 사용할 정보
        		var inData      = "";//"selectReportList=dsSelect"; 		// target=파라미터 Ds
        		var reportpath  = "/da/daa/DAA_AGREEMENT.ozr";

        		gfnOpenReport(this, reportpath, inProc, inParam, inData);
        		*/
        	}else if (svcID == "selectIMG") {
        		this.dsReportParam.setColumn(0, "IMG", this.dsImageFile.getColumn(0, "filereturn"));
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         /**************** 조회조건 *****************/
         //변경 전 이벤트
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        //부서코드
        	if (id == "ccfCD_DEPT") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "DT_YEAR", this.dsSearch.getColumn(0, "DT_END").substr(0, 4));
        	}
        	else if( id == "ccfID_SABUN") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0,"CD_CORP"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.FormInfo.GR_SEARCH==1? "":this.gfnNvl(this.AuthClient.CD_DEPT,""));
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	}
        	return true;
        }
        //변경 후 이벤트
        this.codefind_AfterCDTextChanged = function(id,codeFindData) {

           	if( id == "ccfID_SABUN" ) {
        		//ID_PERSON 값 바인딩
        		var arr = codeFindData;
        		if(arr.length > 0) {
        			this.dsSearch.setColumn(0,"ID_SABUN",arr[0]["ID_SABUN"]);
        			this.dsSearch.setColumn(0,"DS_HNAME",arr[0]["DS_HNAME"]);
        		}else{
        			this.dsSearch.setColumn(0,"ID_SABUN","");
        			this.dsSearch.setColumn(0,"DS_HNAME","");
        		}
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 연봉계약서 대상자 생성
        this.fnCreate = function(obj, e) {
        	var param = {};
        	param.CD_CORP   = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP   = this.dsSearch.getColumn(0, "DS_CORP");
        	param.DT_BASE 	= this.dsSearch.getColumn(0, "DT_START");
        	//param.ID_SABUN  = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        	//param.DS_HNAME  = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAU_INITSALARYCONTRACT_DLG", "fnFormButton_callback", param);
        }

        // 연봉계약서 출력
        this.fnPintAnnualsalary = function(obj,e) {
        	this.dsSelectRpt.clearData();
        	var nrow = this.dsSelectRpt.addRow();

        	var arrDS_VALUES = [];

        // 	for(var i = 0; i < this.dsList.rowcount; i++) {
        // 		if(this.dsList.getColumn(i, "CHK") == 1) {
        // 			arrDS_VALUES.push(this.dsList.getColumn(i, "DT_BASE") + ":" + this.dsList.getColumn(i, "ID_SABUN"));
        // 		}
        // 	}

        	this.dsSelectRpt.setColumn(0, "ID_FORM", "DAA_BASEINFO");	// "DAA_BASEINFO"	"DAU_SALARYCONTRACT"
        	this.dsSelectRpt.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	//this.dsSelectRpt.setColumn(0, "DS_VALUES", arrDS_VALUES.join(','));
        	// 권한설정
        	if (this.FormInfo.GR_SEARCH == "1") {
        		this.dsSelectRpt.setColumn(0, "DS_VALUES", this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"));
        	} else {
        		this.dsSelectRpt.setColumn(0, "DS_VALUES", this.dsSearch.getColumn(0, "ID_SABUN"));
        	}
        	//this.dsSelectRpt.setColumn(0, "DS_VALUES", this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"));

        	//this.dsSelectRpt.setColumn(0, "DS_VALUES", this.dsList.getColumn(this.dsList.rowposition, "DT_BASE") + ':' + this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"));
        	//this.dsSelectRpt.setColumn(0, "DT_BASE", this.dsList.getColumn(this.dsList.rowposition, "DT_BASE"));
        	this.dsSelectRpt.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSelectRpt.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelectRpt.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);

        	var strSvcId    = "reportAnnualsalary";
        	var strSvcType  = "select"; 					//url(select / grid / save)
        	var inProc		= "_dsProc";
        	var inData      = "reportAnnualsalary=dsSelectRpt"; 		//target=파라미터 Ds
        	var outData     = "dsAnnualsalaryList=reportAnnualsalary0"; 	//return Ds=target순번
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnFormButton_callback = function(svcID, val) {
        	if(val != false) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.FormBtns.Select.click();
        	}
        }

        //조회조건 변경 시 이벤트 발생
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if( this.searchReset == true ){
        		if(e.oldvalue != e.newvalue){
        			this.gfnSetFormStatus(this);
        			this.gfnGridClear(this.dxGrid);
        		}
        	}
        };

        //첨부파일 팝업
        this.fnGrid_ExpandUp = function(obj, e){
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if(colnm == "DS_FILE_NAME") {
        		// 최초 작성시엔 NO_SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        		// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!
        // 		if(this.gfnGetFlag(dataset, e.row) == "I"){
        // 			this.gfnAlert("저장 후 파일첨부 진행.");
        // 			return false;
        // 		}

        		var fileManager = {};
        		fileManager.CD_GUBUN = "DAU1";
        		fileManager.CD_DIR = [this.dsList.getColumn(e.row, "ID_PERSON"), this.dsList.getColumn(e.row, "DT_BASE"), this.dsList.getColumn(e.row, "CD_DEPT")];

        		fileManager.IS_READONLY = false;
        		// 권한설정
        		if (this.FormInfo.GR_SEARCH == "1") {
        			fileManager.IS_DELETE = true;
        		} else {
        			fileManager.IS_DELETE = false;
        		}
        		this.gfnFileManager(fileManager, "fnFileCallback");
        	}
        }

        //첨부파일 콜백
        this.fnFileCallback = function(strID, val) {
        	//파일첨부 갯수
        	this.fileCnt = val.Cnt;
        // 	//셋팅 갯수 조절
        // 	this.dsList.setColumn(0, "FILE_CNT", this.fileCnt);

        	// 파일개수를 다시 셋팅
        	this.dsList.set_enableevent(false);
        	if(val.Cnt == 0) {
        		this.dsList.setColumn(this.dsList.rowposition, "DS_FILE_NAME", " 첨부");
        	} else {
        		this.dsList.setColumn(this.dsList.rowposition, "DS_FILE_NAME", " 첨부(" + val.Cnt + ")");
        	}
        	this.dsList.set_enableevent(true);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclDT_START.addEventHandler("onchanged",this.divSearch_ctclDT_START_onchanged,this);
            this.divSearch.form.ctclDT_END.addEventHandler("onchanged",this.divSearch_ctclDT_END_onchanged,this);
            this.divData.form.objGrid.addEventHandler("oncellposchanged",this.fnGridCellPosChanged,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAU_SALARYCONTRACT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
