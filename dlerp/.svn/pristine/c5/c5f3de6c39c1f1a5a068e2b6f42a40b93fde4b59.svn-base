(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DLM_EXPENSE");
            this.set_titletext("지출비용관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DLMPR_EXPENSE_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DLMPR_EXPENSE_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DLMPR_EXPENSE_UPDATE</Col></Row><Row><Col id=\"SP\">DLMPR_EXPENSE_DELETE</Col><Col id=\"TARGET\">delete</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"YM_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YM_TO\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT:0.0","10.0","400","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DLX_CFLEASESITE_CODEFIND");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM","ccfCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("지출년월");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_FROM","staYM:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ctclYM_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("~");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_TO","ctclYM_FROM:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclYM_FROM.form.TextBox","value","dsSearch","YM_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclYM_TO.form.TextBox","value","dsSearch","YM_TO");
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
        this.registerScript("DLM_EXPENSE.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "YM_FROM", this.gfnGetDate().substr(0,4)+"0101");	//해당년도의 1월
        	this.dsSearch.setColumn(0, "YM_TO"  , this.gfnGetDate().substr(0,6));			//현재년월
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

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;
        	this.ctclYM_FROM    = this.divSearch.form.ctclYM_FROM;
        	this.ctclYM_TO      = this.divSearch.form.ctclYM_TO;

        	this.dxGrid  = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DL", "DLM_EXPENSE");
        	this.dxGrid.set_selecttype("cell");

        	this.ccfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACNTUNIT.AfterCDTextChanged = "fnAfterCDTextChanged";
        }
        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_ACNTUNIT", "string");
        	this.dsSelect.addColumn("TY_GUBUN"   , "string");
        	this.dsSelect.addColumn("NO_CHASU"   , "string");
        	this.dsSelect.addColumn("YM_FROM" 	 , "string");
        	this.dsSelect.addColumn("YM_TO" 	 , "string");

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_ACNTUNIT"		, "string");
        	this.dsInsert.addColumn("TY_GUBUN"	 		, "string");
        	this.dsInsert.addColumn("NO_CHASU"	 		, "string");
        	this.dsInsert.addColumn("YM_EXPENSE"	 	, "string");
        	this.dsInsert.addColumn("AM_OUTSOURCING"	, "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_ELEC"	 		, "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_WATER"	 		, "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_GAS"	 		, "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_FEE"	 		, "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_EXTRA"	 		, "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_MAINTAIN"	 	, "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_TAX"	 		, "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_INSURE"	 		, "BIGDECIMAL");
        	this.dsInsert.addColumn("AM_DEPRECIATION"	, "BIGDECIMAL");
        	this.dsInsert.addColumn("DS_REMARK"	 		, "string");
        	this.dsInsert.addColumn("ID_INSERT"	 		, "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ACNTUNIT"		, "string");
        	this.dsUpdate.addColumn("TY_GUBUN"	 		, "string");
        	this.dsUpdate.addColumn("NO_CHASU"	 		, "string");
        	this.dsUpdate.addColumn("YM_EXPENSE"	 	, "string");
        	this.dsUpdate.addColumn("AM_OUTSOURCING"	, "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_ELEC"	 		, "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_WATER"	 		, "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_GAS"	 		, "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_FEE"	 		, "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_EXTRA"	 		, "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_MAINTAIN"	 	, "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_TAX"	 		, "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_INSURE"	 		, "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_DEPRECIATION"	, "BIGDECIMAL");
        	this.dsUpdate.addColumn("DS_REMARK"	 		, "string");
        	this.dsUpdate.addColumn("ID_UPDATE"	        , "string");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_ACNTUNIT", "string");
        	this.dsDelete.addColumn("TY_GUBUN"   , "string");
        	this.dsDelete.addColumn("NO_CHASU"   , "string");
        	this.dsDelete.addColumn("YM_EXPENSE" , "string");

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

        	this.dsSelect.setColumn(0, "CD_ACNTUNIT" , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSelect.setColumn(0, "TY_GUBUN"    , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSelect.setColumn(0, "NO_CHASU"    , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSelect.setColumn(0, "YM_FROM"     , this.dsSearch.getColumn(0, "YM_FROM"));
        	this.dsSelect.setColumn(0, "YM_TO"    	 , this.dsSearch.getColumn(0, "YM_TO"));

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
        	var nrow = this.gfnGridAdd(this.dxGrid);
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
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	if (!this.fnSaveValidate()) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_ACNTUNIT" 	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsInsert.setColumn(nrow, "TY_GUBUN"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsInsert.setColumn(nrow, "NO_CHASU"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsInsert.setColumn(nrow, "YM_EXPENSE"		, this.dsList.getColumn(i, "YM_EXPENSE"));		//지출년월
        				this.dsInsert.setColumn(nrow, "AM_OUTSOURCING"	, this.dsList.getColumn(i, "AM_OUTSOURCING"));	//용역관리비
        				this.dsInsert.setColumn(nrow, "AM_ELEC"			, this.dsList.getColumn(i, "AM_ELEC"));			//전기료
        				this.dsInsert.setColumn(nrow, "AM_WATER"		, this.dsList.getColumn(i, "AM_WATER"));		//상하수도료
        				this.dsInsert.setColumn(nrow, "AM_GAS"			, this.dsList.getColumn(i, "AM_GAS"));			//가스요금
        				this.dsInsert.setColumn(nrow, "AM_FEE"			, this.dsList.getColumn(i, "AM_FEE"));			//지급수수료
        				this.dsInsert.setColumn(nrow, "AM_EXTRA"		, this.dsList.getColumn(i, "AM_EXTRA"));		//소모품비
        				this.dsInsert.setColumn(nrow, "AM_MAINTAIN"		, this.dsList.getColumn(i, "AM_MAINTAIN"));		//수선유지비
        				this.dsInsert.setColumn(nrow, "AM_TAX"			, this.dsList.getColumn(i, "AM_TAX"));			//세금과공과
        				this.dsInsert.setColumn(nrow, "AM_INSURE"		, this.dsList.getColumn(i, "AM_INSURE"));		//보험료
        				this.dsInsert.setColumn(nrow, "AM_DEPRECIATION"	, this.dsList.getColumn(i, "AM_DEPRECIATION"));	//감가상각비
        				this.dsInsert.setColumn(nrow, "DS_REMARK"		, this.dsList.getColumn(i, "DS_REMARK"));		//비고
        				this.dsInsert.setColumn(nrow, "ID_INSERT"		, this.AuthClient.ID_USER);						//등록자ID
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT" 	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsUpdate.setColumn(nrow, "NO_CHASU"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsUpdate.setColumn(nrow, "YM_EXPENSE"		, this.dsList.getColumn(i, "YM_EXPENSE"));		//지출년월
        				this.dsUpdate.setColumn(nrow, "AM_OUTSOURCING"	, this.dsList.getColumn(i, "AM_OUTSOURCING"));	//용역관리비
        				this.dsUpdate.setColumn(nrow, "AM_ELEC"			, this.dsList.getColumn(i, "AM_ELEC"));			//전기료
        				this.dsUpdate.setColumn(nrow, "AM_WATER"		, this.dsList.getColumn(i, "AM_WATER"));		//상하수도료
        				this.dsUpdate.setColumn(nrow, "AM_GAS"			, this.dsList.getColumn(i, "AM_GAS"));			//가스요금
        				this.dsUpdate.setColumn(nrow, "AM_FEE"			, this.dsList.getColumn(i, "AM_FEE"));			//지급수수료
        				this.dsUpdate.setColumn(nrow, "AM_EXTRA"		, this.dsList.getColumn(i, "AM_EXTRA"));		//소모품비
        				this.dsUpdate.setColumn(nrow, "AM_MAINTAIN"		, this.dsList.getColumn(i, "AM_MAINTAIN"));		//수선유지비
        				this.dsUpdate.setColumn(nrow, "AM_TAX"			, this.dsList.getColumn(i, "AM_TAX"));			//세금과공과
        				this.dsUpdate.setColumn(nrow, "AM_INSURE"		, this.dsList.getColumn(i, "AM_INSURE"));		//보험료
        				this.dsUpdate.setColumn(nrow, "AM_DEPRECIATION"	, this.dsList.getColumn(i, "AM_DEPRECIATION"));	//감가상각비
        				this.dsUpdate.setColumn(nrow, "DS_REMARK"		, this.dsList.getColumn(i, "DS_REMARK"));		//비고
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE"		, this.AuthClient.ID_USER);						//수정자ID
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_ACNTUNIT"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsDelete.setColumn(nrow, "TY_GUBUN"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsDelete.setColumn(nrow, "NO_CHASU"		, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsDelete.setColumn(nrow, "YM_EXPENSE"		, this.dsList.getColumn(i, "YM_EXPENSE"));
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
         * 서브 버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
          */
        this.fnSelectValidate = function() {
        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "CD_ACNTUNIT"))){
        		this.gfnAlert("사업지코드은(는) 필수입니다.");
        		this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "YM_FROM"))){
        		this.gfnAlert("지출년월(시작)은 필수입니다.");
        		this.ctclYM_FROM.form.TextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "YM_TO"))){
        		this.gfnAlert("지출년월(종료)은 필수입니다.");
        		this.ctclYM_TO.form.TextBox.setFocus();
        		return false;
        	}

        	if(this.gfnGetDiffMonth(this.dsSearch.getColumn(0, "YM_FROM"), this.dsSearch.getColumn(0, "YM_TO")) <= -1){
        		this.gfnAlert("지출년월의 범위가 올바르지 않습니다.");
        		this.ctclYM_FROM.form.TextBox.setFocus();
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
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        	} else if(svcID == "save"){
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
        //코드파인드의 파라미터 값을 넘겨줄때 사용하는 함수
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 사업지코드
        	if (id == "ccfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "FLAG"  		, "X");
        		dsUserParam.setColumn(nrow, "CD_DEPT"  		, this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER"  		, this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP" 		, this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"		, this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_TOTALCHASU" , "");
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
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
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        //저장 Validate 체크
        this.fnSaveValidate = function ()
        {
        	for(var i=0;i<this.dsList.rowcount;i++){
        		//신규 데이터만 체크한다
        		if(this.gfnGetFlag(this.dsList, i) == "I"){
        			var ymExpense = this.dsList.getColumn(i, "YM_EXPENSE");
        			if(this.dsList.getCaseCount("YM_EXPENSE == '"+ymExpense+"'") > 1){
        				this.gfnAlert("지출년월이 중복되었습니다.");
        				return false;
        			}
        		}
        	}
        	return true;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DLM_EXPENSE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
