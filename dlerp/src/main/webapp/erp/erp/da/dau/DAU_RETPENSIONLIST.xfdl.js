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
            this.set_titletext("퇴직연금적립내역");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAUPR_RETPENSIONLIST_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YY_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"QN_RETIREPENSION\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"YY_SALARY\"/><Col id=\"ID_PERSON\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_DSDEPT", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">전체</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">본사</Col><Col id=\"VALUE\">본사</Col></Row><Row><Col id=\"CODE\">현장</Col><Col id=\"VALUE\">현장</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsQN_RETIREPENSION", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"VALUE\">반기납</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"VALUE\">정기납</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYY_SALARY","0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_SALARY","staYY_SALARY:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclYY_SALARY:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0.0","staYY_SALARY:10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","staYY_SALARY:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","ccfID_SABUN:0.0","staYY_SALARY:10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","ccfID_SABUN:0.0","staYY_SALARY:10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("퇴직연금지급구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboQN_RETIREPENSION","staCD_CORP00:0.0","staYY_SALARY:10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsQN_RETIREPENSION");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
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

            obj = new BindItem("item1","divSearch.form.ctclYY_SALARY.form.TextBox","value","dsSearch","YY_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtID_PERSON","value","dsSearch","ID_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboQN_RETIREPENSION","value","dsSearch","QN_RETIREPENSION");
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
        this.registerScript("DAU_RETPENSIONLIST.xfdl", function() {
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

        	//급여년월 셋팅
        	var today = this.gfnGetDate().substring(0,4);
        	this.divSearch.form.ctclYY_SALARY.form.TextBox.set_value(today);

        	//법인 셋팅
        	this.divSearch.form.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
         	this.FormBtns.Add.set_enable(false);
         	this.FormBtns.Del.set_enable(false);
         	this.FormBtns.Save.set_enable(false);
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
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ctclYY_SALARY = this.divSearch.form.ctclYY_SALARY;
        	//this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.edtID_PERSON = this.divSearch.form.edtID_PERSON;
        	this.cboQN_RETIREPENSION = this.divSearch.form.cboQN_RETIREPENSION;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP_CODEFIND";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	//this.ccfCD_DEPT.CodeFindName = "DAX_CFDEPT"; //"DAX_CFDEPT_MST1";
        	//this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	//this.ccfCD_DEPT.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO_ALL";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAU_RETPENSIONLIST");

        	//this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YM_SALARY", "string");
        	this.dsSelect.addColumn("QN_RETIREPENSION", "string");
        	this.dsSelect.addColumn("ID_PERSON", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");

        }

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
        	this.dsSelect.setColumn(0, "YM_SALARY", this.ctclYY_SALARY.form.TextBox.value);
        	this.dsSelect.setColumn(0, "QN_RETIREPENSION", this.cboQN_RETIREPENSION.value);
        	this.dsSelect.setColumn(0, "ID_PERSON", this.edtID_PERSON.value);
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

        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

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

        	if (this.gfnIsNull(this.ctclYY_SALARY.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ctclYY_SALARY.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기준년도를 입력하세요.");
        		return false;
        	}

        	var cd_corp = this.ccfCD_CORP.form.CDTextBox.value;
        	if (this.gfnIsNull(cd_corp)) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
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
        	}
         	this.FormBtns.Add.set_enable(false);
         	this.FormBtns.Del.set_enable(false);
         	this.FormBtns.Save.set_enable(false);
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.codefind_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfCD_CORP"){
        		//this.ccfCD_DEPT.form.CDTextBox.set_value("");
        		//this.ccfCD_DEPT.form.DSTextBox.set_value("");
        		this.ccfID_SABUN.form.CDTextBox.set_value("");
        		this.ccfID_SABUN.form.DSTextBox.set_value("");
        		this.edtID_PERSON.set_value("");
        	//}else if(id == "ccfCD_DEPT" ){
        // 		this.ccfCD_CORP.form.CDTextBox.set_value(arr[0]["CD_CORP"]);
        // 		this.ccfCD_CORP.form.DSTextBox.set_value(arr[0]["DS_CORP"]);
        //		this.ccfID_SABUN.form.CDTextBox.set_value("");
        //		this.ccfID_SABUN.form.DSTextBox.set_value("");
        //		this.edtID_PERSON.set_value("");
        	}else if(id == "ccfID_SABUN") {
        		//this.ccfCD_CORP.form.CDTextBox.set_value(arr[0]["CD_CORP"]);
        		//this.ccfCD_CORP.form.DSTextBox.set_value(arr[0]["DS_CORP"]);
        		//this.ccfCD_DEPT.form.CDTextBox.set_value(arr[0]["CD_DEPT"]);
        		//this.ccfCD_DEPT.form.DSTextBox.set_value(arr[0]["DS_DEPT"]);
        		if(arr.length > 0) {
        			this.edtID_PERSON.set_value(arr[0]["ID_PERSON"]);
        		}else{
        			this.edtID_PERSON.set_value("");
        		}
        	}
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        //	trace("코드파인드 id:"+id);
        	switch(id) {
        		case "ccfCD_CORP":
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;
        		/*
        		case "ccfCD_DEPT":
        			if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        				this.gfnAlert("법인을 먼저 선택하시기 바랍니다.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "GR_SEARCH",  this.FormInfo.GR_SEARCH);	// 사용자 권한
        			dsUserParam.setColumn(nrow, "CD_DEPT",  this.AuthClient.CD_DEPT);	// 로그인부서
        			dsUserParam.setColumn(nrow, "CD_CORP",  this.ccfCD_CORP.form.CDTextBox.value);	// 조회조건에 있는 소속법인
        			dsUserParam.setColumn(nrow, "YN_CURRENT",  "Y");
        			break;
        		*/
        		case "ccfID_SABUN":
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
        			break;

        		default:
        	}

        	return true;
        }

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	if(id = "DAX_CFBASEINFOCORP"){
        		dsUserParam.setColumn(nrow, "GR_SEARCH", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	}

        	if(id = "DAX_CFDEPT"){
        		dsUserParam.setColumn(nrow, "GR_SEARCH", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "");
        	}

        	if(id = "DAX_CFCOMMONCODE"){
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "DA");
        	}

        	if(id = "DAX_CFBASEINFOCORP"){
        		dsUserParam.setColumn(nrow, "GR_SEARCH", "");
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	}

        	return true;
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

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}

        	//this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value('');
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAU_RETPENSIONLIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
