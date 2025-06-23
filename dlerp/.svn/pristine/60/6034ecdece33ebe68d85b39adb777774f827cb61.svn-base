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
            this.set_titletext("차량운행기록부 등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_CARREPAIR_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHAPR_CARREPAIR_INSERT</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHAPR_CARREPAIR_DELETE</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHAPR_CARREPAIR_UPDATE</Col></Row><Row><Col id=\"SP\">DHAPR_CARUSE_KMAFTER_SELECT</Col><Col id=\"TARGET\">selectCar</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CAR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_CAR\"/><Col id=\"DT_FROM\"/><Col id=\"DT_TO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCar", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CAR","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("차량코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CAR","staCD_CAR:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FROM","ccfCD_CAR:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("수리기간");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_TO","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_TO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
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
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CAR.form.CDTextBox","value","dsSearch","CD_CAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_CARREPAIR.xfdl", function() {
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

        	this.fnSetDefaultVal();

        	//적용년도 셋팅
        	//this.gdt_from = this.gfnGetDate().substring(0,4).toString().concat("01").concat("01");
        	//this.gdt_to = this.gfnGetDate();

        	//this.divSearch.form.ctclDT_FROM.set_value(this.gdt_from);
        	//this.divSearch.form.ctclDT_TO.set_value(this.gdt_to);

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	// this.FormBtns.Add.set_enable(false);
        	// this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btn1 = this.gfnFormButtonAdd("Detail", "fnDetail1");
        	//	this.btn1 = this.gfnFormButtonAdd("FormButton1", "fnFormButton","전표발행");
        	this.btn5 = this.gfnFormButtonAdd("FormButton5", "fnFormButton","전자결재");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_CAR = this.divSearch.form.ccfCD_CAR;
        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DZX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	this.ccfCD_CAR.CodeFindName = "DHX_CAR";
        	this.ccfCD_CAR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CAR.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DG", "DHA_CARREPAIR");

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_CAR", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");

        	this.dsInsert = new Dataset();
        		this.dsUpdate.addColumn("SEQ", "int");
        	this.dsInsert.addColumn("CD_CORP", "string");
        	this.dsInsert.addColumn("CD_CAR", "string");
        	this.dsInsert.addColumn("DT_REPAIR", "string");
        	this.dsInsert.addColumn("DS_HNAME", "string");
        	this.dsInsert.addColumn("CD_DEPT", "string");
        	this.dsInsert.addColumn("KM_BEFORE", "int");
        	this.dsInsert.addColumn("KM_AFTER", "int");
        	this.dsInsert.addColumn("KM_DRIVE", "int");
        	this.dsInsert.addColumn("KM_WORKING", "int");
        	this.dsInsert.addColumn("KM_BUSINESS", "int");
        	this.dsInsert.addColumn("DS_DRIVE", "string");
        	this.dsInsert.addColumn("REPAIR_COMPANY", "string");
        	this.dsInsert.addColumn("DS_REPAIR", "string");
        	this.dsInsert.addColumn("DS_REPAIRAMT", "string");
        	this.dsInsert.addColumn("ID_INSERT", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("SEQ", "int");
        	this.dsUpdate.addColumn("CD_CORP", "string");
        	this.dsUpdate.addColumn("CD_CAR", "string");
        	this.dsUpdate.addColumn("DT_REPAIR", "string");
        	this.dsUpdate.addColumn("DS_HNAME", "string");
        	this.dsUpdate.addColumn("CD_DEPT", "string");
        	this.dsUpdate.addColumn("KM_BEFORE", "int");
        	this.dsUpdate.addColumn("KM_AFTER", "int");
        	this.dsUpdate.addColumn("KM_DRIVE", "int");
        	this.dsUpdate.addColumn("KM_WORKING", "int");
        	this.dsUpdate.addColumn("KM_BUSINESS", "int");
        	this.dsUpdate.addColumn("DS_DRIVE", "string");
        	this.dsUpdate.addColumn("REPAIR_COMPANY", "string");
        	this.dsUpdate.addColumn("DS_REPAIR", "string");
        	this.dsUpdate.addColumn("DS_REPAIRAMT", "string");
        	this.dsUpdate.addColumn("ID_UPDATE", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("SEQ", "int");


        }
        this.fnSetDefaultVal = function() {

        	//날짜 from ~ to 셋팅 ( 매월1일 ~ 매월 말일 )
        	var today = this.gfnGetDate().substring(0,6);
        	var endDay = this.gfnGetLastDate(today);
        	this.divSearch.form.ctclDT_FROM.set_value(today+"01");
        	this.divSearch.form.ctclDT_TO.set_value(endDay);


        }
        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	var cd_corp = this.dsSearch.getColumn(0, "CD_CORP"); //this.divSearch.form.ccfCD_CORP.value;
        	var cd_car = this.dsSearch.getColumn(0, "CD_CAR"); //this.divSearch.form.ccfCD_CAR.value;
        	var dt_from = this.dsSearch.getColumn(0, "DT_FROM"); //this.divSearch.form.ctclDT_FROM.value;
        	var dt_to = this.dsSearch.getColumn(0, "DT_TO"); //this.divSearch.form.ctclDT_TO.value;

        // 	if(this.gfnIsNull(dt_from)) dt_from = this.gdt_from;
        // 	if(this.gfnIsNull(dt_to)) dt_to = this.gdt_to;


        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", cd_corp);
        	this.dsSelect.setColumn(0, "CD_CAR", cd_car);
        	this.dsSelect.setColumn(0, "DT_FROM", dt_from);
        	this.dsSelect.setColumn(0, "DT_TO", dt_to);


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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);

        	//법인 차량 운행일

        	//조회값 설정
        	//법인
        	this.dsList.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsList.setColumn(nrow, "DS_CORP", this.ccfCD_CORP.form.DSTextBox.value);

        	//차량
        	this.dsList.setColumn(nrow, "CD_CAR", this.ccfCD_CAR.form.CDTextBox.value);
        	this.dsList.setColumn(nrow, "NO_CAR", this.ccfCD_CAR.form.DSTextBox.value);

        	//운행일
        	this.dsList.setColumn(nrow, "DT_REPAIR", this.gfnGetDate());
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

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "SEQ", this.dsList.getColumn(i, "SEQ"));
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsInsert.setColumn(nrow, "CD_CAR", this.dsList.getColumn(i, "CD_CAR"));
        				this.dsInsert.setColumn(nrow, "DT_REPAIR", this.dsList.getColumn(i, "DT_REPAIR"));
        				this.dsInsert.setColumn(nrow, "DS_HNAME", this.dsList.getColumn(i, "DS_HNAME"));
        				this.dsInsert.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsInsert.setColumn(nrow, "KM_BEFORE", this.dsList.getColumn(i, "KM_BEFORE"));
        				this.dsInsert.setColumn(nrow, "KM_AFTER", this.dsList.getColumn(i, "KM_AFTER"));
        				this.dsInsert.setColumn(nrow, "KM_DRIVE", this.dsList.getColumn(i, "KM_DRIVE"));
        				this.dsInsert.setColumn(nrow, "KM_WORKING", this.dsList.getColumn(i, "KM_WORKING"));
        				this.dsInsert.setColumn(nrow, "KM_BUSINESS", this.dsList.getColumn(i, "KM_BUSINESS"));
        				this.dsInsert.setColumn(nrow,"REPAIR_COMPANY", this.dsList.getColumn(i, "REPAIR_COMPANY"));
        				this.dsInsert.setColumn(nrow,"DS_REPAIR", this.dsList.getColumn(i, "DS_REPAIR"));
        				this.dsInsert.setColumn(nrow,"DS_REPAIRAMT", this.dsList.getColumn(i, "DS_REPAIRAMT"));
        				this.dsInsert.setColumn(nrow, "DS_DRIVE", this.dsList.getColumn(i, "DS_DRIVE"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();

        				this.dsUpdate.setColumn(nrow, "SEQ", this.dsList.getColumn(i, "SEQ"));
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "CD_CAR", this.dsList.getColumn(i, "CD_CAR"));
        				this.dsUpdate.setColumn(nrow, "DT_REPAIR", this.dsList.getColumn(i, "DT_REPAIR"));
        				this.dsUpdate.setColumn(nrow, "DS_HNAME", this.dsList.getColumn(i, "DS_HNAME"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsUpdate.setColumn(nrow, "KM_BEFORE", this.dsList.getColumn(i, "KM_BEFORE"));
        				this.dsUpdate.setColumn(nrow, "KM_AFTER", this.dsList.getColumn(i, "KM_AFTER"));
        				this.dsUpdate.setColumn(nrow, "KM_DRIVE", this.dsList.getColumn(i, "KM_DRIVE"));
        				this.dsUpdate.setColumn(nrow, "KM_WORKING", this.dsList.getColumn(i, "KM_WORKING"));
        				this.dsUpdate.setColumn(nrow, "KM_BUSINESS", this.dsList.getColumn(i, "KM_BUSINESS"));
        				this.dsUpdate.setColumn(nrow,"REPAIR_COMPANY", this.dsList.getColumn(i, "REPAIR_COMPANY"));
        				this.dsUpdate.setColumn(nrow,"DS_REPAIR", this.dsList.getColumn(i, "DS_REPAIR"));
        				this.dsUpdate.setColumn(nrow,"DS_REPAIRAMT", this.dsList.getColumn(i, "DS_REPAIRAMT"));
        				this.dsUpdate.setColumn(nrow, "DS_DRIVE", this.dsList.getColumn(i, "DS_DRIVE"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);


        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();

        				this.dsDelete.setColumn(nrow, "SEQ", this.dsList.getColumn(i, "SEQ"));

        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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
        this.fnReset = function(){
        	this.ccfCD_CORP.form.CDTextBox.set_value("");
        	this.ccfCD_CORP.form.DSTextBox.set_value("");
        	this.ccfCD_CAR.form.CDTextBox.set_value("");
        	this.ccfCD_CAR.form.DSTextBox.set_value("");
        	this.ctclDT_FROM.set_value("");
        	this.ctclDT_TO.set_value("");
        };

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {
        // 	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("법인코드를 입력하세요.");
        // 		return false;
        // 	}
        //
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
        		this.gfnGridAfterSelect(this.dxGrid);

        		if(this.FormInfo.GR_SEARCH == 1){
        			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","KM_BEFORE"),"edittype","text");
        		}else{
        			this.dxGrid.setCellProperty("body",this.dxGrid.getBindCellIndex("body","KM_BEFORE"),"edittype","none");
        		}
        		this.fnSetButton();
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.codefind_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if (id == "ccfCD_CORP") {
        		this.ccfCD_CAR.form.CDTextBox.set_value("");
        		this.ccfCD_CAR.form.DSTextBox.set_value("");
        	}else if(id == "ccfCD_CAR"){
        		this.ccfCD_CORP.form.CDTextBox.set_value(arr[0]["CD_CORP"]);
        		this.ccfCD_CORP.form.DSTextBox.set_value(arr[0]["DS_CORP"]);
        	}

        	this.fnSearchInit();
        };

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
         	if (id == "ccfCD_CAR") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.text);
        	}

        	return true;
        }
         /************************************************************************
         * 전표 이벤트
         ************************************************************************/
        this.fnFormButton = function(obj,e) {

        	//if(!this.gfnGridIsRow(this.dxGrid)) return;

        	if( obj.id == "btnExt_FormButton1"){

        		this.dsList.filter("CHK == 1");
        		var nCnt = this.dsList.rowcount;

        		if( nCnt == 0) {
        			this.gfnAlert("전표발행할 행을 체크하세요.", "");
        			this.dsList.filter("");
        			return;
        		}

        		this.dsList.filter("");

        		//if(!this.fnCheckFlag(this.dxGrid)) return;
        		this.gfnConfirm("선택한 데이터의 전표발행 작업을 하시겠습니까?", "fnSlipIssue");
        	}

        	if( obj.id == "btnExt_FormButton2"){

        		this.dsList.filter("CHK == 1");
        		var nCnt = this.dsList.rowcount;

        		if( nCnt == 0) {
        			this.gfnAlert("전표취소할 행을 체크하세요.");
        			this.dsList.filter("");
        			return;
        		}

        		this.dsList.filter("");

        		//if(!this.fnCheckFlag(this.dxGrid)) return;
        		this.gfnConfirm("선택한 데이터의 전표취소 작업을 하시겠습니까?", "fnSlipCancel");
        	}

        	if( obj.id == "btnExt_FormButton3"){
        		if( !this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "NO_AUTOSLIP")) ){
        			var param = {};

        			param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition,"NO_AUTOSLIP");
        			param.IUD_FLAG = "S";

        			this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        		} else {
        			this.gfnAlert("전표가 생성된 행만 전표조회 가능합니다.", "");
        		}
        	}
        };

        /*
          *	전표발행
          */
        this.fnSlipIssue = function(svcID, value){

        	if(value) {
        		this.gfnGridBeforeSelect(this.dxGrid);

        		var colIdx = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, "CHK");
        		var strSlipKey1 = "";
        		var strSlipKey2 = "";
        		var strSlipKey3 = "";
        		var nRow = 0;
        		for ( var i =0; i < this.dsList.rowcount; i++){
        			 var strDisplaytype = this.dxGrid.getCellPropertyValue( i, this.dxGrid.getBindCellIndex("body","CHK"), "displaytype");

        			if( this.dsList.getColumn(i, this.ucFlag) != "#" && strDisplaytype == "checkboxcontrol" && this.dsList.getColumn(i,"CHK") == 1) {
        			//trace(this.dsList.getOrgColumn(i,"YN_APPROVAL"));
        			 //   if(this.dsList.getOrgColumn(i,"YN_APPROVAL") != "Y"){
        			//	    this.gfnAlert("승인 상태가 아닙니다.");
        			 //       return;
        			//	}
        				if(!this.gfnIsNull(this.dsList.getOrgColumn(i,"NO_AUTOSLIP"))){
        				    this.gfnAlert("이미 전표발행된 데이터가 있습니다.");
        			        return;
        				}
        				strSlipKey1 += this.dsList.getColumn(i,"CD_VENDOR")+",";
        				strSlipKey2 += this.dsList.getColumn(i,"INSURANCE_PAY")+",";
        				strSlipKey3 += this.dsList.getColumn(i,"CD_CAR")+",";

        			}
        		}

        		var param = {};

        		param.CD_VENDOR = strSlipKey1.substr(0,strSlipKey1.length-1);
        		param.INSURANCE_PAY = strSlipKey2.substr(0,strSlipKey2.length-1);
        		param.CD_CAR = strSlipKey3.substr(0,strSlipKey3.length-1);
        		//param.TY_AUTOSLIP = tyAutoslip;					// ISSUE:전표발행 CANCEL:전표취소
        		//param.GR_SEARCH = this.FormInfo.GR_SEARCH;
        		//param.DT_BASE = this.dsSearch.getColumn(0, "DT_BASE");
        		param.CD_CORP = "9";
        		param.DS_CORP = "(주)부영주택";
        		trace("dddddd"+param.CD_VENDOR+param.INSURANCE_PAY +param.CD_CAR);
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_EXPENSE_REGISTRATION_CAR", "fnPopupCallback", param, 1300, 600);

        	}
        	};


        	this.fnFormButton = function(obj,e) {

        	if(obj.id == "btnExt_FormButton1"){
        		var param = {};
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DGB_DRIVER", "", param);
        	}else if(obj.id == "btnExt_FormButton2"){
        		this.gfnConfirm("출력 하시겠습니까?", "fnTransCostPrintCallback");
        	}else if(obj.id == "btnExt_FormButton3"){
        		this.gfnConfirm("출력 하시겠습니까?", "fnFoodCostPrintCallback");
        	}else if(obj.id == "btnExt_FormButton4"){
        		var param = {};
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DGB_DRIVERCOST_MONTH", "", param);
        	}else if(obj.id == "btnExt_FormButton5"){
        		this.gfnConfirm("전자결재를 하시겠습니까?", "fnPayment_callback");
        	}

        };


        this.fnPayment_callback = function(strId, val) {
        	if(val == true) {

        		//var cd_dept = this.dsSelect.getColumn(0, "CD_CORP");
        		var cd_dept = "총무팀";
        		//var ds_site = this.dsSearch.getColumn(0, "DS_SITE");
        		var fr_work = this.dsSelect.getColumn(0, "DT_FROM");
        		var empno = this.AuthClient.ID_USER;
        			trace(fr_work);
        				trace(empno);

        		var url = this.gfnGetConfig("DZ" , "GW_APROVAL_URL");
        		url += "approval/legacy/goFormLink.do?mode=DRAFT";
        		url += "&legacyFormID=WF_FORM_ERP_CARREPAIR";
        		url += "&subject=" + encodeURI( "총무팀" + " " + fr_work.substring(0, 4) + "년 " + fr_work.substring(4, 6) + "월 차량수리 비용 지급");
        		url += "&dataType=proc";
        		url += "&empno=" + empno;
        		url += "&P_DS_KEY1=B";
        		url += "&P_DS_KEY2=총무팀";
        		url += "&P_DS_KEY3=" + fr_work;
        		url += "&P_DS_KEY4=&P_DS_KEY5=";

        		trace(url);

        		//window.open(url);

        		var w = 800;
        		var h = 800;
        		var xPos = (document.body.offsetWidth/2) - (w/2); // 가운데 정렬
        		xPos += window.screenLeft; // 듀얼 모니터일 때
        		var yPos = (document.body.offsetHeight/2) - (h/2);

        		var option = "width = " + w + ", height = " + h + ", top = " + yPos + ", left = " + xPos + ", location = no, status = no, toolbars = no"
        		window.open(url, "_blank", option );

        	}
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	if(id == "DHX_CAR"){
        		var cd_corp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");

        		if(this.gfnIsNull(cd_corp)) cd_corp = "";

        		dsUserParam.setColumn(nrow, "CD_CORP", cd_corp);

        	} else if(id == "DAX_CFBASEINFO"){
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분

        	} else if(id == "DAX_CFDEPT") {
        		dsUserParam.setColumn(nrow, "GR_SEARCH", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "");
        	}

        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	if (id == "DZX_CFCORP"){
        		this.dsList.setColumn(this.dsList.rowposition, "CD_CAR", "");
        		this.dsList.setColumn(this.dsList.rowposition, "NO_CAR", "");

        	}else if(id == "DHX_CAR"){
        		var nrow = arr[0]["rowInfo"];
        		this.dsList.setColumn(nrow, "CD_CORP", arr[0]["CD_CORP"]);
        		this.dsList.setColumn(nrow, "DS_CORP", arr[0]["DS_CORP"]);
        		this.fnGetKmBef(arr);
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnDhaCarreg = function () {
         	var param = {};
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_CARREG", "", param);
        };

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

        //주행거리 체크
        this.dsList_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "KM_BEFORE" || e.columnid == "KM_AFTER") {	//주행거리
        		var kmBefore = this.dsList.getColumn(e.row, "KM_BEFORE");
        		var kmAfter = this.dsList.getColumn(e.row, "KM_AFTER");
        		var nDrvKm =  0;

        		if(e.columnid == "KM_BEFORE"){
        			kmBefore = e.newvalue;

        		}else if (e.columnid == "KM_AFTER"){
        			kmAfter = e.newvalue;
        		}
        		nDrvKm =  kmAfter - kmBefore;

        		if(nDrvKm < 0 ){
        			this.gfnAlert("입력값이 잘못되었습니다.");
        			return false;
        		}
        	}else if(e.columnid == "KM_WORKING"){		//출퇴근
        		//주행거리 체크
        		var nDrvKm =  this.dsList.getColumn(e.row, "KM_DRIVE");

        		if(this.gfnIsNull(nDrvKm) || nDrvKm == 0){
        			this.gfnAlert("주행거리가 없습니다.");
        			return false;
        		}else if( nDrvKm < e.newvalue){
        			this.gfnAlert("출퇴근 거리가 주행거리보다 클수 없습니다.");
        			return false;
        		}

        		// 업무용 거리 계산
        		var kmWorking = e.newvalue;
        		var kmBusiness = nDrvKm - kmWorking;

        		this.dsList.set_enableevent(false);
        		this.dsList.setColumn(e.row, "KM_BUSINESS", kmBusiness);
        		this.dsList.set_enableevent(true);

        	}else if(e.columnid == "KM_BUSINESS"){	//업무용
        		//주행거리 체크
        		var nDrvKm =  this.dsList.getColumn(e.row, "KM_DRIVE");

        		if(this.gfnIsNull(nDrvKm) || nDrvKm == 0){
        			this.gfnAlert("주행거리가 없습니다.");
        			return false;
        		}else if( nDrvKm < e.newvalue){
        			this.gfnAlert("업무용 거리가 주행거리보다 클수 없습니다.");
        			return false;
        		}

        		// 출퇴근용 거리 계산
        		var kmBusiness = e.newvalue;
        		var kmWorking = nDrvKm - kmBusiness;

        		this.dsList.set_enableevent(false);
        		this.dsList.setColumn(e.row, "KM_WORKING", kmWorking);
        		this.dsList.set_enableevent(true);

        	}else if(e.columnid == "KM_DRIVE"){
        		this.dsList.set_enableevent(false);
        		this.dsList.setColumn(e.row, "KM_WORKING", 0);
        		this.dsList.setColumn(e.row, "KM_BUSINESS", 0);
        		this.dsList.set_enableevent(true);
        	}

        	return true;
        };

        //주행거리 계산
        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.columnid == "KM_BEFORE" || e.columnid == "KM_AFTER"){
        		var kmBefore = this.gfnIsNull(this.dsList.getColumn(e.row, "KM_BEFORE"))==true?0:this.dsList.getColumn(e.row, "KM_BEFORE");
        		var kmAfter = this.dsList.getColumn(e.row, "KM_AFTER");
        		var nDrvKm =  kmAfter - kmBefore;

        		this.dsList.setColumn(e.row, "KM_DRIVE", nDrvKm);
        	}
        	this.fnSetButton();
        };

        //입력시 주행전 거리 조회
        this.fnGetKmBef = function(arr){
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", arr[0]["CD_CORP"]);
        	this.dsSelect.setColumn(0, "CD_CAR", arr[0]["CD_CAR"]);

        	var strSvcId    = "selectCar";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectCar=dsSelect";
        	var outData     = "dsCar=selectCar0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,
        						false); // 통신방법 정의 [생략가능]

        	this.dsList.setColumn(arr[0]["rowInfo"], "KM_BEFORE", this.dsCar.getColumn(0, "KM_AFTER"));
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHA_CARREPAIR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
