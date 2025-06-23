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
            this.set_titletext("내역승인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DWAPR_SILHENGCHG_BONSA_SELECT</Col></Row><Row><Col id=\"TARGET\">approve</Col><Col id=\"SP\">DWAPR_SILHENGCHG_APPROVE_OK</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SILENG_BF\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SILHENG\" type=\"STRING\" size=\"256\"/><Column id=\"TY_APPROVAL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_SITE\"/><Col id=\"NO_SILHENG\"/><Col id=\"TY_APPROVAL\"/><Col id=\"DT_REQUEST_FR\"/><Col id=\"DT_REQUEST_TO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_APPROVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">전체</Col><Col id=\"CODE\"/></Row><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">결재요청</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">결재완료</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">반려</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_SILHENG","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("실행번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_SILHENG","staNO_SILHENG:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_APPROVAL","ccfNO_SILHENG:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_APPROVAL","staTY_APPROVAL:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_APPROVAL");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("결재요청");
            obj.set_value("1");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REQUEST","ccboTY_APPROVAL:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("요청일");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REQUEST_FR","staDT_REQUEST:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_range","ctclDT_REQUEST_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_REQUEST_TO","sta_range:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_SILHENG.form.CDTextBox","value","dsSearch","NO_SILHENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccboTY_APPROVAL","value","dsSearch","TY_APPROVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_REQUEST_FR","value","dsSearch","DT_REQUEST_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclDT_REQUEST_TO","value","dsSearch","DT_REQUEST_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWA_SILHENGCHG_BONSA.xfdl", function() {
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

        	// 조회조건 중 진행상태의 초기값을 결재요청으로 지정.
        	this.divSearch.form.ccboTY_APPROVAL.set_index(1);
        };

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

        	// TODO : 임시로 확장버튼 사용하여 진행.
        	this.btn1 = this.gfnFormButtonAdd("Silhengregexcelvt", "fnSilhengregexcelvt");

        	//DWA_SILHENGCHG_APPROVE
        	this.btn2 = this.gfnFormButtonAdd("Approve_Ok", "fnApprove_Ok");
        	this.btn3 = this.gfnFormButtonAdd("Approve_Repuse", "fnApprove_Repuse");
        	this.btn2 = this.gfnFormButtonAdd("btnFile", "fnFile");
        	// 결재요청건만 승인/반려 처리할 수 있도록 초기값 비활성화.
        	this.btn2.set_enable(false);
        	this.btn3.set_enable(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccfNO_SILHENG = this.divSearch.form.ccfNO_SILHENG;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfNO_SILHENG.CodeFindName = "DWX_CFNO_SILHENG_01";
        	this.ccfNO_SILHENG.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.dxGrid.set_selecttype("cell");
        	this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DW", "DWA_SILHENGCHG_BONSA");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("NO_SILHENG", "string");
        	this.dsSelect.addColumn("TY_APPROVAL", "string");
        	this.dsSelect.addColumn("DT_REQUEST_FR", "string");
        	this.dsSelect.addColumn("DT_REQUEST_TO", "string");

        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");

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

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "NO_SILHENG", this.dsSearch.getColumn(0, "NO_SILHENG"));
        	this.dsSelect.setColumn(0, "TY_APPROVAL", this.dsSearch.getColumn(0, "TY_APPROVAL"));
        	this.dsSelect.setColumn(0, "DT_REQUEST_FR", this.dsSearch.getColumn(0, "DT_REQUEST_FR"));
        	this.dsSelect.setColumn(0, "DT_REQUEST_TO", this.dsSearch.getColumn(0, "DT_REQUEST_TO"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);

        	var AuthClient = this.gfnDataSetToJson(this.objApp.gdsUserInfo, this.objApp.gdsUserInfo.rowposition);
        	this.dsSelect.setColumn(0, "CD_DEPT", AuthClient.CD_DEPT);

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
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
        	var validate = true;

        // 닷넷 화면에서도 필수값은 아니다. (근데 왜 밑줄 쳐져있지..?)
        // 	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        // 		validate = false;
        // 		//Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        // 	}

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

        		// 조회 후 버튼이 활성화 되어 비활성화.
        		this.btn2.set_enable(false);
        		this.btn3.set_enable(false);

        		// TODO : 결재요청 데이터가 하나 뿐일때 조회를 하면 비활성화 됨.
        		// 데이터가 1개 뿐이기에 그리드 이벤트도 못 탐.
        // 		if(this.dsList.getRowCount() > 0){
        // 			this.dsList.set_rowposition(0);
        // 		}

        	}
        	else if(svcID == "combo") {
        		if (errorCode == 0) {
        			this.dsSearch.form.TY_APPROVAL.set_index(1);
        		}
        	}
        }

        // 승인/반려 화면에서 승인 처리 되면 폼/그리드 초기화.
        this.fnCallbackApprove = function(svcID, value)
        {
        	if(value == true)
        	{
        		this.FormBtns.Select.click();
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfNO_SILHENG") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));	// 현장코드
        	}
        	return true;
        }


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)
        		|| (obj.oldcell == -1 && e.oldcell != e.cell)) {

        		if(this.dsList.getColumn(e.row, "TY_APPROVAL") == 1)
        		{
        			this.btn2.set_enable(true);
        			this.btn3.set_enable(true);
        		}
        		else
        		{
        			this.btn2.set_enable(false);
        			this.btn3.set_enable(false);
        		}

        		obj.oldrow = -1;
        		obj.oldcell = -1;
        	}

        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        // 아래부터는 확장버튼 이벤트.
        this.fnSilhengregexcelvt = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {};

        	trace("getOwnerFrame.CD_SITE : ", this.dsList.getColumn(this.dsList.rowposition, "CD_SITE"));
        	trace("getOwnerFrame.DS_SITE : ", this.dsList.getColumn(this.dsList.rowposition, "DS_SITE"));
        	trace("getOwnerFrame.NO_SILHENG_BF : ", this.dsList.getColumn(this.dsList.rowposition-1, "NO_SILHENG"));
        	trace("getOwnerFrame.DS_SILHENG_BF : ", this.dsList.getColumn(this.dsList.rowposition-1, "DS_SILHENG"));
        	trace("getOwnerFrame.NO_SILHENG : ", this.dsList.getColumn(this.dsList.rowposition, "NO_SILHENG"));
        	trace("getOwnerFrame.DS_SILHENG : ", this.dsList.getColumn(this.dsList.rowposition, "DS_SILHENG"));

        	if(this.dsList.rowposition > -1){
        		param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        		param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        		param.NO_SILHENG_BF = this.dsList.rowposition > 1 ? this.dsList.getColumn(this.dsList.rowposition-1, "NO_SILHENG") : "";
        		param.DS_SILHENG_BF = this.dsList.rowposition > 1 ? this.dsList.getColumn(this.dsList.rowposition-1, "DS_SILHENG") : "";
        		param.NO_SILHENG = this.dsList.getColumn(this.dsList.rowposition, "NO_SILHENG");
        		param.DS_SILHENG = this.dsList.getColumn(this.dsList.rowposition, "DS_SILHENG");
        	}

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_SILHENGCOMPAREITEM", "", param);

        }

        this.fnApprove_Ok = function(obj,e) {

        	var param = {};

        	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        	param.NO_SILHENG = this.dsList.getColumn(this.dsList.rowposition, "NO_SILHENG");
        	param.DS_SILHENG = this.dsList.getColumn(this.dsList.rowposition, "DS_SILHENG");
        	param.TY_APPROVAL = 2;
        	param.RM_BIGO = this.dsList.getColumn(this.dsList.rowposition, "RM_BIGO");
        	param.EP_NO = this.dsList.getColumn(this.dsList.rowposition, "EP_NO");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_SILHENGCHG_APPROVE", "fnCallbackApprove", param, 400, 360);

        }

        this.fnApprove_Repuse = function(obj,e) {
        	var param = {};

        	param.CD_SITE = this.dsList.getColumn(this.dsList.rowposition, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(this.dsList.rowposition, "DS_SITE");
        	param.NO_SILHENG = this.dsList.getColumn(this.dsList.rowposition, "NO_SILHENG");
        	param.DS_SILHENG = this.dsList.getColumn(this.dsList.rowposition, "DS_SILHENG");
        	param.TY_APPROVAL = 3;
        	param.DT_CONFIRM = this.dsList.getColumn(this.dsList.rowposition, "DT_CONFIRM");
        	param.RM_BIGO = this.dsList.getColumn(this.dsList.rowposition, "RM_BIGO");
        	param.EP_NO = this.dsList.getColumn(this.dsList.rowposition, "EP_NO");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DWA_SILHENGCHG_APPROVE", "fnCallbackApprove", param, 400, 360);
        }

        this.fnFile = function(obj,e) {
        	if (!this.fnSelectValidate()) return false;

        	var fileManager = {};
        	fileManager.CD_GUBUN = "DW01";
        	fileManager.CD_DIR = [ this.dsSearch.getColumn(0, "CD_SITE") ];
        	// CD_DIR 만 지정시 CD_DIR 배열 순대로 키1,키2,키3 까지 자동지정
        	// 저장되는 디렉토리와 키값이 다른경우 CD_REF 추가로 사용
        	//fileManager.CD_REF = [ "A1" ];
        	// 권한 및 상태에 따라 업로드,삭제 가능여부 지정 (기본: true)

        // 	if(this.FormInfo.TY_AUTH == "R") {
        // 		fileManager.IS_READONLY = true;
        // 	} else {
        // 		fileManager.IS_READONLY = false;
        // 	}

        	this.gfnFileManager(fileManager, "fnFileCallback");
        };

        this.fnFileCallback = function() {
        };

        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        	this.fnSilhengregexcelvt();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DWA_SILHENGCHG_BONSA.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
