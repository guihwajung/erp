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
            this.set_titletext("계정코드별명세서(멀티)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_ACCOUNTREPLACE_SELECT</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DHAPR_ACCOUNTREPLACE_CREATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHAPR_ACCOUNTREPLACE_DELETE</Col></Row><Row><Col id=\"TARGET\">slip</Col><Col id=\"SP\">DHAPR_ACCOUNTREPLACE_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">slipx</Col><Col id=\"SP\">DHAPR_ACCOUNTREPLACE_AUTOSLIPX</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHAPR_ACCOUNTREPLACE_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">거래처</Col><Col id=\"VALUE\">VENDOR</Col></Row><Row><Col id=\"CODE\">참고번호</Col><Col id=\"VALUE\">REFNO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SLIP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_SLIP", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">제외</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">대상</Col></Row><Row><Col id=\"DS_CODE\">전체</Col><Col id=\"CD_CODE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","278","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","staCD_DEPT_ACNT:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FROM","ccfCD_DEPT_ACNT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_TO","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_TO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACNT_FROM","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("계정코드");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNT","staCD_ACNT_FROM:0.0","staCD_CORP:10.0","650","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNT_SLIP_AND_TRIAL_MULTI");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTYPE","ccfCD_ACNT:10.0","staCD_CORP:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsTYPE");
            obj.set_datacolumn("CODE");
            obj.set_codecolumn("VALUE");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CON","cboTYPE:5","staCD_CORP:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtCD_CON","cboTYPE:5","staCD_CORP:10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_SLIP","1082","10","118","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("전표발행대상");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboYN_SLIP","1196","10","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsYN_SLIP");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("대상");
            obj.set_value("N");
            obj.set_index("1");
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
            obj = new BindItem("item2","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccboYN_SLIP","value","dsSearch","YN_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT_ACNT.form.DSTextBox","value","dsSearch","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_ACCOUNTREPLACE.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        var UserInfo = this.objApp.gdsUserInfo;

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

        	this.ccfCD_CORP.form.CDTextBox.setFocus();
        	this.ccboYN_SLIP.set_index(1);

        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);


        	var sCurrentDate = this.gfnAddMonth(this.gfnGetDate(), -1);
        	this.ctclDT_FROM.set_value((sCurrentDate.substr(0,6)+"01"));
        	this.ctclDT_TO.set_value(this.gfnGetLastDate(sCurrentDate));

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnFormButtonGe = this.gfnFormButtonAdd("tbbHistory", "fnTbbHistory" );
        	this.btnBtchCreate = this.gfnFormButtonAdd("btnBtchCreate", "fnBtchCreate");
        	this.btnSlipPub = this.gfnFormButtonAdd("btnSlipPub", "fnSlipPub");
        	this.btnSlipSelect = this.gfnFormButtonAdd("btnSlipSelect", "fnSlipSelect");
        	this.btnSlipCncl = this.gfnFormButtonAdd("btnSlipCncl", "fnSlipCncl");
        	this.btnSlipDelete = this.gfnFormButtonAdd("btnSlipDelete", "fnSlipDelete");  // 전표발행대상 제외
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;
        	this.ccfCD_ACNT = this.divSearch.form.ccfCD_ACNT;
        	this.ccfCD_CON = this.divSearch.form.ccfCD_CON;
        	this.txtCD_CON = this.divSearch.form.txtCD_CON;
        	this.ccboYN_SLIP = this.divSearch.form.ccboYN_SLIP;

        	this.cboTYPE = this.divSearch.form.cboTYPE;

        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;

        	this.dxGrid = this.divData.form.objGrid;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_ACCOUNTREPLACE");

        	//this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_Celldblclick, this);

        	this.dxGrid.addEventHandler("onlbuttonup", this.fnGrid_onlbuttonup, this);
        	this.dxGrid.addEventHandler("onlbuttondown", this.fnGrid_onlbuttondown, this);

        	this.ccfCD_DEPT_ACNT.CodeFindName = "DHX_CFACNTUNIT";	// DHX_CFBALANCE_ACNTUNIT

        	this.ccfCD_CON.CodeFindName = "DHX_CFALLVENDOR_CODEFIND";	// DHX_CFNVENDOR_CODEFIND

        	this.dsList.addEventHandler("onrowposchanged", this.dsList_Rowposchanged, this);

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        // 	this.ccfCD_ACNT.AfterCDTextChanged = "fnAfterCDTextChanged";
        // 	this.ccfCD_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        // 	this.ccfCD_CON.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("YN_SLIP", "string");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("CD_DEPT_ACNT", "string");
        	this.dsCreate.addColumn("DT_FROM", "string");
        	this.dsCreate.addColumn("DT_TO", "string");
        	this.dsCreate.addColumn("ID_USER", "string");

        	//전표발행용 데이터셋
        	this.dsIssueSlip = new Dataset();
        	this.dsIssueSlip.addColumn("TM_SLIP", "string");
        	this.dsIssueSlip.addColumn("YN_SLIP", "string");
        	this.dsIssueSlip.addColumn("NO_ID", "INT");
        	this.dsIssueSlip.addColumn("CD_CORP", "string");
        	this.dsIssueSlip.addColumn("CD_DEPT_BE", "string");
        	this.dsIssueSlip.addColumn("ID_USER", "string");

        	//전표취소용 데이터셋
        	this.dsCancelSlip = new Dataset();
        	this.dsCancelSlip.addColumn("CD_TRADE"  , "string");
        	this.dsCancelSlip.addColumn("ID_USER"  , "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_ID" , "int");
        	this.dsDelete.addColumn("ID_USER" , "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_ID" , "int");
        	this.dsUpdate.addColumn("YN_DELETE" , "string");
        	this.dsUpdate.addColumn("ID_USER" , "string");

        	this.dsSum = new Dataset();
        	this.dsSum.addColumn("ROW", "int");
        	this.dsSum.addColumn("COLUNM", "string");
        	this.dsSum.addColumn("AM_ACCOUNT", "bigdecimal");

        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();

        	var nRow = this.dsSelect.addRow();
        	this.dsSelect.setColumn(nRow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(nRow, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(nRow, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(nRow, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(nRow, "YN_SLIP", this.dsSearch.getColumn(0, "YN_SLIP"));


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
        	//if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "NO_ID"   , this.dsList.getColumn(i, "NO_ID"));		//회계단위코드
        				this.dsDelete.setColumn(nrow, "ID_USER" , this.AuthClient.ID_USER);
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "NO_ID"   , this.dsList.getColumn(i, "NO_ID"));		//회계단위코드
        				this.dsUpdate.setColumn(nrow, "YN_DELETE"   , this.dsList.getColumn(i, "YN_DELETE"));		//삭제대상여부
        				this.dsUpdate.setColumn(nrow, "ID_USER" , this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsDelete.rowcount == 0 && this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete update=dsUpdate";
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP")))
        	{
        		this.gfnAlert("법인코드를 입력 하세요.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        // 	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_ACNT")))
        // 	{
        // 		this.gfnAlert("귀속부서를 입력 하세요.");
        // 		this.ccfCD_DEPT_ACNT.form.CDTextBox.setFocus();
        // 		return false;
        // 	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_FROM")) || this.gfnIsNull(this.dsSearch.getColumn(0, "DT_TO")) )
        	{
        		this.gfnAlert("기간을 입력 하세요.");
        		this.ctclDT_FROM.setFocus();
        		return false;
        	}
        	else if ( this.gfnGetDiffDate(this.dsSearch.getColumn(0, "DT_FROM"), this.dsSearch.getColumn(0, "DT_TO")) < 0 )
        	{
        		this.gfnAlert("일자가 잘못 입력 되었습니다.");
        		this.ctclDT_TO.setFocus();
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

        	if (svcID == "select") {
        		this.fnSetButton();
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnSetExtendButtonEnable();
        	} else if (svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        	} else if (svcID == "create") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		}
        	} else if (svcID == "slipN") {
        		if (errorCode == 0) {
        			this.fnAutoSlip("Y");
        		}
        	} else if (svcID == "slipY") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow)
        {
        	var sCdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	switch(id) {
        		case "ccfCD_CORP":
        			dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        			//dsUserParam.setColumn(nrow, "LEVLV_DEPT", this.UserInfo.LEVLV_DEPT_ACNT);
        			//dsUserParam.setColumn(nrow, "LEVCD_DEPT", this.UserInfo.LEVCD_DEPT_ACNT);
        			break;
        		case "ccfCD_DEPT_ACNT":

        			if(this.gfnIsNull(sCdCorp)){
        				this.gfnAlert("법인코드를 선택하세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");						//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, sCdCorp);					//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        			dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);

        			break;
        		//case "ccfCD_ACNT_FROM":
        		//case "ccfCD_ACNT_TO":
        		case "ccfCD_ACNT":

        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData)
        {
        	var arr = codeFindData; //this.ccfCD_DEPT_ORG.form.SelectedData; 둘다 사용가능
        	if(id == "ccfCD_CORP") {
        		this.ccfCD_DEPT_ACNT.form.fnCodeFindClear();
        	}

        	if(id == "ccfCD_ACNT") {
        		var strCdAcnt = "";
        		var strDsAcnt = "";
        		if (arr.length > 0) {
        			for(var r = 0; r < arr.length; r++) {
        				strCdAcnt += arr[r]["CD_ACCOUNT"]+",";
        				strDsAcnt += arr[r]["DS_ACCOUNT"]+",";
        			}

        			this.ccfCD_ACNT.form.CDTextBox.set_value(strCdAcnt.substr(0,strCdAcnt.length-1));
        			this.ccfCD_ACNT.form.DSTextBox.set_value(strDsAcnt.substr(0,strDsAcnt.length-1));
        		}
        	}

        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_Celldblclick = function(obj,e)
        {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	var no_slip = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP")).substr(0,14);

        	if(this.gfnIsNull(no_slip))
        	{
        		this.gfnAlert("발행된 전표가 없습니다.");
        		return false;
        	}

        	param.CD_TRADE = no_slip;
        	param.IUD_FLAG = "S";
        	param.YN_JUNDO_START = "";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);
        };


        //그리드 로우변경 이벤트
        this.dsList_Rowposchanged = function(obj,e)
        {
        	this.fnSetExtendButtonEnable();
        };


        /************************************************************************
         * 로우 drag&drop 합계 구하기
         ************************************************************************/
        this.fnGrid_onlbuttondown = function(obj,e)
        {

            this.IsCtrl = true;

        	//trace("fnGrid_onlbuttondown: "+ this.IsDrag);
        };

        this.fnGrid_onlbuttonup = function(obj,e)
        {
            var colnm = this._gfnGridGetBindColumnNameByIndex(obj, e.cell);
            if(this.IsCtrl == true) {
        	   // trace("fnGrid_onlbuttonup: "+ this.IsDrag);
        		var nStartrow = obj.selectstartrow;
        		var nEndrow = obj.selectendrow;
        		var nStartCol = obj.selectstartcol;
        		var nEndCol = obj.selectendcol;
        		//trace("nStartrow=" +nStartrow+ ", nEndrow=" +nEndrow+", nStartCol=" +nStartCol+", nEndCol=" +nEndCol );
        		var nLoopCnt = nStartrow.length;

        		if(nStartCol == -1 && nEndCol == -1)
        			{
        				var objDs    = this.objects[obj.binddataset];

        				nStartCol = 0;
        				nEndCol = objDs.colcount-1;
        			}

        		this.dsSum.clearData();
        		this.fnSumInit();
        		this.fnSumCellPro();
        		for(var k=0; k < nLoopCnt; k++)
        		{
        			for (var i = nStartrow[k]; i <= nEndrow[k]; i++)
        			{
        				for (var j = nStartCol[k]; j <= nEndCol[k]; j++)
        				{
        				 // trace("i="+ i + " ,j= "+j + " ,k= "+k+"am_account= "+ this.dsList.getColumn(i, rowColumn));

        				  var rowColumn = this._gfnGridGetBindColumnNameByIndex(obj, j);
        				  if (nexacro.toNumber(this.dsList.getColumn(i, rowColumn)) != 0 &&
        					 (rowColumn == "AM_ACCOUNT_DR" || rowColumn == "AM_ACCOUNT_CR" || rowColumn =="AM_DRCR" || rowColumn == "AM_EXEC_DR" || rowColumn == "AM_EXEC_CR"  )) {
        					  var nRow = this.dsSum.addRow();
        					  this.dsSum.setColumn(nRow, "ROW", i);
        					  this.dsSum.setColumn(nRow, "COLUNM", rowColumn);
        					  this.dsSum.setColumn(nRow, "AM_ACCOUNT", nexacro.toNumber(this.dsList.getColumn(i, rowColumn)));
        					}
        				}
        			}
        		};

        		//trace(this.dsSum.saveXML());
        		if (this.dsSum.rowcount == 0) return;
        		this.gf_distincDsFilter(this.dsSum, "ROW,COLUNM"); // 중복자료 삭제
        		var amDr = this.dsSum.getCaseSum("COLUNM == 'AM_ACCOUNT_DR'", "AM_ACCOUNT");
        		var amCr = this.dsSum.getCaseSum("COLUNM == 'AM_ACCOUNT_CR'", "AM_ACCOUNT");
        		var amExecDr = this.dsSum.getCaseSum("COLUNM == 'AM_EXEC_DR'", "AM_ACCOUNT")*100;
        		var amExecCr = this.dsSum.getCaseSum("COLUNM == 'AM_EXEC_CR'", "AM_ACCOUNT")*100;
        		var amCha = this.dsSum.getCaseSum("COLUNM == 'AM_DRCR'", "AM_ACCOUNT");

        		this.amSum = amDr - amCr;
        		this.amExec = nexacro.floor(amExecDr - amExecCr);

        		//trace("amSum="+ this.amSum + ", amExec = "+ this.amExec+ ", amLocal= "+ this.amLocal );
        		this.amCha = amCha;
        		trace(" amCha=>" + amCha);

        		this.fnSumCellPro();
        		//this.fnSumInit();

        	} else {
        		this.fnSumInit();
        	}
        };

        this.gf_distincDsFilter = function(objDs, sColID)
        {
        	var arrArgs	= sColID.split(",");
        	var sFilterExpr		= "";
        	var sFindRowExpr	= "";

        	for (var i=0; i<arrArgs.length; i++)
        	{
        		if (objDs.getColumnInfo(arrArgs[i]) == null) continue;

        		sFindRowExpr	+= (sFindRowExpr) ? " && " : "";
        		sFindRowExpr	+= "" + arrArgs[i] + "=='\" + " + arrArgs[i] + " + \"'";
        	}

        	if (sFindRowExpr) {
        		sFilterExpr	= "rowidx==dataset.findRowExpr(\"" + sFindRowExpr + "\")";
        	}
        	objDs.filter(sFilterExpr);
        };

        this.fnSumInit = function(){
        	this.amSum = 0;
        	this.amExec = 0;
        	this.amCha = 0;
        }

        this.fnSumCellPro = function(){
        	if (this.amSum != 0) {
        		this.amSum = nexacro.floor(this.amSum)
        		var textSummary = this.gfnAppendComma(this.amSum);
        		this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "CD_ACCOUNT"), "text", textSummary);
        	} else {
        		this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "CD_ACCOUNT"), "text", "");
        	}
        	if (this.amCha != 0) {
        		this.amCha = nexacro.floor(this.amCha)
        		var textSummary = this.gfnAppendComma(this.amCha);
        		this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "AM_DRCR"), "text", textSummary);
        	} else {
        		this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "AM_DRCR"), "text", "");
        	}

        	if (this.amExec != 0) {
        		this.amExec = nexacro.floor(this.amExec)/100
        		var textSummary = this.gfnAppendComma(this.amExec);
        		this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "DT_ACCOUNT"), "text", textSummary);
        	} else {
        		this.dxGrid.setCellProperty("summ", this.dxGrid.getBindCellIndex("body", "DT_ACCOUNT"), "text", "");
        	}

        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.fnTbbHistory = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움

        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {};

        	var no_slip = this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_SLIP")).substr(0,14);

        	if(no_slip == "" || this.gfnIsNull(no_slip)){
        		this.gfnAlert("발행된 전표가 없습니다.");
        		return false;
        	}

        	param.CD_TRADE = no_slip;
        	param.IUD_FLAG = "S";
        	param.YN_JUNDO_START = "";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);

        }


        // 자료생성
        this.fnBtchCreate = function(obj,e) {
        	var param = {}
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");
        	param.CD_DEPT_ACNT = this.dsSearch.getColumn(0, "CD_DEPT_ACNT");
        	param.DS_DEPT_ACNT = this.dsSearch.getColumn(0, "DS_DEPT_ACNT");
        	param.DT_FROM = this.dsSearch.getColumn(0, "DT_FROM");
        	param.DT_TO = this.dsSearch.getColumn(0, "DT_TO");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ACCOUNTREPLACE_DLG", "fnCreate_callback", param);
        }

        this.fnCreate_callback = function (svcId, sRtn)
        {
            if (sRtn)
            {
        		this.FormBtns.Select.click();
            }
        };

        // 전표조회 및 전표취소 validation check
        this.fnSlipValidation = function(val) {
        	var chkCnt = this.dsList.getCaseCount("CHK == 1");

        	if (val =="issueSlip"){
        		if (chkCnt == 0) {
        			return false;
        		}
        		for ( var i=0; i < this.dsList.rowcount; i++ ) {
        			if ( this.dsList.getColumn(i, "CHK") == 1 ) {
        				if (!this.gfnIsNull(this.dsList.getColumn(i, "CD_TRADE_REPLACE") )) {
        					this.gfnAlert("이미 전표발행된 자료입니다.(" +(i+1) + "행)");
        					return false;
        				}
        				if (this.dsList.getColumn(i, "YN_DELETE")=="Y") {
        					this.gfnAlert("전표발행대상 제외 자료입니다.(" +(i+1) + "행). 전표발행할 수 없습니다.");
        					return false;
        				}
        			}
        		}
        	} else if (val =="cancel"){
        		if (chkCnt == 0) {
        			return false;
        		}
        	} else if (val =="delete"){
        		if (chkCnt == 0) {
        			return false;
        		}
        		for ( var i=0; i < this.dsList.rowcount; i++ ) {
        			if ( this.dsList.getColumn(i, "CHK") == 1 ) {
        				if (!this.gfnIsNull(this.dsList.getColumn(i, "CD_TRADE_REPLACE") )) {
        					this.gfnAlert("이미 전표발행된 자료입니다.(" +(i+1) + "행)");
        					return false;
        				}
        			}
        		}
        	} else {
        		if ( this.gfnIsNull(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE_REPLACE") )) {
        			this.gfnAlert("발행된 전표가 없습니다.");
        			return false;
        		}

        	}
        	return true;
        }

        // 전표발행
        this.fnSlipPub = function(obj,e) {
        	if (!this.fnSlipValidation('issueSlip')) {
        		return false;
        	}

        	//this.gfnConfirm("전표발행 처리 하시겠습니까?","fnSlipPubCallBack");
        	var NoId = [];
        	for (var i=0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "CHK") == 1) {
        			NoId.push(this.dsList.getColumn(i, "NO_ID"));
        		}
        	}

        	var param = {};
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");
        	param.CD_DEPT_ACNT = this.dsSearch.getColumn(0, "CD_DEPT_ACNT");
        	param.DS_DEPT_ACNT = this.dsSearch.getColumn(0, "DS_DEPT_ACNT");
        	param.TY_FLAG = "A";  //계정 선택
        	param.TY_GUBUN = "Y" ;  // 원회계일
        	param.NO_ID = NoId;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ACCOUNTREPLACE_SLIP", "fnSlipPubCallBack", param);
        }

        this.fnSlipPubCallBack = function(svcID, val) {
        	if(val)
        	{
        		this.FormBtns.Select.click();
        		//this.fnAutoSlip("N")
        	}
        }

        this.fnSlipDelete =  function(obj,e) {
        	if (!this.fnSlipValidation('delete')) {
        		return false;
        	}

        	for ( var i=0; i < this.dsList.rowcount; i++ ) {
        		if ( this.dsList.getColumn(i, "CHK") == 1 ) {
        			this.dsList.setColumn(i, "YN_DELETE" , "Y");
        		}
        	}
        }
        //
        //
        // this.fnAutoSlip = function(slipYn) {
        //
        // 	this.dsIssueSlip.clearData();
        //
        // 	// 전표발행
        // 	if (slipYn == "N") {
        //
        // 		tmSlip = this.AuthClient.ID_USER + this.gfnGetDate("milli");
        //
        // 		for (var i=0; i < this.dsList.rowcount; i++) {
        // 			if (this.dsList.getColumn(i, "CHK") == 1) {
        // 				var nrow = this.dsIssueSlip.addRow();
        // 				this.dsIssueSlip.setColumn(nrow, "TM_SLIP", tmSlip);
        // 				this.dsIssueSlip.setColumn(nrow, "YN_SLIP", slipYn);
        // 				this.dsIssueSlip.setColumn(nrow, "NO_ID", this.dsList.getColumn(i, "NO_ID"));
        // 				this.dsIssueSlip.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        // 				this.dsIssueSlip.setColumn(nrow, "CD_DEPT_BE", this.AuthClient.CD_DEPT);
        // 				this.dsIssueSlip.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        // 			}
        // 		}
        //
        // 	// 전표발행후처리
        // 	} else {
        // 		var nrow = this.dsIssueSlip.addRow();
        // 		this.dsIssueSlip.setColumn(nrow, "TM_SLIP", tmSlip);
        // 		this.dsIssueSlip.setColumn(nrow, "YN_SLIP", slipYn);
        // 		this.dsIssueSlip.setColumn(nrow, "NO_ID", "");
        // 		this.dsIssueSlip.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        // 		this.dsIssueSlip.setColumn(nrow, "CD_DEPT_BE", this.AuthClient.CD_DEPT);
        // 		this.dsIssueSlip.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        // 	}
        //
        // 	if (this.dsIssueSlip.rowcount == 0) return;
        //
        // 	var strSvcId    = "slip" + slipYn;
        // 	var strSvcType  = "savesel";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "slip=dsIssueSlip";
        // 	var outData     = "";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); 	// 통신방법 정의 [생략가능]
        // }

        // 전표조회
        this.fnSlipSelect = function(obj,e) {

        	if (!this.fnSlipValidation()) {
        		return false;
        	}
        	//var chkRow = this.dsList.findRow("CHK", 1);
        	var param = {};
        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE_REPLACE");
        	param.IUD_FLAG = "S";
        	param.strYN_JUNDO_START = "";

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	//trace("this.FormInfo.CD_MODULE :: " + this.FormInfo.CD_MODULE);
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopCallBack", param);
        }

        // 전표삭제
        this.fnSlipCncl = function(obj,e) {
        	if (!this.fnSlipValidation("cancel")) {
        		return false;
        	}

        	this.gfnConfirm("전표취소 처리 하시겠습니까?","fnSlipCncl_callback");
        }

        this.fnSlipCncl_callback = function(strId, val) {

        	if (val) {
        		this.dsCancelSlip.clearData();

        		for (var i=0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, "CHK") == 1) {
        				var nrow = this.dsCancelSlip.addRow();
        				this.dsCancelSlip.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(i, "CD_TRADE_REPLACE"));
        				this.dsCancelSlip.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}

        		if (this.dsCancelSlip.rowcount == 0) return;

        		var strSvcId    = "save";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "slipx=dsCancelSlip";
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
        	}
        }


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){

        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);

        	}
        };

        this.fnSetExtendButtonEnable = function(){
        	var CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE_REPLACE");

        	this.btnSlipDelete.set_enable(!this.gfnNvl(CD_TRADE));
        	this.btnSlipCncl.set_enable(this.gfnNvl(CD_TRADE));
        	this.btnSlipSelect.set_enable(this.gfnNvl(CD_TRADE));
        	this.btnSlipPub.set_enable(!this.gfnNvl(CD_TRADE));
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclDT_FROM.addEventHandler("onchanged",this.divSearch_ctclDT_FROM_onchanged,this);
            this.divSearch.form.ctclDT_TO.addEventHandler("onchanged",this.divSearch_ctclDT_TO_onchanged,this);
            this.divSearch.form.staCD_ACNT_FROM.addEventHandler("onclick",this.divSearch_staCD_ACNT_FROM_onclick,this);
            this.divSearch.form.cboTYPE.addEventHandler("onitemchanged",this.divSearch_cboTYPE_onitemchanged,this);
            this.divSearch.form.staYN_SLIP.addEventHandler("onclick",this.divSearch_staCD_SYSTEM_onclick,this);
            this.divData.form.objGrid.addEventHandler("oncloseup",this.divData_objGrid_oncloseup,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHA_ACCOUNTREPLACE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
