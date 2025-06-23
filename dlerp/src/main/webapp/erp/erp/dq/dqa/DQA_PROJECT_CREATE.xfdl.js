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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(380,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DQAPR_PROJECTCODE_CREATE_SELECT</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DQAPR_PROJECTCODE_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CONST\" type=\"STRING\" size=\"256\"/><Column id=\"DS_PROJECT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("프로젝트코드생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_SAUP","0","staTITLE:10","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("사업유형");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg00","staTY_SAUP:-1","staTITLE:10",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_CONST","0","staTY_SAUP:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("상품유형");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg01","staTY_CONST:-1","staBg00:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_PROJECT","0","staTY_CONST:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("현장명");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg02","staDS_PROJECT:-1","staBg01:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfTY_SAUP","staTY_SAUP:10","staTITLE:15","273","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DQ_01");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfTY_CONST","staTY_SAUP:10","ccfTY_SAUP:9","273","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DQ_02");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_PROJECT","staDS_PROJECT:10","ccfTY_CONST:9","273","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnNext","52.50%","ctxtDS_PROJECT:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("다음>");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","32.50%","ctxtDS_PROJECT:20","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divData2","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE1","0","0","100.00%","30",null,null,null,null,null,null,this.divData2.form);
            obj.set_taborder("0");
            obj.set_text("아래와 같이 Cost Center 코드가 생성됩니다.");
            obj.set_textAlign("left");
            this.divData2.addChild(obj.name, obj);

            obj = new Static("staTITLE2","0","staTITLE1:-7","100.00%","30",null,null,null,null,null,null,this.divData2.form);
            obj.set_taborder("0");
            obj.set_text("*원하는 생성코드를 선택할수 있습니다.");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            obj.set_wordWrap("char");
            this.divData2.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","staTITLE2:10",null,"280","0",null,null,null,null,null,this.divData2.form);
            obj.set_taborder("9");
            obj._setContents("");
            this.divData2.addChild(obj.name, obj);

            obj = new Button("btnOk","52.50%","objGrid:10","60","20",null,null,null,null,null,null,this.divData2.form);
            obj.set_taborder("11");
            obj.set_text("확인");
            this.divData2.addChild(obj.name, obj);

            obj = new Button("btnBack","32.50%","objGrid:10","60","20",null,null,null,null,null,null,this.divData2.form);
            obj.set_taborder("10");
            obj.set_text("뒤로");
            this.divData2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccfTY_SAUP.form.CDTextBox","value","dsSearch","TY_SAUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ccfTY_CONST.form.CDTextBox","value","dsSearch","TY_CONST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctxtDS_PROJECT","value","dsSearch","DS_PROJECT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DQA_PROJECT_CREATE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this._CD_CONST = "";

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


        // 	// 이전 화면에서 데이터 받기.
        // 	if(!this.gfnIsNull(this.getOwnerFrame().TY_SAUP) && !this.gfnIsNull(this.getOwnerFrame().TY_CONST)) {
        // 		this.dsSearch.setColumn(0, "TY_SAUP", this.getOwnerFrame().TY_SAUP);
        // 		this.dsSearch.setColumn(0, "TY_CONST", this.getOwnerFrame().TY_CONST);
        //
        // 		this.ccfTY_SAUP.form.DSTextBox.set_value(this.getOwnerFrame().DS_SAUP);
        // 		this.ccfTY_CONST.form.DSTextBox.set_value(this.getOwnerFrame().DS_CONST);
        // 	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Select.set_enable(false);
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
        	this.ccfTY_SAUP = this.divData.form.ccfTY_SAUP;
        	this.ccfTY_CONST = this.divData.form.ccfTY_CONST;
        	this.dxGrid = this.divData2.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DQ", "DQA_PROJECTCODELIST");
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.setEventHandler("onheadclick", 	 this.fnGrid_onheadclick, 	 this);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_SAUP", "string");
        	this.dsSelect.addColumn("TY_CONST", "string");
        	this.dsSelect.addColumn("ID_UPDATE", "string");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("TY_SAUP", "string");
        	this.dsCreate.addColumn("TY_CONST", "string");
        	this.dsCreate.addColumn("DS_PROJECT", "string");
        	this.dsCreate.addColumn("CD_CONST", "string");
        	this.dsCreate.addColumn("SL_CODES", "string");
        	this.dsCreate.addColumn("SL_COLUMNS", "string");
        	this.dsCreate.addColumn("ID_UPDATE", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_SAUP", this.dsSearch.getColumn(0, "TY_SAUP"));
        	this.dsSelect.setColumn(0, "TY_CONST", this.dsSearch.getColumn(0, "TY_CONST"));
        	this.dsSelect.setColumn(0, "ID_UPDATE", this.AuthClient.ID_USER);

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        this.fnCreate = function() {
        	if(this.dsList.findRow("CHK", "1") < 0){
        		this.gfnAlert("선택된 프로젝트 코드가 없습니다.");
        		return false;
        	}

        	this.dsCreate.clearData();

        	var sl_codes = [];
        	var sl_columns = [];

        	for(var i = 0 ; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") == 1)
        		{
        			sl_codes.push(this.dsList.getColumn(i, "CD_PROJECT"));
        			sl_columns.push(this.dsList.getColumn(i, "CD_COLUMN"));

        			// 생성시에 본공사코드를 전역변수로 들고 있는다. (창 닫을때 보내주기 위해서)
        			if(this.dsList.getColumn(i, "CD_COLUMN") == "CD_CONST")
        			{
        				this._CD_CONST = this.dsList.getColumn(i, "CD_PROJECT");
        			}
        		}
        	}

        	var cd_const_row = this.dsList.findRow("CD_COLUMN", "CD_CONST");

        	var nrow = this.dsCreate.addRow();
        	this.dsCreate.setColumn(nrow, "TY_SAUP", this.dsSearch.getColumn(0, "TY_SAUP"));
        	this.dsCreate.setColumn(nrow, "TY_CONST", this.dsSearch.getColumn(0, "TY_CONST"));
        	this.dsCreate.setColumn(nrow, "DS_PROJECT", this.dsSearch.getColumn(0, "DS_PROJECT"));
        	this.dsCreate.setColumn(nrow, "CD_CONST", this.dsList.getColumn(cd_const_row, "CD_PROJECT"));
        	this.dsCreate.setColumn(nrow, "SL_CODES", sl_codes.join(','));
        	this.dsCreate.setColumn(nrow, "SL_COLUMNS", sl_columns.join(','));
        	this.dsCreate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);

        	if (this.dsCreate.rowcount == 0) return;

        	var strSvcId    = "create";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "create=dsCreate";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }
        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "TY_SAUP"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfTY_SAUP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업유형은 반드시 입력하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"TY_CONST"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfTY_CONST.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("상품유형은 반드시 입력하셔야 합니다..", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"DS_PROJECT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctxtDS_PROJECT.setFocus();
        		}
        		this.gfnAlert("현장명은 반드시 입력하셔야 합니다..", "fnVaidateCallback");
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
        	if (svcID == "create") {
        		if(errorCode == 0)
        		{
        			this.fnCreateCallback = function()
        			{

        				this.getParentContext().close(this._CD_CONST);
        			}

        			this.gfnAlert("프로젝트코드생성이 정상적으로 처리되었습니다.", "fnCreateCallback");
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	return true;
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
          this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);

        	if(colnm == "CHK" && this.dsList.getColumn(row, "DS_CODE") == "본공사" && this.dsList.getColumn(row, "CHK") == 1)
        	{
        		return false;
        	}

        	return;
        }

        // 그리드 헤드 클릭 이벤트 재정의
        this.fnGrid_onheadclick = function(objGrid, e) {
        	var cell = this._gfnGridGetBodyCellIndex(objGrid, e.cell);
        	var colnm = this.gfnGridGetBindColumnNameByIndex(objGrid, cell);
        	// 체크박스 클릭한 경우.
        	if(colnm == "CHK") {
        		var sVal = objGrid.getCellProperty("head", e.cell, "text");
        		var sChk;
        		if (sVal == "1") {
        			objGrid.setCellProperty("head", e.cell, "text", "0");
        			sChk="0";
        		} else {
        			objGrid.setCellProperty("head", e.cell, "text", "1");
        			sChk="1";
        		}

        		for(var i = 0; i < this.dsList.rowcount; i++)
        		{
        			if(this.dsList.getColumn(i, "DS_CODE") != "본공사")
        			{
        				this.dsList.setColumn(i, "CHK", sChk);
        			}
        		}
        	}
        	// 체크박스를 클릭한게 아니라면 기존의 공통의 그리드 헤드 클릭 이벤트를 탄다.
        	else {
        		this.gfnGrid_onheadclick(objGrid, e);
        	}
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        // divData의 다음 버튼 클릭 이벤트
        this.divData_btnNext_onclick = function(obj,e)
        {
        	if (!this.fnSelectValidate()) return false;
        	this.fnSelect();

        	this.divData.set_visible(false);
        	this.divData2.set_visible(true);
        	this.getOwnerFrame().set_height(460);
        };

        // divData의 취소 버튼 클릭 이벤트
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close();
        };

        this.divData2_btnOk_onclick = function(obj,e)
        {
        	var msg = "";

        	for(var i = 0 ; i < this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHK") == 1)
        		{
        			msg += this.dsList.getColumn(i, "CD_PROJECT") + " [" + this.dsList.getColumn(i, "DS_CODE") + "]" + "\n";
        		}
        	}

        	msg += "\n해당 코드들을 생성하시겠습니까?";

        	this.gfnConfirm(msg, "btnOk_callback");

        };

        this.btnOk_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.fnCreate();
        	}
        }

        this.divData2_btnBack_onclick = function(obj,e)
        {
        	this.dsList.clearData();
        	this.divData.set_visible(true);
        	this.divData2.set_visible(false);
        	this.getOwnerFrame().set_height(260);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnNext.addEventHandler("onclick",this.divData_btnNext_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divData2.form.btnOk.addEventHandler("onclick",this.divData2_btnOk_onclick,this);
            this.divData2.form.btnBack.addEventHandler("onclick",this.divData2_btnBack_onclick,this);
        };
        this.loadIncludeScript("DQA_PROJECT_CREATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
