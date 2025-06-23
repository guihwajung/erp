(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAB_LEISURE_MUJU_PRINT_DLG");
            this.set_titletext("무주객실이용권신청현황 출력");
            this.getSetter("maxwidth").set("380");
            this.getSetter("maxheight").set("320");
            if (Form == this.constructor)
            {
                this._setFormPosition(370,270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAZPR_COMMONCODE_COMBO</Col></Row><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"TY_COUPON\" type=\"STRING\" size=\"256\"/><Column id=\"NO_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_REQUEST_TO\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DEPOSIT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_DEPOSIT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SABUN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_COUPON", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","10","336","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("무주 객실이용권 신청현황 출력");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","staTITLE:10",null,"150","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_COUPON","10","0","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("쿠폰구분");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNO_NUMBER","10","staTY_COUPON:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("일련번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SABUN","10","staNO_NUMBER:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_REQUEST","10","staDS_SABUN:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("신청기간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_DEPOSIT","10","staDT_REQUEST:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("입금기간");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","staTY_COUPON:-1","0","250","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","staNO_NUMBER:-1","sta00:-1","250","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","staDS_SABUN:-1","sta01:-1","250","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","staDT_REQUEST:-1","sta02:-1","250","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","staDT_DEPOSIT:-1","sta03:-1","250","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("ccboTY_COUPON","staTY_COUPON:5","5","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_innerdataset("dsTY_COUPON");
            obj.set_codecolumn("CD_CODE");
            obj.set_datacolumn("DS_CODE");
            obj.set_value("0");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtNO_NUMBER","staNO_NUMBER:5","sta00:5","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staDS_SABUN:5","sta01:5","230","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("6");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_REQUEST_FROM","staDT_REQUEST:5","sta02:5","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_ORD_TO","calDT_REQUEST_FROM:5","sta02:5","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_REQUEST_TO","staDT_ORD_TO:5","sta02:5","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_DEPOSIT_FROM","staDT_DEPOSIT:5","sta03:5","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_ORD_TO1","calDT_DEPOSIT_FROM:5","sta03:5","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("calDT_DEPOSIT_TO","staDT_ORD_TO1:5","sta03:5","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","273","63","59","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","2","divData:10",null,"35","38",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","190","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","100","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccboTY_COUPON","value","dsSearch","TY_COUPON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.edtNO_NUMBER","value","dsSearch","NO_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ccfID_SABUN.form.CDTextBox","value","dsSearch","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ccfID_SABUN.form.DSTextBox","value","dsSearch","DS_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.calDT_REQUEST_FROM","value","dsSearch","DT_REQUEST_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.calDT_REQUEST_TO","value","dsSearch","DT_REQUEST_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.calDT_DEPOSIT_FROM","value","dsSearch","DT_DEPOSIT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.calDT_DEPOSIT_TO","value","dsSearch","DT_DEPOSIT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.edtID_PERSON","value","dsSearch","ID_PERSON");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_LEISURE_MUJU_PRINT_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	//this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.fnSetCombo();
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        	// this.FormBtns.Add.set_enable(false);
        	// this.FormBtns.Del.set_enable(false);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	this.grSearch = this.FormInfo.GR_SEARCH;			// 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;			// 그룹코드

        	this.ccboTY_COUPON = this.divData.form.ccboTY_COUPON;
        	this.ccfID_SABUN = this.divData.form.ccfID_SABUN;

        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	// 채용공고 코드파인드
        	//this.ccfNO_NOTICE.CodeFindName = "DAX_RECRUIT_NOTICE";
        	//this.ccfNO_NOTICE.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfID_SABUN.CodeFindName = "DAX_CFBASEINFO";
        	this.ccfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfID_SABUN.AfterCDTextChanged = "codefind_AfterCDTextChanged";

        	//적용년도(현재)
        	// this.calDT_BASE.form.TextBox.set_value(this.gfnGetDate().substr(0,4));
        	//this.calDT_BASE.set_value(this.getOwnerFrame().DT_BASE);
        	//this.ccfNO_NOTICE.form.CDTextBox.set_value(this.getOwnerFrame().NO_NOTICE);
            //this.ccfNO_NOTICE.form.DSTextBox.set_value(this.getOwnerFrame().DS_NOTICE);
        	/*

        	부모창에서 받아온 값 셋팅
        			this.dsReportParam.setColumn(nrow, "TY_COUPON", "동하계골드(1매)");
        			this.dsReportParam.setColumn(nrow, "NO_NUMBER", "006607"); 				// 일련번호
        			this.dsReportParam.setColumn(nrow, "DT_DEPOSIT_FROM", "20191210"); 		// 입금기간
        			this.dsReportParam.setColumn(nrow, "DT_DEPOSIT_TO", "20200103"); 		// 입금기간
        			this.dsReportParam.setColumn(nrow, "DT_REQUEST_FROM", "20191220"); 		// 신청기간
        			this.dsReportParam.setColumn(nrow, "DT_REQUEST_TO", "20200111"); 		// 신청기간
        			this.dsReportParam.setColumn(nrow, "DS_HNAME", "홍길동"); 			// 성명
        	*/

        	this.dsSearch.setColumn(0, "TY_COUPON", "");
        	this.dsSearch.setColumn(0, "NO_NUMBER", "");
        	this.dsSearch.setColumn(0, "DT_REQUEST_FROM", this.getOwnerFrame().DT_REQUEST_FROM);
        	this.dsSearch.setColumn(0, "DT_REQUEST_TO", this.getOwnerFrame().DT_REQUEST_TO);
        	this.dsSearch.setColumn(0, "DT_DEPOSIT_FROM", "");
        	this.dsSearch.setColumn(0, "DT_DEPOSIT_TO", "");
        	this.dsSearch.setColumn(0, "ID_SABUN", this.getOwnerFrame().ID_SABUN);
        	this.dsSearch.setColumn(0, "DS_SABUN", this.getOwnerFrame().DS_SABUN);
        	this.dsSearch.setColumn(0, "ID_PERSON", this.getOwnerFrame().ID_PERSON);

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

         	var validate = true;
        	/*
        	// 기준일자
        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "DT_BASE"))) {
        		this.fnVaidateCallback = function() {
        			this.calDT_BASE.setFocus();
        		}
        		this.gfnAlert("기준일자를 입력하세요.");
        		return false;
        	}
        	*/

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
        	if (svcID == "select") {
        		//this.gfnGridAfterSelect(this.dxGrid);
        	}

        	if (svcID == "combo") {
        		this.ccboTY_COUPON.set_index(0);
        	}

        // 	else if(svcID == "save") {
        // 		if (errorCode == 0) {
        // 			this.FormBtns.Select.click();
        // 		} else {
        // 			this.gfnAlert(errorMsg);
        // 		}
        // 	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if(id = "DAX_CFBASEINFO"){
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
                dsUserParam.setColumn(nrow, "CD_DEPT", "");
                dsUserParam.setColumn(nrow, "TY_RETIRE", "");	// 재직구분
        	}

        	return true;
        };

        this.codefind_AfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfID_SABUN") {
        		var ID_PERSON = "";
        		if(arr.length > 0) {
        			ID_PERSON = codeFindData[0]["ID_PERSON"];
        		}
        	}

        	this.dsSearch.setColumn(0, "ID_PERSON", ID_PERSON);
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        this.fnSetCombo = function() {

        	// [OC]무주쿠폰구분
        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("TY_SEL", "string");
        	this.dsCombo.addColumn("CD_PREFIX", "string");
        	this.dsCombo.addColumn("CD_UPPREFIX", "string");

        	this.dsCombo.clearData();
        	this.dsCombo.addRow();

        	this.dsCombo.setColumn(0, "TY_SEL", "A");
        	this.dsCombo.setColumn(0, "CD_PREFIX", "OC");
        	this.dsCombo.setColumn(0, "CD_UPPREFIX", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTY_COUPON=combo0";
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

        this.btnOK_onclick = function(obj,e)
        {
        	//if (!this.fnSelectValidate()) return false;

        	var json = {};
        	json.TY_COUPON = this.dsSearch.getColumn(0, "TY_COUPON");
        	json.NO_NUMBER = this.dsSearch.getColumn(0, "NO_NUMBER");
        	json.DT_REQUEST_FROM = this.dsSearch.getColumn(0, "DT_REQUEST_FROM");
        	json.DT_REQUEST_TO = this.dsSearch.getColumn(0, "DT_REQUEST_TO");
        	json.DT_DEPOSIT_FROM = this.dsSearch.getColumn(0, "DT_DEPOSIT_FROM");
        	json.DT_DEPOSIT_TO = this.dsSearch.getColumn(0, "DT_DEPOSIT_TO");
        	json.ID_SABUN = this.dsSearch.getColumn(0, "ID_SABUN");
        	json.DS_SABUN = this.dsSearch.getColumn(0, "DS_SABUN");
        	json.ID_PERSON = this.dsSearch.getColumn(0, "ID_PERSON");

        	this.getParentContext().close(JSON.stringify(json));
        };

        this.btnCANCLE_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_LEISURE_MUJU_PRINT_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
