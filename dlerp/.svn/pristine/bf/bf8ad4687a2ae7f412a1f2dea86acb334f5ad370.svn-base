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
            this.set_titletext("휴무계획");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DACPR_DAYOFF_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DACPR_DAYOFF_UPDATE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"TY_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RECORD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RECORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DT_START\"/><Col id=\"DT_END\"/><Col id=\"ID_SABUN\"/><Col id=\"DS_HNAME\"/><Col id=\"CD_DEPT\"/><Col id=\"DS_DEPT\"/><Col id=\"CD_RECORD\"/><Col id=\"DS_RECORD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_DEPT", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_RECORD", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">%</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">D02</Col><Col id=\"VALUE\">휴무계획</Col></Row><Row><Col id=\"CODE\">D03</Col><Col id=\"VALUE\">휴무변경</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","22",null,null,"0","6",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_REQUEST","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회기간");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_START","staDT_REQUEST:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_END","ctclDT_START:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_ORD_TO","ctclDT_END:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_DEPT","ctclDT_END:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("조직분류");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_DEPT","staTY_DEPT:0.0","10.0","89","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_DEPT");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","0.0","staDT_REQUEST:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","staDT_REQUEST:10.0","236","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_DEPT:0.0","staDT_REQUEST:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("사원");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","staDT_REQUEST:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_RECORD","ccfID_SABUN:0.0","staDT_REQUEST:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("근태유형");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_RECORD","staCD_RECORD:0.0","staDT_REQUEST:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsCD_RECORD");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_value("N");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclDT_START","value","dsSearch","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_END","value","dsSearch","DT_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboCD_RECORD","value","dsSearch","CD_RECORD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboTY_DEPT","value","dsSearch","TY_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAC_DAYOFF_ASK.xfdl", function() {
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
        	this.fnSetCombo();
        	this.fnSetDefaultVal();

        	// ---------------------------//
        	//화면 로드시 자동조회
        	//this.FormBtns.Select.click();

        	// 화면 로드 시 DACPR_RECORD_DEPT_SELECT SP 실행
        	//this.fnSelectDept();

        	//개인권한 GR_SEARCH = '9' 사원 ENABLE
        	if(this.FormInfo.GR_SEARCH == "9"){
        		this.ccfID_SABUN.form.CDTextBox.set_value(this.AuthClient.ID_USER);
        		this.ccfID_SABUN.form.DSTextBox.set_value(this.AuthClient.DS_HNAME);
        		this.ccfID_SABUN.set_enable(false);

        		if(this.gfnNvl(this.AuthClient.CD_DEPT_MST)){
        			this.ccfCD_DEPT.form.CDTextBox.set_value(this.AuthClient.CD_DEPT_MST);
        			this.ccfCD_DEPT.form.DSTextBox.set_value(this.AuthClient.DS_DEPT_MST);
        		}
        		else {
        			this.ccfCD_DEPT.form.CDTextBox.set_value((this.AuthClient.CD_DEPT).substring(1,6));
        			this.ccfCD_DEPT.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        		}

        		this.ccfCD_DEPT.set_enable(false);
        	}

        	//화면 로드시 자동조회
        	this.FormBtns.Select.click();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);
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

        	this.dxGrid = this.divData.form.objGrid;

        	this.ctclDT_START = this.divSearch.form.ctclDT_START;
        	this.ctclDT_END = this.divSearch.form.ctclDT_END;
        	this.cboTY_DEPT = this.divSearch.form.cboTY_DEPT;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.cboCD_RECORD = this.divSearch.form.cboCD_RECORD;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAC_DAYOFF_ASK");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	this.ccfCD_DEPT.CodeFindName = "DAX_CFDEPT_MST1";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfID_SABUN.CodeFindName = "DAX_BASEINFO_01";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//trace ("법인1: " + this.AuthClient.CD_CORP + " /사번: " + this.AuthClient.ID_SABUN  + " /아이디: " + this.AuthClient.ID_USER	+" /화면권한: "  +  this.FormInfo.GR_SEARCH);

        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_START", "string");
        	this.dsSelect.addColumn("DT_END", "string");
        	this.dsSelect.addColumn("TY_DEPT", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("CD_RECORD", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_LOGIN", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("ID_PERSON", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("NO_SEQ", "string");
        	this.dsSave.addColumn("CD_RECORD", "string");
        	this.dsSave.addColumn("DT_START", "string");
        	this.dsSave.addColumn("DT_END", "string");
        	this.dsSave.addColumn("DT_CHANGE", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("ID_LOGIN", "string");
        }

        /************************************************************************
         * 초기값 설정
         ************************************************************************/
        this.fnSetDefaultVal = function() {

        	//날짜 from ~ to 셋팅 ( 매월1일 ~ 매월 말일 )
        	var today = this.gfnGetDate().substring(0,6);
        	var endDay = this.gfnGetLastDate(today);
        	this.divSearch.form.ctclDT_START.set_value(today+"01");
        	this.divSearch.form.ctclDT_END.set_value(endDay);

        	//근태유형
        	this.divSearch.form.cboCD_RECORD.set_value('%');
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.gfnGridBeforeSelect(this.dxGrid);
        	this.gfnSetFormStatus(this);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "DT_START", this.dsSearch.getColumn(0, "DT_START"));
        	this.dsSelect.setColumn(0, "DT_END", this.dsSearch.getColumn(0, "DT_END"));
        	this.dsSelect.setColumn(0, "TY_DEPT", this.dsSearch.getColumn(0, "TY_DEPT"));
        	this.dsSelect.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "CD_RECORD", this.dsSearch.getColumn(0, "CD_RECORD"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_LOGIN", this.AuthClient.ID_USER);

        trace("this.dsSelect >>>"+this.dsSelect.saveXML());

         	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId ,
        						strSvcType ,
        						inProc,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc);
        }

        this.fnAdd = function() {
        	//this.gfnGridAdd(this.dxGrid);
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
        		if(flag == "U") {
        			var nrow = this.dsSave.addRow();
        			this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        			this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        			this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        			this.dsSave.setColumn(nrow, "CD_RECORD", "09");
        			this.dsSave.setColumn(nrow, "DT_START", this.dsList.getColumn(i, "DT_START"));
        			this.dsSave.setColumn(nrow, "DT_END", this.dsList.getColumn(i, "DT_END"));
        			this.dsSave.setColumn(nrow, "DT_CHANGE", this.dsList.getColumn(i, "DT_CHANGE"));
        			this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        			this.dsSave.setColumn(nrow, "ID_LOGIN", this.AuthClient.ID_USER);
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "dsOutput=save";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        }

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {
        }

        /*
         *	초기화 버튼
         */
        this.fnReset = function() {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	if(this.FormInfo.GR_SEARCH == "9"){
        		this.ccfID_SABUN.form.CDTextBox.set_value(this.AuthClient.ID_USER);
        		this.ccfID_SABUN.form.DSTextBox.set_value(this.AuthClient.DS_HNAME);
        		this.ccfID_SABUN.set_enable(false);

        		if(this.gfnNvl(this.AuthClient.CD_DEPT_MST)){
        			this.ccfCD_DEPT.form.CDTextBox.set_value(this.AuthClient.CD_DEPT_MST);
        			this.ccfCD_DEPT.form.DSTextBox.set_value(this.AuthClient.DS_DEPT_MST);
        		}
        		else {
        			this.ccfCD_DEPT.form.CDTextBox.set_value((this.AuthClient.CD_DEPT).substring(1,6));
        			this.ccfCD_DEPT.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        		}

        		this.ccfCD_DEPT.set_enable(false);
        	}
        	this.cboTY_DEPT.set_index(0);
        	this.cboCD_RECORD.set_value("%");
        	this.fnSearchInit();
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
        	this.fnSetButton();

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if( svcID == "combo"){
        		//trace(this.dsTY_DEPT.saveXML());
        		this.cboTY_DEPT.set_index(0);
        	}
        }

        this.fnDialogCallback = function(svcID, value){
        	this.FormBtns.Select.click();
        }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnAfterCDTextChanged = function(id) {
        	this.fnSearchInit();
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfID_SABUN") {	// 사번
        		//dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		//dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		//dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        	}else if  (id == "ccfCD_DEPT") {	// 부서
        	}else if  (id == "ccfCD_RECORD") {	// 근무유형
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
          this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	//trace("그리드 코드파인드_식별id:" + id);
        	switch(id) {
        		case "GT":	// 근태
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "GT");
        			break;
        		default:
        	}
        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id) {
        		case "DAX_CFBASEINFO_ALL":
        			this.dsList.setColumn(0, "CD_CORP", arr[0]["CD_CORP"]);
        			this.dsList.setColumn(0, "ID_PERSON", arr[0]["ID_PERSON"]);
        			break;
        		default:
        	}
        }

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
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        	if (e.columnid == "DT_START" || e.columnid == "DT_END") {
        		if (!this.gfnIsNull(this.dsSearch.getColumn(0, "DT_START")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "DT_END"))) {
        			if (this.dsSearch.getColumn(0, "DT_START") > this.dsSearch.getColumn(0, "DT_END")) {
        				this.fnAlertCallback = function() {
        					this.dsSearch.setColumn(0, e.columnid, e.oldvalue);
        				}
        				this.gfnAlert("조회기간이 올바르지 않습니다. 다시 입력해주세요.", "fnAlertCallback");
        			}
        		}
        	}
        };

        //조직분류 콤보 조회
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("TY_SEL", "string");
        	this.dsCombo.addColumn("CD_PREFIX", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "TY_SEL", "A");
        	this.dsCombo.setColumn(0, "CD_PREFIX", "DA");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_DEPT=combo0";
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

        this.dsList_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "DT_END"){
        		var toDay = this.gfnGetDate();

        		//과거일자 수정 불가, 당월 이내로만 변경가능
        		if(e.newvalue < toDay){
        			this.gfnAlert("과거일자는 수정 불가합니다.");
        			return false;
        		}else if (toDay.substring(5,7) < 20){
        			if( e.newvalue.substring(0,6) != toDay.substring(0,6)){
        				this.gfnAlert("당월만 수정 가능합니다.");
        				return false;
        			}
        		}else if (toDay.substring(5,7) >= 20){
        			if( e.newvalue.substring(5,7) >= (this.gfnAddMonth(toDay,1).substring(5,7))){
        				this.gfnAlert("다음달 까지만 수정 가능합니다.");
        				return false;
        			}
        		}
        	}
        	return true;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboTY_DEPT.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.cboCD_RECORD.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAC_DAYOFF_ASK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
