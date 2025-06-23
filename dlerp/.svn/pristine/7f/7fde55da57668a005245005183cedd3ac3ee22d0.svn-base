(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAW_RETIRERECEIPT_DLG");
            this.set_titletext("퇴직소득 원천징수영수증");
            this.getSetter("maxwidth").set("381");
            this.getSetter("maxheight").set("330");
            if (Form == this.constructor)
            {
                this._setFormPosition(341,270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DAWPR_RETIRERECEIPT_HOPE2015_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsImageFile", this);
            obj._setContents("<ColumnInfo><Column id=\"filepath\" type=\"STRING\" size=\"256\"/><Column id=\"filename\" type=\"STRING\" size=\"256\"/><Column id=\"filereturn\" type=\"STRING\" size=\"10000\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0",null,"30","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("퇴직소득 원청징수 영수증");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","93","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta06","86","93","255","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","0","180","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_tablelabel");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta08","86","180","255","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","98","240","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DAX_CFCORP2");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","68","220","200",null,null,"0",null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","120","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","30","0","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Static("staYM_RETIRE","0","64","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_text("작업년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta04","86","64","255","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYM_RETIRE","staYM_RETIRE:5","69","80","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_PRINT","0","122","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("영수일자");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","86","122","255","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_PRINT","92","127","105","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","staID_SABUN:5","185","240","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            obj.set_enable("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_WORK","0","35","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_text("작업구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","86","35","255","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Combo("cboTY_WORK","92","40","120","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_readonly("false");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divData_form_cboTY_WORK_innerdataset = new nexacro.NormalDataset("divData_form_cboTY_WORK_innerdataset", obj);
            divData_form_cboTY_WORK_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">발행자 보고용</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">발행자 보관용</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">소득자 보관용</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_cboTY_WORK_innerdataset);
            obj.set_text("발행자 보고용");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","0","151","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_text("구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","86","151","255","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.divData.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","94","156","128","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var divData_form_rdoTY_GUBUN_innerdataset = new nexacro.NormalDataset("divData_form_rdoTY_GUBUN_innerdataset", obj);
            divData_form_rdoTY_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">임직원</Col></Row><Row><Col id=\"codecolumn\">T</Col><Col id=\"datacolumn\">일용직</Col></Row></Rows>");
            obj.set_innerdataset(divData_form_rdoTY_GUBUN_innerdataset);
            obj.set_text("임직원");
            obj.set_value("1");
            obj.set_index("0");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtID_PERSON","284","217","48","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_visible("false");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ctclYM_RETIRE.form.TextBox","value","dsSearch","DT_WORK");
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
        this.registerScript("DAW_RETIRERECEIPT_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.NO_RETIRE = "1";
        //파일경로
        this.filepath = "/DA/CORP/";
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

        	//이전 화면 값
        	if(!this.gfnIsNull(this.getOwnerFrame().ID_SABUN)) {
        		//구분
        		//this.rdoTY_GUBUN.set_value(this.getOwnerFrame().TY_GUBUN);
        		//작업년월
        		this.divData.form.ctclYM_RETIRE.form.TextBox.set_value(this.getOwnerFrame().YM_RETIRE);

        		// 법인코드 및 법인명 기본세팅
        		this.divData.form.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        		this.divData.form.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);

        		//주민번호
         		this.divData.form.ccfID_SABUN.form.CDTextBox.set_value(this.getOwnerFrame().ID_SABUN);
         		this.divData.form.ccfID_SABUN.form.DSTextBox.set_value(this.getOwnerFrame().DS_HNAME);

        		this.NO_RETIRE = this.getOwnerFrame().NO_RETIRE;

         		this.divData.form.ctclYM_RETIRE.set_enable(false);
         		this.divData.form.rdoTY_GUBUN.set_enable(false);
         		this.divData.form.ccfCD_CORP.set_enable(false);
         		this.divData.form.ccfID_SABUN.set_enable(false);
        	}else{
        		//작업년월
        		this.divData.form.ctclYM_RETIRE.form.TextBox.set_value(this.gfnGetDate().substr(0,6));

        		// 법인코드 및 법인명 기본세팅
        		this.divData.form.ccfCD_CORP.form.CDTextBox.set_value(this.AuthClient.CD_CORP);
        		this.divData.form.ccfCD_CORP.form.DSTextBox.set_value(this.AuthClient.DS_CORP);
        	}

        	//영수일자
        	this.divData.form.ctclDT_PRINT.set_value(this.gfnGetDate().substr(0,6));

        	//임직원구분 - 일반 삭제
        	this.divData.form.rdoTY_GUBUN.getInnerDataset().deleteRow(1);

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

        	this.dsReport.addColumn("YM_RETIRE", "string");
        	this.dsReport.addColumn("NO_RETIRE", "string");
        	this.dsReport.addColumn("TY_GUBUN", "string");
        	this.dsReport.addColumn("ID_RESIDENT", 	"string");
        	this.dsReport.addColumn("CD_DEPT", 	"string");
        	this.dsReport.addColumn("CD_CORP", 	"string");
        	this.dsReport.addColumn("ID_PERSON", "string");
        	this.dsReport.addColumn("ID_SABUN", "string");

        	this.dsReportParam = new Dataset();
        	this.dsReportParam.addColumn("DT_PRINT", "STRING");
        	this.dsReportParam.addColumn("IMG", "STRING");

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

         	var validate = true;

        	//작업년월
        	if(this.gfnIsNull(this.divData.form.ctclYM_RETIRE.form.TextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctclYM_RETIRE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("작업년월을 입력하세요.", "fnVaidateCallback");
        		return validate;
        	}

        	//법인
        	if (this.gfnIsNull(this.divData.form.ccfCD_CORP.form.CDTextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.divData.form.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
        		return validate;
        	}

        	//영수일자
        	if(this.gfnIsNull(this.divData.form.ctclDT_PRINT.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.divData.form.ctclDT_PRINT.setFocus();
        		}
        		this.gfnAlert("영수일자를 입력하세요.", "fnVaidateCallback");
        		return validate;
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
        		//this.gfnGridAfterSelect(this.dxGrid);
        	}
        	else if(svcID == "selectIMG"){
        		this.dsReportParam.setColumn(0, "IMG", this.dsImageFile.getColumn(0, "filereturn"));
        		//리포트 호출
        		this.reportPrint();
        	}
        	else if( svcID == "report"){
        		//trace(this.dsList.saveXML());
        		if(this.dsList.rowcount >0){
        			this.fnPrint("P");
        		}else{
        			this.gfnAlert("데이타가 없습니다.");
        		}
        	}

        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			break;

        		case "ccfID_SABUN"://사번
        			if (this.gfnIsNull(this.divData.form.ccfCD_CORP.form.CDTextBox.value)) {
        				this.fnBeforeUserCallback = function() {
        					this.divData.form.ccfCD_CORP.form.CDTextBox.setFocus();
        				}
        				this.gfnAlert("법인코드를 입력하세요.", "fnBeforeUserCallback");
        				return false;
        			}
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        			dsUserParam.setColumn(nrow, "TY_RETIRE", "04");	// 재직구분
        			break;

        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
        			this.divData.form.ccfID_SABUN.form.CDTextBox.set_value("");
        			this.divData.form.ccfID_SABUN.form.DSTextBox.set_value("");
        			break;
        		case "ccfID_SABUN": //
        // 			if(arr.length > 0) {
        // 				this.edtID_PERSON.set_value(arr[0]["ID_PERSON"]);
        // 			}else{
        // 				this.edtID_PERSON.set_value("");
        // 			}
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
        	if(!this.fnSelectValidate()) return false;

        	this.dsReportParam.clearData();
        	this.dsReportParam.addRow();

        	this.dsImageFile.clearData();
        	this.dsImageFile.addRow();

        	var key = this.divData.form.ccfCD_CORP.form.CDTextBox.value;

        	//this.dsImageFile.setColumn(0, "filepath", "/DA/BASEINFO" );
        	//this.dsImageFile.setColumn(0, "filename", "5.JPG");

        	this.dsImageFile.setColumn(0, "filepath", this.filepath + key );
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

        	//this.fnPrint("S");
        };

        //리포트 인쇄
        this.reportPrint = function (){

        	this.dsReport.clearData();

        	var nrow = this.dsReport.addRow();
        	this.dsReport.setColumn(nrow, "YM_RETIRE",	this.divData.form.ctclYM_RETIRE.form.TextBox.value);
        	this.dsReport.setColumn(nrow, "NO_RETIRE",	this.NO_RETIRE);
        	this.dsReport.setColumn(nrow, "TY_GUBUN",	this.divData.form.rdoTY_GUBUN.value);
        	this.dsReport.setColumn(nrow, "ID_RESIDENT", 	"");
        	this.dsReport.setColumn(nrow, "CD_DEPT", 	"");
        	this.dsReport.setColumn(nrow, "CD_CORP", 	this.divData.form.ccfCD_CORP.form.CDTextBox.value);
        	this.dsReport.setColumn(nrow, "ID_PERSON", 	"");
        	this.dsReport.setColumn(nrow, "ID_SABUN",	this.divData.form.ccfID_SABUN.form.CDTextBox.value);

        	var inProc		= "_dsProc";
        	var inParam 	= "params=dsReportParam";	// 조회SP이외 사용할 정보
        	var inData      = "report=dsReport";
        	var reportpath  = "/da/daw/DAW_RETIRERECEIPT.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);

        	this.getParentContext().close(true);
        }

        // this.fnPrint = function(callType){
        // 	if(!this.fnSelectValidate()) return false;
        //
        // 	this.dsReport.clearData();
        // 	var nrow = this.dsReport.addRow();
        //
        // 	this.dsReport.setColumn(nrow, "YM_RETIRE",	this.ctclYM_RETIRE.form.TextBox.value);
        // 	this.dsReport.setColumn(nrow, "NO_RETIRE",	this.NO_RETIRE);
        // 	this.dsReport.setColumn(nrow, "TY_GUBUN",	this.rdoTY_GUBUN.value);
        // 	this.dsReport.setColumn(nrow, "ID_RESIDENT", 	"");
        // 	this.dsReport.setColumn(nrow, "CD_DEPT", 	"");
        // 	this.dsReport.setColumn(nrow, "CD_CORP", 	this.ccfCD_CORP.form.CDTextBox.value);
        // 	this.dsReport.setColumn(nrow, "ID_PERSON", 	"");
        // 	this.dsReport.setColumn(nrow, "ID_SABUN",	this.ccfID_SABUN.form.CDTextBox.value);
        //
        // 	//this.dsReport.setColumn(nrow, "DT_PRINT",	this.ctclDT_PRINT.value);
        // 	//this.dsReport.setColumn(nrow, "TY_WORK",	this.cboTY_WORK.value);
        // 	// 작업구분 1:소득자 보관용 2:발행자 보관용 3:발행자 보고용
        //
        // 	if(callType == "S"){
        // 		var strSvcId    = "report";
        // 		var strSvcType  = "grid";
        // 		var inProc		= "_dsProc";
        // 		var inData      = "report=dsReport";
        // 		var outData     = "dsList=report0";
        // 		var strArg      = "";
        // 		var callBackFnc = "fnCallback";
        //
        // 		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 							strSvcType , 	// transaction을 요청할 구분
        // 							inProc,			// Procedure 정보 Dataset 이름
        // 							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 							strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 							callBackFnc); // 통신방법 정의 [생략가능]
        // 	}else{
        // 		var inProc		= "_dsProc";
        // 		//var inParam 	= "params=dsReportParam";	// 조회SP이외 사용할 정보
        // 		var inParam 	= "";						// 필요없는 경우 생략
        // 		var inData      = "report=dsReport";
        // 		var reportpath  = "/da/daw/DAW_RETIRERECEIPT.ozr";
        //
        // 		gfnOpenReport(this, reportpath, inProc, inParam, inData);
        // 	}
        // }

        this.btnCANCLE_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.sta04.addEventHandler("onclick",this.sta04_onclick,this);
            this.divData.form.ctclDT_PRINT.addEventHandler("onchanged",this.fnSearchInit,this);
            this.divData.form.cboTY_WORK.addEventHandler("onitemchanged",this.fnSearchInit,this);
        };
        this.loadIncludeScript("DAW_RETIRERECEIPT_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
