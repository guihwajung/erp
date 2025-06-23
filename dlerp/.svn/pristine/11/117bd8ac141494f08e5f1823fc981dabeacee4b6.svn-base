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
            this.set_titletext("급호등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAZPR_PAYSTEP_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAZPR_PAYSTEP_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_PAYSTEP\" type=\"STRING\" size=\"256\"/><Column id=\"YN_DELETE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YM_BASE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_DELETE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">%</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"VALUE\">사용</Col></Row><Row><Col id=\"CODE\">Y</Col><Col id=\"VALUE\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYY_WORK","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_text("적용년도");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_WORK","staYY_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stCD_PAYSTEP","ctclYY_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("급호");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_PAYSTEP","stCD_PAYSTEP:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFPAYSTEP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYN_DELETE","ccfCD_PAYSTEP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사용여부");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_DELETE","staYN_DELETE:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsYN_DELETE");
            obj.set_datacolumn("VALUE");
            obj.set_codecolumn("CODE");
            obj.set_value("N");
            obj.set_index("1");
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
            obj = new BindItem("item0","divSearch.form.ctclYY_WORK.form.TextBox","value","dsSearch","YM_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_PAYSTEP.form.CDTextBox","value","dsSearch","CD_PAYSTEP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboYN_DELETE","value","dsSearch","YN_DELETE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAZ_PAYSTEP.xfdl", function() {
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

        	//적용년도 셋팅
        	var today = this.gfnGetDate();
        	this.ctclYY_WORK.form.TextBox.set_value(today.substring(0,6));
        	this.cboYN_DELETE.set_index(0);

        	//화면 로드시 자동조회
        	this.FormBtns.Select.click();
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
        	this.btnExcelUpload = this.gfnFormButtonAdd("ExcelUpload", "fnExcelUpload","엑셀업로드");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_PAYSTEP = this.divSearch.form.ccfCD_PAYSTEP;
        	this.ctclYY_WORK = this.divSearch.form.ctclYY_WORK;
        	this.cboYN_DELETE = this.divSearch.form.cboYN_DELETE;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_PAYSTEP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_PAYSTEP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAZ_PAYSTEP");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_BASE", "string");
        	this.dsSelect.addColumn("CD_PAYSTEP", "string");
        	this.dsSelect.addColumn("YN_DELETE", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("TY_AUTH", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("YM_BASE", "string");
        	this.dsSave.addColumn("CD_PAYSTEP", "string");
        	this.dsSave.addColumn("DS_POSITION", "string");
        	this.dsSave.addColumn("DS_POSITION_PRT", "string");
        	this.dsSave.addColumn("AM_BASE", "bigdecimal");
        	this.dsSave.addColumn("AM_01", "bigdecimal");
        	this.dsSave.addColumn("AM_02", "bigdecimal");
        	this.dsSave.addColumn("AM_03", "bigdecimal");
        	this.dsSave.addColumn("AM_04", "bigdecimal");
        	this.dsSave.addColumn("AM_05", "bigdecimal");
        	this.dsSave.addColumn("AM_06", "bigdecimal");
        	this.dsSave.addColumn("AM_07", "bigdecimal");
        	this.dsSave.addColumn("AM_08", "bigdecimal");
        	this.dsSave.addColumn("AM_09", "bigdecimal");
        	this.dsSave.addColumn("AM_10", "bigdecimal");
        	this.dsSave.addColumn("AM_11", "bigdecimal");
        	this.dsSave.addColumn("AM_12", "bigdecimal");
        	this.dsSave.addColumn("AM_13", "bigdecimal");
        	this.dsSave.addColumn("AM_ETC", "bigdecimal");
        	this.dsSave.addColumn("YN_DELETE", "string");
        	this.dsSave.addColumn("SN_PRINT", "int");
        	this.dsSave.addColumn("CD_PROMOTION", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("TY_AUTH", "string");
        	this.dsSave.addColumn("GR_DEPT", "string");
        	this.dsSave.addColumn("ID_USER", "string");
        	this.dsSave.addColumn("CD_POSITION", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "YM_BASE", this.dsSearch.getColumn(0, "YM_BASE"));
        	this.dsSelect.setColumn(0, "CD_PAYSTEP", this.dsSearch.getColumn(0, "CD_PAYSTEP"));
        	this.dsSelect.setColumn(0, "YN_DELETE", this.dsSearch.getColumn(0, "YN_DELETE"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

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
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
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

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();
        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "YM_BASE", this.fnReplace(this.dsList.getColumn(i, "YM_BASE"), "-"));
        				this.dsSave.setColumn(nrow, "CD_PAYSTEP", this.dsList.getColumn(i, "CD_PAYSTEP"));
        				this.dsSave.setColumn(nrow, "DS_POSITION", this.dsList.getColumn(i, "DS_POSITION"));
        				this.dsSave.setColumn(nrow, "DS_POSITION_PRT", this.dsList.getColumn(i, "DS_POSITION_PRT"));
        				this.dsSave.setColumn(nrow, "AM_BASE", this.dsList.getColumn(i, "AM_BASE"));
        				this.dsSave.setColumn(nrow, "AM_01", this.dsList.getColumn(i, "AM_01"));
        				this.dsSave.setColumn(nrow, "AM_02", this.dsList.getColumn(i, "AM_02"));
        				this.dsSave.setColumn(nrow, "AM_03", this.dsList.getColumn(i, "AM_03"));
        				this.dsSave.setColumn(nrow, "AM_04", this.dsList.getColumn(i, "AM_04"));
        				this.dsSave.setColumn(nrow, "AM_05", this.dsList.getColumn(i, "AM_05"));
        				this.dsSave.setColumn(nrow, "AM_06", this.dsList.getColumn(i, "AM_06"));
        				this.dsSave.setColumn(nrow, "AM_07", this.dsList.getColumn(i, "AM_07"));
        				this.dsSave.setColumn(nrow, "AM_08", this.dsList.getColumn(i, "AM_08"));
        				this.dsSave.setColumn(nrow, "AM_09", this.dsList.getColumn(i, "AM_09"));
        				this.dsSave.setColumn(nrow, "AM_10", this.dsList.getColumn(i, "AM_10"));
        				this.dsSave.setColumn(nrow, "AM_11", this.dsList.getColumn(i, "AM_11"));
        				this.dsSave.setColumn(nrow, "AM_12", this.dsList.getColumn(i, "AM_12"));
        				this.dsSave.setColumn(nrow, "AM_13", this.dsList.getColumn(i, "AM_13"));
        				this.dsSave.setColumn(nrow, "AM_ETC", this.dsList.getColumn(i, "AM_ETC"));
        				this.dsSave.setColumn(nrow, "YN_DELETE", this.dsList.getColumn(i, "YN_DELETE"));
        				this.dsSave.setColumn(nrow, "SN_PRINT", this.dsList.getColumn(i, "SN_PRINT"));
        				this.dsSave.setColumn(nrow, "CD_PROMOTION", this.dsList.getColumn(i, "CD_PROMOTION"));
        				this.dsSave.setColumn(nrow, "CD_POSITION", this.dsList.getColumn(i, "CD_POSITION"));
        				this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        				this.dsSave.setColumn(nrow, "TY_AUTH", this.FormInfo.TY_AUTH);
        				this.dsSave.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        				this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "dsOutput=save";
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

        this.fnReplace = function(orgText, fromSplit, toSplit){
        	if(this.gfnIsNull(orgText)) return "";

        	var newSplit = "";
        	if(!this.gfnIsNull(toSplit)) newSplit = toSplit;

        	var arrResult = orgText.split(fromSplit);
        	var sResult = arrResult.join(newSplit);
        	return sResult;
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
        	if(id == "ccfCD_PAYSTEP"){
        		if(this.gfnIsNull(this.ctclYY_WORK.form.TextBox.value)){
        			this.fnValidCallback = function(){
        				this.ctclYY_WORK.form.TextBox.setFocus();
        			}
        			this.gfnAlert("적용년도를 입력하세요!", "fnValidCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "YM_SALARY", this.ctclYY_WORK.form.TextBox.value);
        	}
        	return true;
        };


        this.fnAfterCDTextChanged = function(id) {

        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforuserDataSetParam=function(id, dsUserParam, nrow){
        	var gridIdx = this.dxGrid.currentrow;
        	switch(id) {
        // 		case "DAX_CFCOMMONCODE":
        // 			dsUserParam.setColumn(nrow, "CD_PREFIX", "DM");
        // 			break;
        		case "DAX_CFPAYSTEP":
        			dsUserParam.setColumn(nrow, "YM_SALARY", "");
        		break;
        		case "ED":
        			dsUserParam.setColumn(nrow, "CD_PREFIX", "ED");
        		break;
        // 		case "DAX_CFPAYSTEP_XXX":
        // 			if(this.gfnIsNull(this.dxGrid.getCellValue(gridIdx, this.dxGrid.getBindCellIndex("body", "YM_BASE")))){
        // 				this.gfnAlert("작업년월을 먼저 입력해주세요.");
        // 				return false;
        // 			}
        // 			dsUserParam.setColumn(nrow, "YM_SALARY", this.dxGrid.getCellValue(gridIdx, this.dxGrid.getBindCellIndex("body", "YM_BASE")));
        // 			break;
        	}
        	return true;
        }


         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /*
         *	엑셀업로드
         */
        this.fnExcelUpload = function() {
        	// this.gfnExcelImport("적용할Dataset명","sheet명","데이터시작좌표","콜백함수명","구분ID",현재폼);
        	// sheet명 없으면 첫번째 sheet
        	//this.gfnExcelImport("dsList","","A2","fnExcelImportCallback","import",this);
        	this.gfnExcelImport("dsList","sheet1","A2","fnExcelImportCallback","import",this);
        }

        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
        	// 다중 시트 처리시 양식의 해당 시트여부를 체크하고자 할땐 dsSheet 시트명 체크
        	// 	if (dsSheet.rowcount > 1) {
        	// 		trace(dsSheet.getColumn(1, "sheetname"));
        	// 	}

        	// 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
        	// 아닌경우는 이부분 주석처리
        	for (var i=0; i< this.dsList.getColCount(); i++)
        	{
        		sColumnId = "Column"+i;
        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}

        //trace("dsOut", dsOut.saveXML());

        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	//this.dsList.copyData(dsOut);

        	var nFocusRow = 0;
        	this.dsList.set_enableevent(false);
        	for (var i=0; i<dsOut.rowcount; i++) {
        		if(this.gfnIsNull(dsOut.getColumn(i, "YM_BASE"))) continue;
        		if(this.gfnIsNull(dsOut.getColumn(i, "CD_PAYSTEP"))) continue;

        		var nrow = this.dsList.addRow();
        		nFocusRow = nrow;
        		this.dsList.setColumn(nrow, this.ucFlag, "I");

        		// 양식이 일치하는 경우 copyRow
        		this.dsList.copyRow(nrow, dsOut, i);

        		// 양식과 일치하지 않는 경우 아래와 같이 컬럼별로 처리.
        	   //this.dsList.setColumn(nrow, "CD_SYSTEM", dsOut.getColumn(i, "Column1"));
        	   //this.dsList.setColumn(nrow, "CD_TYPE", dsOut.getColumn(i, "Column2"));

        	}
        	this.dsList.set_enableevent(true);

        	trace("nFocusRow", nFocusRow);
        	this.fnSetCellPos(this.divData.form.objGrid, "YM_BASE", nFocusRow);

        	this.gfnSetFormStatus(this, "I");
        };

        this.fnSetCellPos = function(objGrid, sColId, nRow) {
        	var dataset = objGrid.getBindDataset();
        	trace("fn_setCellPos", nRow);
        	dataset.set_rowposition(nRow);
         	objGrid.setCellPos(objGrid.getBindCellIndex("body", sColId), nRow);
        	objGrid.showEditor(true);
        	objGrid.setFocus();
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
            this.divSearch.form.cboYN_DELETE.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAZ_PAYSTEP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
