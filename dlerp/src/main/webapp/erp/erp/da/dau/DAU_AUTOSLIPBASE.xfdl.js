(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAU_AUTOSLIPBASE");
            this.set_titletext("급여전표관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAUPR_SALARY_AUTOSLIPBASE_SELECT</Col></Row><Row><Col id=\"TARGET\">basecreate</Col><Col id=\"SP\">DAUPR_SALARY_AUTOSLIPBASE_CREATE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DAUPR_SALARY_AUTOSLIPBASE_CREATE</Col></Row><Row><Col id=\"TARGET\">aprvcnc</Col><Col id=\"SP\">DAUPR_SALARY_AUTOSLIPBASE_CANCEL</Col></Row><Row><Col id=\"TARGET\">aprv_execute</Col><Col id=\"SP\">DAUPR_AUTOSLIPBASE_APRV_EXECUTE</Col></Row><Row><Col id=\"TARGET\">slipDelete</Col><Col id=\"SP\">DAUPR_SALARY_AUTOSLIP_CANCEL</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsParamAuthForm", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_FORM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MODULE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsParamBtnInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_MODULE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_FORM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAuthForm", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBtnInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_BASE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("귀속년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_SALARY","staYM_BASE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.getSetter("AfterCDTextChanged").set("fnSearchInit");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclYM_SALARY:45","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_SALARY","0.0","staYM_BASE:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("지급구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_SALARY","staTY_SALARY:0.0","staYM_BASE:10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsTY_SALARY");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_readonly("false");
            obj.set_value("S");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSN_SALARY","cboTY_SALARY:5","staYM_BASE:10.0","50","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboSN_SALARY_innerdataset = new nexacro.NormalDataset("divSearch_form_cboSN_SALARY_innerdataset", obj);
            divSearch_form_cboSN_SALARY_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboSN_SALARY_innerdataset);
            obj.set_text("1");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","cboSN_SALARY:0.0","staCD_CORP:10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","staCD_CORP:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfCD_CORP:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("부서코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","staCD_CORP:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:5",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYM_SALARY.form.TextBox","value","dsSearch","YM_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboTY_SALARY","value","dsSearch","TY_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSN_SALARY","value","dsSearch","SN_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
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
        this.registerScript("DAU_AUTOSLIPBASE.xfdl", function() {
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
        	this.fnSetExtendButtonEnable(false);
        	this.fnSetCombo();

        	//귀속년월
        	this.ctclYM_SALARY.form.TextBox.set_value(this.gfnGetDate().substr(0,6));

        	// 법인코드 및 법인명 기본세팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
            this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	this.dsSearch.setColumn(0,"SN_SALARY","1");

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
        	//this.FormBtns.Reset.set_enable(true);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.BaseCreate = this.gfnFormButtonAdd("BaseCreate", "fnExtBtnEvent");		// 기초생성

        	this.btnAprv 	= this.gfnFormButtonAdd("btnAprv"   , "fnExtBtnEvent");		// 결재상신 버튼
        	this.btnAprvCnc	= this.gfnFormButtonAdd("btnAprvCnc", "fnExtBtnEvent");		// 지급품의 취소 버튼
        	this.btnDocQ    = this.gfnFormButtonAdd("btnDocQ"   , "fnExtBtnEvent");		// 결재문서조회 버튼
        	this.btnInit    = this.gfnFormButtonAdd("btnInit"   , "fnAprvInit");		// 결재상태초기화 버튼

        	this.AutoslipConcurrent	= this.gfnFormButtonAdd("AutoslipConcurrent", "fnExtBtnEvent");	// 겸직분할
        	this.AutoslipMain 		= this.gfnFormButtonAdd("AutoslipMain", "fnExtBtnEvent");		// 분할내역

        	this.btnSlip	= this.gfnFormButtonAdd("btnSlip", "fnExtBtnEvent");		// 전표발행
        	this.btnSlipCnc	= this.gfnFormButtonAdd("btnSlipCnc", "fnExtBtnEvent");		// 전표취소
        	this.btnSlipQ	= this.gfnFormButtonAdd("btnSlipQ", "fnExtBtnEvent");		// 전표조회

        	//this.btnAutoslipMainDept	= this.gfnFormButtonAdd("AutoslipMainDept", "fnExtBtnEvent", "부서현장별급여정보");
        	//this.btnSalaryAutoslipDlg = this.gfnFormButtonAdd("SalaryAutoslipDlg2", "fnExtBtnEvent", "사회보험전표발행");
        	//this.btnAutoOrder	= this.gfnFormButtonAdd("AutoOrder", "fnExtBtnEvent", "원가분할");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//귀속년월
        	this.ctclYM_SALARY = this.divSearch.form.ctclYM_SALARY;
        	//지급구분
        	this.cboTY_SALARY = this.divSearch.form.cboTY_SALARY;
        	this.cboSN_SALARY = this.divSearch.form.cboSN_SALARY;
        	//법인
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	//부서
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	//사번
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;

        	this.dxGrid = this.divData.form.objGrid;

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAU_AUTOSLIPBASE");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	// 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_SALARY", "string");
        	this.dsSelect.addColumn("TY_SALARY", "string");
        	this.dsSelect.addColumn("SN_SALARY", "int");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("CD_ORG2", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");

        	// 기초생성
        	this.dsBaseCreate = new Dataset();
        	this.dsBaseCreate.addColumn("CD_CORP", "string");
        	this.dsBaseCreate.addColumn("YM_SALARY", "string");
        	this.dsBaseCreate.addColumn("TY_SALARY", "string");
        	this.dsBaseCreate.addColumn("SN_SALARY", "int");
        	this.dsBaseCreate.addColumn("ID_USER", "string");
        	this.dsBaseCreate.addColumn("GR_SEARCH", "string");
        	this.dsBaseCreate.addColumn("GR_CORP", "string");

        	// 품의취소
        	this.dsAprvCnc = new Dataset();
        	this.dsAprvCnc.addColumn("CD_CORP", "string");
        	this.dsAprvCnc.addColumn("YM_SALARY", "string");
        	this.dsAprvCnc.addColumn("TY_SALARY", "string");
        	this.dsAprvCnc.addColumn("SN_SALARY", "int");
        	this.dsAprvCnc.addColumn("NO_APRV", "int");
        	this.dsAprvCnc.addColumn("ID_USER", "string");
        	this.dsAprvCnc.addColumn("GR_SEARCH", "string");
        	this.dsAprvCnc.addColumn("GR_CORP", "string");
        	this.dsAprvCnc.addColumn("ID_SABUN", "string");

        	this.dsSlip = new Dataset();
        	this.dsSlip.addColumn("CD_CORP", "string");
        	this.dsSlip.addColumn("YM_SALARY", "string");
        	this.dsSlip.addColumn("TY_SALARY", "string");
        	this.dsSlip.addColumn("SN_SALARY", "int");
        	this.dsSlip.addColumn("CD_TRADE", "string");
        	this.dsSlip.addColumn("CD_DEPT_BH", "string");
        	this.dsSlip.addColumn("ID_USER", "string");
        	// 결재
        	this.dsApproval = new Dataset();
        	this.dsApproval.addColumn("TY_WRK", "string");
        	this.dsApproval.addColumn("TY_SALARY", "string");
        	this.dsApproval.addColumn("YM_SALARY", "string");
        	this.dsApproval.addColumn("SN_SALARY", "int");
        	this.dsApproval.addColumn("ID_SABUN", "string");
        	this.dsApproval.addColumn("CD_CORP", "string");
        	this.dsApproval.addColumn("ID_APRV", "string");
        	this.dsApproval.addColumn("NO_APRV", "int");
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

        	this.dsList.clearData();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "YM_SALARY", this.dsSearch.getColumn(0, "YM_SALARY"));
        	this.dsSelect.setColumn(0, "TY_SALARY", this.dsSearch.getColumn(0, "TY_SALARY"));
        	this.dsSelect.setColumn(0, "SN_SALARY", this.dsSearch.getColumn(0, "SN_SALARY"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "CD_ORG2", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));

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
        //trace(this.dsSelect.saveXML());
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        //	this.gfnGridAdd(this.dxGrid);
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
        //	if (!this.gfnGridValidate(this.dxGrid)) return;

        //	this.dxGrid.updateToDataset();

        //	this.dsInsert.clearData();
        //	this.dsUpdate.clearData();
        //	this.dsDelete.clearData();

        //	for (var i = 0; i < this.dsList.rowcount; i++) {
        //		var flag = this.gfnGetFlag(this.dsList, i);
        //		switch(flag) {
        //			case "I":
        //				var nrow = this.dsInsert.addRow();

        //				this.dsInsert.setColumn(nrow, "TY_SAVE", flag);
        //				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        //				break;
        //			case "U":
        //				var nrow = this.dsUpdate.addRow();

        //				this.dsUpdate.setColumn(nrow, "TY_SAVE", flag);
        //				this.dsUpdate.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        //				break;
        //			case "D":
        //				var nrow = this.dsDelete.addRow();

        //				this.dsDelete.setColumn(nrow, "TY_SAVE", flag);
        //				this.dsDelete.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        //				break;
        //		}
        //	}

        //	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        //	var strSvcId    = "save";
        //	var strSvcType  = "save";
        //	var inProc		= "_dsProc";
        //	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
        //	var outData     = "";
        //	var strArg      = "";
        //	var callBackFnc = "fnCallback";

        //	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        //						strSvcType , 	// transaction을 요청할 구분
        //						inProc,			// Procedure 정보 Dataset 이름
        //						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        //						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        //						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        //						callBackFnc); // 통신방법 정의 [생략가능]
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

        	//귀속년월
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
        		this.gfnAlert("귀속년월을 입력하세요.", "fnVaidateCallback");
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
        		this.fnSetExtendButtonEnable();

        	}else if(svcID == "save" || svcID == "BaseCreate" || svcID == "AprvCnc" ) {	 // 저장 / 기초생성 / 품의취소
        		if (errorCode == 0) {
        			this.gfnAlert("작업이 완료되었습니다.");
        			this.dsList.clearData();
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        // 	}else if (svcID == "authform") {
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
        	}else if(svcID == "slipDelete"){
        		if (errorCode == 0) {
        			this.gfnAlert("전표가 취소되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "combo") {
        		this.divSearch.form.cboTY_SALARY.set_index(0);	// 급여 선택
        	} else if (svcID == "APRV") {	// || svcID == "APRVCNC") {
        		this.gfnOpenAppr(function() {
        			this.FormBtns.Select.click();
        		});
        	} else if (svcID == "APRVINIT") {
        		this.FormBtns.Select.click();
        	}

        	this.fnSetButton();
        }

        // 기초생성
        this.fnBaseCreate_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsBaseCreate.clearData();
        		this.dsBaseCreate.addRow();

        		this.dsBaseCreate.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsBaseCreate.setColumn(0, "YM_SALARY", this.dsSearch.getColumn(0, "YM_SALARY"));
        		this.dsBaseCreate.setColumn(0, "TY_SALARY", this.dsSearch.getColumn(0, "TY_SALARY"));
        		this.dsBaseCreate.setColumn(0, "SN_SALARY", this.dsSearch.getColumn(0, "SN_SALARY"));
        		this.dsBaseCreate.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        		this.dsBaseCreate.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		this.dsBaseCreate.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);

        		var strSvcId    = "BaseCreate";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "basecreate=dsBaseCreate";
        		var outData     = "";
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
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;

        		case "ccfCD_DEPT"://부서코드
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.fnBeforeUserCallback = function() {
        					this.ccfCD_CORP.form.CDTextBox.setFocus();
        				}
        				this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "GR_SEARCH",  this.FormInfo.GR_SEARCH);	// 사용자 권한
        			dsUserParam.setColumn(nrow, "CD_DEPT",  this.AuthClient.CD_DEPT);	// 로그인부서
        			dsUserParam.setColumn(nrow, "CD_CORP",  this.ccfCD_CORP.form.CDTextBox.value);	// 조회조건에 있는 소속법인
        			dsUserParam.setColumn(nrow, "YN_CURRENT",  "Y");

        			break;

        		case "ccfID_SABUN": //사번
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.fnBeforeUserCallback = function() {
        					this.ccfCD_CORP.form.CDTextBox.setFocus();
        				}
        				this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        				return false;
        			}

        			if (this.gfnIsNull(this.ccfCD_DEPT.form.CDTextBox.value)) {
        				this.fnBeforeUserCallback = function() {
        					this.ccfCD_DEPT.form.CDTextBox.setFocus();
        				}
        				this.gfnAlert("부서코드를 입력하세요.", "fnBeforeUserCallback");
        				return false;
        			}
         			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.ccfCD_DEPT.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "YN_CORP", "N");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");   // 재직구분
        			break;

        		default:
         	}

         	return true;
        }


        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfCD_CORP"){
        		this.ccfCD_DEPT.form.CDTextBox.set_value("");
        		this.ccfCD_DEPT.form.DSTextBox.set_value("");
        		this.ccfID_SABUN.form.CDTextBox.set_value("");
        		this.ccfID_SABUN.form.DSTextBox.set_value("");
        		//this.edtID_PERSON.set_value("");
        	}else if(id == "ccfCD_DEPT" ){
        // 		this.ccfCD_CORP.form.CDTextBox.set_value(arr[0]["CD_CORP"]);
        // 		this.ccfCD_CORP.form.DSTextBox.set_value(arr[0]["DS_CORP"]);
        		this.ccfID_SABUN.form.CDTextBox.set_value("");
        		this.ccfID_SABUN.form.DSTextBox.set_value("");
        		//this.edtID_PERSON.set_value("");
        	}else if(id == "ccfID_SABUN") {
        		//this.ccfCD_CORP.form.CDTextBox.set_value(arr[0]["CD_CORP"]);
        		//this.ccfCD_CORP.form.DSTextBox.set_value(arr[0]["DS_CORP"]);
        		//this.ccfCD_DEPT.form.CDTextBox.set_value(arr[0]["CD_DEPT"]);
        		//this.ccfCD_DEPT.form.DSTextBox.set_value(arr[0]["DS_DEPT"]);
        		/*
        		if(arr.length > 0) {
        			this.edtID_PERSON.set_value(arr[0]["ID_PERSON"]);
        		}else{
        			this.edtID_PERSON.set_value("");
        		}
        		*/
        	}
        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
         this.fnExtBtnEvent = function(btn){

        	var param = {};
        	var btnUrl;
        	switch(btn.id){
        		case "btnExt_BaseCreate": //기초생성
        			this.fnBaseCreate();
        			break;
        		case "btnExt_btnAprv": //결재상신(지급품의)
        			this.fnAprv();
        			break;
        		case "btnExt_btnAprvCnc": //지급품의취소
        			this.gfnConfirm("지급품의를 취소 하시겠습니까?", "fnAprvCnc");
        			//this.fnAprvCnc();
        			break;
        		case "btnExt_btnDocQ": //결재문서조회
        			this.fnAprvDocQ();
        			break;
        		case "btnExt_btnInit": //결재상태초기화
        			this.fnAprvInit();
        			break;
        		case "btnExt_AutoOrder": //원가분할
        			param ={};

        			param.YM_SALARY = this.dsSearch.getColumn(0,"YM_SALARY");
        			param.TY_SALARY = this.dsSearch.getColumn(0,"TY_SALARY");
        			param.SN_SALARY = this.dsSearch.getColumn(0,"SN_SALARY");
        			param.CD_CORP = this.dsSearch.getColumn(0,"CD_CORP");
        			param.DS_CORP = this.dsSearch.getColumn(0,"DS_CORP");

        			btnUrl = "DAU_AUTOORDER";
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, btnUrl, "", param);

        			break;
        		case "btnExt_AutoslipConcurrent": //겸직분할
        			param ={};

        			param.YM_SALARY = this.dsSearch.getColumn(0,"YM_SALARY");
        			param.TY_SALARY = this.dsSearch.getColumn(0,"TY_SALARY");
        			param.SN_SALARY = this.dsSearch.getColumn(0,"SN_SALARY");
        			param.CD_CORP = this.dsSearch.getColumn(0,"CD_CORP");
        			param.DS_CORP = this.dsSearch.getColumn(0,"DS_CORP");
        			param.CD_DEPT = this.dsSearch.getColumn(0,"CD_DEPT");
        			param.DS_DEPT = this.dsSearch.getColumn(0,"DS_DEPT");
        			param.ID_SABUN = this.dsSearch.getColumn(0,"ID_SABUN");
        			param.DS_HNAME = this.dsSearch.getColumn(0,"DS_SABUN");
        			btnUrl = "DAU_AUTOSLIPCONCURRENT";
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, btnUrl, "겸직분할", param);

        			break;
        		case "btnExt_AutoslipMain": //분할내역
        			param ={};
        			param.YM_SALARY = this.dsSearch.getColumn(0,"YM_SALARY");
        			param.TY_SALARY = this.dsSearch.getColumn(0,"TY_SALARY");
        			param.SN_SALARY = this.dsSearch.getColumn(0,"SN_SALARY");
        			param.CD_CORP = this.dsSearch.getColumn(0,"CD_CORP");
        			param.DS_CORP = this.dsSearch.getColumn(0,"DS_CORP");

        			btnUrl = "DAU_AUTOSLIPMAIN";
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, btnUrl, "분할내역", param);

        			break;
        		case "btnExt_AutoslipMainDept": //부서현장별급여정보
        			btnUrl = "DAU_AUTOSLIPMAIN_DEPT";
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, btnUrl, "부서현장별급여정보", param);

        			break;
        		case "btnExt_btnSlip": //급여전표발행
        			var param = {};
        			param.YM_SALARY = this.dsSearch.getColumn(0, "YM_SALARY");
        			param.TY_SALARY = this.dsSearch.getColumn(0, "TY_SALARY");
        			param.SN_SALARY = this.dsSearch.getColumn(0, "SN_SALARY");
        			param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        			param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;
        			param.CD_DEPT_INSA = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_INSA");
        			param.DS_DEPT_INSA = this.dsList.getColumn(this.dsList.rowposition, "DS_DEPT_INSA");
        			param.DT_SALARY = this.dsList.getColumn(this.dsList.rowposition, "DT_SALARY");

        			btnUrl = "DAU_AUTOSLIPMAIN_ISSUE";	//"DAU_SALARYAUTOSLIP_DLG";
        			this.gfnFormOpen(this.FormInfo.CD_MODULE, btnUrl, "fnPopupCallback", param);

        			break;
        		case "btnExt_SalaryAutoslipDlg2": //사회보험전표발행
        			btnUrl = "DAU_SALARYAUTOSLIP_DLG";

        			break;

        		case "btnExt_btnSlipCnc": //전표취소

        			var nCnt = this.dsList.rowcount;
        			if( nCnt == 0) {
        				this.gfnAlert("취소할 전표가 없습니다.");
        				return;
        			}
        			if( nCnt == 1 && this.dsList.getColumn(0, this.ucFlag) == "#"){
        				this.gfnAlert("취소할 전표가 없습니다.");
        				return;
        			}

        			this.gfnConfirm("전표를 취소 하시겠습니까?", "fnSlipCancel");

        			break;

        		case "btnExt_btnSlipQ": //전표조회
        			if( !this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE")) ){
        				var param = {};
        				btnUrl = "DHA_ISSUESLIP";
        				param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition,"CD_TRADE");
        				param.IUD_FLAG = "S";

        				this.gfnFormOpen("DHA", btnUrl, "", param);

        			}
        			break;
        		default:
        	}

        	//this.gfnFormOpen(this.FormInfo.CD_MODULE, btnUrl, "", param);
         };

        //기초생성
        this.fnBaseCreate = function () {
        	var nrow = this.dsList.rowposition;

        	if (this.dsList.getColumn(nrow, "BTN_APRV") == "N")
        	{
        		this.gfnAlert("지급 품의가 상신되었습니다.");
        		return;
        		//this.BaseCreate.set_enable(this.dsList.getColumn(nrow, "BTN_APRV") == "Y");	// 기초생성
        		//this.BaseCreate.set_enable(false);
        	}
        	this.gfnConfirm("기초정보를 생성하시겠습니까? \n이전에 작업된 기초정보는 삭제됩니다.", "fnBaseCreate_callback");

        };

        // 결재상신 버튼
        this.fnAprv = function(obj, e) {
        	if (this.dsSearch.getColumn(0,"TY_SALARY") == "R")
        	{
        		var param = {};
        		param.YM_SALARY = this.dsSearch.getColumn(0,"YM_SALARY");
        		param.CD_CORP = this.dsSearch.getColumn(0,"CD_CORP");
        		param.TY_SALARY = this.dsSearch.getColumn(0,"TY_SALARY");
        		param.SN_SALARY = this.dsSearch.getColumn(0,"SN_SALARY");
        		param.ID_SABUN = this.dsList.getColumn(this.dsList.rowposition,"ID_SABUN");

        		btnUrl = "DAU_SALARYAPRV_RETIRE_DLG";
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, btnUrl, "fnPopupCallback", param);

        // 		if (!this.gfnGridIsRow(this.dxGrid)) return;
        // 		var msg = "퇴직급여 지급 품의서에 대하여 결재상신 하시겠습니까?\n";
        // 		this.gfnConfirm(msg, function(strId, isOk) {
        // 			if (isOk == false) {
        // 				return;
        // 			}
        // 			var title = this.dsList.getColumn(this.dsList.rowposition, "DS_TITLE");
        // 			//var title = "퇴직급여 지급의 건(" + this.dsList.getColumn(nrow, "DS_HNAME") + ")";
        //
        // 			var initParam = {
        // 				CD_CORP: this.dsSearch.getColumn(0, "CD_CORP"),
        // 				ID_AP_TYPE: "DAW02",
        // 				TY_WRK: "APRV",
        // 				ID_APRV: this.AuthClient.ID_SABUN,
        // 				TT_DOC: title,	// 퇴직급여 지급의 건(홍길동 차장)
        // 				CD_CORP_SUFFIX: this.gfnGetConfig("DZ" , "CD_CORP_SUFFIX"),
        // 			}
        // 			this.gfnAprv(initParam, "fnAprvCallback", "APRV");
        // 		});
        	}
        	else
        	{
        		var param = {};
        		param.YM_SALARY = this.dsSearch.getColumn(0,"YM_SALARY");
        		param.CD_CORP = this.dsSearch.getColumn(0,"CD_CORP");
        		param.TY_SALARY = this.dsSearch.getColumn(0,"TY_SALARY");
        		param.SN_SALARY = this.dsSearch.getColumn(0,"SN_SALARY");
        		param.ID_SABUN = this.dsSearch.getColumn(0,"ID_SABUN");

        		//btnUrl = "DAU_AUTOSLIPBASE_APRV";
        		btnUrl = "DAU_SALARYAPRV_DLG";
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, btnUrl, "fnPopupCallback", param);
        	}

        // 	if (!this.gfnGridIsRow(this.dxGrid)) return;
        //
        // 	this.gfnConfirm(this.fnAprvMsg(obj), function(strId, isOk) {
        // 		if (isOk == false) {
        // 			return;
        // 		}
        //
        // 		var initParam = {
        // 			CD_CORP: this.dsSearch.getColumn(0, "CD_CORP"),
        // 			ID_AP_TYPE: "DAU01",
        // 			TY_WRK: "APRV",
        // 			ID_APRV: this.AuthClient.ID_SABUN,
        // 			TT_DOC: "'" + this.dsSearch.getColumn(0, "YM_SALARY") + "년 " + this.dsSearch.getColumn(0, "MM_SALARY") + "월",
        // 			//TT_DOC: "급여 지급 품의서 (" + this.dsSearch.getColumn(0, "YY_TUITION") + "년도 " + this.dsSearch.getColumn(0, "CD_TUITION").replace("0", "") + "분기)",
        // 		}
        // 		this.gfnAprv(initParam, "fnAprvCallback", "APRV");
        // 	});
        }

        /*
          *	지급품의 취소
          */
        this.fnAprvCnc = function(svcID, value){

        	if(value == true) {
        		this.dsAprvCnc.clearData();
        		this.dsAprvCnc.addRow();

        		this.dsAprvCnc.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsAprvCnc.setColumn(0, "YM_SALARY", this.dsSearch.getColumn(0, "YM_SALARY"));
        		this.dsAprvCnc.setColumn(0, "TY_SALARY", this.dsSearch.getColumn(0, "TY_SALARY"));
        		this.dsAprvCnc.setColumn(0, "SN_SALARY", this.dsSearch.getColumn(0, "SN_SALARY"));
        		this.dsAprvCnc.setColumn(0, "NO_APRV", this.dsList.getColumn(this.dsList.rowposition, "NO_APRV"));
        		this.dsAprvCnc.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        		this.dsAprvCnc.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		this.dsAprvCnc.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);
        		this.dsAprvCnc.setColumn(0, "ID_SABUN", this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"));

        		var strSvcId    = "AprvCnc";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "aprvcnc=dsAprvCnc";
        		var outData     = "";
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

        };

        // 결재문서조회 버튼
        this.fnAprvDocQ = function(obj, e) {
        	var oParams = {
        		CD_CORP: this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"),
        		NO_APRV: this.dsList.getColumn(this.dsList.rowposition, "NO_APRV"),
        	}
        	this.gfnAprvDoc(oParams, this.fnAprvDocQCallback);
        }

        this.fnAprvDocQCallback = function() {
        	console.log('fnAprvDocQCallback');
        	alert('fnAprvDocQCallback');
        }

        // 결재상태초기화 버튼
        this.fnAprvInit = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	var msg = "급여품의서에 대하여 " + obj.text + "하시겠습니까?\n";
        	this.gfnConfirm(msg, "fnAprvCallback", "APRVINIT");
        }

        this.fnAprvCallback = function(strId, val) {
        	this.dsApproval.clearData();
        	this.dsApproval.addRow();

        	this.dsApproval.setColumn(0, "TY_WRK",  strId);
        	this.dsApproval.setColumn(0, "TY_SALARY", this.dsSearch.getColumn(0, "TY_SALARY"));
        	this.dsApproval.setColumn(0, "YM_SALARY", this.dsSearch.getColumn(0, "YM_SALARY"));
        	this.dsApproval.setColumn(0, "SN_SALARY", this.dsSearch.getColumn(0, "SN_SALARY"));
        	this.dsApproval.setColumn(0, "ID_SABUN", this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"));
        	this.dsApproval.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsApproval.setColumn(0, "ID_APRV", this.AuthClient.ID_SABUN);
        	if (strId == "APRV" || strId == "APRVCNC") {
        		this.dsApproval.setColumn(0, "NO_APRV", this.dsAprvOut.getColumn(0, "NO_APRV"));
        	} else {
        		this.dsApproval.setColumn(0, "NO_APRV", this.dsList.getColumn(this.dsList.rowposition, "NO_APRV"));
        	}
        //
        // 	this.dsApproval.setColumn(0, "TY_WRK",  strId);
        // 	this.dsApproval.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        // 	this.dsApproval.setColumn(0, "ID_PERSON", this.dsList.getColumn(this.dsList.rowposition, "ID_PERSON"));
        // 	this.dsApproval.setColumn(0, "NO_SEQ"	, this.dsList.getColumn(this.dsList.rowposition, "NO_SEQ"));
        // 	this.dsApproval.setColumn(0, "ID_APRV", this.AuthClient.ID_SABUN);
        // 	this.dsApproval.setColumn(0, "NO_APRV", this.dsList.getColumn(this.dsList.rowposition, "NO_APRV"));

        	var strSvcId    = strId;
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "aprv_execute=dsApproval";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }
        /*
          *	전표취소
          */
        this.fnSlipCancel = function(svcID, value){

        	if(value) {
        		this.gfnGridBeforeSelect(this.dxGrid);
                var idx = 0;
        		if(this.dsList.rowcount > 1) idx = 1;
        		if(this.gfnIsNull(this.dsList.getColumn(idx, "CD_TRADE"))){
        			this.gfnAlert("전표가 생성된 건만 전표취소 가능합니다.");
        			return;
        		}

        		this.dsSlip.clearData();
        		this.dsSlip.addRow();

        		this.dsSlip.setColumn(0, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));
        		this.dsSlip.setColumn(0, "YM_SALARY", this.dsList.getColumn(this.dsList.rowposition, "YM_SALARY"));
        		this.dsSlip.setColumn(0, "TY_SALARY", this.dsList.getColumn(this.dsList.rowposition, "TY_SALARY"));
        		this.dsSlip.setColumn(0, "SN_SALARY", this.dsList.getColumn(this.dsList.rowposition, "SN_SALARY"));
        		this.dsSlip.setColumn(0, "CD_TRADE", this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"));
        		this.dsSlip.setColumn(0, "CD_DEPT_BH", this.AuthClient.CD_DEPT);
        		this.dsSlip.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        // 		this.dsSlip.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        // 		this.dsSlip.setColumn(0, "YM_SALARY", this.dsSearch.getColumn(0, "YM_SALARY"));
        // 		this.dsSlip.setColumn(0, "TY_SALARY", this.dsSearch.getColumn(0, "TY_SALARY"));
        // 		this.dsSlip.setColumn(0, "SN_SALARY", this.dsSearch.getColumn(0, "SN_SALARY"));
        // 		this.dsSlip.setColumn(0, "TY_AUTOSLIP", "");
        		//this.dsSlip.setColumn(0, "CD_TRADE", this.dsList.getColumn(idx, "CD_TRADE"));

        		var strSvcId    = "slipDelete";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "slipDelete=dsSlip";
        		var outData     = "";
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

        };

         /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         this.dsSearch_onvaluechanged = function(obj, e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        }
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {

        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.fnSetButton();
        		this.dsList.clearData();
        	}
        };

        /*
         *	확장버튼 활성화 여부
         */
        this.fnSetExtendButtonEnable = function(bEnable){
        	var nrow = this.dsList.rowposition;

        	//this.BaseCreate.set_enable(false);
        	this.btnAprv.set_enable(true);
        	this.btnAprvCnc.set_enable(false);
        	this.btnDocQ.set_enable(false);
        	this.btnInit.set_enable(false);
        	this.btnSlip.set_enable(false);
        	this.btnSlipCnc.set_enable(false);
        	this.btnSlipQ.set_enable(false);

        	//this.BaseCreate.set_enable(this.dsList.getColumn(nrow, "BTN_APRV") == "Y");	// 기초생성
        	if (nrow == 0)
        	{
        		this.btnAprv.set_enable(false);
        		//this.btnAprv.set_enable(this.dsList.getColumn(nrow, "BTN_APRV") == "Y");	// 결재상신
        	}

        // 	if (this.dsSearch.getColumn(0,"TY_SALARY") == "R")
        // 	{
        // 		this.btnAprv.set_enable(this.dsList.getColumn(nrow, "BTN_APRV") == "Y");	// 결재상신
        // 	}

        	this.btnAprvCnc.set_enable(this.dsList.getColumn(nrow, "BTN_APRV_CNC") == "Y");	// 지급품의 취소
        	this.btnDocQ.set_enable(this.dsList.getColumn(nrow, "BTN_DOC_Q") == "Y");	// 결재문서조회
         	this.btnInit.set_enable(this.dsList.getColumn(nrow, "BTN_INIT") == "Y"); 	// 결재상태초기화

        	this.btnSlip.set_enable(this.dsList.getColumn(nrow, "BTN_SLIP") == "Y");	// 전표발행
        	this.btnSlipCnc.set_enable(this.dsList.getColumn(nrow, "BTN_SLIP") != "Y" && this.dsList.getColumn(nrow, "CD_TRADE") != undefined);	// 전표취소
        	this.btnSlipQ.set_enable(this.dsList.getColumn(nrow, "BTN_SLIP_Q") == "Y" && this.dsList.getColumn(nrow, "CD_TRADE") != undefined);	// 전표조회
        };

        //팝업 콜백
        this.fnPopupCallback = function(strId, val) {
        	//전표발행
        	if(strId.indexOf("DAU_AUTOSLIPMAIN_ISSUE") > 0) {
        		if(!this.gfnIsNull(val) && val == true){
        			this.gfnAlert( "전표발행 정상 처리되었습니다.");
        			this.FormBtns.Select.click();
        		}
        	} else if(strId.indexOf("DAU_SALARYAPRV_RETIRE_DLG") > 0) {
        		if(!this.gfnIsNull(val) && val == true){
        			this.FormBtns.Select.click();
        		}
        	}
        };



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
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAU_AUTOSLIPBASE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
