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
            this.set_titletext("계약조회(구)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1380,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCCPR_CONTRACT_MIG_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_SITE\"/><Col id=\"DT_START\"/><Col id=\"DT_END\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장명");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_SITE","sta00:0.0","10.0","220","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_SITE00","ctxtDS_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("계약일자");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_START","staDS_SITE00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00_00","calDT_START:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDT_END","sta00_00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
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
            obj = new BindItem("item0","divSearch.form.ctxtDS_SITE","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.calDT_START","value","dsSearch","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.calDT_END","value","dsSearch","DT_END");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DCC_CONTRACT_MIG.xfdl", function() {
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

        	var today = this.gfnGetDate();
        	this.dsSearch.setColumn(0, "DT_START", this.gfnAddMonth(today,-1));
        	this.dsSearch.setColumn(0, "DT_END", this.gfnAddMonth(today,1));
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
        	//this.btnContract = this.gfnFormButtonAdd("btnContract", "fnContract");
        	//this.btnDetail = this.gfnFormButtonAdd("btnRelation", "fnRelation");
        	//this.btnAbort = this.gfnFormButtonAdd("btnAbort", "fnAbort");
        	//this.btnVendorDetail = this.gfnFormButtonAdd("btnVendorDetail", "fnVendorDetail");
        	this.btnContFile = this.gfnFormButtonAdd("btnContFile", "fnContFile");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctxtDS_SITE = this.divSearch.form.ctxtDS_SITE;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCC_CONTRACT_MIG");

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {


        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DS_SITE", "string");
        	this.dsSelect.addColumn("DT_START", "string");
        	this.dsSelect.addColumn("DT_END", "string");
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

        	this.dsSelect.setColumn(0, "DS_SITE", this.dsSearch.getColumn(0, "DS_SITE"));
        	this.dsSelect.setColumn(0, "DT_START", this.dsSearch.getColumn(0, "DT_START"));
        	this.dsSelect.setColumn(0, "DT_END", this.dsSearch.getColumn(0, "DT_END"));


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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid, "bottom"); // top (default), bottom, current
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }


        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	//this.gfnExcelExport(this.dxGrid);
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
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}
        	*/
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
         // 부도타절관리 버튼 클릭시 팝업화면 호출
         /*
         this.fnAbort = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var nRow = this.dsList.rowposition;
        	var param = {};
        	param.CD_SITE = this.dsList.getColumn(nRow, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(nRow, "DS_SITE");
        	param.NO_CONT = this.dsList.getColumn(nRow, "NO_CONT");
        	param.DS_SUBCON = this.dsList.getColumn(nRow, "DS_SUBCON");
        	param.SN_SEQ = this.dsList.getColumn(nRow, "SN_SEQ");
        	param.TY_CONT = this.dsList.getColumn(nRow, "TY_CONT");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_CONTRACT_ABORT", "fnAbort_callback", param, 1080, 895);
        }

        this.fnAbort_callback = function()
        {
        	this.FormBtns.Select.click();
        }

         // 계약일반사항 버튼 클릭시 팝업화면 호출
         this.fnContract = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var nRow = this.dsList.rowposition;
        	var param = {};
        	param.CD_SITE = this.dsList.getColumn(nRow, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(nRow, "DS_SITE");
        	param.NO_CONT = this.dsList.getColumn(nRow, "NO_CONT");
        	param.DS_SUBCON = this.dsList.getColumn(nRow, "DS_SUBCON");
        	param.SN_SEQ = this.dsList.getColumn(nRow, "SN_SEQ");
        	param.TY_CONT = this.dsList.getColumn(nRow, "TY_CONT");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_CONTRACT", "fnContract_callback", param, 950, 750);


        	if(this.dsList.getColumn(nRow, "SN_SEQ") == "001")
        	{
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_CONTRACT", "", param, 1040, 895);
        	}
        	else
        	{
        		this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_CHGCONTRACT", "", param);
        	}

        }

        this.fnContract_callback = function()
        {
        	this.FormBtns.Select.click();
        }

         // 증권현황 버튼 클릭시 팝업화면 호출
         this.fnDetail = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var nRow = this.dsList.rowposition;
        	var param = {};
        	param.CD_SITE = this.dsList.getColumn(nRow, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(nRow, "DS_SITE");
        	param.NO_CONT = this.dsList.getColumn(nRow, "NO_CONT");
        	param.DS_CONT = this.dsList.getColumn(nRow, "DS_SUBCON");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_STOCKMR", "", param);
        }

         this.fnRelation = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var nRow = this.dsList.rowposition;
        	var param = {};
        	//param.CD_SITE = this.dsList.getColumn(nRow, "CD_SITE");
        	//param.DS_SITE = this.dsList.getColumn(nRow, "DS_SITE");
        	param.NO_CONT = this.dsList.getColumn(nRow, "NO_CONT");
        	param.DS_CONT = this.dsList.getColumn(nRow, "DS_SUBCON");

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_CONTRACT_RELATION", "", param);
        }


        this.dsSearch_onvaluechanged = function(obj:nexacro.NormalDataset,e:nexacro.DSColChangeEventInfo)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);

        		if(e.columnid == "CD_SITE"){
        			this.dsSearch.setColumn(0,"NO_CONT", "");
        			this.divSearch.form.ccfNO_CONT.form.DSTextBox.set_value("");
        		}
        	}
        };

        this.divData_objGrid_oncelldblclick = function(obj:nexacro.Grid,e:nexacro.GridClickEventInfo)
        {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var nRow = this.dsList.rowposition;
        	var param = {};
        	param.CD_SITE = this.dsList.getColumn(nRow, "CD_SITE");
        	param.DS_SITE = this.dsList.getColumn(nRow, "DS_SITE");
        	param.NO_CONT = this.dsList.getColumn(nRow, "NO_CONT");
        	param.DS_SUBCON = this.dsList.getColumn(nRow, "DS_SUBCON");
        	param.SN_SEQ = this.dsList.getColumn(nRow, "SN_SEQ");
        	param.TY_CONT = this.dsList.getColumn(nRow, "TY_CONT");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_CONTRACT", "fnContract_callback", param, 950, 750);
        };

        // 업체상세정보 버튼 클릭시 팝업화면 호출
        this.fnVendorDetail = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.CD_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "CD_VENDOR");
        	param.DS_VENDOR = this.dsList.getColumn(this.dsList.rowposition, "DS_VENDOR");
        	param.DT_INPUT = this.dsList.getColumn(this.dsList.rowposition, "DT_INPUT");

        	var ds_param = this.FormInfo.DS_PARAM;
        	if(this.FormInfo.DS_PARAM == "SU") ds_param = "DC";
        	if(this.FormInfo.DS_PARAM == "MM") ds_param = "DM";

        	param.SDS_PARAM = ds_param;
        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.

        	this.gfnFormOpen("DCA", "DCA_REGISTDETAIL_R", "", param);
        }
        */


        // 계약내역 버튼 클릭시 팝업화면 호출
        this.fnContFile = function(obj,e) {
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	//param.CD_SITE = this.dsSearch.getColumn(0, "CD_SITE");
        	//param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        	param.NO_CONT = this.dsList.getColumn(this.dsList.rowposition, "NO_CONT");
        	param.SN_SEQ = this.dsList.getColumn(this.dsList.rowposition, "SN_SEQ");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCC_CONT_FILE_MIG", "fnDialogCallback", param);
        }


        this.fnDialogCallback = function(svcID, value) {
        	this.FormBtns.Select.click();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.sta00.addEventHandler("onclick",this.divSearch_sta00_onclick,this);
            this.divSearch.form.ctxtDS_SITE.addEventHandler("onchanged",this.divSearch_ctxtDS_SITE_onchanged,this);
            this.divSearch.form.calDT_START.addEventHandler("onchanged",this.divSearch_calDT_START_onchanged,this);
            this.divSearch.form.calDT_END.addEventHandler("onchanged",this.divSearch_calDT_END_onchanged,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCC_CONTRACT_MIG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
