(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAV_YEARENDSTATUS_DLG");
            this.set_titletext("연말정산 현황표");
            this.getSetter("maxwidth").set("370");
            this.getSetter("maxheight").set("225");
            if (Form == this.constructor)
            {
                this._setFormPosition(340,170);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">report2014</Col><Col id=\"SP\">DAVPR_YEARENDSTATUS_SELECT2014</Col></Row><Row><Col id=\"SP\">DAVPR_YEARENDSTATUS_SELECT</Col><Col id=\"TARGET\">report</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","0","336","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("연말정산 현황표(출력)");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","2","137","334","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","183","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","93","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","93","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("법인코드");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","86","93","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","98","240","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.addChild(obj.name, obj);

            obj = new Static("staYN_MID","0","35","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("작업구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","86","35","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staWORK_BASE","0","64","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("적용년도");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta07","86","64","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Div("ctclWORK_BASE","92","69","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("onchanged").set("fnSearchInit");
            obj.set_async("false");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.addChild(obj.name, obj);

            obj = new Combo("cboYN_MID","92","40","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_visible("true");
            var cboYN_MID_innerdataset = new nexacro.NormalDataset("cboYN_MID_innerdataset", obj);
            cboYN_MID_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">연말정산</Col><Col id=\"codecolumn\">N</Col></Row><Row><Col id=\"datacolumn\">중도정산</Col><Col id=\"codecolumn\">Y</Col></Row></Rows>");
            obj.set_innerdataset(cboYN_MID_innerdataset);
            obj.set_text("연말정산");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAV_YEARENDSTATUS_DLG.xfdl", function() {
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

        	//적용년도(현재)
        	this.ctclWORK_BASE.form.TextBox.set_value(this.gfnGetDate().substr(0,4) - 1);

        	// 법인코드 및 법인명 기본세팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

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

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

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

        	//적용년도
        	if (this.gfnIsNull(this.ctclWORK_BASE.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ctclWORK_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("적용년도를 입력하세요.");
        		return false;
        	}

        	//법인
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
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
        		trace(this.dsList.saveXML());
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        			break;

        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

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

        this.btnOK_onclick = function(obj,e)
        {
        	if(!this.fnSelectValidate()) return false;

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("YN_MID", "string");
        	this.dsReport.addColumn("YY_BASE", "string");
        	this.dsReport.addColumn("CD_CORP", "string");
        	this.dsReport.addColumn("NO_APPLY", "int");

        	this.dsReport.clearData();
        	var nrow = this.dsReport.addRow();

        	this.dsReport.setColumn(nrow, "YN_MID", this.cboYN_MID.value);
        	this.dsReport.setColumn(nrow, "YY_BASE", this.ctclWORK_BASE.form.TextBox.value);
        	this.dsReport.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsReport.setColumn(nrow, "NO_APPLY", 1);

        	//2015-01-21 By김현성 : 2014귀속연말정산변경 소득공제 -> 세액공제로 법개정적용
        	var inDataVal = "";
        	var reportpathVal = "";
        	if(this.ctclWORK_BASE.form.TextBox.value.substr(0,4) >= 2014){
        		inDataVal = "report2014=dsReport";
        		reportpathVal = "/da/dav/DAV_YEARENDSTATUS2014.ozr";
        	}else{	// 법개정 적용전 버젼인 2014년도 이전 버젼이 부영레포트로 만들어져있지 않음(2014 이후 버젼만 있음)
        		inDataVal = "report=dsReport";
        		reportpathVal = "/da/dav/DAV_YEARENDSTATUS.ozr";
        	}


        	var inProc		= "_dsProc";
        	var inParam 	= "";	//"params=dsReportParam"
        	var inData      = inDataVal;
        	var reportpath  = reportpathVal;

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);

        	/*
        	var strSvcId    = "report";
         	var strSvcType  = "select";
         	var inProc		= "_dsProc";
        	var inData      = "report=dsReport";
        	var outData     = "dsList=report0";
        	var strArg 		= "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
         						callBackFnc); // 통신방법 정의 [생략가능]
        	*/

        	//this.getParentContext().close(true);
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
            this.cboYN_MID.addEventHandler("onitemchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DAV_YEARENDSTATUS_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
