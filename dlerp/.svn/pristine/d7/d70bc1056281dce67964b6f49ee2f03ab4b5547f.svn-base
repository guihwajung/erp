(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DLM_SUMMARY");
            this.set_titletext("수익성자산관리현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DLMPR_SUMMARY_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DLMPR_SUMMARY_UPDATE</Col></Row><Row><Col id=\"SP\">DLMPR_SUMMARY_CREATE</Col><Col id=\"TARGET\">create</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_SUMMARY\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YR_SUMMARY\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("작업년도");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_SUMMARY","staCD_ACNTUNIT:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100.00%","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("1. 임대현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","218",null,"22","170",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("2. 임대 매출/비용 현황 (단위:백만원)");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,null,"0","sta02:10",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","0","452",null,"22","170",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("3. 연간 임대 매출/비용 현황 (단위:백만원)");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","sta02:5",null,null,"0","sta03:9",null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid3","0","sta03:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYR_SUMMARY.form.TextBox","value","dsSearch","YR_SUMMARY");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DLM_SUMMARY.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "YR_SUMMARY", this.gfnGetDate().substr(0,4));
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {

        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnCreate = this.gfnFormButtonAdd("Create", "fnCreate");	//자료생성
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYR_SUMMARY = this.divSearch.form.ctclYR_SUMMARY;

        	this.dxGrid  = this.divData.form.objGrid;
        	this.dxGrid2 = this.divData.form.objGrid2;
        	this.dxGrid3 = this.divData.form.objGrid3;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DL", "DLM_SUMMARY_1");
        	this.dxGrid.set_selecttype("cell");

        	//헤더 클릭 이벤트 삭제(소팅 막기 위해 처리)
        	this.dxGrid.removeEventHandlerLookup("onheadclick", "gfnGrid_onheadclick", this);

        	this.gfnGridInit(this.dxGrid2, this.dsList2, "DL", "DLM_SUMMARY_2");
        	this.dxGrid2.set_selecttype("cell");

        	//헤더 클릭 이벤트 삭제(소팅 막기 위해 처리)
        	this.dxGrid2.removeEventHandlerLookup("onheadclick", "gfnGrid_onheadclick", this);

        	this.gfnGridInit(this.dxGrid3, this.dsList3, "DL", "DLM_SUMMARY_3");
        	this.dxGrid3.set_selecttype("cell");

        	//헤더 클릭 이벤트 삭제(소팅 막기 위해 처리)
        	this.dxGrid3.removeEventHandlerLookup("onheadclick", "gfnGrid_onheadclick", this);
        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YR_SUMMARY", "string");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("YR_SUMMARY"		, "string");
        	this.dsCreate.addColumn("ID_INSERT"	 		, "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("YR_SUMMARY"		, "string");
        	this.dsUpdate.addColumn("CD_ACNTUNIT"	 	, "string");
        	this.dsUpdate.addColumn("TY_GUBUN"	 		, "string");
        	this.dsUpdate.addColumn("NO_CHASU"	 		, "string");
        	this.dsUpdate.addColumn("NO_SIZE_TOT"	 	, "BIGDECIMAL");
        	this.dsUpdate.addColumn("NO_SIZE_CON"	 	, "BIGDECIMAL");
        	this.dsUpdate.addColumn("RT_PLAN"	     	, "BIGDECIMAL");
        	this.dsUpdate.addColumn("DS_REMARK_1"		, "string");
        	this.dsUpdate.addColumn("AM_DEPOSIT"	    , "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_INCOME_P"	    , "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_EXPENSE_P"	    , "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_INCOME_R"	    , "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_EXPENSE_R"	    , "BIGDECIMAL");
        	this.dsUpdate.addColumn("DS_REMARK_2"	    , "string");
        	this.dsUpdate.addColumn("AM_INCOME_R_BEF"	, "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_EXPENSE_R_BEF"	, "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_INCOME_P_NEXT"	, "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_EXPENSE_P_NEXT"	, "BIGDECIMAL");
        	this.dsUpdate.addColumn("DS_REMARK_3"	    , "string");
        	this.dsUpdate.addColumn("ID_UPDATE"	     	, "string");

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

        	this.dsSelect.setColumn(0, "YR_SUMMARY", this.dsSearch.getColumn(0, "YR_SUMMARY"));

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
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (!this.gfnGridValidate(this.dxGrid2)) return;
        	if (!this.gfnGridValidate(this.dxGrid3)) return;

        	this.dxGrid.updateToDataset();
        	this.dxGrid2.updateToDataset();
        	this.dxGrid3.updateToDataset();

        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "YR_SUMMARY"			, this.dsSearch.getColumn(0, "YR_SUMMARY"));
        				this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT"   		, this.dsList.getColumn(i, "CD_ACNTUNIT"));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN"			, this.dsList.getColumn(i, "TY_GUBUN"));
        				this.dsUpdate.setColumn(nrow, "NO_CHASU"			, this.dsList.getColumn(i, "NO_CHASU"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE"			, this.AuthClient.ID_USER);

        				//그리드1
        				this.dsUpdate.setColumn(nrow, "NO_SIZE_TOT"			, this.dsList.getColumn(i, "NO_SIZE_TOT"));			//당해년도	총면적(평)
        				this.dsUpdate.setColumn(nrow, "NO_SIZE_CON"			, this.dsList.getColumn(i, "NO_SIZE_CON"));			//당해년도	임대면적
        				this.dsUpdate.setColumn(nrow, "RT_PLAN"				, this.dsList.getColumn(i, "RT_PLAN"));				//임대율목표(%)
        				this.dsUpdate.setColumn(nrow, "DS_REMARK_1"			, this.dsList.getColumn(i, "DS_REMARK_1"));			//비고
        				//그리드2
        				this.dsUpdate.setColumn(nrow, "AM_DEPOSIT"			, this.dsList.getColumn(i, "AM_DEPOSIT"));			//임대보증금
        				this.dsUpdate.setColumn(nrow, "AM_INCOME_P"			, this.dsList.getColumn(i, "AM_INCOME_P"));			//당해년도 누계목표(매출)
        				this.dsUpdate.setColumn(nrow, "AM_EXPENSE_P"		, this.dsList.getColumn(i, "AM_EXPENSE_P"));		//당해년도 누계목표(비용)
        				this.dsUpdate.setColumn(nrow, "AM_INCOME_R"			, this.dsList.getColumn(i, "AM_INCOME_R"));			//당해년도 누계실적(매출)
        				this.dsUpdate.setColumn(nrow, "AM_EXPENSE_R"		, this.dsList.getColumn(i, "AM_EXPENSE_R"));		//당해년도 누계실적(비용)
        				this.dsUpdate.setColumn(nrow, "DS_REMARK_2"			, this.dsList.getColumn(i, "DS_REMARK_2"));			//비고
        				this.dsUpdate.setColumn(nrow, "AM_INCOME_R_BEF"		, this.dsList.getColumn(i, "AM_INCOME_R_BEF"));		//전년도 누계(매출)
        				this.dsUpdate.setColumn(nrow, "AM_EXPENSE_R_BEF"	, this.dsList.getColumn(i, "AM_EXPENSE_R_BEF"));	//전년도 누계(비용)
        				//그리드3
        				this.dsUpdate.setColumn(nrow, "AM_INCOME_P_NEXT"	, this.dsList.getColumn(i, "AM_INCOME_P_NEXT"));	//차년도목표(매출)
        				this.dsUpdate.setColumn(nrow, "AM_EXPENSE_P_NEXT"	, this.dsList.getColumn(i, "AM_EXPENSE_P_NEXT"));	//차년도목표(비용)
        				this.dsUpdate.setColumn(nrow, "DS_REMARK_3"			, this.dsList.getColumn(i, "DS_REMARK_3"));			//비고

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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	var arrGrid = [this.dxGrid, this.dxGrid2, this.dxGrid3];
        	var arrSheetName = ["1.임대현황", "2.임대 매출/비용 현황", "3.연간 임대 매출/비용 현황"];

        	this.gfnExcelExportMulti(arrGrid, arrSheetName);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * 서브 버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
          */
        this.fnSelectValidate = function() {
        	var validate = true;

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "YR_SUMMARY"))){
        		this.gfnAlert("작업년도는 필수입니다.");
        		this.ctclYR_SUMMARY.form.TextBox.setFocus();
        		validate = false;
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

        		this.dsList2.copyData(this.dsList);
        		this.dsList3.copyData(this.dsList);
        	} else if (svcID == "create") {
        		if (errorCode == 0) {
        			this.gfnAlert("자료가 생성되었습니다.");

        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "save"){
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

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGrid2);
        		this.gfnGridClear(this.dxGrid3);
        	}
        };

        this.fnCreate = function(obj,e) {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "YR_SUMMARY"))){
        		this.gfnAlert("작업년도를 입력하세요.");
        		this.ctclYR_SUMMARY.form.TextBox.setFocus();
        		return;
        	}

        	this.gfnConfirm("기존자료 삭제 후 생성됩니다.\r\n계속하시겠습니까?", "fnCreate_callback");
        }

        this.fnCreate_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsCreate.clearData();
        		this.dsCreate.addRow();
        		this.dsCreate.setColumn(0, "YR_SUMMARY", this.dsSearch.getColumn(0, "YR_SUMMARY"));
        		this.dsCreate.setColumn(0, "ID_INSERT" , this.AuthClient.ID_USER);

        		var strSvcId    = "create";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "create=dsCreate";
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
        }

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.newvalue != e.oldvalue){
        		var cdAcntunit = obj.getColumn(e.row, "CD_ACNTUNIT");	//사업지코드
        		var tyGubun    = obj.getColumn(e.row, "TY_GUBUN");		//구분
        		var noChasu    = obj.getColumn(e.row, "NO_CHASU");		//차수

        		if(obj.name == "dsList"){
        			//2.임대매출/비용현황 그리드
        			this.dsList2.set_enableevent(false);
        			this.dsList2.filter("CD_ACNTUNIT =='"+cdAcntunit+"' && TY_GUBUN =='"+tyGubun+"' && NO_CHASU =='"+noChasu+"'");
        			this.dsList2.setColumn(0, this.ucFlag, "U");
        			this.dsList2.filter("");
        			this.dsList2.set_enableevent(true);

        			//3.연간 임대 매출/비용현황 그리드
        			this.dsList3.set_enableevent(false);
        			this.dsList3.filter("CD_ACNTUNIT =='"+cdAcntunit+"' && TY_GUBUN =='"+tyGubun+"' && NO_CHASU =='"+noChasu+"'");
        			this.dsList3.setColumn(0, this.ucFlag, "U");
        			this.dsList3.filter("");
        			this.dsList3.set_enableevent(true);
        		}else if(obj.name == "dsList2"){
        			//1.임대현황 그리드
        			this.dsList.set_enableevent(false);
        			this.dsList.filter("CD_ACNTUNIT =='"+cdAcntunit+"' && TY_GUBUN =='"+tyGubun+"' && NO_CHASU =='"+noChasu+"'");	//필터처리
        			this.dsList.setColumn(0, this.ucFlag, "U");
        			this.dsList.setColumn(0, "AM_DEPOSIT"	    , obj.getColumn(e.row, "AM_DEPOSIT"));			//임대보증금
        			this.dsList.setColumn(0, "AM_INCOME_P"	    , obj.getColumn(e.row, "AM_INCOME_P"));			//당해년도 누계목표(매출)
        			this.dsList.setColumn(0, "AM_EXPENSE_P"     , obj.getColumn(e.row, "AM_EXPENSE_P"));		//당해년도 누계목표(비용)
        			this.dsList.setColumn(0, "AM_INCOME_R"      , obj.getColumn(e.row, "AM_INCOME_R"));			//당해년도 누계실적(매출)
        			this.dsList.setColumn(0, "AM_EXPENSE_R"     , obj.getColumn(e.row, "AM_EXPENSE_R"));		//당해년도 누계실적(비용)
        			this.dsList.setColumn(0, "DS_REMARK_2"      , obj.getColumn(e.row, "DS_REMARK_2"));			//비고
        			this.dsList.setColumn(0, "AM_INCOME_R_BEF"  , obj.getColumn(e.row, "AM_INCOME_R_BEF"));		//전년도누계(매출)
        			this.dsList.setColumn(0, "AM_EXPENSE_R_BEF" , obj.getColumn(e.row, "AM_EXPENSE_R_BEF"));	//전년도누계(비용)
        			this.dsList.filter("");	//필터 해지처리
        			this.dsList.set_enableevent(true);
        			//3.연간 임대 매출/비용현황 그리드
        			this.dsList3.set_enableevent(false);
        			this.dsList3.filter("CD_ACNTUNIT =='"+cdAcntunit+"' && TY_GUBUN =='"+tyGubun+"' && NO_CHASU =='"+noChasu+"'");
        			this.dsList3.setColumn(0, this.ucFlag, "U");
        			this.dsList3.filter("");
        			this.dsList3.set_enableevent(true);
        		}else{
        			//1.임대현황 그리드
        			this.dsList.set_enableevent(false);
        			this.dsList.filter("CD_ACNTUNIT =='"+cdAcntunit+"' && TY_GUBUN =='"+tyGubun+"' && NO_CHASU =='"+noChasu+"'");
        			this.dsList.setColumn(0, this.ucFlag, "U");
        			this.dsList.setColumn(0, "AM_INCOME_P_NEXT" , obj.getColumn(e.row, "AM_INCOME_P_NEXT"));
        			this.dsList.setColumn(0, "AM_EXPENSE_P_NEXT", obj.getColumn(e.row, "AM_EXPENSE_P_NEXT"));
        			this.dsList.setColumn(0, "DS_REMARK_3" 	    , obj.getColumn(e.row, "DS_REMARK_3"));
        			this.dsList.filter("");
        			this.dsList.set_enableevent(true);

        			//2.임대매출/비용현황 그리드
        			this.dsList2.set_enableevent(false);
        			this.dsList2.filter("CD_ACNTUNIT =='"+cdAcntunit+"' && TY_GUBUN =='"+tyGubun+"' && NO_CHASU =='"+noChasu+"'");
        			this.dsList2.setColumn(0, this.ucFlag, "U");
        			this.dsList2.filter("");
        			this.dsList2.set_enableevent(true);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList2.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsList3.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DLM_SUMMARY.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
