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
            this.set_titletext("현장공사진행관리(팝업)");
            this.getSetter("maxheight").set("600");
            this.getSetter("maxwidth").set("1230");
            if (Form == this.constructor)
            {
                this._setFormPosition(1230,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHBPR_ACNTUNIT_INFO2_SELECT</Col></Row><Row><Col id=\"TARGET\">comboA13</Col><Col id=\"SP\">DHZPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">comboA14</Col><Col id=\"SP\">DHZPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">comboA12</Col><Col id=\"SP\">DHZPR_COMBO_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsA12", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsA13", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsA14", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta01:0.0","10.0","219","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfCD_CORP:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("귀속부서코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","sta00:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_DEPT_ACNT:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("기준월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_BASE","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_GUBUN","0.0","sta01:10.0","142","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsA14");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04","ccboTY_GUBUN:0.0","sta01:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_STATUS","sta04:0.0","sta01:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsA12");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta03","ccboCD_STATUS:0.0","sta01:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","sta03:0.0","sta01:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("사업구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_SAUP","sta02:0.0","sta01:10.0","93","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsA13");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REQ00","0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_REQ00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","ctclDT_TO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","ctclDT_FROM:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("원가마감일");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch","0.0","sta01:10.0","40","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_text("조회");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","45",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle","0","10",null,"22","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("현장진행내역");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Button("btnConf","511",null,"69","27",null,"7",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","590",null,"69","27",null,"7",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.addChild(obj.name, obj);
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

            obj = new BindItem("item2","divSearch.form.ctclYM_BASE.form.TextBox","value","dsSearch","YM_BASE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccboCD_STATUS","value","dsSearch","CD_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccboTY_GUBUN","value","dsSearch","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccboCD_SAUP","value","dsSearch","CD_SAUP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ctclDT_TO","value","dsSearch","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ctclDT_FROM","value","dsSearch","DT_FROM");
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
        this.registerScript("DHA_COST_SITE_DLG.xfdl", function() {
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

        	this.fnSetCombo();

        	this.ccfCD_CORP.setFocus();

        	this.ccboCD_SAUP.set_index(0);
        	this.ccboTY_GUBUN.set_index(0);
        	this.ccboCD_STATUS.set_index(0);

        	var toDay = this.gfnGetDate();

        	//기준월(현재월)
        	this.ctclYM_BASE.form.TextBox.set_value(toDay.substr(0,6));

        	//원가마감일자 셋팅
        	this.divSearch.form.ctclDT_FROM.set_value(toDay.substr(0,6) + "01");	//현재년월 1일
        	this.divSearch.form.ctclDT_TO.set_value(this.gfnGetLastDate(toDay));	//현재년월의 월말

        	//법인코드 셋팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);
        	//귀속부서
        	//this.ccfCD_DEPT_ACNT.form.CDTextBox.set_value(this.getOwnerFrame().CD_DEPT);
        	//this.ccfCD_DEPT_ACNT.form.DSTextBox.set_value(this.getOwnerFrame().DS_DEPT);

        	this.ccfCD_CORP.form.set_readonly(true);

        	this.fnSelect();

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
        	this.ctclYM_BASE 	 = this.divSearch.form.ctclYM_BASE;
        	this.ccboCD_SAUP 	 = this.divSearch.form.ccboCD_SAUP;
        	this.ccboTY_GUBUN 	 = this.divSearch.form.ccboTY_GUBUN;
        	this.ccboCD_STATUS 	 = this.divSearch.form.ccboCD_STATUS;
        	this.ctclDT_FROM 	 = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO 	 	 = this.divSearch.form.ctclDT_TO;
        	this.dxGrid 		 = this.divData.form.objGrid;
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
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHA_COST_SITE_DLG");
        	this.dxGrid.set_selecttype("cell");

        	this.dxGrid.AfterAllCheck = "fnGrid_AfterAllCheck";

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);

        	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CHK"), "displaytype", "expr:CD_STATUS =='03' ? 'checkboxcontrol' : 'none'");
        	this.dxGrid.setCellProperty("body", this.dxGrid.getBindCellIndex("body", "CHK"), "edittype", "expr:CD_STATUS =='03' ? 'checkbox' : 'none'");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP"	  , "string");		//법인코드
        	this.dsSelect.addColumn("CD_DEPT_ACNT", "string");		//귀속부서코드
        	this.dsSelect.addColumn("YM_BASE"     , "string");		//기준년월
        	this.dsSelect.addColumn("CD_SAUP"     , "string");		//사업구분
        	this.dsSelect.addColumn("TY_GUBUN"    , "string");		//구분
        	this.dsSelect.addColumn("CD_STATUS"   , "string");		//진행상태
        	this.dsSelect.addColumn("DT_FROM"     , "string");		//원가마감일(시작)
        	this.dsSelect.addColumn("DT_TO"       , "string");		//원가마감일(종료)

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

        	this.dsSelect.setColumn(0, "CD_CORP"	 , this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "CD_DEPT_ACNT", this.ccfCD_DEPT_ACNT.form.CDTextBox.value);
        	this.dsSelect.setColumn(0, "YM_BASE"	 , this.ctclYM_BASE.form.TextBox.value);
        	this.dsSelect.setColumn(0, "CD_SAUP"	 , this.ccboCD_SAUP.value);
        	this.dsSelect.setColumn(0, "TY_GUBUN"	 , this.ccboTY_GUBUN.value);
        	this.dsSelect.setColumn(0, "CD_STATUS"	 , this.ccboCD_STATUS.value);
        	this.dsSelect.setColumn(0, "DT_FROM"	 , this.ctclDT_FROM.value);
        	this.dsSelect.setColumn(0, "DT_TO"	     , this.ctclDT_TO.value);

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
        	var validate = true;
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드는 필수입니다.", "fnVaidateCallback");
        	}

        	if(this.gfnIsNull(this.ctclYM_BASE.form.TextBox.value)){
        		this.gfnAlert("기준월은 필수입니다.");
        		this.ctclYM_BASE.form.TextBox.setFocus();
        		validate = false;
        	}

        	if(!this.gfnIsNull(this.ctclDT_FROM.value) && !this.gfnIsNull(this.ctclDT_TO.value)) {
        		if(this.gfnGetDiffDate(this.ctclDT_FROM.value, this.ctclDT_TO.value) <= -1){
        			this.gfnAlert("원가마감일자의 시작일은 종료일보다 작아야 합니다.");
        			this.ctclDT_FROM.setFocus();
        			return false;
        		}
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
        	case "select" :
        		this.gfnGridAfterSelect(this.dxGrid);
        		break;
        	case "combo" :
        		if(this.dsA12.rowcount > 0){
        			var nRow = this.dsA12.insertRow(0);
        			this.dsA12.setColumn(nRow, "CD_CODE", "");
        			this.dsA12.setColumn(nRow, "DS_CODE", "전체");
        		}
        		if(this.dsA13.rowcount > 0){
        			var nRow = this.dsA13.insertRow(0);
        			this.dsA13.setColumn(nRow, "CD_CODE", "");
        			this.dsA13.setColumn(nRow, "DS_CODE", "전체");
        		}
        		if(this.dsA14.rowcount > 0){
        			var nRow = this.dsA14.insertRow(0);
        			this.dsA14.setColumn(nRow, "CD_CODE", "");
        			this.dsA14.setColumn(nRow, "DS_CODE", "전체");
        		}
        		break;
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
        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");				//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");				//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);			//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");				//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");				//현장/본사여부
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/


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


        this.fnSetCombo = function() {
        	this.dsComboA13 = new Dataset();
        	this.dsComboA13.addColumn("CD_SYSTEM", "string");
        	this.dsComboA13.addColumn("CD_TYPE"  , "string");

        	this.dsComboA14 = new Dataset();
        	this.dsComboA14.addColumn("CD_SYSTEM", "string");
        	this.dsComboA14.addColumn("CD_TYPE"  , "string");

        	this.dsComboA12 = new Dataset();
        	this.dsComboA12.addColumn("CD_SYSTEM", "string");
        	this.dsComboA12.addColumn("CD_TYPE"  , "string");


        	this.dsComboA13.addRow();
        	this.dsComboA13.setColumn(0, "CD_SYSTEM", "DH");
        	this.dsComboA13.setColumn(0, "CD_TYPE"  , "A13");

        	this.dsComboA14.addRow();
        	this.dsComboA14.setColumn(0, "CD_SYSTEM", "DH");
        	this.dsComboA14.setColumn(0, "CD_TYPE"  , "A14");

        	this.dsComboA12.addRow();
        	this.dsComboA12.setColumn(0, "CD_SYSTEM", "DH");
        	this.dsComboA12.setColumn(0, "CD_TYPE"  , "A12");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "comboA13=dsComboA13 comboA14=dsComboA14 comboA12=dsComboA12";
        	var outData     = "dsA13=comboA130 dsA14=comboA140 dsA12=comboA120";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,
        						false); // 통신방법 정의 [생략가능]
        };


        this.btnSearch_onclick = function(obj,e)
        {
        	this.fnSelect();
        };

        this.btnCancel_onclick = function(obj,e)
        {
        	this.getParentContext().close();
        };

        this.btnConf_onclick = function(obj,e)
        {
        	if(this.dsList.findRow("CHK", "1") == -1){
        		this.gfnAlert("선택된 항목이 없습니다.");
        		return;
        	}

        	this.dsResult.clearData();

        	this.dsResult.set_enableevent(false);

        	//컬럼/데이터 복사
        	this.dsResult.assign(this.dsList);

        	var arrDel = [];
         	for(var i =0;i<this.dsResult.getRowCountNF();i++){
        		this.dsResult.setColumnNF(i, this.ucFlag, "I");
        		//미선택/필터 로우 제외
         		if(this.dsList.getColumnNF(i, "CHK") != "1" || this.dsList.getColumnNF(i, this.ucFlag) == "#"){
        			arrDel[arrDel.length] = i;
         		}
         	}

        	//미선택 데이터 삭제
        	this.dsResult.deleteMultiRows(arrDel);

        	this.dsResult.set_enableevent(true);

        	//팝업 닫기 처리
        	this.getParentContext().close(this.dsResult.saveXML());
        };

        this.fnGrid_AfterAllCheck = function(obj, cell, check) {
        	var objDs = obj.getBindDataset();
        	var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);

        	if(colnm == "CHK") {
        		objDs.set_enableevent(false);

        		for(var i =0;i<objDs.getRowCountNF();i++){
        			if(objDs.getColumnNF(i, this.ucFlag) != "#"){
        				if(objDs.getColumnNF(i, "CD_STATUS") == "03"){	//진행상태가 준공인 데이터만 처리
        					objDs.setColumn(i, colnm, check);
        				}else{
        					objDs.setColumn(i, colnm, 0);
        				}
        			}
        		}
        		objDs.set_enableevent(true);

        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccboCD_SAUP.addEventHandler("onitemchanged",this.divSearch_ccboMAGAM_GUBUN_onitemchanged,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
            this.btnConf.addEventHandler("onclick",this.btnConf_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("DHA_COST_SITE_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
