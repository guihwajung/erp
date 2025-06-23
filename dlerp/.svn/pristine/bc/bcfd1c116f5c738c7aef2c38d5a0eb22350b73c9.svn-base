(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAU_AUTOSLIPCONCURRENT");
            this.set_titletext("급여월분할계산");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAUPR_SALARY_AUTOSLIPCONCURRENT_SELECT</Col></Row><Row><Col id=\"TARGET\">concurrentCreate</Col><Col id=\"SP\">DAUPR_SALARY_AUTOSLIPCONCURRENT_CREATE</Col></Row><Row><Col id=\"TARGET\">mainCreate</Col><Col id=\"SP\">DAUPR_SALARY_AUTOSLIPMAIN_CREATE_CBC</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAUPR_SALARY_AUTOSLIPCONCURRENT_UPDATE</Col></Row><Row><Col id=\"TARGET\">dsAuthForm</Col><Col id=\"SP\">DZZPR_DOTNET_AUTHORITYFORM_SELECT_NEW</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ORG2\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_SALARY","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("귀속년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_SALARY","staYM_SALARY:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.getSetter("onchanged").set("fnSearchInit");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SALARY","ctclYM_SALARY:120.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("지급구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_SALARY","staTY_SALARY:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsTY_SALARY");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_readonly("false");
            obj.set_value("S");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSN_SALARY","cboTY_SALARY:0.0","10.0","40","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_readonly("false");
            var divSearch_form_cboSN_SALARY_innerdataset = new nexacro.NormalDataset("divSearch_form_cboSN_SALARY_innerdataset", obj);
            divSearch_form_cboSN_SALARY_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboSN_SALARY_innerdataset);
            obj.set_text("1");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","staYM_SALARY:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","ctclYM_SALARY:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP2");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfCD_CORP:0.0","staYM_SALARY:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","staYM_SALARY:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT2");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_DEPT:0.0","staYM_SALARY:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","staYM_SALARY:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
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
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.ctclYM_SALARY.form.TextBox","value","dsSearch","YM_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboTY_SALARY","value","dsSearch","TY_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSN_SALARY","value","dsSearch","SN_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAU_AUTOSLIPCONCURRENT.xfdl", function() {
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

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	if(!this.gfnIsNull(this.getOwnerFrame().YM_SALARY) && !this.gfnIsNull(this.getOwnerFrame().TY_SALARY)) {
        		this.dsSearch.setColumn(0, "YM_SALARY", this.getOwnerFrame().YM_SALARY);
        		this.dsSearch.setColumn(0, "TY_SALARY", this.getOwnerFrame().TY_SALARY);
        		this.dsSearch.setColumn(0, "SN_SALARY", this.getOwnerFrame().SN_SALARY);
        		this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        		this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);

        		this.FormBtns.Select.click();
        	}else{
        		var toDay = this.gfnGetDate().substr(0,6);
        		this.dsSearch.setColumn(0, "YM_SALARY", toDay);

        		this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        		this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.divSearch.form.cboTY_SALARY.set_index(1);	// 급여 선택
        		this.dsSearch.setColumn(0, "SN_SALARY", "1");
        	}

        // 	if(!this.gfnIsNull(this.getOwnerFrame().arguments.Args.CD_CORP)){
        // 		this.ctclYM_SALARY.form.TextBox.set_value(this.getOwnerFrame().arguments.Args.YM_SALARY);
        // 		this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().arguments.Args.CD_CORP);
        // 		this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().arguments.Args.DS_CORP);
        // 		this.ccfCD_DEPT.form.CDTextBox.set_value(this.getOwnerFrame().arguments.Args.CD_DEPT);
        // 		this.ccfCD_DEPT.form.DSTextBox.set_value(this.getOwnerFrame().arguments.Args.DS_DEPT);
        // 		this.ccfID_SABUN.form.CDTextBox.set_value(this.getOwnerFrame().arguments.Args.ID_SABUN);
        // 		this.ccfID_SABUN.form.DSTextBox.set_value(this.getOwnerFrame().arguments.Args.DS_HNAME);
        // 	}else {
        // 		this.ctclYM_SALARY.form.TextBox.set_value(this.gfnGetDate().substr(0,6));
        // 		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        // 		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        // 	}
        // 		this.dsSearch.setColumn(0,"TY_SALARY","S");
        // 		this.dsSearch.setColumn(0,"SN_SALARY","1");


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
        // 	this.FormBtns.Reset.set_enable(true);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnConcurrent = this.gfnFormButtonAdd("btnConcurrent", "fnConcurrent");
        	this.btnAutoslipDiv = this.gfnFormButtonAdd("btnAutoslipDiv", "fnAutoslipDiv");
        	this.btnAutoslipMain = this.gfnFormButtonAdd("btnAutoslipMain", "fnSlipMain");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYM_SALARY = this.divSearch.form.ctclYM_SALARY;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.cboTY_SALARY = this.divSearch.form.cboTY_SALARY;
        	this.cboSN_SALARY = this.divSearch.form.cboSN_SALARY;
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;

        	this.dxGrid = this.divData.form.objGrid;

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAU_AUTOSLIPCORPCURRENT");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	//조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_SALARY", "string");
        	this.dsSelect.addColumn("TY_SALARY", "string");
        	this.dsSelect.addColumn("SN_SALARY", "int");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("CD_ORG2", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	//수정
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("YM_SALARY", "string");
        	this.dsSave.addColumn("TY_SALARY", "string");
        	this.dsSave.addColumn("SN_SALARY", "int");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("DT_ORDER", "string");
        	this.dsSave.addColumn("QN_RATE", "bigdecimal");
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

        	this.dsSelect.setColumn(0, "YM_SALARY", this.ctclYM_SALARY.form.TextBox.value);
        	this.dsSelect.setColumn(0, "TY_SALARY", this.cboTY_SALARY.value);
        	this.dsSelect.setColumn(0, "SN_SALARY", this.cboSN_SALARY.value);
        	this.dsSelect.setColumn(0, "ID_SABUN", 	this.ccfID_SABUN.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "CD_ORG2", 	this.ccfCD_DEPT.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "CD_CORP",	this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "ID_USER", 	this.AuthClient.ID_USER);

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

        //겸직자 가져오기
        this.fnConcurrent = function() {
        	this.gfnConfirm("겸직자 정보를 가져오시겠습니까? \n이전에 작업된 겸직자 정보는 삭제됩니다.","fnConcurrentCallback");
        };

        //겸직자정보 생성
        this.fnConcurrentCallback = function(strId, val) {

        	if(val) {

        		var strSvcId    = "concurrentCreate";
        		var strSvcType  = "grid";
        		var inProc		= "_dsProc";
        		var inData      = "concurrentCreate=dsSelect";
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
        };

        //분할적용하기
        this.fnAutoslipDiv = function() {
        	this.gfnConfirm("겸직자 정보를 적용하시겠습니까? \n이전에 작업된 겸직자 정보는 삭제됩니다.","fnAutoslipDivCallback");

        };
        this.fnAutoslipDivCallback = function(strId, val) {
        	if(val) {
        		var strSvcId    = "mainCreate";
        		var strSvcType  = "grid";
        		var inProc		= "_dsProc";
        		var inData      = "mainCreate=dsSelect";
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
        //	this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        //  그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	// save SP 한개로 사용하는 경우
        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "YM_SALARY", this.dsSearch.getColumn(0, "YM_SALARY"));
        				this.dsSave.setColumn(nrow, "TY_SALARY", this.dsSearch.getColumn(0, "TY_SALARY"));
        				this.dsSave.setColumn(nrow, "SN_SALARY", this.dsSearch.getColumn(0, "SN_SALARY"));
        				this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsSave.setColumn(nrow, "DT_ORDER", this.dsList.getColumn(i, "DT_ORDER"));
        				this.dsSave.setColumn(nrow, "QN_RATE", this.dsList.getColumn(i, "QN_RATE"));
        				this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
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


        /*
         *	초기화 버튼
         */
        this.fnReset  = function() {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();

        	//대상년월
        	this.ctclYM_SALARY.form.TextBox.set_value(this.gfnGetDate().substr(0,6));

        	// 법인코드 및 법인명 기본세팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
            this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	this.dsSearch.setColumn(0,"TY_SALARY","S");
        	this.dsSearch.setColumn(0,"SN_SALARY","1");
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

        	var validate = true;

        	if (this.gfnIsNull(this.ctclYM_SALARY.form.TextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclYM_SALARY.form.TextBox.setFocus();
        		}
        		this.gfnAlert("대상년월을 입력하세요.", "fnVaidateCallback");
        	}

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
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
        		//this.fnSetButton();
        	}else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.gfnAlert("작업이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "concurrentCreate"){				//겸직자 가져오기
        		this.gfnAlert("생성이 완료되었습니다.");
        		this.fnSelect();
        	} else if(svcID == "mainCreate"){					//분할적용하기
        		this.gfnAlert("생성이 완료되었습니다.");
        		this.fnSelect();
        // 	} else if (svcID == "authform") {
        // 		if (this.dsAuthForm.rowcount > 0) {
        //
        // 			// 폼 정보
        // 			this.objForm.CD_MODULE = this.dsAuthForm.getColumn(0, "CD_MODULE");
        // 			this.objForm.ID_FORM = this.dsAuthForm.getColumn(0, "ID_FORM");
        // 			this.objForm.NM_FORM = this.dsAuthForm.getColumn(0, "NM_FORM");
        // 			this.objForm.ID_GROUP = this.dsAuthForm.getColumn(0, "ID_GROUP");
        // 			this.objForm.GR_SEARCH = this.dsAuthForm.getColumn(0, "GR_SEARCH");
        // 			this.objForm.TY_AUTH = this.dsAuthForm.getColumn(0, "TY_AUTH");
        // 			this.objForm.DS_FORM = this.dsAuthForm.getColumn(0, "DS_FORM");
        // 			this.objForm.CD_ROLE = this.dsAuthForm.getColumn(0, "CD_ROLE");
        // 			this.objForm.TY_MENU = this.dsAuthForm.getColumn(0, "TY_MENU");
        // 			this.objForm.DS_PARAM = this.dsAuthForm.getColumn(0, "DS_PARAM");
        //
        // 			// 버튼 정보
        // 			this.objForm.BtnInfo = [];
        // 			for(var i = 0; i < this.dsBtnInfo.rowcount; i++) {
        // 				var json = {};
        // 				json.ID_BUTTON = this.dsBtnInfo.getColumn(i, "ID_BUTTON");
        // 				json.DS_BUTTON = this.dsBtnInfo.getColumn(i, "DS_BUTTON");
        // 				json.TY_BUTTON = this.dsBtnInfo.getColumn(i, "TY_BUTTON");
        // 				json.RM_BUTTON = this.dsBtnInfo.getColumn(i, "RM_BUTTON");
        // 				json.YN_VISIBLE = this.dsBtnInfo.getColumn(i, "YN_VISIBLE");
        // 				json.YN_ENABLED = this.dsBtnInfo.getColumn(i, "YN_ENABLED");
        // 				json.YN_QUERYX = this.dsBtnInfo.getColumn(i, "YN_QUERYX");
        // 				json.YN_UPDATEBLOCK = this.dsBtnInfo.getColumn(i, "YN_UPDATEBLOCK");
        // 				json.SN_ORDER = this.dsBtnInfo.getColumn(i, "SN_ORDER");
        // 				this.objForm.BtnInfo.push(json);
        // 			}
        //
        // 			var json = this.gfnArgsToJson(args);
        // 			if (json.type == "popup" || json.type == "dialog") {
        // 				if(this.objForm.TY_MENU == "Dialog") {
        // 					json.type = "dialog";
        // 				}
        // 				this.objForm.CD_MODULE = json.cd_module;
        // 				this.objForm.ID_FORM = json.id_form;
        // 				this.objForm.POP_WIDTH = this.gfnIsNull(json.width) ? 0: nexacro.toNumber(json.width);
        // 				this.objForm.POP_HEIGHT = this.gfnIsNull(json.height) ? 0: nexacro.toNumber(json.height);
        // 				this.objForm.POP_CALLBACK = this.gfnIsNull(json.callback) ? "": json.callback;
        // 				this.objForm.POP_ARGS = json;
        //
        // 				this.gfnCallPopup(this.objForm, json.type);
        // 			}
        // 			else if (json.type == "ext") {
        // 				// 외부 다이렉트 화면 접근
        // 				var func = this.objApp.gvMainFrame.form.lookupFunc(json.callback);
        // 				if (func != null) {
        // 					func.call(this.objForm);
        // 				}
        // 			}
        // 			else {
        // 				this.gfnCallNew(this.objForm);
        // 			}
        // 		}
        	}
        	//this.fnSetButton();
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			break;

        		case "ccfCD_DEPT"://부서코드
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.fnBeforeUserCallback = function() {
        						this.ccfCD_CORP.form.CDTextBox.setFocus();
        					}
        					this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        					return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			break;

        		case "ccfID_SABUN": //사번
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.fnBeforeUserCallback = function() {
        						this.ccfCD_CORP.form.CDTextBox.setFocus();
        					}
        					this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        					return false;
        			}
         			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
         			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
         			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        			break;

        		default:
         	}

         	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	this.fnSearchInit();
        };

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	switch(id) {
        		case "ccfID_SABUN":
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
         			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
         			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        			break;

        		default:
        	}

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
          this.fnSlipMain = function(btn){

        		param ={};
        		param.YM_SALARY = this.dsSearch.getColumn(0, "YM_SALARY");
        		param.TY_SALARY = this.dsSearch.getColumn(0, "TY_SALARY");
        		param.SN_SALARY = this.dsSearch.getColumn(0, "SN_SALARY");
        		param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        		param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;

        		btnUrl = "DAU_AUTOSLIPMAIN";
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, btnUrl, "분할내역", param);
         };
        //
        //  this.fnMenuOpen = function(cd_module, id_form, nm_form, objArg) {
        // 	var authArg = "";
        //
        // 	var id_win = cd_module + "#" + id_form;
        // 	var winid = this.objApp.gdsOpenMenu.lookup("ID_WIN", id_win, "ID_WIN");
        //
        // 	if (!this.gfnIsNull(winid))
        // 	{
        // 		if (this.objApp.gvFormLimit == 1 && this.objApp.gvMdiFrame.form.isActiveFrame(winid) == true)
        // 		{
        // 			return false;
        // 		}
        // 		else if (this.objApp.gvFormLimit > 1 && this.objApp.gvFormLimit <= this.objApp.gvMdiFrame.form.isActiveFrameCount(winid)) {
        // 			this.objApp.gvMdiFrame.form.isActiveFrame(winid);
        // 			alert(this.objApp.gvFormLimit + "개 초과하여 같은 화면을 열수 없습니다");
        // 			return false;
        // 		}
        // 	}
        //
        // 	//열린메뉴 체크( application.gvMax = 8)
        // 	if( this.objApp.gvMax <= this.objApp.gdsOpenMenu.getRowCount() ){
        //
        // 		this.gfnAlert(this.objApp.gvMax +"개 초과하여 화면을 열수 없습니다");
        // 		return false;
        // 	}
        //
        // 	this.objForm = {
        // 		CD_MODULE: cd_module,
        // 		ID_FORM: id_form,
        // 		NM_FORM: nm_form,
        // 		DS_FORM: "",
        // 		ID_GROUP: "",
        // 		GR_SEARCH: "",
        // 		TY_AUTH: "",
        // 		CD_ROLE: "",
        // 		Args : objArg
        // 	};
        //
        // 	// 인증정보
        // 	this.fnAuthForm(this, cd_module, id_form, authArg);
        // };
        //
        // this.fnAuthForm = function(objForm, cd_module, id_form, strArg)
        // {
        // 	if(strArg == null) strArg = "";
        // 	this.objForm.CUR_FORM = objForm;
        //
        // 	var dsUser = this.objApp.gdsUserInfo;
        // 	this._dsParamAuthForm.clearData();
        // 	this._dsParamAuthForm.addRow();
        // 	this._dsParamAuthForm.setColumn(0, "ID_USER", dsUser.getColumn(0, "ID_USER"));
        // 	this._dsParamAuthForm.setColumn(0, "CD_DEPT", dsUser.getColumn(0, "CD_DEPT"));
        // 	this._dsParamAuthForm.setColumn(0, "CD_CORP", dsUser.getColumn(0, "CD_CORP"));
        // 	this._dsParamAuthForm.setColumn(0, "ID_FORM", id_form);
        // 	this._dsParamAuthForm.setColumn(0, "CD_MODULE", cd_module);
        //
        // 	this._dsParamBtnInfo.clearData();
        // 	this._dsParamBtnInfo.addRow();
        // 	this._dsParamBtnInfo.setColumn(0, "CD_CORP", dsUser.getColumn(0, "CD_CORP"));
        // 	this._dsParamBtnInfo.setColumn(0, "CD_DEPT", dsUser.getColumn(0, "CD_DEPT"));
        // 	this._dsParamBtnInfo.setColumn(0, "ID_SABUN", dsUser.getColumn(0, "ID_USER"));
        // 	this._dsParamBtnInfo.setColumn(0, "CD_MODULE", cd_module);
        // 	this._dsParamBtnInfo.setColumn(0, "ID_FORM", id_form);
        //
        // 	var strSvcId    = "authform";
        // 	var strSvcType  = "select";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "dsAuthForm=_dsParamAuthForm dsBtnInfo=_dsParamBtnInfo";
        // 	var outData     = "dsAuthForm=dsAuthForm0 dsBtnInfo=dsBtnInfo0"; //"dsList=dsLogin1 dsList2=dsLogin2";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// trabsaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
        // };
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

        // this.dsList_onvaluechanged = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo)
        // {
        // 	this.fnSetButton();
        // };

        // 콤보 조회
        this.fnSetCombo = function() {

           this.dsCombo = new Dataset();
           this.dsCombo.addColumn("TY_SEL", "string");
           this.dsCombo.addColumn("CD_PREFIX", "string");
           this.dsCombo.addColumn("CD_UPPREFIX", "string");

           this.dsCombo.addRow();
           this.dsCombo.setColumn(0, "TY_SEL", "P");
           this.dsCombo.setColumn(0, "CD_PREFIX", "GS");
           this.dsCombo.setColumn(0, "CD_UPPREFIX", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_SALARY=combo0";
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
            this.divSearch.form.cboTY_SALARY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.cboSN_SALARY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAU_AUTOSLIPCONCURRENT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
