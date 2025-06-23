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
            this.set_titletext("계정대체전표발행");
            this.getSetter("maxwidth").set("380");
            this.getSetter("maxheight").set("320");
            if (Form == this.constructor)
            {
                this._setFormPosition(380,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT_ACNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">slip</Col><Col id=\"SP\">DHAPR_ACCOUNTREPLACE_AUTOSLIP2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_FLAG", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">A</Col><Col id=\"VALUE\">계정     </Col></Row><Row><Col id=\"CODE\">C</Col><Col id=\"VALUE\">원가</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","0","-10",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("계정대체전표발행");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","25",null,"147","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg3","99","1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","99","staBg3:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_ACNT","0","30","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("대체회계일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACCOUNT","staCD_DEPT_ACNT:6","36","95","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("false");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_FROM","0","staCD_DEPT_ACNT:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_text("대체구분");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg","99","staBg4:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_ACCOUNT","0","staDT_FROM:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("대체계정");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staCD_ACCOUNT:-1","staCD_ACCOUNT:-30",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("회계일구분");
            obj.set_cssclass("sta_WF_tablelabelTE");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_ACCOUNT","staCD_ACCOUNT:4","93",null,"20","4",null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_FLAG","staDT_FROM:9","64","231","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            obj.set_innerdataset("dsTY_FLAG");
            obj.set_text("계정");
            obj.set_value("A");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","staCD_CORP:9","6","231","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divData_form_rdoTY_GUBUN_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_GUBUN_innerdataset", obj);
            divData_form_rdoTY_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">원회계일</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">특정일</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_GUBUN_innerdataset);
            obj.set_text("생성회계일");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_DEPT_BE","0","staCD_ACCOUNT:-1","100","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("대체귀속부서");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2_00","99","staBg2:-1",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_DEPT_BE","staCD_DEPT_BE:4","122",null,"20","4",null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DHX_CFACNTUNIT");
            obj.getSetter("CDTextWidth").set("70");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("14");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_enable("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns",null,"divData:30","110","27","121",null,null,null,null,null,this);
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
            obj = new BindItem("item2","divData.form.ccfCD_ACCOUNT.form.CDTextBox","value","dsList","CD_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.ccfCD_ACCOUNT.form.DSTextBox","value","dsList","DS_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.rdoTY_FLAG","value","dsList","TY_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ctclDT_ACCOUNT","value","dsList","DT_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.rdoTY_GUBUN","value","dsList","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.ccfCD_DEPT_BE.form.CDTextBox","value","dsList","CD_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.ccfCD_DEPT_BE.form.DSTextBox","value","dsList","DS_DEPT_ACNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DHA_ACCOUNTREPLACE_SLIP.xfdl", function() {
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
        		this.dsList.setColumn(0, "CD_CORP", frame.CD_CORP);
        		this.dsList.setColumn(0, "DS_CORP", frame.DS_CORP);
        		this.dsList.setColumn(0, "TY_FLAG"   , frame.TY_FLAG);
        		this.dsList.setColumn(0, "TY_GUBUN"  , frame.TY_GUBUN);
        		//this.dsList.setColumn(0, "NO_ID"	 , frame.NO_ID);
        		if (frame.TY_GUBUN =="Y")
        		{ this.ctclDT_ACCOUNT.set_enable(false); }
        		else
        		{ this.ctclDT_ACCOUNT.set_enable(true); }
        		if (frame.TY_FLAG =="A")
        		{ this.ccfCD_DEPT_BE.set_enable(false); }
        		else
        		{ this.ccfCD_DEPT_BE.set_enable(true); }

        	} else {
        		this.dsList.setColumn(0, "CD_CORP", frame.CD_CORP);
        		this.dsList.setColumn(0, "DS_CORP", frame.DS_CORP);
        		this.dsList.setColumn(0, "TY_FLAG"   , "C");
        		this.dsList.setColumn(0, "TY_GUBUN"   , "Y");
        		var sCurrentDate = this.gfnGetDate();
        	}

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//this.rdoSN_GUBUN = this.divData.form.rdoSN_GUBUN; 	// 구분 (1차, 2차)

        	this.rdoTY_FLAG = this.divData.form.rdoTY_FLAG;
        	this.ccfCD_ACCOUNT = this.divData.form.ccfCD_ACCOUNT;
        	this.ctclDT_ACCOUNT = this.divData.form.ctclDT_ACCOUNT;
        	this.ccfCD_DEPT_BE  = this.divData.form.ccfCD_DEPT_BE;
        	this.staCD_ACCOUNT  = this.divData.form.staCD_ACCOUNT;
        	this.btnOk          = this.divData.form.btnOk;
        	this.btnCancle      = this.divData.form.btnCancle;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//코드파인드

         	this.ccfCD_DEPT_BE.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";
         	this.ccfCD_ACCOUNT.BeforeUserDataSetParam  = "fnBeforeUserDataSetParam";


        	this.ccfCD_ACCOUNT.CodeFindName = "DHX_CFACCOUNT";

        	this.dsList.addEventHandler("onvaluechanged", this.dsList_onvaluechanged, this);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	//전표발행용 데이터셋
        	this.dsIssueSlip = new Dataset();

        	this.dsIssueSlip.addColumn("CD_CORP", "string");
        	this.dsIssueSlip.addColumn("CD_DEPT_BE", "string");
        	this.dsIssueSlip.addColumn("CD_DEPT_BH", "string");
        	this.dsIssueSlip.addColumn("NO_ID", "string");
        	this.dsIssueSlip.addColumn("TY_FLAG", "string");
        	this.dsIssueSlip.addColumn("CD_ACCOUNT", "string");
        	this.dsIssueSlip.addColumn("TY_GUBUN", "string");
        	this.dsIssueSlip.addColumn("DT_ACCOUNT", "string");
        	this.dsIssueSlip.addColumn("ID_USER", "string");


        }

        this.btnOk_onclick = function(obj,e)
        {

        	if(this.gfnIsNull(this.ccfCD_ACCOUNT.form.CDTextBox.value)) {
        		this.gfnAlert("대체계정은 반드시 입력 하셔야 합니다.");
        		this.ccfCD_ACCOUNT.form.CDTextBox.setFocus();
        		return false;
        	}

        	if(this.dsList.getColumn(0, "TY_GUBUN") == "N"  && this.gfnIsNull(this.dsList.getColumn(0, "DT_ACCOUNT"))) {
        		this.gfnAlert("회계일자는 반드시 입력 하셔야 합니다.");
        		this.ctclDT_ACCOUNT.setFocus();
        		return false;
        	}

        	this.fnAutoSlip();
        };


        this.fnAutoSlip = function() {

        	this.dsIssueSlip.clearData();

        	var nrow = this.dsIssueSlip.addRow();
        	this.dsIssueSlip.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsIssueSlip.setColumn(nrow, "CD_DEPT_BE", this.dsList.getColumn(0, "CD_DEPT_ACNT"));
        	this.dsIssueSlip.setColumn(nrow, "CD_DEPT_BH", this.AuthClient.CD_DEPT);
        	this.dsIssueSlip.setColumn(nrow, "NO_ID", this.getOwnerFrame().NO_ID.join("|"));
        	this.dsIssueSlip.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(0, "TY_GUBUN"));
        	this.dsIssueSlip.setColumn(nrow, "DT_ACCOUNT", this.dsList.getColumn(0, "DT_ACCOUNT"));
        	this.dsIssueSlip.setColumn(nrow, "TY_FLAG", this.dsList.getColumn(0, "TY_FLAG"));
        	this.dsIssueSlip.setColumn(nrow, "CD_ACCOUNT", this.dsList.getColumn(0, "CD_ACCOUNT"));
        	this.dsIssueSlip.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsIssueSlip.rowcount == 0) return;

        	var strSvcId    = "slip";
        	var strSvcType  = "savesel";
        	var inProc		= "_dsProc";
        	var inData      = "slip=dsIssueSlip";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }


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

        	if (id == "ccfCD_DEPT_BE") {

        		dsUserParam.setColumn(nrow, "CD_DEPT_UPPER"	, "");						//상위부서
        		dsUserParam.setColumn(nrow, "YN_SLIPACCEPT"	, "");						//전표발행여부
        		dsUserParam.setColumn(nrow, "CD_CORP"		, sCdCorp);					//법인코드
        		dsUserParam.setColumn(nrow, "YN_USE"		, "Y");						//사용여부
        		dsUserParam.setColumn(nrow, "GR_DEPT_ACNT"	, "");						//현장/본사여부
        		dsUserParam.setColumn(nrow, "LEVCD_DEPT_UPPER", this.AuthClient.LEVCD_DEPT_UPPER);

        	}
        	if (id == "ccfCD_ACCOUNT") {
         		dsUserParam.setColumn(nrow, "CD_CORP", sCdCorp);
        // 		dsUserParam.setColumn(nrow, "YN_TRIAL", "Y");
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

        	if (svcID == "slip") {
        		if (errorCode == 0) {
        			this.fnClose = function() {
        			this.getParentContext().close(true);
        		}
        		this.gfnAlert("작업이 완료되었습니다.", "fnClose");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
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

        		//this.dsList.set_enableevent(false);
        		if(e.columnid =="TY_FLAG") {
        			if(e.newvalue == "A"){
        				this.ccfCD_ACCOUNT.CodeFindName = "DHX_CFACNT_SLIP_AND_TRIAL";
        				this.dsList.setColumn(0, "CD_ACCOUNT", "");
        				this.dsList.setColumn(0, "DS_ACCOUNT", "");
        				this.dsList.setColumn(0, "CD_DEPT_ACNT", "");
        				this.dsList.setColumn(0, "DS_DEPT_ACNT", "");
        				this.staCD_ACCOUNT.set_text("대체계정");
        				this.ccfCD_DEPT_BE.set_enable(false);
        			}else{
        				this.ccfCD_ACCOUNT.CodeFindName = "DHX_CFACCOST";
        				this.dsList.setColumn(0, "CD_ACCOUNT", "");
        				this.dsList.setColumn(0, "DS_ACCOUNT", "");
        				this.dsList.setColumn(0, "CD_DEPT_ACNT", "");
        				this.dsList.setColumn(0, "DS_DEPT_ACNT", "");
        				this.staCD_ACCOUNT.set_text("대체원가");
        				this.ccfCD_DEPT_BE.set_enable(true);
        			}
        		}else if (e.columnid =="TY_GUBUN") {
        			if(e.newvalue == "Y"){
        				this.ctclDT_ACCOUNT.set_enable(false);
        				this.dsList.setColumn(0, "DT_ACCOUNT", "");
        			} else {
        				this.ctclDT_ACCOUNT.set_enable(true);
        			}
        		}
        		//this.dsList.set_enableevent(true);
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
        this.loadIncludeScript("DHA_ACCOUNTREPLACE_SLIP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
