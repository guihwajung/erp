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
            this.set_titletext("공조대출 신청");
            this.getSetter("maxwidth").set("412");
            this.getSetter("maxheight").set("535");
            if (Form == this.constructor)
            {
                this._setFormPosition(372,460);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLoanSeq", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"INT\" size=\"256\"/><Column id=\"CD_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"CD_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"AM_REQUEST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"NO_REQUEST\" type=\"INT\" size=\"256\"/><Column id=\"DS_REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"DS_CORP\"/><Col id=\"CD_DEPT\"/><Col id=\"DS_DEPT\"/><Col id=\"ID_SABUN\"/><Col id=\"DS_HNAME\"/><Col id=\"CD_ACCOUNT\"/><Col id=\"CD_LOAN\"/><Col id=\"DS_LOAN\"/><Col id=\"AM_REQUEST\"/><Col id=\"NO_REQUEST\"/><Col id=\"DS_REMARK\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">createSeq</Col><Col id=\"SP\">DABPR_LOAN_SEQ</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DABPR_LOAN_SAVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRequired", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_FIELD\" type=\"STRING\" size=\"256\"/><Column id=\"DS_FIELD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_FIELD\">CD_CORP</Col><Col id=\"DS_FIELD\">법인</Col></Row><Row><Col id=\"CD_FIELD\">CD_DEPT</Col><Col id=\"DS_FIELD\">부서</Col></Row><Row><Col id=\"CD_FIELD\">ID_SABUN</Col><Col id=\"DS_FIELD\">사번</Col></Row><Row><Col id=\"CD_FIELD\">CD_LOAN</Col><Col id=\"DS_FIELD\">대출유형</Col></Row><Row><Col id=\"CD_FIELD\">AM_REQUEST</Col><Col id=\"DS_FIELD\">대출금액</Col></Row><Row><Col id=\"CD_FIELD\">NO_REQUEST</Col><Col id=\"DS_FIELD\">상환기간</Col></Row><Row><Col id=\"CD_FIELD\">DS_REMARK</Col><Col id=\"DS_FIELD\">대출사유</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle1","0","-10","359","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("신청자정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","staTitle1:0",null,"133","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staIdSabun","0","0","80","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablelabelTE");
            obj.set_text("성명");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staIdSabunBg","79","0",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorp","0","33","80","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorpBg","79","33",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdDept","0","66","80","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdDeptBg","79","66",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfID_SABUN","84","5",null,"24","4",null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("CDTextWidth").set("70");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("AutoSet").set("false");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdAccount","0","99","80","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("계좌");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdAccountBg","79","99",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtCD_ACCOUNT","84","104",null,"24","4",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            obj.set_maxlength("10");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_CORP","84","38",null,"24","4",null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("txtDS_DEPT","84","71",null,"24","4",null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_maxlength("25");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTitle2","0","divData:10","359","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("신청정보");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divDataDetail","0","staTitle2:0",null,"100","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCdLoan","0","0","80","34",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablelabelTE");
            obj.set_text("대출유형");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staCdLoanBg","79","0",null,"34","0",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Div("cfCD_LOAN","84","5",null,"24","4",null,null,null,null,null,this.divDataDetail.form);
            obj.getSetter("CodeFindName").set("DAX_CFCOMMONCODE");
            obj.getSetter("CDTextWidth").set("0");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staAmRequest","0","33","80","34",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("3");
            obj.set_text("대출금액");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staAmRequestBg","79","33","122","34",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("txtAM_REQUEST","84","38","90","24",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("5");
            obj.set_format("###,###,###");
            obj.set_limitbymask("integer");
            obj.set_textAlign("right");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staNoRequest","200","33","80","34",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("6");
            obj.set_text("상환기간");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staNoRequestBg","279","33",null,"34","0",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDesc1","178","38","20","24",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("8");
            obj.set_text("원");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new MaskEdit("txtNO_REQUEST","284","38","50","24",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("9");
            obj.set_limitbymask("integer");
            obj.set_format("#,###");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDesc2","338","38","30","24",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("10");
            obj.set_text("개월");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDsRemark","0","66","80","34",null,null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("11");
            obj.set_text("대출사유");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Static("staDsRemarkBg","79","66",null,"34","0",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Edit("txtDS_REMARK","84","71",null,"24","4",null,null,null,null,null,this.divDataDetail.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            this.divDataDetail.addChild(obj.name, obj);

            obj = new Div("divBtns",null,null,"200","26","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE",null,"0","52","26","0",null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","92","0","52","26",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("신청");
            obj.set_cssclass("btn_WF_action");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("staTyGubun","0","323",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("상환기간은 500만원 이하 최대 24개월, \r\n500만원 초과 최대 48개월로 입력해주세요.");
            obj.set_cssclass("sta_WF_notice");
            this.addChild(obj.name, obj);

            obj = new Static("staTyGubun00","0","373","306","41",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("대출사유에 주택자금(전세자금,주택구입 등)은 \r\n입력불가합니다.");
            obj.set_cssclass("sta_WF_notice");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","divData.form.cfID_SABUN.form.CDTextBox","value","dsList","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.cfID_SABUN.form.DSTextBox","value","dsList","DS_HNAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divData.form.txtCD_ACCOUNT","value","dsList","CD_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDataDetail.form.cfCD_LOAN.form.CDTextBox","value","dsList","CD_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDataDetail.form.cfCD_LOAN.form.DSTextBox","value","dsList","DS_LOAN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDataDetail.form.txtAM_REQUEST","value","dsList","AM_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDataDetail.form.txtNO_REQUEST","value","dsList","NO_REQUEST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDataDetail.form.txtDS_REMARK","value","dsList","DS_REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.txtDS_CORP","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.txtDS_DEPT","value","dsList","DS_DEPT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_LOAN_DLG.xfdl", function() {
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

        	this.fnSetInit();

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
        	this.cfID_SABUN    = this.divData.form.cfID_SABUN;
        	this.cfCD_LOAN     = this.divDataDetail.form.cfCD_LOAN;
        	this.txtAM_REQUEST = this.divDataDetail.form.txtAM_REQUEST;
        	this.txtNO_REQUEST = this.divDataDetail.form.txtNO_REQUEST;
        	this.txtDS_REMARK  = this.divDataDetail.form.txtDS_REMARK;
        	this.btnATTACH         = this.divDataDetail.form.btnATTACH;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//코드파인드
        	this.cfID_SABUN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfID_SABUN.AfterCDTextChanged     = "fnAfterCDTextChanged";
        	this.cfCD_LOAN.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        };

        // 부모창에서 받아온것 셋팅
        this.fnSetInit = function() {

        	var frame = this.getOwnerFrame();

        	if( frame.TY_WRK == "U" ){
        		this.dsList.set_enableevent(false);
        		this.dsList.setColumn(0, "CD_CORP", frame.CD_CORP);
        		this.dsList.setColumn(0, "DS_CORP", frame.DS_CORP);
        		this.dsList.setColumn(0, "CD_DEPT", frame.CD_DEPT);
        		this.dsList.setColumn(0, "DS_DEPT", frame.DS_DEPT);
        		this.dsList.setColumn(0, "ID_SABUN", frame.ID_SABUN);
        		this.dsList.setColumn(0, "DS_HNAME", frame.DS_HNAME);
        		this.dsList.setColumn(0, "ID_PERSON", frame.ID_PERSON);
        		this.dsList.setColumn(0, "CD_ACCOUNT", frame.CD_ACCOUNT);
        		this.dsList.setColumn(0, "CD_LOAN", frame.CD_LOAN);
        		this.dsList.setColumn(0, "DS_LOAN", frame.DS_LOAN);
        		this.dsList.setColumn(0, "NO_SEQ", frame.NO_SEQ);
        		this.dsList.setColumn(0, "AM_REQUEST", frame.AM_REQUEST);
        		this.dsList.setColumn(0, "NO_REQUEST", frame.NO_REQUEST);
        		this.dsList.setColumn(0, "DS_REMARK", frame.DS_REMARK);
        		this.dsList.set_enableevent(true);
        	} else {
        		this.dsList.set_enableevent(false);
        		this.dsList.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        		this.dsList.setColumn(0, "DS_CORP", this.AuthClient.DS_CORP);
        		this.dsList.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        		this.dsList.setColumn(0, "DS_DEPT", this.AuthClient.DS_DEPT);
        		this.dsList.setColumn(0, "DS_HNAME", this.AuthClient.DS_HNAME);
        		this.dsList.setColumn(0, "AM_REQUEST", "");
        		this.dsList.setColumn(0, "NO_REQUEST","");
        		this.dsList.setColumn(0, "DS_REMARK", "");
        		this.dsList.set_enableevent(true);
        		this.dsList.setColumn(0, "ID_SABUN", this.AuthClient.ID_SABUN);
        		this.cfID_SABUN.form.fnCodeFindLoad();  //fnCodeFindLoad 시 0건이면 팝업창 안열리도록
        		this.dsList.setColumn(0, "CD_CORP", this.AuthClient.CD_CORP);
        		this.dsList.setColumn(0, "CD_LOAN", "01");
        		this.cfCD_LOAN.form.CDTextBox_onchanged();


        	}

        	if( frame.TY_WRK == "U" || this.FormInfo.GR_SEARCH == "9" ) {
        		this.cfID_SABUN.form.set_readonly(true);
        		this.cfCD_LOAN.form.set_readonly(true);
        	}

        	if( frame.TY_STATUS != "1" && !this.gfnIsNull(frame.TY_STATUS)){
        		this.txtAM_REQUEST.set_readonly(true);
        		this.txtNO_REQUEST.set_readonly(true);
        		this.txtDS_REMARK.set_readonly(true);
        	}
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSelect = new Dataset();
        	this.dsSelect.addColumn("ID_PERSON", "INT");
        	this.dsSelect.addColumn("CD_CORP", "STRING");
        	this.dsSelect.addColumn("ID_SABUN", "STRING");
        	this.dsSelect.addColumn("CD_LOAN", "STRING");

        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("TY_WRK", "STRING");
        	this.dsSave.addColumn("ID_PERSON", "INT");
        	this.dsSave.addColumn("CD_CORP", "STRING");
        	this.dsSave.addColumn("ID_SABUN", "STRING");
        	this.dsSave.addColumn("CD_LOAN", "STRING");
        	this.dsSave.addColumn("NO_SEQ", "INT");
        	this.dsSave.addColumn("AM_REQUEST", "BIGDECIMAL");
        	this.dsSave.addColumn("NO_REQUEST", "INT");
        	this.dsSave.addColumn("DS_REMARK", "STRING");
        	this.dsSave.addColumn("ID_USER", "STRING");
        	this.dsSave.addColumn("GR_SEARCH" , "string");
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
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return false;
        	}

        	switch(svcID) {
        		case "createSeq" :
        			this.dsList.setColumn(0,"NO_SEQ",this.dsLoanSeq.getColumn(0,"NO_SEQ")); trace(this.dsLoanSeq.getColumn(0,"CD_CORP") + "||"+this.dsLoanSeq.getColumn(0,"ID_SABUN") + "||" + "||"+this.dsLoanSeq.getColumn(0,"CD_LOAN") + "||"+this.dsLoanSeq.getColumn(0,"NO_SEQ"));
        			break;
        		case "save":		// 저장
        			if (errorCode == 0) {
        				this.fnVaidateCallback = function() {
        					this.getParentContext().close(true);
        				}
        				this.gfnAlert("신청이 완료되었습니다.", "fnVaidateCallback");
        			}

        		default:
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if (id == "cfID_SABUN") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        		dsUserParam.setColumn(nrow, "CD_DEPT", "");
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "YN_CORP", "Y");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "01");
        	}
        	if (id == "cfCD_LOAN") {
        		dsUserParam.setColumn(nrow, "CD_PREFIX", "LO");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	}
        	return true;
        };

        this.fnAfterCDTextChanged = function(id,codeFindData) {
           	var arr = codeFindData;
        	if(id == "cfID_SABUN") {
        		if(arr.length > 0) {
        			this.dsList.setColumn(0,"CD_CORP",arr[0]["CD_CORP"]);
        			this.dsList.setColumn(0,"DS_CORP",arr[0]["DS_CORP"]);
        			this.dsList.setColumn(0,"CD_DEPT",arr[0]["CD_DEPT"]);
        			this.dsList.setColumn(0,"DS_DEPT",arr[0]["DS_DEPT"]);
        			this.dsList.setColumn(0,"ID_PERSON",arr[0]["ID_PERSON"]);
        			this.dsList.setColumn(0,"CD_ACCOUNT",arr[0]["CD_ACCOUNT"]);
        		}else{
        			this.dsList.setColumn(0,"CD_CORP","");
        			this.dsList.setColumn(0,"DS_CORP","");
        			this.dsList.setColumn(0,"CD_DEPT","");
        			this.dsList.setColumn(0,"DS_DEPT","");
        			this.dsList.setColumn(0,"ID_PERSON","");
        			this.dsList.setColumn(0,"CD_ACCOUNT","");
        		}
        	}


        	// 일련번호 생성
        	if((id == "cfCD_CORP" || id == "cfID_SABUN")  && this.getOwnerFrame().TY_WRK == "I"&& arr.length > 0  ) {
        		this.createSeq();
        	}

        };


        // 일련번호 생성
        this.createSeq = function(){
        	this.dsSelect.clearData();

        	var nrow = this.dsSelect.addRow();
        	this.dsSelect.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(0, "ID_PERSON"));
        	this.dsSelect.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsSelect.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));
        	this.dsSelect.setColumn(nrow, "CD_LOAN", this.dsList.getColumn(0, "CD_LOAN"));

        	var strSvcId    = "createSeq";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "createSeq=dsSelect";
        	var outData     = "dsLoanSeq=createSeq0";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 	    // 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]
        }
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

        	if( this.getOwnerFrame().TY_WRK == "U"  && this.getOwnerFrame().TY_STATUS != "1") {
        		this.getParentContext().close(false);
        		return;
        	}

        	if(!this.gfnDataValidate(this.dsList,this.dsRequired)) return;


        	this.dsSave.clearData();

        	var nrow = this.dsSave.addRow();
        	this.dsSave.setColumn(nrow, "TY_WRK", this.getOwnerFrame().TY_WRK);
        	this.dsSave.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(0, "ID_PERSON"));
        	this.dsSave.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsSave.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));
        	this.dsSave.setColumn(nrow, "CD_LOAN", this.dsList.getColumn(0, "CD_LOAN"));
        	this.dsSave.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(0, "NO_SEQ"));
        	this.dsSave.setColumn(nrow, "AM_REQUEST", this.dsList.getColumn(0, "AM_REQUEST"));
        	this.dsSave.setColumn(nrow, "NO_REQUEST", this.dsList.getColumn(0, "NO_REQUEST"));
        	this.dsSave.setColumn(nrow, "DS_REMARK", this.dsList.getColumn(0, "DS_REMARK"));
        	this.dsSave.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSave.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);

        	if (this.dsSave.rowcount == 0) return;

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSave";
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

        // 취소버튼
        this.btnCancle_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onbeforeclose",this.form_onbeforeclose,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOk_onclick,this);
        };
        this.loadIncludeScript("DAB_LOAN_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
