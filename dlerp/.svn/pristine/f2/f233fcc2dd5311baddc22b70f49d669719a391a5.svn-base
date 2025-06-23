(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmColorPicker_Pop");
            if (Form == this.constructor)
            {
                this._setFormPosition(245,240);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staBG","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("#ffffff");
            obj.set_text("");
            obj.set_border("1px solid darkgray");
            this.addChild(obj.name, obj);

            obj = new Div("divColor","5","5","235","200",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Edit("txtColor","5","divColor:5","100","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            obj.set_maxlength("6");
            obj.getSetter("type").set("string");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Div("divBack","txtColor:2","divColor:5","25","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid darkgray");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","190","210","50","25",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btnOK",null,"210","50","25","btnCancel:3",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_action");
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
        this.registerScript("cmmColorPicker_Pop.xfdl", function() {

        this.cmmColorPicker_Pop_onload = function(obj,e)
        {
        	var txtColor = this.txtColor;
        	var divBack = this.divBack;
        	var divColor = this.divColor._unique_id;
        	var el = document.getElementById(divColor);
        	el.innerHTML = "";
        	var divPicker = document.createElement("div");
        	divPicker.setAttribute("id", "picker");
        	divPicker.style.width = "200px";
        	divPicker.style.height = "200px";
        	divPicker.style.cursor = "crosshair";
        	var divSlide = document.createElement("div");
        	divSlide.setAttribute("id", "slide");
        	divSlide.style.width = "30px";
        	divSlide.style.height = "200px";
        	divSlide.style.left = "205px";
        	divSlide.style.cursor = "crosshair";
        	el.appendChild(divPicker);
        	el.appendChild(divSlide);

        	this._cpObj = ColorPicker(
        		document.getElementById('slide'),
        		document.getElementById('picker'),
        		function(hex, hsv, rgb) {
        			txtColor.set_value(hex.replace('#','').toUpperCase());
        			divBack.set_background(hex);
        		}
        	);

        	this.fnInit();
        };

        /**
        * @description 달력초기화
        */
        this.fnInit = function()
        {
        	if(new String(this.parent.initvalueid).valueOf() != "undefined") {
        		this._cpObj.setHex(this.parent.initvalueid);
        	} else {
        		this._cpObj.setHex('#ff0000');
        	}
        };

        this.txtColor_onchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue) {
        		var color = this.gfnTrim(e.postvalue).toUpperCase();

        		var hex = "#"+color;
        		if(/^#[0-9A-F]{6}$/i.test(hex)) {
        			this.divBack.set_background(hex);
        			this._cpObj.setHex(hex);
        		} else {
        			color = "";
        			this.divBack.set_background("transparent");
        		}
        		this.txtColor.set_value(color);
        	}
        };

        this.btnOK_onclick = function(obj,e)
        {
        	this.parent.closePopup(this.txtColor.value.toUpperCase());
        };

        this.btnCancel_onclick = function(obj,e)
        {
        	this.parent.closePopup();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.cmmColorPicker_Pop_onload,this);
            this.txtColor.addEventHandler("onchanged",this.txtColor_onchanged,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnOK.addEventHandler("onclick",this.btnOK_onclick,this);
        };
        this.loadIncludeScript("cmmColorPicker_Pop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
