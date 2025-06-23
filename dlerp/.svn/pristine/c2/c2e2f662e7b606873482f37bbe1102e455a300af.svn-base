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
            this.set_titletext("반려사유 공통");
            this.getSetter("maxwidth").set("413");
            this.getSetter("maxheight").set("267");
            if (Form == this.constructor)
            {
                this._setFormPosition(373,192);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsParam", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"INT\" size=\"256\"/><Column id=\"CD_LOAN\" type=\"STRING\" size=\"256\"/><Column id=\"NO_SEQ\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_RETURN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_RETURN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">approveLoan</Col><Col id=\"SP\">DABPR_LOAN_APPROVE</Col></Row><Row><Col id=\"TARGET\">approveFamilyEvent</Col><Col id=\"SP\">DABPR_FAMILYEVENT_APPROVE</Col></Row><Row><Col id=\"TARGET\">approveTuition</Col><Col id=\"SP\">DABPR_TUITION_APPROVE</Col></Row><Row><Col id=\"TARGET\">approveYearVaca</Col><Col id=\"SP\">DACPR_MGTYEARLYVACA_APPROVAL</Col></Row><Row><Col id=\"TARGET\">approveReduceTime</Col><Col id=\"SP\">DACPR_REDUCE_TIME_APPROVE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","0","-10","359","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("반려사유");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","staTitle:0",null,"120","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staDsReturn","0","0","100","120",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablelabelTE");
            obj.set_text("반려사유");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staDsReturnBg","staDsReturn:-1","0",null,"120","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new TextArea("txtDS_RETURN","staDsReturn:5","5",null,null,"5","5",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns",null,null,"200","27","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE",null,"0","52","26","0",null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","92","0","52","26",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_action");
            this.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.txtDS_RETURN","value","dsList","DS_RETURN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAB_CONTRARY_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.form_onload = function(obj,e)
        {
        	// -- 필수 -------------------//
        	this.gfnFormOnLoad(this);
        	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.fnSetButton();
        	this.fnSetVariable();
        	this.fnSetEvent();
        	this.fnSetParameter();
        	this.fnSetDisplay();

        };

        /************************************************************************
         * 버튼 설정
         * 서브버튼 사용 처리. 공통 및 확장버튼 버튼관리화면에서 셋팅.
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
        	this.txtDS_RETURN  = this.divData.form.txtDS_RETURN;
        };

        /************************************************************************
         * 이벤트 설정
         ************************************************************************/
        this.fnSetEvent = function() {
        };

        // 부모창에서 받아온것 셋팅
        this.fnSetDisplay = function() {
        	this.dsParam.loadXML(this.getOwnerFrame().dsList);
        	trace(this.dsParam.saveXML());
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsApprove = new Dataset();
        	this.dsApprove.addColumn("ID_PERSON", "INT");
        	this.dsApprove.addColumn("NO_SEQ", "INT");
        	this.dsApprove.addColumn("CD_CORP", "STRING");
        	this.dsApprove.addColumn("ID_SABUN", "STRING");
        	this.dsApprove.addColumn("TY_STATUS", "STRING");
        	this.dsApprove.addColumn("DS_RETURN", "STRING");
        	this.dsApprove.addColumn("ID_USER", "STRING");

        	// 공조대출 반려
        	this.dsApproveLoan = new Dataset();
        	this.dsApproveLoan.addColumn("CD_CORP"  , "STRING");
        	this.dsApproveLoan.addColumn("ID_PERSON", "INT");
        	this.dsApproveLoan.addColumn("ID_SABUN" , "STRING");
        	this.dsApproveLoan.addColumn("CD_LOAN"  , "STRING");
        	this.dsApproveLoan.addColumn("NO_SEQ"   , "INT");
        	this.dsApproveLoan.addColumn("TY_STATUS", "STRING");
        	this.dsApproveLoan.addColumn("DS_RETURN", "STRING");
        	this.dsApproveLoan.addColumn("ID_USER"  , "STRING");

        	// 근태승인 연차 tab 반려
        	this.dsAprvYearVaca = new Dataset();
        	this.dsAprvYearVaca.addColumn("TY_TAP"   , "string");
        	this.dsAprvYearVaca.addColumn("GUBUN"    , "string");
        	this.dsAprvYearVaca.addColumn("TY_STATUS", "string");
        	this.dsAprvYearVaca.addColumn("NO_SEQ"   , "bigdecimal");
        	this.dsAprvYearVaca.addColumn("CD_CORP"  , "string");
        	this.dsAprvYearVaca.addColumn("ID_SABUN" , "string");
        	this.dsAprvYearVaca.addColumn("DS_RETURN", "string");
        	this.dsAprvYearVaca.addColumn("ID_USER"  , "string");
        	this.dsAprvYearVaca.addColumn("GR_SEARCH", "string");
        	this.dsAprvYearVaca.addColumn("GR_DEPT"  , "string");

        	// 근로시간단축 관리 반려
        	this.dsApproveReduceTime = new Dataset();
        	this.dsApproveReduceTime.addColumn("TY_GUBUN"   , "STRING");      // 구분(P:임산부, I:육아기)
        	this.dsApproveReduceTime.addColumn("NO_SEQ"     , "BIGDECIMAL");
        	this.dsApproveReduceTime.addColumn("CD_CORP"    , "STRING");
        	this.dsApproveReduceTime.addColumn("ID_PERSON"  , "INT");
        	this.dsApproveReduceTime.addColumn("ID_SABUN"   , "STRING");
        	this.dsApproveReduceTime.addColumn("TY_APPROVAL", "STRING");
        	this.dsApproveReduceTime.addColumn("ID_APPROVAL", "STRING");
        	this.dsApproveReduceTime.addColumn("TY_STATUS"  , "STRING");
        	this.dsApproveReduceTime.addColumn("DS_RETURN"  , "STRING");
        	this.dsApproveReduceTime.addColumn("GR_SEARCH"  , "STRING");
        	this.dsApproveReduceTime.addColumn("GR_DEPT"    , "STRING");
        	this.dsApproveReduceTime.addColumn("ID_USER"    , "STRING");

        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSaveValidate = function() {

        };
        /************************************************************************
         * 콜백 이벤트
         ************************************************************************/
        /*
         *	콜백 처리
         */
        this.fnCallback = function(svcID, errorCode, errorMsg)
        {
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return false;
        	}

        	switch(svcID) {
        		case "approve":		// 저장
        			if (errorCode == 0) {
        				this.fnVaidateCallback = function() {
        					this.getParentContext().close(true);
        				}
        				this.gfnAlert("반려처리가 완료되었습니다.", "fnVaidateCallback");
        			}

        		default:
        	}
        };

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/
        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
         /************************************************************************
         * 확장버튼 이벤트
         ************************************************************************/
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/
         // 확인 버튼
        this.btnOk_onclick = function(obj,e)
        {

        	if(this.gfnIsNull(this.dsList.getColumn(0, "DS_RETURN"))) {
        		this.gfnAlert("반려사유를 입력하세요.");
        		return false;
        	}


        	var strInData      = "";
        	if( this.getOwnerFrame().targetId == "approveYearVaca" ){
        		this.dsAprvYearVaca.clearData();
        		for (var i = 0; i < this.dsParam.rowcount; i++) {
        			var nrow = this.dsAprvYearVaca.addRow();
        			this.dsAprvYearVaca.setColumn(nrow, "TY_TAP"   , this.getOwnerFrame().TY_TAP);
        			this.dsAprvYearVaca.setColumn(nrow, "GUBUN"    , "");
        			this.dsAprvYearVaca.setColumn(nrow, "TY_STATUS", "3");
        			this.dsAprvYearVaca.setColumn(nrow, "NO_SEQ"   , this.dsParam.getColumn(i, "NO_SEQ"));
        			this.dsAprvYearVaca.setColumn(nrow, "CD_CORP"  , this.dsParam.getColumn(i, "CD_CORP"));
        			this.dsAprvYearVaca.setColumn(nrow, "ID_SABUN" , this.dsParam.getColumn(i, "ID_SABUN"));
        			this.dsAprvYearVaca.setColumn(nrow, "DS_RETURN", this.dsList.getColumn(0, "DS_RETURN"));
        			this.dsAprvYearVaca.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);
        			this.dsAprvYearVaca.setColumn(nrow, "GR_SEARCH", this.FormInfo.GR_SEARCH);
        			this.dsAprvYearVaca.setColumn(nrow, "GR_DEPT"  , this.AuthClient.CD_DEPT);
        		}
        		if (this.dsAprvYearVaca.rowcount == 0) return;

        		strInData      = this.getOwnerFrame().targetId+"=dsAprvYearVaca";
        	}
        	else if( this.getOwnerFrame().targetId == "approveReduceTime" ){
        		this.dsApprove.clearData();
        		for (var i = 0; i < this.dsParam.rowcount; i++) {
        			var nrow = this.dsApproveReduceTime.addRow();
        			this.dsApproveReduceTime.setColumn(nrow, "TY_GUBUN"   , this.dsParam.getColumn(i, "TY_GUBUN"));
        			this.dsApproveReduceTime.setColumn(nrow, "NO_SEQ"     , this.dsParam.getColumn(i, "NO_SEQ"));
        			this.dsApproveReduceTime.setColumn(nrow, "CD_CORP"    , this.dsParam.getColumn(i, "CD_CORP"));
        			this.dsApproveReduceTime.setColumn(nrow, "ID_PERSON"  , this.dsParam.getColumn(i, "ID_PERSON"));
        			this.dsApproveReduceTime.setColumn(nrow, "ID_SABUN"   , this.dsParam.getColumn(i, "ID_SABUN"));
        			this.dsApproveReduceTime.setColumn(nrow, "TY_APPROVAL", "D");
        			this.dsApproveReduceTime.setColumn(nrow, "ID_APPROVAL", this.AuthClient.ID_USER);
        			this.dsApproveReduceTime.setColumn(nrow, "TY_STATUS"  , "3"); // 승인:2, 반려: 3
        			this.dsApproveReduceTime.setColumn(nrow, "DS_RETURN"  , this.dsList.getColumn(0, "DS_RETURN"));
        			this.dsApproveReduceTime.setColumn(nrow, "GR_SEARCH"  , this.FormInfo.GR_SEARCH);
        			this.dsApproveReduceTime.setColumn(nrow, "GR_DEPT"    , this.AuthClient.CD_DEPT);
        			this.dsApproveReduceTime.setColumn(nrow, "ID_USER"    , this.AuthClient.ID_USER);
        		}
        		if (this.dsApproveReduceTime.rowcount == 0) return;

        		strInData      = this.getOwnerFrame().targetId+"=dsApproveReduceTime";
        	}
        	else if( this.getOwnerFrame().targetId == "approveLoan" ){
        		this.dsApproveLoan.clearData();
        		for (var i = 0; i < this.dsParam.rowcount; i++) {
        			var nrow = this.dsApproveLoan.addRow();
        			this.dsApproveLoan.setColumn(nrow, "CD_CORP"  , this.dsParam.getColumn(i, "CD_CORP"));
        			this.dsApproveLoan.setColumn(nrow, "ID_PERSON", this.dsParam.getColumn(i, "ID_PERSON"));
        			this.dsApproveLoan.setColumn(nrow, "ID_SABUN" , this.dsParam.getColumn(i, "ID_SABUN"));
        			this.dsApproveLoan.setColumn(nrow, "CD_LOAN"  , this.dsParam.getColumn(i, "CD_LOAN"));
        			this.dsApproveLoan.setColumn(nrow, "NO_SEQ"   , this.dsParam.getColumn(i, "NO_SEQ"));
        			this.dsApproveLoan.setColumn(nrow, "TY_STATUS", "3");  // 승인:2, 반려: 3
        			this.dsApproveLoan.setColumn(nrow, "DS_RETURN", this.dsList.getColumn(0,"DS_RETURN"));
        			this.dsApproveLoan.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);
        		}
        		if (this.dsApproveLoan.rowcount == 0) return;

        		strInData      = this.getOwnerFrame().targetId+"=dsApproveLoan";

        	}
        	else {
        		this.dsApprove.clearData();
        		for (var i = 0; i < this.dsParam.rowcount; i++) {
        			var nrow = this.dsApprove.addRow();
        			this.dsApprove.setColumn(nrow, "ID_PERSON", this.dsParam.getColumn(i, "ID_PERSON"));
        			this.dsApprove.setColumn(nrow, "CD_CORP"  , this.dsParam.getColumn(i, "CD_CORP"));
        			this.dsApprove.setColumn(nrow, "ID_SABUN" , this.dsParam.getColumn(i, "ID_SABUN"));
        			this.dsApprove.setColumn(nrow, "NO_SEQ"   , this.dsParam.getColumn(i, "NO_SEQ"));
        			this.dsApprove.setColumn(nrow, "TY_STATUS", "3");  // 승인:2, 반려: 3
        			this.dsApprove.setColumn(nrow, "DS_RETURN", this.dsList.getColumn(0,"DS_RETURN"));
        			this.dsApprove.setColumn(nrow, "ID_USER"  , this.AuthClient.ID_USER);
        		}
        		if (this.dsApprove.rowcount == 0) return;

        		strInData      = this.getOwnerFrame().targetId+"=dsApprove";

        	}

        	var strSvcId    = "approve";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = strInData;
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

        // 취소버튼
        this.btnCancle_onclick = function(obj,e)
        {
        	this.getParentContext().close(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOk_onclick,this);
        };
        this.loadIncludeScript("DAB_CONTRARY_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
