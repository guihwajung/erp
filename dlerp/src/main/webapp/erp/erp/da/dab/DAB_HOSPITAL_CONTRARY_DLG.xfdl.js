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
            this.set_titletext("건강검진 반려");
            this.getSetter("maxwidth").set("413");
            this.getSetter("maxheight").set("266");
            if (Form == this.constructor)
            {
                this._setFormPosition(373,191);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsParam", this);
            obj._setContents("<ColumnInfo><Column id=\"YY_HOSPITAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"ID_PERSON\" type=\"INT\" size=\"256\"/><Column id=\"CD_FAMILY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_RETURN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_RETURN\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">hospital</Col><Col id=\"SP\">DABPR_HOSPITAL_APPROVE</Col></Row></Rows>");
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

            obj = new Div("divBtns",null,null,"200","26","0","0",null,null,null,null,this);
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
        this.registerScript("DAB_HOSPITAL_CONTRARY_DLG.xfdl", function() {
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
        };

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {
        	this.dsApprove = new Dataset();
        	this.dsApprove.addColumn("YY_HOSPITAL", "STRING");
        	this.dsApprove.addColumn("ID_PERSON", "INT");
        	this.dsApprove.addColumn("CD_CORP", "STRING");
        	this.dsApprove.addColumn("ID_SABUN", "STRING");
        	this.dsApprove.addColumn("CD_FAMILY", "STRING");
        	this.dsApprove.addColumn("TY_STATUS", "STRING");
        	this.dsApprove.addColumn("DS_RETURN", "STRING");
        	this.dsApprove.addColumn("ID_USER", "STRING");
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

        	this.dsApprove.clearData();
        	for (var i = 0; i < this.dsParam.rowcount; i++) {
        		var nrow = this.dsApprove.addRow();
        		this.dsApprove.setColumn(nrow, "YY_HOSPITAL", this.dsParam.getColumn(i, "YY_HOSPITAL"));
        		this.dsApprove.setColumn(nrow, "ID_PERSON", this.dsParam.getColumn(i, "ID_PERSON"));
        		this.dsApprove.setColumn(nrow, "CD_CORP", this.dsParam.getColumn(i, "CD_CORP"));
        		this.dsApprove.setColumn(nrow, "ID_SABUN", this.dsParam.getColumn(i, "ID_SABUN"));
        		this.dsApprove.setColumn(nrow, "CD_FAMILY", this.dsParam.getColumn(i, "CD_FAMILY"));
        		this.dsApprove.setColumn(nrow, "TY_STATUS", "3");  // 승인:2, 반려: 3
        		this.dsApprove.setColumn(nrow, "DS_RETURN", this.dsList.getColumn(0,"DS_RETURN"));
        		this.dsApprove.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);
        	}
        	if (this.dsApprove.rowcount == 0) return;

        	var strSvcId    = "approve";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = this.getOwnerFrame().targetId+"=dsApprove";
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
        this.loadIncludeScript("DAB_HOSPITAL_CONTRARY_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
