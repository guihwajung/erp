(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DZU_EPS_TOTAL_LOG");
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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZUPR_EPS_TOTAL_LOG_SELECT</Col></Row><Row><Col id=\"SP\">DZUPR_EPS_VENDOR_LOG_SELECT</Col><Col id=\"TARGET\">d_select</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"NM_FROM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearchSub", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"NM_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_VENDOR\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","50%","0","5","100%",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divSearchLeft","0","0",null,"80","divSplitter:5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","10","10","60","25",null,null,null,null,null,null,this.divSearch.form.divSearchLeft.form);
            obj.set_taborder("0");
            obj.set_text("조회기간");
            this.divSearch.form.divSearchLeft.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","75","10","105","25",null,null,null,null,null,null,this.divSearch.form.divSearchLeft.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.form.divSearchLeft.addChild(obj.name, obj);

            obj = new Static("sta_range","ctclDT_FROM:10","staCD_SITE:-25","10","25",null,null,null,null,null,null,this.divSearch.form.divSearchLeft.form);
            obj.set_taborder("2");
            obj.set_text("~");
            this.divSearch.form.divSearchLeft.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","sta_range:10","10","105","25",null,null,null,null,null,null,this.divSearch.form.divSearchLeft.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.form.divSearchLeft.addChild(obj.name, obj);

            obj = new Static("staNO_PR","ctclDT_TO:30","10","40","25",null,null,null,null,null,null,this.divSearch.form.divSearchLeft.form);
            obj.set_taborder("5");
            obj.set_text("화면명");
            this.divSearch.form.divSearchLeft.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_FORM","staNO_PR:5","10","155","25",null,null,null,null,null,null,this.divSearch.form.divSearchLeft.form);
            obj.set_taborder("4");
            obj.set_value("");
            this.divSearch.form.divSearchLeft.addChild(obj.name, obj);

            obj = new Div("divSearchRight","divSplitter:0","0",null,"80","0",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE_SUB","10","10","60","25",null,null,null,null,null,null,this.divSearch.form.divSearchRight.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            this.divSearch.form.divSearchRight.addChild(obj.name, obj);

            obj = new Static("sta_range","190","46","10","25",null,null,null,null,null,null,this.divSearch.form.divSearchRight.form);
            obj.set_taborder("1");
            obj.set_text("~");
            this.divSearch.form.divSearchRight.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","210","46","105","25",null,null,null,null,null,null,this.divSearch.form.divSearchRight.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.form.divSearchRight.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","75","46","105","25",null,null,null,null,null,null,this.divSearch.form.divSearchRight.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.form.divSearchRight.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","10","46","60","25",null,null,null,null,null,null,this.divSearch.form.divSearchRight.form);
            obj.set_taborder("4");
            obj.set_text("조회기간");
            this.divSearch.form.divSearchRight.addChild(obj.name, obj);

            obj = new Div("cfDS_VENDOR","75","10","308","25",null,null,null,null,null,null,this.divSearch.form.divSearchRight.form);
            obj.getSetter("CodeFindName").set("DHX_CFCTVENDOR_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.form.divSearchRight.addChild(obj.name, obj);

            obj = new Static("staNO_PR","ctclDT_TO:30","46","40","25",null,null,null,null,null,null,this.divSearch.form.divSearchRight.form);
            obj.set_taborder("6");
            obj.set_text("화면명");
            this.divSearch.form.divSearchRight.addChild(obj.name, obj);

            obj = new Edit("ctxtNM_FORM","staNO_PR:5","46","155","25",null,null,null,null,null,null,this.divSearch.form.divSearchRight.form);
            obj.set_taborder("7");
            obj.set_value("");
            this.divSearch.form.divSearchRight.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","49.69%","0","5","100.00%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataLeft","0","0",null,null,"divSplitter:10","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","27",null,null,"0","0",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100.00%","22",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("1");
            obj.set_text("기간별 총 접속 이력 조회");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","divSplitter:5","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","27",null,null,"0","0",null,null,null,null,this.divData.form.divDataRight.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Static("sta03","0","0","100.00%","22",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_text("업체별 접속 이력");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataRight.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.divSearchLeft.form.ctclDT_FROM","value","dsSearch","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.divSearchLeft.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.divSearchLeft.form.ctxtNM_FORM","value","dsSearch","NM_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.divSearchRight.form.ctclDT_FROM","value","dsSearchSub","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.divSearchRight.form.ctclDT_TO","value","dsSearchSub","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.divSearchRight.form.cfDS_VENDOR.form.CDTextBox","value","dsSearchSub","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.divSearchRight.form.cfDS_VENDOR.form.DSTextBox","value","dsSearchSub","DS_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.divSearchRight.form.ctxtNM_FORM","value","dsSearchSub","NM_FROM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DZU_EPS_TOTAL_LOG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.DWA_SILHENG_onload = function(obj,e)
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

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "DT_FROM", this.gfnAddMonth(today,-1));
        	this.dsSearch.setColumn(0, "DT_TO",   today);

        	this.dsSearchSub.setColumn(0, "DT_FROM", this.gfnAddMonth(today,-1));
        	this.dsSearchSub.setColumn(0, "DT_TO",   today);



        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        // 	this.FormBtns.Add.set_enable(false);
        // 	this.FormBtns.Del.set_enable(false);
        	this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter, "fnCustomDragMove"); // divSplitter sync

        }

        this.fnCustomDragMove = function(obj,e) {
        	if(e.userdata == "splitter") {
        		this.divSearch.form.divSplitter.set_left(e.clientx);
        		this.divSearch.form.resetScroll();
        	}
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

        	this.dxGrid = this.divData.form.divDataLeft.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataRight.form.objGridSub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZU_EPS_TOTAL_LOG");
        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DZ", "DZU_EPS_VENDOR_LOG");

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("NM_FROM", "string");


        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_VENDOR", "string");
        	this.dsSelectSub.addColumn("DT_FROM", "string");
        	this.dsSelectSub.addColumn("DT_TO", "string");
        	this.dsSelectSub.addColumn("NM_FROM", "string");


        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if(!this.fnValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "DT_FROM", this.dsSearch.getColumn(0, "DT_FROM"));	//발주기간
        	this.dsSelect.setColumn(0, "DT_TO",   this.dsSearch.getColumn(0, "DT_TO"));
        	this.dsSelect.setColumn(0, "NM_FROM", this.dsSearch.getColumn(0, "NM_FROM"));
        	//this.dsSelect.setColumn(0, "TY_GUBUN", "2");

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


        this.fnSelectSub = function() {
            this.dsListSub.clearData();
        	this.gfnGridBeforeSelect(this.dxGridSub);

        	// 디테일 파라미터 데이터셋 셋팅
        	this.dsSelectSub.clearData();
        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "CD_VENDOR", this.dsSearchSub.getColumn(0, "CD_VENDOR"));	//발주기간
        	this.dsSelectSub.setColumn(0, "DT_FROM",   this.dsSearchSub.getColumn(0, "DT_FROM"));	//발주기간
        	this.dsSelectSub.setColumn(0, "DT_TO",     this.dsSearchSub.getColumn(0, "DT_TO"));
        	this.dsSelectSub.setColumn(0, "NM_FROM",   this.dsSearchSub.getColumn(0, "NM_FROM"));


        	var strSvcId    = "d_select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "d_select=dsSelectSub";
        	var outData     = "dsListSub=d_select0";
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
         *	입력 버튼
         */
        this.fnAdd = function() {
        	this.gfnGridAdd(this.dxGrid);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        		// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		switch(flag) {
        			case "I":

        				var nrow = this.dsInsert.addRow();

        				this.dsInsert.setColumn(nrow, "ID_USER", this.dsList.getColumn(i, "ID_USER"));
        				this.dsInsert.setColumn(nrow, "DS_HNAME", this.dsList.getColumn(i, "DS_HNAME"));
        				this.dsInsert.setColumn(nrow, "ID_PASSWORD", this.dsList.getColumn(i, "ID_PASSWORD"));
        				this.dsInsert.setColumn(nrow, "ID_JUMIN", this.dsList.getColumn(i, "ID_JUMIN"));
        				this.dsInsert.setColumn(nrow, "ID_EMAIL", this.dsList.getColumn(i, "ID_EMAIL"));
        				this.dsInsert.setColumn(nrow, "NO_IP", this.dsList.getColumn(i, "NO_IP"));
        				this.dsInsert.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsInsert.setColumn(nrow, "YN_LOGINDENY", this.dsList.getColumn(i, "YN_LOGINDENY"));
        				this.dsInsert.setColumn(nrow, "TY_ECONT", this.dsList.getColumn(i, "TY_ECONT"));
        				this.dsInsert.setColumn(nrow, "CD_ROLE", this.dsList.getColumn(i, "CD_ROLE"));
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				this.dsInsert.setColumn(nrow, "ID_ACCOUNT", this.dsList.getColumn(i, "ID_ACCOUNT"));
        				this.dsInsert.setColumn(nrow, "YN_GROUPWARE", this.dsList.getColumn(i, "YN_GROUPWARE"));
        			break;
        			case "U":

        				var nrow = this.dsUpdate.addRow();

        				this.dsUpdate.setColumn(nrow, "ID_USER", this.dsList.getColumn(i, "ID_USER"));
        				this.dsUpdate.setColumn(nrow, "DS_HNAME", this.dsList.getColumn(i, "DS_HNAME"));
        				this.dsUpdate.setColumn(nrow, "ID_PASSWORD", this.dsList.getColumn(i, "ID_PASSWORD"));
        				this.dsUpdate.setColumn(nrow, "ID_JUMIN", this.dsList.getColumn(i, "ID_JUMIN"));
        				this.dsUpdate.setColumn(nrow, "ID_EMAIL", this.dsList.getColumn(i, "ID_EMAIL"));
        				this.dsUpdate.setColumn(nrow, "NO_IP", this.dsList.getColumn(i, "NO_IP"));
        				this.dsUpdate.setColumn(nrow, "CD_DEPT", this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsUpdate.setColumn(nrow, "YN_LOGINDENY", this.dsList.getColumn(i, "YN_LOGINDENY"));
        				this.dsUpdate.setColumn(nrow, "TY_ECONT", this.dsList.getColumn(i, "TY_ECONT"));
        				this.dsUpdate.setColumn(nrow, "CD_ROLE", this.dsList.getColumn(i, "CD_ROLE"));
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsUpdate.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				this.dsUpdate.setColumn(nrow, "ID_ACCOUNT", this.dsList.getColumn(i, "ID_ACCOUNT"));
        				this.dsUpdate.setColumn(nrow, "YN_GROUPWARE", this.dsList.getColumn(i, "YN_GROUPWARE"));
        			break;
        			case "D":

        				var nrow = this.dsDelete.addRow();

        				this.dsDelete.setColumn(nrow, "ID_USER", this.dsList.getColumn(i, "ID_USER"));
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsDelete.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        			break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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
        this.fnValidate = function() {
        // 	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        // 		this.fnVaidateCallback = function() {
        // 			//this.ccfCorp.form.CDTextBox.setFocus();
        // 		}
        // 		//this.gfnAlert("법인코드는 필수입력 값입니다.");
        // 		return false;
        // 	}

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
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        	}else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        // 	if (id == "ccfDeptCorp") {
        // 		if(!this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))){
        // 			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCorp.form.CDTextBox.value);
        // 		}else{
        // 			this.gfnAlert("법인코드는 필수입력 값입니다.");
        // 			return false;
        // 		}
        // 	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCorp") {
        		// 현장코드 변경시 초기화
        		//this.ccfDeptCorp.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        //  	if (id == "DZX_CFDEPTCORP") {
        // 		var cd_corp = this.dsSearch.getColumn(0, "CD_CORP");
        // 		if(this.gfnIsNull(cd_corp)) {
        // 			this.gfnAlert("법인코드를 먼저 입력하세요.");
        // 			return false;
        // 		}
        //  		dsUserParam.setColumn(nrow, "CD_CORP", cd_corp);
        //  	}
        	return true;
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridSub);
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };
        this.dsSearchSub_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGridSub);
        	}
        };


        this.fnUserModule = function(obj, e){
        	if(!this.gfnGridIsRow(this.dxGrid)){return false;}
        	var param = {};
        	param.ID_CORP = this.ccfCorp.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCorp.form.DSTextBox.value;
        	param.ID_USER = this.dsList.getColumn(this.dsList.rowposition, "ID_USER");
        	param.DS_HNAME = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DZU_USERMODULE_USER", "fnUserModuleCallback", param);
        };

        this.fnGYUMJIK = function(obj, e){
        	if(!this.gfnGridIsRow(this.dxGrid)){return false;}
        	var param = {};
        	param.ID_CORP = this.ccfCorp.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCorp.form.DSTextBox.value;
        	param.ID_USER = this.dsList.getColumn(this.dsList.rowposition, "ID_USER");
        	param.DS_HNAME = this.dsList.getColumn(this.dsList.rowposition, "DS_HNAME");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DZU_GYUMJIK", "fnGYUMJIKCallback", param);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWA_SILHENG_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsSearchSub.addEventHandler("onvaluechanged",this.dsSearchSub_onvaluechanged,this);
        };
        this.loadIncludeScript("DZU_EPS_TOTAL_LOG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
