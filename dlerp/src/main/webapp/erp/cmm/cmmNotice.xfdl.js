(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmAlert");
            this.set_titletext("");
            if (Form == this.constructor)
            {
                this._setFormPosition(610,370);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnOk",null,null,"52","26","20","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            obj.set_cssclass("btn_WF_action");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("알림");
            obj.getSetter("uWord").set("popup.notice");
            obj.set_cssclass("sta_POP_Title");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtMsgContent","20","20",null,null,"20","66",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_wordWrap("char");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staMsgContent","20","34",null,"72","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static00");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",610,370,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmNotice.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath    cmm > cmmAlert (공통메세지)
        *  @FileName 	cmmAlert.xfdl
        *  @Creator 	consulting
        *  @CreateDate 	2017.03.09
        *  @Desction    메세지팝업
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.09     	consulting 	                최초 생성
        *  2017.10.17     	consulting       	        주석 정비
        *  2017.10.26     	consulting 	                주석 정비
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {

        	var sContents = this.getOwnerFrame().paramContents;
        	var sView = this.getOwnerFrame().paramView;
        	if(sView == true) {
        		this.staTitle.set_visible(false);
        		this.txtMsgContent.set_visible(false);
        		this.staMsgContent.set_visible(true);
        		this.btnOk.set_visible(false);
        	}
        	this.fnMsgSetting(sContents);
        };

        /************************************************************************************************
        * TRANSACTION 서비스 호출 처리
        ************************************************************************************************/

        /************************************************************************************************
         * CALLBACK 콜백 처리부분
         ************************************************************************************************/

         /************************************************************************************************
         * 사용자 FUNCTION 영역
         ************************************************************************************************/
        /**
        * @description 메세지설정
        */
         this.fnMsgSetting = function (sMsgContent)
         {
        	this.staMsgContent.set_text(sMsgContent);
        	this.txtMsgContent.set_value(sMsgContent);
         };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description OK버튼이벤트
        */
        this.btnOk_onclick = function(obj,e)
        {
        	this.close(true);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
        };
        this.loadIncludeScript("cmmNotice.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
