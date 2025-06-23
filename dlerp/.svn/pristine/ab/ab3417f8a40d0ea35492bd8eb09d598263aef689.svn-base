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
            this.set_titletext("지급명세서 신고자료 출력물 생성");
            this.set_scrolltype("none");
            this.getSetter("maxwidth").set("400");
            this.getSetter("maxheight").set("450");
            if (Form == this.constructor)
            {
                this._setFormPosition(380,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DSBPR_JIGUBJOSEC_REPORT_SELECT</Col></Row><Row><Col id=\"TARGET\">report_test용</Col><Col id=\"SP\">DSBPR_JIGUBJOSEC_REPORT_SELECT_EYKIM</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCD_QUARTER", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">1/4분기</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">2/4분기</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"VALUE\">3/4분기</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"VALUE\">4/4분기</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"VALUE\">수시제출</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTY_REPORT", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"VALUE\">지급자제출용</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"VALUE\">지급자보관용</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"VALUE\">소득자보관용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWNUMBER\" type=\"INT\" size=\"256\"/><Column id=\"NO_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SAUP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_SAUPADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DS_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_TEL\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"YY_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_BAEBIN\" type=\"STRING\" size=\"256\"/><Column id=\"YM_GIGAN\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_COUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DATA_COUNT\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TT_AM_IMGUM\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TT_TAXFREE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TT_AM_SODUK\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"TT_AM_JUMIN\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"DS_EMPNAME\" type=\"STRING\" size=\"256\"/><Column id=\"NO_EMPTEL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_WOIGUG\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID1\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID2\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID3\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID4\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID5\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID6\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID7\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID8\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID9\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID10\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID11\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID12\" type=\"STRING\" size=\"256\"/><Column id=\"NO_ID13\" type=\"STRING\" size=\"256\"/><Column id=\"YM_JIGUB_01\" type=\"INT\" size=\"256\"/><Column id=\"YM_WORK_01\" type=\"INT\" size=\"256\"/><Column id=\"AM_IMGUM_01\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TAXFREE_01\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SODUK_01\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_JUMIN_01\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_WORK_01\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YM_JIGUB_02\" type=\"INT\" size=\"256\"/><Column id=\"YM_WORK_02\" type=\"INT\" size=\"256\"/><Column id=\"AM_IMGUM_02\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TAXFREE_02\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SODUK_02\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_JUMIN_02\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_WORK_02\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"YM_JIGUB_03\" type=\"INT\" size=\"256\"/><Column id=\"YM_WORK_03\" type=\"INT\" size=\"256\"/><Column id=\"AM_IMGUM_03\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_TAXFREE_03\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_SODUK_03\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"AM_JUMIN_03\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CT_WORK_03\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("지급명세서 신고자료 출력물 생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("staYY_BASE","20","50","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("귀속년도");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_SELFACNT","20","80","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("세무단위");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Div("cfCD_SELFACNT","staCD_SELFACNT:40","staCD_SELFACNT:-20","200","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("2");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.getSetter("CodeFindName").set("DHX_CFSELFACNT");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYY_BASE","staYY_BASE:40","51","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCalYY.xfdl");
            obj.set_enableevent("true");
            obj.set_text("2019");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYY_BASE","staYY_BASE:40","51","90","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCalMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","110","295","200","60",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","20","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("12");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("13");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("staDT_PRINT","20","110","50","20",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("제출일");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_PRINT","staDT_PRINT:50","staDT_PRINT:-21","115","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_QUARTER","220","50","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("귀속분기");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Combo("ccfCD_QUARTER","staCD_QUARTER:0","51","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCD_QUARTER");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_visible("false");
            obj.set_text("");
            obj.set_value("01");
            obj.set_index("1");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_REPORT","20","138","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("출력물구분");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Combo("ccfTY_REPORT","staTY_REPORT:40","staTY_REPORT:-19","120","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("dsTY_REPORT");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("VALUE");
            obj.set_text("지급자제출용");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Edit("txtCD_CORP","120","200","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_readonly("false");
            obj.set_visible("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("staNO_ID","20","170","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Div("cfNO_ID","staNO_ID:40","staNO_ID:-20","200","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("85");
            obj.set_taborder("14");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("staNO_ID00","20","200","60","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("소속법인");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Edit("edtNO_SABUN","333","170","37","20",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCalMM.xfdl");
        };
        
        // User Script
        this.registerScript("DSB_JIGUBJOSERPT_DLG_M.xfdl", function() {
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

        	//귀속년도
        	this.ctclYY_BASE.form.TextBox.set_value(this.getOwnerFrame().YY_BASE);

        	//법인
        	this.txtCD_CORP.set_value(this.getOwnerFrame().CD_CORP);

        	//귀속분기
         	this.ccfCD_QUARTER.set_value(this.getOwnerFrame().CD_QUARTER);

        	//제출일
        	this.ctclDT_PRINT.set_value(this.getOwnerFrame().txtDT_PRINT);

        	//성명 감춤
        	this.staNO_ID.set_visible(false);
        	this.cfNO_ID.set_visible(false);
        };

        // 확인
        this.btnOK_onclick = function(obj,e)
        {
        // 	if (!this.fnDataValidate()) return;
        //
        // 	var param = {};
        //
        // 	param.YY_BASE = this.ctclYY_BASE.form.TextBox.value;
        // 	param.CD_QUARTER = this.ccfCD_QUARTER.value;
        // 	param.CD_SELFACNT = this.gfnTrim(this.cfCD_SELFACNT.form.CDTextBox.value);
        // 	param.CD_CORP = this.txtCD_CORP.value;
        // 	param.txtDT_PRINT = this.ctclDT_PRINT.value;
        // 	param.txtTY_REPORT = this.ccfTY_REPORT.value;
        // 	var TY_REPORT = this.ccfTY_REPORT.value;
        // 	if (TY_REPORT != "0") {
        // 		param.txtNO_ID = this.gfnTrim(this.cfNO_ID.form.CDTextBox.value);
        // 	} else {
        // 		param.txtNO_ID = "";
        // 	}
        //
        // 	this.gfnFormOpen("DSB", "DSB_JIGUBJOSE_RPT", "", param);

        	//this.fnPrint("S");
        	this.fnPrint("P");
        };

        this.btnCANCLE_onclick = function(obj,e)
        {
        	// 취소
        	this.getParentContext().close(false);
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsReport = new Dataset();
        	this.dsReport.addColumn("YY_BASE", "string");
        	this.dsReport.addColumn("CD_QUARTER", "string");
        	this.dsReport.addColumn("CD_SELFACNT", "string");
        	this.dsReport.addColumn("CD_CORP", "string");
        	this.dsReport.addColumn("DT_PRINT", "string");
        	this.dsReport.addColumn("NO_ID", "string");

        	this.dsReportParam = new Dataset();
        	this.dsReportParam.addColumn("TY_REPORT", "string");

        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
         // 코드파인더
        this.fnSetEvent = function() {

            this.cfCD_SELFACNT.CodeFindName = "DHX_CFSELFACNT";
         	this.cfCD_SELFACNT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
         	this.cfCD_SELFACNT.AfterCDTextChanged = "fnAfterCDTextChanged";

        	this.cfNO_ID.CodeFindName = "DSX_CFEMPLOYEE_07";
         	this.cfNO_ID.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
         	this.cfNO_ID.AfterCDTextChanged = "fnAfterCDTextChanged";

        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if(id == "cfCD_SELFACNT") {
        		dsUserParam.setColumn(nrow, "CD_CORP", this.txtCD_CORP.value);
        	}

        	if(id == "cfNO_ID") {}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;

        	if(id == "cfCD_SELFACNT") {
        		//this.gfnSetFormStatus(this, "I");
        	} else if(id == "cfNO_ID") {
        		if(arr.length >0){
        			this.edtNO_SABUN.set_value(arr[0]["NO_SABUN"]);
        		}
        	}
        }

        this.fnDataValidate = function(){

        	if(this.gfnIsNull(this.ctclYY_BASE.form.TextBox.value)) {
        		this.ctclYY_BASE.form.TextBox.setFocus();
        		this.gfnAlert("귀속년도가 입력되지 않았습니다.");
        		return false;
        	}
        	if(this.gfnIsNull(this.cfCD_SELFACNT.form.CDTextBox.value)) {
        		this.cfCD_SELFACNT.form.CDTextBox.setFocus();
        		this.gfnAlert("세무단위가 입력되지 않았습니다.");
        		return false;
        	}
        	if(this.gfnIsNull(this.ctclDT_PRINT.value)) {
        		this.ctclDT_PRINT.setFocus();
        		this.gfnAlert("제출일이 입력되지 않았습니다.");
        		return false;
        	}
        	var TY_REPORT = this.ccfTY_REPORT.value;
        	if (TY_REPORT != "0") {
        		if(this.gfnIsNull(this.cfNO_ID.form.CDTextBox.value)) {
        			this.cfNO_ID.form.CDTextBox.setFocus();
        			this.gfnAlert("성명이 입력되지 않았습니다.");
        			return false;
        		}
        	}
        	return true;
        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if(svcID == "select") {
        		// 작성
        	} else if(svcID == "save") {

        	}
        }

        this.fnPrint = function(callType) {

        	var sYY_BASE = this.ctclYY_BASE.form.TextBox.value;
        	if(this.gfnIsNull(sYY_BASE)) {
        		this.ctclYY_BASE.form.TextBox.setFocus();
        		this.gfnAlert("귀속년월이 입력되지 않았습니다.");
        		return false;
        	}
         	var sCD_QUARTER = this.ccfCD_QUARTER.value;
        // 	if(this.gfnIsNull(sCD_QUARTER)) {
        // 		this.ccfCD_QUARTER.setFocus();
        // 		this.gfnAlert("귀속분기가 입력되지 않았습니다.");
        // 		return false;
        // 	}
        	var sCD_SELFACNT = this.cfCD_SELFACNT.form.CDTextBox.value;
        	if(this.gfnIsNull(sCD_SELFACNT)) {
        		this.cfCD_SELFACNT.form.CDTextBox.setFocus();
        		this.gfnAlert("세무단위가 입력되지 않았습니다.");
        		return false;
        	}
        	var sDT_PRINT = this.ctclDT_PRINT.value;
        	if(this.gfnIsNull(sDT_PRINT)) {
        		this.ctclDT_PRINT.setFocus();
        		this.gfnAlert("제출일이 입력되지 않았습니다.");
        		return false;
        	}
        	var TY_REPORT = this.ccfTY_REPORT.value;
        	var sNO_ID = this.cfNO_ID.form.CDTextBox.value;
        	if (TY_REPORT != "0") {
        		if(this.gfnIsNull(sNO_ID)) {
        			this.cfNO_ID.form.CDTextBox.setFocus();
        			this.gfnAlert("성명이 입력되지 않았습니다.");
        			return false;
        		}
        	}

        	this.dsReport.clearData();
        	this.dsReport.addRow();

        	this.dsReport.setColumn(0, "YY_BASE", sYY_BASE);
        	this.dsReport.setColumn(0, "CD_QUARTER",  sCD_QUARTER);
        	this.dsReport.setColumn(0, "CD_SELFACNT", sCD_SELFACNT);
        	this.dsReport.setColumn(0, "CD_CORP", this.txtCD_CORP.value);
        	this.dsReport.setColumn(0, "DT_PRINT", sDT_PRINT);
        	this.dsReport.setColumn(0, "NO_ID", sNO_ID);

        	this.dsReportParam.clearData();
        	this.dsReportParam.addRow();
        	this.dsReportParam.setColumn(0, "TY_REPORT", "( "+this.ccfTY_REPORT.text+" )");

        	if(callType == "S"){
        		var strSvcId    = "select";
        		var strSvcType  = "grid";
        		var inProc		= "_dsProc";
        		var inData      = "report=dsReport";
        		var outData     = "dsList=report0";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcType , 	// transaction을 요청할 구분
        							inProc,			// Procedure 정보 Dataset 이름
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc);   // 통신방법 정의 [생략가능]
        	}else{

        		var inProc		= "_dsProc";
        		var inParam 	= "";						// 필요없는 경우 생략
        		var inParam 	= "params=dsReportParam";
        		var inData      = "report=dsReport";
        		var reportpath  = "/ds/dsb/DSB_JIGUBJOSE_RPT.ozr";

        		gfnOpenReport(this, reportpath, inProc, inParam, inData);
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/


        this.ccfTY_REPORT_onitemchanged = function(obj,e){
        	var TY_REPORT = this.ccfTY_REPORT.value;

        	if (TY_REPORT == "0") {
        		this.staNO_ID.set_visible(false);
        		this.cfNO_ID.set_visible(false);
        	} else {
        		this.staNO_ID.set_visible(true);
        		this.cfNO_ID.set_visible(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.ccfTY_REPORT.addEventHandler("onitemchanged",this.ccfTY_REPORT_onitemchanged,this);
        };
        this.loadIncludeScript("DSB_JIGUBJOSERPT_DLG_M.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
