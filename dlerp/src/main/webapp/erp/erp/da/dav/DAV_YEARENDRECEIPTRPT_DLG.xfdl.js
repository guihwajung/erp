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
            this.getSetter("maxwidth").set("400");
            this.getSetter("maxheight").set("420");
            if (Form == this.constructor)
            {
                this._setFormPosition(380,380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DAVPR_YEARENDRECEIPT2021_SELECT</Col></Row><Row><Col id=\"TARGET\">reportSub1</Col><Col id=\"SP\">DAVPR_YEARENDRECEIPTSUB1_2021_SELECT</Col></Row><Row><Col id=\"TARGET\">reportSub2</Col><Col id=\"SP\">DAVPR_YEARENDRECEIPTSUB2_2021_SELECT</Col></Row><Row><Col id=\"TARGET\">report1</Col><Col id=\"SP\">DAUPR_SALARYPAYLIST_REPORT</Col></Row><Row><Col id=\"TARGET\">report2</Col><Col id=\"SP\">DAUPR_SALARYPAYLIST_INCOME_SUBST_PRINT</Col></Row><Row><Col id=\"TARGET\">report3</Col><Col id=\"SP\">DAUPR_SALARYPAYLIST_CALC_PRINT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_GUBUN", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"VALUE\">발행자 보고용</Col><Col id=\"CODE\">1</Col></Row><Row><Col id=\"VALUE\">발행자 보관용</Col><Col id=\"CODE\">2</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">소득자 보관용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_SORT", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">부서순</Col></Row><Row><Col id=\"VALUE\">사번순</Col><Col id=\"CODE\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"100000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListRpt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","10","10","342","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("근로소득원천징수 영수증");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYN_MID","8","45","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_text("작업구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","94","45","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboYN_MID","staYN_MID:5","staYN_MID:-25","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            obj.set_visible("true");
            var divData_form_cboYN_MID_innerdataset = new nexacro.NormalDataset("divData_form_cboYN_MID_innerdataset", obj);
            divData_form_cboYN_MID_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">연말정산</Col><Col id=\"codecolumn\">N</Col></Row><Row><Col id=\"datacolumn\">중도정산</Col><Col id=\"codecolumn\">Y</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_cboYN_MID_innerdataset);
            obj.set_text("연말정산");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staWORK_BASE","8","staYN_MID:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_text("적용년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","94","staYN_MID:-1","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclWORK_BASE","99","staWORK_BASE:-25","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("22");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_ISSUE","8","staWORK_BASE:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("발행자구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta17","staTY_ISSUE:-1","staTY_ISSUE:-30","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_ISSUE","staTY_ISSUE:5","staTY_ISSUE:-25","129","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsTY_GUBUN");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("소득자 보관용");
            obj.set_value("3");
            obj.set_index("2");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_RECEIPT","8","staTY_ISSUE:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_text("영수일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta10","staDT_RECEIPT:-1","staDT_RECEIPT:-30","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_RECEIPT","staDT_RECEIPT:5","staDT_RECEIPT:-25","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staSEQ_ORDER","8","staDT_RECEIPT:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta12","staSEQ_ORDER:-1","staSEQ_ORDER:-30","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoSEQ_ORDER","staSEQ_ORDER:5","staSEQ_ORDER:-25","140","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_innerdataset("dsTY_SORT");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_direction("vertical");
            obj.set_text("부서순");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","8","staSEQ_ORDER:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_text("법인코드");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","staCD_CORP:-1","staCD_CORP:-30","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","staCD_CORP:-25","240","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_RESIDENT","8","staCD_CORP:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("주민번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","staID_RESIDENT:-1","staID_RESIDENT:-30","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_RESIDENT","staID_RESIDENT:5","staID_RESIDENT:-25","240","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFEMP");
            obj.getSetter("CDTextWidth").set("100");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.addChild(obj.name, obj);

            obj = new Static("stagb","8","staID_RESIDENT:-1","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("25");
            obj.set_text("인감여부");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("stagb00","stagb:-1","stagb:-30","260","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoYN_STAMP_IMG","stagb:5","stagb:-25","113","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("24");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_rdoYN_STAMP_IMG_innerdataset = new nexacro.NormalDataset("divData_form_rdoYN_STAMP_IMG_innerdataset", obj);
            divData_form_rdoYN_STAMP_IMG_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">Y</Col><Col id=\"codecolumn\">Y</Col></Row><Row><Col id=\"datacolumn\">N</Col><Col id=\"codecolumn\">N</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoYN_STAMP_IMG_innerdataset);
            obj.set_text("Y");
            obj.set_value("Y");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_RESIDENT:5","staID_RESIDENT:4","250","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("11");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","80","stagb:15","200","40",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","120","10","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","30","10","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divData.form.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAV_YEARENDRECEIPTRPT_DLG.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().WORK_BASE)){
        		//작업구분
        		this.cboYN_MID.set_value(this.getOwnerFrame().YN_MID);

        		this.staWORK_BASE.set_text(this.cboYN_MID.value=="Y"?"적용년월":"적용년도");
        		this.ctclWORK_BASE.set_url(this.cboYN_MID.value == "Y"?"cmm::cmmCalMM.xfdl":"cmm::cmmCalYY.xfdl");
        		this.ctclWORK_BASE.form.TextBox.set_value(this.getOwnerFrame().WORK_BASE);

        		//적용년월
        		//this.ctclWORK_BASE.form.TextBox.set_value(this.cboYN_MID.value == "Y"?this.getOwnerFrame().WORK_BASE:this.getOwnerFrame().WORK_BASE+"12");

        		/*20200317 주석처리
         		this.ctclWORK_BASE.set_url(this.cboYN_MID.value == "Y"?"cmm::cmmCalMM.xfdl":"cmm::cmmCalYY.xfdl");
        		this.ctclWORK_BASE_TO.set_url(this.cboYN_MID.value == "Y"?"cmm::cmmCalMM.xfdl":"cmm::cmmCalYY.xfdl");
         		this.ctclWORK_BASE.form.TextBox.set_value(this.getOwnerFrame().WORK_BASE);
        		this.ctclWORK_BASE_TO.form.TextBox.set_value(this.getOwnerFrame().WORK_BASE);
         		this.staWORK_BASE.set_text(this.cboYN_MID.value=="Y"?"적용년월":"적용년도");

        		if(this.cboYN_MID.value == "Y"){ // 중도정산
        			this.staWORK_BASE_.set_visible(false);
        			this.ctclWORK_BASE_TO.set_visible(false);
        		}
        		*/
        		// 법인코드 및 법인명 기본세팅
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);

        		//주민번호
        		this.ccfID_RESIDENT.form.CDTextBox.set_value((this.getOwnerFrame().ID_RESIDENT).replace(/-/g,""));
        		this.ccfID_RESIDENT.form.DSTextBox.set_value(this.getOwnerFrame().DS_HNAME);
        		this.ccfID_SABUN.form.CDTextBox.set_value(this.getOwnerFrame().ID_SABUN);

        		//콤보박스 readonly
        		this.cboYN_MID.set_enable(false);

        	}else{
        		//적용년도
        		this.staWORK_BASE.set_text("적용년도");
        		this.ctclWORK_BASE.set_url("cmm::cmmCalYY.xfdl");
        		var ym_base = this.gfnAddMonth(this.gfnGetDate(),-12).substring(0,4);
        		//this.ctclWORK_BASE.form.TextBox.set_value(ym_base+"12");
        		this.ctclWORK_BASE.form.TextBox.set_value(ym_base);

        		// 법인코드 및 법인명 기본세팅
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        		/* 20200317 주석처리
        		this.ctclWORK_BASE.set_url("cmm::cmmCalYY.xfdl");
        		this.ctclWORK_BASE_TO.set_url("cmm::cmmCalYY.xfdl");
        		this.ctclWORK_BASE.form.TextBox.set_value(this.gfnGetDate().substr(0,4));
        		this.ctclWORK_BASE_TO.form.TextBox.set_value(this.gfnGetDate().substr(0,4));
        		this.staWORK_BASE.set_text("적용년도");
        		*/
        	}

        	//영수일자
        	this.ctclDT_RECEIPT.set_value(this.gfnGetDate());

        	//gr_search
        	/*
        	if (this.FormInfo.GR_SEARCH != "1") // 관리자가 아닐때
        	{
        		if(this.gfnIsNull(this.AuthClient.ID_PERSON)){ //임직원이 아닐때
        			this.divBtns.form.btnOK.set_enable(false);
        			this.divBtns.form.btnCANCLE.setFocus();
        			this.gfnAlert("임직원만 출력 가능합니다.");
        		}

         		// 법인코드 및 법인명 기본세팅
        		this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        		this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        		this.cboYN_MID.set_enable(false);
        		this.ctclWORK_BASE.set_enable(false);
        		this.cboTY_ISSUE.set_enable(false);
        		this.ctclDT_RECEIPT.set_enable(false);
        		this.rdoSEQ_ORDER.set_enable(false);
        		this.ccfCD_CORP.set_enable(false);
        		this.ccfID_RESIDENT.set_enable(false);

        		// 정렬순서, 주민번호 visible = false
        		this.staSEQ_ORDER.set_visible(false);
        		this.rdoSEQ_ORDER.set_visible(false);
        		this.sta12.set_visible(false);

        		this.staID_RESIDENT.set_visible(false);
        		this.ccfID_RESIDENT.set_visible(false);
        		this.sta08.set_visible(false);
        	}
        	*/

        	// 법인직인
        	this.dsReportParam.clearData();
        	this.dsReportParam.addRow();

        	this.dsImageFile.clearData();
        	this.dsImageFile.addRow();

        	this.dsImageFile.setColumn(0, "filepath", "/DA/CORP/" + this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsImageFile.setColumn(0, "filename", "STAMP_IMG.png");

        	// 서버 이미지파일 base64 로 받아오기
        	var strSvcId    = "selectIMG";
        	var strSvcType  = "file/imageFile";
        	var inProc      = "";
        	var inData      = "input=dsImageFile";
        	var outData     = "dsImageFile=input";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId,   	// transaction을 구분하기 위한 svc id값
        						strSvcType, 	// transaction을 요청할 구분
        						inProc,  		// Procedure 정보 Dataset 이름
        						inData,  		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData, 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg,  		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc,
        						false); 		// 통신방법 정의 [생략가능]
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
        	this.cboYN_MID   = this.divData.form.cboYN_MID;	//
        	this.staWORK_BASE   = this.divData.form.staWORK_BASE;	//
        	this.ccfID_RESIDENT    = this.divData.form.ccfID_RESIDENT;	// 사번
        	this.staID_RESIDENT    = this.divData.form.staID_RESIDENT;	// 사번
        	this.cboTY_ISSUE    = this.divData.form.cboTY_ISSUE;	// 사번

        	this.ctclWORK_BASE  = this.divData.form.ctclWORK_BASE;	// 적용년월
        	this.rdoYN_STAMP_IMG  	= this.divData.form.rdoYN_STAMP_IMG;	// 구분
        	this.rdoSEQ_ORDER  = this.divData.form.rdoSEQ_ORDER;	// 대상
        	this.ccfCD_CORP 	= this.divData.form.ccfCD_CORP;		// 법인
        	this.ctclDT_RECEIPT    = this.divData.form.ctclDT_RECEIPT;	// 사번

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드

        	this.ccfID_SABUN = this.divData.form.ccfID_SABUN;
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

        	//원천징수영수증출력 main
        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("YY_BASE", "string");
        	this.dsReport.addColumn("NO_APPLY", "int");
        	this.dsReport.addColumn("ID_RESIDENT", "string");
        	this.dsReport.addColumn("TY_ORDERBY", "int");
        	this.dsReport.addColumn("TY_SIGN", "int");
        	this.dsReport.addColumn("YN_MID", "string");
        	this.dsReport.addColumn("CD_CORP", "string");
        	this.dsReport.addColumn("YN_STAMP_IMG", "string");

        	//원천징수영수증출력 sub
        	this.dsReportSub = new Dataset();
        	this.dsReportSub.addColumn("YY_BASE", "string");
        	this.dsReportSub.addColumn("MM_BASE", "string");
        	this.dsReportSub.addColumn("NO_APPLY", "int");
        	this.dsReportSub.addColumn("ID_RESIDENT", "string");
        	this.dsReportSub.addColumn("YN_MID", "string");
        	this.dsReportSub.addColumn("CD_CORP", "string");

        	this.dsReportParam = new Dataset();
        	this.dsReportParam.addColumn("DT_PRINT", "STRING");
        	this.dsReportParam.addColumn("IMG", "STRING");

        	this.dsReport2 = new Dataset();
        	this.dsReport2.addColumn("ID_SABUN", 	"string");
        	this.dsReport2.addColumn("YM_SALARY", 	"string");
        	this.dsReport2.addColumn("TY_SALARY", 	"string");
        	this.dsReport2.addColumn("SN_SALARY", 	"string");
        	this.dsReport2.addColumn("CD_CORP", 	"string");
        	this.dsReport2.addColumn("TY_GUBUN", 	"string");

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

        	//적용년도
        	if (this.gfnIsNull(this.ctclWORK_BASE.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ctclWORK_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert(this.staWORK_BASE.text + "을/를 입력하세요.");
        		return false;
        	}

        	//영수일자
        	if (this.gfnIsNull(this.ctclDT_RECEIPT.value)) {
        		this.fnVaidateCallback = function() {
        			this.ctclDT_RECEIPT.setFocus();
        		}
        		this.gfnAlert("영수일자를 입력하세요.");
        		return false;
        	}

        	//법인
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	//주민번호
        // 	if (this.gfnIsNull(this.ccfID_RESIDENT.form.CDTextBox.value)) {
        // 		this.fnVaidateCallback = function() {
        // 			this.ccfID_RESIDENT.form.CDTextBox.setFocus();
        // 		}
        // 		this.gfnAlert("주민번호를 입력하세요.", "fnVaidateCallback");
        // 		return false;
        // 	}

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
        	if (svcID == "print") {
        		if (errorCode == 0) {
        			if(this.dsListRpt.rowcount > 0 ){
        				this.fnPrintProc("P");

        				if(this.gfnGetConfig("DA" , "YN_PRINT_RETIRE") == "Y"){
        					this.fnPrintProc2("P");
        				}

        			}else{
        				this.gfnAlert("조회된 데이터가 없습니다.");
        			}
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	} else if (svcID == "selectIMG") {
        		this.dsReportParam.setColumn(0, "IMG", this.dsImageFile.getColumn(0, "filereturn"));
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

        		case "ccfID_RESIDENT":
         			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
         				this.fnBeforeUserCallback = function() {
         						this.ccfCD_CORP.form.CDTextBox.setFocus();
         					}
         					this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
         					return false;
         			}
        			dsUserParam.setColumn(nrow, "GUBUN", "E");
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			//dsUserParam.setColumn(nrow, "CD_CORP", this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)==true?"%":this.ccfCD_CORP.form.CDTextBox.value);
        			break;

        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			this.ccfID_RESIDENT.form.CDTextBox.set_value("");
        			this.ccfID_RESIDENT.form.DSTextBox.set_value("");
        			break;

        		case "ccfID_RESIDENT"://주민등록번호
        			//this.ccfCD_CORP.form.CDTextBox.set_value(arr[0]["CD_CORP"]);
        			//this.ccfCD_CORP.form.DSTextBox.set_value(arr[0]["DS_CORP"]);
        			break;
        		default:
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
        	this.fnPrintProc("S");
        };

        this.fnPrintProc = function(callType){
        	if(!this.fnSelectValidate()) return false;

        	if(callType == "S"){
        	this.dsListRpt.clearData();

        	this.dsReport.clearData();//원천징수영수증출력 main
        	this.dsReportSub.clearData();//원천징수영수증출력 sub

        	this.dsReport.addRow();
        	this.dsReportSub.addRow();

        	//main
        	//this.dsReport.setColumn(0, "YY_BASE", this.cboYN_MID.value == "Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        	this.dsReport.setColumn(0, "YY_BASE", this.cboYN_MID.value == "Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,6):this.ctclWORK_BASE.form.TextBox.value);
        	this.dsReport.setColumn(0, "NO_APPLY", "1");
        	this.dsReport.setColumn(0, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        	this.dsReport.setColumn(0, "TY_ORDERBY", "2");		// 1 부서, 2 주민번호, 3 법인
        	this.dsReport.setColumn(0, "TY_SIGN", this.cboTY_ISSUE.value); //1	발행자 보고용,2	발행자 보관용,3	소득자 보관용
        	this.dsReport.setColumn(0, "YN_MID", this.cboYN_MID.value); //연말정산/중도정산
        	this.dsReport.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsReport.setColumn(0, "YN_STAMP_IMG", this.rdoYN_STAMP_IMG.value);

        	//sub
        	this.dsReportSub.setColumn(0, "YY_BASE", this.cboYN_MID.value == "Y"?this.ctclWORK_BASE.form.TextBox.value.substring(0,4):this.ctclWORK_BASE.form.TextBox.value);
        	this.dsReportSub.setColumn(0, "MM_BASE", this.cboYN_MID.value == "Y"?this.ctclWORK_BASE.form.TextBox.value.substring(4,6):"12");
        	this.dsReportSub.setColumn(0, "NO_APPLY",  "1");
        	this.dsReportSub.setColumn(0, "ID_RESIDENT", this.ccfID_RESIDENT.form.CDTextBox.value.replace(/-/g,""));
        	this.dsReportSub.setColumn(0, "YN_MID", this.cboYN_MID.value);
        	this.dsReportSub.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);


        		var strSvcId    = "print";
        		var strSvcType  = "select";
        		var inProc		= "_dsProc";
        		var inData      = "report=dsReport reportSub1=dsReportSub reportSub2=dsReportSub"; //원천징수영수증출력
        		var outData     = "dsListRpt=report0";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); // 통신방법 정의 [생략가능]
        	}else{
        		var inProc		= "_dsProc";
        		//var inParam 	= "";
        		//var inData      = "report=dsReport reportSub1=dsReportSub reportSub2=dsReportSub"; //원천징수영수증출력

        		var inParam      = "PARAM=dsListRpt PARAM1=dsReportParam";
        		var inData      = "report=dsReport reportSub1=dsReportSub reportSub2=dsReportSub param2=dsReportParam";
        		var reportpath  = "/da/dav/DAV_YEARENDRECEIPT.ozr";
        		//var reportpath  = "/da/dav/DAV_YEARENDRECEIPT_NEW.ozr";

        		gfnOpenReport(this, reportpath, inProc, inParam, inData, false, 'print');
        	}
        }

        this.fnPrintProc2 = function(callType){
        	this.dsReport2.clearData();

        	var nrow = this.dsReport2.addRow();

        	this.dsReport2.setColumn(0, "ID_SABUN", this.ccfID_SABUN.form.CDTextBox.value);
        	this.dsReport2.setColumn(0, "YM_SALARY", this.ctclWORK_BASE.form.TextBox.value.substring(0,6));
        	this.dsReport2.setColumn(0, "TY_SALARY", "R");
        	this.dsReport2.setColumn(0, "SN_SALARY", 1);
        	this.dsReport2.setColumn(0, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsReport2.setColumn(0, "TY_GUBUN", 	"D"); //D:화면 / E:E-MAIL

        	var inProc		= "_dsProc";
        	//var inParam 	= "params=dsReportParam";	// 조회SP이외 사용할 정보
        	var inParam 	= "";						// 필요없는 경우 생략
        	var inData      = "report1=dsReport2 report2=dsReport2 report3=dsReport2";
        	//var reportpath  = "/da/dau/DAU_SALARYPAYLIST_DLG.ozr";
        	var reportpath  = "/da/dau/DAU_SALARYPAYLIST_DLG_CBC.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);

        }

        this.btnCANCLE_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        this.cboYN_MID_canitemchange = function(obj,e)
        {

        	if(e.prevalue != e.postvalue){
        		if(e.postvalue == "Y"){ // 중도정산
        			this.staWORK_BASE.set_text("적용년월");
        			this.ctclWORK_BASE.set_url("cmm::cmmCalMM.xfdl");
        			this.ctclWORK_BASE.form.TextBox.set_value(this.gfnGetDate().substr(0,6));
        			//this.staWORK_BASE_.set_visible(false);
        			//this.ctclWORK_BASE_TO.set_visible(false);
        		}else{
        			this.staWORK_BASE.set_text("적용년도");
        			this.ctclWORK_BASE.set_url("cmm::cmmCalYY.xfdl");
        			this.ctclWORK_BASE.form.TextBox.set_value(this.gfnGetDate().substr(0,4));
        			//this.staWORK_BASE_.set_visible(true);
        			//this.ctclWORK_BASE_TO.set_visible(true);
        			//this.ctclWORK_BASE_TO.set_url("cmm::cmmCalYY.xfdl");
        			//this.ctclWORK_BASE_TO.form.TextBox.set_value(this.gfnGetDate().substr(0,4));
        		}
        	}

        };

        this.rdoYN_STAMP_IMG_onitemchanged = function(obj,e){
        	if(e.prevalue != e.postvalue){
        		if(e.postvalue == "Y"){
        			this.dsReportParam.setColumn(0, "IMG", this.dsImageFile.getColumn(0, "filereturn"));
        		} else {
        			this.dsReportParam.setColumn(0, "IMG", "");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.cboYN_MID.addEventHandler("canitemchange",this.cboYN_MID_canitemchange,this);
            this.divData.form.ctclDT_RECEIPT.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.rdoYN_STAMP_IMG.addEventHandler("onitemchanged",this.rdoYN_STAMP_IMG_onitemchanged,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
        };
        this.loadIncludeScript("DAV_YEARENDRECEIPTRPT_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
