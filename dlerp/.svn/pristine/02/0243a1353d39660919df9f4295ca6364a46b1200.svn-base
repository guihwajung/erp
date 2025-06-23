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
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1530,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFBPR_REQUESTDTL_STATUS_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQ_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQ_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPTINVEST\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CASH\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_MIBUL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_REQ", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"VALUE\">집행요청일</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">송부(예정)</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">집행(예정)</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">계상일자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_CASH", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\"/><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">C</Col><Col id=\"DS_CODE\">현금</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">지급어음</Col></Row><Row><Col id=\"CD_CODE\">B</Col><Col id=\"DS_CODE\">전자어음</Col></Row><Row><Col id=\"CD_CODE\">K</Col><Col id=\"DS_CODE\">견질</Col></Row><Row><Col id=\"CD_CODE\">X</Col><Col id=\"DS_CODE\">B2B</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_SYSTEM", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">DA</Col><Col id=\"VALUE\">인사</Col></Row><Row><Col id=\"CODE\">DH</Col><Col id=\"VALUE\">회계</Col></Row><Row><Col id=\"CODE\">DF</Col><Col id=\"VALUE\">자금</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_PROCESS", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">A</Col><Col id=\"VALUE\">미청구</Col></Row><Row><Col id=\"CODE\">B</Col><Col id=\"VALUE\">미배정</Col></Row><Row><Col id=\"CODE\">C</Col><Col id=\"VALUE\">미집행</Col></Row><Row><Col id=\"CODE\">D</Col><Col id=\"VALUE\">집행</Col></Row><Col id=\"CODE\">E</Col><Col id=\"VALUE\">비적합</Col></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("전체");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPTINVEST","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPTINVEST","staCD_DEPTINVEST:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_REQ","ccfCD_DEPTINVEST:10","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_innerdataset("dsTY_REQ");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("집행요청일");
            obj.set_value("0");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REQ_FR","cboTY_REQ:5","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REQ_TO","ctclDT_REQ_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REQ_TO","staDT_REQ_TO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_PROCESS","ctclDT_REQ_TO:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_PROCESS","staTY_PROCESS:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsTY_PROCESS");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_CASH","cboTY_PROCESS:0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("현금구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_CASH","staTY_CASH:0","10","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_innerdataset("dsTY_CASH");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_SYSTEM","cboTY_CASH:5","10","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_innerdataset("dsCD_SYSTEM");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACNT","0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("계정코드");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNT","staCD_ACNT:0.0","staCD_CORP:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PAY","ccfCD_ACNT:0.0","staCD_CORP:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("지급처");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_PAY","staCD_PAY:0.0","staCD_CORP:10.0","460","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkTY_MIBUL","ccfCD_PAY:10","staCD_CORP:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("미청구(미결재)자료포함");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFB_REQUESTDTLSTATUS.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	//this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	this.fnSetCombo();
        };

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
        	this.btnFormButtonGe = this.gfnFormButtonAdd("tbbGeSlip", "fnTbbGeSlip", "계상전표조회");
        	this.btnFormButtonBan = this.gfnFormButtonAdd("tbbBanSlip", "fnTbbBanSlip", "반제전표조회");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPTINVEST = this.divSearch.form.ccfCD_DEPTINVEST;
        	this.ccfCD_ACNT = this.divSearch.form.ccfCD_ACNT;
        	this.ccfCD_PAY = this.divSearch.form.ccfCD_PAY;

        	this.ctclDT_REQ_FR = this.divSearch.form.ctclDT_REQ_FR;
        	this.ctclDT_REQ_TO = this.divSearch.form.ctclDT_REQ_TO;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DZX_CFCORP";
        	this.ccfCD_DEPTINVEST.CodeFindName = "DFX_CFACNTUNIT";
        	this.ccfCD_ACNT.CodeFindName = "DFX_CFACNTBYMISUMIBUL";
        	this.ccfCD_PAY.CodeFindName = "DFX_CFVENDOR";

        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPTINVEST.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_ACNT.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_PAY.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_DEPTINVEST.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_PAY.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFB_REQUESTDTLSTATUS");

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	//권한체크 -- 해당부서내역만 조회가능
        	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 2) {
        		this.ccfCD_CORP.form.set_readonly(true);
        	}

        	//권한체크 -- 해당부서내역만 조회가능
        	if (nexacro.toNumber(this.FormInfo.GR_SEARCH) >= 7) {
        		this.ccfCD_DEPTINVEST.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        		this.ccfCD_DEPTINVEST.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        		this.ccfCD_DEPTINVEST.form.set_readonly(true);
        	}

        	//권한체크 -- 해당그룹내역만 조회가능
        	if (this.FormInfo.ID_GROUP == 'C') {
        		this.ccfCD_DEPTINVEST.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        		this.ccfCD_DEPTINVEST.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        		this.ccfCD_DEPTINVEST.form.set_readonly(true);
        	}

        	var today = this.gfnGetDate();
        	this.ctclDT_REQ_FR.set_value(this.gfnGetDate());
        	this.ctclDT_REQ_TO.set_value(this.gfnAddDate(today, 30));

        	this.btnFormButtonGe.set_enable(false);
        	this.btnFormButtonBan.set_enable(false);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("TY_DATE", "bigdecimal");
        	this.dsSelect.addColumn("DT_REQ_FR", "string");
        	this.dsSelect.addColumn("DT_REQ_TO", "string");
        	this.dsSelect.addColumn("TY_PROCESS", "string");
        	this.dsSelect.addColumn("TY_CASH", "string");
        	this.dsSelect.addColumn("CD_SYSTEM", "string");
        	this.dsSelect.addColumn("TY_MIBUL", "string");
        	this.dsSelect.addColumn("CD_ACNT", "string");
        	this.dsSelect.addColumn("TY_PAYMENT", "string");
        	this.dsSelect.addColumn("CD_DEPTINVEST", "string");
        	this.dsSelect.addColumn("CD_PAY", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "TY_DATE", this.divSearch.form.cboTY_REQ.value);
        	this.dsSelect.setColumn(0, "DT_REQ_FR", this.ctclDT_REQ_FR.value);
        	this.dsSelect.setColumn(0, "DT_REQ_TO", this.ctclDT_REQ_TO.value);
        	this.dsSelect.setColumn(0, "TY_PROCESS", this.divSearch.form.cboTY_PROCESS.value);
        	this.dsSelect.setColumn(0, "TY_CASH", this.divSearch.form.cboTY_CASH.value);
        	this.dsSelect.setColumn(0, "CD_SYSTEM", this.divSearch.form.cboCD_SYSTEM.value);
        	this.dsSelect.setColumn(0, "TY_MIBUL", this.divSearch.form.chkTY_MIBUL.value);
        	this.dsSelect.setColumn(0, "CD_ACNT", this.ccfCD_ACNT.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "TY_PAYMENT", "");
        	this.dsSelect.setColumn(0, "CD_DEPTINVEST", this.ccfCD_DEPTINVEST.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "CD_PAY", this.ccfCD_PAY.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);


        	//trace("this.divSearch.form.cboTY_REQ.value :: " + this.divSearch.form.cboTY_REQ.value);

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
        this.fnSelectValidate = function() {
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.text)) {
        		this.gfnAlert("법인코드를 입력 하세요.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclDT_REQ_FR.value)) {
        		this.gfnAlert("시작일자를 입력 하세요.");
        		this.ctclDT_REQ_FR.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclDT_REQ_TO.value)) {
        		this.gfnAlert("종료일자를 입력 하세요.");
        		this.ctclDT_REQ_TO.setFocus();
        		return false;
        	}

        	if ( !this.gfnIsNull(this.ctclDT_REQ_FR.value) && !this.gfnIsNull(this.ctclDT_REQ_TO.value) ) {
        		if ( this.ctclDT_REQ_FR.value > this.ctclDT_REQ_TO.value ) {
        			this.gfnAlert("일자가 잘못 입력 되었습니다..");
        			this.ctclDT_REQ_FR.setFocus();
        			return false;
        		}
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
        			this.btnFormButtonGe.set_enable(false);
        			this.btnFormButtonBan.set_enable(false);
        		} else {
        			this.gfnGridAfterSelect(this.dxGrid);
        			/*this.btnFormButtonGe.set_enable(true);
        			if(this.divSearch.form.chkTY_MIBUL.value == 'Y'){
        				this.btnFormButtonBan.set_enable(true);
        			}*/

        		}
        	}
        	else if(svcID == "combo") {
        		//  조회조건(발행여부)
        		var iRow = this.dsTY_CASH.insertRow(0);
        		this.dsTY_CASH.setColumn(iRow, "CD_CODE", "");
        		this.dsTY_CASH.setColumn(iRow, "DS_CODE", "전체");
        		this.divSearch.form.cboTY_CASH.set_index(0);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	// 부서
        	if (id == "ccfCD_DEPTINVEST") {
        		dsUserParam.setColumn(nrow, "CD_GROUP", '');
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	}

        // 	if (id == "ccfCD_ACNT") {
        // 		dsUserParam.setColumn(nrow, "CD_DEPT", this.ccfCD_DEPTINVEST.form.CDTextBox.value);
        // 	}

        	if (id == "ccfCD_PAY") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR1", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_CORP") {
        		this.ccfCD_DEPTINVEST.form.fnCodeFindClear();
        	}

        	this.gfnSetFormStatus(this);	// 폼상태 초기화
        	this.gfnGridClear(this.dxGrid);
        	this.btnFormButtonGe.set_enable(false);
        	this.btnFormButtonBan.set_enable(false);
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.fnTbbGeSlip = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	var no_slip = this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP");

        	if(no_slip == "" || this.gfnIsNull(no_slip))
        	{
        		this.gfnAlert("이관자료는 전표조회할 수 없습니다.");
        		return false;
        	}

        	param.CD_TRADE = no_slip;
        	param.IUD_FLAG = "S";
        	param.strYN_JUNDO_START = "";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);

        }

        this.fnTbbBanSlip = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};

        	var no_slip = this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP2");

        	if(no_slip == "미분류전표")
        	{
        		this.gfnAlert("미분류전표는 조회할 수 없습니다.");
        		return false;
        	}

        	param.CD_TRADE = no_slip;
        	param.IUD_FLAG = "S";
        	param.strYN_JUNDO_START = "";

        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "", param);

        }

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
        		this.btnFormButtonGe.set_enable(false);
        		this.btnFormButtonBan.set_enable(false);
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.btnFormButtonGe.set_enable(false);
        		this.btnFormButtonBan.set_enable(false);
        	}
        };

        this.divSearch_onitemchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.btnFormButtonGe.set_enable(false);
        		this.btnFormButtonBan.set_enable(false);
        	}
        }

        this.dsList_onrowposchanged = function(obj,e)
        {
        	if (!this.gfnGridIsRow(this.dxGrid)) {
        		this.btnFormButtonGe.set_enable(false);
        		this.btnFormButtonBan.set_enable(false);
        		return false;
        	}

        	if( this.gfnIsNull(this.dsList.getColumn(e.newrow , "NO_SLIP")) ) {
        		this.btnFormButtonGe.set_enable(false);
        	} else {
        		this.btnFormButtonGe.set_enable(true);
        	}

        	if( this.gfnIsNull(this.dsList.getColumn(e.newrow , "NO_SLIP2")) ) {
        		this.btnFormButtonBan.set_enable(false);
        	} else {
        		this.btnFormButtonBan.set_enable(true);
        	}
        };

        this.divSearch_chkTY_MIBUL_onclick = function(obj,e)
        {

        };


        // 공통코드콤보
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "B7");


        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_CASH=combo0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboTY_REQ.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclDT_REQ_FR.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclDT_REQ_TO.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.cboTY_PROCESS.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.cboTY_CASH.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.cboCD_SYSTEM.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.chkTY_MIBUL.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.chkTY_MIBUL.addEventHandler("onclick",this.divSearch_chkTY_MIBUL_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DFB_REQUESTDTLSTATUS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
