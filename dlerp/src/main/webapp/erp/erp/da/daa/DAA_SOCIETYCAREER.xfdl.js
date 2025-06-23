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
            this.set_titletext("1년미만 연차 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_SOCIETYCAREER_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAAPR_SOCIETYCAREER_SAVE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CARR_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_CARR_END\" type=\"STRING\" size=\"256\"/><Column id=\"TY_RETIRE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID_PERSON\"/><Col id=\"DS_HNAME\"/><Col id=\"ID_SABUN\"/><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"CD_DEPT\"/><Col id=\"DS_DEPT\"/><Col id=\"DT_CARR_START\"/><Col id=\"DT_CARR_END\"/><Col id=\"TY_RETIRE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_RETIRE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdg00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("부서코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ccfID_SABUN:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","ccfID_SABUN:0.0","10.0","44","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_visible("false");
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_RETIRE","0.0","ccfCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("재직여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_RETIRE","staTY_RETIRE:0.0","ccfCD_CORP:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsTY_RETIRE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("재직자");
            obj.set_value("01");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REQUEST","cboTY_RETIRE:0.0","ccfCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("참여기간");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_CARR_START","staDT_REQUEST:0.0","ccfCD_CORP:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_ORD_TO","ctclDT_CARR_START:0.0","ccfCD_CORP:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_CARR_END","staDT_ORD_TO:0.0","ccfCD_CORP:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
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
            obj = new BindItem("item8","divSearch.form.edtID_PERSON","value","dsSearch","ID_PERSON");
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

            obj = new BindItem("item6","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.cboTY_RETIRE","value","dsSearch","TY_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_CARR_END","value","dsSearch","DT_CARR_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.ctclDT_CARR_START","value","dsSearch","DT_CARR_START");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAA_SOCIETYCAREER.xfdl", function() {
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

        	// 파일설정
        	this.fileConfig = this.gfnGetFileConfig();

        	this.fnSetCombo();

        	//기준년월 셋팅
         	var today = this.gfnGetDate().substring(0,4);
        	this.dsSearch.setColumn(0, "DT_CARR_START", today+"0101");
        	this.dsSearch.setColumn(0, "DT_CARR_END", today+"1231");
        	//this.dsSearch.setColumn(0, "DT_CARR_END", this.gfnGetDate());

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        	this.dsSearch.setColumn(0, "ID_SABUN", this.AuthClient.ID_USER);
        	this.ccfID_SABUN.form.DSTextBox.set_value(this.AuthClient.DS_HNAME);
        	this.dsSearch.setColumn(0, "ID_PERSON", this.AuthClient.CD_COSTCENTER);

        	if(this.FormInfo.GR_SEARCH == "9"){
        		this.ccfCD_CORP.set_enable(false);
        		this.ccfCD_DEPT.set_enable(false);
        		this.ccfID_SABUN.set_enable(false);
        		this.cboTY_RETIRE.set_enable(false);
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	//this.FormBtns.Reset.set_enable(true);
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
        	this.ctclDT_CARR_START = this.divSearch.form.ctclDT_CARR_START;
        	this.ctclDT_CARR_END = this.divSearch.form.ctclDT_CARR_END;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.edtID_PERSON = this.divSearch.form.edtID_PERSON;
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.cboTY_RETIRE = this.divSearch.form.cboTY_RETIRE;

        	this.dxGrid = this.divData.form.objGrid;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//조회조건 코드파인드
        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO_GR";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP_CODEFIND";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_DEPT.CodeFindName = "DAX_CFDEPT"; //DAX_CFDEPT_MST1
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";


        	//그리드
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAA_SOCIETYCAREER");
        	//그리드 이벤트
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.dxGrid.ExpandUp = "fnGrid_ExpandUp";
        	this.dxGrid.addEventHandler("oncelldblclick", this.dxGrid_oncelldblclick, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("ID_PERSON", "int");
        	this.dsSelect.addColumn("TY_RETIRE", "string");
        	this.dsSelect.addColumn("DT_CARR_START", "string");
        	this.dsSelect.addColumn("DT_CARR_END", "string");
        	this.dsSelect.addColumn("ID_USER", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("ID_PERSON", "int");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("DT_CARR_START", "string");
        	this.dsSave.addColumn("DT_CARR_END", "string");
        	this.dsSave.addColumn("DS_COMPANY", "string");
        	this.dsSave.addColumn("DS_PROJECT", "string");
        	this.dsSave.addColumn("CD_PRF_AREA", "string");
        	this.dsSave.addColumn("CD_JOB_AREA", "string");
        	this.dsSave.addColumn("DS_ORDER_PLACE", "string");
        	this.dsSave.addColumn("DS_BUILDING_USE", "string");
        	this.dsSave.addColumn("CD_BUILDING_USE_EX", "string");
        	this.dsSave.addColumn("DS_POSITION", "string");
        	this.dsSave.addColumn("CD_TASK_NAME", "string");
        	this.dsSave.addColumn("CD_RESP_DEGREE", "string");
        	this.dsSave.addColumn("DS_CARR_DAY", "string");
        	this.dsSave.addColumn("AM_CONSTRUCTION", "bigdecimal");
        	this.dsSave.addColumn("DS_DESCRIPTION", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("DT_COMPLETION", "string");
        	this.dsSave.addColumn("DT_CONSTRUCTION", "string");
        	this.dsSave.addColumn("DS_FILE_NAME", "string");
        	this.dsSave.addColumn("DS_FILE_PATH", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "ID_PERSON", this.dsSearch.getColumn(0, "ID_PERSON"));
        	this.dsSelect.setColumn(0, "TY_RETIRE", this.dsSearch.getColumn(0, "TY_RETIRE"));
        	this.dsSelect.setColumn(0, "DT_CARR_START", this.dsSearch.getColumn(0, "DT_CARR_START"));
        	this.dsSelect.setColumn(0, "DT_CARR_END", this.dsSearch.getColumn(0, "DT_CARR_END"));
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);

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
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid);
        // 	if ( !this.gfnIsNull(this.dsSearch.getColumn(0, "ID_SABUN")) ) {
        // 		this.dsList.setColumn(nrow, "ID_SABUN", this.ccfID_SABUN.form.CDTextBox.value);
        // 		this.dsList.setColumn(nrow, "DS_HNAME", this.ccfID_SABUN.form.DSTextBox.value);
        // 		this.dsList.setColumn(nrow, "ID_PERSON", this.edtID_PERSON.form.value);
        // 	}

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
        // 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	// 파일저장
        	if(this.FileUpTransfer00.filelist.length > 0) {
        		this._waitCursor(true);
        		var sUploadUrl = this.fileConfig.host + this.fileConfig.uploadUrl;
        		this.FileUpTransfer00.setPostData("path", this.filepath);
        		this.FileUpTransfer00.upload(sUploadUrl);
        	}
        	else {
        		this.fnSaveProc();
        	}
        }


        this.fnSaveProc = function() {
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
        				this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        				this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsSave.setColumn(nrow, "DT_CARR_START", this.dsList.getColumn(i, "DT_CARR_START"));
        				this.dsSave.setColumn(nrow, "DT_CARR_END", this.dsList.getColumn(i, "DT_CARR_END"));
        				this.dsSave.setColumn(nrow, "DS_COMPANY", this.dsList.getColumn(i, "DS_COMPANY"));
        				this.dsSave.setColumn(nrow, "DS_PROJECT", this.dsList.getColumn(i, "DS_PROJECT"));
        				this.dsSave.setColumn(nrow, "CD_PRF_AREA", this.dsList.getColumn(i, "CD_PRF_AREA"));
        				this.dsSave.setColumn(nrow, "CD_JOB_AREA", this.dsList.getColumn(i, "CD_JOB_AREA"));
        				this.dsSave.setColumn(nrow, "DS_ORDER_PLACE", this.dsList.getColumn(i, "DS_ORDER_PLACE"));
        				this.dsSave.setColumn(nrow, "DS_BUILDING_USE", this.dsList.getColumn(i, "DS_BUILDING_USE"));
        				this.dsSave.setColumn(nrow, "CD_BUILDING_USE_EX", this.dsList.getColumn(i, "CD_BUILDING_USE_EX"));
        				this.dsSave.setColumn(nrow, "DS_POSITION", this.dsList.getColumn(i, "DS_POSITION"));
        				this.dsSave.setColumn(nrow, "CD_TASK_NAME", this.dsList.getColumn(i, "CD_TASK_NAME"));
        				this.dsSave.setColumn(nrow, "CD_RESP_DEGREE", this.dsList.getColumn(i, "CD_RESP_DEGREE"));
        				this.dsSave.setColumn(nrow, "DS_CARR_DAY", this.dsList.getColumn(i, "DS_CARR_DAY"));
        				this.dsSave.setColumn(nrow, "AM_CONSTRUCTION", this.dsList.getColumn(i, "AM_CONSTRUCTION"));
        				this.dsSave.setColumn(nrow, "DS_DESCRIPTION", this.dsList.getColumn(i, "DS_DESCRIPTION"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "DT_COMPLETION", this.dsList.getColumn(i, "DT_COMPLETION"));
        				this.dsSave.setColumn(nrow, "DT_CONSTRUCTION", this.dsList.getColumn(i, "DT_CONSTRUCTION"));
        				this.dsSave.setColumn(nrow, "DS_FILE_NAME", this.dsList.getColumn(i, "DS_FILE_NAME"));
        				this.dsSave.setColumn(nrow, "DS_FILE_PATH", this.dsList.getColumn(i, "DS_FILE_PATH"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        				break;
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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        }

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

        this.fnReset = function(){

        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {

        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_CORP"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
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
        		//this.fnSetButton();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if (svcID == "combo") {
        		this.cboTY_RETIRE.set_index(0);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	trace(id);
        	if(id == "ccfCD_CORP"){
        		this.ccfCD_DEPT.form.CDTextBox.set_value("");
        		this.ccfCD_DEPT.form.DSTextBox.set_value("");
        		this.ccfID_SABUN.form.CDTextBox.set_value("");
        		this.ccfID_SABUN.form.DSTextBox.set_value("");
        		this.edtID_PERSON.set_value("");
        	}else if(id == "ccfCD_DEPT" ){
        		this.ccfID_SABUN.form.CDTextBox.set_value("");
        		this.ccfID_SABUN.form.DSTextBox.set_value("");
        		this.edtID_PERSON.set_value("");
        	}else if(id == "ccfID_SABUN") {
        		if(arr.length > 0) {
        			this.edtID_PERSON.set_value(arr[0]["ID_PERSON"]);
        		}else{
        			this.edtID_PERSON.set_value("");
        		}
        		//this.edtID_PERSON.set_value(arr[0]["ID_PERSON"]);
        	}
        };

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	//trace("코드파인드_식별id:" + id);
        	switch(id) {
        		case "ccfCD_CORP":	//법인
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;
        		case "ccfID_SABUN":	//성명
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.fnBeforeUserCallback = function() {
        					this.ccfCD_CORP.form.CDTextBox.setFocus();
        				}
        				this.gfnAlert("법인을 먼저 선택하시기 바랍니다.", "fnBeforeUserCallback");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.ccfCD_DEPT.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;
        		 case "ccfCD_DEPT":
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.fnBeforeUserCallback = function() {
        					this.ccfCD_CORP.form.CDTextBox.setFocus();
        				}
        				this.gfnAlert("법인을 먼저 선택하시기 바랍니다.", "fnBeforeUserCallback");
        				return false;
        			}
         			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
         			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "");
        			break;
        		default:
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	switch(id) {
        		case "DAX_CFBASEINFO_GR":	//성명
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.ccfCD_DEPT.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;
        		case "G1":	//책임정도
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "G1");
        			break;
        		case "G2":	//직무분야
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "G2");
        			break;
        		case "DAX_CFCOMMONCODEUP":	//전문분야
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "G3");
        			dsUserParam.setColumn(nrow, "CD_UPPREFIX", this.dsList.getColumn(this.dsList.rowposition, "CD_JOB_AREA"));	//그리드 직무분야코드
        			break;
        		case "G4":	//공사종류
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "G4");
        			break;
        		case "G5":	//담당업무
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "G5");
        			break;

        		default:
        	}

        	return true;
        };


        //첨부파일 팝업
        this.fnGrid_ExpandUp = function(obj, e){
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);
        	if(colnm == "DS_FILE_NAME"){
        		// 파일 설정
        		this.FileUpTransfer00.clearFileList();
        		this.filepath = "/DA/SOCIETYCAREER/" + this.dsList.getColumn(this.dsList.rowposition, "ID_PERSON");

        		this.fdg00.row = e.row;
        		this.fdg00.open('FileOpen', FileDialog.LOAD);
        	}
        };


        this.fdg00_onclose = function(obj,e)
        {
        	this.addFileList(obj, e.virtualfiles);
        };

        this.addFileList = function(obj, filelist)
        {
        	this.FileList = filelist;
        	if(filelist.length > 0) {
        		var vFile;
        		for (var i = 0; i < filelist.length; i++)
        		{
        			vFile = filelist[i];
        			vFile.row = obj.row;
        			vFile.addEventHandler("onsuccess", this.FileList_onsuccess, this);
        			vFile.addEventHandler("onerror", this.FileList_onerror , this);

        			vFile.open(null, 1);
        		}
        	}
        }

        this.FileList_onsuccess = function(obj, e)
        {
        	switch (e.reason)
        	{
        		case 1:
        			obj.getFileSize();
        			break;
        		case 9:
        			var row = obj.row;
        			this.dsList.setColumn(row, "DS_FILE_NAME", obj.filename);
        			this.dsList.setColumn(row, "DS_FILE_PATH", this.filepath);
        			//this.dsList.setColumn(row, "FILE_SIZ", null);
        			this.FileUpTransfer00.addFile(obj.filename, obj);
        			break;
        	}
        }

        this.FileList_onerror = function(obj, e)
        {
        	trace("errortype: "+e.errortype);
        	trace("errormsg: "+e.errormsg);
        	trace("statuscode: "+e.statuscode);
        }

        this.FileUpTransfer00_onprogress = function(obj,e)
        {
        	trace("FileUpTransfer00_onprogress: " + e.loaded+"/"+e.total);
        };

        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	this._waitCursor(false);
        	trace("FileUpTransfer00_onsuccess: " + e.code + "/" + e.message);
        	if(e.code == 0) {
        		if(e.datasets.length > 0) {
        			for(var i = 0; i < e.datasets[0].rowcount; i++) {
        				var row = obj.filelist[i].row;
        				//this.dsList.setColumn(row, "FILE_SIZ", e.datasets[0].getColumn(i, "filesize"));
        				//this.dsList.setColumn(row, "FILE_HASH", e.datasets[0].getColumn(i, "filehash"));
        			}
        			this.fnSaveProc();
        		}
        	}
        };

        this.FileUpTransfer00_onerror = function(obj,e)
        {
        	this._waitCursor(false);
        	if(e.errormsg.indexOf("maxsize") > -1) {
        		this.gfnAlert("첨부파일 허용용량("+ this.gfnCutFileSize(nexacro.toNumber(e.errormsg.split(':')[1])) + ")을 초과할 수 없습니다.");
        	} else {
        		this.gfnAlert(e.errormsg);
        	}
        };

        this.fnDownload = function() {
        	if(!this.gfnIsNull(this.gfnGetFlag(this.dsList, this.dsList.rowposition))) return;

        	var sFilename = this.dsList.getColumn(this.dsList.rowposition, "DS_FILE_NAME");
        	var sFilepath = this.dsList.getColumn(this.dsList.rowposition, "DS_FILE_PATH");
        	var encodeFileName = encodeURIComponent(sFilename);

        	var surl = this.fileConfig.host+ this.fileConfig.downloadUrl;
        	this.FileDownTransfer00.set_url(surl);
        	this.FileDownTransfer00.setPostData("path", sFilepath);
        	this.FileDownTransfer00.setPostData("fileName", encodeFileName);
        	if( system.navigatorname =="nexacro"){
        		this.FileDownTransfer00.set_downloadfilename(sFilename);
        	}

        	//alert(surl);
        	//alert(sFilepath+"==="+encodeFileName);
        	this.FileDownTransfer00.download();
        };


        this.dxGrid_oncelldblclick = function(obj,e)
        {
        	if(this.gfnGridGetBindColumnNameByIndex(obj, e.cell) == "DS_FILE_NAME") {
        		this.fnDownload();
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        // this.fnSearchInit = function(obj,e) {
        // 	if(e.pretext != e.posttext) {
        // 		// 폼상태 초기화
        // 		this.gfnSetFormStatus(this);
        // 		this.gfnGridClear(this.dxGrid);
        // 	}
        // 	if( e.columnid == "ID_SABUN" ){
        // 		this.divSearch.form.edtID_PERSON.set_value("");
        // 	}
        // };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        	if( e.columnid == "ID_SABUN" ){
        		trace("사번변경 초기화");
        		this.divSearch.form.edtID_PERSON.set_value("");
        	}

        };


        this.fnSetCombo = function() {

           this.dsCombo = new Dataset();
           this.dsCombo.addColumn("TY_SEL", "string");
           this.dsCombo.addColumn("CD_PREFIX", "string");
           this.dsCombo.addColumn("CD_UPPREFIX", "string");

           this.dsCombo.addRow();
           this.dsCombo.setColumn(0, "TY_SEL", "A");
           this.dsCombo.setColumn(0, "CD_PREFIX", "AE");
           this.dsCombo.setColumn(0, "CD_UPPREFIX", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_RETIRE=combo0";
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




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staTY_RETIRE.addEventHandler("onclick",this.Common_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.fdg00.addEventHandler("onclose",this.fdg00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
        };
        this.loadIncludeScript("DAA_SOCIETYCAREER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
