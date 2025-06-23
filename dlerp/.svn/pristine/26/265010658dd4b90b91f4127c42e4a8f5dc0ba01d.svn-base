(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DCC_STAMP_VIEWER");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("webPdfViewer","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DCC_STAMP_VIEWER.xfdl", function() {

        this.DCC_STAMP_VIEWER_onload = function(obj,e)
        {
        // 	alert(nexacro.getEnvironment().services["svcUrl"].url + "/dcc_stamp_viewer.do");
        // 	alert(window.location.protocol + "//" + window.location.host);
        	this.webPdfViewer.set_url(nexacro.getEnvironment().services["svcUrl"].url + "/dcc_stamp_viewer.do");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.DCC_STAMP_VIEWER_onload,this);
        };
        this.loadIncludeScript("DCC_STAMP_VIEWER.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
