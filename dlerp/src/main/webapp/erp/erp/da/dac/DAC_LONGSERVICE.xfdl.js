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
            this.set_titletext("장기 근속 휴가 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DACPR_LONGSERVICE_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DACPR_LONGSERVICE_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_BASE","0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("년도");
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_BASE","staYR_BASE:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enableevent("true");
            obj.set_text("2019");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclYR_BASE:10.0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSABUN","ccfCD_CORP:0.0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("성명");
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staSABUN:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","ccfID_SABUN:10","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfID_SABUN:0.0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("onitemchanged").set("fnSearchInit");
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
            obj = new BindItem("item0","divSearch.form.ctclYR_BASE.form.TextBox","value","dsSearch","YR_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtID_PERSON","value","dsSearch","ID_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAC_LONGSERVICE.xfdl", function() {
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
        	this.fnInit();

        	this.FormBtns.Select.click();
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
        	this.btnFormButton = this.gfnFormButtonAdd("ExcelUpload", "fnExcelUpload", "엑셀 업로드");
        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	// 그리드영역
        	this.dxGrid = this.divData.form.objGrid;

        	// 검색영역
        	this.ctclYR_BASE  = this.divSearch.form.ctclYR_BASE;	// 년도
        	this.ccfCD_CORP   = this.divSearch.form.ccfCD_CORP;		// 법인
        	this.ccfID_SABUN  = this.divSearch.form.ccfID_SABUN;	// 성명
        	this.edtID_PERSON = this.divSearch.form.edtID_PERSON;	// ID_PERSON
        	this.ccfCD_DEPT   = this.divSearch.form.ccfCD_DEPT;		// 부서
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드영역
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAC_LONGSERVICE");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
         	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";	// 셀 변경 후 이벤트

        	// 검색영역
        	this.ccfCD_CORP.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 법인코드
        	this.ccfCD_CORP.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 성명
        	this.ccfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 부서
        	this.ccfCD_DEPT.AfterCDTextChanged      = "fnAfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YR_BASE", "string");
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("ID_PERSON", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("IP_ADDR", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");

        	// 저장
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("ID_PERSON", "int");
        	this.dsSave.addColumn("NO_SEQ", "int");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("YR_BASE", "string");
        	this.dsSave.addColumn("DT_FROM", "string");
        	this.dsSave.addColumn("DT_TO", "string");
        	this.dsSave.addColumn("CD_LONGSERVICE", "string");
        	this.dsSave.addColumn("QN_LONGSERVICE", "bigdecimal");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("TY_AUTH", "string");
        	this.dsSave.addColumn("GR_CORP", "string");
        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	// 년도
         	var year = this.gfnGetDate().substr(0, 4);
        	this.dsSearch.setColumn(0, "YR_BASE", this.getOwnerFrame().YR_BASE);

        	// 법인코드
        	this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.getOwnerFrame().DS_CORP);

        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         * 조회 버튼
         */
        this.fnSelect = function() {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "YR_BASE", this.dsSearch.getColumn(0, "YR_BASE"));
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "ID_PERSON", this.dsSearch.getColumn(0, "ID_PERSON"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "CD_DEPT"  , this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "IP_ADDR", this.AuthClient.NO_IP);
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);

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
         * 입력 버튼
         */
        this.fnAdd = function() {
            var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current

        	this.dsList.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsList.setColumn(nrow, "DS_CORP", this.dsSearch.getColumn(0, "DS_CORP"));
        	this.dsList.setColumn(nrow, "YR_BASE", this.dsSearch.getColumn(0, "YR_BASE"));
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
        			this.dsSave.setColumn(nrow, "TY_SAVE"   , flag);
        			this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        			this.dsSave.setColumn(nrow, "NO_SEQ", (flag == "I" ? 0 : this.dsList.getColumn(i, "NO_SEQ")));
        			this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        			this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        			this.dsSave.setColumn(nrow, "YR_BASE", this.gfnNvl(this.dsList.getColumn(i, "YR_BASE"), ""));
        			this.dsSave.setColumn(nrow, "DT_FROM", this.gfnNvl(this.dsList.getColumn(i, "DT_FROM"), ""));
        			this.dsSave.setColumn(nrow, "DT_TO", this.gfnNvl(this.dsList.getColumn(i, "DT_TO"), ""));
        			this.dsSave.setColumn(nrow, "CD_LONGSERVICE", this.gfnNvl(this.dsList.getColumn(i, "CD_LONGSERVICE"), ""));
        			this.dsSave.setColumn(nrow, "QN_LONGSERVICE", this.dsList.getColumn(i, "QN_LONGSERVICE"));
        			//this.dsSave.setColumn(nrow, "QN_USE", this.dsList.getColumn(i, "QN_USE"));
        			this.dsSave.setColumn(nrow, "DS_REMARK", this.gfnNvl(this.dsList.getColumn(i, "DS_REMARK"), ""));
        			this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			this.dsSave.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        			this.dsSave.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
        			break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "dsOutput=save";
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
        	return true;
        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnValidate = function() {
        	if(this.gfnIsNull(this.ctclYR_BASE.form.TextBox.value)) {
        		this.ctclYR_BASE.form.TextBox.setFocus();
        		this.gfnAlert("년도를 입력해주세요");
        		return false;
        	}

         	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
         		this.ccfCD_CORP.form.CDTextBox.setFocus();
         		this.gfnAlert("법인을 선택해주세요.");
         		return false;
         	}

        	return true;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

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
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	switch (id) {
        	case "ccfCD_CORP":	// 법인코드
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);
        		break;

        	case "ccfID_SABUN":	// 성명
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.fnBeforeUserCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인을 먼저 선택하시기 바랍니다.", "fnBeforeUserCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        		break;

        	case "ccfCD_DEPT":	// 부서
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.fnBeforeUserCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인을 먼저 선택하시기 바랍니다.", "fnBeforeUserCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "GR_SEARCH" ,  this.FormInfo.GR_SEARCH);				// 사용자 권한
        		dsUserParam.setColumn(nrow, "CD_DEPT"   , this.dsSearch.getColumn(0, "CD_DEPT"));	// 로그인부서
        		dsUserParam.setColumn(nrow, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));	// 조회조건에 있는 소속법인
        		dsUserParam.setColumn(nrow, "YN_CURRENT",  "Y");
        		break;

        	case "ccfCD_DEPT":	//
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "GP");
        		break;
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	if (id == "ccfCD_CORP") {
        		this.fnResetCodeFinder(this.ccfCD_DEPT, this.dsSearch, ["CD_DEPT", "DS_DEPT"]);
        		this.fnResetCodeFinder(this.ccfID_SABUN, this.dsSearch, ["ID_SABUN", "DS_HNAME", "ID_PERSON"]);
        	} else if (id == "ccfCD_DEPT" ) {
        		this.fnResetCodeFinder(this.ccfID_SABUN, this.dsSearch, ["ID_SABUN", "DS_HNAME", "ID_PERSON"]);
        	} else if (id == "ccfID_SABUN") {
        		if (arr.length > 0) {
        			this.fnSetObjectValue(this.edtID_PERSON, arr[0]["ID_PERSON"]);
        		}else{
        			this.fnSetObjectValue(this.edtID_PERSON, "");
        		}
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	switch (id) {
        		case "DAX_CFCORP2":
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			break;
        		case "DAX_CFBASEINFO_ALL":	//사원번호
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT"  , "%");
        			dsUserParam.setColumn(nrow, "YN_CORP"  , "Y");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        			break;
        		case "DAX_CFCOMMONCODEUP":	//
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "GP");
        			break;
        		default:
        	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

        	//그리드 Rowposition - 정창우
        	var arr = codeFindData;

        	switch(id) {
        		case "DAX_CFCORP2":
        			this.dsList.setColumn(this.dsList.rowposition, "CD_DEPT", "");
        			this.dsList.setColumn(this.dsList.rowposition, "DS_DEPT", "");
        			this.dsList.setColumn(this.dsList.rowposition, "ID_SABUN", "");
        			this.dsList.setColumn(this.dsList.rowposition, "DS_HNAME", "");
        			break;
        		case "DAX_CFBASEINFO_ALL":
         			this.dsList.setColumn(this.dsList.rowposition, "CD_CORP", arr[0]["CD_CORP"]);
         			this.dsList.setColumn(this.dsList.rowposition, "DS_CORP", arr[0]["DS_CORP"]);
        			break;
        		case "DAX_CFCOMMONCODEUP":
         			this.dsList.setColumn(this.dsList.rowposition, "QN_LONGSERVICE", arr[0]["AM_ALLOW"]);
        			break;
        		default:
        	}

        };

        this.fnGrid_EnterCell = function(obj, row, cell) {

        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        	var objDs = obj.getBindDataset();
        	var flag = this.gfnGetFlag(this.dsList, row);

        	switch(colnm){
        		case "DT_FROM":
        			var DT_START = objDs.getColumn(row, "DT_FROM");
        			var DT_END = objDs.getColumn(row, "DT_TO");
        			if (DT_START > DT_END) {
        				this.gfnAlert('사용시작일은 종료일과 같거나\n종료일보다 빨라야 합니다.');
        				objDs.setColumn(row, "DT_FROM", "");
        			}
        			break;
        		case "DT_TO":
        			var DT_START = objDs.getColumn(row, "DT_FROM");
        			var DT_END = objDs.getColumn(row, "DT_TO");
        			if (DT_START > DT_END) {
        				this.gfnAlert('사용종료일은 시작일과 같거나\n시작일보다 늦어야 합니다.');
        				objDs.setColumn(row, "DT_TO", "");
        			}
        			break;
        	}
        };

        // this.fnGrid_AfterEdit = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo) {
        // 	if(e.columnid == "CD_LONGSERVICE" //장기 근속 휴가 코드
        // 	) {
        // 		if(e.oldvalue != e.newvalue) {
        // 			this.dsList.setColumn(nRow, "QN_LONGSERVICE", "");
        // 		}
        // 	}
        // }
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj, e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        	if (e.columnid == "ID_SABUN") {
        		this.dsSearch.setColumn(0, "ID_PERSON", "");
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staCD_CORP.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_CORP.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staSABUN.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfID_SABUN.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staCD_DEPT.addEventHandler("onclick",this.Common_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAC_LONGSERVICE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
