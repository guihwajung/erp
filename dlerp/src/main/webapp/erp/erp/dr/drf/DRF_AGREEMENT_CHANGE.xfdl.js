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
            this.set_titletext("별도계약 약정일변경");
            this.getSetter("maxwidth").set("430");
            this.getSetter("maxheight").set("350");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,310);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DRFPR_AGREEMENT_CHANGE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_ACNTUNIT\" type=\"STRING\" size=\"256\"/><Column id=\"TY_NAPIP\" type=\"STRING\" size=\"256\"/><Column id=\"NO_NAPCHA\" type=\"STRING\" size=\"256\"/><Column id=\"DT_STARTAGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ENDAGREE\" type=\"STRING\" size=\"256\"/><Column id=\"DT_STARTAGREE_CHG\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ENDAGREE_CHG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_ACNTUNIT\"/><Col id=\"TY_NAPIP\"/><Col id=\"NO_NAPCHA\"/><Col id=\"DT_STARTAGREE\"/><Col id=\"DT_ENDAGREE\"/><Col id=\"DT_STARTAGREE_CHG\"/><Col id=\"DT_ENDAGREE_CHG\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("별도계약 약정일변경");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SITE","0","55","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("사업지코드");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDS_SILHENG","0","staDS_SITE:-1","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_text("납입구분|차수");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTY_APPROVAL","0","staDS_SILHENG:-1","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_text("변경전 약정일자");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDT_CONFIRM","0","staTY_APPROVAL:-1","112","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_text("변경후 약정일자");
            obj.set_textAlign("left");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg1","staDS_SITE:-1","55","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg2","staDS_SILHENG:-1","staBg1:-1","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg3","staTY_APPROVAL:-1","staBg2:-1","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staBg4","staDT_CONFIRM:-1","staBg3:-1","289","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.addChild(obj.name, obj);

            obj = new Edit("edtTY_NAPIP","staDS_SILHENG:4","89","150","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_maxlength("50");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOk","32.50%","266","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("10");
            obj.set_text("확인");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnCancel","52.50%","266","60","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("11");
            obj.set_text("취소");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_ACNTUNIT","116","60","280","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CFACNTUNIT_OPT");
            obj.getSetter("CDTextWidth").set("80");
            obj.set_taborder("12");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_STARTAGREE","116","118","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYM_IMPUTE_FROM00","tclDT_STARTAGREE:5","119","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("15");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_ENDAGREE","staYM_IMPUTE_FROM00:5","118","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_readonly("true");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_STARTAGREE_CHG","116","147","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("17");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYM_IMPUTE_FROM01","tclDT_STARTAGREE_CHG:5","148","10","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("16");
            obj.set_text("~");
            this.divData.addChild(obj.name, obj);

            obj = new Calendar("tclDT_ENDAGREE_CHG","staYM_IMPUTE_FROM01:5","147","100","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            obj.set_value("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","12","32","337","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("19");
            obj.set_text("약정일자를 납입구분, 차수별로 일괄변경합니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta01","13","182","337","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("20");
            obj.set_text("해당 납입구분|차수에 수납을 한 계약자가 있으면");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta02","13","202","337","20",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("21");
            obj.set_text("해당계약자는 약정일자를 변경하지 않습니다.");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfNO_NAPCHA","edtTY_NAPIP:5","89","98","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DRX_CFAGREEMENT_CHANGE_OPT_CODEFIND");
            obj.getSetter("CDTextWidth").set("75");
            obj.set_taborder("22");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divData.form.cfCD_ACNTUNIT.form.CDTextBox","value","dsData","CD_ACNTUNIT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divData.form.edtTY_NAPIP","value","dsData","TY_NAPIP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divData.form.tclDT_STARTAGREE","value","dsData","DT_STARTAGREE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.tclDT_ENDAGREE","value","dsData","DT_ENDAGREE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.tclDT_STARTAGREE_CHG","value","dsData","DT_STARTAGREE_CHG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divData.form.tclDT_ENDAGREE_CHG","value","dsData","DT_ENDAGREE_CHG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divData.form.cfNO_NAPCHA.form.CDTextBox","value","dsData","NO_NAPCHA");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DRF_AGREEMENT_CHANGE.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetExtendButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();

        	// 차수 비활성화 처리
        	this.cfNO_NAPCHA.form.CDTextBox.set_readonly(true);
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	//this.FormBtns.Select.set_enable(false);
        }

        /************************************************************************
         * 확장 버튼 : 화면별 버튼 설정 ID, function 연결 (화면버튼관리)
         ************************************************************************/
        this.fnSetExtendButton = function() {

        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	//this.dxGrid = this.divData.form.objGrid;
        	this.cfCD_ACNTUNIT = this.divData.form.cfCD_ACNTUNIT;
        	this.edtTY_NAPIP = this.divData.form.edtTY_NAPIP;
        	this.cfNO_NAPCHA = this.divData.form.cfNO_NAPCHA;
        	this.tclDT_STARTAGREE = this.divData.form.tclDT_STARTAGREE;
        	this.tclDT_ENDAGREE = this.divData.form.tclDT_ENDAGREE;
        	this.tclDT_STARTAGREE_CHG = this.divData.form.tclDT_STARTAGREE_CHG;
        	this.tclDT_ENDAGREE_CHG = this.divData.form.tclDT_ENDAGREE_CHG;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	this.cfCD_ACNTUNIT.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_NAPCHA.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.cfNO_NAPCHA.AfterCDTextChanged = "fnAfterCDTextChanged";
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSave = new Dataset();
        	this.dsSave.addColumn("CD_ACNTUNIT", "string");
        	this.dsSave.addColumn("TY_GUBUN", "string");
        	this.dsSave.addColumn("NO_CHASU", "string");
        	this.dsSave.addColumn("TY_NAPIP", "string");
        	this.dsSave.addColumn("NO_NAPCHA", "string");
        	this.dsSave.addColumn("DT_STARTAGREE", "string");
        	this.dsSave.addColumn("DT_ENDAGREE", "string");
        	this.dsSave.addColumn("DT_STARTAGREE_CHG", "string");
        	this.dsSave.addColumn("DT_ENDAGREE_CHG", "string");
        	this.dsSave.addColumn("ID_UPDATE", "string");
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/

        /************************************************************************
         * Validate
         ************************************************************************/

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (svcID == "save") {
        		if(errorCode == 0)
        		{
        			// this.close()가 작동하지 않았고,
        			// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        			this.getParentContext().close(true);
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	if(id == "cfCD_ACNTUNIT") {
        		dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        		dsUserParam.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        		dsUserParam.setColumn(nrow, "ID_GROUP", this.FormInfo.ID_GROUP);
        		dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        	}
        	if(id == "cfNO_NAPCHA") {
        		var CD_ACNTUNIT = this.dsData.getColumn(0, "CD_ACNTUNIT");
        		if(this.gfnIsNull(CD_ACNTUNIT)){
        			this.gfnAlert("사업지코드를 먼저 선택하세요.");
        			return false;
        		}

        		dsUserParam.setColumn(nrow, "CD_ACNTUNIT", this.dsData.getColumn(0, "CD_ACNTUNIT"));
        	}

        	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arrData = codeFindData;
        	if(id == "cfCD_ACNTUNIT") {
        		this.cfNO_NAPCHA.form.fnCodeFindClear();
        		this.dsData.setColumn(0, "TY_NAPIP", "");
        		this.dsData.setColumn(0, "DT_STARTAGREE", "");
        		this.dsData.setColumn(0, "DT_ENDAGREE", "");
        		this.dsData.setColumn(0, "DT_STARTAGREE_CHG", "");
        		this.dsData.setColumn(0, "DT_ENDAGREE_CHG", "");
        	}else if(id == "cfNO_NAPCHA") {
        		this.dsData.setColumn(0, "TY_NAPIP", arrData[0]["DS_NAPIP"]);
        		this.dsData.setColumn(0, "NO_NAPCHA", arrData[0]["NO_NAPCHA"]);
        		this.dsData.setColumn(0, "DT_STARTAGREE", nexacro.replaceAll(arrData[0]["DT_STARTAGREE"], "-", ""));
        		this.dsData.setColumn(0, "DT_ENDAGREE", nexacro.replaceAll(arrData[0]["DT_ENDAGREE"], "-", ""));
        		this.dsData.setColumn(0, "DT_STARTAGREE_CHG", nexacro.replaceAll(arrData[0]["DT_STARTAGREE"], "-", ""));
        		this.dsData.setColumn(0, "DT_ENDAGREE_CHG", nexacro.replaceAll(arrData[0]["DT_ENDAGREE"], "-", ""));
        		//this.ccfCD_DEPT_ACNT.form.fnCodeFindClear();
        	}
        }
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	if (!this.fnSaveValidate()) return false;

        	this.dsSave.clearData();
        	this.dsSave.addRow();

        	var tyNapip = "";

        	if(this.dsData.getColumn(0, "TY_NAPIP") == "계약금"){
        		tyNapip = "C";
        	}else if(this.dsData.getColumn(0, "TY_NAPIP") == "중도금"){
        		tyNapip = "J";
        	}else if(this.dsData.getColumn(0, "TY_NAPIP") == "잔금"){
        		tyNapip = "R";
        	}else if(this.dsData.getColumn(0, "TY_NAPIP") == "재계약"){
        		tyNapip = "S";
        	}else if(this.dsData.getColumn(0, "TY_NAPIP") == "분양전환계약금"){
        		tyNapip = "T";
        	}else if(this.dsData.getColumn(0, "TY_NAPIP") == "분양전환중도금"){
        		tyNapip = "V";
        	}else if(this.dsData.getColumn(0, "TY_NAPIP") == "분양전환잔금"){
        		tyNapip = "X";
        	}

        	this.dsSave.setColumn(0, "CD_ACNTUNIT", this.dsData.getColumn(0, "CD_ACNTUNIT").substr(0, 6));
        	this.dsSave.setColumn(0, "TY_GUBUN", this.dsData.getColumn(0, "CD_ACNTUNIT").substr(6, 1));
        	this.dsSave.setColumn(0, "NO_CHASU", this.dsData.getColumn(0, "CD_ACNTUNIT").substr(7, 2));
        	this.dsSave.setColumn(0, "TY_NAPIP", tyNapip);
        	this.dsSave.setColumn(0, "NO_NAPCHA", this.dsData.getColumn(0, "NO_NAPCHA"));
        	this.dsSave.setColumn(0, "DT_STARTAGREE", nexacro.replaceAll(this.dsData.getColumn(0, "DT_STARTAGREE"), "-", ""));
        	this.dsSave.setColumn(0, "DT_ENDAGREE", nexacro.replaceAll(this.dsData.getColumn(0, "DT_ENDAGREE"), "-", ""));
        	this.dsSave.setColumn(0, "DT_STARTAGREE_CHG", nexacro.replaceAll(this.dsData.getColumn(0, "DT_STARTAGREE_CHG"), "-", ""));
        	this.dsSave.setColumn(0, "DT_ENDAGREE_CHG", nexacro.replaceAll(this.dsData.getColumn(0, "DT_ENDAGREE_CHG"), "-", ""));
        	this.dsSave.setColumn(0, "ID_UPDATE", this.AuthClient.ID_USER);

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
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]


        };

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };


        this.fnSaveValidate = function() {
        	var validate = true;

        	if (this.gfnIsNull(this.dsData.getColumn(0,"CD_ACNTUNIT"))) {
        		validate = false;
        		// Alert후 실행할 처리
        		this.fnVaidateCallback = function() {
        			this.cfCD_ACNTUNIT.form.CDTextBox.setFocus();
        		}
        		this.gfnAlert("사업지코드는 반드시 입력 하셔야 합니다.", "fnVaidateCallback");
        	}else if (this.gfnIsNull(this.dsData.getColumn(0,"TY_NAPIP"))) {
        		validate = false;
        		this.gfnAlert("납입구분은 반드시 입력 하셔야 합니다.");
        	}else if (this.gfnIsNull(this.dsData.getColumn(0,"DT_STARTAGREE")) || this.gfnIsNull(this.dsData.getColumn(0,"DT_ENDAGREE"))) {
        		validate = false;
        		this.gfnAlert("변경전 약정일자는 반드시 입력 하셔야 합니다.");
        	}else if (this.gfnIsNull(this.dsData.getColumn(0,"DT_STARTAGREE_CHG")) || this.gfnIsNull(this.dsData.getColumn(0,"DT_ENDAGREE_CHG"))) {
        		validate = false;
        		this.gfnAlert("변경후 약정일자는 반드시 입력 하셔야 합니다.");
        	}

        	return validate;
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.staDS_SITE.addEventHandler("onclick",this.divData_staDS_SITE_onclick,this);
            this.divData.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.btnCancel.addEventHandler("onclick",this.divData_btnCancel_onclick,this);
            this.divData.form.staYM_IMPUTE_FROM00.addEventHandler("onclick",this.Common_onclick,this);
            this.divData.form.staYM_IMPUTE_FROM01.addEventHandler("onclick",this.Common_onclick,this);
        };
        this.loadIncludeScript("DRF_AGREEMENT_CHANGE.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
