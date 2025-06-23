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
            this.set_titletext("대여금거래현황조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFGPR_LOANSCDL_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"FR_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_REPAY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_REPAY", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("완료여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_REPAY","0.0","sta03:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsTY_REPAY");
            obj.set_text("진행중");
            obj.set_value("N");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","sta04:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","cfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("거래기간");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_LOAN","0.0","sta03:10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","cfCD_LOAN:0.0","sta03:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("대여종류");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calFR_TRADE","0.0","10.0","118","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TILDE","calFR_TRADE:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calTO_TRADE","staCD_TILDE:0.0","10.0","121","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","0.0","sta03:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("관리번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfNO_LOAN","sta02:0.0","sta03:10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
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
            obj = new BindItem("item0","divSearch.form.cfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cfCD_LOAN.form.CDTextBox","value","dsSearch","CD_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.calFR_TRADE","value","dsSearch","FR_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.calTO_TRADE","value","dsSearch","TO_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboTY_REPAY","value","dsSearch","TY_REPAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cfNO_LOAN.form.CDTextBox","value","dsSearch","NO_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFG_LOAN_SCHEDULE.xfdl", function() {
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
        	this.fnSetCombo();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 입력,저장,삭제 버튼 비활성화 처리
        //  	this.FormBtns.Add.set_enable(false);
        //  	this.FormBtns.Save.set_enable(false);
        //  	this.FormBtns.Del.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnAgreementInf = this.gfnFormButtonAdd("btnAgreementInf", "fnAgreementInf", "약정정보");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	// 조회조건
        	this.cfCD_CORP  = this.divSearch.form.cfCD_CORP;		// 법인코드
        	this.calFR_TRADE = this.divSearch.form.calFR_TRADE;		// 거래일자(from)
        	this.calTO_TRADE = this.divSearch.form.calTO_TRADE;		// 거래일자(to)
        	this.cfCD_LOAN = this.divSearch.form.cfCD_LOAN;			// 대여종류
        	this.cfNO_LOAN = this.divSearch.form.cfNO_LOAN;			// 관리번호
        	this.cboTY_REPAY = this.divSearch.form.cboTY_REPAY;		// 완료여부

        	this.dxGrid = this.divData.form.objGrid;				// 그리드
        	this.grSearch = this.FormInfo.GR_SEARCH;				// 권한?
        	this.cdGroup = this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP;				// 그룹코드
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.cfCD_CORP.CodeFindName = "DZX_CFCORP";				// 법인코드(조회조건)
        	this.cfCD_LOAN.CodeFindName = "DFX_CFLOANCODE";			// 대여종류(조회조건)
        	this.cfNO_LOAN.CodeFindName = "DFX_CFNO_LOAN";			// 관리번호(조회조건)

        	this.cfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_LOAN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_LOAN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.cfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfCD_LOAN.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.cfNO_LOAN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFG_LOANSCDL");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	// 법인코드 init
        	if (this.gfnIsNull(this.cfCD_CORP.form.CDTextBox.value)) {
        		this.cfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.cfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "FR_TRADE", this.gfnGetFirstDate(today));
        	this.dsSearch.setColumn(0, "TO_TRADE", today);


        	// 권한체크
        	if (nexacro.toNumber(this.grSearch) >= 2) {
        		this.cfCD_CORP.set_enable(false);
        	}

        	this.cfCD_CORP.form.CDTextBox.setFocus();

        	this.fnSetVisibleCol("N");
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("FR_TRADE", "string");
        	this.dsSelect.addColumn("TO_TRADE", "string");
        	this.dsSelect.addColumn("CD_LOAN", "string");
        	this.dsSelect.addColumn("NO_LOAN", "string");
        	this.dsSelect.addColumn("TY_REPAY", "string");
        	this.dsSelect.addColumn("ID_USER", "string");
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
        	this.dsSelect.setColumn(0, "FR_TRADE", this.dsSearch.getColumn(0, "FR_TRADE"));
        	this.dsSelect.setColumn(0, "TO_TRADE", this.dsSearch.getColumn(0, "TO_TRADE"));
        	this.dsSelect.setColumn(0, "CD_LOAN", this.dsSearch.getColumn(0, "CD_LOAN"));
        	this.dsSelect.setColumn(0, "NO_LOAN", this.dsSearch.getColumn(0, "NO_LOAN"));
        	this.dsSelect.setColumn(0, "TY_REPAY", this.dsSearch.getColumn(0, "TY_REPAY"));
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

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
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function(svcId) {

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

        		if (this.dsList.rowcount > 0 && this.dsList.getColumn(this.dsList.rowposition, "YN_VIEW") == "Y") {
        			this.fnSetVisibleCol("Y");
        		}

        		if (this.dsList.rowcount > 0 && this.dsList.getColumn(this.dsList.rowposition, "YN_VIEW") == "N") {
        			this.fnSetVisibleCol("N");
        		}

        		if (this.dsList.rowcount == 0) {
        			this.fnSetVisibleCol("N");
        		}
        	}
        	 else if(svcID == "combo") {

        		//  조회조건(완료여부)
        		var iRow = this.dsTY_REPAY.insertRow(0);
        		this.dsTY_REPAY.setColumn(iRow, "CD_CODE", "");
        		this.dsTY_REPAY.setColumn(iRow, "DS_CODE", "전체");
        		this.cboTY_REPAY.set_index(2);
        	}
        }


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	var cdCorp = this.cfCD_CORP.form.CDTextBox.value;

        	switch(id) {

        	// 법인코드(조회조건)
        	case "cfCD_CORP":
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.cdGroup);
        		break;

        	// 대여종류(조회조건)
        	case "cfCD_LOAN":
        		dsUserParam.setColumn(nrow, "YN_USE", "Y");
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		break;

        	// 관리번호(조회조건)
        	case "cfNO_LOAN":
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(cdCorp) ? "" : cdCorp);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		break;

        	default:
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;

        	switch(id) {

        	// 법인코드(조회조건)
        	case "cfCD_CORP":
        		this.fnSearchInit();
        		break;

        	// 관리번호(조회조건)
        	case "cfNO_LOAN":
        		this.fnSearchInit();
        		break;

        	// 대여종류(조회조건)
        	case "cfCD_LOAN":
        		this.fnSearchInit();
        		break;

        	default:
        	}
        	return true;
        }



        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
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


        // 약정정보
        this.fnAgreementInf = function(obj,e) {

        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	var param = {};

        	param.CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");	// 법인코드
        	param.DS_CORP = this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");	// 법인명
        	param.NO_LOAN = this.dsList.getColumn(this.dsList.rowposition, "NO_LOAN");	// 관리번호
        	param.NM_LOAN = this.dsList.getColumn(this.dsList.rowposition, "NM_LOAN");	// 대여명
        // 	param.CD_LOAN = this.dsList.getColumn(this.dsList.rowposition, "CD_LOAN");	// 대여종류코드
        // 	param.DS_LOAN = this.dsList.getColumn(this.dsList.rowposition, "DS_LOAN");	// 대여종류명

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DFG_LOAN", "fnPopCallBack", param);
        }




        // 공통코드콤보
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "G9");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_REPAY=combo0";
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


        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        // 조회결과 YN_VIEW에 따라 visible 처리
        this.fnSetVisibleCol = function(flag) {
        	//trace("flag ::: " + flag);

        	var size60 = "33";
        	var size70 = "11,12";
        	var size80 = "27,28,31,32,34";
        	var size100 = "10,13,14,15,17,18,20,21,22,23,24,25,26";
        	var size120 = "19,29,30";
        	var size150 = "16";
        	var size200 = "35";

        	for (var i=0; i < 36; i++) {

        		if (flag == "Y") {
        			// 원시대여명(19) ~ 비고(35) 숨기고
        			if (i >= 19 && i <= 35) {
        				this.dxGrid.setFormatColProperty(i, "size", 0);
        			}

        			// 송금액(10) ~ 사후신고일(18) 보여주고
        			if (i >= 10 && i <= 18) {
        				if (size70.indexOf(i)> -1 ) {
        					this.dxGrid.setFormatColProperty(i, "size", 70);
        				}
        				if (size100.indexOf(i)> -1 ) {
        					this.dxGrid.setFormatColProperty(i, "size", 100);
        				}
        				if (size150.indexOf(i)> -1 ) {
        					this.dxGrid.setFormatColProperty(i, "size", 150);
        				}
        			}
        		} else {

        			// 송금액(10) ~ 사후신고일(18) 숨기고
        			if (i >= 10 && i <= 18) {
        				this.dxGrid.setFormatColProperty(i, "size", 0);
        			}

        			// 원시대여명(19) ~ 비고(35) 보여주고
        			if (i >= 19 && i <= 35) {

        				if (size60.indexOf(i)> -1 ) {
        					this.dxGrid.setFormatColProperty(i, "size", 60);
        				}
        				if (size80.indexOf(i)> -1 ) {
        					this.dxGrid.setFormatColProperty(i, "size", 80);
        				}
        				if (size100.indexOf(i)> -1 ) {
        					this.dxGrid.setFormatColProperty(i, "size", 100);
        				}
        				if (size120.indexOf(i)> -1 ) {
        					this.dxGrid.setFormatColProperty(i, "size", 120);
        				}
        				if (size200.indexOf(i)> -1 ) {
        					this.dxGrid.setFormatColProperty(i, "size", 200);
        				}
        			}

        		}

        	}

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboTY_REPAY.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divSearch.form.calFR_TRADE.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.calTO_TRADE.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DFG_LOAN_SCHEDULE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
