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
            this.set_titletext("가압류관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsListTopLeft", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">tl_select</Col><Col id=\"SP\">DVAPR_ACCD_MAST_SELECT</Col></Row><Row><Col id=\"TARGET\">tr_select</Col><Col id=\"SP\">DVAPR_ACCD_SUB_SELECT</Col></Row><Row><Col id=\"TARGET\">btm_select</Col><Col id=\"SP\">DWDPR_HDLEDGER_WAIT_SELECT</Col></Row><Row><Col id=\"TARGET\">btm_save</Col><Col id=\"SP\">DWDPR_HDLEDGER_WAIT_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListTopRight", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_IDBT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DS_TRBL_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListBottom", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("관리번호 / 사건번호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_IDBT_NO","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.getSetter("CodeFindName").set("DVA_ACCD_CODEFIND");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter2","70.00%","0","5","50.5%",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_background("skyblue");
            obj.set_cursor("ew-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divSplitter1","0","50%",null,"5","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataTopLeft","0","5",null,null,"divSplitter2:5","divSplitter1:5",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","0","0","100.00%","22",null,null,null,null,null,null,this.divData.form.divDataTopLeft.form);
            obj.set_taborder("0");
            obj.set_text("사건 정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new Grid("objGrid_TopLeft","0","sta01:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataTopLeft.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataTopLeft.addChild(obj.name, obj);

            obj = new Div("divDataTopRight","divSplitter2:5","5",null,null,"0","divSplitter1:5",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataTopRight.form);
            obj.set_taborder("0");
            obj.set_text("현장 정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.form.divDataTopRight.addChild(obj.name, obj);

            obj = new Grid("objGrid_TopRight","0","sta02:5",null,null,"0","0",null,null,null,null,this.divData.form.divDataTopRight.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataTopRight.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","divSplitter1:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","0","0","100%","22",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_text("가압류 처리");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Grid("objGrid_Bottom","0","27",null,null,"0","0",null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfNO_IDBT_NO.form.CDTextBox","value","dsSearch","NO_IDBT_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_IDBT_NO.form.DSTextBox","value","dsSearch","DS_TRBL_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DWD_ACCD.xfdl", function() {
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
        	//this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// 서브 버튼 사용
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter1); // Top <-> Bottom
        	//this.gfnUseSubBtn(true, this.divData, this.divData.form.divSplitter2); // Left <-> Right
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	/*this.btn1 = this.gfnFormButtonAdd("btnGroup", "fnGroup");*/
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid_TopLeft = 	this.divData.form.divDataTopLeft.form.objGrid_TopLeft; //사건정보
        	this.dxGrid_TopRight = 	this.divData.form.divDataTopRight.form.objGrid_TopRight; //현장정보
        	this.dxGrid_Bottom = 	this.divData.form.divDataBottom.form.objGrid_Bottom; //현장정보

        	this.ccfNO_IDBT_NO    = this.divSearch.form.ccfNO_IDBT_NO;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid_TopLeft, this.dsListTopLeft, "DV", "DVA_ACCD_MAST");
        	this.dxGrid_TopLeft.set_selecttype("cell");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경
        	this.dxGrid_TopLeft.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.gfnGridInit(this.dxGrid_TopRight, this.dsListTopRight, "DV", "DVA_ACCD_SUB");
        	this.dxGrid_TopRight.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	this.gfnGridInit(this.dxGrid_Bottom, this.dsListBottom, "DW", "DWD_HDLEDGER_WAIT");
        	this.dxGrid_Bottom.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);

        	// BUTTON, BUTTON-IN 처리
        	this.dxGrid_TopLeft.ExpandUp = "fnGrid_ExpandUp";

        	// 그리드 코드파인드 설정
        	this.dxGrid_TopLeft.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid_TopRight.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.dsListTopLeft.addEventHandler("canrowposchange", this.dsListTopLeft_canrowposchange, this);
        	this.dsListTopRight.addEventHandler("canrowposchange", this.dsListTopRight_canrowposchange, this);

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelectTopLeft = new Dataset();
        	this.dsSelectTopLeft.addColumn("NO_IDBT_NO", "string");		// 관리번호
        	this.dsSelectTopLeft.addColumn("DS_TRBL_NO", "string");		// 사건번호

        	this.dsSelectTopRight = new Dataset();
        	this.dsSelectTopRight.addColumn("NO_IDBT_NO", "string");	// 관리번호
        	this.dsSelectTopRight.addColumn("DS_TRBL_NO", "string"); 	// 사건번호

        	this.dsSelectBottom = new Dataset();
        	this.dsSelectBottom.addColumn("TY_WRK", "string");			// 작업구분 Insert : I, Update: U , Delete : D
        	this.dsSelectBottom.addColumn("NO_IDBT_NO", "string");		// 관리번호
        	this.dsSelectBottom.addColumn("CD_SITE", "string");			// 관련현장번호

        	this.dsSaveBottom = new Dataset();
        	this.dsSaveBottom.addColumn("NO_IDBT_NO", "string");		// 사건번호
        	this.dsSaveBottom.addColumn("NO_WAIT", "string");		// 처리번호
        	this.dsSaveBottom.addColumn("CD_SITE", "string");			// 관련현장코드
        	this.dsSaveBottom.addColumn("DS_SITE", "string");			// 관련현장
        	this.dsSaveBottom.addColumn("AM_ATTA_AMT", "string");		// 압류금액
        	this.dsSaveBottom.addColumn("NO_HADOCONT", "string");		// 계약번호
        	this.dsSaveBottom.addColumn("DS_HADOCONT", "string");		// 계약명
        	this.dsSaveBottom.addColumn("YM_WORK", "string");			// 기성월
        	this.dsSaveBottom.addColumn("CD_VENDOR", "string");			// 업체코드
        	this.dsSaveBottom.addColumn("DS_VENDOR", "string");			// 업체
        	this.dsSaveBottom.addColumn("NO_SLIP", "string");			// 전표번호
        	this.dsSaveBottom.addColumn("AM_GISUNG_TOT", "string");		// 기성금액
        	this.dsSaveBottom.addColumn("AM_WAIT", "string");			// 보류금액
        	this.dsSaveBottom.addColumn("AM_GISUNG_JIBUL", "string");	// 지불금액
        	this.dsSaveBottom.addColumn("DS_BIGO", "string");			// 비고
        	this.dsSaveBottom.addColumn("DT_REQ", "string");			// 집행일자
        	this.dsSaveBottom.addColumn("AM_AMT", "string");			// 집행금액
        	this.dsSaveBottom.addColumn("DS_BANK", "string");			// 은행
        	this.dsSaveBottom.addColumn("NO_ACCOUNT", "string");		// 계좌번호
        	this.dsSaveBottom.addColumn("NO_REQUEST", "string");		// 집행번호
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	dxGrid_TopLeft 조회 버튼(좌측)
          */
        this.fnSelect = function() {
        	this.gfnSetFormSubStatus(this);

        	this.gfnGridBeforeSelect(this.dxGrid_TopLeft);

        	this.dsSelectTopLeft.clearData();
        	this.dsSelectTopLeft.addRow();

        	this.dsSelectTopLeft.setColumn(0, "NO_IDBT_NO", this.dsSearch.getColumn(0, "NO_IDBT_NO"));
        	this.dsSelectTopLeft.setColumn(0, "DS_TRBL_NO", this.dsSearch.getColumn(0, "DS_TRBL_NO"));

        	var strSvcId    = "selecttopleft";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "tl_select=dsSelectTopLeft";
        	var outData     = "dsListTopLeft=tl_select0";
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
        	/* dxGrid_Bottom 추가*/
        	//this.gfnGridAdd(this.dxGrid_Bottom);
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	/* dxGrid_Bottom 삭제*/
        	//this.gfnGridDel(this.dxGrid_Bottom);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	/* dxGrid_Bottom 저장*/
        	if (!this.gfnGridValidate(this.dxGrid_Bottom)) return;

        	this.dxGrid_Bottom.updateToDataset();

        	this.dsSaveBottom.clearData();

        	for (var i = 0; i < this.dsListBottom.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListBottom, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSaveBottom.addRow();
        				this.dsSaveBottom.setColumn(nrow, "TY_WRK", flag);															// 작업구분 Insert : I, Update: U , Delete : D
        				this.dsSaveBottom.setColumn(nrow, "NO_IDBT_NO", this.dsListBottom.getColumn(i, "NO_IDBT_NO"));				// 사건번호
        				this.dsSaveBottom.setColumn(nrow, "NO_WAIT", this.dsListBottom.getColumn(i, "NO_WAIT"));				// 처리번호
        				this.dsSaveBottom.setColumn(nrow, "CD_SITE", this.dsListBottom.getColumn(i, "CD_SITE"));					// 관련현장코드
        				this.dsSaveBottom.setColumn(nrow, "DS_SITE", this.dsListBottom.getColumn(i, "DS_SITE"));					// 관련현장
        				this.dsSaveBottom.setColumn(nrow, "AM_ATTA_AMT", this.dsListBottom.getColumn(i, "AM_ATTA_AMT"));			// 압류금액
        				this.dsSaveBottom.setColumn(nrow, "NO_HADOCONT", this.dsListBottom.getColumn(i, "NO_HADOCONT"));			// 계약번호
        				this.dsSaveBottom.setColumn(nrow, "DS_HADOCONT", this.dsListBottom.getColumn(i, "DS_HADOCONT"));			// 계약명
        				this.dsSaveBottom.setColumn(nrow, "YM_WORK", this.dsListBottom.getColumn(i, "YM_WORK"));					// 기성월
        				this.dsSaveBottom.setColumn(nrow, "CD_VENDOR", this.dsListBottom.getColumn(i, "CD_VENDOR"));				// 업체코드
        				this.dsSaveBottom.setColumn(nrow, "DS_VENDOR", this.dsListBottom.getColumn(i, "DS_VENDOR"));				// 업체
        				this.dsSaveBottom.setColumn(nrow, "NO_SLIP", this.dsListBottom.getColumn(i, "NO_SLIP"));					// 전표번호
        				this.dsSaveBottom.setColumn(nrow, "AM_GISUNG_TOT", this.dsListBottom.getColumn(i, "AM_GISUNG_TOT"));		// 기성금액
        				this.dsSaveBottom.setColumn(nrow, "AM_WAIT", this.dsListBottom.getColumn(i, "AM_WAIT"));					// 보류금액
        				this.dsSaveBottom.setColumn(nrow, "AM_GISUNG_JIBUL", this.dsListBottom.getColumn(i, "AM_GISUNG_JIBUL"));	// 지불금액
        				this.dsSaveBottom.setColumn(nrow, "DS_BIGO", this.dsListBottom.getColumn(i, "DS_BIGO"));					// 비고
        				this.dsSaveBottom.setColumn(nrow, "DT_REQ", this.dsListBottom.getColumn(i, "DT_REQ"));						// 집행일자
        				this.dsSaveBottom.setColumn(nrow, "AM_AMT", this.dsListBottom.getColumn(i, "AM_AMT"));						// 집행금액
        				this.dsSaveBottom.setColumn(nrow, "DS_BANK", this.dsListBottom.getColumn(i, "DS_BANK"));					// 은행
        				this.dsSaveBottom.setColumn(nrow, "NO_ACCOUNT", this.dsListBottom.getColumn(i, "NO_ACCOUNT"));				// 계좌번호
        				this.dsSaveBottom.setColumn(nrow, "NO_REQUEST", this.dsListBottom.getColumn(i, "NO_REQUEST"));				// 집행번호
        			break;
        		}
        	}

        	if (this.dsSaveBottom.rowcount == 0) return;

        	var strSvcId    = "savebottom";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "btm_save=dsSaveBottom";
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
        	//this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /************************************************************************
         * dxGrid_TopRight 컨트롤 이벤트(우측)
         ************************************************************************/
        this.fnSelectTopRight = function() {
        	if (this.dxGrid_TopLeft.rowcount == 0 || this.dxGrid_TopLeft.currentrow < 0) return false;

        	this.dsListTopRight.clearData();

        	var idbtNo = this.dsListTopLeft.getColumn(this.dsListTopLeft.rowposition, "NO_IDBT_NO"); // 관리번호
        	var trblNo = this.dsListTopLeft.getColumn(this.dsListTopLeft.rowposition, "DS_TRBL_NO"); // 사건번호

        	if (this.gfnIsNull(idbtNo)) {
        		return false;
        	}

        	if (this.gfnIsNull(trblNo)) {
        		return false;
        	}

        	this.gfnGridBeforeSelect(this.dxGrid_TopRight);

        	this.dsSelectTopRight.clearData();

        	this.dsSelectTopRight.addRow();

        	this.dsSelectTopRight.setColumn(0, "NO_IDBT_NO", idbtNo);
        	this.dsSelectTopRight.setColumn(0, "DS_TRBL_NO", trblNo);

        	var strSvcId    = "selecttopright";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "tr_select=dsSelectTopRight";
        	var outData     = "dsListTopRight=tr_select0";
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

        /************************************************************************
         * dxGrid_Bottom 컨트롤 이벤트(하단)
         ************************************************************************/
        this.fnSelectBottom = function() {
        	//if (this.dxGrid_TopRight.rowcount == 0 || this.dxGrid_TopRight.currentrow < 0) return false;

        	this.dsListBottom.clearData();

        	var idbtNo = this.dsListTopLeft.getColumn(this.dsListTopLeft.rowposition, "NO_IDBT_NO"); 		// 관리번호
        	var cdMangSpot = this.gfnIsNull(this.dsListTopRight.getColumn(this.dsListTopRight.rowposition, "CD_MANG_SPOT")) ? ""
        									: this.dsListTopRight.getColumn(this.dsListTopRight.rowposition, "CD_MANG_SPOT"); 	// 관련현장번호

        	if (this.gfnIsNull(idbtNo)) {
        		return false;
        	}

        	if (this.gfnIsNull(cdMangSpot)) {
        		return false;
        	}

        	this.gfnGridBeforeSelect(this.dxGrid_Bottom);

        	this.dsSelectBottom.clearData();

        	this.dsSelectBottom.addRow();
        	this.dsSelectBottom.setColumn(0, "TY_WRK", "Q");
        	this.dsSelectBottom.setColumn(0, "NO_IDBT_NO", idbtNo);
        	this.dsSelectBottom.setColumn(0, "CD_SITE", cdMangSpot);

        	var strSvcId    = "selectbottom";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "btm_select=dsSelectBottom";
        	var outData     = "dsListBottom=btm_select0";
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

        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "selecttopleft") {
        		this.gfnGridAfterSelect(this.dxGrid_TopLeft);
        	}else if (svcID == "selecttopright") {
        		this.gfnGridAfterSelect(this.dxGrid_TopRight);
        	}else if(svcID == "selectbottom") {
        		this.gfnGridAfterSelect(this.dxGrid_Bottom);
        	}else if(svcID == "savebottom") {
        		if (errorCode == 0) {
        			this.fnSelectBottom();
        		}else {
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
         this.dsListTopLeft_canrowposchange = function(obj,e) {
        	var can_rowchange = true;

        	for (var i = 0; i < this.dxGrid_Bottom.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListBottom, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        		}
        	}

        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsListTopLeft_canrowposchange_callback");
        	}
        	return can_rowchange;
        }

        this.dsListTopLeft_canrowposchange_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsListTopLeft.set_enableevent(false);
        		this.dsListTopLeft.set_rowposition(this._row);
        		this.dsListTopLeft.set_enableevent(true);
        	}
        }

        this.dsListTopRight_canrowposchange = function(obj,e) {
        	var can_rowchange = true;
        	for (var i = 0; i < this.dxGrid_Bottom.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListBottom, i);
        		if (flag == "I" || flag == "U" || flag == "D") {
        			can_rowchange = false;
        		}
        	}

        	if(!can_rowchange) {
        		this._row = e.newrow;
        		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsListTopRight_canrowposchange_callback");
        	}
        	return can_rowchange;
        }

        this.dsListTopRight_canrowposchange_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsListTopRight.set_enableevent(false);
        		this.dsListTopRight.set_rowposition(this._row);
        		this.dsListTopRight.set_enableevent(true);
        	}
        }

        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {
        		/*this.FormBtns.SubSelect.click();*/

        		if(obj.name == "objGrid_TopLeft")
        		{
        			this.fnSelectTopRight();
        			this.fnSelectBottom();
        		}else if(obj.name == "objGrid_TopRight"){
        			this.fnSelectBottom();
        		}else if(obj.name =="objGrid_Bottom"){
        			var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid_Bottom, e.cell);	// 컬럼 인덱스로 컬럼명 가져오기
        			var rows = obj.getSelectedDatasetRows();
        			var sum = 0;
        			var bRet = "";
        			var nGrdSpcRow = this.dsGridSpec.findRow("DS_FIELD", colnm);

        			for(var i = 0; i < rows.length; i++) {
        				/*var am = this.dsList.getColumn(rows[i], colnm);*/
        				var am = this.gfnIsNull(this.dsListBottom.getColumn(rows[i], colnm)) ? 0 : this.dsListBottom.getColumn(rows[i], colnm);

        				//bRet = nexacro.isNumeric(am);
        				bRet = isNaN(am); // 문자:true, 숫자:false

        				//alert(am+":::"+bRet);
        				if(bRet){
        					break;
        				}

        				if(this.dsGridSpec.getColumn(nGrdSpcRow, "TY_CELLTYPE") == "TEXT"){
        					bRet = true;
        				}else{
        					// TY_CELLTYPE이 "INT", "DOUBLE"인 경우에 적용
        					if(!this.gfnIsNull(am)) {
        						sum += am;
        					}
        				}
        			}

        			var colDS_SITE = this.dxGrid_Bottom.getBindCellIndex("body", "DS_SITE");

        			if(!bRet){	// 숫자면 합계표시, 문자면 null
        				this.dxGrid_Bottom.setCellProperty("summ", colDS_SITE, "text", "선택합계=" + this.gfnAppendComma(sum));
        			}else{
        				this.dxGrid_Bottom.setCellProperty("summ", colDS_SITE, "text", "");
        			}
        		}
        		obj.oldrow = -1;
        	}
        };

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	switch(id) {
        		case "DAX_CFDEPT_COMMON" :
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		break;
        	}
        	return true;
        }


        this.fnGrid_ExpandUp = function(obj, e) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	if(colnm == "DS_FILE") {
        		// 최초 작성시엔 NO_SEQ가 없기 때문에 저장 후에 파일 첨부를 진행하여야 함.
        		// CD_DIR에 넣어줄 값이 없기에 저장 후 진행!
        		if(this.gfnGetFlag(this.dsListTopLeft, e.row) == "I"){
        			this.gfnAlert("저장 후 파일첨부 진행.");
        			return false;
        		}

        		var fileManager = {};
        		fileManager.CD_GUBUN = "DV01";
        		fileManager.CD_DIR = [this.dsListTopLeft.getColumn(e.row, "NO_IDBT_NO")];
        		fileManager.IS_READONLY = false;
        		this.gfnFileManager(fileManager, "fnFileCallback");
        	}
        }

        this.fnFileCallback = function(strID, val) {
        	// val.IsChange : 변경여부, val.Cnt : 파일개수

        	// 변경시 조회를 다시 하거나
        // 	if(val.IsChange == true) {
        // 		this.FormBtns.Select.click();
        // 	}

        	// 파일개수를 다시 셋팅
        	this.dsListTopLeft.set_enableevent(false);

        	if(val.Cnt == 0) {
        		this.dsListTopLeft.setColumn(this.dsListTopLeft.rowposition, "DS_FILE", "첨부");
        	} else {
        		this.dsListTopLeft.setColumn(this.dsListTopLeft.rowposition, "DS_FILE", "첨부(" + val.Cnt + ")");
        	}

        	this.dsListTopLeft.set_enableevent(true);
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid_TopLeft);
        		this.gfnGridClear(this.dxGrid_TopRight);
        		this.gfnGridClear(this.dxGrid_Bottom);
        	}
        }

        this.fnGroup = function(obj,e) {
        	var param = {};
        	param.CD_SYSTEM =  this.dsListTopLeft.getColumn(this.dsListTopLeft.rowposition, "CD_SYSTEM");
        	param.DS_SYSTEM =   this.dsListTopLeft.getColumn(this.dsListTopLeft.rowposition, "DS_SYSTEM");

        	this.gfnFormOpen("DZU", "DZU_MODULEGROUP", "", param);
        }

        this.divData_divSplitter1_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter1");
        	return true;
        };

        this.divData_divSplitter2_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter2");
        	return true;
        };

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter1") {
        		this.divData.form.divSplitter1.set_top(e.clienty);
        		this.divData.form.divSplitter2.set_height(e.clienty);
        		this.divData.form.resetScroll();
        	}

        	if(e.userdata == "splitter2") {
        		this.divData.form.divSplitter2.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.dsListBottom_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		if(e.columnid == "AM_WAIT") {
        			var am_Gisung_Tot = this.dsListBottom.getColumn(e.row, "AM_GISUNG_TOT");
        			var am_Gisung_Jibul = nexacro.toNumber(am_Gisung_Tot, 0) - nexacro.toNumber(e.newvalue, 0);

        			this.dsListBottom.setColumn(e.row, "AM_GISUNG_JIBUL", am_Gisung_Jibul);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter2.addEventHandler("ondrag",this.divData_divSplitter2_ondrag,this);
            this.divData.form.divSplitter1.addEventHandler("ondrag",this.divData_divSplitter1_ondrag,this);
            this.dsListTopLeft.addEventHandler("canrowposchange",this.dsListTopLeft_canrowposchange,this);
            this.dsListTopRight.addEventHandler("canrowposchange",this.dsListTopRight_canrowposchange,this);
            this.dsListBottom.addEventHandler("canrowposchange",this.dsListBottom_canrowposchange,this);
            this.dsListBottom.addEventHandler("onvaluechanged",this.dsListBottom_onvaluechanged,this);
        };
        this.loadIncludeScript("DWD_ACCD.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
