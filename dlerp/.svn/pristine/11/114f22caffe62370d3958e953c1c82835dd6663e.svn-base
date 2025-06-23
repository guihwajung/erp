(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmCalMM");
            this.set_titletext("월 달력");
            if (Form == this.constructor)
            {
                this._setFormPosition(96,25);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new MaskEdit("TextBox","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autoselect("true");
            obj.set_value("");
            obj.set_text("");
            obj.set_format("####-##");
            obj.set_type("string");
            obj.set_textAlign("left");
            obj.set_maskchar(" ");
            obj.set_clipmode("excludespace");
            obj.set_padding("0px 0px 0px 5px");
            this.addChild(obj.name, obj);

            obj = new Button("btnCal","TextBox:-18","5","15","15",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("CalendarWeekDropButton");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvCal","0","TextBox:0","189","206",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_cssclass("pdv_WF_MonthCalBg");
            obj.set_url("cmm::cmmCalMM_Pop.xfdl");
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
            this._addPreloadList("fdl","cmm::cmmCalMM_Pop.xfdl");
        };
        
        // User Script
        this.registerScript("cmmCalMM.xfdl", function() {
        /**
        *  컨설팅 표준화 작업
        *  @MenuPath    cmm > cmmCalMM (공통 월달력)
        *  @FileName 	cmmCalMM.xfdl
        *  @Creator 	consulting
        *  @CreateDate 	2017.03.09
        *  @Desction    월달력
        ************** 소스 수정 이력 ***************************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.09     	consulting 	                최초 생성
        *  2017.10.17     	consulting       	        주석 정비
        *  2017.10.26     	consulting 	                주석 정비및 메세지팝업 공통으로 변경
        *******************************************************************************
        */

        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/
        this.fvToday;

        this.set_readonly = function(ro) {
        	this.TextBox.set_readonly(ro);
        	this.btnCal.set_enable(!ro);
        };

        /***********************************************************************************************
        * FORM EVENT 영역(onload)
        /***********************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.OrgHeight = this.parent.form.height;
        	this.set_height(this.OrgHeight);
        	if(this.OrgHeight == 20) {
        		this.btnCal.set_top(2);
        	}

        	//this.gfnFormOnLoad(this);//초기화[필수]
        	this.parent.value = "";
        	this.fvToday = this.gfnGetDate(); //오늘날자세팅

        	if(!this.gfnIsNull(this.parent.readonly)) {
        		this.TextBox.set_readonly(this.parent.readonly);
        		this.btnCal.set_enable(!this.parent.readonly);
        	}

        	this.fnInit();
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
        * @description 달력초기화
        */
        this.fnInit = function()
        {
        	this.set_width(this.parent.form.width);
        };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        /**
        * @description   Calendar_ondropdown 이벤트 시 popDiv컴포넌트 띄우기
        */

        this.TextBox_canchange = function(obj,e)
        {
        	if(e.prevalue != e.postvalue) {
        		if(this.gfnIsNull(e.postvalue)) {
        			return true;
        		} else {
        			var rtn = this.gfnIsDate(e.postvalue);
        			if(e.postvalue.length < 6) {
        				rtn = false;
        			}

        			this.gfnSetTimer(this, function() {
        				if(!rtn) {
        					obj.set_value("");
        				}
        				obj.setSelect();
        			}, 1);
        			return rtn;
        		}
        	}
        };

        this.TextBox_onchanged = function(obj,e)
        {
        	if(e.prevalue != e.postvalue) {
        		this.parent.value = e.postvalue;
        	}
        };

        this.btnCal_onclick = function(obj,e)
        {

        	var sDate = this.TextBox.value;
        	if( this.gfnIsNull(sDate) ) sDate = this.fvToday;

        	this.pdvCal.form.staYYYY.set_text(sDate.substr(0,4));

        	var oForm = this.gfnGetWorkForm(this.getOwnerFrame()); //this.getOwnerFrame().form.divWork.form;

        	var nTop = 0;
        	// 상단 팝업
        	if (oForm.getOffsetHeight() < (this.parent.getOffsetBottom() + this.pdvCal.getOffsetHeight())) {
        		nTop = -1 * (this.pdvCal.getOffsetHeight() + 1);
        	}
        	else {
        		nTop = this.parent.getOffsetHeight();
        	}

        	var nLeft = 0;
        	// 우측 정렬
        	if (oForm.getOffsetWidth() < (this.parent.getOffsetRight() + this.pdvCal.getOffsetWidth()) ) {
        		nLeft = this.parent.getOffsetWidth() - this.pdvCal.getOffsetWidth();
        	}
        	else {
        		nLeft = 0;
        	}

        	this.pdvCal.trackPopupByComponent(this,nLeft,nTop, null, null, "call_back");
        };

        this.call_back = function(strId, val) {
        	if(!this.gfnIsNull(val) && val.length == 6) {
        		this.TextBox.set_value(val);
        		this.parent.value = val;
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.TextBox.addEventHandler("onchanged",this.TextBox_onchanged,this);
            this.TextBox.addEventHandler("canchange",this.TextBox_canchange,this);
            this.btnCal.addEventHandler("onclick",this.btnCal_onclick,this);
        };
        this.loadIncludeScript("cmmCalMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
