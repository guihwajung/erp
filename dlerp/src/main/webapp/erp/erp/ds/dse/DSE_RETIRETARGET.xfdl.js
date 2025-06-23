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
            this.set_titletext("일용직 근로자 명부");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSEPR_RETIRE_TARGET_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSub</Col><Col id=\"SP\">DSAPR_CAREER_SELECT</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DSEPR_RETIRE_CREATE</Col></Row><Row><Col id=\"TARGET\">exec1</Col><Col id=\"SP\">DSEPR_RETIRE_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CD_HADO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HADO\" type=\"STRING\" size=\"256\"/><Column id=\"YM_TOIJIK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_WOIGUG", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">전체</Col><Col id=\"CODE\">0</Col></Row><Row><Col id=\"VALUE\">내국인</Col><Col id=\"CODE\">1</Col></Row><Row><Col id=\"VALUE\">외국인</Col><Col id=\"CODE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCF_JAEJIK", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">전체</Col><Col id=\"CODE\"/></Row><Row><Col id=\"VALUE\">재직</Col><Col id=\"CODE\">1</Col></Row><Row><Col id=\"VALUE\">퇴직</Col><Col id=\"CODE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYM_TOIJIK","0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("퇴직추정년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_TOIJIK","staYM_TOIJIK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.getSetter("dateformat").set("yyyy-mm");
            obj.getSetter("editformat").set("yyyymm");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","ctclYM_TOIJIK:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장/부서 코드");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","220","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFDEPTCORP");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_HADO","ccfCD_SITE:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("작업반");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfSEARCH_CD_HADO","staCD_HADO:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DWX_CFHADO_JIK");
            obj.getSetter("CDTextWidth").set("145");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_NAME","cfSEARCH_CD_HADO:0.0","10.0","144.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfDS_NAME","staDS_NAME:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DSX_CFEMPLOYEE_NAMELIST");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid1","0","0",null,"320","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid2","0","335",null,"330","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfDS_NAME.form.CDTextBox","value","dsSearch","DS_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cfSEARCH_CD_HADO.form.CDTextBox","value","dsSearch","CD_HADO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.cfSEARCH_CD_HADO.form.DSTextBox","value","dsSearch","DS_HADO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclYM_TOIJIK.form.TextBox","value","dsSearch","YM_TOIJIK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DSE_RETIRETARGET.xfdl", function() {
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

        	this.BTN_RETIRE.set_enable(false);
        	this.BTN_RETIRE_CREATE.set_enable(false);
        	this.BTN_RETIRE_DEL.set_enable(false);

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "YM_TOIJIK", today.substr(0, 6));
         	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        // 	this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	this.fnSetCombo();

        	// 화면 공지사항으로 대체
        	// 화면 오픈.
            //this.gfnFormOpen("DSE", "DSE_RETIRE_POPUP", "fnPopupCallback2", '', 700, 400);
        };

        this.fnPopupCallback2 = function(){
        	return true;
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
        	this.BTN_RETIRE_CREATE = this.gfnFormButtonAdd("BTN_RETIRE_CREATE", "fnRetireCreate");
        	this.BTN_RETIRE = this.gfnFormButtonAdd("BTN_RETIRE", "fnRetirePopupOpen");
        	this.BTN_RETIRE_DEL = this.gfnFormButtonAdd("BTN_RETIRE_DEL", "fnRetireDel");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.cfSEARCH_CD_HADO = this.divSearch.form.cfSEARCH_CD_HADO;
        	this.ccfDS_NAME = this.divSearch.form.ccfDS_NAME;

        	// 190627 - 현장코드 코드파인더 변경으로 인한 주석 처리.
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfSEARCH_CD_HADO.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfDS_NAME.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "codefind_AfterCDTextChanged";
        	this.ccfDS_NAME.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	this.dxGrid1 = this.divData.form.objGrid1;
        	this.dxGrid2 = this.divData.form.objGrid2;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid1, this.dsList, "DS", "DSE_RETIRETARGET");
        	this.gfnGridInit(this.dxGrid2, this.dsListSub, "DS", "DSE_CAREER");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        //	this.dsSelect.addColumn("CD_CORP", "string");
        //	this.dsSelect.addColumn("NO_ID", "string");
        	this.dsSelect.addColumn("YM_TOIJIK", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("CD_HADO", "string");
        //	this.dsSelect.addColumn("TY_CHAIYONG", "string");
        //	this.dsSelect.addColumn("TY_TARGET", "string");

        	this.dsSelectSub = new Dataset();
        //	this.dsSelectSub.addColumn("CD_CORP", "string");
        	this.dsSelectSub.addColumn("NO_ID", "string");
        // 	this.dsSelectSub.addColumn("CD_SITE", "string");
        // 	this.dsSelectSub.addColumn("YM_TOIJIK", "string");
        // 	this.dsSelectSub.addColumn("CD_HADO", "string");
        // 	this.dsSelectSub.addColumn("TY_CHAIYONG", "string");
        // 	this.dsSelectSub.addColumn("TY_TARGET", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("YM_RETIRE", "string");
        	this.dsExec.addColumn("ID_RESIDENT", "string");
        	this.dsExec.addColumn("DT_IPSA", "string");
        	this.dsExec.addColumn("DT_START", "string");
        	this.dsExec.addColumn("DT_RETIRE", "string");
        	this.dsExec.addColumn("ID_INSERT", "string");

        	this.dsExec1 = new Dataset();
        	this.dsExec1.addColumn("ID_RESIDENT", "string");
        	this.dsExec1.addColumn("YM_RETIRE", "string");



        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid1);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        //	this.dsSelect.setColumn(0, "CD_CORP", "01");
        //	this.dsSelect.setColumn(0, "NO_ID", this.dsSearch.getColumn(0, "NO_ID"));
        	this.dsSelect.setColumn(0, "YM_TOIJIK", this.dsSearch.getColumn(0, "YM_TOIJIK"));
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "CD_HADO", this.dsSearch.getColumn(0, "CD_HADO"));
        //	this.dsSelect.setColumn(0, "TY_CHAIYONG", "");
        //	this.dsSelect.setColumn(0, "TY_TARGET", "A");

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
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
          *	서브조회 버튼
          */
        this.fnSelectSub = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid2);

        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();

        	this.dsSelectSub.setColumn(0, "NO_ID", this.dsList.getColumn(this.dsList.rowposition, "NO_ID"));

        	var strSvcId    = "selectSub";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selectSub=dsSelectSub";
        	var outData     = "dsListSub=selectSub0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
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

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;

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
        		this.gfnGridAfterSelect(this.dxGrid1);
        	}
        	else if (svcID == "selectSub") {
        		this.gfnGridAfterSelect(this.dxGrid2);
        		this.setBtnUsable();
        	}
        	else if(svcID == "exec") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        	else if(svcID == "exec1") {
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
        	// 190627 - 현장코드 코드파인더 변경으로 인한 주석 처리.
         	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
         	}
        	else if (id == "cfSEARCH_CD_HADO") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
         	}
        	else if (id == "ccfDS_NAME") {
        		if(!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE")))
        		{
        			dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		}
        		else
        		{
        			dsUserParam.setColumn(nrow, "CD_SITE", "");
        		}
        		dsUserParam.setColumn(nrow, "TY_CHAIYONG", "");
        	}

        	return true;
        }

        this.codefind_AfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_SITE")
        	{
        		this.dsSearch.setColumn(0, "DS_NAME", "");
        		this.dsSearch.setColumn(0, "NO_ID", "");
        		this.divSearch.form.ccfDS_NAME.form.DSTextBox.set_value("");
        	}
        	else if (id == "cfSEARCH_CD_HADO") {
        		dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
         	}
        	else if(id == "ccfDS_NAME")
        	{
        		var arr = codeFindData;
        		this.dsSearch.setColumn(0, "NO_ID", "");

        		if(arr.length > 0)
        		{
        			var no_id = arr[0]["NO_ID_REAL"];
        			this.dsSearch.setColumn(0, "NO_ID", no_id);
        		}
        	}

        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         this.setBtnUsable = function() {
        	//선택한 그리드가 있을때만 버튼 활성화
        //	alert(this.dsList.getColumn(this.dsList.rowposition, "YN_RETIRE"));

        	if(this.dsList.rowposition < 0){
        			this.BTN_RETIRE.set_enable(false);
        			this.BTN_RETIRE_CREATE.set_enable(false);
        			this.BTN_RETIRE_DEL.set_enable(false);
        	}else{
        		if (this.dsList.getColumn(this.dsList.rowposition, "YN_RETIRE")=='1') {
        			this.BTN_RETIRE.set_enable(true);
        			this.BTN_RETIRE_CREATE.set_enable(false);
        			if(this.dsList.getColumn(this.dsList.rowposition, "TY_APPROVAL").trim() == "0"){
        				this.BTN_RETIRE_DEL.set_enable(true);
        			}else{
        				this.BTN_RETIRE_DEL.set_enable(false);
        			}
        		}else if (this.dsList.getColumn(this.dsList.rowposition, "YN_RETIRE")=='0'){
        			this.BTN_RETIRE.set_enable(false);
        			this.BTN_RETIRE_CREATE.set_enable(true);
        			this.BTN_RETIRE_DEL.set_enable(false);
        		}else{
        			this.BTN_RETIRE.set_enable(false);
        			this.BTN_RETIRE_CREATE.set_enable(false);
        			this.BTN_RETIRE_DEL.set_enable(false);
        		}
        	}
         }

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid1);
        	}
        };

        this.fnSetCombo = function()
        {
        }

        this.divData_objGrid1_onselectchanged = function(obj,e)
        {
        	this.FormBtns.SubSelect.click();

        };

        //퇴직 정산정보 생성
        this.fnRetireCreate = function() {

        	if(this.dsList.rowposition < 0){
        		this.gfnAlert("선택된 정보가 없습니다.");
        		return;
        	}
        	this.gfnConfirm("퇴직정산정보를 생성하시겠습니까?", "fnRetireCreate_callback");
        }

        this.fnRetireCreate_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.dsExec.clearData();
        		this.dsExec.addRow();

        		this.dsExec.setColumn(0, "YM_RETIRE", this.dsSearch.getColumn(0, "YM_TOIJIK"));
        		this.dsExec.setColumn(0, "ID_RESIDENT", this.dsList.getColumn(this.dsList.rowposition, "NO_ID"));
        		this.dsExec.setColumn(0, "DT_IPSA", this.dsList.getColumn(this.dsList.rowposition, "DT_IPSA"));
        		this.dsExec.setColumn(0, "DT_START", this.dsList.getColumn(this.dsList.rowposition, "DT_IPSA"));
        		this.dsExec.setColumn(0, "DT_RETIRE", this.dsList.getColumn(this.dsList.rowposition, "DT_RETIRE"));
        		this.dsExec.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);

        		var strSvcId    = "exec";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "exec=dsExec";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }

        //퇴직 정산정보 삭제
        this.fnRetireDel = function() {
        	if(this.dsList.rowposition < 0){
        		this.gfnAlert("선택된 정보가 없습니다.");
        		return;
        	}
        	this.gfnConfirm("퇴직정산정보를 삭제하시겠습니까?", "fnRetireDel_callback");
        }

        this.fnRetireDel_callback = function(strID, val)
        {
        	if(val == true)
        	{
        		this.dsExec1.clearData();
        		this.dsExec1.addRow();

        		this.dsExec1.setColumn(0, "ID_RESIDENT", this.dsList.getColumn(this.dsList.rowposition, "NO_ID"));
        		this.dsExec1.setColumn(0, "YM_RETIRE", this.dsSearch.getColumn(0, "YM_TOIJIK"));

        		var strSvcId    = "exec1";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "exec1=dsExec1";
        		var outData     = "";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        }

        this.fnRetirePopupOpen = function(){

        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid1)) { return false; }
        	var param = {
        		YM_TOIJIK : this.dsSearch.getColumn(0, "YM_TOIJIK")
        		,CD_SITE : this.dsSearch.getColumn(0, "CD_SITE")
        		,DS_SITE : this.ccfCD_SITE.form.DSTextBox.value
        		,DS_NAME : this.dsList.getColumn(this.dsList.rowposition, "DS_NAME")
        		,NO_ID : this.dsList.getColumn(this.dsList.rowposition, "NO_ID")
        		,NO_JUMIN :  this.dsList.getColumn(this.dsList.rowposition, "NO_JUMIN")
        	};

        	// 화면 오픈.
            this.gfnFormOpen("DSE", "DSE_RETIRE", "fnPopupCallback", param, 1100, 880);
        }

        this.fnPopupCallback = function(){
        	this.FormBtns.Select.click();
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid1.addEventHandler("onselectchanged",this.divData_objGrid1_onselectchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DSE_RETIRETARGET.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
