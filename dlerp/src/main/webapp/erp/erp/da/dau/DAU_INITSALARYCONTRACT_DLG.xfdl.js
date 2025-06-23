(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAU_INITSALARYBASE_DLG");
            this.set_titletext("대상자생성");
            this.getSetter("maxwidth").set("390");
            this.getSetter("maxheight").set("295");
            if (Form == this.constructor)
            {
                this._setFormPosition(346,225);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YY_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"TY_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DAUPR_SALARYCONTRACT_CREATE</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_DTSALARY_COMBO</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDT_BASE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","2","-5","344","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("연봉계약서 대상자 생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","staTITLE:0","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("법인");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP_bg","staCD_CORP:-1","staCD_CORP:-30","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","staCD_CORP:-25","248","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_BASE","0","staCD_CORP:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("계약일");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_BASE_bg","staDT_BASE:-1","staDT_BASE:-30","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYY_BASE","staDT_BASE:5","staDT_BASE:-25","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboDT_BASE","ctclYY_BASE:5","staDT_BASE:-25","90","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsDT_BASE");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_readonly("false");
            obj.set_value("1");
            obj.set_index("-1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_WORK","0","staDT_BASE:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("작업대상");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_WORK_bg","staTY_WORK:-1","staTY_WORK:-30","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_WORK","staTY_WORK:5","staTY_WORK:-25","230","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_rdoTY_WORK_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_WORK_innerdataset", obj);
            divData_form_rdoTY_WORK_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">S</Col><Col id=\"datacolumn\">특정사번</Col></Row><Row><Col id=\"codecolumn\">D</Col><Col id=\"datacolumn\">특정부서</Col></Row><Row><Col id=\"codecolumn\">%</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_WORK_innerdataset);
            obj.set_text("전체");
            obj.set_value("%");
            obj.set_index("2");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0","staTY_WORK:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_bg","staID_SABUN:-1","staID_SABUN:-30","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:5","staID_SABUN:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","0","staID_SABUN:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_bg","staCD_DEPT:-1","staCD_DEPT:-30","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:5","staCD_DEPT:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("16");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","110","staCD_DEPT:10","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","0","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:10","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divData.form.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ccfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctclYY_BASE.form.TextBox","value","dsList","YY_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.cboDT_BASE","value","dsList","DT_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.rdoTY_WORK","value","dsList","TY_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ccfID_SABUN.form.CDTextBox","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ccfID_SABUN.form.DSTextBox","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ccfCD_DEPT.form.CDTextBox","value","dsList","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ccfCD_DEPT.form.DSTextBox","value","dsList","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAU_INITSALARYCONTRACT_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e) {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	//this.fnSetCombo();
        	this.fnInit();
        }

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP     = this.divData.form.ccfCD_CORP;			// 법인
        	this.ctclYY_BASE 	= this.divData.form.ctclYY_BASE;		// 계약년도
        	this.cboDT_BASE 	= this.divData.form.cboDT_BASE;			// 계약일
        	this.rdoTY_WORK     = this.divData.form.rdoTY_WORK;			// 작업대상
        	this.ccfID_SABUN    = this.divData.form.ccfID_SABUN;		// 성명
        	this.ccfCD_DEPT     = this.divData.form.ccfCD_DEPT;			// 부서
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 법인
        	this.ccfCD_CORP.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 성명
        	this.ccfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 부서
        	this.ccfCD_DEPT.AfterCDTextChanged      = "fnAfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 실행
        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("CD_CORP", "string");
        	this.dsExecute.addColumn("YY_BASE", "string");
        	this.dsExecute.addColumn("DT_BASE", "string");
        	this.dsExecute.addColumn("TY_WORK", "string");
        	this.dsExecute.addColumn("ID_SABUN", "string");
        	this.dsExecute.addColumn("CD_DEPT", "string");
        	this.dsExecute.addColumn("ID_USER", "string");
        	this.dsExecute.addColumn("GR_SEARCH", "string");
        	this.dsExecute.addColumn("GR_CORP", "string");
        }

        /************************************************************************
         * 콤보 설정
         ************************************************************************/
        this.fnSetCombo = function() {
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_CORP", "string");
        	this.dsCombo.addColumn("YY_BASE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_CORP"    , this.AuthClient.CD_CORP);
        	this.dsCombo.setColumn(0, "YY_BASE"    , this.dsList.getColumn(0, "YY_BASE"));

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsDT_BASE=combo0";
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

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	var frame = this.getOwnerFrame();

        	this.dsList.setColumn(0, "CD_CORP", frame.CD_CORP);
        	this.dsList.setColumn(0, "DS_CORP", frame.DS_CORP);			// 법인
        	//this.dsList.setColumn(0, "DT_BASE", frame.DT_BASE);			// 지급일
        	//is.dsList.setColumn(0, "DT_BASE", this.fnGetDtPayment(frame.DT_BASE));	// 지급일
        	var year = this.gfnGetDate().substring(0,4);
        	this.dsList.setColumn(0, "YY_BASE", year);

        	// 작업대상
        	this.rdoTY_WORK.set_value("%");
        	this.ccfID_SABUN.set_enable(false);
        	this.ccfCD_DEPT.set_enable(false);

        	// 사번, 성명이 있으면 특정사번으로 바인딩
        	if (!this.gfnIsNull(frame.ID_SABUN) && !this.gfnIsNull(frame.DS_HNAME)) {
        		this.dsList.setColumn(0, "ID_SABUN", frame.ID_SABUN);
        		this.dsList.setColumn(0, "DS_HNAME", frame.DS_HNAME);
        		// 작업대상
        		this.rdoTY_WORK.set_value("S");
        		this.ccfID_SABUN.set_enable(true);
        	}
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         * 조회 버튼
         */
        this.fnSelect = function() {

        }

        /*
         * 입력 버튼
         */
        this.fnAdd = function() {

        }

        /*
         * 삭제 버튼
         */
        this.fnDel = function() {

        }

        /*
         * 저장 버튼
         */
        this.fnSave = function() {

        }

        /*
         * 엑셀 버튼
         */
        this.fnExcel = function() {

        }

        /*
         * 출력 버튼
         */
        this.fnPrint = function() {
        	return true;
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
         	var validate = true;

        	// 법인
        	if (this.gfnIsNull(this.dsList.getColumn(0, "CD_CORP"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        		return validate;
        	}

        	// 지급일
        	if (this.gfnIsNull(this.dsList.getColumn(0, "YY_BASE"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclYY_BASE.setFocus();
        		}
        		this.gfnAlert("계약년도를 입력하세요.");
        		return false;
        	}

        // 	// 지급일
        // 	if (this.gfnIsNull(this.dsList.getColumn(0, "DT_BASE"))) {
        // 		validate = false;
        // 		this.fnVaidateCallback = function() {
        // 			this.ctclDT_BASE.setFocus();
        // 		}
        // 		this.gfnAlert("계약일을 입력하세요.");
        // 		return false;
        // 	}

        	// 작업대상 사번일때
        	if (this.rdoTY_WORK.value == "S" && this.gfnIsNull(this.dsList.getColumn(0, "ID_SABUN"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfID_SABUN.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사번을 입력하세요.");
        		return false;
        	}

        	// 작업대상 부서일때
        	if(this.rdoTY_WORK.value == "D" && this.gfnIsNull(this.dsList.getColumn(0, "CD_DEPT"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPT.from.CDTextBox.setFocus();
        		}
        		this.gfnAlert("부서를 입력하세요.");
        		return validate;
        	}

         	return validate;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.btnOK_onclick = function(obj, e) {
        	if (!this.fnSelectValidate()) return false;
        	this.gfnConfirm("연봉관리에 등록된 대상자 정보를 생성합니다.", "btnOK_onclick_callback");
        }

        this.btnCANCLE_onclick = function(obj, e) {
        	this.getParentContext().close(false);
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {

        	} else if(svcID == "execute") {
        		if (errorCode == 0) {
        			this.fnClose = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("대상자 생성이 완료되었습니다.", "fnClose");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.btnOK_onclick_callback = function(strId, val) {
        	if (val == false) {
        		return false;
        	}

        	if (!this.fnSelectValidate()) return false;

        	this.dsExecute.clearData();
        	var nrow = this.dsExecute.addRow();
        	this.dsExecute.setColumn(nrow, "CD_CORP"   , this.dsList.getColumn(0, "CD_CORP"));
        	this.dsExecute.setColumn(nrow, "YY_BASE"   , this.dsList.getColumn(0, "YY_BASE"));
        	this.dsExecute.setColumn(nrow, "DT_BASE"   , this.dsList.getColumn(0, "DT_BASE"));
        	this.dsExecute.setColumn(nrow, "TY_WORK"   , this.dsList.getColumn(0, "TY_WORK"));
        	this.dsExecute.setColumn(nrow, "ID_SABUN"  , this.dsList.getColumn(0, "ID_SABUN"));
        	this.dsExecute.setColumn(nrow, "CD_DEPT"   , this.dsList.getColumn(0, "CD_DEPT"));
        	this.dsExecute.setColumn(nrow, "ID_USER"   , this.AuthClient.ID_USER);
        	this.dsExecute.setColumn(nrow, "GR_SEARCH" , this.FormInfo.GR_SEARCH);
        	this.dsExecute.setColumn(nrow, "GR_CORP"   , this.AuthClient.CD_CORP);

        	var strSvcId    = "execute";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execute=dsExecute";
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

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
         	switch (id) {
        	case "ccfCD_CORP":	// 법인코드
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);
        		break;

        	case "ccfCD_DEPT":	//부서코드
        		if (this.gfnIsNull(this.dsList.getColumn(0, "CD_CORP"))) {
        			this.fnBeforeUserCallback = function() {
        					this.ccfCD_CORP.form.CDTextBox.setFocus();
        				}
        				this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        				return false;
        		}
        		dsUserParam.setColumn(nrow, "GR_SEARCH" , this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"   , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP"   , this.dsList.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "");
        		break;

        	case "ccfID_SABUN": // 사번
        		if (this.gfnIsNull(this.dsList.getColumn(0, "CD_CORP"))) {
        			this.fnBeforeUserCallback = function() {
        					this.ccfCD_CORP.form.CDTextBox.setFocus();
        				}
        				this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        				return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsList.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.dsList.getColumn(0, "CD_DEPT"));
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        		break;
         	}
         	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	switch (id) {
        	case "ccfCD_CORP":	// 법인코드
        		this.dsList.setColumn(0, "CD_DEPT", "");
        		this.dsList.setColumn(0, "DS_DEPT", "");
        		this.dsList.setColumn(0, "ID_SABUN", "");
        		this.dsList.setColumn(0, "DS_HNAME", "");
        		break;

        	case "ccfCD_DEPT": //부서
        		this.dsList.setColumn(0, "ID_SABUN", "");
        		this.dsList.setColumn(0, "DS_HNAME", "");
        		break;

        	case "ccfID_SABUN": // 사번코드
        		break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsList_onvaluechanged = function(obj, e) {
        	if (e.newvalue != e.oldvalue) {
        		if (e.columnid == "YY_BASE") {
        			this.fnSetCombo();
        		}
        	}
        }
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		if (e.columnid == "YR_RTNG") {
        			this.dsSearch.setColumn(0, "ID_RTNG"    , "");
        			this.dsSearch.setColumn(0, "DS_RTNG"    , "");
        		}
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        }

        //작업대상 변경시
        this.rdoTY_WORK_onitemchanged = function(obj, e) {
        	var TY_WORK = this.dsList.getColumn(0, "TY_WORK");
        	if (TY_WORK == "%") {
        		this.ccfID_SABUN.set_enable(false);
        		this.ccfCD_DEPT.set_enable(false);
        	} else if (TY_WORK == "S") {
        		this.ccfID_SABUN.set_enable(true);
        		this.ccfCD_DEPT.set_enable(false);
        	} else if (TY_WORK == "D") {
        		this.ccfID_SABUN.set_enable(false);
        		this.ccfCD_DEPT.set_enable(true);
        	}

        	this.dsList.setColumn(0, "ID_SABUN", "");
        	this.dsList.setColumn(0, "DS_HNAME", "");
        	this.dsList.setColumn(0, "CD_DEPT", "");
        	this.dsList.setColumn(0, "DS_DEPT", "");
        }

        /************************************************************************
         * 기타 함수
         ************************************************************************/
        this.fnGetDtPayment = function(DT_BASE){
        	var sDT_BASE = this.gfnAddDate(DT_BASE + "01", 24);
        	return sDT_BASE;
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.cboDT_BASE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divData.form.rdoTY_WORK.addEventHandler("onitemchanged",this.rdoTY_WORK_onitemchanged,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAU_INITSALARYCONTRACT_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
