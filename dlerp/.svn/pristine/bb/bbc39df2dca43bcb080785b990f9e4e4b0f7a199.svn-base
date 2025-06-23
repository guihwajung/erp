(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAU_SALARYTOTALLIST");
            this.set_titletext("면허수당");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAUPR_LICENSEPAY_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_RETIRE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">%</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"VALUE\">재직자</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"VALUE\">휴직자</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"VALUE\">퇴직자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_ACCYEAR", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">A</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"VALUE\">5년</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"VALUE\">10년</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP2");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_SALARY","ccfCD_CORP:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("기준년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_SALARY","staYM_SALARY:0.0","staCD_CORP:10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_RETIRE","ctclYM_SALARY:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("재직상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccfTY_RETIRE","staTY_RETIRE:0.0","staCD_CORP:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsTY_RETIRE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("재직자");
            obj.set_value("01");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_ACCYEAR","ccfTY_RETIRE:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("자격년수");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccfTY_ACCYEAR","staTY_ACCYEAR:0.0","staCD_CORP:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsTY_ACCYEAR");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("전체");
            obj.set_value("A");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","10.0","180","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("3");
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

            obj = new BindItem("item1","divSearch.form.ctclYM_SALARY.form.TextBox","value","dsSearch","YM_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfTY_RETIRE","value","dsSearch","TY_RETIRE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfTY_ACCYEAR","value","dsSearch","TY_ACCYEAR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
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
        this.registerScript("DAU_LICENSEPAY.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	//지급년월 셋팅
        	this.divSearch.form.ctclYM_SALARY.form.TextBox.set_value(this.gfnGetDate().substring(0,6));

        	//법인 셋팅
        	this.divSearch.form.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Print.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	//법인
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	//지급년월
        	this.ctclYM_SALARY = this.divSearch.form.ctclYM_SALARY;
        	//재직구분
        	this.ccfTY_RETIRE = this.divSearch.form.ccfTY_RETIRE;
        	//자격년수
        	this.ccfTY_ACCYEAR = this.divSearch.form.ccfTY_ACCYEAR;

        	this.cboSN_SALARY = this.divSearch.form.cboSN_SALARY;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAU_LICENSEPAY");


        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP";
        	//this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	var nowYearmm = this.gfnGetDate().substring(0,6);
        	this.divSearch.form.ctclYM_SALARY.form.TextBox.set_value(nowYearmm);

        	this.ccfTY_RETIRE.set_index(1);
        	this.ccfTY_ACCYEAR.set_index(0);

        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);


        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
         	this.dsSelect.addColumn("CD_CORP", "string");
         	this.dsSelect.addColumn("YM_SALARY", "string");
        	this.dsSelect.addColumn("TY_RETIRE", "string");
        	this.dsSelect.addColumn("TY_ACCYEAR", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
         	if(!this.fnValidate()) return;

         	this.dsSelect.clearData();
         	this.dsSelect.addRow();
         	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
         	this.dsSelect.setColumn(0, "YM_SALARY", this.ctclYM_SALARY.form.TextBox.value);
        	this.dsSelect.setColumn(0, "TY_RETIRE", this.ccfTY_RETIRE.value);
        	this.dsSelect.setColumn(0, "TY_ACCYEAR", this.ccfTY_ACCYEAR.value);
        	this.dsSelect.setColumn(0, "ID_SABUN", this.ccfID_SABUN.form.CDTextBox.value);


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
        //	this.gfnGridAdd(this.dxGrid);
        }
        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        // 	this.gfnGridDel(this.dxGrid);
         }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        //
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
        this.fnValidate = function() {
        // 	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("법인코드를 입력하세요.");
        // 		return false;
        // 	}

        	if (this.gfnIsNull(this.ctclYM_SALARY.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ctclYM_SALARY.form.TextBox.setFocus();
        		}
        		this.gfnAlert("지급년월을 입력하세요.");
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
        		if (this.dsList.rowcount == 0) {
        			this.gfnAlert("자료가 존재하지 않습니다.");
        		} else {
        			this.gfnGridAfterSelect(this.dxGrid);
        			this.fnSetButton();
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			break;

        		case "ccfID_SABUN": // 직원코드
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        			break;

        		default:

         	}

        	return true;
        };

        this.codefind_AfterCDTextChanged = function(id) {
        	this.fnSearchInit();
        };
        /************************************************************************
         * 그리드 이벤트
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staTY_RETIRE.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staTY_ACCYEAR.addEventHandler("onclick",this.Common_onclick,this);
        };
        this.loadIncludeScript("DAU_LICENSEPAY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
