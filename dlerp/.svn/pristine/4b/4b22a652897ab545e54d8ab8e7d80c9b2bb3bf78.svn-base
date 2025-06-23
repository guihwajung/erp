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
            this.set_titletext("귀속부서관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHBPR_ACNTUNIT_TREELVY_SELECT_STD</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHBPR_ACNTUNIT_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHBPR_ACNTUNIT_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHBPR_ACNTUNIT_DELETE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo00","0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","rdo00:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta01:0.0","10.0","219","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfCD_CORP:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("귀속부서코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","sta00:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chkYN_USE","ccfCD_DEPT_ACNT:0.0","10.0","134","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("사용여부");
            obj.set_truevalue("Y");
            obj.set_falsevalue("N");
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

            obj = new BindItem("item1","divSearch.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHB_ACNTUNIT.xfdl", function() {
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
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel

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
        	this.ccfCD_CORP 	 = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_DEPT_ACNT = this.divSearch.form.ccfCD_DEPT_ACNT;
        	this.dxGrid = this.divData.form.objGrid;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT_ACNT.CodeFindName = "DHX_CFACNTUNIT";
        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHB_ACNTUNIT", "CD_DEPT_ACNT", "LV_DEPT_ACNT");
        	this.dxGrid.set_selecttype("cell");

        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	this.dsList.addEventHandler("oncolumnchanged", this.fnGrid_ColumnChanged, this);

        	//var colCD_DEPT_ACNT = this.dxGrid.getBindCellIndex("body", "CD_DEPT_ACNT");
        	//this.dxGrid.setCellProperty("body", colCD_DEPT_ACNT, "edittype", "expr:dataset.getRowType(currow)==2?'normal':'tree'");
        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP"	  , "string");	//법인코드
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");	//회계단위코드
        	this.dsSelect.addColumn("TY_USE"      , "string");	//사용여부

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_DEPT_ACNT", "string");			//회계단위코드
        	this.dsInsert.addColumn("DS_DEPT_ACNT", "string");			//회계단위명칭
        	this.dsInsert.addColumn("LV_DEPT_ACNT", "string");			//회계단위레벨
        	this.dsInsert.addColumn("GR_DEPT_ACNT", "string");			//등급
        	this.dsInsert.addColumn("CD_DEPT_UPPER", "string");			//상위회계단위코드
        	this.dsInsert.addColumn("CD_DEPT_SELFACNT", "string");		//세무단위코드
        	this.dsInsert.addColumn("CD_COST", "string");				//계정원가코드
        	this.dsInsert.addColumn("YN_SLIPACCEPT", "string");			//전표발행여부
        	this.dsInsert.addColumn("YN_ANBUN", "string");				//안분여부
        	this.dsInsert.addColumn("YN_USE", "string");				//사용여부
        	this.dsInsert.addColumn("YN_BUDGET_CONTROL", "string");		//예산통제여부
        	this.dsInsert.addColumn("YN_FUND", "string");				//법인자금팀여부
        	this.dsInsert.addColumn("CD_CORP", "string");				//법인코드
        	this.dsInsert.addColumn("DS_MEMO", "string");				//비고
        	this.dsInsert.addColumn("YN_CORP_INSA", "string");			//법인자금팀여부
        	this.dsInsert.addColumn("CD_JUMIN", "string");				//시군구청
        	this.dsInsert.addColumn("YN_PL", "string");					//손익계산서작성여부
        	this.dsInsert.addColumn("CD_DEPT_GROUP", "string");			//대표현장코드
        	this.dsInsert.addColumn("CD_BONBU", "string");				//상위본부코드
        	this.dsInsert.addColumn("CD_DEPT_BUY", "string");			//매입귀속부서
        	this.dsInsert.addColumn("DS_ADDR", "string");		//현장주소
        	this.dsInsert.addColumn("ID_USER", "string");				//등록자

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_DEPT_ACNT", "string");			//회계단위코드
        	this.dsUpdate.addColumn("DS_DEPT_ACNT", "string");			//회계단위명칭
        	this.dsUpdate.addColumn("LV_DEPT_ACNT", "string");			//회계단위레벨
        	this.dsUpdate.addColumn("GR_DEPT_ACNT", "string");			//등급
        	this.dsUpdate.addColumn("CD_DEPT_UPPER", "string");			//상위회계단위코드
        	this.dsUpdate.addColumn("CD_DEPT_SELFACNT", "string");			//세무단위코드
        	this.dsUpdate.addColumn("CD_COST", "string");				//계정원가코드
        	this.dsUpdate.addColumn("YN_SLIPACCEPT", "string");			//전표발행여부
        	this.dsUpdate.addColumn("YN_ANBUN", "string");				//안분여부
        	this.dsUpdate.addColumn("YN_USE", "string");				//사용여부
        	this.dsUpdate.addColumn("YN_BUDGET_CONTROL", "string");		//예산통제여부
        	this.dsUpdate.addColumn("YN_FUND", "string");				//법인자금팀여부
        	this.dsUpdate.addColumn("CD_CORP", "string");				//법인코드
        	this.dsUpdate.addColumn("DS_MEMO", "string");				//비고
        	this.dsUpdate.addColumn("YN_CORP_INSA", "string");			//법인자금팀여부
        	this.dsUpdate.addColumn("CD_JUMIN", "string");				//시군구청
        	this.dsUpdate.addColumn("YN_PL", "string");					//손익계산서작성여부
        	this.dsUpdate.addColumn("CD_DEPT_GROUP", "string");			//대표현장코드
        	this.dsUpdate.addColumn("CD_BONBU", "string");				//상위본부코드
        	this.dsUpdate.addColumn("CD_DEPT_BUY", "string");			//매입귀속부서
        	this.dsUpdate.addColumn("DS_ADDR", "string");				//현장주소
        	this.dsUpdate.addColumn("ID_USER", "string");				//등록자

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_DEPT_ACNT", "string");
        	this.dsDelete.addColumn("ID_USER", "string");

        	//사용여부 체크
        	this.divSearch.form.chkYN_USE.set_value("Y");

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

        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.ccfCD_DEPT_ACNT.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "TY_USE", (this.divSearch.form.chkYN_USE.value == "Y" ? "Y" : ""));

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
        	if(this.dsList.findRow(this.ucFlag, "I") > -1){
        		this.gfnAlert("신규 추가된 데이터가 이미 있습니다.");
        		return;
        	}

        	var nRow = this.gfnGridAdd(this.dxGrid);

        	this.dsList.set_rowposition(nRow);
        	this.dxGrid.setCellPos(this.dxGrid.getBindCellIndex("body", "CD_DEPT_ACNT"));

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

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_DEPT_ACNT"  			, this.dsList.getColumn(i, "CD_DEPT_ACNT"));			//회계단위코드
        				this.dsInsert.setColumn(nrow, "DS_DEPT_ACNT"  			, this.dsList.getColumn(i, "DS_DEPT_ACNT"));			//회계단위명칭
        				this.dsInsert.setColumn(nrow, "LV_DEPT_ACNT"  			, this.dsList.getColumn(i, "LV_DEPT_ACNT"));			//회계단위레벨
        				this.dsInsert.setColumn(nrow, "GR_DEPT_ACNT"   			, this.dsList.getColumn(i, "GR_DEPT_ACNT"));			//등급
        				this.dsInsert.setColumn(nrow, "CD_DEPT_UPPER"  			, this.dsList.getColumn(i, "CD_DEPT_UPPER"));			//상위회계단위코드
        				this.dsInsert.setColumn(nrow, "CD_DEPT_SELFACNT"   		, this.dsList.getColumn(i, "CD_DEPT_SELFACNT"));		//세무단위코드
        				this.dsInsert.setColumn(nrow, "CD_COST"   				, this.dsList.getColumn(i, "CD_COST"));					//계정원가코드
        				this.dsInsert.setColumn(nrow, "YN_SLIPACCEPT"   		, this.dsList.getColumn(i, "YN_SLIPACCEPT"));			//전표발행여부
        				this.dsInsert.setColumn(nrow, "YN_ANBUN"      			, this.dsList.getColumn(i, "YN_ANBUN"));				//안분여부
        				this.dsInsert.setColumn(nrow, "YN_USE"   				, this.dsList.getColumn(i, "YN_USE"));					//사용여부
        				this.dsInsert.setColumn(nrow, "YN_BUDGET_CONTROL"		, "N");													//예산통제여부
        				this.dsInsert.setColumn(nrow, "YN_FUND"					, this.dsList.getColumn(i, "YN_FUND"));					//법인자금팀여부
        				this.dsInsert.setColumn(nrow, "CD_CORP"     			, this.dsList.getColumn(i, "CD_CORP"));					//법인코드
        				this.dsInsert.setColumn(nrow, "DS_MEMO"      			, this.dsList.getColumn(i, "DS_MEMO"));					//비고
        				this.dsInsert.setColumn(nrow, "YN_CORP_INSA"     		, this.dsList.getColumn(i, "YN_CORP_INSA"));			//법인자금팀여부
        				this.dsInsert.setColumn(nrow, "CD_JUMIN"      			, this.dsList.getColumn(i, "CD_JUMIN"));				//시군구청
        				this.dsInsert.setColumn(nrow, "YN_PL"      	    		, this.dsList.getColumn(i, "YN_PL"));					//손익계산서작성여부
        				this.dsInsert.setColumn(nrow, "CD_DEPT_GROUP"      		, this.dsList.getColumn(i, "CD_DEPT_GROUP"));			//대표현장코드
        				this.dsInsert.setColumn(nrow, "CD_BONBU"      	    	, this.dsList.getColumn(i, "CD_BONBU"));				//상위본부코드
        				this.dsInsert.setColumn(nrow, "CD_DEPT_BUY"      	    , this.dsList.getColumn(i, "CD_DEPT_BUY"));				//매입귀속부서
        				this.dsInsert.setColumn(nrow, "DS_ADDR"          		, this.dsList.getColumn(i, "DS_ADDR"));					//현장주소
        				this.dsInsert.setColumn(nrow, "ID_USER"   				, this.AuthClient.ID_USER);
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_ACNT"  			, this.dsList.getColumn(i, "CD_DEPT_ACNT"));			//회계단위코드
        				this.dsUpdate.setColumn(nrow, "DS_DEPT_ACNT"  			, this.dsList.getColumn(i, "DS_DEPT_ACNT"));			//회계단위명칭
        				this.dsUpdate.setColumn(nrow, "LV_DEPT_ACNT"  			, this.dsList.getColumn(i, "LV_DEPT_ACNT"));			//회계단위레벨
        				this.dsUpdate.setColumn(nrow, "GR_DEPT_ACNT"   			, this.dsList.getColumn(i, "GR_DEPT_ACNT"));			//등급
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_UPPER"  			, this.dsList.getColumn(i, "CD_DEPT_UPPER"));			//상위회계단위코드
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_SELFACNT"   		, this.dsList.getColumn(i, "CD_DEPT_SELFACNT"));		//세무단위코드
        				this.dsUpdate.setColumn(nrow, "CD_COST"   				, this.dsList.getColumn(i, "CD_COST"));					//계정원가코드
        				this.dsUpdate.setColumn(nrow, "YN_SLIPACCEPT"   		, this.dsList.getColumn(i, "YN_SLIPACCEPT"));			//전표발행여부
        				this.dsUpdate.setColumn(nrow, "YN_ANBUN"      			, this.dsList.getColumn(i, "YN_ANBUN"));				//안분여부
        				this.dsUpdate.setColumn(nrow, "YN_USE"   				, this.dsList.getColumn(i, "YN_USE"));					//사용여부
        				this.dsUpdate.setColumn(nrow, "YN_BUDGET_CONTROL"		, this.dsList.getColumn(i, "YN_BUDGET_CONTROL"));		//예산통제여부
        				this.dsUpdate.setColumn(nrow, "YN_FUND"					, this.dsList.getColumn(i, "YN_FUND"));					//법인자금팀여부
        				this.dsUpdate.setColumn(nrow, "CD_CORP"     			, this.dsList.getColumn(i, "CD_CORP"));					//법인코드
        				this.dsUpdate.setColumn(nrow, "DS_MEMO"      			, this.dsList.getColumn(i, "DS_MEMO"));					//비고
        				this.dsUpdate.setColumn(nrow, "YN_CORP_INSA"     		, this.dsList.getColumn(i, "YN_CORP_INSA"));			//법인자금팀여부
        				this.dsUpdate.setColumn(nrow, "CD_JUMIN"      			, this.dsList.getColumn(i, "CD_JUMIN"));				//시군구청
        				this.dsUpdate.setColumn(nrow, "YN_PL"      	    		, this.dsList.getColumn(i, "YN_PL"));					//손익계산서작성여부
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_GROUP"      		, this.dsList.getColumn(i, "CD_DEPT_GROUP"));			//대표현장코드
        				this.dsUpdate.setColumn(nrow, "CD_BONBU"      	    	, this.dsList.getColumn(i, "CD_BONBU"));				//상위본부코드
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_BUY"      	    , this.dsList.getColumn(i, "CD_DEPT_BUY"));				//매입귀속부서
        				this.dsUpdate.setColumn(nrow, "DS_ADDR"          		, this.dsList.getColumn(i, "DS_ADDR"));			//현장주소
        				this.dsUpdate.setColumn(nrow, "ID_USER"   				, this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_DEPT_ACNT"  , this.dsList.getColumn(i, "CD_DEPT_ACNT"));		//회계단위코드
        				this.dsDelete.setColumn(nrow, "ID_USER"   				, this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsInsert.rowcount == 0 && this.dsUpdate.rowcount == 0 && this.dsDelete.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "insert=dsInsert update=dsUpdate delete=dsDelete";
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
        // 	if (this.gfnIsNull(this.ccfCD_DEPT_ACNT.form.CDTextBox.value)) {
        // 		validate = false;
        // 		// Alert후 실행할 처리
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_DEPT_ACNT.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("귀속부서코드는 필수입니다.", "fnVaidateCallback");
        // 	}

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
        	} else if(svcID == "save") {
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
        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfCD_DEPT_ACNT.form.fnCodeFindClear();
        		break;
        	}
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if (id == "ccfCD_DEPT_ACNT") {
        		var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        		if(this.gfnIsNull(cdCorp)){
        			this.gfnAlert("법인코드를 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "0000000");				//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID

        	switch(id) {
        		case "DHX_CFUPPER_DEPT":	//귀속부서
        			var cdCorp = this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value,"");

        			trace("cdCorp :: "+cdCorp);
         			dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);	//법인코드
        		break;
        		case "DHX_CFACNTUNIT_LEVELUPPER":	//상위귀속부서
        			var cdDeptAcnt = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_ACNT");
        			var lvDeptAcnt = this.dsList.getColumn(this.dsList.rowposition, "LV_DEPT_ACNT");

        			if(this.gfnIsNull(cdDeptAcnt)) {
        				this.gfnAlert("귀속부서를 먼저 선택하세요.");
        				return false;
        			}
        			if(this.gfnIsNull(lvDeptAcnt)) {
        				this.gfnAlert("레벨을 먼저 선택하세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "CD_DEPT_ACNT", cdDeptAcnt);	//귀속부서코드
        			dsUserParam.setColumn(nrow, "LV_DEPT"	  , lvDeptAcnt);	//레벨
        		break;
        		case "DHX_CFSELFACNT":	//세무단위
        			var lvDeptAcnt = this.dsList.getColumn(this.dsList.rowposition, "LV_DEPT_ACNT");

        			if(this.gfnIsNull(lvDeptAcnt)) {
        				this.gfnAlert("레벨을 먼저 선택하세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "LV_DEPT", lvDeptAcnt);		//레벨
        		break;
        		case "DHX_CFACCOST":	//원가코드
        		break;
        		case "DHX_CFACNTUNIT":	//대표현장
        			var cdCorp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        			var cdDeptAcnt = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_ACNT");

        			if(this.gfnIsNull(cdDeptAcnt)) {
        				this.gfnAlert("귀속부서를 먼저 선택하세요.");
        				return false;
        			}

        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");						//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		break;
        		case "DHX_CFVENDOR":	//관할시군구청
        			dsUserParam.setColumn(nrow, "TY_VENDOR" , "");		//X   CD_VENDOR
        			dsUserParam.setColumn(nrow, "YN_RELATED", "");		//X   CD_VENDOR
        		break;
        		case "DHX_CFACNTUNIT_BUY":	//매입귀속부서
        			var cdDeptAcnt = this.dsList.getColumn(this.dsList.rowposition, "CD_DEPT_ACNT");
        			if(this.gfnIsNull(cdDeptAcnt)) {
        				this.gfnAlert("귀속부서를 먼저 선택하세요.");
        				return false;
        			}

        			var cdCorp = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");

        			trace("cdCorp :: "+cdCorp);
        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "0000000");				//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");						//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);					//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		break;
        	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged=function(id, codeFindData){
        	if(id == "DHX_CFUPPER_DEPT"){
        		var arr = codeFindData;
        		var cdCorp = "";
        		if(arr.length > 0){
        			cdCorp = arr[0]["CD_CORP"];
        		}
        		this.dsList.setColumn(this.dsList.rowposition, "CD_CORP", cdCorp);
        		this.dsList.setColumn(this.dsList.rowposition, "CD_DEPT_BUY", "");
        		this.dsList.setColumn(this.dsList.rowposition, "DS_DEPT_BUY", "");
        	}
        };

        //그리드 값변경 이벤트
        this.fnGrid_ColumnChanged = function(obj,e)
        {
        	if(e.columnid == 'LV_DEPT_ACNT'){	//레벨이 변경되었을 경우
        		if(!this.gfnIsNull(e.newvalue) && e.newvalue != e.oldvalue){
        			obj.setColumn(e.row, "CD_DEPT_UPPER", "");		//상위귀속부서코드
        			obj.setColumn(e.row, "DS_DEPT_ACNT_UPPER", "");	//상위귀속부서명
        			obj.setColumn(e.row, "CD_DEPT_SELFACNT", "");	//세무단위코드
        			obj.setColumn(e.row, "DS_DEPT_SELFACNT", "");	//세무단위명
        		}
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_Valuechanged = function(obj,e)
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
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("DHB_ACNTUNIT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
