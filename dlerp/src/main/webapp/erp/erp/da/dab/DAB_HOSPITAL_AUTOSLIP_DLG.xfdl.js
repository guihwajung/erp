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
            this.set_titletext("건강검진 전표발행");
            this.getSetter("maxwidth").set("412");
            this.getSetter("maxheight").set("415");
            if (Form == this.constructor)
            {
                this._setFormPosition(338,410);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"YM_HOSPITAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_HOSPITAL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HOSPITAL\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"DT_JIGUB\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"ISSUE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DT_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_TO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"GUBUN\"/><Col id=\"YM_HOSPITAL\"/><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"CD_HOSPITAL\"/><Col id=\"DS_HOSPITAL\"/><Col id=\"DT_ACCOUNT\"/><Col id=\"DT_JIGUB\"/><Col id=\"NO_ORDER\"/><Col id=\"DS_ORDER\"/><Col id=\"TY_ORDER\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">apprSang</Col><Col id=\"SP\">DABPR_HOSPITAL_AUTOSLIP</Col></Row><Row><Col id=\"TARGET\">apprCancel</Col><Col id=\"SP\">DABPR_HOSPITAL_AUTOSLIP_CANCEL</Col></Row><Row><Col id=\"TARGET\">slipAprv</Col><Col id=\"SP\">DHAPR_NSLIP_APRV_SELECT</Col></Row><Row><Col id=\"TARGET\">apprInit</Col><Col id=\"SP\">DABPR_HOSPITAL_XAUTOSLIP_INIT</Col></Row><Row><Col id=\"SP\">DABPR_HOSPITAL_AUTOSLIP_TITLE</Col><Col id=\"TARGET\">aprvSelect</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">YM_HOSPITAL</Col><Col id=\"DS_FIELD\">검진년월</Col></Row><Row><Col id=\"CD_FIELD\">CD_CORP</Col><Col id=\"DS_FIELD\">법인</Col></Row><Row><Col id=\"CD_FIELD\">CD_HOSPITAL</Col><Col id=\"DS_FIELD\">병원구분</Col></Row><Row><Col id=\"CD_FIELD\">DT_ACCOUNT</Col><Col id=\"DS_FIELD\">회계일자</Col></Row><Row><Col id=\"CD_FIELD\">DT_JIGUB</Col><Col id=\"DS_FIELD\">지급일자</Col></Row><Row><Col id=\"CD_FIELD\">NO_ORDER</Col><Col id=\"DS_FIELD\">오더번호</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired2", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">YM_HOSPITAL</Col><Col id=\"DS_FIELD\">검진년월</Col></Row><Row><Col id=\"CD_FIELD\">CD_CORP</Col><Col id=\"DS_FIELD\">법인</Col></Row><Row><Col id=\"CD_FIELD\">CD_HOSPITAL</Col><Col id=\"DS_FIELD\">병원구분</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle1","0","-10","359","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("전표발행 정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","staTitle1:0",null,"315","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staBgYmLoan","89","33",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staGubun","0","0","90","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablelabelTE");
            obj.set_text("결재구분");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgGubun","89","0",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYmLoan","0","33","90","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_text("검진년월");
            this.divData.addChild(obj.name, obj);

            obj = new Div("tclYM_HOSPITAL","94","38","100","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorp","0","98","90","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorpBg","89","98",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","94","103",null,"24","4",null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFCORP_STD");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDtAccount","0","164","90","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDtAccount","89","164",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_ACCOUNT","94","169","120","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDtJiGub","0","197","90","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("지급일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBGDtJiGub","89","197",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_JIGUB","94","202","120","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtGUBUN","94","5",null,"24","68",null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staNoOrder","0","230","90","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("오더번호");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgNoOrder","89","230",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfNO_ORDER","94","236",null,"24","4",null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DIX_CFSLIP_ORDER");
            obj.getSetter("CDTextWidth").set("95");
            obj.set_taborder("17");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdHospital","0","131","90","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("병원구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgCdHospital","89","131",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_HOSPITAL","94","136",null,"24","4",null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFHOSPITAL_CODE");
            obj.getSetter("CDTextWidth").set("50");
            obj.getSetter("FitToContents").set("true");
            obj.set_taborder("20");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIssueId","0","263","90","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("세금계산서");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIssueIdBg","89","263",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnEtaxSelect","94","267","52","26",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_action");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDtFromTo","0","66","90","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_text("검진기간");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBgDtFromTo","89","66",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_FROM","94","71","100","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_TO","214","71","100","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("27");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_TO","194","70","20","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("28");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_AC");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns",null,null,"200","26","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle",null,"0","52","26","0",null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOk","92","0","52","26",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_action");
            this.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.tclYM_HOSPITAL.form.TextBox","value","dsList","YM_HOSPITAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.cfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.cfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tclDT_ACCOUNT","value","dsList","DT_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.tclDT_JIGUB","value","dsList","DT_JIGUB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.txtGUBUN","value","dsList","GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.cfNO_ORDER.form.CDTextBox","value","dsList","NO_ORDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divData.form.cfNO_ORDER.form.DSTextBox","value","dsList","DS_ORDER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.cfCD_HOSPITAL.form.CDTextBox","value","dsList","CD_HOSPITAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divData.form.cfCD_HOSPITAL.form.DSTextBox","value","dsList","DS_HOSPITAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divData.form.tclDT_FROM","value","dsList","DT_FROM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divData.form.tclDT_TO","value","dsList","DT_TO");
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
        this.registerScript("DAB_HOSPITAL_AUTOSLIP_DLG.xfdl", function() {
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
        	this.tclYM_HOSPITAL = this.divData.form.tclYM_HOSPITAL;
        	this.tclDT_FROM     = this.divData.form.tclDT_FROM;  	//검진기간 FROM
        	this.tclDT_TO       = this.divData.form.tclDT_TO;		//검진기간 TO
        	this.cfCD_CORP      = this.divData.form.cfCD_CORP;
        	this.cfCD_HOSPITAL  = this.divData.form.cfCD_HOSPITAL;
        	this.tclDT_ACCOUNT  = this.divData.form.tclDT_ACCOUNT;
        	this.tclDT_JIGUB    = this.divData.form.tclDT_JIGUB;
        	this.cfNO_ORDER     = this.divData.form.cfNO_ORDER;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cfCD_HOSPITAL.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_ORDER.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_ORDER.AfterCDTextChanged     = "fnAfterCDTextChanged";
        };

        // 부모창에서 받아온것 셋팅
        this.fnSetDisplay = function() {

        	var frame = this.getOwnerFrame();
        	this.dsList.set_enableevent(false);
        	var strGubun = "결재상신";
        	if( frame.GUBUN == "02") {
        		strGubun = "취소결재상신";
        		this.staTitle1.set_text("취소결재상신 정보");
        	} else if( frame.GUBUN == "03") {
        		strGubun = "초기화";
        		this.staTitle1.set_text("결재상신 초기화");
        	}
        	this.dsList.setColumn(0, "GUBUN"  , strGubun);
        	this.dsList.setColumn(0, "YM_HOSPITAL", frame.YM_HOSPITAL);
        	this.dsList.setColumn(0, "CD_CORP", frame.CD_CORP);
        	this.dsList.setColumn(0, "DS_CORP", frame.DS_CORP);
        	this.dsList.setColumn(0, "DT_FROM", frame.DT_FROM); //검진기간from
        	this.dsList.setColumn(0, "DT_TO"  , frame.DT_TO);	//검진기간to

        	if( frame.GUBUN == "02" || frame.GUBUN == "03"){
        		this.tclDT_ACCOUNT.set_readonly(true);
        		this.tclDT_JIGUB.set_readonly(true);
        		this.cfNO_ORDER.form.set_readonly(true);
        	}
        	this.dsList.set_enableevent(true);
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	// 결재상신
        	this.dsApproval = new Dataset();
        	this.dsApproval.addColumn("CD_CORP"    , "STRING");
        	this.dsApproval.addColumn("YM_HOSPITAL", "STRING");
        	this.dsApproval.addColumn("DT_FROM"    , "STRING");   //검진기간from
        	this.dsApproval.addColumn("DT_TO"      , "STRING");   //검진기간to
        	this.dsApproval.addColumn("CD_HOSPITAL", "STRING");
        	this.dsApproval.addColumn("DT_ACCOUNT" , "STRING");
        	this.dsApproval.addColumn("DT_JIGUB"   , "STRING");
        	this.dsApproval.addColumn("TY_ORDER"   , "STRING");
        	this.dsApproval.addColumn("NO_ORDER"   , "STRING");
        	this.dsApproval.addColumn("DS_ORDER"   , "STRING");
        	this.dsApproval.addColumn("ISSUE_ID"   , "STRING");
        	this.dsApproval.addColumn("ID_TRANS"   , "STRING");
        	this.dsApproval.addColumn("NO_APRVOUT" , "INT");

        	// 취소결재상신
        	this.dsApprCnc = new Dataset();
        	this.dsApprCnc.addColumn("CD_CORP"    , "STRING");
        	this.dsApprCnc.addColumn("YM_HOSPITAL", "STRING");
        	this.dsApprCnc.addColumn("DT_FROM"    , "STRING");
        	this.dsApprCnc.addColumn("DT_TO"      , "STRING");
        	this.dsApprCnc.addColumn("CD_HOSPITAL", "STRING");
        	this.dsApprCnc.addColumn("ID_TRANS"   , "STRING");
        	this.dsApprCnc.addColumn("NO_APRVOUT" , "INT");

        	// 결재상태초기화
        	this.dsSlipInit = new Dataset();
        	this.dsSlipInit.addColumn("CD_CORP"    , "STRING");
        	this.dsSlipInit.addColumn("YM_HOSPITAL", "STRING");
        	this.dsSlipInit.addColumn("DT_FROM"    , "STRING");
        	this.dsSlipInit.addColumn("DT_TO"      , "STRING");
        	this.dsSlipInit.addColumn("CD_HOSPITAL", "STRING");
        	this.dsSlipInit.addColumn("ID_TRANS"   , "STRING");

        	this.dsAprvSelect = new Dataset();
        	this.dsAprvSelect.addColumn("CD_CORP"	   , "string");
        	this.dsAprvSelect.addColumn("CD_HOSPITAL"  , "string");
        	this.dsAprvSelect.addColumn("NO_APRV"      , "int");
        	this.dsAprvSelect.addColumn("ID_TRANS"	   , "STRING");

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
        		case "apprSang" :
        			this.fnSlipAprv(svcID, this.dsApproval);
        			break;
        		case "apprCancel" :
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
        		case "apprInit" :
        			this.fnApprInitCallback = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("초기화 작업이 완료되었습니다.","fnApprInitCallback");
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
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "cfCD_HOSPITAL") {
        		dsUserParam.setColumn(nrow, "CD_CORP",  this.dsList.getColumn(0, "CD_CORP"));
        	}

        	if (id == "cfNO_ORDER") {
        		if( this.gfnIsNull(this.dsList.getColumn(0, "CD_CORP")) ){
        			this.gfnAlert("법인을 먼저 입력하세요.");
        			return;
        		}
        		if( this.gfnIsNull(this.dsList.getColumn(0, "DT_ACCOUNT")) ){
        			this.gfnAlert("회계일자를 먼저 입력하세요.");
        			return;
        		}
        		dsUserParam.setColumn(nrow, "CD_CORP",  this.dsList.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_DEPT_BH", "602");
        		dsUserParam.setColumn(nrow, "CD_DEPT_BE", "602");
        		dsUserParam.setColumn(nrow, "DT_ACCOUNT", this.dsList.getColumn(0, "DT_ACCOUNT"));
        		dsUserParam.setColumn(nrow, "CD_DIV", "01");
        		dsUserParam.setColumn(nrow, "TY_GUBUN", "1");


        	}
        	return true;
        };
        this.fnAfterCDTextChanged = function(id,codeFindData) {
           	var arr = codeFindData;

        	if(id == "cfNO_ORDER") {
        		if(arr.length > 0) {
        			this.dsList.setColumn(0,"NO_ORDER",arr[0]["NO_ORDER"]);
        			this.dsList.setColumn(0,"DS_ORDER",arr[0]["DS_ORDER"]);
        		} else {
        			this.dsList.setColumn(0,"NO_ORDER","");
        			this.dsList.setColumn(0,"DS_ORDER","");
        		}
        	}
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
         // 확인 버튼
        this.btnOk_onclick = function(obj,e)
        {


        	if( this.getOwnerFrame().GUBUN == "01" ) {
        			if(!this.gfnDataValidate(this.dsList,this.dsRequired)) return;
        	} else if( this.getOwnerFrame().GUBUN == "02" || this.getOwnerFrame().GUBUN == "03") {
        		if(!this.gfnDataValidate(this.dsList,this.dsRequired2) ) return;
        	}
        	this.gfnConfirm(this.dsList.getColumn(0,"GUBUN") + " 하시겠습니까?", function (strId, val){
        		if(val){
        			var strSvcId    = "";
        			var strSvcType  = "";
        			var inProc		= "";
        			var inData      = "";
        			var outData     = "";

        			if( this.getOwnerFrame().GUBUN == "01" ) {
        				this.dsApproval.clearData();

        				var nrow = this.dsApproval.addRow();
        				this.dsApproval.setColumn(nrow, "CD_CORP"    , this.dsList.getColumn(0, "CD_CORP"));
        				this.dsApproval.setColumn(nrow, "YM_HOSPITAL", this.dsList.getColumn(0, "YM_HOSPITAL"));
        				this.dsApproval.setColumn(nrow, "DT_FROM"    , this.dsList.getColumn(0, "DT_FROM"));
        				this.dsApproval.setColumn(nrow, "DT_TO"      , this.dsList.getColumn(0, "DT_TO"));
        				this.dsApproval.setColumn(nrow, "CD_HOSPITAL", this.dsList.getColumn(0, "CD_HOSPITAL"));
        				this.dsApproval.setColumn(nrow, "DT_ACCOUNT" , this.dsList.getColumn(0, "DT_ACCOUNT"));
        				this.dsApproval.setColumn(nrow, "DT_JIGUB"   , this.dsList.getColumn(0, "DT_JIGUB"));
        				this.dsApproval.setColumn(nrow, "NO_ORDER"   , this.dsList.getColumn(0, "NO_ORDER"));
        				this.dsApproval.setColumn(nrow, "DS_ORDER"   , this.dsList.getColumn(0, "DS_ORDER"));
        				this.dsApproval.setColumn(nrow, "ISSUE_ID"   , this.dsList.getColumn(0, "ISSUE_ID"));
        				this.dsApproval.setColumn(nrow, "ID_TRANS"   , this.AuthClient.ID_USER);
        				this.dsApproval.setColumn(nrow, "TY_ORDER"   , "01");

        				if (this.dsApproval.rowcount == 0) return;

        				strSvcId    = "apprSang";
        				strSvcType  = "save";
        				inProc		= "_dsProc";
        				inData      = "apprSang=dsApproval";
        				outData     = "dsApproval=apprSang";
        			} else if( this.getOwnerFrame().GUBUN == "02" ) {
        				this.dsApprCnc.clearData();
        				var nrow = this.dsApprCnc.addRow();
        				this.dsApprCnc.setColumn(nrow, "CD_CORP"    , this.dsList.getColumn(0, "CD_CORP"));
        				this.dsApprCnc.setColumn(nrow, "YM_HOSPITAL", this.dsList.getColumn(0, "YM_HOSPITAL"));
        				this.dsApprCnc.setColumn(nrow, "DT_FROM"    , this.dsList.getColumn(0, "DT_FROM"));
        				this.dsApprCnc.setColumn(nrow, "DT_TO"      , this.dsList.getColumn(0, "DT_TO"));
        				this.dsApprCnc.setColumn(nrow, "CD_HOSPITAL", this.dsList.getColumn(0, "CD_HOSPITAL"));
        				this.dsApprCnc.setColumn(nrow, "ID_TRANS"   , this.AuthClient.ID_USER);

        				if (this.dsApprCnc.rowcount == 0) return;

        				strSvcId    = "apprCancel";
        				strSvcType  = "save";
        				inProc		= "_dsProc";
        				inData      = "apprCancel=dsApprCnc";
        				outData     = "dsApprCnc=apprCancel";
        			} else if( this.getOwnerFrame().GUBUN == "03" ) {
        				this.dsSlipInit.clearData();
        				var nrow = this.dsSlipInit.addRow();
        				this.dsSlipInit.setColumn(nrow, "CD_CORP"    , this.dsList.getColumn(0, "CD_CORP"));
        				this.dsSlipInit.setColumn(nrow, "YM_HOSPITAL", this.dsList.getColumn(0, "YM_HOSPITAL"));
        				this.dsSlipInit.setColumn(nrow, "DT_FROM"    , this.dsList.getColumn(0, "DT_FROM"));
        				this.dsSlipInit.setColumn(nrow, "DT_TO"      , this.dsList.getColumn(0, "DT_TO"));
        				this.dsSlipInit.setColumn(nrow, "CD_HOSPITAL", this.dsList.getColumn(0, "CD_HOSPITAL"));
        				this.dsSlipInit.setColumn(nrow, "ID_TRANS"   , this.AuthClient.ID_USER);
        				strSvcId    = "apprInit";
        				strSvcType  = "save";
        				inProc		= "_dsProc";
        				inData      = "apprInit=dsSlipInit";
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
        	var idApType = "DAB03", ttType = "전표발행";
        	if(svcID == "apprCancel"){
        		idApType = "DAB03C";
        		ttType   = "전표발행(취소)";
        	}

        	// 데이터셋 초기화
        	this.dsAprvSelect.clearData();
        	this.dsAprvSelect.addRow();

        	this.dsAprvSelect.setColumn(0, "CD_CORP"	, this.dsList.getColumn(0, "CD_CORP"));
        	this.dsAprvSelect.setColumn(0, "CD_HOSPITAL", this.dsList.getColumn(0,"CD_HOSPITAL"));
        	this.dsAprvSelect.setColumn(0, "NO_APRV"    , dsOut.getColumn(0, "NO_APRVOUT"));
        	this.dsAprvSelect.setColumn(0, "ID_TRANS"   , this.AuthClient.ID_USER);


        	this.dsAprvSlipSelect.clearData();
        	this.dsAprvSlipSelect.addRow();

        	this.dsAprvSlipSelect.setColumn(0, "CD_CORP",  this.dsList.getColumn(0,"CD_CORP"));
        	this.dsAprvSlipSelect.setColumn(0, "NO_APRV", dsOut.getColumn(0, "NO_APRVOUT"));
        	//trace("this.dsAprvSelect >>>>>>>"+this.dsAprvSelect.saveXML());
        	//trace("this.dsAprvSlipSelect >>>>>>>"+this.dsAprvSlipSelect.saveXML());
        	var strSvcId    = "aprvDoc";
        	var strSvcType  = "approval/templete/"+idApType;
        	var inProc      = "_dsProc";
        	var inData      = "aprvSelect=dsAprvSelect slipAprv=dsAprvSlipSelect";
        	var outData     = "dsResult="+idApType;
        	var strArg      = "NO_APRV=" + dsOut.getColumn(0, "NO_APRVOUT") + " TT_DOC="+encodeURIComponent("건강검진("+this.dsList.getColumn(0,"DS_HOSPITAL")+") "+ttType);
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId, strSvcType, inProc, inData, outData, strArg, callBackFnc);
        };

        // 취소버튼
        this.btnCancle_onclick = function(obj,e)
        {
        	this.getParentContext().close(true);
        };

        // 세금계산서 선택 버튼
        this.btnEtaxSelect_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsList.getColumn(0,"CD_CORP"))){
        		this.gfnAlert("법인코드는 필수입니다.");
        		this.cfCD_CORP.form.CDTextBox.setFocus();
        		return;
        	}

        	var param = {};
        	param.CD_CORP = this.dsList.getColumn(0, "CD_CORP");
        	param.DS_CORP = this.dsList.getColumn(0, "DS_CORP");
        	this.gfnFormOpen(this.FormInfo.CD_MODULE, "DHA_ETAX_DATA_DLG", "fnEtaxDataCallBack", param);
        };

        // 세금계산서 선택 버튼CallBack
        this.fnEtaxDataCallBack = function(strID, val) {
        	if(!this.gfnIsNull(val)) {
        		var json = JSON.parse(val);
        		this.dsList.setColumn(0,"ISSUE_ID", json.ISSUE_ID);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.divData.form.btnEtaxSelect.addEventHandler("onclick",this.btnEtaxSelect_onclick,this);
            this.divData.form.staDtFromTo.addEventHandler("onclick",this.divData_staDtAccount00_onclick,this);
            this.divBtns.form.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.divBtns.form.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
        };
        this.loadIncludeScript("DAB_HOSPITAL_AUTOSLIP_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
