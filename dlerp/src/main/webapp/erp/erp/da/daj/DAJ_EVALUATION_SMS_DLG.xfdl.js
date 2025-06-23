(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAJ_EVALUATION_SMS_DLG");
            this.set_titletext("SMS알림");
            this.getSetter("maxwidth").set("500");
            this.getSetter("maxheight").set("400");
            if (Form == this.constructor)
            {
                this._setFormPosition(440,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TERM_EVAL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_1STSABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_2NDSABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">select</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">insert</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">update</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">delete</Col><Col id=\"SP\"/></Row><Row><Col id=\"TARGET\">save</Col><Col id=\"SP\">DAJPR_EVAL_FINAL_MSG_INSERT</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","10","336","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("SMS알림");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN","10","45","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("구분");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_MSG","10","74","87","200",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("내용");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("staDS_MSG2","96","74","330","200",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staTY_GUBUN2","96","45","330","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdoTY_GUBUN","staTY_GUBUN:5","50","250","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var rdoTY_GUBUN_innerdataset = new nexacro.NormalDataset("rdoTY_GUBUN_innerdataset", obj);
            rdoTY_GUBUN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">피평가자</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1차평가자</Col></Row><Row><Col id=\"datacolumn\">2차평가자</Col><Col id=\"codecolumn\">2</Col></Row></Rows>");
            obj.set_innerdataset(rdoTY_GUBUN_innerdataset);
            obj.set_text("피평가자");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new TextArea("edtDS_MSG","102","79","318","190",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","62","284","334","40",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","190","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","100","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","rdoTY_GUBUN","value","dsList","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","edtDS_MSG","value","dsList","DS_MSG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAJ_EVALUATION_SMS_DLG.xfdl", function() {
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
        	this.grSearch = this.FormInfo.GR_SEARCH;		// 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;		// 그룹코드
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {

        	//this.ccfCD_CORP.form.CDTextBox.set_value(this.getOwnerFrame().CD_CORP);
            //this.ccfCD_CORP.form.DSTextBox.set_value(this.getOwnerFrame().DS_CORP);

        	/*
        	var formType = this.getOwnerFrame().FORM_ID;	// DAR_VOLUNTEER_FINAL
        	if(this.getOwnerFrame().FORM_ID == "DAR_VOLUNTEER_FINAL"){
        		this.cboDS_RESULT.set_visible(true);
        		this.staDS_RESULT.set_visible(true);
        		this.staDS_RESULT2.set_visible(true);
        		this.fnSetCombo();
        		this.cboDS_RESULT.set_value("%");
        	}
        	*/
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        	var P_TERM_EVAL = this.getOwnerFrame().P_TERM_EVAL;
        	var P_ID_SABUN = this.getOwnerFrame().P_ID_SABUN;
        	var P_ID_1STSABUN = this.getOwnerFrame().P_ID_1STSABUN;
        	var P_ID_2NDSABUN = this.getOwnerFrame().P_ID_2NDSABUN;


        	this.dsList.setColumn(0, "TERM_EVAL", P_TERM_EVAL);
        	this.dsList.setColumn(0, "ID_SABUN", P_ID_SABUN);
        	this.dsList.setColumn(0, "ID_1STSABUN", P_ID_1STSABUN);
        	this.dsList.setColumn(0, "ID_2NDSABUN", P_ID_2NDSABUN);
        	this.dsList.setColumn(0, "TY_GUBUN", 0);
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {

        	if (this.gfnIsNull(this.edtDS_MSG.value)) {
        		this.gfnAlert("SMS 내용을 입력하세요.");
        		this.edtDS_MSG.setFocus();
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
        	if (svcID == "save") {
        		if (errorCode == 0) {
        			this.fnClose = function() {
        				this.getParentContext().close(true);
        			}
        			this.gfnAlert("작업이 완료되었습니다.", "fnClose");
        		} else {
        			this.gfnAlert(errorMsg);
        		}
        	}
        // 	else if(svcID == "save") {
        // 		if (errorCode == 0) {
        // 			this.FormBtns.Select.click();
        // 		} else {
        // 			this.gfnAlert(errorMsg);
        // 		}
        // 	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

         	switch(id) {
        		case "ccfNO_NOTICE": // 법인코드
        			//dsUserParam.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			//dsUserParam.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        			break;

        		default:
         	}
         	return true;
        };

        this.fnAfterCDTextChanged = function(id, codeFindData) {

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
        	if (!this.fnSaveValidate()) return false;

        	this.dsSms = new Dataset();
        	this.dsSms.addColumn("TERM_EVAL", "string");
        	this.dsSms.addColumn("TY_GUBUN", "string");
        	this.dsSms.addColumn("ID_SABUN", "string");
        	this.dsSms.addColumn("ID_1STSABUN", "string");
        	this.dsSms.addColumn("ID_2NDSABUN", "string");
        	this.dsSms.addColumn("DS_MSG", "string");
        	this.dsSms.addColumn("ID_LOGIN", "string");

        	this.dsSms.clearData();
        	var nrow = this.dsSms.addRow();

        	this.dsSms.setColumn(nrow, "TERM_EVAL", this.dsList.getColumn(0, "TERM_EVAL"));
        	this.dsSms.setColumn(nrow, "TY_GUBUN", this.dsList.getColumn(0, "TY_GUBUN"));
        	this.dsSms.setColumn(nrow, "ID_SABUN", this.dsList.getColumn(0, "ID_SABUN"));
        	this.dsSms.setColumn(nrow, "ID_1STSABUN", this.dsList.getColumn(0, "ID_1STSABUN"));
        	this.dsSms.setColumn(nrow, "ID_2NDSABUN", this.dsList.getColumn(0, "ID_2NDSABUN"));
        	this.dsSms.setColumn(nrow, "DS_MSG", this.dsList.getColumn(0, "DS_MSG"));
        	this.dsSms.setColumn(nrow, "ID_LOGIN", this.AuthClient.ID_USER);

        	var strSvcId    = "save";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "save=dsSms";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcType , 	// transaction을 요청할 구분
        						inProc,			// Procedure 정보 Dataset 이름
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        };

        this.btnCANCLE_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.rdoTY_GUBUN.addEventHandler("onitemchanged",this.rdoTY_GUBUN_onitemchanged,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
        };
        this.loadIncludeScript("DAJ_EVALUATION_SMS_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
