(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAB_TUITION_ISSUE_SLIP_DLG");
            this.set_titletext("전표발행");
            this.getSetter("maxwidth").set("380");
            this.getSetter("maxheight").set("430");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_AUTOSLIP\" type=\"STRING\" size=\"256\"/><Column id=\"GB_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"YY_TUITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TUITION\" type=\"STRING\" size=\"256\"/><Column id=\"YM_FITNESS\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_BH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DABPR_TUITION_AUTOSLIP_ISSUE</Col></Row><Row><Col id=\"TARGET\">execute1</Col><Col id=\"SP\">DABPR_FITNESS_AUTOSLIP_ISSUE</Col></Row><Row><Col id=\"TARGET\">cancelSlip</Col><Col id=\"SP\">DABPR_TUITION_AUTOSLIP_CANCEL</Col></Row><Row><Col id=\"TARGET\">cancelSlip1</Col><Col id=\"SP\">DABPR_FITNESS_AUTOSLIP_CANCEL</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGB_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">T</Col><Col id=\"VALUE\">학자금</Col></Row><Row><Col id=\"CODE\">F</Col><Col id=\"VALUE\">바디스타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_TUITION", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\"/></Row><Row><Col id=\"CODE\">01</Col><Col id=\"VALUE\">1분기</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"VALUE\">2분기</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"VALUE\">3분기</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"VALUE\">4분기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_AUTOSLIP", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">ISSUE</Col><Col id=\"VALUE\">발행</Col></Row><Row><Col id=\"CODE\">CANCEL</Col><Col id=\"VALUE\">취소</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","2","10","344","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("전표발행");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","80","298","157","42",null,null,null,null,null,null,this);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","89","8","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","9","8","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("발행");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("staYM_PAYMENT","0","104","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("지급년도");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","86","104","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","249","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("법인");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","86","249","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","254","248","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_SALARY","0","220","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("관리부서");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","86","220","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SUBST","0","133","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("지급분기");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","86","133","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_FITNESS","0","162","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("관리년월");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta05","86","162","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_ACCOUNT","0","191","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("회계일자");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta07","86","191","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACCOUNT","92","196","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("staGB_SALARY","0","75","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("급여구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta08","86","75","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoGB_SALARY","92","78","148","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_innerdataset("dsGB_SALARY");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_enable("false");
            obj.set_readonly("true");
            obj.set_text("마감");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Combo("cboCD_TUITION","92","138","70","20",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_innerdataset("dsCD_TUITION");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYY_TUITION","92","109","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYM_FITNESS","92","167","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_BH","92","225","248","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_AUTOSLIP","0","46","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("발행구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","86","46","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoTY_AUTOSLIP","92","47","148","26",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_innerdataset("dsTY_AUTOSLIP");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_direction("vertical");
            obj.set_readonly("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","rdoGB_SALARY","value","dsList","GB_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ctclYY_TUITION.form.TextBox","value","dsList","YY_TUITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboCD_TUITION","value","dsList","CD_TUITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","ctclYM_FITNESS.form.TextBox","value","dsList","YM_FITNESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","ctclDT_ACCOUNT","value","dsList","DT_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","ccfCD_DEPT_BH.form.CDTextBox","value","dsList","CD_DEPT_BH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","rdoTY_AUTOSLIP","value","dsList","TY_AUTOSLIP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_TUITION_ISSUE_SLIP_DLG.xfdl", function() {
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

        	this.fnSetDisplay();
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
        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_DEPT_BH.CodeFindName = "DAX_CFDEPT";
        	this.ccfCD_DEPT_BH.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	//this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        // 부모창에서 받아온것 셋팅
        this.fnSetDisplay = function() {

        	var frame = this.getOwnerFrame();

        	//발행구분 - ISSUE:전표발행 CANCEL:전표취소
        	this.rdoTY_AUTOSLIP.set_value(frame.TY_AUTOSLIP);
        	var strText = (frame.TY_AUTOSLIP == "CANCEL") ? "발행취소" : "발행";
        	var benable = (frame.TY_AUTOSLIP == "CANCEL") ?  false : true;
        	this.divBtns.form.btnOK.set_text(strText);


        	// 회계일자
        	this.ctclDT_ACCOUNT.set_enable(benable);

        	// 관리부서
        	this.ccfCD_DEPT_BH.set_enable(benable);

        	//급여구분 - T:학자금 F:바디스타
        	this.rdoGB_SALARY.set_value(frame.GB_SALARY);

        	//지급년도
        	if(this.rdoGB_SALARY.value == "T"){
        		this.ctclYY_TUITION.form.TextBox.set_value(frame.YY_TUITION);
        		this.ctclYY_TUITION.set_enable(true);
        	} else if(this.rdoGB_SALARY.value == "F"){
        		this.ctclYY_TUITION.form.TextBox.set_value("");
        	}

        	//지급분기
        	if(this.rdoGB_SALARY.value == "T"){
        		this.cboCD_TUITION.set_value(frame.CD_TUITION);
        		this.cboCD_TUITION.set_enable(true);
        	}
        	else if(this.rdoGB_SALARY.value == "F"){
        		this.cboCD_TUITION.set_value("");
        	}

        	//관리년월
        	if(this.rdoGB_SALARY.value == "T"){
        		this.ctclYM_FITNESS.form.TextBox.set_value("");
        	}
        	else if(this.rdoGB_SALARY.value == "F"){
        		this.ctclYM_FITNESS.form.TextBox.set_value(frame.YM_FITNESS);
        		this.ctclYM_FITNESS.set_enable(true);
        	}

        	//법인
        	this.ccfCD_CORP.form.CDTextBox.set_value(frame.CD_CORP);
            this.ccfCD_CORP.form.DSTextBox.set_value(frame.DS_CORP);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("GB_SALARY", "string");
        	this.dsExecute.addColumn("YY_TUITION", "string");
        	this.dsExecute.addColumn("CD_TUITION", "string");
        	this.dsExecute.addColumn("YM_FITNESS", "string");
        	this.dsExecute.addColumn("CD_CORP", "string");
        	this.dsExecute.addColumn("DT_ACCOUNT", "string");
        	this.dsExecute.addColumn("CD_DEPT_BH", "string");
        	this.dsExecute.addColumn("ID_INSERT", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {

         	var validate = true;
        	var strMsg = "";

        	var TY_AUTOSLIP = this.dsList.getColumn(0, "TY_AUTOSLIP");	// 발행구분
        	var GB_SALARY = this.dsList.getColumn(0, "GB_SALARY");		// 급여구분 - T:학자금 F:바디스타
        	var YY_TUITION = this.dsList.getColumn(0, "YY_TUITION");	// 지급년도
        	var CD_TUITION = this.dsList.getColumn(0, "CD_TUITION");	// 지급분기
        	var YM_FITNESS = this.dsList.getColumn(0, "YM_FITNESS");	// 관리년월
        	var CD_CORP = this.dsList.getColumn(0, "CD_CORP");			// 법인코드
        	var DT_ACCOUNT = this.dsList.getColumn(0, "DT_ACCOUNT");	// 회계일자
        	var CD_DEPT_BH = this.dsList.getColumn(0, "CD_DEPT_BH");	// 관리부서

        	if(GB_SALARY == "T"){	// 학자금
        		if(this.gfnIsNull(YY_TUITION)) {
        			strMsg += "지급년도는 반드시 입력 하셔야 합니다.\n";
        		}
        		if(this.gfnIsNull(CD_TUITION)) {
        			strMsg += "지급분기는 반드시 입력 하셔야 합니다.\n";
        		}
        	}

        	if(GB_SALARY == "F" && this.gfnIsNull(YM_FITNESS)) {	// 바디스타
        		strMsg += "관리년월은 반드시 입력 하셔야 합니다.\n";
        	}

        	if(this.gfnIsNull(CD_CORP)) {
        		strMsg += "법인코드는 반드시 입력 하셔야 합니다.\n";
        	}


        	if(TY_AUTOSLIP == "ISSUE" && this.gfnIsNull(DT_ACCOUNT)) {
        		strMsg += "회계일자는 반드시 입력 하셔야 합니다.\n";
        	}

        	if(TY_AUTOSLIP == "ISSUE" && this.gfnIsNull(CD_DEPT_BH)) {
        		strMsg += "관리부서는 반드시 입력 하셔야 합니다.\n";
        	}

        	if(strMsg.length > 0) {
        		this.gfnAlert(strMsg);
        		return false;
        	}
        	return true;

        	//법인
        // 	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 		validate = false;
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        // 		return validate;
        // 	}

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
        		break;
        		case "execute":		// 전표발행 (학자금)
        		case "execute1":	// 전표발행 (바디스타)
        		case "cancelSlip1":	// 전표발행취소 (바디스타)
        		case "cancelSlip":	// 전표발행취소 (학자금)
        			if (errorCode == 0) {
        				this.getParentContext().close(true);
        			} else {
        				this.gfnAlert(errorMsg);
        			}
        		break;

        		default:
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	switch(id) {
        // 		case "ccfCD_CORP": // 법인코드
        // 			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        // 			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        // 			break;
        		case "ccfCD_DEPT_BH":
        			//var cd_corp = this.ccfCD_CORP.form.CDTextBox.value;
        			var cd_corp = this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value, this.AuthClient.CD_CORP);
        			var gr_search = this.gfnNvl(this.FormInfo.GR_SEARCH, this.getOwnerFrame().GR_SEARCH)

        			dsUserParam.setColumn(nrow, "GR_SEARCH", gr_search);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			//dsUserParam.setColumn(nrow, "CD_CORP", this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value,this.AuthClient.CD_CORP));
        			dsUserParam.setColumn(nrow, "CD_CORP", cd_corp);
        			dsUserParam.setColumn(nrow, "YN_CURRENT", "");

        			break;
        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id) {
        // 		case "ccfCD_CORP": // 법인코드
        // 			this.ccfID_SABUN.form.CDTextBox.set_value("");
        // 			this.ccfID_SABUN.form.DSTextBox.set_value("");
        // 			break;

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
        this.btnOK_onclick = function(obj,e)
        {
        	if(!this.fnSaveValidate()) return false;

        	//발행구분 - ISSUE:전표발행 CANCEL:전표취소
        	if(this.dsList.getColumn(0, "TY_AUTOSLIP") == "ISSUE"){
        		this.fnIssueSlip();
        	}else{
        		this.fnCancelSlip();
        	}
        };

        // 전표발행
        this.fnIssueSlip = function() {
        	this.dsExecute.clearData();
        	var nrow = this.dsExecute.addRow();
        	this.dsExecute.setColumn(nrow, "GB_SALARY", this.dsList.getColumn(0, "GB_SALARY"));
        	this.dsExecute.setColumn(nrow, "YY_TUITION", this.dsList.getColumn(0, "YY_TUITION"));
        	this.dsExecute.setColumn(nrow, "CD_TUITION", this.dsList.getColumn(0, "CD_TUITION"));
        	this.dsExecute.setColumn(nrow, "YM_FITNESS", this.dsList.getColumn(0, "YM_FITNESS"));
        	this.dsExecute.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsExecute.setColumn(nrow, "DT_ACCOUNT", this.dsList.getColumn(0, "DT_ACCOUNT"));
        	this.dsExecute.setColumn(nrow, "CD_DEPT_BH", this.dsList.getColumn(0, "CD_DEPT_BH"));
        	this.dsExecute.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        	var strSvcId    = "execute";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = (this.rdoGB_SALARY.value == "T") ? "execute=dsExecute" : "execute1=dsExecute";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        // 전표발행취소
        this.fnCancelSlip = function()
        {
        	this.dsExecute.clearData();
        	var nrow = this.dsExecute.addRow();
        	this.dsExecute.setColumn(nrow, "GB_SALARY", this.dsList.getColumn(0, "GB_SALARY"));
        	this.dsExecute.setColumn(nrow, "YY_TUITION", this.dsList.getColumn(0, "YY_TUITION"));
        	this.dsExecute.setColumn(nrow, "CD_TUITION", this.dsList.getColumn(0, "CD_TUITION"));
        	this.dsExecute.setColumn(nrow, "YM_FITNESS", this.dsList.getColumn(0, "YM_FITNESS"));
        	this.dsExecute.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsExecute.setColumn(nrow, "DT_ACCOUNT", this.dsList.getColumn(0, "DT_ACCOUNT"));
        	this.dsExecute.setColumn(nrow, "CD_DEPT_BH", this.dsList.getColumn(0, "CD_DEPT_BH"));
        	this.dsExecute.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        	var strSvcId    = "cancelSlip";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = (this.rdoGB_SALARY.value == "T") ? "cancelSlip=dsExecute" : "cancelSlip1=dsExecute";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        };

        this.btnCANCLE_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
        };
        this.loadIncludeScript("DAB_TUITION_ISSUE_SLIP_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
