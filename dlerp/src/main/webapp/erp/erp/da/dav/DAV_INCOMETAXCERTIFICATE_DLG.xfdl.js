(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAV_INCOMETAXCERTIFICATE_DLG");
            this.set_titletext("갑근세원천징수 확인서");
            this.getSetter("maxwidth").set("400");
            this.getSetter("maxheight").set("455");
            if (Form == this.constructor)
            {
                this._setFormPosition(370,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DAVPR_INCOMETAXCERTIFICATE_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","4","10","361","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("갑근세원천징수 확인서");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_TAX","4","132","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","105","132","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","4","45","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("법인코드");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","105","45","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","4","staCD_CORP:-1","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta08","105","74","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Static("staUSE_PURPOSE","4","190","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("사용목적");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta10","105","190","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","50","250","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DAX_CFCORP_CODEFIND");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_SELECTION","4","103","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("대상기간");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta16","105","103","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUSE_PURPOSE","109","195","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cboTY_TAX","109","137","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cboTY_TAX_innerdataset = new nexacro.NormalDataset("cboTY_TAX_innerdataset", obj);
            cboTY_TAX_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">I</Col><Col id=\"datacolumn\">비과세포함</Col></Row><Row><Col id=\"codecolumn\">O</Col><Col id=\"datacolumn\">비과세불포함</Col></Row></Rows>");
            obj.set_innerdataset(cboTY_TAX_innerdataset);
            obj.set_text("비과세 포함");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("calDT_FROM","109","108","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_TILDE","calDT_FROM:5","109","10","20",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("~");
            this.addChild(obj.name, obj);

            obj = new Static("sta11","4","161","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("신고구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta12","105","161","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoTY_SINGO","109","168","113","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdoTY_SINGO_innerdataset = new nexacro.NormalDataset("rdoTY_SINGO_innerdataset", obj);
            rdoTY_SINGO_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">매월</Col><Col id=\"codecolumn\">M</Col></Row><Row><Col id=\"datacolumn\">반기</Col><Col id=\"codecolumn\">H</Col></Row></Rows>");
            obj.set_innerdataset(rdoTY_SINGO_innerdataset);
            obj.set_text("매월");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staOR_SUBMIT","4","219","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("제출처");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta13","105","219","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtOR_SUBMIT","109","224","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("staNO_LICENSE","4","277","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("발급번호");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta17","105","277","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNO_LICENSE","109","282","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_readonly("false");
            this.addChild(obj.name, obj);

            obj = new Static("staDT_INSERT","4","248","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("작성일자");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta19","105","248","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Calendar("calDT_INSERT","109","253","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","85","344","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","120","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","30","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:5","79","250","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("28");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO_ALL");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","380","79","80","17",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","105","306","260","30",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_tablebg");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoYN_STAMP_IMG","109","313","113","20",null,null,null,null,null,null,this);
            obj.set_taborder("31");
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

            obj = new Static("sta01","4","306","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("인감여부");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Div("calDT_TO","staCD_TILDE:5","108","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","calDT_FROM.form.TextBox","value","dsSearch","YM_SALARY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","calDT_TO.form.TextBox","value","dsSearch","YM_SALARY");
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
        this.registerScript("DAV_INCOMETAXCERTIFICATE_DLG.xfdl", function() {
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



        	// 법인코드 및 법인명 기본세팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
            this.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);

        	//사번
        // 	this.ccfID_SABUN.form.CDTextBox.set_value(this.AuthClient.ID_SABUN);
        // 	this.ccfID_SABUN.form.DSTextBox.set_value(this.AuthClient.DS_HNAME);

        	//대상기간
        	this.calDT_FROM.form.TextBox.set_value(this.gfnAddMonth(this.gfnGetDate(),-11).substr(0,6));
        	this.calDT_TO.form.TextBox.set_value(this.gfnGetDate().substr(0,6));

        	//작성일자
        	this.calDT_INSERT.set_value(this.gfnGetDate());
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
        // 	this.dsReport = new Dataset();
        // 	this.dsReport.addColumn("CD_CORP", "string");
        // 	this.dsReport.addColumn("ID_SABUN", "string");
        // 	this.dsReport.addColumn("FR_BASE", "string");
        // 	this.dsReport.addColumn("TO_BASE", "string");
        // 	this.dsReport.addColumn("TY_TAX", "string");
        // 	this.dsReport.addColumn("TY_SINGO", "string");
        // 	this.dsReport.addColumn("YN_STAMP_IMG", "string");

        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("CD_CORP", "string");
        	this.dsReport.addColumn("ID_SABUN", "string");
        	this.dsReport.addColumn("FR_BASE", "string");
        	this.dsReport.addColumn("TO_BASE", "string");
        	this.dsReport.addColumn("TY_TAX", "string");
        	this.dsReport.addColumn("TY_SINGO", "string");
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

        	//법인
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	//사번
        	if (this.gfnIsNull(this.ccfID_SABUN.form.CDTextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ccfID_SABUN.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사번코드를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	//대상기간 FR
        	if (this.gfnIsNull(this.calDT_FROM.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.calDT_FROM.form.TextBox.setFocus();
        		}
        		this.gfnAlert("대상기간 시작일을 입력하세요.");
        		return false;
        	}

        	//대상기간 TO
        	if (this.gfnIsNull(this.calDT_TO.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.calDT_TO.form.TextBox.setFocus();
        		}
        		this.gfnAlert("대상기간 종료일을 입력하세요.");
        		return false;
        	}

        	if (this.calDT_FROM.form.TextBox.value > this.calDT_TO.form.TextBox.value )  {
        		this.fnDtVaidateCallback = function() {
        			this.calDT_TO.form.TextBox.setFocus();
        		}
        		this.gfnAlert("대상기간 시작일이 종료일보다 클 수 없습니다.", "fnDtVaidateCallback");
        		return false;
        	}

        	//사용목적
        	if (this.gfnIsNull(this.edtUSE_PURPOSE.value))  {
        		this.fnDtVaidateCallback = function() {
        			this.edtUSE_PURPOSE.setFocus();
        		}
        		this.gfnAlert("사용목적을 입력하세요.", "fnDtVaidateCallback");
        		return false;
        	}

        	//제출처
        	if (this.gfnIsNull(this.edtOR_SUBMIT.value))  {
        		this.fnDtVaidateCallback = function() {
        			this.edtOR_SUBMIT.setFocus();
        		}
        		this.gfnAlert("제출처를 입력하세요.", "fnDtVaidateCallback");
        		return false;
        	}

        	//작성일자
        	if (this.gfnIsNull(this.calDT_INSERT.value))  {
        		this.fnDtVaidateCallback = function() {
        			this.calDT_INSERT.setFocus();
        		}
        		this.gfnAlert("작성일자를 입력하세요.", "fnDtVaidateCallback");
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
        	if (svcID == "report") {
        		//trace(this.dsList.saveXML());

        		if(errorCode == 0){
        			if(this.dsList.rowcount >0){
        				this.fnPrintProc("P");
        			}else{
        				this.gfnAlert("조회된 내역이 없습니다.");
        			}
        		}else{
        			this.gfnAlert(errorMsg);
        		}

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

        		case "ccfID_SABUN": //사번
        			if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        				this.fnBeforeUserCallback = function() {
        						this.ccfCD_CORP.form.CDTextBox.setFocus();
        					}
        					this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        					return false;
        			}
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			dsUserParam.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "YN_CORP", "N");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "%");
        			break;

        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			this.ccfID_SABUN.form.CDTextBox.set_value("");
        			this.ccfID_SABUN.form.DSTextBox.set_value("");
        			this.edtID_PERSON.set_value("");
        			break;

        		case "ccfID_SABUN"://사번
        			if(arr.length > 0) {
        				this.edtID_PERSON.set_value(arr[0]["ID_PERSON"]);
        			}else{
        				this.edtID_PERSON.set_value("");
        			}
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
        	//this.getParentContext().close(true);
        };

        this.fnPrintProc = function(callType){

        	if(!this.fnSelectValidate()) return false;


        	this.dsReport.clearData();
        	var nrow = this.dsReport.addRow();

        	this.dsReport.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsReport.setColumn(nrow, "ID_SABUN", this.ccfID_SABUN.form.CDTextBox.value);
        	this.dsReport.setColumn(nrow, "FR_BASE", this.calDT_FROM.form.TextBox.value);
        	this.dsReport.setColumn(nrow, "TO_BASE", this.calDT_TO.form.TextBox.value);
        	this.dsReport.setColumn(nrow, "TY_TAX", this.cboTY_TAX.value);
        	this.dsReport.setColumn(nrow, "TY_SINGO", this.rdoTY_SINGO.value);
        	//this.dsReport.setColumn(nrow, "YN_STAMP_IMG", this.rdoYN_STAMP_IMG.value);



        	if(callType == "S"){
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
        	}else{
        		var inProc		= "_dsProc";
        		var inParam 	= "";	//"params=dsReportParam"
        		var inData      = "report=dsReport";
        		var reportpath  = "/da/daa/DAA_CERTIFICATE_G.ozr";

        		gfnOpenReport(this, reportpath, inProc, inParam, inData);
        	}

        }

        this.btnCANCLE_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.calDT_INSERT.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
        };
        this.loadIncludeScript("DAV_INCOMETAXCERTIFICATE_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
