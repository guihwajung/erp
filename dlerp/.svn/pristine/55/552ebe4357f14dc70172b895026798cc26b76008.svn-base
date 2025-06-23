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
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_TUITION_PERIOD_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_TUITION_PERIOD_SAVE</Col></Row><Row><Col id=\"TARGET\">register</Col><Col id=\"SP\">DABPR_TUITION_PERIOD_REGISTER</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YY_TUITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TUITION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_TUITION", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">%</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">1분기</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">2분기</Col></Row><Row><Col id=\"CD_CODE\">03</Col><Col id=\"DS_CODE\">3분기</Col></Row><Row><Col id=\"CD_CODE\">04</Col><Col id=\"DS_CODE\">4분기</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYR_WORK","ccfCD_CORP:0.0","10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("년도");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_TUITION","staYR_WORK:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TUITION","ctclYY_TUITION:0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("분기");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCD_TUITION","staCD_TUITION:0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsCD_TUITION");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_visible("true");
            obj.set_text("전체");
            obj.set_value("%");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSUBMIT",null,"0","60","30","181",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("승인요청");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYY_TUITION.form.TextBox","value","dsSearch","YY_TUITION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboCD_TUITION","value","dsSearch","CD_TUITION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_TUITION_PERIOD.xfdl", function() {
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
        	this.btnRegister = this.gfnFormButtonAdd("btnRegister", "fnRegister");	// 일괄등록 버튼
        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;

        	this.ccfCD_CORP     = this.divSearch.form.ccfCD_CORP;		// 법인코드
        	this.ctclYY_TUITION = this.divSearch.form.ctclYY_TUITION;	// 년도
        	this.cboCD_TUITION  = this.divSearch.form.cboCD_TUITION;	// 분기
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드영역
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_TUITION_PERIOD");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGrid_AfterCDTextChanged";

        	// 검색영역
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 법인코드
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YY_TUITION", "string");
        	this.dsSelect.addColumn("CD_TUITION", "string");
        	this.dsSelect.addColumn("ID_USER", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");

        	// 저장
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("YY_TUITION", "string");
        	this.dsSave.addColumn("CD_TUITION", "string");
        	this.dsSave.addColumn("CD_SCHOLARSHIP", "string");
        	this.dsSave.addColumn("FR_TUITION", "string");
        	this.dsSave.addColumn("TO_TUITION", "string");
        	this.dsSave.addColumn("YM_PAY", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("YN_CLOSE", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("GR_CORP", "string");

        	// 일광생성
        	this.dsRegister = new Dataset();
        	this.dsRegister.addColumn("CD_CORP", "string");
        	this.dsRegister.addColumn("YY_TUITION", "string");
        	this.dsRegister.addColumn("ID_USER", "string");
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
        	// 법인코드
        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);

        	// 년도
        	var toDay = this.gfnGetDate().substr(0,4);
        	this.dsSearch.setColumn(0, "YY_TUITION", toDay);

        	// 분기
        	this.dsSearch.setColumn(0, "CD_TUITION", "%");

        	// 권한 설정
            // GR_SEARCH = 1: 전체, 2: 법인, 3: 본부, 5: 부문, 7: 부서, 9: 개인
            // TY_AUTH = F: 전체, U: 쓰기, R: 읽기
        	if (this.FormInfo.GR_SEARCH == "1") {
        		this.ccfCD_CORP.set_enable(true);
        	} else {
        		this.ccfCD_CORP.set_enable(false);
        	}

        	this.FormBtns.Select.click();
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YY_TUITION", this.dsSearch.getColumn(0, "YY_TUITION"));
        	this.dsSelect.setColumn(0, "CD_TUITION", this.dsSearch.getColumn(0, "CD_TUITION"));
        	this.dsSelect.setColumn(0, "ID_USER"   , this.AuthClient.ID_USER);
        	this.dsSelect.setColumn(0, "GR_SEARCH" , this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_CORP"   , this.AuthClient.CD_CORP);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
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

        /*
         * 추가 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current

        	this.dsList.setColumn(nrow, "YY_TUITION", this.dsSearch.getColumn(0, "YY_TUITION"));
        	this.dsList.setColumn(nrow, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        }

        /*
         * 삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         * 저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();
        	this.dsSave.clearData();
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_GUBUN"      , flag);
        				this.dsSave.setColumn(nrow, "CD_CORP"       , this.dsList.getColumn(i, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "YY_TUITION"    , this.dsList.getColumn(i, "YY_TUITION"));
        				this.dsSave.setColumn(nrow, "CD_TUITION"    , this.dsList.getColumn(i, "CD_TUITION"));
        				this.dsSave.setColumn(nrow, "CD_SCHOLARSHIP", this.dsList.getColumn(i, "CD_SCHOLARSHIP"));
        				this.dsSave.setColumn(nrow, "FR_TUITION"    , this.dsList.getColumn(i, "FR_TUITION"));
        				this.dsSave.setColumn(nrow, "TO_TUITION"    , this.dsList.getColumn(i, "TO_TUITION"));
        				this.dsSave.setColumn(nrow, "YM_PAY"        , this.dsList.getColumn(i, "YM_PAY"));
        				this.dsSave.setColumn(nrow, "DS_REMARK"     , this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "YN_CLOSE"      , this.dsList.getColumn(i, "YN_CLOSE"));
        				this.dsSave.setColumn(nrow, "ID_USER"       , this.AuthClient.ID_USER);
        				this.dsSave.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        				this.dsSave.setColumn(nrow, "GR_CORP"       , this.AuthClient.CD_CORP);
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

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

        /*
         * 엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

        /*
         * 출력 버튼
         */
        this.fnPrint = function() {

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	return false;
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.fnRegister = function() {
        	var YY_TUITION = this.dsSearch.getColumn(0, "YY_TUITION");

        	var msg = "학교유형별 " + YY_TUITION + "년도 학자금등록 기간을 생성에 대하여\n일괄생성 하시겠습니까?";
        	msg += "\n존재하지 않는 학자금등록 기간만 신규로 생성됩니다."
        	this.gfnConfirm(msg, function(strId, isOk) {
        		if (isOk == false) {
        			return;
        		}

        		this.dsRegister.clearData();
        		var nrow = this.dsRegister.addRow();
        		this.dsRegister.setColumn(nrow, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsRegister.setColumn(nrow, "YY_TUITION", this.dsSearch.getColumn(0, "YY_TUITION"));
        		this.dsRegister.setColumn(nrow, "ID_USER"   , this.AuthClient.ID_USER);

        		if (this.dsRegister.rowcount == 0) return;

        		var strSvcId    = "register";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "register=dsRegister";
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
        	});
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "register") {
        		this.FormBtns.Select.click();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {
        	switch(id) {
        	case "DAX_CFTUITION_REGDT_CODEFIND":
        		console.log('codeFindData', codeFindData[0]["POSIBLE_MONTH"].split(","));
        	}
        	return true;
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        /************************************************************************
         * 기타 함수
         ************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staCD_TUITION.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.btnSUBMIT.addEventHandler("onclick",this.fnSubmit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_TUITION_PERIOD.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
