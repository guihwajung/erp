(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAU_YEARENDCOLLECT_DLG");
            this.set_titletext("근로소득 원천징수부");
            this.getSetter("maxwidth").set("388");
            this.getSetter("maxheight").set("346");
            if (Form == this.constructor)
            {
                this._setFormPosition(348,271);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">report_Y</Col><Col id=\"SP\">DAUPR_SALARYTAX_SELECT</Col></Row><Row><Col id=\"TARGET\">report_Y_Sub</Col><Col id=\"SP\">DAUPR_SALARYTAX_SUB_SELECT</Col></Row><Row><Col id=\"TARGET\">report_N</Col><Col id=\"SP\">DAVPR_SALARYTAX_SELECT</Col></Row><Row><Col id=\"TARGET\">report_N_Sub</Col><Col id=\"SP\">DAVPR_SALARYTAX_SUB_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_PRINT", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">전체</Col><Col id=\"CODE\">%</Col></Row><Row><Col id=\"VALUE\">특정부서</Col><Col id=\"CODE\">2</Col></Row><Row><Col id=\"VALUE\">특정사번</Col><Col id=\"CODE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SORT", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">부서순</Col></Row><Row><Col id=\"VALUE\">사번순</Col><Col id=\"CODE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_REGIST\" type=\"STRING\" size=\"256\"/><Column id=\"YM_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"OPT_PRINT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DT_REGIST\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","-5","344","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("근로소득 원천징수부");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_REGIST","0","staTITLE:5","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("작성일자");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_REGIST_bg","staDT_REGIST:-1","staDT_REGIST:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REGIST","staDT_REGIST:5","staDT_REGIST:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYM_BASE","0","staDT_REGIST:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("적용년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYM_BASE_bg","staYM_BASE:-1","staYM_BASE:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYM_BASE","staYM_BASE:5","staYM_BASE:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYM_BASE_extra","ctclYM_BASE:10","staYM_BASE:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("최종급여월 입력");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSEQ_ORDER","0","staYM_BASE:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSEQ_ORDER_bg","staSEQ_ORDER:-1","staSEQ_ORDER:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoSEQ_ORDER","staSEQ_ORDER:5","staSEQ_ORDER:-25","140","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_innerdataset("dsTY_SORT");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_text("부서순");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","staSEQ_ORDER:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("법인코드");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP_bg","staCD_CORP:-1","staCD_CORP:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","staCD_CORP:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP2");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staOPT_PRINT","0","staCD_CORP:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_text("출력옵션");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staOPT_PRINT_bg","staOPT_PRINT:-1","staOPT_PRINT:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboOPT_PRINT","staOPT_PRINT:5","staOPT_PRINT:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_innerdataset("dsTY_PRINT");
            obj.set_text("전체");
            obj.set_value("%");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","0","staOPT_PRINT:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_text("부서");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_bg","staCD_DEPT:-1","staCD_DEPT:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:5","staCD_DEPT:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("19");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0","staCD_DEPT:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_text("성명");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_bg","staID_SABUN:-1","staID_SABUN:-30","262","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:5","staID_SABUN:-25","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("19");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","110","staID_SABUN:10","130","27",null,null,null,null,null,null,this.divData.form);
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
            obj = new BindItem("item0","divData.form.ctclDT_REGIST","value","dsData","DT_REGIST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ctclYM_BASE.form.TextBox","value","dsData","YM_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.rdoSEQ_ORDER","value","dsData","SEQ_ORDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ccfCD_CORP.form.CDTextBox","value","dsData","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ccfCD_CORP.form.DSTextBox","value","dsData","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.cboOPT_PRINT","value","dsData","OPT_PRINT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ccfCD_DEPT.form.CDTextBox","value","dsData","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ccfCD_DEPT.form.DSTextBox","value","dsData","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ccfID_SABUN.form.CDTextBox","value","dsData","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ccfID_SABUN.form.DSTextBox","value","dsData","DS_HNAME");
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
        this.registerScript("DAU_YEARENDCOLLECT_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj, e) {
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
        	this.ctclDT_REGIST = this.divData.form.ctclDT_REGIST;	// 작성일자
        	this.ctclYM_BASE   = this.divData.form.ctclYM_BASE;		// 적용년월
        	this.rdoSEQ_ORDER  = this.divData.form.rdoSEQ_ORDER;	// 정렬순서
        	this.ccfCD_CORP    = this.divData.form.ccfCD_CORP;		// 법인
        	this.cboOPT_PRINT  = this.divData.form.cboOPT_PRINT;	// 출력옵션
        	this.staCD_DEPT    = this.divData.form.staCD_DEPT;		// 부서
        	this.ccfCD_DEPT    = this.divData.form.ccfCD_DEPT;
        	this.staID_SABUN   = this.divData.form.staID_SABUN;		// 성명
        	this.ccfID_SABUN   = this.divData.form.ccfID_SABUN;
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 법인
        	this.ccfCD_CORP.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 부서
        	this.ccfCD_DEPT.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 성명
        	this.ccfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("DT_WRITE", "string");
        	this.dsReport.addColumn("YM_BASE", "string");
        	this.dsReport.addColumn("TY_ORDERBY", "int");
        	this.dsReport.addColumn("ID_SABUN", "string");
        	this.dsReport.addColumn("CD_DEPT", "string");
        	this.dsReport.addColumn("CD_CORP", "string");
        	this.dsReport.addColumn("YN_STAMP_IMG", "string");

        	this.dsReportSubY = new Dataset();
        	this.dsReportSubY.addColumn("DT_WRITE", "string");
        	this.dsReportSubY.addColumn("YM_BASE", "string");
        	this.dsReportSubY.addColumn("TY_ORDERBY", "int");
        	this.dsReportSubY.addColumn("ID_SABUN", "string");
        	this.dsReportSubY.addColumn("CD_DEPT", "string");
        	this.dsReportSubY.addColumn("CD_CORP", "string");
        	this.dsReportSubY.addColumn("YN_STAMP_IMG", "string");

        	this.dsReportSubN = new Dataset();
        	this.dsReportSubN.addColumn("ID_RESIDENT", "string");
        	this.dsReportSubN.addColumn("YY_BASE", "string");
        	this.dsReportSubN.addColumn("MM_BASE", "string");
        	this.dsReportSubN.addColumn("YN_MID", "string");
        	this.dsReportSubN.addColumn("NO_APPLY", "int");
        	this.dsReportSubN.addColumn("CD_CORP", "string");
        }

        /************************************************************************
         * 콤보 데이터 조회 및 설정
         ************************************************************************/
        this.fnSetCombo = function() {

        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	this.dsData.setColumn(0, "DT_REGIST", this.gfnGetDate());	// 작성일자
        	this.dsData.setColumn(0, "SEQ_ORDER", "1");					// 정렬순서 1: 부서순, 2: 사번순
        	this.dsData.setColumn(0, "OPT_PRINT", "%");					// 출력옵션 %: 전체, 1: 특정사번, 2: 특정부서

        	if (!this.gfnIsNull(this.getOwnerFrame().WORK_BASE)) {
        		// 법인
        		this.dsData.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        		this.dsData.setColumn(0, "DS_CORP", this.getOwnerFrame().DS_CORP);

        		// 적용년월
        		if (this.getOwnerFrame().YN_MID == "Y") {
        			this.dsData.setColumn(0, "YM_BASE", this.getOwnerFrame().WORK_BASE);
        		} else {
        			this.dsData.setColumn(0, "YM_BASE", this.getOwnerFrame().WORK_BASE + "12");
        		}
        	} else {	// 급여 모듈 호출
        		// 법인
        		this.dsData.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        		this.dsData.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        		// 적용년월
        		this.dsData.setColumn(0, "YM_BASE", this.gfnGetDate().substr(0, 6));
        	}

        	// 부서
        	this.staCD_DEPT.set_enable(false);
        	this.staCD_DEPT.set_cssclass("sta_WF_tablelabel");
        	this.ccfCD_DEPT.set_enable(false);
        	this.dsData.setColumn(0, "CD_DEPT", "");
        	this.dsData.setColumn(0, "DS_DEPT", "");
        	// 성명
        	this.staID_SABUN.set_enable(false);
        	this.staID_SABUN.set_cssclass("sta_WF_tablelabel");
        	this.ccfID_SABUN.set_enable(false);
        	this.dsData.setColumn(0, "ID_SABUN", "");
        	this.dsData.setColumn(0, "DS_HNAME", "");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        }

        /*
         * 추가 버튼
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
        	// 적용년월
        	if (this.gfnIsNull(this.dsData.getColumn(0, "YM_BASE"))) {
        		this.fnVaidateCallback = function() {
        			this.ctclYM_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("적용년월을 입력하세요.");
        		return false;
        	}

        	// 법인
        	if (this.gfnIsNull(this.dsData.getColumn(0, "CD_CORP"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 선택하세요.", "fnVaidateCallback");
        		return false;
        	}

        	// 출력옵션
        	if (this.dsData.getColumn(0, "OPT_PRINT") == "%") {
        	   this.fnVaidateCallback = function() {
        			this.cboOPT_PRINT.setFocus();
        		}
        		this.gfnAlert("출력옵션를 선택해 주세요.", "fnVaidateCallback");
        		return false;
        	}

        	// 부서
        	if (this.dsData.getColumn(0, "OPT_PRINT") == "2" && this.gfnIsNull(this.dsData.getColumn(0, "CD_DEPT"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_DEPT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("부서를 선택하세요.", "fnVaidateCallback");
        		return false;
        	}

        	// 성명
        	if (this.dsData.getColumn(0, "OPT_PRINT") == "1" && this.gfnIsNull(this.dsData.getColumn(0, "ID_SABUN"))) {
        		this.fnVaidateCallback = function() {
        			this.ccfID_SABUN.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("성명을 선택하세요.", "fnVaidateCallback");
        		return false;
        	}

         	return true;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        // 확인 버튼
        this.btnOK_onclick = function(obj, e) {
        	this.fnOk("P");
        }

        this.fnOk = function(callType) {
        	if (this.fnSelectValidate() == false) return;

        	this.dsReport.clearData();
        	this.dsReport.addRow();
        	this.dsReport.setColumn(0, "DT_WRITE"    , this.gfnGetDate());
        	this.dsReport.setColumn(0, "YM_BASE"     , this.dsData.getColumn(0, "YM_BASE"));
        	this.dsReport.setColumn(0, "TY_ORDERBY"  , this.dsData.getColumn(0, "SEQ_ORDER"));
        	this.dsReport.setColumn(0, "ID_SABUN"    , this.dsData.getColumn(0, "OPT_PRINT") == "1" ? this.dsData.getColumn(0, "ID_SABUN") : "%");
        	this.dsReport.setColumn(0, "CD_DEPT"     , this.dsData.getColumn(0, "OPT_PRINT") == "2" ? this.dsData.getColumn(0, "CD_DEPT") : "%");
        	this.dsReport.setColumn(0, "CD_CORP"     , this.dsData.getColumn(0, "CD_CORP"));
        	this.dsReport.setColumn(0, "YN_STAMP_IMG", "N");

        	this.dsReportSubN.clearData();
        	this.dsReportSubN.addRow();
        	this.dsReportSubN.setColumn(0, "ID_RESIDENT", "");
        	this.dsReportSubN.setColumn(0, "YY_BASE"    , this.dsData.getColumn(0, "YM_BASE").substring(0, 4));
        	this.dsReportSubN.setColumn(0, "MM_BASE"    , this.dsData.getColumn(0, "YM_BASE").substring(4, 6));
        	this.dsReportSubN.setColumn(0, "YN_MID"     , this.getOwnerFrame().YN_MID);
        	this.dsReportSubN.setColumn(0, "NO_APPLY"   , "1");
        	this.dsReportSubN.setColumn(0, "CD_CORP"    , this.dsData.getColumn(0, "CD_CORP"));

        	if (callType == "S") {
        		trace(this.dsReport.saveXML());

        		var strSvcId    = "report";
        		var strSvcType  = "select";
        		var inProc      = "_dsProc";
        		var inData      = "";
        		var outData     = "";
        		if (this.gfnIsNull(this.getOwnerFrame().YN_MID)) { // 급여
        			inData      = "report_Y=dsReport report_Y_Sub=dsReport";
        			outData     = "dsList=report_Y0 dsList2=report_Y_Sub0";
        		} else {	// 중도정산, 연말정산
        			inData      = "report_N=dsReport report_N_Sub=dsReportSubN";
        			outData     = "dsList=report_N0 dsList2=report_N_Sub0";
        		}
        		var strArg 		= "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        							strSvcType, 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData, 		// 입력값으로 보낼 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc,	// 통신방법 정의 [생략가능]
        							false);
        	} else {
        		var inProc     = "_dsProc";
        		var inParam    = "";
        		var inData     = "";
        		if (this.gfnIsNull(this.getOwnerFrame().YN_MID)) { //급여
        			inData     = "report_Y=dsReport report_Y_Sub=dsReport";
        		} else { //중도정산, 연말정산
        			inData     = "report_N=dsReport report_N_Sub=dsReportSubN";
        		}

        		gfnOpenReport(this, "/da/dau/DAU_YEARENDCOLLECT.ozr", inProc, inParam, inData);
        	}
        }

        // 취소 버튼
        this.btnCANCLE_onclick = function(obj,e) {
        	this.getParentContext().close(false);
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        // 출력옵션 변경 콜백
        this.cboOPT_PRINT_onitemchanged = function(obj, e) {
        	switch (obj.value) {
        	case "%":	// 전체
        		// 부서
        		this.staCD_DEPT.set_enable(false);
        		this.staCD_DEPT.set_cssclass("sta_WF_tablelabel");
        		this.ccfCD_DEPT.set_enable(false);
        		this.dsData.setColumn(0, "CD_DEPT", "");
        		this.dsData.setColumn(0, "DS_DEPT", "");
        		// 성명
        		this.staID_SABUN.set_enable(false);
        		this.staID_SABUN.set_cssclass("sta_WF_tablelabel");
        		this.ccfID_SABUN.set_enable(false);
        		this.dsData.setColumn(0, "ID_SABUN", "");
        		this.dsData.setColumn(0, "DS_HNAME", "");
        		break;

        	case "1":	// 특정사번
        		// 부서
        		this.staCD_DEPT.set_enable(false);
        		this.staCD_DEPT.set_cssclass("sta_WF_tablelabel");
        		this.ccfCD_DEPT.set_enable(false);
        		this.dsData.setColumn(0, "CD_DEPT", "");
        		this.dsData.setColumn(0, "DS_DEPT", "");
        		// 성명
        		this.staID_SABUN.set_enable(true);
        		this.staID_SABUN.set_cssclass("sta_WF_tablelabelE");
        		this.ccfID_SABUN.set_enable(true);
        		this.dsData.setColumn(0, "ID_SABUN", "");
        		this.dsData.setColumn(0, "DS_HNAME", "");
        		break;

        	case "2":	// 특정부서
        		// 부서
        		this.staCD_DEPT.set_enable(true);
        		this.staCD_DEPT.set_cssclass("sta_WF_tablelabelE");
        		this.ccfCD_DEPT.set_enable(true);
        		this.dsData.setColumn(0, "CD_DEPT", "");
        		this.dsData.setColumn(0, "DS_DEPT", "");
        		// 성명
        		this.staID_SABUN.set_enable(false);
        		this.staID_SABUN.set_cssclass("sta_WF_tablelabel");
        		this.ccfID_SABUN.set_enable(false);
        		this.dsData.setColumn(0, "ID_SABUN", "");
        		this.dsData.setColumn(0, "DS_HNAME", "");
        		break;
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
         	switch (id) {
        	case "ccfCD_CORP":	// 법인코드
        		dsUserParam.setColumn(nrow, "CD_DEPT",   this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		break;

        	case "ccfCD_DEPT":	// 부서
        		if (this.gfnIsNull(this.dsData.getColumn(0, "CD_CORP"))){
        			this.fnBeforeUserCallback = function() {
        					this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "GR_SEARCH" , this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"   , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP"   , this.dsData.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "%");
        		break;

        	case "ccfID_SABUN":	// 성명
        		if (this.gfnIsNull(this.dsData.getColumn(0, "CD_CORP"))){
        			this.fnBeforeUserCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsData.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "");
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "N");
        		break;
         	}

         	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	switch (id) {

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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.ctclDT_REGIST.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.staYM_BASE_bg.addEventHandler("onclick",this.sta04_onclick,this);
            this.divData.form.cboOPT_PRINT.addEventHandler("onitemchanged",this.cboOPT_PRINT_onitemchanged,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
        };
        this.loadIncludeScript("DAU_YEARENDCOLLECT_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
