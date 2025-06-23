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
            this.set_titletext("퇴직추계액전표발행");
            this.getSetter("maxwidth").set("340");
            this.getSetter("maxheight").set("280");
            if (Form == this.constructor)
            {
                this._setFormPosition(330,270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_INSERT\" type=\"STRING\" size=\"256\"/><Column id=\"YM_BASE\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_CORP\"/><Col id=\"CD_CORP\"/><Col id=\"ID_INSERT\"/><Col id=\"DT_ACCOUNT\"/><Col id=\"YM_BASE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">slip</Col><Col id=\"SP\">DAWPR_RETIRE_EST_AUTOSLIP_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","20","100.00%","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("전표발행");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","8","127","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","45","170","200","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK","30","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("10");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","10","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("11");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("sta07","94","127","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACCOUNT","101","132","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","8","98","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("법인");
            obj.set_cssclass("sta_WF_tablelabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","94","98","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","101","103","180","20",null,null,null,null,null,null,this);
            obj.getSetter("CDTextWidth").set("30");
            obj.set_taborder("7");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","8","69","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("정산년월");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","94","69","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYM_BASE","101","74","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_url("cmm::cmmCalMM.xfdl");
            obj.set_enableevent("true");
            obj.set_text("2019");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item8","ctclDT_ACCOUNT","value","dsList","DT_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","ccfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ccfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","ctclYM_BASE.form.TextBox","value","dsList","YM_BASE");
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
        this.registerScript("DAW_RETIRE_ESTIMATE_SLIP_DLG.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().YM_BASE)) {
        		//var today = this.gfnGetDate().substring(0,8);
        		var baseDay = this.gfnGetLastDate(this.getOwnerFrame().YM_BASE+"01");  // 정산년월 말일
        		this.dsList.setColumn(0, "DT_ACCOUNT", baseDay);
        		this.dsList.setColumn(0, "ID_INSERT", this.AuthClient.ID_USER);
        		this.dsList.setColumn(0, "YM_BASE", this.getOwnerFrame().YM_BASE);
        		this.dsList.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP);
        		this.dsList.setColumn(0, "DS_CORP", this.getOwnerFrame().DS_CORP);
        	}
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.ccfCD_CORP;
        	this.ctclYM_BASE = this.ctclYM_BASE;
        	this.ctclDT_ACCOUNT = this.ctclDT_ACCOUNT;	//회계일자
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        	//법인
        	this.ccfCD_CORP.CodeFindName = "DAX_CFCORP";
        	this.ccfCD_CORP.BeforeUserDataSetParam = "fnBeforeUserDataSetParam";
        	this.ccfCD_CORP.AfterCDTextChanged = "fnAfterCDTextChanged";

        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsSlip = new Dataset();
        	this.dsSlip.addColumn("YM_BASE", "string");
        	this.dsSlip.addColumn("CD_CORP", "string");
        	this.dsSlip.addColumn("DT_ACCOUNT", "string");
        	this.dsSlip.addColumn("ID_INSERT", "string");
        }

        this.btnOK_onclick = function(obj,e)
        {
        	// 확인
        	if(!this.fnSaveValidate()) return;
        	this.gfnConfirm("전표발행 하시겠습니까?", "fnDlgfnSaveCallback");
        	//this.dlgfnSave();
        };

        // 전표발행 Callback
        this.fnDlgfnSaveCallback = function(strId, val) {
        	if(val == false) return;
        	this.dlgfnSave();
        }

        this.dlgfnSave = function() {

        	this.dsSlip.clearData();
        	var nrow = this.dsSlip.addRow();

        	this.dsSlip.setColumn(nrow, "YM_BASE", this.dsList.getColumn(0, "YM_BASE"));
        	this.dsSlip.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsSlip.setColumn(nrow, "DT_ACCOUNT", this.dsList.getColumn(0, "DT_ACCOUNT"));
        	this.dsSlip.setColumn(nrow, "ID_INSERT", this.AuthClient.ID_USER);

        //trace("this.dsSlip >>>>>>>"+this.dsSlip.saveXML());

        	var strSvcId    = "slip";
        	var strSvcType  = "grid";
        	var inProc		= "_dsProc";
        	var inData      = "slip=dsSlip";
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

        }

        this.btnCANCLE_onclick = function(obj,e)
        {
        	// 취소
        	this.getParentContext().close(false);
        };

        /************************************************************************
         * Validate
         ************************************************************************/
        /*
         *	저장 Validate
         */
        this.fnSaveValidate = function() {

        	if (this.gfnIsNull(this.ctclYM_BASE.form.TextBox.value)) {
        		this.ctclYM_BASE.setFocus();
        		this.gfnAlert("정산년월을  입력하세요.");
        		return false;
        	}
        // 	if (this.gfnIsNull(this.ccfCD_CORP.form.CDTextBox.value)) {
        // 		this.ccfCD_CORP.setFocus();
        // 		this.gfnAlert("법인을 입력하세요.");
        // 		return false;
        // 	}
        	if (this.gfnIsNull(this.ctclDT_ACCOUNT.value)) {
        		this.ctclDT_ACCOUNT.setFocus();
        		this.gfnAlert("회계일자를 입력하세요.");
        		return false;
        	}

        	return true;
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        this.fnAfterCDTextChanged = function(id) {
        	this.fnSearchInit();
        }

        this.fnBeforeUserDataSetParam = function(id, dsUserParam, nrow) {

        	switch(id) {
        		case "ccfCD_CORP":	//법인
        			break;


        		default:
        	}
        	return true;
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

        	if(svcID == "slip"){
        		if (errorCode == 0) {

        			// 부모화면 조회 호출
        			//this.parent.parent.opener.divWork.form.fnSelect();
        			// 자기자신창 닫기
        			this.getParentContext().close(true);

        		} else {
        			this.gfnAlert(errorMsg);
        		}
         	}

        }

        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
        /*
         *	조회 조건 변경시 초기화
         */
        this.fnSearchInit = function(obj,e) {
        	if( e == null || e.pretext != e.posttext) {
        		// 폼상태 초기화
        		//this.gfnSetFormStatus(this);
        		//this.gfnGridClear(this.dxGrid);
        	}
        };

        this.dsList_onvaluechanged = function(obj,e)
        {
        	if(e.oldvalue != e.newvalue) {
        		if(e.columnid == "YM_BASE"){
        			this.dsList.setColumn(0, "DT_ACCOUNT", this.gfnGetLastDate(e.newvalue+"01"));
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.ctclDT_ACCOUNT.addEventHandler("onchanged",this.fnSearchInit,this);
            this.dsList.addEventHandler("onvaluechanged",this.dsList_onvaluechanged,this);
        };
        this.loadIncludeScript("DAW_RETIRE_ESTIMATE_SLIP_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
