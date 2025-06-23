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
            this.set_titletext("교육비전표발행");
            this.getSetter("maxwidth").set("340");
            this.getSetter("maxheight").set("280");
            if (Form == this.constructor)
            {
                this._setFormPosition(330,270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"STRING\" size=\"256\"/><Column id=\"CD_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">slip</Col><Col id=\"SP\">DAEPR_EDUCATION_AUTOSLIP_ISSUE</Col></Row></Rows>");
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

            obj = new Static("sta00","8","77","87","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("회계일자");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","45","140","200","40",null,null,null,null,null,null,this);
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

            obj = new Static("sta07","94","77","200","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("ctclDT_ACCOUNT","101","82","105","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_editformat("yyyyMMdd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item8","ctclDT_ACCOUNT","value","dsList","DT_ACCOUNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAE_EDUCATION_DLG.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().ID_PERSON)) {
        		var today = this.gfnGetDate().substring(0,8);
        		this.dsList.setColumn(0, "DT_ACCOUNT", today);
        		this.dsList.setColumn(0, "ID_USER", this.AuthClient.ID_USER);
        		this.dsList.setColumn(0, "CD_DEPT", this.AuthClient.CD_DEPT);
        		this.dsList.setColumn(0, "ID_PERSON", this.getOwnerFrame().ID_PERSON);
        		this.dsList.setColumn(0, "NO_SEQ", this.getOwnerFrame().NO_SEQ);
        	}
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ctclDT_ACCOUNT = this.ctclDT_ACCOUNT;	//회계일자
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
        	this.dsSlip = new Dataset();
        	this.dsSlip.addColumn("ID_PERSON", "string");
        	this.dsSlip.addColumn("NO_SEQ", "string");
        	this.dsSlip.addColumn("DT_ACCOUNT", "string");        // 회계일자
        	this.dsSlip.addColumn("ID_USER", "string");           // 로그인ID
        	this.dsSlip.addColumn("CD_DEPT", "string");           // 로그인부서
        	this.dsSlip.addColumn("CD_SLIP", "string");           // 취소할 전표번호
        }

        this.btnOK_onclick = function(obj,e)
        {
        	// 확인
        	if(!this.fnSaveValidate()) return;
        	//this.gfnConfirm("전표발행 하시겠습니까?", "fnDlgfnSaveCallback");
        	this.dlgfnSave();
        };

        // 전표발행 Callback
        this.fnDlgfnSaveCallback = function(strId, val) {
        	if(val == false) return;
        	this.dlgfnSave();
        }

        this.dlgfnSave = function() {

        	this.dsSlip.clearData();
        	var nrow = this.dsSlip.addRow();

        	this.dsSlip.setColumn(nrow, "ID_PERSON", this.dsList.getColumn(0, "ID_PERSON"));
        	this.dsSlip.setColumn(nrow, "NO_SEQ", this.dsList.getColumn(0, "NO_SEQ"));
        	this.dsSlip.setColumn(nrow, "DT_ACCOUNT", this.dsList.getColumn(0, "DT_ACCOUNT"));
        	this.dsSlip.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	this.dsSlip.setColumn(nrow, "CD_DEPT", this.AuthClient.CD_DEPT);
        	this.dsSlip.setColumn(nrow, "CD_SLIP", "");

        trace("this.dsSlip >>>>>>>"+this.dsSlip.saveXML());

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


        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	//trace("fnCallback >>>> svcID:["+svcID+"] errorMsg:["+errorMsg+"]");

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
        	if(e.pretext != e.posttext) {
        		// 폼상태 초기화
        		//this.gfnSetFormStatus(this);
        		//this.gfnGridClear(this.dxGrid);
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
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DAE_EDUCATION_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
