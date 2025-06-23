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
            this.set_titletext("일용근로신고서");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,710);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SAUPJANG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_HASUGUB\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REPORT\" type=\"STRING\" size=\"256\"/><Column id=\"CT_PERSON\" type=\"INT\" size=\"256\"/><Column id=\"DS_MANAGER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID_MANAGER\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_AREA\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_WORK1\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_WORK2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SINGO_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL_1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL_2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL_3\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SAMUJOHAP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_GONGSA\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JIP_1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_JIP_2\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSBPR_GUNROSINGOLIST_HEAD_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSub</Col><Col id=\"SP\">DSBPR_GUNROSINGOLIST_LINE_SELECT</Col></Row><Row><Col id=\"TARGET\">selectExcel</Col><Col id=\"SP\">DSBPR_GUNROSINGOLIST_EXCEL_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListSub", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"ROWNUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL_1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL_2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL_3\" type=\"STRING\" size=\"256\"/><Column id=\"CT_WORK\" type=\"INT\" size=\"256\"/><Column id=\"CD_JIKJONG\" type=\"STRING\" size=\"256\"/><Column id=\"CT_AVG_TIME\" type=\"INT\" size=\"256\"/><Column id=\"AM_IMGUM\" type=\"STRING\" size=\"256\"/><Column id=\"AM_TOTAL\" type=\"STRING\" size=\"256\"/><Column id=\"RM_BIGO\" type=\"STRING\" size=\"256\"/><Column id=\"D_01\" type=\"INT\" size=\"256\"/><Column id=\"D_02\" type=\"INT\" size=\"256\"/><Column id=\"D_03\" type=\"INT\" size=\"256\"/><Column id=\"D_04\" type=\"INT\" size=\"256\"/><Column id=\"D_05\" type=\"INT\" size=\"256\"/><Column id=\"D_06\" type=\"INT\" size=\"256\"/><Column id=\"D_07\" type=\"INT\" size=\"256\"/><Column id=\"D_08\" type=\"INT\" size=\"256\"/><Column id=\"D_09\" type=\"INT\" size=\"256\"/><Column id=\"D_10\" type=\"INT\" size=\"256\"/><Column id=\"D_11\" type=\"INT\" size=\"256\"/><Column id=\"D_12\" type=\"INT\" size=\"256\"/><Column id=\"D_13\" type=\"INT\" size=\"256\"/><Column id=\"D_14\" type=\"INT\" size=\"256\"/><Column id=\"D_15\" type=\"INT\" size=\"256\"/><Column id=\"D_16\" type=\"INT\" size=\"256\"/><Column id=\"D_17\" type=\"INT\" size=\"256\"/><Column id=\"D_18\" type=\"INT\" size=\"256\"/><Column id=\"D_19\" type=\"INT\" size=\"256\"/><Column id=\"D_20\" type=\"INT\" size=\"256\"/><Column id=\"D_21\" type=\"INT\" size=\"256\"/><Column id=\"D_22\" type=\"INT\" size=\"256\"/><Column id=\"D_23\" type=\"INT\" size=\"256\"/><Column id=\"D_24\" type=\"INT\" size=\"256\"/><Column id=\"D_25\" type=\"INT\" size=\"256\"/><Column id=\"D_26\" type=\"INT\" size=\"256\"/><Column id=\"D_27\" type=\"INT\" size=\"256\"/><Column id=\"D_28\" type=\"INT\" size=\"256\"/><Column id=\"D_29\" type=\"INT\" size=\"256\"/><Column id=\"D_30\" type=\"INT\" size=\"256\"/><Column id=\"D_31\" type=\"INT\" size=\"256\"/><Column id=\"CD_TOIJIK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_GOYONG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"NO_JUMIN_ORG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListExcel", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DSX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("현장코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DSX_CFSITE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_BASE","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("대상년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("calYM_BASE","staYM_BASE:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staNO_ID","calYM_BASE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("성명");
            obj.set_textDecoration("");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfNO_ID","staNO_ID:0.0","10.0","220","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("8");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DSX_CFEMPLOYEE_01");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtNO_JUMIN","ccfNO_ID:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","50.00%","100.00%","5",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_background("skyblue");
            obj.set_cursor("ns-resize");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataMain","0","0",null,null,"0","divSplitter:5",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGrid","0","0",null,null,"0","0",null,null,null,null,this.divData.form.divDataMain.form);
            obj.set_taborder("1");
            obj._setContents("");
            this.divData.form.divDataMain.addChild(obj.name, obj);

            obj = new Div("divDataSub","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridSub","0","0",null,null,"0","1",null,null,null,null,this.divData.form.divDataSub.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataSub.addChild(obj.name, obj);

            obj = new Div("divDataExcel","0","divSplitter:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Grid("objGridExcel","0","0",null,null,"0","1",null,null,null,null,this.divData.form.divDataExcel.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.divDataExcel.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.calYM_BASE.form.TextBox","value","dsSearch","YM_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfNO_ID.form.CDTextBox","value","dsSearch","NO_ID");
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
        this.registerScript("DSB_GUNROSINGOLIST.xfdl", function() {
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
        	this.fnSetParameter();
        	this.fnSetEvent();


        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        // 	this.divSearch.form.ccfCD_SITE.form.CDTextBox.set_value(this.AuthClient.CD_SITE);
        // 	this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(this.AuthClient.DS_SITE);
        	/* CD_SITE, DS_SITE 이전 값 받아오는 부분 START */
        	var cd_site = "";
        	var ds_site = "";
        	if(!this.gfnIsNull(this.objApp.DW_SPACE98)) {
        		cd_site = this.objApp.DW_SPACE98;
        		ds_site = this.objApp.DW_SPACE99;
        	} else {
        		cd_site = this.AuthClient.CD_SITE;
        		ds_site = this.AuthClient.DS_SITE;
        	}

        	this.dsSearch.setColumn(0, "CD_SITE", cd_site);
        	this.divSearch.form.ccfCD_SITE.form.DSTextBox.set_value(ds_site)
        	/* CD_SITE, DS_SITE 이전 값 받아오는 부분 END */

        	var toDay = this.gfnGetDate().substring(0,6);
        	this.divSearch.form.calYM_BASE.form.TextBox.set_value(toDay);

        	// GR_SEARCH가 2보다 크면.. 법인코드 disable
        	// GR_SEARCH가 7또는 9 인경우 부서코드 disable
        	//trace("GR_SEARCH", this.FormInfo.GR_SEARCH);
        	if( this.FormInfo.GR_SEARCH  >= "2"){
        		this.divSearch.form.ccfCD_CORP.set_enable(false);
        	}

        	if(this.FormInfo.GR_SEARCH == "7" || this.FormInfo.GR_SEARCH == "9"){
        		this.divSearch.form.ccfCD_SITE.set_enable(false);
        	}

        	//this.fnSelect();
        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	this.FormBtns.Add.set_enable(false);
         	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
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

        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;	// 소속법인
        	this.calYM_BASE = this.divSearch.form.calYM_BASE;	// 대상년월
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;	// 현장코드
        	this.ccfNO_ID = this.divSearch.form.ccfNO_ID;		// 성명

        	//그리드
        	//this.dxGrid = this.divData.form.objGrid;
        	this.dxGrid = this.divData.form.divDataMain.form.objGrid;
        	this.dxGridSub = this.divData.form.divDataSub.form.objGridSub;
        	this.dxGridExcel = this.divData.form.divDataExcel.form.objGridExcel;
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");


        	this.dsSelectSub = new Dataset();
        	this.dsSelectSub.addColumn("CD_SITE", "string");
        	this.dsSelectSub.addColumn("YM_WORK", "string");
        	this.dsSelectSub.addColumn("NO_ID", "string");
        	this.dsSelectSub.addColumn("NO_JUMIN", "string");


        	this.dsExcel = new Dataset();
        	this.dsExcel.addColumn("CD_SITE", "string");
        	this.dsExcel.addColumn("YM_WORK", "string");
        	this.dsExcel.addColumn("NO_ID", "string");
        	this.dsExcel.addColumn("NO_JUMIN", "string");

        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	// 그리드 초기화
        	this.gfnGridInit(this.dxGrid, this.dsList, "DS", "DSB_GUNROSINGOLIST_HEAD");
        	//this.dxGrid.set_selecttype("cell");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경

        	this.gfnGridInit(this.dxGridSub, this.dsListSub, "DS", "DSB_GUNROSINGOLIST_LINE");
        	//this.dxGrid.set_selecttype("cell");	// IE경우만 multiarea모드에서 master선택후 마우스 이동 빠르게 할 경우 버그가 있어서 cell 모드로 변경

        	this.gfnGridInit(this.dxGridExcel, this.dsListExcel, "DS", "DSB_GUNROSINGOLIST_EXCEL");


        	this.ccfCD_CORP.CodeFindName = "DSX_CFCORP"; //"DAX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_SITE.CodeFindName = "DSX_CFSITE";//"DSX_CFDET_CODE";		// DHX_CFACNTUNIT (변경전) 코드파인드 변경됨
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfNO_ID.CodeFindName = "DSX_CFEMPLOYEE_01";
        	this.ccfNO_ID.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfNO_ID.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        };

        this.fnSearchInit = function(id) {
        	this.gfnSetFormStatus(this);
        };


        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
        this.fnSelect = function() {

        	if (!this.fnSelectValidation()) return;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));

        	//this.dsSelect.setColumn(0, "CD_SITE", "0101919");
        	//this.dsSelect.setColumn(0, "YM_WORK", "201904");

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

        this.fnSelectSub = function() {

        	if (!this.fnSelectValidation()) return;

        	this.dsListSub.clearData();
        	this.dsSelectSub.clearData();

        	this.dsSelectSub.addRow();
        	this.dsSelectSub.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelectSub.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelectSub.setColumn(0, "NO_ID", this.gfnNvl(this.ccfNO_ID.form.DSTextBox.value,""));
        	this.dsSelectSub.setColumn(0, "NO_JUMIN", this.gfnNvl(this.divSearch.form.edtNO_JUMIN.value,""));

        	var strSvcId    = "selectSub";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectSub=dsSelectSub";
        	var outData     = "dsListSub=selectSub0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        }

        this.selectExcel = function() {
        	if (!this.fnSelectValidation()) return;

        	this.dsListExcel.clearData();

        	this.dsExcel.clearData();
        	this.dsExcel.addRow();
        	this.dsExcel.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsExcel.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsExcel.setColumn(0, "NO_ID", this.gfnNvl(this.ccfNO_ID.form.DSTextBox.value,""));
        	this.dsExcel.setColumn(0, "NO_JUMIN", this.gfnNvl(this.divSearch.form.edtNO_JUMIN.value,""));

        	var strSvcId    = "selectExcel";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "selectExcel=dsExcel";
        	var outData     = "dsListExcel=selectExcel0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        }

        this.fnAdd = function() {

        }

        this.fnDel = function() {

        }

        this.fnSave = function() {

        }

        this.fnExcel = function() {
        	this.selectExcel();
        	//this.gfnExcelExport(this.dxGrid);
        }

        this.fnPrint = function() {

        }

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidation = function() {

        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		this.gfnAlert("소속법인을 입력하세요.");
        		return false;
        	}
        	if (this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.text)) {
        		this.gfnAlert("현장코드를 입력 하세요.");
        		this.ccfCD_SITE.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.calYM_BASE.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.calYM_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("대상년월을 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg) {
        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);
        		this.fnSelectSub();

        	} else if (svcID == "selectSub") {
        		this.gfnGridAfterSelect(this.dxGridSub);

        	} else if (svcID == "selectExcel") {
        		this.gfnExcelExport(this.dxGridExcel);
        	}
        	this.FormBtns.Add.set_enable(false);
        	this.FormBtns.Del.set_enable(false);
        	this.FormBtns.Save.set_enable(false);
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        // 	if (id == "ccfCD_SITE") {	//현장
        // 		var cdCorp = this.ccfCD_CORP.form.CDTextBox.text;
        // 		if(this.gfnIsNull(cdCorp)){
        // 			this.gfnAlert("소속법인을 먼저 선택하세요.");
        // 			return false;
        // 		}
        // 		//dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");				//상위부서
        // 		//dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "Y");				//전표발행여부
        // 		dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);			//법인코드
        // 		//dsUserParam.setColumn(nrow, "YN_USE"		, "Y");				//사용여부
        // 		//dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "07");				//현장/본사여부
        // 	}

        	if (id == "ccfCD_CORP") {
         		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
         		dsUserParam.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        	}
        	else if (id == "ccfCD_SITE"){
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.gfnAlert("법인을 먼저 입력하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));	// 법인코드
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "GR_CORP", this.AuthClient.CD_CORP);
         		dsUserParam.setColumn(nrow, "GR_DEPT", this.AuthClient.CD_DEPT);
        	}

        	if (id == "ccfNO_ID") {
        		if (!this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.value)) {
        			dsUserParam.setColumn(nrow, "CD_SITE", this.ccfCD_SITE.form.CDTextBox.value);
        		} else {
        			this.gfnAlert("현장코드를 먼저 선택하세요.");
        			return false;
        		}
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfCD_CORP") {
        		this.ccfCD_SITE.form.fnCodeFindClear();
        		this.ccfNO_ID.form.fnCodeFindClear();
        	}
        	else if(id == "ccfCD_SITE") {
        		this.ccfNO_ID.form.fnCodeFindClear();

        	}else if(id == "ccfNO_ID") {
        		this.divSearch.form.edtNO_JUMIN.set_value("");
        		if(arr.length >0){
        			this.divSearch.form.edtNO_JUMIN.set_value(arr[0].NO_JUMIN_ORG);
        		}
        	}
        	this.fnSearchInit();
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/


        /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {

        	if(e == null || (e.pretext != e.posttext)) {
        		// 폼상태 초기화
        		this.gfnSetFormStatus(this);
        		this.gfnGridClear(this.dxGrid);
        	}
        };

        this.dsSearch_onvaluechanged = function(obj,e) {
        	if(e.oldvalue != e.newvalue) {
        		this.gfnSetFormStatus(this);	// 폼상태 초기화
        		this.gfnGridClear(this.dxGrid);
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
            this.divSearch.form.ccfCD_CORP.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.ccfCD_SITE.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.staYM_BASE.addEventHandler("onclick",this.Common_onclick,this);
            this.divSearch.form.edtNO_JUMIN.addEventHandler("onchanged",this.divSearch_edtNO_JUMIN_onchanged,this);
            this.divData.addEventHandler("ondragmove",this.divData_ondragmove,this);
            this.divData.form.divSplitter.addEventHandler("ondrag",this.divData_divSplitter_ondrag,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DSB_GUNROSINGOLIST.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
