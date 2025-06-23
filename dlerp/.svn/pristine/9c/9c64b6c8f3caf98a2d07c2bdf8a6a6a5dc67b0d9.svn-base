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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DCDPR_VENDORMAGAM_SCORE_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DCDPR_VENDORMAGAM_SCORE_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YR_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_SYSTEM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staYR_MAGAM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("평가년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_MAGAM","staYR_MAGAM:0.0","10.0","70","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_SEQ","ctclYR_MAGAM:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DCX_CFEVALUE_NOSEQ");
            obj.getSetter("CDTextWidth").set("40");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","ccfNO_SEQ:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("업체코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("ctxtDS_VENDOR","staCD_VENDOR:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_enable("false");
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
            obj = new BindItem("item0","divSearch.form.ctclYR_MAGAM.form.TextBox","value","dsSearch","YR_MAGAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfNO_SEQ.form.CDTextBox","value","dsSearch","NO_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctxtDS_VENDOR","value","dsSearch","DS_VENDOR");
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
        this.registerScript("DCD_EVALUEMAGAM_BONSA_HSE_DETAIL.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "CD_DEPT", "HSE");

        	if(!this.gfnIsNull(this.getOwnerFrame().YR_MAGAM) && !this.gfnIsNull(this.getOwnerFrame().NO_SEQ)
        	&& !this.gfnIsNull(this.getOwnerFrame().CD_VENDOR) && !this.gfnIsNull(this.getOwnerFrame().TY_SYSTEM))
        	{
        		this.dsSearch.setColumn(0, "YR_MAGAM", this.getOwnerFrame().YR_MAGAM);
        		this.dsSearch.setColumn(0, "NO_SEQ", this.getOwnerFrame().NO_SEQ);
        		this.divSearch.form.ccfNO_SEQ.form.DSTextBox.set_value(this.getOwnerFrame().DS_SEQ);
        		this.dsSearch.setColumn(0, "CD_VENDOR", this.getOwnerFrame().CD_VENDOR);
        		this.dsSearch.setColumn(0, "DS_VENDOR", this.getOwnerFrame().DS_VENDOR);
        		this.dsSearch.setColumn(0, "TY_SYSTEM", this.getOwnerFrame().TY_SYSTEM);

        		this.FormBtns.Select.click();
        	}

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
        //	this.divSearch.form.ccfNO_SEQ.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DC", "DCD_EVALUEMAGAM_BONSA_HSE_DETAIL");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	// 셀 수정가능 여부
        	this.dxGrid.EnterCell = "fnGrid_EnterCell";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YR_MAGAM", "string");
        	this.dsSelect.addColumn("NO_SEQ", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("CD_DEPT", "string");
        	this.dsSelect.addColumn("TY_SYSTEM", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "string");
        	this.dsSave.addColumn("SEQNO", "bigdecimal");
        	this.dsSave.addColumn("YR_MAGAM", "string");
        	this.dsSave.addColumn("NO_SEQ", "string");
        	this.dsSave.addColumn("CD_VENDOR", "string");
        	this.dsSave.addColumn("CD_DEPT", "string");
        	this.dsSave.addColumn("TY_SCORE", "string");
        	this.dsSave.addColumn("CD_MAIN", "string");
        	this.dsSave.addColumn("CD_DETAIL", "string");
        	this.dsSave.addColumn("AM_SCORE", "bigdecimal");
        	this.dsSave.addColumn("RM_BIGO", "string");
        	this.dsSave.addColumn("TY_SYSTEM", "string");
        	this.dsSave.addColumn("CD_STANDARD", "string");
        	this.dsSave.addColumn("DS_STANDARD", "string");

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

        	this.dsSelect.setColumn(0, "YR_MAGAM", this.dsSearch.getColumn(0, "YR_MAGAM"));
        	this.dsSelect.setColumn(0, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        	this.dsSelect.setColumn(0, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        	this.dsSelect.setColumn(0, "TY_SYSTEM", this.dsSearch.getColumn(0, "TY_SYSTEM"));

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

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_WRK", flag);
        				this.dsSave.setColumn(nrow, "SEQNO", this.dsList.getColumn(i, "SEQNO"));
        				this.dsSave.setColumn(nrow, "YR_MAGAM", this.dsSearch.getColumn(0, "YR_MAGAM"));
        				this.dsSave.setColumn(nrow, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        				this.dsSave.setColumn(nrow, "CD_VENDOR", this.dsSearch.getColumn(0, "CD_VENDOR"));
        				this.dsSave.setColumn(nrow, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        				this.dsSave.setColumn(nrow, "TY_SCORE", this.dsList.getColumn(i, "TY_SCORE"));
        				this.dsSave.setColumn(nrow, "CD_MAIN", this.dsList.getColumn(i, "CD_MAIN"));
        				this.dsSave.setColumn(nrow, "CD_DETAIL", this.dsList.getColumn(i, "CD_DETAIL"));
        				this.dsSave.setColumn(nrow, "AM_SCORE", this.dsList.getColumn(i, "AM_SCORE"));
        				this.dsSave.setColumn(nrow, "RM_BIGO", this.dsList.getColumn(i, "RM_BIGO"));
        				this.dsSave.setColumn(nrow, "TY_SYSTEM", this.dsSearch.getColumn(0, "TY_SYSTEM"));
        				this.dsSave.setColumn(nrow, "CD_STANDARD", this.dsList.getColumn(i, "CD_STANDARD"));
        				this.dsSave.setColumn(nrow, "DS_STANDARD", this.dsList.getColumn(i, "DS_STANDARD"));
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

        // 	if (this.gfnIsNull(this.dsSearch.getColumn(0,"YR_MAGAM"))) {
        // 		validate = false;
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.divSearch.form.ctclYR_MAGAM.form.TextBox.setFocus();
        // 		}
        // 		this.gfnAlert("평가년도를 입력하세요.", "fnVaidateCallback");
        // 	}
        // 	else if (this.gfnIsNull(this.dsSearch.getColumn(0,"NO_SEQ"))) {
        // 		validate = false;
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.divSearch.form.ccfNO_SEQ.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("평가시기를 입력하세요.", "fnVaidateCallback");
        // 	}

        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
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
        // 	if(id == "ccfNO_SEQ")
        // 	{
        // 		dsUserParam.setColumn(nrow, "CD_SYSTEM", "DC");
        // 		dsUserParam.setColumn(nrow, "CD_TYPE", "D01");
        //      dsUserParam.setColumn(nrow, "YR_MAGAM",this.dsSearch.getColumn(0, "YR_MAGAM"));
        // 		dsUserParam.setColumn(nrow, "TY_SYSTEM", this.FormInfo.DS_PARAM);
        // 	}

        	return true;
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	if(id == "DCX_VENDORMAGAM_MAINSCORE"){
        		if(this.gfnIsNull(this.dsList.getColumn(nrow, "TY_SCORE")))
        		{
        			this.gfnAlert("평가/경감을 입력해주세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT", this.dsSearch.getColumn(0, "CD_DEPT"));
        		dsUserParam.setColumn(nrow, "TY_SCORE", this.dsList.getColumn(this.dsList.rowposition, "TY_SCORE"));
        	}
        	else if(id == "DCX_VENDORMAGAM_DETAILSCORE"){
        		if(this.gfnIsNull(this.dsList.getColumn(nrow, "CD_MAIN")))
        		{
        			this.gfnAlert("코드를 입력해주세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_MAINCODE", this.dsList.getColumn(this.dsList.rowposition, "CD_MAIN"));
        	}
        	else if(id == "DCX_EVALUE_STANDARD")
        	{
        		dsUserParam.setColumn(nrow, "YR_MAGAM", this.dsList.getColumn(this.dsList.rowposition, "YR_MAGAM"));
        		dsUserParam.setColumn(nrow, "NO_SEQ", this.dsSearch.getColumn(0, "NO_SEQ"));
        		dsUserParam.setColumn(nrow, "CD_EVALUEKIND", this.dsList.getColumn(this.dsList.rowposition, "CD_EVALUEKIND"));
        		dsUserParam.setColumn(nrow, "CD_CODE", this.dsList.getColumn(this.dsList.rowposition, "CD_MAIN"));
        		dsUserParam.setColumn(nrow, "CD_CODE_DTL", this.dsList.getColumn(this.dsList.rowposition, "CD_DETAIL"));
        		dsUserParam.setColumn(nrow, "TY_SYSTEM", this.FormInfo.DS_PARAM);
        	}
        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData){
        	if(id == "DCX_VENDORMAGAM_MAINSCORE"){
        		this.dsList.setColumn(this.dsList.rowposition, "CD_DETAIL", "");
        		this.dsList.setColumn(this.dsList.rowposition, "DS_DETAIL", "");
        		this.dsList.setColumn(this.dsList.rowposition, "AM_SCORE", "");
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

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.newvalue != e.oldvalue)
        	{
        		if(e.columnid == "TY_SCORE")
        		{
        			this.dsList.setColumn(e.row, "CD_MAIN", "");
        			this.dsList.setColumn(e.row, "DS_MAIN", "");
        			this.dsList.setColumn(e.row, "CD_DETAIL", "");
        			this.dsList.setColumn(e.row, "DS_DETAIL", "");
        			this.dsList.setColumn(e.row, "AM_SCORE", "");
        			this.dsList.setColumn(e.row, "AM_SCORE_LMT", "");
        		} else if (e.columnid == "AM_SCORE") {
        // 			if(this.dsList.getColumn(e.row, "AM_SCORE_LMT") < e.newvalue) {
        // 				this.gfnAlert("최대 점수를 초과해서 입력할 수 없습니다.");
        // 				this.dsList.setColumn(e.row, "AM_SCORE", e.oldvalue);
        // 			}
        			if(nexacro.toNumber(this.dsList.getColumn(e.row, "AM_STANDARD"),0) > 0) {
        				if(nexacro.toNumber(this.dsList.getColumn(e.row, "AM_STANDARD"),0) < nexacro.toNumber(this.dsList.getColumn(e.row, "AM_SCORE"),0)) {
        					this.gfnAlert("배점기준 점수보다 크게 수정할 수 없습니다.");
        					this.dsList.setColumn(e.row, e.columnid, e.oldvalue);
        					return;
        				}
        			} else if(nexacro.toNumber(this.dsList.getColumn(e.row, "AM_STANDARD"),0) < 0) {
        				if(nexacro.toNumber(this.dsList.getColumn(e.row, "AM_STANDARD"),0) > nexacro.toNumber(this.dsList.getColumn(e.row, "AM_SCORE"),0)) {
        					this.gfnAlert("배점기준 점수보다 작게 수정할 수 없습니다.");
        					this.dsList.setColumn(e.row, e.columnid, e.oldvalue);
        					return;
        				}
        			}
        		}
        	}
        };

        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);

        	if(colnm == "AM_SCORE"){
        		if(this.dsList.getColumn(row, "YN_DIRECT") == "Y"){
        			return true;
        		}
        		return false;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DCD_EVALUEMAGAM_BONSA_HSE_DETAIL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
