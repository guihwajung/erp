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
            this.set_titletext("하자보수이행증권등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DBZPR_SITESTOCK_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DBZPR_SITESTOCK_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DBZPR_SITESTOCK_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DBZPR_SITESTOCK_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SITE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","300","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DBX_CFMAINSITE");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","40",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
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

            obj = new BindItem("item01","divSearch.form.ccfCD_SITE.form.DSTextBox","value","dsSearch","DS_SITE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DBZ_SITESTOCK.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().CF_CD_SITE)) {
        		this.ccfCD_SITE.form.CDTextBox.set_value(this.getOwnerFrame().CF_CD_SITE);
        		this.ccfCD_SITE.form.DSTextBox.set_value(this.getOwnerFrame().CF_DS_SITE);
        		this.FormBtns.Select.click();
        	}

        	if(this.FormInfo.GR_SEARCH >= 7){
        		this.dsSearch.setColumn(0, "CD_SITE", this.AuthClient.CD_DEPT);
        		this.ccfCD_SITE.form.fnCodeFindLoad();
        		this.ccfCD_SITE.set_enable(false);
        	}

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnFormButton = this.gfnFormButtonAdd("ExcelUpload", "fnExcelUpload");  //EXCEL선택
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        	this.gfnGridInit(this.dxGrid, this.dsList, "DB", "DBZ_SITESTOCK");  // pForm.gfnGridInit = function(objGrid, objDs, cd_system, id_grid, tree_column, level_column, is_manual)
        	this.dxGrid.set_selecttype("cell");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_SITE", "string");        // 단지코드
        	this.dsInsert.addColumn("CD_CTM", "string");         // 협력업체코드
        	this.dsInsert.addColumn("NO_HADOCONT", "string");    // 하도계약번호
        	this.dsInsert.addColumn("SN_SEQ", "string");	     // 차수
        	this.dsInsert.addColumn("NO_STOCK", "string");	     // 증권번호
        	this.dsInsert.addColumn("OR_PUBLICATION", "string"); // 발행기관
        	this.dsInsert.addColumn("FR_WARRANTY", "string");	 // 보증시작
        	this.dsInsert.addColumn("TO_WARRANTY", "string");    // 보증만료
        	this.dsInsert.addColumn("AM_WARRANTY", "int");       // 보증금액
        	this.dsInsert.addColumn("YN_MODIFY", "string");      // 수정가능여부
        	this.dsInsert.addColumn("ID_INSERT", "string");      // 등록자

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_SITE", "string");        // 단지코드
        	this.dsUpdate.addColumn("CD_CTM", "string");         // 협력업체코드
        	this.dsUpdate.addColumn("NO_HADOCONT", "string");    // 하도계약번호
        	this.dsUpdate.addColumn("SN_SEQ", "string");         // 차수
        	this.dsUpdate.addColumn("NO_STOCK", "string");       // 증권번호
        	this.dsUpdate.addColumn("OR_PUBLICATION", "string"); // 발행기관
        	this.dsUpdate.addColumn("FR_WARRANTY", "string");	 // 보증시작
        	this.dsUpdate.addColumn("TO_WARRANTY", "string");    // 보증만료
        	this.dsUpdate.addColumn("AM_WARRANTY", "int");       // 보증금액
        	this.dsUpdate.addColumn("YN_MODIFY", "string");      // 수정가능여부
        	this.dsUpdate.addColumn("ID_UPDATE", "string");      // 수정자

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_SITE", "string");        // 단지코드
        	this.dsDelete.addColumn("CD_CTM", "string");         // 협력업체코드
        	this.dsDelete.addColumn("NO_HADOCONT", "string");    // 하도계약번호
        	this.dsDelete.addColumn("SN_SEQ", "string");         // 차수
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsList.clearData();
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0,"CD_SITE"));

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
         *	저장 버튼
         */
        this.fnSave = function() {

        	if (!this.gfnGridValidate(this.dxGrid)) return;
        	if (!this.fnSaveValidate()) return false;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.getRowCountNF(); i++) {
        		var flag = this.dsList.getColumnNF(i,this.ucFlag);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0,"CD_SITE"));
        				this.dsInsert.setColumn(nrow, "CD_CTM", this.dsList.getColumnNF(i,"CD_CTM"));
        				this.dsInsert.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumnNF(i,"NO_HADOCONT"));
        				this.dsInsert.setColumn(nrow, "SN_SEQ", this.dsList.getColumnNF(i,"SN_SEQ"));
        				this.dsInsert.setColumn(nrow, "NO_STOCK", this.dsList.getColumnNF(i,"NO_STOCK"));
        				this.dsInsert.setColumn(nrow, "OR_PUBLICATION", this.dsList.getColumnNF(i,"OR_PUBLICATION"));
        				this.dsInsert.setColumn(nrow, "FR_WARRANTY", this.dsList.getColumnNF(i,"FR_WARRANTY"));
        				this.dsInsert.setColumn(nrow, "TO_WARRANTY", this.dsList.getColumnNF(i,"TO_WARRANTY"));
        				this.dsInsert.setColumn(nrow, "AM_WARRANTY", this.dsList.getColumnNF(i,"AM_WARRANTY"));
        				this.dsInsert.setColumn(nrow, "YN_MODIFY", "Y");
        				this.dsInsert.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;

        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0,"CD_SITE"));
        				this.dsUpdate.setColumn(nrow, "CD_CTM", this.dsList.getColumn(i, "CD_CTM"));
        				this.dsUpdate.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumn(i, "NO_HADOCONT"));
        				this.dsUpdate.setColumn(nrow, "SN_SEQ", this.dsList.getColumn(i, "SN_SEQ"));
        				this.dsUpdate.setColumn(nrow, "NO_STOCK", this.dsList.getColumn(i, "NO_STOCK"));
        				this.dsUpdate.setColumn(nrow, "OR_PUBLICATION", this.dsList.getColumn(i, "OR_PUBLICATION"));
        				this.dsUpdate.setColumn(nrow, "FR_WARRANTY", this.dsList.getColumn(i, "FR_WARRANTY"));
        				this.dsUpdate.setColumn(nrow, "TO_WARRANTY", this.dsList.getColumn(i, "TO_WARRANTY"));
        				this.dsUpdate.setColumn(nrow, "AM_WARRANTY", this.dsList.getColumn(i, "AM_WARRANTY"));
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE", this.AuthClient.ID_USER);
        				break;

        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0,"CD_SITE"));
        				this.dsDelete.setColumn(nrow, "CD_CTM", this.dsList.getColumnNF(i,"CD_CTM"));
        				this.dsDelete.setColumn(nrow, "NO_HADOCONT", this.dsList.getColumnNF(i,"NO_HADOCONT"));
        				this.dsDelete.setColumn(nrow, "SN_SEQ", this.dsList.getColumnNF(i,"SN_SEQ"));
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "delete=dsDelete insert=dsInsert update=dsUpdate";
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
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nrow = this.gfnGridAdd(this.dxGrid,"");
        	this.dsList.setColumn(nrow, "YN_MODIFY", "Y");
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
        	if (this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.text)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("현장코드를 입력하셔야 합니다.", "fnVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        	}
        	return validate;
        }

        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {

        	if (this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.text)) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_SITE.form.CDTextBox.setFocus();
        			return false;
        		}
        		this.gfnAlert("현장코드를 입력하셔야 합니다.", "fnVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        	}

        	for (var i = 0; i < this.dsList.getRowCountNF(); i++) {

        		if( this.dsList.getColumnNF(i,this.ucFlag) == "D") continue;

        		var flag = this.dsList.getColumnNF(i,this.ucFlag);
        		if( flag != "D" ) {
        			var nRow = this.dsList.findRowExpr( this.ucFlag+" != 'D' && currow != "+i+" && CD_CTM == '"+this.dsList.getColumn(i,"CD_CTM")+"' && NO_HADOCONT == '"+this.dsList.getColumn(i,"NO_HADOCONT")+"' && SN_SEQ == '"+this.dsList.getColumn(i,"SN_SEQ")+"'" );
        			if( nRow > -1 ){
        				this.dsList.set_rowposition(i);
        				this.gfnAlert(""+i+"행과 "+nRow+"행은  같은 업체로 차수는 중복될수 없습니다."); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        				return false;
        			}
        		}
        	}
        	return true;
        }

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

        	} else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /*
         *	엑셀업로드 Callback
         */
        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {

        	// 다중 시트 처리시 양식의 해당 시트여부를 체크하고자 할땐 dsSheet 시트명 체크
        // 	if (dsSheet.rowcount > 1) {
        // 		trace(dsSheet.getColumn(1, "sheetname"));
        // 	}

        	// 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
        	// 아닌경우는 이부분 주석처리
        	if (dsOut.rowcount == 0)  {
        		this.gfnAlert("엑셀파일에 내용이 없습니다."); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        		return false;
        	}

        	for (var i=0; i< this.dsList.getColCount(); i++)
        	{
        		sColumnId = "Column"+i;
        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}

        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	//this.dsList.copyData(dsOut);

        	this.dsList.set_enableevent(false);
        	for (var i=0; i< dsOut.rowcount; i++) {
        		var nrow = this.dsList.addRow();
        		this.dsList.setColumn(nrow, this.ucFlag, "I");

        	// 양식이 일치하는 경우 copyRow
        	this.dsList.copyRow(nrow, dsOut, i);

        	// 양식과 일치하지 않는 경우 아래와 같이 컬럼별로 처리.
           //this.dsList.setColumn(nrow, "CD_SYSTEM", dsOut.getColumn(i, "Column1"));
           //this.dsList.setColumn(nrow, "CD_TYPE", dsOut.getColumn(i, "Column2"));

        	}
        	this.dsList.set_enableevent(true);

        	this.gfnSetFormStatus(this, "I");
        };
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        /*
         * 코드파인드 변경전
         */
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_AUTHDEPT", this.AuthClient.CD_DEPT);
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow)
        {
        	switch(id) {
        		case "DBX_CFHADO":
        			dsUserParam.setColumn(nrow, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        		break;
        		default:
        	}
        	return true;
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         /*
         *	조회 조건 변경시 초기화
         */
         this.dsSearch_onvaluechanged = function(obj,e)
        {

        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        /*
         *	엑셀업로드
         */
        this.fnExcelUpload = function() {
        	if (!this.fnSelectValidate()) return false;

        	// this.gfnExcelImport("적용할Dataset명","sheet명","데이터시작좌표","콜백함수명","구분ID",현재폼);
        	// sheet명 없으면 첫번째 sheet
        	//this.gfnExcelImport("dsList","","A2","fnExcelImportCallback","import",this);
        	for(var nrow = this.dsList.rowcount; -1 < nrow; nrow--){
        		if( this.dsList.getColumn(nrow, this.ucFlag) == "I" ){
        			this.dsList.deleteRow(nrow);
        		} else {
        			this.dsList.setColumn(nrow, this.ucFlag, "D");
        			this.dsList.filterRow(nrow);
        		}
        	}

        	this.gfnExcelImport("dsList","","A2","fnExcelImportCallback","import",this);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DBZ_SITESTOCK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
