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
            this.set_titletext("상호평가조회(항목기준)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAJPR_INTERACTION_ITEM_SELECT</Col></Row><Row><Col id=\"TARGET\">selectHeader</Col><Col id=\"SP\">DAJPR_INTERACTION_ITEM_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"TY_EVALUATION\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_EVALUATION", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">01</Col><Col id=\"DS_CODE\">상반기</Col></Row><Row><Col id=\"CD_CODE\">02</Col><Col id=\"DS_CODE\">하반기</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHeader", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYY_EVALUATION","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("평가년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfYY_EVALUATION","staYY_EVALUATION:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTY_EVALUATION","ccfYY_EVALUATION:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("구분");
            obj.set_rtl("false");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTY_EVALUATION","staTY_EVALUATION:0.0","10.0","94","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsTY_EVALUATION");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN00","cboTY_EVALUATION:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_usedecorate("false");
            obj.set_text("평가자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN00:0.0","10.0","210","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFINTERACTION_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
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
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfYY_EVALUATION.form.TextBox","value","dsSearch","YY_EVALUATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboTY_EVALUATION","value","dsSearch","TY_EVALUATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
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
        this.registerScript("DAJ_INTERACTION_ITEM.xfdl", function() {
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
        	this.ccfYY_EVALUATION.form.TextBox.set_value(today.substr(0,4));
        	this.cboTY_EVALUATION.set_index(0);

        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);


        	if(this.FormInfo.GR_SEARCH == "1"){
        		this.ccfCD_CORP.set_enable(true);
        	}else{
        		this.ccfCD_CORP.set_enable(false);
        	}


        	//화면 로드시 자동조회
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

        };


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.dxGrid = this.divData.form.objGrid;

        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfYY_EVALUATION = this.divSearch.form.ccfYY_EVALUATION;
        	this.cboTY_EVALUATION = this.divSearch.form.cboTY_EVALUATION;
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAJ_INTERACTION_ITEM");

        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";	// 그리드 코드파인드 설정

        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YY_EVALUATION", "string");
        	this.dsSelect.addColumn("TY_EVALUATION", "string");
        	this.dsSelect.addColumn("ID_SABUN", "string");
        	this.dsSelect.addColumn("ID_TARGET", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("TY_AUTH", "string");
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
        	if(!this.fnSelectValid()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YY_EVALUATION", this.dsSearch.getColumn(0, "YY_EVALUATION"));
        	this.dsSelect.setColumn(0, "TY_EVALUATION", this.dsSearch.getColumn(0, "TY_EVALUATION"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "ID_TARGET", this.FormInfo.GR_SEARCH == "9" ? this.AuthClient.ID_USER : "%");
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "selectHeader";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectHeader=dsSelect";
        	var outData     = "dsHeader=selectHeader0";
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

        this.fnSelectData = function() {

        	if(!this.fnSelectValid()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YY_EVALUATION", this.dsSearch.getColumn(0, "YY_EVALUATION"));
        	this.dsSelect.setColumn(0, "TY_EVALUATION", this.dsSearch.getColumn(0, "TY_EVALUATION"));
        	this.dsSelect.setColumn(0, "ID_SABUN", this.dsSearch.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(0, "ID_TARGET", this.FormInfo.GR_SEARCH == "9" ? this.AuthClient.ID_USER : "%");
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsHeader=select0 dsList=select1";
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

        this.fnSelectValid = function(){
        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)){
        		this.fnValidCallback = function(){
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인을 선택하세요!", "fnValidCallback");
        		return false;
        	}
        	if(this.gfnIsNull(this.ccfYY_EVALUATION.form.TextBox.value)){
        		this.fnValidCallback = function(){
        			this.ccfYY_EVALUATION.form.TextBox.setFocus();
        		}
        		this.gfnAlert("평가년도를 입력하세요!", "fnValidCallback");
        		return false;
        	}
        	if(this.gfnIsNull(this.cboTY_EVALUATION.value)){
        		this.fnValidCallback = function(){
        			this.cboTY_EVALUATION.setFocus();
        		}
        		this.gfnAlert("구분을 선택하세요!", "fnValidCallback");
        		return false;
        	}
        	if(this.gfnIsNull(this.ccfID_SABUN.form.CDTextBox.value)){
        		this.fnValidCallback = function(){
        			this.ccfID_SABUN.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("평가자를 입력하세요!", "fnValidCallback");
        		return false;
        	}

        	return true;
        }


        this.fnAdd = function() {
        	//var nrow = this.gfnGridAdd(this.dxGrid);
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

        }

        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        }

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
        	if (svcID == "selectHeader") { //그리드 헤더
        		this.fnSetGridColunm();

        		this.fnSelectData();
        	}
        	else if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	}

        }


        //그리드 컬럼 셋팅
        this.fnSetGridColunm = function (){
        	this.dxGrid.set_enableredraw(false);
        	this.dsList.set_enableevent(false);

        	//this.fnDeleteContentsCol();

        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAJ_INTERACTION_ITEM");


        // 	//그리드스펙정보가져오기
        // 	var nFindRow = this.dsGridSpec.findRowExpr( "DS_FIELD == 'AM_TOT'" );
         	var NO_WIDTH = 100;
         	var DS_COMBOLIST = "#,###";
        // 	if(nFindRow != -1 ){
        // 		NO_WIDTH = this.dsGridSpec.getColumn(nFindRow, "NO_WIDTH");
        // 		DS_COMBOLIST = this.dsGridSpec.getColumn(nFindRow, "DS_COMBOLIST");
        // 	}


        	var apdCol = 0, colSize = NO_WIDTH;

        	var nHeadCellIndex = 0;
        	var nHeadCellIndexSub = 0;

        	var nHeadRowCnt = this.dsHeader.rowcount;


        	//셋팅
        	for(var i=0;i<this.dsHeader.rowcount;i++){
        		var bindCol = this.dsHeader.getColumn(i, "ID_TARGET");

        		apdCol = this.dxGrid.appendContentsCol();

        		this.dxGrid.setFormatColProperty(apdCol, "size", colSize); //헤더사이즈

        		//body
        		this.dxGrid.setCellProperty("body", apdCol	, "text", "bind:"+bindCol);		//컬럼 바인딩
        		//if(this.gfnRight(bindCol,1) == "T") this.dxGrid.setCellProperty("body", apdCol, "cssclass", "BACK_SoKe");	//배경색
         		this.dxGrid.setCellProperty("body", apdCol, "displaytype", "mask");
         		this.dxGrid.setCellProperty("body", apdCol, "maskeditformat", DS_COMBOLIST);

        		//sum
        		var sExpr = "expr:dataset.getSum('"+this.dsHeader.getColumn(i, "ID_TARGET")+"')";
        		//trace("sExpr", sExpr);
         		this.dxGrid.setCellProperty("summ", apdCol	, "displaytype", "number");									//합계 타입
         		this.dxGrid.setCellProperty("summ", apdCol	, "text", sExpr);	//합계 텍스트

        	}

         	//헤더 텍스트 처리
         	var nIdxAddStart = this.gfnGetHeadCellIndex(this.dxGrid, "DS_CONTENT");

        	var nIdxHead = 0;
        	var nIdxHeadSub = 0;
        	var nBaseCol = this.dxGrid.getBindCellIndex("body", "DS_CONTENT");

        	nIdxHead = nIdxAddStart;

         	var totCnt = this.dsHeader.rowcount;
         	for(var i=0;i<this.dsHeader.rowcount;i++){

        		nIdxHeadSub = nIdxHead + totCnt + nBaseCol;
        		nIdxHead = nIdxHead + 1;

         		this.dxGrid.setCellProperty( "head", nIdxHead, "text", this.dsHeader.getColumn(i, "DS_TARGET"));	// row1
         		//this.dxGrid.setCellProperty( "head", nIdxHeadSub, "text", this.dsHeader.getColumn(i, "DS_CORP"));	// row2
         	}


         	//첫번째 헤더셀 병합 처리
        	// 병합(Merge) 하려는 Cell 중 좌상단 Cell 의 Column 인덱스를 설정합니다.
        	var nStartSubRow = 0;
        	var nEndSubRow = 0;
        	//this.fnMergeContentsCell();


        	this.dxGrid.set_enableredraw(true);
        	this.dsList.set_enableevent(true);
        };


        // this.fnMergeContentsCell = function() {
        //
        // //  Grid 에 표시되어 있는 포맷에서 특정 Cell 들을 병합(Merge) 하여 하나의 Cell로 만드는 메소드입니다.
        //
        // // 	//enumBand, nStartSubRow, nStartCol, nEndSubRow, nEndCol, nFirstCell, bKeepSubCell
        // // 	var nStartSubRow = 0;	// Cell 중 좌상단 Cell 의 Sub Row 인덱스
        // // 	var nStartCol = 6;		// Cell 중 좌상단 Cell 의 Column 인덱스
        // // 	var nEndSubRow = 0; 	// Cell 중 우하단 Cell 의 Sub Row 인덱스
        // // 	var nEndCol = 8;		// Cell 중 우하단 Cell 의 Column 인덱스
        // // 	var nFirstCell = 6;		// Cell 에 적용할 속성의 기준이 되는 Cell 의 Cell 인덱스
        // //
        // // 	var rtnCell = this.dxGrid.mergeContentsCell("head", nStartSubRow, nStartCol, nEndSubRow, nEndCol, nStartCol, false);
        // // 	//Grid 에 표시되어 있는 포맷에서 특정 Cell 들을 병합(Merge) 하여 하나의 Cell로 만드는 메소드입니다.
        // // 	//Grid.mergeContentsCell( enumBand, nStartSubRow, nStartCol, nEndSubRow, nEndCol, nFirstCell, bKeepSubCell )
        //
        //
        // 	// rowspan, colspan
        // 	var objGrid = this.dxGrid;
        // 	var objSpec = this.dsHeader;
        // 	var nBaseCol = this.dxGrid.getBindCellIndex("body", "AM_TOT");	//컬럼 인덱스
        //
        // 	//헤더 컬럼 데이터
        // 	var dsTitle = "";
        // 	var nEndCol = nBaseCol;
        // 	var nFirstCell = 2;
        // 	for(var i=0;i<this.dsHeader.rowcount;i++){
        // 		if (dsTitle != this.dsHeader.getColumn(i, "DS_VENDOR")){
        // 			nEndCol = nEndCol+ 2;
        // 			nFirstCell++;
        // 		}
        // 		var rtn = objGrid.mergeContentsCell("head", 0, (i+nBaseCol+1), 0, nEndCol, nFirstCell, false);
        // 		dsTitle = this.dsHeader.getColumn(i, "DS_VENDOR");
        // 	}
        // };


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if(id == "ccfCD_CORP"){
        		;
        	}
        	else if (id == "ccfID_SABUN") {
        		if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)){
        			this.gfnAlert("법인코드를 먼저 입력하세요.");
        			return false;
        		}
        		if(this.gfnIsNull(this.ccfYY_EVALUATION.form.TextBox.value)){
        			this.gfnAlert("평가년도를 먼저 입력하세요.");
        			return false;
        		}
        		if(this.gfnIsNull(this.cboTY_EVALUATION.value)){
        			this.gfnAlert("구분을 먼저 입력하세요.");
        			return false;
        		}
        // 		if(this.gfnIsNull(this.ccfID_TARGET.form.CDTextBox.value)){
        // 			this.gfnAlert("평가자를 먼저 입력하세요.");
        // 			return false;
        // 		}

        //@ID_TARGET		%	>>GR_SEARCH가 9인 경우에는 로그인 ID
        		var ID_TARGET = this.FormInfo.GR_SEARCH == "9" ? this.AuthClient.ID_USER : "%";


        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "YY_EVALUATION", this.ccfYY_EVALUATION.form.TextBox.value);
        		dsUserParam.setColumn(nrow, "TY_EVALUATION", this.cboTY_EVALUATION.value);
        		//dsUserParam.setColumn(nrow, "ID_TARGET", ID_TARGET);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfCD_CORP"){
        		this.ccfID_SABUN.form.fnCodeFindClear();
        	}
        	else if (id == "ccfID_SABUN") {
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	return true;
        }


        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAJ_INTERACTION_ITEM");
        		this.gfnGridClear(this.dxGrid);
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_INTERACTION_ITEM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
