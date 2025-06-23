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
            this.set_titletext("기타법인차입금등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFCPR_EIS_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DFCPR_EIS_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DFCPR_EIS_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DFCPR_EIS_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CHAIP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CHAIP","10","4","80","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("차입종류코드");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CHAIP","staCD_CHAIP:10","4","200","20",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","10",null,null,"0","0",null,null,null,null,this);
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

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFC_EIS.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	//this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
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

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	/* 조회조건
        	this.ccfCD_CHAIP.CodeFindName = "DFX_CFCHAIPKIND";
        	this.ccfCD_CHAIP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CHAIP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	*/
        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFC_EIS");

        	//this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("NO_SEQ", "int");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("DS_CORP", "string");
        	this.dsInsert.addColumn("DS_CHAIP", "string");
        	this.dsInsert.addColumn("DS_MULGYUN", "string");
        	this.dsInsert.addColumn("DS_VENDOR", "string");
        	this.dsInsert.addColumn("FR_CHAIP", "string");
        	this.dsInsert.addColumn("TO_CHAIP", "string");
        	this.dsInsert.addColumn("TY_RAISE", "string");
        	this.dsInsert.addColumn("YN_HANDO", "string");
        	this.dsInsert.addColumn("YN_MAIN", "string");
        	this.dsInsert.addColumn("AM_SANG", "bigdecimal");
        	this.dsInsert.addColumn("AM_JAN", "bigdecimal");
        	this.dsInsert.addColumn("RT_EZA", "bigdecimal");
        	this.dsInsert.addColumn("AM_CHAMAX", "bigdecimal");
        	this.dsInsert.addColumn("AM_GAM", "bigdecimal");
        	this.dsInsert.addColumn("AM_TRADE", "bigdecimal");
        	this.dsInsert.addColumn("RM_BIGO", "string");
        	this.dsInsert.addColumn("ID_USER", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("DS_CORP", "string");
        	this.dsUpdate.addColumn("DS_CHAIP", "string");
        	this.dsUpdate.addColumn("DS_MULGYUN", "string");
        	this.dsUpdate.addColumn("DS_VENDOR", "string");
        	this.dsUpdate.addColumn("FR_CHAIP", "string");
        	this.dsUpdate.addColumn("TO_CHAIP", "string");
        	this.dsUpdate.addColumn("TY_RAISE", "string");
        	this.dsUpdate.addColumn("YN_HANDO", "string");
        	this.dsUpdate.addColumn("YN_MAIN", "string");
        	this.dsUpdate.addColumn("AM_SANG", "bigdecimal");
        	this.dsUpdate.addColumn("AM_JAN", "bigdecimal");
        	this.dsUpdate.addColumn("RT_EZA", "bigdecimal");
        	this.dsUpdate.addColumn("AM_CHAMAX", "bigdecimal");
        	this.dsUpdate.addColumn("AM_GAM", "bigdecimal");
        	this.dsUpdate.addColumn("AM_TRADE", "bigdecimal");
        	this.dsUpdate.addColumn("RM_BIGO", "string");
        	this.dsUpdate.addColumn("NO_SEQ", "bigdecimal");
        	this.dsUpdate.addColumn("ID_USER", "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("NO_SEQ", "bigdecimal");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "SEQ", 0);

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
        				this.dsInsert.setColumn(nrow, "DS_CORP", this.dsList.getColumn(i, "DS_CORP"));
        				this.dsInsert.setColumn(nrow, "DS_CHAIP", this.dsList.getColumn(i, "DS_CHAIP"));
        				this.dsInsert.setColumn(nrow, "DS_MULGYUN", this.dsList.getColumn(i, "DS_MULGYUN"));
        				this.dsInsert.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        				this.dsInsert.setColumn(nrow, "FR_CHAIP", this.dsList.getColumn(i, "FR_CHAIP"));
        				this.dsInsert.setColumn(nrow, "TO_CHAIP", this.dsList.getColumn(i, "TO_CHAIP"));
        				this.dsInsert.setColumn(nrow, "TY_RAISE", this.dsList.getColumn(i, "TY_RAISE"));
        				this.dsInsert.setColumn(nrow, "YN_HANDO", this.dsList.getColumn(i, "YN_HANDO"));
        				this.dsInsert.setColumn(nrow, "YN_MAIN", this.dsList.getColumn(i, "YN_MAIN"));
        				this.dsInsert.setColumn(nrow, "AM_SANG", this.dsList.getColumn(i, "AM_SANG"));
        				this.dsInsert.setColumn(nrow, "AM_JAN", this.dsList.getColumn(i, "AM_JAN"));
        				this.dsInsert.setColumn(nrow, "RT_EZA", this.dsList.getColumn(i, "RT_EZA"));
        				this.dsInsert.setColumn(nrow, "AM_CHAMAX", this.dsList.getColumn(i, "AM_CHAMAX"));
        				this.dsInsert.setColumn(nrow, "AM_GAM", this.dsList.getColumn(i, "AM_GAM"));
        				this.dsInsert.setColumn(nrow, "AM_TRADE", this.dsList.getColumn(i, "AM_TRADE"));
        				this.dsInsert.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "DS_CORP", this.dsList.getColumn(i, "DS_CORP"));
        				this.dsUpdate.setColumn(nrow, "DS_CHAIP", this.dsList.getColumn(i, "DS_CHAIP"));
        				this.dsUpdate.setColumn(nrow, "DS_MULGYUN", this.dsList.getColumn(i, "DS_MULGYUN"));
        				this.dsUpdate.setColumn(nrow, "DS_VENDOR", this.dsList.getColumn(i, "DS_VENDOR"));
        				this.dsUpdate.setColumn(nrow, "FR_CHAIP", this.dsList.getColumn(i, "FR_CHAIP"));
        				this.dsUpdate.setColumn(nrow, "TO_CHAIP", this.dsList.getColumn(i, "TO_CHAIP"));
        				this.dsUpdate.setColumn(nrow, "TY_RAISE", this.dsList.getColumn(i, "TY_RAISE"));
        				this.dsUpdate.setColumn(nrow, "YN_HANDO", this.dsList.getColumn(i, "YN_HANDO"));
        				this.dsUpdate.setColumn(nrow, "YN_MAIN", this.dsList.getColumn(i, "YN_MAIN"));
        				this.dsUpdate.setColumn(nrow, "AM_SANG", this.dsList.getColumn(i, "AM_SANG"));
        				this.dsUpdate.setColumn(nrow, "AM_JAN", this.dsList.getColumn(i, "AM_JAN"));
        				this.dsUpdate.setColumn(nrow, "RT_EZA", this.dsList.getColumn(i, "RT_EZA"));
        				this.dsUpdate.setColumn(nrow, "AM_CHAMAX", this.dsList.getColumn(i, "AM_CHAMAX"));
        				this.dsUpdate.setColumn(nrow, "AM_GAM", this.dsList.getColumn(i, "AM_GAM"));
        				this.dsUpdate.setColumn(nrow, "AM_TRADE", this.dsList.getColumn(i, "AM_TRADE"));
        				this.dsUpdate.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsUpdate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
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
        	/*
        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SYSTEM"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SYSTEM.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("시스템을 입력하세요.", "fnVaidateCallback");
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
        		//trace(this.dsList.saveXML());
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
         /*
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_CHAIP") {
        		dsUserParam.setColumn(nrow, "YN_USE", '');
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	this.fnSearchInit();

        }

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	if(id = "DFX_CFCHAIPKIND"){
        		dsUserParam.setColumn(nrow, "YN_USE", "N");
        	}

        	return true;
        };
        */
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

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
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DFC_EIS.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
