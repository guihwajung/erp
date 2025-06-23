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
            this.set_titletext("New Form");
            this.getSetter("maxwidth").set("627");
            this.getSetter("maxheight").set("470");
            if (Form == this.constructor)
            {
                this._setFormPosition(680,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("_dsProc", this);
            obj._setContents("<ColumnInfo><Column id=\"TARGET\" type=\"STRING\" size=\"256\"/><Column id=\"SP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"TY_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"CD_CORP\" type=\"STRING\" size=\"256\"/><Column id=\"ID_RTNG\" type=\"STRING\" size=\"256\"/><Column id=\"ID_SABUN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_HNAME\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"DS_POSITION\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DS_DUTY\" type=\"STRING\" size=\"256\"/><Column id=\"DS_EMAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsData", this);
            obj._setContents("<ColumnInfo><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/><Column id=\"TOMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"TY_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TORECIPIENTS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divData","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTopTITLE","0","0","100%","30",null,null,null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_text("메일 발송");
            obj.set_cssclass("sta_TITLE_Bg");
            obj.set_textAlign("left");
            this.divData.addChild(obj.name, obj);

            obj = new Div("divDataBottom","0","staTopTITLE:5",null,null,"0","0",null,null,null,null,this.divData.form);
            obj.set_taborder("0");
            obj.set_cssclass("div_DATA_Bg");
            obj.set_text("");
            this.divData.addChild(obj.name, obj);

            obj = new Static("staTITLE","0","0","87","30",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staCONTENT","0","staTITLE:-1","87","277",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_tablelabel");
            obj.set_textAlign("center");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staBg3","staTITLE:-1","0",null,"30","0%",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Static("staBg4","staCONTENT:-1","staBg3:-1",null,"277","0.00%",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_tablebg");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Edit("ctxtTITLE","92","5",null,"20","5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("7");
            obj.set_value("");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new TextArea("ctxtCONTENT","staCONTENT:5","ctxtTITLE:9",null,"267","5",null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("8");
            obj.set_value("");
            obj.set_wordWrap("char");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnOk","240","323","60","27",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("9");
            obj.set_text("발송");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnCancle","btnOk:10","323","60","27",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("0");
            obj.set_text("취소");
            this.divData.form.divDataBottom.addChild(obj.name, obj);

            obj = new Button("btnClose","275","323","60","27",null,null,null,null,null,null,this.divData.form.divDataBottom.form);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_tabstop("true");
            obj.set_visible("false");
            this.divData.form.divDataBottom.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divData.form.divDataBottom.form.ccboTY_GUBUN","value","dsData","TY_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divData.form.divDataBottom.form.ctxtTITLE","value","dsData","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divData.form.divDataBottom.form.ctxtCONTENT","value","dsData","CONTENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAJ_MAIL_SENDER.xfdl", function() {
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

        	this.dsData.setColumn(0, "TITLE", this.getOwnerFrame().DS_TITLE);
        	this.dsData.setColumn(0, "CONTENT", this.getOwnerFrame().DS_CONTENT);

        	if (this.getOwnerFrame().READONLY) {
        		this.ctxtTITLE.set_readonly(true);
        		this.ctxtCONTENT.set_readonly(true);

        		this.btnClose.set_visible(true);
        		this.btnOk.set_visible(false);
        		this.btnCancle.set_visible(false);
        	}
        };

        /************************************************************************
         * 버튼 설정 : 화면(Tab) 전환시 마다 호출
         * 서브버튼 사용 및 공통버튼 강제 제어시 여기서 처리
         ************************************************************************/
        this.fnSetButton = function() {
        	this.FormBtns.Select.set_enable(false);
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
        	this.ctxtTITLE   = this.divData.form.divDataBottom.form.ctxtTITLE;				// 타이틀
        	this.ctxtCONTENT = this.divData.form.divDataBottom.form.ctxtCONTENT;				// 메시지
        	this.btnClose    = this.divData.form.divDataBottom.form.btnClose;			// 닫기 버튼
        	this.btnCancle   = this.divData.form.divDataBottom.form.btnCancle;		// 확인 버튼
        	this.btnOk       = this.divData.form.divDataBottom.form.btnOk;				// 확인 버튼
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
        }

        /************************************************************************
         * 컨트롤 이벤트
         ************************************************************************/
         this.fnSelect = function()
         {
         }

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
        			this.fnCallback_callback = function()
        			{
        				this.getParentContext().close(true);
        			}

        			this.gfnAlert("메일 발송이 정상처리되었습니다.", "fnCallback_callback");
        		}else
        		{
        			this.gfnAlert(errorMsg);
        		}
        	}
        }

        /************************************************************************
         * 코드파인드 이벤트
         ************************************************************************/

        /************************************************************************
         * 그리드 이벤트
         ************************************************************************/
        /************************************************************************
         * 기타 이벤트
         ************************************************************************/

        // 확인 버튼 클릭
        this.divData_btnOk_onclick = function(obj,e)
        {
        	this.gfnConfirm("메일을 발송하시겠습니까?", "fnOKCallback");
        };

        // 닫기 버튼
        this.btnClose_onclick = function(obj, e) {
        	var json = {};
        	json.CONTINUE = false;

        	this.getParentContext().close(JSON.stringify(json));
        }

        // 취소 버튼
        this.btnCANCLE_onclick = function(obj, e) {
        	var json = {};
        	json.CONTINUE = false;

        	this.getParentContext().close(JSON.stringify(json));
        }

        this.fnOKCallback = function() {
        	var json = {};
        	json.CONTINUE = true;
        	json.TITLE = this.dsData.getColumn(0, "TITLE");
        	json.MESSAGE = this.dsData.getColumn(0, "CONTENT");

        	this.getParentContext().close(JSON.stringify(json));
        }

        // 취소 버튼 클릭
        this.divData_btnCancel_onclick = function(obj,e)
        {
        	// this.close()가 작동하지 않았고,
        	// 부모의 callback 함수로 데이터를 넘겨주기 위해 작성되었습니다.
        	this.getParentContext().close(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divData.form.divDataBottom.form.btnOk.addEventHandler("onclick",this.divData_btnOk_onclick,this);
            this.divData.form.divDataBottom.form.btnCancle.addEventHandler("onclick",this.btnCANCLE_onclick,this);
            this.divData.form.divDataBottom.form.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.dsData.addEventHandler("onvaluechanged",this.dsData_onvaluechanged,this);
        };
        this.loadIncludeScript("DAJ_MAIL_SENDER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
