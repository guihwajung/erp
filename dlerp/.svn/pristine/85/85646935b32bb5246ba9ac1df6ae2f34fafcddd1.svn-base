(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAB_TUITION_SALARY_DLG");
            this.set_titletext("급여적용");
            this.getSetter("maxwidth").set("380");
            this.getSetter("maxheight").set("420");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"GB_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"YY_TUITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TUITION\" type=\"STRING\" size=\"256\"/><Column id=\"YM_FITNESS\" type=\"STRING\" size=\"256\"/><Column id=\"YM_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_SALARY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DABPR_TUITION_EXECUTE</Col></Row><Row><Col id=\"TARGET\">execute1</Col><Col id=\"SP\">DABPR_FITNESS_EXECUTE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">S</Col><Col id=\"VALUE\">급여</Col></Row><Row><Col id=\"VALUE\">상여</Col><Col id=\"CODE\">B</Col></Row><Row><Col id=\"VALUE\">성과급</Col><Col id=\"CODE\">X</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSN_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">1</Col></Row><Row><Col id=\"VALUE\">2</Col><Col id=\"CODE\">2</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">3</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"VALUE\">4</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"VALUE\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_MAGAM", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">M</Col><Col id=\"VALUE\">마감</Col></Row><Row><Col id=\"CODE\">C</Col><Col id=\"VALUE\">마감취소</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGB_SALARY", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">T</Col><Col id=\"VALUE\">학자금</Col></Row><Row><Col id=\"CODE\">F</Col><Col id=\"VALUE\">바디스타</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_TUITION", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\"/></Row><Row><Col id=\"CODE\">01</Col><Col id=\"VALUE\">1분기</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"VALUE\">2분기</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"VALUE\">3분기</Col></Row><Row><Col id=\"CODE\">04</Col><Col id=\"VALUE\">4분기</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","2","10","344","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("급여적용");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","80","308","157","42",null,null,null,null,null,null,this);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","89","8","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","9","8","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
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
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_textDecoration("none");
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
            obj.set_text("지급구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","86","220","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboTY_SALARY","92","225","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("dsTY_SALARY");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSN_SALARY","157","225","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("dsSN_SALARY");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_index("-1");
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

            obj = new Static("staTY_MAGAM","0","46","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("마감여부");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","86","46","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoTY_MAGAM","92","49","148","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_innerdataset("dsTY_MAGAM");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_text("마감");
            obj.set_value("");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_PAYMENT00","0","162","87","30",null,null,null,null,null,null,this);
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

            obj = new Static("staYM_PAYMENT01","0","191","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("급여년월");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta07","86","191","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYM_PAYMENT01","92","196","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYM_PAYMENT00","92","167","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_MAGAM00","0","75","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("급여구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta08","86","75","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoTY_MAGAM00","92","78","148","24",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_innerdataset("dsGB_SALARY");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_enable("false");
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

            obj = new Div("ctclYY_WORK","92","109","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","0","278","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("급여일");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_textDecoration("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","86","278","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("tclDT_OPEN","92","283","115","20",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","rdoTY_MAGAM","value","dsList","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","rdoTY_MAGAM00","value","dsList","GB_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","ctclYY_WORK.form.TextBox","value","dsList","YY_TUITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","cboCD_TUITION","value","dsList","CD_TUITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","ctclYM_PAYMENT00.form.TextBox","value","dsList","YM_FITNESS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","ctclYM_PAYMENT01.form.TextBox","value","dsList","YM_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","cboTY_SALARY","value","dsList","TY_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cboSN_SALARY","value","dsList","SN_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tclDT_OPEN","value","dsList","DT_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_TUITION_SALARY_DLG.xfdl", function() {
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

        	var frame = this.getOwnerFrame();

        	trace(frame.GB_SALARY);
        	trace(frame.YY_TUITION);
        	trace(frame.CD_TUITION);
        	trace(frame.YM_FITNESS);
        	trace(frame.CD_CORP);
        	trace(frame.DS_CORP);

        	//마감여부
        	this.rdoTY_MAGAM.set_value("M");
        	//급여구분
        	this.rdoTY_MAGAM00.set_value(frame.GB_SALARY);
        	//지급년도
        	if(this.rdoTY_MAGAM00.value == "T"){
        		this.ctclYY_WORK.form.TextBox.set_value(frame.YY_TUITION);
        		this.ctclYY_WORK.set_enable(true);
        	}
        	else if(this.rdoTY_MAGAM00.value == "F"){
        		this.ctclYY_WORK.form.TextBox.set_value("");
        	}

        	//지급분기
        	if(this.rdoTY_MAGAM00.value == "T"){
        		this.cboCD_TUITION.set_value(frame.CD_TUITION);
        		this.cboCD_TUITION.set_enable(true);
        	}
        	else if(this.rdoTY_MAGAM00.value == "F"){
        		this.cboCD_TUITION.set_value("");
        	}

        	//관리년월
        	if(this.rdoTY_MAGAM00.value == "T"){
        		this.ctclYM_PAYMENT00.form.TextBox.set_value("");
        	}
        	else if(this.rdoTY_MAGAM00.value == "F"){
        		this.ctclYM_PAYMENT00.form.TextBox.set_value(frame.YM_FITNESS);
        		this.ctclYM_PAYMENT00.set_enable(true);
        	}

        	//급여년월
        	this.ctclYM_PAYMENT01.form.TextBox.set_value(frame.YM_SALARY);
        	//지급구분, 지급차수
        	if(this.rdoTY_MAGAM00.value == "T"){
        		this.cboTY_SALARY.set_value("S");
        		this.cboSN_SALARY.set_value("2");
        	}
        	else if(this.rdoTY_MAGAM00.value == "F"){
        		this.cboTY_SALARY.set_value("S");
        		this.cboSN_SALARY.set_value("4");
        	}

        	//법인
        	this.ccfCD_CORP.form.CDTextBox.set_value(frame.CD_CORP);
            this.ccfCD_CORP.form.DSTextBox.set_value(frame.DS_CORP);

        	//급여일
        	this.tclDT_OPEN.set_value(frame.DT_SALARY);


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

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("TY_GUBUN", "string");
        	this.dsExecute.addColumn("GB_SALARY", "string");
            this.dsExecute.addColumn("YY_TUITION", "string");
        	this.dsExecute.addColumn("CD_TUITION", "string");
        	this.dsExecute.addColumn("YM_SALARY", "string");
        	this.dsExecute.addColumn("TY_SALARY", "string");
        	this.dsExecute.addColumn("SN_SALARY", "bigdecimal");
        	this.dsExecute.addColumn("CD_CORP", "string");
        	this.dsExecute.addColumn("DT_SALARY", "string");
        	this.dsExecute.addColumn("ID_INSERT", "string");
        	this.dsExecute.addColumn("YM_FITNESS", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

         	var validate = true;

        	//공제년월
        	if (this.gfnIsNull(this.ctclYM_PAYMENT01.form.TextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclYM_PAYMENT01.form.TextBox.setFocus();
        		}
        		this.gfnAlert("급여년월을 입력하세요.");
        		return validate;
        	}

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
        	if (svcID == "select") {
        		//this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "execute") {
        		if (errorCode == 0) {
        			this.fnClose = function() {
        				this.getParentContext().close(true);
        			}
        			if (this.rdoTY_MAGAM.value == "M") {
        					this.gfnAlert("급여적용이 마감되었습니다.", "fnClose");
        			}
        			else {
        					this.gfnAlert("급여적용이 마감취소되었습니다.", "fnClose");
        			}
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
        // 		case "ccfCD_CORP": // 법인코드
        // 			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        // 			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        // 			break;

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
        	if(!this.fnSelectValidate()) return false;

        	this.dsExecute.clearData();
        	var nrow = this.dsExecute.addRow();

        	var inData      = "";

        	if(this.rdoTY_MAGAM00.value == "T") {
        		this.dsExecute.setColumn(nrow, "CD_TUITION", this.dsList.getColumn(0, "CD_TUITION"));
        		this.dsExecute.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(0, "TY_GUBUN"));
        		this.dsExecute.setColumn(nrow, "GB_SALARY", this.dsList.getColumn(0, "GB_SALARY"));
        		this.dsExecute.setColumn(nrow, "YY_TUITION", this.dsList.getColumn(0, "YY_TUITION"));
        		this.dsExecute.setColumn(nrow, "YM_SALARY", this.dsList.getColumn(0, "YM_SALARY"));
        		this.dsExecute.setColumn(nrow, "TY_SALARY", this.dsList.getColumn(0, "TY_SALARY"));
        		this.dsExecute.setColumn(nrow, "SN_SALARY", this.dsList.getColumn(0, "SN_SALARY"));
        		this.dsExecute.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        		this.dsExecute.setColumn(nrow, "DT_SALARY", this.dsList.getColumn(0, "DT_SALARY"));
        		this.dsExecute.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        		inData = "execute=dsExecute"
        	}

        	else if(this.rdoTY_MAGAM00.value == "F") {
        		this.dsExecute.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(0, "TY_GUBUN"));
        		this.dsExecute.setColumn(nrow, "GB_SALARY", this.dsList.getColumn(0, "GB_SALARY"));
        		this.dsExecute.setColumn(nrow, "YM_FITNESS", this.dsList.getColumn(0, "YM_FITNESS"));
        		this.dsExecute.setColumn(nrow, "YM_SALARY", this.dsList.getColumn(0, "YM_SALARY"));
        		this.dsExecute.setColumn(nrow, "TY_SALARY", this.dsList.getColumn(0, "TY_SALARY"));
        		this.dsExecute.setColumn(nrow, "SN_SALARY", this.dsList.getColumn(0, "SN_SALARY"));
        		this.dsExecute.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        		this.dsExecute.setColumn(nrow, "DT_SALARY", this.dsList.getColumn(0, "DT_SALARY"));
        		this.dsExecute.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        		inData = "execute1=dsExecute"
        	}

        	var strSvcId    = "execute";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.cboTY_SALARY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.cboSN_SALARY.addEventHandler("onitemchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DAB_TUITION_SALARY_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
