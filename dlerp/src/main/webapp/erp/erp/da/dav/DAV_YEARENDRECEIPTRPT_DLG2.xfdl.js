(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAV_YEARENDRECEIPTRPT_DLG");
            this.set_titletext("근로소득원천징수 영수증");
            this.getSetter("maxwidth").set("390");
            this.getSetter("maxheight").set("410");
            if (Form == this.constructor)
            {
                this._setFormPosition(360,360);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">report-X</Col><Col id=\"SP\">DAVPR_YEARENDRECEIPT2016_SELECT</Col></Row><Row><Col id=\"TARGET\">reportSub-X</Col><Col id=\"SP\">DAVPR_YEARENDSUBSTSUB1_SELECT</Col></Row><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DAVPR_YEARENDRECEIPT2016_SELECT</Col></Row><Row><Col id=\"TARGET\">reportSub</Col><Col id=\"SP\">DAVPR_YEARENDSUBSTSUB1_SELECT</Col></Row><Row><Col id=\"TARGET\">reportPension</Col><Col id=\"SP\">DAVPR_YEARENDSUBSTPENSIONRPT_SELECT</Col></Row><Row><Col id=\"TARGET\">report_2019</Col><Col id=\"SP\">DAVPR_YEARENDRECEIPT2016_SELECT</Col></Row><Row><Col id=\"TARGET\">reportSub1_2019</Col><Col id=\"SP\">DAVPR_YEARENDRECEIPTSUB1_2018_SELECT</Col></Row><Row><Col id=\"TARGET\">reportSub2_2019</Col><Col id=\"SP\">DAVPR_YEARENDRECEIPTSUB2_2018_SELECT</Col></Row><Row/><Row><Col id=\"SP\">DAVPR_YEARENDRECEIPT2020_SELECT</Col><Col id=\"TARGET\">report_2020</Col></Row><Row><Col id=\"SP\">DAVPR_YEARENDRECEIPTSUB1_2020_SELECT</Col><Col id=\"TARGET\">reportSub1_2020</Col></Row><Row><Col id=\"SP\">DAVPR_YEARENDRECEIPTSUB2_2020_SELECT</Col><Col id=\"TARGET\">reportSub2_2020</Col></Row><Row><Col id=\"TARGET\">report_2021</Col><Col id=\"SP\">DAVPR_YEARENDRECEIPT2021_SELECT</Col></Row><Row><Col id=\"TARGET\">reportSub1_2021</Col><Col id=\"SP\">DAVPR_YEARENDRECEIPTSUB1_2021_SELECT</Col></Row><Row><Col id=\"TARGET\">reportSub2_2021</Col><Col id=\"SP\">DAVPR_YEARENDRECEIPTSUB2_2021_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">발행자 보고용</Col><Col id=\"CODE\">1</Col></Row><Row><Col id=\"VALUE\">발행자 보관용</Col><Col id=\"CODE\">2</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">소득자 보관용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SORT", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">부서순</Col></Row><Row><Col id=\"VALUE\">사번순</Col><Col id=\"CODE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN_MID", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CODE\">N</Col><Col id=\"DS_CODE\">연말정산</Col></Row><Row><Col id=\"CD_CODE\">Y</Col><Col id=\"DS_CODE\">중도정산</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YN_MID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","10","10","342","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("근로소득원천징수 영수증");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","80","300","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","120","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","30","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("staYN_MID","8","55","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("작업구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","94","55","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staWORK_BASE","8","staYN_MID:-1","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("적용년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","8","200","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("법인코드");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","94","200","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staID_RESIDENT","8","229","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("주민번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta08","94","229","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_ISSUE","8","113","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("발행자구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta17","94","113","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_RECEIPT","8","142","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("영수일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta10","94","142","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staSEQ_ORDER","8","171","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta12","94","171","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Div("ctclWORK_BASE","100","89","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("onchanged").set("fnSearchInit");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Static("staWORK_BASE_","ctclWORK_BASE:5","89","10","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("~");
            obj.getSetter("async").set("false");
            this.addChild(obj.name, obj);

            obj = new Div("ctclWORK_BASE_TO","staWORK_BASE_:5","89","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.getSetter("onchanged").set("fnSearchInit");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","94","84","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Combo("cboTY_ISSUE","100","118","129","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("소득자 보관용");
            obj.set_value("3");
            obj.set_index("2");
            this.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_RECEIPT","100","147","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoSEQ_ORDER","100","178","240","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("dsTY_SORT");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_text("부서순");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","205","240","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.addChild(obj.name, obj);

            obj = new Div("ccfID_RESIDENT","100","234","240","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DAX_CFEMP");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("cboYN_MID","99","60","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_innerdataset("dsYN_MID");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_visible("true");
            obj.set_text("연말정산");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("ctclWORK_BASE","99","89","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("stagb00","94","258","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoYN_STAMP_IMG","100","263","113","20",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdoYN_STAMP_IMG_innerdataset = new nexacro.NormalDataset("rdoYN_STAMP_IMG_innerdataset", obj);
            rdoYN_STAMP_IMG_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">Y</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">N</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(rdoYN_STAMP_IMG_innerdataset);
            obj.set_text("Y");
            obj.set_value("Y");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("stagb","8","258","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            obj.set_text("인감여부");
            this.addChild(obj.name, obj);

            obj = new Edit("edtID_RESIDENT","11","295","104","21",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","cboYN_MID","value","dsSearch","YN_MID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DAV_YEARENDRECEIPTRPT_DLG2.xfdl", function() {
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

        // 	//중도정산으로 넘어올때
        // 	this.getOwnerFrame().WORK_BASE = "202010";
        // 	this.getOwnerFrame().YN_MID = "Y";

        // 	//연말정산으로 넘어올때
        // 	this.getOwnerFrame().WORK_BASE = "2020";
        // 	this.getOwnerFrame().YN_MID = "N";

        	this.edtID_RESIDENT.set_visible(false);


        	if(!this.gfnIsNull(this.getOwnerFrame().WORK_BASE)){
        		trace("DAV_YEARENDSTAT:연말정산 관리에서 call>>>");
        		//작업구분
        		this.cboYN_MID.set_value(this.getOwnerFrame().YN_MID); //dsList_onvaluechanged
        		this.ctclWORK_BASE.form.TextBox.set_value(this.getOwnerFrame().WORK_BASE);

        		// 법인코드 및 법인명 기본세팅
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);

        		//주민번호
        		//this.ccfID_RESIDENT.form.CDTextBox.set_value(this.fnReplace(this.getOwnerFrame().ID_RESIDENT, "-", ""));
        		//this.edtID_RESIDENT.set_value(this.fnReplace(this.getOwnerFrame().ID_RESIDENT, "-", ""));
        		this.ccfID_RESIDENT.form.CDTextBox.set_value(this.getOwnerFrame().DS_HNAME);
        		this.ccfID_RESIDENT.form.fnCodeFindLoad();

        		//콤보박스 readonly
        		this.cboYN_MID.set_enable(false);

        	}else{
        		trace("메뉴에서 call>>>");
        		//default 연말정산
        		this.cboYN_MID.set_value("N"); //dsList_onvaluechanged
        		var ym_base = this.gfnAddMonth(this.gfnGetDate(),-12).substring(0,4);
        		this.ctclWORK_BASE.form.TextBox.set_value(ym_base);

        		// 법인코드 및 법인명 기본세팅
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	}

        	//영수일자
        	this.ctclDT_RECEIPT.set_value(this.gfnGetDate());

        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        };

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
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
        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("YY_BASE", "string");
        	this.dsReport.addColumn("NO_APPLY", "int");
        	this.dsReport.addColumn("ID_RESIDENT", "string");
        	this.dsReport.addColumn("TY_ORDERBY", "int");
        	this.dsReport.addColumn("TY_SIGN", "int");
        	this.dsReport.addColumn("YN_MID", "string");
        	this.dsReport.addColumn("CD_CORP", "string");
        	this.dsReport.addColumn("YN_STAMP_IMG", "string");

        	this.dsReportSub = new Dataset();
        	this.dsReportSub.addColumn("YY_BASE", "string");
        	this.dsReportSub.addColumn("MM_BASE", "string");
        	this.dsReportSub.addColumn("NO_APPLY", "int");
        	this.dsReportSub.addColumn("ID_RESIDENT", "string");
        	this.dsReportSub.addColumn("YN_MID", "string");
        	this.dsReportSub.addColumn("CD_CORP", "string");

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValid = function() {
        	if (this.gfnIsNull(this.ctclWORK_BASE.form.TextBox.value)) {
        		this.fnValidCallback = function() {
        			this.ctclWORK_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert(this.staWORK_BASE.text + "을/를 입력하세요.", "fnValidCallback");
        		return false;
        	}
        	else if (this.gfnIsNull(this.ctclDT_RECEIPT.value)) {
        		this.fnValidCallback = function() {
        			this.ctclDT_RECEIPT.setFocus();
        		}
        		this.gfnAlert("영수일자를 입력하세요.", "fnValidCallback");
        		return false;
        	}
        	else if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.fnValidCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnValidCallback");
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
        		//trace(this.dsList.saveXML());
        		if(this.dsList.rowcount == 0){
        			this.gfnAlert("조회된 데이타가 없습니다.");
        			return;
        		}else{
        			this.fnSelectProc("P");
        		}
        	}
        	else if (svcID == "report") {
        		//trace(this.dsList.saveXML());
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	if(id == "ccfCD_CORP") {// 법인코드
        		dsUserParam.setColumn(nrow, "CD_CORP", this.AuthClient.CD_CORP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}
        	else if(id == "ccfID_RESIDENT"){
        		if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        			this.fnBeforeUserCallback = function() {
        				this.ccfCD_CORP.form.CDTextBox.setFocus();
        			}
        			this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        			return false;
        		}
        		dsUserParam.setColumn(nrow, "GUBUN", "E");
        		dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "ccfCD_CORP") {// 법인코드
        		this.ccfID_RESIDENT.form.fnCodeFindClear();
        	}
        	else if(id =="ccfID_RESIDENT") { //주민등록번호
        		this.edtID_RESIDENT.set_value("");
        		if(arr.length > 0){
        			this.edtID_RESIDENT.set_value(arr[0]["ID_RESIDENT"]);
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

        this.btnOK_onclick = function(obj,e)
        {
        	this.fnSelectProc("S");
        	//this.fnSelectProc("P");
        };

        this.fnSelectProc = function(callType){
        	if(!this.fnSelectValid()) return false;

        	var mainProc = "";
        	var subProc1 = "";
        	var subProc2 = "";
        	var ozReportNm  = "";


        	var YY_BASE = this.ctclWORK_BASE.form.TextBox.value;
        	if(YY_BASE <= "2019"){
        		mainProc = "report_2019";
        		subProc1 = "reportSub1_2019";
        		subProc2 = "reportSub2_2019";

        		ozReportNm  = "DAV_YEARENDRECEIPT.ozr";

        	}else if(YY_BASE == "2020"){
        		mainProc = "report_2020";
        		subProc1 = "reportSub1_2020";
        		subProc2 = "reportSub2_2020";

        		ozReportNm  = "DAV_YEARENDRECEIPT_3LINE.ozr";

        	}else{
        		mainProc = "report_2021";
        		subProc1 = "reportSub1_2021";
        		subProc2 = "reportSub2_2021";

        		ozReportNm  = "DAV_YEARENDRECEIPT.ozr";
        	}

        	this.dsReport.clearData();

        	this.dsReport.addRow();
        	this.dsReport.setColumn(0, "YY_BASE", YY_BASE);
        	this.dsReport.setColumn(0, "NO_APPLY", 1);
        	//this.dsReport.setColumn(0, "ID_RESIDENT", this.fnReplace(this.ccfID_RESIDENT.form.CDTextBox.value, "-", ""));
        	this.dsReport.setColumn(0, "ID_RESIDENT", this.fnReplace(this.edtID_RESIDENT.value, "-", ""));
        	this.dsReport.setColumn(0, "TY_ORDERBY", this.rdoSEQ_ORDER.value);
        	this.dsReport.setColumn(0, "TY_SIGN", this.cboTY_ISSUE.value);
        	this.dsReport.setColumn(0, "YN_MID", this.cboYN_MID.value);
        	this.dsReport.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsReport.setColumn(0, "YN_STAMP_IMG", this.rdoYN_STAMP_IMG.value);

        	this.dsReportSub.clearData();

        	this.dsReportSub.addRow();
        	this.dsReportSub.setColumn(0, "YY_BASE", YY_BASE);
        	this.dsReportSub.setColumn(0, "MM_BASE", YY_BASE.substr(0,4));
        	this.dsReportSub.setColumn(0, "NO_APPLY", 1);
        	//this.dsReportSub.setColumn(0, "ID_RESIDENT", this.fnReplace(this.ccfID_RESIDENT.form.CDTextBox.value, "-", ""));
        	this.dsReportSub.setColumn(0, "ID_RESIDENT", this.fnReplace(this.edtID_RESIDENT.value, "-", ""));
        	this.dsReportSub.setColumn(0, "YN_MID", this.cboYN_MID.value);
        	this.dsReportSub.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);

        	if(callType == "S"){
        		var strSvcId    = "select";
        		var strSvcType  = "select";
        		var inProc		= "_dsProc";
        		var inData      = mainProc+"=dsReport "+subProc1+"=dsReportSub "+subProc2+"=dsReportSub";
        		var outData     = "dsList="+mainProc+"0 dsList2="+subProc1+"0 dsList3="+subProc2+"0";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		trace("inData", inData);
        		trace("outData", outData);

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]

        	}else{

        		var inProc		= "_dsProc";
        		//var inParam 	= "params=dsReportParam";	// 조회SP이외 출력물 구분 값
        		var inParam 	= "";
        		var inData      = mainProc+"=dsReport "+subProc1+"=dsReportSub "+subProc2+"=dsReportSub";
        		var reportpath  = "/da/dav/"+ozReportNm;

        		gfnOpenReport(this, reportpath, inProc, inParam, inData);
        	}

        }

        this.btnCANCLE_onclick = function(obj,e){
        	this.getParentContext().close(false);
        };

        this.fnReplace = function(orgText, fromSplit, toSplit){
        	if(this.gfnIsNull(orgText)) return "";

        	var newSplit = "";
        	if(!this.gfnIsNull(toSplit)) newSplit = toSplit;

        	var arrResult = orgText.split(fromSplit);
        	var sResult = arrResult.join(newSplit);
        	return sResult;
        }

        this.dsSearch_onvaluechanged = function(obj,e){
        	if(e.newvalue != e.oldvalue){
        		if(e.columnid == "YN_MID"){
        			if(e.newvalue == "Y"){ // 중도정산
        				this.staWORK_BASE.set_text("적용년월");
        				this.ctclWORK_BASE.set_url("cmm::cmmCalMM.xfdl");
        				this.ctclWORK_BASE.form.TextBox.set_value(this.gfnGetDate().substr(0,6));

        			}else{
        				this.staWORK_BASE.set_text("적용년도");
        				this.ctclWORK_BASE.set_url("cmm::cmmCalYY.xfdl");
        				this.ctclWORK_BASE.form.TextBox.set_value(this.gfnGetDate().substr(0,4));
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.ctclDT_RECEIPT.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
            this.dsList2.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
            this.dsList3.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAV_YEARENDRECEIPTRPT_DLG2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
