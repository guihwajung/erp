(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmMultiLine");
            this.set_background("#ffffff");
            if (Form == this.constructor)
            {
                this._setFormPosition(230,160);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("txt00","0","0",null,null,"0","32",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_scrolltype("vertical");
            obj.set_border("1px solid darkgray");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","0","txt00:-1",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("1px solid darkgray");
            obj.set_background("#C1C1C1");
            this.addChild(obj.name, obj);

            obj = new Div("divBtns","50","txt00:5","130","21",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm","0","0","60","21",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("3");
            obj.set_text("확인");
            this.divBtns.addChild(obj.name, obj);

            obj = new Button("btnCancel","btnConfirm:10","0","60","21",null,null,null,null,null,null,this.divBtns.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.divBtns.addChild(obj.name, obj);

            obj = new Static("sta00",null,null,"15","20","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text(":::");
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
        this.registerScript("cmmMultiLine.xfdl", function() {
        this.isLButtonPress = false;
        this.isReadonly = false;

        this.cmmMultiLine_onload = function(obj,e)
        {
        	this.cmmMultiLine_onsize(this, null);
        	this.resetScroll();

        	this.oForm = this.getOwnerFrame();
        	this.parent.addEventHandler("oncloseup", this.cmmMultiLine_oncloseup, this);

        	var popInfo = JSON.parse(this.parent.id);
        	if(!this.gfnIsNull(popInfo.ReadOnly) && popInfo.ReadOnly == true) {
        		this.isReadonly = true;
        		this.txt00.set_readonly(true);
        	}
        	if(!this.gfnIsNull(popInfo.MaxLength) && popInfo.MaxLength > 0) {
        		this.txt00.set_maxlength(popInfo.MaxLength);
        	}
        	if(new String(this.parent.initvalueid).valueOf() != "undefined") {
        		this.txt00.set_value(this.parent.initvalueid);
        	}
        	this.txt00.setFocus();

        	if (popInfo.ReadOnly) {
        		this.divBtns.form.btnConfirm.set_left(35);
        		this.divBtns.form.btnCancel.set_visible(false);
        	}
        };

        this.divBtns_btnConfirm_onclick = function(obj,e)
        {
        	if(this.isReadonly == false) {
        		this.parent.closePopup(this.txt00.text);
        	} else {
        		this.parent.closePopup();
        	}
        };

        this.divBtns_btnCancel_onclick = function(obj,e)
        {
        	this.parent.closePopup();
        };

        this.cmmMultiLine_onsize = function(obj,e)
        {
        	var nLeft = (this.width - this.divBtns.width) / 2;
        	this.divBtns.set_left(nLeft);
        };

        this.sta00_onmouseenter = function(obj,e)
        {
        	this.set_cursor("nw-resize");
        };

        this.sta00_onmouseleave = function(obj,e)
        {
        	this.set_cursor("default");
        };

        this.cmmMultiLine_onmousemove = function(obj,e)
        {
        	if (this.isLButtonPress == true) {
           		this.parent.set_width(e.clientx+20);
           		this.parent.set_height(e.clienty+20);
        	}
        };

        this.sta00_onlbuttondown = function(obj,e)
        {
        	this.isLButtonPress = true;
        };

        this.sta00_onlbuttonup = function(obj,e)
        {
        	this.isLButtonPress = false;
        };

        this.cmmMultiLine_oncloseup= function(obj,e)
        {
        	this.oForm._WIDTH_MULTILINE = obj.width;
        	this.oForm._HEIGHT_MULTILINE = obj.height;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.cmmMultiLine_onload,this);
            this.addEventHandler("onsize",this.cmmMultiLine_onsize,this);
            this.addEventHandler("onmousemove",this.cmmMultiLine_onmousemove,this);
            this.divBtns.form.btnConfirm.addEventHandler("onclick",this.divBtns_btnConfirm_onclick,this);
            this.divBtns.form.btnCancel.addEventHandler("onclick",this.divBtns_btnCancel_onclick,this);
            this.sta00.addEventHandler("onmouseenter",this.sta00_onmouseenter,this);
            this.sta00.addEventHandler("onmousemove",this.sta00_onmousemove,this);
            this.sta00.addEventHandler("onlbuttondown",this.sta00_onlbuttondown,this);
            this.sta00.addEventHandler("onlbuttonup",this.sta00_onlbuttonup,this);
            this.sta00.addEventHandler("onmouseleave",this.sta00_onmouseleave,this);
        };
        this.loadIncludeScript("cmmMultiLine.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
