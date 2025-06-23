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
            this.set_titletext("출역관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CHAIYONG\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_WOLGUB\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SUBST01\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST02\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST03\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST04\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST05\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST06\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST07\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST08\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST09\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST10\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST11\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST12\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST13\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST14\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST15\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST16\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST17\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST18\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST19\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST20\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST21\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST22\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST23\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST24\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST25\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST26\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST27\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST28\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST29\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST30\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST31\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSUM\" type=\"INT\" size=\"256\"/><Column id=\"AM_WONGA\" type=\"INT\" size=\"256\"/><Column id=\"AM_SODUK\" type=\"INT\" size=\"256\"/><Column id=\"AM_JUMIN\" type=\"INT\" size=\"256\"/><Column id=\"AM_GOYONG\" type=\"INT\" size=\"256\"/><Column id=\"AM_KUKMIN\" type=\"INT\" size=\"256\"/><Column id=\"AM_HEALTH\" type=\"INT\" size=\"256\"/><Column id=\"AM_GONGJE\" type=\"INT\" size=\"256\"/><Column id=\"AM_JIGUB\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_HOLIDAY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_HOLIDAY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("<ColumnInfo><Column id=\"YN_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SLIP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSBPR_DAILY_FINE_SELECT</Col></Row><Row><Col id=\"TARGET\">holydayselect</Col><Col id=\"SP\">DSBPR_HOLIDAY_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DSBPR_DAILY_FINE_SAVE</Col></Row><Row><Col id=\"TARGET\">execute</Col><Col id=\"SP\">DSBPR_DAILY_KOREANS_KUKMIN_SHEET</Col></Row><Row><Col id=\"TARGET\">magamcheck</Col><Col id=\"SP\">DSBPR_MAGAMCHECK_SELECT</Col></Row><Row><Col id=\"TARGET\">saveChk</Col><Col id=\"SP\">DSBPR_DAILY_FINE_SAVE_CHECK</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_SITE\"/><Col id=\"YM_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChk", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_CHECK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DSX_CFCORP");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_SITE","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("현장코드");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_SITE","staCD_SITE:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DSX_CFSITE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_SITE:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_WORK","staYM_WORK:0.0","10.0","90","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ctclYM_WORK:0.0","10.0",null,"24.0","39",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("(8시간=1 9시간=1.125 10시간=1.25 11시간=1.375 12시간=1.5)");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_SchLabel");
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

            obj = new BindItem("item1","divSearch.form.ccfCD_SITE.form.CDTextBox","value","dsSearch","CD_SITE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ctclYM_WORK.form.TextBox","value","dsSearch","YM_WORK");
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
        this.registerScript("DSB_DAILY_FINE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.magamflag = false;

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


        	//법인 셋팅
        	this.divSearch.form.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.divSearch.form.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	//현장 코드(코드파인드 변경으로 인해 초기값 주석처리)
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

        	//출역월 셋팅
        	var today = this.gfnGetDate().substring(0,6);
        	this.divSearch.form.ctclYM_WORK.form.TextBox.set_value(today);

        	// GR_SEARCH가 2보다 크면.. 법인코드 disable
        	// GR_SEARCH가 7또는 9 인경우 부서코드 disable
        	//trace("GR_SEARCH", this.FormInfo.GR_SEARCH);
        	if( this.FormInfo.GR_SEARCH  >= "2"){
        		this.divSearch.form.ccfCD_CORP.set_enable(false);
        	}

        	if(this.FormInfo.GR_SEARCH == "7" || this.FormInfo.GR_SEARCH == "9"){
        		this.divSearch.form.ccfCD_SITE.set_enable(false);
        	}

        	this.FormBtns.Select.click();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        // 	this.FormBtns.Add.set_enable(false);
        //  	this.FormBtns.Save.set_enable(false);
        //  	this.FormBtns.Del.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	//this.btnFormButtonNr = this.gfnFormButtonAdd("DsaPayChangeDlg", "fnDsaPayChangeDlg", "일당변경");
        	//this.btnFormButtonDe = this.gfnFormButtonAdd("DsbGongjongFine", "fnDsbGongjongFine", "공종관리");
        	this.btnFormButtonOc = this.gfnFormButtonAdd("btnFormButtonOc", "fnDsaEmployeeList");
        	this.btnFormButtonPh = this.gfnFormButtonAdd("btnFormButtonPh", "fnDsaPayChange");
        	this.btnFormButtonCe = this.gfnFormButtonAdd("btnFormButtonCe", "fnDsaMonthlyList");
        };

        this.fnDsaMonthlyList = function () {
        	/*if (this.dsList.rowcount <= 0) return;*/

        	// 노무비명세서
        	var param = {};

        	param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;
        	param.CD_SITE = this.ccfCD_SITE.form.CDTextBox.value;
        	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        	param.DT_WORK = this.ctclYM_WORK.form.TextBox.value;

        	this.gfnFormOpen("DSB", "DSB_MONTHLY_LIST", "", param);
        };

        this.fnDsbGongjongFine = function () {
        // 	/*if (this.dsList.rowcount <= 0) return;*/
        //
        // 	// 공종관리
        // 	var param = {};
        //
        // 	param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        // 	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;
        // 	param.CD_SITE = this.ccfCD_SITE.form.CDTextBox.value;
        // 	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        // 	param.DT_WORK = this.ctclYM_WORK.form.TextBox.value;
        //
        // 	this.gfnFormOpen("DSB", "DSB_GONGJONG_FINE", "", param);
        };

        this.fnDsaEmployeeList = function () {
        // 근로자조회및등록
        	var param = {};

        	param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;
        	param.CD_SITE = this.ccfCD_SITE.form.CDTextBox.value;
        	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        	param.NO_ID = this.dsList.getColumn(this.dsList.rowposition, "NO_ID");
        	param.DS_NAME = this.dsList.getColumn(this.dsList.rowposition, "DS_NAME");
        	param.NO_SABUN = this.dsList.getColumn(this.dsList.rowposition, "NO_SABUN");

        	trace("param", 	param);

        	this.gfnFormOpen("DSA", "DSA_EMPLOYEE_LIST", "", param);
        };

        this.fnDsaPayChange = function () {
        	// 임금변동내역
        	var param = {};

        	param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;
        	param.CD_SITE = this.ccfCD_SITE.form.CDTextBox.value;
        	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        	param.NO_ID = this.dsList.getColumn(this.dsList.rowposition, "NO_ID");
        	//param.NO_ID_REAL = this.dsList.getColumn(this.dsList.rowposition, "NO_ID_REAL");
        	param.NO_JUMIN = this.dsList.getColumn(this.dsList.rowposition, "NO_JUMIN_ORG");
        	param.DS_NAME = this.dsList.getColumn(this.dsList.rowposition, "DS_NAME");

        	this.gfnFormOpen("DSA", "DSA_PAYCHANGE", "", param);
        };

        this.fnDsaPayChangeDlg = function () {
        // 	/*if (this.dsList.rowcount <= 0) return;*/
        //
        // 	// 일당변경
        // 	var param = {};
        //
        // 	param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        // 	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;
        // 	param.CD_SITE = this.ccfCD_SITE.form.CDTextBox.value;
        // 	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        // 	param.DT_MONTH = this.ctclYM_WORK.form.TextBox.value + "01";
        //
        // 	param.NO_ID = this.dsList.getColumn(this.dsList.rowposition, "NO_ID");
        // 	param.DS_NAME = this.dsList.getColumn(this.dsList.rowposition, "DS_NAME");
        // 	param.AM_WOLGUB = this.dsList.getColumn(this.dsList.rowposition, "AM_WOLGUB");
        //
        // 	this.gfnFormOpen("DSA", "DSA_PAYCHANGE_DLG", "", param);
        };


        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;

        	//this.magamflag = false;	//현장마감 flag

        	this.dxGrid = this.divData.form.objGrid;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";
        	this.ccfCD_SITE.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_SITE.AfterCDTextChanged = "fnAfterCDTextChanged";


        	//그리드 이벤트
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";
        	//this.dxGrid.EnterCell = "fnGrid_EnterCell";

        	this.gfnGridInit(this.dxGrid, this.dsList, "DS", "DSB_DAILY_FINE");
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	// 조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");

        	// 휴일체크
        	this.dsHolydaySelect = new Dataset();
        	this.dsHolydaySelect.addColumn("YM_WORK", "string");

        	// 저장
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_SAVE", "string");
        	this.dsSave.addColumn("CD_CORP", "string");
        	this.dsSave.addColumn("CD_SITE", "string");
        	this.dsSave.addColumn("YM_WORK", "string");
        	this.dsSave.addColumn("NO_ID", "string");
        	this.dsSave.addColumn("TY_CHAIYONG", "string");
        	this.dsSave.addColumn("TY_PAY", "string");
        	//this.dsSave.addColumn("SEQ", "int");
        	this.dsSave.addColumn("RT_GS", "string");
        	this.dsSave.addColumn("TY_JIK", "string");
        	this.dsSave.addColumn("ID_INSERT", "string");

        /* 국민, 건강보험료 계산
        	this.dsExecute = new Dataset();
        	this.dsExecute.addColumn("CD_SITE", "string");
        	this.dsExecute.addColumn("DT_WORK", "string");
        */

        	// 마감확인
        	this.dsMagamcheck = new Dataset();
        	this.dsMagamcheck.addColumn("CD_SITE", "string");
        	this.dsMagamcheck.addColumn("YM_WORK", "string");
        	this.dsMagamcheck.addColumn("TY_CHAIYONG", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValidate()) return false;
        	this.fnSetMagamCheck();

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));

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
          *	주말 셋팅
          */
        this.fnHolidaySelect = function() {
        	this.dsHolydaySelect.clearData();
        	this.dsHolydaySelect.addRow();

        	this.dsHolydaySelect.setColumn(0, "YM_WORK", this.ctclYM_WORK.form.TextBox.value); //.replace(/-/g, ""));

        	var strSvcId    = "holydayselect";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "holydayselect=dsHolydaySelect";
        	var outData     = "dsList2=holydayselect0";
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
        	if(this.magamflag) {
        		this.gfnAlert("현장이 마감되었습니다. 입력하시려면 현장마감 해제를 해주세요.");
        		return false;
        	}

        	var row = this.gfnGridAdd(this.dxGrid);
        	//this.dsList.setColumn(row, "TY_PAY", "일당제");

        	//AM_SUBST01 ~ AM_SUBST31

        	for (var i = 1; i <= 31; i++) {
        		var monthCol = "AM_SUBST";
        		var day = "";
        		day = (i < 10) ? "0".concat(i) : i;
        		monthCol = monthCol.concat(day);

        		//trace(i+">>monthCol", monthCol);

        		this.dsList.setColumn(row, monthCol, "0.0");
        	}
        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	if(this.magamflag) {
        		this.gfnAlert("현장이 마감되었습니다. 삭제하시려면 현장마감 해제를 해주세요.");
        		return false;
        	}
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {
        	if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSave.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSave.addRow();

        				var rt_gs;
        				rt_gs = this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST01") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST02") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST03") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST04") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST05") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST06") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST07") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST08") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST09") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST10") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST11") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST12") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST13") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST14") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST15") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST16") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST17") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST18") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST19") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST20") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST21") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST22") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST23") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST24") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST25") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST26") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST27") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST28") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST29") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST30") ,"0")
        						+"|"+ this.gfnNvl(this.dsList.getColumn(i, "AM_SUBST31") ,"0") ;

        				this.dsSave.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSave.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        				this.dsSave.setColumn(nrow, "CD_SITE", this.ccfCD_SITE.form.CDTextBox.value);
        				this.dsSave.setColumn(nrow, "YM_WORK", this.ctclYM_WORK.form.TextBox.value.replace(/-/g, ""));
        				this.dsSave.setColumn(nrow, "NO_ID", this.fnReplace(this.dsList.getColumn(i, "NO_ID"), "-", ""));
        				this.dsSave.setColumn(nrow, "TY_CHAIYONG", this.dsList.getColumn(i, "TY_CHAIYONG"));
        				this.dsSave.setColumn(nrow, "TY_PAY", this.dsList.getColumn(i, "TY_PAY"));
        				//this.dsSave.setColumn(nrow, "SEQ", "0");
        				this.dsSave.setColumn(nrow, "RT_GS", rt_gs);
        				this.dsSave.setColumn(nrow, "TY_JIK", "J");
        				this.dsSave.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);
        				break;
        		}
        	}

        	if (this.dsSave.rowcount == 0) return;

        	//체크로직
        	var strSvcId    = "saveChk";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "saveChk=dsSave";
        	var outData     = "dsChk=saveChk0";
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

        //실질적 저장로직
        this.fnDailyFineSave = function(){
        	if (this.dsSave.rowcount == 0) return;

        	//체크로직
        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
        	var outData     = "";
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

        this.fnReplace = function(orgText, fromSplit, toSplit){
        	if(this.gfnIsNull(orgText)) return "";

        	var newSplit = "";
        	if(!this.gfnIsNull(toSplit)) newSplit = toSplit;

        	var arrResult = orgText.split(fromSplit);
        	var sResult = arrResult.join(newSplit);
        	return sResult;
        }


        /*
         *	DSBPR_DAILY_KOREANS_KUKMIN_SHEET 실행

        this.fnExecute = function() {
        	this.dsExecute.clearData();
        	this.dsExecute.addRow();

        	this.dsExecute.setColumn(0, "CD_SITE", this.ccfCD_SITE.form.CDTextBox.value);
        	this.dsExecute.setColumn(0, "DT_WORK", this.ctclYM_WORK.form.TextBox.value.replace(/-/g, ""));

        	if (this.dsExecute.rowcount == 0) return;

        	var strSvcId    = "execute";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "execute=dsExecute";
        	var outData     = "";
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
         */

        // 마감여부 조회
        this.fnSetMagamCheck = function () {
        	this.dsMagamcheck.clearData();
        	this.dsMagamcheck.addRow();

        	this.dsMagamcheck.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsMagamcheck.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsMagamcheck.setColumn(0, "TY_CHAIYONG", "");

        	var strSvcId    = "magamcheck";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "magamcheck=dsMagamcheck";
        	var outData     = "dsList3=magamcheck0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        };

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
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("소속법인을 입력 하세요.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.value)) {
        		this.gfnAlert("현장코드를 입력 하세요.");
        		this.ccfCD_SITE.form.CDTextBox.setFocus();
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclYM_WORK.form.TextBox.value)) {
        		this.gfnAlert("작업년월을 입력 하세요.");
        		this.ctclYM_WORK.form.TextBox.setFocus();
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
        		this.fnHolidaySelect();

        // 		if(this.magamflag){
        // 			this.fnSetExtendButtonEnable(true);
        // 		}else{
        // 			this.fnSetExtendButtonEnable(false);
        // 		}
        	}else if (svcID == "magamcheck") {
        		if (errorCode == 0) {
        			var YN_MAGAM = this.dsList3.getColumn(0, "YN_MAGAM");

        			if (YN_MAGAM == "Y") {
        				this.magamflag = true;
        			} else if (YN_MAGAM == "N") {
        				this.magamflag = false;
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "holydayselect") {
        		for (var i = 1; i <= 31; i++) {
        			var monthCol = "AM_SUBST";
        			var day = "";

        			day = (i < 10) ? "0".concat(i) : i;

        			monthCol = monthCol.concat(day);


        			var colNO_VIEW = this.dxGrid.getBindCellIndex("body", monthCol);

        			//trace(i+">>monthCol", monthCol, colNO_VIEW);

        			var hol_gbn = this.dsList2.getColumn(i - 1, "TY_HOLIDAY");

        			if (hol_gbn == 1) {
        				this.dxGrid.setCellProperty("body", colNO_VIEW, "background", "#CEEEFF"); //토요일 셋팅
        			} else if (hol_gbn == 2) {
        				this.dxGrid.setCellProperty("body", colNO_VIEW, "background", "#ff9999"); //일요일 셋팅
        			} else {
        				this.dxGrid.setCellProperty("body", colNO_VIEW, "background", "#ffffff"); // 평일 셋팅
        			}

        		}
        	} else if (svcID == "saveChk") {
        	trace(errorCode);
        		if (errorCode == 0) {
        			var ty_Check = this.dsChk.getColumn(0, "TY_CHECK");

        			switch(ty_Check){
        				case "Y":
        					var confirmMsg = "타 현장 동일일자로 등록된 항목이 있습니다.\r\n계속 저장 하시겠습니까?"
        					this.gfnConfirm(confirmMsg,	"fnSaveChkProc_callback");
        				break;
        				case "N":
        					this.fnDailyFineSave();
        				break;
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}else if (svcID == "save") {
        		if (errorCode == 0) {
        			this.fnSaveAfter = function() {
        				this.FormBtns.Select.click();
        			}
        			this.gfnAlert("저장되었습니다", "fnSaveAfter");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        this.fnSaveChkProc_callback = function(strId, val){
        	if(val == true){
        		this.fnDailyFineSave();
        	}
        }
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	//조회조건 코드파인드
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
        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if(id == "ccfCD_CORP") {
        		this.ccfCD_SITE.form.fnCodeFindClear();
        	}
        	/*this.fnSearchInit();*/
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         //그리드 코드 파인드
        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow){
        	switch(id) {
        		case "DSX_CFEMPLOYEE_01":
        			if (!this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.value)) {
        				dsUserParam.setColumn(nrow, "CD_SITE", this.ccfCD_SITE.form.CDTextBox.value);
        			} else {
        				dsUserParam.setColumn(nrow, "CD_SITE", "");
        			}
        			break;

        		default:
        	}
        	return true;
        };


        // this.fnGrid_EnterCell = function(obj:nexacro.Grid, row, cell)
        // {
        // 	if(this.magamflag) {
        // 		//마감이면 수정못함
        // 		return false;
        // 	}else{
        // 		var colnm = this.gfnGridGetBindColumnNameByIndex(obj, cell);
        // 		//trace(cell, colnm);
        // 		//마감안된상태이면 아래컬럼은 수정못함
        // 		var arr = new Array();
        // 		arr.push("NO_SABUN"); //노무번호
        // 		arr.push("NO_ID"); //주민번호
        // 		arr.push("NO_JUMIN"); //주민번호
        // 		arr.push("TY_CHAIYONG"); //채용구분
        // 		arr.push("TY_PAY"); //급여구분
        // 		arr.push("AM_WOLGUB"); //일당
        //
        // 		var vIndex = arr.indexOf(colnm);
        // 		//trace("vIndex", vIndex);
        // 		if(vIndex != -1){
        // 			return false;
        // 		}else{
        // 			return true;
        // 		}
        // 	}
        //
        // 	return true;
        // }
         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /*
         *	확장버튼 활성화 여부
         */
        // this.fnSetExtendButtonEnable = function(bEnable){
        // 	//this.btnFormButtonOc.set_enable(bEnable);
        // 	//this.btnFormButtonPh.set_enable(bEnable);
        // 	this.btnFormButtonCe.set_enable(bEnable);
        //
        // };


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

        this.dsSearch_onvaluechanged = function(obj,e)
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
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DSB_DAILY_FINE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
