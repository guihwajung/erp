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
            this.set_titletext("원천세전자신고");
            this.getSetter("maxwidth").set("400");
            this.getSetter("maxheight").set("370");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"YR_TAX\" type=\"STRING\" size=\"256\"/><Column id=\"YR_PAY\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_INCOME_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_SELFACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SELFACNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DHVPR_ORIGINTAX_SINGO_CREATE</Col></Row><Row><Col id=\"TARGET\">nocorp</Col><Col id=\"SP\">DHXPR_CORP_CODEFIND</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_INCOME_TYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">30</Col><Col id=\"DS_CODE\">사업소득</Col></Row><Row><Col id=\"CD_CODE\">40</Col><Col id=\"DS_CODE\">기타소득</Col></Row><Row><Col id=\"CD_CODE\">50</Col><Col id=\"DS_CODE\">이자배당소득</Col></Row><Row><Col id=\"CD_CODE\">90</Col><Col id=\"DS_CODE\">비거주자 사업.기타소득</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsText", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNoCorp", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("FileDownTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","10",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("원천세 전자신고 생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","0","staTITLE:11","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta05","99","staTITLE:11",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","sta04:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("세무단위");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","sta00:-1","sta05:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta15","0","sta00:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("귀속년도");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta18","sta15:-1","sta01:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","0","sta15:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("지급년도");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta03","sta02:-1","sta18:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","0","sta02:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("제출일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","sta06:-1","sta03:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","0","sta06:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta09","sta08:-1","sta07:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","sta00:5","staTITLE:15",null,"20","20",null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("tclYR_TAX","sta15:5","sta01:4","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("tclYR_PAY","sta02:5","sta18:4","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_ACCOUNT","sta06:5","sta03:4","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_INCOME_TYPE","105","sta07:4","155","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTY_INCOME_TYPE");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnSave","36.00%",null,"50","20",null,"30",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","52.00%",null,"50","20",null,"30",null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_SELFACNT","105","85",null,"20","20",null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("20");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.cfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.cfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.tclYR_TAX.form.TextBox","value","dsList","YR_TAX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.tclYR_PAY.form.TextBox","value","dsList","YR_PAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tclDT_ACCOUNT","value","dsList","DT_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.cboTY_INCOME_TYPE","value","dsList","TY_INCOME_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ccfCD_SELFACNT.form.CDTextBox","value","dsList","CD_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.ccfCD_SELFACNT.form.DSTextBox","value","dsList","DS_SELFACNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DHV_ORIGINTAX_SINGO.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        var context = "/";
        if (nexacro.getEnvironmentVariable("evContextPath") != undefined) {
        	context = nexacro.getEnvironmentVariable("evContextPath");
        }

        this.fileConfig = {
        	host : this.gfnGetServerUrl(),
        	downloadUrl : context + "file/downloadText.do",
        	allowTypes : ["txt"],
        	maxCount : 1,
        	maxSize : "200MB",
        	maxTotalSize : "200MB"
        };

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

        	this.fnGetNoCorp();
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

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.cfCD_CORP = this.divData.form.cfCD_CORP;
        	this.ccfCD_SELFACNT = this.divData.form.ccfCD_SELFACNT;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        // 	this.ccfCD_SELFACNT.CodeFindName = "DHX_CFSELFACNT";
        // 	this.ccfCD_SELFACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        // 	this.ccfCD_SELFACNT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.ccfCD_SELFACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";

        	this.dsList.setColumn(0, "CD_SELFACNT", this.UserInfo.CD_DEPT_SELFACNT);
        	this.dsList.setColumn(0, "DS_SELFACNT", this.UserInfo.DS_DEPT_SELFACNT);
         	this.dsList.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
         	this.dsList.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);
         	this.dsList.setColumn(0, "YR_TAX", this.gfnGetDate().substr(0,4));
        	this.dsList.setColumn(0, "YR_PAY", this.gfnGetDate().substr(0,4));
        	this.dsList.setColumn(0, "DT_ACCOUNT", this.gfnGetDate());
         	this.dsList.setColumn(0, "TY_INCOME_TYPE", "30");
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("CD_DEPT_SELFACNT", "string");
        	this.dsSelect.addColumn("YR_TAX", "string");
        	this.dsSelect.addColumn("DT_ACCOUNT", "string");
        	this.dsSelect.addColumn("TY_INCOME_TYPE", "string");
        	this.dsSelect.addColumn("YR_PAY", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
        */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "select") {

        		trace(this.dsText.saveXML());
        		if (this.dsText.rowcount <= 2) {
        			this.gfnAlert("생성할 자료가 존재하지 않습니다.");
        			return;
        		}
        		else {
        			this.fnFileDownload();

        // 			var GUBUN = "";
        // 			switch(this.dsList.getColumn(0, "TY_INCOME_TYPE")) {
        // 				case "30":
        // 					GUBUN = "F";
        // 					break;
        // 				case "40":
        // 					GUBUN = "G";
        // 					break;
        // 				case "50":
        // 					GUBUN = "B";
        // 					break;
        // 				default:
        // 			}
        //
        // 			var fileManager = {};
        // 			//텍스트로 변환할 DATASET..
        // 			fileManager.DS_TEXT = this.dsText;
        // 			//미리보기 여부 true, false
        // 			fileManager.IS_VISIBLE = false;
        // 			//CELL & ROW 사이 구분자 및 이스케이프 시퀀스.. 예) 줄바꿈 : "\n", 수평탭 : "\t", 수직탭 : "\f" 등 특수문자 및 일반문자..
        // 			fileManager.ES_CELL = "/";
        // 			fileManager.ES_ROW  = "\n";
        // 			//확인영역(TEXTAREA) 수정 가능 여부... true / false(default)
        // 			fileManager.IS_READONLY  = true;
        // 			//Download 시 기본 파일명 지정.. default : TEXT_FILE_DOWNLOAD
        // 			fileManager.NM_FILE  = GUBUN + this.strSaupNo.substr(0, this.strSaupNo.length-3) + "." + this.strSaupNo.substr(this.strSaupNo.length-3, 3);
        // 			//TEXT 적용 할 CELL INDEX 선택.. default : 전체, [] : 전체, [0,3,5] : 선택된 CELL
        // 			fileManager.INX_CELL  = [];
        //
        // 			this.gfnTextManager(fileManager, "fnFileCallback");


        		}
        	}

        	else if (svcID == "nocorp") {
        		var nRow = this.dsNoCorp.findRow("CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        		this.strSaupNo = this.dsNoCorp.getColumn(nRow, "NO_CORP");
        		trace("nocorp 콜백=>" + this.strSaupNo);
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "cfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        	}

        	if (id == "ccfCD_SELFACNT") {	// 세무단위
        		var cdCorp = this.cfCD_CORP.form.CDTextBox.value;
        		if (this.gfnIsNull(cdCorp)) {
        			this.cfCD_CORP.form.CDTextBox.setFocus();
        			this.gfnAlert("법인코드를 먼저 선택하세요.");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP", cdCorp);
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	if (id == "cfCD_CORP") {
        		var arr = codeFindData;
        		if(arr.length > 0) {
        			this.strSaupNo = arr[0]["NO_CORP"];
        		}
        		// this.ccfCD_SELFACNT.form.fnCodeFindClear();
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         this.dsList_oncolumnchanged = function(obj,e)
        {
        };

        // 저장 버튼 클릭
        this.divData_btnSave_onclick = function(obj,e)
        {
        	if(!this.fnSaveValidate()) return;

        	this.dsSelect.clearData();
        	this.dsSelect.addRow();
        	this.dsSelect.setColumn(0, "CD_DEPT_SELFACNT", this.dsList.getColumn(0, "CD_SELFACNT"));
        	this.dsSelect.setColumn(0, "YR_TAX", this.dsList.getColumn(0, "YR_TAX"));
        	this.dsSelect.setColumn(0, "DT_ACCOUNT", this.dsList.getColumn(0, "DT_ACCOUNT"));
        	this.dsSelect.setColumn(0, "TY_INCOME_TYPE", this.dsList.getColumn(0, "TY_INCOME_TYPE"));
        	this.dsSelect.setColumn(0, "YR_PAY", this.dsList.getColumn(0, "YR_PAY"));

        	var strSvcId    = "select";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "select=dsSelect";
        	var outData     = "dsText=select0";
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


        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        this.fnSaveValidate = function() {

        	var strMsg = "";

        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_CORP"))){
        		strMsg += "법인코드는 반드시 입력 하셔야 합니다.\n";
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "YR_TAX"))) {
        		strMsg += "귀속년도는 반드시 입력 하셔야 합니다.\n";
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "YR_PAY"))) {
        		strMsg += "지급년도는 반드시 입력 하셔야 합니다.\n";
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "DT_ACCOUNT"))) {
        		strMsg += "제출일자는 반드시 입력 하셔야 합니다.\n";
        	}
        	if(this.gfnIsNull(this.dsList.getColumn(0, "TY_INCOME_TYPE"))) {
        		strMsg += "구분은 반드시 입력 하셔야 합니다.\n";
        	}

        	if(strMsg.length > 0) {
        		this.gfnAlert(strMsg);
        		return false;
        	}

        	return true;
        }

        this.fnGetNoCorp = function() {
        	this.dsGetNoCorp = new Dataset();


        	this.dsGetNoCorp.addColumn("ID_SABUN", "string");
        	this.dsGetNoCorp.addColumn("TY_GUBUN", "string");
        	this.dsGetNoCorp.addColumn("CN_ROW", "string");
        	this.dsGetNoCorp.addColumn("VALUE", "string");
        	this.dsGetNoCorp.addColumn("MIN_VALUE", "string");

        	this.dsGetNoCorp.clearData();
        	this.dsGetNoCorp.addRow();
        	this.dsGetNoCorp.setColumn(0, "TY_GUBUN", "");
        	this.dsGetNoCorp.setColumn(0, "CN_ROW", "");
        	this.dsGetNoCorp.setColumn(0, "VALUE", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsGetNoCorp.setColumn(0, "MIN_VALUE", "");
        	this.dsGetNoCorp.setColumn(0, "ID_SABUN", this.AuthClient.ID_USER);

        	var strSvcId    = "nocorp";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "nocorp=dsGetNoCorp";
        	var outData     = "dsNoCorp=nocorp0";
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

        this.fnFileDownload = function () {
        	if (this.dsText.rowcount <= 0) {
        		return false;
        	}

        	var data="";
        	for(var i=0;i<this.dsText.rowcount;i++){
        		data = data + this.dsText.getColumn(i,"LIST");
        		if(i == this.dsText.rowcount -1){
        			;
        		}else{
        			data = data + "\n";
        		}
        	}
        	//trace("data==>", data);

        	var GUBUN = "";
        	switch(this.dsList.getColumn(0, "TY_INCOME_TYPE")) {
        		case "30":
        			GUBUN = "F";
        			break;
        		case "40":
        			GUBUN = "G";
        			break;
        		case "50":
        			GUBUN = "B";
        			break;
        		default:
        	}

        	var sFilename = GUBUN + this.strSaupNo.substr(0, this.strSaupNo.length-3) + "." + this.strSaupNo.substr(this.strSaupNo.length-3, 3);
        	var sFilecont = data;
        	var encodeFileName = encodeURIComponent(sFilename);

        	var surl = this.fileConfig.host+ this.fileConfig.downloadUrl; // + encodeFileName;
        	this.FileDownTransfer00.set_url(surl);
        	this.FileDownTransfer00.setPostData("fileCont", sFilecont);
        	this.FileDownTransfer00.setPostData("fileName", encodeFileName);
        	if( system.navigatorname =="nexacro"){
        		this.FileDownTransfer00.set_downloadfilename(sFilename);
        	}
        	this.FileDownTransfer00.download();
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.btnSave.addEventHandler("onclick",this.divData_btnSave_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("DHV_ORIGINTAX_SINGO.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
