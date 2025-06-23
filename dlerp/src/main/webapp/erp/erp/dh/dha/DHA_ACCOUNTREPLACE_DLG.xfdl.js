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
            this.set_titletext("계정대체자료생성");
            this.getSetter("maxwidth").set("380");
            this.getSetter("maxheight").set("290");
            if (Form == this.constructor)
            {
                this._setFormPosition(380,220);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DHAPR_ACCOUNTREPLACE_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","0","-10",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("계정대체자료생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","25",null,"125","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","0","30","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("귀속부서");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_FROM","0","staCD_DEPT_ACNT:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_text("집계회계일자");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg","staCD_DEPT_ACNT:-1","59",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_ACCOUNT","0","staDT_FROM:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("집계원가");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staCD_ACCOUNT:-1","staCD_ACCOUNT:-30",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabelTE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","99","staCD_CORP:-30",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:4","6",null,"20","4",null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFCORP");
            obj.getSetter("CDTextWidth").set("70");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","99","staCD_DEPT_ACNT:-30",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_ACNT","104","staCD_DEPT_ACNT:-25",null,"20","4",null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("90");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_FROM","staDT_FROM:4","64","95","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_TO","ctclDT_FROM:-4","65","30.0","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_TO","staDT_TO:-1","64","95","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACCOUNT","staCD_ACCOUNT:4","93",null,"20","4",null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFACCOST");
            obj.getSetter("CDTextWidth").set("70");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns",null,"divData:20","110","27","121",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle",null,"0","52","26","0",null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOk","0","0","52","26",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divData.form.ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ccfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.ccfCD_DEPT_ACNT.form.CDTextBox","value","dsList","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.ccfCD_DEPT_ACNT.form.DSTextBox","value","dsList","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.ctclDT_FROM","value","dsList","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ctclDT_TO","value","dsList","DT_TO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ccfCD_ACCOUNT.form.CDTextBox","value","dsList","CD_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ccfCD_ACCOUNT.form.DSTextBox","value","dsList","DS_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_ACCOUNTREPLACE_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetVariable();
         	this.fnSetEvent();
         	this.fnSetParameter();

        	var frame = this.getOwnerFrame();

        	if(!this.gfnIsNull(frame.CD_CORP)) {
        		this.ccfCD_CORP.form.CDTextBox.set_value(frame.CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(frame.DS_CORP);
        		this.ccfCD_DEPT_ACNT.form.CDTextBox.set_value(frame.CD_DEPT_ACNT);
        		this.ccfCD_DEPT_ACNT.form.DSTextBox.set_value(frame.DS_DEPT_ACNT);
        		this.ctclDT_FROM.set_value(frame.DT_FROM);
        		this.ctlDT_TO.set_value(frame.DT_TO);
        		this.ccfCD_ACCOUNT.form.CDTextBox.set_value("4300");
        		this.ccfCD_ACCOUNT.form.DSTextBox.set_value("판매관리비");
        	} else {
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        		var sCurrentDate = this.gfnGetDate();
        		this.ctclDT_FROM.set_value((sCurrentDate.substr(0,6)+"01"));
        		this.ctclDT_TO.set_value(sCurrentDate);
        	}
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//this.rdoSN_GUBUN = this.divData.form.rdoSN_GUBUN; 	// 구분 (1차, 2차)

        	this.ccfCD_CORP      = this.divData.form.ccfCD_CORP;
        	this.ccfCD_DEPT_ACNT   = this.divData.form.ccfCD_DEPT_ACNT;
        	this.ctclDT_FROM = this.divData.form.ctclDT_FROM;
        	this.ctlDT_TO = this.divData.form.ctclDT_TO;
        	this.ccfCD_ACCOUNT = this.divData.form.ccfCD_ACCOUNT;

        	this.btnOk          = this.divData.form.btnOk;
        	this.btnCancle      = this.divData.form.btnCancle;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//코드파인드
        	this.ccfCD_CORP.AfterCDTextChanged       = "fnAfterCDTextChanged";
        	this.ccfCD_CORP.BeforeUserDataSetParam       = "fnBeforeUserDataSetParam";
        	this.ccfCD_DEPT_ACNT.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";
        	this.ccfCD_ACCOUNT.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";
        	//this.ccfCD_ACCOUNT.AfterCDTextChanged      = "fnAfterCDTextChanged";

        	this.dsList.addEventHandler("onvaluechanged", this.dsList_onvaluechanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("CD_DEPT_ACNT", "string");
        	this.dsCreate.addColumn("DT_FROM", "string");
        	this.dsCreate.addColumn("DT_TO", "string");
        	this.dsCreate.addColumn("CD_COST", "string");
        	this.dsCreate.addColumn("ID_USER", "string");

        }

        this.btnOk_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.gfnAlert("법인코드는 반드시 입력 하셔야 합니다.");
        		this.ccfCD_CORP.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.ccfCD_DEPT_ACNT.form.CDTextBox.value)) {
        		this.gfnAlert("귀속부서는 반드시 입력 하셔야 합니다.");
        		this.ccfCD_DEPT_ACNT.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "DT_FROM")) || this.gfnIsNull(this.dsList.getColumn(0, "DT_TO"))) {
        		this.gfnAlert("회계일자는 반드시 입력 하셔야 합니다.");
        		this.ctclDT_FROM.setFocus();
        		return false;
        	}
        		trace(" btnOk_onclick=>");
        	if(this.gfnIsNull(this.ccfCD_ACCOUNT.form.CDTextBox.value)) {
        		this.gfnAlert("집계계정은 반드시 입력 하셔야 합니다.");
        		this.ccfCD_ACCOUNT.form.CDTextBox.setFocus();
        		return false;
        	}

        	var dtFromDate = this.dsList.getColumn(0, "DT_FROM");
        	var dtToDate   = this.dsList.getColumn(0, "DT_TO");

         	if(dtFromDate > dtToDate) {
         		this.gfnAlert("일자가 잘못 입력 되었습니다.");
        		this.ctclDT_TO.setFocus();
         		return false;
         	}

        	this.fnCreate();
        };

        this.fnCreate = function()
        {

        	this.dsCreate.clearData();

        	var nrow = this.dsCreate.addRow();

        	this.dsCreate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsCreate.setColumn(nrow, "CD_DEPT_ACNT"  , this.dsList.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsCreate.setColumn(nrow, "DT_FROM"  , this.dsList.getColumn(0, "DT_FROM"));
        	this.dsCreate.setColumn(nrow, "DT_TO"  , this.dsList.getColumn(0, "DT_TO"));
        	this.dsCreate.setColumn(nrow, "CD_COST"  , this.dsList.getColumn(0, "CD_ACCOUNT"));
        	this.dsCreate.setColumn(nrow, "ID_USER"     , this.AuthClient.ID_USER);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsCreate";
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
        };

        this.btnCancle_onclick = function(obj,e)
        {
        	// 취소
        	this.getParentContext().close(false);
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	저장 Validate
         */
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	var sCdCorp = this.dsList.getColumn(0, "CD_CORP");
        	if (id == "ccfCD_CORP") {
        		dsUserParam.setColumn(nrow, "ID_SABUN", this.AuthClient.ID_USER);
        		//dsUserParam.setColumn(nrow, "LEVLV_DEPT_ACNT", this.UserInfo.LEVLV_DEPT_ACNT);
        		//dsUserParam.setColumn(nrow, "LEVCD_DEPT_ACNT", this.UserInfo.LEVCD_DEPT_ACNT);
        	}
        	if (id == "ccfCD_DEPT_ACNT") {

        		if(this.gfnIsNull(sCdCorp)){
        			this.gfnAlert("법인코드를 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, sCdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);

        	}
        	if (id == "ccfCD_ACCOUNT") {
        		//dsUserParam.setColumn(nrow, "CD_CORP", sCdCorp);
        		//dsUserParam.setColumn(nrow, "YN_TRIAL", "Y");
        	}
        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {

        	var arr = codeFindData;

        	switch(id){
        		case "ccfCD_CORP" :
        			this.dsList.setColumn(0,"CD_DEPT_ACNT","");
        			this.dsList.setColumn(0,"DS_DEPT_ACNT","");

        		break;
        	}
        };

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	//trace("fnCallback >>>> svcID:["+svcID+"] errorMsg:["+errorMsg+"]");

        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	if(svcID == "save") {
        		this.fnClose = function() {
        			this.getParentContext().close(true);
        		}
        		this.gfnAlert("작업이 완료되었습니다.", "fnClose");
        	}

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/


        /*
         *	조회 조건 변경시 초기화
         */
        this.dsList_onvaluechanged = function(obj,e)
        {
        	//trace("dsList_onvaluechanged >>>"+ e.columnid);
        	if(e.oldvalue != e.newvalue) {

        // 		this.dsList.set_enableevent(false);
        //
        // 		this.dsList.set_enableevent(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.divBtns.form.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
        };
        this.loadIncludeScript("DHA_ACCOUNTREPLACE_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
