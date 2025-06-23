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
            this.set_titletext("경영실적(총괄)_2");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DYAPR_SILJUK_TOTAL_SELECT</Col></Row><Row><Col id=\"TARGET\">selectNop</Col><Col id=\"SP\">DYAPR_SILJUK_TOTAL_NOP_SELECT</Col></Row><Row><Col id=\"TARGET\">selectInverst</Col><Col id=\"SP\">DYAPR_SILJUK_TOTAL_INVERST_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YM_SILJUK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">00</Col><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">01</Col><Col id=\"VALUE\">1개년</Col></Row><Col id=\"CODE\">기타2</Col><Col id=\"VALUE\">VENDOR</Col><Row><Col id=\"CODE\">02</Col><Col id=\"VALUE\">2개년</Col></Row><Row><Col id=\"CODE\">03</Col><Col id=\"VALUE\">3개년</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListNop", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListInverst", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","219","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.set_enable("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_SILJUK","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_SILJUK","staYM_SILJUK:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01",null,"10.0","92.0","24.0","3",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("(단위 : 억원)");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0","0",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("재무");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","sta01:5",null,"47%","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","objGrid:5",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("인원현황");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridNop","0","sta02:5",null,"21%","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.getSetter("sub").set("true");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","0","objGridNop:5",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("투자");
            obj.set_cssclass("sta_TITLE_Bg");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridInverst","0","sta03:5",null,"18%","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.getSetter("sub").set("true");
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

            obj = new BindItem("item1","divSearch.form.ctclYM_SILJUK.form.TextBox","value","dsSearch","YM_SILJUK");
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
        this.registerScript("DYA_SILJUK_TOTAL.xfdl", function() {
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

        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);

        	var thisYr = this.gfnGetDate().substr(0,6);
        	this.dsSearch.setColumn(0, "YM_SILJUK", thisYr);

        	//this.fnSetHeadTitle();
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
        	//this.btnUpload = this.gfnFormButtonAdd("btnUpload", "fnUpload");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ctclYM_SILJUK = this.divSearch.form.ctclYM_SILJUK;

        	this.dxGrid = this.divData.form.objGrid;
        	this.dxGridNop = this.divData.form.objGridNop;
        	this.dxGridInverst = this.divData.form.objGridInverst;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_CORP.CodeFindName = "DHX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DY", "DYA_SILJUK_TOTAL");
        	this.gfnGridInit(this.dxGridNop, this.dsListNop, "DY", "DYA_SILJUK_TOTAL_NOP");
        	this.gfnGridInit(this.dxGridInverst, this.dsListInverst, "DY", "DYA_SILJUK_TOTAL_INVERST");


        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	//this.dxGrid.AfterCDTextChanged = "fnGrid_AfterCDTextChanged";
        	//this.dsList.addEventHandler("oncolumnchanged", this.fnGrid_ColumnChanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");	//법인코드
        	this.dsSelect.addColumn("YM_SILJUK", "string");

        	// 인원현황
        	this.dsSelectNop = new Dataset();
        	this.dsSelectNop.addColumn("CD_CORP", "string");
        	this.dsSelectNop.addColumn("YM_BASE", "string");

        	// 투자
        	this.dsSelectInverst = new Dataset();
        	this.dsSelectInverst.addColumn("YM_INVESTMENT", "string");
        	this.dsSelectInverst.addColumn("CD_CORP", "string");
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
        	this.dsSelect.setColumn(0, "YM_SILJUK", this.dsSearch.getColumn(0, "YM_SILJUK"));

        	this.dsSelectNop.clearData();
        	this.dsSelectNop.addRow();
        	this.dsSelectNop.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelectNop.setColumn(0, "YM_BASE", this.dsSearch.getColumn(0, "YM_SILJUK"));

        	this.dsSelectInverst.clearData();
        	this.dsSelectInverst.addRow();
        	this.dsSelectInverst.setColumn(0, "YM_INVESTMENT", this.dsSearch.getColumn(0, "YM_SILJUK"));
        	this.dsSelectInverst.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect selectNop=dsSelectNop selectInverst=dsSelectInverst";
        	var outData     = "dsList=select0 dsListNop=selectNop0 dsListInverst=selectInverst0";
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
        // 	if(this.dsList.findRow(this.ucFlag, "I") > -1){
        // 		this.gfnAlert("신규 추가된 데이터가 이미 있습니다.");
        // 		return;
        // 	}
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
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.gfnAlert("소속법인을 입력 하세요.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "YM_SILJUK"))) {
        		this.gfnAlert("조회년월을 입력 하세요.");
        		this.ctclYM_SILJUK.form.setFocus();
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

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	switch(id) {
        		case "ccfCD_CORP":	//법인코드
        		break;
        	}
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID
        	switch(id) {
        		case "DYX_SUJU_PLAN":
         			dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        			dsUserParam.setColumn(nrow, "YR_PLAN", this.dsSearch.getColumn(0, "YM_PLAN").substr(0,4));
        		break;
        	}

        	return true;
        }

        this.fnGrid_AfterCDTextChanged=function(id, codeFindData){
        	if(id == "DYX_ACC_DEPT"){
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
        //  파인건설 기준으로는 뒷내용 지우지 않음.
        // 	if(e.columnid == 'LV_DEPT_ACNT'){	//레벨이 변경되었을 경우
        // 		if(!this.gfnIsNull(e.newvalue) && e.newvalue != e.oldvalue){
        // 			obj.setColumn(e.row, "CD_DEPT_UPPER", "");		//상위귀속부서코드
        // 		}
        // 	}
        };

        this.fnSetHeadTitle = function(){
        	var YmSiljuk = this.dsSearch.getColumn(0, "YM_SILJUK");
        	var headTitle = "실적";
        	var headTitleNop = "당년계획";

        	if(!this.gfnIsNull(YmSiljuk)){
        		var thisYr = YmSiljuk.substr(0,4);
        		var preYr = (YmSiljuk.substr(0,4)-1)+"";
        		headTitle = preYr.substr(2,2)+"년 실적";
        		headTitleNop = thisYr.substr(2,2)+"년계획";
        	}
        	this.dxGrid.setCellProperty("head", 4, "text", headTitle);
        	this.divData.form.objGridNop.setCellProperty("head", 3, "text", headTitleNop);
        //	this.dxGridNoP.setCellProperty("head", 3, "text", headTitleNop);
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
        		this.gfnGridClear(this.dxGridNop);
        		if(e.columnid == "YM_SILJUK"){this.fnSetHeadTitle();}
        	}
        };

        this.divData_ondragmove = function(obj,e)
        {
        	if(e.userdata == "splitter") {
        		this.divData.form.divSplitter.set_top(e.clienty);
        		this.divData.form.resetScroll();
        	}
        };

        this.divData_divSplitter_ondrag = function(obj,e)
        {
        	e.set_userdata("splitter");
        	return true;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsListNop.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsListInverst.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("DYA_SILJUK_TOTAL.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
