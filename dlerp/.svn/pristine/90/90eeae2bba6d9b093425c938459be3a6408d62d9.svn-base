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
            this.set_titletext("전표처리현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHAPR_CONSULTSLIP_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_STATUS", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">신규</Col><Col id=\"VALUE\">신규</Col></Row><Row><Col id=\"CODE\">폐기</Col><Col id=\"VALUE\">폐기</Col></Row><Row><Col id=\"VALUE\">분실</Col><Col id=\"CODE\">분실</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_CONSULT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCorpCd","sta00:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("품의부서");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfApprDeptCd","sta03:0.0","sta00:10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PERIOD","0.0","10.0",null,"24.0","859",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("품의일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDtFromAppr","staCD_PERIOD:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TILDE","calDtFromAppr:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDtToAppr","staCD_TILDE:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","0.0","sta00:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("품의번호");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_CONSULT","sta01:0.0","sta00:10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("110");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
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
            obj = new BindItem("item0","divSearch.form.calDtFromAppr","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.calDtToAppr","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCorpCd.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfApprDeptCd.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfID_CONSULT.form.CDTextBox","value","dsSearch","ID_CONSULT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_CONSULT_SLIP.xfdl", function() {
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

        	this.dsList.set_enableevent(false);

        	// 타화면에서 호출 및 파라미터 존재시 자동 조회
        	if(!this.gfnIsNull(this.getOwnerFrame().CD_CORP)) {
        		// 법인코드
        		this.ccfCorpCd.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        		//this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        	}
        	if(!this.gfnIsNull(this.getOwnerFrame().ID_CONSULT)) {
        		// 품의번호
        		this.ccfID_CONSULT.form.CDTextBox.set_value(this.getOwnerFrame().ID_CONSULT);
        		//this.dsSearch.setColumn(0, "ID_CONSULT", this.getOwnerFrame().ID_CONSULT);
        	}

        	if(!this.gfnIsNull(this.getOwnerFrame().RM_TITLE)) {
        		// 품의명칭(제목)
        		this.ccfID_CONSULT.form.DSTextBox.set_value(this.getOwnerFrame().RM_TITLE);
        	}



        	if ( !this.gfnIsNull(this.getOwnerFrame().CD_CORP) || !this.gfnIsNull(this.getOwnerFrame().ID_CONSULT) ) {
        		this.FormBtns.Select.click();
        	}

        	this.dsList.set_enableevent(true);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnSlipSelect = this.gfnFormButtonAdd("btnSlipSelect", "fnSlipSelect", "전표조회");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCorpCd = this.divSearch.form.ccfCorpCd;			// 법인코드
        	this.ccfApprDeptCd = this.divSearch.form.ccfApprDeptCd;	// 품의부서코드
        	this.ccfID_CONSULT = this.divSearch.form.ccfID_CONSULT;	// 품의번호코드

        	this.calDtFromAppr = this.divSearch.form.calDtFromAppr;	// 품의시작일자
        	this.calDtToAppr = this.divSearch.form.calDtToAppr;		// 품의종료일자

        	this.dxGrid = this.divData.form.objGrid;	// 그리드
        	this.grSearch = this.FormInfo.GR_SEARCH;	// 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;	// 그룹코드
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCorpCd.CodeFindName = "DZX_CFCORP";			// 법인코드
        	this.ccfApprDeptCd.CodeFindName = "DFX_CFACNTUNIT_GROUP";	// 품의부서
        	this.ccfID_CONSULT.CodeFindName = "DFX_CFCONSULT";	// 품의번호

        	this.ccfCorpCd.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfApprDeptCd.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_CONSULT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCorpCd.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfApprDeptCd.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfID_CONSULT.AfterCDTextChanged = "fnAfterCDTextChanged";


        	// 품의일자 15일전부터 현재까지 일단 설정.
        	var vToday = this.gfnGetDate();
        	this.calDtFromAppr.set_value(this.gfnAddDate(vToday, -15));
        	this.calDtToAppr.set_value(vToday);

        	// 그리드
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_CONSULT_SLIP");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	// 법인코드세션
        	if (this.gfnIsNull(this.ccfCorpCd.form.CDTextBox.value)) {
        		this.ccfCorpCd.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCorpCd.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	// 권한체크 - 해당부서내역만 조회가능
        	if (nexacro.toNumber(this.grSearch) >= 2) {
        		this.ccfCorpCd.set_enable(false);
        	}

        	// 법인코드 포커스추가
        	this.ccfCorpCd.form.CDTextBox.setFocus();
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("ID_CONSULT", "string");

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
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(0, "ID_CONSULT", this.dsSearch.getColumn(0, "ID_CONSULT"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//var nRow = this.gfnGridAdd(this.dxGrid);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.ccfCorpCd.form.CDTextBox.value);				// 법인코드
        				this.dsInsert.setColumn(nrow, "DT_CONSULT", this.dsList.getColumn(i, "DT_CONSULT"));		// 품의일자
        				this.dsInsert.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));	// 품의부서코드
        				this.dsInsert.setColumn(nrow, "RM_TITLE", this.dsList.getColumn(i, "RM_TITLE"));			// 제목
        				this.dsInsert.setColumn(nrow, "DT_FROM", this.dsList.getColumn(i, "DT_FROM"));				// 품의일자(F)
        				this.dsInsert.setColumn(nrow, "DT_TO", this.dsList.getColumn(i, "DT_TO"));					// 품의일자(T)
        				this.dsInsert.setColumn(nrow, "AM_REQ", this.dsList.getColumn(i, "AM_REQ"));				// 품의금액(신청금액)
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);							// ID
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));				// 법인코드
        				this.dsUpdate.setColumn(nrow, "DT_CONSULT", this.dsList.getColumn(i, "DT_CONSULT"));		// 품의일자
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));	// 품의부서코드
        				this.dsUpdate.setColumn(nrow, "RM_TITLE", this.dsList.getColumn(i, "RM_TITLE"));			// 제목
        				this.dsUpdate.setColumn(nrow, "DT_FROM", this.dsList.getColumn(i, "DT_FROM"));				// 품의일자(F)
        				this.dsUpdate.setColumn(nrow, "DT_TO", this.dsList.getColumn(i, "DT_TO"));					// 품의일자(T)
        				this.dsUpdate.setColumn(nrow, "AM_REQ", this.dsList.getColumn(i, "AM_REQ"));				// 품의금액(신청금액)
        				this.dsUpdate.setColumn(nrow, "ID_CONSULT", this.dsList.getColumn(i, "ID_CONSULT"));		// 품의번호
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);							// ID
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.ccfCorpCd.form.CDTextBox.value);				// 법인코드
        				this.dsDelete.setColumn(nrow, "ID_CONSULT", this.dsList.getColumn(i, "ID_CONSULT"));		// 품의번호
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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
        	if (this.gfnIsNull(this.ccfCorpCd.form.CDTextBox.text)) {
        		this.gfnAlert("법인코드가 입력되지 않았습니다.");
        		this.ccfCorpCd.form.CDTextBox.setFocus();
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
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	var cdDeptAcnt = (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_ACNT")) ? "" : this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));	// 품의부서코드

        	switch(id) {
        	case "ccfCorpCd": // 법인코드
        		break;

        	case "ccfApprDeptCd": // 품의부서코드
        		dsUserParam.setColumn(nrow, "CD_GROUP", "");
        		//dsUserParam.setColumn(nrow, "CD_GROUP", this.cdGroup);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCorpCd.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		break;

        	case "ccfID_CONSULT": // 품의번호코드
        // 		if (this.gfnIsNull(cdDeptAcnt)) {
        // 			this.gfnAlert("품의부서를 입력하세요");
        // 			this.ccfApprDeptCd.setFocus();
        // 			return false;
        // 		}
        		dsUserParam.setColumn(nrow, "CD_DEPT", cdDeptAcnt);
        		dsUserParam.setColumn(nrow, "DT_REQUEST", "");

        		break;

        	default:
        	}
        	return true;

        }

        this.fnAfterCDTextChanged = function(id) {
        	switch(id) {

        	case "ccfCorpCd": // 법인코드
        		this.ccfAcntUnitCd.form.DSTextBox.set_value("");
        		this.ccfAcntUnitCd.form.CDTextBox.set_value("");
        		break;

        	case "ccfApprDeptCd": // 품의부서코드
        		break;

        	case "ccfID_CONSULT": // 품의번호코드
        		break;


        	default:
        	}
        	return true;
        }


        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
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
        };


        // 전표조회
        this.fnSlipSelect = function(obj,e) {

        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	// var chkRow = this.dsList.findRow("CHK", 1);
        	var param = {};
        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP2");
        	param.IUD_FLAG = "S";
        	param.strYN_JUNDO_START = "";

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	//trace("this.FormInfo.CD_MODULE :: " + this.FormInfo.CD_MODULE);
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopCallBack", param);

        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHA_CONSULT_SLIP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
