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
            this.set_titletext("평가자 변경");
            this.getSetter("maxwidth").set("500");
            this.getSetter("maxheight").set("480");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,430);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"STATE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">combo</Col><Col id=\"SP\">DAXPR_EVAL_TERMS_COMBO</Col></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAJPR_EVAL_TARGET_CHANGEID</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTERM_EVAL", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"TERM_EVAL\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"TY_CHANGE\" type=\"STRING\" size=\"256\"/><Column id=\"ID_1STSABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_2NDSABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","0","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("평가자 변경");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staTERM_EVAL","10","45","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("평가기수");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staTERM_EVAL1","96","45","344","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cboTERM_EVAL","101","50","100","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_datacolumn("DS_CODE");
            obj.set_codecolumn("CD_CODE");
            obj.set_innerdataset("dsTERM_EVAL");
            obj.set_text("");
            obj.set_value("%");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN2","96","265","344","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","10","265","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","102","270","320","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_fittocontents("none");
            var rdoTY_GUBUN_innerdataset = new nexacro.NormalDataset("rdoTY_GUBUN_innerdataset", obj);
            rdoTY_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">전체 변경</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1차평가자 변경</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2차평가자 변경</Col></Row></Rows>");
            obj.set_innerdataset(rdoTY_GUBUN_innerdataset);
            obj.set_text("전체 변경");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staID_SABUN","10","74","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("피평가자");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staID_SABUN1","96","74","344","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("ccfID_SABUN","101","79","200","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_EVAL_TARGET_CODEFIND");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE00","0","130","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("현재 정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staID_1STSABUN_BEF","10","164","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("1차 평가자");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staID_1STSABUN1_BEF","96","164","344","30",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("ccfID_1STSABUN_BEF","101","169","200","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("21");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Static("staID_2NDSABUN_BEF","10","193","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("2차 평가자");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staID_2NDSABUN1_BEF","96","193","344","30",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("ccfID_2NDSABUN_BEF","101","198","200","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("22");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            obj.set_enableevent("false");
            this.addChild(obj.name, obj);

            obj = new Static("staTITLE01","0","230","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("변경 정보");
            obj.set_cssclass("sta_TITLE_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staID_1STSABUN","10","294","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("1차 평가자");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staID_1STSABUN1","96","294","344","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("ccfID_1STSABUN","101","299","200","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("13");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.addChild(obj.name, obj);

            obj = new Static("staID_2NDSABUN","10","323","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("2차 평가자");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staID_2NDSABUN1","96","323","344","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Div("ccfID_2NDSABUN","101","328","200","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("70");
            obj.set_taborder("16");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            obj.getSetter("CodeFindName").set("DAX_CFBASEINFO");
            obj.getSetter("BeforeUserDataSetParam").set("fnBeforeUserDataSetParam");
            obj.getSetter("AfterCDTextChanged").set("fnAfterCDTextChanged");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","128","367","200","40",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","0","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("12");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("13");
            obj.set_text("닫기");
            this.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cboTERM_EVAL","value","dsSave","TERM_EVAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ccfID_SABUN","value","dsSave","ID_SABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","rdoTY_GUBUN","value","dsSave","TY_CHANGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","ccfID_1STSABUN","value","dsSave","ID_1STSABUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","ccfID_2NDSABUN","value","dsSave","ID_2NDSABUN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAJ_EVALTARGET_DLG.xfdl", function() {
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
        	this.fnSetCombo();

        	this.cboTERM_EVAL.set_value(this.getOwnerFrame().TERM_EVAL);
        	this.ccfID_SABUN.form.CDTextBox.set_value(this.getOwnerFrame().ID_SABUN);
        	this.ccfID_SABUN.form.DSTextBox.set_value(this.getOwnerFrame().DS_HNAME);

        	this.ccfID_1STSABUN_BEF.form.CDTextBox.set_value(this.getOwnerFrame().ID_1STSABUN_BEF);
        	this.ccfID_1STSABUN_BEF.form.DSTextBox.set_value(this.getOwnerFrame().DS_1STSABUN_BEF);
        	this.ccfID_2NDSABUN_BEF.form.CDTextBox.set_value(this.getOwnerFrame().ID_2NDSABUN_BEF);
        	this.ccfID_2NDSABUN_BEF.form.DSTextBox.set_value(this.getOwnerFrame().DS_2NDSABUN_BEF);
        	this.rdoTY_GUBUN.set_value("0");

        	this.ccfID_1STSABUN.form.CDTextBox.set_value(this.getOwnerFrame().ID_1STSABUN);
        	this.ccfID_1STSABUN.form.DSTextBox.set_value(this.getOwnerFrame().DS_1STSABUN);
        	this.ccfID_2NDSABUN.form.CDTextBox.set_value(this.getOwnerFrame().ID_2NDSABUN);
        	this.ccfID_2NDSABUN.form.DSTextBox.set_value(this.getOwnerFrame().DS_2NDSABUN);
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



        }

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {


        };

        // 확인
        this.btnOK_onclick = function(obj,e)
        {
        	if (!this.fnDataValidate()) return;

        	this.gfnConfirm("평가자를 변경하시겠습니까?", "fnCopyCallback");
        };

        this.btnCANCLE_onclick = function(obj,e)
        {
        	// 취소
        	this.getParentContext().close(false);
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
         this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {
        	if (id == "ccfID_SABUN") {
        		dsUserParam.setColumn(nrow, "TERM_EVAL", this.cboTERM_EVAL.value);
        	}

        	if (id == "ccfID_1STSABUN" || id == "ccfID_2NDSABUN"){
        		dsUserParam.setColumn(nrow, "GR_SEARCH", "%");
        		dsUserParam.setColumn(nrow, "CD_DEPT", "%");
        		dsUserParam.setColumn(nrow, "TY_RETIRE", "01");
        	}


        	return true;
        }


        /************************************************************************
         * Validate
         ************************************************************************/
        this.fnDataValidate = function(){
        	var msg = "은(는) 필수입력 입니다.";


        	if(this.gfnIsNull(this.gfnTrim(this.cboTERM_EVAL.value))){
        		this.gfnAlert("평가기수" + msg);
        		this.cboTERM_EVAL.setFocus();
        		return false;
        	}
        	if(this.gfnIsNull(this.gfnTrim(this.ccfID_SABUN.form.CDTextBox.value))){
        		this.gfnAlert("피평가자" + msg);
        		return false;
        	}

        	// 구분에 따라 1차평가자, 2차평가자 필수 validation 변경
        	if (this.rdoTY_GUBUN.value == "1"){
        		if(this.gfnIsNull(this.gfnTrim(this.ccfID_1STSABUN.form.CDTextBox.value))){
        			this.gfnAlert("[변경정보] 1차 평가자" + msg);
        			return false;
        		}
        	} else if (this.rdoTY_GUBUN.value == "2"){
        		if(this.gfnIsNull(this.gfnTrim(this.ccfID_2NDSABUN.form.CDTextBox.value))){
        			this.gfnAlert("[변경정보] 2차 평가자" + msg);
        			return false;
        		}
        	} else {
        		if(this.gfnIsNull(this.gfnTrim(this.ccfID_1STSABUN.form.CDTextBox.value)) || this.gfnIsNull(this.gfnTrim(this.ccfID_2NDSABUN.form.CDTextBox.value))){
        			this.gfnAlert("[변경정보] 1차, 2차 평가자" + msg);
        			return false;
        		}
        	}

        	return true;
        }

        this.fnAfterCDTextChanged = function(id, codeFindData) {
        	var arr = codeFindData;
        	switch(id) {
        		case "ccfID_SABUN":
        			this.ccfID_SABUN.form.CDTextBox.set_value(arr[0]["ID_SABUN"]);
        			this.ccfID_SABUN.form.DSTextBox.set_value(arr[0]["DS_HNAME"]);
        			this.ccfID_1STSABUN_BEF.form.CDTextBox.set_value(arr[0]["ID_1STSABUN"]);
        			this.ccfID_1STSABUN_BEF.form.DSTextBox.set_value(arr[0]["DS_1STSABUN"]);
        			this.ccfID_2NDSABUN_BEF.form.CDTextBox.set_value(arr[0]["ID_2NDSABUN"]);
        			this.ccfID_2NDSABUN_BEF.form.DSTextBox.set_value(arr[0]["DS_2NDSABUN"]);
        			break;
        		default:
        	}

        }

        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return;
        	}

        	switch(svcID) {
        		case "combo":
        			if (!this.gfnIsNull(this.getOwnerFrame().TERM_EVAL)) {
        				this.cboTERM_EVAL.set_value(this.getOwnerFrame().TERM_EVAL);
        			}
        		break;
        		case "save":
        			if (errorCode != 0) {
        				this.gfnAlert(errorMsg);
        				return;
        			} else {
        				this.getParentContext().close(true);
        			}
        		break;

        		default:
        	}
        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        // update
        this.fnCopyCallback = function(strId, val)  {
        	if(val == false) return;

        	this.dsSave.setColumn(0, "TERM_EVAL", this.cboTERM_EVAL.value);
        	this.dsSave.setColumn(0, "ID_SABUN", this.ccfID_SABUN.form.CDTextBox.value);
        	this.dsSave.setColumn(0, "TY_CHANGE", this.rdoTY_GUBUN.value);
        	this.dsSave.setColumn(0, "ID_1STSABUN", this.ccfID_1STSABUN.form.CDTextBox.value);
        	this.dsSave.setColumn(0, "ID_2NDSABUN", this.ccfID_2NDSABUN.form.CDTextBox.value);
        	this.dsSave.setColumn(0, "ID_USER", this.AuthClient.ID_USER);

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
        }

        //평가기수 콤보 조회
        this.fnSetCombo = function() {

        	this.dsCombo = new Dataset();
        	this.dsCombo.addColumn("TY_SEL", "string");
        	this.dsCombo.addColumn("YEAR_EVAL", "string");

        	this.dsCombo.addRow();
        	this.dsCombo.setColumn(0, "TY_SEL", "P");	// A: 전체 P: 필수
        	this.dsCombo.setColumn(0, "YEAR_EVAL", "");

        	var strSvcId    = "combo";
        	var strSvcType  = "select";
        	var inProc		= "_dsProc";
        	var inData      = "combo=dsCombo";
        	var outData     = "dsTERM_EVAL=combo0";
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


        this.fnSearchInit = function(obj,e)
        {
        	// 평가기수 변경 시 피평가자, 현재정보, 변경정보 초기화
        	this.ccfID_SABUN.form.CDTextBox.set_value("");
        	this.ccfID_SABUN.form.DSTextBox.set_value("");

        	this.ccfID_1STSABUN_BEF.form.CDTextBox.set_value("");
        	this.ccfID_1STSABUN_BEF.form.DSTextBox.set_value("");
        	this.ccfID_2NDSABUN_BEF.form.CDTextBox.set_value("");
        	this.ccfID_2NDSABUN_BEF.form.DSTextBox.set_value("");
        	this.rdoTY_GUBUN.set_value("0");
        	this.ccfID_1STSABUN.set_enable(true);
        	this.ccfID_2NDSABUN.set_enable(true);
        	this.ccfID_1STSABUN.form.CDTextBox.set_value("");
        	this.ccfID_1STSABUN.form.DSTextBox.set_value("");
        	this.ccfID_2NDSABUN.form.CDTextBox.set_value("");
        	this.ccfID_2NDSABUN.form.DSTextBox.set_value("");

        };

        this.rdoTY_GUBUN_onitemchanged = function(obj,e)
        {
        	// 구분이 변경되었을 때
        	if (this.rdoTY_GUBUN.value == "1"){
        		this.ccfID_1STSABUN.set_enable(true);
        		this.ccfID_2NDSABUN.form.CDTextBox.set_value("");
        		this.ccfID_2NDSABUN.form.DSTextBox.set_value("");
        		this.ccfID_2NDSABUN.set_enable(false);
        	} else if (this.rdoTY_GUBUN.value == "2"){
        		this.ccfID_1STSABUN.form.CDTextBox.set_value("");
        		this.ccfID_1STSABUN.form.DSTextBox.set_value("");
        		this.ccfID_1STSABUN.set_enable(false);
        		this.ccfID_2NDSABUN.set_enable(true);
        	} else {
        		this.ccfID_2NDSABUN.form.CDTextBox.set_value("");
        		this.ccfID_2NDSABUN.form.DSTextBox.set_value("");
        		this.ccfID_1STSABUN.form.CDTextBox.set_value("");
        		this.ccfID_1STSABUN.form.DSTextBox.set_value("");
        		this.ccfID_1STSABUN.set_enable(true);
        		this.ccfID_2NDSABUN.set_enable(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.cboTERM_EVAL.addEventHandler("onitemchanged",this.fnSearchInit,this);
            this.rdoTY_GUBUN.addEventHandler("onitemchanged",this.rdoTY_GUBUN_onitemchanged,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsSave.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_EVALTARGET_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
