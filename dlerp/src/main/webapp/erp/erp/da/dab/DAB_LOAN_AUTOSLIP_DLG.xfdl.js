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
            this.set_titletext("공조대출 전표발행");
            this.getSetter("maxwidth").set("378");
            this.getSetter("maxheight").set("312");
            if (Form == this.constructor)
            {
                this._setFormPosition(338,237);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"YM_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JIGUB\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YM_LOAN\"/><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"DT_ACCOUNT\"/><Col id=\"DT_JIGUB\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">apprSangA</Col><Col id=\"SP\">DABPR_LOAN_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">apprCancelA</Col><Col id=\"SP\">DABPR_LOAN_AUTOSLIP_CANCEL</Col></Row><Row><Col id=\"TARGET\">apprInitA</Col><Col id=\"SP\">DABPR_LOAN_XAUTOSLIP_INIT</Col></Row><Row><Col id=\"SP\">DABPR_LOAN_REPAY_AUTOSLIP</Col><Col id=\"TARGET\">apprSangB</Col></Row><Row><Col id=\"SP\">DABPR_LOAN_REPAY_AUTOSLIP_CANCEL</Col><Col id=\"TARGET\">apprCancelB</Col></Row><Row><Col id=\"SP\">DABPR_LOAN_REPAY_XAUTOSLIP_INIT</Col><Col id=\"TARGET\">apprInitB</Col></Row><Row><Col id=\"TARGET\">slipAprv</Col><Col id=\"SP\">DHAPR_NSLIP_APRV_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequiredA", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">YM_LOAN</Col><Col id=\"DS_FIELD\">대출년월</Col></Row><Row><Col id=\"CD_FIELD\">CD_CORP</Col><Col id=\"DS_FIELD\">법인</Col></Row><Row><Col id=\"CD_FIELD\">DT_ACCOUNT</Col><Col id=\"DS_FIELD\">회계일자</Col></Row><Row><Col id=\"CD_FIELD\">DT_JIGUB</Col><Col id=\"DS_FIELD\">지급일자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequiredB", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">CD_CORP</Col><Col id=\"DS_FIELD\">법인</Col></Row><Row><Col id=\"CD_FIELD\">DT_ACCOUNT</Col><Col id=\"DS_FIELD\">회계일자</Col></Row><Row><Col id=\"CD_FIELD\">DT_JIGUB</Col><Col id=\"DS_FIELD\">상환일자</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequiredA2", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">YM_LOAN</Col><Col id=\"DS_FIELD\">대출년월</Col></Row><Row><Col id=\"CD_FIELD\">CD_CORP</Col><Col id=\"DS_FIELD\">법인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequiredB2", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">CD_CORP</Col><Col id=\"DS_FIELD\">법인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAppType", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_TRADE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_TRADE_CNC\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APRV\" type=\"STRING\" size=\"256\"/><Column id=\"NO_APRV_CNC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle1","0","-10",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("결재상신 정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","staTitle1:0",null,"166","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staBgYmLoan","79","33",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staGubun","0","0","80","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablelabelTE");
            obj.set_text("결재구분");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgGubun","79","0",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYmLoan","0","33","80","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_text("대출년월");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYM_LOAN","84","38","100","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorp","0","66","80","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorpBg","79","66",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","84","71","250","24",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFCORP_STD");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDtAccount","0","99","80","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDtAccount","79","99",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_ACCOUNT","84","104","120","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDtJiGub","0","132","80","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("지급일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBGDtJiGub","79","132",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_JIGUB","84","137","120","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoGUBUN","84","5","114","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("width");
            var divData_form_rdoGUBUN_innerdataset = new nexacro.NormalDataset("divData_form_rdoGUBUN_innerdataset", obj);
            divData_form_rdoGUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">대여</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">상환</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoGUBUN_innerdataset);
            obj.set_text("재직");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns",null,null,"200","26","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE",null,"0","52","26","0",null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","92","0","52","26",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_action");
            this.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ctclYM_LOAN.form.TextBox","value","dsList","YM_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.ccfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tclDT_ACCOUNT","value","dsList","DT_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.tclDT_JIGUB","value","dsList","DT_JIGUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.rdoGUBUN","value","dsList","GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_LOAN_AUTOSLIP_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	this.fnSetDisplay();

        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
         ************************************************************************/
        this.fnSetButton = function() {
        	// Select, Add, Del, Save, Excel, Print
        	// SubSelect, SubAdd, SubDel, SuubSave, SubExcel
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.rdoGUBUN      = this.divData.form.rdoGUBUN.text;
        	this.ctclYM_LOAN   = this.divData.form.ctclYM_LOAN;
        	this.ccfCD_CORP    = this.divData.form.ccfCD_CORP;
        	this.tclDT_ACCOUNT = this.divData.form.tclDT_ACCOUNT;
        	this.tclDT_JIGUB   = this.divData.form.tclDT_JIGUB;
        	this.staDtJiGub    = this.divData.form.staDtJiGub;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        };

        // 부모창에서 받아온것 셋팅
        this.fnSetDisplay = function() {

        	var frame = this.getOwnerFrame();
        	this.dsList.set_enableevent(false);
        	if( frame.GUBUN == "02") {
        		this.staTitle1.set_text("취소결재상신 정보");
        	} else if( frame.GUBUN == "03") {
        		this.staTitle1.set_text("결재상신 초기화");
        	}
        	this.dsList.setColumn(0, "GUBUN"  , "A");
        	this.dsList.setColumn(0, "YM_LOAN", frame.YM_LOAN);
        	this.dsList.setColumn(0, "CD_CORP", frame.CD_CORP);
        	this.dsList.setColumn(0, "DS_CORP", frame.DS_CORP);

        	if( frame.GUBUN == "02" || frame.GUBUN == "03"){
        		this.tclDT_ACCOUNT.set_readonly(true);
        		this.tclDT_JIGUB.set_readonly(true);
        	}
        	this.dsList.set_enableevent(true);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 결재상신
        	this.dsApproval = new Dataset();
        	this.dsApproval.addColumn("CD_CORP"   , "STRING");
        	this.dsApproval.addColumn("YM_LOAN"   , "STRING");
        	this.dsApproval.addColumn("DT_ACCOUNT", "STRING");
        	this.dsApproval.addColumn("DT_JIGUB"  , "STRING");
        	this.dsApproval.addColumn("ID_TRANS"  , "STRING");
        	this.dsApproval.addColumn("NO_APRVOUT", "INT");

        	// 취소결재상신
        	this.dsApprCnc = new Dataset();
        	this.dsApprCnc.addColumn("CD_CORP"   , "STRING");
        	this.dsApprCnc.addColumn("YM_LOAN"   , "STRING");
        	this.dsApprCnc.addColumn("DT_JIGUB"  , "STRING");
        	this.dsApprCnc.addColumn("ID_TRANS"  , "STRING");
        	this.dsApprCnc.addColumn("NO_APRVOUT", "INT");

        	// 결재상태초기화
        	this.dsSlipInit = new Dataset();
        	this.dsSlipInit.addColumn("CD_CORP"  , "STRING");
        	this.dsSlipInit.addColumn("YM_LOAN"  , "STRING");
        	this.dsSlipInit.addColumn("DT_JIGUB" , "STRING");
        	this.dsSlipInit.addColumn("ID_TRANS" , "STRING");


        	// 결재상신전표조회
        	this.dsAprvSlipSelect = new Dataset();
        	this.dsAprvSlipSelect.addColumn("CD_CORP", "string");
        	this.dsAprvSlipSelect.addColumn("NO_APRV", "int");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {

        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg, strArg)
        {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return false;
        	}

        	switch(svcID) {
        		case "apprSangA" :
        		case "apprSangB" :
        			this.fnSlipAprv(svcID, this.dsApproval);
        			break;
        		case "apprCancelA" :
        		case "apprCancelB" :
        			this.fnSlipAprv(svcID, this.dsApprCnc);
        			break;
        		case "aprvDoc":		// 저장
        			var json = this.gfnArgsToJson(strArg);
        			trace("json.NO_APRV = " + json.NO_APRV)
        			var oParam = {
        				NO_APRV : json.NO_APRV,
        				ID_DOORAY_TYPE : this.dsResult.getColumn(0, "ID_DOORAY_TYPE")
        			}

        			this.gfnOpenDoorayAppr("AP_REQ_URL", oParam, "fnDoorayCallback");
        			break;
        		case "apprInitA" :
        		case "apprInitB" :
        			this.getParentContext().close(true);

        		default:
        	}
        };

        this.fnDoorayCallback = function (svcId, sRtn)
        {
        	this.getParentContext().close(true);
        };
        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         // 확인 버튼
        this.btnOk_onclick = function(obj,e)
        {
        	var sGubun = "결재상신";
        	if( this.getOwnerFrame().GUBUN == "02" ) {
        		sGubun = "취소결재상신"
        	} else if( this.getOwnerFrame().GUBUN == "03" ) {
        		sGubun = "결재상신 초기화"
        	}
        	this.gfnConfirm(sGubun + " 하시겠습니까?", function (strId, val){
        		if(val){
        			var strSvcId    = "";
        			var strSvcType  = "";
        			var inProc		= "";
        			var inData      = "";
        			var outData     = "";

        			if( this.getOwnerFrame().GUBUN == "01" ) {
        				if(this.dsList.getColumn(0, "GUBUN") == "A" && !this.gfnDataValidate(this.dsList,this.dsRequiredA)) return;
        				if(this.dsList.getColumn(0, "GUBUN") == "B" && !this.gfnDataValidate(this.dsList,this.dsRequiredB)) return;

        				this.dsApproval.clearData();

        				var nrow = this.dsApproval.addRow();
        				this.dsApproval.setColumn(nrow, "CD_CORP"   , this.dsList.getColumn(0, "CD_CORP"));
        				this.dsApproval.setColumn(nrow, "YM_LOAN"   , this.dsList.getColumn(0, "YM_LOAN"));
        				this.dsApproval.setColumn(nrow, "DT_ACCOUNT", this.dsList.getColumn(0, "DT_ACCOUNT"));
        				this.dsApproval.setColumn(nrow, "DT_JIGUB"  , this.dsList.getColumn(0, "DT_JIGUB"));
        				this.dsApproval.setColumn(nrow, "ID_TRANS"   , this.AuthClient.ID_USER);

        				if (this.dsApproval.rowcount == 0) return;


        				strSvcId    = "apprSang" + this.dsList.getColumn(0, "GUBUN");
        				strSvcType  = "save";
        				inProc		= "_dsProc";
        				inData      = "apprSang" + this.dsList.getColumn(0, "GUBUN") + "=dsApproval";
        				outData     = "dsApproval=apprSang" + this.dsList.getColumn(0, "GUBUN");
        			} else if( this.getOwnerFrame().GUBUN == "02" ) {
        				if(this.dsList.getColumn(0, "GUBUN") == "A" && !this.gfnDataValidate(this.dsList,this.dsRequiredA2)) return;
        				if(this.dsList.getColumn(0, "GUBUN") == "B" && !this.gfnDataValidate(this.dsList,this.dsRequiredB2)) return;


        				this.dsApprCnc.clearData();
        				var nrow = this.dsApprCnc.addRow();
        				this.dsApprCnc.setColumn(nrow, "CD_CORP"   , this.dsList.getColumn(0, "CD_CORP"));
        				this.dsApprCnc.setColumn(nrow, "YM_LOAN"   , this.dsList.getColumn(0, "YM_LOAN"));
        				this.dsApprCnc.setColumn(nrow, "DT_JIGUB"  , this.dsList.getColumn(0, "DT_JIGUB"));
        				this.dsApprCnc.setColumn(nrow, "ID_TRANS"  , this.AuthClient.ID_USER);

        				if (this.dsApprCnc.rowcount == 0) return;

        				strSvcId    = "apprCancel"+ this.dsList.getColumn(0, "GUBUN");
        				strSvcType  = "save";
        				inProc		= "_dsProc";
        				inData      = "apprCancel" + this.dsList.getColumn(0, "GUBUN") + "=dsApprCnc";
        				outData     = "dsApprCnc=apprCancel"+ this.dsList.getColumn(0, "GUBUN");
        			} else if( this.getOwnerFrame().GUBUN == "03" ) {
        				if(this.dsList.getColumn(0, "GUBUN") == "A" && !this.gfnDataValidate(this.dsList,this.dsRequiredA2)) return;
        				if(this.dsList.getColumn(0, "GUBUN") == "B" && !this.gfnDataValidate(this.dsList,this.dsRequiredB2)) return;
        				this.dsSlipInit.clearData();
        				var nrow = this.dsSlipInit.addRow();
        				this.dsSlipInit.setColumn(nrow, "CD_CORP"   , this.dsList.getColumn(0, "CD_CORP"));
        				this.dsSlipInit.setColumn(nrow, "YM_LOAN"   , this.dsList.getColumn(0, "YM_LOAN"));
        				this.dsSlipInit.setColumn(nrow, "DT_JIGUB"  , this.dsList.getColumn(0, "DT_JIGUB"));
        				this.dsSlipInit.setColumn(nrow, "ID_TRANS"  , this.AuthClient.ID_USER);
        				strSvcId    = "apprInit"+ this.dsList.getColumn(0, "GUBUN");
        				strSvcType  = "save";
        				inProc		= "_dsProc";
        				inData      = "apprInit" + this.dsList.getColumn(0, "GUBUN") + "=dsSlipInit";
        				outData     = "";
        			}


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
        	});
        };

        //결재상신/취소 콜백
        this.fnSlipAprv = function(svcID, dsOut) {
        	var idApType = "DAB01", ttType = "전표발행";

        	if(svcID == "apprCancelA"){
        		idApType = "DAB01C";
        		ttType   = "전표발행(취소)";
        	}

        	if(svcID == "apprSangB"){
        		idApType = "DAB05";
        		ttType   = "전표발행";
        	}
        	if(svcID == "apprCancelB"){
        		idApType = "DAB05C";
        		ttType   = "전표발행(취소)";
        	}

        	this.dsAprvSlipSelect.clearData();
        	this.dsAprvSlipSelect.addRow();

        	this.dsAprvSlipSelect.setColumn(0, "CD_CORP",  this.dsList.getColumn(0,"CD_CORP"));
        	this.dsAprvSlipSelect.setColumn(0, "NO_APRV", dsOut.getColumn(0, "NO_APRVOUT"));

        	var strSvcId    = "aprvDoc";
        	var strSvcType  = "approval/templete/"+idApType;
        	var inProc      = "_dsProc";
        	var inData      = "slipAprv=dsAprvSlipSelect";
        	var outData     = "dsResult="+idApType;
        	var strArg      = "NO_APRV=" + dsOut.getColumn(0, "NO_APRVOUT") + " TT_DOC="+encodeURIComponent("공조대여금 "+ttType);
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        // 취소버튼
        this.btnCancle_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        /*
         * 데이터 변경시
        */
        this.dsList_onvaluechanged = function(obj,e)
        {
        	if( e.columnid == "GUBUN" && e.newvalue != e.oldvalue ){
        		// A : 대여
        		if( e.newvalue == "A" ) {
        			this.dsList.setColumn(0, "YM_LOAN", this.getOwnerFrame().YM_LOAN);
        			this.ctclYM_LOAN.set_enable(true);
        			this.dsList.setColumn(0, "DT_JIGUB", "");
        			this.staDtJiGub.set_text("지급일자");

        			if( this.getOwnerFrame().GUBUN == "02" || this.getOwnerFrame().GUBUN == "03"){
        				this.dsList.setColumn(0, "DT_JIGUB", "");
        				this.tclDT_JIGUB.set_readonly(true);
        			}
        		}
        		// B : 상환
        		else if( e.newvalue == "B" ) {
        			this.dsList.setColumn(0, "YM_LOAN", "");
        			this.ctclYM_LOAN.set_enable(false);
        			this.staDtJiGub.set_text("상환일자");

        			if( this.getOwnerFrame().GUBUN == "02" || this.getOwnerFrame().GUBUN == "03"){
        				this.dsList.setColumn(0, "DT_JIGUB", "");
        				this.tclDT_JIGUB.set_readonly(false);
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.divData.form.rdoGUBUN.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOk_onclick,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAB_LOAN_AUTOSLIP_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
