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
            this.set_titletext("회사별 의료비 지원현황");
            this.getSetter("maxwidth").set("315");
            this.getSetter("maxheight").set("180");
            if (Form == this.constructor)
            {
                this._setFormPosition(290,130);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TARGET\">report</Col><Col id=\"SP\">DABPR_MEDICAL_CORP_SELECT</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTITLE","0","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("회사별 지급현황");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","43","77","200","27",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnCANCLE","120","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnOK","30","0","60","27",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("1");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("staYY_BASE","10","35","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("대상년도");
            obj.set_cssclass("sta_WF_tablelabelE");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","90","35","190","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_tablebg");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYY_FROM","95","40","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("ctclYY_TO","196","40","80","20",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_url("cmm::cmmCalYY.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","180","40","10","20",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("~");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ctclYY_FROM.form.TextBox","value","dsSearch","DT_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","ctclYY_TO.form.TextBox","value","dsSearch","DT_WORK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","cmm::cmmCalYY.xfdl");
        };
        
        // User Script
        this.registerScript("DAB_MEDICAL_CORP_RPT_DLG.xfdl", function() {
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


        	//대상년도
        	this.ctclYY_FROM.form.TextBox.set_value(this.gfnGetDate().substring(0,4)-1);
        	this.ctclYY_TO.form.TextBox.set_value(this.gfnGetDate().substring(0,4));

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

        	this.grSearch = this.FormInfo.GR_SEARCH;					          // 권한
        	this.cdGroup = this.AuthClient.CD_GROUP;					          // 그룹코드
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
        };

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         /************************************************************************
         * Validate
         ************************************************************************/
        this.fnSelectValidate = function() {

        	//대상년도
        	if(this.gfnIsNull(this.ctclYY_FROM.form.TextBox.value)){
        		this.fnValidateCallback = function() {
        			this.ctclYY_FROM.form.TextBox.setFocus();
        		}
        		this.gfnAlert("대상년도 시작년을 입력하세요.", "fnValidateCallback");
        		return false;
        	}

        	if(this.gfnIsNull(this.ctclYY_TO.form.TextBox.value)){
        		this.fnValidateCallback = function() {
        			this.ctclYY_TO.form.TextBox.setFocus();
        		}
        		this.gfnAlert("대상년도 종료년을 입력하세요.", "fnValidateCallback");
        		return false;
        	}

        	if(this.ctclYY_FROM.form.TextBox.value > this.ctclYY_TO.form.TextBox.value){
        		this.fnValidateCallback = function() {
        			this.ctclYY_FROM.form.TextBox.setFocus();
        		}
        		this.gfnAlert("대상년도 시작년은 종료년 보다 클 수 없습니다.", "fnValidateCallback");
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
        	if(svcID == "report") {
        		if (errorCode == 0) {
        			trace(this.dsList.saveXML());
        			//this.getParentContext().close(true);
        		} else {
        			this.gfnAlert(errorMsg);
        		}
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
        this.btnOK_onclick = function(obj,e)
        {
        	if(!this.fnSelectValidate()) return false;

        	this.dsReport = new Dataset();

        	this.dsReport.addColumn("YY_FROM", "string");
        	this.dsReport.addColumn("YY_TO", "string");

        	var nrow = this.dsReport.addRow();
        	this.dsReport.setColumn(0, "YY_FROM", this.ctclYY_FROM.form.TextBox.value);
        	this.dsReport.setColumn(0, "YY_TO", this.ctclYY_TO.form.TextBox.value);

        	var strSvcId    = "report";
        	var strSvcType  = "select";
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
        						strArg, 			// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); // 통신방법 정의 [생략가능]

        	var inProc		= "_dsProc";
        	var inParam 	= "params=dsReportParam";	// 조회SP이외 사용할 정보
        	var inParam 	= "";						// 필요없는 경우 생략
        	var inData      = "report=dsReport";
        	var reportpath  = "/da/dab/DAB_MEDICAL_CORP.ozr";

        	gfnOpenReport(this, reportpath, inProc, inParam, inData);

        	this.getParentContext().close(true);
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
            this.divBtns.form.btnCANCLE.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divBtns.form.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
            this.sta03.addEventHandler("onclick",this.sta04_onclick,this);
        };
        this.loadIncludeScript("DAB_MEDICAL_CORP_RPT_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
