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
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAGPR_WORKINFO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YM_BASE\"/><Col id=\"CD_CORP\"/><Col id=\"ID_SABUN\"/><Col id=\"ID_PERSON\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListTemp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_YYYYMM","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_BASE","staDT_YYYYMM:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","ctclYM_BASE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","ccfID_SABUN:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_CORP00","edtID_PERSON:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
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
            obj = new BindItem("item0","divSearch.form.ctclYM_BASE.form.TextBox","value","dsSearch","YM_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtID_PERSON","value","dsSearch","ID_PERSON");
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
        this.registerScript("DAG_WORKDAY_INFO.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this._STATUS = "";

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
        	this.dsSearch.setColumn(0, "YM_BASE", today.substr(0,6));


        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfID_SABUN.form.CDTextBox.set_value(this.AuthClient.ID_SABUN);
        	this.ccfID_SABUN.form.DSTextBox.set_value(this.AuthClient.DS_HNAME);
        	this.edtID_PERSON.set_value(this.AuthClient.ID_PERSON);

        	//20210708
        	//GR_SEARCH = 1인 경우에 법인 ENABLE성명 ENABLE
        	//GR_SEARCH = 2인 경우에 법인 DISABLE 성명 ENABLE
        	//GR_SEARCH > 2인 경우에 법인 DISABLE 성명 DISABLE
        	if(this.FormInfo.GR_SEARCH == "1"){
        		this.ccfCD_CORP.set_enable(true);
        		this.ccfID_SABUN.set_enable(true);
        	}
        	else if(this.FormInfo.GR_SEARCH == "2"){
        		this.ccfCD_CORP.set_enable(false);
        		this.ccfID_SABUN.set_enable(true);
        	}
        	else if(this.FormInfo.GR_SEARCH > "2"){
        		this.ccfCD_CORP.set_enable(false);
        		this.ccfID_SABUN.set_enable(false);
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
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;
        	this.edtID_PERSON = this.divSearch.form.edtID_PERSON;

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO_ALL";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAG_WORKDAY_INFO");

        	this.dxGrid.set_selecttype("cell");
        	//this.dxGrid.addEventHandler("onselectchanged", this.fnGrid_RowCellChanged, this);
        	this.dxGrid.addEventHandler("oncelldblclick", this.fnGrid_CellDblclick, this);

        	// 주합계 컬럼 글자 굵게
        	var colWEEK_SUM = this.dxGrid.getBindCellIndex("body", "WEEK_SUM");
        	this.dxGrid.setCellProperty("body", colWEEK_SUM, "font", "bold 9pt Dotum");

        	// 구분 컬럼 글자 굵게
        	//var colGUBUN = this.dxGrid.getBindCellIndex("body", "GUBUN");
        	//this.dxGrid.setCellProperty("body", colGUBUN, "font", "bold 9pt Dotum");

        	// 컬럼안에 일부 글자만 굵게 처리하기위해 컬럼 타입을 변경한다.
        	var colMON = this.dxGrid.getBindCellIndex("body", "MON");
        	var colTUE = this.dxGrid.getBindCellIndex("body", "TUE");
        	var colWED = this.dxGrid.getBindCellIndex("body", "WED");
        	var colTHU = this.dxGrid.getBindCellIndex("body", "THU");
        	var colFRI = this.dxGrid.getBindCellIndex("body", "FRI");
        	var colSAT = this.dxGrid.getBindCellIndex("body", "SAT");
        	var colSUN = this.dxGrid.getBindCellIndex("body", "SUN");
        	this.dxGrid.setCellProperty("Body",colMON,"displaytype","decoratetext");
        	this.dxGrid.setCellProperty("Body",colTUE,"displaytype","decoratetext");
        	this.dxGrid.setCellProperty("Body",colWED,"displaytype","decoratetext");
        	this.dxGrid.setCellProperty("Body",colTHU,"displaytype","decoratetext");
        	this.dxGrid.setCellProperty("Body",colFRI,"displaytype","decoratetext");
        	this.dxGrid.setCellProperty("Body",colSAT,"displaytype","decoratetext");
        	this.dxGrid.setCellProperty("Body",colSUN,"displaytype","decoratetext");


        	this.gfnGridColumnColor(this.dxGrid, "MON", "BACK_ReadOnly", "ST_PROGRESS == '개발의뢰'");

        	/*
        	this.gfnGridColumnColor(this.dxGrid, "MON", "Red", "comp.parent.parent.parent.fnSetColor(rowidx," + "'MON'" + ") == true");
        	this.gfnGridColumnColor(this.dxGrid, "TUE", "Red", "comp.parent.parent.parent.fnSetColor(rowidx," + "'TUE'" + ") == true");
        	this.gfnGridColumnColor(this.dxGrid, "WED", "Red", "comp.parent.parent.parent.fnSetColor(rowidx," + "'WED'" + ") == true");
        	this.gfnGridColumnColor(this.dxGrid, "THU", "Red", "comp.parent.parent.parent.fnSetColor(rowidx," + "'THU'" + ") == true");
        	this.gfnGridColumnColor(this.dxGrid, "FRI", "Red", "comp.parent.parent.parent.fnSetColor(rowidx," + "'FRI'" + ") == true");
        	this.gfnGridColumnColor(this.dxGrid, "SAT", "Red", "comp.parent.parent.parent.fnSetColor(rowidx," + "'SAT'" + ") == true");
        	*/
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YM_BASE", "string");
        	this.dsSelect.addColumn("ID_PERSON", "int");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("GR_CORP", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));		// 01
        	this.dsSelect.setColumn(0, "YM_BASE", this.dsSearch.getColumn(0, "YM_BASE"));
        	this.dsSelect.setColumn(0, "ID_PERSON", this.dsSearch.getColumn(0, "ID_PERSON"));	// 1269
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));		// B050611
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "GR_CORP", this.AuthClient.CD_CORP);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsListTemp=select0";
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
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {


        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크

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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0,"YM_BASE"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ctclYM_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("조회년월을 입력하세요.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsSearch.getColumn(0,"ID_SABUN"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfID_SABUN.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("성명을 입력하세요.", "fnVaidateCallback");
        	}

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
        		if(this.dsListTemp.rowcount < 1) return;

        		this.dsList.clearData();

        		var dayRow = "";
        		var gubunRow1 = "";

        		this.dsList.set_enableevent(false);
        		gubunRow1 = this.dsList.addRow();
        		//this.dsList.setColumn(gubunRow1, "GUBUN", "일자\n\n근무시간\n\n근무시간계\n\n근무구분");
        		this.dsList.setColumn(gubunRow1, "GUBUN", "일자\n\n출퇴근시간\n\n휴게시간\n\n일 근무시간\n\n근무구분");
        		this.dsList.set_enableevent(true);

        		//this.dxGrid.setRealRowSize(gubunRow1, 120);	// 그리드 높이 조절
        		this.dxGrid.setRealRowSize(gubunRow1, 135);	// 그리드 높이 조절

        		for(var i = 0; i < this.dsListTemp.rowcount; i++){
        			if(this.dsListTemp.getColumn(i, "DS_DAY") == "월요일"){
        				dayRow = "MON";
        			}else if(this.dsListTemp.getColumn(i, "DS_DAY") == "화요일"){
        				dayRow = "TUE";
        			}else if(this.dsListTemp.getColumn(i, "DS_DAY") == "수요일"){
        				dayRow = "WED";
        			}else if(this.dsListTemp.getColumn(i, "DS_DAY") == "목요일"){
        				dayRow = "THU";
        			}else if(this.dsListTemp.getColumn(i, "DS_DAY") == "금요일"){
        				dayRow = "FRI";
        			}else if(this.dsListTemp.getColumn(i, "DS_DAY") == "토요일"){
        				dayRow = "SAT";
        			}else if(this.dsListTemp.getColumn(i, "DS_DAY") == "일요일"){
        				dayRow = "SUN";
        			}else if(this.dsListTemp.getColumn(i, "TY_GUBUN") == "S"){	// 주합계
        				dayRow = "WEEK_SUM";
        			}


        			var ddWork = this.dsListTemp.getColumn(i, "DD_WORK");	// 일자(글자 굵게 처리)
        			var tmWork = this.dsListTemp.getColumn(i, "TM_WORK");	// 출퇴근시간
        			var tmBreak = this.dsListTemp.getColumn(i, "TM_BREAK");	// 휴게시간
        			var sumWork = this.dsListTemp.getColumn(i, "SUM_WORK");	// 일 근무시간
        			var dsWork = this.dsListTemp.getColumn(i, "DS_WORK");	// 근무구분

        			var gongbak = "       ";
        			if(dsWork.length == 2){
        				gongbak = "          ";
        			}




        			this.dsList.set_enableevent(false);
        			if(this.dsListTemp.getColumn(i, "TY_GUBUN") == "S"){	// 주합계 컬럼은 띄워쓰기 하지않는다
        				this.dsList.setColumn(gubunRow1, dayRow, ddWork+"\n\n"+tmWork+"\n\n"+tmBreak+"\n\n"+sumWork+"\n\n"+dsWork);
        			}else{	// 띄워쓰기 해준다
        				// 더블클릭해서 팝업띄울때 일자를 넘겨주기위해 사용하진 않지만 테그를 넣어서 구분해준다(지난달은:div, 다음달:span)
        				if(nexacro.replaceAll(this.dsListTemp.getColumn(i, "DT_WORK"), "-", "").substr(0,6) < this.dsSearch.getColumn(0, "YM_BASE").substr(0,6)){
        					this.dsList.setColumn(gubunRow1, dayRow, "                       "+"</div><b v='true'>"+ddWork+"</b>"+"\n\n    "+tmWork+"\n\n         "+tmBreak+"\n\n     "+sumWork+"\n\n"+gongbak+dsWork);
        				}else if(nexacro.replaceAll(this.dsListTemp.getColumn(i, "DT_WORK"), "-", "").substr(0,6) > this.dsSearch.getColumn(0, "YM_BASE").substr(0,6)){
        					this.dsList.setColumn(gubunRow1, dayRow, "                       "+"</span><b v='true'>"+ddWork+"</b>"+"\n\n    "+tmWork+"\n\n         "+tmBreak+"\n\n     "+sumWork+"\n\n"+gongbak+dsWork);
        				}else{
        					this.dsList.setColumn(gubunRow1, dayRow, "                       "+"<b v='true'>"+ddWork+"</b>"+"\n\n    "+tmWork+"\n\n         "+tmBreak+"\n\n     "+sumWork+"\n\n"+gongbak+dsWork);
        				}
        			}
        			this.dsList.set_enableevent(true);



        			// 마지막 row일경우에는 새로운 row을 만들지 않는다
        			if(i != this.dsListTemp.rowcount - 1){
        				if(this.dsListTemp.getColumn(i, "TY_GUBUN") == "S"){	// 해당 row가 합계 row면 다음 row셋을 만든다.
        					this.dsList.set_enableevent(false);
        					gubunRow1 = this.dsList.addRow();
        					//this.dsList.setColumn(gubunRow1, "GUBUN", "일자\n\n근무시간\n\n근무시간계\n\n근무구분");
        					this.dsList.setColumn(gubunRow1, "GUBUN", "일자\n\n출퇴근시간\n\n휴게시간\n\n일 근무시간\n\n근무구분");
        					this.dsList.set_enableevent(true);

        					//this.dxGrid.setRealRowSize(gubunRow1, 120);	// 그리드 높이 조절
        					this.dxGrid.setRealRowSize(gubunRow1, 135);	// 그리드 높이 조절
        				}
        			}
        		}
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /*
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {
        		if(this.dsListTemp.rowcount < 1) return;


        		var dayRow = "";
        		var gubunRow1 = "";
        		var gubunRow2 = "";
        		var gubunRow3 = "";
        		var gubunRow4 = "";

        		this.dsList.set_enableevent(false);
        		gubunRow1 = this.dsList.addRow();
        		this.dsList.setColumn(gubunRow1, "GUBUN", "일자");
        		gubunRow2 = this.dsList.addRow();
        		this.dsList.setColumn(gubunRow2, "GUBUN", "근무시간");
        		gubunRow3 = this.dsList.addRow();
        		this.dsList.setColumn(gubunRow3, "GUBUN", "근무시간계");
        		gubunRow4 = this.dsList.addRow();
        		this.dsList.setColumn(gubunRow4, "GUBUN", "근무구분");
        		this.dsList.set_enableevent(true);

        		for(var i = 0; i < this.dsListTemp.rowcount; i++){
        			if(this.dsListTemp.getColumn(i, "DS_DAY") == "월요일"){
        				dayRow = "MON";
        			}else if(this.dsListTemp.getColumn(i, "DS_DAY") == "화요일"){
        				dayRow = "TUE";
        			}else if(this.dsListTemp.getColumn(i, "DS_DAY") == "수요일"){
        				dayRow = "WED";
        			}else if(this.dsListTemp.getColumn(i, "DS_DAY") == "목요일"){
        				dayRow = "THU";
        			}else if(this.dsListTemp.getColumn(i, "DS_DAY") == "금요일"){
        				dayRow = "FRI";
        			}else if(this.dsListTemp.getColumn(i, "DS_DAY") == "토요일"){
        				dayRow = "SAT";
        			}else if(this.dsListTemp.getColumn(i, "DS_DAY") == "일요일"){
        				dayRow = "SUN";
        			}else if(this.dsListTemp.getColumn(i, "TY_GUBUN") == "S"){	// 주합계
        				dayRow = "WEEK_SUM";
        			}

        			this.dsList.set_enableevent(false);
        			this.dsList.setColumn(gubunRow1, dayRow, this.dsListTemp.getColumn(i, "DD_WORK")+"\n하하하");	// 일자
        			this.dsList.setColumn(gubunRow2, dayRow, this.dsListTemp.getColumn(i, "TM_WORK"));	// 근무시간
        			this.dsList.setColumn(gubunRow3, dayRow, this.dsListTemp.getColumn(i, "SUM_WORK"));	// 근무시간계
        			this.dsList.setColumn(gubunRow4, dayRow, this.dsListTemp.getColumn(i, "DS_WEEK"));	// 근무구분
        			this.dsList.set_enableevent(true);

        			// 마지막 row일경우에는 새로운 row을 만들지 않는다
        			if(i != this.dsListTemp.rowcount - 1){
        				if(this.dsListTemp.getColumn(i, "TY_GUBUN") == "S"){	// 해당 row가 합계 row면 다음 row셋을 만든다.
        					this.dsList.set_enableevent(false);
        					gubunRow1 = this.dsList.addRow();
        					this.dsList.setColumn(gubunRow1, "GUBUN", "일자");
        					gubunRow2 = this.dsList.addRow();
        					this.dsList.setColumn(gubunRow2, "GUBUN", "근무시간");
        					gubunRow3 = this.dsList.addRow();
        					this.dsList.setColumn(gubunRow3, "GUBUN", "근무시간계");
        					gubunRow4 = this.dsList.addRow();
        					this.dsList.setColumn(gubunRow4, "GUBUN", "근무구분");
        					this.dsList.set_enableevent(true);
        				}
        			}
        		}



        		//var nCell = this.dxGrid.mergeContentsCell("body",0,2,3,2,2,true);
        		//var nCell = this.dxGrid.mergeContentsCell("body",0,1,0,3,1,false);



        		// 그리드 높이 조절
        		//for(var i = 0; i < this.dsList.rowcount; i++){
        		//	this.dxGrid.setRealRowSize(i, 60);
        		//}

        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }
        */


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if(id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}
        	else if(id == "ccfID_SABUN") {
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.fnVaidateCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요.");
        			return false;
        		}

        		//dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);//this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "N");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        	}

        	return true;
        };


        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfCD_CORP") {
        		this.ccfID_SABUN.form.fnCodeFindClear();
        		this.edtID_PERSON.set_value("");

        	}else if(id == "ccfID_SABUN") {
        		if(arr.length > 0) {
        			this.edtID_PERSON.set_value(arr[0]["ID_PERSON"]);
        		}else{
        			this.edtID_PERSON.set_value("");
        		}
        	}
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_CellDblclick = function(obj,e){
        	var colName = this.gfnGridGetBindColumnNameByIndex(obj, e.cell);

        	// 근무일자를 팝업화면에 전달하기위해 요일을 클릭했을때만 팝업화면 호출하게 함.
        	if(colName == "MON" || colName == "TUE" || colName == "WED" || colName == "THU" || colName == "FRI" || colName == "SAT" || colName == "SUN"){
        		if(!this.gfnIsNull(this.dxGrid.getCellValue(e.row,e.cell))){
        			//상세조회 팝업 오픈
        			var param = {};

        			var dtWork = "";
        			if(this.dxGrid.getCellValue(e.row,e.cell).indexOf("</div>") > -1 ){	// 이전월(컬럼안에 </div> 글자가있으면 이전월)
        				dtWork = this.gfnAddMonth(this.dsSearch.getColumn(0,"YM_BASE")+"01",-1).substr(0,6) + this.dxGrid.getCellValue(e.row,e.cell).trim().substr(18,2);	// 근무일자(글자bold처리하는 부분이 포함되어있어 맞게 자름)
        			}else if(this.dxGrid.getCellValue(e.row,e.cell).indexOf("</span>") > -1){	// 다음월(컬럼안에 </span> 글자가있으면 다음월)
        				dtWork = this.gfnAddMonth(this.dsSearch.getColumn(0,"YM_BASE")+"01",1).substr(0,6) + this.dxGrid.getCellValue(e.row,e.cell).trim().substr(19,2);	// 근무일자(글자bold처리하는 부분이 포함되어있어 맞게 자름)
        			}else{	// 현재월(그 이외에는 모두 현재월)
        				dtWork = this.dsSearch.getColumn(0, "YM_BASE") + this.dxGrid.getCellValue(e.row,e.cell).trim().substr(12,2);	// 근무일자(글자bold처리하는 부분이 포함되어있어 맞게 자름)
        			}

        			param.CD_CORP = this.AuthClient.CD_CORP;
        			param.DT_WORK = dtWork;
        			param.ID_PERSON = this.dsSearch.getColumn(0, "ID_PERSON");
        			param.ID_SABUN = this.dsSearch.getColumn(0, "ID_SABUN");

        			this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAG_WORKDAY_INFO_DLG", "", param);

        			//this.fnSchList();
        		}
        	}
        };
        /*
        // 상세조회 팝업 오픈
        this.fnSchList = function() {
        	//if(!this.gfnGridIsRow(this.dxGrid)) {return false;}

        	var param = {};

        	param.CD_CORP = "01";
        	param.DT_WORK = this.dsSearch.getColumn(0, "YM_BASE");
        	param.ID_PERSON = 1269;
        	param.ID_SABUN = "B050611";

        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAG_WORKDAY_INFO_DLG", "", param);
        }
        */
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



        this.fnSetColor = function(currow, column)
        {
        	var day = this.dsList.getColumn(currow, column);
        	var arrDay = this.gfnNvl(day, "").replace("\n\n", "@").split("@");

        	if(this.gfnNvl(arrDay[1],"").length > 1)
        	{
        		return true;
        	}

        	return false;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.staCD_CORP00.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_CORP.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.objGrid.addEventHandler("onselectchanged",this.divData_objGrid_onselectchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAG_WORKDAY_INFO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
