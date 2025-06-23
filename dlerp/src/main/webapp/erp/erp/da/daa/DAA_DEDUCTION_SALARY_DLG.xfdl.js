(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAA_DEDUCTION_SALARY_DLG");
            this.set_titletext("급여적용");
            this.getSetter("maxwidth").set("380");
            this.getSetter("maxheight").set("390");
            if (Form == this.constructor)
            {
                this._setFormPosition(346,330);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"SN_SALARY\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ORG2\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SUBST\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DAAPR_DEDUCTION_DETAIL_EXECUTE</Col></Row></Rows>");
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
            
            // UI Components Initialize
            obj = new Static("staTITLE","2","10","344","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("급여적용");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","72","250","200","51",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","120","3","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","30","3","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("staYM_PAYMENT","0","75","87","30",null,null,null,null,null,null,this);
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

            obj = new Static("staCD_CORP","0","133","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_textDecoration("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","86","133","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","138","248","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_SALARY","0","104","87","30",null,null,null,null,null,null,this);
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

            obj = new Combo("cboTY_SALARY","92","109","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("dsTY_SALARY");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_value("1");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSN_SALARY","157","109","40","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_innerdataset("dsSN_SALARY");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_readonly("false");
            obj.set_enable("false");
            obj.set_value("1");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ORDER","0","190","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("발령범위");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staTARGET","0","218","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("대상사번");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta11","86","218","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","86","190","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYM_PAYMENT","92","80","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoTY_WORK","93","193","239","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdoTY_WORK_innerdataset = new nexacro.NormalDataset("rdoTY_WORK_innerdataset", obj);
            rdoTY_WORK_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">특정사번</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">특정부서</Col></Row><Row><Col id=\"codecolumn\">%</Col><Col id=\"datacolumn\">전체</Col></Row></Rows>");
            obj.set_innerdataset(rdoTY_WORK_innerdataset);
            obj.set_text("전체");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","92","223","248","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("18");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT2");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","92","223","248","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("24");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SUBST","0","161","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("공제항목");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","86","161","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_SUBST","92","166","248","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DAX_CFSALARY_CODE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("21");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_enable("false");
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

            obj = new Edit("edtYM_PAYMENT","220","79","75","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ctclYM_PAYMENT.form.TextBox","value","dsList","YM_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","cboTY_SALARY","value","dsList","TY_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cboSN_SALARY","value","dsList","SN_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","ccfID_SABUN.form.CDTextBox","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","ccfID_SABUN.form.DSTextBox","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","ccfCD_DEPT.form.CDTextBox","value","dsList","CD_ORG2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","ccfCD_SUBST.form.CDTextBox","value","dsList","CD_SUBST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","rdoTY_MAGAM","value","dsList","TY_GUBUN");
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
        this.registerScript("DAA_DEDUCTION_SALARY_DLG.xfdl", function() {
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
        	//마감여부
        	this.rdoTY_MAGAM.set_value(frame.YN_SALARY);
        	//공제년월
        	this.ctclYM_PAYMENT.form.TextBox.set_value(frame.YM_SALARY);
        	//지급구분, 지급차수
        	this.cboTY_SALARY.set_value("S");
        	this.cboSN_SALARY.set_value("1");
        	//법인
        	this.ccfCD_CORP.form.CDTextBox.set_value(frame.CD_CORP);
            this.ccfCD_CORP.form.DSTextBox.set_value(frame.DS_CORP);
        	//공제항목
        	this.ccfCD_SUBST.form.CDTextBox.set_value("74");
        	this.ccfCD_SUBST.form.DSTextBox.set_value("경조금");
        	//작업대상
        	this.rdoTY_WORK.set_value("%");
        	this.staTARGET.set_visible(false);
        	this.sta11.set_visible(false);
        	this.ccfID_SABUN.set_visible(false);
        	this.ccfCD_DEPT.set_visible(false);

        	// 지급월
        	this.edtYM_PAYMENT.set_value(frame.YM_SALARY);
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
        	this.dsExecute.addColumn("TY_MAGAM", "string");
        	this.dsExecute.addColumn("CD_CORP", "string");
        	this.dsExecute.addColumn("YM_DEDUCTION", "string");
        	this.dsExecute.addColumn("YM_PAYMENT", "string");
        	this.dsExecute.addColumn("TY_SALARY", "string");
        	this.dsExecute.addColumn("SN_SALARY", "bigdecimal");
        	this.dsExecute.addColumn("CD_SUBST", "string");
        	this.dsExecute.addColumn("TY_GUBUN", "string");
        	//this.dsExecute.addColumn("ID_SABUN", "string");
        	//this.dsExecute.addColumn("CD_ORG2", "string");
        	this.dsExecute.addColumn("ID_INSERT", "string");

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
        	if (this.gfnIsNull(this.ctclYM_PAYMENT.form.TextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclYM_PAYMENT.form.TextBox.setFocus();
        		}
        		this.gfnAlert("공제년월을 입력하세요.");
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

        	//작업대상 사번일때 - 코드는 개발시 변경
        	if(this.rdoTY_WORK.value == "1" && this.gfnIsNull(this.ccfID_SABUN.form.CDTextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfID_SABUN.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사번을 입력하세요.");
        		return false;
        	}

        	//작업대상 부서일때 - 코드는 개발시 변경
        	if(this.rdoTY_WORK.value == "2" && this.gfnIsNull(this.ccfCD_DEPT.form.CDTextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPT.from.CDTextBox.setFocus();
        		}
        		this.gfnAlert("부서를 입력하세요.");
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
        // 		case "ccfCD_CORP": // 법인코드
        // 			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        // 			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        // 			break;

        		case "ccfCD_DEPT"://부서코드
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.fnBeforeUserCallback = function() {
        						this.ccfCD_CORP.form.CDTextBox.setFocus();
        					}
        					this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        					return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			break;

        		case "ccfID_SABUN": // 사번
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        			dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        			break;
        		case "ccfCD_SUBST": // 공제항목
        			dsUserParam.setColumn(nrow, "CD_GB", "S");
        			break;

        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			this.ccfID_SABUN.form.CDTextBox.set_value("");
        			this.ccfID_SABUN.form.DSTextBox.set_value("");
        			break;

        		case "ccfCD_DEPT"://부서
        			this.ccfID_SABUN.form.CDTextBox.set_value("");
        			this.ccfID_SABUN.form.DSTextBox.set_value("");
        			break;

        		case "ccfID_SABUN": // 사번코드
        			this.ccfCD_CORP.form.CDTextBox.set_value(arr[0]["CD_CORP"]);
        			this.ccfCD_CORP.form.DSTextBox.set_value(arr[0]["DS_CORP"]);
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

        this.btnOK_onclick = function(obj,e)
        {
        	if(!this.fnSelectValidate()) return false;
        	trace("지급월"+this.edtYM_PAYMENT.value);
        	this.dsExecute.clearData();
        	var nrow = this.dsExecute.addRow();
        	this.dsExecute.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(0, "TY_GUBUN"));
        	this.dsExecute.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsExecute.setColumn(nrow, "YM_DEDUCTION", this.dsList.getColumn(0, "YM_SALARY"));
        	this.dsExecute.setColumn(nrow, "YM_PAYMENT", this.edtYM_PAYMENT.value);
        	this.dsExecute.setColumn(nrow, "TY_SALARY", this.dsList.getColumn(0, "TY_SALARY"));
        	this.dsExecute.setColumn(nrow, "SN_SALARY", this.dsList.getColumn(0, "SN_SALARY"));
        	this.dsExecute.setColumn(nrow, "CD_SUBST", this.dsList.getColumn(0, "CD_SUBST"));
        	this.dsExecute.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        	//this.dsExecute.setColumn(nrow, "ID_SABUN", this.gfnIsNull(this.dsList.getColumn(0, "ID_SABUN")) ? "%" : this.dsList.getColumn(0, "ID_SABUN"));
        	//this.dsExecute.setColumn(nrow, "CD_ORG2", this.gfnIsNull(this.dsList.getColumn(0, "CD_ORG2")) ? "%" : this.dsList.getColumn(0, "CD_ORG2"));


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

        //작업대상 변경시
        this.rdoTY_WORK_onitemchanged = function(obj,e)
        {
        	this.staTARGET.set_text(obj.value=="1"?"대상사번":obj.value=="2"?"부서":"");
        	this.staTARGET.set_visible(obj.value=="%"?false:true);
        	this.sta11.set_visible(obj.value=="%"?false:true);

        	this.ccfID_SABUN.set_visible(obj.value=="%"?false:obj.value=="1"?true:false);
        	this.ccfCD_DEPT.set_visible(obj.value=="%"?false:obj.value=="2"?true:false);

        	this.ccfID_SABUN.form.CDTextBox.set_value("");
        	this.ccfID_SABUN.form.DSTextBox.set_value("");
        	this.ccfCD_DEPT.form.CDTextBox.set_value("");
        	this.ccfCD_DEPT.form.DSTextBox.set_value("");
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
            this.rdoTY_WORK.addEventHandler("onitemchanged",this.rdoTY_WORK_onitemchanged,this);
        };
        this.loadIncludeScript("DAA_DEDUCTION_SALARY_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
