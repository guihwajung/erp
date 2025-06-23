(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmColorPicker");
            this.set_scrolltype("none");
            if (Form == this.constructor)
            {
                this._setFormPosition(90,25);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("TextBox","0","0",null,null,"27","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_padding("0px 0px 0px 5px");
            obj.getSetter("type").set("string");
            obj.set_textAlign("left");
            obj.set_maxlength("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvColor","0","TextBox:0","245","240",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_url("cmm::cmmColorPicker_Pop.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnColor",null,"0","25",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid darkgray");
            obj.set_background("transparent");
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
            this._addPreloadList("fdl","cmm::cmmColorPicker_Pop.xfdl");
        };
        
        // User Script
        this.registerScript("cmmColorPicker.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath    cmm > cmmColorPicker (공통 색상 선택)
        *  @FileName 	cmmColorPicker.xfdl
        *  @Creator 	consulting
        *  @CreateDate 	2020.11.23
        *  @Desction    월달력
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        this.set_readonly = function(ro) {
        	this.TextBox.set_readonly(ro);
        };

        this.fnResetScroll = function() {
        	this.OrgWidth = this.parent.form.width;
        	this.OrgHeight = this.parent.form.height;
        	this.set_width(this.OrgWidth);
        	this.set_height(this.OrgHeight);
        	this.resetScroll();
        };

        /*
         *	색상 지정후 미리보기 색상 재로딩
         */
        this.fnColorPickerLoad = function() {
        	this.fnSetColor(this.TextBox.value);
        }

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.fnResetScroll();

        	this.parent.value = "";

        	if(!this.gfnIsNull(this.parent.readonly)) {
        		this.TextBox.set_readonly(this.parent.readonly);
        	}

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
        this.fnSetColor = function(val) {
        	var color = this.gfnTrim(val).toUpperCase();

        	var hex = "#"+color;
        	if(/^#[0-9A-F]{6}$/i.test(hex)) {
        		this.btnColor.set_background(hex);
        		this.pdvColor.form._cpObj.setHex(hex);
        	} else {
        		color = "";
        		this.btnColor.set_background("transparent");
        	}
        	this.TextBox.set_value(color);

        	this.parent.value = color;

        };

        this.TextBox_onchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue) {
        		this.fnSetColor(e.postvalue);
        	}
        };

        this.call_back = function(strId, val) {
        	if(!this.gfnIsNull(val) && val.length == 6) {
        		this.TextBox.set_value(val);
        		this.fnSetColor(val);
        	}
        };

        this.btnColor_onclick = function(obj,e)
        {
        	var oForm = this.getOwnerFrame().form.divWork.form;

        	var nTop = 0;
        	// 상단 팝업
        	if (oForm.getOffsetHeight() < (this.parent.getOffsetBottom() + this.pdvColor.getOffsetHeight())) {
        		nTop = -1 * (this.pdvColor.getOffsetHeight() + 1);
        	}
        	else {
        		nTop = this.parent.getOffsetHeight();
        	}

        	var nLeft = 0;
        	// 우측 정렬
        	if (oForm.getOffsetWidth() < (this.parent.getOffsetRight() + this.pdvColor.getOffsetWidth()) ) {
        		nLeft = this.parent.getOffsetWidth() - this.pdvColor.getOffsetWidth();
        	}
        	else {
        		nLeft = 0;
        	}

        	this.pdvColor.trackPopupByComponent(this,nLeft,nTop, null, null, "call_back");


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.TextBox.addEventHandler("onchanged",this.TextBox_onchanged,this);
            this.btnColor.addEventHandler("onclick",this.btnColor_onclick,this);
        };
        this.loadIncludeScript("cmmColorPicker.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
