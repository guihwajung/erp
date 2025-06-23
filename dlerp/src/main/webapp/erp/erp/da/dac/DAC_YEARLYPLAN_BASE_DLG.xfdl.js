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
            this.set_titletext("일정등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(373,265);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DACPR_YEARLYPLAN_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_PLAN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"YM_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_PLAN\">P</Col><Col id=\"TY_GUBUN\">Y</Col><Col id=\"YM_BASE\"/><Col id=\"CD_CORP\"/><Col id=\"TY_TARGET\">%</Col><Col id=\"CD_DEPT\"/><Col id=\"ID_SABUN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">계속근로</Col><Col id=\"CD_CODE\">Y</Col></Row><Row><Col id=\"DS_CODE\">1년미만</Col><Col id=\"CD_CODE\">M</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_PLAN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">계획</Col><Col id=\"CD_CODE\">P</Col></Row><Row><Col id=\"DS_CODE\">지정</Col><Col id=\"CD_CODE\">A</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_TARGET", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">전체</Col><Col id=\"CD_CODE\">%</Col></Row><Row><Col id=\"DS_CODE\">특정사번</Col><Col id=\"CD_CODE\">S</Col></Row><Row><Col id=\"DS_CODE\">특정부서</Col><Col id=\"CD_CODE\">D</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","-6","100.00%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("일정등록");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_PLAN","0","staTITLE:0","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("계획구분");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_PLAN_bg","staTY_PLAN:-1","staTY_PLAN:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_PLAN","staTY_PLAN:5","staTY_PLAN:-25","222","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsTY_PLAN");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("계획");
            obj.set_value("P");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","0","staTY_PLAN:-1","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("구분");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN_bg","staTY_GUBUN:-1","staTY_GUBUN:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","staTY_GUBUN:5","staTY_GUBUN:-25","222","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("계속근로");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("stalYM_BASE","0","staTY_GUBUN:-1","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("대상년월");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("stalYM_BASE_bg","stalYM_BASE:-1","stalYM_BASE:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYM_BASE","stalYM_BASE:5","stalYM_BASE:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","stalYM_BASE:-1","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("법인");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP_bg","staCD_CORP:-1","staCD_CORP:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","staCD_CORP:5","staCD_CORP:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_TARGET","0","staCD_CORP:-1","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("대상자");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_TARGET_bg","staTY_TARGET:-1","staTY_TARGET:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_TARGET","staTY_TARGET:5","staTY_TARGET:-25","222","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_innerdataset("dsTY_TARGET");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("전체");
            obj.set_value("%");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0","staTY_TARGET:-1","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_bg","staID_SABUN:-1","staID_SABUN:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfID_SABUN","staID_SABUN:5","staID_SABUN:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("19");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","0","staID_SABUN:-1","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_bg","staCD_DEPT:-1","staCD_DEPT:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_DEPT","staCD_DEPT:5","staCD_DEPT:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("21");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","130","staCD_DEPT:10","130","27",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","0","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("9");
            obj.set_text("확인");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnOk:10","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("10");
            obj.set_text("취소");
            this.divData.form.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.rdoTY_PLAN","value","dsData","TY_PLAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.rdoTY_GUBUN","value","dsData","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ctclYM_BASE.form.TextBox","value","dsData","YM_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.cfCD_CORP.form.CDTextBox","value","dsData","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.cfCD_CORP.form.DSTextBox","value","dsData","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.rdoTY_TARGET","value","dsData","TY_TARGET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.cfID_SABUN.form.CDTextBox","value","dsData","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.cfID_SABUN.form.DSTextBox","value","dsData","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.cfCD_DEPT.form.CDTextBox","value","dsData","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.cfCD_DEPT.form.DSTextBox","value","dsData","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAC_YEARLYPLAN_BASE_DLG.xfdl", function() {
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
        	this.rdoTY_PLAN   = this.divData.form.rdoTY_PLAN;		// 계획구분
        	this.rdoTY_GUBUN  = this.divData.form.rdoTY_GUBUN;		// 구분
        	this.ctclYM_BASE  = this.divData.form.ctclYM_BASE;		// 대상년월
        	this.cfCD_CORP    = this.divData.form.cfCD_CORP;		// 법인
        	this.rdoTY_TARGET = this.divData.form.rdoTY_TARGET;		// 대상자
        	this.cfID_SABUN   = this.divData.form.cfID_SABUN;		// 성명
        	this.cfCD_DEPT    = this.divData.form.cfCD_DEPT;		// 부서
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cfCD_CORP.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 법인
        	this.cfCD_CORP.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.cfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 성명
        	this.cfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";
        	this.cfCD_DEPT.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 부서
        	this.cfCD_DEPT.AfterCDTextChanged      = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 저장
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("TY_PLAN", "string");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("YR_BASE", "string");
        	this.dsSave.addColumn("YM_BASE", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("TY_TARGET", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("IP_ADDR", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("GR_CORP", "string");
        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	console.log("this.getOwnerFrame().CD_CORP", this.getOwnerFrame().CD_CORP);

        	this.dsData.setColumn(0, "YM_BASE", this.gfnGetDate().substring(0, 6));
        	this.fnSetCodeFinder(this.cfCD_CORP, this.getOwnerFrame().CD_CORP);

        	//this.dsData.setColumn(0, "TY_GUBUN" , this.gfnNvl(this.getOwnerFrame().TY_GUBUN, ""));
        	//this.dsData.setColumn(0, "TY_TARGET", "%");
        	//this.dsData.setColumn(0, "CD_CORP"  , this.gfnNvl(this.getOwnerFrame().CD_CORP, ""));
        	//this.dsData.setColumn(0, "DS_CORP"  , this.gfnNvl(this.getOwnerFrame().DS_CORP, ""));
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
        this.fnSelectValid = function() {
        	return true;
        }

        this.fnSaveValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsData.getColumn(0,"CD_CORP"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.cfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법은은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	} else if (this.gfnIsNull(this.dsData.getColumn(0,"YM_BASE"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclYM_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("대상년월은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}

        	var sTY_TARGET = this.dsData.getColumn(0,"TY_TARGET");	// 대상
        	if (sTY_TARGET == "%") {
        		// %	전체
        	} else if (sTY_TARGET == "S") {
        		// S	특정사번
        		if (this.gfnIsNull(this.dsData.getColumn(0,"ID_SABUN"))) {
        			validate = false;
        			this.fnVaidateCallback = function() {
        				this.divData.form.cfID_SABUN.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("사번은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		}
        	} else if (sTY_TARGET == "D") {
        		// D	특정부서
        		if (this.gfnIsNull(this.dsData.getColumn(0,"CD_DEPT"))) {
        			validate = false;
        			this.fnVaidateCallback = function() {
        				this.divData.form.cfCD_DEPT.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("부서는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        		}
        	}

        	return validate;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 확인 버튼
        this.divData_btnOk_onclick = function(obj, e) {
        	if (!this.fnSaveValidate()) return false;

        	this.dsSave.clearData();
        	this.dsSave.addRow();
        	this.dsSave.setColumn(0, "TY_SAVE"  , "C");
        	this.dsSave.setColumn(0, "TY_PLAN"  , this.dsData.getColumn(0, "TY_PLAN"));
        	this.dsSave.setColumn(0, "TY_GUBUN" , this.dsData.getColumn(0, "TY_GUBUN"));
        	this.dsSave.setColumn(0, "YR_BASE"  , this.dsData.getColumn(0, "YM_BASE").substr(0, 4));
        	this.dsSave.setColumn(0, "YM_BASE"  , this.dsData.getColumn(0, "YM_BASE"));
        	this.dsSave.setColumn(0, "CD_CORP"  , this.dsData.getColumn(0, "CD_CORP"));
        	this.dsSave.setColumn(0, "TY_TARGET", this.dsData.getColumn(0, "TY_TARGET"));
        	this.dsSave.setColumn(0, "CD_DEPT"  , this.dsData.getColumn(0, "CD_DEPT"));
        	this.dsSave.setColumn(0, "ID_SABUN" , this.dsData.getColumn(0, "ID_SABUN"));
        	this.dsSave.setColumn(0, "ID_USER"  , this.AuthClient.ID_USER);
        	this.dsSave.setColumn(0, "IP_ADDR"  , this.AuthClient.NO_IP);
        	this.dsSave.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSave.setColumn(0, "GR_CORP"  , this.AuthClient.CD_CORP);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
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

        // 취소 버튼
        this.divData_btnCancel_onclick = function(obj, e) {
        	this.getParentContext().close(false);
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "save") {
        		if (errorCode == 0) {
        			this.getParentContext().close(true);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.dsData_onvaluechanged = function(obj,e){
        	if (e.newvalue != e.oldvalue) {
        		if (e.columnid == "TY_TARGET") {
        			var sVal = e.newvalue;
        			if (sVal == "%") {	// %	전체
        				this.cfID_SABUN.set_enable(false);
        				this.cfCD_DEPT.set_enable(false);
        				this.fnResetCodeFinder(this.cfID_SABUN, this.dsData, ["ID_SABUN", "DS_HNAME"]);
        				this.fnResetCodeFinder(this.cfCD_DEPT, this.dsData, ["CD_DEPT", "DS_DEPT"]);
        			} else if (sVal == "S") {	// S	특정사번
        				this.cfID_SABUN.set_enable(true);
        				this.cfCD_DEPT.set_enable(false);
        				this.fnResetCodeFinder(this.cfCD_DEPT, this.dsData, ["CD_DEPT", "DS_DEPT"]);
        			} else if (sVal == "D") {	// D	특정부서
        				this.cfID_SABUN.set_enable(false);
        				this.fnResetCodeFinder(this.cfID_SABUN, this.dsData, ["ID_SABUN", "DS_HNAME"]);
        				this.cfCD_DEPT.set_enable(true);
        			}
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "cfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);
        	} else if (id == "cfID_SABUN") {
         		if (this.gfnIsNull(this.cfCD_CORP.form.CDTextBox.value)) {
         			this.cfCD_CORP.form.CDTextBox.setFocus();
         			this.gfnAlert("법인을 먼저 선택하시기 바랍니다.");
         			return false;
         		}
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.cfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");   // 재직구분
        	} else if (id == "cfCD_DEPT") {
        		if (this.gfnIsNull(this.cfCD_CORP.form.CDTextBox.value)) {
         			this.cfCD_CORP.form.CDTextBox.setFocus();
         			this.gfnAlert("법인을 먼저 선택하시기 바랍니다.");
         			return false;
         		}
        		dsUserParam.setColumn(nrow, "GR_SEARCH" ,  this.FormInfo.GR_SEARCH);	// 사용자 권한
        		dsUserParam.setColumn(nrow, "CD_DEPT"   ,  this.AuthClient.CD_DEPT);	// 로그인부서
        		dsUserParam.setColumn(nrow, "CD_CORP"   ,  this.cfCD_CORP.form.CDTextBox.value);	// 조회조건에 있는 소속법인
        		dsUserParam.setColumn(nrow, "YN_CURRENT",  "Y");
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	if (id == "cfCD_CORP") {
        		this.fnResetCodeFinder(this.cfCD_DEPT, this.dsData, ["CD_DEPT", "DS_DEPT"]);
        		this.fnResetCodeFinder(this.cfID_SABUN, this.dsData, ["ID_SABUN", "DS_HNAME"]);
        	} else if (id == "cfCD_DEPT" ) {
        		;
        	} else if (id == "cfID_SABUN") {
        		;
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

        /************************************************************************
         * 기타 함수
         ************************************************************************/
        // 코드파인더 초기화
        this.fnResetCodeFinder = function(obj, dataset, columns) {
        	obj.form.fnCodeFindClear();
        	for (var i = 0; i < columns.length; i++) {
        		dataset.setColumn(0, columns[i], "");
        	}
        }

        // 코드파인더 설정
        this.fnSetCodeFinder = function(obj, value) {
        	obj.form.CDTextBox.set_value(value);
        	obj.form.fnCodeFindLoad();
        }

        // 객체 초기화
        this.fnResetObjectValue = function(obj, dataset, columns) {
        	obj.set_value("");
        	for (var i = 0; i < columns.length; i++) {
        		dataset.setColumn(0, columns[i], "");
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staTY_PLAN.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.staTY_GUBUN.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.divBtns.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.divBtns.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.dsData.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
        };
        this.loadIncludeScript("DAC_YEARLYPLAN_BASE_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
