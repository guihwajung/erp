(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DLM_IO");
            this.set_titletext("월별수입지출현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DLMPR_IO_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DLMPR_IO_UPDATE</Col></Row><Row><Col id=\"SP\">DLMPR_IO_CREATE</Col><Col id=\"TARGET\">create</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"YR_IO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YR_IO\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT00","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사업지코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACNTUNIT","staCD_ACNTUNIT00:0.0","10.0","400","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DLX_CFLEASESITE_CODEFIND");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_ACNTUNIT","ccfCD_ACNTUNIT:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("작업년도");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYR_IO","staCD_ACNTUNIT:0.0","10.0","60","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalYY.xfdl");
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
            obj = new BindItem("item0","divSearch.form.ctclYR_IO.form.TextBox","value","dsSearch","YR_IO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_ACNTUNIT.form.CDTextBox","value","dsSearch","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_ACNTUNIT.form.DSTextBox","value","dsSearch","DS_ACNTUNIT");
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
        this.registerScript("DLM_IO.xfdl", function() {
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

        	this.dsSearch.setColumn(0, "YR_IO", this.gfnGetDate().substr(0,4));
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
        	this.btnCreate = this.gfnFormButtonAdd("Create", "fnCreate");	//자료생성
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_ACNTUNIT = this.divSearch.form.ccfCD_ACNTUNIT;
        	this.ctclYR_IO      = this.divSearch.form.ctclYR_IO;

        	this.dxGrid  = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.gfnGridInit(this.dxGrid, this.dsList, "DL", "DLM_IO");
        	this.dxGrid.set_selecttype("cell");

        	this.dxGrid.AfterEdit = "fnGrid_AfterEdit";

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
        	this.dsSelect.addColumn("YR_IO" 	 , "string");

        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_ACNTUNIT", "string");
        	this.dsCreate.addColumn("TY_GUBUN"   , "string");
        	this.dsCreate.addColumn("NO_CHASU"   , "string");
        	this.dsCreate.addColumn("YR_IO" 	 , "string");
        	this.dsCreate.addColumn("ID_INSERT"	 , "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("YR_IO"			, "string");
        	this.dsUpdate.addColumn("CD_ACNTUNIT"	, "string");
        	this.dsUpdate.addColumn("TY_GUBUN"	 	, "string");
        	this.dsUpdate.addColumn("NO_CHASU"	 	, "string");
        	this.dsUpdate.addColumn("TY_IO"	 		, "string");
        	this.dsUpdate.addColumn("NO_SEQ"	 	, "INT");
        	this.dsUpdate.addColumn("AM_01"	     	, "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_02"			, "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_03"	    	, "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_04"	    	, "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_05"	    	, "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_06"	    	, "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_07"	    	, "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_08"	    	, "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_09"			, "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_10"			, "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_11"			, "BIGDECIMAL");
        	this.dsUpdate.addColumn("AM_12"			, "BIGDECIMAL");
        	this.dsUpdate.addColumn("ID_UPDATE"	    , "string");
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
        	this.dsSelect.setColumn(0, "YR_IO"    	 , this.dsSearch.getColumn(0, "YR_IO"));

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
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsUpdate.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		switch(flag) {
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "YR_IO"		, this.dsSearch.getColumn(0, "YR_IO"));
        				this.dsUpdate.setColumn(nrow, "CD_ACNTUNIT" , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN"	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        				this.dsUpdate.setColumn(nrow, "NO_CHASU"	, this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        				this.dsUpdate.setColumn(nrow, "TY_IO"		, this.dsList.getColumn(i, "TY_IO"));			//구분
        				this.dsUpdate.setColumn(nrow, "NO_SEQ"		, this.dsList.getColumn(i, "NO_SEQ"));			//상세번호
        				this.dsUpdate.setColumn(nrow, "AM_01"		, this.dsList.getColumn(i, "AM_01"));			//1월
        				this.dsUpdate.setColumn(nrow, "AM_02"		, this.dsList.getColumn(i, "AM_02"));			//2월
        				this.dsUpdate.setColumn(nrow, "AM_03"		, this.dsList.getColumn(i, "AM_03"));			//3월
        				this.dsUpdate.setColumn(nrow, "AM_04"		, this.dsList.getColumn(i, "AM_04"));			//4월
        				this.dsUpdate.setColumn(nrow, "AM_05"		, this.dsList.getColumn(i, "AM_05"));			//5월
        				this.dsUpdate.setColumn(nrow, "AM_06"		, this.dsList.getColumn(i, "AM_06"));			//6월
        				this.dsUpdate.setColumn(nrow, "AM_07"		, this.dsList.getColumn(i, "AM_07"));			//7월
        				this.dsUpdate.setColumn(nrow, "AM_08"		, this.dsList.getColumn(i, "AM_08"));			//8월
        				this.dsUpdate.setColumn(nrow, "AM_09"		, this.dsList.getColumn(i, "AM_09"));			//9월
        				this.dsUpdate.setColumn(nrow, "AM_10"		, this.dsList.getColumn(i, "AM_10"));			//10월
        				this.dsUpdate.setColumn(nrow, "AM_11"		, this.dsList.getColumn(i, "AM_11"));			//11월
        				this.dsUpdate.setColumn(nrow, "AM_12"		, this.dsList.getColumn(i, "AM_12"));			//12월
        				this.dsUpdate.setColumn(nrow, "ID_UPDATE"	, this.AuthClient.ID_USER);						//수정자ID
        				break;
        		}
        	}

        	if (this.dsUpdate.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "update=dsUpdate";
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
        		this.gfnAlert("사업지코드가 입력되지 않았습니다.");
        		this.ccfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.dsSearch.getColumn(0, "YR_IO"))){
        		this.gfnAlert("작업년도가 입력되지 않았습니다.");
        		this.ctclYR_IO.form.TextBox.setFocus();
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
        	} else if (svcID == "create") {
        		if (errorCode == 0) {
        			this.gfnAlert("자료가 생성되었습니다.");

        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
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
        		dsUserParam.setColumn(nrow, "FLAG"  		, "A");
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
        this.fnGrid_AfterEdit = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		if(e.columnid.search("AM_") > -1) {
        			var amSum = 0;
        			//1월에서12월
        			for(var i=1;i<=12;i++){
        				var colNo = (i).toString().padLeft(2, "0");

        				amSum += nexacro.toNumber(obj.getColumn(e.row, "AM_"+colNo),0);
        			}
        			//합계
        			this.dsList.setColumn(e.row, "AM_SUM" ,amSum);
        		}
        	}
        }
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

        this.fnCreate = function(obj,e) {
        	if(!this.fnSelectValidate) return;

        	this.gfnConfirm("기존자료 삭제 후 생성됩니다.\r\n계속하시겠습니까?", "fnCreate_callback");
        }

        this.fnCreate_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsCreate.clearData();
        		this.dsCreate.addRow();

        		this.dsCreate.setColumn(0, "CD_ACNTUNIT" , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        		this.dsCreate.setColumn(0, "TY_GUBUN"    , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        		this.dsCreate.setColumn(0, "NO_CHASU"    , this.dsSearch.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        		this.dsCreate.setColumn(0, "YR_IO"       , this.dsSearch.getColumn(0, "YR_IO"));
        		this.dsCreate.setColumn(0, "ID_INSERT"   , this.AuthClient.ID_USER);

        		var strSvcId    = "create";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "create=dsCreate";
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
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DLM_IO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
