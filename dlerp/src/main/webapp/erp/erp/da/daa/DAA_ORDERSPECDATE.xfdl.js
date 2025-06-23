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
            this.set_titletext("일자별 발령조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAAPR_ORDERSPECDATE_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DAAPR_ORDERSPECDATE_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_STATUS", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\"/><Col id=\"VALUE\">전체</Col></Row><Row><Col id=\"CODE\">신규</Col><Col id=\"VALUE\">신규</Col></Row><Row><Col id=\"CODE\">폐기</Col><Col id=\"VALUE\">폐기</Col></Row><Row><Col id=\"VALUE\">분실</Col><Col id=\"CODE\">분실</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ORDER_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ORDER1\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPTBEF\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"78.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("orderPeriod","0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("발령기간");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDtFromAppr","orderPeriod:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCD_TILDE","calDtFromAppr:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calDtToAppr","staCD_TILDE:0.0","10.0","100","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("ccfCorpCD_CORP","calDtToAppr:20","10.0","66","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("법인");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","ccfCorpCD_CORP:0.0","10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("onitemchanged").set("fnSearchInit");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("orderBefCD_DEPT","ccfCD_CORP:0.0","10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("발령전부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfOrderBefccfCD_DEPT","orderBefCD_DEPT:0.0","10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("onitemchanged").set("fnSearchInit");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("orderUpper","0.0","orderPeriod:10.0","105.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("발령대분류");
            obj.set_textDecoration("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfOrderUpperDeptCd","orderUpper:0.0","orderPeriod:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","ccfOrderUpperDeptCd:0.0","ccfCorpCD_CORP:10.0","66.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:0.0","ccfCorpCD_CORP:10.0","200","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("90");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("codefind_AfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","ccfID_SABUN:10","ccfCorpCD_CORP:10.0","86","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("ccfOrderCD_DEPT00","ccfID_SABUN:0.0","orderBefCD_DEPT:10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT","ccfOrderCD_DEPT00:0.0","orderBefCD_DEPT:10.0","250","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("14");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("onitemchanged").set("fnSearchInit");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
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
            obj = new BindItem("item0","divSearch.form.calDtFromAppr","value","dsSearch","DT_ORDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.calDtToAppr","value","dsSearch","DT_ORDER_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.ccfOrderUpperDeptCd.form.CDTextBox","value","dsSearch","CD_ORDER1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.ccfOrderBefccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPTBEF");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.ccfCD_DEPT.form.CDTextBox","value","dsSearch","CD_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.edtID_PERSON","value","dsSearch","ID_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAA_ORDERSPECDATE.xfdl", function() {
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

        	//this.FormBtns.Select.click();

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Reset.set_enable(true);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        // 	this.btnElctrncPmnt = this.gfnFormButtonAdd("btnElctrncPmnt", "fnElctrncPmnt", "전자결재상신");
        // 	this.btnElctrncPmntDoc = this.gfnFormButtonAdd("btnElctrncPmntDoc", "fnElctrncPmntDoc", "전자결재문서조회");
        // 	this.btnChitPrcsStatus = this.gfnFormButtonAdd("btnChitPrcsStatus", "fnChitPrcsStatus", "전표처리현황");
        	this.btnBaseInfo = this.gfnFormButtonAdd("btnBaseInfo", "fnBaseInfo", "인사기본정보");
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;			// 법인코드
        	this.calDtFromAppr = this.divSearch.form.calDtFromAppr;     // 기간 from
            this.calDtToAppr = this.divSearch.form.calDtToAppr;         // 기간 to
        	this.ccfOrderUpperDeptCd = this.divSearch.form.ccfOrderUpperDeptCd;  //발령대분류
        	this.ccfOrderBefccfCD_DEPT = this.divSearch.form.ccfOrderBefccfCD_DEPT;  //발령전부서
        	this.ccfCD_DEPT = this.divSearch.form.ccfCD_DEPT;   //부서코드
        	this.ccfID_SABUN = this.divSearch.form.ccfID_SABUN;   //사번
        	this.edtID_PERSON = this.divSearch.form.edtID_PERSON;

        	this.dxGrid = this.divData.form.objGrid;  // 그리드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 그리드
        	this.gfnGridInit(this.dxGrid, this.dsList, "DA", "DAA_ORDERSPECDATE");

          	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP";  //법인코드
        	this.ccfCD_CORP.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	this.ccfOrderUpperDeptCd.CodeFindName = "DAX_CFCOMMONCODE";	// 발령대분류
        	this.ccfOrderUpperDeptCd.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfOrderBefccfCD_DEPT.CodeFindName = "DAX_CFDEPT"; //발령전부서
        	this.ccfOrderBefccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.ccfCD_DEPT.CodeFindName = "DAX_CFDEPT"; //부서코드
        	this.ccfCD_DEPT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	// 월의 시작일자와 마지막일자
        	var vToday = this.gfnGetDate();

        	//발령기간 세팅...
        	this.dsSearch.setColumn(0, "DT_ORDER", this.gfnGetFirstDate(vToday));
        	this.dsSearch.setColumn(0, "DT_ORDER_TO", this.gfnGetLastDate(vToday.substr(0,6)));

        	// 법인코드 및 법인명 기본세팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	 /*그리드 이벤트*/
        	this.dxGrid.BeforeUserDataSetParam = "fnGrid_BeforuserDataSetParam";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("DT_ORDER", "string");  // 기간 from
        	this.dsSelect.addColumn("DT_ORDER_TO", "string"); // 기간 to
        	this.dsSelect.addColumn("CD_CORP", "string");  // 법인코드
        	this.dsSelect.addColumn("CD_ORDER1", "string"); // 발령대분류
        	this.dsSelect.addColumn("CD_DEPTBEF", "string");  // 발령전부서
        	this.dsSelect.addColumn("CD_DEPT", "string");    // 발령부서
        	this.dsSelect.addColumn("ID_SABUN", "string");    // 사번
        	this.dsSelect.addColumn("ID_PERSON", "string");

        	this.dsUpdate = new Dataset();
        	this.dsUpdate.addColumn("CD_CORP", "string");    //법인코드
        	this.dsUpdate.addColumn("ID_SABUN", "string");   //사번
        	this.dsUpdate.addColumn("DT_ORDER", "string");   //발령일자
        	this.dsUpdate.addColumn("NO_SEQ", "bigdecimal"); //발령순서
        	this.dsUpdate.addColumn("CD_WORK_PLACE", "string"); //근무지코드
        	this.dsUpdate.addColumn("CD_OCCUPATION", "string"); //직책명
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {
        	//if (!this.fnSelectValidate()) return false;

        	this.gfnGridBeforeSelect(this.dxGrid);

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "DT_ORDER"   , this.dsSearch.getColumn(0, "DT_ORDER"));		// 기간 from
        	this.dsSelect.setColumn(0, "DT_ORDER_TO", this.dsSearch.getColumn(0, "DT_ORDER_TO"));   // 기간 to
        	this.dsSelect.setColumn(0, "CD_CORP"    , this.dsSearch.getColumn(0, "CD_CORP"));		// 법인코드
        	this.dsSelect.setColumn(0, "CD_ORDER1"  , this.dsSearch.getColumn(0, "CD_ORDER1")); 	// 발령대분류
        	this.dsSelect.setColumn(0, "CD_DEPTBEF" , this.dsSearch.getColumn(0, "CD_DEPTBEF"));	// 발령전부서
        	this.dsSelect.setColumn(0, "CD_DEPT"    , this.dsSearch.getColumn(0, "CD_DEPT"));	    // 발령부서
        	this.dsSelect.setColumn(0, "ID_SABUN"   , this.dsSearch.getColumn(0, "ID_SABUN"));	    // 사번
        	this.dsSelect.setColumn(0, "ID_PERSON"  , this.dsSearch.getColumn(0, "ID_PERSON"));

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
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	//var nRow = this.gfnGridAdd(this.dxGrid);
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	this.gfnGridDel(this.dxGrid);
        };

        /*
         *	저장 버튼
         */
        this.fnSave = function() {

        	if (!this.gfnGridValidate(this.dxGrid)) return;

        	this.dxGrid.updateToDataset();

        	//this.dsInsert.clearData();
        	this.dsUpdate.clearData();
        	//this.dsDelete.clearData();

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsList, i);

        		switch(flag) {
        		/*	case "I":
        				var nrow = this.dsInsert.addRow();
        				this.dsInsert.setColumn(nrow, "CD_CORP", this.ccfCorpCd.form.CDTextBox.value);				// 법인코드
        				this.dsInsert.setColumn(nrow, "DT_CONSULT", this.dsList.getColumn(i, "DT_CONSULT"));		// 품의일자
        				this.dsInsert.setColumn(nrow, "CD_DEPT_ACNT", this.dsList.getColumn(i, "CD_DEPT_ACNT"));	// 품의부서코드
        				this.dsInsert.setColumn(nrow, "RM_TITLE", this.dsList.getColumn(i, "RM_TITLE"));			// 제목
        				this.dsInsert.setColumn(nrow, "DT_FROM", this.dsList.getColumn(i, "DT_FROM"));				// 품의일자(F)
        				this.dsInsert.setColumn(nrow, "DT_TO", this.dsList.getColumn(i, "DT_TO"));					// 품의일자(T)
        				this.dsInsert.setColumn(nrow, "AM_REQ", this.dsList.getColumn(i, "AM_REQ"));				// 품의금액(신청금액)
        				this.dsInsert.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);							// ID
        				break;
        		*/
        			case "U":
        				var nrow = this.dsUpdate.addRow();
        				this.dsUpdate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(i, "CD_CORP"));				// 법인코드
        				this.dsUpdate.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(i, "ID_SABUN"));		    // 사번
        				this.dsUpdate.setColumn(nrow, "DT_ORDER", this.dsList.getColumn(i, "DT_ORDER").replace(/#/gi,""));	        // 발령일자
        				this.dsUpdate.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(i, "NO_SEQ"));			    // 발령순서
        				this.dsUpdate.setColumn(nrow, "CD_WORK_PLACE", this.dsList.getColumn(i, "CD_WORK_PLACE"));	//근무지코드			// 품의일자(F)
        				this.dsUpdate.setColumn(nrow, "CD_OCCUPATION", this.dsList.getColumn(i, "CD_OCCUPATION"));	//직책코드				// 품의일자(T)
        				break;
        		/*
        			case "D":
        				var nrow = this.dsDelete.addRow();
        				this.dsDelete.setColumn(nrow, "CD_CORP", this.ccfCorpCd.form.CDTextBox.value);				// 법인코드
        				this.dsDelete.setColumn(nrow, "ID_CONSULT", this.dsList.getColumn(i, "ID_CONSULT"));		// 품의번호
        				break;
        		*/
        		}

        	}

        	if (this.dsUpdate.rowcount == 0 ) return;

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
        						callBackFnc); // 통신방법 정의 [생략가능]

        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.dxGrid);
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        };
        /*
         *	Reset
         */
        this.fnReset = function() {
        	this.ccfCD_CORP.form.CDTextBox.set_value("");
        	this.ccfCD_CORP.form.DSTextBox.set_value("");

        	this.calDtFromAppr.set_value("");
            this.calDtToAppr.set_value("");

        	this.ccfOrderUpperDeptCd.form.CDTextBox.set_value("");
        	this.ccfOrderUpperDeptCd.form.DSTextBox.set_value("");

        	this.ccfOrderBefccfCD_DEPT.form.CDTextBox.set_value("");
        	this.ccfOrderBefccfCD_DEPT.form.DSTextBox.set_value("");

        	this.ccfCD_DEPT.form.CDTextBox.set_value("");
        	this.ccfCD_DEPT.form.DSTextBox.set_value("");

        	this.ccfID_SABUN.form.CDTextBox.set_value("");
        	this.ccfID_SABUN.form.DSTextBox.set_value("");
        	this.edtID_PERSON.set_value("");

        	this.fnSearchInit();
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	조회 Validate
         */

        this.fnSelectValidate = function() {

            var cd_corp = this.ccfCD_CORP.form.CDTextBox.text;

        	if (this.gfnIsNull(cd_corp)) {
        		this.gfnAlert("법인코드가 입력되지 않았습니다.");
        		this.ccfCorpCd.form.CDTextBox.setFocus();
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

        		if (this.dsList.rowcount > 0) {
        			this.dsList.set_rowposition(0);
        		}

        		this.fnSetButton();
        	}
        	else if(svcID == "save") {
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        };
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	switch(id) {
        	case "ccfCD_CORP": // 법인코드
        		break;

        	case "ccfOrderUpperDeptCd": // 발령대분류
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "OA");
        		break;

        	case "ccfOrderBefccfCD_DEPT" : // 발령전부서
        		var cd_corp = this.ccfCD_CORP.form.CDTextBox.text;

        // 		if(this.gfnIsNull(cd_corp)) {
        // 			this.gfnAlert("법인코드를 먼저 입력하세요.");
        // 			return false;
        // 		}
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)==true?"%":this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "");
        		break;

        	case "ccfCD_DEPT": // 부서코드
        		var cd_corp = this.ccfCD_CORP.form.CDTextBox.text;

        // 		if(this.gfnIsNull(cd_corp)) {
        // 			this.gfnAlert("법인코드를 먼저 입력하세요.");
        // 			return false;
        // 		}
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)==true?"%":this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "YN_CURRENT", "");
        		break;

        	case "ccfID_SABUN":
        		dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)==true?"%":this.ccfCD_CORP.form.CDTextBox.value);
        		dsUserParam.setColumn(nrow, "GR_SEARCH",this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        		dsUserParam.setColumn(nrow, "YN_CORP", "%");
        		break;

        	default:
        	}
        	return true;

        };

        this.codefind_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	if(id == "ccfID_SABUN"){
        // 		if(arr.length > 0 ){
        // 			this.ccfCD_CORP.form.CDTextBox.set_value(arr[0]["CD_CORP"]);
        // 			this.ccfCD_CORP.form.DSTextBox.set_value(arr[0]["DS_CORP"]);
        // 			this.ccfCD_DEPT.form.CDTextBox.set_value(arr[0]["CD_DEPT"]);
        // 			this.ccfCD_DEPT.form.DSTextBox.set_value(arr[0]["DS_DEPT"]);
        // 		}else{
        // 			this.ccfCD_CORP.form.CDTextBox.set_value("");
        // 			this.ccfCD_CORP.form.DSTextBox.set_value("");
        // 			this.ccfCD_DEPT.form.CDTextBox.set_value("");
        // 			this.ccfCD_DEPT.form.DSTextBox.set_value("");
        // 		}
        	var ID_PERSON = "";
        	if(arr.length > 0 ) ID_PERSON = arr[0]["ID_PERSON"];
        	this.edtID_PERSON.set_value(ID_PERSON);

        	}else if(id == "ccfCD_CORP"){
        			this.ccfCD_DEPT.form.CDTextBox.set_value("");
        			this.ccfCD_DEPT.form.DSTextBox.set_value("");
        			this.ccfID_SABUN.form.CDTextBox.set_value("");
        			this.ccfID_SABUN.form.DSTextBox.set_value("");
        			this.edtID_PERSON.set_value("");

        	}else if(id == "ccfCD_DEPT"){
        			this.ccfID_SABUN.form.CDTextBox.set_value("");
        			this.ccfID_SABUN.form.DSTextBox.set_value("");
        			this.edtID_PERSON.set_value("");
        	}

        	this.fnSearchInit();
        };

        this.fnGrid_BeforuserDataSetParam = function(id, dsUserParam, nrow) {
        	//trace('grid_코드파인드_식별id: ' + id);  // EK - 근무지   CD_PREFIX  EC- 직책

        	switch(id) {
        	case "EK":     // 근무지
        		 dsUserParam.setColumn(nrow, "CD_PREFIX", "EK");
        	break;
        	case "EC":     // 직책
        		 dsUserParam.setColumn(nrow, "CD_PREFIX", "EC");
        	break;

        	default:
        	}
        	return true;
        };

        this.fnGrid_AfterCDTextChanged = function(id, codeFindData) {

        	switch(id) {
        	case "DFX_CFACNTUNIT":
        		break;

        	default:
        	}
        	return true;
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         this.fnGrid_oncelldblclick = function(obj,e)
        {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	//var colNm = this.gfnGridGetBindColumnNameByIndex(obj,e.cell);
        	//if(obj.usReadOnlyY.search(colNm) == -1) return true;

        	var param = {};
        	param.CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	param.DS_CORP = this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");
        	param.ID_SABUN = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        	param.CD_PM = "ORDER"

        	//this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DAA_BASEINFO", "", param , this.width, this.height);
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAA_BASEINFO", "", param , 1350, 860);
        };
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if(e == null || (e.pretext != e.posttext)) {
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

        /*
        // 전자결재상신
        this.fnElctrncPmnt = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        }


        // 전자결재문서조회
        this.fnElctrncPmntDoc = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        }


        // 전표처리현황
        this.fnChitPrcsStatus = function(obj:nexacro.Button,e:nexacro.ClickEventInfo) {
        }
        */

        // 인사기본정보
        this.fnBaseInfo = function(obj,e) {
        	if(!this.gfnGridIsRow(this.dxGrid)) return;
        	//var colNm = this.gfnGridGetBindColumnNameByIndex(obj,e.cell);
        	//if(obj.usReadOnlyY.search(colNm) == -1) return true;

        	var param = {};
        	param.CD_CORP = this.dsList.getColumn(this.dsList.rowposition, "CD_CORP");
        	param.DS_CORP = this.dsList.getColumn(this.dsList.rowposition, "DS_CORP");
        	param.ID_SABUN = this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN");
        	param.CD_PM = "ORDER"

        	//this.gfnFormOpenNonAuth(this.FormInfo.CD_MODULE, "DAA_BASEINFO", "", param , this.width, this.height);
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DAA_BASEINFO", "", param , 1350, 860);
        }

        this.dsList_onvaluechanged = function(obj,e)
        {
        	this.fnSetButton();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.objGrid.addEventHandler("oncelldblclick",this.fnGrid_oncelldblclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAA_ORDERSPECDATE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
