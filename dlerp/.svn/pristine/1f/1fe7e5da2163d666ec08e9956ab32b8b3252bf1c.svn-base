(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAA_EDI_SINGO");
            this.set_titletext("EDI신고파일 생성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsListJoin", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListRetire", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">selectJoin</Col><Col id=\"SP\">DAAPR_EDI_SINGO_JOIN_SELECT</Col></Row><Row><Col id=\"TARGET\">selectRetire</Col><Col id=\"SP\">DAAPR_EDI_SINGO_RETIRE_SELECT</Col></Row><Row><Col id=\"TARGET\">saveJoin</Col><Col id=\"SP\">DAAPR_EDI_SINGO_JOIN_SAVE</Col></Row><Row><Col id=\"TARGET\">saveRetire</Col><Col id=\"SP\">DAAPR_EDI_SINGO_RETIRE_SAVE</Col></Row><Row><Col id=\"TARGET\">selectEdiFileJoin</Col><Col id=\"SP\">DAAPR_EDI_SINGO_JOIN_SELECT</Col></Row><Row><Col id=\"TARGET\">selectEdiFileRetire</Col><Col id=\"SP\">DAAPR_EDI_SINGO_RETIRE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListEdiFile", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"46.0","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_SEARCH_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:0.0","10.0","179","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP2");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_SEARCH","ccfCD_CORP:0.0","10.0","92.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회일자");
            obj.set_cssclass("sta_WF_SchLabelE");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_SEARCH:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staDT_REQ00","ctclDT_FROM:0.0","10.0","30.0","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_REQ00:0.0","10.0","105","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("txtDS_CORP","ctclDT_TO:0.0","10.0","150","24.0",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_autoselect("true");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divData","0","divSearch:10",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Tab("tabData","0","0",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.divData.addChild(obj.name, obj);

            obj = new Tabpage("tab1",this.divData.form.tabData);
            obj.set_text("취득");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGridEdiFile","139","48","276","93",null,null,null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Grid("objGridJoin","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab1.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab1.addChild(obj.name, obj);

            obj = new Tabpage("tab2",this.divData.form.tabData);
            obj.set_text("상실");
            this.divData.form.tabData.addChild(obj.name, obj);

            obj = new Grid("objGridRetire","0","0",null,null,"0","0",null,null,null,null,this.divData.form.tabData.tab2.form);
            obj.set_taborder("0");
            obj._setContents("");
            this.divData.form.tabData.tab2.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.ctclDT_FROM","value","dsSearch","DT_EVENT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.ctclDT_TO","value","dsSearch","DT_EVENT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.txtDS_CORP","value","dsSearch","DS_FAMILYPLACE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAA_EDI_SINGO.xfdl", function() {
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

        	//조회기간
        	this.ctclDT_FROM.set_value(this.gfnGetDate());
        	this.ctclDT_TO.set_value(this.gfnGetDate());

        	//탭 초기화
        	this.divData.form.tabData.set_tabindex(0);

        	this.FormBtns.Select.click();
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
        	this.FormBtns.Reset.set_enable(true);
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {
        	this.btnSingoCreate = this.gfnFormButtonAdd("SingoCreate", "fnExtendButtonEvent","대상자생성");
        	this.btnEdiSingo = this.gfnFormButtonAdd("EdiSingo", "fnExtendButtonEvent","EDI 파일생성");
        };
        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        	//조회기간
        	this.ctclDT_FROM = this.divSearch.form.ctclDT_FROM;
        	this.ctclDT_TO = this.divSearch.form.ctclDT_TO;

        	//법인코드
        	this.ccfCD_CORP = this.divSearch.form.ccfCD_CORP;

        	this.txtDS_CORP = this.divSearch.form.txtDS_CORP;	// EDI파일생성 파일명


        	//취득 그리드
        	this.dxGridJoin = this.divData.form.tabData.tab1.form.objGridJoin;

        	//상실 그리드
        	this.dxGridRetire = this.divData.form.tabData.tab2.form.objGridRetire;

        	//EDI 파일 다운 그리드
        	this.dxGridEdiFile = this.divData.form.tabData.tab1.form.objGridEdiFile;

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//취득
        	this.gfnGridInit(this.dxGridJoin, this.dsListJoin, "DA", "DAA_EDI_SINGO_JOIN");
        	//상실
        	this.gfnGridInit(this.dxGridRetire, this.dsListRetire, "DA", "DAA_EDI_SINGO_RETIRE");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	//조회
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_CORP", "string");   	//법인
        	this.dsSelect.addColumn("DT_FROM", "string");   	//조회 시작
        	this.dsSelect.addColumn("DT_TO", "string");  		//조회 종료
        	this.dsSelect.addColumn("ID_USER", "string"); 		//20200410 추가
        	this.dsSelect.addColumn("IP_ADDR", "string"); 		//20200410 추가

        	//취득 저장
        	this.dsSaveJoin = new Dataset();
        	this.dsSaveJoin.addColumn("TY_SAVE", "string");
        	this.dsSaveJoin.addColumn("ID_PERSON", "bigdecimal");
        	this.dsSaveJoin.addColumn("CD_CORP", "string");
        	this.dsSaveJoin.addColumn("ID_SABUN", "string");
        	this.dsSaveJoin.addColumn("DT_JOIN", "string");
        	this.dsSaveJoin.addColumn("TY_PUBLIC", "string");
        	this.dsSaveJoin.addColumn("DS_HNAME", "string");
        	this.dsSaveJoin.addColumn("DS_ENAME", "string");
        	this.dsSaveJoin.addColumn("ID_RESIDENT", "string");
        	this.dsSaveJoin.addColumn("TY_NATIONALITY", "string");
        	this.dsSaveJoin.addColumn("TY_STAY", "string");
        	this.dsSaveJoin.addColumn("TY_REPRESENT", "string");
        	this.dsSaveJoin.addColumn("AM_INCOME", "bigdecimal");
        	this.dsSaveJoin.addColumn("TY_PAY", "string");
        	this.dsSaveJoin.addColumn("CD_ACQUIRE", "string");
        	this.dsSaveJoin.addColumn("DT_ACQUIRE", "string");
        	this.dsSaveJoin.addColumn("TY_SPECIALWORK", "string");
        	this.dsSaveJoin.addColumn("CD_SPECIALPENSION", "string");
        	this.dsSaveJoin.addColumn("CD_OFFICE", "string");
        	this.dsSaveJoin.addColumn("DS_OFFICE", "string");
        	this.dsSaveJoin.addColumn("AM_WAGE", "bigdecimal");
        	this.dsSaveJoin.addColumn("TY_SIGN2", "string");
        	this.dsSaveJoin.addColumn("DT_ACQUIRE2", "string");
        	this.dsSaveJoin.addColumn("TY_REDUCTION", "string");
        	this.dsSaveJoin.addColumn("TY_TRANS", "string");
        	this.dsSaveJoin.addColumn("TY_ACCOUNT", "string");
        	this.dsSaveJoin.addColumn("TY_JOB", "string");
        	this.dsSaveJoin.addColumn("DT_ACQUIRE3", "string");
        	this.dsSaveJoin.addColumn("TY_SCHOOL", "string");
        	this.dsSaveJoin.addColumn("TY_JOB2", "string");
        	this.dsSaveJoin.addColumn("CT_FIXEDWORK", "string");
        	this.dsSaveJoin.addColumn("TY_CONTRACTWORKER", "string");
        	this.dsSaveJoin.addColumn("YM_CONTRACT_END", "string");
        	this.dsSaveJoin.addColumn("AM_AVG_SALARY", "bigdecimal");
        	this.dsSaveJoin.addColumn("TY_BIGO", "string");
        	this.dsSaveJoin.addColumn("CD_INSURANCE", "string");
        	this.dsSaveJoin.addColumn("TY_INSURANCE", "string");
        	this.dsSaveJoin.addColumn("DT_ACQUIRE4", "string");
        	this.dsSaveJoin.addColumn("TY_SCHOOL2", "string");
        	this.dsSaveJoin.addColumn("TY_JOB3", "string");
        	this.dsSaveJoin.addColumn("CT_FIXEDWORK2", "string");
        	this.dsSaveJoin.addColumn("TY_CONTRACTWORKER2", "string");
        	this.dsSaveJoin.addColumn("YM_CONTRACT_END2", "string");
        	this.dsSaveJoin.addColumn("AM_AVG_SALARY2", "bigdecimal");
        	this.dsSaveJoin.addColumn("TY_BIGO2", "string");
        	this.dsSaveJoin.addColumn("CD_INSURANCE2", "string");
        	this.dsSaveJoin.addColumn("TY_INSURANCE2", "string");
        	this.dsSaveJoin.addColumn("ID_USER", "string");
        	this.dsSaveJoin.addColumn("IP_ADDR", "string"); //20200410 추가

        	//상실 저장
        	this.dsSaveRetire = new Dataset();
        	this.dsSaveRetire.addColumn("TY_SAVE", "string");
        	this.dsSaveRetire.addColumn("ID_PERSON", "bigdecimal");
        	this.dsSaveRetire.addColumn("CD_CORP", "string");
        	this.dsSaveRetire.addColumn("ID_SABUN", "string");
        	this.dsSaveRetire.addColumn("DT_RETIRE", "string");
        	this.dsSaveRetire.addColumn("TY_PUBLIC", "string");
        	this.dsSaveRetire.addColumn("DS_HNAME", "string");
        	this.dsSaveRetire.addColumn("ID_RESIDENT", "string");
        	this.dsSaveRetire.addColumn("DS_PHONE", "string");
        	this.dsSaveRetire.addColumn("DT_LOSS", "string");
        	this.dsSaveRetire.addColumn("CD_LOSS", "string");
        	this.dsSaveRetire.addColumn("TY_PAY", "string");
        	this.dsSaveRetire.addColumn("DT_LOSS2", "string");
        	this.dsSaveRetire.addColumn("CD_LOSS2", "string");
        	this.dsSaveRetire.addColumn("AM_AVG_SALARY", "bigdecimal");
        	this.dsSaveRetire.addColumn("AM_YEARLY", "bigdecimal");
        	this.dsSaveRetire.addColumn("CT_YEARLY_MONTH", "string");
        	this.dsSaveRetire.addColumn("TY_JUNGSAN_PRE", "string");
        	this.dsSaveRetire.addColumn("AM_YEARLY_PRE", "bigdecimal");
        	this.dsSaveRetire.addColumn("CT_YEARLY_MONTH_PRE", "string");
        	this.dsSaveRetire.addColumn("TY_LOSS", "string");
        	this.dsSaveRetire.addColumn("DS_LOSS", "string");
        	this.dsSaveRetire.addColumn("DT_LOSS3", "string");
        	this.dsSaveRetire.addColumn("AM_YEARLY2", "bigdecimal");
        	this.dsSaveRetire.addColumn("TY_LOSS2", "string");
        	this.dsSaveRetire.addColumn("DS_LOSS2", "string");
        	this.dsSaveRetire.addColumn("DT_LOSS4", "string");
        	this.dsSaveRetire.addColumn("AM_YEARLY3", "bigdecimal");
        	this.dsSaveRetire.addColumn("ID_USER", "string");
        	this.dsSaveRetire.addColumn("IP_ADDR", "string"); //20200410 추가


        	// EDI 조회
        	this.dsSelectEdi = new Dataset();
        	this.dsSelectEdi.addColumn("CD_CORP", "string");   	//법인코드
        	//this.dsSelectEdi.addColumn("DS_CORP", "string");   	//법인명
        	this.dsSelectEdi.addColumn("DT_FROM", "string");   	//조회 시작
        	this.dsSelectEdi.addColumn("DT_TO", "string");  	//조회 종료
        	this.dsSelectEdi.addColumn("ID_USER", "string"); 		//20200410 추가
        	this.dsSelectEdi.addColumn("IP_ADDR", "string"); 		//20200410 추가

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /*
          *	조회 버튼
          */
        this.fnSelect = function() {

        	if (!this.fnSelectValidate()) return false;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();

        	this.dsSelect.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);//법인코드
        	this.dsSelect.setColumn(0, "DT_FROM", this.ctclDT_FROM.value);   		//조회 시작
        	this.dsSelect.setColumn(0, "DT_TO", this.ctclDT_TO.value);  			//조회 종료
        	this.dsSelect.setColumn(0, "ID_USER", this.AuthClient.ID_USER);			//로그인사번
        	this.dsSelect.setColumn(0, "IP_ADDR", this.AuthClient.NO_IP);			//IP주소

        	//취득-상실 구분
        	var inDataStr="";
        	var outDataStr="";

        	if(this.divData.form.tabData.tabindex == 0){
        		this.gfnGridBeforeSelect(this.dxGridJoin);

        		inDataStr = "selectJoin=dsSelect"
        		outDataStr = "dsListJoin=selectJoin0";
        	}else{
        		this.gfnGridBeforeSelect(this.dxGridRetire);

        		inDataStr = "selectRetire=dsSelect"
        		outDataStr = "dsListRetire=selectRetire0";
        	}

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = inDataStr;
        	var outData     = outDataStr;
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        //EDI 생성 파일 조회
        this.fnSelectEdiFile = function(json) {
        	this.dsSelectEdi.clearData();

        	this.dsSelectEdi.addRow();

        	this.divSearch.form.txtDS_CORP.set_value(json.DS_CORP);

        	this.dsSelectEdi.setColumn(0, "CD_CORP", json.CD_CORP);
        	//this.dsSelectEdi.setColumn(0, "DS_CORP", json.DS_CORP);
        	this.dsSelectEdi.setColumn(0, "DT_FROM", json.DT_FROM);
        	this.dsSelectEdi.setColumn(0, "DT_TO", json.DT_TO);
        	this.dsSelectEdi.setColumn(0, "ID_USER", this.AuthClient.ID_USER);			//로그인사번
        	this.dsSelectEdi.setColumn(0, "IP_ADDR", this.AuthClient.NO_IP);			//IP주소

        	//취득-상실 구분
        	var inDataStr = "";
        	var outDataStr = "";
        	var strSvcIdStr = "";

        	if(json.TY_SINGO == "J"){
        		strSvcIdStr = "selectEdiFileJoin";
        		inDataStr = "selectEdiFileJoin=dsSelectEdi"
        		outDataStr = "dsListEdiFile=selectEdiFileJoin0";
        	}else{
        		strSvcIdStr = "selectEdiFileRetire";
        		inDataStr = "selectEdiFileRetire=dsSelectEdi"
        		outDataStr = "dsListEdiFile=selectEdiFileRetire0";
        	}

        	var strSvcId    = strSvcIdStr;
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = inDataStr;
        	var outData     = outDataStr;
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        /*
         *	입력 버튼
         */
        this.fnAdd = function() {
        	var nTabIdx = this.divData.form.tabData.tabindex;
        	var objGrid = nTabIdx == 0 ? this.dxGridJoin : this.dxGridRetire;
        	this.gfnGridAdd(objGrid);
        	//this.gfnGridAdd(this.dxGrid);
        };

        /*
         *	삭제 버튼
         */
        this.fnDel = function() {
        	var nTabIdx = this.divData.form.tabData.tabindex;
        	var objGrid = nTabIdx == 0 ? this.dxGridJoin : this.dxGridRetire;
        	this.gfnGridDel(objGrid);
        	//this.gfnGridDel(this.dxGrid);
        };

        this.fnSave = function () {
        	var tabIdx = this.divData.form.tabData.tabindex;
        	switch(tabIdx){
        		case 0:
        			this.fnSaveJoin();
        			break;

        		case 1:
        			this.fnSaveRetire();
        			break;

        		default:
        	}
        };

        /*
         *	취득 저장 버튼
         */
        this.fnSaveJoin = function() {
        	//그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGridJoin)) return;

        	this.dsSaveJoin.clearData();

        	for (var i = 0; i < this.dsListJoin.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListJoin, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSaveJoin.addRow();

        				this.dsSaveJoin.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSaveJoin.setColumn(nrow, "ID_PERSON", this.dsListJoin.getColumn(i, "ID_PERSON"));
        				this.dsSaveJoin.setColumn(nrow, "CD_CORP", this.dsListJoin.getColumn(i, "CD_CORP"));
        				this.dsSaveJoin.setColumn(nrow, "ID_SABUN", this.dsListJoin.getColumn(i, "ID_SABUN"));
        				this.dsSaveJoin.setColumn(nrow, "DT_JOIN", this.dsListJoin.getColumn(i, "DT_JOIN"));
        				this.dsSaveJoin.setColumn(nrow, "TY_PUBLIC", this.dsListJoin.getColumn(i, "TY_PUBLIC"));
        				this.dsSaveJoin.setColumn(nrow, "DS_HNAME", this.dsListJoin.getColumn(i, "DS_HNAME"));
        				this.dsSaveJoin.setColumn(nrow, "DS_ENAME", this.dsListJoin.getColumn(i, "DS_ENAME"));
        				this.dsSaveJoin.setColumn(nrow, "ID_RESIDENT", this.dsListJoin.getColumn(i, "ID_RESIDENT"));
        				this.dsSaveJoin.setColumn(nrow, "TY_NATIONALITY", this.dsListJoin.getColumn(i, "TY_NATIONALITY"));
        				this.dsSaveJoin.setColumn(nrow, "TY_STAY", this.dsListJoin.getColumn(i, "TY_STAY"));
        				this.dsSaveJoin.setColumn(nrow, "TY_REPRESENT", this.dsListJoin.getColumn(i, "TY_REPRESENT"));
        				this.dsSaveJoin.setColumn(nrow, "AM_INCOME", this.dsListJoin.getColumn(i, "AM_INCOME"));
        				this.dsSaveJoin.setColumn(nrow, "TY_PAY", this.dsListJoin.getColumn(i, "TY_PAY"));
        				this.dsSaveJoin.setColumn(nrow, "CD_ACQUIRE", this.dsListJoin.getColumn(i, "CD_ACQUIRE"));
        				this.dsSaveJoin.setColumn(nrow, "DT_ACQUIRE", this.dsListJoin.getColumn(i, "DT_ACQUIRE"));
        				this.dsSaveJoin.setColumn(nrow, "TY_SPECIALWORK", this.dsListJoin.getColumn(i, "TY_SPECIALWORK"));
        				this.dsSaveJoin.setColumn(nrow, "CD_SPECIALPENSION", this.dsListJoin.getColumn(i, "CD_SPECIALPENSION"));
        				this.dsSaveJoin.setColumn(nrow, "CD_OFFICE", this.dsListJoin.getColumn(i, "CD_OFFICE"));
        				this.dsSaveJoin.setColumn(nrow, "DS_OFFICE", this.dsListJoin.getColumn(i, "DS_OFFICE"));
        				this.dsSaveJoin.setColumn(nrow, "AM_WAGE", this.dsListJoin.getColumn(i, "AM_WAGE"));
        				this.dsSaveJoin.setColumn(nrow, "TY_SIGN2", this.dsListJoin.getColumn(i, "TY_SIGN2"));
        				this.dsSaveJoin.setColumn(nrow, "DT_ACQUIRE2", this.dsListJoin.getColumn(i, "DT_ACQUIRE2"));
        				this.dsSaveJoin.setColumn(nrow, "TY_REDUCTION", this.dsListJoin.getColumn(i, "TY_REDUCTION"));
        				this.dsSaveJoin.setColumn(nrow, "TY_TRANS", this.dsListJoin.getColumn(i, "TY_TRANS"));
        				this.dsSaveJoin.setColumn(nrow, "TY_ACCOUNT", this.dsListJoin.getColumn(i, "TY_ACCOUNT"));
        				this.dsSaveJoin.setColumn(nrow, "TY_JOB", this.dsListJoin.getColumn(i, "TY_JOB"));
        				this.dsSaveJoin.setColumn(nrow, "DT_ACQUIRE3", this.dsListJoin.getColumn(i, "DT_ACQUIRE3"));
        				this.dsSaveJoin.setColumn(nrow, "TY_SCHOOL", this.dsListJoin.getColumn(i, "TY_SCHOOL"));
        				this.dsSaveJoin.setColumn(nrow, "TY_JOB2", this.dsListJoin.getColumn(i, "TY_JOB2"));
        				this.dsSaveJoin.setColumn(nrow, "CT_FIXEDWORK", this.dsListJoin.getColumn(i, "CT_FIXEDWORK"));
        				this.dsSaveJoin.setColumn(nrow, "TY_CONTRACTWORKER", this.dsListJoin.getColumn(i, "TY_CONTRACTWORKER"));
        				this.dsSaveJoin.setColumn(nrow, "YM_CONTRACT_END", this.dsListJoin.getColumn(i, "YM_CONTRACT_END"));
        				this.dsSaveJoin.setColumn(nrow, "AM_AVG_SALARY", this.dsListJoin.getColumn(i, "AM_AVG_SALARY"));
        				this.dsSaveJoin.setColumn(nrow, "TY_BIGO", this.dsListJoin.getColumn(i, "TY_BIGO"));
        				this.dsSaveJoin.setColumn(nrow, "CD_INSURANCE", this.dsListJoin.getColumn(i, "CD_INSURANCE"));
        				this.dsSaveJoin.setColumn(nrow, "TY_INSURANCE", this.dsListJoin.getColumn(i, "TY_INSURANCE"));
        				this.dsSaveJoin.setColumn(nrow, "DT_ACQUIRE4", this.dsListJoin.getColumn(i, "DT_ACQUIRE4"));
        				this.dsSaveJoin.setColumn(nrow, "TY_SCHOOL2", this.dsListJoin.getColumn(i, "TY_SCHOOL2"));
        				this.dsSaveJoin.setColumn(nrow, "TY_JOB3", this.dsListJoin.getColumn(i, "TY_JOB3"));
        				this.dsSaveJoin.setColumn(nrow, "CT_FIXEDWORK2", this.dsListJoin.getColumn(i, "CT_FIXEDWORK2"));
        				this.dsSaveJoin.setColumn(nrow, "TY_CONTRACTWORKER2", this.dsListJoin.getColumn(i, "TY_CONTRACTWORKER2"));
        				this.dsSaveJoin.setColumn(nrow, "YM_CONTRACT_END2", this.dsListJoin.getColumn(i, "YM_CONTRACT_END2"));
        				this.dsSaveJoin.setColumn(nrow, "AM_AVG_SALARY2", this.dsListJoin.getColumn(i, "AM_AVG_SALARY2"));
        				this.dsSaveJoin.setColumn(nrow, "TY_BIGO2", this.dsListJoin.getColumn(i, "TY_BIGO2"));
        				this.dsSaveJoin.setColumn(nrow, "CD_INSURANCE2", this.dsListJoin.getColumn(i, "CD_INSURANCE2"));
        				this.dsSaveJoin.setColumn(nrow, "TY_INSURANCE2", this.dsListJoin.getColumn(i, "TY_INSURANCE2"));
        				this.dsSaveJoin.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSaveJoin.setColumn(nrow, "IP_ADDR", this.AuthClient.NO_IP);
        				break;
        		}
        	}

        	if (this.dsSaveJoin.rowcount == 0 ) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "saveJoin=dsSaveJoin";
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
        };

        /*
         *	상실 저장 버튼
         */
        this.fnSaveRetire = function() {
        	//그리드 필수항목 체크
        	if (!this.gfnGridValidate(this.dxGridRetire)) return;

        	this.dsSaveRetire.clearData();

        	for (var i = 0; i < this.dsListRetire.rowcount; i++) {
        		var flag = this.gfnGetFlag(this.dsListRetire, i);
        		switch(flag) {
        			case "I":
        			case "U":
        			case "D":
        				var nrow = this.dsSaveRetire.addRow();

        				this.dsSaveRetire.setColumn(nrow, "TY_SAVE", flag);
        				this.dsSaveRetire.setColumn(nrow, "ID_PERSON", this.dsListRetire.getColumn(i, "ID_PERSON"));
        				this.dsSaveRetire.setColumn(nrow, "CD_CORP", this.dsListRetire.getColumn(i, "CD_CORP"));
        				this.dsSaveRetire.setColumn(nrow, "ID_SABUN", this.dsListRetire.getColumn(i, "ID_SABUN"));
        				this.dsSaveRetire.setColumn(nrow, "DT_RETIRE", this.dsListRetire.getColumn(i, "DT_RETIRE"));
        				this.dsSaveRetire.setColumn(nrow, "TY_PUBLIC", this.dsListRetire.getColumn(i, "TY_PUBLIC"));
        				this.dsSaveRetire.setColumn(nrow, "DS_HNAME", this.dsListRetire.getColumn(i, "DS_HNAME"));
        				this.dsSaveRetire.setColumn(nrow, "ID_RESIDENT", this.dsListRetire.getColumn(i, "ID_RESIDENT"));
        				this.dsSaveRetire.setColumn(nrow, "DS_PHONE", this.dsListRetire.getColumn(i, "DS_PHONE"));
        				this.dsSaveRetire.setColumn(nrow, "DT_LOSS", this.dsListRetire.getColumn(i, "DT_LOSS"));
        				this.dsSaveRetire.setColumn(nrow, "CD_LOSS", this.dsListRetire.getColumn(i, "CD_LOSS"));
        				this.dsSaveRetire.setColumn(nrow, "TY_PAY", this.dsListRetire.getColumn(i, "TY_PAY"));
        				this.dsSaveRetire.setColumn(nrow, "DT_LOSS2", this.dsListRetire.getColumn(i, "DT_LOSS2"));
        				this.dsSaveRetire.setColumn(nrow, "CD_LOSS2", this.dsListRetire.getColumn(i, "CD_LOSS2"));
        				this.dsSaveRetire.setColumn(nrow, "AM_AVG_SALARY", this.dsListRetire.getColumn(i, "AM_AVG_SALARY"));
        				this.dsSaveRetire.setColumn(nrow, "AM_YEARLY", this.dsListRetire.getColumn(i, "AM_YEARLY"));
        				this.dsSaveRetire.setColumn(nrow, "CT_YEARLY_MONTH", this.dsListRetire.getColumn(i, "CT_YEARLY_MONTH"));
        				this.dsSaveRetire.setColumn(nrow, "TY_JUNGSAN_PRE", this.dsListRetire.getColumn(i, "TY_JUNGSAN_PRE"));
        				this.dsSaveRetire.setColumn(nrow, "AM_YEARLY_PRE", this.dsListRetire.getColumn(i, "AM_YEARLY_PRE"));
        				this.dsSaveRetire.setColumn(nrow, "CT_YEARLY_MONTH_PRE", this.dsListRetire.getColumn(i, "CT_YEARLY_MONTH_PRE"));
        				this.dsSaveRetire.setColumn(nrow, "TY_LOSS", this.dsListRetire.getColumn(i, "TY_LOSS"));
        				this.dsSaveRetire.setColumn(nrow, "DS_LOSS", this.dsListRetire.getColumn(i, "DS_LOSS"));
        				this.dsSaveRetire.setColumn(nrow, "DT_LOSS3", this.dsListRetire.getColumn(i, "DT_LOSS3"));
        				this.dsSaveRetire.setColumn(nrow, "AM_YEARLY2", this.dsListRetire.getColumn(i, "AM_YEARLY2"));
        				this.dsSaveRetire.setColumn(nrow, "TY_LOSS2", this.dsListRetire.getColumn(i, "TY_LOSS2"));
        				this.dsSaveRetire.setColumn(nrow, "DS_LOSS2", this.dsListRetire.getColumn(i, "DS_LOSS2"));
        				this.dsSaveRetire.setColumn(nrow, "DT_LOSS4", this.dsListRetire.getColumn(i, "DT_LOSS4"));
        				this.dsSaveRetire.setColumn(nrow, "AM_YEARLY3", this.dsListRetire.getColumn(i, "AM_YEARLY3"));
        				this.dsSaveRetire.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        				this.dsSaveRetire.setColumn(nrow, "IP_ADDR", this.AuthClient.NO_IP);
        				break;
        		}
        	}

        	if (this.dsSaveRetire.rowcount == 0 ) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "saveRetire=dsSaveRetire";
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
        };

        /*
         *	엑셀 버튼
         */
        this.fnExcel = function() {
        	this.gfnExcelExport(this.divData.form.tabData.tabindex==0?this.dxGridJoin:this.dxGridRetire);
        };

        /*
         *	출력 버튼
         */
        this.fnPrint = function() {
        };
        /*
         *	리셋 버튼
         */
        this.fnReset = function() {
        	this.ccfCD_CORP.form.CDTextBox.set_value("");
        	this.ccfCD_CORP.form.DSTextBox.set_value("");
        	this.ctclDT_FROM.set_value("");
        	this.ctclDT_TO.set_value("");

        	this.fnSearchInit();
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

         	var validate = true;

        // 	//법인
        // 	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 		validate = false;
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfCD_CORP.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        // 	}

        	//조회기간
        	if (this.gfnIsNull(this.ctclDT_FROM.value)) {
        		this.fnVaidateCallback = function() {
        			this.ctclDT_FROM.setFocus();
        		}
        		this.gfnAlert("조회 시작일을 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	if (this.gfnIsNull(this.ctclDT_TO.value)) {
        		this.fnVaidateCallback = function() {
        			this.ctclDT_TO.setFocus();
        		}
        		this.gfnAlert("조회 종료일을 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	if (this.ctclDT_FROM.value > this.ctclDT_TO.value) {
        		this.fnVaidateCallback = function() {
        			this.ctclDT_FROM.setFocus();
        		}
        		this.gfnAlert("시작일이 종료일보다 클 수 없습니다.", "fnVaidateCallback");
        		return false;
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
        	if (svcID == "select") {
        		if(this.divData.form.tabData.tabindex == 0){ //취득조회
        			this.gfnGridAfterSelect(this.dxGridJoin);
        		}else{
        			this.gfnGridAfterSelect(this.dxGridRetire);//상실 조회
        		}

        		this.fnSetButton();
        	} else if(svcID == "save") {				//저장(취득,상실)
        		if (errorCode == 0) {
        			this.FormBtns.Select.click();
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if(svcID == "selectEdiFileJoin" ){		//EDI 파일 생성 -취득
        		var sDsCorp = this.txtDS_CORP.value;
        		this.gfnExcelExport(this.dxGridEdiFile,"", this.dsSelectEdi.getColumn(0, "DT_FROM")+"_"+sDsCorp+"_취득");
        		this.divSearch.form.txtDS_CORP.set_value('');
        	} else if(svcID == "selectEdiFileRetire" ){		//EDI 파일 생성 - 상실
        		var sDsCorp = this.txtDS_CORP.value;
        		this.gfnExcelExport(this.dxGridEdiFile,"",this.dsSelectEdi.getColumn(0, "DT_FROM")+"_"+sDsCorp+"_상실");
        		this.divSearch.form.txtDS_CORP.set_value('');
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			break;

        		default:
         	}
         	return true;
        };


        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;
        	this.fnSearchInit();
        };

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
         this.fnExtendButtonEvent = function(obj, e) {

        	var tabIdx = this.divData.form.tabData.tabindex;
        	var strSvcId    = "";
        	var inData      = "";

        	switch(obj.id){

        		//대상자 생성
        		case "btnExt_SingoCreate":
        			if (!this.fnSelectValidate()) return false;

        			var param = {
        							CD_CORP:this.ccfCD_CORP.form.CDTextBox.value,
        							DS_CORP:this.ccfCD_CORP.form.DSTextBox.value,
        							DT_FROM:this.ctclDT_FROM.value,
        							DT_TO:this.ctclDT_TO.value,
        							TY_SINGO:tabIdx==0?"J":"R"
        						};

        			this.gfnFormOpen("DAA", "DAA_EDI_SINGO_DLG", "fnPopupCallback", param);
        			break;

        		//EDI 파일생성
        		case "btnExt_EdiSingo":
        			if (!this.fnSelectValidate()) return false;

        			var param = {
        							CD_CORP:this.ccfCD_CORP.form.CDTextBox.value,
        							DS_CORP:this.ccfCD_CORP.form.DSTextBox.value,
        							DT_FROM:this.ctclDT_FROM.value,
        							DT_TO:this.ctclDT_TO.value,
        							TY_SINGO:tabIdx==0?"J":"R"
        						};

        			this.gfnFormOpen("DAA", "DAA_EDI_SINGO_EDI_FILE_DLG", "fnPopupCallback", param);
        			break;
        			break;

        		default:
        	}
         };

        this.fnPopupCallback = function(strId, val) {

        	if(strId.indexOf("DAA_EDI_SINGO_DLG") > 0) {
        		//this.FormBtns.Select.click();
        	}else if(strId.indexOf("DAA_EDI_SINGO_EDI_FILE_DLG") > 0) {
        		//EDI 파일 생성
        		if (val != false) {
        			var json = JSON.parse(val);

        			//EDI 파일 생성//취득
        			this.gfnGridInit(this.dxGridEdiFile, this.dsListEdiFile, "DA", json.TY_SINGO == "J"?"DAA_EDI_SINGO_JOIN":"DAA_EDI_SINGO_RETIRE");

        			this.fnSelectEdiFile(json);
        		}
        	}
        	this.FormBtns.Select.click();
        };
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
        		if(this.divData.form.tabData.tabindex == 0){
        			this.gfnGridClear(this.dxGridJoin);
        		}else{
        			this.gfnGridClear(this.dxGridRetire);
        		}
        	}
        };

        //탭 변경
        this.divData_tabData_onchanged = function(obj,e)
        {
        	var tabIdx = this.divData.form.tabData.tabindex;

        	switch(tabIdx){
        		case 0:
        			break;

        		case 1:
        			break;

        		default:
        	}

        	this.fnSelect();
        };

        this.dsListJoin_onvaluechanged = function(obj,e)
        {
        	this.fnSetButton();
        };

        this.dsListRetire_onvaluechanged = function(obj,e)
        {
        	this.fnSetButton();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.ctclDT_FROM.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divSearch.form.ctclDT_TO.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.tabData.addEventHandler("onchanged",this.divData_tabData_onchanged,this);
            this.dsListJoin.addEventHandler("onvaluechanged",this.dsListJoin_onvaluechanged,this);
            this.dsListRetire.addEventHandler("onvaluechanged",this.dsListRetire_onvaluechanged,this);
        };
        this.loadIncludeScript("DAA_EDI_SINGO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
