(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAB_EDUCATION");
            this.set_titletext("교육관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_EDU_SELECT</Col></Row><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DZXPR_CODE_LIST_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"FR_EDUCATION\" type=\"STRING\" size=\"256\"/><Column id=\"TO_EDUCATION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"ST_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REPORT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAPRV", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CODE\">전체</Col><Col id=\"CD_CODE\"/></Row><Row><Col id=\"DS_CODE\">결재완료</Col><Col id=\"CD_CODE\">4</Col></Row><Row><Col id=\"DS_CODE\">결재중포함</Col><Col id=\"CD_CODE\">X</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:-10","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staFR_EDUCATION","ccfCD_CORP:8","staCD_CORP:-22","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("교육일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclFR_EDUCATION","staFR_EDUCATION:0","staCD_CORP:-23","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTO_EDUCATION","ctclFR_EDUCATION:0","staCD_CORP:-23","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclTO_EDUCATION","staTO_EDUCATION:0","staCD_CORP:-23","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_EDUCATION","staFR_EDUCATION:228","staCD_CORP:-22","106","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("신청서구분 ");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_REPORT","staDS_EDUCATION:3","12","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("60");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_EDUCATION00","ccfCD_REPORT:-12","12","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("결재상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboST_APRV","staDS_EDUCATION00:-1","12","100","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsAPRV");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclFR_EDUCATION","value","dsSearch","FR_EDUCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ctclTO_EDUCATION","value","dsSearch","TO_EDUCATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_REPORT.form.CDTextBox","value","dsSearch","CD_REPORT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_REPORT.form.DSTextBox","value","dsSearch","DS_REPORT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cboST_APRV","value","dsSearch","ST_APRV");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_EDU_SELECT.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e) {
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
        	this.btnDocQ 	= this.gfnFormButtonAdd("btnDocQ", "fnAprvDocQ");  		//  결재문서조회
        	this.btnBaseInfo= this.gfnFormButtonAdd("btnBaseInfo", "fnBaseInfo");   //  인사기본
        	this.SearchSlip = this.gfnFormButtonAdd("SearchSlip", "fnSearchSlip");	//  전표조회
        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	// 그리드영역
        	this.dxGrid = this.divData.form.objGrid;

        	// 검색영역
        	this.ccfCD_CORP       = this.divSearch.form.ccfCD_CORP;
        	this.ctclFR_EDUCATION = this.divSearch.form.ctclFR_EDUCATION;
        	this.ctclTO_EDUCATION = this.divSearch.form.ctclTO_EDUCATION;
        	this.ccfCD_REPORT  	= this.divSearch.form.ccfCD_REPORT;
        	this.cboST_APRV  	= this.divSearch.form.cboST_APRV;
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드영역
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_EDU_SELECT");
        	this.dxGrid.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGrid_AfterCDTextChanged";

        	// 검색영역
        	this.ccfCD_CORP.BeforeUserDataSetParam      = "fnBeforeUserDataSetParam";	// 법인
        	this.ccfCD_CORP.AfterCDTextChanged          = "fnAfterCDTextChanged";
        	this.ccfCD_REPORT.BeforeUserDataSetParam  	= "fnBeforeUserDataSetParam";	// 성명
        	this.ccfCD_REPORT.AfterCDTextChanged      	= "fnAfterCDTextChanged";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("FR_EDUCATION", "string");
        	this.dsSelect.addColumn("TO_EDUCATION", "string");
        	this.dsSelect.addColumn("CD_REPORT", "string");
        	this.dsSelect.addColumn("ST_APRV", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("TY_AUTH", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	// 법인코드
        	this.fnSetCodeFinder(this.ccfCD_CORP, this.AuthClient.CD_CORP);

        	// 교육일자
        	var ym =  this.gfnGetDate().substring(0, 6);
        	var begin = this.gfnGetDate().substring(0, 4)+ '0101'
        	var end = this.gfnGetLastDate(ym);
        	this.fnSetObjectValue(this.ctclFR_EDUCATION, begin);
        	this.fnSetObjectValue(this.ctclTO_EDUCATION, end);

        	this.dsSearch.setColumn(0, "ST_APRV", "");

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

         	this.dsSelect.clearData();
         	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "FR_EDUCATION", this.dsSearch.getColumn(0, "FR_EDUCATION"));
        	this.dsSelect.setColumn(0, "TO_EDUCATION", this.dsSearch.getColumn(0, "TO_EDUCATION"));
        	this.dsSelect.setColumn(0, "CD_REPORT", this.dsSearch.getColumn(0, "CD_REPORT"));
        	this.dsSelect.setColumn(0, "ST_APRV", this.dsSearch.getColumn(0, "ST_APRV"));
        	this.dsSelect.setColumn(0, "GR_SEARCH"   , this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "TY_AUTH"     , this.FormInfo.TY_AUTH);
        	this.dsSelect.setColumn(0, "GR_DEPT"     , this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER"     , this.AuthClient.ID_USER);

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
        	this.gfnExcelExport(this.dxGrid);
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
        	if (!this.gfnIsNull(this.ctclFR_EDUCATION.value) && !this.gfnIsNull(this.ctclTO_EDUCATION.value) ) {
        		if ( this.ctclFR_EDUCATION.value > this.ctclTO_EDUCATION.value ) {
        			this.gfnAlert("교육일자가 잘못 입력 되었습니다.");
        			this.ctclFR_EDUCATION.setFocus();
        			return false;
        		}
        	}
        	return true;
        };

        this.fnSaveValid = function(pGrid) {
        	var objDs = pGrid.getBindDataset();

        	var msg = "";
        	for (var i = 0; i < objDs.rowcount; i++) {
        		var flag = this.gfnGetFlag(objDs, i);
        		switch(flag) {
        		case "I":
        		case "U":
        			var frDate = objDs.getColumn(i, "FR_EDUCATION");
        			var toDate = objDs.getColumn(i, "TO_EDUCATION");
        			if (!this.gfnIsNull(frDate) && !this.gfnIsNull(toDate)) {
        				if (frDate > toDate) {
        					msg += i + "행 교육시작일이 종료일보다 클 수 없습니다.\n";
        				}
        			}
        			break;
        		}
        	}

        	if (this.gfnIsNull(msg)) {
        		return true;
        	} else {
        		var arrError = [msg];
        		this.gfnAlert(arrError);
        		return false;
        	}
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        // 결재문서조회 버튼
        this.fnAprvDocQ = function(obj, e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) return;

        	var cd_corp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	var no_aprv = this.dsList.getColumn(this.dsList.rowposition, "NO_APRV_BEF");
        	var no_doc = this.dsList.getColumn(this.dsList.rowposition, "NO_DOC_BEF");
        	if(this.gfnIsNull(no_aprv) || this.gfnIsNull(no_doc)){
        		return;
        	}

        	var oParams = {
        		CD_CORP: cd_corp,
        		NO_APRV: no_aprv,
        	}
        	this.gfnAprvDoc(oParams, this.fnAprvDocQCallback);
        }

        this.fnAprvDocQCallback = function() {
        	console.log('fnAprvDocQCallback');
        	//alert('fnAprvDocQCallback');
        }



        // 인사기본정보
        this.fnBaseInfo = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	//var colNm = this.gfnGridGetBindColumnNameByIndex(obj,e.cell);
        	//if(obj.usReadOnlyY.search(colNm) == -1) return true;

        	var param = {};
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.DS_CORP = this.dsSearch.getColumn(0, "DS_CORP");
        	param.ID_SABUN = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        	param.CD_PM = ""

        	//this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DAA_BASEINFO", "", param , this.width, this.height);
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAA_BASEINFO", "", param , 1350, 860);
        }


        //전표 조회
        this.fnSearchSlip = function (obj,e)
        {
         	if(this.gfnIsNull(this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE")))){
         		this.gfnAlert("전표번호는 필수입니다.");
         		return;
         	}

        	var param = {};
        	param.IUD_FLAG 			= "S";
        	//param.strYN_JUNDO_START = "";
        	//trace("fnSearchSlip CD_TRADE =>" + this.dsList.getColumn(0, "CD_TRADE"));
        	if (this.dsList.getColumn(0, "YN_CONNECT") == "Y") {
        		param.CD_TRADE 			= this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE").substr(0,14));}
        	else{ param.CD_TRADE 		= this.gfnTrim(this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"));}
        	this.gfnFormOpen("DHA", "DHA_ISSUESLIP", "fnSlipPopupCallBack", param, this.getOffsetWidth(), this.getOffsetHeight());

        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         * 기본 콜백
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {

        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return false;
        	}

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if (svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "APRV") {
        		this.gfnOpenAppr(function() {
        			this.FormBtns.Select.click();
        		});
        	} else if (svcID == "combo") {

        	}
        }

        this.fnPopupCallback = function(svcID, val) {
        	this.FormBtns.Select.click();
        // 	if (val)  {
        // 		this.FormBtns.Select.click();
        // 	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {	// 법인코드
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}
        	else if (id == "ccfCD_REPORT") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "S6");
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj, e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        }

        // 코드파인더 설정
        this.fnSetCodeFinder = function(obj, value) {
        	obj.form.CDTextBox.set_value(value);
        	obj.form.fnCodeFindLoad();
        }

        // 객체 설정
        this.fnSetObjectValue = function(obj, value) {
        	obj.set_value(value);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclFR_EDUCATION.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclTO_EDUCATION.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsAPRV.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_EDU_SELECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
