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
            this.set_titletext("전자어음발행총괄표");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.set_useclientlayout("true");
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFDPR_NOTESTOT1_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSub</Col><Col id=\"SP\">DFDPR_NOTESTOT2_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DFDPR_NOTESTOT1_UPDATE</Col></Row><Row><Col id=\"TARGET\">updateSub</Col><Col id=\"SP\">DFDPR_NOTESTOT2_UPDATE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DFDPR_NOTESTOT_CREATE</Col></Row><Row><Col id=\"TARGET\">createX</Col><Col id=\"SP\">DFDPR_NOTESTOT_CREATEX</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_DATE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("발행일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_DATE","staDT_DATE:0.0","10.0","115","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","38",null,null,"0","2",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0",null,null,"5","0","407",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataMain","0","0",null,null,"0","divSplitter:0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","16",null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Div("divDataSub","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","14",null,null,"0","1",null,null,null,null,this.divData.form.divDataSub.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataSub.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.calDT_DATE","value","dsSearch","DT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DFD_NOTESTOT.xfdl", function() {
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

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);

        	//적용년도 셋팅
        	var today = this.gfnGetDate().substring(0,8);
        	this.dsSearch.setColumn(0,"DT_DATE",today);
        	//this.dsSearch.applyChange();

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// 입력, 삭제 버튼 사용안함
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("FormButton1", "fnFormButton1", "자료생성");
        	this.btn2 = this.gfnFormButtonAdd("FormButton2", "fnFormButton2", "자료생성취소");

        };

        this.fnFormButton1 = function(obj,e) {

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"DT_DATE"))) {
        		this.gfnAlert("발행일자를 입력해주세요.");
        		return;
        	}

        	this.gfnConfirm( "자료생성을 하시겠습니까?", "fnCreateCallback");
        }

        this.fnFormButton2 = function(obj,e) {

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"DT_DATE"))) {
        		this.gfnAlert("발행일자를 입력해주세요.");
        		return;
        	}

        	this.gfnConfirm( "생성된 자료를 취소 하시겠습니까?", "fnCreateXCallback");
        }


        this.fnCreateCallback = function(strId, val)  {
        	if(val == false) return;

        	this.dsCreate.clearData();
        	this.dsCreate.addRow();
        	this.dsCreate.setColumn(0, "DT_DATE", this.dsSearch.getColumn(0,"DT_DATE"));
        	this.dsCreate.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	trace(this.dsCreate.saveXML());
        	if (this.dsCreate.rowcount == 0) return;


        	var strSvcId    = "create";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "create=dsCreate";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	this.gfnTransaction( strSvcId ,
        						strSvcType ,
        						inProc,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc);
        }

        this.fnCreateXCallback = function(strId, val)  {
        	if(val == false) return;

        	this.dsCreateX.clearData();
        	this.dsCreateX.addRow();
        	this.dsCreateX.setColumn(0, "DT_DATE", this.dsSearch.getColumn(0,"DT_DATE"));
        	this.dsCreateX.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsCreateX.rowcount == 0) return;


        	var strSvcId    = "createX";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "createX=dsCreateX";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";
        	this.gfnTransaction( strSvcId ,
        						strSvcType ,
        						inProc,
        						inData ,
        						outData ,
        						strArg,
        						callBackFnc);
        }
        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.calDT_DATE = this.divSearch.form.calDT_DATE;  // 기준일(입사일자)

        	this.dxGrid = this.divData.form.divDataMain.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataSub.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFD_NOTESTOT1");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DF", "DFD_NOTESTOT2");

        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        	this.dxGridSub.EnterCell = "fnGridSub_EnterCell";

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_DATE", "string");     // 결재일자

        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("DT_DATE", "string");     // 결재일자

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("DT_DATE", "string");	//결재일자
        	this.dsUpdate.addColumn("CD_GUBUN", "string");	//구분코드
        	this.dsUpdate.addColumn("AM_9", "decimal");		//부영주택
        	this.dsUpdate.addColumn("AM_A", "decimal");		//동광주택
        	this.dsUpdate.addColumn("AM_3", "decimal");		//광영
        	this.dsUpdate.addColumn("AM_5", "decimal");		//남광
        	this.dsUpdate.addColumn("AM_7", "decimal");		//부영CC
        	this.dsUpdate.addColumn("AM_1", "decimal");		//부영
        	this.dsUpdate.addColumn("ID_USER", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");

        	this.dsUpdateSub = new Dataset();
        	this.dsUpdateSub.addColumn("DT_DATE", "string");	//결재일자
        	this.dsUpdateSub.addColumn("CD_GUBUN", "string");	//구분코드
        	this.dsUpdateSub.addColumn("CT_9", "decimal");		//부영주택(건수)
        	this.dsUpdateSub.addColumn("AM_9", "decimal");		//부영주택(금액)
        	this.dsUpdateSub.addColumn("CT_A", "decimal");		//동광주택(건수)
        	this.dsUpdateSub.addColumn("AM_A", "decimal");		//동광주택(금액)
        	this.dsUpdateSub.addColumn("CT_3", "decimal");		//광영(건수)
        	this.dsUpdateSub.addColumn("AM_3", "decimal");		//광영(금액)
        	this.dsUpdateSub.addColumn("CT_5", "decimal");		//남광(건수)
        	this.dsUpdateSub.addColumn("AM_5", "decimal");		//남광(금액)
        	this.dsUpdateSub.addColumn("CT_7", "decimal");		//부영CC(건수)
        	this.dsUpdateSub.addColumn("AM_7", "decimal");		//부영CC(금액)
        	this.dsUpdateSub.addColumn("CT_1", "decimal");		//부영(건수)
        	this.dsUpdateSub.addColumn("AM_1", "decimal");		//부영(금액)
        	this.dsUpdateSub.addColumn("ID_USER", "string");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("DT_DATE", "string");
        	this.dsCreate.addColumn("ID_USER", "string");

        	this.dsCreateX = new Dataset();
        	this.dsCreateX.addColumn("DT_DATE", "string");
        	this.dsCreateX.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;
        	this.fnSelectSub();

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsList.clearData();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "DT_DATE", this.dsSearch.getColumn(0,"DT_DATE"));

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
          *	조회 버튼
          */
        this.fnSelectSub = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsListSub.clearData();

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "DT_DATE", this.dsSearch.getColumn(0,"DT_DATE"));

        	var strSvcId    = "selectSub";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectSub=dsSelectSub";
        	var outData     = "dsListSub=selectSub0";
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
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "DT_DATE", this.dsSearch.getColumn(0,"DT_DATE"));
        				this.dsUpdate.setColumn(nrow, "CD_GUBUN", this.dsList.getColumn(i, "CD_GUBUN"));
        				this.dsUpdate.setColumn(nrow, "AM_9", this.dsList.getColumn(i, "AM_9"));
        				this.dsUpdate.setColumn(nrow, "AM_A", this.dsList.getColumn(i, "AM_A"));
        				this.dsUpdate.setColumn(nrow, "AM_3", this.dsList.getColumn(i, "AM_3"));
        				this.dsUpdate.setColumn(nrow, "AM_5", this.dsList.getColumn(i, "AM_5"));
        				this.dsUpdate.setColumn(nrow, "AM_7", this.dsList.getColumn(i, "AM_7"));
        				this.dsUpdate.setColumn(nrow, "AM_1", this.dsList.getColumn(i, "AM_1"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;
        		}
        	}

        	//if (this.dsUpdate.rowcount == 0) return;

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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        	this.fnSaveSub();
        }

        this.fnSaveSub = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGridSub)) return;

        	this.dxGridSub.updateToDataset();

        	this.dsUpdateSub.clearData();

        	for (var i = 0; i < this.dsListSub.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListSub, i);
        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdateSub.addRow();
        				this.dsUpdateSub.setColumn(nrow, "DT_DATE", this.dsSearch.getColumn(0,"DT_DATE"));
        				this.dsUpdateSub.setColumn(nrow, "CD_GUBUN", this.dsListSub.getColumn(i, "CD_GUBUN"));
        				this.dsUpdateSub.setColumn(nrow, "CT_9", this.dsListSub.getColumn(i, "CT_9"));
        				this.dsUpdateSub.setColumn(nrow, "AM_9", this.dsListSub.getColumn(i, "AM_9"));
        				this.dsUpdateSub.setColumn(nrow, "CT_A", this.dsListSub.getColumn(i, "CT_A"));
        				this.dsUpdateSub.setColumn(nrow, "AM_A", this.dsListSub.getColumn(i, "AM_A"));
        				this.dsUpdateSub.setColumn(nrow, "CT_3", this.dsListSub.getColumn(i, "CT_3"));
        				this.dsUpdateSub.setColumn(nrow, "AM_3", this.dsListSub.getColumn(i, "AM_3"));
        				this.dsUpdateSub.setColumn(nrow, "CT_5", this.dsListSub.getColumn(i, "CT_5"));
        				this.dsUpdateSub.setColumn(nrow, "AM_5", this.dsListSub.getColumn(i, "AM_5"));
        				this.dsUpdateSub.setColumn(nrow, "CT_7", this.dsListSub.getColumn(i, "CT_7"));
        				this.dsUpdateSub.setColumn(nrow, "AM_7", this.dsListSub.getColumn(i, "AM_7"));
        				this.dsUpdateSub.setColumn(nrow, "CT_1", this.dsListSub.getColumn(i, "CT_1"));
        				this.dsUpdateSub.setColumn(nrow, "AM_1", this.dsListSub.getColumn(i, "AM_1"));
        				this.dsUpdateSub.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;
        		}
        	}

        	if (this.dsUpdateSub.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "updateSub=dsUpdateSub";
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

        /*
         *	reset 버튼
         */
        this.fnReset = function() {
        	this.dsSearch.setColumn(0,"DT_DATE","");
        };
        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if (validate && this.gfnIsNull(this.dsSearch.getColumn(0,"DT_DATE"))) {
        		validate = false;
        		this.fnDtDateCallback = function() {
        			return false;
        		}
        		this.gfnAlert("발행일자를 입력해주세요.", "fnDtDateCallback");
        	}
        	return validate;
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

        	} else if (svcID == "selectSub") {
        		this.gfnGridAfterSelect(this.dxGridSub);

        		this.FormBtns.Save.set_enable(false);
        	} else if (svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "create" || svcID == "createX") {
        		if (errorCode == 0) {
        			this.gfnAlert("작업이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	this.fnSetButton();
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         // 셀 수정가능 여부 (반드시 EnterCell에서 처리할것)
        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);

        	var rowFlag = this.gfnGetFlag(this.dsList, row);
        	if (rowFlag != "#" && rowFlag != "I"  && (this.dsList.getColumn(row, "YN_EDIT") == "N")) {
        		return false;
        	}

        	// 공통 > Setting > 그리드정보 에서 셋팅한 내용대로
        	nGrdSpcRow = this.dsGridSpec.findRow( "DS_FIELD", colnm);
        	if(this.dsGridSpec.getColumn(nGrdSpcRow, "YN_READONLY") == "Y" ){
        		return false;
        	}

        	return true;
        }

        this.fnGridSub_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);

        	var rowFlag = this.gfnGetFlag(this.dsListSub, row);
        	if (rowFlag != "#" && rowFlag != "I"  && (this.dsListSub.getColumn(row, "YN_EDIT") == "N")) {
        		return false;
        	}

        	// 공통 > Setting > 그리드정보 에서 셋팅한 내용대로
        	nGrdSpcRow = this.dsGridSpec.findRow( "DS_FIELD", colnm);
        	if(this.dsGridSpec.getColumn(nGrdSpcRow, "YN_READONLY") == "Y" ){
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         /*
         *	조회 조건 변경시 초기화
         */
         this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        };


        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        // 상단 그리드
        this.dsList_onvaluechanged = function(obj,e)
        {

        };

        // 하단그리드
        this.dsListSub_onvaluechanged = function(obj,e)
        {

        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsListSub.addEventHandler("onvaluechanged",this.dsListSub_onvaluechanged,this);
        };
        this.loadIncludeScript("DFD_NOTESTOT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
