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
            this.set_titletext("학자금 지급승인");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YM_TUITION\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YM_TUITION\"/><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select1</Col><Col id=\"SP\">DABPR_TUITION_LIST01_SELECT</Col></Row><Row><Col id=\"TARGET\">select2</Col><Col id=\"SP\">DABPR_TUITION_LIST02_SELECT</Col></Row><Row><Col id=\"TARGET\">select3</Col><Col id=\"SP\">DABPR_TUITION_LIST03_SELECT</Col></Row><Row><Col id=\"TARGET\">select4</Col><Col id=\"SP\">DABPR_TUITION_LIST04_SELECT</Col></Row><Row><Col id=\"TARGET\">select5</Col><Col id=\"SP\">DABPR_TUITION_LIST05_SELECT</Col></Row><Row><Col id=\"TARGET\">select6</Col><Col id=\"SP\">DABPR_TUITION_LIST03_SELECT</Col></Row><Row><Col id=\"TARGET\">select7</Col><Col id=\"SP\">DABPR_TUITION_LIST04_SELECT</Col></Row><Row><Col id=\"TARGET\">select8</Col><Col id=\"SP\">DABPR_TUITION_LIST05_SELECT</Col></Row><Row><Col id=\"TARGET\">select9</Col><Col id=\"SP\">DABPR_TUITION_LIST03_SELECT</Col></Row><Row><Col id=\"TARGET\">select10</Col><Col id=\"SP\">DABPR_TUITION_LIST04_SELECT</Col></Row><Row><Col id=\"TARGET\">select11</Col><Col id=\"SP\">DABPR_TUITION_LIST05_SELECT</Col></Row><Row><Col id=\"TARGET\">select12</Col><Col id=\"SP\">DABPR_TUITION_LIST03_SELECT</Col></Row><Row><Col id=\"TARGET\">select13</Col><Col id=\"SP\">DABPR_TUITION_LIST04_SELECT</Col></Row><Row><Col id=\"TARGET\">select14</Col><Col id=\"SP\">DABPR_TUITION_LIST05_SELECT</Col></Row><Row><Col id=\"TARGET\">approval</Col><Col id=\"SP\">DABPR_TUITION_LIST_APPROVE</Col></Row><Row><Col id=\"SP\">DABPR_TUITION_APRV_UPDATE</Col><Col id=\"TARGET\">apprSang</Col></Row><Row><Col id=\"TARGET\">apprInit</Col><Col id=\"SP\">DABPR_APRV_INIT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList4", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList5", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList6", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList7", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList8", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList9", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList10", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList11", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList12", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList13", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList14", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","280","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DZX_CFCORP_STD");
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_TUITION","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("지급년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_TUITION","staYM_TUITION:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_tabbuttonheight("33");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("학자금 지급내역");
            obj.set_url("da::dab/DAB_TUITION_APPROVE_TAB01.xfdl");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("급여지급");
            obj.set_url("da::dab/DAB_TUITION_APPROVE_TAB02.xfdl");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Tabpage("tab3",this.divData.form.tabData);
            obj.set_text("유치원");
            obj.set_url("da::dab/DAB_TUITION_APPROVE_TAB03.xfdl");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Tabpage("tab4",this.divData.form.tabData);
            obj.set_text("고등학교 (입학금)");
            obj.set_url("da::dab/DAB_TUITION_APPROVE_TAB04.xfdl");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Tabpage("tab5",this.divData.form.tabData);
            obj.set_text("고등학교 (등록금)");
            obj.set_url("da::dab/DAB_TUITION_APPROVE_TAB05.xfdl");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Tabpage("tab6",this.divData.form.tabData);
            obj.set_text("대학교");
            obj.set_url("da::dab/DAB_TUITION_APPROVE_TAB06.xfdl");
            this.divData.form.tabData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.ctclYM_TUITION.form.TextBox","value","dsSearch","YM_TUITION");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","da::dab/DAB_TUITION_APPROVE_TAB01.xfdl");
            this._addPreloadList("fdl","da::dab/DAB_TUITION_APPROVE_TAB02.xfdl");
            this._addPreloadList("fdl","da::dab/DAB_TUITION_APPROVE_TAB03.xfdl");
            this._addPreloadList("fdl","da::dab/DAB_TUITION_APPROVE_TAB04.xfdl");
            this._addPreloadList("fdl","da::dab/DAB_TUITION_APPROVE_TAB05.xfdl");
            this._addPreloadList("fdl","da::dab/DAB_TUITION_APPROVE_TAB06.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_TUITION_APPROVE.xfdl", function() {
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
        	this.fnSetInit();
        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	//this.FormBtns.Select.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnAprove   = this.gfnFormButtonAdd("Aprove"  , "fnApproval");	// 파트장 승인
        	this.btnContrary = this.gfnFormButtonAdd("Contrary", "fnApproval");	// 파트장 반려
        	this.btnAprv     = this.gfnFormButtonAdd("Aprv"	   , "fnAprv");		// 결재상신 버튼
        	this.btnDocQ     = this.gfnFormButtonAdd("DocQ"    , "fnDocQ");		// 결재문서조회 버튼
        	this.btnInit     = this.gfnFormButtonAdd("Init"    , "fnAprv");		// 결재상태초기화 버튼
        };

        //버튼 활성/비활성 공통 처리
        this.fnButtonCheck = function (){
        	this.gfnBtnCheck(this.btnAprv, this.dsList1);	//결재상신
        	this.gfnBtnCheck(this.btnDocQ, this.dsList1);	//결재문서조회
        	this.gfnBtnCheck(this.btnInit, this.dsList1);	//결재상태초기화
        };
        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclYM_TUITION = this.divSearch.form.ctclYM_TUITION;
        	this.ccfCD_CORP     = this.divSearch.form.ccfCD_CORP;
        	this.tabData        = this.divData.form.tabData;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.bSelect = false;
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_onvaluechanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// DABPR_TUITION_LIST01_SELECT, DABPR_TUITION_LIST02_SELECT
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("YM_TUITION", "string");
        	this.dsSelect.addColumn("CD_CORP"   , "string");
        	this.dsSelect.addColumn("GUBUN"     , "string");

        	// DABPR_TUITION_LIST03_SELECT, DABPR_TUITION_LIST04_SELECT, DABPR_TUITION_LIST05_SELECT
        	this.dsSelect1 = new Dataset();
        	this.dsSelect1.addColumn("YM_TUITION", "string");
        	this.dsSelect1.addColumn("CD_CORP"   , "string");
        	this.dsSelect1.addColumn("CD_LEVEL"  , "string");
        	this.dsSelect1.addColumn("CD_TUITION", "string");
        	this.dsSelect1.addColumn("GUBUN"     , "string");

        	this.dsExcute = new Dataset();
        	this.dsExcute.addColumn("CD_CORP"          , "string");
        	this.dsExcute.addColumn("YM_TUITION"       , "string");
        	this.dsExcute.addColumn("ID_APPROVE"       , "string");
        	this.dsExcute.addColumn("TY_APPROVE_STATUS", "string");
        	this.dsExcute.addColumn("GR_SEARCH"        , "string");
        	this.dsExcute.addColumn("GR_CORP"          , "string");
        	this.dsExcute.addColumn("GR_DEPT"          , "string");
        	this.dsExcute.addColumn("ID_LOGIN"         , "string");

        	// 결재상신
        	this.dsAprvUpdate = new Dataset();
        	this.dsAprvUpdate.addColumn("CD_CORP"   , "STRING");
        	this.dsAprvUpdate.addColumn("YM_TUITION", "STRING");
        	this.dsAprvUpdate.addColumn("ID_USER"   , "STRING");
        	this.dsAprvUpdate.addColumn("NO_APRVOUT", "INT");

        	// 결재상태초기화
        	this.dsSlipInit = new Dataset();
        	this.dsSlipInit.addColumn("CD_CORP"   , "string");
        	this.dsSlipInit.addColumn("ID_AP_TYPE", "string");
        	this.dsSlipInit.addColumn("NO_APRV"   , "int");
        	this.dsSlipInit.addColumn("ID_USER"   , "string");


        	this.dsAprvSel = new Dataset();
        	this.dsAprvSel.addColumn("YM_TUITION", "string");
        	this.dsAprvSel.addColumn("CD_CORP"   , "string");
        	this.dsAprvSel.addColumn("GUBUN"     , "string");

        	this.dsAprvSel3 = new Dataset();
        	this.dsAprvSel3.addColumn("YM_TUITION", "string");
        	this.dsAprvSel3.addColumn("CD_CORP"   , "string");
        	this.dsAprvSel3.addColumn("CD_LEVEL"  , "string");
        	this.dsAprvSel3.addColumn("CD_TUITION", "string");
        	this.dsAprvSel3.addColumn("GUBUN"     , "string");

        	this.dsAprvSel4 = new Dataset();
        	this.dsAprvSel4.addColumn("YM_TUITION", "string");
        	this.dsAprvSel4.addColumn("CD_CORP"   , "string");
        	this.dsAprvSel4.addColumn("CD_LEVEL"  , "string");
        	this.dsAprvSel4.addColumn("CD_TUITION", "string");
        	this.dsAprvSel4.addColumn("GUBUN"     , "string");

        	this.dsAprvSel5 = new Dataset();
        	this.dsAprvSel5.addColumn("YM_TUITION", "string");
        	this.dsAprvSel5.addColumn("CD_CORP"   , "string");
        	this.dsAprvSel5.addColumn("CD_LEVEL"  , "string");
        	this.dsAprvSel5.addColumn("CD_TUITION", "string");
        	this.dsAprvSel5.addColumn("GUBUN"     , "string");

        	this.dsAprvSel6 = new Dataset();
        	this.dsAprvSel6.addColumn("YM_TUITION", "string");
        	this.dsAprvSel6.addColumn("CD_CORP"   , "string");
        	this.dsAprvSel6.addColumn("CD_LEVEL"  , "string");
        	this.dsAprvSel6.addColumn("CD_TUITION", "string");
        	this.dsAprvSel6.addColumn("GUBUN"     , "string");

        };

        /************************************************************************
         * 초기화 이벤트
         ************************************************************************/
        this.fnSetInit = function() {
        	this.dsSearch.setColumn(0,"YM_TUITION", this.gfnGetDate().substr(0, 6));
        	this.dsSearch.setColumn(0,"CD_CORP"   , this.AuthClient.CD_CORP);
        	this.dsSearch.setColumn(0,"DS_CORP"   , this.AuthClient.DS_CORP);
        	this.FormBtns.Select.click();
        	this.bSelect = true;
        };
        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;

        	// gfnGridBeforeSelect 실행할 그리드 선택
        	var tabIdx = this.tabData.tabindex;
        	var objCurTabPage = this.tabData.tabpages[tabIdx];
        	var arrComp = objCurTabPage.form.components;
        	var nLength = arrComp.length;

        	for (var i = 0; i < nLength; i++) {
        		if (arrComp[i] instanceof nexacro.Grid) {
        			this.gfnGridBeforeSelect(arrComp[i]);
        		}
        	}

        	this.dsSelect.clearData();
            this.dsSelect.addRow();

        	this.dsSelect1.clearData();
        	this.dsSelect1.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "YM_TUITION", this.dsSearch.getColumn(0, "YM_TUITION"));
        	this.dsSelect.setColumn(0, "GUBUN"     , "GRID");

        	var tabIdx = this.tabData.tabindex;

        	var strSvcId   = "select";
        	var strSvcType = "grid";
        	var inProc     =  "_dsProc";
        	var inData     = "";
        	var outData    = "";

        	if (tabIdx == 0) {			// 학자금지급승인
        		inData  += "select1=dsSelect";
        		outData += "dsList1=select10";
        	} else if (tabIdx == 1) {	// 급여지급 tab
        		inData  += "select2=dsSelect";
        		outData += "dsList2=select20";
        	} else if (tabIdx == 2) {	// 유치원 tab(3번 tab)
        		this.dsSelect1.setColumn(0, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsSelect1.setColumn(0, "YM_TUITION", this.dsSearch.getColumn(0, "YM_TUITION"));
        		this.dsSelect1.setColumn(0, "CD_LEVEL"  , "09");
        		this.dsSelect1.setColumn(0, "CD_TUITION", "03");
        		this.dsSelect1.setColumn(0, "GUBUN"     , "GRID");

        		inData  += "select3=dsSelect1 select4=dsSelect1 select5=dsSelect1";
        		outData += "dsList3=select30 dsList4=select40 dsList5=select50";
        	} else if (tabIdx == 3) {	// 고등학교(입학금) tab(4번 tab)
        		this.dsSelect1.setColumn(0, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsSelect1.setColumn(0, "YM_TUITION", this.dsSearch.getColumn(0, "YM_TUITION"));
        		this.dsSelect1.setColumn(0, "CD_LEVEL"  , "06");
        		this.dsSelect1.setColumn(0, "CD_TUITION", "02");
        		this.dsSelect1.setColumn(0, "GUBUN"     , "GRID");

        		inData  += "select3=dsSelect1 select4=dsSelect1 select5=dsSelect1";
        		outData += "dsList6=select30 dsList7=select40 dsList8=select50";
        	} else if( tabIdx == 4) {	// 고등학교(등록금) tab (5번 tab)
        		this.dsSelect1.setColumn(0, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsSelect1.setColumn(0, "YM_TUITION", this.dsSearch.getColumn(0, "YM_TUITION"));
        		this.dsSelect1.setColumn(0, "CD_LEVEL"  , "06");
        		this.dsSelect1.setColumn(0, "CD_TUITION", "01");
        		this.dsSelect1.setColumn(0, "GUBUN"     ,"GRID");
        		inData  += "select3=dsSelect1 select4=dsSelect1 select5=dsSelect1";
        		outData += "dsList9=select30 dsList10=select40 dsList11=select50";
        	} else if( tabIdx == 5 ) {  // 대학교 tab (6번 tab)
        		this.dsSelect1.setColumn(0, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        		this.dsSelect1.setColumn(0, "YM_TUITION", this.dsSearch.getColumn(0, "YM_TUITION"));
        		this.dsSelect1.setColumn(0, "CD_LEVEL"  , "04");
        		this.dsSelect1.setColumn(0, "CD_TUITION", "01");
        		this.dsSelect1.setColumn(0, "GUBUN"     , "GRID");

        		inData  += "select3=dsSelect1 select4=dsSelect1 select5=dsSelect1";
        		outData += "dsList12=select30 dsList13=select40 dsList14=select50";
        	}

        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	// 통신방법 정의 [생략가능]

        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	var objExcel = {};
        	var arrSheetName = [], arrGrid = [], cnt = 0;
        	for (var i = 0; i < this.tabData.getTabpageCount(); i++) {
        		var objCurTabPage = this.tabData.tabpages[i];
        		var arrComp = objCurTabPage.form.components;
        		for (var j = 0; j < arrComp.length; j++) {
        			if (arrComp[j] instanceof nexacro.Grid) {
        				arrSheetName[cnt] = objCurTabPage.text + (arrComp[j].id=="objGrid3" ? "(학자금)" : "");
        				arrGrid[cnt] = arrComp[j];
        				trace("cnt = " + cnt + ", " + arrComp[j].id + ", " + arrSheetName[cnt])
        				cnt++;
        			}
        			if (arrComp[j] instanceof nexacro.Div) {
        				objExcel = this.fnGridExcel(arrComp[j].form.components, objCurTabPage.text, arrSheetName, arrGrid, cnt);
        				arrSheetName = objExcel.arrSheetName;
        				arrGrid = objExcel.arrGrid;
        				cnt = objExcel.cnt;
        			}
        		}
        	}
        	this.gfnExcelExportMulti(arrGrid,  arrSheetName, this.titletext);
        };

        this.fnGridExcel = function(arrComp, pageTitle, arrSheetName, arrGrid, cnt) {
        	var objExcel = {};
        	for (var j = 0; j < arrComp.length; j++) {
        		if (arrComp[j] instanceof nexacro.Grid) {
        			arrSheetName[cnt] = pageTitle + (arrComp[j].id=="objGrid4" ? "(학자금 추가)" : (arrComp[j].id == "objGrid5" ? "(학자금 지급제외자)" : ""));
        			arrGrid[cnt] = arrComp[j];
        			trace("cnt = " + cnt + ", " + arrComp[j].id + ", " + arrSheetName[cnt])
        			cnt++;
        		}
        	}
        	objExcel.arrGrid = arrGrid;
        	objExcel.arrSheetName = arrSheetName;
        	objExcel.cnt = cnt;
        	return objExcel;
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */
        this.fnSelectValidate = function() {
        	var validate = true;
        	if (validate && this.gfnIsNull(this.dsSearch.getColumn(0,"CD_CORP"))) {
        		validate = false;
        		this.gfnAlert("법인을 입력하세요");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        	}
        	if (validate && this.gfnIsNull(this.dsSearch.getColumn(0,"YM_TUITION"))) {
        		validate = false;
        		this.gfnAlert("작업년월을 입력하세요");
        		this.ctclYM_TUITION.form.TextBox.setFocus();
        	}
        	return validate;
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg) {
         	switch(svcID) {
        	case "select":
        		var tabIdx = this.tabData.tabindex;
        		var objCurTabPage = this.tabData.tabpages[tabIdx];
        		var arrComp = objCurTabPage.form.components;
        		var nLength = arrComp.length;

        		for (var i = 0; i < nLength; i++) {
        			if (arrComp[i] instanceof nexacro.Grid) {
        				this.gfnGridAfterSelect(arrComp[i]);
        			}
        		}
        		break;
        	case "approval":
        		//this.gfnGridInit(this.dxGrid, this.dsList0, "DA", "DAB_TUITION_APPROVAL");
        		if (errorCode == 0) {
        			this.gfnAlert("작업이 완료되었습니다.");
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        		break;
        	case "apprSang":
        		if (this.dsAprvUpdate.rowcount > 0) {
        			//결재상신 콜백
        			this.fnSlipAprv();
        		} else {
        			this.gfnAlert('결재문서가 존재하지않습니다.');
        		}
        		break;
        	case "aprvDoc":
        		var json = this.gfnArgsToJson(strArg);
        		trace("json.NO_APRV = " + json.NO_APRV)
        		var oParam = {
        			NO_APRV : json.NO_APRV,
        			ID_DOORAY_TYPE : this.dsResult.getColumn(0, "ID_DOORAY_TYPE")
        		}
        		this.gfnOpenDoorayAppr("AP_REQ_URL", oParam,"fnAprvDoorayCallback");
        		this.FormBtns.Select.click();
        		break;
        	case "apprInit":
        		this.fnApprInitCallback = function() {
        			this.FormBtns.Select.click();
        		}
        		this.gfnAlert("초기화 작업이 완료되었습니다.","fnApprInitCallback");
        		break;
         	}
        };

        this.fnAprvDoorayCallback = function(svcId, sRtn){
        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        this.divData_tabData_onchanged = function(obj,e) {
        	var nTabIdx = this.divData.form.tabData.tabindex;
        	if( !this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "YM_TUITION"))) {
        		this.FormBtns.Select.click();
        	}
        };

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.dsSearch_onvaluechanged = function(obj,e) {
        	if (this.bSelect && e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		var tabIdx = this.tabData.tabindex;
        		var objCurTabPage = this.tabData.tabpages[tabIdx];
        		var arrComp = objCurTabPage.form.components;
        		var nLength = arrComp.length;

        		for (var i = 0; i < nLength; i++) {
        			if (arrComp[i] instanceof nexacro.Grid) {
        				this.gfnGridClear(arrComp[i]);
        			}
        		}
        		this.dsList1.clearData();
        		this.dsList2.clearData();
        		this.dsList2.clearData();
        		this.dsList3.clearData();
        		this.dsList4.clearData();
        		this.dsList5.clearData();
        		this.dsList6.clearData();
        		this.dsList7.clearData();
        		this.dsList8.clearData();
        		this.dsList9.clearData();
        		this.dsList10.clearData();
        		this.dsList11.clearData();
        		this.dsList12.clearData();
        		this.dsList13.clearData();
        		this.dsList14.clearData();

        		// 조회
        		if (!this.gfnIsNull(this.dsSearch.getColumn(0,"CD_CORP")) && !this.gfnIsNull(this.dsSearch.getColumn(0, "YM_TUITION"))) {
        			this.FormBtns.Select.click();
        		}
        	}
        };

        /************************************************************************
         * 확장버튼
         ************************************************************************/
        // 학자금 승인처리
        this.fnApproval = function(obj,e) {
        	// TODO 계획생성 기능 추가
        	if (this.dsList1.rowcount > 0) {
        		this.btnId = obj.id; trace("obj.id = " + obj.id);
        		if (obj.id == "btnExt_Aprove") { // 승인버튼인 경우
        			this.gfnConfirm("학자금 내역을 승인하시겠습니까?", "fnApprovalCallback");
        		} else {
        			this.gfnConfirm("학자금 내역을 반려하시겠습니까?", "fnApprovalCallback");
        		}
        	} else {
        		this.gfnAlert("승인할 내역이 없습니다.");
        	}
        }

        // 학자금 승인처리 Callback
        this.fnApprovalCallback = function(strId, val) {
        	if (val == false) return;

        	//this.dxGrid.updateToDataset();
        	this.dsExcute.clearData();
        	var nrow = this.dsExcute.addRow();

        	this.dsExcute.setColumn(nrow, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsExcute.setColumn(nrow, "YM_TUITION", this.dsSearch.getColumn(0, "YM_TUITION"));
        	this.dsExcute.setColumn(nrow, "ID_APPROVE", this.AuthClient.ID_USER);

        	//결재상태 : 승인일때는 2  반려일때 3
        	var tyApproveStatus = "2";
        	if (this.btnId == "btnExt_Contrary") {
        		tyApproveStatus = "3";
        	}
        	this.dsExcute.setColumn(nrow, "TY_APPROVE_STATUS", tyApproveStatus);
        	this.dsExcute.setColumn(nrow, "GR_SEARCH"        , this.FormInfo.GR_SEARCH);
        	this.dsExcute.setColumn(nrow, "GR_CORP"          , this.AuthClient.CD_CORP);
        	this.dsExcute.setColumn(nrow, "GR_DEPT"          , this.AuthClient.CD_DEPT);
        	this.dsExcute.setColumn(nrow, "ID_LOGIN"         , this.AuthClient.ID_USER);

        	var strSvcId    = "approval";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "approval=dsExcute";
        	//var outData     = "dsResult=approval0";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        /*
         * 결재상신 버튼
         */
        this.fnAprv = function(obj,e) {
        	var objCurTabPage = this.tabData.tabpages[0];
        	this.dxGrid1 = objCurTabPage.form.objGrid1;
        	var nrow = 0;
        	if (this.dxGrid1.yn_filter == "Y") nrow = 1;
        	if (this.dsList1.rowcount == nrow) {
        		return;
        	}
        	this.gfnConfirm(obj.text + " 하시겠습니까?", function (strId, val) {
        		if (val) {
        			var strSvcId   = "";
        			var strSvcType = "";
        			var inProc	   = "";
        			var inData     = "";
        			var outData    = "";

        			if (obj.id == "btnExt_Aprv") {
        				this.dsAprvUpdate.clearData();

        				var nrow = this.dsAprvUpdate.addRow();
        				this.dsAprvUpdate.setColumn(nrow, "CD_CORP"    , this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsAprvUpdate.setColumn(nrow, "YM_TUITION" , this.dsSearch.getColumn(0, "YM_TUITION"));
        				this.dsAprvUpdate.setColumn(nrow, "ID_USER"    , this.AuthClient.ID_USER);

        				if (this.dsAprvUpdate.rowcount == 0) return;

        				strSvcId    = "apprSang";
        				strSvcType  = "save";
        				inProc		= "_dsProc";
        				inData      = "apprSang=dsAprvUpdate";
        				outData     = "dsAprvUpdate=apprSang";
        			}  else if(obj.id == "btnExt_Init") {
        				this.dsSlipInit.clearData();
        				var nrow = this.dsSlipInit.addRow();
        				this.dsSlipInit.setColumn(nrow, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        				this.dsSlipInit.setColumn(nrow, "ID_AP_TYPE", "DAB06");
        				this.dsSlipInit.setColumn(nrow, "NO_APRV"   , this.dsList1.getColumn(nrow, "NO_APRV"));
        				this.dsSlipInit.setColumn(nrow, "ID_USER"   , this.AuthClient.ID_USER);
        				strSvcId   = "apprInit";
        				strSvcType = "save";
        				inProc	   = "_dsProc";
        				inData     = "apprInit=dsSlipInit";
        				outData    = "";
        			}
        			trace(this.dsSlipInit.saveXML())

        			var strArg      = "";
        			var callBackFnc = "fnCallback";

        			this.gfnTransaction(strSvcId, 		// transaction을 구분하기 위한 svc id값
        								strSvcType, 	// transaction을 요청할 구분
        								inProc,			// Procedure 정보 Dataset 이름
        								inData, 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        								outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        								strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        								callBackFnc); 	// 통신방법 정의 [생략가능]
        		}
        	});
        };

        //결재상신 콜백
        this.fnSlipAprv = function() {
        	this.dsAprvSel.clearData();
            this.dsAprvSel.addRow();
        	this.dsAprvSel.setColumn(0, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsAprvSel.setColumn(0, "YM_TUITION", this.dsSearch.getColumn(0, "YM_TUITION"));
        	this.dsAprvSel.setColumn(0, "GUBUN"     , "APRV");

        	// 유치원 tab
        	this.dsAprvSel3.clearData();
        	this.dsAprvSel3.addRow();
        	this.dsAprvSel3.setColumn(0, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsAprvSel3.setColumn(0, "YM_TUITION", this.dsSearch.getColumn(0, "YM_TUITION"));
        	this.dsAprvSel3.setColumn(0, "CD_LEVEL"  , "09");
        	this.dsAprvSel3.setColumn(0, "CD_TUITION", "03");
        	this.dsAprvSel3.setColumn(0, "GUBUN"     , "APRV");

        	//고등학교(입학금) tab
        	this.dsAprvSel4.clearData();
        	this.dsAprvSel4.addRow();
        	this.dsAprvSel4.setColumn(0, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsAprvSel4.setColumn(0, "YM_TUITION", this.dsSearch.getColumn(0, "YM_TUITION"));
        	this.dsAprvSel4.setColumn(0, "CD_LEVEL"  , "06");
        	this.dsAprvSel4.setColumn(0, "CD_TUITION", "02");
        	this.dsAprvSel4.setColumn(0, "GUBUN"     , "APRV");

        	// 고등학교(등록금) tab
        	this.dsAprvSel5.clearData();
        	this.dsAprvSel5.addRow();
        	this.dsAprvSel5.setColumn(0, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsAprvSel5.setColumn(0, "YM_TUITION", this.dsSearch.getColumn(0, "YM_TUITION"));
        	this.dsAprvSel5.setColumn(0, "CD_LEVEL"  , "06");
        	this.dsAprvSel5.setColumn(0, "CD_TUITION", "01");
        	this.dsAprvSel5.setColumn(0, "GUBUN"     , "APRV");

        	// 대학교 tab
        	this.dsAprvSel6.clearData();
        	this.dsAprvSel6.addRow();
        	this.dsAprvSel6.setColumn(0, "CD_CORP"   , this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsAprvSel6.setColumn(0, "YM_TUITION", this.dsSearch.getColumn(0, "YM_TUITION"));
        	this.dsAprvSel6.setColumn(0, "CD_LEVEL"  , "04");
        	this.dsAprvSel6.setColumn(0, "CD_TUITION", "01");
        	this.dsAprvSel6.setColumn(0, "GUBUN"     , "APRV");

        	var strSvcId    = "aprvDoc";
        	var strSvcType  = "approval/templete/DAB06";
        	var inProc      = "_dsProc";
        	var inParam 	= "";	// 조회SP이외 사용할 정보
        	var inData      = "select1=dsAprvSel select2=dsAprvSel "  // 학자금지급내역, 급여지급 tab
        	                + "select3=dsAprvSel3 select4=dsAprvSel3 select5=dsAprvSel3 " //유치원tab
        					//+ "select6=dsAprvSel4 select7=dsAprvSel4 select8=dsAprvSel4 " // 고등학교(입학금) tab
        					//+ "select9=dsAprvSel5 select10=dsAprvSel5 select11=dsAprvSel5 " // 고등학교(등록금) tab
        					+ "select12=dsAprvSel6 select13=dsAprvSel6 select14=dsAprvSel6 " ; // 대학교 tab
        	var outData     = "dsResult=DAB06";
        	var strArg      = "NO_APRV=" + this.dsAprvUpdate.getColumn(0, "NO_APRV");
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        //결재문서 조회
        this.fnDocQ = function(obj,e) {
        	var objCurTabPage = this.tabData.tabpages[0];
        	this.dxGrid1 = objCurTabPage.form.objGrid1;
        	var nrow = 0;
        	if (this.dxGrid1.yn_filter == "Y") nrow = 1;
        	if (this.dsList1.rowcount == nrow ) {
        		return;
        	}

        	if (this.gfnIsNull(this.dsList1.getColumn(this.dsList1.rowposition, "NO_APRV"))) {
        		return;
        	}

        	var param = {};
        	param.CD_CORP = this.dsSearch.getColumn(0, "CD_CORP");
        	param.NO_APRV = this.dsList1.getColumn(this.dsList1.rowposition, "NO_APRV");

        	this.gfnOpenDoorayAppr("AP_DOC_URL", param, "fnPopup_callback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
        };
        this.loadIncludeScript("DAB_TUITION_APPROVE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
