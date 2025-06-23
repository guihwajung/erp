(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frameBottom");
            this.set_titletext("frameBottom");
            if (Form == this.constructor)
            {
                this._setFormPosition(1278,29);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staStatus","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_BT_Bg02");
            this.addChild(obj.name, obj);

            obj = new Button("Button00",null,"6","32","18","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("연장");
            obj.set_cssclass("btn_BF_Extend");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","875","0",null,"29","52",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_BF_Section");
            obj.set_text("세션만료시간 | 26:30");
            this.addChild(obj.name, obj);

            obj = new Div("ccfPreLoad","80","2","0","0",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_url("cmm::cmmCodeFind_Pop.xfdl");
            obj.set_visible("false");
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
            this._addPreloadList("fdl","cmm::cmmCodeFind_Pop.xfdl");
        };
        
        // User Script
        this.registerScript("frameBottom.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath    frame > frameBottom
        *  @FileName 	frameBottom.xfdl
        *  @Creator 	consulting
        *  @CreateDate 	2017.03.09
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.09     	consulting 	                최초 생성
        *  2017.10.17     	consulting       	        주석 정비
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
        	this.gfnFormOnLoad(this);
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

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("frameBottom.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
