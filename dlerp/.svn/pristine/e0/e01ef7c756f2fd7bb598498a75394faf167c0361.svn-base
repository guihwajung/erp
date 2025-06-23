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
            this.set_titletext("집금대체 전표발행");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFLPR_COLLECT1_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DFLPR_COLLECT_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_COMBO_SELECT</Col></Row><Row><Col id=\"SP\">DFLPR_COLLECT_INSERT</Col><Col id=\"TARGET\">confirm</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DFLPR_COLLECT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DFLPR_COLLECT_DELETE</Col></Row><Row><Col id=\"TARGET\">autoslip</Col><Col id=\"SP\">DFLPR_COLLECT_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">autoslipx</Col><Col id=\"SP\">DFLPR_COLLECT_AUTOSLIPX</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_SLIP", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SLIP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","sta04:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","cfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("거래일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_TRADE","sta00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","0.0","sta04:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfNO_ACCOUNT","sta01:0.0","sta04:10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("발행여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_SLIP","sta03:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_innerdataset("dsYN_SLIP");
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","73",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","54.45%","5","4",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","10",null,"22","0",null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("2");
            obj.set_text("입출금내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Button("btnConfirm","sta00:-55","6","55","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("확정");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","30",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","10",null,"22","0",null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("2");
            obj.set_text("전표발행내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","30",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Button("btnConfirmx","sta00:-76","6","75","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            obj.set_text("확정취소");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.calDT_TRADE","value","dsSearch","DT_TRADE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cfNO_ACCOUNT.form.CDTextBox","value","dsSearch","NO_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboYN_SLIP","value","dsSearch","YN_SLIP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFL_COLLECT.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        var tmSlip = "";	// 병합전표발행KEY

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
        //   	this.FormBtns.Add.set_enable(false);
        //   	this.FormBtns.Save.set_enable(false);
        //   	this.FormBtns.Del.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnSlipPub = this.gfnFormButtonAdd("btnSlipPub", "fnSlipPub", "전표발행");
        	this.btnSlipSelect = this.gfnFormButtonAdd("btnSlipSelect", "fnSlipSelect", "전표조회");
        	this.btnSlipCncl = this.gfnFormButtonAdd("btnSlipCncl", "fnSlipCncl", "전표취소");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	// 조회조건
        	this.cfCD_CORP  = this.divSearch.form.cfCD_CORP;		// 법인코드
        	this.calDT_TRADE = this.divSearch.form.calDT_TRADE;		// 거래일자
        	this.cboYN_SLIP = this.divSearch.form.cboYN_SLIP;		// 발행여부
        	this.cfNO_ACCOUNT = this.divSearch.form.cfNO_ACCOUNT;	// 계좌번호

        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;			// 그리드(입출금내역)
        	this.dxGrid2 = this.divData.form.divDataRight.form.objGrid2;		// 그리드(전표발행내역)

        	this.grSearch = this.FormInfo.GR_SEARCH;			// 권한?
        	this.cdGroup = this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP;			// 그룹코드
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.cfCD_CORP.CodeFindName = "DZX_CFCORP";
        	this.cfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.cfNO_ACCOUNT.CodeFindName = "DFX_CFNO_ACCOUNT";
        	this.cfNO_ACCOUNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_ACCOUNT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFL_COLLECT1");		// 입출금내역조회(집금대체전표발행)
        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DF", "DFL_COLLECT2");		// 전표발행내역조회(집금대체전표발행)


        	// 그리드 코드파인드
        	this.dxGrid2.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid2.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";


        	// 법인코드 init
        	if (this.gfnIsNull(this.cfCD_CORP.form.CDTextBox.value)) {
        		this.cfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.cfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "DT_TRADE", today);


        	// 권한체크
        	if (nexacro.toNumber(this.grSearch) >= 2) {
        		this.cfCD_CORP.set_enable(false);
        	}

        	// 법인코드 포커스
        	this.cfCD_CORP.form.CDTextBox.setFocus();
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("DT_TRADE", "string");
        	this.dsSelect.addColumn("NO_ACCOUNT", "string");
        	this.dsSelect.addColumn("YN_SLIP", "string");

        	this.dsConfirm = new Dataset();
        	this.dsConfirm.addColumn("DT_TRADE", "string");
        	this.dsConfirm.addColumn("CD_BANK", "string");
        	this.dsConfirm.addColumn("TY_CASH", "string");
        	this.dsConfirm.addColumn("NO_ACCOUNT", "string");
        	this.dsConfirm.addColumn("NO_TRADE", "string");
        	this.dsConfirm.addColumn("CD_CORP", "string");
        	this.dsConfirm.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("NO_INCONFIRM", "string");
        	this.dsUpdate.addColumn("CD_ACCOUNT", "string");
        	this.dsUpdate.addColumn("CD_DEPT_BE", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("TY_VENDOR", "string");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_INCONFIRM", "string");
        	this.dsDelete.addColumn("ID_USER", "string");

        	this.dsAutoSlip = new Dataset();
        	this.dsAutoSlip.addColumn("NO_INCONFIRM", "string");
        	this.dsAutoSlip.addColumn("TM_SLIP", "string");
        	this.dsAutoSlip.addColumn("YN_SLIP", "string");
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
        	this.gfnGridBeforeSelect(this.dxGrid2);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "DT_TRADE", this.dsSearch.getColumn(0, "DT_TRADE"));
        	this.dsSelect.setColumn(0, "NO_ACCOUNT", this.dsSearch.getColumn(0, "NO_ACCOUNT"));
        	this.dsSelect.setColumn(0, "YN_SLIP", this.dsSearch.getColumn(0, "YN_SLIP"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect select2=dsSelect";
        	var outData     = "dsList=select0 dsList2=select20";
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
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid2)) return;

        	this.dxGrid2.updateToDataset();

        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList2.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList2, i);
        		switch(flag) {

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "NO_INCONFIRM", this.dsList2.getColumn(i, "NO_INCONFIRM"));
        				this.dsUpdate.setColumn(nrow, "CD_ACCOUNT", this.dsList2.getColumn(i, "CD_ACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_BE", this.dsList2.getColumn(i, "CD_DEPT_BE"));
        				this.dsUpdate.setColumn(nrow, "CD_VENDOR", this.dsList2.getColumn(i, "CD_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "TY_VENDOR", this.dsList2.getColumn(i, "TY_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList2.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
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

        	if (this.gfnIsNull(this.cfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("법인코드를 입력 하세요.");
        		this.cfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}
        	return true;
        };

        /*
         *	팝업 Validate
         */

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
        		this.gfnGridAfterSelect(this.dxGrid2);

        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}  else if(svcID == "combo") {
        		var iRow = this.dsYN_SLIP.insertRow(0);
        		this.dsYN_SLIP.setColumn(iRow, "CD_CODE", "");
        		this.dsYN_SLIP.setColumn(iRow, "DS_CODE", "전체");
        		this.cboYN_SLIP.set_index(2);
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
        	}
        }

        this.fnMsgCallback = function(strId, strVal) {
        	switch(strId) {
        		case "dataCreate":
        		case "cms":
        			this.FormBtns.Select.click();
        		break;
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.gfnIsNull(this.cfCD_CORP.form.CDTextBox.value) ? "" : this.cfCD_CORP.form.CDTextBox.value;

        	switch(id) {

        	// 법인코드(조회조건)
        	case "cfCD_CORP":
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.cdGroup);
        		break;

        	// 계좌번호(조회조건)
        	case "cfNO_ACCOUNT":
        		dsUserParam.setColumn(nrow, "GUBUN", "MAIN");
        		dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
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
        		break;
        	// 계좌번호(조회조건)
        	case "cfNO_ACCOUNT":
        		break;

        	default:
        	}
        	return true;
        }



        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.gfnIsNull(this.cfCD_CORP.form.CDTextBox.value) ? "" : this.cfCD_CORP.form.CDTextBox.value;

        	// 계정코드
        	if (id == "DFX_CFACNT") {
        	}

        	// 귀속부서
        	if (id == "DFX_CFACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.cdGroup);
        		dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        	}

        	// 거래처
        	if (id == "DFX_CFVENDOR") {
        		dsUserParam.setColumn(nrow, "TY_VENDOR1", "전체");
        		dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        	}
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	// 계좌번호
        	if (id == "DFX_CFNO_ACCOUNT") {
        		if (arr.length > 0) {
        // 			trace("NO_ACCOUNT :: " + arr[0]["NO_ACCOUNT"]);
        // 			trace("TY_GUBUN :: " + arr[0]["TY_GUBUN"]);
        // 			trace("CD_BANK :: " + arr[0]["CD_BANK"]);
        // 			trace("DS_BANK :: " + arr[0]["DS_BANK"]);
        // 			trace("CD_MANAGEBANK :: " + arr[0]["CD_MANAGEBANK"]);
        		}
        	}
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

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("CD_SYSTEM", "string");
        	this.dsCombo.addColumn("CD_TYPE", "string");

        	// 확인구분
        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "CD_SYSTEM", "DF");
        	this.dsCombo.setColumn(0, "CD_TYPE", "Z1");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsYN_SLIP=combo0";
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

        // 브랜치전송
        this.fnAmtIlboPrnt = function(obj,e) {

        	this.dsCreate.clearData();

        	var nrow = this.dsCms.addRow();

        	this.dsCms.setColumn(nrow, "CD_CORP", this.dsList.getColumn(this.dsList.rowposition, "CD_CORP"));	// 법인코드
        	this.dsCms.setColumn(nrow, "DT_PLAN", this.calDT_PLAN.value);										// 집행일자
        	this.dsCms.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);										// 사용자


        	if (this.dsCms.rowcount == 0) return;

        	var strSvcId    = "cms";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "cms=dsCms";
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


        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid2);
        	}
        };


        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };


        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        // 확정
        this.divData_divDataLeft_btnConfirm_onclick = function(obj,e)
        {
        	this.dsConfirm.clearData();

        	for (var i=0; i < this.dsList.rowcount; i++) {
        		if (this.dsList.getColumn(i, "CHK") == 1) {
        			var nrow = this.dsConfirm.addRow();
        			this.dsConfirm.setColumn(nrow, "DT_TRADE", this.dsList.getColumn(i, "DT_TRADE"));
        			this.dsConfirm.setColumn(nrow, "CD_BANK", this.dsList.getColumn(i, "CD_BANK"));
        			this.dsConfirm.setColumn(nrow, "TY_CASH", this.dsList.getColumn(i, "TY_CASH"));
        			this.dsConfirm.setColumn(nrow, "NO_ACCOUNT", this.dsList.getColumn(i, "NO_ACCOUNT"));
        			this.dsConfirm.setColumn(nrow, "NO_TRADE", this.dsList.getColumn(i, "NO_TRADE"));
        			this.dsConfirm.setColumn(nrow, "CD_CORP", this.cfCD_CORP.form.CDTextBox.value);
        			this.dsConfirm.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		}
        	}

        	if (this.dsConfirm.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "confirm=dsConfirm";
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

        // 확정취소
        this.divData_divDataRight_btnConfirmx_onclick = function(obj,e)
        {
        	this.dsDelete.clearData();

        	for (var i=0; i < this.dsList2.rowcount; i++) {
        		if (this.dsList2.getColumn(i, "CHK") == 1) {
        			var nrow = this.dsDelete.addRow();
        			this.dsDelete.setColumn(nrow, "NO_INCONFIRM", this.dsList2.getColumn(i, "NO_INCONFIRM"));
        			this.dsDelete.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		}
        	}

        	if (this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete";
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


        // 전표발행
        this.fnSlipPub = function(obj,e) {

        	this.fnAutoSlip("N");

        }

        // 전표조회 및 전표취소 validation check
        this.fnSlipValidation = function() {
        	var chkCnt = this.dsList2.getCaseCount("CHK == 1");

        	if (chkCnt == 0) {
        		return false;
        	}

        	for ( var i=0; i < this.dsList2.rowcount; i++ ) {
        		if ( this.dsList2.getColumn(i, "CHK") == 1 ) {
        			if ( this.gfnIsNull(this.dsList2.getColumn(i, "NO_SLIP") )) {
        				this.gfnAlert("발행된 전표가 없습니다.");
        				return false;
        			}
        		}
        	}
        	return true;
        }

        // 전표조회
        this.fnSlipSelect = function(obj,e) {

        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid2)) { return false; }
        	// var chkRow = this.dsList.findRow("CHK", 1);
        	var param = {};
        	param.CD_TRADE = this.dsList2.getColumn(this.dsList2.rowposition, "NO_SLIP");
        	param.IUD_FLAG = "S";
        	param.strYN_JUNDO_START = "";

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	//trace("this.FormInfo.CD_MODULE :: " + this.FormInfo.CD_MODULE);
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnPopCallBack", param);

        }



        this.fnPopCallBack = function(svcID, val) {
        	//if (val != false) {
        		//var json = JSON.parse(val);

        		if (svcID.indexOf("DHA_ISSUESLIP") > -1) {
        			this.FormBtns.Select.click();
        		}
        	//}
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

        		for (var i=0; i < this.dsList2.rowcount; i++) {
        			if (this.dsList2.getColumn(i, "CHK") == 1) {
        				var nrow = this.dsAutoSlipx.addRow();
        				this.dsAutoSlipx.setColumn(nrow, "NO_SLIP", this.dsList2.getColumn(i, "NO_SLIP"));
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

        /*
         * 전표발행
         */
        this.fnAutoSlip = function(slipYn) {

        	this.dsAutoSlip.clearData();

        	// 전표발행
        	if (slipYn == "N") {

        		tmSlip = this.AuthClient.ID_USER + this.gfnGetDate("milli");

        		for (var i=0; i < this.dsList2.rowcount; i++) {
        			if (this.dsList2.getColumn(i, "CHK") == 1) {
        				var nrow = this.dsAutoSlip.addRow();
        				this.dsAutoSlip.setColumn(nrow, "NO_INCONFIRM", this.dsList2.getColumn(i, "NO_INCONFIRM"));
        				this.dsAutoSlip.setColumn(nrow, "TM_SLIP", tmSlip);
        				this.dsAutoSlip.setColumn(nrow, "YN_SLIP", slipYn);
        				this.dsAutoSlip.setColumn(nrow, "CD_CORP", this.cfCD_CORP.form.CDTextBox.value);
        				this.dsAutoSlip.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			}
        		}

        	// 전표발행후처리
        	} else {
        		var nrow = this.dsAutoSlip.addRow();
        		this.dsAutoSlip.setColumn(nrow, "TM_SLIP", tmSlip);
        		this.dsAutoSlip.setColumn(nrow, "YN_SLIP", slipYn);
        		this.dsAutoSlip.setColumn(nrow, "CD_CORP", this.cfCD_CORP.form.CDTextBox.value);
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.divData.form.divDataLeft.form.btnConfirm.addEventHandler("onclick",this.divData_divDataLeft_btnConfirm_onclick,this);
            this.divData.form.divDataRight.form.btnConfirmx.addEventHandler("onclick",this.divData_divDataRight_btnConfirmx_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DFL_COLLECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
