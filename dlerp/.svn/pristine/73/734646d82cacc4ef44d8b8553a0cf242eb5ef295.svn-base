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
            this.set_titletext("부가세잔액대사");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_BAL_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_START\" type=\"STRING\" size=\"256\"/><Column id=\"DT_END\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_SELFACNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TY_GUBUN\">I</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">I</Col><Col id=\"DS_CODE\">매입</Col></Row><Row><Col id=\"CD_CODE\">O</Col><Col id=\"DS_CODE\">매출</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_SELFACNT","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("세무단위");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_SELFACNT","staCD_DEPT_SELFACNT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","ccfCD_DEPT_SELFACNT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("귀속부서");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","staCD_DEPT_ACNT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT_BY_SELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_START_END","ccfCD_DEPT_ACNT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("증빙기간");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_START","staDT_START_END:0.0","10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSPACE00","ctclDT_START:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_END","staSPACE00:0.0","10.0","110","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","ctclDT_END:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("구분");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Radio("crdoTY_GUBUN","staTY_GUBUN:0.0","10.0","130","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_direction("vertical");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_DEPT_SELFACNT.form.CDTextBox","value","dsSearch","CD_DEPT_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_START","value","dsSearch","DT_START");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_END","value","dsSearch","DT_END");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.crdoTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_VAT_BAL.xfdl", function() {
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
        	this.dsSearch.setColumn(0, "DT_START", this.gfnGetFirstDate(today));
        	this.dsSearch.setColumn(0, "DT_END", today);

        	this.dsSearch.setColumn(0, "CD_DEPT_SELFACNT", this.UserInfo.LEVCD_DEPT_SELFACNT);
        	this.divSearch.form.ccfCD_DEPT_SELFACNT.form.fnCodeFindLoad();

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
        	this.btnDetail = this.gfnFormButtonAdd("btnDetail", "fnDetail");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_DEPT_SELFACNT = this.divSearch.form.ccfCD_DEPT_SELFACNT;
        	this.ctclDT_START = this.divSearch.form.ctclDT_START;
        	this.ctclDT_END = this.divSearch.form.ctclDT_END;
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;
        	this.crdoTY_GUBUN = this.divSearch.form.crdoTY_GUBUN;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_VAT_BAL");

        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_SELFACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 합계의 GangJo 효과는 그리드설정에서 처리.
        	this.dxGrid.set_enableredraw(false);
        	this.gfnGridColumnColor(this.dxGrid, "SLIP_CNT", "BACK_GangJo", "(SLIP_CNT != VAT_CNT) || (SLIP_CNT != LEFT_CNT) || (VAT_CNT != LEFT_CNT)");
        	this.gfnGridColumnColor(this.dxGrid, "VAT_CNT", "BACK_GangJo", "(SLIP_CNT != VAT_CNT) || (SLIP_CNT != LEFT_CNT) || (VAT_CNT != LEFT_CNT)");
        	this.gfnGridColumnColor(this.dxGrid, "LEFT_CNT", "BACK_GangJo", "(SLIP_CNT != VAT_CNT) || (SLIP_CNT != LEFT_CNT) || (VAT_CNT != LEFT_CNT)");

        	this.gfnGridColumnColor(this.dxGrid, "SLIP_AMOUNT", "BACK_GangJo", "(SLIP_AMOUNT != VAT_AMOUNT) || (SLIP_AMOUNT != LEFT_AMOUNT) || (VAT_AMOUNT != LEFT_AMOUNT)");
        	this.gfnGridColumnColor(this.dxGrid, "VAT_AMOUNT", "BACK_GangJo", "(SLIP_AMOUNT != VAT_AMOUNT) || (SLIP_AMOUNT != LEFT_AMOUNT) || (VAT_AMOUNT != LEFT_AMOUNT)");
        	this.gfnGridColumnColor(this.dxGrid, "LEFT_AMOUNT", "BACK_GangJo", "(SLIP_AMOUNT != VAT_AMOUNT) || (SLIP_AMOUNT != LEFT_AMOUNT) || (VAT_AMOUNT != LEFT_AMOUNT)");


        	this.dxGrid.set_enableredraw(true);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("DT_START", "string");
        	this.dsSelect.addColumn("DT_END", "string");
        	this.dsSelect.addColumn("CD_DEPT_SELFACNT", "string");

        	this.dsSelectUser = new Dataset();
        	this.dsSelectUser.addColumn("ID_USER", "string");
        	this.dsSelectUser.addColumn("CD_DEPT", "string");
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

        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(0, "TY_GUBUN", this.dsSearch.getColumn(0, "TY_GUBUN"));
        	this.dsSelect.setColumn(0, "DT_START", this.dsSearch.getColumn(0, "DT_START"));
        	this.dsSelect.setColumn(0, "DT_END", this.dsSearch.getColumn(0, "DT_END"));
        	this.dsSelect.setColumn(0, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"));

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
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        }

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

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"))) {
        		validate = false;
        		this.ccfCD_DEPT_SELFACNT.form.CDTextBox.setFocus();
        		this.gfnAlert("세무단위를 입력하지 않았습니다.");

        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_START"))) {
        		validate = false;
        		this.ctclDT_START.setFocus();
        		this.gfnAlert("시작 기간이 입력되지 않았습니다.");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_END"))) {
        		validate = false;
        		this.ctclDT_END.setFocus();
        		this.gfnAlert("종료 기간이 입력되지 않았습니다.");

        	}

        	else if (this.dsSearch.getColumn(0, "DT_START").substr(0,4) != this.dsSearch.getColumn(0, "DT_END").substr(0,4)) {
        		validate = false;
        		this.gfnAlert("증빙 기간의 범위는 같은 회기 내에 해야 됩니다.");
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
        	}
        	else if(svcID == "save") {
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
        	if(id == "ccfCD_DEPT_SELFACNT") {
        		dsUserParam.setColumn(nrow, "LV_DEPT", this.UserInfo.LEVCD_DEPT_ACNT);
        	}
        	else if(id == "ccfCD_DEPT_ACNT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT_SELFACNT", this.dsSearch.getColumn(0, "CD_DEPT_SELFACNT"));
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", this.UserInfo.LEVCD_DEPT_ACNT);
        	}

        	return true;
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         // 그리드 더블클릭 이벤트.
        this.divData_objGrid_oncelldblclick = function(obj,e)
        {
        	this.fnDetail();
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

        this.fnDetail = function()
        {
        	var nrow = this.dsList.rowposition;

        	if(nrow < 0) return;

        	if(this.gfnNvl(this.dsList.getColumn(nrow, "CD_DEPT_ACNT"),"").trim() == "합계") return;

        	var param = {};
        	param.CD_DEPT_ACNT = this.dsList.getColumn(nrow, "CD_DEPT_ACNT");
        	param.DS_DEPT_ACNT = this.dsList.getColumn(nrow, "DS_DEPT_ACNT");
        	param.DT_FROM = this.dsSearch.getColumn(0, "DT_START");
        	param.DT_TO = this.dsSearch.getColumn(0, "DT_END");
        	param.TY_SALEBUY = this.dsSearch.getColumn(0, "TY_GUBUN");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHV_VATCHECK", "fnPopupCallBack", param);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccfCD_DEPT_SELFACNT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staCD_DEPT_ACNT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_DEPT_ACNT.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staDT_START_END.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.divData_objGrid_oncelldblclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHV_VAT_BAL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
