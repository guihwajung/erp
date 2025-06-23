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
            this.set_titletext("예금주 조회 브랜치 전송");
            this.getSetter("maxwidth").set("400");
            this.getSetter("maxheight").set("230");
            if (Form == this.constructor)
            {
                this._setFormPosition(330,220);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"NO_ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ID_USER\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"CD_OWNER\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">saveBranchAccount</Col><Col id=\"SP\">DFBPR_BRANCH_ACCOUNT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0","330",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staCD_CORP","8","27","87","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_text("법인코드");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta07","94","27","200","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ccfCD_CORP","staCD_CORP:10","32","180","20",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFCORP");
            obj.getSetter("CDTextWidth").set("50");
            obj.set_taborder("0");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns","45","90","200","40",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            this.divData.addChild(obj.name, obj);

            obj = new Button("btnOK","30","10","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("10");
            obj.set_text("확인");
            this.divData.form.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","btnOK:30","10","60","27",null,null,null,null,null,null,this.divData.form.divBtns.form);
            obj.set_taborder("11");
            obj.set_text("취소");
            this.divData.form.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ccfCD_CORP.form.CDTextBox","value","dsSearch","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.ccfCD_CORP.form.DSTextBox","value","dsSearch","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DFL_FBSACCOUNT_DLG.xfdl", function() {
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

        	if(!this.gfnIsNull(this.getOwnerFrame().DS_PARAM)) {
        		var today = this.gfnGetDate().substring(0,8);
        		var val = this.getOwnerFrame().DS_PARAM;

        		this.dsList.loadCSV(val);

        		this.dsSearch.setColumn(0, "CD_CORP", this.getOwnerFrame().CD_CORP)
        		this.dsSearch.setColumn(0, "DS_CORP", this.getOwnerFrame().DS_CORP)
        	}
        };

        /************************************************************************
         * 변수 선언
         ************************************************************************/
        this.fnSetVariable = function() {
        	this.ccfCD_CORP = this.divData.form.ccfCD_CORP;	// 법인코드
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

        	this.dsList = new Dataset();
        	this.dsList.addColumn("NO_ACCOUNT", "string");	// 계좌번호
        	this.dsList.addColumn("TY_GUBUN", "string");	// 계좌구분
        	this.dsList.addColumn("CD_OWNER", "string");	// 계좌소유주코드
        	this.dsList.addColumn("CD_CORP", "string");		// 법인코드(브랜치전송용)
        	this.dsList.addColumn("ID_USER", "string");		// 사용자
        }

        this.btnOK_onclick = function(obj,e)
        {
        	// 확인
        	if(!this.fnSaveValidate()) return;
        	//this.gfnConfirm("예금주 조회 브랜치 전송 하시겠습니까?", "fnBranchAccountCallback");
        	this.fnBranchAccount();
        };

        // 예금주 조회 브랜치 전송 Callback
        this.fnBranchAccountCallback = function(strId, val) {
        	if(val == false) return;
        	this.fnBranchAccount();
        }

        // 예금주 조회 브랜치 전송
        this.fnBranchAccount = function() {

        	for (var i = 0; i < this.dsList.rowcount; i++) {
        		this.dsList.setColumn(i, "CD_CORP", this.dsSearch.getColumn(0, "CD_CORP"));			//법인코드
        	}

        	var strSvcId    = "saveBranchAccount";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "saveBranchAccount=dsList";
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
        };


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

        	if (this.gfnIsNull(this.dsSearch.getColumn(0, "CD_CORP"))) {
        		this.ccfCD_CORP.setFocus();
        		this.gfnAlert("법인코드를 입력하세요.");
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

        	if(svcID == "saveBranchAccount"){
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
            this.divData.form.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.divData.form.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.dsSearch.addEventHandler("onvaluechanged",this.dsSearch_onvaluechanged,this);
        };
        this.loadIncludeScript("DFL_FBSACCOUNT_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
