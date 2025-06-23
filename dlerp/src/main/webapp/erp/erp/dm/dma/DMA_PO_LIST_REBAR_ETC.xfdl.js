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
            this.set_titletext("철근구매현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DMAPR_PO_LIST_REBAR_ETC_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.getSetter("FitToContents").set("true");
            obj.getSetter("AutoSet").set("false");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_FR_TO","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("생성일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FR","staDT_FR_TO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta_range","ctclDT_FR:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","sta_range:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_FR","value","dsSearch","DT_FR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DMA_PO_LIST_REBAR_ETC.xfdl", function() {
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
        	this.dsSearch.setColumn(0, "DT_FR", this.gfnAddMonth(today, -1));
        	this.dsSearch.setColumn(0, "DT_TO", today);
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
        	this.dxGrid.AfterInit = "fnGrid_AfterInit";
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DM", "DMA_PO_LIST_REBAR_ETC");

        	this.fnSetGridSummary();
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("DT_FR", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
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

        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "DT_FR", this.dsSearch.getColumn(0, "DT_FR"));
        	this.dsSelect.setColumn(0, "DT_TO", this.dsSearch.getColumn(0, "DT_TO"));

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
        // 	// 그리드 필수항목 체크
        // 	if (!this.gfnGridValidate(this.dxGrid)) return;
        //
        // 	this.dxGrid.updateToDataset();
        //
        // 	this.dsInsert.clearData();
        // 	this.dsUpdate.clearData();
        // 	this.dsDelete.clearData();
        //
        // 	for (var i = 0; i < this.dsList.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsList, i);
        // 		switch(flag) {
        // 			case "I":
        // 				var nrow = this.dsInsert.addRow();
        // // 				this.dsInsert.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        // // 				this.dsInsert.setColumn(nrow, "NO_CORP", this.dsList.getColumn(i, "NO_CORP").replace(/-/g, ''));
        // // 				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        // 				break;
        //
        // 			case "U":
        // 				var nrow = this.dsUpdate.addRow();
        // // 				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        // // 				this.dsUpdate.setColumn(nrow, "NO_CORP", this.dsList.getColumn(i, "NO_CORP").replace(/-/g, ''));
        // // 				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        // 				break;
        //
        // 			case "D":
        // 				var nrow = this.dsDelete.addRow();
        // //				this.dsDelete.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        // 				break;
        // 		}
        // 	}
        //
        // 	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;
        //
        // 	// save SP 한개로 사용하는 경우
        // 	/*
        // 	this.dsSave.clearData();
        //
        // 	for (var i = 0; i < this.dsList.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsList, i);
        // 		switch(flag) {
        // 			case "I":
        // 			case "U":
        // 			case "D":
        // 				var nrow = this.dsSave.addRow();
        // 				this.dsSave.setColumn(nrow, "TY_FLAG", flag);
        // 				this.dsSave.setColumn(nrow, "NO_IDX", this.dsList.getColumn(i, "NO_IDX"));
        // 				break;
        // 		}
        // 	}
        //
        // 	if (this.dsSave.rowcount == 0) return;
        // 	*/
        //
        // 	var strSvcId    = "save";
        // 	var strSvcType  = "save";
        // 	var inProc		= "_dsProc";
        // 	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
        // 	//var inData      = "save=dsSave";
        // 	var outData     = "";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcType , 	// transaction을 요청할 구분
        // 						inProc,			// Procedure 정보 Dataset 이름
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); // 통신방법 정의 [생략가능]
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

        // 	if (this.gfnIsNull(this.dsSearch.getColumn(0,"CD_SITE"))) {
        // 		validate = false;
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.divSearch.form.ccfCD_SITE.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("현장코드를 입력하세요.", "fnVaidateCallback");
        // 	}

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
        // 	else if(svcID == "save") {
        // 		if (errorCode == 0) {
        // 			this.FormBtns.Select.click();
        // 		} else {
        // 			this.gfnAlert(errorMsg);
        // 		}
        // 	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_AfterInit = function(obj) {


        	// 소계부분 커스텀
        	//var colDS_GUBUN = this.dxGrid.getBindCellIndex("body", "DS_GUBUN");
        //	this.dxGrid.setCellProperty("body", colDS_GUBUN, "expr", "expr:dataset.getRowLevel(currow)==1?'소계':DS_GUBUN");
        	//this.dxGrid.setCellProperty("summ", colDS_GUBUN, "expr", "expr:dataset.getRowLevel(currow)==1?'소계':DS_GUBUN");

        	// 총계부분 커스텀
        // 	this.dxGrid.setCellProperty("summ", colNM_DAM, "textAlign", "center");
        // 	this.dxGrid.setCellProperty("summ", colNM_DAM, "text", "총계");

        	// 소계부분 decoratetext 타입사용 (bold, italic 등 적용하기)
        	// 스타일(tag)부분은 도움말(F1) Grid > Objects > GridCellControl > dispalytype 참고
        	//this.dxGrid.setCellProperty("body", colNM_DAM, "displaytype", "expr:dataset.getRowLevel(currow)==1?'decoratetext':'text'"); // text 부분은 해당 컬럼 타입에 맞게
        	//this.dxGrid.setCellProperty("body", colNM_DAM, "expr", "expr:dataset.getRowLevel(currow)==1?'<b v=\"true\">소계</b>':NM_DAM");

        // 	this.dxGrid.set_enableredraw(false);
        // 	this.gfnGridColumnColor(this.dxGrid, "ST_PROGRESS", "Red", "ST_PROGRESS == '개발의뢰'");
        // 	this.gfnGridColumnColor(this.dxGrid, "ST_PROGRESS", "Blue", "ST_PROGRESS == '접수완료' || ST_PROGRESS == '개발중'");
        // 	this.gfnGridColumnColor(this.dxGrid, "ST_PROGRESS", "HotPink", "ST_PROGRESS == '개발완료'");
        // 	this.dxGrid.set_enableredraw(true);
        }
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

        this.fnSetGridSummary = function()
        {
        	var colDS_GUBUN = this.dxGrid.getBindCellIndex("body", "DS_GUBUN");
        	var colAM_HADO = this.dxGrid.getBindCellIndex("body", "AM_HADO");

        	// 합계 추가
        	this.dxGrid.setCellProperty("summ", colDS_GUBUN, "textAlign", "center");
        	this.dxGrid.setCellProperty("summ", colDS_GUBUN, "text", "합계");
        	this.dxGrid.setCellProperty("summ", colDS_GUBUN, "font", "bold 9pt Dotum");
        	this.dxGrid.setCellProperty("summ", colAM_HADO, "font", "bold 9pt Dotum");

        	var colCnt = this.dxGrid.getCellCount("summ");

        	// 철근 합계 추가.
        	var nrow = 0;
        	this.dxGrid.insertContentsRow("summary",0);
        	this.dxGrid.setCellProperty("summ", nrow * colCnt + colDS_GUBUN, "textAlign", "center");
        	this.dxGrid.setCellProperty("summ", nrow * colCnt + colAM_HADO, "textAlign", "right");
        	this.dxGrid.setCellProperty("summ", nrow * colCnt + colDS_GUBUN, "text", "철근");
        	this.dxGrid.setCellProperty("summ", nrow * colCnt + colAM_HADO, "text", "expr:dataset.getCaseSum(\"DS_GUBUN=='철근'\",\"AM_HADO\")");
        	this.dxGrid.setCellProperty("summ", nrow * colCnt + colAM_HADO, "displaytype", "mask");
        	this.dxGrid.setCellProperty("summ", nrow * colCnt + colAM_HADO, "maskeditlimitbymask", "decimal");
        	this.dxGrid.setCellProperty("summ", nrow * colCnt + colAM_HADO, "maskeditformat", "#,##0");
        	this.dxGrid.setCellProperty("summ", nrow * colCnt + colAM_HADO, "maskedittype", "number");
        	this.dxGrid.setCellProperty("summ", nrow * colCnt + colDS_GUBUN, "font", "bold 9pt Dotum");
        	this.dxGrid.setCellProperty("summ", nrow * colCnt + colAM_HADO, "font", "bold 9pt Dotum");
        	// 가공비 합계 추가.
        	nrow = 1;
        	this.dxGrid.insertContentsRow("summary",1);
        	this.dxGrid.setCellProperty("summ", nrow * colCnt + colDS_GUBUN, "textAlign", "center");
        	this.dxGrid.setCellProperty("summ", nrow * colCnt + colAM_HADO, "textAlign", "right");
        	this.dxGrid.setCellProperty("summ", nrow * colCnt + colDS_GUBUN, "text", "가공비");
        	this.dxGrid.setCellProperty("summ", nrow * colCnt + colAM_HADO, "text", "expr:dataset.getCaseSum(\"DS_GUBUN=='가공비'\",\"AM_HADO\")");
        	this.dxGrid.setCellProperty("summ", nrow * colCnt + colAM_HADO, "maskeditlimitbymask", "decimal");
        	this.dxGrid.setCellProperty("summ", nrow * colCnt + colAM_HADO, "displaytype", "mask");
        	this.dxGrid.setCellProperty("summ", nrow * colCnt + colAM_HADO, "maskeditlimitbymask", "decimal");
        	this.dxGrid.setCellProperty("summ", nrow * colCnt + colAM_HADO, "maskeditformat", "#,##0");
        	this.dxGrid.setCellProperty("summ", nrow * colCnt + colAM_HADO, "maskedittype", "number");
        	this.dxGrid.setCellProperty("summ", nrow * colCnt + colDS_GUBUN, "font", "bold 9pt Dotum");
        	this.dxGrid.setCellProperty("summ", nrow * colCnt + colAM_HADO, "font", "bold 9pt Dotum");
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DMA_PO_LIST_REBAR_ETC.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
