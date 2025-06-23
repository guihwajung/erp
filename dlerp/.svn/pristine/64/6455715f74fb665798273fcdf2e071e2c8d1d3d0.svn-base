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
            this.set_titletext("현장공사진행관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHBPR_ACNTUNIT_INFO_SELECT</Col></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\">DHBPR_ACNTUNIT_INFO_INSERT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DHBPR_ACNTUNIT_INFO_UPDATE</Col></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\">DHBPR_ACNTUNIT_INFO_DELETE</Col></Row><Row><Col id=\"TARGET\">comboA13</Col><Col id=\"SP\">DHZPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">comboA14</Col><Col id=\"SP\">DHZPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">comboA12</Col><Col id=\"SP\">DHZPR_COMBO_SELECT</Col></Row><Row><Col id=\"TARGET\">copy</Col><Col id=\"SP\">DHBPR_ACNTUNIT_INFO_COPY</Col></Row></Rows>");
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
            
            // UI Components Initialize
            obj = new Div("divSearch","0.0","10.0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","sta01:0.0","10.0","219","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","ccfCD_CORP:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("귀속부서코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","sta00:0.0","10.0","269","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staYM_WORK","ccfCD_DEPT_ACNT:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("기준월");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ctclYM_BASE","staYM_WORK:0.0","10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboTY_GUBUN","0.0","sta01:10.0","142","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsA14");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta04","ccboTY_GUBUN:0.0","sta01:10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("진행상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_STATUS","sta04:0.0","sta01:10.0","80","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
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
            obj.set_taborder("10");
            obj.set_text("사업구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("ccboCD_SAUP","sta02:0.0","sta01:10.0","93","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsA13");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REQ00","0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_REQ00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","ctclDT_TO:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_VENDOR","ctclDT_FROM:0.0","10.0","118.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("원가마감일");
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
        this.registerScript("DHB_ACNTUNIT_INFO.xfdl", function() {
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

        	if (!this.gfnIsNull(this.getOwnerFrame().CD_CORP)) {
        		//법인코드 셋팅
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);
        		//귀속부서
        		this.ccfCD_DEPT_ACNT.form.CDTextBox.set_value(this.getOwnerFrame().CD_DEPT);
        		this.ccfCD_DEPT_ACNT.form.DSTextBox.set_value(this.getOwnerFrame().DS_DEPT);

        		this.FormBtns.Select.click();
        	}else{

        		//법인코드 세션에 코드로 셋팅
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	}

        	this.ccfCD_CORP.form.CDTextBox.setFocus();

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
        	this.btnMaxMonthCopy = this.gfnFormButtonAdd("MaxMonthCopy", "fnMaxMonthCopy"); 	//최근월 데이터 복사 버튼
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
        	this.gfnGridInit(this.dxGrid, this.dsList, "DH", "DHB_ACNTUNIT_INFO");
        	//this.dxGrid.set_selecttype("cell");

        	// 그리드 코드파인드 설정
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforeUserDataSetParam";

        	this.dsList.addEventHandler("cancolumnchange", this.fnDs_CanColumnChange, this);
        	this.dsList.addEventHandler("oncolumnchanged", this.fnDs_ColumnChanged, this);

        	//검색조건 변경 이벤트
        	this.dsSearch.addEventHandler("onvaluechanged", this.dsSearch_Valuechanged, this);
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

        	this.dsInsert = new Dataset();
        	this.dsInsert.addColumn("CD_CORP", "string");				//법인코드
        	this.dsInsert.addColumn("CD_DEPT_ACNT", "string");			//귀속부서
        	this.dsInsert.addColumn("YM_BASE", "string");				//기준년월
        	this.dsInsert.addColumn("CD_SAUP", "string");				//사업구분
        	this.dsInsert.addColumn("TY_GUBUN", "string");				//구분
        	this.dsInsert.addColumn("DT_START", "string");				//착공일
        	this.dsInsert.addColumn("DT_FINISH", "string");				//준공일
        	this.dsInsert.addColumn("DT_COST", "string");				//원가마감일
        	this.dsInsert.addColumn("CD_STATUS", "string");				//상태
        	this.dsInsert.addColumn("AM_COST", "BIGDECIMAL");			//총공사예정원가
        	this.dsInsert.addColumn("SZ_APART", "BIGDECIMAL");			//건물(아파트)-면적
        	this.dsInsert.addColumn("SZ_STORE", "BIGDECIMAL");			//건물(상가)-면적
        	this.dsInsert.addColumn("SZ_SUM", "BIGDECIMAL");			//건물소계
        	this.dsInsert.addColumn("SZ_APART_LAND", "BIGDECIMAL");		//토지(아파트)-면적
        	this.dsInsert.addColumn("SZ_STORE_LAND", "BIGDECIMAL");		//토지(상가)-면적
        	this.dsInsert.addColumn("SZ_SUM_LAND", "BIGDECIMAL");		//토지소계-면적
        	this.dsInsert.addColumn("BEF_CD_ACCOUNT", "string");		//착공전 계정
        	this.dsInsert.addColumn("PRO_CD_ACCOUNT1", "string");		//진행중 계정 1
        	this.dsInsert.addColumn("PRO_CD_ACCOUNT2", "string");		//진행중 계정 2
        	this.dsInsert.addColumn("PRO_CD_ACCOUNT3", "string");		//진행중 계정 3
        	this.dsInsert.addColumn("PRO_CD_ACCOUNT4", "string");		//진행중 계정 4
        	this.dsInsert.addColumn("END_CD_ACCOUNT1", "string");		//준공 계정 1
        	this.dsInsert.addColumn("END_CD_ACCOUNT2", "string");		//준공 계정 2
        	this.dsInsert.addColumn("END_CD_ACCOUNT3", "string");		//준공 계정 3
        	this.dsInsert.addColumn("END_CD_ACCOUNT4", "string");		//준공 계정 4
        	this.dsInsert.addColumn("YN_REVER", "string");				//익년초역분개여부
        	this.dsInsert.addColumn("ID_USER", "string");				//등록자
        	this.dsInsert.addColumn("SZ_APART_NOTAX", "BIGDECIMAL");
        	this.dsInsert.addColumn("SZ_APART_LAND_NOTAX", "BIGDECIMAL");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");				//법인코드
        	this.dsUpdate.addColumn("CD_DEPT_ACNT", "string");			//귀속부서
        	this.dsUpdate.addColumn("YM_BASE", "string");				//기준년월
        	this.dsUpdate.addColumn("CD_SAUP", "string");				//사업구분
        	this.dsUpdate.addColumn("TY_GUBUN", "string");				//구분
        	this.dsUpdate.addColumn("DT_START", "string");				//착공일
        	this.dsUpdate.addColumn("DT_FINISH", "string");				//준공일
        	this.dsUpdate.addColumn("DT_COST", "string");				//원가마감일
        	this.dsUpdate.addColumn("CD_STATUS", "string");				//상태
        	this.dsUpdate.addColumn("AM_COST", "BIGDECIMAL");			//총공사예정원가
        	this.dsUpdate.addColumn("SZ_APART", "BIGDECIMAL");			//건물(아파트)-면적
        	this.dsUpdate.addColumn("SZ_STORE", "BIGDECIMAL");			//건물(상가)-면적
        	this.dsUpdate.addColumn("SZ_SUM", "BIGDECIMAL");			//건물소계
        	this.dsUpdate.addColumn("SZ_APART_LAND", "BIGDECIMAL");		//토지(아파트)-면적
        	this.dsUpdate.addColumn("SZ_STORE_LAND", "BIGDECIMAL");		//토지(상가)-면적
        	this.dsUpdate.addColumn("SZ_SUM_LAND", "BIGDECIMAL");		//토지소계-면적
        	this.dsUpdate.addColumn("BEF_CD_ACCOUNT", "string");		//착공전 계정
        	this.dsUpdate.addColumn("PRO_CD_ACCOUNT1", "string");		//진행중 계정 1
        	this.dsUpdate.addColumn("PRO_CD_ACCOUNT2", "string");		//진행중 계정 2
        	this.dsUpdate.addColumn("PRO_CD_ACCOUNT3", "string");		//진행중 계정 3
        	this.dsUpdate.addColumn("PRO_CD_ACCOUNT4", "string");		//진행중 계정 4
        	this.dsUpdate.addColumn("END_CD_ACCOUNT1", "string");		//준공 계정 1
        	this.dsUpdate.addColumn("END_CD_ACCOUNT2", "string");		//준공 계정 2
        	this.dsUpdate.addColumn("END_CD_ACCOUNT3", "string");		//준공 계정 3
        	this.dsUpdate.addColumn("END_CD_ACCOUNT4", "string");		//준공 계정 4
        	this.dsUpdate.addColumn("YN_REVER", "string");				//익년초역분개여부
        	this.dsUpdate.addColumn("ID_USER", "string");				//등록자
        	this.dsUpdate.addColumn("SZ_APART_NOTAX", "BIGDECIMAL");
        	this.dsUpdate.addColumn("SZ_APART_LAND_NOTAX", "BIGDECIMAL");

        	this.dsDelete = new Dataset();
        	this.dsDelete.addColumn("CD_CORP", "string");
        	this.dsDelete.addColumn("CD_DEPT_ACNT", "string");
        	this.dsDelete.addColumn("YM_BASE", "string");

        	this.dsCopy = new Dataset();
        	this.dsCopy.addColumn("CD_CORP", "string");
        	this.dsCopy.addColumn("YM_BASE", "string");
        	this.dsCopy.addColumn("ID_USER", "string");

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

        	var nRow = this.gfnGridAdd(this.dxGrid);

        	this.dsList.setColumn(nRow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsList.setColumn(nRow, "DS_CORP", this.ccfCD_CORP.form.DSTextBox.value);
        	this.dsList.setColumn(nRow, "YM_BASE", this.ctclYM_BASE.form.TextBox.value);

        	this.dsList.set_rowposition(nRow);
        	this.dxGrid.setCellPos(this.dxGrid.getBindCellIndex("body", "CD_DEPT_ACNT"));

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
        	// 그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);
        		switch(flag) {
        			case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_CORP"  			, this.dsList.getColumn(i, "CD_CORP"));				//법인코드
        				this.dsInsert.setColumn(nrow, "CD_DEPT_ACNT"  		, this.dsList.getColumn(i, "CD_DEPT_ACNT"));		//귀속부서
        				this.dsInsert.setColumn(nrow, "YM_BASE"  			, this.dsList.getColumn(i, "YM_BASE"));				//기준년월
        				this.dsInsert.setColumn(nrow, "CD_SAUP"   			, this.dsList.getColumn(i, "CD_SAUP"));				//사업구분
        				this.dsInsert.setColumn(nrow, "TY_GUBUN"  			, this.dsList.getColumn(i, "TY_GUBUN"));			//구분
        				this.dsInsert.setColumn(nrow, "DT_START"   			, this.dsList.getColumn(i, "DT_START"));			//착공일
        				this.dsInsert.setColumn(nrow, "DT_FINISH"   		, this.dsList.getColumn(i, "DT_FINISH"));			//준공일
        				this.dsInsert.setColumn(nrow, "DT_COST"   			, this.dsList.getColumn(i, "DT_COST"));				//원가마감일
        				this.dsInsert.setColumn(nrow, "CD_STATUS"      		, this.dsList.getColumn(i, "CD_STATUS"));			//상태
        				this.dsInsert.setColumn(nrow, "AM_COST"   			, this.dsList.getColumn(i, "AM_COST"));				//총공사예정원가
        				this.dsInsert.setColumn(nrow, "SZ_APART"   			, this.dsList.getColumn(i, "SZ_APART"));			//물(아파트)-면적
        				this.dsInsert.setColumn(nrow, "SZ_STORE"			, this.dsList.getColumn(i, "SZ_STORE"));			//건물(상가)-면적
        				this.dsInsert.setColumn(nrow, "SZ_SUM"     			, this.dsList.getColumn(i, "SZ_SUM"));				//건물소계
        				this.dsInsert.setColumn(nrow, "SZ_APART_LAND"      	, this.dsList.getColumn(i, "SZ_APART_LAND"));		//토지(아파트)-면적
        				this.dsInsert.setColumn(nrow, "SZ_STORE_LAND"     	, this.dsList.getColumn(i, "SZ_STORE_LAND"));		//토지(상가)-면적
        				this.dsInsert.setColumn(nrow, "SZ_SUM_LAND"      	, this.dsList.getColumn(i, "SZ_SUM_LAND"));			//토지소계-면적
        				this.dsInsert.setColumn(nrow, "BEF_CD_ACCOUNT"      , this.dsList.getColumn(i, "BEF_CD_ACCOUNT"));		//착공전 계정
        				this.dsInsert.setColumn(nrow, "PRO_CD_ACCOUNT1"     , this.dsList.getColumn(i, "PRO_CD_ACCOUNT1"));		//진행중 계정 1
        				this.dsInsert.setColumn(nrow, "PRO_CD_ACCOUNT2"     , this.dsList.getColumn(i, "PRO_CD_ACCOUNT2"));		//진행중 계정 2
        				this.dsInsert.setColumn(nrow, "PRO_CD_ACCOUNT3"     , this.dsList.getColumn(i, "PRO_CD_ACCOUNT3"));		//진행중 계정 3
        				this.dsInsert.setColumn(nrow, "PRO_CD_ACCOUNT4"     , this.dsList.getColumn(i, "PRO_CD_ACCOUNT4"));		//진행중 계정 4
        				this.dsInsert.setColumn(nrow, "END_CD_ACCOUNT1"     , this.dsList.getColumn(i, "END_CD_ACCOUNT1"));		//준공 계정 1
        				this.dsInsert.setColumn(nrow, "END_CD_ACCOUNT2"     , this.dsList.getColumn(i, "END_CD_ACCOUNT2"));		//준공 계정 2
        				this.dsInsert.setColumn(nrow, "END_CD_ACCOUNT3"     , this.dsList.getColumn(i, "END_CD_ACCOUNT3"));		//준공 계정 3
        				this.dsInsert.setColumn(nrow, "END_CD_ACCOUNT4"     , this.dsList.getColumn(i, "END_CD_ACCOUNT4"));		//준공 계정 4
        				this.dsInsert.setColumn(nrow, "YN_REVER"     		, this.dsList.getColumn(i, "YN_REVER"));			//익년초역분개여부
        				this.dsInsert.setColumn(nrow, "SZ_APART_NOTAX"      , this.dsList.getColumn(i, "SZ_APART_NOTAX"));
        				this.dsInsert.setColumn(nrow, "SZ_APART_LAND_NOTAX" , this.dsList.getColumn(i, "SZ_APART_LAND_NOTAX"));
        				this.dsInsert.setColumn(nrow, "ID_USER"   			, this.AuthClient.ID_USER);
        				break;
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP"  			, this.dsList.getColumn(i, "CD_CORP"));				//법인코드
        				this.dsUpdate.setColumn(nrow, "CD_DEPT_ACNT"  		, this.dsList.getColumn(i, "CD_DEPT_ACNT"));		//귀속부서
        				this.dsUpdate.setColumn(nrow, "YM_BASE"  			, this.dsList.getColumn(i, "YM_BASE"));				//기준년월
        				this.dsUpdate.setColumn(nrow, "CD_SAUP"   			, this.dsList.getColumn(i, "CD_SAUP"));				//사업구분
        				this.dsUpdate.setColumn(nrow, "TY_GUBUN"  			, this.dsList.getColumn(i, "TY_GUBUN"));			//구분
        				this.dsUpdate.setColumn(nrow, "DT_START"   			, this.dsList.getColumn(i, "DT_START"));			//착공일
        				this.dsUpdate.setColumn(nrow, "DT_FINISH"   		, this.dsList.getColumn(i, "DT_FINISH"));			//준공일
        				this.dsUpdate.setColumn(nrow, "DT_COST"   			, this.dsList.getColumn(i, "DT_COST"));				//원가마감일
        				this.dsUpdate.setColumn(nrow, "CD_STATUS"      		, this.dsList.getColumn(i, "CD_STATUS"));			//상태
        				this.dsUpdate.setColumn(nrow, "AM_COST"   			, this.dsList.getColumn(i, "AM_COST"));				//총공사예정원가
        				this.dsUpdate.setColumn(nrow, "SZ_APART"   			, this.dsList.getColumn(i, "SZ_APART"));			//물(아파트)-면적
        				this.dsUpdate.setColumn(nrow, "SZ_STORE"			, this.dsList.getColumn(i, "SZ_STORE"));			//건물(상가)-면적
        				this.dsUpdate.setColumn(nrow, "SZ_SUM"     			, this.dsList.getColumn(i, "SZ_SUM"));				//건물소계
        				this.dsUpdate.setColumn(nrow, "SZ_APART_LAND"      	, this.dsList.getColumn(i, "SZ_APART_LAND"));		//토지(아파트)-면적
        				this.dsUpdate.setColumn(nrow, "SZ_STORE_LAND"     	, this.dsList.getColumn(i, "SZ_STORE_LAND"));		//토지(상가)-면적
        				this.dsUpdate.setColumn(nrow, "SZ_SUM_LAND"      	, this.dsList.getColumn(i, "SZ_SUM_LAND"));			//토지소계-면적
        				this.dsUpdate.setColumn(nrow, "BEF_CD_ACCOUNT"      , this.dsList.getColumn(i, "BEF_CD_ACCOUNT"));		//착공전 계정
        				this.dsUpdate.setColumn(nrow, "PRO_CD_ACCOUNT1"     , this.dsList.getColumn(i, "PRO_CD_ACCOUNT1"));		//진행중 계정 1
        				this.dsUpdate.setColumn(nrow, "PRO_CD_ACCOUNT2"     , this.dsList.getColumn(i, "PRO_CD_ACCOUNT2"));		//진행중 계정 2
        				this.dsUpdate.setColumn(nrow, "PRO_CD_ACCOUNT3"     , this.dsList.getColumn(i, "PRO_CD_ACCOUNT3"));		//진행중 계정 3
        				this.dsUpdate.setColumn(nrow, "PRO_CD_ACCOUNT4"     , this.dsList.getColumn(i, "PRO_CD_ACCOUNT4"));		//진행중 계정 4
        				this.dsUpdate.setColumn(nrow, "END_CD_ACCOUNT1"     , this.dsList.getColumn(i, "END_CD_ACCOUNT1"));		//준공 계정 1
        				this.dsUpdate.setColumn(nrow, "END_CD_ACCOUNT2"     , this.dsList.getColumn(i, "END_CD_ACCOUNT2"));		//준공 계정 2
        				this.dsUpdate.setColumn(nrow, "END_CD_ACCOUNT3"     , this.dsList.getColumn(i, "END_CD_ACCOUNT3"));		//준공 계정 3
        				this.dsUpdate.setColumn(nrow, "END_CD_ACCOUNT4"     , this.dsList.getColumn(i, "END_CD_ACCOUNT4"));		//준공 계정 4
        				this.dsUpdate.setColumn(nrow, "YN_REVER"     		, this.dsList.getColumn(i, "YN_REVER"));			//익년초역분개여부
        				this.dsUpdate.setColumn(nrow, "SZ_APART_NOTAX"      , this.dsList.getColumn(i, "SZ_APART_NOTAX"));
        				this.dsUpdate.setColumn(nrow, "SZ_APART_LAND_NOTAX" , this.dsList.getColumn(i, "SZ_APART_LAND_NOTAX"));
        				this.dsUpdate.setColumn(nrow, "ID_USER"   			, this.AuthClient.ID_USER);
        				break;
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_CORP"  	  , this.dsList.getColumn(i, "CD_CORP"));		//법인코드
        				this.dsDelete.setColumn(nrow, "CD_DEPT_ACNT"  , this.dsList.getColumn(i, "CD_DEPT_ACNT"));	//귀속부서
        				this.dsDelete.setColumn(nrow, "YM_BASE"  	  , this.dsList.getColumn(i, "YM_BASE"));		//기준년월
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
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
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
        	case "save" :
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
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
        	case "copy":
        			if (errorCode == 0) {
        				this.gfnAlert("생성되었습니다.");
        				this.FormBtns.Select.click();
        			} else {
        				this.gfnAlert(errorMsg);
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

        this.fnGrid_BeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	// 그리드에서 코드파인드 id는 그리드셋팅의 코드파인드 식별ID

        	switch(id) {
        		case "DHX_CFACNTUNIT":	//귀속부서
        			var cdCorp = this.gfnNvl(this.ccfCD_CORP.form.CDTextBox.value,"");
        			dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");				//상위부서
        			dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");				//전표발행여부
        			dsUserParam.setColumn(nrow, "CD_CORP"		, cdCorp);			//법인코드
        			dsUserParam.setColumn(nrow, "YN_USE"		, "Y");				//사용여부
        			dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");				//현장/본사여부
        		break;
        		case "DHX_CFACCOUNT_BEF":	//작공전계정
        		case "DHX_CFACCOUNT_PRO1":	//진행중계정1
        		case "DHX_CFACCOUNT_PRO2":	//진행중계정2
        		case "DHX_CFACCOUNT_PRO3":	//진행중계정3
        		case "DHX_CFACCOUNT_PRO4":	//진행중계정4
        		case "DHX_CFACCOUNT_END1":	//준공계정1
        		case "DHX_CFACCOUNT_END2":	//준공계정2
        		case "DHX_CFACCOUNT_END3":	//준공계정3
        		case "DHX_CFACCOUNT_END4":	//준공계정4
        			dsUserParam.setColumn(nrow, "YN_SLIP", "Y");
        		break;
        	}

        	return true;
        }

        //그리드 값변경 이벤트
        this.fnDs_ColumnChanged = function(obj,e)
        {
        	if(obj.getColumn(e.row, "nx_flag") != "#"){	//필터로우는 계산 제외 처리
        		if(e.columnid == "SZ_APART" || e.columnid == "SZ_APART_NOTAX" || e.columnid == "SZ_STORE"){	//건물면적
        			var szApart = nexacro.toNumber((e.columnid == "SZ_APART"  ? e.newvalue : obj.getColumn(e.row, "SZ_APART")),0);	//아파트
        			var szApartNotax = nexacro.toNumber((e.columnid == "SZ_APART_NOTAX"  ? e.newvalue : obj.getColumn(e.row, "SZ_APART_NOTAX")),0);	//아파트(면세)
        			var szStore = nexacro.toNumber((e.columnid == "SZ_STORE"  ? e.newvalue : obj.getColumn(e.row, "SZ_STORE")),0);	//상가

        			obj.setColumn(e.row, "SZ_SUM", (szApart+szApartNotax+szStore).toFixed(4));	//건물소계
        		}

        		if(e.columnid == "SZ_APART_LAND" || e.columnid == "SZ_APART_LAND_NOTAX" || e.columnid == "SZ_STORE_LAND"){	//토지면적
        			var szApartLand = nexacro.toNumber((e.columnid == "SZ_APART_LAND"  ? e.newvalue : obj.getColumn(e.row, "SZ_APART_LAND")),0);	//아파트
        			var szApartLandNotax = nexacro.toNumber((e.columnid == "SZ_APART_LAND_NOTAX"  ? e.newvalue : obj.getColumn(e.row, "SZ_APART_LAND_NOTAX")),0);	//아파트(면세)
        			var szStoreLand = nexacro.toNumber((e.columnid == "SZ_STORE_LAND"  ? e.newvalue : obj.getColumn(e.row, "SZ_STORE_LAND")),0);	//상가

        			obj.setColumn(e.row, "SZ_SUM_LAND", (szApartLand+szApartLandNotax+szStoreLand).toFixed(4));	//토지소계
        		}
        	}
        };

        this.fnDs_CanColumnChange = function(obj,e)
        {
        	if(e.columnid == "DT_START" || e.columnid == "DT_FINISH"){	//착공일/준공일
        		var dtStart  = (e.columnid == "DT_START"  ? e.newvalue : obj.getColumn(e.row, "DT_START"));
        		var dtFinish = (e.columnid == "DT_FINISH" ? e.newvalue : obj.getColumn(e.row, "DT_FINISH"));

        		if(!this.gfnIsNull(dtStart) && !this.gfnIsNull(dtFinish)){
        			if(this.gfnGetDiffDate(dtStart, dtFinish) <= -1){
        				this.gfnAlert("착공일은 준공일보다 작아야 합니다.");
        				return false;
        			}
        		}
        	}
        };

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

        //최근월 데이터 복사 처리
        this.fnMaxMonthCopy = function (obj,e)
        {
        	if (this.gfnIsNull(this.gfnTrim(this.ccfCD_CORP.form.CDTextBox.value))) {
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return;
        	}

        	if(this.gfnIsNull(this.ctclYM_BASE.form.TextBox.value)){
        		this.gfnAlert("기준월은 필수입니다.");
        		this.ctclYM_BASE.form.TextBox.setFocus();
        		return;
        	}

        	this.gfnConfirm("기존데이터는 삭제됩니다.복사하시겠습니까?", "fnMaxMonthCopy_callback");

        };

        //최근월 데이터 복사 Confirm 콜백
        this.fnMaxMonthCopy_callback = function(strId, val)
        {
        	if(val == true) {
        		this.dsCopy.clearData();
        		var nRow = this.dsCopy.addRow();

        		//처리할 데이터 담기
        		this.dsCopy.setColumn(nRow, "CD_CORP" 	, this.ccfCD_CORP.form.CDTextBox.value);	//법인코드
        		this.dsCopy.setColumn(nRow, "YM_BASE" 	, this.ctclYM_BASE.form.TextBox.value);		//기준년월
        		this.dsCopy.setColumn(nRow, "ID_USER"   , this.AuthClient.ID_USER);					//작업자 아이디

        		var strSvcId    = "copy";
        		var strSvcType  = "save";
        		var inProc		= "_dsProc";
        		var inData      = "copy=dsCopy";
        		var outData     = "";
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
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ccboCD_SAUP.addEventHandler("onitemchanged",this.divSearch_ccboMAGAM_GUBUN_onitemchanged,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("DHB_ACNTUNIT_INFO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
