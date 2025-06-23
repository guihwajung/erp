(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DRB_COUNSEL");
            this.set_titletext("계약자SMS송신");
            if (Form == this.constructor)
            {
                this._setFormPosition(1440,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"INT\" size=\"256\"/><Column id=\"TOPHONE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DZZPR_SMS_SEND3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","5","5",null,null,"5","5",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDataLeft","554","40","516",null,null,"5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staMessage","1","40","97",null,null,"5",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("2");
            obj.set_text("메세지");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBgMessage","staMessage:-1","40","419",null,null,"5",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new TextArea("txtCONTENT","staMessage:4","45","410",null,null,"10",null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("0");
            obj.set_value("");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.set_maxlength("1000");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staMessage00","1","0","97","41",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("3");
            obj.set_text("제목");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Static("staBgMessage00","97","0","419","41",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new TextArea("txtTITLE","102","5","410","31",null,null,null,null,null,null,this.divData.form.divDataLeft.form);
            obj.set_taborder("5");
            obj.set_value("");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.set_maxlength("1000");
            this.divData.form.divDataLeft.addChild(obj.name, obj);

            obj = new Div("divDataRight","1090","40","340",null,null,"5",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtCONTENTPREVIEW","0","40","340",null,null,"5",null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("10");
            obj.set_value("");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.set_maxlength("1000");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new TextArea("txtTITLEPREVIEW","0","0","340","38",null,null,null,null,null,null,this.divData.form.divDataRight.form);
            obj.set_taborder("1");
            obj.set_value("");
            obj.set_visible("true");
            obj.set_enable("true");
            obj.set_maxlength("1000");
            obj.set_readonly("true");
            this.divData.form.divDataRight.addChild(obj.name, obj);

            obj = new Div("divDataCenter","10","40","536",null,null,"5",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnDivSelect","0","7","70","25",null,null,null,null,null,null,this.divData.form.divDataCenter.form);
            obj.set_taborder("3");
            obj.set_text("☞부분선택");
            this.divData.form.divDataCenter.addChild(obj.name, obj);

            obj = new Button("btnDivCancel","btnDivSelect:10","7","70","25",null,null,null,null,null,null,this.divData.form.divDataCenter.form);
            obj.set_taborder("2");
            obj.set_text("☞부분해제");
            this.divData.form.divDataCenter.addChild(obj.name, obj);

            obj = new Button("btnDivDelete","btnDivCancel:10","7","70","25",null,null,null,null,null,null,this.divData.form.divDataCenter.form);
            obj.set_taborder("1");
            obj.set_text("☞부분삭제");
            this.divData.form.divDataCenter.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","btnDivSelect:43","525",null,null,"5",null,null,null,null,this.divData.form.divDataCenter.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataCenter.addChild(obj.name, obj);

            obj = new Static("staMessage00","0","41","87","35",null,null,null,null,null,null,this.divData.form.divDataCenter.form);
            obj.set_taborder("4");
            obj.set_text("송신자명");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataCenter.addChild(obj.name, obj);

            obj = new Static("staBgMessage00_00","86","41","159","35",null,null,null,null,null,null,this.divData.form.divDataCenter.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("(주)굿센");
            this.divData.form.divDataCenter.addChild(obj.name, obj);

            obj = new Static("staMessage00_00","244","41","87","35",null,null,null,null,null,null,this.divData.form.divDataCenter.form);
            obj.set_taborder("6");
            obj.set_text("송신자번호");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("right");
            this.divData.form.divDataCenter.addChild(obj.name, obj);

            obj = new Static("staBgMessage00_00_00","330","41","195","35",null,null,null,null,null,null,this.divData.form.divDataCenter.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("02-750-8000");
            this.divData.form.divDataCenter.addChild(obj.name, obj);

            obj = new Static("staSMSDETAIL","1089","5","341","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("SMS 발송 내용 확인");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSMS00","560","5","35.94%","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("SMS 발송 내용");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSMS","20","5","36.22%","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("SMS 수신자 정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item9","divData.form.divDataLeft.form.txtCONTENT","value","dsList","CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.divDataRight.form.txtCONTENTPREVIEW","value","dsList","CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.divDataLeft.form.txtTITLE","value","dsList","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.divDataRight.form.txtTITLEPREVIEW","value","dsList","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DRB_SENDSMS_KSBJ.xfdl", function() {
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

        	this.fnSelectDS();

        };

        /************************************************************************
        * 버튼 설정 : 화면(Tab) 전환시 마다 호출
        ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Add.set_enable(true);
        	this.FormBtns.Del.set_enable(true);
        	this.FormBtns.Excel.set_enable(true);
        }

        /************************************************************************
        * 확장 버튼 : 화면별 버튼 설정 ID, function 연결
        ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnExcelUpload = this.gfnFormButtonAdd("btnExcelUpload", "fnExcelUpload"); 	//엑셀업로드
        	this.SMSEND = this.gfnFormButtonAdd("btnSMSEND", "fnSMSEND");
        	this.SENDRESULT = this.gfnFormButtonAdd("btnSENDRESULT", "fnSENDRESULT");
        };

        /************************************************************************
        * 변수 선언
        ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid  	    = this.divData.form.divDataCenter.form.objGrid;
        };

        /************************************************************************
        * 이벤트 설정
        ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsListGrid, "DR", "DRB_SENDSMS2");

        	//this.dxGrid.set_selecttype("cell");

        	//this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        }
        /************************************************************************
        * 파라미터 설정
        ************************************************************************/
        this.fnSetParameter = function() {
        	/*
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_FROM", "string");
        	this.dsSelect.addColumn("DT_TO", "string");
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN", "string");
        	this.dsSelect.addColumn("NO_CHASU", "string");
        	this.dsSelect.addColumn("TY_PAY", "string");
        	this.dsSelect.addColumn("TY_DIV", "string");
        	this.dsSelect.addColumn("NO_DONG", "string");
        	this.dsSelect.addColumn("NO_HO", "string");
        	*/

        	this.dsSelect2 = new Dataset();
        	this.dsSelect2.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect2.addColumn("TY_GUBUN", "string");
        	this.dsSelect2.addColumn("NO_CHASU", "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("Title", "string");
        	this.dsInsert.addColumn("Content", "string");
        	this.dsInsert.addColumn("ToPhone", "string");
        };

        /************************************************************************
        * 컨트롤 이벤트
        ************************************************************************/
        /*
        *	조회 버튼
        */
        this.fnSelect = function() {

        };


        /*
        *	입력 버튼
        */
        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid); // top (default), bottom, current
        	this.dsListGrid.addRow();
        };

        /*
        *	삭제 버튼
        */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        	this.dsListGrid.deleteRow(this.dsListGrid.rowposition);
        };

        /*
        *	저장 버튼
        */
        this.fnSave = function() {
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();
        	this.dsInsert.clearData();

        	for (var i = 0; i < this.dsListGrid.rowcount; i++) {
        		var flag = this.dsListGrid.getColumn(i,"CHK")

        		switch(flag) {
        		case 1:
        			var nrow = this.dsInsert.addRow();
        			this.dsInsert.setColumn(nrow, "Title", this.dsList.getColumn(0, "TITLE"));
        			this.dsInsert.setColumn(nrow, "Content", this.dsList.getColumn(0, "CONTENT"));
        			this.dsInsert.setColumn(nrow, "ToPhone", this.dsListGrid.getColumn(i, "TOPHONE"));
        			break;
        		}
        	}
        	if (this.dsInsert.rowcount == 0) return;

        	var strSvcId    = "save";
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
        };

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


        /************************************************************************
        * Validate
        ************************************************************************/
        /*
        *	조회 Validate
        */
        this.fnSelectValidate = function() {
        	var validate = true;


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

        	} else if(svcID == "save"){
        		if (errorCode == 0) {
        			this.gfnAlert("SMS 송신이 완료 되었습니다.");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "selectDs"){
        		this.dsList.clearData();
        		this.dsList.addRow();

        		if(this.dsListDs.rowcount > 0){
        			this.dsList.setColumn(0, "DS_USER", this.dsListDs.getColumn(0, "DS_CORP"));
        		}

        		if(this.dsListNo.rowcount > 0){
        			this.dsList.setColumn(0, "NO_TEL", this.dsListNo.getColumn(0, "CD_VALUE"));
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
        this.fnSelectDS = function() {
        	//if (!this.fnSelectValidate()) return false;

        	//this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect2.clearData();
        	this.dsSelect2.addRow();

        	this.dsSelect2.setColumn(0, "CD_ACNTUNIT", "K30600");
        	this.dsSelect2.setColumn(0, "TY_GUBUN", "A");
        	this.dsSelect2.setColumn(0, "NO_CHASU", "00");

        	var strSvcId    = "selectDs";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select_ds=dsSelect2 select_no=dsSelect2";
        	var outData     = "dsListDs=select_ds0 dsListNo=select_no0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        		strSvcType , 	// transaction을 요청할 구분
        		inProc,			// Procedure 정보 Dataset 이름
        		inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        		outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        		strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        		callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_left(e.clientx);
        		this.divData.form.resetScroll();
        	}
        };

        this.fnValidateCheck = function ()
        {
        	return true;
        };

        this.fnSMSEND = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	if (this.dsListGrid.rowcount < 1) { return false; }

        	if (!this.fnSendValidate()) return false;

        	var nChkRowCnt = this.dsListGrid.getCaseCount( "CHK == 1" );
        	if (nChkRowCnt <= 0){
        		this.gfnAlert("송신 자료를 선택하여 주십시오!");
        		return;
        	}else{
        		this.fnSave();
        	}

        };
        this.fnSENDRESULT = function(obj,e) {
        	//if (!this.gfnGridIsRow(this.dxGrid)) { return false; }
        	var param = {};
        	param.CD_ACNTUNIT = "";
        	param.DS_ACNTUNIT = "";
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DRB_SMS_RESULT", "",  param);
        };

        // 엑셀업로드
        this.fnExcelUpload = function(obj,e) {
        	//if (!this.fnSelectValidate()) return false;

        	this.dsListGrid.clearData();

        	// this.gfnExcelImport("적용할Dataset명","sheet명","데이터시작좌표","콜백함수명","구분ID",현재폼);
        	// sheet명 없으면 첫번째 sheet
        	this.gfnExcelImport("dsListGrid","sheet1","A2","fnExcelImportCallback","import",this);

        };


        this.fnExcelImportCallback = function(sImportId, dsOut, dsSheet) {
         	if (dsOut.rowcount == 0)  {
        		this.gfnAlert("엑셀파일에 내용이 없습니다.");
        		return false;
        	}

        	// 주석시작(양식 다운로드해서 업로드하는게 아니면 아래 부분 주석처리하고 값셋하는부분 더 아래부분 주석 풀어서 처리하면 됨, copyRow로 주석처리해야함)
        	//trace(dsOut.saveXML());
        	for (var i=0; i< this.dsListGrid.getColCount(); i++)
        	{
        		sColumnId = "Column"+i;

        		var sColumnNm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, i);
        		if (sColumnNm != "" && sColumnId != sColumnNm)
        		{
        			dsOut.updateColID(sColumnId, sColumnNm);
        		}
        	}
        	//trace("==============111===============");
        	//trace(dsOut.saveXML());
        	// 주석종료

        	this.dsListGrid.set_enableevent(false);
        	for (var i=0; i< dsOut.rowcount; i++) {
        		var nrow = this.dsListGrid.addRow();

        		//아래 copyRow가 컬럼변경 이벤트를 실행하지 않음. 코드파인더 실행때문에 이 위치로 이동
        		// 양식이 일치하는 경우 copyRow
        		this.dsListGrid.copyRow(nrow, dsOut, i);

        		//this.dsList.setColumn(nrow, this.ucFlag, "I");

        		// 일단 화면에서 보이는 컬럼과 키값이되는 컬럼만 받음(null값 처리된 컬럼은 따로 엑셀에서 입력을 받던지 SP에서 조회후 처리해야할듯)
        		//this.dsList.setColumn(nrow, "CD_CORP"		, this.dsSearch.getColumn(0, "CD_CORP"));		// 법인코드
        		//this.dsList.setColumn(nrow, "DS_CORP"		, this.ccfCD_CORP.form.DSTextBox.value);		// 법인명
        		//this.dsList.setColumn(nrow, "YY_BASE"		, this.dsSearch.getColumn(0, "YY_BASE"));		// 년도
        	}
        	this.dsListGrid.set_enableevent(true);

        	// 버튼 활성화 시키기
        	this.fnSetButton();
        };


        // sms 발송전 체크
        this.fnSendValidate = function() {
        	var validate = true;

        	if(this.gfnIsNull(this.dsList.getColumn(0, "TITLE"))){
        		this.fnVaidateCallback = function() {
        			this.divData.form.divDataLeft.form.txtTITLE.setFocus();
        		}
        		this.gfnAlert("제목을 입력하셔야 합니다.", "fnVaidateCallback");

        		return false;
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "CONTENT"))){
        		this.fnVaidateCallback = function() {
        			this.divData.form.divDataLeft.form.txtCONTENT.setFocus();
        		}
        		this.gfnAlert("메세지를 입력하셔야 합니다.", "fnVaidateCallback");

        		return false;
        	}

        	return validate;
        };

        // 부분선택
        this.divData_divDataCenter_btnDivSelect_onclick = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var rows = this.dxGrid.getSelectedDatasetRows();
        	for(var r = 0; r < rows.length; r++) {
        		this.dsListGrid.setColumn(rows[r], "CHK", 1);
        	}
        };

        // 부분해제
        this.divData_divDataCenter_btnDivCancel_onclick = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var rows = this.dxGrid.getSelectedDatasetRows();
        	for(var r = 0; r < rows.length; r++) {
        		this.dsListGrid.setColumn(rows[r], "CHK", 0);
        	}
        };

        // 부분삭제
        this.divData_divDataCenter_btnDivDelete_onclick = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	this.dsListGrid.deleteMultiRows(this.dxGrid.getSelectedDatasetRows());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divDataCenter.form.btnDivSelect.addEventHandler("onclick",this.divData_divDataCenter_btnDivSelect_onclick,this);
            this.divData.form.divDataCenter.form.btnDivCancel.addEventHandler("onclick",this.divData_divDataCenter_btnDivCancel_onclick,this);
            this.divData.form.divDataCenter.form.btnDivDelete.addEventHandler("onclick",this.divData_divDataCenter_btnDivDelete_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DRB_SENDSMS_KSBJ.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
