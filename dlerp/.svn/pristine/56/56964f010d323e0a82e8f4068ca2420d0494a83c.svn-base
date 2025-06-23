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
            this.set_titletext("월별당기순이익");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHFPR_SURPLUS_SELECT</Col></Row><Row><Col id=\"TARGET\">userinfo</Col><Col id=\"SP\">DZZPR_USERINFO_SELECT</Col></Row><Row><Col id=\"TARGET\">selectYmMagam</Col><Col id=\"SP\">DHXPR_ACNTUNIT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_MAGAM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"CD_DEPT_ACNT\"/><Col id=\"DS_DEPT_ACNT\"/><Col id=\"YM_MAGAM\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYmMagam", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta00:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","sta01:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("회계년도");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_MAGAM","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalYY.xfdl");
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

            obj = new BindItem("item2","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_DEPT.form.DSTextBox","value","dsSearch","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ctclYM_MAGAM.form.TextBox","value","dsSearch","YM_MAGAM");
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
        this.registerScript("DHF_SURPLUSSELECT.xfdl", function() {
        this.objApp = this.gfnGetApplication();
        this.CD_CORP;
        this.strLevel;
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

        	this.ccfCD_CORP.setFocus();
        	this.dsSearch.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);
        	this.dsSearch.setColumn(0, "CD_DEPT_ACNT", this.AuthClient.LEVCD_DEPT_UPPER);
        	this.ccfCD_DEPT.form.fnCodeFindLoad();

        	var sYmMagam = this.AuthClient.YM_MAGAM_MONTH1;
        	this.dsSearch.setColumn(0, "YM_MAGAM", sYmMagam.substr(0, 4));

        	// 회계년월 셋팅
        	//this.fnGetYmMagam();
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
        	this.ccfCD_DEPT 	 = this.divSearch.form.ccfCD_DEPT;
        	this.ctclYM_MAGAM  	 = this.divSearch.form.ctclYM_MAGAM;
        	this.dxGrid 		 = this.divData.form.objGrid;
        };

        /************************************************************************
        * 이벤트 설정
        ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_DEPT.CodeFindName = "DHX_CFACNTUNIT";	// DHX_CFBALANCE_ACNTUNIT

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	//this.ccfCD_DEPT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHF_SURPLUSSELECT");
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	this.dxGrid.sort = "false";

        	var nCellIdxAM_BS_SURPLUS = this.dxGrid.getBindCellIndex("body", "AM_BS_SURPLUS");
        	var nCellIdxAM_PL_SURPLUS = this.dxGrid.getBindCellIndex("body", "AM_PL_SURPLUS")

        	var sGetProperty = this.dxGrid.getCellProperty( "body", nCellIdxAM_BS_SURPLUS, "cssclass" );

        	var sSetPropertyAM_BS_SURPLUS = sGetProperty.replace(": 'BACK_ReadOnly')", ": AM_BS_SURPLUS < 0 ? 'Red' : 'BACK_ReadOnly')");
        	var sSetPropertyAM_PL_SURPLUS = sGetProperty.replace(": 'BACK_ReadOnly')", ": AM_PL_SURPLUS < 0 ? 'Red' : 'BACK_ReadOnly')");

        	this.dxGrid.setCellProperty( "body", nCellIdxAM_BS_SURPLUS, "cssclass" , sSetPropertyAM_BS_SURPLUS);
        	this.dxGrid.setCellProperty( "body", nCellIdxAM_PL_SURPLUS, "cssclass" , sSetPropertyAM_PL_SURPLUS);


        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        };

        /************************************************************************
        * 파라미터 설정
        ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");
        	this.dsSelect.addColumn("YM_MAGAM", "string");
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
        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.dsSearch.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsSelect.setColumn(0, "YM_MAGAM", this.dsSearch.getColumn(0, "YM_MAGAM").replace(/-/g, ''));

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
        	var validate = true;
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.text)) {
        		this.gfnAlert("법인코드가 입력되지 않았습니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		//validate = false;
        		return false;
        	}

        	if (this.gfnIsNull(this.ccfCD_DEPT.form.CDTextBox.value)) {
        		this.gfnAlert("귀속부서가 입력되지 않았습니다.");
        		this.ccfCD_DEPT.form.CDTextBox.setFocus();
        		//validate = false;
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclYM_MAGAM.form.TextBox.value)) {
        		this.gfnAlert("회계년도가 입력되지 않았습니다.");
        		this.ctclYM_MAGAM.form.TextBox.setFocus();
        		//validate = false;
        		return false;
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
        	switch(svcID) {
        	case "select":
        		this.gfnGridAfterSelect(this.dxGrid);
        		break;

        	case "selectYmMagam":
        		var sYmMagam = this.gfnGetDate().substring(0, 4);
        		if(this.dsYmMagam.rowcount > 0){
        			sYmMagam = this.dsYmMagam.getColumn(0, "YM_MAGAM").substr(0, 4);
        		}
        		this.dsSearch.setColumn(0, "YM_MAGAM", sYmMagam);

        	break;
        	}
        }

        /************************************************************************
        * 코드파인드 이벤트
        ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var sCdCorp = this.dsSearch.getColumn(0, "CD_CORP");
        	if (id == "ccfCD_CORP") {
        		//dsUserParam.setColumn(nrow, "LEVEL", this.UserInfo.LEVLV_DEPT_ACNT);
        		//dsUserParam.setColumn(nrow, "ACNTUNIT", this.UserInfo.LEVCD_DEPT_ACNT);
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	if (id == "ccfCD_DEPT") {
        		if(this.gfnIsNull(sCdCorp)){
        			this.gfnAlert("법인코드를 선택하세요.");
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, sCdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);


        // 		var cdCorp = this.ccfCD_CORP.form.CDTextBox.text;
        // 		if(this.gfnIsNull(cdCorp)){
        // 			this.gfnAlert("법인코드를 먼저 선택하세요.");
        // 			return false;
        // 		}
        // 		dsUserParam.setColumn(nrow, "LEVEL", this.UserInfo.LEVLV_DEPT_ACNT);
        // 		dsUserParam.setColumn(nrow, "ACNTUNIT", this.UserInfo.LEVCD_DEPT_ACNT);
        // 		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function ( id , codefindData ){
        	var arr = codefindData;
        	switch(id) {
        		case "ccfCD_CORP":
         			if (arr.length > 0) {
        				//var sCdCorp = arr[0]["CD_CORP"];
        				this.fnGetYmMagam();
        			}
        			this.ccfCD_DEPT.form.fnCodeFindClear();
        		break;
        // 	case "ccfCD_DEPT": // 귀속부서
        // 		var arr = codeFindData;
        // 		if (arr.length > 0) {
        // 			strLevel = arr[0]["LV_DEPT_ACNT"];
        // 			cd_corp = arr[0]["CD_CORP"];
        // 			this.dsSearch.setColumn(0, "YM_MAGAM", arr[0]["YM_MAGAM_MONTH1"]);
        // 			this.dsSearch.setColumn(0, "YM_MAGAM2", arr[0]["YM_MAGAM_MONTH1"]);
        // 		}
        // 		break;
        	}
        }
        /************************************************************************
        * 그리드 이벤트
        ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	switch(id) {
        		case "CD_DEPT_ACNT":     // 귀속부서
        			dsUserParam.setColumn(nrow, "LV_DEPT", this.UserInfo.LEVLV_DEPT_ACNT);
        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER", this.UserInfo.LEVCD_DEPT_ACNT_DOWN);
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT", "Y");
        			dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        			dsUserParam.setColumn(nrow, "YR_ACCOUNT", this.dsSearch.getColumn(0, "YM_MAGAM").replace(/-/g, ''));
        		break;
        		case "CD_ACCOUNT":     // 계정코드
        			dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        		break;
        	}
        	return true;

        };
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

        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        // 회계년월 가져오기
        this.fnGetYmMagam = function() {
        	return;

        	this.dsSelectYmMagam = new Dataset();
        	this.dsSelectYmMagam.addColumn("TY_GUBUN", "string");
        	this.dsSelectYmMagam.addColumn("CN_ROW", "string");
        	this.dsSelectYmMagam.addColumn("VALUE", "string");
        	this.dsSelectYmMagam.addColumn("MIN_VALUE", "string");
        	this.dsSelectYmMagam.addColumn("YN_SLIPACCEPT", "string");
        	this.dsSelectYmMagam.addColumn("CD_CORP", "string");
        	this.dsSelectYmMagam.addColumn("YN_USE", "string");
        	this.dsSelectYmMagam.addColumn("GR_DEPT_ACNT", "string");
        	this.dsSelectYmMagam.addColumn("ID_USER", "string");
        	this.dsSelectYmMagam.addColumn("GR_SEARCH", "string");
        	this.dsSelectYmMagam.addColumn("CD_DEPT", "string");

        	this.dsSelectYmMagam.clearData();
        	this.dsSelectYmMagam.addRow();
        	this.dsSelectYmMagam.setColumn(0, "TY_GUBUN", "0");
        	this.dsSelectYmMagam.setColumn(0, "CN_ROW", 100);
        	//this.dsSelectYmMagam.setColumn(0, "VALUE", this.UserInfo.LEVCD_DEPT_ACNT_DOWN);
        	this.dsSelectYmMagam.setColumn(0, "MIN_VALUE", "");
        	this.dsSelectYmMagam.setColumn(0, "YN_SLIPACCEPT", "Y");
        	this.dsSelectYmMagam.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectYmMagam.setColumn(0, "YN_USE", "Y");

        	var strSvcId    = "selectYmMagam";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectYmMagam=dsSelectYmMagam";
        	var outData     = "dsYmMagam=selectYmMagam0";
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DHF_SURPLUSSELECT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
