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
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCBPR_RECOMMEND_ETC_REQ_VENDOR_LIST_SELECT</Col></Row><Row><Col id=\"TARGET\">exec</Col><Col id=\"SP\">DCBPR_RECOMMEND_ETC_REQ_LIST_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"BIZNO\" type=\"STRING\" size=\"256\"/><Column id=\"CCPY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"BIZNO\"/><Col id=\"CCPY_NM\"/><Col id=\"NO_PR\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_STATUS1","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("사업자번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new MaskEdit("txtBIZNO","staDS_STATUS1:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_STATUS00","txtBIZNO:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("업체명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtCCPY_NM","staDS_STATUS00:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.getSetter("FitToContents").set("true");
            obj.set_value("");
            obj.set_readonly("false");
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
            obj = new BindItem("item1","divSearch.form.txtBIZNO","value","dsSearch","BIZNO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.txtCCPY_NM","value","dsSearch","CCPY_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DCB_RECOMMEND_ETC_VENDOR_LIST.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.popupVal = "";

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

        	if(!this.gfnIsNull(this.getOwnerFrame().NO_PR)) {
        		this.dsSearch.setColumn(0, "NO_PR", this.getOwnerFrame().NO_PR);
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	//this.FormBtns.Add.set_enable(false);
        	//this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnRequest = this.gfnFormButtonAdd("btnRequest", "fnRequest");

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.txtBIZNO = this.divSearch.form.txtBIZNO;
        	this.txtCCPY_NM = this.divSearch.form.txtCCPY_NM;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCB_RECOMMEND_ETC_VENDOR_LIST");

        	// row 수정가능 여부
        	//this.dxGrid.EnterCell = "fnGrid_EnterCell";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("BIZNO", "string");
        	this.dsSelect.addColumn("CCPY_NM", "string");
        	this.dsSelect.addColumn("JOBTYPE_CD", "string");
        	this.dsSelect.addColumn("REG_DIV_CD", "string");

        	this.dsExec = new Dataset();
        	this.dsExec.addColumn("BIZNO", "string");
        	this.dsExec.addColumn("NO_PR", "string");
        	this.dsExec.addColumn("ID_RECOMMEND", "string");
        	this.dsExec.addColumn("RM_RECOMMEND", "string");
        	this.dsExec.addColumn("RM_BIGO", "string");

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

        	this.dsSelect.setColumn(0, "BIZNO", this.dsSearch.getColumn(0, "BIZNO"));
        	this.dsSelect.setColumn(0, "CCPY_NM", this.dsSearch.getColumn(0, "CCPY_NM"));
        	this.dsSelect.setColumn(0, "JOBTYPE_CD", "");
        	this.dsSelect.setColumn(0, "REG_DIV_CD", "");

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
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_SITE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        	}
        	else if (this.gfnIsNull(this.dsSearch.getColumn(0, "YR_WORK"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYR_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("기준년도를 입력하세요.", "fnVaidateCallback");
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
        this.fnCallback = function(svcID, errorCode, errorMsg, args)
        {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "exec") {
        		if (errorCode == 0) {
        			this.fnExec_callback = function()
        			{
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("심사요청 정상 처리되었습니다.", "fnExec_callback");
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


         // 심사요청 버튼 클릭
         this.fnRequest = function(obj,e) {
        	// 선택된 row가 있을 경우에만 팝업을 띄움
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }

        	if(this.dsList.findRow("CHK", "1") < 0){
        		this.gfnAlert("심사요청 하실 정보를 선택하시기 바랍니다.");
        		return false;
        	}

        	this.gfnConfirm("심사요청 하시겠습니까?", "dsList_request_callback");
        }

        // 심사요청 버튼 클릭 후 callback
        this.dsList_request_callback = function(strId, val)
        {
        	if(val == true) {
        		var param = {};

        		this.gfnFormOpenNonAuth("DSA", "DCB_RECOMMEND_ETC_REQ_DLG", "fnRequestDialogCallback", param, 540, 255);
        	}
        }

        this.fnRequestDialogCallback = function(svcID, value) {
        	// 리턴값
        	if(value){
        		this.dsExec.clearData();

        		for (var i = 0; i < this.dsList.rowcount; i++) {
        			if(this.dsList.getColumn(i, "CHK") == "1"){
        				var nrow = this.dsExec.addRow();

        				this.dsExec.setColumn(nrow, "BIZNO", this.dsList.getColumn(i, "BIZNO"));
        				this.dsExec.setColumn(nrow, "NO_PR", this.dsSearch.getColumn(0, "NO_PR"));
        				this.dsExec.setColumn(nrow, "ID_RECOMMEND", this.AuthClient.ID_USER);
        				this.dsExec.setColumn(nrow, "RM_RECOMMEND", this.popupVal.rmRecommend);
        				this.dsExec.setColumn(nrow, "RM_BIGO", this.popupVal.rmBigo);
        			}
        		}

        		if (this.dsExec.rowcount == 0) return;

        		this.popupVal = "";	// 초기화

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
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsSearch.addEventHandler("oncolumnchanged",this.dsSearch_oncolumnchanged,this);
        };
        this.loadIncludeScript("DCB_RECOMMEND_ETC_VENDOR_LIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
