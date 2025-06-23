(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DWA_SILHENG");
            this.set_titletext("평가조회(현장_외주)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCDPR_EVALUE_TARGET_SITE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_EVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YR_EVALUE\"/><Col id=\"NO_SEQ\"/><Col id=\"CD_SITE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrollbartype("auto auto");
            this.addChild(obj.name, obj);

            obj = new Static("staYY_WORK","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("평가년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctcYY_WORK","staYY_WORK:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfMagam","ctcYY_WORK:0.0","10.0","98","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("CodeFindName").set("DCX_CFEVALUE_MAGAM_SITE");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","ccfMagam:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
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
            obj = new BindItem("item0","divSearch.form.ctcYY_WORK.form.TextBox","value","dsSearch","YR_EVALUE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfMagam.form.CDTextBox","value","dsSearch","NO_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
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
        this.registerScript("DCD_EVALUE_VENDOR.xfdl", function() {
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

        	var dt = new Date();
        	this.divSearch.form.ctcYY_WORK.form.TextBox.set_value(dt.getFullYear());
        	//this.dsSearch.setColumn(0, "YR_EVALUE", dt.getFullYear());
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btn1 = this.gfnFormButtonAdd("btnEvalue", "fnEvalue");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfMagam = this.divSearch.form.ccfMagam;
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfMagam.form.DSTextBox.set_width("0");
        	this.ccfMagam.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCD_EVALUE_VENDOR");

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YR_EVALUE", "string");
        	this.dsSelect.addColumn("NO_SEQ", "string");

        };

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

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YR_EVALUE", this.dsSearch.getColumn(0, "YR_EVALUE"));
        	this.dsSelect.setColumn(0, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));

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
         *	입력 버튼
         */
        this.fnAdd = function() {

        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        };


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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YR_EVALUE"))) {
        		this.fnVaidateCallback = function() {
        			this.divSearch.form.ctcYY_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("평가년도를 입력하세요.");
        		return false;
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "NO_SEQ"))){
        		this.fnVaidateCallback = function() {
        			this.ccfMagam.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("회차를 입력하세요.");
        		return false;
        	}
        		else if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))){
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.");
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
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.FormBtns.Add.set_enable(false);
        		this.FormBtns.Save.set_enable(false);
        		this.FormBtns.Del.set_enable(false);
        	}else {
        			this.gfnAlert(errorMsg);
        		}

        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfMagam"){
        		dsUserParam.setColumn(nrow, "YR_EVALUE", this.dsSearch.getColumn(0, "YR_EVALUE"));
        		dsUserParam.setColumn(nrow, "ID_EVALUE", this.AuthClient.ID_USER);
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id){
        };


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        // this.fnSearchInit = function(obj,e) {
        // 	if(e == null || (e.pretext != e.posttext)) {
        // 		// 폼상태 초기화
        // 		this.gfnSetFormStatus(this);
        // 		this.gfnGridClear(this.dxGrid);
        // 	}
        // };

        this.fnEvalue = function(obj,e) {
           // 선택된 row가 있을 경우에만 팝업을 띄움
           if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

           var col = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, this.dxGrid.currentcell);
           if(col != "J1_STATUS" && col != "J2_STATUS" && col != "J3_STATUS" && col != "J4_STATUS") {
              this.gfnAlert("현장소장/관리/공무/공구장 중 선택후 진행하세요.");
              return false;
           }

           var nRow = this.dsList.rowposition;

           var param = {};
           param.YR_EVALUE = this.dsList.getColumn(nRow, "YR_EVALUE");
           param.NO_SEQ = this.dsList.getColumn(nRow, "NO_SEQ");
           if(col == "J1_STATUS") {
              param.CD_EVALUEKIND = this.dsList.getColumn(nRow, "CD_EVALUEKIND_J1");
              param.DS_EVALUEKIND = this.dsList.getColumn(nRow, "DS_EVALUEKIND_J1");
           } else if(col == "J2_STATUS") {
              param.CD_EVALUEKIND = this.dsList.getColumn(nRow, "CD_EVALUEKIND_J2");
              param.DS_EVALUEKIND = this.dsList.getColumn(nRow, "DS_EVALUEKIND_J2");
           } else if(col == "J3_STATUS") {
              param.CD_EVALUEKIND = this.dsList.getColumn(nRow, "CD_EVALUEKIND_J3");
              param.DS_EVALUEKIND = this.dsList.getColumn(nRow, "DS_EVALUEKIND_J3");
           } else if(col == "J4_STATUS") {
              param.CD_EVALUEKIND = this.dsList.getColumn(nRow, "CD_EVALUEKIND_J4");
              param.DS_EVALUEKIND = this.dsList.getColumn(nRow, "DS_EVALUEKIND_J4");
           }

           param.CD_SITE = this.dsList.getColumn(nRow, "CD_SITE");
           param.DS_SITE = this.dsList.getColumn(nRow, "DS_SITE");
           param.CD_VENDOR = this.dsList.getColumn(nRow, "CD_VENDOR");
           param.DS_VENDOR = this.dsList.getColumn(nRow, "DS_VENDOR");
           param.NO_HADOCONT = this.dsList.getColumn(nRow, "NO_HADOCONT");
           param.DS_HADOCONT = this.dsList.getColumn(nRow, "DS_HADOCONT");

           // 화면 오픈.
           // CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
           // 타 모듈 화면 호출시 지정할것.

           this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCD_EVALUE", "fnEvalueCallback", param);
        }

        this.fnEvalueCallback = function(svcID, value) {
        	// 리턴값
        	//if(value == true){
        	// 확인 클릭하면 재조회
        	this.FormBtns.Select.click();
        	//}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        	this.fnEvalue();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWA_SILHENG_onload,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCD_EVALUE_VENDOR.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
