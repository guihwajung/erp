(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("DZR_APRV_DLG");
            this.set_titletext("전자결재 연동 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(516,268);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",516,268,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("DZR_APRV_DLG.xfdl", function() {
        this.objApp = this.gfnGetApplication();

        this.win = null;

        this.form_onload = function(obj, e) {
        	// -- 필수 -------------------//
        // 	this.gfnFormOnLoad(this);
        // 	this.gfnFormInfo(this);
        	// ---------------------------//

        	this.win = window.open(
        		this.getOwnerFrame().URL,
        		"_blank",
        		"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no, copyhistory=no, "+
        		"width=" + this.getOwnerFrame().WIDTH + ", " +
        		"height=" + this.getOwnerFrame().HEIGHT + ", " +
        		"top=" + this.getOwnerFrame().TOP + ", " +
        		"left=" + this.getOwnerFrame().LEFT
        	);
        }

        /************************************************************************
         * 파라미터 설정
         ************************************************************************/
        this.fnSetParameter = function() {

        };

        this.fnSelect = function() {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
        };
        this.loadIncludeScript("DZR_APRV_DLG.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
