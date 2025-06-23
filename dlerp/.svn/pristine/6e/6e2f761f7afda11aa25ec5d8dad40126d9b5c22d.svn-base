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
            this.set_titletext("개인별 연봉관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DACPR_YEARLYPLAN_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DACPR_YEARLYPLAN_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_RETIRE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YR_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_RETIRE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"YR_BASE\"/><Col id=\"TY_RETIRE\"/><Col id=\"ID_SABUN\"/><Col id=\"ID_PERSON\"/><Col id=\"TY_GUBUN\">%</Col><Col id=\"DS_CORP\"/><Col id=\"DS_HNAME\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">전체</Col><Col id=\"CD_CODE\">%</Col></Row><Row><Col id=\"DS_CODE\">계속근로</Col><Col id=\"CD_CODE\">Y</Col></Row><Row><Col id=\"DS_CODE\">1년미만</Col><Col id=\"CD_CODE\">M</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_BASE","0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("년도");
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_BASE","staYR_BASE:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enableevent("true");
            obj.set_text("2019");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclYR_BASE:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSABUN","ccfCD_CORP:0.0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("성명");
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staSABUN:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","ccfID_SABUN:10","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_RETIRE","0","staYR_BASE:10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("재직구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccfTY_RETIRE","staTY_RETIRE:0.0","staYR_BASE:10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_RETIRE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("재직자");
            obj.set_value("01");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","ccfTY_RETIRE:0.0","staYR_BASE:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("대상자구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","staTY_GUBUN:0.0","staYR_BASE:10","222","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("전체");
            obj.set_value("%");
            obj.set_index("0");
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
            obj = new BindItem("item0","divSearch.form.ccfTY_RETIRE","value","dsSearch","TY_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYR_BASE.form.TextBox","value","dsSearch","YR_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtID_PERSON","value","dsSearch","ID_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.rdoTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAC_YEARLYPLAN.xfdl", function() {
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

        	//적용년도 셋팅
        	var today = this.gfnGetDate().substring(0,4);
        	this.divSearch.form.ctclYR_BASE.form.TextBox.set_value(today);

        	//법인 셋팅
        	this.divSearch.form.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	//this.FormBtns.Select.click();
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
        	//this.btnBaseInfo = this.gfnFormButtonAdd("BaseInfo", "fnBaseInfo", "기초생성");
        	this.btnDate = this.gfnFormButtonAdd("btnDate", "fnDate");  // 일정등록
        	this.btnBase = this.gfnFormButtonAdd("btnBase", "fnBase"); 	// 대상자생성
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid);

        	//this.dsList.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	//this.dsList.setColumn(nrow, "YR_BASE", this.dsSearch.getColumn(0, "YR_BASE"));
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }

         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /*
        this.fnBaseInfo = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        	// 기초생성
        	var param = {};

        	param.ID_SABUN = this.ccfID_SABUN.form.CDTextBox.value;
        	param.DS_HNAME = this.ccfID_SABUN.form.DSTextBox.value;

        	param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAU_FIXEDALLOW", "", param);

        }
        */
        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ctclYR_BASE = this.divSearch.form.ctclYR_BASE;
        	this.ccfTY_RETIRE = this.divSearch.form.ccfTY_RETIRE;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.edtID_PERSON = this.divSearch.form.edtID_PERSON;
        	this.rdoTY_GUBUN = this.divSearch.form.rdoTY_GUBUN;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP_CODEFIND";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO_ALL";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAC_YEARLYPLAN");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	//this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        // 	this.dxGrid.set_selecttype("cell");
        // 	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YR_BASE", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("ID_PERSON", "string");
        	this.dsSelect.addColumn("TY_RETIRE", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("YR_BASE", "string");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_PERSON", "int");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("YN_PLAN", "string");
        	this.dsSave.addColumn("QN_PLAN", "bigdecimal");
        	this.dsSave.addColumn("YN_APPOINT", "string");
        	this.dsSave.addColumn("QN_APPOINT", "bigdecimal");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("IP_ADDR", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("GR_CORP", "string");

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

        	this.dsSelect.setColumn(0, "YR_BASE", this.dsSearch.getColumn(0, "YR_BASE"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "ID_PERSON", this.dsSearch.getColumn(0, "ID_PERSON"));
        	this.dsSelect.setColumn(0, "TY_RETIRE", this.dsSearch.getColumn(0, "TY_RETIRE"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));

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
        				this.dsSave.setColumn(nrow, "YR_BASE", this.dsList.getColumn(i, "YR_BASE"));
        				this.dsSave.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        				this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsSave.setColumn(nrow, "YN_PLAN", this.dsList.getColumn(i, "YN_PLAN"));
        				this.dsSave.setColumn(nrow, "QN_PLAN", this.dsList.getColumn(i, "QN_PLAN"));
        				this.dsSave.setColumn(nrow, "YN_APPOINT", this.dsList.getColumn(i, "YN_APPOINT"));
        				this.dsSave.setColumn(nrow, "QN_APPOINT", this.dsList.getColumn(i, "QN_APPOINT"));
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "IP_ADDR", this.AuthClient.NO_IP);
        				this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        				this.dsSave.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
        				break;
        		}
        	}

        // trace(this.dsSave.saveXML());
        // return;

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

        /*
         *	초기화 버튼
         */
        this.fnReset  = function() {
        	this.dsSearch.clearData();
        	this.dsSearch.addRow();
        	this.ccfTY_RETIRE.set_index(1);

        	//적용년도 셋팅
        	var today = this.gfnGetDate().substring(0,4);
        	this.divSearch.form.ctclYY_BASE.form.TextBox.set_value(today);

        	//법인 셋팅
        	//this.divSearch.form.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	//this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnValidate = function() {
         	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
         		this.fnVaidateCallback = function() {
         			this.ccfCD_CORP.form.CDTextBox.setFocus();
         		}
         		this.gfnAlert("법인을 입력하세요.");
         		return false;
         	}

        	if (this.gfnIsNull(this.ctclYR_BASE.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ctclYR_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("년도를 입력하세요.");
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
        		this.gfnGridAfterSelect(this.dxGrid);

        		/*this.FormBtns.Add.set_enable(false);*/

        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			//this.gfnAlert("작업이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        	} else if(svcID == "combo") {
        		this.divSearch.form.ccfTY_RETIRE.set_index(0);	// 전체 선택
        	}

        	this.fnSetButton();
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/


        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}
        	if(id == "ccfID_SABUN") {
         		if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
         			this.ccfCD_CORP.form.CDTextBox.setFocus();
         			this.gfnAlert("법인을 먼저 선택하시기 바랍니다.");
         			return false;
         		}

        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");   // 재직구분
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfCD_CORP"){
        		this.ccfID_SABUN.form.CDTextBox.set_value("");
        		this.ccfID_SABUN.form.DSTextBox.set_value("");
        		this.edtID_PERSON.set_value("");
        	}else if(id == "ccfID_SABUN") {
        		if(arr.length > 0) {
        			this.edtID_PERSON.set_value(arr[0]["ID_PERSON"]);
        		}else{
        			this.edtID_PERSON.set_value("");
        		}
        	}
        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow)
        {
        	switch(id) {
        		case "DAX_CFBASEINFO_ALL":
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");   // 재직구분
        		break;
        		default:
        	}
        	return true;
        };
        /*
         this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	switch(id) {
        		case "DAX_CFBASEINFO_ANNUAL":


        			//var nRow = arr[0]["rowInfo"];
        			var nRow = this.dsList.rowposition;

         			this.dsList.setColumn(nRow, "CD_CORP", arr[0]["CD_CORP"]);
         			this.dsList.setColumn(nRow, "DS_CORP", arr[0]["DS_CORP"]);
         			this.dsList.setColumn(nRow, "CD_DEPT", arr[0]["CD_DEPT"]);
         			this.dsList.setColumn(nRow, "DS_DEPT", arr[0]["DS_DEPT"]);
         			this.dsList.setColumn(nRow, "ID_SABUN", arr[0]["ID_SABUN"]);
         			this.dsList.setColumn(nRow, "DS_HNAME", arr[0]["DS_HNAME"]);
         			this.dsList.setColumn(nRow, "CD_POSITION", arr[0]["CD_POSITION"]);
         			this.dsList.setColumn(nRow, "DS_POSITION", arr[0]["DS_POSITION"]);
        			this.dsList.setColumn(nRow, "DT_JOIN", arr[0]["DT_JOIN"]);
        			this.dsList.setColumn(nRow, "DT_RETIRE", arr[0]["DT_RETIRE"]);
        			this.dsList.setColumn(nRow, "DS_RETIRE", arr[0]["DS_RETIRE"]);
        			break;
        		default:
        	}

        }
        */
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


         // 일정등록 버튼 클릭시 팝업화면 호출
         this.fnDate = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	var nRow = this.dsList.rowposition;

        	//param.YR_BASE = this.dsSearch.getColumn(0, "YR_BASE");
        	//param.TY_GUBUN = this.dsList.getColumn(this.dsList.rowposition, "TY_GUBUN");


        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAC_YEARLYPLAN_DATE", "fnDateCallback", param);

        }


        this.fnDateCallback =  function(svcID, val) {
        	if(val != false) {
        		this.FormBtns.Select.click();
        	}
        };


         // 대상자생성 버튼 클릭시 팝업화면 호출
         this.fnBase = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");
        	param.TY_GUBUN = this.dsSearch.getColumn(0, "TY_GUBUN");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAC_YEARLYPLAN_BASE_DLG", "fnBaseCallback", param, 415, 315);
        }


        this.fnBaseCallback =  function(svcID, val) {
        	//if(val != false) {
        		this.FormBtns.Select.click();
        	//}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		this.FormBtns.Select.click();
        	}
        };


        //청년세액감면 유형 콤보 조회
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

        this.divData_objGrid_oncelldblclick = function(obj,e){
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var cellIdx_YN_PLAN = this.dxGrid.getBindCellIndex("body", "YN_PLAN");
        	var cellIdx_QN_PLAN = this.dxGrid.getBindCellIndex("body", "QN_PLAN");
        	//trace("col_YN_PLAN", col_YN_PLAN);
        	//trace("col_QN_PLAN", col_QN_PLAN);

        	if(e.cell == cellIdx_YN_PLAN ||e.cell == cellIdx_QN_PLAN){
        		return;
        	}


        	var param = {};
        	param.YY_BASE = this.ctclYR_BASE.form.TextBox.value;
        	param.CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	param.DS_CORP = this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");
        	param.ID_PERSON = this.dsList.getColumn(this.dsList.rowposition, "ID_PERSON");
        	param.ID_SABUN = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        	param.DS_HNAME = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");
        	this.gfnFormOpen("DAC", "DAC_YEARLYPLAN_BASE", "fnPopupCallback", param, 1280, 720);
        };

        this.fnPopupCallback = function(){
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staCD_CORP.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_CORP.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staSABUN.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfID_SABUN.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staTY_RETIRE.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staTY_GUBUN.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
        };
        this.loadIncludeScript("DAC_YEARLYPLAN.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
