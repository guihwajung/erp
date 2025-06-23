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
            this.set_titletext("건강검진 엑셀업로드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YY_HOSPITAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_HOSPITAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HOSPITAL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"YY_HOSPITAL\"/><Col id=\"DS_HOSPITAL\"/><Col id=\"CD_HOSPITAL\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_HOSPITAL_EXCEL_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DABPR_HOSPITAL_EXCEL_UPDATE</Col></Row><Row><Col id=\"TARGET\">check</Col><Col id=\"SP\">DABPR_HOSPITAL_EXCEL_CHECK</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel01", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_HOSPITAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HOSPITAL_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DT_HOSPITAL_BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"PACKAGE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"AM_HOSPITAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel02", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_HOSPITAL\" type=\"STRING\" size=\"256\"/><Column id=\"HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DT_HOSPITAL_BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"SEX\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_FAMILY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HOSPITAL_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"AM_HOSPITAL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYY_HOSPITAL","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("적용년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_HOSPITAL","staYY_HOSPITAL:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclYY_HOSPITAL:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFCORP_STD");
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_HOSPITAL","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("병원구분");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_HOSPITAL","staCD_HOSPITAL:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFHOSPITAL_CODE");
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:20",null,null,"0","0",null,null,null,null,this);
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
            obj = new BindItem("item0","divSearch.form.ctclYY_HOSPITAL.form.TextBox","value","dsSearch","YY_HOSPITAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_HOSPITAL.form.CDTextBox","value","dsSearch","CD_HOSPITAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_HOSPITAL.form.DSTextBox","value","dsSearch","DS_HOSPITAL");
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
        this.registerScript("DAB_HOSPITAL_EXCEL.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e) {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	this.fnSetInit();
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnUpLoadExcel = this.gfnFormButtonAdd("ExcelUpload", "fnExcelUpload"); 	// 엑셀 업로드
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYY_HOSPITAL = this.divSearch.form.ctclYY_HOSPITAL;
        	this.ccfCD_CORP 	 = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_HOSPITAL  = this.divSearch.form.ccfCD_HOSPITAL;
        	this.dxGrid          = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_HOSPITAL_EXCEL");

        	this.ccfCD_HOSPITAL.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
            this.dsSelect.addColumn("YY_HOSPITAL", "STRING");
        	this.dsSelect.addColumn("CD_CORP"    , "STRING");
        	this.dsSelect.addColumn("CD_HOSPITAL", "STRING");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("YY_HOSPITAL"       , "STRING");
        	this.dsUpdate.addColumn("ID_PERSON"         , "INT");
        	this.dsUpdate.addColumn("ID_SABUN"          , "STRING");
        	this.dsUpdate.addColumn("CD_CORP"           , "STRING");
        	this.dsUpdate.addColumn("CD_HOSPITAL"       , "STRING");
        	this.dsUpdate.addColumn("CD_FAMILY"         , "STRING");
        	this.dsUpdate.addColumn("DS_HOSPITAL_HNAME" , "STRING");
        	this.dsUpdate.addColumn("DT_HOSPITAL"       , "STRING");
        	this.dsUpdate.addColumn("AM_HOSPITAL"       , "BIGDECIMAL");
        	this.dsUpdate.addColumn("ID_USER"           , "STRING");

        	this.dsExcelCheck = new Dataset();
        	this.dsExcelCheck.addColumn("YY_HOSPITAL"       , "STRING");
        	this.dsExcelCheck.addColumn("CD_CORP"           , "STRING");
        	this.dsExcelCheck.addColumn("CD_HOSPITAL"       , "STRING");
        	this.dsExcelCheck.addColumn("DS_HOSPITAL_HNAME" , "STRING");
        	this.dsExcelCheck.addColumn("DT_HOSPITAL_BIRTH" , "STRING");
        	this.dsExcelCheck.addColumn("DT_HOSPITAL"       , "STRING");
        	this.dsExcelCheck.addColumn("AM_HOSPITAL"       , "STRING");
        	this.dsExcelCheck.addColumn("ID_USER"           , "STRING");
        };

        /************************************************************************
         * 초기화 이벤트
         ************************************************************************/
        this.fnSetInit = function () {
        	var today = this.gfnGetDate().substring(0, 4);
        	this.dsSearch.set_enableevent(false);
        	this.dsSearch.setColumn(0, "YY_HOSPITAL", today);   // 작업년월
        	this.dsSearch.setColumn(0, "CD_CORP"    , this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP"    , this.AuthClient.DS_CORP);
        	this.dsSearch.set_enableevent(true);
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         *	조회 버튼
         */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

            this.dsSelect.clearData();
            this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "YY_HOSPITAL", this.dsSearch.getColumn(0, "YY_HOSPITAL"));
        	this.dsSelect.setColumn(0, "CD_CORP"    , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_HOSPITAL", this.dsSearch.getColumn(0, "CD_HOSPITAL"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	if( this.dsList.getCaseCount(this.ucFlag + " == 'U'") > 0 ) {
        		this.gfnGridDel(this.dxGrid);
        	}
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	//if (!this.gfnGridValidate(this.dxGrid)) return;

        	if (this.dsList.rowcount> 0) {
        		var cnt = this.dsList.getCaseCount(this.ucFlag + " == 'U' && YN_UPDATE == 'N'" );
        		if (cnt > 0) {
        			this.gfnAlert("오류건이 존재하여 저장할 수 없습니다.\n오류 내용을 확인하고 다시 업로드 해주세요.");
        			return false;
        		}
        	}

        	this.dxGrid.updateToDataset();

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        		case "U":
        			var nrow = this.dsUpdate.addRow();
        			this.dsUpdate.setColumn(nrow, "YY_HOSPITAL"      , this.dsList.getColumn(i, "YY_HOSPITAL"));
        			this.dsUpdate.setColumn(nrow, "ID_PERSON"        , this.dsList.getColumn(i, "ID_PERSON"));
        			this.dsUpdate.setColumn(nrow, "ID_SABUN"         , this.dsList.getColumn(i, "ID_SABUN"));
        			this.dsUpdate.setColumn(nrow, "CD_CORP"          , this.dsList.getColumn(i, "CD_CORP"));
        			this.dsUpdate.setColumn(nrow, "CD_HOSPITAL"      , this.dsList.getColumn(i, "CD_HOSPITAL"));
        			this.dsUpdate.setColumn(nrow, "CD_FAMILY"        , this.dsList.getColumn(i, "CD_FAMILY"));
        			this.dsUpdate.setColumn(nrow, "DS_HOSPITAL_HNAME", this.dsList.getColumn(i, "DS_HOSPITAL_HNAME"));
        			this.dsUpdate.setColumn(nrow, "DT_HOSPITAL"      , this.dsList.getColumn(i, "DT_HOSPITAL"));
        			this.dsUpdate.setColumn(nrow, "AM_HOSPITAL"      , this.dsList.getColumn(i, "AM_HOSPITAL"));
        			this.dsUpdate.setColumn(nrow, "ID_USER"          , this.AuthClient.ID_USER);
        			break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0 ) return;

        	var strSvcId    = "update";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        }

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	var iRow = this.dsList.findRowExpr(this.ucFlag + " == '#'");
        	if (iRow != -1) {
        		var nRow = this.dsList.deleteRow(iRow);
        	}
        	this.gfnExcelExport(this.dxGrid);

        	if (iRow != -1) {
        		this.dsList.insertRow(iRow);
        		this.dsList.setColumn(iRow, this.ucFlag, "#");
        	}
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YY_HOSPITAL"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ctclYY_HOSPITAL.form.TextBox.setFocus();
        		}
        		this.gfnAlert("적용년도를 입력하세요.", "fnVaidateCallback");
        	}

        	if (validate && this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 입력하세요.", "fnVaidateCallback");
        	}

        	if (validate && this.gfnIsNull(this.dsSearch.getColumn(0, "CD_HOSPITAL"))) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_HOSPITAL.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("병원구분을 입력하세요.", "fnVaidateCallback");
        	}

        	return validate;
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /*
         *	엑셀업로드
         */
        this.fnExcelUpload = function() {
        	if (!this.fnSelectValidate()) return;

        	// this.gfnExcelImport("적용할Dataset명","sheet명","데이터시작좌표","콜백함수명","구분ID",현재폼);
        	// sheet명 없으면 첫번째 sheet
        	if (this.dsSearch.getColumn(0,"CD_HOSPITAL") == "01" || this.dsSearch.getColumn(0,"CD_HOSPITAL") == "03") {
        		this.gfnExcelImport("dsExcel01", "sheet1", "B2", "fnExcelImportCallback", "import", this);
        	} else {
        		this.gfnExcelImport("dsExcel02", "sheet1", "B2", "fnExcelImportCallback", "import", this);
        	}
        };

        /*
         *	엑셀업로드 Callback
         */
        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
        	// 다중 시트 처리시 양식의 해당 시트여부를 체크하고자 할땐 dsSheet 시트명 체크
            if (dsSheet.rowcount > 1) {
               trace(dsSheet.getColumn(1, "sheetname"));
            }

        	if (this.dsSearch.getColumn(0, "CD_HOSPITAL") == "01" || this.dsSearch.getColumn(0, "CD_HOSPITAL") == "03") {
        		for (var i = 0; i < this.dsExcel01.getColCount(); i++) {
        			dsOut.updateColID("Column" + i, this.dsExcel01.getColID(i));
        		}
        	}

        	if (this.dsSearch.getColumn(0, "CD_HOSPITAL") == "02") {
        		for (var i = 0; i < this.dsExcel02.getColCount(); i++) {
        			dsOut.updateColID("Column" + i, this.dsExcel02.getColID(i));
        		}
        	}

        	trace(dsOut.saveXML());
        	var objArr = [];
        	for (var i = 0; i< dsOut.rowcount; i++) {
        		for (var j = 0; j < dsOut.getColCount(); j++) {
        			//검강검진일자 형식 수정
        			if (dsOut.getColID(j) == "DT_HOSPITAL" || dsOut.getColID(j) == "DT_HOSPITAL_BIRTH") {
        				//trace("dsOut.getColumn("+i+", "+j+") = " + dsOut.getColumn(i, j));
        				if (!this.gfnIsNull(dsOut.getColumn(i, j))) {
        					dsOut.setColumn(i, j, dsOut.getColumn(i, j).replace(/[^0-9]/g, ''));
        				}
        			}

        			if (dsOut.getColID(j) == "AM_HOSPITAL") {
        				if (dsOut.getColumn(i, j) == "" || this.gfnIsNull(dsOut.getColumn(i, j))) {
        					dsOut.setColumn(i, j, 0);
        				}
        			}


        			// 데이터를 1줄로 설정
        			if (i == 0) {
        				objArr[dsOut.getColID(j)] =  this.gfnNvl(dsOut.getColumn(i, j), "");
        			} else {
        				objArr[dsOut.getColID(j)] += "/";
        				objArr[dsOut.getColID(j)] =  objArr[dsOut.getColID(j)] + this.gfnNvl(dsOut.getColumn(i,j),"");
        			}
        		}
        	}

        	// 데이터셋 설정
        	this.dsExcelCheck.clearData();
        	var nrow = this.dsExcelCheck.addRow();

        	for (var key in objArr) {
        		//trace("key = "+ key +" == " + objArr[key]);
        		this.dsExcelCheck.setColumn(nrow, key, objArr[key]);

        	}
        	this.dsExcelCheck.setColumn(nrow, "YY_HOSPITAL", this.dsSearch.getColumn(0, "YY_HOSPITAL"));
        	this.dsExcelCheck.setColumn(nrow, "CD_CORP"    , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsExcelCheck.setColumn(nrow, "CD_HOSPITAL", this.dsSearch.getColumn(0, "CD_HOSPITAL"));
        	this.dsExcelCheck.setColumn(nrow, "ID_USER"    , this.AuthClient.ID_USER);
        	//trace(this.dsExcelCheck.saveXML());
        	// 엑셀업로드 데이터 체크
        	// 1. 해당 수진자는 종합검진 대상자가 아닙니다.
        	// 2. 기 입력된 종합검진 정보가 있습니다.
        	// 3. 동일한 수진자 내역이 있습니다.
        	// 4. 종합검진 대상자 이지만, 대상자 생성이 되지 않았습니다. [건강검진관리] 화면에서 대상자를 먼저 생성해주세요.
        	var strSvcId    = "check";
        	var strSvcType  = "savesel";
        	var inProc		= "_dsProc";
        	var inData      = "check=dsExcelCheck";
        	var outData     = "dsList=check0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		var btnEn = this.FormBtns.Del.enable;
        		if( this.dsList.getCaseCount(this.ucFlag + " == 'U'") == 0 ) {
        			this.FormBtns.Del.set_enable(false);
        		} else {
        			this.FormBtns.Del.set_enable(btnEn);
        		}

        	} else if(svcID == "update") {
        		this.FormBtns.Select.click();
        	} else if( svcID == "check" ){
        		if (this.dsList.rowcount> 0) {
        			var cnt = this.dsList.getCaseCount(this.ucFlag +" == 'U'");
        			if( cnt > 0 ) {
        				this.gfnSetFormStatus(this, "U");
        			}
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_HOSPITAL") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e) {
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
        };
        this.loadIncludeScript("DAB_HOSPITAL_EXCEL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
