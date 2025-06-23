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
            this.set_titletext("수주계획관리 - 엑셀");
            if (Form == this.constructor)
            {
                this._setFormPosition(420,170);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DYAPR_SUJU_PLAN_EXCEL_SELECT</Col></Row><Row><Col id=\"SP\">DCBPR_PREORDERPLAN_APPROVE_CANCEL</Col><Col id=\"TARGET\">approve_cancel</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DYAPR_SUJU_PLAN_CREATE</Col></Row><Row><Col id=\"TARGET\">excel</Col><Col id=\"SP\">DYAPR_SUJU_PLAN_EXCEL_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">신규생성</Col><Col id=\"CD_CODE\">I</Col></Row><Row><Col id=\"CD_CODE\">U</Col><Col id=\"DS_CODE\">차수변경</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YR_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSeq", this);
            obj._setContents("<ColumnInfo><Column id=\"SN_SEQ_NEW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("수주계획등록");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0","staTITLE:5","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_BID","0","staCD_SITE:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("계획년도");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SUBCON","0","staNO_BID:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staCD_SITE:-1","staTITLE:5",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staNO_BID:-1","staBg1:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staDS_SUBCON:-1","staBg2:-1",null,"30","0%",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","39.52%","137","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("양식업로드");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","62.62%","137","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("닫기");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","92","40","219","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfSN_SEQ","171","69","200","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DYX_SUJU_PLAN");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","10","127",null,null,"340","23",null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_visible("false");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboGUBUN","91","98","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsGUBUN");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnExcel","16.67%","137","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("양식다운로드");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYR_PLAN","92","69","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ctclYR_PLAN.form.TextBox","value","dsSearch","YR_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ccfSN_SEQ.form.CDTextBox","value","dsSearch","SN_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.cboGUBUN","value","dsSearch","GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DYA_SUJU_PLAN_EXCEL.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        var seq = "";

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

        	// 이전화면에서 데이터 받기.
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP)) {

        		this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        		this.dsSearch.setColumn(0, "YR_PLAN", this.getOwnerFrame().YR_PLAN);
        		this.dsSearch.setColumn(0, "SN_SEQ", this.getOwnerFrame().SN_SEQ);
        		this.dsSearch.setColumn(0, "GUBUN", "I");

        		this.ccfCD_CORP.form.fnCodeFindLoad();

        		//var year1 = this.dsSearch.getColumn(0, "YR_PLAN");
        		//var year2 = this.gfnAddMonth(year1 + "0101" ,12).substr(0,4);
        		//var year3 = this.gfnAddMonth(year1 + "0101" ,24).substr(0,4);

        		//this.fnHeadNmCh(year1,year2,year3);

        		//this.FormBtns.Select.click();
        	}
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

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_CORP = this.divData.form.ccfCD_CORP;
        	this.ccfSN_SEQ = this.divData.form.ccfSN_SEQ;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfSN_SEQ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DY", "DYA_SUJU_PLAN_EXCEL");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP"      , "string");	//법인코드
        	this.dsSelect.addColumn("YR_PLAN"      , "string");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("GUBUN", "string");
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("YR_PLAN", "string");
        	this.dsCreate.addColumn("SN_SEQ", "string");

        	this.dsExcelUp = new Dataset();
        	this.dsExcelUp.addColumn("CD_CORP", "string");
        	this.dsExcelUp.addColumn("YR_PLAN", "string");
        	this.dsExcelUp.addColumn("CD_PROJ", "string");
        	this.dsExcelUp.addColumn("DS_PROJ", "string");
        	this.dsExcelUp.addColumn("SN_SEQ", "string");
        	this.dsExcelUp.addColumn("AM_MONTH01_01", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH01_02", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH01_03", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH01_04", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH01_05", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH01_06", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH01_07", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH01_08", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH01_09", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH01_10", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH01_11", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH01_12", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH02_01", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH02_02", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH02_03", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH02_04", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH02_05", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH02_06", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH02_07", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH02_08", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH02_09", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH02_10", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH02_11", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH02_12", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH03_01", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH03_02", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH03_03", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH03_04", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH03_05", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH03_06", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH03_07", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH03_08", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH03_09", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH03_10", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH03_11", "bigdecimal");
        	this.dsExcelUp.addColumn("AM_MONTH03_12", "bigdecimal");
            this.dsExcelUp.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	양식 조회
          */
        this.fnSelect = function() {

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));	//법인코드
        	this.dsSelect.setColumn(0, "YR_PLAN", this.dsSearch.getColumn(0, "YR_PLAN"));


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

        		this.fnExcel();
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "excel") {
        		if (errorCode == 0) {
        			var objParentForm = this.parent.parent.opener.divWork.form;
        	        objParentForm.fnAfterUpExcel();
        	        this.getParentContext().close(true);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if (id == "ccfSN_SEQ") {
        		var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YR_PLAN"		, this.dsSearch.getColumn(0, "YR_PLAN"));

        	}

        	return true;

        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

          // 라디오 버튼 설정
         this.fnSetRadio = function()
         {


         }



        this.fnHeadNmCh = function(yr1,yr2,yr3)
        {
        	// 해당 헤더컬럼 인덱스 구하기
        	var idx0 = "";
        	var idx1 = "";
        	var idx2 = "";

        	// 해당 컬럼의 인덱스값을 구함
        	for(var i=0; i < this.dxGrid.getCellCount("head"); i++) {
        		if(this.dxGrid.getCellText(-1,i) == "01"){
        			idx0 = i;
        		}else if(this.dxGrid.getCellText(-1,i) == "02"){
        			idx1 = i;
        		}else if(this.dxGrid.getCellText(-1,i) == "03"){
        			idx2 = i;
        		}
        	}

        	this.dxGrid.setCellProperty("head", idx0, "text", yr1+"년");
        	this.dxGrid.setCellProperty("head", idx1, "text", yr2+"년");
        	this.dxGrid.setCellProperty("head", idx2, "text", yr3+"년");


        }

        this.fnHeadNmSet = function()
        {
        	// 해당 헤더컬럼 인덱스 구하기
        	var idx0 = "5";
        	var idx1 = "6";
        	var idx2 = "7";


        	this.dxGrid.setCellProperty("head", idx0, "text", "01");
        	this.dxGrid.setCellProperty("head", idx1, "text", "02");
        	this.dxGrid.setCellProperty("head", idx2, "text", "03");
        }

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        this.divData_btnExcel_onclick = function(obj,e)
        {
        	this.fnHeadNmSet();
        	var year1 = this.dsSearch.getColumn(0, "YR_PLAN");
        	var year2 = this.gfnAddMonth(year1 + "0101" ,12).substr(0,4);
        	var year3 = this.gfnAddMonth(year1 + "0101" ,24).substr(0,4);

        	this.fnHeadNmCh(year1,year2,year3);

        	this.FormBtns.Select.click();
        };

        this.fnExcel = function()
        {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.divData_btnOk_onclick = function(obj,e)
        {
        	this.gfnExcelImport("dsList","","A3","fnExcelImportCallback","import",this);
        };

        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {

            if (dsOut.rowcount == 0)  {
        		this.gfnAlert("엑셀파일에 내용이 없습니다.");
        		return false;
        	}

        	for (var i=0; i< this.dsList.getColCount(); i++)
        	{
        		sColumnId = "Column"+i;
        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}

        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	this.dsList.copyData(dsOut);

        	this.fnSaveCreate();

        };

        /*
         *	자동채번
         */
        this.fnSaveCreate = function() {

            this.dsCreate.clearData();

        	var nrow = this.dsCreate.addRow();
        	this.dsCreate.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsCreate.setColumn(nrow, "YR_PLAN", this.dsSearch.getColumn(0, "YR_PLAN"));
        	this.dsCreate.setColumn(nrow, "SN_SEQ", this.dsSearch.getColumn(0, "SN_SEQ"));
        	this.dsCreate.setColumn(nrow, "GUBUN", this.dsSearch.getColumn(0, "GUBUN"));

        	if (this.dsCreate.rowcount == 0) return;

        	var strSvcId    = "create";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "create=dsCreate";
        	var outData     = "dsSeq=create0";
        	var strArg      = "";
        	var callBackFnc = "fnSaveExcel";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]


        }

        /*
         *	엑셀 저장.
         */
        this.fnSaveExcel = function() {

        	this.dsExcelUp.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var nrow = this.dsExcelUp.addRow();
        		this.dsExcelUp.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        		this.dsExcelUp.setColumn(nrow, "YR_PLAN", this.dsList.getColumn(i, "YR_PLAN"));
        		this.dsExcelUp.setColumn(nrow, "CD_PROJ", this.dsList.getColumn(i, "CD_PROJ"));
        		this.dsExcelUp.setColumn(nrow, "DS_PROJ", this.dsList.getColumn(i, "DS_PROJ"));
        		this.dsExcelUp.setColumn(nrow, "SN_SEQ", this.dsSeq.getColumn(0, "SN_SEQ_NEW"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH01_01", this.dsList.getColumn(i, "AM_MONTH01_01"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH01_02", this.dsList.getColumn(i, "AM_MONTH01_02"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH01_03", this.dsList.getColumn(i, "AM_MONTH01_03"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH01_04", this.dsList.getColumn(i, "AM_MONTH01_04"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH01_05", this.dsList.getColumn(i, "AM_MONTH01_05"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH01_06", this.dsList.getColumn(i, "AM_MONTH01_06"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH01_07", this.dsList.getColumn(i, "AM_MONTH01_07"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH01_08", this.dsList.getColumn(i, "AM_MONTH01_08"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH01_09", this.dsList.getColumn(i, "AM_MONTH01_09"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH01_10", this.dsList.getColumn(i, "AM_MONTH01_10"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH01_11", this.dsList.getColumn(i, "AM_MONTH01_11"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH01_12", this.dsList.getColumn(i, "AM_MONTH01_12"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH02_01", this.dsList.getColumn(i, "AM_MONTH02_01"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH02_02", this.dsList.getColumn(i, "AM_MONTH02_02"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH02_03", this.dsList.getColumn(i, "AM_MONTH02_03"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH02_04", this.dsList.getColumn(i, "AM_MONTH02_04"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH02_05", this.dsList.getColumn(i, "AM_MONTH02_05"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH02_06", this.dsList.getColumn(i, "AM_MONTH02_06"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH02_07", this.dsList.getColumn(i, "AM_MONTH02_07"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH02_08", this.dsList.getColumn(i, "AM_MONTH02_08"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH02_09", this.dsList.getColumn(i, "AM_MONTH02_09"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH02_10", this.dsList.getColumn(i, "AM_MONTH02_10"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH02_11", this.dsList.getColumn(i, "AM_MONTH02_11"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH02_12", this.dsList.getColumn(i, "AM_MONTH02_12"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH03_01", this.dsList.getColumn(i, "AM_MONTH03_01"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH03_02", this.dsList.getColumn(i, "AM_MONTH03_02"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH03_03", this.dsList.getColumn(i, "AM_MONTH03_03"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH03_04", this.dsList.getColumn(i, "AM_MONTH03_04"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH03_05", this.dsList.getColumn(i, "AM_MONTH03_05"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH03_06", this.dsList.getColumn(i, "AM_MONTH03_06"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH03_07", this.dsList.getColumn(i, "AM_MONTH03_07"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH03_08", this.dsList.getColumn(i, "AM_MONTH03_08"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH03_09", this.dsList.getColumn(i, "AM_MONTH03_09"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH03_10", this.dsList.getColumn(i, "AM_MONTH03_10"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH03_11", this.dsList.getColumn(i, "AM_MONTH03_11"));
        		this.dsExcelUp.setColumn(nrow, "AM_MONTH03_12", this.dsList.getColumn(i, "AM_MONTH03_12"));
        		this.dsExcelUp.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	if (this.dsExcelUp.rowcount == 0) return;

        	var strSvcId    = "excel";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "excel=dsExcelUp";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divData.form.btnExcel.addEventHandler("onclick",this.divData_btnExcel_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSeq.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("DYA_SUJU_PLAN_EXCEL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
