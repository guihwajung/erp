(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmConfirm");
            this.set_titletext("확인");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,160);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("txtMsgContent","20","20",null,null,"20","66",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            obj.set_wordWrap("char");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staMsgContent","20","37",null,null,"20","40",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Static00");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","272",null,"52","26",null,"20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            obj.set_cssclass("btn_WF_action");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancle","328",null,"52","26",null,"20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","0",null,"33","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.confirm");
            obj.set_cssclass("sta_POP_Title");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"0","26","33","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_CloseBtnPop");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,160,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmConfirm.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath    cmm > cmmConfirm (공통메세지)
        *  @FileName 	cmmConfirm.xfdl
        *  @Creator 	consulting
        *  @CreateDate 	2017.03.09
        *  @Desction    확인 메세지팝업
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
        	var line = 1;
        	var tmpContent = sMsgContent;
        	while(tmpContent.indexOf('\n') > -1) {
        		tmpContent = tmpContent.substring(tmpContent.indexOf('\n') + 1);
        		line++;
        	}
        	if(line > 4) {
        		var h = this.getOwnerFrame().height;
        		h += (line-4) * 15;
        		if(h > 250) h = 250;
        		this.getOwnerFrame().set_height(h);
        	}

         	this.staMsgContent.set_text(sMsgContent);
        	this.txtMsgContent.set_value(sMsgContent);
         };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description 확인버튼
        */
        this.btnOk_onclick = function(obj,e)
        {
        	this.close(true);
        };

        /**
        * @description 취소버튼
        */
        this.btnCancle_onclick = function(obj,e)
        {
        	this.close(false);
        };


        this.btnClose_onclick = function(obj,e)
        {
        	this.close(false);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnCancle.addEventHandler("onclick",this.btnCancle_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("cmmConfirm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
