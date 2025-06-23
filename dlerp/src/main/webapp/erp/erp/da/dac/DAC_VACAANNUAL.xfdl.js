(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAC_VACAANNUAL");
            this.set_titletext("연차일괄업로드");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DACPR_VACAANNUAL_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DACPR_VACAANNUAL_SAVE</Col></Row><Row><Col id=\"TARGET\">check</Col><Col id=\"SP\">DACPR_VACAANNUAL_CHECK</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_VACAFROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_VACATO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsVacChkResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("orderPeriod","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("연차일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calFrVaca","orderPeriod:0.0","10.0","98","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TILDE","calFrVaca:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calToVaca","staCD_TILDE:0.0","10.0","94","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
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
            obj = new BindItem("item1","divSearch.form.calToVaca","value","dsSearch","DT_VACATO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.calFrVaca","value","dsSearch","DT_VACAFROM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAC_VACAANNUAL.xfdl", function() {
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

        	//조회
        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	// 	this.FormBtns.Add.set_enable(false);
        	// 	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Reset.set_enable(true);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnFormButton = this.gfnFormButtonAdd("ExcelUpload", "fnExcelUpload", "엑셀 업로드");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.calFrVaca = this.divSearch.form.calFrVaca;   // 기간 from
            this.calToVaca = this.divSearch.form.calToVaca;   // 기간 to

        	this.dxGrid = this.divData.form.objGrid;

        	this.grSearch = this.FormInfo.GR_SEARCH;					// 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					// 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAC_VACAANNUAL");

        	//그리드 코드파인드
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";

        	//연차일자 from ~ to
        	var today = this.gfnGetDate();

        	var yy = today.substr(0,4);
        	var mm = today.substr(4,2);
        	var dd = today.substr(6,2);

        	dd = "01";	//당월1일

        	this.calFrVaca.set_value(yy+mm+dd);
        	this.calToVaca.set_value(today);

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// sp의 input 파라미터
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_VACAFROM", "string");	//From 날짜
        	this.dsSelect.addColumn("DT_VACATO", "string");		//To 날짜

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("CD_RECORD", "string");
        	this.dsSave.addColumn("ID_SABUN", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("ID_PERSON", "bigdecimal");
        	this.dsSave.addColumn("NO_SEQ", "bigdecimal");
        	this.dsSave.addColumn("DT_VACATION", "string");
        	this.dsSave.addColumn("DS_REMARK", "string");
        	this.dsSave.addColumn("GR_SEARCH", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");
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
            this.dsSelect.setColumn(0, "DT_VACAFROM", this.divSearch.form.calFrVaca.value);
        	this.dsSelect.setColumn(0, "DT_VACATO", this.divSearch.form.calToVaca.value);

        	//trace("날짜: " + this.divSearch.form.calFrVaca.value +"~"+this.divSearch.form.calToVaca.value);

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
        				this.dsSave.setColumn(nrow, "CD_RECORD", this.dsList.getColumn(i, "CD_RECORD"));
        				this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));
        				this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(i, "ID_PERSON"));
        				this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));
        				this.dsSave.setColumn(nrow, "DT_VACATION", this.dsList.getColumn(i, "DT_VACATION"));
        				this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(i, "DS_REMARK"));
        				this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        				this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        				break;
        		}
        	}

        	// 그리드 중복 data 체크
        	if(!this.fnSaveValidate()) return false;

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
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }

        /*
         *	리셋 버튼
         */
        this.fnReset = function() {
        	this.calFrVaca.set_value("");
        	this.calToVaca.set_value("");
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

        	var validate = true;
        	////var cd_corp = this.ccfCD_CORP.form.CDTextBox.value;
        /**
        	if (this.gfnIsNull(cd_corp)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        	}
        **/
        	if ( validate && !this.gfnIsNull(this.divSearch.form.calFrVaca.value) && !this.gfnIsNull(this.divSearch.form.calToVaca.value) )  {
        		if (this.divSearch.form.calFrVaca.value > this.divSearch.form.calToVaca.value )  {
        			validate = false;
        			this.fnDtVaidateCallback = function() {
        				this.divSearch.form.calFrVaca.setFocus();
        			}
        			this.gfnAlert(" 검색 시작일이 검색 종료일보다 클 수 없습니다.", "fnDtVaidateCallback"); // gfnAlert = function (sMsgId, arrArg, sPopId, sCallback)
        		}
        	}

        	return validate;
        };

        this.fnSaveValidate = function() {

        	var validate = true;

        	var dt_vacation;
        	var id_person = 0;
        	for( var i=0; i<this.dsSave.rowcount;i++) {

        		dt_vacation = this.dsSave.getColumn(i, "DT_VACATION");
        		id_person = this.dsSave.getColumn(i, "ID_PERSON");

        		for( var i=0; i<this.dsSave.rowcount;i++) {
        			if ((dt_vacation == this.dsSave.getColumn(i+1, "DT_VACATION")) && (id_person == parseInt(this.dsSave.getColumn(i+1, "ID_PERSON")))) {
        				this.gfnAlert("중복된 연차정보가 있습니다. 확인해주세요.");
        				validate = false;
        			}
        		}
        	}

        	return validate;
        }
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	this.fnSetButton();

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.FormBtns.Excel.set_enable(true);
        	}else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if(svcID == "check"){

        		this.dsList.set_enableevent(false);

        		this.dsList.filter("nx_flag=='I'");
        		//trace("결과->" + this.dsVacChkResult.saveXML());

        		for(var i=0;i< this.dsList.rowcount; i++){
        			//var nrow = this.dsVacChkResult.findRow("ID_SABUN",this.dsList.getColumn(i,"ID_SABUN"));

        			var ID_SABUN = this.dsList.getColumn(i, "ID_SABUN");
        			var CD_RECORD = this.gfnNvl(this.dsList.getColumn(i, "CD_RECORD"), "");
        			var DT_VACATION = this.dsList.getColumn(i, "DT_VACATION");

        			var strExpr  = "ID_SABUN == '"+ ID_SABUN +"' && DT_VACATION == '" + DT_VACATION+ "' && CD_RECORD == '" + CD_RECORD+ "'";
        			var nrow = this.dsVacChkResult.findRowExpr( strExpr );

        			this.dsList.setColumn(i,"ID_PERSON", this.dsVacChkResult.getColumn(nrow, "ID_PERSON"));
        			this.dsList.setColumn(i,"DS_HNAME", this.dsVacChkResult.getColumn(nrow, "DS_HNAME"));

        			this.dsList.setColumn(i,"CD_CORP", this.dsVacChkResult.getColumn(nrow, "CD_CORP"));
        			this.dsList.setColumn(i,"DS_CORP", this.dsVacChkResult.getColumn(nrow, "DS_CORP"));

        			this.dsList.setColumn(i,"CD_RECORD", this.dsVacChkResult.getColumn(nrow, "CD_RECORD"));
        			this.dsList.setColumn(i,"DS_RECORD", this.dsVacChkResult.getColumn(nrow, "DS_RECORD"));

        			//this.dsList.setColumn(i,"DS_EXCEPT", this.dsVacChkResult.getColumn(nrow, "MESSAGE"));

        			//오류가 있으면 입력 제외
        			if(!this.gfnIsNull(this.dsVacChkResult.getColumn(nrow, "MESSAGE")) && this.dsVacChkResult.getColumn(nrow, "DT_VACATION") == this.dsList.getColumn(i,"DT_VACATION")){
        				this.dsList.setColumn(i,"DS_EXCEPT", this.dsVacChkResult.getColumn(nrow, "MESSAGE"));
        				//this.dsList.setColumn(i, this.ucFlag, "");
        			}else if(this.gfnIsNull(this.dsList.getColumn(i, "CD_RECORD"))){
        				this.dsList.setColumn(i,"DS_EXCEPT", "근태코드 오류");
        				//this.dsList.setColumn(i, this.ucFlag, "");
        			}else if(this.gfnIsNull(this.dsList.getColumn(i, "ID_PERSON"))){
        				this.dsList.setColumn(i,"DS_EXCEPT", "PERSON ID 오류");
        				//this.dsList.setColumn(i, this.ucFlag, "");

        			}else if(this.gfnIsNull(this.dsList.getColumn(i, "CD_CORP"))){
        				this.dsList.setColumn(i,"DS_EXCEPT", "법인오류");
        				//this.dsList.setColumn(i, this.ucFlag, "");
        			}
        		}

        		this.dsList.filter("");

        		this.dsList.set_enableevent(true);
        	}

        	//중복체크
        	//this.fnDupCheck();

        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	switch(id) {
        	case "ccfCD_CORP": // 법인코드
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
         		break;

         	default:
         	}
         	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	this.fnSearchInit();
        }


        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        //그리드 코드 파인드
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){

        	switch(id) {
        	case "DAX_CFCORP2":
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		break;
        	case "DAX_CFBASEINFO_ALL":
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        		dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        		break;
        	case "DAX_CFBASEINFO":
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");	// 재직구분
        		break;
        	case "DAX_WORK_TYPE":
        		dsUserParam.setColumn(nrow, "TY_GUBUN ", "UPCODE");
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "GT");
        		dsUserParam.setColumn(nrow, "CD_UPCODE", "01");
        		break;

        	default:
        	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

        	//그리드
        	var nRow = this.dsList.rowposition;
        	var arr = codeFindData;
        	if(!this.gfnIsNull(this.dsList.getColumn(nRow, "DS_EXCEPT"))){
        		this.dsList.set_enableevent(false);
        		this.dsList.setColumn(nRow,this.ucFlag, "");
        	}

        	switch(id) {
        		case "DAX_CFCORP2":
        			this.dsList.setColumn(nRow, "CD_DEPT", "");
        			this.dsList.setColumn(nRow, "DS_DEPT", "");
        			this.dsList.setColumn(nRow, "ID_SABUN", "");
        			this.dsList.setColumn(nRow, "DS_HNAME", "");
        			break;
        		case "DAX_CFBASEINFO_ALL":
         			this.dsList.setColumn(nRow, "CD_CORP", arr[0]["CD_CORP"]);
         			this.dsList.setColumn(nRow, "DS_CORP", arr[0]["DS_CORP"]);
        			break;
        		case "DAX_CFBASEINFO":
         			this.dsList.setColumn(nRow, "CD_CORP", arr[0]["CD_CORP"]);
         			this.dsList.setColumn(nRow, "DS_CORP", arr[0]["DS_CORP"]);
         			this.dsList.setColumn(nRow, "ID_PERSON", arr[0]["ID_PERSON"]);
         			this.dsList.setColumn(nRow, "ID_SABUN", arr[0]["ID_SABUN"]);
         			this.dsList.setColumn(nRow, "DS_HNAME", arr[0]["DS_HNAME"]);
        			break;
        		default:
        	}

        	if(this.dsList.getColumn(nRow, this.ucFlag) == ""){
        		this.dsList.set_enableevent(true);
        	}

        }

         /************************************************************************
         * 확장버튼 이벤트
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

        /*
         *	엑셀업로드
         */
        this.fnExcelUpload = function() {
        	// this.gfnExcelImport("적용할Dataset명","sheet명","데이터시작좌표","콜백함수명","구분ID",현재폼);
        	// sheet명 없으면 첫번째 sheet
        	this.gfnExcelImport("dsList","Sheet1","A2","fnExcelImportCallback","import",this);
        };

        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
           // 다중 시트 처리시 양식의 해당 시트여부를 체크하고자 할땐 dsSheet 시트명 체크
        //    if (dsSheet.rowcount > 1) {
        //       trace(dsSheet.getColumn(1, "sheetname"));
        //    }

           // 엑셀 양식과 그리드 컬럼이 그대로 일치 하는경우 아래와 같이 처리.
           // 아닌경우는 이부분 주석처리
        //    for (var i=0; i< this.dsList.getColCount(); i++)
        //    {
        //       sColumnId = "Column"+i;
        //       var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        //       if (sColumnNm != "" && sColumnId != sColumnNm)
        //       {
        //          dsOut.updateColID(sColumnId, sColumnNm);
        //       }
        //    }

        	// 양식이 일치하고 엑셀내역을 기존데이터에 Insert하지 않고
        	// 엑셀내역 그대로 그리드 반영할 시 copyData
        	//this.dsList.copyData(dsOut);
        this.dsList.set_enableevent(false);			//업로드시 코드파인드 사용하려면 주석처리 할것
        	for (var i=0; i<dsOut.rowcount; i++) {
        		var nrow = this.dsList.addRow();
        		this.dsList.setColumn(nrow, this.ucFlag, "I");

        		for (var j=0; j< dsOut.colcount; j++) {
        			if (!this.gfnIsNull(dsOut.getColumn(i,j)) ){
        				dsOut.setColumn(i,j,nexacro.trim(dsOut.getColumn(i,j)));
        				var strColID = dsOut.getColID( j );
        				//날짜 형식 수정
        				if ( strColID == "Column1" ){
        					dsOut.setColumn(i,j,dsOut.getColumn(i,j).replace(/[^0-9]/g,''));
        				}
        			}
        		}
        		// 양식이 일치하는 경우 copyRow
        		//this.dsList.copyRow(nrow, dsOut, i);

        		// 양식과 일치하지 않는 경우 아래와 같이 컬럼별로 처리.
        		this.dsList.setColumn(nrow, "DT_VACATION", dsOut.getColumn(i, "Column1"));
        		this.dsList.setColumn(nrow, "CD_RECORD", dsOut.getColumn(i, "Column2"));

        		this.dsList.setColumn(nrow, "ID_PERSON", dsOut.getColumn(i, "Column4"));
        		this.dsList.setColumn(nrow, "ID_SABUN", dsOut.getColumn(i, "Column5"));
        		this.dsList.setColumn(nrow, "CD_CORP", dsOut.getColumn(i, "Column7"));
        		this.dsList.setColumn(nrow, "DS_REMARK", dsOut.getColumn(i, "Column9"));//(this.gfnIsNull(dsOut.getColumn(i, "Column9"))==true?"":dsOut.getColumn(i, "Column9"))+"연차일괄업로드")
        		this.dsList.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        		//사번이 없는경우
        		if(this.gfnIsNull(this.dsList.getColumn(nrow, "ID_SABUN"))){
        			this.dsList.setColumn(nrow, "DS_EXCEPT", "사원번호 미입력");
        			//this.dsList.setColumn(nrow, this.ucFlag, "");
        		}

        		//연차일 없는경우
        		if(this.gfnIsNull(this.dsList.getColumn(nrow, "DT_VACATION"))){
        			this.dsList.setColumn(nrow, "DS_EXCEPT", "연차일 미입력");
        			//this.dsList.setColumn(nrow, this.ucFlag, "");
        		}

        		//근태코드 없는경우
        		if(this.gfnIsNull(this.dsList.getColumn(nrow, "CD_RECORD"))){
        			this.dsList.setColumn(nrow, "DS_EXCEPT", "근태코드 미입력");
        			//this.dsList.setColumn(nrow, this.ucFlag, "");
        		}
        	}

        	this.dsList.set_enableevent(true);	//업로드시 코드파인드 사용하려면 주석처리 할것

        	this.gfnSetFormStatus(this, "I");


        	this.fnVacaCheck();//오류 체크

        };

        this.fnVacaCheck = function(){

        	this.dsVacationCheck = new Dataset();
        	this.dsVacationCheck.addColumn("ID_SABUN","string");
        	this.dsVacationCheck.addColumn("DT_VACATION","string");
        	this.dsVacationCheck.addColumn("CD_RECORD","string");

        	this.dsVacationCheck.addRow();

        	this.dsList.filter("nx_flag=='I'");		// flag I 가 아닌것은 check 할 필요 없음.(기등록 값과 오류처리된 값)

        	//사번으로 ID_PERSON, 법인 정보 연차일 중복체크 하기 위해 사번과 (사번, 연차일) 리스트 생성
        	var idSabun = "";
        	var dtVacation = "";
        	var cdRecord = "";
        	for(var i=0 ;i < this.dsList.rowcount;i++){

        		idSabun += this.dsList.getColumn(i, "ID_SABUN");
        		//dtVacation += this.dsList.getColumn(i, "ID_SABUN")+","+this.dsList.getColumn(i, "DT_VACATION");
        		dtVacation += this.dsList.getColumn(i, "DT_VACATION");
        		cdRecord += this.gfnNvl(this.dsList.getColumn(i, "CD_RECORD"), "");
        		if(i < this.dsList.rowcount-1){
        			idSabun +=",";
        			dtVacation+=",";
        			cdRecord+=",";
        		}
         	}
        	this.dsVacationCheck.setColumn(0, "ID_SABUN",idSabun);
        	this.dsVacationCheck.setColumn(0, "DT_VACATION",dtVacation);
        	this.dsVacationCheck.setColumn(0, "CD_RECORD",cdRecord);

        	trace("오류조회" + this.dsVacationCheck.saveXML());

        	var strSvcId    = "check";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "check=dsVacationCheck";
        	var outData     = "dsVacChkResult=check0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 		// 통신방법 정의 [생략가능]

        	this.dsList.filter("");

        	//중복체크
        	//this.fnDupCheck();

        };

        this.fnDupCheck = function(){

        	for(var i=0 ;i < this.dsList.rowcount;i++){

        		var idSabun    = this.dsList.getColumn(i, "ID_SABUN");
        		var dtVacation = this.dsList.getColumn(i, "DT_VACATION");

        		this.dsList.filter("nx_flag=='I' && ID_SABUN=='"+idSabun+"' && DT_VACATION=='"+dtVacation+"'");

        		if(this.dsList.rowcount > 1){
        			this.dsList.set_enableevent(false);
        			for(var j = 1; j < this.dsList.rowcount; j++){
        				this.dsList.setColumn(j, "DS_EXCEPT", "입력 중복");
        				this.dsList.setColumn(j, this.ucFlag, "");
        			}
        			this.dsList.set_enableevent(true);
        		}

        		this.dsList.filter("");
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if ( e.oldvalue != e.newvalue ) {
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}

        	// 연차일자(FROM) 수정시 연차일자(TO)에도 바인딩
        	if(e.columnid == "DT_VACAFROM"){
        		this.dsSearch.setColumn(0, "DT_VACATO", e.newvalue);
        	}

        };

        this.dsList_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "DT_VACATION"){
        		//연차일 체크 - - 해당월 이내로만 변경,당일 및 과거날짜 불가
        		var toDay = this.gfnGetDate();
        		var dtVacation = e.newvalue;//this.dsList.getColumn(e.row, "DT_VACATION");

        		if(dtVacation <= toDay){
        			//this.gfnAlert(e.row+"행 - 당일 및 과거일자는 입력할수 없습니다.");
        			//return false;
        		}else if(dtVacation.substring(0,6) != toDay.substring(0,6)){
        			//this.gfnAlert(e.row+"행 - 연차일은 해당월 이내로만 변경 가능합니다.");
        			//return false;
        		}
        	}
        	return true;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsVacChkResult.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("DAC_VACAANNUAL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
