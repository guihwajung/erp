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
            this.set_titletext("오즈 레포트");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new WebBrowser("web00","10","10",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("0");
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
        this.registerScript("DZU_OZ.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath
        *  @FileName
        *  @Creator
        *  @CreateDate
        *  @Desction    html view
        ************** 소스 수정 이력 ***********************************************
        *  date          	Modifier                Description
        *******************************************************************************
        *
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.objApp = this.gfnGetApplication();

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {

        	var sUrl = this.gfnGetServerUrl() + "/oz80/sample_canvas.html";

        	var reportname = this.getOwnerFrame().REPORT_NAME;
        	var queryString = "reportname=" + encodeURIComponent(reportname);

        	if(!this.gfnIsNull(this.getOwnerFrame().JSONPARAM))
        	{
        		var json= JSON.parse(this.getOwnerFrame().JSONPARAM);
        		var jsonLength = Object.keys(json).length;
        		var jsonArg = Object.keys(json);

        		var url = "";

        		for(var i = 0 ; i < jsonLength; i++)
        		{
        			url += "&" + jsonArg[i] + "=" + json[jsonArg[i]];
        		}
        		queryString += url;
        	}

        	//webBrowser url 세팅
        	if (!this.gfnIsNull(sUrl)) {
        		this.web00.set_url(sUrl + "?" + queryString);
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ondragmove",this.form_ondragmove,this);
            this.addEventHandler("ondrop",this.form_ondrop,this);
            this.web00.addEventHandler("onloadcompleted",this.web00_onloadcompleted,this);
        };
        this.loadIncludeScript("DZU_OZ.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
