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
            this.set_titletext("대상자 업로드(일반검진)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YY_HOSPITAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"YY_HOSPITAL\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DABPR_HOSPITAL_PERSON_SELECT</Col></Row><Row><Col id=\"TARGET\">check</Col><Col id=\"SP\">DABPR_HOSPITAL_PERSON_CHECK</Col></Row><Row><Col id=\"SP\">DABPR_HOSPITAL_PERSON_INSERT</Col><Col id=\"TARGET\">insert</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_HOSPITAL_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RESIDENT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYY_HOSPITAL","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("검진년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYY_HOSPITAL","staYY_HOSPITAL:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclYY_HOSPITAL:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
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

            obj = new BindItem("item3","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
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
        this.registerScript("DAB_HOSPITAL_PERSON_EXCEL.xfdl", function() {
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
        	this.fnSetInit();
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        }

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
        	this.dxGrid          = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function()
        {
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAB_HOSPITAL_PERSON_EXCEL");

        	this.bSelect = false;
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
            this.dsSelect.addColumn("YY_HOSPITAL", "STRING");
        	this.dsSelect.addColumn("CD_CORP"    , "STRING");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("YY_HOSPITAL"       , "STRING");
        	this.dsInsert.addColumn("CD_CORP"           , "STRING");
        	this.dsInsert.addColumn("CD_DEPT"           , "STRING");
        	this.dsInsert.addColumn("ID_PERSON"         , "INT");
        	this.dsInsert.addColumn("ID_SABUN"          , "STRING");
        	this.dsInsert.addColumn("DS_HOSPITAL_HNAME" , "STRING");
        	this.dsInsert.addColumn("DT_HOSPITAL_BIRTH" , "STRING");
        	this.dsInsert.addColumn("YN_UPDATE"         , "STRING");
        	this.dsInsert.addColumn("ID_USER"           , "STRING");

        	this.dsExcelCheck = new Dataset();
        	this.dsExcelCheck.addColumn("YY_HOSPITAL"       , "STRING");
        	this.dsExcelCheck.addColumn("CD_CORP"           , "STRING");
        	this.dsExcelCheck.addColumn("DS_HOSPITAL_HNAME" , "STRING");
        	this.dsExcelCheck.addColumn("ID_RESIDENT"       , "STRING");
        	this.dsExcelCheck.addColumn("ID_USER"           , "STRING");
        };

        /************************************************************************
         * 초기화 이벤트
         ************************************************************************/
        this.fnSetInit = function ()
        {
        	var today = this.gfnGetDate().substring(0,4);
        	this.dsSearch.setColumn(0, "YY_HOSPITAL", !this.gfnIsNull(this.getOwnerFrame().YY_HOSPITAL) ? this.getOwnerFrame().YY_HOSPITAL : today);   // 작업년월
        	this.dsSearch.setColumn(0,"CD_CORP",this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0,"DS_CORP",this.AuthClient.DS_CORP);
        	this.bSelect= true;
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        /*
         *	조회 버튼
         */
        this.fnSelect = function() {
        	if(!this.fnSelectValidate()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

            this.dsSelect.clearData();
            this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "YY_HOSPITAL", this.dsSearch.getColumn(0, "YY_HOSPITAL"));
        	this.dsSelect.setColumn(0, "CD_CORP"    , this.dsSearch.getColumn(0, "CD_CORP"));

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
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
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
        	if( this.dsList.getCaseCount(this.ucFlag + " == 'I'") > 0 ) {
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
        		var cnt = this.dsList.getCaseCount("YN_UPDATE == 'N'");
        		if( cnt > 0 ) {
        			this.gfnAlert("오류건이 존재하여 저장할 수 없습니다.\n오류 내용을 확인하고 다시 업로드 해주세요.");
        			return false;
        		}
        	}

        	this.dxGrid.updateToDataset();

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsInsert.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "YY_HOSPITAL"      , this.dsList.getColumn(i, "YY_HOSPITAL"));
        				this.dsInsert.setColumn(nrow, "ID_PERSON"        , this.dsList.getColumn(i, "ID_PERSON"));
        				this.dsInsert.setColumn(nrow, "CD_CORP"          , this.dsList.getColumn(i, "CD_CORP"));
        				this.dsInsert.setColumn(nrow, "CD_DEPT"          , this.dsList.getColumn(i, "CD_DEPT"));
        				this.dsInsert.setColumn(nrow, "ID_PERSON"        , this.dsList.getColumn(i, "ID_PERSON"));
        				this.dsInsert.setColumn(nrow, "ID_SABUN"         , this.dsList.getColumn(i, "ID_SABUN"));
        				this.dsInsert.setColumn(nrow, "DS_HOSPITAL_HNAME", this.dsList.getColumn(i, "DS_HOSPITAL_HNAME"));
        				this.dsInsert.setColumn(nrow, "DT_HOSPITAL_BIRTH", this.dsList.getColumn(i, "DT_HOSPITAL_BIRTH"));
        				this.dsInsert.setColumn(nrow, "YN_UPDATE"        , this.dsList.getColumn(i, "YN_UPDATE"));
        				this.dsInsert.setColumn(nrow, "ID_USER"          , this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 ) return;

        	var strSvcId    = "insert";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert";
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
        	return validate;
        };

        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /*
         *	엑셀업로드
         *  공단에서 가입자명, 주민등록번호가 입력된 엑셀 업로드
         */
        this.fnExcelUpload = function() {
        	if(!this.fnSelectValidate()) return;

        	// this.gfnExcelImport("적용할Dataset명","sheet명","데이터시작좌표","콜백함수명","구분ID",현재폼);
        	// sheet명 없으면 첫번째 sheet
        	this.gfnExcelImport("dsExcel","sheet1","A2","fnExcelImportCallback","import",this);
        };

        /*
         *	엑셀업로드 Callback
         */
        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
        	// 다중 시트 처리시 양식의 해당 시트여부를 체크하고자 할땐 dsSheet 시트명 체크
            if (dsSheet.rowcount > 1) {
               trace(dsSheet.getColumn(1, "sheetname"));
            }
        	for (var i=0; i< this.dsExcel.getColCount(); i++){
        		dsOut.updateColID("Column"+i, this.dsExcel.getColID(i));
        	}

        	//trace(dsOut.saveXML());

        	var sDtHospitalBirth, sDsHospitalHname, sDtHospital, iAmHospital;
        	var objArr = [];

        	for (var i=0; i< dsOut.rowcount; i++)
            {
        		for (var j=0; j< dsOut.getColCount(); j++)
        		{
        			//검강검진일자 형식 수정
        			if ( dsOut.getColID(j) == "ID_RESIDENT" ){
        				//trace("dsOut.getColumn("+i+","+j+") = " + dsOut.getColumn(i,j));
        				if ( !this.gfnIsNull(dsOut.getColumn(i,j)) ) {
        					dsOut.setColumn(i,j, dsOut.getColumn(i,j).replace(/[^0-9]/g,''));
        				}
        			}

        			// 데이터를 1줄로 설정
        			if( i == 0 ) {
        				objArr[dsOut.getColID(j)] =  this.gfnNvl(dsOut.getColumn(i,j),"");
        			} else {
        				objArr[dsOut.getColID(j)] += "/";
        				objArr[dsOut.getColID(j)] =  objArr[dsOut.getColID(j)] + this.gfnNvl(dsOut.getColumn(i,j),"");
        			}

        		}
        	}

        	// 데이터셋 설정
        	this.dsExcelCheck.clearData();
        	var nrow = this.dsExcelCheck.addRow();
        	for( var key in objArr){
        		//trace("key = "+ key +" == " + objArr[key]);
        		this.dsExcelCheck.setColumn(nrow,key, objArr[key]);
        	}

        	this.dsExcelCheck.setColumn(nrow, "YY_HOSPITAL", this.dsSearch.getColumn(0, "YY_HOSPITAL"));
        	this.dsExcelCheck.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsExcelCheck.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);



        	// 엑셀업로드 데이터 체크
        	// 1. 인사정보에 등록된 임직원이 아닙니다.
        	var strSvcId    = "check";
        	var strSvcType  = "savesel";
        	var inProc		= "_dsProc";
        	var inData      = "check=dsExcelCheck";
        	var outData     = "dsList=check0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
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

        	} else if(svcID == "insert") {
        		this.FormBtns.Select.click();
        	} else if( svcID == "check" ){
        		if (this.dsList.rowcount> 0) {
        			var cnt = this.dsList.getCaseCount(this.ucFlag +" == 'I'");
        			if( cnt > 0 ) {
        				this.gfnSetFormStatus(this, "I");
        			}
        		}
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DAB_HOSPITAL_PERSON_EXCEL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
