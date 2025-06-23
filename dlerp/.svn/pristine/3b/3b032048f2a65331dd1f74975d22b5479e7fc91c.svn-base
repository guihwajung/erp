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
            this.set_titletext("평가진행현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select_server</Col><Col id=\"SP\">DZYPR_DEPLOY_SERVER_SELECT</Col></Row><Row><Col id=\"TARGET\">save_server</Col><Col id=\"SP\">DZYPR_DEPLOY_SERVER_SAVE</Col></Row><Row><Col id=\"TARGET\">select_revision</Col><Col id=\"SP\">DZYPR_DEPLOY_REVISION_SELECT</Col></Row><Row><Col id=\"TARGET\">save_revision</Col><Col id=\"SP\">DZYPR_DEPLOY_REVISION_SAVE</Col></Row><Row><Col id=\"TARGET\">select_file</Col><Col id=\"SP\">DZYPR_DEPLOY_FILE_SELECT</Col></Row><Row><Col id=\"TARGET\">save_file</Col><Col id=\"SP\">DZYPR_DEPLOY_FILE_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_DEPLOY_FR\" type=\"STRING\" size=\"256\"/><Column id=\"YM_DEPLOY_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListServer", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListRevision", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListFile", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_DEPLOY_FR","0","10.0","92","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("배포년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_DEPLOY_FR","staYM_DEPLOY_FR:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_DEPLOY_TILT","ctclYM_DEPLOY_FR:10","10.0","20","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("~");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_DEPLOY_TO","staYM_DEPLOY_TILT:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter1","30%","0","5","100%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("#c9c9c9");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter1:5","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staServer","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_text("배포 대상 서버");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Grid("objGridServer","0","staServer:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_autofittype("none");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter1:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divSplitter2","30%","0","5","100%",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_background("#c9c9c9");
            obj.set_cursor("ew-resize");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divDataRightLeft","0","0",null,null,"divSplitter2:5","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staRevision","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRightLeft.form);
            obj.set_taborder("0");
            obj.set_text("배포 리비전");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.divDataRightLeft.addChild(obj.name, obj);

            obj = new Grid("objGridRevision","0","staRevision:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.divDataRightLeft.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.divDataRight.form.divDataRightLeft.addChild(obj.name, obj);

            obj = new Div("divDataRightRight","divSplitter2:5","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("0");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("staFile","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form.divDataRightRight.form);
            obj.set_taborder("0");
            obj.set_text("배포 파일");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.form.divDataRightRight.addChild(obj.name, obj);

            obj = new Grid("objGridFile","0","staFile:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form.divDataRightRight.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj._setContents("");
            this.divData.form.divDataRight.form.divDataRightRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYM_DEPLOY_FR.form.TextBox","value","dsSearch","YM_DEPLOY_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclYM_DEPLOY_TO.form.TextBox","value","dsSearch","YM_DEPLOY_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DZY_DEPLOY_FILE.xfdl", function() {
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
        	this.btnLoadingRevision = this.gfnFormButtonAdd("btnLoadingRevision", "fnLoadingRevision");	// 리비전정보 로딩 버튼
        	this.btnDeploy          = this.gfnFormButtonAdd("btnDeploy"         , "fnDeploy");			// 배포 버튼
        }

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	// 그리드영역
        	this.dxGridServer   = this.divData.form.divDataLeft.form.objGridServer;
        	this.dxGridRevision = this.divData.form.divDataRight.form.divDataRightLeft.form.objGridRevision;
        	this.dxGridFile     = this.divData.form.divDataRight.form.divDataRightRight.form.objGridFile;

        	// 검색영역
        	this.ctclYM_DEPLOY_FR = this.divSearch.form.ctclYM_DEPLOY_FR;
        	this.ctclYM_DEPLOY_TO = this.divSearch.form.ctclYM_DEPLOY_TO;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 서버그리드 초기화
        	this.gfnGridInit(this.dxGridServer, this.dsListServer, "DZ", "DZY_DEPLOY_SERVER");
        	this.dxGridServer.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGridServer.AfterCDTextChanged     = "fnGridAfterCDTextChanged";

        	// 리비전그리드 초기화
        	this.gfnGridInit(this.dxGridRevision, this.dsListRevision, "DZ", "DZY_DEPLOY_REVISION");
        	this.dxGridRevision.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGridRevision.AfterCDTextChanged     = "fnGridAfterCDTextChanged";

        	// 파일그리드 초기화
        	this.gfnGridInit(this.dxGridFile, this.dsListFile, "DZ", "DZY_DEPLOY_FILE");
        	this.dxGridFile.BeforeUserDataSetParam = "fnGridBeforeUserDataSetParam";
        	this.dxGridFile.AfterCDTextChanged     = "fnGridAfterCDTextChanged";

        	// 검색영역
        	this.ctclYM_DEPLOY_FR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 법인
        	this.ctclYM_DEPLOY_FR.AfterCDTextChanged     = "fnAfterCDTextChanged";
        	this.ctclYM_DEPLOY_TO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";	// 평가기준
        	this.ctclYM_DEPLOY_TO.AfterCDTextChanged     = "fnAfterCDTextChanged";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 배포서버 목록 조회
        	this.dsServerSelect = new Dataset();

        	// 배포서버 저장
        	this.dsServerSave = new Dataset();
        	this.dsServerSave.addColumn("TY_WRK", "string");
        	this.dsServerSave.addColumn("SEQ_SVR", "int");
        	this.dsServerSave.addColumn("NM_SVR", "string");
        	this.dsServerSave.addColumn("SVR_IP", "string");
        	this.dsServerSave.addColumn("PTH_WEB_DCMT", "string");
        	this.dsServerSave.addColumn("DSTN_RIVSN", "int");
        	this.dsServerSave.addColumn("MKAR", "int");
        	this.dsServerSave.addColumn("ID_SABUN", "string");

        	// 배포리비전 조회
        	this.dsRevisionSelect = new Dataset();

        	// 배포리비전 저장
        	this.dsSaveRevision = new Dataset();
        	this.dsSaveRevision.addColumn("TY_WRK", "string");
        	this.dsSaveRevision.addColumn("DSTN_RIVSN", "int");
        	this.dsSaveRevision.addColumn("DSTN_DNT", "string");
        	this.dsSaveRevision.addColumn("DSTN_CPNYDUTY", "string");
        	this.dsSaveRevision.addColumn("ID_SABUN", "string");

        	// 배포파일 조회
        	this.dsSelectFile = new Dataset();
        	this.dsSelectFile.addColumn("DSTN_RIVSN", "int");

        	// 배포파일 저장
        	this.dsSaveFile = new Dataset();
        	this.dsSaveFile.addColumn("TY_WRK", "string");
        	this.dsSaveFile.addColumn("DSTN_RIVSN", "int");
        	this.dsSaveFile.addColumn("SEQ_FILE", "int");
        	this.dsSaveFile.addColumn("STAT_FILE", "string");
        	this.dsSaveFile.addColumn("CPCT_FILE", "int");
        	this.dsSaveFile.addColumn("PTH_FILE", "string");
        	this.dsSaveFile.addColumn("NM_FILE", "string");
        	this.dsSaveFile.addColumn("ID_SABUN", "string");
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
        	var today = this.gfnGetDate();
        	var lastMonth = this.gfnAddMonth(today, -3);
        	this.dsSearch.setColumn(0, "YM_DEPLOY_FR", lastMonth.substr(0, 6));
        	this.dsSearch.setColumn(0, "YM_DEPLOY_TO", today.substr(0, 6));
        }

        /************************************************************************
         * 버튼 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGridServer);
        	this.gfnGridBeforeSelect(this.dxGridRevision);

        	this.dsServerSelect.clearData();
        	this.dsRevisionSelect.clearData();

        	var strSvcId    = "select_server";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_server=dsServerSelect select_revision=dsRevisionSelect";
        	var outData     = "dsListServer=select_server0 dsListRevision=select_revision0";
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
        	var nrow = this.gfnGridAdd(this.dxGridServer); // top (default), bottom, current
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
        	if (!this.gfnGridValidate(this.dxGridServer)) return;

        	this.dxGridServer.updateToDataset();
        	this.dsServerSave.clearData();
        	for (var i = 0; i < this.dsListServer.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListServer, i);
        		switch (flag) {
        		case "I":
        		case "U":
        		case "D":
        			var nrow = this.dsServerSave.addRow();
        			this.dsServerSave.setColumn(nrow, "TY_WRK"      , flag);
        			this.dsServerSave.setColumn(nrow, "SEQ_SVR"     , this.dsListServer.getColumn(i, "SEQ_SVR"));
        			this.dsServerSave.setColumn(nrow, "NM_SVR"      , this.dsListServer.getColumn(i, "NM_SVR"));
        			this.dsServerSave.setColumn(nrow, "SVR_IP"      , this.dsListServer.getColumn(i, "SVR_IP"));
        			this.dsServerSave.setColumn(nrow, "PTH_WEB_DCMT", this.dsListServer.getColumn(i, "PTH_WEB_DCMT"));
        			this.dsServerSave.setColumn(nrow, "MKAR"        , this.dsListServer.getColumn(i, "MKAR"));
        			this.dsServerSave.setColumn(nrow, "ID_SABUN"    , this.AuthClient.ID_USER);
        			break;
        		}
        	}

        	if (this.dsServerSave.rowcount == 0) return;

        	var strSvcId    = "save_server";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save_server=dsServerSave";
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
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg) {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	if (svcID == "select_server") {
        		this.gfnGridAfterSelect(this.dxGridServer);
        		this.gfnGridAfterSelect(this.dxGridRevision);
        	} else if (svcID == "save_server") {
        		this.FormBtns.Select.click();
        	} else if (svcID == "select_revision") {

        	} else if (svcID == "save_revision") {
        		this.FormBtns.Select.click();
        	} else if (svcID == "select_file") {
        		this.gfnGridAfterSelect(this.dxGridFile);
        	} else if (svcID == "save_file") {
        		this.revisions = null;
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGridBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }

        this.fnGridAfterCDTextChanged = function(id, codeFindData) {

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGridServer);
        		this.gfnGridClear(this.dxGridRevision);
        		this.gfnGridClear(this.dxGridFile);
        	}
        }

        this.divData_ondragmove1 = function(obj, e) {
        	if (e.userdata == "splitter1") {
        		this.divData.form.divSplitter1.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        }

        this.divData_divSplitter1_ondrag = function(obj, e) {
        	e.set_userdata("splitter1");
        	return true;
        }

        this.divData_ondragmove2 = function(obj, e) {
        	if (e.userdata == "splitter2") {
        		this.divData.form.divDataRight.form.divSplitter2.set_left(e.clientx);
        		this.divData.form.divDataRight.form.resetScroll();
        	}
        }

        this.divData_divSplitter2_ondrag = function(obj, e) {
        	e.set_userdata("splitter2");
        	return true;
        }

        this.fnLoadingRevision = function() {
        	var msg = "리비전정보를 로딩하시겠습니까?";

        	this.gfnConfirm(msg, function(strId, val) {
        		if (val == false) {
        			return;
        		}

        		var context = "/";
        		if (nexacro.getEnvironmentVariable("evContextPath") != undefined) {
        			context = nexacro.getEnvironmentVariable("evContextPath");
        		}
        		var url = window.location.protocol + "//" + window.location.host + context + "ws/deploy/revision.do";
        		fetch(url, {
        			method: "PUT",
        			cache: "no-cache",
        			headers: {
        				"Content-Type": "application/json",
        			},
        			body: JSON.stringify({
        				schema: window.location.protocol,
        				address: this.dsListServer.getColumn(this.dsListServer.rowposition, "SVR_IP"),
        				path: this.dsListServer.getColumn(this.dsListServer.rowposition, "PTH_WEB_DCMT"),
        				user: this.AuthClient.ID_USER,
        			})
        		})
        		.then(response => {
        			return response.json();
        		})
        		.then(response => {
        			this.fnSaveRevision(response);
        		})
        	});
        }

        this.fnSaveRevision = function(revisions) {
        	this.dsSaveRevision.clearData();
        	this.dsSaveFile.clearData();

        	this.dsListRevision.set_enableevent(false);
        	this.dsListFile.set_enableevent(false);
        	for (var i = 0; i < revisions.length; i++) {
        		this.dsListRevision.filter("DSTN_RIVSN == " + revisions[i].revision);
        		if (this.dsListRevision.rowcount == 1) {
        			this.dsListRevision.filter("");
        			continue;
        		}

        		var nrow = this.dsSaveRevision.addRow();
        		this.dsSaveRevision.setColumn(nrow, "TY_WRK"       , "I");
        		this.dsSaveRevision.setColumn(nrow, "DSTN_RIVSN"   , revisions[i].revision);
        		this.dsSaveRevision.setColumn(nrow, "DSTN_DNT"     , revisions[i].datetime);
        		this.dsSaveRevision.setColumn(nrow, "DSTN_CPNYDUTY", revisions[i].user);
        		this.dsSaveRevision.setColumn(nrow, "ID_SABUN"     , this.AuthClient.ID_SABUN);

        		for (var j = 0; j < revisions[i].items.length; j++) {
        			var nrow = this.dsSaveFile.addRow();
        			this.dsSaveFile.setColumn(nrow, "TY_WRK"    , "I");
        			this.dsSaveFile.setColumn(nrow, "DSTN_RIVSN", revisions[i].revision);
        			this.dsSaveFile.setColumn(nrow, "SEQ_FILE"  , j);
        			this.dsSaveFile.setColumn(nrow, "STAT_FILE" , revisions[i].items[j].status);
        			this.dsSaveFile.setColumn(nrow, "CPCT_FILE" , 0);
        			this.dsSaveFile.setColumn(nrow, "PTH_FILE"  , revisions[i].items[j].path);
        			this.dsSaveFile.setColumn(nrow, "NM_FILE"   , revisions[i].items[j].name);
        			this.dsSaveFile.setColumn(nrow, "ID_SABUN"  , this.AuthClient.ID_SABUN);
        		}
        	}
        	this.dsListFile.set_enableevent(true);
        	this.dsListRevision.set_enableevent(true);

        	if (this.dsSaveRevision.rowcount == 0) {
        		this.gfnAlert("로딩할 리비전정보가 존재하지 않습니다.");
        		return;
        	}
        	if (this.dsSaveFile.rowcount == 0) return;

        	var strSvcId    = "save_revision";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save_revision=dsSaveRevision save_file=dsSaveFile";
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

        this.fnGridRevisionCellPosChanged = function(obj, e) {
        	if (!this.gfnSearchValidate(this.divSearch, this.dsSearch)) return false;

        	this.gfnGridBeforeSelect(this.dxGridFile);

        	this.dsSelectFile.clearData();
        	this.dsSelectFile.addRow();
        	this.dsSelectFile.setColumn(0, "DSTN_RIVSN", this.dsListRevision.getColumn(this.dsListRevision.rowposition, "DSTN_RIVSN"));

        	var strSvcId    = "select_file";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_file=dsSelectFile";
        	var outData     = "dsListFile=select_file0";
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

        this.fnDeploy = function() {
        	var msg = this.dsListServer.getColumn(this.dsListServer.rowposition, "NM_SVR") + " 서버에 " +
        			  this.dsListRevision.getColumn(this.dsListRevision.rowposition, "DSTN_RIVSN") + "을 배포하시겠습니까?";
        	this.gfnConfirm(msg, function(strId, val) {
        		if (val == false) {
        			return;
        		}

        		var REVISION = this.dsListRevision.getColumn(this.dsListRevision.rowposition, "DSTN_RIVSN");
        		var PATH = this.dsListServer.getColumn(this.dsListServer.rowposition, "PTH_WEB_DCMT");

        		var context = "/";
        		if (nexacro.getEnvironmentVariable("evContextPath") != undefined) {
        			context = nexacro.getEnvironmentVariable("evContextPath");
        		}
        		//var url = window.location.protocol + "//" + window.location.host + context + "ws/deploy/revision.do";
        		var url = "http://10.211.200.68/svn/deploy/update";
        		fetch(url, {
        			method: "PUT",
        			cache: "no-cache",
        			headers: {
        				"Content-Type": "application/json",
        			},
        			body: JSON.stringify({
        				revision: REVISION,
        				path: PATH,
        			})
        		})
        		.then(response => {
        			return response.json();
        		})
        		.then(response => {
        			console.log('response', response);
        			//this.fnSaveRevision(response);
        		})
        	});
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove1,this);
            this.divData.form.divSplitter1.addEventHandler("ondrag",this.divData_divSplitter1_ondrag,this);
            this.divData.form.divDataRight.addEventHandler("ondragmove",this.divData_ondragmove2,this);
            this.divData.form.divDataRight.form.divSplitter2.addEventHandler("ondrag",this.divData_divSplitter2_ondrag,this);
            this.divData.form.divDataRight.form.divDataRightLeft.form.objGridRevision.addEventHandler("oncellposchanged",this.fnGridRevisionCellPosChanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZY_DEPLOY_FILE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
