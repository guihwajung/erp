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
            this.set_titletext("어음반제");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFDPR_NOTES_CONDITION_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo2</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo3</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">combo4</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">autoslip</Col><Col id=\"SP\">DFDPR_AUTOSLIP_SWITCH_BANJE</Col></Row><Row><Col id=\"TARGET\">autoslipx</Col><Col id=\"SP\">DFDPR_AUTOSLIP_CANCEL_BANJE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_NOTES", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_NOTES2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_PAYBACK", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_DATE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCorpCd","0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCorpCd","staCorpCd:0.0","10.0","270","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","ccfCorpCd:0.0","sta00:10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("어음구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_NOTES","sta03:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_NOTES");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","0","staCorpCd:10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("어음형태");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_NOTES2","sta01:0.0","staCorpCd:10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_NOTES2");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","cboTY_NOTES2:0.0","staCorpCd:10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("반제구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_PAYBACK","sta02:0.0","staCorpCd:10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsTY_PAYBACK");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04","cboTY_PAYBACK:0.0","staCorpCd:10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_DATE","sta04:0.0","staCorpCd:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsTY_DATE");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","cboTY_DATE:5","staCorpCd:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TILDE","ctclDT_FROM:0.0","staCorpCd:10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staCD_TILDE:0.0","staCorpCd:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFD_NOTES_CONDITION.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        var tmSlip = "";	// 병합전표발행KEY
        var noTrade = "";	// 거래내역번호
        var dtSlip = "";	// 회계일자
        var noAccount = "";
        var cdBank = "";

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
        	this.fnSetCombo();

        // 	if ( !this.gfnIsNull(this.getOwnerFrame().OWNER_ID) ) {
        // 		//this.dsSearch.set_enableevent(false);
        //
        // 		// from 재무만기현황
        // 		if (this.getOwnerFrame().OWNER_ID == "DFB_FINANCE_QUERY") {
        // 			this.ccfCorpCd.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        // 			this.ccfCorpCd.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);
        // 			//this.cfNO_YEJUKUM.form.CDTextBox.set_value(this.getOwnerFrame().CD_YEJUKUM);
        // 			this.ctclDT_FROM.set_value(this.getOwnerFrame().DT_FROM);
        // 			this.ctclDT_TO.set_value(this.getOwnerFrame().DT_TO);
        // 		}
        //
        // 		//this.dsSearch.set_enableevent(true);
        //
        // 		this.FormBtns.Select.click();
        // 	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnRepaySlipPub = this.gfnFormButtonAdd("btnRepaySlipPub", "fnRepaySlipPub", "반제전표발행");
        	this.btnSlipCncl = this.gfnFormButtonAdd("btnSlipCncl", "fnSlipCncl", "전표취소");
        	this.btnSlipSelect = this.gfnFormButtonAdd("btnSlipSelect", "fnSlipSelect", "전표조회");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCorpCd = this.divSearch.form.ccfCorpCd;				// 법인코드

        	this.cboTY_NOTES = this.divSearch.form.cboTY_NOTES;			// 어음구분(지급,받을)
        	this.cboTY_NOTES2 = this.divSearch.form.cboTY_NOTES2;			// 어음구분(종이,전자)
        	this.cboTY_PAYBACK = this.divSearch.form.cboTY_PAYBACK;		// 반제구분

        	this.cboTY_DATE = this.divSearch.form.cboTY_DATE;			// 기간
        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;			// 일자(from)
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;				// 일자(to)

        	this.dxGrid = this.divData.form.objGrid;					// 그리드
        	this.grSearch = this.FormInfo.GR_SEARCH;					// 권한?
        	this.cdGroup = this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP;					// 그룹코드
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCorpCd.CodeFindName = "DZX_CFCORP";		// 법인코드
        	this.ccfCorpCd.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCorpCd.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 일자 현재월 1일 ~ 현재일자까지
        	var vToday = this.gfnGetDate();
        	this.ctclDT_FROM.set_value(this.gfnGetFirstDate(vToday));
        	this.ctclDT_TO.set_value(vToday);

        	// 그리드
        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFD_NOTES_CONDITION");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";
        	this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";

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
        	this.dsSelect.addColumn("TY_NOTES", "string");
        	this.dsSelect.addColumn("TY_KIND", "string");
        	this.dsSelect.addColumn("YN_CLOSE", "string");
        	this.dsSelect.addColumn("GB_DATE", "string");
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");

        	this.dsAutoSlip = new Dataset();
        	this.dsAutoSlip.addColumn("TM_SLIP", "string");
        	this.dsAutoSlip.addColumn("YN_SLIP", "string");
        	this.dsAutoSlip.addColumn("DT_SLIP", "string");
        	this.dsAutoSlip.addColumn("NO_TRADE", "string");

        	this.dsAutoSlip.addColumn("NO_ACCOUNT", "string");
        	this.dsAutoSlip.addColumn("CD_BANK", "string");

        	this.dsAutoSlip.addColumn("NO_NOTES", "string");
        	this.dsAutoSlip.addColumn("TY_NOTES", "string");
        	this.dsAutoSlip.addColumn("CD_CORP", "string");
        	this.dsAutoSlip.addColumn("ID_USER", "string");

        	this.dsAutoSlipx = new Dataset();
        	this.dsAutoSlipx.addColumn("NO_SLIP", "string");
        	this.dsAutoSlipx.addColumn("ID_USER", "string");
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
        	this.dsSelect.setColumn(0, "TY_NOTES", this.cboTY_NOTES.value);						// 어음구분(지급,받을)
        	this.dsSelect.setColumn(0, "TY_KIND", this.cboTY_NOTES2.value);						// 어음형태(종이,전자)
        	this.dsSelect.setColumn(0, "YN_CLOSE", this.cboTY_PAYBACK.value);					// 반제구분
        	this.dsSelect.setColumn(0, "GB_DATE", this.cboTY_DATE.value);						// 기간구분
        	this.dsSelect.setColumn(0, "DT_FROM", this.ctclDT_FROM.value);						// from_date
        	this.dsSelect.setColumn(0, "DT_TO", this.ctclDT_TO.value);							// to_date
        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCorpCd.form.CDTextBox.value);			// 법인코드

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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nRow = this.gfnGridAdd(this.dxGrid);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
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
        	if (this.gfnIsNull(this.ccfCorpCd.form.CDTextBox.text)) {
        		this.gfnAlert("법인코드를 입력 하세요.");
        		this.ccfCorpCd.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.cboTY_NOTES.value)) {
        		this.gfnAlert("어음구분을 선택 하세요.");
        		this.cboTY_NOTES.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclDT_FROM.value)) {
        		this.gfnAlert("일자(FROM)을 입력 하세요.");
        		this.ctclDT_FROM.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclDT_TO.value)) {
        		this.gfnAlert("일자(TO)을 입력 하세요.");
        		this.ctclDT_TO.setFocus();
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

        	} else if (svcID == "autoslipN") {
        		if (errorCode == 0) {
        			this.fnAutoSlip("Y");
        		}
        	} else if (svcID == "autoslipY") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "combo") {

        		this.cboTY_NOTES.set_index(1);
        		this.cboTY_DATE.set_index(0);

        		var iRow = this.dsTY_NOTES2.insertRow(0);
        		this.dsTY_NOTES2.setColumn(iRow, "CD_CODE", "");
        		this.dsTY_NOTES2.setColumn(iRow, "DS_CODE", "전체");
        		this.cboTY_NOTES2.set_index(0);

        		var iRow = this.dsTY_PAYBACK.insertRow(0);
        		this.dsTY_PAYBACK.setColumn(iRow, "CD_CODE", "");
        		this.dsTY_PAYBACK.setColumn(iRow, "DS_CODE", "전체");
        		this.cboTY_PAYBACK.set_index(0);

        		if ( !this.gfnIsNull(this.getOwnerFrame().OWNER_ID) ) {
        		//this.dsSearch.set_enableevent(false);

        		// from 재무만기현황
        		if (this.getOwnerFrame().OWNER_ID == "DFB_FINANCE_QUERY") {
        			this.ccfCorpCd.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        			this.ccfCorpCd.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);
        			//this.cfNO_YEJUKUM.form.CDTextBox.set_value(this.getOwnerFrame().CD_YEJUKUM);
        			this.ctclDT_FROM.set_value(this.getOwnerFrame().DT_FROM);
        			this.ctclDT_TO.set_value(this.getOwnerFrame().DT_TO);
        			if (this.getOwnerFrame().TY_NOTES == "받을어음") {
        			   this.cboTY_NOTES.set_index(1);
        			} else
        			{
        			   this.cboTY_NOTES.set_index(0);
        			}
        		}


        		//this.dsSearch.set_enableevent(true);

        		this.FormBtns.Select.click();
        	    }

        		//trace("dsTY_NOTES :: " + this.dsTY_NOTES.saveXML());
        		//trace("dsTY_NOTES2 :: " + this.dsTY_NOTES2.saveXML());
        		//trace("dsTY_DATE :: " + this.dsTY_DATE.saveXML());
        		//trace("dsTY_PAYBACK :: " + this.dsTY_PAYBACK.saveXML());
        	} else if(svcID == "save") {
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

        	var cdCorp = this.ccfCorpCd.form.CDTextBox.value;

        	switch(id) {
        	case "ccfCorpCd": // 법인코드
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.cdGroup);
        		break;

        	default:
        	}
        	return true;

        }

        this.fnAfterCDTextChanged = function(id) {
        	this.fnSearchInit();
        }


        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
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

        this.fnSetCombo = function() {

        	// 어음구분(지급,받을)
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "D1");

        	// 어음형태(전자,종이)
        	this.dsCombo2 = new Dataset();
        	this.dsCombo2.addColumn("CD_SYSTEM", "string");
        	this.dsCombo2.addColumn("CD_TYPE", "string");
        	this.dsCombo2.addRow();
        	this.dsCombo2.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo2.setColumn(0, "CD_TYPE", "D2");

        	// 어음기간(만기일, 발행일)
        	this.dsCombo3 = new Dataset();
        	this.dsCombo3.addColumn("CD_SYSTEM", "string");
        	this.dsCombo3.addColumn("CD_TYPE", "string");
        	this.dsCombo3.addRow();
        	this.dsCombo3.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo3.setColumn(0, "CD_TYPE", "D3");

        	// 반제구분(미반제, 반제)
        	this.dsCombo4 = new Dataset();
        	this.dsCombo4.addColumn("CD_SYSTEM", "string");
        	this.dsCombo4.addColumn("CD_TYPE", "string");
        	this.dsCombo4.addRow();
        	this.dsCombo4.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo4.setColumn(0, "CD_TYPE", "D4");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo combo2=dsCombo2 combo3=dsCombo3 combo4=dsCombo4";
        	var outData     = "dsTY_NOTES=combo0 dsTY_NOTES2=combo20 dsTY_DATE=combo30 dsTY_PAYBACK=combo40";
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

        /*
         *	팝업 Validate
         */
        this.fnPopupValidate = function() {

        	var fndRow = this.dsList.findRow("CHK", 1);
        	if (this.dsList.rowcount == 0 || fndRow <= -1) {
        		this.gfnAlert("반제전표발행 대상을 체크 하시기 바랍니다!");
        //		if (this.dsList.rowcount > 0) {
        //			this.dsList.set_rowposition(0);
        //			this.dxGrid.setCellPos(1);
        //		}
        		return false;
        	}
        	return true;
        }


        // 반제전표발행(지급어음 및 받을어음)
        this.fnRepaySlipPub = function(obj,e) {
        	var popId = "";
        	if (!this.fnPopupValidate()) {
        		return false;
        	}

        	var tyNotes = this.cboTY_NOTES.value;	// 어음구분(지급어음:P/받을어음:R)
        	var chkCnt = this.dsList.getCaseCount("CHK == 1");
        	var chkRow = this.dsList.findRowExpr("CHK == 1");

        	var param = {};

        	// 지급어음
        	if (tyNotes == "P" && chkCnt > 0) {
        		popId = "DFD_DLG_NOTES_P";

        		var width = 430;
        		var height = 310;

        		param.CNT_BANJE = chkCnt;											// 반제건수
        		param.AM_NOTES = this.dsList.getCaseSum("CHK == 1", "AM_NOTES");	// 반제금액

        		// (다수건이 선택될수 있으나 일단 만기일자는 모두 동일하다는 가정하에 코딩 / 팝업에서 수정도 가능하니...)
        		param.DT_EXPIRY = this.dsList.getColumn(chkRow, "DT_EXPIRY");		// 회계일자(만기일자)
        	}

        	// 받을어음
        	if (tyNotes == "R" && chkCnt > 0) {
        		popId = "DFD_DLG_NOTES_R";
        		var width = 580;
        		var height = 345;

        		param.NO_NOTES = this.dsList.getColumn(chkRow, "NO_NOTES");		// 어음번호
        		param.AM_NOTES = this.dsList.getColumn(chkRow, "AM_NOTES");		// 어음금액
        		param.DT_PUBLISH = this.dsList.getColumn(chkRow, "DT_PUBLISH");	// 발행일자
        		param.DT_EXPIRY = this.dsList.getColumn(chkRow, "DT_EXPIRY");	// 만기일자
        		param.DS_BANK = this.dsList.getColumn(chkRow, "DS_BANK");		// 지급은행명
        		param.DS_VENDOR = this.dsList.getColumn(chkRow, "DS_VENDOR");	// 거래처명

        		param.CD_CORP = this.ccfCorpCd.form.CDTextBox.value;			// 법인코드
        		param.NO_ACCOUNT = this.dsList.getColumn(chkRow, "NO_ACCOUNT");	// 계좌번호
        	}


        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, popId, "fnPopCallBack", param, width, height);
        }

        this.fnPopCallBack = function(svcID, val) {

        	if (svcID.indexOf("DHA_ISSUESLIP") > -1) {
        		//this.FormBtns.Select.click();
        	}

        	if (val != false) {
        		var json = JSON.parse(val);


        		// 지급어음반제전표발행 콜백
        		if (svcID.indexOf("DFD_DLG_NOTES_P") > -1) {
        			dtSlip = "";
        			dtSlip = json.DT_SLIP;
        			noTrade = "";
        			noAccount = "";
        			cdBank = "";
        			this.fnAutoSlip("N");
        		}


        		// 받을어음반제전표발행 콜백
        		if (svcID.indexOf("DFD_DLG_NOTES_R") > -1) {
        			dtSlip = "";
        			dtSlip = json.DT_SLIP;
        			noTrade = "";
        			noTrade = json.NO_TRADE;
        			noAccount = json.NO_ACCOUNT;
        			cdBank = json.CD_BANK;
        			this.fnAutoSlip("N");
        		}

        	}
        }

        /*
         * 전표발행
         */
        this.fnAutoSlip = function(slipYn) {

        	this.dsAutoSlip.clearData();

        	// 전표발행
        	if (slipYn == "N") {

        		tmSlip = this.AuthClient.ID_USER + this.gfnGetDate("milli");

        		for (var i=0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, "CHK") == 1) {
        				var nrow = this.dsAutoSlip.addRow();
        				this.dsAutoSlip.setColumn(nrow, "TM_SLIP", tmSlip);
        				this.dsAutoSlip.setColumn(nrow, "YN_SLIP", slipYn);
        				this.dsAutoSlip.setColumn(nrow, "NO_TRADE", this.gfnIsNull(noTrade) ? "" : noTrade);

        				this.dsAutoSlip.setColumn(nrow, "NO_NOTES", this.dsList.getColumn(i, "NO_NOTES"));
        				this.dsAutoSlip.setColumn(nrow, "TY_NOTES", this.cboTY_NOTES.value);
        				this.dsAutoSlip.setColumn(nrow, "CD_CORP", this.ccfCorpCd.form.CDTextBox.value);
        				this.dsAutoSlip.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}

        	// 전표발행후처리
        	} else {
        		var nrow = this.dsAutoSlip.addRow();
        		this.dsAutoSlip.setColumn(nrow, "TM_SLIP", tmSlip);
        		this.dsAutoSlip.setColumn(nrow, "YN_SLIP", slipYn);
        		this.dsAutoSlip.setColumn(nrow, "DT_SLIP", dtSlip);
        		this.dsAutoSlip.setColumn(nrow, "NO_TRADE", this.gfnIsNull(noTrade) ? "" : noTrade);
        		this.dsAutoSlip.setColumn(nrow, "NO_ACCOUNT", this.gfnIsNull(noAccount) ? "" : noAccount);
        		this.dsAutoSlip.setColumn(nrow, "CD_BANK", this.gfnIsNull(cdBank) ? "" : cdBank);
        		this.dsAutoSlip.setColumn(nrow, "CD_CORP", this.ccfCorpCd.form.CDTextBox.value);
        		this.dsAutoSlip.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}

        	if (this.dsAutoSlip.rowcount == 0) return;

        	var strSvcId    = "autoslip" + slipYn;
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "autoslip=dsAutoSlip";
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

        // 전표조회 및 전표취소 validation check
        this.fnSlipValidation = function() {
        	var chkCnt = this.dsList.getCaseCount("CHK == 1");
        	if (chkCnt == 0) {
        		return false;
        	}


        	for ( var i=0; i < this.dsList.rowcount; i++ ) {
        		if ( this.dsList.getColumn(i, "CHK") == 1 ) {
        			if ( this.gfnIsNull(this.dsList.getColumn(i, "NO_SLIP_AFTER") )) {
        				this.gfnAlert("발행된 전표가 없습니다.");
        				return false;
        			}
        		}
        	}
        	return true;
        }

        // 전표취소
        this.fnSlipCncl = function(obj,e) {
        	if (!this.fnSlipValidation()) {
        		return false;
        	}

        	this.gfnConfirm("전표취소 처리 하시겠습니까?","fnSlipCncl_callback");
        }

        this.fnSlipCncl_callback = function(strId, val) {

        	if (val) {
        		this.dsAutoSlipx.clearData();

        		for (var i=0; i < this.dsList.rowcount; i++) {
        			if (this.dsList.getColumn(i, "CHK") == 1) {
        				var nrow = this.dsAutoSlipx.addRow();
        				this.dsAutoSlipx.setColumn(nrow, "NO_SLIP", this.dsList.getColumn(i, "NO_SLIP_AFTER"));
        				this.dsAutoSlipx.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}

        		if (this.dsAutoSlipx.rowcount == 0) return;

        		var strSvcId    = "save";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "autoslipx=dsAutoSlipx";
        		var outData     = "";
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
        }


        // 전표조회
        this.fnSlipSelect = function(obj,e) {

        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.CD_TRADE = this.dsList.getColumn(this.dsList.rowposition, "NO_SLIP_AFTER");
        	param.IUD_FLAG = "S";
        	param.strYN_JUNDO_START = "";

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	//trace("this.FormInfo.CD_MODULE :: " + this.FormInfo.CD_MODULE);
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopCallBack", param);

        }


        this.divData_objGrid_oncellclick = function(obj,e)
        {
        	var ds = obj.getBindDataset();
        	//var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);

        	// chk
        	if (e.cell == 1) {
        		this.dsList.set_enableevent(false);

        		var tyNotes = this.cboTY_NOTES.value;	// 어음구분(지급어음:P/받을어음:R)
        		var chkCnt = ds.getCaseCount("CHK == 1");

        		if (tyNotes == "R" && chkCnt > 1) {
        			this.gfnAlert("어음구분[받을어음]은 한건만 선택 가능합니다.");
        			this.dsList.setColumn(e.row, "CHK", 0);
        			this.dsList.setColumn(e.row, this.ucFlag, "");
        			this.dsList.set_enableevent(true);
        			return false;
        		}


        		var dtExpiry1 = "";
        		var dtExpiry2 = "";

        		if (chkCnt > 1) {
        			var row = ds.rowposition;
        			var arrRows = ds.extractRows("CHK == 1");
        			for (var i=0; i < arrRows.length; i++) {
        				//trace("[" + i + "] :: " + arrRows[i]);
        				dtExpiry1 = ds.getColumn(arrRows[i], "DT_EXPIRY");
        				for (var j=0; j < arrRows.length; j++) {
        					if (i != j) {
        						dtExpiry2 = ds.getColumn(arrRows[j], "DT_EXPIRY");
        						if ( dtExpiry1 != dtExpiry2 ) {
        							this.gfnAlert("이전에 선택하신 [만기일자]와 \n현재 선택하신 [만기일자]가 동일하지 않습니다.!!!");
        							ds.setColumn(row, "CHK", 0);
        							this.dsList.set_enableevent(true);
        							return false;
        						}
        					}
        				}
        			}
        		}



        		this.dsList.set_enableevent(true);
        	}
        };


        this.fnGrid_AfterAllCheck = function(obj, cell, check)
        {
        	var ds = obj.getBindDataset();

        	// chk
        	if (cell == 1) {
        		this.dsList.set_enableevent(false);

        		var tyNotes = this.cboTY_NOTES.value;	// 어음구분(지급어음:P/받을어음:R)
        		var chkCnt = this.dsList.getCaseCount("CHK == 1");

        		if (tyNotes == "R" && chkCnt > 1) {
        			this.gfnAlert("어음구분[받을어음]은 한건만 선택 가능합니다.");
        			this.dxGrid.setCellProperty("head", cell, "text", 0);
        			for (var i=0; i < this.dsList.rowcount; i++) {
        				this.dsList.setColumn(i, "CHK", 0);
        				this.dsList.setColumn(i, this.ucFlag, "");
        			}

        			this.dsList.set_enableevent(true);
        			return false;
        		}


        		var dtExpiry = ds.getColumn(1, "DT_EXPIRY");
        		var dtExpiryCnt = ds.getCaseCount("CHK == 1 && DT_EXPIRY == " + dtExpiry);
        // 		trace("dtExpiry :::: " + dtExpiry);
        // 		trace("dtExpiryCnt :::: " + dtExpiryCnt);
        // 		trace("ds.rowcount :::: " + ds.rowcount);
        		if ((ds.rowcount-1) != dtExpiryCnt) {
        			this.gfnAlert("같은 만기일자만 선택 가능합니다.");
        			for (var i=0; i < ds.rowcount; i++) {
        				ds.setColumn(i, "CHK", 0);
        			}
        			obj.setCellProperty("head", cell, "text", 0);
        			ds.set_enableevent(true);
        			return false;
        		}



        		this.dsList.set_enableevent(true);
        	}
        }

        this.fnGrid_AfterEdit = function(obj,e) {
        // 	if (e.columnid == "CHK" && e.newvalue == 1) {
        // 		this.dsList.set_enableevent(false);
        //
        // 		var chkCnt = obj.getCaseCount("CHK == 1");
        // 		var tyNotes = this.cboTY_NOTES.value;	// 어음구분(지급어음:P/받을어음:R)
        //
        // 		if (tyNotes == "R" && chkCnt > 1) {
        // 			this.gfnAlert("어음구분[받을어음]은 한건만 선택 가능합니다.");
        // 			this.dsList.setColumn(e.row, "CHK", 0);
        // 			this.dsList.setColumn(e.row, this.ucFlag, "");
        // 			this.dsList.set_enableevent(true);
        // 			return false;
        // 		}
        //
        //
        //
        // 		var dtExpiry1 = "";
        // 		var dtExpiry2 = "";
        //
        // 		if (chkCnt > 1) {
        // 			var row = obj.rowposition;
        // 			var arrRows = obj.extractRows("CHK == 1");
        // 			for (var i=0; i < arrRows.length; i++) {
        // 				//trace("[" + i + "] :: " + arrRows[i]);
        // 				dtExpiry1 = obj.getColumn(arrRows[i], "DT_EXPIRY");
        // 				for (var j=0; j < arrRows.length; j++) {
        // 					if (i != j) {
        // 						dtExpiry2 = obj.getColumn(arrRows[j], "DT_EXPIRY");
        // 						if ( dtExpiry1 != dtExpiry2 ) {
        // 							this.gfnAlert("이전에 선택하신 [만기일자]와 \n현재 선택하신 [만기일자]가 동일하지 않습니다.!!!");
        // 							obj.setColumn(row, "CHK", 0);
        // 							this.dsList.set_enableevent(true);
        // 							return false;
        // 						}
        // 					}
        // 				}
        // 			}
        // 		}
        //
        //
        // 		this.dsList.set_enableevent(true);
        // 	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboTY_NOTES.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.cboTY_NOTES2.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.cboTY_PAYBACK.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.cboTY_DATE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclDT_FROM.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclDT_TO.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.objGrid.addEventHandler("oncellclick",this.divData_objGrid_oncellclick,this);
        };
        this.loadIncludeScript("DFD_NOTES_CONDITION.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
