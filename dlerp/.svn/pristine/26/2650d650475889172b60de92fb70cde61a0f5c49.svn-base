(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DSB_EMPLOYMENT_BONSA");
            this.set_titletext("[본사]특수형태 근로종사자");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CHAIYONG\" type=\"STRING\" size=\"256\"/><Column id=\"TY_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"AM_WOLGUB\" type=\"STRING\" size=\"256\"/><Column id=\"AM_SUBST01\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST02\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST03\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST04\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST05\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST06\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST07\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST08\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST09\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST10\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST11\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST12\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST13\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST14\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST15\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST16\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST17\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST18\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST19\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST20\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST21\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST22\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST23\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST24\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST25\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST26\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST27\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST28\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST29\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST30\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST31\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DSUM\" type=\"INT\" size=\"256\"/><Column id=\"AM_WONGA\" type=\"INT\" size=\"256\"/><Column id=\"AM_SODUK\" type=\"INT\" size=\"256\"/><Column id=\"AM_JUMIN\" type=\"INT\" size=\"256\"/><Column id=\"AM_GOYONG\" type=\"INT\" size=\"256\"/><Column id=\"AM_KUKMIN\" type=\"INT\" size=\"256\"/><Column id=\"AM_HEALTH\" type=\"INT\" size=\"256\"/><Column id=\"AM_GONGJE\" type=\"INT\" size=\"256\"/><Column id=\"AM_JIGUB\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListHolyday", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"TY_HOLIDAY\" type=\"STRING\" size=\"256\"/><Column id=\"YN_HOLIDAY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListMagam", this);
            obj._setContents("<ColumnInfo><Column id=\"YN_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"YN_SLIP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DSBPR_EMPLOYMENT_BONSA_SELECT</Col></Row><Row><Col id=\"TARGET\">selHolyday</Col><Col id=\"SP\">DSBPR_HOLIDAY_SELECT</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DSBPR_EMPLOYMENT_SAVE</Col></Row><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DSBPR_EMPLOYMENT_CREATE</Col></Row><Row><Col id=\"TARGET\">selMagam</Col><Col id=\"SP\">DSBPR_MAGAMCHECK_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SITE\" type=\"STRING\" size=\"256\"/><Column id=\"YM_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MAGAM\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"CD_SITE\"/><Col id=\"YM_WORK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_MAGAM", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">%</Col><Col id=\"DS_CODE\">전체</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">마감</Col></Row><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">마감전</Col></Row></Rows>");
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
            obj.set_cssclass("sta_WF_SchLabel");
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

            obj = new Static("staYN_MAGAM","ctclYM_WORK:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("마감여부");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYN_MAGAM","staYN_MAGAM:0.0","10.0","104","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsYN_MAGAM");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
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

            obj = new BindItem("item3","divSearch.form.cboYN_MAGAM","value","dsSearch","YN_MAGAM");
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
        this.registerScript("DSB_EMPLOYMENT_BONSA.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.fv_bMagam = false;

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

        	//작업년월
        	//디폴트값 >> 전월
        	var today = this.gfnGetDate();
        	this.ctclYM_WORK.form.TextBox.set_value(this.gfnAddMonth(today, -1).substring(0,6));

        	//법인 셋팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

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

        	// GR_SEARCH가 2보다 크면.. 법인코드 disable
        	if( this.FormInfo.GR_SEARCH  >= "2"){
        		this.divSearch.form.ccfCD_CORP.set_enable(false);
        	}

        	//현장 코드
        	//>> GR_SEARCH 가 2보다 크면 DISABLE
        	//디폴트값 >> GR_SEARCH 가 2보다 작으면 빈값 그외는 로그인 부서
        	if(this.FormInfo.GR_SEARCH >= "2"){
        		this.ccfCD_SITE.form.CDTextBox.set_value(this.AuthClient.CD_SITE);
        		this.ccfCD_SITE.form.DSTextBox.set_value(this.AuthClient.DS_SITE);
        		this.divSearch.form.ccfCD_SITE.set_enable(false);

        		this.FormBtns.Select.click();
        	} else {

        	}

        	this.divSearch.form.cboYN_MAGAM.set_index(0);

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
        	this.btnMagam = this.gfnFormButtonAdd("Magam", "fnMagam"); //본사마감
        	this.btnCancel = this.gfnFormButtonAdd("Cancel", "fnCancel"); //마감해지
        };



        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;
        	this.ccfCD_SITE = this.divSearch.form.ccfCD_SITE;
        	this.ctclYM_WORK = this.divSearch.form.ctclYM_WORK;

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

        	this.gfnGridInit(this.dxGrid, this.dsList, "DS", "DSB_EMPLOYMENT_BONSA");
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");
        	this.dsSelect.addColumn("CD_SITE", "string");
        	this.dsSelect.addColumn("YM_WORK", "string");
        	this.dsSelect.addColumn("YN_MAGAM", "string");
        	this.dsSelect.addColumn("GR_SEARCH", "string");
        	this.dsSelect.addColumn("TY_AUTH", "string");
        	this.dsSelect.addColumn("GR_DEPT", "string");
        	this.dsSelect.addColumn("ID_USER", "string");

        	// 마감확인
        	this.dsSelMagam = new Dataset();
        	this.dsSelMagam.addColumn("CD_SITE", "string");
        	this.dsSelMagam.addColumn("YM_WORK", "string");
        	this.dsSelMagam.addColumn("TY_CHAIYONG", "string");

        	// 휴일체크
        	this.dsSelHolyday = new Dataset();
        	this.dsSelHolyday.addColumn("YM_WORK", "string");


        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	if (!this.fnSelectValid()) return false;


        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelect.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelect.setColumn(0, "YN_MAGAM", this.dsSearch.getColumn(0, "YN_MAGAM"));
        	this.dsSelect.setColumn(0, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	this.dsSelect.setColumn(0, "TY_AUTH", this.FormInfo.TY_AUTH);
        	this.dsSelect.setColumn(0, "GR_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

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
        this.fnSelHoliday = function() {
        	this.dsSelHolyday.clearData();
        	this.dsSelHolyday.addRow();

        	this.dsSelHolyday.setColumn(0, "YM_WORK", this.ctclYM_WORK.form.TextBox.value);

        	var strSvcId    = "holyday";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selHolyday=dsSelHolyday";
        	var outData     = "dsListHolyday=selHolyday0";
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
        	if(this.fv_bMagam) {
        		this.gfnAlert("현장이 마감되었습니다. 입력하시려면 현장마감 해제를 해주세요.");
        		return false;
        	}

        	if(!this.fnSelectValid()) return;

        	var row = this.gfnGridAdd(this.dxGrid);
        	this.dsList.setColumn(row, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsList.setColumn(row, "DS_CORP", this.ccfCD_CORP.form.DSTextBox.value);
        	this.dsList.setColumn(row, "CD_SITE", this.ccfCD_SITE.form.CDTextBox.value);
        	this.dsList.setColumn(row, "DS_SITECHA", this.ccfCD_SITE.form.DSTextBox.value);
        	this.dsList.setColumn(row, "YM_WORK", this.ctclYM_WORK.form.TextBox.value);

        }

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	if(this.fv_bMagam) {
        		this.gfnAlert("현장이 마감되었습니다. 삭제하시려면 현장마감 해제를 해주세요.");
        		return false;
        	}
        	this.gfnGridDel(this.dxGrid);
        }

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        }

        // 마감여부 조회
        this.fnSelectMagam = function () {
        	this.dsSelMagam.clearData();
        	this.dsSelMagam.addRow();

        	this.dsSelMagam.setColumn(0, "CD_SITE", this.dsSearch.getColumn(0, "CD_SITE"));
        	this.dsSelMagam.setColumn(0, "YM_WORK", this.dsSearch.getColumn(0, "YM_WORK"));
        	this.dsSelMagam.setColumn(0, "TY_CHAIYONG", "");

        	var strSvcId    = "magam";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "selMagam=dsSelMagam";
        	var outData     = "dsListMagam=selMagam0";
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
        this.fnSelectValid = function() {
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.fnValidCallback = function(){
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("소속법인을 입력 하세요.", "fnValidCallback");
        		return false;
        	}

        // 	if (this.gfnIsNull(this.ccfCD_SITE.form.CDTextBox.value)) {
        // 		this.fnValidCallback = function(){
        // 			this.ccfCD_SITE.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("현장코드를 입력 하세요.", "fnValidCallback");
        // 		return false;
        // 	}

        	if (this.gfnIsNull(this.ctclYM_WORK.form.TextBox.value)) {
        		this.fnValidCallback = function(){
        			this.ctclYM_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("작업년월을 입력 하세요.", "fnValidCallback");
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
        this.fnCallback = function(svcID, errorCode, errorMsg){

        	if (svcID == "select") {
        		this.gfnGridAfterSelect(this.dxGrid);

        		this.fnSelectMagam();//마감여부조회
        		this.fnSelHoliday(); //휴일조회
        	}
        	else if (svcID == "magam") {
        		if (errorCode == 0) {
        			var YN_MAGAM = this.dsListMagam.getColumn(0, "YN_MAGAM");

        // 			if (YN_MAGAM == "Y") {
        // 				this.fv_bMagam = true;
        // 			} else if (YN_MAGAM == "N") {
        // 				this.fv_bMagam = false;
        // 			}
        			this.fv_bMagam = false;
        		} else {
        			this.gfnAlert(errorMsg);
        		}

        	}
        	else if (svcID == "holyday") {
        		for (var i = 1; i <= 31; i++) {
        			var col = "CT_WORK"+ this.fnLpad(i, 2, "0");
        			var nCellIdx = this.dxGrid.getBindCellIndex("body", col);
        			var sTY_HOLIDAY = this.dsListHolyday.getColumn(i - 1, "TY_HOLIDAY");
        			if (sTY_HOLIDAY == 1) {
        				this.dxGrid.setCellProperty("body", nCellIdx, "background", "#CEEEFF"); //토요일 셋팅
        			} else if (sTY_HOLIDAY == 2) {
        				this.dxGrid.setCellProperty("body", nCellIdx, "background", "#ff9999"); //일요일 셋팅
        			} else {
        				this.dxGrid.setCellProperty("body", nCellIdx, "background", "#ffffff"); // 평일 셋팅
        			}

        		}
        	}
        }
        this.fnLpad = function(str, padLen, padStr) {
            if (padStr.length > padLen) {
                console.log("오류 : 채우고자 하는 문자열이 요청 길이보다 큽니다");
                return str;
            }
            str += ""; // 문자로
            padStr += ""; // 문자로
            while (str.length < padLen)
                str = padStr + str;
            str = str.length >= padLen ? str.substring(0, padLen) : str;
            return str;
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
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);	// 법인코드
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
        }

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/


         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        this.fnMagam = function(obj,e) {
        	this.fnProcPopup("Y", "fnMagamCallback");
        }

        this.fnMagamCallback = function(id, val){
        	if(val == true){
        		this.FormBtns.Select.click();
        	}
        }

        this.fnCancel = function(obj,e) {
        	this.fnProcPopup("N", "fnCancelCallback");
        }
        this.fnCancelCallback = function(id, val){
        	if(val == true){
        		this.FormBtns.Select.click();
        	}
        }

        this.fnProcPopup = function(sYN_MAGAM, sCallBack){
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.fnValidCallback = function(){
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("소속법인을 입력 하세요.", "fnValidCallback");
        		return false;
        	}
        	if (this.gfnIsNull(this.ctclYM_WORK.form.TextBox.value)) {
        		this.fnValidCallback = function(){
        			this.ctclYM_WORK.form.TextBox.setFocus();
        		}
        		this.gfnAlert("작업년월을 입력 하세요.", "fnValidCallback");
        		return false;
        	}


        	var param = {};
        	param.CD_CORP = this.ccfCD_CORP.form.CDTextBox.value;
        	param.DS_CORP = this.ccfCD_CORP.form.DSTextBox.value;
        	param.CD_SITE = this.ccfCD_SITE.form.CDTextBox.value;
        	param.DS_SITE = this.ccfCD_SITE.form.DSTextBox.value;
        	param.YM_WORK = this.ctclYM_WORK.form.TextBox.value;
        	param.YN_MAGAM = sYN_MAGAM;

        	// 화면 오픈.
        	// CD_MODULE은 보통 같은 모듈에서 호출하는 경우가 많으니 this.FormInfo.CD_MODULE 사용
        	// 타 모듈 화면 호출시 지정할것.
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DSB_EMPLOYMENT_BONSA_DLG", sCallBack, param);
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        this.dsSearch_onvaluechanged = function(obj,e){
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
        this.loadIncludeScript("DSB_EMPLOYMENT_BONSA.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
