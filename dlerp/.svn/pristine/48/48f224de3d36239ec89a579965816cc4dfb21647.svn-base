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
            this.set_titletext("전표연결(팝업)");
            this.getSetter("maxwidth").set("1280");
            this.getSetter("maxheight").set("580");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHNPR_ASSETGAIN_SLIP_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHNPR_ASSETGAIN_SLIP_UPDATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_VENDOR\" type=\"STRING\" size=\"256\"/><Column id=\"DT_GET\" type=\"STRING\" size=\"256\"/><Column id=\"DS_REM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnConf","511",null,"69","27",null,"7",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","590",null,"69","27",null,"7",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","10",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("전표연결");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0.0","staTitle:10.0",null,"110.0","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta01:0.0","10.0","259","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","staCD_DEPT:0.0","10.0","259","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_GET","ccfCD_DEPT:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_GET","staDT_GET:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","0.0","sta01:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("거래처");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_VENDOR","staCD_VENDOR:0.0","sta01:10.0","259","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDS_REM","ccfCD_VENDOR:0.0","sta01:10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("적요");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtDS_REM","staDS_REM:0.0","sta01:10.0","231","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","45",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSearch","1003","60","40","21",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("조회");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_VENDOR.form.CDTextBox","value","dsSearch","CD_VENDOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ctclDT_GET","value","dsSearch","DT_GET");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHN_ASSETREGDLG.xfdl", function() {
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

        	//법인코드, 계정코드 셋팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);

        	var DT_GET = this.getOwnerFrame().DT_GET;
        	var toDay = this.gfnGetDate();

        	//회계년월
        	this.ctclDT_GET.set_value(DT_GET);	//현재월1일
        	//this.ctclDT_GET.set_value(toDay.substr(0,6) + "01");	//현재월1일

        	this.GR_SEARCH = this.getOwnerFrame().GR_SEARCH;
        	if (nexacro.toNumber(this.GR_SEARCH) >= 7) {
        		this.ccfCD_DEPT.form.CDTextBox.set_value(this.AuthClient.CD_DEPT);
        		this.ccfCD_DEPT.form.DSTextBox.set_value(this.AuthClient.DS_DEPT);
        		//this.staCD_DEPT.set_textDecoration("underline");
        		this.staCD_DEPT.set_cssclass("sta_WF_SchLabelE");
        	}

        	//조회처리
        	//this.btnSearch.click();
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
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;
        	this.ccfCD_VENDOR = this.divSearch.form.ccfCD_VENDOR;
        	this.ctclDT_GET = this.divSearch.form.ctclDT_GET;
        	this.edtDS_REM   = this.divSearch.form.edtDS_REM;
        	this.staCD_DEPT = this.divSearch.form.staCD_DEPT;
        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//법인코드
        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	//귀속부서
         	this.ccfCD_DEPT.CodeFindName = "DHX_CFACNTUNIT2";
         	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	//거래처
         	this.ccfCD_VENDOR.CodeFindName = "DHX_CFALLVENDOR_CODEFIND";
         	this.ccfCD_VENDOR.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHV_ORIGINTAX_DEFRAYMENTDLG");

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_DEPT_BE", "string");
        	this.dsSelect.addColumn("CD_VENDOR", "string");
        	this.dsSelect.addColumn("DT_GET", "string");
        	this.dsSelect.addColumn("DS_REM", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_ASSET", "string");
        	this.dsUpdate.addColumn("CD_TRADE", "string");
        	this.dsUpdate.addColumn("YN_CONNECT", "string");

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

        	this.dsList.clearData();

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_CORP"		, this.ccfCD_CORP.form.CDTextBox.value);        // 법인코드
        	this.dsSelect.setColumn(0, "CD_DEPT_BE"		, this.ccfCD_DEPT.form.CDTextBox.value);  		// 귀속부서
        	this.dsSelect.setColumn(0, "CD_VENDOR"		, this.ccfCD_VENDOR.form.CDTextBox.value);    	// 거래처
        	this.dsSelect.setColumn(0, "DT_GET"		, this.ctclDT_GET.value);    						// 기간(시작)
        	this.dsSelect.setColumn(0, "DS_REM"			, this.gfnTrim(this.edtDS_REM.value));    		// 적요

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsList=select0";
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

         /*
         *	입력 버튼
         */
        this.fnAdd = function() {


        }

         /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	this.dsUpdate.clearData();

        	var nrow = this.dsUpdate.addRow();
        	this.dsUpdate.setColumn(nrow, "CD_ASSET", this.getOwnerFrame().CD_ASSET);								// 부모창에 CD_ASSET
        	this.dsUpdate.setColumn(nrow, "CD_TRADE", this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE"));	// 전표번호
        	this.dsUpdate.setColumn(nrow, "YN_CONNECT", "Y");

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
         *	삭제 버튼
         */
        this.fnDel = function() {
        	//this.gfnGridDel(this.dxGrid);
        }


        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	//this.gfnExcelExport(this.dxGrid);
        }

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        }
        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (nexacro.toNumber(this.GR_SEARCH) >= 7) {
        		if (this.gfnIsNull(this.ccfCD_DEPT.form.CDTextBox.value)) {
        			this.gfnAlert("귀속부서는 필수입니다");
        			this.ccfCD_DEPT.form.CDTextBox.setFocus();
        			return false;
        		}
        	}

        	if(this.gfnIsNull(this.ctclDT_GET.value)){
        		this.gfnAlert("일자는 필수입니다.");
        		this.ctclDT_GET.setFocus();
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
        	}
        	if(svcID == "save"){
        		if (errorCode == 0) {
        			this.gfnAlert("처리 되었습니다.", "fnMsgCallBack");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.fnMsgCallBack = function ()
        {
        	this.getParentContext().close(true);
        };


        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnAfterCDTextChanged = function(id, codeFindData) {
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			this.ccfCD_DEPT.form.fnCodeFindClear();
        			this.ccfCD_VENDOR.form.fnCodeFindClear();
        		break;
        	}
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	var cdCorp = this.ccfCD_CORP.form.CDTextBox.value;
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        			dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        		break;
        		case "ccfCD_DEPT":		//귀속부서
        			if (!this.gfnIsNull(cdCorp)) {
        				dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");			//상위부서
        				dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");			//전표발행여부
        				dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);		//법인코드
        				dsUserParam.setColumn(nrow, "YN_USE"		, "Y");			//사용여부
        				dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");			//현장/본사여부
        			    dsUserParam.setColumn(nrow, "ID_USER"	    , this.AuthClient.ID_USER);
        			    dsUserParam.setColumn(nrow, "GR_SEARCH"     , this.GR_SEARCH);
        			    dsUserParam.setColumn(nrow, "CD_DEPT"	    , this.AuthClient.CD_DEPT);

        			}else{
        				this.gfnAlert("법인코드는 필수입력 값입니다.");
        				return false;
        			}
        		break;
        		case "ccfCD_VENDOR":	//거래처
        			if (!this.gfnIsNull(cdCorp)) {
        				dsUserParam.setColumn(nrow, "CD_CORP" , cdCorp);
        			}else{
        				this.gfnAlert("법인코드는 필수입력 값입니다.");
        				return false;
        			}

        		break;
        	}

        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        //조회버튼 클릭
        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnSelect();
        };

        //취소버튼 클릭
        this.btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close();
        };

        //확인버튼 클릭
        this.btnConf_onclick = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;

        	var cdTrade = this.dsList.getColumn(this.dsList.rowposition, "CD_TRADE");

        	this.gfnConfirm("전표번호("+cdTrade+")로 연결처리 하시겠습니까?", "fnConf_callback");
        };

        this.fnConf_callback = function(strId, val)
        {
        	if(val == true) {
        		this.fnSave();
        	}
        };

        //검색조건 변경 이벤트
        this.dsSearch_Valuechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnGridClear(this.dxGrid);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnConf.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("DHN_ASSETREGDLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
