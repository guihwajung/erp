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
            this.set_titletext("대상자 생성");
            this.getSetter("maxwidth").set("413");
            this.getSetter("maxheight").set("245");
            if (Form == this.constructor)
            {
                this._setFormPosition(373,170);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"YY_HOSPITAL\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"DS_CORP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CD_CORP\"/><Col id=\"YY_HOSPITAL\"/><Col id=\"DS_CORP\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">create</Col><Col id=\"SP\">DABPR_HOSPITAL_CREATE</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle","0","-10","359","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("대상자 생성");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divData","0","staTitle:0",null,"104","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            this.addChild(obj.name, obj);

            obj = new Static("staYyHospital","0","0","100","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_tablelabelTE");
            obj.set_text("검진년도");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staYyHospitalBg","99","0",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_tablebgT");
            obj.set_textAlign("right");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorp","0","33","100","34",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_tablelabelE");
            obj.set_text("법인");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staCdCorpBg","99","33",null,"34","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Div("ctclYY_HOSPITAL","staYyHospital:4","5","80","24",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.divData.addChild(obj.name, obj);

            obj = new Div("cfCD_CORP","staCdCorp:4","38","264","24",null,null,null,null,null,null,this.divData.form);
            obj.getSetter("CodeFindName").set("DZX_CFCORP_STD");
            obj.getSetter("CDTextWidth").set("70");
            obj.getSetter("FitToContents").set("false");
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCodeFind.xfdl");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("sta00","0","82",null,"22","0",null,null,null,null,null,this.divData.form);
            obj.set_taborder("6");
            obj.set_text("신규 대상자만 추가로 등록됩니다.");
            obj.set_cssclass("sta_WF_notice");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divBtns",null,null,"200","26","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE",null,"0","52","26","0",null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","93","0","52","26",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_action");
            this.divBtns.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divData.form.ctclYY_HOSPITAL.form.TextBox","value","dsList","YY_HOSPITAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divData.form.cfCD_CORP.form.CDTextBox","value","dsList","CD_CORP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.cfCD_CORP.form.DSTextBox","value","dsList","DS_CORP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
            this._addPreloadList("fdl","cmm::cmmCodeFind.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_HOSPITAL_DLG.xfdl", function() {
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

        	var today = this.gfnGetDate().substr(0,4);
        	this.dsList.setColumn(0,"YY_HOSPITAL",!this.gfnIsNull(this.getOwnerFrame().YY_HOSPITAL) ? this.getOwnerFrame().YY_HOSPITAL : today);

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
        	this.ctclYY_HOSPITAL = this.divData.form.ctclYY_HOSPITAL;
        	this.cfCD_CORP       = this.divData.form.cfCD_CORP;
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
        	this.dsCreate = new Dataset();
        	this.dsCreate.addColumn("YY_HOSPITAL", "INT");
        	this.dsCreate.addColumn("CD_CORP", "string");
        	this.dsCreate.addColumn("ID_USER", "STRING");
        };

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
        	if (errorCode != 0) {
        		this.gfnAlert(errorMsg);
        		return false;
        	}

        	switch(svcID) {
        		case "create":		// 저장
        			if (errorCode == 0) {
        				this.fnVaidateCallback = function() {
        					this.getParentContext().close(true);
        				}
        				this.gfnAlert("대상자생성이 완료되었습니다.", "fnVaidateCallback");
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

        	if(this.gfnIsNull(this.dsList.getColumn(0, "YY_HOSPITAL"))) {
        		this.gfnAlert("적용년도를 입력하세요.");
        		return false;
        	}

        	if(this.gfnIsNull(this.dsList.getColumn(0, "CD_CORP"))) {
        		this.gfnAlert("법인을 입력하세요.");
        		return false;
        	}

        	this.dsCreate.clearData();
        	var nrow = this.dsCreate.addRow();
        	this.dsCreate.setColumn(nrow, "YY_HOSPITAL", this.dsList.getColumn(0, "YY_HOSPITAL"));
        	this.dsCreate.setColumn(nrow, "CD_CORP", this.dsList.getColumn(0, "CD_CORP"));
        	this.dsCreate.setColumn(nrow, "ID_USER", this.AuthClient.ID_USER);

        	if (this.dsCreate.rowcount == 0) return;

        	var strSvcId    = "create";
        	var strSvcType  = "save";
        	var inProc		= "_dsProc";
        	var inData      = "create=dsCreate";
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
        this.loadIncludeScript("DAB_HOSPITAL_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
