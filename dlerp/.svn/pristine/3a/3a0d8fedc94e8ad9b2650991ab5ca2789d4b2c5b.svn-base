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
                this._setFormPosition(900,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DZFPR_EVAL_SITE_JUDGE_SCORE_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DZFPR_EVAL_SITE_JUDGE_SCORE_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"EVAL_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"EVAL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"45","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","60","25","7",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("검색");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfMagam","140","10","98","25",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("CodeFindName").set("DCX_CFEVALUE_MAGAM_SITE_VENDOR");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","ccfMagam:20","10","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("현장코드");
            obj.set_textDecoration("none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0","10","250","25",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFSITE");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYEAR","10","10","50","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("평가년도");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYEAR","staYEAR:10","10","60","25",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","70",null,null,"0.00%","0.00%",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","100.00%","22",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("평가");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta02:5","100.00%","95.23%",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("sub").set("true");
            obj.set_taborder("0");
            obj.set_autosizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSend",null,"0","80","25","7",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("평가 제출");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfMagam.form.CDTextBox","value","dsSearch","EVAL_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYEAR.form.TextBox","value","dsSearch","EVAL_YEAR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DZE_EVAL_SITE_JUDGE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this._tyGubun = "";

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

        	if(!this.gfnIsNull(this.getOwnerFrame().EVAL_YEAR) && !this.gfnIsNull(this.getOwnerFrame().EVAL_TYPE)
        	&& !this.gfnIsNull(this.getOwnerFrame().CD_SITE) && !this.gfnIsNull(this.getOwnerFrame().CD_VENDOR)  )
        	{
        		this.dsSearch.clearData();
        		var nRow = this.dsSearch.addRow();

        		this.dsSearch.setColumn(nRow , "EVAL_YEAR", this.getOwnerFrame().EVAL_YEAR );
        		this.dsSearch.setColumn(nRow , "EVAL_TYPE", this.getOwnerFrame().EVAL_TYPE );
        		this.dsSearch.setColumn(nRow , "CD_SITE"  , this.getOwnerFrame().CD_SITE );
        		this.dsSearch.setColumn(nRow , "CD_VENDOR", this.getOwnerFrame().CD_VENDOR );
        		this.dsSearch.setColumn(nRow , "DS_VENDOR", this.getOwnerFrame().DS_VENDOR );

        		this.ccfCD_SITE.form.DSTextBox.set_value( this.getOwnerFrame().DS_SITE );

        		this.FormBtns.Select.click();

        	}

        	//this.FormBtns.Select.click();
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
        	//this.btn1 = this.gfnFormButtonAdd("btnEVALItem", "fnEVALItem");
        	//this.btnCreate = this.gfnFormButtonAdd("btnCreate", "fnCreate");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYEAR = this.divSearch.form.ctclYEAR;
        	this.ccfMagam = this.divSearch.form.ccfMagam;
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;

        	this.dxGrid = this.divData.form.objGrid;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfMagam.form.DSTextBox.set_width("0");
        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DZ", "DZF_EVAL_SITE_JUDGE");

        	this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	var cellIndex1 = this.dxGrid.getBindCellIndex( "body", "EVAL_YN_1");
        	var cellIndex2 = this.dxGrid.getBindCellIndex( "body", "EVAL_YN_2");
        	var cellIndex3 = this.dxGrid.getBindCellIndex( "body", "EVAL_YN_3");
        	var cellIndex4 = this.dxGrid.getBindCellIndex( "body", "EVAL_YN_4");
        	var cellIndex5 = this.dxGrid.getBindCellIndex( "body", "EVAL_YN_5");

        	this.dxGrid.set_enableredraw(false);
        	//체크박스 displaytype
        	this.dxGrid.setCellProperty("body", cellIndex1, "displaytype", "expr:ENABLE_YN_1=='N'? 'none':'checkboxcontrol'" );
        	this.dxGrid.setCellProperty("body", cellIndex2, "displaytype", "expr:ENABLE_YN_2=='N'? 'none':'checkboxcontrol'" );
        	this.dxGrid.setCellProperty("body", cellIndex3, "displaytype", "expr:ENABLE_YN_3=='N'? 'none':'checkboxcontrol'" );
        	this.dxGrid.setCellProperty("body", cellIndex4, "displaytype", "expr:ENABLE_YN_4=='N'? 'none':'checkboxcontrol'" );
        	this.dxGrid.setCellProperty("body", cellIndex5, "displaytype", "expr:ENABLE_YN_5=='N'? 'none':'checkboxcontrol'" );

        	//체크박스 edittype
        // 	this.dxGrid.setCellProperty("body", cellIndex1, "edittype", "expr:YN_SEND=='Y'? 'none': 'checkbox'" );
        // 	this.dxGrid.setCellProperty("body", cellIndex2, "edittype", "expr:YN_SEND=='Y'? 'none': 'checkbox'" );
        // 	this.dxGrid.setCellProperty("body", cellIndex3, "edittype", "expr:YN_SEND=='Y'? 'none': 'checkbox'" );
        // 	this.dxGrid.setCellProperty("body", cellIndex4, "edittype", "expr:YN_SEND=='Y'? 'none': 'checkbox'" );

        	this.dxGrid.set_enableredraw(true);

        	//데이터셋 이벤트 추가.
        	this.dsList.addEventHandler("oncolumnchanged", this.dsList_oncolumnchanged, this);

        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("EVAL_YEAR", "string");
        	this.dsSelect.addColumn("EVAL_TYPE", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("EVAL_YEAR", "string");
        	this.dsUpdate.addColumn("EVAL_TYPE", "string");
        	this.dsUpdate.addColumn("EVAL_SEQ", "string");
        	this.dsUpdate.addColumn("CD_VENDOR", "string");
        	this.dsUpdate.addColumn("CD_SITE", "string");
        	this.dsUpdate.addColumn("EVAL_YN_1", "string");
        	this.dsUpdate.addColumn("EVAL_YN_2", "string");
        	this.dsUpdate.addColumn("EVAL_YN_3", "string");
        	this.dsUpdate.addColumn("EVAL_YN_4", "string");
        	this.dsUpdate.addColumn("EVAL_YN_5", "string");
        	this.dsUpdate.addColumn("AM_SCORE", "bigdecimal");
        	this.dsUpdate.addColumn("USER_ID", "string");
        	this.dsUpdate.addColumn("TY_GUBUN", "string");

        	//this.dsCreate = new Dataset();
        	//this.dsCreate.addColumn("EVAL_YEAR", "string");
        	//this.dsUpdate.addColumn("EVAL_TYPE", "string");
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

        	this.dsSelect.setColumn(0, "EVAL_YEAR",		this.dsSearch.getColumn(0, "EVAL_YEAR"));
        	this.dsSelect.setColumn(0, "EVAL_TYPE",     this.dsSearch.getColumn(0, "EVAL_TYPE"));
        	this.dsSelect.setColumn(0, "CD_VENDOR",     this.dsSearch.getColumn(0, "CD_VENDOR"));
        	this.dsSelect.setColumn(0, "CD_SITE",       this.dsSearch.getColumn(0, "CD_SITE"));
        	//this.dsSelect.setColumn(0, "NO_CONT",       this.dsSearch.getColumn(0, "NO_CONT"));

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


        //평가 제출
        this.divData_btnSend_onclick = function(obj,e)
        {
        	var nFindRow = this.dsList.findRow( "EVAL_YN_6", "Y" );
        	if( nFindRow > -1 ) {
        		this.gfnAlert("미평가된 평가항목이 있습니다.");
        		return false;
        	}
        	var msg = "평가제출시 더이상 수정할 수 없습니다.\n\n제출하시겠습니까?"

        	this.gfnConfirm( msg, "fn_SendCallback");

        };

        this.fn_SendCallback = function(strId, val) {
        	if(val == true) {
        		var nFindRow = this.dsList.findRow( "EVAL_YN_6", "Y" );

        		if( nFindRow == -1 ) {
        			this._tyGubun = "SEND"
        			this.FormBtns.Save.click();
        		}
        	}
        }


        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();
        	if( this.gfnIsNull(this._tyGubun) ) this._tyGubun = "SAVE";

        	this.dsUpdate.clearData();
        	//전체건 같이 움직인다.
        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var nrow = this.dsUpdate.addRow();

        		this.dsUpdate.setColumn(nrow, "EVAL_YEAR",  	this.dsList.getColumn(i, "EVAL_YEAR"));
        		this.dsUpdate.setColumn(nrow, "EVAL_TYPE",  	this.dsList.getColumn(i, "EVAL_TYPE"));
        		this.dsUpdate.setColumn(nrow, "EVAL_SEQ",  		this.dsList.getColumn(i, "EVAL_SEQ"));
        		this.dsUpdate.setColumn(nrow, "CD_SITE",  		this.dsList.getColumn(i, "CD_SITE"));
        		//this.dsUpdate.setColumn(nrow, "NO_CONT",  		this.dsList.getColumn(i, "NO_CONT"));
        		this.dsUpdate.setColumn(nrow, "CD_VENDOR",  	this.dsList.getColumn(i, "CD_VENDOR"));
        		this.dsUpdate.setColumn(nrow, "EVAL_YN_1",  	this.dsList.getColumn(i, "EVAL_YN_1"));
        		this.dsUpdate.setColumn(nrow, "EVAL_YN_2",  	this.dsList.getColumn(i, "EVAL_YN_2"));
        		this.dsUpdate.setColumn(nrow, "EVAL_YN_3",  	this.dsList.getColumn(i, "EVAL_YN_3"));
        		this.dsUpdate.setColumn(nrow, "EVAL_YN_4",  	this.dsList.getColumn(i, "EVAL_YN_4"));
        		this.dsUpdate.setColumn(nrow, "EVAL_YN_5",  	this.dsList.getColumn(i, "EVAL_YN_5"));
        		this.dsUpdate.setColumn(nrow, "AM_SCORE",	 	this.dsList.getColumn(i, "AM_SCORE"));
        		this.dsUpdate.setColumn(nrow, "USER_ID",  		this.AuthClient.ID_USER);
        		this.dsUpdate.setColumn(nrow, "TY_GUBUN",  		this._tyGubun);

        	}

        	if (this.dsUpdate.rowcount == 0) return;


        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsUpdate";
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
        		this.gfnGridAfterSelect(this.dxGrid);
        		//this.gfnSetFormStatus(this, "I");
        		this._tyGubun = "";

        		var nFindRow = this.dsList.findRow( "YN_SEND", "Y" );
        		if( nFindRow >= 0 ) {
        			this.dxGrid.set_enable(false);
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

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_SITE") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "CD_SAUPCENTER", "");
        	}else if(id == "ccfMagam"){
        		dsUserParam.setColumn(nrow, "YR_EVALUE", this.dsSearch.getColumn(0, "EVAL_YEAR"));
        		dsUserParam.setColumn(nrow, "ID_EVALUE", this.AuthClient.ID_USER);
        	}
        	return true;
        };
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
         	if (id == "DZX_CFDEPTCORP" ) {
         		dsUserParam.setColumn(nrow, "CD_CORP", "01");

         	}
        	return true;
        }

        this.fnGrid_RowCellChanged = function(obj,e)
        {
            if ((obj.oldrow > -1 && obj.oldrow == e.row)
        		|| (obj.oldrow == -1 && e.oldrow != e.row)) {

        		obj.oldrow = -1;
        	}
        };

        this.dsList_canrowposchange = function(obj,e) {
        // 	var can_rowchange = true;
        // 	for (var i = 0; i < this.dsList.rowcount; i++) {
        // 		var flag = this.gfnGetFlag(this.dsList, i);
        // 		if (flag == "I" || flag == "U" || flag == "D") {
        // 			can_rowchange = false;
        // 			break;
        // 		}
        // 	}
        // 	if(!can_rowchange) {
        // 		this._row = e.newrow;
        // 		this.gfnConfirm("변경된 데이터가 있습니다.\r\n계속 진행하시겠습니까?", "dsList_canrowposchange_callback");
        // 	}
        // 	return can_rowchange;
        }


        this.fnGrid_EnterCell = function(obj, row, cell) {
        	var colnm = this.gfnGridGetBindColumnNameByIndex(this.dxGrid, cell);

        	if( colnm == "EVAL_YN_1" ){
        		var enable = this.dsList.getColumn(this.dsList.rowposition, "ENABLE_YN_1" );
        		if( enable == "N") return false;
        	}
        	if( colnm == "EVAL_YN_2" ){
        		var enable = this.dsList.getColumn(this.dsList.rowposition, "ENABLE_YN_2" );
        		if( enable == "N") return false;
        	}
        	if( colnm == "EVAL_YN_3" ){
        		var enable = this.dsList.getColumn(this.dsList.rowposition, "ENABLE_YN_3" );
        		if( enable == "N") return false;
        	}
        	if( colnm == "EVAL_YN_4" ){
        		var enable = this.dsList.getColumn(this.dsList.rowposition, "ENABLE_YN_4" );
        		if( enable == "N") return false;
        	}
        	if( colnm == "EVAL_YN_5" ){
        		var enable = this.dsList.getColumn(this.dsList.rowposition, "ENABLE_YN_5" );
        		if( enable == "N") return false;
        	}
        }


        this.dsList_oncolumnchanged = function(obj,e)
        {

        	if( e.oldvalue != e.newvalue ) this.gfnSetFormStatus(this, "I");

        	if(e.columnid == "EVAL_YN_1" ) {
        		if( e.newvalue == 1 || e.newvalue == "Y"){
        			obj.setColumn( e.row , "EVAL_YN_2" , "N" );
        			obj.setColumn( e.row , "EVAL_YN_3" , "N" );
        			obj.setColumn( e.row , "EVAL_YN_4" , "N" );
        			obj.setColumn( e.row , "EVAL_YN_5" , "N" );
        			obj.setColumn( e.row , "EVAL_YN_6" , "N" );
        			obj.setColumn( e.row , "AM_SCORE" , obj.getColumn( e.row , "AM_EVAL_1") );
        		}else{
        			obj.setColumn( e.row , "EVAL_YN_6" , "Y" );
        			obj.setColumn( e.row , "AM_SCORE" , 0 );
        		}
        	}
        	if(e.columnid == "EVAL_YN_2" ) {
        		if( e.newvalue == 1 || e.newvalue == "Y"){
        			obj.setColumn( e.row , "EVAL_YN_1" , "N" );
        			obj.setColumn( e.row , "EVAL_YN_3" , "N" );
        			obj.setColumn( e.row , "EVAL_YN_4" , "N" );
        			obj.setColumn( e.row , "EVAL_YN_5" , "N" );
        			obj.setColumn( e.row , "EVAL_YN_6" , "N" );
        			obj.setColumn( e.row , "AM_SCORE" , obj.getColumn( e.row , "AM_EVAL_2") );
        		}else{
        			obj.setColumn( e.row , "EVAL_YN_6" , "Y" );
        			obj.setColumn( e.row , "AM_SCORE" , 0 );
        		}

        	}
        	if(e.columnid == "EVAL_YN_3" ) {
        		if( e.newvalue == 1 || e.newvalue == "Y"){
        			obj.setColumn( e.row , "EVAL_YN_1" , "N" );
        			obj.setColumn( e.row , "EVAL_YN_2" , "N" );
        			obj.setColumn( e.row , "EVAL_YN_4" , "N" );
        			obj.setColumn( e.row , "EVAL_YN_5" , "N" );
        			obj.setColumn( e.row , "EVAL_YN_6" , "N" );
        			obj.setColumn( e.row , "AM_SCORE" , obj.getColumn( e.row , "AM_EVAL_3") );
        		}else{
        			obj.setColumn( e.row , "EVAL_YN_6" , "Y" );
        			obj.setColumn( e.row , "AM_SCORE" , 0 );
        		}
        	}

        	if(e.columnid == "EVAL_YN_4" ) {
        		if( e.newvalue == 1 || e.newvalue == "Y"){
        				obj.setColumn( e.row , "EVAL_YN_1" , "N" );
        				obj.setColumn( e.row , "EVAL_YN_2" , "N" );
        				obj.setColumn( e.row , "EVAL_YN_3" , "N" );
        				obj.setColumn( e.row , "EVAL_YN_5" , "N" );
        				obj.setColumn( e.row , "EVAL_YN_6" , "N" );
        				obj.setColumn( e.row , "AM_SCORE" , obj.getColumn( e.row , "AM_EVAL_4") );
        		}else{
        			obj.setColumn( e.row , "EVAL_YN_6" , "Y" );
        			obj.setColumn( e.row , "AM_SCORE" , 0 );
        		}
        	}

        	if(e.columnid == "EVAL_YN_5" ) {
        		if( e.newvalue == 1 || e.newvalue == "Y"){
        				obj.setColumn( e.row , "EVAL_YN_1" , "N" );
        				obj.setColumn( e.row , "EVAL_YN_2" , "N" );
        				obj.setColumn( e.row , "EVAL_YN_3" , "N" );
        				obj.setColumn( e.row , "EVAL_YN_4" , "N" );
        				obj.setColumn( e.row , "EVAL_YN_6" , "N" );
        				obj.setColumn( e.row , "AM_SCORE" , obj.getColumn( e.row , "AM_EVAL_5") );
        		}else{
        			obj.setColumn( e.row , "EVAL_YN_6" , "Y" );
        			obj.setColumn( e.row , "AM_SCORE" , 0 );
        		}
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
        		//this.gfnGridClear(this.dxGrid);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.fnSelect,this);
            this.divData.form.btnSend.addEventHandler("onclick",this.divData_btnSend_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DZE_EVAL_SITE_JUDGE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
