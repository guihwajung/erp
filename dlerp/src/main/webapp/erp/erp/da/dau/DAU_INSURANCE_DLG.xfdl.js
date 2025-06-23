(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAU_SOCIAL_INSURANCE_DLG");
            this.set_titletext("사회보험고지정보 급여적용");
            this.getSetter("maxwidth").set("380");
            this.getSetter("maxheight").set("360");
            if (Form == this.constructor)
            {
                this._setFormPosition(346,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ORG2\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_N\" type=\"STRING\" size=\"256\"/><Column id=\"CHK_H\" type=\"STRING\" size=\"256\"/><Column id=\"YM_DEDUCTION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DAUPR_INSURANCE_SALARY</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">S</Col><Col id=\"VALUE\">급여</Col></Row><Row><Col id=\"VALUE\">상여</Col><Col id=\"CODE\">B</Col></Row><Row><Col id=\"VALUE\">성과급</Col><Col id=\"CODE\">X</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSN_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">1</Col></Row><Row><Col id=\"VALUE\">2</Col><Col id=\"CODE\">2</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">3</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"VALUE\">4</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"VALUE\">5</Col></Row><Row><Col id=\"CODE\">6</Col><Col id=\"VALUE\">6</Col></Row><Row><Col id=\"CODE\">7</Col><Col id=\"VALUE\">7</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"VALUE\">8</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"VALUE\">9</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"VALUE\">10</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_MAGAM", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">M</Col><Col id=\"VALUE\">마감</Col></Row><Row><Col id=\"CODE\">C</Col><Col id=\"VALUE\">마감취소</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","2","10","344","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사회보험고지정보 급여적용");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","72","251","200","40",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","120","13","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","30","13","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("staYM_PAYMENT","0","104","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("공제년월");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","86","75","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","75","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("법인");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","86","133","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","80","248","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DAX_CFCORP2");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_SALARY","0","162","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("지급구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","86","104","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ORDER","0","190","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("작업대상");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staTARGET","0","staCD_ORDER:-1","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("대상사번");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta11","87","219","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","86","190","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYM_DEDUCTION","92","109","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoTY_WORK","93","194","239","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdoTY_WORK_innerdataset = new nexacro.NormalDataset("rdoTY_WORK_innerdataset", obj);
            rdoTY_WORK_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">특정사번</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">특정부서</Col></Row><Row><Col id=\"codecolumn\">%</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(rdoTY_WORK_innerdataset);
            obj.set_text("특정사번");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","92","224","248","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("18");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","86","161","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_MAGAM","0","46","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("마감여부");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","86","46","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","staTY_MAGAM:5","49","148","24",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_innerdataset("dsTY_MAGAM");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_text("마감");
            obj.set_value("M");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSN_SALARY","155","165","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_innerdataset("dsSN_SALARY");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_readonly("false");
            obj.set_value("1");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboTY_SALARY","92","165","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_innerdataset("dsTY_SALARY");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_readonly("false");
            obj.set_value("1");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_PAYMENT00","0","133","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("급여년월");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYM_SALARY","92","137","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","92","224","248","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("24");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ctclYM_DEDUCTION.form.TextBox","value","dsList","YM_DEDUCTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","rdoTY_WORK","value","dsList","TY_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","ccfID_SABUN.form.CDTextBox","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","ccfID_SABUN.form.DSTextBox","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","ccfCD_DEPT.form.CDTextBox","value","dsList","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","ccfCD_DEPT.form.DSTextBox","value","dsList","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","rdoTY_GUBUN","value","dsList","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cboSN_SALARY","value","dsList","SN_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","cboTY_SALARY","value","dsList","TY_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","ctclYM_SALARY.form.TextBox","value","dsList","YM_SALARY");
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
        this.registerScript("DAU_INSURANCE_DLG.xfdl", function() {
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


        	var sPARM_YM_SALARY = this.getOwnerFrame().YM_SALARY;
        	var sPARM_CD_CORP = this.getOwnerFrame().CD_CORP;
        	var sPARM_DS_CORP = this.getOwnerFrame().DS_CORP;

        	trace("sPARM_YM_SALARY", sPARM_YM_SALARY);
        	trace("sPARM_CD_CORP", sPARM_CD_CORP);
        	trace("sPARM_DS_CORP", sPARM_DS_CORP);

        	this.rdoTY_GUBUN.set_value("M");//마감여부
        	this.ctclYM_DEDUCTION.form.TextBox.set_value(sPARM_YM_SALARY);//공제년월
        	this.ctclYM_SALARY.form.TextBox.set_value(sPARM_YM_SALARY);//급여년월
        	//지급구분
        	this.cboTY_SALARY.set_value("S");
        	this.cboSN_SALARY.set_value("1");
        	//법인
        	this.ccfCD_CORP.form.CDTextBox.set_value(sPARM_CD_CORP);
            this.ccfCD_CORP.form.DSTextBox.set_value(sPARM_DS_CORP);
        	//작업대상
        	this.rdoTY_WORK.set_value("%");

        	this.ctclYM_DEDUCTION.set_enable(false);
        	this.ccfCD_CORP.set_enable(false);

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
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("TY_GUBUN", "string");
        	this.dsExecute.addColumn("CD_CORP", "string");
        	this.dsExecute.addColumn("YM_DEDUCTION", "string");
        	this.dsExecute.addColumn("YM_SALARY", "string");
        	this.dsExecute.addColumn("TY_SALARY", "string");
        	this.dsExecute.addColumn("SN_SALARY", "float");
        	this.dsExecute.addColumn("ID_SABUN", "string");
        	this.dsExecute.addColumn("CD_DEPT", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

         	var validate = true;

        	//법인
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		validate = false;
        		this.fnValidCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnValidCallback");
        		return validate;
        	}

        	//공제년월
        	if (this.gfnIsNull(this.ctclYM_DEDUCTION.form.TextBox.value)) {
        		validate = false;
        		this.fnValidCallback = function() {
        			this.ctclYM_DEDUCTION.form.TextBox.setFocus();
        		}
        		this.gfnAlert("지급년월을 입력하세요.", "fnValidCallback");
        		return validate;
        	}

        	//급여년월
        	if (this.gfnIsNull(this.ctclYM_SALARY.form.TextBox.value)) {
        		validate = false;
        		this.fnValidCallback = function() {
        			this.ctclYM_SALARY.form.TextBox.setFocus();
        		}
        		this.gfnAlert("급여년월을 입력하세요.", "fnValidCallback");
        		return validate;
        	}

        	//작업대상 사번일때 - 코드는 개발시 변경
        	if(this.rdoTY_WORK.value == "1" && this.gfnIsNull(this.ccfID_SABUN.form.CDTextBox.value)) {
        		validate = false;
        		this.fnValidCallback = function() {
        			this.ccfID_SABUN.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사번을 입력하세요.", "fnValidCallback");
        		return false;
        	}

        	//작업대상 부서일때 - 코드는 개발시 변경
        	if(this.rdoTY_WORK.value == "2" && this.gfnIsNull(this.ccfCD_DEPT.form.CDTextBox.value)) {
        		validate = false;
        		this.fnValidCallback = function() {
        			this.ccfCD_DEPT.from.CDTextBox.setFocus();
        		}
        		this.gfnAlert("부서를 입력하세요.", "fnValidCallback");
        		return validate;
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
        		//this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "execute") {
        		if (errorCode == 0) {
        			this.fnClose = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("급여적용이 완료되었습니다.", "fnClose");
        		} else {
        			this.gfnAlert(errorMsg);
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

        		case "ccfCD_DEPT"://부서코드
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.fnValidCallback = function() {
        					this.ccfCD_CORP.form.CDTextBox.setFocus();
        				}
        				this.gfnAlert("법인코드를 입력하세요.", "fnValidCallback");
        				return false;
        			}
         			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
         			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "");
        			break;

        		case "ccfID_SABUN": // 사번
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.fnValidCallback = function() {
        						this.ccfCD_CORP.form.CDTextBox.setFocus();
        					}
        					this.gfnAlert("법인코드를 입력하세요.", "fnValidCallback");
        					return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        			dsUserParam.setColumn(nrow, "YN_CORP", "N");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        			break;

        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			this.ccfID_SABUN.form.fnCodeFindClear();
        			this.ccfCD_DEPT.form.fnCodeFindClear();
        			break;
        		case "ccfCD_DEPT"://부서
        			break;
        		case "ccfID_SABUN": // 사번코드
        			break;
        		default:
        	}
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.btnOK_onclick = function(obj,e){

        	if(!this.fnSelectValidate()) return false;

        	this.dsExecute.clearData();
        	var nrow = this.dsExecute.addRow();
        	this.dsExecute.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(0, "TY_GUBUN"));
        	this.dsExecute.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsExecute.setColumn(nrow, "YM_DEDUCTION", this.dsList.getColumn(0, "YM_DEDUCTION"));
        	this.dsExecute.setColumn(nrow, "YM_SALARY", this.dsList.getColumn(0, "YM_SALARY"));
        	this.dsExecute.setColumn(nrow, "TY_SALARY", this.dsList.getColumn(0, "TY_SALARY"));
        	this.dsExecute.setColumn(nrow, "SN_SALARY", this.dsList.getColumn(0, "SN_SALARY"));

        	var sTY_WORK = this.dsList.getColumn(0, "TY_WORK");
        	if(sTY_WORK == "%"){ // %	전체
        		this.dsExecute.setColumn(nrow, "ID_SABUN", "");
        		this.dsExecute.setColumn(nrow, "CD_DEPT", "");
        	}
        	else if(sTY_WORK == "1"){ // 1	특정사번
        		this.dsExecute.setColumn(nrow, "CD_DEPT", "");
        		this.dsExecute.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));

        	}
        	else if(sTY_WORK == "2"){ // 2	특정부서
        		this.dsExecute.setColumn(nrow, "ID_SABUN", "");
        		this.dsExecute.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(0, "CD_DEPT"));
        	}

        	trace("test->" + this.dsExecute.saveXML());

        	var strSvcId    = "execute";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "execute=dsExecute";
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

        this.btnCANCLE_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        this.dsList_onvaluechanged = function(obj,e){
        	if(e.newvalue != e.oldvalue){
        		if(e.columnid == "TY_WORK"){
        			var sVal = e.newvalue;

        			this.staTARGET.set_text(sVal=="1"?"대상사번":sVal=="2"?"부서":"");
        			this.staTARGET.set_visible(sVal=="%"?false:true);
        			this.sta11.set_visible(sVal=="%"?false:true);

        			this.ccfID_SABUN.set_visible(sVal=="%"?false:sVal=="1"?true:false);
        			this.ccfCD_DEPT.set_visible(sVal=="%"?false:sVal=="2"?true:false);

        			this.ccfID_SABUN.form.CDTextBox.set_value("");
        			this.ccfID_SABUN.form.DSTextBox.set_value("");
        			this.ccfCD_DEPT.form.CDTextBox.set_value("");
        			this.ccfCD_DEPT.form.DSTextBox.set_value("");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.staTITLE.addEventHandler("onclick",this.staTITLE_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.cboSN_SALARY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.cboTY_SALARY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAU_INSURANCE_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
