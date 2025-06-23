(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DSE_RETIRE_POPUP");
            this.set_titletext("퇴직자 공지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta00","5","70","650","220",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("● 퇴직금 발생 조건 :  계속근로기간 만 1년이상\r\n\r\n● 계속근로 여부 판단  : \r\n     - 판례 및 행정해석에 따르면,\r\n        계속근로 여부를 판단함에 있어 단절기간의 길이 외에 근로관계를 둘러싼 다양한 요소\r\n        (근로계약의 형태, 업무의 특성, 관계단절 사유, 타 사업장 취업여부 등)를\r\n        종합적으로 감안하여 판단하며 이에 대한 일률적인 가이드라인 제시가 불가함\r\n\r\n   ☞ 따라서 계속근로 여부 판단 시, 당사와 계약중인 노무법인에 연락하여 확인요망\r\n        (노무법인 연락처는 EP게시판 참고)");
            obj.set_font("normal 12pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","170","30","263","40",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("<퇴직금 발생시 참고사항>");
            obj.set_font("normal 700 15pt/normal \"휴먼둥근헤드라인\"");
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
        this.registerScript("DSE_RETIRE_POPUP.xfdl", function() {

        this.sta01_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DWA_SILHENG_onload,this);
            this.sta00.addEventHandler("onclick",this.sta00_onclick,this);
            this.sta01.addEventHandler("onclick",this.sta01_onclick,this);
        };
        this.loadIncludeScript("DSE_RETIRE_POPUP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
