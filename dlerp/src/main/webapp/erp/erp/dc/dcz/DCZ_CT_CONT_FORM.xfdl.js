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
            this.set_titletext("서식관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCZPR_CT_CONT_FORM_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DCZPR_CT_CONT_FORM_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_GUBUN_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"WORK_GUBUN_CD\"/><Col id=\"USE_YN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUSE_YN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">사용</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">사용안함</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfWORK_GUBUN_CD","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("CF_CODE_DC_CT01");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCDLT_CMP_CD","ccfWORK_GUBUN_CD:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboUSE_YN","staCDLT_CMP_CD:0.0","10.0","99","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsUSE_YN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
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
            obj = new BindItem("item2","divSearch.form.ccfWORK_GUBUN_CD.form.CDTextBox","value","dsSearch","WORK_GUBUN_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ccboUSE_YN","value","dsSearch","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DCZ_CT_CONT_FORM.xfdl", function() {
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
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnItem = this.gfnFormButtonAdd("btnItem", "fnItem");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ccboUSE_YN = this.divSearch.form.ccboUSE_YN;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCZ_CT_CONT_FORM");

        	// 셀 수정가능 여부
        	//this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	// 셀 변경 후 이벤트
        	//this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

        	// 그리드 코드파인드 설정
        	//this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	// 전체체크박스 체크/해제 이벤트
        	//this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";

        	// BUTTON, BUTTON-IN 처리
        	//this.dxGrid.ExpandUp = "fnGrid_ExpandUp";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("WORK_GUBUN_CD", "string");
        	this.dsSelect.addColumn("USE_YN", "string");

        	this.dsSave = new Dataset();

        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("FORM_NO", "bigdecimal");
        	this.dsSave.addColumn("WORK_GUBUN_CD", "string");
        	this.dsSave.addColumn("FIRSTCONT_YN", "string");
        	this.dsSave.addColumn("USE_YN", "string");
        	this.dsSave.addColumn("FORM_NM", "string");
        	this.dsSave.addColumn("FORM_FILE_NO", "bigdecimal");
        	this.dsSave.addColumn("CONT_KIND_CD", "string");
        	this.dsSave.addColumn("PREPAY_GRNTY_REQ_YN", "string");
        	this.dsSave.addColumn("CONT_GRNTY_REQ_YN", "string");
        	this.dsSave.addColumn("WRNTY_GRNTY_REQ_YN", "string");
        	this.dsSave.addColumn("LABOR_GRNTY_REQ_YN", "string");
        	this.dsSave.addColumn("PREPAY_GRNTY_RATE", "bigdecimal");
        	this.dsSave.addColumn("CONT_GRNTY_RATE", "bigdecimal");
        	this.dsSave.addColumn("WRNTY_GRNTY_RATE", "bigdecimal");
        	this.dsSave.addColumn("WRNTY_MONTH_CNT", "bigdecimal");
        	this.dsSave.addColumn("LABOR_GRNTY_AMT_PER_ACC", "bigdecimal");
        	this.dsSave.addColumn("LABOR_GRNTY_AMT_PER_MAN", "bigdecimal");
        	this.dsSave.addColumn("SORT_ORDER", "bigdecimal");
        	this.dsSave.addColumn("REG_ID", "string");
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

        	this.dsSelect.setColumn(0, "WORK_GUBUN_CD", this.dsSearch.getColumn(0, "WORK_GUBUN_CD"));
        	this.dsSelect.setColumn(0, "USE_YN", this.dsSearch.getColumn(0, "USE_YN"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
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
        	// 그리드 필수항목 체크``
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsSave.clearData();

        	var flag = "";

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		flag = this.gfnGetFlag(this.dsList, i);
        		console.log(flag);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "FORM_NO", this.dsList.getColumn(i, "FORM_NO"));
        				this.dsSave.setColumn(nrow, "WORK_GUBUN_CD", this.dsList.getColumn(i, "WORK_GUBUN_CD"));
        				this.dsSave.setColumn(nrow, "FIRSTCONT_YN", this.dsList.getColumn(i, "FIRSTCONT_YN"));
        				this.dsSave.setColumn(nrow, "USE_YN", this.dsList.getColumn(i, "USE_YN"));
        				this.dsSave.setColumn(nrow, "FORM_NM", this.dsList.getColumn(i, "FORM_NM"));
        				this.dsSave.setColumn(nrow, "FORM_FILE_NO", this.dsList.getColumn(i, "FORM_FILE_NO"));
        				this.dsSave.setColumn(nrow, "CONT_KIND_CD", this.dsList.getColumn(i, "CONT_KIND_CD"));
        				this.dsSave.setColumn(nrow, "PREPAY_GRNTY_REQ_YN", this.dsList.getColumn(i, "PREPAY_GRNTY_REQ_YN"));
        				this.dsSave.setColumn(nrow, "CONT_GRNTY_REQ_YN", this.dsList.getColumn(i, "CONT_GRNTY_REQ_YN"));
        				this.dsSave.setColumn(nrow, "WRNTY_GRNTY_REQ_YN", this.dsList.getColumn(i, "WRNTY_GRNTY_REQ_YN"));
        				this.dsSave.setColumn(nrow, "LABOR_GRNTY_REQ_YN", this.dsList.getColumn(i, "LABOR_GRNTY_REQ_YN"));
        				this.dsSave.setColumn(nrow, "PREPAY_GRNTY_RATE", this.dsList.getColumn(i, "PREPAY_GRNTY_RATE"));
        				this.dsSave.setColumn(nrow, "CONT_GRNTY_RATE", this.dsList.getColumn(i, "CONT_GRNTY_RATE"));
        				this.dsSave.setColumn(nrow, "WRNTY_GRNTY_RATE", this.dsList.getColumn(i, "WRNTY_GRNTY_RATE"));
        				this.dsSave.setColumn(nrow, "WRNTY_MONTH_CNT", this.dsList.getColumn(i, "WRNTY_MONTH_CNT"));
        				this.dsSave.setColumn(nrow, "LABOR_GRNTY_AMT_PER_ACC", this.dsList.getColumn(i, "LABOR_GRNTY_AMT_PER_ACC"));
        				this.dsSave.setColumn(nrow, "LABOR_GRNTY_AMT_PER_MAN", this.dsList.getColumn(i, "LABOR_GRNTY_AMT_PER_MAN"));
        				this.dsSave.setColumn(nrow, "SORT_ORDER", this.dsList.getColumn(i, "SORT_ORDER"));
        				this.dsSave.setColumn(nrow, "REG_ID", this.AuthClient.ID_USER);
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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"WORK_GUBUN_CD"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfWORK_GUBUN_CD.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("구분은 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
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
        	}
        };



         this.fnItem = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	var param = {};
        	param.FORM_NO = this.dsList.getColumn(this.dsList.rowposition, "FORM_NO");
        	param.FORM_NM = this.dsList.getColumn(this.dsList.rowposition, "FORM_NM");

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DCZ_CT_CONT_FORM_ITEM_D", "", param);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCZ_CT_CONT_FORM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
