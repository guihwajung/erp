(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAV_YEARENDTRANSDLG");
            this.set_titletext("연말정산_공제신고서 별 출력");
            this.getSetter("maxwidth").set("395");
            this.getSetter("maxheight").set("340");
            if (Form == this.constructor)
            {
                this._setFormPosition(340,270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\">DAVPR_CHKYEARENDTRANS_SELECT</Col></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\">DAVPR_YEARENDTRANS_UPDATE</Col></Row><Row><Col id=\"TARGET\">selectyearEndA</Col><Col id=\"SP\">DAVPR_YEARENDSUBST_SELECT</Col></Row><Row><Col id=\"TARGET\">selectSubA1</Col><Col id=\"SP\">DAVPR_YEARENDSUBSTSUB1_SELECT</Col></Row><Row><Col id=\"TARGET\">selectPension</Col><Col id=\"SP\">DAVPR_YEARENDSUBSTPENSIONRPT_SELECT</Col></Row><Row><Col id=\"TARGET\">houseRpt</Col><Col id=\"SP\">DAVPR_YEARENDSUBSTHOUSERPT_SELECT</Col></Row><Row><Col id=\"TARGET\">houseMonth</Col><Col id=\"SP\">DAVPR_HOUSEMONTH_SELECT</Col></Row><Row><Col id=\"TARGET\">houseMoney</Col><Col id=\"SP\">DAVPR_HOUSEMONEY_SELECT</Col></Row><Row><Col id=\"TARGET\">houseRent</Col><Col id=\"SP\">DAVPR_HOUSERENT_SELECT</Col></Row><Row><Col id=\"TARGET\">medicalRpt</Col><Col id=\"SP\">DAVPR_MEDICALSUBST_PRINT</Col></Row><Row><Col id=\"TARGET\">giveRpt</Col><Col id=\"SP\">DAVPR_GIVESUBST_PRINT</Col></Row><Row><Col id=\"TARGET\">giveRptSubE1</Col><Col id=\"SP\">DAVPR_GIVESUBST_RPT_SELECT</Col></Row><Row><Col id=\"TARGET\">giveRptSubE2</Col><Col id=\"SP\">DAVPR_GIVESUBST_RPT2_SELECT</Col></Row><Row><Col id=\"TARGET\">reportF</Col><Col id=\"SP\">DAVPR_CARDSUBSTRPT_SELECT</Col></Row><Row><Col id=\"TARGET\">reportSubF1</Col><Col id=\"SP\">DAVPR_CARDSUBSTRPT1_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"YY_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"TY_REPORT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListRptF", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SAUPADDR\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DT_BIRTH\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RESIDENT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"YN_MID\" type=\"STRING\" size=\"256\"/><Column id=\"AM_LABORINCOME\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CARDSUBST\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST1_1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST1_2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST2_1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST2_2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST3_1\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBST3_2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBSTTOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBSTTOT2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBSTTOT3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBSTTOT4\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_CHECKTOT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SUBSTTOT5\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MYCARD2013\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MYCARD2014\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MYADD2013\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MYADD2014\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MYADDSANG2015\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MYCARD2015\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MYADDALL2014\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_MYADDHA2015\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListRptSubF1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","10",null,"30","3",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("공제신고서별 출력");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","0","73","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("법인");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta06","99","73","241","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:5","78","228","20",null,null,null,null,null,null,this);
            obj.getSetter("CodeFindName").set("DAX_CFCORP2");
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("1");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_visible("true");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            this.addChild(obj.name, obj);

            obj = new Static("staYY_BASE","0","44","100","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("적용년도");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","99","44","241","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYY_BASE","staYY_BASE:5","49","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","99","102","241","120",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_REPORT","0","102","100","120",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("보고서");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","69","234","200","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","114","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","28","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Radio("rdoTY_REPORT","staTY_REPORT:5","105","225","117",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var rdoTY_REPORT_innerdataset = new nexacro.NormalDataset("rdoTY_REPORT_innerdataset", obj);
            rdoTY_REPORT_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">공제신고서</Col></Row><Row><Col id=\"codecolumn\">B</Col><Col id=\"datacolumn\">연금저축 소득공제 명세서</Col></Row><Row><Col id=\"codecolumn\">C</Col><Col id=\"datacolumn\">월세소득 세액공제 명세서</Col></Row><Row><Col id=\"codecolumn\">D</Col><Col id=\"datacolumn\">의료비 명세서</Col></Row><Row><Col id=\"codecolumn\">E</Col><Col id=\"datacolumn\">기부금 명세서</Col></Row><Row><Col id=\"codecolumn\">F</Col><Col id=\"datacolumn\">신용카드 명세서</Col></Row></Rows>");
            obj.set_innerdataset(rdoTY_REPORT_innerdataset);
            obj.set_text("공제신고서");
            obj.set_value("A");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","rdoTY_REPORT","value","dsSearch","TY_REPORT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","ctclYY_BASE.form.TextBox","value","dsSearch","YY_BASE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAV_YEARENDSUBSTRPT_DLG.xfdl", function() {
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

        	// 적용년도(현재)
        	this.ctclYY_BASE.form.TextBox.set_value(this.getOwnerFrame().WORK_BASE);

        	// 법인코드 및 법인명 기본세팅
        	this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
        	this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);

        	// 보고서 구분
        	this.dsSearch.setColumn(0, "TY_REPORT", "A");
        	/*
        		A: 공제신고서 selectyearEndA, selectSubA1
        		B: 연금저축 소득공제 명세서 selectPension
        		C: 월세소득 세액공제 명세서 houseRpt, houseMonth, houseMoney, houseRent
        		D: 의료비 명세서 medicalRpt
        		E: 기부금 명세서 giveRpt, giveRptSubE1, giveRptSubE2
        		F: 신용카드 명세서 reportF, reportSubF1
        	*/
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
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

        	this.grSearch = this.FormInfo.GR_SEARCH;	// 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;	// 그룹코드
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
        	this.dsReport.addColumn("CD_CORP", "string");
        	this.dsReport.addColumn("YY_BASE", "string");
        	this.dsReport.addColumn("MM_BASE", "string");
        	this.dsReport.addColumn("YY_BASE_TO", "string");
        	this.dsReport.addColumn("MM_BASE_TO", "string");
        	this.dsReport.addColumn("NO_APPLY", "string");
        	this.dsReport.addColumn("ID_RESIDENT", "string");
        	this.dsReport.addColumn("ID_SABUN", "string");
        	this.dsReport.addColumn("TY_ORDERBY", "string");
        	this.dsReport.addColumn("YN_MID", "string");
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
        	if (this.gfnIsNull(this.ctclYY_BASE.form.TextBox.value)) {
        		this.fnVaidateCallback = function() {
        			this.ctclYY_BASE.form.TextBox.setFocus();
        		}
        		this.gfnAlert("적용년도를 입력하세요.", "fnVaidateCallback");
        		return false;
        	}

        	//법인
        	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        		validate = false;
        		this.fnVaidateCallback = function() {
        			this.ccfCD_CORP.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("법인코드를 입력하세요.", "fnVaidateCallback");
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
        	if (svcID == "reportF") {

        		/*
        		var inProc		= "_dsProc"; 								//이건 없으면 에러나서 그냥둠
        		var inParam 	= "params=dsListRptF";						// 조회SP이외 사용할 정보
        		var inData      = "reportSubF1=dsReport";// reportSub2=dsReport";// target=파라미터 Ds
        		var reportpath  = "/da/dav/DAV_CARDSUBST.ozr";

        		gfnOpenReport(this, reportpath, inProc, inParam, inData);
        		*/


        	} else if (svcID == "save"){
        		if (errorCode == 0) {
        			this.getParentContext().close(true);
        		} else {
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
        			dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			break;

        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	switch(id) {
        		case "ccfCD_CORP": // 법인코드
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

        	var TY_REPORT = this.dsSearch.getColumn(0, "TY_REPORT");
        	switch(TY_REPORT) {
        		case "A": // 공제신고서
        			this.fnPrintA();
        		break;
        		case "B": // 연금저축 소득공제 명세서
        			this.fnPrintB();
        		break;
        		case "C": // 월세소득 세액공제 명세서
        			this.fnPrintC();
        		break;
        		case "D": // 의료비 명세서
        			this.fnPrintD();
        		break;
        		case "E": // 기부금 명세서
        			this.fnPrintE();
        		break;
        		case "F": // 신용카드 명세서
        			this.fnPrintF();
        		break;
        		default:
        	}
        };

        this.btnCANCLE_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        // A 공제신고서 (DAV_INPUTDATA)
        this.fnPrintA = function() {

        	this.dsReport.clearData();
        	var nrow = this.dsReport.addRow();
        	this.dsReport.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsReport.setColumn(nrow, "YY_BASE", this.dsSearch.getColumn(0, "YY_BASE"));
        	this.dsReport.setColumn(nrow, "YY_BASE_TO", this.dsSearch.getColumn(0, "YY_BASE"));
        	this.dsReport.setColumn(nrow, "NO_APPLY", "1");
        	//this.dsReport.setColumn(nrow, "ID_RESIDENT", "");
        	this.dsReport.setColumn(nrow, "TY_ORDERBY", "1");
        	this.dsReport.setColumn(nrow, "YN_MID",	"N"); // (N:연말정산 Y:중도정산)

        	this.dsReport.setColumn(nrow, "CD_CORP", this.ccfCD_CORP.form.CDTextBox.value);
        	this.dsReport.setColumn(nrow, "YY_BASE", this.ctclYY_BASE.form.TextBox.value);
        	this.dsReport.setColumn(nrow, "MM_BASE", "12");
        	this.dsReport.setColumn(nrow, "YY_BASE_TO", this.ctclYY_BASE.form.TextBox.value);
        	this.dsReport.setColumn(nrow, "MM_BASE_TO", "12");
        	this.dsReport.setColumn(nrow, "NO_APPLY", "1");
        	this.dsReport.setColumn(nrow, "ID_RESIDENT", this.dsList.getColumn(this.dsList.rowposition, "ID_RESIDENT").replace(/-/g,""));
        	this.dsReport.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(this.dsList.rowposition, "ID_SABUN"));
        	this.dsReport.setColumn(nrow, "TY_ORDERBY", "1");
        	this.dsReport.setColumn(nrow, "YN_MID", "N");


        	var inProc		= "_dsProc";
        	//var inParam 	= "params=dsReportParam";	// 조회SP이외 사용할 정보
        	var inParam 	= "";						// 필요없는 경우 생략
        	var inData      = "selectyearEndA=dsReport selectSubA1=dsReport selectSubA2=dsReport selectSubA3=dsReport selectPension=dsReport";
        	var reportpath  = "/da/dav/DAV_YEARENDSUBST.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);

        };

        // B 연금저축 소득공제 명세서 (DAV_INPUTDATA)
        this.fnPrintB = function() {

        	var nrow = this.dsReport.addRow();
        	this.dsReport.setColumn(nrow, "YY_BASE", this.dsSearch.getColumn(0, "YY_BASE"));
        	this.dsReport.setColumn(nrow, "YY_BASE_TO", this.dsSearch.getColumn(0, "YY_BASE"));
        	this.dsReport.setColumn(nrow, "NO_APPLY", "1");
        	//this.dsReport.setColumn(nrow, "ID_RESIDENT", "");
        	this.dsReport.setColumn(nrow, "YN_MID",	"N"); // (N:연말정산 Y:중도정산)
        	this.dsReport.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsReport.setColumn(nrow, "DT_PRINT", this.gfnGetDate());
        	this.dsReport.setColumn(nrow, "MM_BASE", "12");
        	this.dsReport.setColumn(nrow, "TY_ORDERBY", "2");	// 1:부서,2:주민등록번호,3:법인

        	trace(this.dsReport.saveXML());

        	var inProc		= "_dsProc";
        	//var inParam 	= "params=dsReportParam";	// 조회SP이외 사용할 정보
        	var inParam 	= "";						// 필요없는 경우 생략
        	var inData      = "selectPension=dsReport";
        	var reportpath  = "/da/dav/DAV_YEARENDSUBSTPENSION.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        }

        // C 월세소득 세액공제 명세서 (DAV_INPUTDATA)
        this.fnPrintC = function() {
        	var nrow = this.dsReport.addRow();
        	this.dsReport.setColumn(nrow, "YY_BASE", this.dsSearch.getColumn(0, "YY_BASE"));
        	this.dsReport.setColumn(nrow, "MM_BASE", "12");
        	this.dsReport.setColumn(nrow, "NO_APPLY", "1");
        	//this.dsReport.setColumn(nrow, "ID_RESIDENT", "");
        	//this.dsReport.setColumn(nrow, "ID_SABUN", "");
        	this.dsReport.setColumn(nrow, "TY_ORDERBY", "2");	// 1 부서, 2 주민번호, 3 법인
        	this.dsReport.setColumn(nrow, "YN_MID",	"N"); // (N:연말정산 Y:중도정산)
        	this.dsReport.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));

        	trace(this.dsReport.saveXML());

        	var inProc		= "_dsProc";
        	//var inParam 	= "params=dsReportParam";	// 조회SP이외 사용할 정보
        	var inParam 	= "";						// 필요없는 경우 생략
        	var inData      = "houseRpt=dsReport houseMonth=dsReport houseMoney=dsReport houseRent=dsReport";
        	var reportpath  = "/da/dav/DAV_YEARENDSUBSTHOUSE.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        }

        // D 의료비 명세서
        this.fnPrintD = function() {

        	var nrow = this.dsReport.addRow();
        	this.dsReport.setColumn(nrow, "YY_BASE", this.dsSearch.getColumn(0, "YY_BASE"));
        	this.dsReport.setColumn(nrow, "MM_BASE", "12");
        	this.dsReport.setColumn(nrow, "NO_APPLY", "1");
        	this.dsReport.setColumn(nrow, "YN_MID",	"N"); // (N:연말정산 Y:중도정산)
        	this.dsReport.setColumn(nrow, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));

        	trace(this.dsReport.saveXML());

        	var inProc		= "_dsProc";
        	//var inParam 	= "params=dsReportParam";	// 조회SP이외 사용할 정보
        	var inParam 	= "";						// 필요없는 경우 생략
        	var inData      = "medicalRpt=dsReport";
        	var reportpath  = "/da/dav/DAV_MEDICALSUBST.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        }

        // E 기부금 명세서
        this.fnPrintE = function() {
        /*
        <Row>
                    <Col id="TARGET">giveRpt</Col>
                    <Col id="SP">DAVPR_GIVESUBST_RPT_SELECT</Col>
        </Row>
        <Row>
                    <Col id="TARGET">giveRptSub1</Col>
                    <Col id="SP">DAVPR_GIVESUBSTSUB1_RPT_SELECT</Col>
        </Row>
        <Row>
                    <Col id="TARGET">giveRptSub2</Col>
                    <Col id="SP">DAVPR_GIVESUBSTRPT2_SELECT</Col>
        </Row>

        		  ## SP 에러남..... 확인해서 _dsProc 추가 필요
        */

        	var inProc		= "_dsProc";
        	//var inParam 	= "params=dsReportParam";	// 조회SP이외 사용할 정보
        	var inParam 	= "";						// 필요없는 경우 생략
        	var inData      = "giveRpt=dsReport giveRptSub1=dsReport giveRptSub2=dsReport";
        	var reportpath  = "/da/dav/DAV_GIVESUBST.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        }

        // F 신용카드 명세서 (DAV_CARDSUBST)
        this.fnPrintF = function() {

        	this.dsListRptF.clearData();
        	this.dsListRptSubF1.clearData();
        	this.dsReport.clearData();

        	var nrow = this.dsReport.addRow();
        	this.dsReport.setColumn(nrow, "CD_CORP", 	this.dsSearch.getColumn(0, "CD_CORP"));
        	this.dsReport.setColumn(nrow, "YY_BASE", 	this.dsSearch.getColumn(0, "YY_BASE"));
        	this.dsReport.setColumn(nrow, "MM_BASE", 	"12");
        	this.dsReport.setColumn(nrow, "ID_RESIDENT", "");
        	this.dsReport.setColumn(nrow, "NO_APPLY",	"1");
        	this.dsReport.setColumn(nrow, "YN_MID",		"N"); // (N:연말정산 Y:중도정산)
        	this.dsReport.setColumn(nrow, "DT_PRINT",	this.gfnGetDate());

        	var strSvcId    = "reportF";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "reportF=dsReport reportSubF1=dsReport";
        	var outData     = "dsListRptF=reportF0 dsListRptSubF1=reportSub10";
        	var strArg 		= "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// trabsaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
         						callBackFnc,
        						false); // 통신방법 정의 [생략가능]

         	var inProc		= "_dsProc"; 								//이건 없으면 에러나서 그냥둠
         	var inParam 	= "params=dsListRptF";						// 조회SP이외 사용할 정보
         	var inData      = "reportF=dsReport reportSubF1=dsReport";// reportSub2=dsReport";// target=파라미터 Ds
         	var reportpath  = "/da/dav/DAV_CARDSUBST.ozr";

         	gfnOpenReport(this, reportpath, inProc, inParam, inData);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.sta04.addEventHandler("onclick",this.sta04_onclick,this);
            this.sta00.addEventHandler("onclick",this.sta04_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAV_YEARENDSUBSTRPT_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
