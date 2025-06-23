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
            this.set_titletext("평가포인트 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAJPR_RTNG_POINT_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAJPR_RTNG_POINT_LIST_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YR_START\" type=\"STRING\" size=\"256\"/><Column id=\"YR_END\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","10","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_cssclass("sta_WF_SchLabelE");
            obj.set_taborder("0");
            obj.set_text("법인코드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0","10","200","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("FitToContents").set("true");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DZX_CFCORP_STD");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYR_RTNG","ccfCD_CORP:0","10","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("평가년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_START","staYR_RTNG:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYR_RTNG01","ctclYR_START:0","10","20","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_END","staYR_RTNG01:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ctclYR_END:0.0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFDEPT");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfCD_DEPT:0","10","66","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0","10","200","24",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("FitToContents").set("true");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:20",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_autofittype("none");
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

            obj = new BindItem("item2","divSearch.form.ctclYR_START.form.TextBox","value","dsSearch","YR_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclYR_END.form.TextBox","value","dsSearch","YR_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
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
        this.registerScript("DAJ_RTNG_POINT_LIST.xfdl", function() {

        this.objApp = this.gfnGetApplication();
        this.fileConfig = {};

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//
        	this.fnSetButton();			//버튼 공통 설정
        	this.fnSetExtendButton();	//화면별 버튼 id 설정
        	this.fnSetVariable();		//변수선언
        	this.fnSetEvent();			//이벤트 설정
        	this.fnSetParameter();		//파라미터 설정
        	this.fnInit();
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };
        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	/**********  검색조건  **********/
        	this.ccfCD_CORP 	= this.divSearch.form.ccfCD_CORP;	//소속법인
        	this.ctclYR_START 	= this.divSearch.form.ctclYR_START;	//조회기간_시작년도
        	this.ctclYR_END 	= this.divSearch.form.ctclYR_END;	//조회기간_종료년도
        	this.ccfCD_DEPT    	= this.divSearch.form.ccfCD_DEPT;	//부서
        	this.ccfID_SABUN 	= this.divSearch.form.ccfID_SABUN;	//사번

        	/**********  그리드  **********/
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAJ_RTNG_POINT_LIST");

        	// 검색영역
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 법인
        	this.ccfCD_CORP.AfterCDTextChanged     = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 부서
        	this.ccfCD_DEPT.AfterCDTextChanged     = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 사번
        	this.ccfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	//조회조건 Dataset
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YR_START", "string");
        	this.dsSelect.addColumn("YR_END", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	// 저장
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_RTNG", "string");
        	this.dsSave.addColumn("YR_RTNG", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("DS_GRADE", "string");
        	this.dsSave.addColumn("QN_POINT_STD", "int");
        	this.dsSave.addColumn("QN_POINT", "int");
        	this.dsSave.addColumn("QN_POINT_PRE", "int");
        	this.dsSave.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 화면 및 검색영역 초기화
         ************************************************************************/
        this.fnInit = function() {
        	/******** 초기셋팅 ****************/
        	this.dsSearch.setColumn(0,"CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0,"DS_CORP", this.AuthClient.DS_CORP);
        	var today = this.gfnGetDate();
        	var preyear = this.gfnGetDate().substring(0,4) - 1; //전년도
        // 	this.ctclYR_START.form.TextBox.set_value(preyear);
        // 	this.ctclYR_END.form.TextBox.set_value(today.substr(0,4));
        	this.dsSearch.setColumn(0,"YR_START", preyear);
        	this.dsSearch.setColumn(0,"YR_END", today.substr(0,4));

        	if(this.FormInfo.GR_SEARCH == "9"){
        		// 부서
        		this.dsSearch.setColumn(0,"CD_DEPT", this.AuthClient.CD_DEPT);
        		this.dsSearch.setColumn(0,"DS_DEPT", this.AuthClient.DS_DEPT);
        		// 성명
        		this.dsSearch.setColumn(0,"ID_SABUN", this.AuthClient.ID_SABUN);
        		this.dsSearch.setColumn(0,"DS_HNAME", this.AuthClient.DS_HNAME);
        	}

        	//this.FormBtns.Select.click();
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
        	this.dsSelect.setColumn(0, "YR_START", this.dsSearch.getColumn(0, "YR_START"));
        	this.dsSelect.setColumn(0, "YR_END", this.dsSearch.getColumn(0, "YR_END"));
        	this.dsSelect.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "select";
        	var strSvcType  = "select";
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
         *	저장 버튼
         */
        this.fnSave = function() {
        	this.gfnConfirm("평가의 등급 및 포인트가 변경 됩니다.\n계속하시겠습니까?", function(strId, val) {
        		if (val == false) {
        			return;
        		}

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
        				this.dsSave.setColumn(nrow, "TY_SAVE"       , flag);
        				this.dsSave.setColumn(nrow, "CD_CORP"       , this.dsList.getColumn(i, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "ID_RTNG"       , this.dsList.getColumn(i, "ID_RTNG"));
        				this.dsSave.setColumn(nrow, "YR_RTNG"       , this.dsList.getColumn(i, "YY_BASE"));
        				this.dsSave.setColumn(nrow, "ID_SABUN"    	, this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsSave.setColumn(nrow, "DS_GRADE"		, this.dsList.getColumn(i, "DS_GRADE"));
        				this.dsSave.setColumn(nrow, "QN_POINT_STD"  , this.dsList.getColumn(i, "QN_POINT_STD"));
        				this.dsSave.setColumn(nrow, "QN_POINT"      , this.dsList.getColumn(i, "QN_POINT"));
        				this.dsSave.setColumn(nrow, "QN_POINT_PRE"      , this.dsList.getColumn(i, "QN_POINT_PRE"));
        				this.dsSave.setColumn(nrow, "ID_USER"       , this.AuthClient.ID_USER);
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
        	});
        };
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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		this.gfnAlert("법인코드를 입력하세요.");
        		return false;
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0, "YR_START"))) {
        		this.ctclYR_START.setFocus();
        		this.gfnAlert("평가 시작년도를 입력하세요.");
        		return false;
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0, "YR_END"))) {
        		this.ctclYR_END.setFocus();
        		this.gfnAlert("평가 종료년도를 입력하세요.");
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
        	if( svcID == "select" ){
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if (svcID == "save") {
        		this.FormBtns.Select.click();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         /**************** 조회조건 *****************/
         //변경 전 이벤트
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
         	switch (id) {
        	case "ccfCD_CORP":	// 법인코드
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);
        		break;

        	case "ccfID_SABUN": // 사번	ccfID_SABUN_FR
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.fnBeforeUserCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.dsSearch.getColumn(0, "CD_DEPT"));
        		dsUserParam.setColumn(nrow, "YN_CORP"  , "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        		break;

        	case "ccfCD_DEPT":	// 부서코드
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.fnBeforeUserCallback = function() {
        				his.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"  , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP"  , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "");
        		break;
         	}

         	return true;
        }
        //변경 후 이벤트
        this.codefind_AfterCDTextChanged = function(id,codeFindData) {

           	if( id == "ccfID_SABUN" ) {
        		//ID_PERSON 값 바인딩
        		var arr = codeFindData;
        		if(arr.length > 0) {
        			this.dsSearch.setColumn(0,"ID_SABUN",arr[0]["ID_SABUN"]);
        			this.dsSearch.setColumn(0,"DS_HNAME",arr[0]["DS_HNAME"]);
        		}else{
        			this.dsSearch.setColumn(0,"ID_SABUN","");
        			this.dsSearch.setColumn(0,"DS_HNAME","");
        		}
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //조회조건 변경 시 이벤트 발생
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue){
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid.addEventHandler("oncellposchanged",this.fnGridCellPosChanged,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_RTNG_POINT_LIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
