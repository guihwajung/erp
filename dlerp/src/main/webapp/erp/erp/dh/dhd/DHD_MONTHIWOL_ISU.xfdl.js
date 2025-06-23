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
            this.set_titletext("자료이관");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHDPR_MONTHIWOL_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHDPR_MONTHIWOL_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHDPR_MONTHIWOL_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHDPR_MONTHIWOL_DELETE</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DHDPR_MAGAM_MONTHIWOL</Col></Row><Row><Col id=\"TARGET\">userinfo</Col><Col id=\"SP\">DZZPR_USERINFO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListExcel", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta00:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","sta01:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("회계년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_MAGAM","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("계정코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACCOUNT","sta00:0.0","sta00:10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNT_SLIP_AND_TRIAL");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
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

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclYM_MAGAM.form.TextBox","value","dsSearch","YM_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_ACCOUNT.form.CDTextBox","value","dsSearch","CD_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_ACCOUNT.form.DSTextBox","value","dsSearch","DS_ACCOUNT");
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
        this.registerScript("DHD_MONTHIWOL_ISU.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.CD_CORP;
        this.strLevel;
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
        	this.ccfCD_CORP.setFocus();
        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);
        	this.dsSearch.setColumn(0, "YM_ACCOUNT", this.gfnGetDate().substr(0,6));
        	//this.dsSearch.setColumn(0, "YM_ACCOUNT", "202012");
        	//this.dsSearch.setColumn(0, "CD_DEPT_ACNT", this.dsUserInfo.getColumn(0, "LEVCD_DEPT_ACNT_DOWN"));
        	//if (!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_ACNT"))){
        	//	this.ccfCD_DEPT.form.fnCodeFindLoad();
        	//}
        };

        /************************************************************************
        * 버튼 설정 : 화면(Tab) 전환시 마다 호출
        * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
        ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        }

        /************************************************************************
        * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
        ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnMonthSave = this.gfnFormButtonAdd("MonthSave", "fnMonthSave"); 	 //이관자료생성
        	this.btnMonthSave2 = this.gfnFormButtonAdd("MonthSave2", "fnMonthSave2"); //이관자료업로드
        };

        /************************************************************************
        * 변수 선언
        ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP 	 = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT 	 = this.divSearch.form.ccfCD_DEPT;
        	this.ccfCD_ACCOUNT 	 = this.divSearch.form.ccfCD_ACCOUNT;
        	this.ctclYM_MAGAM  = this.divSearch.form.ctclYM_MAGAM;
        	this.dxGrid 		 = this.divData.form.objGrid;
        };

        /************************************************************************
        * 이벤트 설정
        ************************************************************************/
        this.fnSetEvent = function() {

         	this.ccfCD_DEPT.CodeFindName = "DHX_CFACNTUNIT";	// DHX_CFBALANCE_ACNTUNIT

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACCOUNT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHD_MONTHIWOL_ISU");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        };

        /************************************************************************
        * 파라미터 설정
        ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("YM_ACCOUNT", "string");
        	this.dsSelect.addColumn("CD_ACCOUNT", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_DEPT_ACNT", "string");
        	this.dsInsert.addColumn("YM_ACCOUNT", "string");
        	this.dsInsert.addColumn("CD_ACCOUNT", "string");
        	this.dsInsert.addColumn("NO_SEQ", "string");
        	this.dsInsert.addColumn("TY_VENDOR", "string");
        	this.dsInsert.addColumn("CD_VENDOR", "string");
        	this.dsInsert.addColumn("DS_VENDOR", "string");
        	this.dsInsert.addColumn("NO_REF", "string");
        	this.dsInsert.addColumn("AM_DACCOUNT", "string");
        	this.dsInsert.addColumn("AM_CACCOUNT", "string");
        	this.dsInsert.addColumn("DS_REM", "string");
        	this.dsInsert.addColumn("TY_ETC1", "string");
        	this.dsInsert.addColumn("CD_ETC1", "string");
        	this.dsInsert.addColumn("DS_ETC1", "string");
        	this.dsInsert.addColumn("TY_ETC2", "string");
        	this.dsInsert.addColumn("CD_ETC2", "string");
        	this.dsInsert.addColumn("DS_ETC2", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_DEPT_ACNT", "string");
        	this.dsUpdate.addColumn("YM_ACCOUNT", "string");
        	this.dsUpdate.addColumn("CD_ACCOUNT", "string");
        	this.dsUpdate.addColumn("NO_SEQ", "string");
        	this.dsUpdate.addColumn("TY_VENDOR", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("DS_VENDOR", "string");
        	this.dsUpdate.addColumn("NO_REF", "string");
        	this.dsUpdate.addColumn("AM_DACCOUNT", "bigdecimal");
        	this.dsUpdate.addColumn("AM_CACCOUNT", "bigdecimal");
        	this.dsUpdate.addColumn("DS_REM", "string");
        	this.dsUpdate.addColumn("TY_ETC1", "string");
        	this.dsUpdate.addColumn("CD_ETC1", "string");
        	this.dsUpdate.addColumn("DS_ETC1", "string");
        	this.dsUpdate.addColumn("TY_ETC2", "string");
        	this.dsUpdate.addColumn("CD_ETC2", "string");
        	this.dsUpdate.addColumn("DS_ETC2", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("SEQ", "bigdecimal");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_DEPT_ACNT", "string");
        	this.dsDelete.addColumn("YM_ACCOUNT", "string");
        	this.dsDelete.addColumn("CD_ACCOUNT", "string");
        	this.dsDelete.addColumn("NO_SEQ", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("INCD_DEPT_ACNT", "string");
        	this.dsExec.addColumn("INYM_MAGAM", "string");
        	this.dsExec.addColumn("INID_TRANS", "string");

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

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(0, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        	this.dsSelect.setColumn(0, "CD_ACCOUNT", this.dsSearch.getColumn(0, "CD_ACCOUNT"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	//this.dsSelect.setColumn(0, "CD_CORP", "");

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

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nRow = this.gfnGridAdd(this.dxGrid);
        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(nRow, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        	this.dsList.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0,"CD_CORP"));
        	this.dsList.setColumn(nrow, "DS_CORP"  , this.dsSearch.getColumn(0,"DS_CORP"));
        	this.dsList.set_enableevent(true);
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
        	this.dxGrid.updateToDataset();
        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));
        				this.dsInsert.setColumn(nrow, "YM_ACCOUNT", this.dsList.getColumn(i, "YM_ACCOUNT"));
        				this.dsInsert.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(i, "CD_ACCOUNT"));
        				this.dsInsert.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsInsert.setColumn(nrow, "TY_VENDOR", this.dsList.getColumn(i, "TY_VENDOR"));
        				this.dsInsert.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsInsert.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        				this.dsInsert.setColumn(nrow, "NO_REF", this.dsList.getColumn(i, "NO_REF"));
        				this.dsInsert.setColumn(nrow, "AM_DACCOUNT", this.gfnIsNull(this.dsList.getColumn(i, "AM_DACCOUNT")) ? "0" : this.dsList.getColumn(i, "AM_DACCOUNT"));
        				this.dsInsert.setColumn(nrow, "AM_CACCOUNT", this.gfnIsNull(this.dsList.getColumn(i, "AM_CACCOUNT")) ? "0" : this.dsList.getColumn(i, "AM_CACCOUNT"));
        				this.dsInsert.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        				this.dsInsert.setColumn(nrow, "TY_ETC1", this.dsList.getColumn(i, "TY_ETC1"));
        				this.dsInsert.setColumn(nrow, "CD_ETC1", this.dsList.getColumn(i, "CD_ETC1"));
        				this.dsInsert.setColumn(nrow, "DS_ETC1", this.dsList.getColumn(i, "DS_ETC1"));
        				this.dsInsert.setColumn(nrow, "TY_ETC2", this.dsList.getColumn(i, "TY_ETC2"));
        				this.dsInsert.setColumn(nrow, "CD_ETC2", this.dsList.getColumn(i, "CD_ETC2"));
        				this.dsInsert.setColumn(nrow, "DS_ETC2", this.dsList.getColumn(i, "DS_ETC2"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));
        				this.dsUpdate.setColumn(nrow, "YM_ACCOUNT", this.dsList.getColumn(i, "YM_ACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(i, "CD_ACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsUpdate.setColumn(nrow, "TY_VENDOR", this.dsList.getColumn(i, "TY_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList.getColumn(i, "CD_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "NO_REF", this.dsList.getColumn(i, "NO_REF"));
        				this.dsUpdate.setColumn(nrow, "AM_DACCOUNT", this.gfnIsNull(this.dsList.getColumn(i, "AM_DACCOUNT")) ? "0" : this.dsList.getColumn(i, "AM_DACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "AM_CACCOUNT", this.gfnIsNull(this.dsList.getColumn(i, "AM_CACCOUNT")) ? "0" : this.dsList.getColumn(i, "AM_CACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "DS_REM", this.dsList.getColumn(i, "DS_REM"));
        				this.dsUpdate.setColumn(nrow, "TY_ETC1", this.dsList.getColumn(i, "TY_ETC1"));
        				this.dsUpdate.setColumn(nrow, "CD_ETC1", this.dsList.getColumn(i, "CD_ETC1"));
        				this.dsUpdate.setColumn(nrow, "DS_ETC1", this.dsList.getColumn(i, "DS_ETC1"));
        				this.dsUpdate.setColumn(nrow, "TY_ETC2", this.dsList.getColumn(i, "TY_ETC2"));
        				this.dsUpdate.setColumn(nrow, "CD_ETC2", this.dsList.getColumn(i, "CD_ETC2"));
        				this.dsUpdate.setColumn(nrow, "DS_ETC2", this.dsList.getColumn(i, "DS_ETC2"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "SEQ", this.dsList.getColumn(i, "SEQ"));
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));
        				this.dsDelete.setColumn(nrow, "YM_ACCOUNT", this.dsList.getColumn(i, "YM_ACCOUNT"));
        				this.dsDelete.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(i, "CD_ACCOUNT"));
        				this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
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
        	var validate = true;
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.text)) {
        		this.gfnAlert("법인코드가 입력되지 않았습니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		validate = false;
        	}
        // 	if (this.gfnIsNull(this.ccfCD_DEPT.form.CDTextBox.value)) {
        // 		this.gfnAlert("귀속부서가 입력되지 않았습니다.");
        // 		this.ccfCD_DEPT.form.CDTextBox.setFocus();
        // 		validate = false;
        // 	}
        	if (this.gfnIsNull(this.ctclYM_MAGAM.form.TextBox.value)) {
        		this.gfnAlert("회계년월이 입력되지 않았습니다.");
        		this.ctclYM_TOMAGAM.form.TextBox.setFocus();
        		validate = false;
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
        	switch(svcID) {
        	case "select":
        		this.gfnGridAfterSelect(this.dxGrid);
        		break;
        	case "save":
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "exec":
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        			this.gfnAlert("잔액자료생성이 완료되었습니다.");
        		}else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	}
        }

        /************************************************************************
        * 코드파인드 이벤트
        ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var sCdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        		//dsUserParam.setColumn(nrow, "LEVEL", this.dsUserInfo.LEVLV_DEPT_ACNT);
        		//dsUserParam.setColumn(nrow, "ACNTUNIT", this.dsUserInfo.LEVCD_DEPT_ACNT);
        	}
        	if (id == "ccfCD_DEPT") {
        		var cdCorp = this.ccfCD_CORP.form.CDTextBox.text;
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, sCdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER"	, sCdCorp);						//
        		//dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        		//dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        		//dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);

        // 		dsUserParam.setColumn(nrow, "LEVEL", this.dsUserInfo.LEVLV_DEPT_ACNT);
        // 		dsUserParam.setColumn(nrow, "ACNTUNIT", this.dsUserInfo.LEVCD_DEPT_ACNT);
        // 		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        // 		dsUserParam.setColumn(nrow, "CD_CORP", "");
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	switch(id) {
        	case "ccfCD_CORP":	//법인코드
        		this.ccfCD_DEPT.form.fnCodeFindClear();
        		break;
        	case "ccfCD_DEPT": // 회계단위
        		var arr = codeFindData;
        		if (arr.length > 0) {
        			strLevel = arr[0]["LV_DEPT_ACNT"];
        			cd_corp = arr[0]["CD_CORP"];
        			this.dsSearch.setColumn(0, "YM_MAGAM", arr[0]["YM_MAGAM_MONTH1"]);
        			this.dsSearch.setColumn(0, "YM_MAGAM2", arr[0]["YM_MAGAM_MONTH1"]);
        		}
        		break;
        	}
        }
        /************************************************************************
        * 그리드 이벤트
        ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	var sCdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	var sCdDept = this.dsSearch.getColumn(0, "CD_DEPT_ACNT");
        	switch(id) {
        		case "DHX_CFACNTUNIT":     // 귀속부서
        			if(this.gfnIsNull(sCdCorp)){
        				this.gfnAlert("법인코드를 선택하세요.");
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, sCdCorp);					//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        			dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER"	, sCdCorp);
        			//dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        			//dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        			//dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        		break;

        		case "DHX_CFACNTSITE":     // 계정코드
        			dsUserParam.setColumn(nrow, "CD_DEPT_BE", this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_ACNT"));
        			//dsUserParam.setColumn(nrow, "CD_DEPT_BE" , sCdDept);
        		break;

        		case "DHX_CFALLVENDOR_CODEFIND":     // 거래처코드
        			dsUserParam.setColumn(nrow, "CD_CORP" , sCdCorp);
        		break;
        		default:
        	}
        	return true;

        };
        /************************************************************************
        * 기타 이벤트
        ************************************************************************/
         this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        //이관자료생성
        this.fnMonthSave = function (obj,e)
        {

        	this.gfnConfirm("이관자료 생성하시겠습니까?", "fnMonthSave_callback");
        };

        this.fnMonthSave_callback = function(strId, val)
        {
        	if(val != true){
        		return;
        	}

        	this.dsExec.clearData();
        	var nrow = this.dsExec.addRow();
        	this.dsExec.setColumn(nrow, "INCD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsExec.setColumn(nrow, "INYM_MAGAM", this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        	this.dsExec.setColumn(nrow, "INID_TRANS", this.AuthClient.ID_USER);

        	var strSvcId    = "exec";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "exec=dsExec";
        	var outData     = "dsExec=dsExec0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,
        						false); 		// 통신방법 정의 [생략가능]

        };
        this.fnMonthSave2 = function (obj,e)
        {
        	trace("이관자료업로드");
            this.gfnExcelImport("dsList","sheet1","A2","fnExcelImportCallback","import",this);
        }


        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        /*
         *	엑셀업로드 Callback
         */
        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {

        	//this.dsList.clearData();
        	this.gfnGridAfterSelect(this.dxGrid);
        		if (dsOut.rowcount == 0)  {
        		this.gfnAlert("엑셀파일에 내용이 없습니다.");
        		return false;
        	}

        	// 엑셀 양식과 그리드 컬럼이 그대로 일치 하는 경우
        	// 아닌경우는 이부분 주석처리
        	/*
         	for (var i=0; i< this.dsList.getColCount(); i++)
         	{
         		sColumnId = "Column"+i;
         		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
         		if (sColumnNm != "" && sColumnId != sColumnNm)
         		{
         			dsOut.updateColID(sColumnId, sColumnNm);
         		}
         	}
        	*/

        	trace(dsOut.saveXML());
        	trace(this.dsListExcel.saveXML());

        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	// this.dsList.copyData(dsOut);
        	this.dsList.set_enableevent(false);
        	for (var i=0; i< dsOut.rowcount; i++) {
        		var nrow = this.dsList.addRow();
        		this.dsList.setColumn(nrow, this.ucFlag, "I");

        		// 양식이 일치하는 경우 copyRow
        		//this.dsList.copyRow(nrow, dsOut, i);

        		// 양식과 일치하지 않는 경우 아래와 같이 컬럼별로 처리.
        		this.dsList.setColumn(nrow, "CD_DEPT_ACNT", dsOut.getColumnNF(i, "Column0"));
        		this.dsList.setColumn(nrow, "DS_DEPT_ACNT", dsOut.getColumnNF(i, "Column1"));
        		this.dsList.setColumn(nrow, "CD_ACCOUNT", dsOut.getColumnNF(i, "Column2"));
        		this.dsList.setColumn(nrow, "DS_ACCOUNT", dsOut.getColumnNF(i, "Column3"));
        		//this.dsList.setColumn(nrow, "NO_SEQ", dsOut.getColumnNF(i, "Column4"));
        		this.dsList.setColumn(nrow, "AM_DACCOUNT", dsOut.getColumnNF(i, "Column4"));
        		this.dsList.setColumn(nrow, "AM_CACCOUNT", dsOut.getColumnNF(i, "Column5"));
        		this.dsList.setColumn(nrow, "TY_VENDOR", dsOut.getColumnNF(i, "Column6"));
        		this.dsList.setColumn(nrow, "CD_VENDOR", dsOut.getColumnNF(i, "Column7"));
        		this.dsList.setColumn(nrow, "DS_VENDOR", dsOut.getColumnNF(i, "Column8"));
        		this.dsList.setColumn(nrow, "NO_REF", dsOut.getColumnNF(i, "Column9"));
        		this.dsList.setColumn(nrow, "DS_REM", dsOut.getColumnNF(i, "Column10"));
        		this.dsList.setColumn(nrow, "YM_ACCOUNT", this.dsSearch.getColumn(0, "YM_ACCOUNT"));
        	}

        	this.dsList.set_enableevent(true);
        	this.gfnSetFormStatus(this, "I");

        	this.fnSetButton();
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHD_MONTHIWOL_ISU.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
