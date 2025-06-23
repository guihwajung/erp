(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DAA_NEWSABUN_CHECK");
            this.set_titletext("사번 확인");
            this.getSetter("maxwidth").set("550");
            this.getSetter("maxheight").set("200");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,120);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("txtMsgContent","0","10",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_wordWrap("char");
            obj.set_visible("true");
            obj.set_value("해당 사번은 존재 합니다.\n  [ 재입사 ] 재입사인 경우에는 사번에 따른 ID_PERSON으로 진행/사번은 신규채번..\n  [ 확인 ] 사번과 ID_PERSON 신규채번.\n  [ 취소 ] 다시 재작업\n해당 작업버튼을 클릭한 후 작업을 진행하여 주시기 바랍니다.");
            this.addChild(obj.name, obj);

            obj = new Static("staMsgContent","0","10",null,"80","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_textAlign("left");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","247",null,"45","21",null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.getSetter("uWord").set("popup.ok");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","332",null,"45","21",null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.getSetter("uWord").set("popup.cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btnNew","148",null,"60","21",null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("재입사");
            obj.getSetter("uWord").set("popup.ok");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DAA_NEWSABUN_CHECK.xfdl", function() {
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnLoad(this); //초기화[필수]
        	this.gfnFormInfo(this);
        	//this.fnMsgSetting();
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
          this.fnMsgSetting = function ()
         {
        	var sMsgContent = 	"해당 사번은 존재 합니다. \n"+
        						"  [ 재입사 ] 재입사인 경우에는 사번에 따른 ID_PERSON으로 진행/사번은 신규채번. \n" +
        						"  [ 확인 ] 사번과 ID_PERSON 신규채번.\n" +
        						"  [ 취소 ] 다시 재작업 \n" +
        						"해당 작업버튼을 클릭한 후 작업을 진행하여 주시기 바랍니다. ";

         	this.staMsgContent.set_text(sMsgContent);
        	this.txtMsgContent.set_value(sMsgContent);
         };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description 신규채번
        */
        this.btn_onclick = function(obj,e)
        {
        	var json = {};

        	switch(obj.id){
        		case "btnNew":		//신규채번
        			json.TY_FLAG = "C";
        			break;
        		case "btnOk":		//확인
        			json.TY_FLAG = "Y";
        			break;
        		case "btnCancle":	//취소
        			json.TY_FLAG = "N";
        			break;
        		default:
        	}

        	this.getParentContext().close(JSON.stringify(json));
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOk.addEventHandler("onclick",this.btn_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btn_onclick,this);
            this.btnNew.addEventHandler("onclick",this.btn_onclick,this);
        };
        this.loadIncludeScript("DAA_NEWSABUN_CHECK.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
