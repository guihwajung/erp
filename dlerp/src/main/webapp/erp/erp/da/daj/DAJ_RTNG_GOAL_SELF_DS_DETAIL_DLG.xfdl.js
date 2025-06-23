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
            this.set_stepshowtype("action");
            this.set_scrolltype("vertical");
            if (Form == this.constructor)
            {
                this._setFormPosition(1800,950);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsListGoalDetail", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select_goal_detail</Col><Col id=\"SP\">DAJPR_RTNG_GOAL_SELF_DS_SELECT</Col></Row><Row><Col id=\"TARGET\">save_goal_detail</Col><Col id=\"SP\">DAJPR_RTNG_GOAL_SELF_DS_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PTCP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RTNG_ASBLNEXT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_RTNG_ASBLNEXT\" type=\"STRING\" size=\"256\"/><Column id=\"CNTN_RTNG_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEQ_BGVDPRSN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_ITVWPRSN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_RTNG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"CL_ITVWPRSN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_RTNG","ccfCD_CORP:0.0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("평가회차");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_RTNG","staID_RTNG:0.0","10.0","350","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFRTNG_STD");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCD_RTNG_ASBLNEXT","ccfID_RTNG:5","10.0","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN_APL","edtCD_RTNG_ASBLNEXT:0","10.0","79","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN_APL:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100%","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("업무실적");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"0","60","27","215",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","60","27","150",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnRemove",null,"0","60","27","85",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text(" 삭제");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","80","27","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("임시저장");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta02:10",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("2");
            obj.set_autosizingtype("none");
            obj.set_autofittype("none");
            obj.set_visible("true");
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

            obj = new BindItem("item2","divSearch.form.ccfID_RTNG.form.CDTextBox","value","dsSearch","ID_RTNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_RTNG.form.DSTextBox","value","dsSearch","DS_RTNG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.edtCD_RTNG_ASBLNEXT","value","dsSearch","DS_RTNG_ASBLNEXT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAJ_RTNG_GOAL_SELF_DS_DETAIL_DLG.xfdl", function() {
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

        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	// 그리드영역
        	this.dxGrid    = this.divData.form.objGrid;

        	// 검색영역
        	this.ccfCD_CORP  = this.divSearch.form.ccfCD_CORP;
        	this.ctclYR_RTNG = this.divSearch.form.ctclYR_RTNG;
        	this.ccfID_RTNG  = this.divSearch.form.ccfID_RTNG;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;

        	// 버튼
        	this.btnSearch     		= this.divData.form.btnSearch;		// 조회 버튼
        	this.btnAdd      		= this.divData.form.btnAdd;			// 추가 버튼
        	this.btnRemove   		= this.divData.form.btnRemove;		// 삭제 버튼
        	this.btnSave     		= this.divData.form.btnSave;		// 임시저장 버튼
        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsListGoalDetail, "DA", "DAJ_RTNG_GOAL_SELF_DESC");
        	this.dxGrid.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged     = "fnGridAfterCDTextChanged";
        	this.dxGrid.EnterCell = "fnGridEnterCell";
        	this.dxGrid.AfterEdit = "fnGridAfterEdit";
        	this.dxGrid.setFormatRowProperty(0, "size", 30);
        	this.dxGrid.setFormatRowProperty(1, "size", 38);

        	// 검색영역
        	this.ccfCD_CORP.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 법인
        	this.ccfCD_CORP.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.ccfID_RTNG.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";	// 평가기준
        	this.ccfID_RTNG.AfterCDTextChanged      = "fnAfterCDTextChanged";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 성명
        	this.ccfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 업무목표 자기기술 조회
        	this.dsSelectGoalDetail = new Dataset();
        	this.dsSelectGoalDetail.addColumn("CD_CORP", "string");
        	this.dsSelectGoalDetail.addColumn("ID_RTNG", "string");
        	this.dsSelectGoalDetail.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsSelectGoalDetail.addColumn("ID_ITVWPRSN", "string");
        	this.dsSelectGoalDetail.addColumn("TY_PTCP", "string");

        	// 업무목표 중간점검 저장
        	this.dsSaveGoalDetail = new Dataset();
        	this.dsSaveGoalDetail.addColumn("TY_WRK", "string");
        	this.dsSaveGoalDetail.addColumn("CD_CORP", "string");
        	this.dsSaveGoalDetail.addColumn("ID_RTNG", "string");
        	this.dsSaveGoalDetail.addColumn("SEQ_BGVDPRSN", "int");
        	this.dsSaveGoalDetail.addColumn("SEQ_GOAL", "int");
        	this.dsSaveGoalDetail.addColumn("NO_COL", "int");
        	this.dsSaveGoalDetail.addColumn("YN_SBMS", "string");
        	this.dsSaveGoalDetail.addColumn("DS_GOAL_WRK", "string");
        	this.dsSaveGoalDetail.addColumn("DS_EXEC_PLN_HGHYR", "string");
        	this.dsSaveGoalDetail.addColumn("DS_EXEC_PLN_LOWHYR", "string");
        	this.dsSaveGoalDetail.addColumn("DS_GOAL_LVL_MIN", "string");
        	this.dsSaveGoalDetail.addColumn("DS_GOAL_LVL_MAX", "string");
        	this.dsSaveGoalDetail.addColumn("DS_MNPT_ADMN", "string");
        	this.dsSaveGoalDetail.addColumn("NO_WGTV", "int");
        	this.dsSaveGoalDetail.addColumn("DS_RMK", "string");
        	this.dsSaveGoalDetail.addColumn("DS_EXEC_PLN", "string");
        	this.dsSaveGoalDetail.addColumn("TYPE_EXEC_PLN_RTNG", "string");
        	this.dsSaveGoalDetail.addColumn("DS_BIZ_ACPT", "string");
        	this.dsSaveGoalDetail.addColumn("ID_USER", "string");
        	this.dsSaveGoalDetail.addColumn("TY_PTCP", "string");
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
        	// 법인
        	this.dsSearch.setColumn(0, "CD_CORP",  this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP",  this.AuthClient.DS_CORP);
        	// 성명
        // 	this.dsSearch.setColumn(0, "ID_SABUN", this.AuthClient.ID_SABUN);
        // 	this.dsSearch.setColumn(0, "DS_HNAME", this.AuthClient.DS_HNAME);

        	// 타화면에서 오픈시 넘어오는 파라미터 처리
        	var frame = this.getOwnerFrame();
        	this.dsSearch.setColumn(0, "ID_RTNG"    		, frame.ID_RTNG);		//
        	this.dsSearch.setColumn(0, "DS_RTNG"			, frame.DS_RTNG);
        	this.dsSearch.setColumn(0, "SEQ_BGVDPRSN"		, frame.SEQ_BGVDPRSN);	//
        	this.dsSearch.setColumn(0, "ID_ITVWPRSN"		, frame.ID_SABUN);		//
        	this.dsSearch.setColumn(0, "TY_PTCP"			, frame.TY_PTCP);		//
        	this.dsSearch.setColumn(0, "CD_RTNG_TYPE"		, frame.CD_RTNG_TYPE);	//
        	this.dsSearch.setColumn(0, "CD_RTNG_ASBLNEXT"	, frame.CD_RTNG_ASBLNEXT);	//
        	this.dsSearch.setColumn(0, "DS_RTNG_ASBLNEXT"	, frame.DS_RTNG_ASBLNEXT);	//
        	this.dsSearch.setColumn(0, "CNTN_RTNG_ID"		, frame.CNTN_RTNG_ID);	//

        	this.dsSearch.setColumn(0, "ID_SABUN"			, frame.ID_SABUN);
        	this.dsSearch.setColumn(0, "DS_HNAME"			, frame.DS_HNAME);

        	// 피평가자의 종합상태
        	this.dsSearch.setColumn(0, "STATUS_RTNG"		, frame.STATUS_RTNG);
        	this.dsSearch.setColumn(0, "CL_ITVWPRSN"		, frame.CL_ITVWPRSN);

        	this.FormBtns.Select.click();

        	// 평가자2명인 경우(승인자/면담자)
        	var ID_SABUN_ITVW;
        	var SummaryRowcount = 0;
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
        /*
         *	조회 버튼
         */
        this.fnSelect = function() {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	// 업무목표 자기기술
        	this.dsSelectGoalDetail.clearData();
        	this.dsSelectGoalDetail.addRow()
        	this.dsSelectGoalDetail.setColumn(0, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectGoalDetail.setColumn(0, "ID_RTNG"     , this.dsSearch.getColumn(0, "ID_RTNG"));
        	this.dsSelectGoalDetail.setColumn(0, "SEQ_BGVDPRSN", this.dsSearch.getColumn(0, "SEQ_BGVDPRSN"));
        	this.dsSelectGoalDetail.setColumn(0, "ID_ITVWPRSN" , this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelectGoalDetail.setColumn(0, "TY_PTCP"	   , this.dsSearch.getColumn(0, "TY_PTCP"));

        	var strSvcId    = "select_goal_detail";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "select_goal_detail=dsSelectGoalDetail";
        	var outData     = "dsListGoalDetail=select_goal_detail0";
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
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	// 업무목표 중간점검 조회
        	if (svcID == "select_goal_detail") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		var items = ['DS_GOAL_WRK', 'DS_GOAL_LVL_MIN', 'DS_GOAL_LVL_MAX', 'DS_EXEC_PLN', 'DS_EXEC_PLN_HGHYR', 'DS_EXEC_PLN_LOWHYR', 'DS_BIZ_ACPT'];
        		var list = [];
        		for (var i = 0; i < this.dsListGoalDetail.rowcount; i++) {
        			var max = 0;
        			for (var j = 0; j < items.length; j++) {
        				var item = this.dsListGoalDetail.getColumn(i, items[j]) || "";
        				var line = item.split("\n").length;
        				if (line > max) {
        					max = line;
        				}
        			}
        			list.push(max);
        		}

        		this.dxGrid.set_autofittype("none");		// col
        		this.dxGrid.set_autosizingtype("row");

        		// 버튼 상태 변경
        		if (this.dsSearch.getColumn(0, "STATUS_RTNG") == "40" || this.dsSearch.getColumn(0, "STATUS_RTNG") == "SFDS") {
        			this.btnSearch.set_enable(true);
        			this.btnSave.set_enable(false); // true
        			this.btnAdd.set_enable(true);
        			this.btnRemove.set_enable(true);
        		}

        		// 버튼 활성화
        		this.fnEnableButton();

        		if (this.dsSearch.getColumn(0, "STATUS_RTNG") == "SFDS" && this.dsSearch.getColumn(0, "TY_PTCP") == "B") {
        			var nrow = this.dsListGoalDetail.rowcount;
        			this.dxGrid.setCellPos(0, nrow-1);
        		}
        	}
        	// 업무목표 자기기술 저장
        	else if (svcID == "save_goal_detail") {
        		//this.fnSelectGoalDetail();
        		this.FormBtns.Select.click();
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.btnSave.set_enable(false);
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
        	} else if (id == "ccfID_RTNG") {
        		dsUserParam.setColumn(nrow, "CD_CORP"     , this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "YR_RTNG"     , "");
        		dsUserParam.setColumn(nrow, "ID_SABUN"    , this.dsSearch.getColumn(0, "ID_SABUN"));
        		dsUserParam.setColumn(nrow, "CD_RTNG_TYPE", "JA12");
        		dsUserParam.setColumn(nrow, "ID_SCREEN"   , "DAJ_RTNG_GOAL_SELF_DESC");
        		dsUserParam.setColumn(nrow, "CD_ROLE"     , this.AuthClient.CD_ROLE);
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if (codeFindData[0] == undefined) {
        		return;
        	}

        	if (id == "ccfID_RTNG") {
        		var TY_PTCP = codeFindData[0]["TY_PTCP"];
        		this.dsSearch.setColumn(0, "TY_PTCP", codeFindData[0]["TY_PTCP"]);
        		this.dsSearch.setColumn(0, "CD_RTNG_ASBLNEXT", codeFindData[0]["CD_RTNG_ASBLNEXT"]);
        		this.dsSearch.setColumn(0, "DS_RTNG_ASBLNEXT", codeFindData[0]["DS_RTNG_ASBLNEXT"]);
        		this.dsSearch.setColumn(0, "CNTN_RTNG_ID", codeFindData[0]["CNTN_RTNG_ID"]);

        		this.FormBtns.Select.click();
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	switch (id) {
        	// 피평가자
        	case "DAX_CFBASEINFO_ALL":
        		dsUserParam.setColumn(nrow, "CD_CORP",   this.dsSearch.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT",   this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "YN_CORP",   "N"); //법인무관(Y: 법인에 관계없이 직원검색 N:조건의 법인의 임직원만 검색)
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "01");	// 01 재직 02 휴직 04 퇴직 % :전체
        		break;
        	}

        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {
        	switch (id) {
        	case "DAX_CFBASEINFO_ALL":
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_DT_GROUPJOIN", codeFindData[0]["DT_GROUPJOIN"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_DT_JOIN"     , codeFindData[0]["DT_JOIN"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_CD_DEPT"     , codeFindData[0]["CD_DEPT"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_DS_DEPT"     , codeFindData[0]["DS_DEPT"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_CD_POSITION" , codeFindData[0]["CD_POSITION"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_DS_POSITION" , codeFindData[0]["DS_POSITION"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_CD_JOBTYPE"  , codeFindData[0]["CD_JOBTYPE"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_DS_JOBTYPE"  , codeFindData[0]["DS_JOBTYPE"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_CD_EMPTYPE"  , codeFindData[0]["CD_EMPTYPE"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_DS_EMPTYPE"  , codeFindData[0]["DS_EMPTYPE"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_CD_PAYSTEP"  , codeFindData[0]["CD_PAYSTEP"]);
         		this.dsListSub.setColumn(this.dsListSub.rowposition, "RTNG_DS_PAYSTEP"  , codeFindData[0]["DS_PAYSTEP"]);

        		break;
        	}
        }

        this.fnGridEnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);

        	this.fnEnableButton();
        }

        this.fnGridAfterEdit = function(obj, e) {
        console.log('fnGridAfterEdit', e);
        	if (e.columnid == "NO_COL") {	// 순번
        		if (e.oldvalue != e.newvalue) {
        			var oldRow = e.row;
        			var oldNO_COL = e.oldvalue;
        			var newNO_COL = e.newvalue;
        			var newRow = oldRow;
        			for (var i = 0; i < obj.rowcount; i++) {
        				if (oldRow == i) continue;
        				var no_col = obj.getColumn(i, "NO_COL");
        				if (no_col == newNO_COL && newNO_COL == 1) {
        					newRow = 0;
        					break;
        				} else if (no_col < newNO_COL) {
        					newRow = i + (oldNO_COL > newNO_COL ? 1 : 0);
        				}
        			}
        			if (newRow >= obj.rowcount) newRow -= 1;

        			obj.moveRow(oldRow, newRow);
        			this.dxGrid.setCellPos(0, newRow);

        			var no_col = newNO_COL;
        			this.dsListGoalDetail.set_enableevent(false);
        			for (var i = newRow; i < this.dsListGoalDetail.rowcount; i++) {
        				var flag = this.gfnGetFlag(this.dsListGoalDetail, i);
        				var oldNO_COL = this.dsListGoalDetail.getColumn(i, "NO_COL");
        				if (no_col != oldNO_COL) {
        					if (flag != "I" && flag != "D") {
        						this.dsListGoalDetail.setColumn(i, this.ucFlag, "U");
        					}
        					this.dsListGoalDetail.setColumn(i, "NO_COL", no_col);
        				}
        				no_col++;
        			}
        			this.dsListGoalDetail.set_enableevent(true);
        		}
        	}
        	//this.btnSave.set_enable(true);
        	this.gfnSetFormStatus(this, "U");
        }

        this.getNextNoCol = function() {
        	var MAX = 0;
        	for (var i = 0; i < this.dsListGoalDetail.rowcount; i++) {
        		if (this.dsListGoalDetail.getColumn(i, "NO_COL") > MAX) {
        			MAX = this.dsListGoalDetail.getColumn(i, "NO_COL");
        		}
        	}
        	return MAX + 1;
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj, e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        }

        this.fnEnableButton = function() {
        	// 작성중
        	if ((this.dsSearch.getColumn(0, "STATUS_RTNG") == "40" || this.dsSearch.getColumn(0, "STATUS_RTNG") == "SFDS" ) && (this.getOwnerFrame().READ_ONLY == "false" || this.getOwnerFrame().READ_ONLY == undefined)) { // 자기기술작성중
        		if (this.dsSearch.getColumn(0, "TY_PTCP") == "B") {	// 피평가자

        			this.btnSearch.set_visible(true);
        			this.btnAdd.set_visible(true);
        			this.btnRemove.set_visible(true);
        			this.btnSave.set_visible(true);

        			this.btnSearch.set_enable(true);
        			this.btnAdd.set_enable(true);
        			this.btnRemove.set_enable(true);
        			this.btnSave.set_enable(false); // true

        			var list = ['NO_COL', 'DS_GOAL_WRK', 'DS_GOAL_LVL_MIN', 'DS_GOAL_LVL_MAX', 'DS_EXEC_PLN', 'DS_EXEC_PLN_HGHYR', 'DS_EXEC_PLN_LOWHYR', 'DS_BIZ_ACPT'];
        			for (var i = 0; i < list.length; i++) {
        				this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", list[i]), "cssclass", "");
        				this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", list[i]), "edittype", "text");
        				this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", list[i]), "expandshow", "show");
        			}

        			this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "NO_WGTV"), "cssclass", "");
        			this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "NO_WGTV"), "edittype", "text");

        			this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "TYPE_EXEC_PLN_RTNG"), "cssclass", "");
        			this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "TYPE_EXEC_PLN_RTNG"), "edittype", "combo");

        			this.dsListGoalDetail.set_enableevent(false);
        			for (var i = 0; i < this.dsListGoalDetail.rowcount; i++) {
        				this.dsListGoalDetail.setColumn(i, "MULTILINE_READONLY", "Y");
        				this.dsListGoalDetail.setColumn(i, "MULTILINE_EXCLUDE_COLUMNS", "DS_GOAL_WRK,DS_GOAL_LVL_MIN,DS_GOAL_LVL_MAX,DS_EXEC_PLN,DS_EXEC_PLN_HGHYR,DS_EXEC_PLN_LOWHYR,DS_BIZ_ACPT");
        			}
        			this.dsListGoalDetail.set_enableevent(true);
        		}

        		if (this.dsSearch.getColumn(0, "TY_PTCP") == "R") {	// 평가자

        			this.btnSearch.set_visible(true);
        			this.btnAdd.set_visible(false);
        			this.btnRemove.set_visible(false);
        			this.btnSave.set_visible(true);

        			this.btnSearch.set_enable(true);
        			this.btnAdd.set_enable(false);
        			this.btnRemove.set_enable(false);
        			this.btnSave.set_enable(false);

        			this.btnSearch.set_right(85);

        			var list = ['NO_COL', 'DS_GOAL_WRK', 'DS_GOAL_LVL_MIN', 'DS_GOAL_LVL_MAX', 'DS_EXEC_PLN', 'DS_EXEC_PLN_HGHYR', 'DS_EXEC_PLN_LOWHYR', 'DS_BIZ_ACPT'];
        			for (var i = 0; i < list.length; i++) {
        				this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", list[i]), "cssclass", "BACK_ReadOnly");
        				this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", list[i]), "edittype", "none");
        				this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", list[i]), "expandshow", "show");
        			}

        			this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "NO_WGTV"), "cssclass", "BACK_ReadOnly");
        			this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "NO_WGTV"), "edittype", "none");

        			this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "TYPE_EXEC_PLN_RTNG"), "cssclass", "BACK_ReadOnly");
        			this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "TYPE_EXEC_PLN_RTNG"), "edittype", "none");

        			this.dsListGoalDetail.set_enableevent(false);
        			for (var i = 0; i < this.dsListGoalDetail.rowcount; i++) {
        				this.dsListGoalDetail.setColumn(i, "MULTILINE_READONLY", "Y");
        				this.dsListGoalDetail.setColumn(i, "MULTILINE_EXCLUDE_COLUMNS", "");
        			}
        			this.dsListGoalDetail.set_enableevent(true);
        		}
        	}
        	else
        	{
        		if (this.dsSearch.getColumn(0, "TY_PTCP") == "B") {	// 피평가자

        			this.btnSearch.set_visible(true);
        			this.btnAdd.set_visible(true);
        			this.btnRemove.set_visible(true);
        			this.btnSave.set_visible(true);

        			this.btnSearch.set_enable(true);
        			this.btnAdd.set_enable(false);
        			this.btnRemove.set_enable(false);
        			this.btnSave.set_enable(false);

        			var list = ['NO_COL', 'DS_GOAL_WRK', 'DS_GOAL_LVL_MIN', 'DS_GOAL_LVL_MAX', 'DS_EXEC_PLN', 'DS_EXEC_PLN_HGHYR', 'DS_EXEC_PLN_LOWHYR', 'DS_BIZ_ACPT'];
        			for (var i = 0; i < list.length; i++) {
        				this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", list[i]), "cssclass", "BACK_ReadOnly");
        				this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", list[i]), "edittype", "none");
        				this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", list[i]), "expandshow", "show");
        			}

        			this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", 'NO_WGTV'), "cssclass", "BACK_ReadOnly");
        			this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", 'NO_WGTV'), "edittype", "none");

        			this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "TYPE_EXEC_PLN_RTNG"), "cssclass", "BACK_ReadOnly");
        			this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "TYPE_EXEC_PLN_RTNG"), "edittype", "none");

        			this.dsListGoalDetail.set_enableevent(false);
        			for (var i = 0; i < this.dsListGoalDetail.rowcount; i++) {
        				this.dsListGoalDetail.setColumn(i, "MULTILINE_READONLY", "Y");
        				this.dsListGoalDetail.setColumn(i, "MULTILINE_EXCLUDE_COLUMNS", "");
        			}
        			this.dsListGoalDetail.set_enableevent(true);
        		}

        		if (this.dsSearch.getColumn(0, "TY_PTCP") == "R") {	// 평가자

        			this.btnSearch.set_visible(true);
        			this.btnAdd.set_visible(false);
        			this.btnRemove.set_visible(false);
        			this.btnSave.set_visible(true);

        			this.btnSearch.set_enable(true);
        			this.btnAdd.set_enable(false);
        			this.btnRemove.set_enable(false);
        			this.btnSave.set_enable(false);

        			this.btnSearch.set_right(85);

        			var list = ['NO_COL', 'DS_GOAL_WRK', 'DS_GOAL_LVL_MIN', 'DS_GOAL_LVL_MAX', 'DS_EXEC_PLN', 'DS_EXEC_PLN_HGHYR', 'DS_EXEC_PLN_LOWHYR', 'DS_BIZ_ACPT'];
        			for (var i = 0; i < list.length; i++) {
        				this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", list[i]), "cssclass", "BACK_ReadOnly");
        				this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", list[i]), "edittype", "none");
        				this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", list[i]), "expandshow", "show");
        			}

        			this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", 'NO_WGTV'), "cssclass", "BACK_ReadOnly");
        			this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", 'NO_WGTV'), "edittype", "none");

        			this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "TYPE_EXEC_PLN_RTNG"), "cssclass", "BACK_ReadOnly");
        			this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "TYPE_EXEC_PLN_RTNG"), "edittype", "none");

        			this.dsListGoalDetail.set_enableevent(false);
        			for (var i = 0; i < this.dsListGoalDetail.rowcount; i++) {
        				this.dsListGoalDetail.setColumn(i, "MULTILINE_READONLY", "Y");
        				this.dsListGoalDetail.setColumn(i, "MULTILINE_EXCLUDE_COLUMNS", "");
        			}
        			this.dsListGoalDetail.set_enableevent(true);
        		}
        	}
        }

        // 조회 버튼 클릭 이벤트
        this.btnSearch_onclick = function(obj,e) {
        	this.fnSelect();
        }

        // 임시저장 버튼 클릭 이벤트
        this.btnSave_onclick = function(obj,e) {
        	this.dxGrid.updateToDataset();
        	this.dsSaveGoalDetail.clearData();

        	if (this.dsSearch.getColumn(0, "TY_PTCP") == "B")	// 피평가자
        	{
        		for (var i = 0; i < this.dsListGoalDetail.rowcount; i++) {
        			var flag = this.gfnGetFlag(this.dsListGoalDetail, i);
        			switch (flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSaveGoalDetail.addRow();

        				this.dsSaveGoalDetail.setColumn(nrow, "TY_WRK"            , flag);
        				this.dsSaveGoalDetail.setColumn(nrow, "CD_CORP"           , this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsSaveGoalDetail.setColumn(nrow, "ID_RTNG"           , this.dsSearch.getColumn(0, "ID_RTNG"));
        				this.dsSaveGoalDetail.setColumn(nrow, "SEQ_BGVDPRSN"      , this.dsSearch.getColumn(0, "SEQ_BGVDPRSN"));
        				this.dsSaveGoalDetail.setColumn(nrow, "SEQ_GOAL"          , this.dsListGoalDetail.getColumn(i, "SEQ_GOAL"));
        				this.dsSaveGoalDetail.setColumn(nrow, "NO_COL"            , this.dsListGoalDetail.getColumn(i, "NO_COL"));
        				this.dsSaveGoalDetail.setColumn(nrow, "YN_SBMS"           , this.dsListGoalDetail.getColumn(i, "YN_SBMS"));
        				this.dsSaveGoalDetail.setColumn(nrow, "DS_GOAL_WRK"       , this.dsListGoalDetail.getColumn(i, "DS_GOAL_WRK"));
        				this.dsSaveGoalDetail.setColumn(nrow, "DS_EXEC_PLN_HGHYR" , this.dsListGoalDetail.getColumn(i, "DS_EXEC_PLN_HGHYR"));
        				this.dsSaveGoalDetail.setColumn(nrow, "DS_EXEC_PLN_LOWHYR", this.dsListGoalDetail.getColumn(i, "DS_EXEC_PLN_LOWHYR"));
        				this.dsSaveGoalDetail.setColumn(nrow, "DS_GOAL_LVL_MIN"   , this.dsListGoalDetail.getColumn(i, "DS_GOAL_LVL_MIN"));
        				this.dsSaveGoalDetail.setColumn(nrow, "DS_GOAL_LVL_MAX"   , this.dsListGoalDetail.getColumn(i, "DS_GOAL_LVL_MAX"));
        				this.dsSaveGoalDetail.setColumn(nrow, "DS_MNPT_ADMN"      , this.dsListGoalDetail.getColumn(i, "DS_MNPT_ADMN"));
        				this.dsSaveGoalDetail.setColumn(nrow, "NO_WGTV"           , this.dsListGoalDetail.getColumn(i, "NO_WGTV"));
        				this.dsSaveGoalDetail.setColumn(nrow, "DS_RMK"            , this.dsListGoalDetail.getColumn(i, "DS_RMK"));
        				this.dsSaveGoalDetail.setColumn(nrow, "DS_EXEC_PLN"       , this.dsListGoalDetail.getColumn(i, "DS_EXEC_PLN"));
        				this.dsSaveGoalDetail.setColumn(nrow, "TYPE_EXEC_PLN_RTNG", this.dsListGoalDetail.getColumn(i, "TYPE_EXEC_PLN_RTNG"));
        				this.dsSaveGoalDetail.setColumn(nrow, "DS_BIZ_ACPT"       , this.dsListGoalDetail.getColumn(i, "DS_BIZ_ACPT"));
        				this.dsSaveGoalDetail.setColumn(nrow, "ID_USER"           , this.AuthClient.ID_USER);
        				this.dsSaveGoalDetail.setColumn(nrow, "TY_PTCP"		      , this.dsSearch.getColumn(0, "TY_PTCP"));
        				break;
        			}
        		}
        	}

        	var strSvcId    = "save_goal_detail";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save_goal_detail=dsSaveGoalDetail";
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

        // 추가 버튼 클릭 이벤트
        this.btnAdd_onclick = function(obj,e) {

        	var nrow = this.dsListGoalDetail.rowcount;

        	if(this.dsListGoalDetail.rowcount == 0) {
        		var nrow = this.gfnGridAdd(this.dxGrid, "bottom");
        		this.dsListGoalDetail.setColumn(nrow, "NO_COL", 1);
        	}
        	else if(this.dsListGoalDetail.rowposition >= 0 && this.dsListGoalDetail.rowposition == nrow-1) {
        		var NextCol = this.getNextNoCol();
        		var nrow = this.gfnGridAdd(this.dxGrid, "bottom");
        		this.dsListGoalDetail.set_enableevent(false);
        		this.dsListGoalDetail.setColumn(nrow, "NO_COL", NextCol);
        		this.dsListGoalDetail.set_enableevent(true);
        	}
        	else {
        		var curNO_COL = this.dsListGoalDetail.getColumn(this.dsListGoalDetail.rowposition, "NO_COL");
        		var nrow = this.gfnGridAdd(this.dxGrid, "current");

        		this.dsListGoalDetail.set_enableevent(false);
        		this.dsListGoalDetail.setColumn(nrow, "NO_COL", curNO_COL);

        		for(var i = nrow+1; i < this.dsListGoalDetail.rowcount; i++) {
        			var flag = this.gfnGetFlag(this.dsListGoalDetail, i);
        			if(flag != "I" && flag != "D") {
        				this.dsListGoalDetail.setColumn(i, this.ucFlag, "U");
        			}
        			this.dsListGoalDetail.setColumn(i, "NO_COL", ++curNO_COL);
        		}
        		this.dsListGoalDetail.set_enableevent(true);
        	}
        	this.gfnSetFormStatus(this, "I");
        	this.btnSave.set_enable(true);
        }

        // 삭제 버튼 클릭 이벤트
        this.btnRemove_onclick = function(obj,e) {
        	this.dsListGoalDetail.set_enableevent(false);

        	this.gfnGridDel(this.dxGrid);
        	this.dsListGoalDetail.set_enableevent(true);
        	this.gfnSetFormStatus(this, "D");
        	this.btnSave.set_enable(true);

        	var rowPos = this.dsListGoalDetail.rowposition;
        	var colDS_GOAL_WRK = this.dxGrid.getBindCellIndex("body", "DS_GOAL_WRK");
        	this.dxGrid.setCellPos(colDS_GOAL_WRK, rowPos);

        }

        this.fnGridValidate = function(objGrid) {
        	var objDs = objGrid.getBindDataset();

        	var msg = "";
        	var nGridCol, nGridRow = -1;
        	for (var i = 0; i < objDs.rowcount; i++) {
        		var arrRequired = objGrid.usRequired;
        		for(var j = 0; j < arrRequired.length; j++) {
        			var spl_req = arrRequired[j].split(';');
        			var colnm = spl_req[0];
        			var header = spl_req[1];
        			if (this.gfnIsNull(objDs.getColumn(i, colnm))) {
        				msg += (i + 1) + "행: [" + header + "] 필수입력값입니다.\n";

        				if (nGridRow == -1)
        				{
        					nGridRow = i;
        					nGridCol = objGrid.getBindCellIndex( 'body', colnm );
        				}
        			}
        		}
        	}

        	if(this.gfnIsNull(msg)) {
        		return true;
        	}
        	else {
        		var arrError = [msg];
        		this.gfnAlert("msg.err.validator", arrError, 'alert_validator', function(){
        			objGrid.setFocus();
        			objGrid.setCellPos(nGridCol, nGridRow);
        			objGrid.selectCell( nGridRow, nGridCol, true );
        		});
        		return false;
        	}
        }

        this.dsListGoalDetail_onvaluechanged = function(obj,e)
        {
        	var status = this.gfnGetFormStatus(this);
        	if(status == "U")
        	{
        		this.btnSave.set_enable(true);
        	} else {
        		this.btnSave.set_enable(false);
        	}

        // 	if(e.oldvalue != e.newvalue) {
        // 		this.btnSave.set_enable(true);
        // 	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondragmove",this.form_ondragmove,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.divData.form.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.divData.form.btnRemove.addEventHandler("onclick",this.btnRemove_onclick,this);
            this.divData.form.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.dsListGoalDetail.addEventHandler("onvaluechanged",this.dsListGoalDetail_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_RTNG_GOAL_SELF_DS_DETAIL_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
