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
            this.set_titletext("관계사차입대여조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectHeader</Col><Col id=\"SP\">DFGPR_LOANCORP_TITLE_SELECT</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DFGPR_LOANCORP_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHeader", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","sta04:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_PERIOD","cfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("기준년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("calYM_WORK","staCD_PERIOD:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.calYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DFG_LOANCORP.xfdl", function() {
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

        	if (this.gfnIsNull(this.ScfCD_CORP.form.CDTextBox.value)) {
        		this.ScfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ScfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	var vToday = this.gfnGetDate().substr(0,6);
        	this.calYM_WORK.form.TextBox.set_value(vToday);

        	// 법인코드 포커스추가
        	this.ScfCD_CORP.form.CDTextBox.setFocus();

        	// 권한체크 - 해당부서내역만 조회가능
        	if (nexacro.toNumber(this.grSearch) >= 2) {
        		this.ScfCD_CORP.set_enable(false);
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
        	// 조회조건
        	this.ScfCD_CORP  = this.divSearch.form.cfCD_CORP;				// 법인코드
        	this.calYM_WORK  = this.divSearch.form.calYM_WORK;				// 기준년월

        	this.dxGrid = this.divData.form.objGrid;		// 그리드

        	this.grSearch = this.FormInfo.GR_SEARCH;						// 권한?
        	this.cdGroup = this.gfnIsNull(this.AuthClient.CD_GROUP) ? "" : this.AuthClient.CD_GROUP;						// 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ScfCD_CORP.CodeFindName = "DZX_CFCORP";					// 법인코드(조회조건)
        	this.ScfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ScfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFG_LOANCORP");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	//검색조건 데이터셋
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
          /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.ScfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "YM_WORK", this.calYM_WORK.form.TextBox.value);

        	var strSvcId    = "selectHeader";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectHeader=dsSelect";
        	var outData     = "dsHeader=selectHeader0";
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

        this.fnSelectData = function() {

        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.ScfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "YM_WORK", this.calYM_WORK.form.TextBox.value);

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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
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
        	if (this.gfnIsNull(this.calYM_WORK.form.TextBox.value)) {
        		this.gfnAlert("기준년월은 필수입력 입니다.");
        		this.calYM_WORK.form.TextBox.setFocus();
        		return false;
        	}
        	return true;
        };

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

        this.fnDeleteContentsCol = function(){
        	var nIdxAddStart = this.dxGrid.getBindCellIndex("body", "AM_TOT");	//컬럼추가 인덱스

        	//컬럼 삭제
        	for(var i=0;i<this.dsHeader.rowcount;i++){
        		//데이터셋 컬럼 삭제 처리
        		this.dsList.deleteColumn(this.dsHeader.getColumn(i, "CD_VENDOR"));
        	}
        	var colCnt = this.dxGrid.getCellCount("body");
        	//그리드 컬럼 삭제 처리(초기화용)
        	var delCnt = 0, delIdx = 0;
        	for(var i=0;i<colCnt;i++){
        		if(i > nIdxAddStart){
        			delIdx = ((colCnt-1)-delCnt);
        			this.dxGrid.deleteContentsCol("body", delIdx, false);
        			delCnt++;
        		}
        	}
        }

        //그리드 컬럼 셋팅
        this.fnSetGridColunm = function (){
        	this.dxGrid.set_enableredraw(false);
        	this.dsList.set_enableevent(false);

        	//this.fnDeleteContentsCol();

        	this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFG_LOANCORP");


        	//그리드스펙정보가져오기
        	var nFindRow = this.dsGridSpec.findRowExpr( "DS_FIELD == 'AM_TOT'" );
        	var NO_WIDTH = 100;
        	var DS_COMBOLIST = "#,##0";
        	if(nFindRow != -1 ){
        		NO_WIDTH = this.dsGridSpec.getColumn(nFindRow, "NO_WIDTH");
        		DS_COMBOLIST = this.dsGridSpec.getColumn(nFindRow, "DS_COMBOLIST");
        	}


        	var apdCol = 0, colSize = NO_WIDTH;

        	var nHeadCellIndex = 0;
        	var nHeadCellIndexSub = 0;

        	var nHeadRowCnt = this.dsHeader.rowcount;


        	//셋팅
        	for(var i=0;i<this.dsHeader.rowcount;i++){
        		var bindCol = this.dsHeader.getColumn(i, "CD_LOANBANK");

        		apdCol = this.dxGrid.appendContentsCol();

        		this.dxGrid.setFormatColProperty(apdCol, "size", colSize); //헤더사이즈

        		//body
        		this.dxGrid.setCellProperty("body", apdCol	, "text", "bind:"+bindCol);		//컬럼 바인딩
        		if(this.gfnRight(bindCol,1) == "T") this.dxGrid.setCellProperty("body", apdCol, "cssclass", "BACK_SoKe");	//배경색
         		this.dxGrid.setCellProperty("body", apdCol, "displaytype", "mask");
         		this.dxGrid.setCellProperty("body", apdCol, "maskeditformat", DS_COMBOLIST);

        		//sum
        		var sExpr = "expr:dataset.getSum('"+this.dsHeader.getColumn(i, "CD_LOANBANK")+"')";
        		//trace("sExpr", sExpr);
         		this.dxGrid.setCellProperty("summ", apdCol	, "displaytype", "number");									//합계 타입
         		this.dxGrid.setCellProperty("summ", apdCol	, "text", sExpr);	//합계 텍스트

        	}

         	//헤더 텍스트 처리
         	var nIdxAddStart = this.gfnGetHeadCellIndex(this.dxGrid, "AM_TOT");

        	var nIdxHead = 0;
        	var nIdxHeadSub = 0;
        	var nBaseCol = this.dxGrid.getBindCellIndex("body", "AM_TOT");	//세목명 컬럼 인덱스

        	nIdxHead = nIdxAddStart;

         	var totCnt = this.dsHeader.rowcount;
         	for(var i=0;i<this.dsHeader.rowcount;i++){

        		nIdxHeadSub = nIdxHead + totCnt + nBaseCol;
        		nIdxHead = nIdxHead + 1;

         		this.dxGrid.setCellProperty( "head", nIdxHead, "text", this.dsHeader.getColumn(i, "DS_VENDOR"));	// row1
         		this.dxGrid.setCellProperty( "head", nIdxHeadSub, "text", this.dsHeader.getColumn(i, "DS_CORP"));	// row2
         	}


         	//첫번째 헤더셀 병합 처리
        	// 병합(Merge) 하려는 Cell 중 좌상단 Cell 의 Column 인덱스를 설정합니다.
        	var nStartSubRow = 0;
        	var nEndSubRow = 0;
        	this.fnMergeContentsCell();


        	this.dxGrid.set_enableredraw(true);
        	this.dsList.set_enableevent(true);
        };


        this.fnMergeContentsCell = function() {

        //  Grid 에 표시되어 있는 포맷에서 특정 Cell 들을 병합(Merge) 하여 하나의 Cell로 만드는 메소드입니다.

        // 	//enumBand, nStartSubRow, nStartCol, nEndSubRow, nEndCol, nFirstCell, bKeepSubCell
        // 	var nStartSubRow = 0;	// Cell 중 좌상단 Cell 의 Sub Row 인덱스
        // 	var nStartCol = 6;		// Cell 중 좌상단 Cell 의 Column 인덱스
        // 	var nEndSubRow = 0; 	// Cell 중 우하단 Cell 의 Sub Row 인덱스
        // 	var nEndCol = 8;		// Cell 중 우하단 Cell 의 Column 인덱스
        // 	var nFirstCell = 6;		// Cell 에 적용할 속성의 기준이 되는 Cell 의 Cell 인덱스
        //
        // 	var rtnCell = this.dxGrid.mergeContentsCell("head", nStartSubRow, nStartCol, nEndSubRow, nEndCol, nStartCol, false);
        // 	//Grid 에 표시되어 있는 포맷에서 특정 Cell 들을 병합(Merge) 하여 하나의 Cell로 만드는 메소드입니다.
        // 	//Grid.mergeContentsCell( enumBand, nStartSubRow, nStartCol, nEndSubRow, nEndCol, nFirstCell, bKeepSubCell )


        	// rowspan, colspan
        	var objGrid = this.dxGrid;
        	var objSpec = this.dsHeader;
        	var nBaseCol = this.dxGrid.getBindCellIndex("body", "AM_TOT");	//컬럼 인덱스

        	//헤더 컬럼 데이터
        	var dsTitle = "";
        	var nEndCol = nBaseCol;
        	var nFirstCell = 2;
        	for(var i=0;i<this.dsHeader.rowcount;i++){
        		if (dsTitle != this.dsHeader.getColumn(i, "DS_VENDOR")){
        			nEndCol = nEndCol+ 2;
        			nFirstCell++;
        		}
        		var rtn = objGrid.mergeContentsCell("head", 0, (i+nBaseCol+1), 0, nEndCol, nFirstCell, false);
        		dsTitle = this.dsHeader.getColumn(i, "DS_VENDOR");
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;

        	switch(id) {

        	// 법인코드(조회조건)
        	case "cfCD_CORP":
        		break;
        	default:
        	}
        	return true;
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	var cdCorp = this.ScfCD_CORP.form.CDTextBox.value;

        	switch(id) {

        	// 법인코드(조회조건)
        	case "cfCD_CORP":
        		dsUserParam.setColumn(nrow, "CD_GROUP", this.cdGroup);
        		break;
        	default:
        	}
        	return true;
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/


        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridInit(this.dxGrid, this.dsList, "DF", "DFG_LOANCORP");
        		this.gfnGridClear(this.dxGrid);
           }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DFG_LOANCORP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
